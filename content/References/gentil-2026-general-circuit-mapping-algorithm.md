---
title: General circuit mapping algorithm for neutral atom quantum computers
authors:
- Neven Gentil
- Lous S. Rianne
- Aida Todri-Sanial
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2606.20503'
language: en
date_ingested: '2026-06-19'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Neutral-Atom Qubit is a neutral atom qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Neutral atom quantum computers (NAQC) are emerging as a promising, scalable quantum computing platform because of their long qubit coherence, flexible qubit arrangement, and multiqubit gate capabilities. However, circuit execution often requires physically moving qubits, making compilation a critical optimization challenge. We propose a circuit independent mathematical framework built on graph-theoretic combinatorial optimization that determines the minimal number of required qubit transfers. This model captures spatial constraints specific to NAQC platforms with zone-limited gate operations and multi-qubit gates. From this framework, we encode the qubit mapping problem as a nonlinear integer program and solve it using a genetic algorithm, enabling trade-offs between minimizing the total traveled distance and the number of parallel transfer operations. Compared to the state-of-the-art scalable compiler for zoned architectures, our approach consistently finds fewer transfers. Depending on the optimization focus, our method produces shorter traveled distances or fewer parallel transfer operations. This work provides both theoretical guaranties and a practical tool for efficient, architecture-aware quantum circuit compilation. As a result, practitioners can generate hardware-aware mappings that reduce movement-induced errors and better exploit atom transfer parallelism, directly improving execution efficiency on NAQC devices.

## Key Findings


## Links
- **arXiv:** [2606.20503](https://arxiv.org/abs/2606.20503)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
