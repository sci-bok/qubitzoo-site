---
title: "Cavity quantum electrodynamics for superconducting electrical circuits: An architecture for quantum computation"
authors:
- Alexandre Blais
- Ren-Shou Huang
- Andreas Wallraff
- S. M. Girvin
- R. J. Schoelkopf
year: 2004
journal: Physical Review A
doi: 10.1103/PhysRevA.69.062320
arxiv_id: cond-mat/0402216
language: en
date_ingested: '2026-03-05'
verification_status: verified
influence_score: 0.90
novelty_flag: breakthrough
extracted_by: claude-code
verified_by: pending
disputes: 0
generated_by: pipeline-v1
published: 2004-01-01
---

Proposes circuit QED: coupling a Cooper pair box qubit to a 1D superconducting transmission line resonator to reach the strong-coupling regime of cavity QED on a chip.

## Abstract

We propose a realizable architecture using one-dimensional transmission line resonators to reach the strong coupling limit of cavity quantum electrodynamics in superconducting electrical circuits. The vacuum Rabi frequency for the coupling of cavity photons to quantized excitations of an adjacent electrical circuit (qubit) can easily exceed the damping rates of both the cavity and the qubit. This architecture is attractive both as a macroscopic analog of atomic physics experiments and for quantum computing and control, since it provides strong inhibition of spontaneous emission, potentially leading to greatly enhanced qubit lifetimes, allows high-fidelity quantum non-demolition measurements of the state of multiple qubits, and has a natural mechanism for entanglement of qubits separated by centimeter distances. In addition it would allow production of microwave photon states of fundamental importance for quantum communication.

## Key Findings

- 1D transmission line resonator confines zero-point energy to $\sim 10^{-5}$ cubic wavelengths, achieving $\mathcal{E}_\text{rms} \sim 0.2\,\text{V/m}$.
- Cooper pair box transition dipole moment $d \sim 2 \times 10^4\,ea_0$ yields vacuum Rabi rate $g/\pi \sim 100\,\text{MHz}$.
- Critical photon number $m_0 \leq 10^{-6}$ and minimum atom number $N_0 \leq 6 \times 10^{-5}$ — deep strong coupling.
- Dispersive regime gives qubit-state-dependent cavity shift $\chi = g^2/\Delta$ for QND readout.
- Purcell-limited qubit lifetime enhancement when detuned from cavity.
- Two-qubit entanglement via virtual photon exchange through quantum bus with coupling $\sim g_1 g_2/\Delta$.
- Decoherence-free subspace encoding discussed for fault tolerance.

## Verification Report

Verification status: **verified**.
Disputes resolved: **0**.
Ingestion source: **latex** (`cond-mat/0402216`).
Text truncated: **no** (1977 lines, full paper).

## Zoo Entries

- [[circuit-qed]]
