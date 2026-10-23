---
title: Error Correction in a Distributed Quantum Computer
authors:
- E. M. Ainley
- A. Agrawal
- T. Araki
- A. R. Martínez
- D. Main
- E. Malinowski
- J. A. Blackmore
- S. Chen
- P. Drmota
- M. Mallweger
- D. P. Nadlinger
- R. Srinivas
- S. C. Benjamin
- G. Araneda
- D. M. Lucas
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2609.13065'
language: en
date_ingested: '2026-10-17'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Qldpc Code is a codes encoding approach for quantum computing hardware. Source: latex text.

## Abstract
Building fault-tolerant quantum computers with large numbers of logical qubits requires both scalable hardware architectures and error-correcting codes that make efficient use of physical qubits. Photonic interconnects address both of these challenges by allowing the physical qubits to be distributed across multiple processors while providing the non-local connectivity necessary to implement resource-efficient codes such as high-rate quantum low-density parity-check (qLDPC) codes. A key requirement for realising this architecture is the ability to perform stabiliser measurements between remote processors, which has not previously been demonstrated experimentally. Here we report the first experimental demonstration of distributed quantum error detection and correction. We generate entanglement between network qubits in two separate trapped-ion processors and use it to perform remote syndrome measurements on data qubits. We first realise a distributed [[2, 1, 1]] repetition code, detecting phase-flip errors on a logical qubit encoded across the two modules in real time and suppressing logical errors. We then combine these mid-circuit syndrome measurements with real-time feedforward to actively correct arbitrary single-qubit Pauli errors on a distributed Bell state. These results provide an experimental foundation for quantum error correction (QEC) across modular quantum architectures.

## Key Findings


## Links
- **arXiv:** [2609.13065](https://arxiv.org/abs/2609.13065)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
