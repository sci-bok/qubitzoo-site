---
title: Automatic Charge State Tuning of 300 mm FDSOI Quantum Dots Using Neural Network
  Segmentation of Charge Stability Diagram
authors:
- Peter Samaha
- Amine Torki
- Ysaline Renaud
- Sam Fiette
- Emmanuel Chanrion
- Pierre-Andre Mortemousque
- Yann Beilliard
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2604.13662'
language: en
date_ingested: '2026-04-16'
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
Tuning of gate-defined semiconductor quantum dots (QDs) is a major bottleneck for scaling spin qubit technologies. We present a deep learning (DL) driven, semantic-segmentation pipeline that performs charge auto-tuning by locating transition lines in full charge stability diagrams (CSDs) and returns gate voltage targets for the single charge regime. We assemble and manually annotate a large, heterogeneous dataset of 1015 experimental CSDs measured from silicon QD devices, spanning nine design geometries, multiple wafers, and fabrication runs. A U-Net style convolutional neural network (CNN) with a MobileNetV2 encoder is trained and validated through five-fold group cross validation. Our model achieves an overall offline tuning success of 80.0% in locating the single-charge regime, with peak performance exceeding 88% for some designs. We analyze dominant failure modes and propose targeted mitigations. Finally, wide-range diagram segmentation also naturally enables scalable physic-based feature extraction that can feed back to fabrication and design workflows and outline a roadmap for real-time integration in a cryogenic wafer prober. Overall, our results show that neural network (NN) based wide-diagram segmentation is a practical step toward automated, high-throughput charge tuning for silicon QD qubits.

## Key Findings


## Links
- **arXiv:** [2604.13662](https://arxiv.org/abs/2604.13662)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
