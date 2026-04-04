import * as d3 from "d3"

interface Entry {
  name: string
  slug?: string
  type?: string
  status?: string
  influence?: number
  size?: number
  color?: string
  children?: Entry[]
}

const FAMILY_MOC_SLUGS: Record<string, string> = {
  Superconducting: "MOCs/superconducting-moc",
  Semiconducting: "MOCs/semiconducting-moc",
  "Ion Trap": "MOCs/ion-trap-moc",
  "Trapped Ion": "MOCs/trapped-ion-moc",
  "Neutral Atom": "MOCs/neutral-atom-moc",
  Photonic: "MOCs/photonic-moc",
  Topological: "MOCs/topological-moc",
  Hybrid: "MOCs/super-semi-moc",
  "Super-Semi": "MOCs/super-semi-moc",
}

function getBaseUrl(): string {
  const url = new URL("./", document.baseURI)
  return url.pathname
}

async function renderSunburst() {
  const container = document.getElementById("sunburst-container")
  if (!container) return

  // Clear previous render
  container.querySelectorAll("svg").forEach((el) => el.remove())

  const baseUrl = getBaseUrl()

  let data: Entry
  try {
    const resp = await fetch(baseUrl + "static/sunburst-data.json")
    data = await resp.json()
  } catch {
    container.innerHTML = "<p>Could not load sunburst data.</p>"
    return
  }

  const tooltip = document.getElementById("sunburst-tooltip")!

  // Responsive sizing
  const maxWidth = 600
  const containerWidth = container.clientWidth
  const width = Math.min(maxWidth, containerWidth)
  const radius = width / 2

  // Build hierarchy
  const hierarchy = d3
    .hierarchy<Entry>(data)
    .sum((d) => (d.children ? 0 : (d.size ?? 1)))
    .sort((a, b) => (b.value ?? 0) - (a.value ?? 0))

  const partition = d3.partition<Entry>().size([2 * Math.PI, radius])
  const root = partition(hierarchy)

  // Create SVG
  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `${-radius} ${-radius} ${width} ${width}`)
    .attr("width", width)
    .attr("height", width)
    .style("max-width", `${maxWidth}px`)
    .style("margin", "0 auto")
    .style("display", "block")
    .style("font", "12px var(--bodyFont)")

  const arc = d3
    .arc<d3.HierarchyRectangularNode<Entry>>()
    .startAngle((d) => d.x0)
    .endAngle((d) => d.x1)
    .padAngle(0.005)
    .padRadius(radius / 3)
    .innerRadius((d) => d.y0)
    .outerRadius((d) => d.y1 - 1)

  // Draw arcs (skip root)
  const nodes = root.descendants().filter((d) => d.depth > 0)

  svg
    .selectAll("path")
    .data(nodes)
    .join("path")
    .attr("d", arc as any)
    .attr("fill", (d) => {
      if (d.depth === 1) return d.data.color ?? "#6b7280"
      // Leaf nodes inherit parent color
      const parent = d.parent
      const baseColor = parent?.data.color ?? "#6b7280"
      // Vary brightness slightly based on index
      const siblings = parent?.children ?? []
      const idx = siblings.indexOf(d)
      const lighten = 0.1 + (idx / Math.max(siblings.length, 1)) * 0.3
      return d3.interpolate(baseColor, "#ffffff")(lighten)
    })
    .attr("fill-opacity", (d) => {
      if (d.depth === 1) return 0.85
      return d.data.status === "seed" ? 0.5 : 0.8
    })
    .attr("stroke", "var(--light)")
    .attr("stroke-width", 0.5)
    .attr("cursor", "pointer")
    .on("mouseenter", function (_event, d) {
      d3.select(this).attr("fill-opacity", 1)
      if (d.depth === 1) {
        tooltip.textContent = d.data.name
      } else {
        const parts = [d.data.name]
        if (d.data.type) parts.push(d.data.type)
        if (d.data.status) parts.push(`(${d.data.status})`)
        tooltip.textContent = parts.join(" · ")
      }
      tooltip.style.opacity = "1"
    })
    .on("mousemove", (event) => {
      const rect = container.getBoundingClientRect()
      tooltip.style.left = event.clientX - rect.left + 12 + "px"
      tooltip.style.top = event.clientY - rect.top - 28 + "px"
    })
    .on("mouseleave", function (_, d) {
      d3.select(this).attr("fill-opacity", () => {
        if (d.depth === 1) return 0.85
        return d.data.status === "seed" ? 0.5 : 0.8
      })
      tooltip.style.opacity = "0"
    })
    .on("click", (_, d) => {
      if (d.depth === 2 && d.data.slug) {
        window.location.href = baseUrl + d.data.slug
      } else if (d.depth === 1) {
        const mocSlug = FAMILY_MOC_SLUGS[d.data.name]
        if (mocSlug) window.location.href = baseUrl + mocSlug
      }
    })
    // Entrance animation
    .attr("opacity", 0)
    .transition()
    .duration(600)
    .delay((_, i) => i * 8)
    .attr("opacity", 1)

  // Arc labels for families (inner ring)
  const familyNodes = nodes.filter((d) => d.depth === 1)
  svg
    .selectAll("text.family-label")
    .data(familyNodes)
    .join("text")
    .attr("class", "family-label")
    .attr("transform", (d) => {
      const angle = ((d.x0 + d.x1) / 2) * (180 / Math.PI) - 90
      const r = (d.y0 + d.y1) / 2
      return `rotate(${angle}) translate(${r},0) rotate(${angle > 90 ? 180 : 0})`
    })
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .attr("fill", "var(--darkgray)")
    .attr("font-size", "10px")
    .attr("font-weight", "600")
    .attr("pointer-events", "none")
    .text((d) => {
      // Only show label if arc is wide enough
      const angleDeg = ((d.x1 - d.x0) * 180) / Math.PI
      return angleDeg > 15 ? d.data.name : ""
    })

  // Center label
  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .attr("fill", "var(--dark)")
    .attr("font-size", "14px")
    .attr("font-weight", "700")
    .text("Qubit Zoo")
}

document.addEventListener("nav", () => {
  // Only render on index page
  if (document.getElementById("sunburst-container")) {
    renderSunburst()
  }
})
