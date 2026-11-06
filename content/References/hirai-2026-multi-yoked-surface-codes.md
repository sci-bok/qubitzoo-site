---
title: Multi-Yoked Surface Codes
authors:
- Yuga Hirai
- Yasunari Suzuki
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.04613'
language: en
date_ingested: '2026-11-02'
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
The surface code is the leading candidate for fault-tolerant quantum computation owing to its planar nearest-neighbor connectivity, high threshold, and efficient decoding, but its low encoding rate demands on the order of a thousand physical qubits per logical qubit in the teraquop regime. Yoked surface codes improve the density by a factor of two or three by concatenating a high-density parity check code on top of the surface code while retaining planar nearest-neighbor connectivity. In this work, we generalize this idea to multiple levels of concatenation and introduce multi-yoked surface codes. Our construction rests on two new ingredients. First, we propose a family of outer codes called chain codes, built by chaining copies of a seed code that detects the block errors of the code one level below; the resulting codes use all logical qubits of the lower level and achieve a high encoding rate within a few concatenation levels. Second, we design a patch allocation in which movable workspaces perform the yoking checks by lattice surgery with a hierarchy of yoking intervals, so that lower-level checks are performed frequently while higher-level checks are performed less often, which avoids the long yoking intervals that a single large-distance outer code would require. As a benchmark, we construct a three-yoked surface code with a $[[256,166,8]]$ outer code and evaluate it numerically under the SI1000 noise model using soft information from the surface code decoder. The logical error rate is suppressed exponentially in the inner code distance, and in the teraquop regime the three-yoked surface code is about 4 to 4.5$\times$ denser than the unyoked surface code.

## Key Findings


## Links
- **arXiv:** [2610.04613](https://arxiv.org/abs/2610.04613)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
