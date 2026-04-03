---
title: 'Beyond Single-Shot Fidelity: Chernoff-Based Throughput Optimization in Superconducting
  Qubit Readout'
authors:
- Sinan Bugu
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2602.22174'
language: en
date_ingested: '2026-03-28'
verification_status: verified
influence_score: 0.68
novelty_flag: breakthrough
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Transmon is a superconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Single-shot fidelity is the standard benchmark for superconducting qubit readout, yet it does not directly minimize the wall-clock time needed to certify a quantum state. We treat the dispersive measurement record as a stochastic communication channel and compute the classical Chernoff information governing the multi-shot error exponent, using a trajectory model that incorporates T1 relaxation with full cavity memory. The integration time that maximizes single-shot fidelity and the time that minimizes total certification time do not coincide. For representative transmon parameters and hardware overheads, the throughput-optimal window is longer, cutting certification time by roughly 9-11%, with the gain saturating near 1.13x in the high-readout-power and high-overhead regime. Benchmarking the extracted classical information against the unit-efficiency Gaussian Chernoff limit defines an information-extraction efficiency: dispersive schemes capture ~45% at short integration times, dropping to eta_info(tau_rate) ~ 12% at tau_rate ~ 1.22 us as T1-induced trajectory smearing accumulates. These results connect readout calibration directly to the operational objective of minimizing certification time in high-throughput superconducting processors.

## Key Findings


## Links
- **arXiv:** [2602.22174](https://arxiv.org/abs/2602.22174)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
