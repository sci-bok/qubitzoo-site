---
title: "Heisenberg Exchange in Quantum Dots"
type: evergreen
status: seed
tags:
  - exchange-interaction
  - quantum-dot
  - spin-qubit
  - two-qubit-gate
---

# Heisenberg Exchange in Quantum Dots

The fundamental two-qubit interaction in semiconductor spin qubits. When the tunnel barrier between two single-electron quantum dots is lowered, virtual tunneling produces a Heisenberg exchange coupling:

$$H_s(t) = J(t)\,\vec{S}_1 \cdot \vec{S}_2$$

where the exchange constant $J(t) = 4t_0^2(t)/u$ depends on the tunneling matrix element $t_0$ and the on-site charging energy $u$.

## Key Properties

- **Purely electrical control**: Modulated by gate voltages on the tunnel barrier, not by magnetic fields or microwave drives.
- **Always-on problem**: In practice, residual exchange $J$ is never perfectly zero — motivates [[always-on-exchange-only-aeon]] and dynamical decoupling schemes.
- **Validity conditions**: Requires single-band approximation ($u > t_0$), adiabatic pulsing ($\tau_s > \hbar/\Delta E$), and $\Delta E \gg kT$.
- **Swap and $\sqrt{\text{SWAP}}$**: Pulsing $J$ for $\int J\,dt = \pi$ gives SWAP; half that gives [[sqrt-swap-as-universal-gate]].

## Superexchange Variant

Three aligned dots with a higher-energy middle dot provide superexchange: $J = 4t_0^4(1/\epsilon^2 u + 1/2\epsilon^3)$, enabling longer-range coupling.

## References

- [[loss-divincenzo-1998-quantum-dots]] — original proposal
- [[single-spin-quantum-dot-loss-divincenzo-qubit]]
- [[exchange-only-qubit]]
