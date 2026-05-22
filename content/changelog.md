---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-05-22T14:07:37.159Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**e1fba3c9** · 2026-05-21 10:55:56 — Audit binomial codes entry

<details><summary>files (3)</summary>

- `content/Figures/binomial-codes-figure.png`
- `content/References/hu-2019-binomial-bosonic-logical-qubit.md`
- `content/Zoo/binomial-codes.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**0c02ae84** · 2026-05-22 06:08:45 — zoo: pipeline queue-run processed=0 failed=0 (2026-05-22 10:08 UTC)

<details><summary>files (15)</summary>

- `MOCs/classical-hardware-moc.md`
- `MOCs/codes-moc.md`
- `MOCs/color-center-moc.md`
- `MOCs/cross-platform-moc.md`
- `MOCs/ion-trap-moc.md`
- `MOCs/molecular-moc.md`
- `MOCs/neutral-atom-moc.md`
- `MOCs/photonic-moc.md`
- `MOCs/qubit-zoo-index-moc.md`
- `MOCs/semiconducting-moc.md`
- `MOCs/spin-photon-moc.md`
- `MOCs/super-semi-moc.md`
- `MOCs/superconducting-moc.md`
- `MOCs/topological-moc.md`
- `MOCs/trapped-ion-moc.md`

</details>

**4f63a974** · 2026-05-21 10:48:41 — Add evergreen context to topological Zoo cluster

<details><summary>files (3)</summary>

- `Zoo/majorana-topological-qubit.md`
- `Zoo/planar-josephson-junction-qubit.md`
- `Zoo/tetron-qubit.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**547f4518** · 2026-05-22 06:08:30 — zoo: pipeline queue-run processed=0 failed=0 (2026-05-22 10:08 UTC)

<details><summary>files (40)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/exports/paper_feed/2026-05-22/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-05-21/calibration-json.err.log`
- `data/reports/2026-05-21/calibration.err.log`
- `data/reports/2026-05-21/calibration.json`
- `data/reports/2026-05-21/calibration.txt`
- `data/reports/2026-05-21/influence-scoring.log`
- `data/reports/2026-05-21/moc-build.log`
- `data/reports/2026-05-21/moc-generate.log`
- `data/reports/2026-05-21/ops-report-json.err.log`
- `data/reports/2026-05-21/ops-report.err.log`
- `data/reports/2026-05-21/ops-report.json`
- `data/reports/2026-05-21/ops-report.txt`
- `data/reports/2026-05-21/queue-summary.json`
- `data/reports/2026-05-21/queue.log`
- `data/reports/2026-05-21/run-summary.json`
- `data/reports/2026-05-21/run-summary.txt`
- `data/reports/2026-05-21/zettel-review.log`
- `data/reports/2026-05-21/zoo-links.log`
- `data/reports/2026-05-21/zoo-note-conventions.log`
- `data/reports/2026-05-21/zoo-source-references.log`
- `data/reports/2026-05-22/canon-coverage.log`
- `data/reports/2026-05-22/canon-coverage.md`
- `data/reports/2026-05-22/classics-build.log`
- `data/reports/2026-05-22/classics-resolve.log`
- `data/reports/2026-05-22/discovery.log`
- `data/reports/2026-05-22/preflight.log`
- `data/reports/2026-05-22/prioritize-classics.log`
- `data/reports/2026-05-22/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`
- `vault/Figures/binomial-codes-figure.jpg`

</details>

**9a40fa25** · 2026-05-21 11:05:16 — Record binomial-codes deep audit

<details><summary>files (4)</summary>

- `data/audit-tracker.json`
- `vault/Figures/binomial-codes-figure.png`
- `vault/Figures/binomial-codes-figure.svg`
- `vault/References/hu-2019-binomial-bosonic-logical-qubit.md`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-05-22 06:00:04 EDT
- **Papers added in last run:** 0
- **Failing steps:** `zoo_note_conventions`
