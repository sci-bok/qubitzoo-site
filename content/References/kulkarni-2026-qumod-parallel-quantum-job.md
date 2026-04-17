---
title: 'QuMod: Parallel Quantum Job Scheduling on Modular QPUs using Circuit Cutting'
authors:
- Vinooth Kulkarni
- Aaron Orenstein
- Xinpeng Li
- Shuai Xu
- Daniel Blankenberg
- Vipin Chaudhary
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2604.11013'
language: en
date_ingested: '2026-04-14'
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
The quantum computing community is increasingly positioning quantum processors as accelerators within classical HPC workflows, analogous to GPUs and TPUs. However, many real-world applications require scaling to hundreds or thousands of physical qubits to realize logical qubits via error correction. To reach these scales, hardware vendors employing diverse technologies -- such as trapped ions, photonics, neutral atoms, and superconducting circuits -- are moving beyond single, monolithic QPUs toward modular architectures connected via interconnects. For example, IonQ has proposed photonic links for scaling, while IBM has demonstrated a modular QPU architecture by classically linking two 127-qubit devices. Using dynamic circuits, Bell-pair-based teleportation, and circuit cutting, they have shown how to execute a large quantum circuit that cannot fit on a single QPU. As interest in quantum computing grows, cloud providers must ensure fair and efficient resource allocation for multiple users sharing such modular systems. Classical interconnection of QPUs introduces new scheduling challenges, particularly when multiple jobs execute in parallel. In this work, we develop a multi-programmable scheduler for modular quantum systems that jointly considers qubit mapping, parallel circuit execution, measurement synchronization across subcircuits, and teleportation operations between QPUs using dynamic circuits.

## Key Findings


## Links
- **arXiv:** [2604.11013](https://arxiv.org/abs/2604.11013)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
