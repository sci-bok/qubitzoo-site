---
title: Möbius-Guided Diagonal-Gate Compilation with Native Multiqubit Controlled-Phase
  Gates on Neutral-Atom Processors
authors:
- Hairuo Huang
- Yanwu Gu
- Chen Huang
- Xi Zhao
- Meng-Jun Hu
- Dong E. Liu
- Jingbo Wang
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.08212'
language: en
date_ingested: '2026-07-13'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Rydberg Neutral-Atom Qubit is a neutral atom qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Diagonal gates are ubiquitous primitives in quantum algorithms, from phase oracles, hypergraph-state preparation, and multi-control logic to Hamiltonian simulation of spin models and digitized lattice field theories, where Ising interactions and local potential terms are diagonal in the encoded basis. Standard compilers, however, often lower diagonal structure into one- and two-qubit gates before neutral-atom hardware can exploit native Rydberg-mediated multiqubit controlled-phase operations. We propose a Möbius-guided compiler that maps a diagonal phase function to a phase hypergraph via subset-lattice Möbius inversion. The hypergraph retains the support and angle of each many-body phase term, allowing sparse or local high-order structure to be routed as native multiqubit controlled-phase candidates when feasible and decomposed otherwise. The neutral-atom scheduler accounts for atom motion, interaction-zone constraints, blockade feasibility, and error costs, enabling a direct comparison between native high-order execution and decomposed alternatives. Benchmarks against routed ZAP and ZX-calculus baselines show improved estimated success for algorithmic instances with exploitable three- and four-body phase terms, and comparable performance on predominantly two-body instances. These results provide a feasible compilation strategy for more fully exploiting the native capabilities of neutral-atom hardware, using atom reconfigurability and Rydberg-mediated multiqubit phase operations as practical resources for more efficient quantum computation.

## Key Findings


## Links
- **arXiv:** [2607.08212](https://arxiv.org/abs/2607.08212)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
