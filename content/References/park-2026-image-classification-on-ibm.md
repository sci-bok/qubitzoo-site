---
title: Image Classification on IBM Quantum Computers
authors:
- Junghoon Justin Park
- Jiook Cha
- Jun-gyeong Park
- Hwidong Yoo
- Kwangmin Yu
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.17705'
language: en
date_ingested: '2026-07-21'
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
Quantum machine learning on real noisy intermediate-scale quantum (NISQ) hardware has remained largely confined to binary or few-class tasks, limited by the cost of on-hardware training and the underuse of large devices at inference. We present a unified framework that classifies ten-class MNIST end-to-end on a $127$-qubit IBM Eagle processor, with three central contributions. First, a two-phase protocol decouples a gradient-based classical optimization of the encoder and readout from a gradient-free optimization of the quantum parameters, removing the parameter-shift gradient cost that makes on-hardware training impractical. Second, we introduce Quantum Multi-Programming to a trained quantum classifier for the first time, packing multiple circuit copies onto one device to deliver parallel inference at no mean-accuracy cost while cutting quantum-processor job submissions proportionally. Third, a controlled comparison shows that on-hardware fine-tuning yields no measurable accuracy gain, motivating a practical NISQ workflow: train on a classical simulator and reserve the hardware for inference only. Benchmarked against a matched-capacity classical network, the quantum module shows no per-parameter accuracy advantage at this scale; we therefore frame the work as a feasibility-and-workflow demonstration for multi-class quantum image classification on current hardware.

## Key Findings


## Links
- **arXiv:** [2607.17705](https://arxiv.org/abs/2607.17705)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
