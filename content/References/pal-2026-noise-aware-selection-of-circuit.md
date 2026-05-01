---
title: Noise-aware selection of circuit cutting strategies under hardware noise non-uniformity
authors:
- Debarthi Pal
- Ritajit Majumdar
- Padmanabha Venkatagiri Seshadri
- Anupama Ray
- Yogesh Simmhan
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2604.24422'
language: en
date_ingested: '2026-04-28'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Tunable Coupler is a classical hardware coupling approach for quantum computing hardware. Source: latex text.

## Abstract
Noise in contemporary quantum hardware is highly non-uniform across qubits and couplers, giving rise to localized low-noise "islands" within otherwise noisy device topologies. As quantum workloads scale, executions are increasingly forced to traverse high-noise regions, degrading algorithmic fidelity. Circuit cutting provides a route to circumvent such regions by decomposing large circuits into smaller subcircuits, but its practicality is limited by exponential sampling overhead and the lack of systematic guidance on how cut strategies should align with heterogeneous hardware noise. In this work, we present a hardware-noise-aware circuit cutting framework that explicitly exploits the spatial non-uniformity of noise in quantum devices. Rather than proposing a new cut-finding algorithm, we formalize the problem of device-constraint selection under realistic hardware noise and show that this choice critically determines both execution overhead and effective noise. Using a unified gate- and wire-cutting formulation, we demonstrate that small, hardware-informed relaxations in the device constraint yield exponential reductions in execution overhead while preserving alignment with low-noise hardware regions. Across representative workloads, our method achieves an average reduction in the number of circuit executions ranging from 5-54x for 20-qubit circuits, and enables tractable circuit cutting for 50-qubit circuits and application-level benchmarks where conventional strategies incur prohibitive overhead. These results establish noise-aware device-constraint selection as a necessary ingredient for making circuit cutting resource-efficient and practically deployable on contemporary quantum hardware.

## Key Findings


## Links
- **arXiv:** [2604.24422](https://arxiv.org/abs/2604.24422)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
