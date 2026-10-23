---
title: Quantitative Rules for Parallel Calibration and Drift-Resilient Maintenance
  of Large-Scale Superconducting Quantum Processors
authors:
- Zhihao Wu
- Kechengqi Zhu
- Shichuan Xue
- Xinfang Zhang
- Zhaohua Yang
- Zhida Zhang
- Shun Hu
- Cong Li
- Dingdong Liu
- Kangding Zhao
- Peng Luo
- Lingling Lao
- Xiang Fu
- Mingtang Deng
- Junjie Wu
- Kai Lu
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.11477'
language: en
date_ingested: '2026-10-10'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Tunable Coupler is a classical hardware coupling approach for quantum computing hardware. Source: latex text.

## Abstract
As superconducting quantum processors scale toward hundreds of qubits, manual calibration becomes increasingly costly and difficult to sustain. Here we address two system-level factors governing automated calibration, namely, crosstalk induced by parallel operations and temporal drift of control parameters. On a 66-qubit superconducting processor, cross-entropy benchmarking shows that single-qubit calibration tolerates full-chip concurrency with minimal fidelity loss, whereas CZ calibration requires a minimum coupler-graph distance of four to avoid elevated control errors. Continuous monitoring of representative qubit and coupler parameters further yields quantitative refresh rules that assign refresh priority by error-budget consumption. These results turn two conventionally heuristic choices, the concurrency density of calibration tasks and the refresh priority of each control parameter, into measurable operating rules. Implemented within an automated calibration framework, the rules support a six-qubit Greenberger-Horne-Zeilinger state with a zero-noise-extrapolated fidelity of 89.64%, distance-dependent logical-error suppression in a single-cycle repetition-code benchmark, and a reduction of the mean single-qubit error from 0.023 to 0.011 on a 337-qubit processor, providing an experimentally grounded reference for the automated calibration and maintenance of current and future large-scale superconducting quantum systems.

## Key Findings


## Links
- **arXiv:** [2610.11477](https://arxiv.org/abs/2610.11477)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
