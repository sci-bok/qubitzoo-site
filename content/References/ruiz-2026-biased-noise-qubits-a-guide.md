---
title: 'Biased-noise qubits: a guide to efficient fault-tolerance using the hierarchy
  of errors'
authors:
- Diego Ruiz
- Jérémie Guillaud
- Christophe Vuillot
- Mazyar Mirrahimi
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.20143'
language: en
date_ingested: '2026-07-23'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Cat Codes is a superconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Qubits with strongly biased noise, in which phase-flip errors are orders of magnitude more frequent than bit-flips, arise both naturally, as in electron and nuclear spins, and by engineering, as in stabilized cat qubits. This noise structure holds the promise of reducing the daunting hardware overhead of fault-tolerant quantum computing, but exploiting it requires physical operations that do not convert frequent phase-flips into rare bit-flips. In this review, we analyze the most prominent fault-tolerant protocols for biased-noise qubits, organized according to the available set of such bias-preserving operations. When this set is restricted to the CZ gate together with preparation and measurement in the X basis, we show that the complexity of the required syndrome extraction gadgets essentially cancels the benefit of the noise bias: at experimentally relevant error rates, one may as well ignore the bias and rely on standard error correction designed for depolarizing noise. The situation changes drastically when a bias-preserving CX gate is available: the hierarchy of errors can then be reflected in the structure of the code, with frequent phase-flips corrected by a dedicated high-threshold code and rare bit-flips by concatenation with a high-rate code. The same hierarchy also enables hardware-efficient preparation of magic states. Finally, as a bias-preserving CX is forbidden in naturally biased platforms and challenging in engineered ones, we present a measurement-based architecture in which a high-fidelity quantum non-demolition readout of multi-qubit Pauli Z operators takes its place, extending these overhead reductions to a much broader range of physical platforms.

## Key Findings


## Links
- **arXiv:** [2607.20143](https://arxiv.org/abs/2607.20143)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
