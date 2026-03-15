---
title: "Josephson Junction as Nonlinear Element"
type: evergreen
status: evergreen
tags:
  - josephson-junction
  - superconducting-qubit
  - anharmonicity
  - nonlinearity
---

# Josephson Junction as Nonlinear Element

The Josephson junction provides the essential nonlinearity that makes superconducting qubits possible. Without it, superconducting circuits are harmonic oscillators — all transitions are degenerate, and you cannot address a single $|0\rangle \leftrightarrow |1\rangle$ transition.

## The Josephson Relations

A tunnel junction between two superconductors obeys:
- **Current-phase**: $I = I_c \sin\varphi$  
- **Voltage-phase**: $V = \frac{\Phi_0}{2\pi}\dot{\varphi}$

where $\varphi$ is the superconducting phase difference and $I_c$ is the critical current.

## As a Circuit Element

The junction acts as a nonlinear inductance:
$$L_J(\varphi) = \frac{\Phi_0}{2\pi I_c \cos\varphi}$$

The potential energy $U = -E_J\cos\varphi$ (with $E_J = \Phi_0 I_c / 2\pi$) is the cosine potential that:
- Provides anharmonicity (non-equal level spacing)
- Enables selective addressing of the qubit transition
- Creates a periodic potential landscape for phase-based qubits

## In Different Qubit Types

| Qubit | Role of JJ |
|-------|-----------|
| [[cooper-pair-box-charge-qubit]] | Couples charge states via Cooper pair tunneling |
| [[transmon]] | Same physics, but $E_J/E_C \gg 1$ flattens charge dispersion |
| [[fluxonium]] | JJ + superinductance creates double-well potential |
| [[gatemonium]] | Semiconductor weak link replaces tunnel junction |
| [[blochnium]] | Operates in phase-slip regime (dual to JJ tunneling) |

## References

- [[nakamura-1999-cooper-pair-box]]
- [[blais-2004-circuit-qed]]
