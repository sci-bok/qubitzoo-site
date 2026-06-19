---
title: Graph Reinforcement Learning for Calibration-Aware Quantum Circuit Routing
authors:
- Yash Vardhan Tomar
- Dheeraj Peddireddy
- Vaneet Aggarwal
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2606.12816'
language: en
date_ingested: '2026-06-13'
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
Quantum circuit routing is a key step in compiling programs for noisy intermediate-scale quantum processors. Routes that appear efficient by standard overhead metrics can still lose fidelity when they pass through poorly calibrated couplers. We study a calibration-aware graph reinforcement-learning router that uses same-day IBM Heron r2 calibration data to choose hardware-edge SWAPs. We train the policy with proximal policy optimization and evaluate it with exact simulated fidelity across nine Munich Quantum Toolkit (MQT) Bench circuits and three calibration snapshots. Across these evaluations, pooled mean exact fidelity is $0.727$, compared with $0.440$ for SABRE-best20 and $0.481$ for target-aware SABRE. Fidelity gains come with higher routed two-qubit counts and are concentrated in the 5q and 8q circuit families; under the fixed tree action graph, all 10q families favor SABRE-best20. Overall, our results show that calibration-aware learned routing can improve fidelity beyond gate-count-driven compilation.

## Key Findings


## Links
- **arXiv:** [2606.12816](https://arxiv.org/abs/2606.12816)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
