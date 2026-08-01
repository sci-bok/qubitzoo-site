---
title: Physics-Informed Graph Neural Networks for Surface Code Decoding via Discrete
  Exterior Calculus
authors:
- P. E. Trevisanutto
- S. Dhanpal
- S. Basak
- L. Petit
- J. Thiyagalingam
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.20060'
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

Surface Code is a codes encoding approach for quantum computing hardware. Source: latex text.

## Abstract
We introduce a physics-informed graph neural network decoder for the surface code. A discrete Poisson equation on the syndrome graph acts as a hard inductive bias on which a graph encoder learns syndrome-adaptive edge weights. A differentiable solver returns the node potentials and the associated edge current. Our central observation is that the logical-error signal is not carried by any part of that current, but by how the syndrome sits relative to the two code boundaries. We place a sink on each of the two boundaries linked by the logical operator and read the difference of the currents they drain. We prove that this single number is a topological pairing: it weighs each excited detector by a smooth coordinate that runs from +1 on one boundary to -1 on the other, and sums the votes. The coordinate is fixed by both the code topology and the learned metric, generating an exact and free-parameter readout. On the rotated surface code under circuit-level depolarising noise, this one topological scalar matches the best full-field readout. That parity is itself the result: for one logical qubit the logical signal is one-dimensional, so projecting onto it discards nothing. At larger code distance the picture strengthens indicating that isolating the pairing helps more as the field grows larger and sparser.

## Key Findings


## Links
- **arXiv:** [2607.20060](https://arxiv.org/abs/2607.20060)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
