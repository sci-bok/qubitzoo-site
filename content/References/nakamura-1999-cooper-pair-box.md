---
title: "Nakamura et al. 1999 — Coherent Control of Macroscopic Quantum States in a Single-Cooper-Pair Box"
type: reference
arxiv_id: "cond-mat/9904003"
doi: "10.1038/19718"
authors:
  - Y. Nakamura
  - Yu. A. Pashkin
  - J. S. Tsai
year: 1999
journal: "Nature"
volume: 398
pages: "786-788"
status: seed
tags:
  - superconducting-qubit
  - charge-qubit
  - cooper-pair-box
  - first-demonstration
  - foundational
---

# Coherent Control of Macroscopic Quantum States in a Single-Cooper-Pair Box

**Nakamura, Pashkin & Tsai, Nature 398, 786 (1999)** — [arXiv:cond-mat/9904003](https://arxiv.org/abs/cond-mat/9904003)

## Summary

First experimental demonstration of coherent quantum oscillations in a solid-state qubit. A single-Cooper-pair box — an aluminum island connected through a Josephson junction to a reservoir — shows time-domain Rabi oscillations between charge states $|0\rangle$ and $|2\rangle$ (differing by one Cooper pair). This paper proved that macroscopic superconducting circuits could function as qubits.

## Key Results

1. **Coherent oscillations observed**: Applied voltage pulses bring charge states into resonance; measured oscillatory tunneling current as a function of pulse length $\Delta t$, with period $T_{\text{coh}} = h/E_J$.

2. **Gate-voltage control**: Electrostatic energy $E_C(n - Q_t/e)^2$ tuned via gate charge $Q_t$. At $Q_t/e = 1$, charge states $|0\rangle$ and $|2\rangle$ are degenerate; Josephson coupling produces anticrossing with splitting $E_J$.

3. **Readout via probe junction**: $|2\rangle$ state detected through sequential quasiparticle tunneling (JQP cycle); dc current proportional to $|2\rangle$ population.

4. **Coherence time**: Oscillations visible for $\Delta t \lesssim 2$ ns. Decoherence attributed to $1/f$ charge noise coupling to the charge degree of freedom.

## Key Parameters

| Parameter | Value |
|-----------|-------|
| Josephson energy $E_J$ | 51.8 μeV |
| Charging energy $E_C$ | $E_C > E_J$ (charge regime) |
| Coherent oscillation period | $h/E_J \approx 80$ ps |
| Probe junction resistance $R_b$ | Large (to minimize back-action) |
| Temperature | $\ll E_C/k_B$ |

## Physics Context

The Cooper pair box operates in the charge regime ($E_C \gg E_J$). The Hamiltonian:
$$H = 4E_C(n - n_g)^2 - E_J\cos\hat{\varphi}$$

where $n_g = C_g V_g / 2e$ is the gate charge. At the charge degeneracy point ($n_g = 1/2$), charge noise sensitivity is minimized — a principle later exploited by the [[transmon]] ($E_J/E_C \gg 1$).

## Zoo Links

- [[cooper-pair-box-charge-qubit]] — the qubit architecture this paper demonstrates
- [[transmon]] — descendant that operates in $E_J \gg E_C$ limit for charge noise protection
- [[blochnium-superconducting-quasicharge-qubit]] — quasicharge qubit in the opposite regime

## Evergreen Links

- [[charge-noise-in-superconducting-qubits]]
- [[josephson-junction-as-nonlinear-element]]
