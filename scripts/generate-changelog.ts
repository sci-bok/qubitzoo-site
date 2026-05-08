#!/usr/bin/env -S npx tsx
/**
 * Generate /changelog page (content/changelog.md) and machine-readable
 * sidecar (content/_meta/changelog.json) summarising the last 24 hours of
 * activity across the site repo, the source vault, and the pipeline repo.
 *
 * Designed to be safe on CI: if sibling repos or git are missing, the
 * existing checked-in changelog is left untouched and the script exits 0.
 */

import { execFileSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SITE_ROOT = path.resolve(__dirname, "..")
const VAULT_ROOT = path.resolve(SITE_ROOT, "../qubit-zettelkasten")
const PIPELINE_ROOT = path.resolve(SITE_ROOT, "../qubit-zoo-zettelkasten")
const PIPELINE_SUMMARY = path.join(PIPELINE_ROOT, "data/reports/latest-run-summary.json")

const CONTENT_DIR = path.join(SITE_ROOT, "content")
const META_DIR = path.join(CONTENT_DIR, "_meta")
const MD_OUT = path.join(CONTENT_DIR, "changelog.md")
const JSON_OUT = path.join(META_DIR, "changelog.json")

const WINDOW_HOURS = 24
const VAULT_CONTENT_FOLDERS = ["Zoo", "References", "Evergreen", "MOCs", "Figures"]

interface Commit {
  sha: string
  iso: string
  subject: string
  files: string[]
}

interface PipelineSummary {
  status: string
  mode: string
  timestamp_utc: string
  timestamp_local?: string
  papers_added?: number
  failing_steps: string[]
}

interface ChangelogJson {
  schema: "qubitzoo.changelog.v1"
  generated_at_utc: string
  window_hours: number
  site: { repo_root: string; commits: Commit[] }
  vault: { repo_root: string; available: boolean; commits: Commit[] }
  pipeline: PipelineSummary | null
}

function isGitRepo(dir: string): boolean {
  if (!fs.existsSync(path.join(dir, ".git"))) return false
  try {
    execFileSync("git", ["-C", dir, "rev-parse", "--git-dir"], { stdio: "ignore" })
    return true
  } catch {
    return false
  }
}

function gitLog(dir: string, sinceHours: number): Commit[] {
  // Use ASCII record/unit separators so subjects with arbitrary punctuation
  // are safe. The RS is placed *before* each commit header so the file list
  // emitted by --name-only after the header attaches to the correct record.
  const RS = "\x1e"
  const FS = "\x1f"
  const out = execFileSync(
    "git",
    [
      "-C",
      dir,
      "log",
      `--since=${sinceHours} hours ago`,
      `--pretty=format:${RS}%H${FS}%aI${FS}%s`,
      "--name-only",
    ],
    { encoding: "utf8" },
  )

  const records = out.split(RS).map((r) => r.trim()).filter(Boolean)
  return records.map((rec) => {
    const [header, ...fileLines] = rec.split("\n")
    const [sha, iso, subject] = header.split(FS)
    const files = fileLines.map((l) => l.trim()).filter(Boolean)
    return { sha: sha.slice(0, 8), iso, subject, files }
  })
}

function filterCommitsByPath(commits: Commit[], folders: string[]): Commit[] {
  return commits
    .map((c) => ({
      ...c,
      files: c.files.filter((f) => folders.some((folder) => f.startsWith(`${folder}/`))),
    }))
    .filter((c) => c.files.length > 0)
}

function readPipelineSummary(): PipelineSummary | null {
  if (!fs.existsSync(PIPELINE_SUMMARY)) return null
  try {
    const raw = JSON.parse(fs.readFileSync(PIPELINE_SUMMARY, "utf8"))
    const exitCodes = (raw.exit_codes ?? {}) as Record<string, number>
    const failing = Object.entries(exitCodes)
      .filter(([, code]) => code !== 0)
      .map(([step]) => step)
    return {
      status: raw.status ?? "unknown",
      mode: raw.mode ?? "unknown",
      timestamp_utc: raw.timestamp_utc ?? "",
      timestamp_local: raw.timestamp_local,
      papers_added: typeof raw.papers_added === "number" ? raw.papers_added : undefined,
      failing_steps: failing,
    }
  } catch (err) {
    console.warn(`changelog: failed to parse pipeline summary: ${(err as Error).message}`)
    return null
  }
}

function fmtDetailsList(label: string, files: string[]): string {
  if (files.length === 0) return ""
  const items = files.map((f) => `- \`${f}\``).join("\n")
  return `<details><summary>${label} (${files.length})</summary>\n\n${items}\n\n</details>`
}

function renderCommit(c: Commit): string {
  const date = c.iso.replace("T", " ").replace(/\+\d{2}:\d{2}$/, "").replace(/-\d{2}:\d{2}$/, "")
  const head = `**${c.sha}** · ${date} — ${c.subject}`
  const list = fmtDetailsList("files", c.files)
  return list ? `${head}\n\n${list}` : head
}

function renderMarkdown(data: ChangelogJson): string {
  const lines: string[] = []
  lines.push("---")
  lines.push("title: Changelog")
  lines.push("description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).")
  lines.push("---")
  lines.push("")
  lines.push(
    `_Auto-generated at ${data.generated_at_utc} (UTC). Covers the last ${data.window_hours} hours. ` +
      `If a window passes with no activity, sections will be empty._`,
  )
  lines.push("")

  lines.push("## Public-facing site changes")
  lines.push("")
  lines.push(
    "Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.",
  )
  lines.push("")
  if (data.site.commits.length === 0) {
    lines.push("_No site commits in the last 24 hours._")
  } else {
    for (const c of data.site.commits) lines.push(renderCommit(c) + "\n")
  }
  lines.push("")

  lines.push("## Source/content changes affecting the next publish")
  lines.push("")
  if (!data.vault.available) {
    lines.push(
      "_The source vault (qubit-zettelkasten) is not available in this build environment, " +
        "so backstage changes are not summarised here. They will appear after the next sync from a developer machine._",
    )
  } else if (data.vault.commits.length === 0) {
    lines.push("_No content-affecting vault commits in the last 24 hours._")
  } else {
    lines.push(
      `Commits in the source vault touching ${VAULT_CONTENT_FOLDERS.map((f) => `\`${f}/\``).join(", ")}. ` +
        "These are queued to appear on the site at the next sync + deploy.",
    )
    lines.push("")
    for (const c of data.vault.commits) lines.push(renderCommit(c) + "\n")
  }
  lines.push("")

  lines.push("## Pipeline status")
  lines.push("")
  if (!data.pipeline) {
    lines.push("_No pipeline summary available in this build environment._")
  } else {
    const p = data.pipeline
    lines.push(`- **Status:** \`${p.status}\` (mode: \`${p.mode}\`)`)
    lines.push(`- **Last run:** ${p.timestamp_local ?? p.timestamp_utc}`)
    if (typeof p.papers_added === "number") {
      lines.push(`- **Papers added in last run:** ${p.papers_added}`)
    }
    if (p.failing_steps.length > 0) {
      lines.push(`- **Failing steps:** ${p.failing_steps.map((s) => `\`${s}\``).join(", ")}`)
    } else {
      lines.push("- **Failing steps:** none")
    }
  }
  lines.push("")
  return lines.join("\n")
}

function main(): void {
  // Site repo is required — if we cannot read git here we cannot generate
  // anything, so leave the existing changelog page untouched.
  if (!isGitRepo(SITE_ROOT)) {
    console.warn("changelog: site repo is not a git checkout; leaving existing changelog untouched.")
    return
  }

  const vaultAvailable = isGitRepo(VAULT_ROOT)
  const pipelineAvailable = fs.existsSync(PIPELINE_SUMMARY)

  // CI safety: if neither sibling source is reachable, the only thing we
  // could write is a degraded "site commits only" page that would clobber
  // the richer one a developer committed from their machine. Bail out.
  if (!vaultAvailable && !pipelineAvailable) {
    console.warn(
      "changelog: neither sibling vault nor pipeline summary found — " +
        "preserving existing checked-in changelog.",
    )
    return
  }

  if (!vaultAvailable) {
    console.warn(`changelog: vault not found at ${VAULT_ROOT}; will skip vault section.`)
  }

  const siteCommits = gitLog(SITE_ROOT, WINDOW_HOURS)
  const vaultCommitsRaw = vaultAvailable ? gitLog(VAULT_ROOT, WINDOW_HOURS) : []
  const vaultCommits = filterCommitsByPath(vaultCommitsRaw, VAULT_CONTENT_FOLDERS)
  const pipeline = readPipelineSummary()

  const data: ChangelogJson = {
    schema: "qubitzoo.changelog.v1",
    generated_at_utc: new Date().toISOString(),
    window_hours: WINDOW_HOURS,
    site: { repo_root: SITE_ROOT, commits: siteCommits },
    vault: { repo_root: VAULT_ROOT, available: vaultAvailable, commits: vaultCommits },
    pipeline,
  }

  fs.mkdirSync(META_DIR, { recursive: true })
  fs.writeFileSync(JSON_OUT, JSON.stringify(data, null, 2) + "\n")
  fs.writeFileSync(MD_OUT, renderMarkdown(data))

  console.log(
    `changelog: wrote ${path.relative(SITE_ROOT, MD_OUT)} ` +
      `(site=${siteCommits.length}, vault=${vaultCommits.length}, ` +
      `pipeline=${pipeline?.status ?? "n/a"})`,
  )
}

// Exported for tests.
export {
  filterCommitsByPath,
  renderMarkdown,
  type ChangelogJson,
  type Commit,
  type PipelineSummary,
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === __filename
if (isMain) {
  try {
    main()
  } catch (err) {
    // Never fail the build over the changelog — log and exit cleanly so the
    // pre-existing checked-in page is used.
    console.warn(`changelog: skipped (${(err as Error).message})`)
  }
}
