---
title: 'Plaquette: A hardware-aware design platform for fault-tolerant quantum computers'
authors:
- Raul Conchello Vendrell
- Carlos Díaz López
- Ish Dhand
- Kshitij Kapoor
- Davide Laureti
- Marcello Massaro
- Pranjal Nayak
- Ivan Ogloblin
- Martin B. Plenio
- Shreya Prasanna Kumar
- Matteo Santandrea
- Varun Seshadri
- Antal Száva
- Trevor Vincent
- Raphael Weber
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.08767'
language: en
date_ingested: '2026-07-10'
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
Hardware teams building fault-tolerant quantum computers (FTQCs) must decide which imperfections to suppress, and that decision requires the logical performance of the architecture under the device's actual noise. Hardware noise often departs from the stochastic Pauli models used by scalable stabilizer simulators: superconducting transmons leak out of the computational subspace, neutral atoms scatter through intermediate states, trapped ions heat as their motional modes absorb phonons, and miscalibrated controls over-rotate coherently. We present Plaquette, a theoretical framework and software suite that computes the logical performance of fault-tolerant architectures directly from the physics of such imperfections. In Plaquette, a hardware error model is specified once, as Kraus operators, Hamiltonian-Lindblad dynamics, or an experimentally reconstructed quantum channel, and is compiled automatically into the exact or approximate representation required by each of four sampler classes: stabilizer sampling for Pauli noise, the new XPauli sampler for leakage and environment sectors, near-Clifford samplers for coherent errors, and full-state simulation for exact reference calculations. We validate the XPauli and near-Clifford samplers against full-state simulation, which they can match within statistical uncertainty while Pauli twirling can fall short depending on the error model. We demonstrate the framework on three error models: leakage in superconducting qubits, intermediate-state scattering in neutral atoms, and heating in trapped ions. The size of the discrepancy between Plaquette and Clifford-only simulations varies with platform and noise process, so reliable thresholds, error budgets, and overhead estimates require the most accurate simulation available. Plaquette provides a direct path from the open-system physics of a device to the logical performance of the FTQC built on it.

## Key Findings


## Links
- **arXiv:** [2607.08767](https://arxiv.org/abs/2607.08767)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
