---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-06-12T14:03:56.298Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**0c9f9a54** · 2026-06-11 10:24:30 — Audit tetron qubit entry

<details><summary>files (5)</summary>

- `content/Figures/tetron-qubit-figure.png`
- `content/References/aghaee-2023-topological-gap-protocol.md`
- `content/References/aghaee-2025-interferometric-parity.md`
- `content/References/aghaee-2025-majorana-1.md`
- `content/Zoo/tetron-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**b1b34c03** · 2026-06-12 06:03:10 — zoo: pipeline queue-run processed=10 failed=0 (2026-06-12 10:03 UTC)

<details><summary>files (17)</summary>

- `Figures/tetron-qubit-figure.png`
- `MOCs/classical-hardware-moc.md`
- `MOCs/codes-moc.md`
- `MOCs/color-center-moc.md`
- `MOCs/cross-platform-moc.md`
- `MOCs/ion-trap-moc.md`
- `MOCs/molecular-moc.md`
- `MOCs/neutral-atom-moc.md`
- `MOCs/photonic-moc.md`
- `MOCs/semiconducting-moc.md`
- `MOCs/spin-photon-moc.md`
- `MOCs/superconducting-moc.md`
- `MOCs/trapped-ion-moc.md`
- `References/baumann-2026-where-a-quantum-reservoir.md`
- `References/dipojono-2026-representation-induced-symmetry-trapping-in.md`
- `References/georgiadis-2026-simple-analytical-flux-tuned-iswap.md`
- `References/machino-2026-qube-qubex-an-integrated-hardware-software.md`

</details>

**413f67d9** · 2026-06-11 10:48:11 — Clarify topological vs super-semi MOC boundary

<details><summary>files (3)</summary>

- `MOCs/qubit-zoo-index-moc.md`
- `MOCs/super-semi-moc.md`
- `MOCs/topological-moc.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**867fcb64** · 2026-06-12 06:03:07 — zoo: pipeline queue-run processed=10 failed=0 (2026-06-12 10:03 UTC)

<details><summary>files (41)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/discovery_queue.json`
- `data/exports/paper_feed/2026-06-12/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-06-11/calibration-json.err.log`
- `data/reports/2026-06-11/calibration.err.log`
- `data/reports/2026-06-11/calibration.json`
- `data/reports/2026-06-11/calibration.txt`
- `data/reports/2026-06-11/influence-scoring.log`
- `data/reports/2026-06-11/moc-build.log`
- `data/reports/2026-06-11/moc-generate.log`
- `data/reports/2026-06-11/ops-report-json.err.log`
- `data/reports/2026-06-11/ops-report.err.log`
- `data/reports/2026-06-11/ops-report.json`
- `data/reports/2026-06-11/ops-report.txt`
- `data/reports/2026-06-11/queue-summary.json`
- `data/reports/2026-06-11/queue.log`
- `data/reports/2026-06-11/run-summary.json`
- `data/reports/2026-06-11/run-summary.txt`
- `data/reports/2026-06-11/zettel-review.log`
- `data/reports/2026-06-11/zoo-links.log`
- `data/reports/2026-06-11/zoo-note-conventions.log`
- `data/reports/2026-06-11/zoo-source-references.log`
- `data/reports/2026-06-12/canon-coverage.log`
- `data/reports/2026-06-12/canon-coverage.md`
- `data/reports/2026-06-12/classics-build.log`
- `data/reports/2026-06-12/classics-resolve.log`
- `data/reports/2026-06-12/discovery.log`
- `data/reports/2026-06-12/preflight.log`
- `data/reports/2026-06-12/prioritize-classics.log`
- `data/reports/2026-06-12/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`

</details>

**5c1c05c4** · 2026-06-11 10:24:59 — Update tetron audit tracker and refs

<details><summary>files (4)</summary>

- `data/audit-tracker.json`
- `vault/References/aghaee-2023-topological-gap-protocol.md`
- `vault/References/aghaee-2025-interferometric-parity.md`
- `vault/References/aghaee-2025-majorana-1.md`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-06-12 06:00:05 EDT
- **Papers added in last run:** 4
- **Failing steps:** `zoo_note_conventions`
