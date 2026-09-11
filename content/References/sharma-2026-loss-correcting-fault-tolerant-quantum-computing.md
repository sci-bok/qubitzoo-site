---
title: Loss-correcting fault-tolerant quantum computing architecture for neutral atoms
authors:
- Sanaa Sharma
- Yutaka Hirano
- Akihisa Goban
- Hayata Yamasaki
- Shinichi Sunami
- Prakash Murali
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2609.10079'
language: en
date_ingested: '2026-09-10'
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
Neutral-atom arrays are a leading qubit technology for large-scale, fault-tolerant quantum computing (FTQC). A dominant error source on this platform is qubit loss, which accrues with every operation and movement. The presence of loss undermines the promises of existing architectural work. Standard error correction targets stochastic Pauli errors and cannot correct loss, so most FTQC performance analyses are not directly compatible with it. Moreover, compilation and routing decisions, which strongly affect overall loss, are typically optimized against Pauli-error cost models and often remain loss-agnostic, potentially increasing exposure to the loss channel. In this work, we comprehensively model the effect of qubit loss on neutral-atom FTQC and develop a loss-tolerant transversal-gate architecture. We treat loss not as a predetermined error parameter but as a dynamic budget spent across a whole program, allowing us to control it by co-designing layout, compilation, and decoding. We target a physical implementation with no separate storage and entangling zones, eliminating the repeated SLM-AOD handoffs and long-distance shuttling that dominate loss in other layouts. We develop compiler optimizations that maximize gate parallelism while respecting the RF tone budget and AOD bandwidth constraints. Our work couples these with a loss-aware, delayed-erasure decoder and an end-to-end loss-aware magic state cultivation protocol. Overall, we improve accumulated loss per syndrome-extraction round by up to 2.15X against a zoned baseline and reduce logical error rates by over two orders of magnitude versus current architectures. Our framework also informs concrete device targets such as continuous reloading rates, AOD counts, and shuttling trajectory choices. We expect these insights to matter for system architects as neutral-atom hardware scales.

## Key Findings


## Links
- **arXiv:** [2609.10079](https://arxiv.org/abs/2609.10079)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
