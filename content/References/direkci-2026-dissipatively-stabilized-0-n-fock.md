---
title: Dissipatively Stabilized 0-n Fock Qubits for Noise-Biased Quantum Computing
authors:
- Su Direkci
- Simon Lieu
- Kyungjoo Noh
- Connor T. Hann
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.25959'
language: en
date_ingested: '2026-08-27'
verification_status: verified
influence_score: 0.68
novelty_flag: breakthrough
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Transmon is a superconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Noise-biased qubits have bit-flip errors that are exponentially suppressed relative to phase-flip errors, and offer a promising route toward fault-tolerant quantum computing. However, this bias can be compromised during gate operations with non-biased control qubits. To address this limitation, we propose a "0-n" Fock qubit architecture that maintains the noise bias by encoding information in the ground state and n-th excited state of a nonlinear multi-level system, such as a transmon. This encoding is achieved via a dissipative stabilization that acts as decay and gain for lower and upper intermediate levels, respectively. We first analytically demonstrate that bit-flip errors are exponentially suppressed with the number of levels. Then, we present a practical implementation using a multi-mode lossy filter to achieve the frequency-selective dissipation. Finally, we numerically demonstrate that bit-flip probabilities approaching $10^{-8}$ are achievable for controlled-X gates on cat qubits using the 0-n qubit as an ancilla with $n \geq 9$ (i.e. ten or more levels), for realistic experimental parameters. Building on this, we simulate syndrome extraction in a repetition code, achieving logical error rates in the megaquop regime with only a distance of $d=9$.

## Key Findings


## Links
- **arXiv:** [2608.25959](https://arxiv.org/abs/2608.25959)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
