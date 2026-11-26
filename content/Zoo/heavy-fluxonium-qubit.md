---
title: Heavy Fluxonium Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2018
first_demonstrated_year: 2018
keywords:
- heavy fluxonium
- superinductance
- disjoint support
- protected qubit
- superconducting
influence_score: 0.80
last_updated: '2026-11-26'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-11-26
figure_reviewed: false
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/heavy-fluxonium-qubit-figure.provenance.json"
figure_reviewed_by: "Scibok deep audit 2026-11-26"
figure_reviewed_at: "2026-11-26T15:09:50.962174+00:00"
---

## Figure

![[heavy-fluxonium-qubit-figure.png]]

## Description

Heavy fluxonium is the large-capacitance, low-$E_C$ regime of fluxonium. Lowering $E_C$ increases the effective phase-particle mass and concentrates the persistent-current basis states $|L\rangle$ and $|R\rangle$ in different wells, making their overlap and many local-noise transition matrix elements exponentially small.

At the half-flux sweet spot, the stationary energy eigenstates are not individually localized: they are approximately the symmetric and antisymmetric combinations $(|L\rangle\pm|R\rangle)/\sqrt{2}$. The disjoint localized-state support strongly suppresses bit flips, while symmetry cancels first-order flux-noise dephasing. This is an error bias, not complete protection; dielectric loss, thermal population, residual flux noise, and control/readout back-action remain relevant.

## Hamiltonian

Heavy fluxonium uses the ordinary fluxonium Hamiltonian,

$$H = 4E_C\hat n^2 - E_J\cos\hat\varphi + \frac{E_L}{2}(\hat\varphi-\varphi_\mathrm{ext})^2,\qquad \varphi_\mathrm{ext}=2\pi\Phi_\mathrm{ext}/\Phi_0,$$

with $[\hat\varphi,\hat n]=i$, $E_C=e^2/(2C)$, and $E_L=(\Phi_0/2\pi)^2/L$. In the phase-particle analogy, the kinetic term $4E_C\hat n^2$ gives an effective mass proportional to $1/E_C$, so the added shunt capacitance makes the circuit "heavy."

At $\varphi_\mathrm{ext}=\pi$, the potential is symmetric and the two lowest eigenstates are approximately

$$|0\rangle\simeq\frac{|L\rangle+|R\rangle}{\sqrt2},\qquad |1\rangle\simeq\frac{|L\rangle-|R\rangle}{\sqrt2}.$$

The charge matrix element $|\langle0|\hat n|1\rangle|$ and analogous local transition matrix elements shrink with the overlap of the localized states. A small flux detuning breaks the symmetry and selects states localized predominantly in one well, but it also restores first-order flux sensitivity.

## Motivation

Heavy fluxonium targets hardware-level suppression of bit-flip errors without giving up the multilevel structure needed for control and dispersive readout. The same small computational-transition matrix element that protects the qubit makes ordinary resonant driving slow, so useful implementations exploit higher plasmon-like levels, fast flux pulses, or parametrically activated interactions. The architecture is therefore a practical bridge between conventional fluxonium and more strongly protected circuits such as 0-π.

## Experimental Status

**Selection-rule protection — Lin et al. (2018):**
- Demonstrated a fluxonium transition whose dipole could be tuned down while dispersive cavity coupling survived through virtual transitions to higher levels.
- Energy-relaxation time increased by two orders of magnitude and exceeded $2\,\mathrm{ms}$, validating hardware-level suppression of bit flips.
- The device was not simultaneously protected from dephasing: first-order flux noise limited dephasing to about $4\,\mu\mathrm{s}$.

**High-coherence fluxonium — Nguyen et al. (2019):**
- Reported $T_2>100\,\mu\mathrm{s}$ reproducibly and above $300\,\mu\mathrm{s}$ in one device at the half-flux sweet spot.
- Showed that a superinductance containing more than 100 array junctions need not prevent high coherence.

**Fast control of a 14 MHz heavy fluxonium — Zhang et al. (2021):**
- Used nonadiabatic fast-flux control and higher levels for initialization and readout despite the suppressed computational-transition dipole.
- Demonstrated 20–60 ns single-qubit gates with 99.8% average fidelity on a device with $T_1,T_{2e}\sim300\,\mu\mathrm{s}$.

**Millisecond coherence — Somoroff et al. (2023):**
- Measured uncorrected Ramsey coherence $T_2^*=1.48\pm0.13\,\mathrm{ms}$.
- Benchmarked average physical-gate fidelity at $99.991(1)\%$.

**Planar bosonic error correction — Jha et al. (2026, preprint):**
- Coupled a heavy-fluxonium control qubit with $451\pm70\,\mu\mathrm{s}$ bit-flip lifetime to an on-chip Archimedean spiral resonator.
- Prepared and stabilized finite-energy GKP states with measurement-free error correction, extending the Pauli-averaged logical lifetime by $1.59\pm0.05$.
- Demonstrated the first standalone bosonic QEC experiment in a fully planar superconducting architecture.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Protected-transition $T_1$ | $>2\,\mathrm{ms}$ | Dipole tuned down at a roughly 3.5 GHz transition; dephasing remained flux-noise limited | [Lin et al. 2018](https://doi.org/10.1103/PhysRevLett.120.150503) |
| Ramsey coherence $T_2^*$ | $1.48\pm0.13\,\mathrm{ms}$ | Uncorrected half-flux coherence | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| 1Q physical-gate fidelity | $99.991(1)\%$ | Average gate fidelity | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| Fast-flux 1Q gates | $99.8\%$ in 20–60 ns | 14 MHz heavy fluxonium; nonadiabatic Landau-Zener control | [Zhang et al. 2021](https://doi.org/10.1103/PhysRevX.11.011010) |
| Planar GKP control-qubit lifetime | $451\pm70\,\mu\mathrm{s}$ | Heavy-fluxonium bit-flip lifetime | [Jha et al. 2026](https://arxiv.org/abs/2609.26880) |
| Planar GKP logical-lifetime gain | $1.59\pm0.05$ | Measurement-free QEC with an on-chip spiral resonator; preprint | [Jha et al. 2026](https://arxiv.org/abs/2609.26880) |

## References

### First demonstration
- Y.-H. Lin et al., "Demonstration of Protection of a Superconducting Qubit from Energy Decay," [Phys. Rev. Lett. 120, 150503 (2018)](https://doi.org/10.1103/PhysRevLett.120.150503) — [arXiv:1705.07873](https://arxiv.org/abs/1705.07873)

### Experimental demonstrations
- L. B. Nguyen et al., "High-Coherence Fluxonium Qubit," [Phys. Rev. X 9, 041041 (2019)](https://doi.org/10.1103/PhysRevX.9.041041) — [arXiv:1810.11006](https://arxiv.org/abs/1810.11006)
- H. Zhang et al., "Universal Fast-Flux Control of a Coherent, Low-Frequency Qubit," [Phys. Rev. X 11, 011010 (2021)](https://doi.org/10.1103/PhysRevX.11.011010) — [arXiv:2002.10653](https://arxiv.org/abs/2002.10653)
- A. Somoroff et al., "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. 130, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001) — [arXiv:2103.08578](https://arxiv.org/abs/2103.08578)
- S. R. Jha et al., "Bosonic Error Correction with Fluxonium," [arXiv:2609.26880 (2026)](https://arxiv.org/abs/2609.26880)

## Linked Papers

- [[lin-2018-heavy-fluxonium]]
- [[nguyen-2019-high-coherence-fluxonium]]
- [[zhang-2021-universal-fast-flux-control]]
- [[somoroff-2023-millisecond-coherence-superconducting]]
- [[jha-2026-bosonic-error-correction-fluxonium]]

## Evergreen context

- [[charge-noise-in-superconducting-qubits]] — heavy fluxonium inherits fluxonium's basic win of suppressing CPB-style charge dispersion before it layers on stronger matrix-element protection.
- [[charge-noise-sweet-spot]] — heavy fluxonium gets its best coherence only at carefully chosen flux-protected operating points on top of that baseline charge insensitivity.
- [[coherence-time-hierarchy]] — the millisecond-scale $T_1$ and $T_2$ claims are only meaningful in the sweet-spot versus off-sweet-spot context
- [[noise-bias-and-asymmetric-error-channels]] — disjoint-support wavefunctions suppress relaxation more strongly than the remaining dephasing channels

## Related Entries

- [[fluxonium]] — parent qubit type
- [[0-pi-qubit]] — related protected superconducting design
- [[gkp-codes]] — 2026 planar bosonic-QEC demonstration used heavy fluxonium as the control qubit
- [[bosonic-qubit]] — oscillator encodings that can benefit from a long-lived nonlinear controller
- [[transmon]] — conventional superconducting qubit for comparison
