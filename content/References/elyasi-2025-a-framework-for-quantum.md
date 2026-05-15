---
title: A Framework for Quantum Data Center Emulation Using Digital Quantum Computers
authors:
- Seyed Navid Elyasi
- Paolo Monti
- Jun Li
- Rui Lin
year: 2025
journal: arXiv preprint
doi: null
arxiv_id: '2509.04029'
language: en
date_ingested: '2026-05-15'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Quantum Transduction is a classical hardware infrastructure approach for quantum computing hardware. Source: latex text.

## Abstract
As quantum computers scale, single-chip architectures face inherent limitations in qubit count. It drives the need for modular quantum computing and Quantum Data Centers (QDCs), where multiple quantum processor units (QPUs) are interconnected to enable the distributed execution of a quantum algorithm. However, evaluating distributed quantum computing (DQC) architectures is challenging. Classical simulation is limited by the growth of exponential state vector, limiting their ability to model large systems and realistically capture hardware noise and timing. Meanwhile, implementing QDC introduces interconnect noise challenges such as transduction inefficiency and optical fiber losses. In this work, we introduce a hardware-based emulation framework by partitioning a single quantum processor's qubit coupling map into multiple logical QPUs. We show how noise arising from transduction and optical fiber can be modeled by adding an ancilla qubit representing the environment based on quantum collisional dynamics. This model is then translated into a gate-based circuit, in which the couplings between each portion act as controllable noisy quantum communication channels. We demonstrate the framework on IBM quantum hardware by executing remote gates under controllable communication noise. To highlight the flexibility of the platform, we further replicate the implementation results of distributed Grover's search on an ion-trap system. Finally, we test a larger circuit, i.e., Grover's search algorithm and the Quantum Fourier Transform (QFT), achieving reasonable fidelity across logical QPUs. Overall, the framework enables hardware-level emulation beyond the limits of classical scaling, captures noise sources through physical qubits, and is compatible with any platform supporting the Qiskit SDK.

## Key Findings


## Links
- **arXiv:** [2509.04029](https://arxiv.org/abs/2509.04029)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
