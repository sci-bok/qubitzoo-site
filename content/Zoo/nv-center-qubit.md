---
title: Nitrogen-Vacancy (NV) Center Qubit
entry_type: qubit
technology_family: Color Center
status: demonstrated
first_proposed_year: 1997
first_demonstrated_year: 2004
keywords:
- nv center
- nitrogen vacancy
- diamond
- solid state
- spin qubit
- room temperature
- optically detected magnetic resonance
influence_score: 0.78
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
figure_reviewed: true
---

## Figure

![[nv-center-qubit-figure.png]]

> **Figure note:** The zero-field splitting label in the figure reads ~1.25 GHz; the correct value is **2.87 GHz** (see Hamiltonian section).

## Description

The nitrogen-vacancy (NV) center in diamond is a point defect consisting of a substitutional nitrogen atom adjacent to a vacancy in the diamond carbon lattice. In its negatively charged state (NV$^-$), the center has a spin-1 ground state ($^3A_2$) that can be initialized, manipulated, and read out optically at room temperature — a unique property among solid-state qubit candidates.

The qubit is typically encoded in the $m_s = 0$ and $m_s = -1$ sublevels of the ground-state triplet, split by a zero-field splitting of $D = 2.87\,\text{GHz}$. The $m_s = 0$ state fluoresces more brightly than the $m_s = \pm 1$ states due to an intersystem crossing to a metastable singlet, enabling spin-state readout via optically detected magnetic resonance (ODMR). This same mechanism provides optical spin polarization (initialization into $m_s = 0$) via repeated optical pumping.

Single-qubit gates are performed by resonant microwave pulses at the $m_s = 0 \to m_s = -1$ transition frequency. Two-qubit gates can use the magnetic dipole-dipole interaction between nearby NV centers (~10–25 nm spacing), coupling to nearby $^{13}\text{C}$ nuclear spins as quantum memory, or photonic entanglement between remote NV centers via spin-photon interfaces.

NV centers are the leading platform for quantum networking and long-distance entanglement distribution, having demonstrated deterministic entanglement delivery between nodes separated by $> 1\,\text{km}$.

## Hamiltonian

Ground-state spin Hamiltonian (no external strain):

$$H = D\,S_z^2 + g_e\mu_B\,\mathbf{B}\cdot\mathbf{S} + E(S_x^2 - S_y^2) + \mathbf{S}\cdot\mathbf{A}\cdot\mathbf{I}_N$$

where $D \approx 2.87\,\text{GHz}$ is the zero-field splitting, $E$ is the transverse zero-field splitting (strain-dependent), $g_e \approx 2.003$ is the electron $g$-factor, $\mathbf{A}$ is the hyperfine tensor for the $^{14}\text{N}$ nuclear spin ($I = 1$), and $\mathbf{B}$ is the external magnetic field.

For the qubit subspace ($m_s = 0, -1$) with an axial field $B_z$:

$$H_\text{qubit} = (D - g_e\mu_BB_z)|{-1}\rangle\langle{-1}|$$

## Motivation

NV centers operate at room temperature, can be optically initialized and read out with single-shot fidelity, and emit indistinguishable photons suitable for long-distance entanglement. These properties make them uniquely suited for quantum networks and distributed quantum computing, where other platforms (superconducting, trapped ion) require cryogenics and cannot easily produce flying qubits.

## Experimental Status

**First coherent control of a single electron spin — Jelezko et al. (2004):**
- Demonstrated room-temperature coherent oscillations (Rabi, Ramsey) of a single NV center electron spin
- Established NV centers as viable solid-state qubits

**Ultralong nuclear spin coherence — Maurer et al. (2012):**
- Demonstrated $T_2 > 1\,\text{s}$ for $^{13}\text{C}$ nuclear spins coupled to NV centers in isotopically pure diamond
- Room-temperature quantum memory exceeding one second

**Loophole-free Bell test — Hensen et al. (2015):**
- Deterministic entanglement between NV centers separated by 1.3 km
- First loophole-free Bell inequality violation using solid-state spins

**Three-node quantum network — Pompili et al. (2021):**
- Demonstrated a multinode quantum network of remote solid-state qubits
- Entanglement distribution and teleportation between three NV-center nodes

**Ten-qubit register — Bradley et al. (2019):**
- Quantum error correction on a 10-qubit register (1 electron + 9 nuclear spins)
- Quantum memory up to one minute

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ (electron spin) | >1 hour (77 K); ~5 ms (RT) | Unique room-temperature operation possible | — |
| $T_2$ (electron, echo) | 1–2 ms (RT) | In isotopically pure $^{12}\text{C}$ diamond | [Balasubramanian et al. 2009](https://doi.org/10.1038/nmat2420) |
| $T_2$ (nuclear $^{13}\text{C}$) | >1 s | Used as quantum memory | [Maurer et al. 2012](https://doi.org/10.1126/science.1220513) |
| 1Q gate fidelity | 99.9–99.999% | SOTA 99.999% via GST | [Bradley et al. 2019](https://doi.org/10.1103/PhysRevX.9.031045) |
| 2Q gate fidelity | 97–99.93% | NV-$^{13}$C hyperfine gate | [Bradley et al. 2019](https://doi.org/10.1103/PhysRevX.9.031045) |
| Readout fidelity | 95% (RT), >99% (cryo) | ODMR; improved with SIL or cavity | [Robledo et al. 2011](https://doi.org/10.1038/nature10401) |
| Zero-field splitting $D$ | 2.87 GHz | Temperature-dependent (~77 kHz/K) | — |
| Photon emission wavelength | 637 nm (ZPL) | Debye-Waller factor ~3%; rest in phonon sideband | — |
| Operating temperature | 4 K – 300 K | Unique room-temperature operation | — |

## References

### Original proposal / early work
- F. Jelezko et al., "Observation of Coherent Oscillations in a Single Electron Spin," [Phys. Rev. Lett. 92, 076401 (2004)](https://doi.org/10.1103/PhysRevLett.92.076401)

### Experimental demonstrations
- G. Balasubramanian et al., "Ultralong spin coherence time in isotopically engineered diamond," [Nat. Mater. 8, 383 (2009)](https://doi.org/10.1038/nmat2420)
- L. Robledo et al., "High-fidelity projective read-out of a solid-state spin quantum register," [Nature 477, 574 (2011)](https://doi.org/10.1038/nature10401)
- P. C. Maurer et al., "Room-Temperature Quantum Bit Memory Exceeding One Second," [Science 336, 1283 (2012)](https://doi.org/10.1126/science.1220513)
- B. Hensen et al., "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres," [Nature 526, 682 (2015)](https://doi.org/10.1038/nature15759)
- C. E. Bradley et al., "A Ten-Qubit Solid-State Spin Register with Quantum Memory up to One Minute," [Phys. Rev. X 9, 031045 (2019)](https://doi.org/10.1103/PhysRevX.9.031045)
- M. Pompili et al., "Realization of a multinode quantum network of remote solid-state qubits," [Science 372, 259 (2021)](https://doi.org/10.1126/science.abg1919)

## Linked Papers

- [[jelezko-2004-nv-center]]

## Related Entries

- [[t-center-qubit]] — another color center qubit platform (silicon)
- [[siv-color-center-qubit]] — SiV color center, alternative diamond defect
- [[loss-divincenzo-qubit]] — foundational spin qubit proposal
