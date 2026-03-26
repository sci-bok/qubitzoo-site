import * as d3 from "d3"

interface Station {
  id: string
  name: string
  year: number | null
  family: string
  status: string
  x: number
  y: number
  labelPos?: string
  transfer?: boolean
}

interface Line {
  id: string
  name: string
  color: string
  dashed: boolean
  segments: [string, string][]
}

interface TransitData {
  lines: Line[]
  stations: Station[]
}

function getBaseUrl(): string {
  const url = new URL("./", document.baseURI)
  return url.pathname
}

async function renderTransitMap() {
  const container = document.getElementById("transit-map-container")
  if (!container) return

  container.querySelectorAll("svg").forEach((el) => el.remove())

  const baseUrl = getBaseUrl()
  let data: TransitData

  try {
    const resp = await fetch(baseUrl + "static/transit-map-data.json")
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
    data = await resp.json()
  } catch (err) {
    console.error("[transit-map] fetch failed:", err)
    container.innerHTML = `<p>Could not load transit map data.</p>`
    return
  }

  const tooltip = document.getElementById("transit-map-tooltip")!

  // Build station lookup
  const stationMap = new Map<string, Station>()
  data.stations.forEach((s) => stationMap.set(s.id, s))

  // SVG dimensions
  const svgWidth = 1200
  const svgHeight = 750
  const containerWidth = container.clientWidth
  const scale = Math.min(1, containerWidth / svgWidth)

  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
    .attr("width", containerWidth)
    .attr("height", svgHeight * scale)
    .style("display", "block")
    .style("margin", "0 auto")

  // Zoom group
  const g = svg.append("g")

  const zoom = d3
    .zoom<SVGSVGElement, unknown>()
    .scaleExtent([0.5, 3])
    .on("zoom", (event) => {
      g.attr("transform", event.transform)
    })

  svg.call(zoom)

  // Title
  g.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", 30)
    .attr("text-anchor", "middle")
    .attr("class", "transit-title")
    .attr("font-size", "20px")
    .text("🚇 Qubit Zoo Transit Map")

  // Draw lines
  for (const line of data.lines) {
    for (const [fromId, toId] of line.segments) {
      const from = stationMap.get(fromId)
      const to = stationMap.get(toId)
      if (!from || !to) continue

      // Metro-style routing: go horizontal first, then vertical (or 45°)
      const midX = to.x
      const midY = from.y

      const pathData = `M ${from.x} ${from.y} L ${midX} ${midY} L ${to.x} ${to.y}`

      const path = g
        .append("path")
        .attr("d", pathData)
        .attr("fill", "none")
        .attr("stroke", line.color)
        .attr("stroke-width", 4)
        .attr("stroke-linecap", "round")
        .attr("stroke-linejoin", "round")
        .attr("opacity", 0.8)

      if (line.dashed) {
        path.attr("stroke-dasharray", "8,4")
      }
    }
  }

  // Draw stations
  for (const station of data.stations) {
    const isTransfer = station.transfer === true
    const stationColor =
      data.lines.find((l) => l.segments.some((s) => s[0] === station.id || s[1] === station.id))
        ?.color || "#6b7280"

    const group = g
      .append("g")
      .attr("class", "transit-station")
      .attr("transform", `translate(${station.x}, ${station.y})`)

    // Station circle
    if (isTransfer) {
      // Transfer station: larger, white fill, thick border
      group
        .append("circle")
        .attr("r", 8)
        .attr("fill", "white")
        .attr("stroke", "#333")
        .attr("stroke-width", 2.5)

      // Inner colored dot
      group.append("circle").attr("r", 3).attr("fill", stationColor)
    } else {
      group
        .append("circle")
        .attr("r", 5)
        .attr("fill", stationColor)
        .attr("stroke", "white")
        .attr("stroke-width", 1.5)
    }

    // Label
    const labelY =
      station.labelPos === "above"
        ? -10
        : station.labelPos === "below"
          ? 16
          : station.labelPos === "left"
            ? 2
            : station.labelPos === "right"
              ? 2
              : -10

    const labelX = station.labelPos === "left" ? -12 : station.labelPos === "right" ? 12 : 0

    const anchor =
      station.labelPos === "left" ? "end" : station.labelPos === "right" ? "start" : "middle"

    group
      .append("text")
      .attr("x", labelX)
      .attr("y", labelY)
      .attr("text-anchor", anchor)
      .text(station.name)

    // Interactions
    group
      .on("mouseover", (_event) => {
        const yearStr = station.year ? `${station.year}` : ""
        tooltip.innerHTML = `
          <div class="tt-name">${station.name}</div>
          <div class="tt-meta">${station.family} · ${yearStr} · ${station.status}</div>
        `
        tooltip.style.opacity = "1"
      })
      .on("mousemove", (event) => {
        const rect = container.getBoundingClientRect()
        tooltip.style.left = `${event.clientX - rect.left + 12}px`
        tooltip.style.top = `${event.clientY - rect.top - 10}px`
      })
      .on("mouseout", () => {
        tooltip.style.opacity = "0"
      })
      .on("click", () => {
        window.location.href = baseUrl + "Zoo/" + station.id
      })
  }

  // Legend
  const legendX = 20
  let legendY = svgHeight - 160

  g.append("text")
    .attr("x", legendX)
    .attr("y", legendY - 10)
    .attr("font-size", "12px")
    .attr("font-weight", "600")
    .attr("fill", "var(--dark, #333)")
    .text("Lines")

  const uniqueLines = data.lines.filter(
    (l, i, arr) => arr.findIndex((l2) => l2.name === l.name) === i,
  )

  for (const line of uniqueLines) {
    const lg = g.append("g").attr("transform", `translate(${legendX}, ${legendY})`)

    lg.append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", 24)
      .attr("y2", 0)
      .attr("stroke", line.color)
      .attr("stroke-width", 3)
      .attr("stroke-dasharray", line.dashed ? "6,3" : "none")

    lg.append("text")
      .attr("x", 30)
      .attr("y", 4)
      .attr("font-size", "10px")
      .attr("fill", "var(--darkgray, #666)")
      .text(line.name)

    legendY += 16
  }

  // Transfer station legend
  legendY += 8
  const tlg = g.append("g").attr("transform", `translate(${legendX}, ${legendY})`)
  tlg
    .append("circle")
    .attr("r", 6)
    .attr("fill", "white")
    .attr("stroke", "#333")
    .attr("stroke-width", 2)
  tlg
    .append("text")
    .attr("x", 14)
    .attr("y", 4)
    .attr("font-size", "10px")
    .attr("fill", "var(--darkgray, #666)")
    .text("Transfer station")
}

document.addEventListener("nav", () => {
  renderTransitMap()
})

renderTransitMap()
