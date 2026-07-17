---
title: 'AtomFlow: An End-to-End FPGA-Based Control Architecture for Neutral Atom Quantum
  Computers'
authors:
- Xiaorang Guo
- Jonas Winklmann
- Vengkeat Chea
- Martin Schulz
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.11490'
language: en
date_ingested: '2026-07-14'
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
Neutral Atom Quantum Computing (NAQC) is an emerging modality for scalable quantum computation, valued for its long coherence times and the naturally identical atomic qubits. However, one of the main drawbacks is its slow execution rate, dominated by lengthy classical processing tasks, such as fluorescence imaging, cooling, and atom rearrangement. We address this bottleneck with AtomFlow, a field-programmable gate array (FPGA)-based control architecture that consolidates fluorescence-image analysis and a newly developed atom-rearrangement algorithm onto a single Zynq UltraScale+ device. By co-locating the two stages on the same board and emitting rearrangement moves in a streaming fashion as soon as they are computed, AtomFlow eliminates the round-trip latency of conventional host-mediated pipelines. Evaluated on a 16x16 atom array, AtomFlow achieves an end-to-end latency of 25.3 ms with a first-move latency of 4 ms and an average move generation of 1 ms. Furthermore, our scalability analysis demonstrates that the architecture can readily support larger atom arrays within a single-board resource budget.

## Key Findings


## Links
- **arXiv:** [2607.11490](https://arxiv.org/abs/2607.11490)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
