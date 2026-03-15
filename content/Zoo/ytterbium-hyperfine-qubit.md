---
title: Ytterbium-171 Hyperfine Qubit
entry_type: qubit
technology_family: Ion Trap
status: demonstrated
first_proposed_year: 2007
keywords:
- ytterbium
- Yb-171
- hyperfine qubit
- trapped ion
- clock states
- field insensitive
- microwave qubit
- Quantinuum
- IonQ
influence_score: 0.88
last_updated: '2026-03-14'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
---


## Figure

![[ytterbium-hyperfine-qubit-figure.png]]

## Description

The ytterbium-171 hyperfine qubit encodes quantum information in the two hyperfine clock states of the $^{171}\text{Yb}^+$ ion's $^2S_{1/2}$ ground-state manifold: $|0\rangle \equiv |F=0, m_F=0\rangle$ and $|1\rangle \equiv |F=1, m_F=0\rangle$, separated by 12.642812 GHz. Both states have $m_F=0$, making the qubit first-order insensitive to magnetic field fluctuations — the transition frequency shifts only quadratically with field, enabling exceptionally long coherence times.

The $^{171}\text{Yb}^+$ ion has nuclear spin $I=1/2$ and no electronic angular momentum in the ground state ($J=1/2$), yielding the simplest possible hyperfine structure: just four ground states. This simplicity, combined with convenient photoionization loading and state-dependent fluorescence detection on the $^2S_{1/2} \leftrightarrow {^2P_{1/2}}$ cycling transition at 369.5 nm, makes it the workhorse qubit for multiple trapped-ion quantum computing platforms including Quantinuum (H-series processors) and IonQ.

Two-qubit entangling gates are performed via the Coulomb-mediated motional bus using either Raman transitions (stimulated Raman with 355 nm pulsed laser) or microwave-driven schemes. Gate fidelities exceeding 99.9% have been demonstrated (Ballance et al. 2016, Gaebler et al. 2016).

## Hamiltonian

The ground-state hyperfine Hamiltonian is:

$$H_{\text{hfs}} = A_{\text{hfs}} \, \mathbf{I} \cdot \mathbf{J}$$

where $A_{\text{hfs}}$ is the magnetic dipole hyperfine constant, $\mathbf{I}$ is the nuclear spin, and $\mathbf{J}$ is the electronic angular momentum. For $^{171}\text{Yb}^+$ with $I = J = 1/2$, this gives a splitting:

$$\Delta E_{\text{hfs}} = A_{\text{hfs}} = h \times 12.642812\,\text{GHz}$$

In an external magnetic field $B$, the clock-state transition frequency has only a second-order Zeeman shift:

$$\omega_{01}(B) = \omega_{01}(0) + \beta B^2$$

where $\beta / 2\pi \approx 310.8\,\text{Hz/mT}^2$, providing excellent field insensitivity.

## Motivation

Trapped-ion qubits require long coherence times and high-fidelity operations to serve as building blocks for fault-tolerant quantum computing. Hyperfine clock states in $^{171}\text{Yb}^+$ provide first-order magnetic field insensitivity without active stabilization, coherence times exceeding 10 minutes, and a microwave-frequency splitting compatible with high-stability oscillators. The simple level structure and efficient state detection make $^{171}\text{Yb}^+$ the most widely deployed trapped-ion qubit platform.

## Key Findings

- Clock-state encoding provides first-order insensitivity to magnetic field fluctuations, with coherence times $T_2 > 10$ minutes demonstrated using dynamical decoupling (Wang et al. 2021).
- Two-qubit gate fidelities of 99.9(1)% achieved via light-shift gates (Ballance et al. 2016) and amplitude-modulated Mølmer-Sørensen gates (Gaebler et al. 2016).
- Quantinuum H2 processor achieves system-level 2Q gate fidelities of 99.8% across a fully connected 56-qubit register.
- State preparation and measurement (SPAM) fidelity exceeds 99.9% using electron shelving to the $^2D_{3/2}$ state.
- Mid-circuit measurement and qubit reuse demonstrated, enabling real-time quantum error correction protocols.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10 s | Radiative lifetime of ground state; effectively infinite | — |
| $T_2$ (echo) | >10 min | With dynamical decoupling sequences | [Wang et al. 2021](https://doi.org/10.1038/s41567-021-01237-9) |
| $T_2^*$ | 1–10 s | Limited by magnetic field fluctuations | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| Hyperfine splitting | 12.642812 GHz | Clock transition, first-order field insensitive | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| 1Q gate fidelity | 99.99%+ | Randomized benchmarking | [Gaebler et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060505) |
| 2Q gate fidelity | 99.9% | Light-shift and MS gates | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| SPAM fidelity | 99.93% | Electron shelving detection | [Noek et al. 2013](https://doi.org/10.1364/OE.21.021449) |
| Gate time (1Q) | 1–10 μs | Microwave or Raman driven | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| Gate time (2Q) | 30–600 μs | Depends on gate scheme and ion number | [Gaebler et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060505) |
| Operating temperature | ~4 K (trap) | Room-temperature vacuum; ions laser-cooled to ~mK | — |

## Linked Papers
- [[olmschenk-2007-yb171-qubit]]
- [[ballance-2016-ion-gate-fidelity]]
- [[gaebler-2016-ms-gate]]

## Related Entries

- [[trapped-ion-qubit]]
- [[cirac-zoller-gate]]
- [[motional-mode-coupling-in-ion-traps]]
- [[coherence-time-hierarchy]]
