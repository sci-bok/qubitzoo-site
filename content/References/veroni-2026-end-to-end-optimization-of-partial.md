---
title: End-to-End Optimization of Partial Fault Tolerance in Neutral-Atom Arrays
authors:
- Stefano Veroni
- Aydin Deger
- Andrew J. Daley
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.26471'
language: en
date_ingested: '2026-10-20'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Rydberg Neutral-Atom Qubit is a neutral atom qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Fault-tolerant (FT) quantum computation offers a pathway to quantum advantage, but its realization is hindered by its significant overhead. The partially FT "STAR" architecture reduces the cost of universal computation at the price of relaxing FT requirements for non-Clifford operations, increasing exposure to hardware noise. Therefore, maximizing its performance and applicability demands careful co-design with the underlying hardware. In this work we investigate the co-design of the STAR architecture with neutral-atom platforms, connecting the underlying atomic physics to logical error modeling and application-level performance. At the physical level, we identify a favorable noise bias in $^{171}\mathrm{Yb}$ Rydberg gates, and show how it can be enhanced through error-selective pulse optimization. At the logical level, we identify an intrinsic error suppression mechanism, yielding vanishing logical coherent noise in leading order. Detailed circuit-level simulations of surface code implementations show more than an order of magnitude reduction in logical error relative to previous estimates. As a concrete target application, we focus on the Fermi-Hubbard model with periodic boundaries, for which we design a simulation circuit particularly suited to early implementations. We quantify the resource tradeoff of partially and fully FT approaches to gate synthesis, with the former showing approximately an order of magnitude reduction in state-injection depth, and an even larger reduction in Clifford resources. Comparing with classical and fully FT approaches, we identify regimes where partial fault tolerance provides both lower overheads and lower error rates. In our estimates, this is accessible with moderate error rates $p\sim 10^{-3}$ and a few thousand qubits, underlining that for these types of problems, partial FT approaches provide a compelling pathway to early quantum advantage.

## Key Findings


## Links
- **arXiv:** [2610.26471](https://arxiv.org/abs/2610.26471)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
