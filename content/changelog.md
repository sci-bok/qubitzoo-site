---
title: Changelog
description: Recent changes to the Qubit Zoo site and source content (rolling 24h window).
---

_Auto-generated at 2026-09-11T14:00:08.783Z (UTC). Covers the last 24 hours. If a window passes with no activity, sections will be empty._

## Public-facing site changes

Commits to this site repo (qubitzoo-site) — these have already shipped or will ship on the next deploy.

**32655c9e** · 2026-09-10 10:25:31 — audit: deep-audit rare-earth-ion-qubit (2026-09-10)

<details><summary>files (3)</summary>

- `content/References/gupta-2025-er-telecom-spin-photon.md`
- `content/References/wang-2025-prx-quantum-eu-coherence.md`
- `content/Zoo/rare-earth-ion-qubit.md`

</details>


## Source/content changes affecting the next publish

Commits in the source vault touching `Zoo/`, `References/`, `Evergreen/`, `MOCs/`, `Figures/`. These are queued to appear on the site at the next sync + deploy.

**e0f90a0b** · 2026-09-11 06:59:16 — zoo: pipeline queue-run processed=10 failed=0 (2026-09-11 10:59 UTC)

<details><summary>files (9)</summary>

- `References/banger-2026-finite-blockade-dynamics-of-a.md`
- `References/chakraborty-2026-quantum-ram-implementation-using-multiple.md`
- `References/huang-2026-enhancing-charge-stability-of.md`
- `References/mcintyre-2026-one-clean-qubit-spectroscopy-of-simulated.md`
- `References/sotiropoulos-2026-photo-induced-wavelength-tuning-of.md`
- `References/wang-2026-an-exchange-assisted-entangling-gate.md`
- `Zoo/rydberg-neutral-atom-qubit.md`
- `Zoo/spin-qubit.md`
- `Zoo/trapped-ion-qubit.md`

</details>

**90a6f1b2** · 2026-09-10 10:48:52 — evergreen: add purcell-protection-via-detuning context links to 4 Zoo entries

<details><summary>files (4)</summary>

- `Zoo/electron-on-solid-neon-qubit.md`
- `Zoo/gatemon.md`
- `Zoo/rare-earth-ion-qubit.md`
- `Zoo/siv-color-center-qubit.md`

</details>

**c67386dc** · 2026-09-10 10:25:43 — audit: sync ref notes for rare-earth-ion-qubit deep audit

<details><summary>files (2)</summary>

- `References/gupta-2025-er-telecom-spin-photon.md`
- `References/wang-2025-prx-quantum-eu-coherence.md`

</details>


## Backstage maintenance and automation changes

Commits in the pipeline/automation repo (qubit-zoo-zettelkasten). These capture backend fixes, audits, and build/report changes that may not be visible on the public site yet.

**30cc4a9b** · 2026-09-11 06:59:14 — zoo: pipeline queue-run processed=10 failed=0 (2026-09-11 10:59 UTC)

<details><summary>files (44)</summary>

- `data/canon_coverage.json`
- `data/classics_backlog.json`
- `data/classics_resolver_report.json`
- `data/discovery_queue.json`
- `data/exports/paper_feed/2026-09-11/paper_feed.v1.jsonl`
- `data/exports/paper_feed/latest.json`
- `data/influence_history.jsonl`
- `data/obsidian_cli_remediation.jsonl`
- `data/processed_papers.jsonl`
- `data/quarantine_queue.json`
- `data/reports/.last-morning-summary-date`
- `data/reports/2026-09-10/calibration-json.err.log`
- `data/reports/2026-09-10/calibration.err.log`
- `data/reports/2026-09-10/calibration.json`
- `data/reports/2026-09-10/calibration.txt`
- `data/reports/2026-09-10/influence-scoring.log`
- `data/reports/2026-09-10/moc-build.log`
- `data/reports/2026-09-10/moc-generate.log`
- `data/reports/2026-09-10/ops-report-json.err.log`
- `data/reports/2026-09-10/ops-report.err.log`
- `data/reports/2026-09-10/ops-report.json`
- `data/reports/2026-09-10/ops-report.txt`
- `data/reports/2026-09-10/queue-summary.json`
- `data/reports/2026-09-10/queue.log`
- `data/reports/2026-09-10/run-summary.json`
- `data/reports/2026-09-10/run-summary.txt`
- `data/reports/2026-09-10/zettel-review.log`
- `data/reports/2026-09-10/zoo-links.log`
- `data/reports/2026-09-10/zoo-note-conventions.log`
- `data/reports/2026-09-10/zoo-source-references.log`
- `data/reports/2026-09-11/canon-coverage.log`
- `data/reports/2026-09-11/canon-coverage.md`
- `data/reports/2026-09-11/classics-build.log`
- `data/reports/2026-09-11/classics-resolve.log`
- `data/reports/2026-09-11/discovery.log`
- `data/reports/2026-09-11/preflight.log`
- `data/reports/2026-09-11/prioritize-classics.log`
- `data/reports/2026-09-11/queue.log`
- `data/reports/latest-run-summary.json`
- `data/reports/latest-run-summary.txt`
- `data/reports/run-history.jsonl`
- `data/zoo_source_references.json`
- `scripts/regen-rare-earth-figure-r2.py`
- `scripts/regen-rare-earth-figure.py`

</details>

**5fde9b48** · 2026-09-10 10:25:43 — audit: deep-audit rare-earth-ion-qubit tracker+vault refs

<details><summary>files (4)</summary>

- `data/audit-tracker.json`
- `vault/References/gupta-2025-er-telecom-spin-photon.md`
- `vault/References/ruskuc-2025-multiplexed-rare-earth-network.md`
- `vault/References/wang-2025-prx-quantum-eu-coherence.md`

</details>


## Pipeline status

- **Status:** `ok` (mode: `full`)
- **Last run:** 2026-09-11 06:00:04 EDT
- **Papers added in last run:** 6
- **Failing steps:** none
