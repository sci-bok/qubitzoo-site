---
title: 'Q-Capsule: A Localized Capsule-Based Quantum Neural Architecture for Barren
  Plateau Mitigation'
authors:
- Awal Ahmed Fime
- Tasfia Zaman Samiha
- Saika Zaman
- Dimitris Pados
- George Sklivanitis
- Abdur R. Shahid
- Ahmed Imteaj
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.11261'
language: en
date_ingested: '2026-10-10'
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
Variational quantum algorithms are often limited by barren plateaus: gradients vanish as circuit size and depth increase, making quantum neural networks difficult to train. We propose Q-Capsule, a localized capsule-based quantum neural architecture that mitigates this problem through register partitioning, local readout, sparse inter-capsule coupling, trainable data re-uploading, and Quantum Fisher Information Matrix (QFIM)-guided adaptive depth growth. By restricting the dominant support of each observable to a small capsule and controlling inter-capsule entanglement, Q-Capsule preserves useful gradient signals while retaining communication between local quantum representations. As the register width increases, Q-Capsule consistently maintains stable gradient variance, whereas globally entangling baselines exhibit exponential suppression with a log-gradient-variance slope near -ln 2 per qubit. Q-Capsule also produces more structured optimization landscapes, higher parameter efficiency, improved robustness to depolarizing noise, and lower measurement requirements. Its adaptive policy achieves 98.1% accuracy on binary classification and 97.7% on four-class classification, while using approximately 73% fewer two-qubit gates than the fixed-deep model on the multiclass task.

## Key Findings


## Links
- **arXiv:** [2610.11261](https://arxiv.org/abs/2610.11261)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
