---
title: 'NAKO: A Benchmarking Framework for Evaluating and Diagnosing Neutral-Atom
  Quantum Compilers'
authors:
- Wenjie Sun
- Zhigang Wang
- Xiaoyu Li
- Desheng Zheng
- Lianhui Yu
- Geng Chen
- Guowu Yang
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.39296'
language: en
date_ingested: '2026-10-30'
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
Reconfigurable neutral-atom processors couple gate scheduling, atom placement, and parallel atom transport, so compiler decisions jointly determine physical execution costs. Evaluating these compilers requires attainable resource references and a way to trace excess costs to their causes. We present NAKO, a benchmarking framework that parameterizes circuits by qubit count, logical depth, and requested one- and two-qubit gate densities, and assigns attainable targets for Rydberg stages, routing intervals, and movement layers. Each benchmark is paired with an executable reference schedule; under the stated execution model, construction guarantees minimum Rydberg-stage and routing-interval counts, and minimum movement among schedules with the minimum Rydberg-stage count. Comparing compiler outputs with these references quantifies resource gaps, while reference mappings and intermediate physical states enable controlled interventions that trace excess costs to specific compiler decisions. In a 648-run evaluation of Enola and OLSQ-DPQA, NAKO identifies distinct bottlenecks. For Enola, placement scoring and cross-stage layout management contribute to excess movement; diagnosis-guided interventions reduce mean movement by 78.9% across five matched circuits. For OLSQ-DPQA, premature candidate selection and limited exploration of preparatory states produce avoidable entangling stages and routing intervals; four fixed-checkpoint continuations each eliminate one Rydberg stage and one routing interval without increasing movement. NAKO thus links resource targets backed by constructive optimality guarantees to controlled diagnosis and validation of compiler-specific resource savings.

## Key Findings


## Links
- **arXiv:** [2610.39296](https://arxiv.org/abs/2610.39296)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
