---
title: 'ARGON: A GNN-Empowered Compilation Framework for Scalable Neutral Atom Computing'
authors:
- Wenjie Sun
- Xiaoyu Li
- Zhigang Wang
- Lianhui Yu
- Geng Chen
- Guowu Yang
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.21216'
language: en
date_ingested: '2026-07-24'
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
Neutral atom quantum systems offer a promising pathway to large-scale quantum computing due to high qubit uniformity and flexible connectivity. To exploit this architecture, compilers must coordinate dynamic atom transport alongside highly parallel entangling gates. As circuits scale, the interplay between these operations becomes a system bottleneck, introducing denser logical interactions and longer temporal dependencies. Compilers must simultaneously satisfy rigid spatial constraints and complex movement schedules. Existing joint spatiotemporal compilation methods face an exponentially expanding search space, incurring substantial overheads or compromising fidelity as circuit size grows. In this work, we propose ARGON, a scalable compilation framework that introduces a spatiotemporal decoupling paradigm for neutral atom processors. Our key novelty is offloading static geometric conflict resolution to an offline phase, precomputing a library of hardware-certified, high-parallelism spatial layouts. To guide temporal routing, we deploy a Graph Neural Network (GNN) predictor to evaluate candidate layouts against deep temporal horizons, proactively evading downstream kinematic bottlenecks. Finally, a heuristic router translates the selected sequence into collision-free physical transport. Evaluations show ARGON completes compilation in under 10 seconds, delivering up to a >10^4x and 600x average speedup over state-of-the-art baselines. ARGON also minimizes routing decoherence and reduces Rydberg stages, improving execution fidelity by up to 10^2x on dense circuits.

## Key Findings


## Links
- **arXiv:** [2607.21216](https://arxiv.org/abs/2607.21216)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
