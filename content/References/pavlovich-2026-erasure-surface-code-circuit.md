---
title: Erasure surface code circuit without mid-circuit erasure checks
authors:
- Margaret Pavlovich
- Ivan Rojkov
- Chen Wang
- Shruti Puri
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.29443'
language: en
date_ingested: '2026-08-05'
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
Quantum error correction (QEC) codes can correct twice as many erasure errors as Pauli errors. Because of this scaling advantage, there is significant interest in developing qubits whose dominant error channel can be converted into erasures via mid-circuit erasure checks. However, such erasure checks come with hardware overhead in practice. End-of-the-line three-state readout, in which one simultaneously measures a qubit's erasure status and computational state, is an alternative to mid-circuit erasure checks that is generally simpler to implement. In this work, we systematically study the conditions required to enable erasure performance---the doubled error-correction capacity---in the surface code with and without mid-circuit erasure checks. We introduce the moonwalking surface code, the time-reversal of the walking surface code, as a zero-overhead circuit with superior handling of leakage and erasure. Specifically, we show that it enables erasure-like logical error rate scaling when combined with three-state measurement if leaked qubits cause two-qubit gates to be skipped and an appropriate decoder is used. Our decoder, based on a branch-and-bound algorithm, specifically incorporates the noise structure of the skip-gate leaked-qubit effect.

## Key Findings


## Links
- **arXiv:** [2607.29443](https://arxiv.org/abs/2607.29443)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
