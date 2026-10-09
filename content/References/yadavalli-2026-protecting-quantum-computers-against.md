---
title: Protecting Quantum Computers against Untrusted Users
authors:
- Shiv Akshar Yadavalli
- Joel Rajakumar
- Alexander Schuckert
- Michael J. Gullans
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.06812'
language: en
date_ingested: '2026-10-06'
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
Publicly accessible fault-tolerant quantum computers must preserve scientific utility while limiting cryptanalytic power. We propose the restricted model of computation, 1/2BQP_1: a quantum server provides random computational-basis inputs, revealed only after execution, and one designated output bit. This interface permits arbitrary circuits and system sizes. We conjecture that a classical client making polynomially many adaptive requests cannot efficiently factor RSA moduli. The model subsumes the well-known one-clean-qubit model DQC1, retaining its applications to infinite-temperature multi-time correlations, out-of-time-order correlators, and suitably normalized partition functions. We propose a candidate for separating 1/2BQP_1 from DQC1 based on testing classical predictions of quantum spin dynamics. We argue security in two steps. First, we show that one-bit readout makes the quantum stages of standard factoring algorithms classically simulable, even when their preparation and postprocessing are redesigned within a broad family around a single arithmetic-oracle call. This covers the quantum stages of Shor, Ekera-Hastad, Kitaev, and Regev factoring constructions. Second, we examine the workaround of coherently implementing rational reconstruction to release a factor bit. Random inputs obstruct this straightforward attack: known techniques accommodate logarithmic-depth classical circuits, but rational reconstruction has resisted such parallelization for decades. Therefore, we show that security of our protocol is built on not only classical hardness for factoring, but also conjectured circuit lowerbounds for rational reconstruction.

## Key Findings


## Links
- **arXiv:** [2610.06812](https://arxiv.org/abs/2610.06812)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
