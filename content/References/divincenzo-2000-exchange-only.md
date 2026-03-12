---
title: "DiVincenzo et al. 2000 — Universal Quantum Computation with the Exchange Interaction"
type: reference
arxiv_id: "quant-ph/0004064"
doi: "10.1103/PhysRevA.63.042307"  
authors:
  - David P. DiVincenzo
  - Dave Bacon
  - Julia Kempe
  - Guido Burkard
  - K. Birgitta Whaley
year: 2000
journal: "Physical Review A"  
volume: 63
pages: "042307"
status: seed
tags:
  - exchange-only
  - spin-qubit
  - decoherence-free-subspace
  - encoded-qubit
---

# Universal Quantum Computation with the Exchange Interaction

**DiVincenzo, Bacon, Kempe, Burkard & Whaley, PRA 63, 042307 (2000)** — [arXiv:quant-ph/0004064](https://arxiv.org/abs/quant-ph/0004064)

## Summary

Shows that universal quantum computation can be performed using ONLY the isotropic Heisenberg exchange interaction — no single-spin rotations, no magnetic fields, no spin-orbit coupling needed. The logical qubit is encoded in three physical spins, using a decoherence-free subspace of the total spin-1/2 sector.

## Key Contributions

1. **Three-spin encoding**: Logical qubit in the $S = 1/2$, $S_z = 1/2$ subspace of three electron spins:
   - $|0_L\rangle = |S_{12}\rangle|\uparrow\rangle_3$ (spins 1,2 in singlet)
   - $|1_L\rangle = \sqrt{2/3}|T_{12}^+\rangle|\downarrow\rangle_3 - \sqrt{1/3}|T_{12}^0\rangle|\uparrow\rangle_3$

2. **All-exchange universality**: Pairwise exchange $J_{ij}\vec{S}_i \cdot \vec{S}_j$ between any pair in the triple dot provides full SU(2) on the logical qubit. Two-qubit logical gates from exchange between adjacent triples.

3. **Decoherence-free subspace**: The encoding protects against collective dephasing (uniform $B$-field fluctuations).

## Significance

Eliminates the most experimentally challenging requirement of the Loss-DiVincenzo proposal — local magnetic field control at the single-dot level. Trade-off: more physical qubits per logical qubit (3:1 encoding overhead).

## Zoo Links

- [[exchange-only-qubit]]
- [[single-spin-quantum-dot-loss-divincenzo-qubit]] — ancestor (requires single-spin rotations)
- [[singlet-triplet-qubit]] — two-spin encoding (still needs magnetic gradient)
- [[always-on-exchange-only-aeon]] — variant with always-on exchange

## Evergreen Links

- [[heisenberg-exchange-in-quantum-dots]]
- [[sqrt-swap-as-universal-gate]]
