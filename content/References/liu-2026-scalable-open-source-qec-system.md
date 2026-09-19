---
title: A Scalable Open-Source QEC System with Sub-Microsecond Decoding-Feedback Latency
authors:
- Junyi Liu
- Yi Lee
- Yilun Xu
- Gang Huang
- Xiaodi Wu
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2603.16203'
language: en
date_ingested: '2026-09-19'
verification_status: verified
influence_score: 0.74
novelty_flag: high
extracted_by: codex-daily-audit
verified_by: codex-pdf-title-page-2026-09-19
disputes: 0
generated_by: scibok-audit-backfill
---

Open-source multi-board RFSoC control and decoding hardware for low-latency quantum error correction. Zoo entry: [[classical-control]].

## Abstract
Liu et al. built a three-board ZCU216 prototype on the RISC-Q control architecture, integrating pulse control, syndrome aggregation, inter-board communication, decoding, and feedback distribution. The measured distance-3 decoding-feedback path took 446 ns. The paper extrapolates sub-microsecond performance through distance 21, but the reported prototype was not coupled to a live qubit processor.

## Key Findings
- Measured 446 ns end-to-end decoding-feedback latency for a distance-3 surface-code control-stack prototype.
- Integrated control, communication, decoding, and feedback across three RFSoC boards.
- Presented distance-21 sub-microsecond latency as an extrapolation from measured subsystem performance, not a processor-scale demonstration.

## Links
- **arXiv:** [2603.16203](https://arxiv.org/abs/2603.16203)

## Zoo Links
- [[classical-control]]

## Verification Report
Author order was checked against the paper PDF title page on 2026-09-19. The arXiv page and latency claims were also verified.
