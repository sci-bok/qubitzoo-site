import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(scriptDir, "..")
const mocsDir = path.join(root, "content", "MOCs")
const indexPath = path.join(root, "content", "index.md")
const startMarker = "<!-- FAMILY_TABLE:START -->"
const endMarker = "<!-- FAMILY_TABLE:END -->"

const order = [
  "Superconducting",
  "Semiconducting",
  "Trapped Ion",
  "Neutral Atom",
  "Photonic",
  "Topological",
  "Super-Semi",
  "Color Center",
  "Spin-Photon",
  "Molecular",
  "Floating Electron",
  "Codes",
  "Cross-Platform",
  "Classical Hardware",
]

const metadata: Record<string, { icon: string; description: string; display?: string }> = {
  Superconducting: { icon: "🔵", description: "Josephson-junction qubits, circuits, couplers, and readout" },
  Semiconducting: { icon: "🟢", description: "Quantum-dot, donor, and semiconductor spin qubits" },
  "Trapped Ion": { icon: "🟡", description: "Trapped ions, shuttling architectures" },
  "Neutral Atom": { icon: "🟠", description: "Rydberg, clock, and nuclear-spin atom encodings" },
  Photonic: { icon: "🔴", description: "Discrete-variable and continuous-variable photonics" },
  Topological: {
    icon: "🟣",
    display: "Majorana / Topological Superconductor",
    description: "Majorana and topological-superconductor encodings",
  },
  "Super-Semi": { icon: "⚡", description: "Superconductor-semiconductor hybrid devices" },
  "Color Center": { icon: "💎", description: "Diamond, silicon, and silicon-carbide defects" },
  "Spin-Photon": { icon: "🔗", description: "Network-emitter and optical-interface qubits" },
  Molecular: { icon: "🧪", description: "Molecular spin and polar-molecule qubits" },
  "Floating Electron": { icon: "🌊", description: "Electrons hosted above cryogenic surfaces" },
  Codes: { icon: "🧩", description: "Bosonic and logical error-correcting encodings" },
  "Cross-Platform": { icon: "🧭", description: "Architectures, gates, and platform-independent primitives" },
  "Classical Hardware": { icon: "🛠️", description: "Cryogenic control and amplification infrastructure" },
}

function field(text: string, key: string): string {
  return text.match(new RegExp(`^${key}:\\s*['\"]?(.+?)['\"]?\\s*$`, "m"))?.[1] ?? ""
}

const families = new Map<string, { slug: string; count: number }>()
for (const filename of fs.readdirSync(mocsDir).filter((name) => name.endsWith("-moc.md"))) {
  if (filename === "qubit-zoo-index-moc.md") continue
  const text = fs.readFileSync(path.join(mocsDir, filename), "utf8")
  const family = field(text, "technology_family")
  const count = Number(field(text, "note_count"))
  if (family && Number.isFinite(count)) {
    families.set(family, { slug: filename.replace(/\.md$/, ""), count })
  }
}

const missing = order.filter((family) => !families.has(family))
if (missing.length > 0) {
  throw new Error(`Homepage family table is missing canonical MOCs: ${missing.join(", ")}`)
}

const lines = [
  startMarker,
  "| Family | Entries | Description |",
  "|--------|---------|-------------|",
]
for (const family of order) {
  const entry = families.get(family)!
  const meta = metadata[family]
  const display = meta.display ?? family
  // Quartz treats an ASCII slash inside an internal-link label as a path separator.
  // Use the visually equivalent division slash so the full public label survives rendering.
  const linkDisplay = display.replaceAll("/", "∕")
  lines.push(
    `| [${meta.icon} ${linkDisplay}](/MOCs/${entry.slug}) | ${entry.count} | ${meta.description} |`,
  )
}
lines.push(endMarker)

const current = fs.readFileSync(indexPath, "utf8")
const pattern = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`)
if (!pattern.test(current)) {
  throw new Error(`Homepage family-table markers are missing from ${indexPath}`)
}
const updated = current.replace(pattern, lines.join("\n"))
if (updated !== current) {
  fs.writeFileSync(indexPath, updated)
  console.log(`Updated homepage family table from ${families.size} MOCs`)
} else {
  console.log(`Homepage family table already current (${families.size} MOCs)`)
}
