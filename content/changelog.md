---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-08-04T13:12:51.212Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**746c9477** · 2026-08-03 10:14:28 — zoo: deep-audit polarization photonic qubit

<details><summary>files (7)</summary>

- `content/Figures/polarization-photonic-qubit-figure.png`
- `content/Figures/polarization-photonic-qubit-figure.provenance.json`
- `content/References/bennett-1992-experimental-quantum-cryptography.md`
- `content/References/bennett-brassard-1984-bb84-polarization.md`
- `content/References/huang-2026-on-demand-polarization-cnot.md`
- `content/References/lu-2024-polarization-frequency-cnot.md`
- `content/Zoo/polarization-photonic-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**0c7774b2** · 2026-08-04 06:11:32 — zoo: pipeline queue-run processed=10 failed=0 (2026-08-04 10:11 UTC)

<details><summary>files (7)</summary>

- `References/berritta-2026-adaptive-spectroscopy-of-fast.md`
- `References/rathnakaran-2026-squeezing-fueled-quantum-otto-engine.md`
- `References/wegmann-2026-zero-g-a-pre-decoder-aware-decoder.md`
- `References/yarkoni-2026-the-pangaea-architecture-fault-tolerant.md`
- `Zoo/circuit-qed.md`
- `Zoo/classical-control.md`
- `Zoo/photonic-cluster-state-mbqc-qubit.md`

</details>

**5fd99f77** · 2026-08-03 10:46:46 — Improve molecular MOC routing synthesis

<details><summary>files (1)</summary>

- `MOCs/molecular-moc.md`

</details>

**e4d5cb53** · 2026-08-03 10:14:38 — zoo: sync reviewed polarization figure

<details><summary>files (3)</summary>

- `Figures/polarization-photonic-qubit-figure.png`
- `Figures/polarization-photonic-qubit-figure.provenance.json`
- `Zoo/polarization-photonic-qubit.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**0db89658** · 2026-08-04 06:11:30 — zoo: pipeline queue-run processed=10 failed=0 (2026-08-04 10:11 UTC)

<details><summary>files (47)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/discovery_queue.json`
- `data/exports/paper_feed/2026-08-04/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/obsidian_cli_remediation.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-08-03/calibration-json.err.log`
- `data/reports/2026-08-03/calibration.err.log`
- `data/reports/2026-08-03/calibration.json`
- `data/reports/2026-08-03/calibration.txt`
- `data/reports/2026-08-03/influence-scoring.log`
- `data/reports/2026-08-03/moc-build.log`
- `data/reports/2026-08-03/moc-generate.log`
- `data/reports/2026-08-03/ops-report-json.err.log`
- `data/reports/2026-08-03/ops-report.err.log`
- `data/reports/2026-08-03/ops-report.json`
- `data/reports/2026-08-03/ops-report.txt`
- `data/reports/2026-08-03/quarantine-triage.log`
- `data/reports/2026-08-03/queue-summary.json`
- `data/reports/2026-08-03/queue.log`
- `data/reports/2026-08-03/reference-backlink-dry-run.json`
- `data/reports/2026-08-03/reference-backlink-dry-run.log`
- `data/reports/2026-08-03/reference-backlink-migration.log`
- `data/reports/2026-08-03/reference-orphan-quarantine-dry-run.json`
- `data/reports/2026-08-03/run-summary.json`
- `data/reports/2026-08-03/run-summary.txt`
- `data/reports/2026-08-03/zettel-review.log`
- `data/reports/2026-08-03/zoo-links.log`
- `data/reports/2026-08-03/zoo-note-conventions.log`
- `data/reports/2026-08-03/zoo-source-references.log`
- `data/reports/2026-08-04/canon-coverage.log`
- `data/reports/2026-08-04/canon-coverage.md`
- `data/reports/2026-08-04/classics-build.log`
- `data/reports/2026-08-04/classics-resolve.log`
- `data/reports/2026-08-04/discovery.log`
- `data/reports/2026-08-04/preflight.log`
- `data/reports/2026-08-04/prioritize-classics.log`
- `data/reports/2026-08-04/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/reports/weekly/2026-W32/quarantine-triage.json`

</details>

**d67c137f** · 2026-08-03 10:15:46 — audit: record polarization photonic deep review

<details><summary>files (12)</summary>

- `data/audit-tracker.json`
- `vault/Figures/.candidates/polarization-photonic-qubit-blueprint-v2.png`
- `vault/Figures/.candidates/polarization-photonic-qubit-blueprint.png`
- `vault/Figures/.candidates/polarization-photonic-qubit-blueprint.svg`
- `vault/Figures/.candidates/polarization-photonic-qubit-figure-20260803T140725701280Z.png`
- `vault/Figures/.candidates/polarization-photonic-qubit-figure-20260803T140725701280Z.provenance.json`
- `vault/Figures/.candidates/polarization-photonic-qubit-figure-20260803T140949793977Z.png`
- `vault/Figures/.candidates/polarization-photonic-qubit-figure-20260803T140949793977Z.provenance.json`
- `vault/Figures/.candidates/polarization-photonic-qubit-figure-20260803T141117982542Z.png`
- `vault/Figures/.candidates/polarization-photonic-qubit-figure-20260803T141117982542Z.provenance.json`
- `vault/Figures/polarization-photonic-qubit-figure.png`
- `vault/Figures/polarization-photonic-qubit-figure.provenance.json`

</details>


## Pipeline status

- **Status:** `ok` (mode: `full`)
- **Last run:** 2026-08-04 06:00:01 EDT
- **Papers added in last run:** 4
- **Failing steps:** none
