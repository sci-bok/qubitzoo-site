import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import matter from "gray-matter"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const FAMILY_COLORS: Record<string, string> = {
  Superconducting: "#3b82f6",
  Semiconducting: "#22c55e",
  "Ion Trap": "#eab308",
  "Neutral Atom": "#f97316",
  Photonic: "#ef4444",
  Topological: "#a855f7",
  Hybrid: "#06b6d4",
}
const DEFAULT_COLOR = "#6b7280"

interface Entry {
  name: string
  slug: string
  type: string
  status: string
  influence: number
  size: number
}

interface FamilyNode {
  name: string
  color: string
  children: Entry[]
}

interface SunburstData {
  name: string
  children: FamilyNode[]
}

const zooDir = path.resolve(__dirname, "../content/Zoo")
const outFile = path.resolve(__dirname, "../quartz/static/sunburst-data.json")

const families = new Map<string, Entry[]>()

if (!fs.existsSync(zooDir)) {
  console.warn(`Warning: Zoo directory not found at ${zooDir}; writing empty sunburst data.`)
} else {
  for (const file of fs.readdirSync(zooDir).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(zooDir, file), "utf-8")
    const { data: fm } = matter(raw)

    const family = (fm.technology_family as string) || "Other"
    const slug = "Zoo/" + file.replace(/\.md$/, "")

    const entry: Entry = {
      name: (fm.title as string) || file.replace(/\.md$/, ""),
      slug,
      type: (fm.entry_type as string) || "unknown",
      status: (fm.status as string) || "seed",
      influence: typeof fm.influence_score === "number" ? fm.influence_score : 0.5,
      size: 1,
    }

    if (!families.has(family)) families.set(family, [])
    families.get(family)!.push(entry)
  }
}

const data: SunburstData = {
  name: "Qubit Zoo",
  children: [...families.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([name, children]) => ({
      name,
      color: FAMILY_COLORS[name] ?? DEFAULT_COLOR,
      children: children.sort((a, b) => a.name.localeCompare(b.name)),
    })),
}

fs.writeFileSync(outFile, JSON.stringify(data, null, 2))
console.log(`Wrote sunburst data: ${data.children.length} families, ${[...families.values()].reduce((s, c) => s + c.length, 0)} entries → ${outFile}`)
