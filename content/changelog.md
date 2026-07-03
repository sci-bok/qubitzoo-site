---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-07-03T14:05:03.348Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**300f5294** · 2026-07-03 09:12:21 — site: sync vault content (2026-07-03 06:00:00 EDT)

<details><summary>files (31)</summary>

- `content/MOCs/classical-hardware-moc.md`
- `content/MOCs/codes-moc.md`
- `content/MOCs/color-center-moc.md`
- `content/MOCs/cross-platform-moc.md`
- `content/MOCs/ion-trap-moc.md`
- `content/MOCs/molecular-moc.md`
- `content/MOCs/neutral-atom-moc.md`
- `content/MOCs/photonic-moc.md`
- `content/MOCs/qubit-zoo-index-moc.md`
- `content/MOCs/semiconducting-moc.md`
- `content/MOCs/spin-photon-moc.md`
- `content/MOCs/super-semi-moc.md`
- `content/MOCs/superconducting-moc.md`
- `content/MOCs/topological-moc.md`
- `content/MOCs/trapped-ion-moc.md`
- `content/References/chen-2026-coherent-dark-state-formation.md`
- `content/References/jeong-2026-monolithic-axial-ingaas-quantum.md`
- `content/References/krasnok-2026-protecting-qubits-from-purcell.md`
- `content/References/maheshwari-2026-quantum-convolutional-neural-networks.md`
- `content/References/morris-2026-a-transition-metal-qubit-in.md`
- `content/References/ofek-2016-extending-lifetime-bit.md`
- `content/References/oliveira-2026-a-single-electron-double-quantum.md`
- `content/References/stefanski-2026-rotating-zeeman-field-as.md`
- `content/References/walelign-2026-phase-locking-nuclear-spins.md`
- `content/References/yaker-2026-neural-network-inverse-design-of.md`
- `content/References/zhou-2026-bunny-codes-broadening-superconducting.md`
- `content/_meta/changelog.json`
- `content/_meta/content-sync.json`
- `content/changelog.md`
- `quartz/static/fidelity-tracker.json`
- `quartz/static/genealogy-graph.json`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**222d30fa** · 2026-07-03 06:13:37 — zoo: pipeline queue-run processed=6 failed=0 (2026-07-03 10:13 UTC)

<details><summary>files (17)</summary>

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
- `References/morris-2026-a-transition-metal-qubit-in.md`
- `References/yaker-2026-neural-network-inverse-design-of.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**dd832b5e** · 2026-07-03 06:13:36 — zoo: pipeline queue-run processed=6 failed=0 (2026-07-03 10:13 UTC)

<details><summary>files (41)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/exports/paper_feed/2026-07-03/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/obsidian_cli_remediation.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-06-23/calibration-json.err.log`
- `data/reports/2026-06-23/calibration.err.log`
- `data/reports/2026-06-23/calibration.json`
- `data/reports/2026-06-23/calibration.txt`
- `data/reports/2026-06-23/influence-scoring.log`
- `data/reports/2026-06-23/moc-build.log`
- `data/reports/2026-06-23/moc-generate.log`
- `data/reports/2026-06-23/ops-report-json.err.log`
- `data/reports/2026-06-23/ops-report.err.log`
- `data/reports/2026-06-23/ops-report.json`
- `data/reports/2026-06-23/ops-report.txt`
- `data/reports/2026-06-23/queue-summary.json`
- `data/reports/2026-06-23/queue.log`
- `data/reports/2026-06-23/run-summary.json`
- `data/reports/2026-06-23/run-summary.txt`
- `data/reports/2026-06-23/zettel-review.log`
- `data/reports/2026-06-23/zoo-links.log`
- `data/reports/2026-06-23/zoo-note-conventions.log`
- `data/reports/2026-06-23/zoo-source-references.log`
- `data/reports/2026-07-03/canon-coverage.log`
- `data/reports/2026-07-03/canon-coverage.md`
- `data/reports/2026-07-03/classics-build.log`
- `data/reports/2026-07-03/classics-resolve.log`
- `data/reports/2026-07-03/discovery.log`
- `data/reports/2026-07-03/preflight.log`
- `data/reports/2026-07-03/prioritize-classics.log`
- `data/reports/2026-07-03/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-07-03 06:00:00 EDT
- **Papers added in last run:** 2
- **Failing steps:** `zoo_note_conventions`
