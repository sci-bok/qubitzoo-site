---
title: Quantum error correction at ultra-low overhead
authors:
- Zhide Lu
- Weikang Li
- Dong-Ling Deng
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.02773'
language: en
date_ingested: '2026-08-18'
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
Suppressing errors is the central challenge for useful large-scale quantum computing. While quantum error correction promises a viable solution to this challenge, existing codes typically suffer from trade-offs among encoding efficiency, error threshold, and hardware feasibility. Here, we introduce Cornucopia codes, a family of practical, hardware-efficient quantum low-density parity-check codes that achieve an ultra-high encoding rate exceeding $1/2$ while maintaining a pseudo-threshold exceeding $0.4\%$ under the standard circuit-level noise model. Inspired by recent affine-permutation-based code constructions and the long-range connectivity available in reconfigurable neutral-atom arrays, we adopt a structured code geometry in which the code layout, atom rearrangement, and syndrome-extraction schedule are co-designed. This structure enables nonlocal syndrome measurements through simple, parallel atom rearrangements. A complete syndrome extraction cycle measures all $X$- and $Z$-type checks in parallel with $12$ entangling layers, independent of the code size. The resulting threshold is comparable to those of the surface code and bivariate bicycle codes. In particular, a single code block $[[2844,1426,18]]$ encodes $1{,}426$ distance-$18$ logical qubits, achieving an extrapolated logical error rate of $2.6\times10^{-16}$ ($1.9\times10^{-31}$) per logical qubit per cycle, assuming the physical error rate of $0.1\%$ ($0.01\%$). By comparison, a bivariate bicycle code implementation would require more than $68{,}000$ physical qubits to encode the same number of logical qubits at a comparable logical error rate. These results bring demonstrations of ultra-low-overhead quantum error correction within the reach of near-term quantum processors.

## Key Findings


## Links
- **arXiv:** [2608.02773](https://arxiv.org/abs/2608.02773)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
