import * as d3 from "d3"

interface GNode {
  id: string
  title: string
  family: string
  year: number | null
  status: string
  color: string
  influence: number
}

interface GEdge {
  source: string
  target: string
}

interface GenealogyData {
  nodes: GNode[]
  edges: GEdge[]
}

// Simulation node extends d3 force node
interface SimNode extends d3.SimulationNodeDatum, GNode {}

function getBaseUrl(): string {
  const base = document.querySelector("base")?.getAttribute("href")
  if (base) return base.endsWith("/") ? base : base + "/"
  const slug = document.body.getAttribute("data-slug") ?? ""
  const path = window.location.pathname
  const idx = slug ? path.lastIndexOf(slug) : -1
  if (idx > 0) return path.slice(0, idx)
  const segments = path.split("/").filter(Boolean)
  if (segments.length > 0 && window.location.hostname.includes("github.io")) {
    return "/" + segments[0] + "/"
  }
  return "/"
}

async function renderGenealogy() {
  const container = document.getElementById("genealogy-container")
  if (!container) return

  container.querySelectorAll("svg").forEach((el) => el.remove())

  const baseUrl = getBaseUrl()
  let data: GenealogyData
  try {
    const resp = await fetch(baseUrl + "static/genealogy-graph.json")
    data = await resp.json()
  } catch {
    container.innerHTML = "<p>Could not load genealogy data.</p>"
    return
  }

  const tooltip = document.getElementById("genealogy-tooltip")!

  const containerWidth = container.clientWidth
  const width = Math.min(800, containerWidth)
  const height = 500

  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`)
    .attr("width", width)
    .attr("height", height)
    .style("max-width", "800px")
    .style("margin", "0 auto")
    .style("display", "block")

  // Build simulation data
  const nodeMap = new Map<string, SimNode>()
  const simNodes: SimNode[] = data.nodes.map((n) => {
    const node: SimNode = { ...n }
    nodeMap.set(n.id, node)
    return node
  })

  // Only include edges where both endpoints exist
  const simLinks = data.edges
    .filter((e) => nodeMap.has(e.source) && nodeMap.has(e.target))
    .map((e) => ({ source: e.source, target: e.target }))

  // Force simulation
  const simulation = d3
    .forceSimulation(simNodes)
    .force(
      "link",
      d3
        .forceLink<SimNode, (typeof simLinks)[0]>(simLinks)
        .id((d) => d.id)
        .distance(50),
    )
    .force("charge", d3.forceManyBody().strength(-120))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force("collision", d3.forceCollide().radius(12))

  // Arrow markers
  svg
    .append("defs")
    .append("marker")
    .attr("id", "arrowhead")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 18)
    .attr("refY", 0)
    .attr("markerWidth", 5)
    .attr("markerHeight", 5)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr("fill", "var(--gray)")

  // Draw edges
  const linkSel = svg
    .append("g")
    .selectAll("line")
    .data(simLinks)
    .join("line")
    .attr("stroke", "var(--lightgray)")
    .attr("stroke-width", 1)
    .attr("marker-end", "url(#arrowhead)")

  // Draw nodes
  const nodeSel = svg
    .append("g")
    .selectAll("circle")
    .data(simNodes)
    .join("circle")
    .attr("r", (d) => 5 + (d.influence || 0) * 8)
    .attr("fill", (d) => d.color)
    .attr("stroke", "var(--light)")
    .attr("stroke-width", 1.5)
    .attr("cursor", "pointer")
    .on("mouseenter", function (_event: MouseEvent, d: SimNode) {
      d3.select(this).attr("stroke-width", 3).attr("stroke", "var(--dark)")
      const parts = [d.title, `(${d.family})`]
      if (d.year) parts.push(`${d.year}`)
      tooltip.textContent = parts.join(" · ")
      tooltip.style.opacity = "1"
    })
    .on("mousemove", (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      tooltip.style.left = event.clientX - rect.left + 12 + "px"
      tooltip.style.top = event.clientY - rect.top - 28 + "px"
    })
    .on("mouseleave", function () {
      d3.select(this).attr("stroke-width", 1.5).attr("stroke", "var(--light)")
      tooltip.style.opacity = "0"
    })
    .on("click", (_event: MouseEvent, d: SimNode) => {
      window.location.href = baseUrl + "Zoo/" + d.id
    })
    .call(
      d3
        .drag<SVGCircleElement, SimNode>()
        .on("start", (event: d3.D3DragEvent<SVGCircleElement, SimNode, SimNode>, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart()
          d.fx = d.x
          d.fy = d.y
        })
        .on("drag", (event: d3.D3DragEvent<SVGCircleElement, SimNode, SimNode>, d) => {
          d.fx = event.x
          d.fy = event.y
        })
        .on("end", (event: d3.D3DragEvent<SVGCircleElement, SimNode, SimNode>, d) => {
          if (!event.active) simulation.alphaTarget(0)
          d.fx = null
          d.fy = null
        }) as any,
    )

  // Labels for high-influence nodes
  const labelSel = svg
    .append("g")
    .selectAll("text")
    .data(simNodes.filter((n) => n.influence > 0.5))
    .join("text")
    .text((d) => {
      const name = d.title
      return name.length > 16 ? name.slice(0, 14) + "…" : name
    })
    .attr("font-size", "8px")
    .attr("fill", "var(--darkgray)")
    .attr("text-anchor", "middle")
    .attr("pointer-events", "none")
    .attr("dy", (d) => -(8 + (d.influence || 0) * 8))

  // Tick
  simulation.on("tick", () => {
    linkSel
      .attr("x1", (d: any) => d.source.x)
      .attr("y1", (d: any) => d.source.y)
      .attr("x2", (d: any) => d.target.x)
      .attr("y2", (d: any) => d.target.y)

    nodeSel.attr("cx", (d) => d.x!).attr("cy", (d) => d.y!)

    labelSel.attr("x", (d) => d.x!).attr("y", (d) => d.y!)
  })

  // Title
  svg
    .append("text")
    .attr("x", width / 2)
    .attr("y", 18)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--dark)")
    .attr("font-size", "13px")
    .attr("font-weight", "600")
    .text("Qubit Genealogy")
}

document.addEventListener("nav", () => {
  if (document.getElementById("genealogy-container")) {
    renderGenealogy()
  }
})
