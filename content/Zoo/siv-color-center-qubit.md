---
title: SiV / SnV Color Center Qubit
entry_type: qubit
technology_family: Spin-Photon
status: demonstrated
first_proposed_year: 2017
keywords:
- silicon-vacancy
- tin-vacancy
- diamond
- color center
- quantum network
- spin-photon interface
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

Silicon-vacancy (SiV⁻) and tin-vacancy (SnV⁻) centers in diamond are group-IV color center qubits with inversion symmetry that protects their optical transitions from electric field noise. This gives them spectrally stable, nearly transform-limited optical emission — a critical advantage over NV centers for quantum networking, where photon indistinguishability is essential for remote entanglement.


## Figure

![[siv-color-center-qubit-figure.png]]

## Description

Group-IV color centers (SiV, GeV, SnV, PbV) share a split-vacancy structure: the impurity atom sits at an inversion center between two vacant carbon sites. This $D_{3d}$ symmetry eliminates first-order coupling to electric fields (Stark effect), producing narrow, stable optical lines even in nanostructures.

**SiV⁻:** Ground state is a spin-1/2 doublet with ~48 GHz splitting in the orbital ground state. Optical transition at 737 nm with >90% emission into the zero-phonon line (ZPL), vs. ~3% for NV centers. The challenge: the orbital degree of freedom makes the spin sensitive to phonons, requiring operation below ~100 mK for long coherence.

**SnV⁻:** Larger spin-orbit splitting (~850 GHz) pushes phonon-mediated relaxation to higher temperatures, enabling spin coherence at ~1–2 K — accessible with a standard ³He cryostat rather than a dilution refrigerator. Optical transition at 619 nm.

Both are promising for quantum repeater nodes, where spin-photon entanglement and photon-mediated remote spin-spin entanglement are the core operations.

## Hamiltonian

Ground-state spin Hamiltonian in an external magnetic field:

$$H = \lambda_{\text{SO}} L_z S_z + g_e \mu_B \mathbf{B} \cdot \mathbf{S} + g_L \mu_B \mathbf{B} \cdot \mathbf{L} + H_{\text{JT}}$$

where $\lambda_{\text{SO}}$ is the spin-orbit coupling (~48 GHz for SiV, ~850 GHz for SnV), $L_z$ is the orbital angular momentum projection, and $H_{\text{JT}}$ captures dynamic Jahn-Teller effects.

Qubit states are typically the spin-up and spin-down states of the lower orbital branch, split by the Zeeman interaction.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| ZPL fraction (Debye-Waller) | >70% (SiV), >60% (SnV) | vs. ~3% for NV center | [[nguyen-2019-siv-network]] |
| T₂ (spin echo, SiV) | 13 ms | At 100 mK in ²⁸Si-enriched diamond | [[sukachev-2017-siv-coherence]] |
| T₂ (spin echo, SnV) | 0.3 ms | At 1.7 K | [[debroux-2021-snv-coherence]] |
| Spectral diffusion | <100 MHz (SiV) | 100× narrower than NV | — |
| Remote entanglement fidelity | 94% | SiV, Harvard 2024 | [[knaut-2024-siv-entanglement]] |
| Optical linewidth | ~100 MHz (SiV) | Near transform-limited | — |
| Operating temperature | <100 mK (SiV), ~1.5 K (SnV) | SnV advantage for scalability | — |

## Scaling Considerations

- **Quantum networking:** Best-in-class spin-photon interface for diamond platforms. SiV demonstrated Boston-to-Harvard entanglement over deployed fiber.
- **Nanophotonic integration:** High ZPL fraction enables efficient coupling to photonic crystal cavities (Purcell enhancement >100×).
- **Temperature tradeoff:** SiV needs dilution refrigerator; SnV works at ³He temperatures. PbV may work even higher.
- **Fabrication:** Requires implantation + annealing in high-purity diamond. Yield and placement precision improving but below semiconductor standards.

## Related Entries
- [[t-center-qubit]]
- [[nv-center-qubit]]
- [[dual-rail-photonic-qubit]]
