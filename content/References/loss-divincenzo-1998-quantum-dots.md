---
title: "Loss & DiVincenzo 1998 — Quantum Computation with Quantum Dots"
type: reference
arxiv_id: "cond-mat/9701055"
doi: "10.1103/PhysRevA.57.120"
authors:
  - Daniel Loss
  - David P. DiVincenzo
year: 1998
journal: "Physical Review A"
volume: 57
pages: "120-126"
status: seed
tags:
  - spin-qubit
  - quantum-dot
  - exchange-interaction
  - foundational
published: 1998-01-01
---

# Quantum Computation with Quantum Dots

**Loss & DiVincenzo, PRA 57, 120 (1998)** — [arXiv:cond-mat/9701055](https://arxiv.org/abs/cond-mat/9701055)

## Summary

Proposes using the spin states of single electrons in coupled quantum dots as qubits for quantum computation. This is the foundational paper for all spin-qubit architectures — it launched the entire field of semiconductor spin qubits.

## Key Contributions

1. **Qubit encoding**: Spin-1/2 of excess electron on a single-electron quantum dot = one qubit. $|\uparrow\rangle$ and $|\downarrow\rangle$ are the computational basis states.

2. **Two-qubit gate via exchange**: Pulsing the tunnel barrier between neighboring dots produces a transient Heisenberg coupling $H_s(t) = J(t)\,\vec{S}_1 \cdot \vec{S}_2$, where $J(t) = 4t_0^2(t)/u$ (tunneling matrix element / charging energy). This is a purely electrical mechanism — no spectroscopic manipulation needed.

3. **Universal gate set**: The $\sqrt{\text{SWAP}}$ gate (exchange pulsed for half the swap duration) plus single-qubit rotations is universal. XOR gate constructed as:
$$U_{\text{XOR}} = e^{i\frac{\pi}{2}S_1^z}\, e^{-i\frac{\pi}{2}S_2^z}\, U_{\text{sw}}^{1/2}\, e^{i\pi S_1^z}\, U_{\text{sw}}^{1/2}$$

4. **Decoherence analysis**: Derives a novel spin master equation treating environment effects *during* the gate pulse (the $\mathcal{K}_2$ term), not just before/after. Proves complete positivity of the resulting superoperator.

5. **Single-qubit gates**: Via local magnetic fields — either scanning probe tip or auxiliary ferromagnetic dot coupled through a gate.

6. **Readout proposals**: (a) Tunneling into paramagnetic dot → nucleation of ferromagnetic domain (75% reliable POV measurement), (b) Spin-valve barrier → electrometer detection (100% reliable in principle).

## Key Parameters

| Parameter | Value | Notes |
|-----------|-------|-------|
| Exchange coupling $J_0$ | ~80 μeV ≈ 1K | Achievable in split-gate quantum dots |
| Pulse duration $\tau_s$ | ~25 ps | For $J_0\tau_s = \pi$ (swap) |
| Decoherence time $\Gamma^{-1}$ | ~1.4 ns | Magnetic environment model |
| Gate fidelity | >99% | For $\Gamma\tau_s \ll 1$ |

## Physics

- Conditions for Heisenberg model validity: $\Delta E \gg kT$ (level spacing), $\tau_s > \hbar/\Delta E$ (adiabatic), $u > t_0$ (single-band), $\Gamma^{-1} \gg \tau_s$ (coherent).
- Ohmic damping model: $\Gamma = \lambda^2 \eta k_B T$
- Spin degrees of freedom inherently more protected than charge — insensitive to electric potential fluctuations.

## Zoo Links

- [[single-spin-quantum-dot-loss-divincenzo-qubit]] — the qubit this paper defines
- [[exchange-only-qubit]] — descendant architecture using only exchange
- [[singlet-triplet-qubit]] — uses singlet/triplet subspace of double dot
- [[semiconductor-charge-qubit]] — the charge analogue (shorter coherence)

## Evergreen Links

- [[heisenberg-exchange-in-quantum-dots]]
- [[sqrt-swap-as-universal-gate]]
- [[divincenzo-criteria]]
