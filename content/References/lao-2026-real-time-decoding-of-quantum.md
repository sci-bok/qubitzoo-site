---
title: Real-time decoding of quantum error correction codes using high-performance
  computing
authors:
- Lingling Lao
- Qiang Wang
- Yuanqi Liu
- Yantong Liu
- Haowen Wang
- Yitao Chen
- Yankang Zhao
- Zhenwei Wu
- Wei Zhang
- Yong Dong
- Yingwen Liu
- Mingche Lai
- Junjie Wu
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.03948'
language: en
date_ingested: '2026-08-05'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Surface Code is a codes encoding approach for quantum computing hardware. Source: latex text.

## Abstract
Quantum error correction (QEC) is indispensable for building scalable fault-tolerant quantum computers. Effective QEC demands stringent real-time decoding: the decoder must process syndrome measurements and determine corrections within a time scale--typically on the order of microseconds, to avoid data backlog. Scaling to large number of logical qubits further necessitates significant computational resources. In this work, we propose an architecture, called \emph{THQLink}, for real-time decoding of quantum error correction codes using high-performance computing (HPC) resources. The network connecting the HPC and the control system of quantum processing unit (QPU) is built on TH-Express and can be adapted to different quantum technologies and their associated control stacks. We report a round-trip latency of 2.944 $μ$s on average, with an incremental overhead of 130 ns per additional hop. Using a parallel window strategy, we demonstrate real-time decoding (1 $μ$s per QEC round) of the surface code up to distance 19 using a matching-based decoder on CPUs. Our work presents a scalable framework for real-time decoding in fault-tolerant quantum computing. It can be readily applied to quantum-centric supercomputers that feature tight integration between QPU and HPC resources, thereby enabling efficient support for hybrid quantum-classical algorithms and computation-intensive workloads offloaded from the QPU.

## Key Findings


## Links
- **arXiv:** [2608.03948](https://arxiv.org/abs/2608.03948)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
