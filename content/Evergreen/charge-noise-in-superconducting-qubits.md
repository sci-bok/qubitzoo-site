---
title: "Charge Noise in Superconducting Qubits"
type: evergreen
status: seed
tags:
  - decoherence
  - charge-noise
  - superconducting-qubit
  - 1-over-f-noise
---

# Charge Noise in Superconducting Qubits

The dominant decoherence mechanism in charge-sensitive superconducting qubits. Random fluctuations in background charge (from two-level systems in oxide layers, charge traps at interfaces) modulate the offset charge $n_g$ and dephase the qubit.

## The Problem

The Cooper pair box Hamiltonian $H = 4E_C(n - n_g)^2 - E_J\cos\hat{\varphi}$ has energy levels that depend on $n_g$. At generic operating points, charge noise $\delta n_g$ causes dephasing at rate:

$$\Gamma_\varphi \propto \left|\frac{\partial E_{01}}{\partial n_g}\right|^2 S_{n_g}(\omega \to 0)$$

where $S_{n_g}$ typically has $1/f$ spectral density.

## Solutions

1. **Sweet spots**: Operate at $n_g = 1/2$ where $\partial E_{01}/\partial n_g = 0$ (first-order insensitivity). Used in the "quantronium" design.

2. **Transmon regime**: Increase $E_J/E_C \gg 1$. Energy bands flatten exponentially, making $E_{01}$ insensitive to $n_g$ at ALL operating points. Cost: reduced anharmonicity $\sim E_C$.

3. **Fluxonium**: Uses superinductance to create a different energy landscape with charge-insensitive sweet spots.

## Historical Arc

- [[cooper-pair-box-charge-qubit]] (1999): First qubit, heavily charge-sensitive → $T_2 \sim$ ns
- Quantronium (2002): Sweet-spot operation → $T_2 \sim$ μs  
- [[transmon]] (2007): Exponential suppression → $T_2 \sim$ 10–100 μs
- Modern transmons: $T_1, T_2 \sim$ 100+ μs (charge noise no longer dominant)

## References

- [[nakamura-1999-cooper-pair-box]]
- [[koch-2007-transmon]]
