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
last_updated: '2026-05-14'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-05-14
---

## Figure

![[siv-color-center-qubit-figure.png]]

## Description

Silicon-vacancy (SiV⁻) and tin-vacancy (SnV⁻) centers in diamond are group-IV color-center qubits with inversion symmetry, which suppresses first-order sensitivity of their optical transitions to electric-field noise. That makes them unusually good solid-state spin-photon interfaces: they retain narrow, nearly transform-limited optical lines even in nanophotonic devices, which is exactly what remote-entanglement protocols need.

Both defects share the **split-vacancy** structure: the group-IV atom sits between two vacant carbon sites in a $D_{3d}$-symmetric configuration. Compared with NV centers, they emit a much larger fraction of light into the zero-phonon line and are therefore much easier to integrate into cavities, waveguides, and quantum-network nodes.

**SiV⁻:** The relevant qubit is usually encoded in Zeeman-split spin sublevels of the lower ground-state orbital branch. The optical zero-phonon line is at 737 nm, and the ground-state spin-orbit-dominated splitting is about 48 GHz. SiV currently has the strongest networking track record in diamond, but long electron-spin coherence typically requires operation near 100 mK because phonons strongly couple the orbital degree of freedom.

**SnV⁻:** SnV keeps the same inversion-protected optical advantages while pushing the ground-state splitting to about 850 GHz. That strongly suppresses phonon-mediated relaxation relative to SiV and enables coherent spin control around 1.7 K, which is a major practical advantage for cryogenic deployment. Its optical zero-phonon line is near 619 nm.

Together, SiV and SnV define the leading group-IV spin-photon qubit family for cavity QED, remote entanglement, and quantum-repeater-style network nodes.

## Hamiltonian

A representative low-energy ground-state Hamiltonian for group-IV vacancy centers is

$$H_{\mathrm{eff}} = \frac{h\Delta_{\mathrm{GS}}}{2}\tau_z + g_S\mu_B\,\mathbf{B}\cdot\mathbf{S} + g_L\mu_B B_z\tau_y + H_{\mathrm{strain}} + H_{\mathrm{phonon}}$$

where $\tau$ acts on the orbital doublet, $\mathbf{S}$ acts on the effective spin-$1/2$, and $\Delta_{\mathrm{GS}}$ is the ground-state orbital splitting, about 48 GHz for SiV and about 850 GHz for SnV. $H_{\mathrm{strain}}$ and $H_{\mathrm{phonon}}$ capture strain/Jahn-Teller and phonon-induced mixing that are essential for understanding why SiV is much more temperature-sensitive than SnV.

The useful qubit is generally **not** the raw orbital doublet. Instead, it is encoded in Zeeman-split spin sublevels within the lower orbital branch, with the large species-dependent orbital splitting setting the phonon sensitivity and practical operating temperature.

## Motivation

- **Spectral stability:** Inversion symmetry suppresses first-order Stark shifts, giving much more stable optical transitions than NV centers.
- **High ZPL fraction:** SiV and SnV emit a large fraction of their fluorescence into the zero-phonon line, which makes cavity coupling and photon collection far more efficient than in NV-based nodes.
- **Quantum networking:** SiV already demonstrated metropolitan-scale entanglement through deployed telecom fiber, and SnV is emerging as the warmer-operation variant of the same basic spin-photon architecture.
- **Temperature tradeoff spectrum:** SiV offers the most mature network-node demonstrations, while SnV trades some maturity for dramatically better thermal robustness.
- **Nanophotonic integration:** Recent 2025-2026 results show both scalable thin-film and hybrid-integrated photonic platforms for SiV/SnV-style nodes.

## Experimental Status

**SiV spin coherence — Sukachev et al. (2017):**
- Single-shot SiV spin readout and coherent microwave control at millikelvin temperature
- Spin coherence time $T_2 = 13$ ms at 100 mK

**SiV network node — Nguyen et al. (2019):**
- Cavity-coupled SiV node with cooperativity $C > 30$
- Heralded photon storage and universal control of a SiV + $^{13}$C register

**Metropolitan entanglement — Knaut et al. (2024):**
- Remote entanglement of SiV memory nodes across 35 km of deployed Boston-area telecom fiber
- Remote entanglement fidelity of 94%

**Recent SiV scaling/control advances — Riedel et al. (2025), Cornell et al. (2025), Yama et al. (2026):**
- Wafer-scale thin-film diamond photonic platform with SiV cooperativities approaching 100
- All-mechanical dressed-basis control of an SiV spin qubit with Rabi frequencies up to 800 MHz
- Hybrid GaP-on-diamond spin-photon interface with more than 600 cavities, above-unity cooperativity, single-shot spin readout, and $T_1 > 0.4$ ms at 4 K

**SnV coherence and memory — Debroux et al. (2021), Resch et al. (2025):**
- SnV spin-qubit control at 1.7 K with spin-echo $T_2 = 0.3$ ms
- Coupled $^{13}$C nuclear-spin memory with $T_2^* = 1.5$ ms, dynamical-decoupled $T_2 = 1.35$ s, and 99.92% single-qubit gate fidelity

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| SiV spin coherence $T_2$ | 13 ms | 100 mK, single-shot-readout regime | [Sukachev et al. 2017](https://doi.org/10.1103/PhysRevLett.119.223602) |
| SiV cavity cooperativity | $C > 30$ | Nanophotonic network-node interface | [Nguyen et al. 2019](https://doi.org/10.1103/PhysRevLett.123.183602) |
| Remote entanglement fidelity | 94% | SiV memory nodes over deployed telecom fiber | [Knaut et al. 2024](https://doi.org/10.1038/s41586-024-07252-z) |
| SiV dressed-basis Rabi frequency | 800 MHz | All-mechanical coherence-protected control | [Cornell et al. 2025](https://arxiv.org/abs/2508.13356) |
| SiV scalable-platform cooperativity | Approaching 100 | Wafer-scale thin-film diamond photonics | [Riedel et al. 2025](https://arxiv.org/abs/2508.06675) |
| SnV spin-echo coherence $T_2$ | 0.3 ms | 1.7 K coherent-spin-control regime | [Debroux et al. 2021](https://doi.org/10.1103/PhysRevX.11.041041) |
| SnV coupled-$^{13}$C memory $T_2$ | 1.35 s | Dynamical-decoupled nuclear-spin memory | [Resch et al. 2025](https://arxiv.org/abs/2509.03354) |
| SnV coupled-$^{13}$C gate fidelity | 99.92% | Randomized-benchmarking single-qubit gates | [Resch et al. 2025](https://arxiv.org/abs/2509.03354) |
| Hybrid SiV spin-relaxation time | $T_1 > 0.4$ ms | GaP-on-diamond platform at 4 K | [Yama et al. 2026](https://arxiv.org/abs/2601.04733) |

## Scaling Considerations

- **Quantum networking:** SiV is the most mature diamond memory-node platform, with cavity-based spin-photon interfaces, telecom frequency conversion, and deployed-fiber entanglement already demonstrated.
- **Cryogenic practicality:** SnV is attractive because coherent control at 1.7 K relaxes the dilution-refrigerator requirement that still dominates long-coherence SiV experiments.
- **Manufacturability:** 2025-2026 work shows real progress toward scalable fabrication, including wafer-scale thin-film diamond processing and hybrid GaP-on-diamond nanophotonics.
- **Photon routing:** Visible-wavelength emission is excellent for local cavity QED but still requires frequency conversion for low-loss long-haul fiber networking.
- **Materials challenge:** Yield, placement accuracy, charge-state stability, and near-surface coherence remain active engineering bottlenecks.

## References

### Key experiments
- D. D. Sukachev et al., "Silicon-Vacancy Spin Qubit in Diamond: A Quantum Memory Exceeding 10 ms with Single-Shot State Readout," [Phys. Rev. Lett. 119, 223602 (2017)](https://doi.org/10.1103/PhysRevLett.119.223602) — [arXiv:1708.08852](https://arxiv.org/abs/1708.08852)
- C. T. Nguyen et al., "Quantum Network Nodes Based on Diamond Qubits with an Efficient Nanophotonic Interface," [Phys. Rev. Lett. 123, 183602 (2019)](https://doi.org/10.1103/PhysRevLett.123.183602) — [arXiv:1907.13199](https://arxiv.org/abs/1907.13199)
- C. M. Knaut et al., "Entanglement of nanophotonic quantum memory nodes in a telecom network," [Nature 629, 573 (2024)](https://doi.org/10.1038/s41586-024-07252-z) — [arXiv:2310.01316](https://arxiv.org/abs/2310.01316)
- R. Debroux et al., "Quantum Control of the Tin-Vacancy Spin Qubit in Diamond," [Phys. Rev. X 11, 041041 (2021)](https://doi.org/10.1103/PhysRevX.11.041041) — [arXiv:2106.00723](https://arxiv.org/abs/2106.00723)

### Recent updates
- E. Cornell et al., "All-mechanical coherence protection and fast control of a spin qubit," [arXiv:2508.13356](https://arxiv.org/abs/2508.13356)
- D. Riedel et al., "A scalable photonic quantum interconnect platform," [arXiv:2508.06675](https://arxiv.org/abs/2508.06675)
- J. Resch et al., "High-fidelity control of a $^{13}$C nuclear spin coupled to a tin-vacancy center in diamond," [arXiv:2509.03354](https://arxiv.org/abs/2509.03354)
- N. Yama et al., "A scalable gallium-phosphide-on-diamond spin-photon interface," [arXiv:2601.04733](https://arxiv.org/abs/2601.04733)

## Linked Papers

- [[nguyen-2019-siv-network]]
- [[sukachev-2017-siv-coherence]]
- [[debroux-2021-snv-coherence]]
- [[knaut-2024-siv-entanglement]]

## Related Entries

- [[t-center-qubit]] — Silicon-based spin-photon interface with native telecom emission
- [[nv-center-qubit]] — Nitrogen-vacancy center; more mature but worse optical properties
- [[quantum-transduction]] — Frequency-conversion context for visible-wavelength spin-photon platforms
- [[dual-rail-photonic-qubit]] — Photonic encoding for quantum networking
