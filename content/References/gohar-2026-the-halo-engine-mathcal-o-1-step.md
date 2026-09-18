---
title: 'The HALO Engine: $\mathcal{O}(1)$-Step Compilation and Localized String Rupture
  for Lattice Gauge Theories on Quantum Hardware'
authors:
- Abhiroop Gohar
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.19243'
language: en
date_ingested: '2026-09-12'
verification_status: verified
influence_score: 0.68
novelty_flag: breakthrough
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Transmon is a superconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Simulating real-time dynamics in lattice gauge theories (LGTs) is severely constrained by the circuit depth overhead of standard fermion-to-qubit mappings, which scale linearly or quadratically with system size. To overcome this depth-scaling bottleneck, we introduce the Hardware-Aware Lattice Optimization (HALO) compiler, an architecture executing global time-evolution in an immutable $\mathcal{O}(1)$ circuit depth per Trotter step. By natively mapping composite gauge links to hardware topologies, HALO achieves a $91.36\%$ reduction in entangling gate overhead compared to unoptimized Jordan-Wigner baselines, compressing a 16-qubit global step to 56 CNOTs and bypassing extensive $\mathcal{O}(N)$ scaling limits. We validate this compiler on IBM superconducting transmon processors by simulating the mesoscopic Quantum Link Model (QLM) truncation of the Schwinger model. Coupling $\mathcal{O}(1)$ compilation with Zero-Noise Extrapolation (ZNE), we track localized string rupture, extracting the dynamical crossover of pair creation at $t \approx 0.790$ with an $18.3 \pm 2.2\%$ rupture probability. Furthermore, we map the dynamical phase diagram, identifying the confinement phase boundary at $g_c = 1.0$. Finally, we introduce a scalable 2D unit-cell blueprint, paving a direct pathway toward the fault-tolerant simulation of two-dimensional Quantum Chromodynamics (QCD).

## Key Findings


## Links
- **arXiv:** [2608.19243](https://arxiv.org/abs/2608.19243)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
