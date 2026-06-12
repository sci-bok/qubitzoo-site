---
title: "Heisenberg Exchange in Quantum Dots"
type: evergreen
status: evergreen
tags:
  - exchange-interaction
  - quantum-dot
  - spin-qubit
  - two-qubit-gate
---

# Heisenberg Exchange in Quantum Dots

Once charge fluctuations are integrated out, neighboring quantum-dot spin qubits reduce to the exchange Hamiltonian

$$H_\mathrm{ex}(t) = J(t)\,\vec{S}_1 \cdot \vec{S}_2.$$

This note is intentionally the **Hamiltonian-first** companion to [[exchange-interaction-in-quantum-dots]]. Use it when the question is what rotation an exchange pulse implements, how encoded spin manifolds inherit logical axes, or why $\sqrt{\text{SWAP}}$ keeps reappearing. For barrier-vs-detuning control, Hubbard-model intuition, and charge-noise tradeoffs, go back to the companion note.

## Two-spin algebra

Exchange conserves total spin and splits the singlet from the triplet manifold by an amount set by $J$. That symmetry makes the interaction simultaneously useful and constrained: a pulse changes the relative phase between singlet and triplet sectors, so exchange alone does not give arbitrary two-qubit control, but it naturally generates the SWAP / [[sqrt-swap-as-universal-gate]] family once combined with local phases.

The entangling angle is set by the pulse area $\int J(t)\,dt$. Short pulses give partial swaps; the canonical half-swap pulse is the native entangler in the Loss-DiVincenzo picture.

## Encoded-spin projections

- **[[loss-divincenzo-qubit]] / [[spin-qubit]]**: exchange is the direct nearest-neighbor entangling resource.
- **[[singlet-triplet-qubit]]**: after projection into the $\{|S\rangle, |T_0\rangle\}$ manifold, exchange acts primarily as the logical energy splitting between the encoded basis states.
- **[[exchange-only-qubit]] / [[rx-qubit]] / [[aeon-qubit]]**: pairwise terms like $J_{12}\,\mathbf S_1\!\cdot\!\mathbf S_2 + J_{23}\,\mathbf S_2\!\cdot\!\mathbf S_3$ become non-collinear logical axes, always-on splittings, or resonant drive matrix elements inside a three-spin encoded subspace.

## Scope boundary

- Keep microscopic origin, barrier-vs-detuning tuning, and materials-specific charge sensitivity in [[exchange-interaction-in-quantum-dots]].
- Keep operating-point protection in [[charge-noise-sweet-spot]].
- Use this note as the compact algebraic bridge between those device stories and gate-level control.

## Key relationships

- [[sqrt-swap-as-universal-gate]] — gate-level consequence of exchange pulses
- [[singlet-triplet-qubit]] — logical $Z$ splitting from exchange in the $m_S = 0$ subspace
- [[exchange-only-qubit]] — universal control from non-collinear exchange axes in a three-spin encoding
- [[rx-qubit]] — always-on exchange operated in a resonantly driven regime
- [[aeon-qubit]] — always-on exchange at a double sweet spot
- [[exchange-interaction-in-quantum-dots]] — microscopic origin and tuning knobs for $J$

## References

- [[loss-divincenzo-1998-quantum-dots]] — direct two-spin exchange as a native entangler
- [[petta-2005-singlet-triplet]] — exchange control in the two-spin encoded manifold
- [[divincenzo-2000-exchange-only]] — three-spin encoded control built from pairwise exchange
- [[shim-2016-aeon]] — always-on exchange at a double sweet spot
