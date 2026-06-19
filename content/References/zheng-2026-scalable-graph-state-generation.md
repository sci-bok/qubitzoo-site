---
title: Scalable Graph State Generation with O(1) Local Feedforward in Quantum Networks
authors:
- Xiaoyi Zheng
- Chan-Tong Lam
- Lin Chen
- Zheng Xing
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2606.16375'
language: en
date_ingested: '2026-06-16'
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
The development of quantum networks faces a key challenge: the contradiction between probabilistic long-range entanglement generation and finite coherence time. Existing routing protocols typically focus on global state computation or path optimization. As the network scales up, classical delays accumulate and exacerbate decoherence, leading to a decrease in entanglement fidelity. To reduce routing decision delays to levels far below the coherence time of qubits, we propose a protocol based on local measurement and classical feedforward. This protocol reduces the local decision complexity to amortized O(1) level, ensuring that the decision delay is always much smaller than the coherence time of qubits. We map this protocol onto a dual-species trapped-ion platform and perform hybrid simulations. The results show that the proposed protocol performs well in terms of both resource efficiency and time feasibility. Noise analysis indicates that readout fidelity is the main bottleneck of this protocol, but noise suppression can be achieved by employing an erasure transformation in the dual-species architecture, combined with spatial multiplexing and branch independence, thereby ensuring the generation of high-fidelity star subgraphs. This protocol provides a clear path to achieving high-fidelity star subgraphs. These subgraphs can serve as general modules, merging to construct arbitrary subgraphs, providing a feasible solution for future fault-tolerant distributed quantum computing.

## Key Findings


## Links
- **arXiv:** [2606.16375](https://arxiv.org/abs/2606.16375)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
