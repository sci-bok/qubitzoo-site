---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-09-04T14:00:10.660Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**f2467ec3** · 2026-09-03 10:23:09 — Deep-audit semiconductor charge qubit

<details><summary>files (8)</summary>

- `content/Figures/semiconductor-charge-qubit-figure.png`
- `content/Figures/semiconductor-charge-qubit-figure.provenance.json`
- `content/References/kim-2015-microwave-charge-qubit.md`
- `content/References/petersson-2010-semiconductor-charge.md`
- `content/References/ranni-2024-charge-qubit-decoherence.md`
- `content/References/shi-2013-si-charge-oscillations.md`
- `content/References/wu-2000-quantum-computer-coupled-dot-molecules.md`
- `content/Zoo/semiconductor-charge-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**1ad85e14** · 2026-09-04 06:18:36 — zoo: pipeline queue-run processed=10 failed=0 (2026-09-04 10:18 UTC)

<details><summary>files (11)</summary>

- `References/czartowski-2026-energetic-costs-of-subspace.md`
- `References/lyngfelt-2026-analog-quantum-simulation-of.md`
- `References/medeiros-2026-spin-to-polarization-mapping-with-a.md`
- `References/richter-2026-low-frequency-charge-noise-in.md`
- `References/tang-2026-frequency-multiplexed-parallel-gates-for.md`
- `References/vaidhyanathan-2026-qarray-a-physics-informed-gpu-accelerated.md`
- `Zoo/hole-spin-qubit.md`
- `Zoo/qubit-readout.md`
- `Zoo/spin-qubit.md`
- `Zoo/transmon.md`
- `Zoo/trapped-ion-qubit.md`

</details>

**cc109e75** · 2026-09-03 10:51:34 — daily zettel synthesis: cross-link noise/decoherence/error-model evergreen cluster

<details><summary>files (7)</summary>

- `Evergreen/charge-noise-in-superconducting-qubits.md`
- `Evergreen/charge-noise-sweet-spot.md`
- `Evergreen/coherence-time-hierarchy.md`
- `Evergreen/decoherence-free-subspace.md`
- `Evergreen/erasure-error-vs-pauli-error.md`
- `Evergreen/noise-bias-and-asymmetric-error-channels.md`
- `Evergreen/threshold-theorem.md`

</details>

**bd9b3f9d** · 2026-09-03 10:22:14 — Deep-audit semiconductor charge qubit

<details><summary>files (8)</summary>

- `Figures/semiconductor-charge-qubit-figure.png`
- `Figures/semiconductor-charge-qubit-figure.provenance.json`
- `References/kim-2015-microwave-charge-qubit.md`
- `References/petersson-2010-semiconductor-charge.md`
- `References/ranni-2024-charge-qubit-decoherence.md`
- `References/shi-2013-si-charge-oscillations.md`
- `References/wu-2000-quantum-computer-coupled-dot-molecules.md`
- `Zoo/semiconductor-charge-qubit.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**0010e777** · 2026-09-04 06:18:35 — zoo: pipeline queue-run processed=10 failed=0 (2026-09-04 10:18 UTC)

<details><summary>files (44)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/discovery_queue.json`
- `data/exports/paper_feed/2026-09-04/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/obsidian_cli_remediation.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-09-03/calibration-json.err.log`
- `data/reports/2026-09-03/calibration.err.log`
- `data/reports/2026-09-03/calibration.json`
- `data/reports/2026-09-03/calibration.txt`
- `data/reports/2026-09-03/influence-scoring.log`
- `data/reports/2026-09-03/moc-build.log`
- `data/reports/2026-09-03/moc-generate.log`
- `data/reports/2026-09-03/ops-report-json.err.log`
- `data/reports/2026-09-03/ops-report.err.log`
- `data/reports/2026-09-03/ops-report.json`
- `data/reports/2026-09-03/ops-report.txt`
- `data/reports/2026-09-03/queue-summary.json`
- `data/reports/2026-09-03/queue.log`
- `data/reports/2026-09-03/run-summary.json`
- `data/reports/2026-09-03/run-summary.txt`
- `data/reports/2026-09-03/zettel-review.log`
- `data/reports/2026-09-03/zoo-links.log`
- `data/reports/2026-09-03/zoo-note-conventions.log`
- `data/reports/2026-09-03/zoo-source-references.log`
- `data/reports/2026-09-04/canon-coverage.log`
- `data/reports/2026-09-04/canon-coverage.md`
- `data/reports/2026-09-04/classics-build.log`
- `data/reports/2026-09-04/classics-resolve.log`
- `data/reports/2026-09-04/discovery.log`
- `data/reports/2026-09-04/preflight.log`
- `data/reports/2026-09-04/prioritize-classics.log`
- `data/reports/2026-09-04/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`
- `tmp/semiconductor-charge-qubit-audit-blueprint-20260903.png`
- `tmp/semiconductor-charge-qubit-audit-blueprint-20260903.svg`

</details>

**4fadf56f** · 2026-09-03 10:24:48 — Link audit record to tracker commit

<details><summary>files (1)</summary>

- `data/audit-tracker.json`

</details>

**300987f7** · 2026-09-03 10:24:18 — Record semiconductor charge qubit audit

<details><summary>files (1)</summary>

- `data/audit-tracker.json`

</details>


## Pipeline status

- **Status:** `ok` (mode: `full`)
- **Last run:** 2026-09-04 06:00:05 EDT
- **Papers added in last run:** 6
- **Failing steps:** none
