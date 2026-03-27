---
title: Low Latency GNN Accelerator for Quantum Error Correction
authors:
- Alessio Cicero
- Luigi Altamura
- Moritz Lange
- Mats Granath
- Pedro Trancoso
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2603.22149'
language: en
date_ingested: '2026-03-24'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Surface Code is a codes code approach for quantum computing hardware. Source: latex text.

## Abstract
Quantum computers have the potential to solve certain complex problems in a much more efficient way than classical computers. Nevertheless, current quantum computer implementations are limited by high physical error rates. This issue is addressed by Quantum Error Correction (QEC) codes, which use multiple physical qubits to form a logical qubit to achieve a lower logical error rate, with the surface code being one of the most commonly used. The most time-critical step in this process is interpreting the measurements of the physical qubits to determine which errors have most likely occurred - a task called decoding. Consequently, the main challenge for QEC is to achieve error correction with high accuracy within the tight $1μs$ decoding time budget imposed by superconducting qubits. State-of-the-art QEC approaches trade accuracy for latency. In this work, we propose an FPGA accelerator for a Neural Network based decoder as a way to achieve a lower logical error rate than current methods within the tight time constraint, for code distance up to d=7. We achieved this goal by applying different hardware-aware optimizations to a high-accuracy GNN-based decoder. In addition, we propose several accelerator optimizations leading to the FPGA-based decoder achieving a latency smaller than $1μs$, with a lower error rate compared to the state-of-the-art.

## Key Findings


## Links
- **arXiv:** [2603.22149](https://arxiv.org/abs/2603.22149)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
