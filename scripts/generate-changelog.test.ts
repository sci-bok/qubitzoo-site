import test, { describe } from "node:test"
import assert from "node:assert"
import {
  filterCommitsByPath,
  renderMarkdown,
  type ChangelogJson,
  type Commit,
} from "./generate-changelog"

const sampleCommits: Commit[] = [
  {
    sha: "abcdef12",
    iso: "2026-05-07T10:00:00-04:00",
    subject: "zoo: refresh fluxonium",
    files: ["Zoo/fluxonium.md", "Inbox/draft.md"],
  },
  {
    sha: "11112222",
    iso: "2026-05-07T08:00:00-04:00",
    subject: "meta: tidy",
    files: ["Meta/notes.md", "Inbox/scratch.md"],
  },
]

describe("filterCommitsByPath", () => {
  test("keeps only files inside allow-listed folders", () => {
    const filtered = filterCommitsByPath(sampleCommits, ["Zoo", "References"])
    assert.equal(filtered.length, 1)
    assert.deepEqual(filtered[0].files, ["Zoo/fluxonium.md"])
  })

  test("drops commits whose files are entirely outside allow-list", () => {
    const filtered = filterCommitsByPath(sampleCommits, ["References"])
    assert.equal(filtered.length, 0)
  })
})

describe("renderMarkdown", () => {
  const baseData: ChangelogJson = {
    schema: "qubitzoo.changelog.v1",
    generated_at_utc: "2026-05-08T12:00:00.000Z",
    window_hours: 24,
    site: { repo_root: "/x", commits: [] },
    vault: { repo_root: "/y", available: true, commits: [] },
    pipeline_repo: { repo_root: "/z", available: true, commits: [] },
    pipeline: null,
  }

  test("includes frontmatter, generated timestamp, and all three sections", () => {
    const md = renderMarkdown(baseData)
    assert.match(md, /^---\ntitle: Changelog/)
    assert.match(md, /Auto-generated at 2026-05-08T12:00:00.000Z/)
    assert.match(md, /## Public-facing site changes/)
    assert.match(md, /## Source\/content changes affecting the next publish/)
    assert.match(md, /## Backstage maintenance and automation changes/)
    assert.match(md, /## Pipeline status/)
  })

  test("explains gracefully when vault is unavailable", () => {
    const data = { ...baseData, vault: { ...baseData.vault, available: false } }
    const md = renderMarkdown(data)
    assert.match(md, /source vault \(qubit-zettelkasten\) is not available/)
  })

  test("renders a commit with its file list inside a details block", () => {
    const data: ChangelogJson = {
      ...baseData,
      site: { repo_root: "/x", commits: [sampleCommits[0]] },
    }
    const md = renderMarkdown(data)
    assert.match(md, /\*\*abcdef12\*\* · 2026-05-07 10:00:00 — zoo: refresh fluxonium/)
    assert.match(md, /<details><summary>files \(2\)<\/summary>/)
    assert.match(md, /- `Zoo\/fluxonium\.md`/)
  })

  test("renders pipeline repo commits in the maintenance section", () => {
    const data: ChangelogJson = {
      ...baseData,
      pipeline_repo: { repo_root: "/z", available: true, commits: [sampleCommits[0]] },
    }
    const md = renderMarkdown(data)
    assert.match(md, /## Backstage maintenance and automation changes/)
    assert.match(md, /pipeline\/automation repo/)
    assert.match(md, /\*\*abcdef12\*\* · 2026-05-07 10:00:00 — zoo: refresh fluxonium/)
  })

  test("summarises pipeline status with failing steps", () => {
    const data: ChangelogJson = {
      ...baseData,
      pipeline: {
        status: "degraded",
        mode: "full",
        timestamp_utc: "2026-05-08T10:00:01Z",
        timestamp_local: "2026-05-08 06:00:01 EDT",
        papers_added: 9,
        failing_steps: ["zoo_note_conventions"],
      },
    }
    const md = renderMarkdown(data)
    assert.match(md, /\*\*Status:\*\* `degraded`/)
    assert.match(md, /\*\*Papers added in last run:\*\* 9/)
    assert.match(md, /Failing steps:\*\* `zoo_note_conventions`/)
  })
})
