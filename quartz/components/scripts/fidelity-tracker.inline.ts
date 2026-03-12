import * as d3 from "d3"

interface Metric {
  value: number
  raw: string
  ref?: string
}

interface Entry {
  slug: string
  title: string
  year: number | null
  status: string
  influence: number
  metrics: {
    "1Q_fidelity"?: Metric
    "2Q_fidelity"?: Metric
    readout?: Metric
    T1?: { value_us: number; raw: string }
    T2?: { value_us: number; raw: string }
  }
}

interface Family {
  name: string
  entries: Entry[]
}

interface FidelityData {
  families: Family[]
  thresholds: { label: string; value: number }[]
}

const FAMILY_COLORS: Record<string, string> = {
  Superconducting: "#3b82f6",
  Semiconducting: "#22c55e",
  "Ion Trap": "#eab308",
  "Neutral Atom": "#f97316",
  Photonic: "#ef4444",
  Topological: "#a855f7",
  "Super-Semi": "#06b6d4",
  "Solid State": "#64748b",
}

function getBaseUrl(): string {
  const base = document.querySelector("base")?.getAttribute("href") ?? "/"
  return base.endsWith("/") ? base : base + "/"
}

async function renderFidelityTracker() {
  const container = document.getElementById("fidelity-container")
  if (!container) return

  container.querySelectorAll("svg").forEach((el) => el.remove())

  const baseUrl = getBaseUrl()
  let data: FidelityData
  try {
    const resp = await fetch(baseUrl + "static/fidelity-tracker.json")
    data = await resp.json()
  } catch {
    container.innerHTML = "<p>Could not load fidelity data.</p>"
    return
  }

  const tooltip = document.getElementById("fidelity-tooltip")!

  // Collect all entries with 2Q fidelity for the main chart
  type PlotEntry = Entry & { family: string }
  const allEntries: PlotEntry[] = []
  for (const fam of data.families) {
    for (const e of fam.entries) {
      allEntries.push({ ...e, family: fam.name })
    }
  }

  // Sort by 2Q fidelity descending, then 1Q
  allEntries.sort((a, b) => {
    const a2 = a.metrics["2Q_fidelity"]?.value ?? 0
    const b2 = b.metrics["2Q_fidelity"]?.value ?? 0
    if (b2 !== a2) return b2 - a2
    return (b.metrics["1Q_fidelity"]?.value ?? 0) - (a.metrics["1Q_fidelity"]?.value ?? 0)
  })

  // Chart dimensions
  const margin = { top: 30, right: 20, bottom: 80, left: 60 }
  const containerWidth = container.clientWidth
  const width = Math.min(700, containerWidth) - margin.left - margin.right
  const height = 380 - margin.top - margin.bottom

  const svg = d3
    .select(container)
    .append("svg")
    .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .style("max-width", "700px")
    .style("margin", "0 auto")
    .style("display", "block")
    .style("font", "11px var(--bodyFont)")

  const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`)

  // X scale: entries
  const x = d3
    .scaleBand()
    .domain(allEntries.map((e) => e.slug))
    .range([0, width])
    .padding(0.3)

  // Y scale: fidelity (log-scale of error rate: 100 - fidelity)
  const yMin = 90
  const y = d3.scaleLinear().domain([yMin, 100]).range([height, 0])

  // Threshold lines
  for (const t of data.thresholds) {
    if (t.value > yMin) {
      g.append("line")
        .attr("x1", 0)
        .attr("x2", width)
        .attr("y1", y(t.value))
        .attr("y2", y(t.value))
        .attr("stroke", "var(--gray)")
        .attr("stroke-dasharray", "4,4")
        .attr("stroke-width", 0.5)

      g.append("text")
        .attr("x", width + 2)
        .attr("y", y(t.value) + 3)
        .attr("fill", "var(--gray)")
        .attr("font-size", "9px")
        .text(t.label)
    }
  }

  // Y axis
  g.append("g")
    .call(
      d3
        .axisLeft(y)
        .tickValues([90, 95, 99, 99.5, 99.9, 99.95, 99.99, 99.999, 100])
        .tickFormat((d) => `${d}%`),
    )
    .selectAll("text")
    .attr("font-size", "9px")

  // Bars: 2Q fidelity (primary) + 1Q fidelity (overlay)
  const barWidth = x.bandwidth()

  // 2Q bars
  g.selectAll(".bar-2q")
    .data(allEntries.filter((e) => e.metrics["2Q_fidelity"]))
    .join("rect")
    .attr("class", "bar-2q")
    .attr("x", (d) => x(d.slug)!)
    .attr("y", (d) => y(Math.min(d.metrics["2Q_fidelity"]!.value, 100)))
    .attr("width", barWidth)
    .attr(
      "height",
      (d) => height - y(Math.min(Math.max(d.metrics["2Q_fidelity"]!.value, yMin), 100)),
    )
    .attr("fill", (d) => FAMILY_COLORS[d.family] ?? "#6b7280")
    .attr("fill-opacity", 0.8)
    .attr("rx", 2)
    .attr("cursor", "pointer")
    .on("mouseenter", function (_event: MouseEvent, d: PlotEntry) {
      d3.select(this).attr("fill-opacity", 1)
      const parts = [d.title, `(${d.family})`]
      if (d.metrics["2Q_fidelity"]) parts.push(`2Q: ${d.metrics["2Q_fidelity"]!.raw}`)
      if (d.metrics["1Q_fidelity"]) parts.push(`1Q: ${d.metrics["1Q_fidelity"]!.raw}`)
      tooltip.textContent = parts.join(" · ")
      tooltip.style.opacity = "1"
    })
    .on("mousemove", (event: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      tooltip.style.left = event.clientX - rect.left + 12 + "px"
      tooltip.style.top = event.clientY - rect.top - 28 + "px"
    })
    .on("mouseleave", function () {
      d3.select(this).attr("fill-opacity", 0.8)
      tooltip.style.opacity = "0"
    })
    .on("click", (_event: MouseEvent, d: PlotEntry) => {
      window.location.href = baseUrl + "Zoo/" + d.slug
    })

  // 1Q markers (diamond)
  g.selectAll(".marker-1q")
    .data(allEntries.filter((e) => e.metrics["1Q_fidelity"]))
    .join("path")
    .attr("class", "marker-1q")
    .attr(
      "transform",
      (d) =>
        `translate(${x(d.slug)! + barWidth / 2}, ${y(Math.min(d.metrics["1Q_fidelity"]!.value, 100))})`,
    )
    .attr("d", d3.symbol(d3.symbolDiamond, 40)())
    .attr("fill", "var(--dark)")
    .attr("stroke", "var(--light)")
    .attr("stroke-width", 0.5)
    .attr("pointer-events", "none")

  // X axis labels (rotated)
  g.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat((slug) => {
      const e = allEntries.find((e) => e.slug === slug)
      const name = e?.title ?? slug
      return name.length > 14 ? name.slice(0, 12) + "…" : name
    }))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .attr("text-anchor", "end")
    .attr("font-size", "8px")
    .attr("dx", "-0.5em")
    .attr("dy", "0.15em")

  // Title
  svg
    .append("text")
    .attr("x", (width + margin.left + margin.right) / 2)
    .attr("y", 16)
    .attr("text-anchor", "middle")
    .attr("fill", "var(--dark)")
    .attr("font-size", "13px")
    .attr("font-weight", "600")
    .text("Cross-Modality Gate Fidelity")

  // Legend
  const legendG = svg.append("g").attr("transform", `translate(${margin.left + 5}, 24)`)
  legendG
    .append("path")
    .attr("d", d3.symbol(d3.symbolDiamond, 30)())
    .attr("fill", "var(--dark)")
  legendG
    .append("text")
    .attr("x", 8)
    .attr("y", 4)
    .attr("font-size", "9px")
    .attr("fill", "var(--darkgray)")
    .text("◆ = 1Q fidelity    Bar = 2Q fidelity")
}

document.addEventListener("nav", () => {
  if (document.getElementById("fidelity-container")) {
    renderFidelityTracker()
  }
})
