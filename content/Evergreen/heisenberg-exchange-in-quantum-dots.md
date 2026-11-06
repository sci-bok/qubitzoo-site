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

## Input/output contract

This note begins only after the charge sector has been integrated out:

| Boundary | Object | Route |
|---|---|---|
| Input | A calibrated scalar coupling $J(t)$ | If $J$ still depends explicitly on tunnel barriers, detuning, charge admixture, or materials noise, return to [[exchange-interaction-in-quantum-dots]]. |
| Transformation | $J(t)$ becomes a pulse area or a projected Hamiltonian in an encoded spin manifold | Stay here for singlet-triplet phase, partial-SWAP angle, and exchange-only / RX / AEON logical axes. |
| Output | A gate identity or platform-specific logical operation | Continue to [[sqrt-swap-as-universal-gate]] for the direct two-spin entangler or to the relevant encoded-qubit entry. |

The routing hinge is therefore simple: **voltage-to-$J$ belongs upstream; $J$-to-unitary belongs here.**

## Two-spin algebra

Exchange conserves total spin and splits the singlet from the triplet manifold by an amount set by $J$. That symmetry makes the interaction simultaneously useful and constrained: a pulse changes the relative phase between singlet and triplet sectors, so exchange alone does not give arbitrary two-qubit control, but it naturally generates the SWAP / [[sqrt-swap-as-universal-gate]] family once combined with local phases.

For a pulse of duration $t$ or, more generally, pulse area $\Phi = \int J(t)\,dt/\hbar$,

$$U_{\mathrm{ex}}(\Phi) = \exp\!\left[-i\Phi\,\vec S_1 \cdot \vec S_2\right].$$

The important router is not the exact matrix form, but the fact that **pulse area is the abstraction boundary**. Once $J(t)$ has been reduced to a calibrated area, short pulses give partial swaps, the canonical half-swap pulse gives the native entangler of the Loss-DiVincenzo picture, and the same area logic survives after projection into larger encoded-spin manifolds.

For the direct two-spin gate identity, entangling action, and universal-gate construction, continue to [[sqrt-swap-as-universal-gate]]. Keep $\sqrt{\mathrm{SWAP}}$ distinct from $\sqrt{\mathrm{iSWAP}}$: isotropic $\vec S_1\!\cdot\!\vec S_2$ exchange generates the former, while an XY / flip-flop interaction generates the latter.

## Encoded-spin projections

| Branch | What exchange becomes after projection | Best entry points |
|---|---|---|
| Direct two-spin branch | The native nearest-neighbor entangling resource, usually discussed through $\sqrt{\mathrm{SWAP}}$ pulses | [[loss-divincenzo-qubit]], [[spin-qubit]], [[sqrt-swap-as-universal-gate]] |
| Two-spin encoded branch | A logical splitting in the $\{|S\rangle, |T_0\rangle\}$ manifold | [[singlet-triplet-qubit]] |
| Three-spin encoded branch | Non-collinear logical axes built from pairwise terms like $J_{12}\,\mathbf S_1\!\cdot\!\mathbf S_2 + J_{23}\,\mathbf S_2\!\cdot\!\mathbf S_3$ | [[exchange-only-qubit]] |
| Always-on resonant branch | The projected exchange-defined splitting becomes the object a resonant drive addresses | [[rx-qubit]] |
| Always-on protected branch | The same projected structure is parked at a sweet spot so control means steering always-on couplings without reintroducing detuning sensitivity | [[aeon-qubit]], [[charge-noise-sweet-spot]] |

## Scope boundary

- Keep microscopic origin, barrier-vs-detuning tuning, and materials-specific charge sensitivity in [[exchange-interaction-in-quantum-dots]].
- Keep operating-point protection and detuning-symmetry arguments in [[charge-noise-sweet-spot]].
- Use this note as the compact algebraic bridge between those device stories and gate-level control.

## Key relationships

- [[sqrt-swap-as-universal-gate]] — gate-level consequence of exchange pulses
- [[singlet-triplet-qubit]] — logical $Z$ splitting from exchange in the $m_S = 0$ subspace
- [[exchange-only-qubit]] — universal control from non-collinear exchange axes in a three-spin encoding
- [[rx-qubit]] — always-on exchange operated in a resonantly driven regime
- [[aeon-qubit]] — always-on exchange at a double sweet spot
- [[exchange-interaction-in-quantum-dots]] — microscopic origin and tuning knobs for $J$ before projection to an effective spin Hamiltonian

## References

- [[loss-divincenzo-1998-quantum-dots]] — direct two-spin exchange as a native entangler
- [[petta-2005-singlet-triplet]] — exchange control in the two-spin encoded manifold
- [[divincenzo-2000-exchange-only]] — three-spin encoded control built from pairwise exchange
- [[shim-2016-aeon]] — always-on exchange at a double sweet spot
