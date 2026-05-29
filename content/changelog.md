---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-05-29T14:04:57.320Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**e7c73ddf** · 2026-05-28 10:28:35 — Audit kane qubit entry

<details><summary>files (3)</summary>

- `content/Figures/kane-qubit-figure.png`
- `content/References/edlbauer-2025-11-qubit-atom-processor-silicon.md`
- `content/Zoo/kane-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**9e976976** · 2026-05-29 06:10:39 — zoo: pipeline queue-run processed=0 failed=0 (2026-05-29 10:10 UTC)

<details><summary>files (13)</summary>

- `MOCs/classical-hardware-moc.md`
- `MOCs/codes-moc.md`
- `MOCs/color-center-moc.md`
- `MOCs/cross-platform-moc.md`
- `MOCs/molecular-moc.md`
- `MOCs/photonic-moc.md`
- `MOCs/qubit-zoo-index-moc.md`
- `MOCs/semiconducting-moc.md`
- `MOCs/spin-photon-moc.md`
- `MOCs/super-semi-moc.md`
- `MOCs/superconducting-moc.md`
- `MOCs/topological-moc.md`
- `MOCs/trapped-ion-moc.md`

</details>

**56105bde** · 2026-05-28 10:51:21 — Add curated synthesis to atomic family MOCs

<details><summary>files (2)</summary>

- `MOCs/ion-trap-moc.md`
- `MOCs/neutral-atom-moc.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**2723d83f** · 2026-05-29 06:10:36 — zoo: pipeline queue-run processed=0 failed=0 (2026-05-29 10:10 UTC)

<details><summary>files (39)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/exports/paper_feed/2026-05-29/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-05-28/calibration-json.err.log`
- `data/reports/2026-05-28/calibration.err.log`
- `data/reports/2026-05-28/calibration.json`
- `data/reports/2026-05-28/calibration.txt`
- `data/reports/2026-05-28/influence-scoring.log`
- `data/reports/2026-05-28/moc-build.log`
- `data/reports/2026-05-28/moc-generate.log`
- `data/reports/2026-05-28/ops-report-json.err.log`
- `data/reports/2026-05-28/ops-report.err.log`
- `data/reports/2026-05-28/ops-report.json`
- `data/reports/2026-05-28/ops-report.txt`
- `data/reports/2026-05-28/queue-summary.json`
- `data/reports/2026-05-28/queue.log`
- `data/reports/2026-05-28/run-summary.json`
- `data/reports/2026-05-28/run-summary.txt`
- `data/reports/2026-05-28/zettel-review.log`
- `data/reports/2026-05-28/zoo-links.log`
- `data/reports/2026-05-28/zoo-note-conventions.log`
- `data/reports/2026-05-28/zoo-source-references.log`
- `data/reports/2026-05-29/canon-coverage.log`
- `data/reports/2026-05-29/canon-coverage.md`
- `data/reports/2026-05-29/classics-build.log`
- `data/reports/2026-05-29/classics-resolve.log`
- `data/reports/2026-05-29/discovery.log`
- `data/reports/2026-05-29/preflight.log`
- `data/reports/2026-05-29/prioritize-classics.log`
- `data/reports/2026-05-29/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`

</details>

**952b1648** · 2026-05-28 10:28:42 — Update Kane audit tracker

<details><summary>files (2)</summary>

- `data/audit-tracker.json`
- `vault/Figures/kane-qubit-figure.png`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-05-29 06:00:05 EDT
- **Papers added in last run:** 0
- **Failing steps:** `zoo_note_conventions`
