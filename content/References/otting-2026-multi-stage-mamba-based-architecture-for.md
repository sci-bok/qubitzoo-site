---
title: Multi-Stage Mamba-Based Architecture for Fast and Scalable Superconducting
  Qubit Readout
authors:
- Luca Otting
- Xiaorang Guo
- Emmanouil Giortamis
- Benjamin Lienhard
- Pramod Bhatotia
- Martin Schulz
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.11668'
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

Qubit Readout is a classical hardware readout approach for quantum computing hardware. Source: latex text.

## Abstract
Reliable qubit readout is a critical bottleneck toward fault-tolerant quantum computing (FTQC). In superconducting quantum processors, readout operations are both error-prone and high-latency. These challenges become more severe in frequency-multiplexed architectures, where signal crosstalk among neighboring qubits significantly degrades readout fidelity. Existing machine learning (ML)-based approaches rely on feed-forward neural networks (FNNs) that suffer from large parameter sizes and lack an end-to-end network that jointly addresses relaxation errors and discriminates qubit states. In this work, we present a multi-stage qubit state discriminator based on the Mamba model, which enables efficient sequence modeling with linear complexity. The first stage performs initial state discrimination, followed by a refinement stage that identifies and mitigates relaxation-induced errors. Our lightweight model achieves a geometric mean readout fidelity of 0.906, outperforming the best-reported state-of-the-art method while reducing parameter size by 49.6%; our optimal model further reaches 0.911. Both models remain robust across varying input trace lengths, maintaining a high fidelity of 0.893 at readout durations as short as 500 $ns$, achieving up to a 26% reduction in logical error rate over prior work in quantum error correction (QEC).

## Key Findings


## Links
- **arXiv:** [2607.11668](https://arxiv.org/abs/2607.11668)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
