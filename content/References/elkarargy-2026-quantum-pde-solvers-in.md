---
title: 'Quantum PDE Solvers in Practice: Application-Driven Benchmarking of the Heat
  Equation'
authors:
- Mahmoud Elkarargy
- Abdelaziz Rahwan
- Abdelrahman Elsayed
- Forat Hatem
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.12688'
language: en
date_ingested: '2026-07-15'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Qubit Readout is a classical hardware readout approach for quantum computing hardware. Source: abstract text.

## Abstract
Quantum PDE solvers are difficult to evaluate in practice because published studies use different discretizations, output models, reconstruction rules, and hardware assumptions. We present a reproducible, application-driven benchmark for the 1-D Dirichlet heat equation that compares eleven kernels under the same problem instances and readout contract. The benchmark covers coherent linear solvers (HHL, QSVT, and QLS-Fourier), VQLS, imaginary-time methods (QITE, var-QITE, and AVQDS), real-time Hamiltonian simulation and unitary dilations (Hamiltonian simulation, Schade-Hamiltonian, and Schr"odingerisation), and the spectral quantum simulation method (QSM). We use three initial conditions, four grid sizes from $n=4$ to $7$ qubits ($N=16$ to $128$), a CFL-like ratio $r\approx0.4$, and final time $T=1$. Statevector, ideal-shot ($10^5$ shots per step), and noisy Aer backends separate algorithmic, sampling, and device-noise errors. On statevector, QSM and Schade-Hamiltonian reproduce the semi-discrete reference to floating-point precision, Schr"odingerisation reaches approximately $10^{-4}$ error, and QITE is the strongest non-transform method for smooth data. Under the fixed-shot setting, HHL degrades to approximately $0.79$ relative $\ell_2$ error, while several low-depth or postselected methods become readout-limited. A norm-mismatch ablation attributes 23--29% of the $n=7$ smooth-initial-condition error of Hamiltonian simulation, AVQDS, and QLS-Fourier to reconstruction normalization. Compact observables, including total thermal energy and individual Fourier-mode weights, require 1--3 orders of magnitude fewer shots than full-field reconstruction. The resulting public benchmark provides a practical guide for selecting quantum PDE solvers.

## Key Findings


## Links
- **arXiv:** [2607.12688](https://arxiv.org/abs/2607.12688)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **abstract**.
Text truncated: **no**.

Ingestion notes:
- LaTeX source extraction failed
- PDF text extraction failed
- Fell back to abstract only
