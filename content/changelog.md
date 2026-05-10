---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-05-10T11:49:12.150Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**3a073502** · 2026-05-10 07:38:20 — docs: refresh changelog with family-aware audit fix

<details><summary>files (2)</summary>

- `content/_meta/changelog.json`
- `content/changelog.md`

</details>

**36615014** · 2026-05-09 10:27:58 — zoo: audit surface-code logical qubit

<details><summary>files (4)</summary>

- `content/Figures/surface-code-logical-qubit-figure.png`
- `content/References/egan-2021-fault-tolerant-control.md`
- `content/References/marques-2022-logical-qubit-operations-error-detecting-surface-code.md`
- `content/Zoo/surface-code-logical-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**75566e14** · 2026-05-10 06:13:02 — zoo: pipeline queue-run processed=0 failed=0 (2026-05-10 10:13 UTC)

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

**07a1a853** · 2026-05-09 10:51:29 — synthesis: add neutral-atom evergreen context

<details><summary>files (4)</summary>

- `Zoo/alkaline-earth-neutral-atom-clock-qubit.md`
- `Zoo/erasure-qubit.md`
- `Zoo/neutral-atom-qubit.md`
- `Zoo/nuclear-spin-neutral-atom-qubit.md`

</details>

**e06bf555** · 2026-05-09 10:27:58 — zoo: sync surface-code logical qubit figure

<details><summary>files (1)</summary>

- `Figures/surface-code-logical-qubit-figure.png`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**e2301e4f** · 2026-05-10 07:49:07 — fix: reduce audit noise for photonic and encoding metrics

<details><summary>files (2)</summary>

- `scripts/audit-zoo-metrics.py`
- `tests/test_zoo_metrics_audit.py`

</details>

**6068b8b8** · 2026-05-10 07:38:08 — fix: make zoo metrics completeness family-aware

<details><summary>files (2)</summary>

- `scripts/audit-zoo-metrics.py`
- `tests/test_zoo_metrics_audit.py`

</details>

**118406f2** · 2026-05-10 06:13:01 — zoo: pipeline queue-run processed=0 failed=0 (2026-05-10 10:13 UTC)

<details><summary>files (39)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/exports/paper_feed/2026-05-10/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-05-09/calibration-json.err.log`
- `data/reports/2026-05-09/calibration.err.log`
- `data/reports/2026-05-09/calibration.json`
- `data/reports/2026-05-09/calibration.txt`
- `data/reports/2026-05-09/influence-scoring.log`
- `data/reports/2026-05-09/moc-build.log`
- `data/reports/2026-05-09/moc-generate.log`
- `data/reports/2026-05-09/ops-report-json.err.log`
- `data/reports/2026-05-09/ops-report.err.log`
- `data/reports/2026-05-09/ops-report.json`
- `data/reports/2026-05-09/ops-report.txt`
- `data/reports/2026-05-09/queue-summary.json`
- `data/reports/2026-05-09/queue.log`
- `data/reports/2026-05-09/run-summary.json`
- `data/reports/2026-05-09/run-summary.txt`
- `data/reports/2026-05-09/zettel-review.log`
- `data/reports/2026-05-09/zoo-links.log`
- `data/reports/2026-05-09/zoo-note-conventions.log`
- `data/reports/2026-05-09/zoo-source-references.log`
- `data/reports/2026-05-10/canon-coverage.log`
- `data/reports/2026-05-10/canon-coverage.md`
- `data/reports/2026-05-10/classics-build.log`
- `data/reports/2026-05-10/classics-resolve.log`
- `data/reports/2026-05-10/discovery.log`
- `data/reports/2026-05-10/preflight.log`
- `data/reports/2026-05-10/prioritize-classics.log`
- `data/reports/2026-05-10/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`

</details>

**8fc22ff7** · 2026-05-09 10:27:58 — zoo: record surface-code logical qubit audit

<details><summary>files (3)</summary>

- `data/audit-tracker.json`
- `vault/References/egan-2021-fault-tolerant-control.md`
- `vault/References/marques-2022-logical-qubit-operations-error-detecting-surface-code.md`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-05-10 06:00:04 EDT
- **Papers added in last run:** 0
- **Failing steps:** `zoo_note_conventions`
