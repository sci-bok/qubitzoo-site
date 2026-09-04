---
title: 'QArray+: A physics-informed GPU-accelerated simulator for quantum dot arrays'
authors:
- Pranav Vaidhyanathan
- Barnaby van Straaten
- Alice Petrillo
- Rahul Marchand
- Edwin De Nicolo
- Menno Veldhorst
- Brucek Khailany
- Taylor L. Patti
- Natalia Ares
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2609.02736'
language: en
date_ingested: '2026-09-04'
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
Semiconductor quantum-dot arrays are a compelling platform for scalable quantum technologies, yet their practical operation is hindered by the complexity of tuning large-scale devices. Existing automation tools rely on simplified physical models---such as constant-capacitance approximations and equilibrium Hubbard models---which assume instantaneous relaxation to a steady state. These frameworks fail in experimentally critical regimes where measurement rates exceed tunneling dynamics, necessitating more sophisticated non-equilibrium control strategies. To bridge this gap, we introduce QArray+, an extension of the QArray framework that incorporates gate-dependent tunnel coupling and a quantum open-system description of dissipative processes. This approach enables the unified simulation of coherent interdot charge-state hybridization and the non-equilibrium latching dynamics essential for training robust machine-learning models for automated device operation. Implemented in JAX with GPU acceleration, QArray+ scales across GPUs and multi-node systems. For example, a charge stability diagram for a 100X100 grid of gate voltages over 64 dots can be computed in $\sim0.17\,\mathrm{s}$ on multiple GPUs. Since interdot interactions are short-ranged and the corresponding tuning corrections are local, simulations at these scales capture the physics relevant to even larger devices. These capabilities support high-throughput dataset generation for automated device tuning.

## Key Findings


## Links
- **arXiv:** [2609.02736](https://arxiv.org/abs/2609.02736)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
