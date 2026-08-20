---
title: Merged-Element Transmon (Mergemon)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2020
first_demonstrated_year: 2020
keywords:
- mergemon
- merged-element transmon
- compact qubit
- bottom-up superconductivity
- silicon
- germanium
- FinMET
- CMOS-compatible
influence_score: 0.68
last_updated: '2026-08-20'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-08-20
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/mergemon-figure.provenance.json"
figure_reviewed_by: "codex-visual-physics-review-2026-08-20"
figure_reviewed_at: "2026-08-20T14:09:40.264888+00:00"
---

## Figure

![[mergemon-figure.png]]

## Description

The merged-element transmon (mergemon or MET) is a superconducting qubit in which the Josephson junction's intrinsic capacitance supplies most of the transmon shunt capacitance. A conventional transmon also has junction capacitance, but its deliberately large coplanar or three-dimensional shunt capacitor dominates the total capacitance. In a mergemon, a micrometer-scale junction is engineered so that $C_J$ dominates over coupling and stray capacitances, allowing the nonlinear inductance and the dominant capacitance to occupy the same physical element.

Zhao et al. introduced and demonstrated the mergemon architecture in 2020 using a sputtered **Nb/amorphous-Si/Nb trilayer**. Their proof-of-principle device showed dispersive readout plus single- and multiphoton transitions, with an approximately 100-fold footprint reduction; participation analysis also found the amorphous-Si barrier and its interfaces to be the dominant relaxation channel. Mamin et al. then demonstrated **Al/AlO$_x$/Al** overlap-junction mergemons with mean $T_1$ values of 10–90 μs and some annealed devices above 100 μs.

The architecture changes where dielectric participation is concentrated; it does not eliminate dielectric loss. That tradeoff motivates crystalline-barrier implementations. In 2025, Balgley et al. first demonstrated dispersive coupling from an all-crystalline NbSe$_2$/WSe$_2$/NbSe$_2$ merged-element prototype and then reported fully van der Waals mergemons with coherent time-domain control and microsecond-scale lifetimes. Daum et al. reported flux-tunable Al/AlO$_x$/Al mergemons with mean $T_1$ up to 130 μs and showed that residual surface participation can still limit coherence.

The silicon-fin **FinMET** remains a materials-and-fabrication pathway: published work has demonstrated Si-fin capacitors and resonators, not yet a complete FinMET qubit. A 2026 Ga:Ge/Si/Ga:Ge result extended that materials frontier by demonstrating fully epitaxial crystalline Josephson junctions with a 0.5 nm Si weak-link layer, but likewise did not demonstrate a mergemon qubit.

## Hamiltonian

The circuit is quantized like a transmon:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

with

$$E_C = \frac{e^2}{2C_\Sigma}, \qquad C_\Sigma = C_J + C_{\mathrm{coupling}} + C_{\mathrm{stray}}.$$

The mergemon regime is $C_J/C_\Sigma \rightarrow 1$, whereas an ordinary planar transmon has an external shunt capacitance that dominates $C_\Sigma$. In the large-$E_J/E_C$ limit, $\hbar\omega_{01}\approx\sqrt{8E_JE_C}-E_C$ and the anharmonicity is approximately $-E_C$. A symmetric, negligible-loop-inductance SQUID implementation replaces $E_J$ by $E_J^{\mathrm{eff}}(\Phi_{\mathrm{ext}})=2E_{J0}|\cos(\pi\Phi_{\mathrm{ext}}/\Phi_0)|$; junction asymmetry and loop inductance modify this ideal expression. Concentrating participation in the junction makes barrier thickness, area, permittivity, and loss tangent central design variables.

## Motivation

- **Compact footprint:** Eliminating the large external shunt can reduce qubit area and suppress unwanted antenna and package-mode coupling.
- **Participation engineering:** The design shifts electric-field participation from broad exposed interfaces into a deliberately engineered junction stack.
- **Frequency control:** Junction area and barrier properties jointly determine $E_J$ and $C_J$, offering a materials route to reproducible device frequencies if fabrication can be controlled.
- **Crystalline-barrier frontier:** Semiconductor weak links can be thicker than conventional amorphous oxides while retaining useful Josephson coupling.
- **Foundry-oriented variants:** Fin-based processing could eventually exploit silicon manufacturing, but a complete FinMET qubit has not yet been demonstrated.

## Experimental Status

**First mergemon demonstration — Zhao et al. (2020):**
- Sputtered Nb/amorphous-Si/Nb trilayer with approximately 100× footprint reduction
- Demonstrated transmon-regime operation without external shunt capacitor
- Observed dispersive readout plus single- and multiphoton transitions
- Identified the amorphous-Si barrier and interfaces as the dominant relaxation channel

**Improved coherence — Mamin et al. (2021):**
- Al/AlO$_x$/Al overlap-junction mergemons in the low-transmon regime ($E_J/E_C\lesssim30$)
- Mean $T_1$ = 10–90 μs; some annealed devices sustained $T_1>100$ μs for hours
- The result constrains loss in conventional small-junction transmons, but does not make junction or surface loss irrelevant in the merged geometry

**Materials pathways — Goswami et al. (2022) and Balgley et al. (2025):**
- FinMET work demonstrated crystalline Si-fin capacitors and microwave resonators as fabrication precursors, not a complete qubit
- The all-crystalline NbSe$_2$/WSe$_2$/NbSe$_2$ prototype showed designed transmon frequency and anharmonicity plus dispersive resonator coupling

**First coherent fully van der Waals mergemons — Balgley et al. (2025, preprint):**
- Demonstrated time-domain control in fully crystalline NbSe$_2$/WSe$_2$/NbSe$_2$ merged-element transmons without external shunt capacitors
- Best-performing device had mean $T_1=1.67\pm0.27$ μs and best observed $T_1=2.46$ μs; the study identified dielectric loss as the dominant relaxation channel

**Recent coherence and TLS study — Daum et al. (2025, preprint):**
- Flux-tunable Al/AlO$_x$/Al mergemons reached mean $T_1$ up to 130 μs ($Q\approx3.3\times10^6$)
- Geometry sweeps and TLS spectroscopy showed that surface loss can remain important even when junction participation exceeds 90%

**Crystalline group-IV junction precursor — Knudsen et al. (2026, preprint):**
- Demonstrated fully epitaxial Ga:Ge/Si/Ga:Ge Josephson junctions with atomically continuous interfaces and a 0.5 nm Si weak-link layer
- Proposed the platform for compact, CMOS-compatible mergemons; no qubit coherence or mergemon operation was demonstrated

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Proof-of-principle | Dispersive shift; single- and multiphoton transitions | Nb/amorphous-Si/Nb device | [Zhao et al. 2020](https://doi.org/10.1103/PhysRevApplied.14.064006) |
| Footprint reduction | approximately 100× | Relative to a conventional planar transmon design | [Zhao et al. 2020](https://doi.org/10.1103/PhysRevApplied.14.064006) |
| Mean $T_1$ | 10–90 μs | Al/AlO$_x$/Al overlap-junction devices | [Mamin et al. 2021](https://doi.org/10.1103/PhysRevApplied.16.024023) |
| Annealed-device $T_1$ | >100 μs | Sustained over several hours in selected devices | [Mamin et al. 2021](https://doi.org/10.1103/PhysRevApplied.16.024023) |
| Recent mean $T_1$ | up to 130 μs | Flux-tunable devices; preprint result | [Daum et al. 2025](https://arxiv.org/abs/2509.22593) |
| Junction participation target | >90% | All six simulated 2025 designs; surface participation still matters | [Daum et al. 2025](https://arxiv.org/abs/2509.22593) |
| Crystalline weak-link thickness | 2–12 nm WSe$_2$ | Josephson coupling observed across 3–18 layers | [Balgley et al. 2025](https://doi.org/10.1103/3ssz-jjt6) |
| Fully vdW mean $T_1$ | $1.67\pm0.27$ μs | Best-performing first-generation coherent device; best observed $T_1=2.46$ μs | [Balgley et al. 2025](https://arxiv.org/abs/2512.08059) |
| FinMET maturity | Capacitors and resonators | Complete FinMET qubit not yet demonstrated | [Goswami et al. 2022](https://doi.org/10.1063/5.0104950) |
| Ga:Ge junction maturity | Josephson junction only | 0.5 nm crystalline Si weak link; no qubit demonstration | [Knudsen et al. 2026](https://arxiv.org/abs/2608.08500) |

## Scaling Considerations

- **Density:** The active qubit structure can be much smaller, although resonator coupling, wiring, isolation, and packaging still set the system-level pitch.
- **Loss tradeoff:** Increasing $C_J/C_\Sigma$ suppresses participation elsewhere but makes junction-barrier loss and strongly coupled TLS more consequential.
- **Fabrication yield:** Because $E_J$ and $C_J$ depend on the same barrier, thickness and area errors can shift both frequency and anharmonicity; reproducibility is not automatic.
- **Materials frontier:** Crystalline semiconductor barriers and Si fins offer thicker, more uniform weak links, but neither route has yet established processor-scale coherence or yield.
- **Readout and coupling:** Practical devices retain coupling structures and resonators, so $C_\Sigma\neq C_J$ exactly and exposed-interface participation is not zero.

## References

### Materials precursor
- Y.-P. Shim and C. Tahan, "Bottom-up superconducting and Josephson junction devices inside a group-IV semiconductor," [Nat. Commun. 5, 4225 (2014)](https://doi.org/10.1038/ncomms5225) — [arXiv:1309.0015](https://arxiv.org/abs/1309.0015). This proposed monolithic semiconductor Josephson devices, not the merged-element transmon architecture itself.

### Experimental demonstrations
- R. Zhao et al., "Merged-Element Transmon," [Phys. Rev. Applied 14, 064006 (2020)](https://doi.org/10.1103/PhysRevApplied.14.064006) — [arXiv:2008.07652](https://arxiv.org/abs/2008.07652)
- H. J. Mamin et al., "Merged-Element Transmons: Design and Qubit Performance," [Phys. Rev. Applied 16, 024023 (2021)](https://doi.org/10.1103/PhysRevApplied.16.024023) — [arXiv:2103.09163](https://arxiv.org/abs/2103.09163)
- A. Goswami et al., "Towards merged-element transmons using silicon fins: The FinMET," [Appl. Phys. Lett. 121, 064001 (2022)](https://doi.org/10.1063/5.0104950) — [arXiv:2108.11519](https://arxiv.org/abs/2108.11519)
- J. Balgley et al., "Crystalline superconductor-semiconductor Josephson junctions for compact superconducting qubits," [Phys. Rev. Applied 24, 034016 (2025)](https://doi.org/10.1103/3ssz-jjt6) — [arXiv:2501.14969](https://arxiv.org/abs/2501.14969)
- E. Daum et al., "Investigation of Parasitic Two-Level Systems in Merged-Element Transmon Qubits" (2025 preprint) — [arXiv:2509.22593](https://arxiv.org/abs/2509.22593)
- J. Balgley et al., "Coherent and compact van der Waals transmon qubits" (2025 preprint) — [arXiv:2512.08059](https://arxiv.org/abs/2512.08059)
- F. H. Knudsen et al., "Crystalline Germanium Josephson Junctions" (2026 preprint) — [arXiv:2608.08500](https://arxiv.org/abs/2608.08500)

## Linked Papers

- [[shim-2014-bottom-up-sc]]
- [[zhao-2020-mergemon]]
- [[mamin-2021-mergemon]]
- [[goswami-2022-finmet]]
- [[balgley-2025-crystalline-mergemon]]
- [[daum-2025-mergemon-tls]]
- [[balgley-2025-coherent-vdw-mergemon]]
- [[knudsen-2026-crystalline-germanium-jj]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the merged-element idea makes the junction itself supply both anharmonicity and most of the capacitance
- [[charge-noise-sweet-spot]] — mergemon stays in the transmon logic of suppressing charge sensitivity by working at large effective capacitance
- [[charge-noise-in-superconducting-qubits]] — the background decoherence story that motivates moving field participation away from lossy exposed interfaces

## Related Entries

- [[transmon]] — Parent architecture; mergemon eliminates its shunt capacitor
- [[gatemon]] — Hybrid super-semi qubit sharing semiconductor junction theme
- [[gatemonium]] — Multi-junction gatemon variant
- [[silicon-spin-qubit]] — Co-integration target for super-semi platforms
- [[all-semiconductor-superconducting-qubit]] — Full semiconductor SC qubit concept
- [[circuit-qed]] — Dispersive resonator coupling used to control and read out demonstrated mergemons
