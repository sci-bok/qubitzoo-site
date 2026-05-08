---
title: Distributed Quantum Error Correction with Bivariate Bicycle Codes in a Modular
  Architecture
authors:
- Nitish Kumar Chandra
- Eneet Kaur
- Reza Nejabati
- Kaushik P. Seshadreesan
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2605.04663'
language: en
date_ingested: '2026-05-07'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Trapped-Ion Qubit is a ion trap qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Quantum low density parity check (qLDPC) codes, particularly bivariate bicycle (BB) codes, achieve competitive fault tolerance thresholds while offering substantially higher encoding rates than planar surface codes. However, their intrinsically long-range stabilizer structure makes them difficult to implement on monolithic devices with nearest neighbor connectivity and limited qubit capacity. In this work, we study the realization of a BB code in a modular multiprocessor architecture, where quantum processors are interconnected through shared Bell pairs. We consider processors with all to all internal connectivity, which is feasible on trapped ion and neutral atom platforms, enabling flexible local gate execution while inter-processor (nonlocal) gates are mediated by shared entanglement. We describe a star network architecture that can realize this distributed setting. We partition the qubits of the [[144,12,12]] BB code across 4, 6, and 12 quantum processors and analyze the resulting logical error rates and pseudo-threshold performance under circuit level noise by varying the number of processors and a scaling factor that captures the additional noise associated with nonlocal operations. We use Monte Carlo simulations with BP+OSD decoding and extend the previously known BB code ansatz to the distributed setting. Our results provide architectural insight and design considerations for distributed BB codes in modular quantum computing architectures.

## Key Findings


## Links
- **arXiv:** [2605.04663](https://arxiv.org/abs/2605.04663)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
