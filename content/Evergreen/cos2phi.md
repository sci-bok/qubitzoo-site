---
title: "$\\cos(2\\varphi)$ Element in Superconducting Circuits"
type: evergreen
status: evergreen
tags:
  - superconducting
  - nonlinear-elements
  - cos2phi
  - protected-qubits
source_paper: '[[strickland-2024-gatemonium]]'
qubit_types:
  - '[[cos2phi-qubit]]'
  - '[[gatemonium]]'
  - '[[0-pi-qubit]]'
date_created: '2026-03-10'
date_updated: '2026-08-11'
influence_score: 0.42
verification_confidence: confirmed
generated_by: scibok-curation
---

# $\cos(2\varphi)$ Element in Superconducting Circuits

A $-E_2\cos(2\varphi)$ potential is $\pi$-periodic rather than the standard Josephson term's $2\pi$ periodicity. In the ideal single-mode description it changes island charge only by two Cooper pairs at a time, so Cooper-pair parity is conserved. This note owns that **Hamiltonian ingredient and its symmetry consequences**; it does not by itself certify a noise-protected qubit.

## Physical Origin

Practical circuits can expose the second harmonic by destructively interfering odd Josephson harmonics near half a flux quantum, by Fourier-engineering a multi-junction element, or by using semiconductor weak links with a strongly nonsinusoidal current-phase relation. The engineering target is not merely a visible second harmonic: the residual first-harmonic coefficient $E_1$ must be small enough that the intended parity selection rule survives.

## Significance for Protected Qubits

An ideal $\cos(2\varphi)$ Hamiltonian separates its eigenstates into even and odd Cooper-pair-number sectors. Charge-local operators cannot connect those sectors in the symmetry limit, while the phase-localized states near $\varphi=0$ and $\varphi=\pi$ are superpositions of the parity eigenstates rather than the eigenstates themselves. This distinction is the core protection mechanism in [[cos2phi-qubit]].

The element is therefore a route to **selected matrix-element suppression and noise bias**, not automatic immunity to every local noise source. Interference-based implementations can be acutely flux-sensitive because flux fluctuations restore the unwanted $E_1\cos\varphi$ term. Whether the complete circuit is actually quiet must be judged from its full spectrum, control protocol, and noise derivatives.

## Boundary with [[charge-noise-sweet-spot]]

Use this note when the live question is **what circuit term creates $\pi$ periodicity, Cooper-pair-parity conservation, or disjoint charge support?** Use [[charge-noise-sweet-spot]] when the question is **which control coordinate has vanishing first derivative, how broad that protected operating region is, and what noise sensitivity remains elsewhere?**

The two ideas can coexist but are not interchangeable. A $\cos(2\varphi)$-dominated circuit may strongly suppress charge-induced transitions while remaining flux-dephasing limited; conversely, a transmon or exchange-based spin qubit can occupy a useful sweet spot without any second-harmonic Josephson element.

## In Gatemonium

In [[gatemonium]], voltage-tunable semiconductor weak links provide access to nonsinusoidal Josephson physics and higher harmonics inside a fluxonium-like circuit. It is a useful bridge to this mechanism, but the device's protection must still be described through the full circuit landscape and its [[charge-noise-sweet-spot|operating-point sensitivities]], not by the presence of a higher harmonic alone.

## Key relationships

- [[cos2phi-qubit]] — the direct qubit architecture built around a dominant second harmonic and Cooper-pair-parity sectors
- [[0-pi-qubit]] — a related protected-circuit family where doubled-periodicity intuition appears inside a larger multi-mode Hamiltonian
- [[gatemonium]] — a semiconductor-weak-link route for tuning higher-harmonic Josephson physics
- [[noise-bias-and-asymmetric-error-channels]] — the downstream question of which residual fault channel is suppressed rather than whether all errors vanish
- [[charge-noise-sweet-spot]] — the complementary response-geometry view of protected operating points

## References

- [[smith-2020-superconducting-circuit-protected]] — ideal two-Cooper-pair tunneling and parity-protected circuit proposal
- [[larsen-2020-parity-protected-superconductor-semiconductor-qubit]] — experimental relaxation suppression in an interference-based element
- [[roverch-2026-experimental-cos2phi-transmon]] — coherent-control realization and measured charge-matrix-element suppression
- [[zhurbina-2026-coherence-limitations-of-a]] — independent realization exposing residual flux-noise limitations
- [[strickland-2024-gatemonium]] — gate-tunable weak-link route to higher-harmonic circuit physics
