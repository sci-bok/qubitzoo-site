---
title: SiV / SnV Color Center Qubit
entry_type: qubit
technology_family: Spin-Photon
status: demonstrated
figure_reviewed: true
first_proposed_year: 2017
first_demonstrated_year: 2017
keywords:
- silicon-vacancy
- tin-vacancy
- diamond
- color center
- quantum network
- spin-photon interface
- group-IV vacancy
influence_score: 0.82
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[siv-color-center-qubit-figure.png]]

## Description

Silicon-vacancy (SiV⁻) and tin-vacancy (SnV⁻) centers in diamond are group-IV color center qubits with inversion symmetry that protects their optical transitions from electric field noise. This gives them spectrally stable, nearly transform-limited optical emission — a critical advantage over NV centers for quantum networking, where photon indistinguishability is essential for remote entanglement.

Group-IV color centers (SiV, GeV, SnV, PbV) share a **split-vacancy structure**: the impurity atom sits at an inversion center between two vacant carbon sites. This $D_{3d}$ symmetry eliminates first-order coupling to electric fields (Stark effect), producing narrow, stable optical lines even in nanostructures.

**SiV⁻:** Ground state is a spin-1/2 doublet with ~48 GHz splitting in the orbital ground state. Optical transition at 737 nm with >90% emission into the zero-phonon line (ZPL), vs. ~3% for NV centers. The challenge: the orbital degree of freedom makes the spin sensitive to phonons, requiring operation below ~100 mK for long coherence.

**SnV⁻:** Larger spin-orbit splitting (~850 GHz) pushes phonon-mediated relaxation to higher temperatures, enabling spin coherence at ~1–2 K — accessible with a standard ³He cryostat rather than a dilution refrigerator. Optical transition at 619 nm.

Both are promising for quantum repeater nodes, where spin-photon entanglement and photon-mediated remote spin-spin entanglement are the core operations.

## Hamiltonian

Ground-state spin Hamiltonian in an external magnetic field:

$$H = \lambda_{\text{SO}} L_z S_z + g_e \mu_B \mathbf{B} \cdot \mathbf{S} + g_L \mu_B \mathbf{B} \cdot \mathbf{L} + H_{\text{JT}}$$

where $\lambda_{\text{SO}}$ is the spin-orbit coupling (~48 GHz for SiV, ~850 GHz for SnV), $L_z$ is the orbital angular momentum projection, and $H_{\text{JT}}$ captures dynamic Jahn-Teller effects.

Qubit states are typically the spin-up and spin-down states of the lower orbital branch, split by the Zeeman interaction.

## Motivation

- **Spectral stability:** Inversion symmetry eliminates first-order Stark effect, giving ~100× narrower optical lines than NV centers — critical for photon-mediated entanglement.
- **High ZPL fraction:** >70% (SiV) and >60% (SnV) of emission into the zero-phonon line vs. ~3% for NV — dramatically higher photon collection efficiency.
- **Quantum networking:** Best-in-class spin-photon interface for diamond platforms; SiV demonstrated metropolitan-scale entanglement.
- **Temperature tradeoff spectrum:** SiV (100 mK) → SnV (1.5 K) → PbV (potentially higher) — SnV already accessible without dilution refrigerator.
- **Nanophotonic integration:** High ZPL fraction enables efficient coupling to photonic crystal cavities with >100× Purcell enhancement.

## Experimental Status

**SiV spin coherence — Sukachev et al. (2017):**
- Demonstrated SiV spin qubit as quantum memory exceeding 10 ms coherence
- Single-shot spin readout with >99% fidelity at millikelvin temperatures

**SiV quantum network — Nguyen et al. (2019):**
- Quantum network nodes based on SiV qubits with efficient nanophotonic interface
- Demonstrated spin-photon entanglement and remote two-node entanglement

**Metropolitan entanglement — Knaut et al. (2024):**
- Entanglement of SiV quantum memory nodes across a deployed telecom fiber network in Boston
- Remote entanglement fidelity of 94%

**SnV coherence — Debroux et al. (2021):**
- Quantum control of SnV spin qubit at 1.7 K (³He cryostat)
- Spin echo $T_2$ = 0.3 ms — first demonstration of SnV as viable qubit

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| ZPL fraction (Debye-Waller) | >70% (SiV), >60% (SnV) | vs. ~3% for NV center | [Nguyen et al. 2019](https://doi.org/10.1103/PhysRevLett.123.183602) |
| T₂ (spin echo, SiV) | 13 ms | At 100 mK in diamond | [Sukachev et al. 2017](https://doi.org/10.1103/PhysRevLett.119.223602) |
| T₂ (spin echo, SnV) | 0.3 ms | At 1.7 K | [Debroux et al. 2021](https://doi.org/10.1103/PhysRevX.11.041041) |
| Spectral diffusion | <100 MHz (SiV) | 100× narrower than NV | — |
| Remote entanglement fidelity | 94% | SiV, Harvard 2024 | [Knaut et al. 2024](https://doi.org/10.1038/s41586-024-07252-z) |
| Optical linewidth | ~100 MHz (SiV) | Near transform-limited | — |
| Operating temperature | <100 mK (SiV), ~1.5 K (SnV) | SnV advantage for scalability | — |

## Scaling Considerations

- **Quantum networking:** Best-in-class spin-photon interface for diamond platforms. SiV demonstrated Boston-to-Harvard entanglement over deployed fiber.
- **Nanophotonic integration:** High ZPL fraction enables efficient coupling to photonic crystal cavities (Purcell enhancement >100×).
- **Temperature tradeoff:** SiV needs dilution refrigerator; SnV works at ³He temperatures. PbV may work even higher.
- **Fabrication:** Requires implantation + annealing in high-purity diamond. Yield and placement precision improving but below semiconductor standards.

## References

### Key experiments
- D. D. Sukachev et al., "Silicon-Vacancy Spin Qubit in Diamond: A Quantum Memory Exceeding 10 ms with Single-Shot State Readout," [Phys. Rev. Lett. 119, 223602 (2017)](https://doi.org/10.1103/PhysRevLett.119.223602) — [arXiv:1708.08852](https://arxiv.org/abs/1708.08852)
- C. T. Nguyen et al., "Quantum Network Nodes Based on Diamond Qubits with an Efficient Nanophotonic Interface," [Phys. Rev. Lett. 123, 183602 (2019)](https://doi.org/10.1103/PhysRevLett.123.183602) — [arXiv:1907.13199](https://arxiv.org/abs/1907.13199)
- C. M. Knaut et al., "Entanglement of nanophotonic quantum memory nodes in a telecom network," [Nature 629, 573 (2024)](https://doi.org/10.1038/s41586-024-07252-z) — [arXiv:2310.01316](https://arxiv.org/abs/2310.01316)
- R. Debroux et al., "Quantum Control of the Tin-Vacancy Spin Qubit in Diamond," [Phys. Rev. X 11, 041041 (2021)](https://doi.org/10.1103/PhysRevX.11.041041) — [arXiv:2106.00723](https://arxiv.org/abs/2106.00723)

## Linked Papers

- [[nguyen-2019-siv-network]]
- [[sukachev-2017-siv-coherence]]
- [[debroux-2021-snv-coherence]]
- [[knaut-2024-siv-entanglement]]

## Related Entries

- [[t-center-qubit]] — Silicon-based spin-photon interface with native telecom emission
- [[nv-center-qubit]] — Nitrogen-vacancy center; more mature but worse optical properties
- [[dual-rail-photonic-qubit]] — Photonic encoding for quantum networking
