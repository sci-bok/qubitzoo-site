---
title: 'SpiderCat: Optimal Fault-Tolerant Cat State Preparation'
authors:
- Andrey Boris Khesin
- Sarah Meng Li
- Boldizsár Poór
- Benjamin Rodatz
- John van de Wetering
- Richie Yeung
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2603.05391'
language: en
date_ingested: '2026-03-23'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Cat Codes is a superconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
The ability to fault-tolerantly prepare CAT states, also known as multi-qubit GHZ states, is an important primitive for quantum error correction. It is required for Shor-style syndrome extraction, and can also be used as a subroutine for doing fault-tolerant state preparation of CSS codewords. Existing approaches to fault-tolerant CAT state preparations have been found using computationally expensive heuristics involving SAT solving, reinforcement learning, or exhaustive analysis. In this paper, we constructively find optimal circuits for CAT states in a more scalable way. In particular, we derive formal lower bounds on the number of CNOT gates required for circuits implementing $n$-qubit CAT states that do not spread errors of weight at most $t$ for $1\leq t \leq 5$. We do this by using fault-equivalent rewrites of ZX-diagrams to reduce it to a problem of characterising certain 3-regular simple graphs. We then provide families of such optimal graphs for infinitely many values of $n$ and $t\leq5$. By encoding the construction of optimal graphs as a constraint satisfaction problem we find explicit constructions for circuits that match this lower bound on CNOT count for all $n\leq50$ and $t \leq 5$ and for nearly all pairs $(n,t)$ with $n\leq 100$ and $t\leq 5$ or $n\leq 50$ and $t\leq 7$, significantly extending the regimes that were achievable by previous methods and improving the resource counts for existing constructions. We additionally show how to trade CNOT count against depth, allowing us to construct constant-depth fault-tolerant implementations using $O(n)$ ancilla and $O(n)$ CNOT gates.

## Key Findings


## Links
- **arXiv:** [2603.05391](https://arxiv.org/abs/2603.05391)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
