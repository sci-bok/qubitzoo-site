---
title: Constant-Depth Quantum Barrier Option Pricing via a Static Bivariate Oracle
  Framework
authors:
- Ji-Hui Mo
- Yuan-Hong Tao
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.27929'
language: en
date_ingested: '2026-10-21'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Qubit Readout is a classical hardware readout approach for quantum computing hardware. Source: latex text.

## Abstract
Quantum amplitude estimation offers a theoretical quadratic speedup over classical Monte Carlo methods for financial derivative pricing. However, extending gate-based algorithms to path-dependent barrier options has historically been hampered by sequential path discretization, where tracking price paths across $d$ monitoring dates incurs a linear escalation in qubit footprint and gate depth ($\mathcal{O}(d)$), posing severe coherence challenges for near-term quantum processors. In this work, we present a constant-depth quantum pricing framework that fundamentally eliminates the temporal dependency of barrier monitoring. Leveraging the Brownian reflection principle and Girsanov theorem, we project the continuous supremum dynamics onto a static bivariate joint distribution of the terminal price $S_T$ and running supremum $M_T$. This allows decoupling dynamic boundary checks into a static bivariate oracle comprising two parallel comparators and a dual-controlled rotation gate. We prove this architecture reduces circuit depth and comparator complexity from $\mathcal{O}(d)$ to an invariant $\mathcal{O}(1)$, while supporting discrete monitoring via zero-quantum-cost boundary corrections. Transpilation benchmarks for daily monitoring ($d = 252$) show our framework slashes physical CNOT count by 98.59% (from 2262 to 32) and compresses two-qubit depth by 98.02% (from 1514 to 30 layers). Under a realistic 127-qubit IBM Eagle noise model, the shallow circuit achieves a 7.84% relative valuation error with M3 readout mitigation. Finally, the framework seamlessly extends to nonlinear exotic payoffs lacking analytical solutions, establishing a noise-resilient pathway toward practical quantum advantage in computational finance.

## Key Findings


## Links
- **arXiv:** [2610.27929](https://arxiv.org/abs/2610.27929)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
