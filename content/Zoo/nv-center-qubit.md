---
title: Nitrogen-Vacancy (NV) Center Qubit
entry_type: qubit
technology_family: Solid State
status: demonstrated
first_proposed_year: 1997
keywords:
- nv center
- nitrogen vacancy
- diamond
- solid state
- spin qubit
- room temperature
- optically detected magnetic resonance
influence_score: 0.78
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
published: 1997-01-01
---

## Description

The nitrogen-vacancy (NV) center in diamond is a point defect consisting of a substitutional nitrogen atom adjacent to a vacancy in the diamond carbon lattice. In its negatively charged state (NV$^-$), the center has a spin-1 ground state ($^3A_2$) that can be initialized, manipulated, and read out optically at room temperature — a unique property among solid-state qubit candidates.

The qubit is typically encoded in the $m_s = 0$ and $m_s = -1$ sublevels of the ground-state triplet, split by a zero-field splitting of $D = 2.87\,\text{GHz}$. The $m_s = 0$ state fluoresces more brightly than the $m_s = \pm 1$ states due to an intersystem crossing to a metastable singlet, enabling spin-state readout via optically detected magnetic resonance (ODMR). This same mechanism provides optical spin polarization (initialization into $m_s = 0$) via repeated optical pumping.

Single-qubit gates are performed by resonant microwave pulses at the $m_s = 0 \to m_s = -1$ transition frequency. Two-qubit gates can use the magnetic dipole-dipole interaction between nearby NV centers (~10–25 nm spacing), coupling to nearby $^{13}\text{C}$ nuclear spins as quantum memory, or photonic entanglement between remote NV centers via spin-photon interfaces.

NV centers are the leading platform for quantum networking and long-distance entanglement distribution, having demonstrated deterministic entanglement delivery between nodes separated by $> 1\,\text{km}$.


## Figure

![[nv-center-qubit-figure.png]]

## Hamiltonian

Ground-state spin Hamiltonian (no external strain):

$$H = D\,S_z^2 + g_e\mu_B\,\mathbf{B}\cdot\mathbf{S} + E(S_x^2 - S_y^2) + \mathbf{S}\cdot\mathbf{A}\cdot\mathbf{I}_N$$

where $D \approx 2.87\,\text{GHz}$ is the zero-field splitting, $E$ is the transverse zero-field splitting (strain-dependent), $g_e \approx 2.003$ is the electron $g$-factor, $\mathbf{A}$ is the hyperfine tensor for the $^{14}\text{N}$ nuclear spin ($I = 1$), and $\mathbf{B}$ is the external magnetic field.

For the qubit subspace ($m_s = 0, -1$) with an axial field $B_z$:

$$H_\text{qubit} = (D - g_e\mu_BB_z)|{-1}\rangle\langle{-1}|$$

## Motivation

NV centers operate at room temperature, can be optically initialized and read out with single-shot fidelity, and emit indistinguishable photons suitable for long-distance entanglement. These properties make them uniquely suited for quantum networks and distributed quantum computing, where other platforms (superconducting, trapped ion) require cryogenics and cannot easily produce flying qubits.

## Key Findings

- Room-temperature coherent control of a single electron spin demonstrated (Jelezko et al. 2004).
- Spin coherence $T_2 > 1\,\text{s}$ demonstrated for $^{13}\text{C}$ nuclear spins coupled to NV centers in isotopically pure diamond.
- Deterministic entanglement between NV centers separated by 1.3 km (Hensen et al. 2015, loophole-free Bell test).
- Three-node quantum network demonstrated (Pompili et al. 2021).
- Quantum error correction on a 10-qubit register (1 electron + 9 nuclear spins) demonstrated.
- Single-shot readout fidelity $> 99\%$ at cryogenic temperatures with resonant excitation.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Electron $T_1$ | >1 hour (77 K) | At room temperature: ~5 ms | — |
| Electron $T_2$ (echo) | 1–2 ms (RT) | In isotopically pure $^{12}\text{C}$ diamond | — |
| Nuclear $T_2$ ($^{13}\text{C}$) | >1 s | Used as quantum memory | — |
| 1Q gate fidelity | 99–99.9% | Microwave ESR at RT | — |
| 2Q gate fidelity | 95–99% | NV-$^{13}$C hyperfine gate | — |
| Readout fidelity | 95% (RT), >99% (cryo) | ODMR; improved with SIL or cavity | — |
| Zero-field splitting $D$ | 2.87 GHz | Temperature-dependent (~77 kHz/K) | — |
| Photon emission wavelength | 637 nm (ZPL) | Debye-Waller factor ~3%; rest in phonon sideband | — |
| Operating temperature | 4 K – 300 K | Unique room-temperature operation | — |

## Linked Papers

- [[jelezko-2004-nv-center]]

## Related Entries

- [[single-spin-quantum-dot-loss-divincenzo-qubit]]
