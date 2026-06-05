---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-06-05T14:04:01.555Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**f315b4a2** · 2026-06-04 10:17:47 — Audit hole spin qubit entry

<details><summary>files (6)</summary>

- `content/Figures/hole-spin-qubit-figure.png`
- `content/References/dijkema-2026-simultaneous-operation-of-an.md`
- `content/References/hendrickx-2020-fast-two-qubit-logic-holes.md`
- `content/References/john-2025-robust-localised-control-10spin.md`
- `content/References/watzinger-2018-germanium-hole-spin-qubit.md`
- `content/Zoo/hole-spin-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**682a9120** · 2026-06-05 06:08:32 — zoo: pipeline queue-run processed=0 failed=0 (2026-06-05 10:08 UTC)

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

**6310229e** · 2026-06-04 10:51:12 — Normalize spin sweet-spot evergreen references

<details><summary>files (4)</summary>

- `Evergreen/charge-noise-sweet-spot.md`
- `Evergreen/exchange-interaction-in-quantum-dots.md`
- `References/martins-2016-symmetric-exchange-gates.md`
- `References/reed-2016-reduced-sensitivity-charge-noise.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**29b62def** · 2026-06-05 06:08:30 — zoo: pipeline queue-run processed=0 failed=0 (2026-06-05 10:08 UTC)

<details><summary>files (39)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/exports/paper_feed/2026-06-05/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-06-04/calibration-json.err.log`
- `data/reports/2026-06-04/calibration.err.log`
- `data/reports/2026-06-04/calibration.json`
- `data/reports/2026-06-04/calibration.txt`
- `data/reports/2026-06-04/influence-scoring.log`
- `data/reports/2026-06-04/moc-build.log`
- `data/reports/2026-06-04/moc-generate.log`
- `data/reports/2026-06-04/ops-report-json.err.log`
- `data/reports/2026-06-04/ops-report.err.log`
- `data/reports/2026-06-04/ops-report.json`
- `data/reports/2026-06-04/ops-report.txt`
- `data/reports/2026-06-04/queue-summary.json`
- `data/reports/2026-06-04/queue.log`
- `data/reports/2026-06-04/run-summary.json`
- `data/reports/2026-06-04/run-summary.txt`
- `data/reports/2026-06-04/zettel-review.log`
- `data/reports/2026-06-04/zoo-links.log`
- `data/reports/2026-06-04/zoo-note-conventions.log`
- `data/reports/2026-06-04/zoo-source-references.log`
- `data/reports/2026-06-05/canon-coverage.log`
- `data/reports/2026-06-05/canon-coverage.md`
- `data/reports/2026-06-05/classics-build.log`
- `data/reports/2026-06-05/classics-resolve.log`
- `data/reports/2026-06-05/discovery.log`
- `data/reports/2026-06-05/preflight.log`
- `data/reports/2026-06-05/prioritize-classics.log`
- `data/reports/2026-06-05/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`

</details>

**66f94de0** · 2026-06-04 10:18:04 — Update hole spin audit tracker and references

<details><summary>files (6)</summary>

- `data/audit-tracker.json`
- `vault/Figures/hole-spin-qubit-figure.png`
- `vault/References/dijkema-2026-simultaneous-operation-of-an.md`
- `vault/References/hendrickx-2020-fast-two-qubit-logic-holes.md`
- `vault/References/john-2025-robust-localised-control-10spin.md`
- `vault/References/watzinger-2018-germanium-hole-spin-qubit.md`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-06-05 06:00:03 EDT
- **Papers added in last run:** 0
- **Failing steps:** `zoo_note_conventions`
