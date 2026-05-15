---
title: OAM-Induced Lattice Rotation Reveals a Fractional Optimum in Fault-Tolerant
  GKP Quantum Sensing
authors:
- Simanshu Kumar
- Nandan S Bisht
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2605.13271'
language: en
date_ingested: '2026-05-14'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Gkp Codes is a superconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Photon loss and dephasing rapidly degrade the sensitivity of quantum sensors, yet systematic methods for designing error-correcting codes whose geometry is simultaneously adapted to the sensing task and the noise channel do not exist. Here we establish that orbital-angular-momentum (OAM) encoding and Gottesman-Kitaev-Preskill (GKP) lattice geometry are structurally coupled: an OAM mode of topological charge $\ell$ induces a phase-space rotation $θ_\ell=\ellπ/\ell_{\max}$, corresponding to a family of twisted GKP stabilizer lattices. Using an end-to-end differentiable Strawberry Fields--TensorFlow circuit, we jointly optimise $\ell$, the lattice aspect ratio $r$, and the finite-energy envelope $ε$ to maximise quantum Fisher information subject to $P_{\rm err}\leq10^{-3}$. The optimum occurs at the fractional charge $\ell=1.5$ ($θ=67.5^\circ$), implementable with a half-integer spiral phase plate, which reduces $P_{\rm err}$ by $23.9\times$ relative to the square-lattice baseline while leaving $\mathcal{F}_Q$ unchanged to within $0.2\%$. This surpasses the best integer value ($\ell=2$, $15.7\times$) and arises from an exact $180^\circ$ periodicity of the $P_{\rm err}(θ)$ landscape, confirmed analytically and numerically. We derive a transcendental balance equation for the optimal angle $θ^*(η,γ,r)$ and prove that it decreases with both $γ$ and $η$. A Shannon-inspired metrological capacity $\mathcal{C}=\mathcal{F}_Q\cdot(-\ln P_{\rm err})$, maximised at $\ell=1.5$ with a $41\%$ gain over the square lattice, quantifies the joint sensitivity--fault-tolerance resource. These results establish a geometric design principle for noise-adaptive quantum sensors and a fully open-source differentiable template extensible to other bosonic code families.

## Key Findings


## Links
- **arXiv:** [2605.13271](https://arxiv.org/abs/2605.13271)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
