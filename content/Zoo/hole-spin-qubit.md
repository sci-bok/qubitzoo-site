---
title: Hole Spin Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2013
first_demonstrated_year: 2018
keywords:
- hole spin
- semiconductor
- ge/sige
- spin orbit
- electric dipole spin resonance
- EDSR
influence_score: 0.74
last_updated: '2026-04-02'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[hole-spin-qubit-figure.png]]

## Description

**Hole spin qubits** encode quantum information in the spin of valence-band holes confined in semiconductor quantum dots, most commonly in Ge/SiGe heterostructures. Unlike electron spin qubits that require micromagnets or oscillating magnetic fields for spin manipulation, hole spins benefit from **strong spin-orbit coupling** that enables all-electrical control via **electric dipole spin resonance (EDSR)**.

The underlying physics originates from the $j = 3/2$ character of valence-band holes. In a Ge/SiGe quantum well under biaxial compressive strain, the heavy-hole ($m_j = \pm 3/2$) and light-hole ($m_j = \pm 1/2$) subbands split, with the ground state being predominantly heavy-hole. Mixing between heavy-hole and light-hole states (mediated by confinement asymmetry, electric fields, and strain) generates the spin-orbit coupling that enables electrical spin control. This mixing also makes the hole g-factor **highly anisotropic** — the g-tensor depends strongly on the magnetic field direction relative to the confinement plane.

Two-qubit coupling uses **exchange interaction** between holes in neighboring dots, compatible with existing semiconductor gate-defined quantum dot control architectures. Recent progress in Ge/SiGe platforms has been rapid, with multi-qubit devices demonstrated.

The tradeoff is that the same spin-orbit coupling enabling fast control also couples the spin to electrical noise, requiring careful sweet-spot design and materials engineering to balance speed against coherence.

## Hamiltonian

Effective single-qubit model:

$$H = \frac{1}{2}g\mu_B\mathbf{B}\cdot\boldsymbol{\sigma} + \mathbf{E}(t)\cdot\mathbf{d}_{SO}(\boldsymbol{\sigma})$$

where the first term is the Zeeman interaction (with an anisotropic g-tensor in general) and the second term is the spin-orbit-mediated electric driving, with $\mathbf{d}_{SO}$ the spin-orbit-induced electric dipole operator. Two-qubit coupling is typically exchange:

$$H_{2q} = J(t)\,\mathbf{S}_1\cdot\mathbf{S}_2$$

## Motivation

- Spin-orbit coupling turns electric fields into effective spin-control channels, **eliminating micromagnets** and oscillating magnetic field infrastructure needed for electron-spin ESR.
- Supports dense integration and fast gate operations in CMOS-compatible semiconductor processes.
- Ge/SiGe is isotopically purifiable ($^{72}$Ge, $^{74}$Ge are spin-0), enabling low nuclear spin noise environments.
- The Ge/SiGe platform has shown the fastest progress toward multi-qubit semiconductor processors.

## Experimental Status

**Four-qubit Ge processor — Hendrickx et al. (2021):**
- Demonstrated a four-qubit germanium quantum processor in a 2×2 quantum dot array.
- Achieved universal quantum logic with all-electrical control via EDSR.
- Single-qubit gate fidelities of 99–99.9% and two-qubit exchange gate fidelities of 98–99.5%.

**Ongoing rapid progress (2021–present):**
- Multiple groups (Veldhorst, Katsaros, Scappucci) scaling Ge/SiGe hole-spin devices to larger arrays.
- Hot-qubit operation demonstrated at elevated temperatures (up to ~1 K).
- Sweet-spot engineering reducing charge-noise sensitivity while maintaining fast gate speeds.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate time | 1–50 ns | Fast EDSR control | — |
| 1Q fidelity | 99–99.9% | Rapid progress in Ge devices | [Hendrickx et al. 2021](https://doi.org/10.1038/s41586-021-03332-6) |
| 2Q fidelity | 98–99.5% | Exchange-based | [Hendrickx et al. 2021](https://doi.org/10.1038/s41586-021-03332-6) |
| $T_2^*$ | 1–20 μs | Device/material dependent | — |
| Operating temperature | 20 mK – 1 K | Some hot-qubit demonstrations | — |

## References

### Key experimental demonstration
- N. W. Hendrickx et al., "A four-qubit germanium quantum processor," [Nature 591, 580 (2021)](https://doi.org/10.1038/s41586-021-03332-6) · [arXiv:2009.04268](https://arxiv.org/abs/2009.04268)

### Review
- G. Scappucci et al., "The germanium quantum information route," [Nature Rev. Mater. 6, 926 (2021)](https://doi.org/10.1038/s41578-020-00262-z)

## Linked Papers

- [[hendrickx-2021-ge-4qubit]]
- [[scappucci-2021-ge-review]]

## Related Entries

- [[spin-qubit]] — broader spin qubit family; holes offer faster electrical control than electrons
- [[singlet-triplet-qubit]] — electron-spin two-dot encoding; related control physics
- [[kane-qubit]] — donor-based spin qubit in silicon
