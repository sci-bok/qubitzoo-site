---
title: 'I-QMapper: Error-Aware Layout Optimization and Device Diagnostics for NISQ
  Hardware'
authors:
- Milana Bazayeva
- Kenneth Merz
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2606.27508'
language: en
date_ingested: '2026-08-07'
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
Achieving high-fidelity execution on noisy intermediate-scale quantum (NISQ) hardware requires careful selection of physical qubit layouts, as gate errors, readout errors, and coherence times vary across the device and drift over time. Currently, qubit mapping is performed either through manual inspection of device calibration data or through automated layout pipelines, neither of which provides integrated, interactive layout visualization combined with calibration analytics. In this work, we present the Interactive Quantum Mapper (I-QMapper), a Jupyter-based, open-source tool for noise-aware layout selection, visualization, and analysis on superconducting quantum hardware. I-QMapper offers two operating modes: a general-purpose mode for arbitrary circuits, and a dedicated mode for quantum-chemistry applications, specifically tailored to the Local Unitary Cluster Jastrow (LUCJ) ansatz. Within each mode, a Design panel supports interactive layout construction, while an Error panel provides calibration analytics through four temporal viewing modes (Live, Snapshot, Intraday, and Multi-day range) together with threshold filtering and delta-mode comparison for drift identification. Each layout receives a Layout-Quality Score (LQS) that aggregates the readout and two-qubit gate errors of the layout into a single quality value. Starting from the automatic LUCJ circuit-generation provided by IBM Quantum, we extend it to a multi-programming setting in which multiple circuits are mapped onto a single quantum processing unit (QPU). I-QMapper further supports side-by-side visualization of two quantum backends and layout comparison, and session export for experimental reproducibility. By combining interactive exploration with calibration analytics, I-QMapper aims to support both rapid layout prototyping and informed noise-aware experimental design on NISQ devices.

## Key Findings


## Links
- **arXiv:** [2606.27508](https://arxiv.org/abs/2606.27508)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
