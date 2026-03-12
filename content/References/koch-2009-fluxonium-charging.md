---
title: "Koch et al. 2009 — Charging Effects in the Inductively Shunted Josephson Junction"
type: reference
arxiv_id: "0902.2980"
doi: "10.1103/PhysRevLett.103.217004"
authors:
  - Jens Koch
  - V. Manucharyan
  - M. H. Devoret
  - L. I. Glazman
year: 2009
journal: "Physical Review Letters"
volume: 103
pages: "217004"
status: seed
tags:
  - fluxonium
  - superconducting-qubit
  - charging-effects
  - superinductance
---

# Charging Effects in the Inductively Shunted Josephson Junction

**Koch, Manucharyan, Devoret & Glazman, PRL 103, 217004 (2009)** — [arXiv:0902.2980](https://arxiv.org/abs/0902.2980)

## Summary

Theory paper analyzing the inductively shunted Josephson junction — the circuit that becomes fluxonium when $E_L \ll E_C, E_J$. Resolves a paradox: how can charge quantization effects persist when an inductive shunt formally eliminates the superconducting island? The answer involves two distinct types of states with very different physics.

## Key Results

1. **Hamiltonian**: $H = 4E_C(n - n_g)^2 - E_J\cos\varphi + \frac{1}{2}E_L(\varphi + 2\pi\Phi/\Phi_0)^2$

   Three energy scales: charging $E_C$, Josephson $E_J$, inductive $E_L = (\Phi_0/2\pi)^2/L$.

2. **Charge insensitivity**: The spectrum is invariant under offset charge shifts — proven by gauge transformation $\bar{\psi}(\varphi) = e^{in_g\varphi}\psi(\varphi)$. This is the fundamental advantage over the [[cooper-pair-box-charge-qubit]].

3. **Two types of excitations** (for $E_L \ll E_C, E_J$):
   - **Metaplasmon states**: Bound states in CPB band potentials. Delocalized in $\varphi$-space, centered at $\varphi = 0$. Flux-insensitive. Strong charge oscillations across junction.
   - **Persistent-current states**: Exist in CPB gaps. Localized in $\varphi$-space, carry persistent currents $I_m \approx \pm m\Phi_0/L$. Strongly flux-sensitive.

4. **Bloch wave analysis**: Maps problem onto effective Hamiltonian $H^{(s)} = \frac{E_L}{2}(id/dp + 2\pi\Phi/\Phi_0)^2 + \varepsilon_s(p)$ — structurally identical to CPB Hamiltonian but with roles of charge and flux exchanged.

## Physics

The fluxonium regime ($E_L \ll E_C, E_J$) provides:
- Strong anharmonicity (unlike transmon where anharmonicity → $E_C$)
- Charge noise immunity (no island)
- Flux tunability
- Spectral structure with well-separated metaplasmon and persistent-current manifolds

## Zoo Links

- [[fluxonium]]
- [[transmon]] — the $E_J \gg E_C$ limit of the CPB (different charge-noise strategy)
- [[cooper-pair-box-charge-qubit]] — the island-based ancestor
- [[blochnium-superconducting-quasicharge-qubit]] — explores the $E_L \to 0$ regime further

## Evergreen Links

- [[josephson-junction-as-nonlinear-element]]
- [[charge-noise-in-superconducting-qubits]]
