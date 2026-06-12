---
title: The dynamic 4.8.8 Floquet code
authors:
- Aliki A. Capatos
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2606.09678'
language: en
date_ingested: '2026-06-09'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Floquet Code is a codes encoding approach for quantum computing hardware. Source: latex text.

## Abstract
Fault-tolerant quantum memories depend on the syndrome extraction circuit as much as on the underlying code. Ancilla-free or dynamic circuits are an effective way to improve this circuit layer. For the 6.6.6 honeycomb Floquet code, making the circuit dynamic raises the threshold and lowers the qubit overhead, but at the cost of halving the spatial code distance. A dynamic construction for the 4.8.8 lattice layout was conjectured to preserve full distance. I confirm this and give a dynamic measurement circuit for the CSS 4.8.8 Floquet code. To benchmark it, I construct and compare four circuit-level implementations on a torus, including two dynamic variants (with and without mid-circuit resets), the standard ancilla-based circuit, and a pipelined ancilla-based circuit. Under circuit-level depolarising noise, the reset dynamic circuit reaches a per-round threshold of $0.463\%$ $(0.490\%)$ with MWPM (BP+matching), while the no-reset variant reaches the highest threshold of all four circuits at $0.512\%$ $(0.574\%)$. The standard ancilla-based circuit only achieves $0.228\%$ $(0.240\%)$, but the pipelined schedule reaches $0.478\%$ $(0.489\%)$. The reset dynamic circuit also has a faster-growing timelike distance, with $2\le d_t/n_{\mathrm{qec}}\le 3$ asymptotically against a tight $3/2$ for the other three, and running it for fewer rounds gives the smallest spacetime volume in the fast-reset regime, while the no-reset variant is smallest in the slow-reset regime. The 4.8.8 dynamic circuits therefore see the expected threshold gain and overhead reduction without the spatial-distance cost, demonstrating the advantage of dynamic syndrome extraction in Floquet codes.

## Key Findings


## Links
- **arXiv:** [2606.09678](https://arxiv.org/abs/2606.09678)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
