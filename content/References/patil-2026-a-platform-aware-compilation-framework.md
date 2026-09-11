---
title: A Platform-aware Compilation Framework for Fault-tolerant Quantum Computation
authors:
- Srushti Patil
- Susan X. Chen
- Andreas Juul Bay-Smidt
- Stefan Alaric Schäffer
- Peter Krogstrup
- Stefano Paesani
- Gemma C. Solomon
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2609.08908'
language: en
date_ingested: '2026-09-09'
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
The compilation of an algorithm can vary significantly with the choice of physical hardware platform and error correction model. Yet, current compilation frameworks typically commit to a single architecture-hardware configuration, making it difficult to assess resource estimates across platforms. We present a platform-aware compilation framework that re-compiles a quantum circuit into a hardware-compatible instruction set as well as fault-tolerant operations and provides end-to-end resource estimates in terms of physical-qubit count, time-to-solution, and classical processing time. We benchmark the framework by obtaining end-to-end resource estimates for different compilers, each tailored to the functionalities of specific hardware modalities: connectivity, clock speed, and noise model. As part of this framework, we introduce a transversal active volume (t-AV) compilation architecture designed for the efficient execution of fault-tolerant operations in platforms supporting long-range logical connectivity. We benchmark the framework for Hamiltonian simulation of the 2D Fermi Hubbard model as well as for eigenenergy estimation of a small molecule (trimethylenemethane) as a candidate for early fault-tolerant demonstration of quantum chemistry. For the latter, we show that end-to-end quantum simulations can be achieved with $\sim10^4$ physical qubits and runtimes ranging from $10^2$ ms (photonics, superconducting) to $10^5$ ms (neutral atoms).

## Key Findings


## Links
- **arXiv:** [2609.08908](https://arxiv.org/abs/2609.08908)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
