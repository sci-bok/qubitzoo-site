---
title: 'MCMit: Mid-Circuit Measurement Error Mitigation'
authors:
- Emmanouil Giortamis
- Felix Gust
- Aleksandra Świerkowska
- Sandra Stankovic
- Innocenzo Fulginiti
- Yanbin Chen
- Xiaorang Guo
- Benjamin Lienhard
- Martin Schulz
- Pramod Bhatotia
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2604.25863'
language: en
date_ingested: '2026-04-29'
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
Distributed Quantum Computing (DQC) and Quantum Error Correction (QEC) rely on dynamic circuits that include Mid-Circuit Measurements (MCMs) and classical feedback. These operations present a major bottleneck: MCMs suffer from high error rates that lead to real-time branching errors, while MCM and classical feedback latencies amplify decoherence errors. Current hardware controllers, qubit-state discriminators, and software error mitigation techniques fail to address these challenges holistically. We propose MCMit, a hardware-software co-design to mitigate branching and latency-induced errors. MCMit introduces a scalable, constant-latency multi-control branch instruction for faster classical feedback and two qubit-state discriminators, a transformer, and a CNN, with high accuracy even under short measurement durations. On the software side, static MCM elimination and stochastic branching complement the hardware by mitigating residual branching errors that persist despite hardware improvements. We implement MCMit on Qubic and evaluate it using experimentally extracted QPU readout traces. Our branch instruction reduces feedback latency by up to 70\%, improving circuit depths by up to $7\times$ over Qubic. Our CNN discriminator achieves 37-73\% higher accuracy for short measurement durations than the baselines, leading to up to 80\% lower logical error rates in QEC. Last, our software mitigation improves fidelity by 18--30\% over baseline methods.

## Key Findings


## Links
- **arXiv:** [2604.25863](https://arxiv.org/abs/2604.25863)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
