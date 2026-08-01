---
title: Quantum LDPC codes with design rate 1/5 and good performance below 1000 physical
  qubits
authors:
- Yifan Hong
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.27644'
language: en
date_ingested: '2026-07-31'
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
Constant-rate quantum low-density parity-check (LDPC) codes promise fault-tolerant quantum computation with constant spatial overhead in the asymptotic limit. Nonetheless, discovering finite-length code instances with good practical performance remains challenging. We introduce a new family of quantum LDPC codes with design rate $1/5$ and check weight $9$ that approaches the teraquop memory regime per qubit-round with several hundred physical qubits, under idling-free circuit-level noise of strength $0.1\%$ and GPU-accelerated Relay-belief-propagation (Relay-BP) decoding with average latencies around 1-2 ms, a regime relevant to trapped-ion and neutral-atom processors. The construction involves the balanced product of classical LDPC codes with design rate $1/2$ that share non-abelian $\mathbb{Z}_\ell \rtimes \mathbb{Z}_m$ group symmetries, which may be of independent interest for classical error correction. We build syndrome extraction circuits tailored to reconfigurable atom arrays using a simple greedy scheduler, with single-round rearrangement times around 30-60 ms using present hardware specifications, and substantial room for future improvements. We also construct logical Pauli bases that are equivariant with respect to the group symmetry, which can significantly compress the design space for code surgery. Together, these results further advance the practicality of constant-rate quantum LDPC codes for near-term, fault-tolerant quantum computers.

## Key Findings


## Links
- **arXiv:** [2607.27644](https://arxiv.org/abs/2607.27644)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
