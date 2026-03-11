---
title: "Levy 2002 — Universal Quantum Computation with Spin-1/2 Pairs and Heisenberg Exchange"
type: reference
arxiv_id: "quant-ph/0101057"
doi: "10.1103/PhysRevLett.89.147902"
authors:
  - Jeremy Levy
year: 2002
journal: "Physical Review Letters"
volume: 89
pages: "147902"
status: seed
tags:
  - singlet-triplet
  - spin-qubit
  - exchange-interaction
  - encoded-qubit
published: 2002-01-01
---

# Universal Quantum Computation with Spin-1/2 Pairs and Heisenberg Exchange

**Levy, PRL 89, 147902 (2002)** — [arXiv:quant-ph/0101057](https://arxiv.org/abs/quant-ph/0101057)

## Summary

Proposes encoding a logical qubit in the singlet-triplet subspace of two electron spins in a double quantum dot: $|0_L\rangle = |S\rangle = (|\uparrow\downarrow\rangle - |\downarrow\uparrow\rangle)/\sqrt{2}$ and $|1_L\rangle = |T_0\rangle = (|\uparrow\downarrow\rangle + |\downarrow\uparrow\rangle)/\sqrt{2}$. This encoding provides protection against uniform magnetic field fluctuations (both states have $m_s = 0$) and enables gate operations using only exchange interaction plus a magnetic field gradient.

## Key Physics

- **Encoding**: Logical qubit in $\{|S\rangle, |T_0\rangle\}$ subspace of two physical spins
- **Z-rotations**: Exchange interaction $J(t)$ splits singlet and triplet energies → rotation around $\hat{z}$ of logical Bloch sphere
- **X-rotations**: Magnetic field gradient $\Delta B_z$ between the two dots → rotation around $\hat{x}$
- **Two-qubit gates**: Requires coupling between adjacent double-dot pairs

## Advantages Over Single-Spin Qubits

1. No single-spin rotations needed (no local magnetic fields or ESR)
2. First-order insensitivity to uniform $B$-field fluctuations
3. Purely electrical control via gate voltages (exchange) + fixed gradient

## Zoo Links

- [[singlet-triplet-qubit]]
- [[single-spin-quantum-dot-loss-divincenzo-qubit]] — single-spin encoding (ancestor)
- [[exchange-only-qubit]] — three-spin encoding (descendant, no gradient needed)
- [[always-on-exchange-only-aeon]] — further descendant

## Evergreen Links

- [[heisenberg-exchange-in-quantum-dots]]
