---
title: Machine Learning for Charge State Characterization of Isolated Double Quantum
  Dots
authors:
- Hyma Vallabhapurapu
- Marco Candido
- Krishna Choudhary
- Paul Steinacker
- Ensar Vahapoglu
- Chris Escott
- Wee Han Lim
- Andre Saraiva
- Nard Dumoulin Stuyck
- MengKe Feng
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.20871'
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

Spin Qubit is a semiconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Scaling semiconductor quantum dot arrays toward fault-tolerant quantum computing requires efficient tuneup of spin qubits, a process that depends on the analysis of charge stability maps (CSMs) and remains largely manual. While machine learning has been widely applied to CSM analysis in reservoir-coupled devices, automated tuning in the increasingly important isolated-mode regime has received limited attention. In isolated-mode CSMs, charge transitions appear as near-vertical lines, making them well suited to compact, task-specific models. We present two convolutional neural networks with fewer than one million parameters, trained on CSMs collected from 32 silicon metal-oxide-semiconductor (SiMOS) double-quantum-dot devices measured at approximately 1 K using an automated cryogenic probing system. Sixteen devices were used for training and sixteen were held out to evaluate cross-device generalization against hand-labeled ground truth. CSMClassifier identifies charge instability and sensor artifacts, achieving 94% macro-averaged accuracy across three quality classes on 2,407 held-out images. ChargeLineNet localizes charge-transition lines and determines electron occupancy, achieving 95.3% exact line-count accuracy on 1,131 held-out images. Combined into a single pipeline, the models correctly determine electron occupancy for 93.8% of clean held-out images. Pre-training on synthetic images substantially improves label efficiency. Fine-tuning the pre-trained model on limited experimental data maintains over 90% accuracy, whereas training from scratch degrades significantly under the same conditions. Together, the two models occupy only 6.5 MB and process images in less than 60 ms on standard laboratory hardware, demonstrating a practical path toward scalable, automated characterization and tuneup of quantum-dot devices.

## Key Findings


## Links
- **arXiv:** [2607.20871](https://arxiv.org/abs/2607.20871)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
