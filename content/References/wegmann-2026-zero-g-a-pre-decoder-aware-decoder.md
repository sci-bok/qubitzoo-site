---
title: 'Zero-G: A Pre-Decoder-Aware Decoder for Quantum Error Correction'
authors:
- Peter Wegmann
- Theofilos Augoustis
- Aleksandra Świerkowska
- Emmanouil Giortamis
- Pramod Bhatotia
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.02030'
language: en
date_ingested: '2026-08-04'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Classical Control is a classical hardware infrastructure approach for quantum computing hardware. Source: latex text.

## Abstract
Fault-tolerant quantum computing requires classical decoders that keep pace with the underlying hardware, translating syndrome measurements into corrections fast enough to avoid an exponential backlog. To meet this real-time constraint, pre-decoders have emerged as part of a hierarchical decoding approach to resolve simple, local errors before passing a sparser residual syndrome to a strong decoder. While pre-decoding should, in theory, speed up the strong decoder, in practice, the speedup is only marginal, since existing strong decoders are designed to decode dense syndromes and cannot exploit the sparsity provided by pre-decoders. To address this, we present Zero-G, a strong decoder designed for use alongside pre-decoders. As a stochastic approximate minimum-weight perfect matching (MWPM) decoder, Zero-G exploits sparse residual syndromes, dynamically trading latency for accuracy rather than relying on an all-or-nothing runtime-accuracy trade-off. By decoupling hardware control from the decoding core itself, we enable heterogeneous deployment across both FPGAs and CPUs without maintaining separate implementations. Zero-G achieves a $10\times$ latency improvement over existing strong decoders at matching accuracy, with worst-case sub-350ns decoding at code distances up to d=15, while scaling to 640 logical qubits on a single 128-core CPU and 32 logical qubits on a single AMD Versal V80 FPGA.

## Key Findings


## Links
- **arXiv:** [2608.02030](https://arxiv.org/abs/2608.02030)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
