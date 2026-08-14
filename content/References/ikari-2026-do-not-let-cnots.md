---
title: 'Do Not Let CNOTs Overwhelm the Decoder: Scheduling Transversal Gates for Fast
  FTQC'
authors:
- Shota Ikari
- Yuga Hirai
- Yasunari Suzuki
- Hiroshi Nakamura
- Yosuke Ueno
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.11719'
language: en
date_ingested: '2026-08-13'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Neutral-Atom Qubit is a neutral atom qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Transversal CNOT (TCNOT) gates can accelerate fault-tolerant quantum computation (FTQC) in the surface code by reducing the number of syndrome extraction rounds required between logical operations from $O(d)$ to $O(1)$. This is particularly attractive for quantum platforms with long-range connectivity, such as neutral atoms. However, dense TCNOT schedules substantially increase the classical decoding workload. TCNOTs propagate errors across multiple surface-code patches, enlarging the spatiotemporal region that must be decoded jointly. Consequently, denser TCNOT schedules increase decoding latency and memory requirements and potentially exceed available decoder capacity. Moreover, because the detector error model (DEM) of each decoding window depends on the TCNOT schedule, exhaustively precomputing all possible window-level DEMs is infeasible, requiring just-in-time (JIT) DEM compilation. Thus, the practical benefit of TCNOT gates is limited not only by quantum hardware performance but also by classical decoding and DEM-compilation capacity. We introduce PACE, a decoder-aware scheduling framework for TCNOT-based FTQC. PACE first mitigates the decoder-side costs of aggressive TCNOT scheduling through three complementary techniques. Hybrid Window Decoding assigns different decoders for each decoding window according to its DEM structure. DEM Stitch generates schedule-specific window-level DEMs just in time by assembling reusable precompiled fragments. Sub-window Parallel Decoding decomposes large windows into smaller sub-windows with graph-coloring formulation. Building on these techniques, PACE then performs decoder-aware scheduling to maximize TCNOT concurrency within the available decoder resources. Our evaluation shows the trade-off between quantum acceleration and classical decoding cost, revealing the limitations of current decoding systems for TCNOT-based FTQC.

## Key Findings


## Links
- **arXiv:** [2608.11719](https://arxiv.org/abs/2608.11719)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
