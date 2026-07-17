---
title: Filon Methods for Highly Oscillatory Controlled Quantum Systems
authors:
- Spencer Lee
- Daniel Appelö
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.13580'
language: en
date_ingested: '2026-07-16'
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
Fast and accurate classical simulation of quantum systems is a central challenge in the design and control of quantum computers, but the highly oscillatory dynamics of these systems severely limit the efficiency of standard numerical methods. To address this, we adapt Filon quadrature for oscillatory integrals into two numerical methods, called Filon and Controlled Filon, for solving linear systems of ODEs with highly oscillatory solutions. We tailor both methods for efficient implementation in controlled quantum systems, and the Controlled Filon method additionally accounts for the oscillatory structure of the control pulses. We show by numerical experiments that these methods significantly reduce the computational cost of accurately simulating systems of superconducting transmon qubits by decreasing the number of timesteps needed to reach a given level of precision, with only a modest increase in the cost per timestep. For a realistic simulation of the dynamics of a CNOT gate, the Controlled Filon method is the most efficient method tested at every target accuracy, outperforming the best Hermite method by up to 6x and the Hermite method of the same order by up to 500x.

## Key Findings


## Links
- **arXiv:** [2607.13580](https://arxiv.org/abs/2607.13580)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
