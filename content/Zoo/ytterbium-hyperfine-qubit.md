---
title: Ytterbium-171 Hyperfine Qubit
entry_type: qubit
technology_family: Ion Trap
status: demonstrated
figure_reviewed: false
first_proposed_year: 2007
first_demonstrated_year: 2007
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
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[ytterbium-hyperfine-qubit-figure.png]]

## Description

The ytterbium-171 hyperfine qubit encodes quantum information in the two hyperfine clock states of the $^{171}\text{Yb}^+$ ion's $^2S_{1/2}$ ground-state manifold: $|0\rangle \equiv |F=0, m_F=0\rangle$ and $|1\rangle \equiv |F=1, m_F=0\rangle$, separated by 12.642812 GHz. Both states have $m_F=0$, making the qubit first-order insensitive to magnetic field fluctuations — the transition frequency shifts only quadratically with field, enabling exceptionally long coherence times.

The $^{171}\text{Yb}^+$ ion has nuclear spin $I=1/2$ and no electronic angular momentum in the ground state ($J=1/2$), yielding the simplest possible hyperfine structure: just four ground states. This simplicity, combined with convenient photoionization loading and state-dependent fluorescence detection on the $^2S_{1/2} \leftrightarrow {^2P_{1/2}}$ cycling transition at 369.5 nm, makes it the workhorse qubit for multiple trapped-ion quantum computing platforms including Quantinuum (H-series processors) and IonQ.

Two-qubit entangling gates are performed via the Coulomb-mediated motional bus using either Raman transitions (stimulated Raman with 355 nm pulsed laser) or microwave-driven schemes. System-level two-qubit gate fidelities of 99.8–99.92% have been achieved in commercial $^{171}\text{Yb}^+$ processors (Quantinuum H2, Helios).

**Note:** The landmark 99.9% two-qubit gate fidelity by Ballance et al. (2016) and the high-fidelity gate set by Gaebler et al. (2016) were demonstrated on $^{43}\text{Ca}^+$ and $^{9}\text{Be}^+$ respectively — not directly on $^{171}\text{Yb}^+$. However, the same gate schemes (light-shift gates, amplitude-modulated MS gates) have been transferred to ytterbium platforms.

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

## Experimental Status

**First characterization — Olmschenk et al. (2007):**
- Demonstrated manipulation and detection of a trapped $\text{Yb}^+$ hyperfine qubit
- Characterized state preparation, single-qubit gates, and state-dependent fluorescence readout
- Established the $^{171}\text{Yb}^+$ system as a viable qubit platform

**High-fidelity two-qubit gates — Ballance et al. (2016):**
- Achieved 99.9(1)% two-qubit gate fidelity using light-shift gates on $^{43}\text{Ca}^+$ hyperfine qubits (Oxford).
- Same gate scheme later transferred to $\text{Yb}^+$ platforms.

**High-fidelity gate set — Gaebler et al. (2016):**
- Demonstrated a high-fidelity universal gate set for $^9\text{Be}^+$ with amplitude-modulated Mølmer-Sørensen gates (NIST).
- Methods directly applicable and transferred to $\text{Yb}^+$ platforms.

**Quantinuum H2 (2024):**
- 56-qubit fully connected $^{171}\text{Yb}^+$ QCCD processor.
- System-level two-qubit gate fidelity of 99.8%, single-qubit >99.99%.
- Mid-circuit measurement and qubit reuse, enabling real-time QEC demonstrations.

**Quantinuum Helios (2025):**
- 98-qubit system using $^{171}\text{Yb}^+$ (helper) and $^{137}\text{Ba}^+$ (data) dual-species architecture.
- Two-qubit gate fidelity 99.92% across all qubit pairs.
- Largest and highest-fidelity commercial trapped-ion processor as of 2025.

**Long coherence — Wang et al. (2021):**
- Single ion qubit with estimated coherence time exceeding one hour using dynamical decoupling sequences
- Demonstrated the extraordinary coherence potential of clock-state encodings

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10 s | Radiative lifetime of ground state; effectively infinite | — |
| $T_2$ (echo) | >10 min | With dynamical decoupling sequences | [Wang et al. 2021](https://doi.org/10.1038/s41467-020-20330-w) |
| $T_2^*$ | 1–10 s | Limited by magnetic field fluctuations | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| Hyperfine splitting | 12.642812 GHz | Clock transition, first-order field insensitive | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| 1Q gate fidelity | >99.99% | Quantinuum H2 system-level | — |
| 2Q gate fidelity (Yb system) | 99.92% | Quantinuum Helios, all pairs | — |
| 2Q gate fidelity (Ca⁺ demo) | 99.9% | Light-shift gate, $^{43}$Ca⁺ | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| SPAM fidelity | 99.93% | Electron shelving detection | [Noek et al. 2013](https://doi.org/10.1364/OE.21.021449) |
| Gate time (1Q) | 1–10 μs | Microwave or Raman driven | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| Gate time (2Q) | 30–600 μs | Depends on gate scheme and ion number | [Gaebler et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060505) |
| Operating temperature | ~4 K (trap) | Room-temperature vacuum; ions laser-cooled to ~mK | — |

## References

### Original characterization
- S. Olmschenk et al., "Manipulation and detection of a trapped Yb⁺ hyperfine qubit," [Phys. Rev. A 76, 052314 (2007)](https://doi.org/10.1103/PhysRevA.76.052314)

### High-fidelity gates
- C. J. Ballance et al., "High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits," [Phys. Rev. Lett. 117, 060504 (2016)](https://doi.org/10.1103/PhysRevLett.117.060504)
- J. P. Gaebler et al., "High-Fidelity Universal Gate Set for ⁹Be⁺ Ion Qubits," [Phys. Rev. Lett. 117, 060505 (2016)](https://doi.org/10.1103/PhysRevLett.117.060505)

### Coherence
- P. Wang et al., "Single ion qubit with estimated coherence time exceeding one hour," [Nat. Commun. 12, 233 (2021)](https://doi.org/10.1038/s41467-020-20330-w)

### SPAM
- R. Noek et al., "High speed, high fidelity detection of an atomic hyperfine qubit," [Opt. Express 21, 21449 (2013)](https://doi.org/10.1364/OE.21.021449)

## Linked Papers

- [[olmschenk-2007-yb171-qubit]]
- [[ballance-2016-ion-gate-fidelity]]
- [[gaebler-2016-ms-gate]]
- [[wang-2021-single-ion-qubit]]
- [[noek-2013-high-speed-detection]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[cirac-zoller-gate]] — foundational trapped-ion gate proposal
- [[molmer-sorenson-gate]] — widely used entangling gate on Yb platforms
- [[shuttling-ion-trap-qubit]] — QCCD architecture used in Quantinuum systems
- [[motional-mode-coupling-in-ion-traps]] — physics of the Coulomb-mediated bus
- [[coherence-time-hierarchy]] — context for coherence comparison
