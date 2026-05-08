---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-05-08T12:21:09.067Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**f03a4b76** · 2026-05-08 08:17:32 — docs: refresh changelog after audit fixes

<details><summary>files (2)</summary>

- `content/_meta/changelog.json`
- `content/changelog.md`

</details>

**838daf30** · 2026-05-08 08:00:00 — feat: add rolling site changelog

<details><summary>files (7)</summary>

- `content/_meta/changelog.json`
- `content/changelog.md`
- `package.json`
- `quartz.layout.ts`
- `scripts/generate-changelog.test.ts`
- `scripts/generate-changelog.ts`
- `scripts/sync-vault.sh`

</details>

**630e5cf2** · 2026-05-07 10:09:57 — audit: refresh ferbo-qubit

<details><summary>files (1)</summary>

- `content/Zoo/ferbo-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**d0a6311c** · 2026-05-08 08:16:29 — audit: classify color-code logical qubit as encoding

<details><summary>files (1)</summary>

- `Zoo/color-code-logical-qubit.md`

</details>

**15f8318f** · 2026-05-08 06:15:33 — zoo: pipeline queue-run processed=10 failed=0 (2026-05-08 10:15 UTC)

<details><summary>files (20)</summary>

- `Figures/ferbo-qubit-figure.png`
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
- `References/moncy-2026-surface-code-thresholds-and-qubit.md`
- `References/poonia-2026-dzyaloshinskii-moriya-interaction-as-a.md`
- `References/villanova-2026-network-mediated-capacitive-coupling-drives.md`
- `References/zhurbina-2026-coherence-limitations-of-a.md`

</details>

**805065e9** · 2026-05-07 10:50:07 — zettel: add protected-superconducting evergreen context

<details><summary>files (6)</summary>

- `Zoo/0-pi-qubit.md`
- `Zoo/blochnium.md`
- `Zoo/cos2phi-qubit.md`
- `Zoo/ferbo-qubit.md`
- `Zoo/gatemonium.md`
- `Zoo/heavy-fluxonium-qubit.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**b35fc96a** · 2026-05-08 08:19:58 — fix: allow ns-scale semiconducting T1 metrics

<details><summary>files (2)</summary>

- `scripts/audit-zoo-metrics.py`
- `tests/test_zoo_metrics_audit.py`

</details>

**a9a57408** · 2026-05-08 08:16:24 — fix: reduce zoo metrics audit schema noise

<details><summary>files (4)</summary>

- `data/zoo-metrics.json`
- `scripts/audit-zoo-metrics.py`
- `scripts/extract-zoo-metrics.py`
- `tests/test_zoo_metrics_audit.py`

</details>

**2ab0a74b** · 2026-05-08 06:15:31 — zoo: pipeline queue-run processed=10 failed=0 (2026-05-08 10:15 UTC)

<details><summary>files (40)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/exports/paper_feed/2026-05-08/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-05-07/calibration-json.err.log`
- `data/reports/2026-05-07/calibration.err.log`
- `data/reports/2026-05-07/calibration.json`
- `data/reports/2026-05-07/calibration.txt`
- `data/reports/2026-05-07/influence-scoring.log`
- `data/reports/2026-05-07/moc-build.log`
- `data/reports/2026-05-07/moc-generate.log`
- `data/reports/2026-05-07/ops-report-json.err.log`
- `data/reports/2026-05-07/ops-report.err.log`
- `data/reports/2026-05-07/ops-report.json`
- `data/reports/2026-05-07/ops-report.txt`
- `data/reports/2026-05-07/queue-summary.json`
- `data/reports/2026-05-07/queue.log`
- `data/reports/2026-05-07/run-summary.json`
- `data/reports/2026-05-07/run-summary.txt`
- `data/reports/2026-05-07/zettel-review.log`
- `data/reports/2026-05-07/zoo-links.log`
- `data/reports/2026-05-07/zoo-note-conventions.log`
- `data/reports/2026-05-07/zoo-source-references.log`
- `data/reports/2026-05-08/canon-coverage.log`
- `data/reports/2026-05-08/canon-coverage.md`
- `data/reports/2026-05-08/classics-build.log`
- `data/reports/2026-05-08/classics-resolve.log`
- `data/reports/2026-05-08/discovery.log`
- `data/reports/2026-05-08/preflight.log`
- `data/reports/2026-05-08/prioritize-classics.log`
- `data/reports/2026-05-08/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`

</details>

**3018abb3** · 2026-05-07 10:11:17 — audit: refresh ferbo-qubit

<details><summary>files (2)</summary>

- `data/audit-tracker.json`
- `vault/References/caceres-2026-ferbo-a-noise-resilient.md`

</details>


## Pipeline status

- **Status:** `degraded` (mode: `full`)
- **Last run:** 2026-05-07 06:00:01 EDT
- **Papers added in last run:** 3
- **Failing steps:** `zoo_note_conventions`
