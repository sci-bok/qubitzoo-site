---
title: 'Quantum Convolutional Neural Networks for Groundwater Heat Plume Prediction:
  A Surrogate Modeling Approach'
authors:
- Danyal Maheshwari
- Julia Pelzer
- Miriam Schulte
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2606.23411'
language: en
date_ingested: '2026-06-23'
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
Quantum machine learning methods are increasingly explored for modeling complex environmental systems, including groundwater heat plume dynamics. In this work, we explore a Quantum Convolutional Neural Network (QCNN) as a surrogate model for predicting temperature variations in groundwater induced by geothermal heat pumps in the city of Munich. To comply with the scalability constraints of current quantum hardware, the original high-dimensional simulation output is reduced to a compact set of representative parameters that serve as training targets for the surrogate. The proposed QCNN architecture consists of a quantum convolutional layer, a quantum pooling layer, and a fully connected quantum readout stage. Convolution and pooling operations are realized via parameterized quantum circuits based on rotational gates and measurement-driven decoding, while a Hamiltonian-inspired feature-encoding scheme is used to prepare informative input states on the quantum device. We evaluate the QCNN across multiple execution backends, including an ideal statevector simulator, a noisy simulator, IBM's 127-qubit Kyiv quantum processor, and the same hardware augmented with advanced error-mitigation techniques. Realistic noise models are employed to approximate device behavior and to assess the impact of mitigation strategies. Model performance is benchmarked using mean squared error (MSE) on both training and testing sets. The results show that, although classical neural networks still achieve the highest predictive accuracy, the QCNN attains competitive and consistent performance on simulators and exhibits noticeable improvement under error-mitigated hardware conditions. These findings indicate that quantum-enhanced surrogate modeling is a promising direction for future groundwater temperature prediction as quantum hardware and error-mitigation techniques continue to mature.

## Key Findings


## Links
- **arXiv:** [2606.23411](https://arxiv.org/abs/2606.23411)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
