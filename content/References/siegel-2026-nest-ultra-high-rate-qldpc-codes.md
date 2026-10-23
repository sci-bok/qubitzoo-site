---
title: 'NeST: ultra-high-rate qLDPC codes with sub-$50μ$s stabiliser cycles via spin
  shuttling'
authors:
- Adam Siegel
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.28538'
language: en
date_ingested: '2026-10-21'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Spin Qubit is a semiconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Quantum low-density parity-check codes now reach encoding rates up to 50% at useful distances. Their checks however are long-range group actions, not local neighbourhoods, and that connectivity has so far been supplied by neutral atoms. Silicon spin qubits offer the same primitive --- coherent transport of qubit blocks --- through electron shuttling, and on microsecond rather than millisecond timescales. They however travel along fabricated tracks rather than free space: permutations an atom array obtains by moving tweezers must here become collision-free motions on a physical lattice. We here present the first code and spin-qubit hardware co-design. We build an architecture whose geometry mimics that of a family of non-abelian groups, broad enough to host codes of excellent parameters: a hierarchy of nested conveyor-belt loops on a plain square lattice of shuttling tracks, in which every group multiplication becomes a rigid, globally controlled motion of whole qubit trains. We call it NeST, for Nested Shuttling Tracks. A code search over the family returns rate-20% mitten codes up to $[[1400,280,\leq 28]]$, and circuit-level simulations including shuttling dephasing give thresholds above $10^{-3}$ with sub-$50μ$s stabiliser cycles, two to three orders of magnitude faster than neutral-atom implementations. Via extrapolations, we estimate that this largest code may reach a logical error probability per qubit per round of $10^{-14}$, assuming a ten-fold improvement on early shuttling demonstrations, with other physical errors at p=0.1%. Logic is compatible with NeST too: for the [[150,30,10]] code we build a code-surgery gadget in which every qubit again moves only by rigid belt motions, at no qubit cost and a 29% increase in gate layers. This demonstrates that ultra-low-overhead fault tolerance and a fast clock speed are not competing goals, and that silicon spin qubits can supply both.

## Key Findings


## Links
- **arXiv:** [2610.28538](https://arxiv.org/abs/2610.28538)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
