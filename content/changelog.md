---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-07-17T14:04:34.324Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**dc52cc0c** · 2026-07-16 10:24:39 — Audit photonic cluster-state MBQC entry

<details><summary>files (2)</summary>

- `content/Figures/photonic-cluster-state-mbqc-qubit-figure.png`
- `content/Zoo/photonic-cluster-state-mbqc-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**b153dac5** · 2026-07-17 06:18:07 — zoo: pipeline queue-run processed=10 failed=0 (2026-07-17 10:18 UTC)

<details><summary>files (18)</summary>

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
- `References/bodeker-2026-towards-logical-entanglement-creation.md`
- `References/kukita-2026-suppressing-detuning-induced-bias-in.md`
- `References/schroer-2026-a-versatile-laser-machined-rf.md`
- `References/van-2026-dispersive-readout-of-a.md`

</details>

**73fa1ac8** · 2026-07-16 10:49:01 — Clarify classical hardware MOC routing

<details><summary>files (1)</summary>

- `MOCs/classical-hardware-moc.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**e557b302** · 2026-07-17 06:18:05 — zoo: pipeline queue-run processed=10 failed=0 (2026-07-17 10:18 UTC)

<details><summary>files (42)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/discovery_queue.json`
- `data/exports/paper_feed/2026-07-17/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/obsidian_cli_remediation.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-07-16/calibration-json.err.log`
- `data/reports/2026-07-16/calibration.err.log`
- `data/reports/2026-07-16/calibration.json`
- `data/reports/2026-07-16/calibration.txt`
- `data/reports/2026-07-16/influence-scoring.log`
- `data/reports/2026-07-16/moc-build.log`
- `data/reports/2026-07-16/moc-generate.log`
- `data/reports/2026-07-16/ops-report-json.err.log`
- `data/reports/2026-07-16/ops-report.err.log`
- `data/reports/2026-07-16/ops-report.json`
- `data/reports/2026-07-16/ops-report.txt`
- `data/reports/2026-07-16/queue-summary.json`
- `data/reports/2026-07-16/queue.log`
- `data/reports/2026-07-16/run-summary.json`
- `data/reports/2026-07-16/run-summary.txt`
- `data/reports/2026-07-16/zettel-review.log`
- `data/reports/2026-07-16/zoo-links.log`
- `data/reports/2026-07-16/zoo-note-conventions.log`
- `data/reports/2026-07-16/zoo-source-references.log`
- `data/reports/2026-07-17/canon-coverage.log`
- `data/reports/2026-07-17/canon-coverage.md`
- `data/reports/2026-07-17/classics-build.log`
- `data/reports/2026-07-17/classics-resolve.log`
- `data/reports/2026-07-17/discovery.log`
- `data/reports/2026-07-17/preflight.log`
- `data/reports/2026-07-17/prioritize-classics.log`
- `data/reports/2026-07-17/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`

</details>

**a60f3bd3** · 2026-07-16 10:29:56 — Update photonic cluster-state MBQC audit

<details><summary>files (2)</summary>

- `data/audit-tracker.json`
- `vault/Figures/photonic-cluster-state-mbqc-qubit-figure.png`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-07-17 06:00:02 EDT
- **Papers added in last run:** 4
- **Failing steps:** `zoo_note_conventions`
