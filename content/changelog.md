---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-05-15T14:04:42.149Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**018d57d9** · 2026-05-14 10:18:06 — audit: refresh SiV/SnV color-center entry

<details><summary>files (2)</summary>

- `content/Figures/siv-color-center-qubit-figure.png`
- `content/Zoo/siv-color-center-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**3f92be2d** · 2026-05-15 06:09:30 — zoo: pipeline queue-run processed=7 failed=0 (2026-05-15 10:09 UTC)

<details><summary>files (22)</summary>

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
- `References/chirolli-2026-fraxonium-fractional-fluxon-states.md`
- `References/elyasi-2025-a-framework-for-quantum.md`
- `References/kam-2026-majorana-constellations-a-geometric.md`
- `References/otieno-2026-a-quantum-reservoir-computing.md`
- `References/song-2026-blind-quantum-computation-on.md`
- `References/tian-2026-thermodynamic-incompleteness-of-state.md`
- `References/yang-2026-quantum-battery-optimized-by.md`

</details>

**ee473e40** · 2026-05-14 10:50:02 — zettel: add superconducting scaling context

<details><summary>files (3)</summary>

- `Zoo/gmon.md`
- `Zoo/tunable-coupler.md`
- `Zoo/xmon.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**7d1728ef** · 2026-05-15 06:09:29 — zoo: pipeline queue-run processed=7 failed=0 (2026-05-15 10:09 UTC)

<details><summary>files (41)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/discovery_queue.json`
- `data/exports/paper_feed/2026-05-15/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/2026-05-14/calibration-json.err.log`
- `data/reports/2026-05-14/calibration.err.log`
- `data/reports/2026-05-14/calibration.json`
- `data/reports/2026-05-14/calibration.txt`
- `data/reports/2026-05-14/influence-scoring.log`
- `data/reports/2026-05-14/moc-build.log`
- `data/reports/2026-05-14/moc-generate.log`
- `data/reports/2026-05-14/ops-report-json.err.log`
- `data/reports/2026-05-14/ops-report.err.log`
- `data/reports/2026-05-14/ops-report.json`
- `data/reports/2026-05-14/ops-report.txt`
- `data/reports/2026-05-14/queue-summary.json`
- `data/reports/2026-05-14/queue.log`
- `data/reports/2026-05-14/run-summary.json`
- `data/reports/2026-05-14/run-summary.txt`
- `data/reports/2026-05-14/zettel-review.log`
- `data/reports/2026-05-14/zoo-links.log`
- `data/reports/2026-05-14/zoo-note-conventions.log`
- `data/reports/2026-05-14/zoo-source-references.log`
- `data/reports/2026-05-15/canon-coverage.log`
- `data/reports/2026-05-15/canon-coverage.md`
- `data/reports/2026-05-15/classics-build.log`
- `data/reports/2026-05-15/classics-resolve.log`
- `data/reports/2026-05-15/discovery.log`
- `data/reports/2026-05-15/preflight.log`
- `data/reports/2026-05-15/prioritize-classics.log`
- `data/reports/2026-05-15/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`
- `vault/Figures/siv-color-center-qubit-figure.png`

</details>

**2d50850f** · 2026-05-14 10:18:54 — audit: update tracker for SiV/SnV deep audit

<details><summary>files (1)</summary>

- `data/audit-tracker.json`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-05-15 06:00:02 EDT
- **Papers added in last run:** 7
- **Failing steps:** `zoo_note_conventions`
