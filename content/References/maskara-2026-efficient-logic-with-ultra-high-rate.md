---
title: Efficient Logic with Ultra-High-Rate Quantum Codes
authors:
- Nishad Maskara
- Rohan Mehta
- Zhiyang He
- Varun Menon
- J. Pablo Bonilla Ataides
- Mikhail D. Lukin
- Hengyun Zhou
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.06749'
language: en
date_ingested: '2026-10-06'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Qldpc Code is a codes encoding approach for quantum computing hardware. Source: latex text.

## Abstract
Quantum low-density parity-check (qLDPC) codes offer a promising route to reducing the qubit overhead of fault tolerance, with recent ultra-high-rate constructions achieving encoding rates above one half. In this work, we develop fast and parallel logical computation methods for ultra-high-rate codes. We first utilize the group symmetries of the codes to partition the logical qubits into orbits, and then apply parallel surgery methods to implement group-invariant collections of logical Pauli-product measurements. These measurements are highly programmable, as we may arbitrarily couple logical orbits as long as each measurement is repeated across the whole orbit(s). To reduce the space and time overheads, we develop a technique called chain-map convolution, which uses the group structure to boost both the spatial and temporal distances of our protocol in a highly efficient manner. As case studies, we construct distance-preserving parallel measurement gadgets for the [[256, 68, 12]], [[576, 148, 18]] pair-partition codes, and a [[1152, 580, 12]] rate-$1/2$ code, with only around $2.5\times$ space overhead and 3-4 rounds of syndrome extraction each. The same methods also enable parallel injection of cultivated magic states into high-rate codes. Finally, we extend programmability through subgroup restrictions, revealing a tradeoff between logical control and the spacetime resources required for fault tolerance and highlighting the crucial role structured parallelism plays in reducing overhead. These results provide new methods for designing qLDPC logical operations with low spacetime overhead, opening a route toward more efficient fault-tolerant quantum architectures.

## Key Findings


## Links
- **arXiv:** [2610.06749](https://arxiv.org/abs/2610.06749)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
