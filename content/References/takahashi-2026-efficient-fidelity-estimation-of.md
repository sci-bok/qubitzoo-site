---
title: Efficient Fidelity Estimation of General Quantum Resource States via Clifford
  Circuits
authors:
- Shunta Takahashi
- Keisuke Fujii
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.05222'
language: en
date_ingested: '2026-11-03'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Surface Code is a codes encoding approach for quantum computing hardware. Source: latex text.

## Abstract
Fidelity estimation is a fundamental tool for assessing quantum resource states across quantum information science. For small infidelity $ε$, tomography and direct fidelity estimation (DFE) have worst-case sample complexity $O(1/ε^2)$ at fixed relative accuracy and confidence. Direct target projections achieve $O(1/ε)$ but generally require non-Clifford operations whose reliability depends on the resource states that are typically the target of benchmarking. Here, we introduce the Bell--coherence fidelity estimation (BCFE) with optimal sample complexity $Θ(1/ε)$ using only Clifford gates and Pauli measurements. We prove that BCFE is applicable to arbitrary pure targets, possibly multi-qubit, with the statistical error of the single-copy coherence part explicitly controlled. To evaluate BCFE in a practical setting, we apply BCFE to analog rotation resource states in the candidate early-FTQC architecture called the Space-Time Efficient Analog Rotations (STAR) architecture. In the simulations using surface codes, BCFE is estimated to require up to approximately $27$ times fewer resource states than DFE for the same standard error in the infidelity estimate, while its estimates remain close to reference values despite circuit-level noise in the additional Bell measurement operations. These results support efficient resource benchmarking within fault-tolerant quantum computing.

## Key Findings


## Links
- **arXiv:** [2610.05222](https://arxiv.org/abs/2610.05222)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
