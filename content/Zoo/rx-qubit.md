---
title: RX Qubit (Resonant Exchange)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2013
first_demonstrated_year: 2013
keywords:
- resonant exchange
- three-spin qubit
- semiconductor
- exchange-only
- triple quantum dot
influence_score: 0.69
last_updated: '2026-07-21'
generated_by: scibok-curation
verified_by: scibok-manual-2026-07-21
---

## Figure

![[rx-qubit-figure.png]]

## Description

The **resonant-exchange (RX) qubit** is a three-electron, linear triple-quantum-dot spin qubit operated with always-on exchange coupling and driven by resonant RF modulation of gate voltages. The logical qubit lives in the $S=1/2$, $S_z=+1/2$ manifold of three spins, using the two doublet states as the computational basis.

Compared with pulsed exchange-only qubits, RX is designed to sit near a **detuning sweet spot** where the qubit splitting is set mainly by the average exchange while the transverse drive comes from a small oscillating exchange imbalance. That gives all-electrical control without micromagnets and reduces first-order sensitivity to slow detuning noise.

The key architectural idea is not that the two exchange couplings must be exactly identical at all times, but that the qubit is biased near the symmetric point where the exchange-defined splitting is static and small RF gate modulation can drive rotations at $\omega_d \approx \omega_q$.

## Hamiltonian

A representative microscopic model is the nearest-neighbor Heisenberg exchange Hamiltonian for three spins in a linear triple dot,

$$H_{\mathrm{ex}} = J_l\,\mathbf S_1\!\cdot\!\mathbf S_2 + J_r\,\mathbf S_2\!\cdot\!\mathbf S_3 + g\mu_B B\sum_i S_i^z,$$

where $J_l$ and $J_r$ are the left and right exchange couplings. Projecting into the logical $S=1/2$ manifold gives, up to an overall energy shift and basis-convention signs,

$$H_{\mathrm{RX}} = \frac{J}{2}\sigma_z + \frac{\sqrt{3}}{2}j\sigma_x,$$

with

$$J = \frac{J_l + J_r}{2}, \qquad j = \frac{J_l - J_r}{2}.$$

At the symmetric sweet spot $j \approx 0$, the qubit splitting is set by the average exchange, $\hbar\omega_q \approx J$. A small RF modulation of detuning produces $j(t)=j_{\mathrm{ac}}\cos(\omega_d t)$, which yields the familiar driven-qubit form

$$H_{\mathrm{drive}} = \frac{\hbar\omega_q}{2}\sigma_z + A_{\mathrm{RF}}\cos(\omega_d t)\sigma_x.$$

This is the right public-facing RX picture: static longitudinal splitting from average exchange, transverse resonant drive from modulated exchange asymmetry. The earlier shorthand $\hbar\omega_q \propto \sqrt{J_{12}^2+J_{23}^2-J_{12}J_{23}}$ is too basis-dependent and misleading for an encyclopedia entry.

## Motivation

- Keeps the **all-electrical, exchange-only control** advantage, without requiring magnetic field gradients or micromagnets.
- Operates near a charge-noise sweet spot, reducing sensitivity to slow detuning noise relative to generic pulsed exchange-only operation.
- Provides a natural bridge between exchange-only control, AEON-style always-on operation, and circuit-QED style long-range coupling proposals.
- Is especially attractive in materials where strong electric-dipole coupling can be engineered while preserving spin-qubit character.

## Experimental Status

**First RX demonstration, GaAs (Medford et al., 2013):**
- Demonstrated coherent resonant-exchange qubit control in a GaAs triple quantum dot.
- Showed two-axis resonant control at the sweet spot.
- Reported a $\pi/2$ gate time of 2.5 ns and a multipulse-echo coherence time of 19 $\mu$s.

**Readout and characterization follow-up (Medford et al., 2013):**
- Demonstrated self-consistent measurement, tomography, and single-shot readout tools for the closely related three-spin exchange-only platform.
- The resolving arXiv preprint is **arXiv:1302.1933**, which corresponds to the Nature Nanotechnology tomography paper, not the RX PRL itself.

**Spin-photon coupling milestone (Landig et al., 2018):**
- Demonstrated coherent spin-photon coupling using a GaAs resonant-exchange qubit in circuit QED.
- Established RX qubits as a realistic route to long-range semiconductor spin-qubit coupling.

**Modern silicon milestone (Jiang et al., 2025):**
- Demonstrated strong coupling between a Si/SiGe RX qubit and a high-impedance microwave resonator.
- Reported $g/2\pi = 65.8$ MHz and a qubit decoherence rate $\gamma/2\pi = 21.4$ MHz.
- This is the clearest peer-reviewed 2024-2026 RX-specific hardware advance found in the audit.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $\pi/2$ gate time | 2.5 ns | First GaAs RX demonstration | [Medford et al. 2013](https://doi.org/10.1103/PhysRevLett.111.050501) |
| Echo coherence time | 19 $\mu$s | Multipulse echo, GaAs RX demo | [Medford et al. 2013](https://doi.org/10.1103/PhysRevLett.111.050501) |
| Spin-photon coupling $g/2\pi$ | 65.8 MHz | Si/SiGe RX qubit coupled to high-impedance resonator | [Jiang et al. 2025](https://doi.org/10.1103/31wk-5yqp) |
| Decoherence rate $\gamma/2\pi$ | 21.4 MHz | Same Si/SiGe cavity-coupled device | [Jiang et al. 2025](https://doi.org/10.1103/31wk-5yqp) |

## References

### Foundational theory
- J. M. Taylor, V. Srinivasa, and J. Medford, "Electrically Protected Resonant Exchange Qubits in Triple Quantum Dots," [Phys. Rev. Lett. 111, 050502 (2013)](https://doi.org/10.1103/PhysRevLett.111.050502)

### First demonstration
- J. Medford et al., "Quantum-Dot-Based Resonant Exchange Qubit," [Phys. Rev. Lett. 111, 050501 (2013)](https://doi.org/10.1103/PhysRevLett.111.050501)

### Characterization and readout
- J. Medford et al., "Self-consistent measurement and state tomography of an exchange-only spin qubit," [Nature Nanotechnology 8, 654 (2013)](https://doi.org/10.1038/nnano.2013.168), [arXiv:1302.1933](https://arxiv.org/abs/1302.1933)

### Two-qubit gate theory
- A. C. Doherty and M. P. Wardrop, "Two-Qubit Gates for Resonant Exchange Qubits," [Phys. Rev. Lett. 111, 050503 (2013)](https://doi.org/10.1103/PhysRevLett.111.050503)

### Spin-photon coupling
- A. J. Landig et al., "Coherent spin–photon coupling using a resonant exchange qubit," [Nature 560, 179-184 (2018)](https://doi.org/10.1038/s41586-018-0365-y)

### Modern silicon milestone
- Shun-Li Jiang et al., "Coupling between a Si/SiGe Resonant Exchange Qubit and a High-Impedance Microwave Resonator," [Phys. Rev. Lett. 135, 150604 (2025)](https://doi.org/10.1103/31wk-5yqp)

## Linked Papers

- [[medford-2013-rx-qubit]]
- [[medford-2013-self-consistent-measurement]]
- [[doherty-2013-qubit-gates-resonant]]
- [[landig-2018-coherent-spin-photon]]
- [[jiang-2025-sige-rx-resonator]]

## Evergreen context

- [[exchange-interaction-in-quantum-dots]] — RX control and splitting both arise from the exchange landscape of a triple dot.
- [[heisenberg-exchange-in-quantum-dots]] — the RX qubit is a projected three-spin Heisenberg system with resonant electrical driving.
- [[charge-noise-sweet-spot]] — the central operating idea is to bias near a detuning sweet spot while preserving electric controllability.
- [[decoherence-free-subspace]] — RX uses the same three-spin $S=1/2$ encoded subspace family as exchange-only qubits, though it is not a fully protected DFS in the strict error-correction sense.

## Related Entries

- [[exchange-only-qubit]] — parent three-spin encoding; RX is the resonantly driven sweet-spot variant
- [[aeon-qubit]] — nearby always-on exchange branch with different operating philosophy
- [[singlet-triplet-qubit]] — two-electron semiconductor spin qubit with related exchange-control intuition
- [[silicon-spin-qubit]] — broader silicon spin-qubit ecosystem that now includes cavity-coupled Si/SiGe RX hardware
