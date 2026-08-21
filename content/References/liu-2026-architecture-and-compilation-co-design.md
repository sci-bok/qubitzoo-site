---
title: Architecture and Compilation Co-Design for High-Rate Quantum Product Codes
  on Neutral Atom Arrays
authors:
- Adrian Liu
- Wan-Hsuan Lin
- Daniel Bochen Tan
- Qian Xu
- Jason Cong
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.20164'
language: en
date_ingested: '2026-08-21'
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
Achieving fault-tolerant quantum computing at a practical scale demands quantum error correction (QEC) codes with high encoding rates. Quantum low-density parity-check (qLDPC) codes emerge as a promising candidate, especially given the rise of neutral atom arrays that provide dynamic long-range connectivity via atom movements. In general, synthesizing valid and efficient physical execution plans for QEC is a provably hard combinatorial problem, forming a critical compilation bottleneck that worsens as code sizes grow. To overcome this complexity, we focus on an important product family of qLDPC codes with dimension-reduction properties, and propose ONEX. This framework decomposes complex 2D physical execution planning into independent 1D subproblems, each solved to optimal execution depth within practical compilation time. First, we formulate the 1D execution plan with an explicit satisfiability modulo theories (SMT) encoding. This protocol produces provably depth-optimal solutions with substantial duration reduction. Second, we develop a multi-stage compilation pipeline featuring anytime optimization, movement compaction, and iterative feedback. This pipeline maintains practical wall-clock times while providing progressive refinement and on-demand retrieval of quality solutions. Third, we evaluate ONEX in the application of hypergraph product (HGP) code memory mapped onto neutral atom arrays, achieving 3.7x to 6.1x and 29.8x to 42.1x higher clock rates than the constructive 1D algorithm and the general 2D compiler, respectively, while scaling efficiently to codes with 2,500 data qubits. Finally, we extend ONEX to zoned layouts, revealing architectural insights into the associated trade-offs, and demonstrate its applicability to the broader lifted-product (LP) code family through a representative example.

## Key Findings


## Links
- **arXiv:** [2608.20164](https://arxiv.org/abs/2608.20164)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
