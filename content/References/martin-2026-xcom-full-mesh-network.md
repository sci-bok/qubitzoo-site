---
title: 'XCOM: Full Mesh Network Synchronization and Low-Latency Communication for
  QICK (Quantum Instrumentation Control Kit)'
authors:
- Diego Martin
- Luis H. Arnaldi
- Kenneth Treptow
- Neal Wilcer
- Sho Uemura
- Sara Sussman
- David I Schuster
- Gustavo Cancelo
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2603.18977'
language: en
date_ingested: '2026-03-21'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Classical control hardware for quantum computing — FPGA-based multi-board synchronization and communication platform. Zoo entry: [[classical-control]].

## Abstract
Quantum computing experiments and testbeds with large qubit counts have until recently been a privilege afforded only to large companies or quantum technologies where scaling to hundreds or thousands of qubits does not require a substantial increase in quantum control hardware (neutral atoms, trapped ions, or spin defects). Superconducting and spin qubit testbeds critically depend on scaling their control systems beyond what a single electronics board can provide. Multi-board control systems combining RF, fast DC control, bias, and readout require precise synchronization and communication across many hardware and firmware components. To address this, we present XCOM, a network that synchronizes QICK boards and the absolute clocks governing quantum program execution to within 100 ps, free of drift and loss of lock. XCOM also provides deterministic, all-to-all simultaneous data communication with latency below 185 ns. Like QICK itself, XCOM is compatible with a broad range of qubit technologies and is designed to scale to large systems.

## Key Findings


## Links
- **arXiv:** [2603.18977](https://arxiv.org/abs/2603.18977)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
