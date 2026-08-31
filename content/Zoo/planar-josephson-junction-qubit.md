---
title: Planar Josephson Junction Topological Qubit
entry_type: qubit
technology_family: Topological
status: proposed
figure_reviewed: false
first_proposed_year: 2017
keywords:
- planar Josephson junction
- topological superconductivity
- Majorana
- 2DEG
- spin-orbit coupling
- InAs
- proximity effect
influence_score: 0.62
last_updated: '2026-08-31'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-08-31
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/planar-josephson-junction-qubit-figure.provenance.json"
---

## Figure

![[planar-josephson-junction-qubit-figure.png]]

## Description

The planar Josephson junction (pJJ) topological-qubit proposal uses Majorana zero modes at the two ends of a quasi-one-dimensional topological superconducting channel formed in a two-dimensional electron gas (2DEG) between two superconducting banks. Unlike assembled nanowire networks, the weak link, gates, tunnel probes, phase-bias loop, and junction network can all be defined lithographically in one planar heterostructure.

A 2DEG with strong **Rashba spin-orbit coupling** (typically InAs in an epitaxial InAs/Al heterostructure) is contacted laterally by two superconducting leads separated by a narrow uncovered strip. With a suitable in-plane Zeeman field—conventionally chosen parallel to the junction—and superconducting phase difference $\varphi$ tuned near $\pi$, the phase-dependent Andreev spectrum can close and reopen into a one-dimensional topological phase. In the ideal finite channel, one Majorana zero mode localizes at each longitudinal endpoint.

The independent phase knob can reduce the required Zeeman field and broaden the topological region compared with an otherwise similar phase-unbiased junction. Straight, uniform pJJs are still sensitive to field orientation, orbital effects, disorder, junction width, transparency, and multiband occupancy; recent geometry-engineering proposals aim to relax those constraints rather than eliminating them by default.

Fornieri et al. (2019) reported phase-dependent zero-bias peaks in epitaxial InAs/Al pJJs. Ren et al. (2019) found a phase-controlled zero-bias region in an HgTe/Al junction, and Banerjee et al. (2023) observed gap closing and reopening together with zero-bias peaks in dual-end InAs/Al spectroscopy. These are important signatures consistent with a topological transition, but they are not by themselves proof of non-Abelian Majorana statistics or a demonstrated qubit.

## Hamiltonian

Choose the junction along $x$, let the superconducting banks lie on opposite sides in $y$, and take the in-plane Zeeman field along the junction. A representative continuum Bogoliubov-de Gennes Hamiltonian is

$$H_\mathrm{BdG}=\left[\frac{p^2}{2m^*}-\mu+V(x,y)\right]\tau_z+\alpha(p_x\sigma_y-p_y\sigma_x)\tau_z+E_Z\sigma_x+\operatorname{Re}\Delta(y)\tau_x-\operatorname{Im}\Delta(y)\tau_y,$$

where $\alpha$ is the Rashba coefficient, $E_Z$ is the Zeeman energy, $V(x,y)$ contains confinement and electrostatic gates, and $\tau_i$ and $\sigma_i$ act in Nambu and spin space. An ideal phase-biased pair potential can be written as

$$\Delta(y)=\begin{cases}
\Delta_0e^{-i\varphi/2}, & y<-W/2,\\
0, & |y|<W/2,\\
\Delta_0e^{+i\varphi/2}, & y>W/2,
\end{cases}$$

for a weak-link width $W$. The topological boundary is found from a closure and reopening of the full quasi-one-dimensional BdG spectrum, or equivalently a change of its class-D invariant. There is no universal pJJ criterion of the nanowire form $E_Z>\sqrt{\mu^2+\Delta^2}$: the boundary depends on $\varphi$, chemical potential, transverse-mode occupancy, junction width, transparency, spin-orbit coupling, orbital effects, and disorder. In the short, highly transparent idealization of Pientka et al., $\varphi\approx\pi$ strongly enlarges the topological region and can lower the required Zeeman field.

## Motivation

- **Planar scalability:** Fully compatible with standard semiconductor lithography — no nanowire growth or mechanical assembly.
- **Phase tunability:** The superconducting phase difference $\varphi$ is an independent control knob; in ideal short-junction models the topological region is broadest near $\varphi=\pi$.
- **Lower-field phase control:** Biasing near $\varphi=\pi$ can lower the Zeeman threshold, although ordinary straight pJJs still favor a defined in-plane field orientation.
- **In-situ diagnostics:** Theory predicts a critical-current minimum near the transition, providing a useful—but not uniquely topological—probe.
- **Network scalability:** Multiple junctions can be patterned on a single 2DEG chip for braiding operations.

## Experimental Status

**Phase-controlled signatures — Fornieri and Ren (2019):**
- Fornieri et al. measured phase-dependent zero-bias peaks in 80–120 nm-wide InAs/Al weak links, with an electron temperature near 40 mK.
- Ren et al. observed a zero-bias region whose phase range expanded with in-plane field in an HgTe/Al junction.

**Dual-end gap closing and reopening — Banerjee et al. (2023):**
- A 100 nm-wide, 1.6 μm-long InAs/Al junction showed gap closing and reopening with concurrent zero-bias peaks in selected gate ranges.
- Gap closings generally correlated between the two ends, but peak height and even visibility often did not, underscoring the roles of disorder and probe coupling.

**Detection and device engineering — 2024–2026:**
- Pekerten et al. (2024) proposed microwave signatures—resonance-frequency shifts and a half-slope absorption feature—to distinguish topological gap reopening in multiband pJJs.
- Elfeky et al. (2025) demonstrated dispersive microwave spectroscopy of gate-defined Andreev bound states in an Al/InAs planar junction, resolving modes with up to 99.94% transparency and an average induced gap near 150 μeV. This establishes a noninvasive spectroscopy tool, not a topological-state demonstration.
- Yu et al. (2025) experimentally showed that patterned superconducting contacts plus gates can reshape wave functions and enhance finite-field supercurrent, a device-engineering route toward fewer occupied subbands and a larger topological gap.
- Paudel et al. (2025) predicted that narrowing each superconducting strip to roughly 100–200 nm can raise the clean-device topological gap to as much as 40% of the parent gap; this is an optimization target, not an experimental Majorana-gap measurement.
- Mudi et al. (2026) reported re-entrant switching currents in several InAs/Al planar junctions but showed that disorder-driven mode interference in a corrugated weak link can reproduce such features without a Zeeman-driven topological transition. Re-entrance alone is therefore not a unique topological diagnostic.
- Garrido et al. (2026) predicted tunable end-like versus edge-like Majorana localization in the presence of Rashba and Dresselhaus coupling, emphasizing that endpoint placement is geometry- and parameter-dependent.
- As of August 2026, no pJJ experiment has demonstrated non-Abelian exchange, fusion rules, protected logical operations, or a qubit fidelity/coherence benchmark.

## Evergreen context

- [[quantum-hardware]] frames the planar junction route as a hybrid of semiconductor fabrication and superconducting proximity physics, aiming for a more lithography-friendly topological stack.
- [[spin-orbit-coupling-for-qubit-control]] is central here, because Rashba coupling in the 2DEG is one of the ingredients that opens the topological gap when combined with phase bias and Zeeman splitting.
- [[divincenzo-criteria]] highlights the gap between observing topological-transition signatures and demonstrating a practical qubit with robust initialization, readout, and entangling control.
- [[josephson-junction-as-nonlinear-element]] provides adjacent circuit intuition: in this platform the junction is not mainly valued for anharmonicity, but for the superconducting phase bias that helps tune the topological channel.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Electron temperature | ~40 mK | InAs/Al tunnelling-spectroscopy experiment | [Fornieri et al. 2019](https://doi.org/10.1038/s41586-019-1068-8) |
| InAs/Al weak-link geometry | 80 nm × 1.6 μm | Main Fornieri device; additional devices used 80 and 120 nm widths | [Fornieri et al. 2019](https://doi.org/10.1038/s41586-019-1068-8) |
| Dual-end device geometry | 100 nm × 1.6 μm | Gap closing/reopening and zero-bias spectroscopy | [Banerjee et al. 2023](https://doi.org/10.1103/PhysRevB.107.245304) |
| Reopened induced gap | ~50 μeV at half-integer loop flux | Representative Banerjee device; not a measured topological minigap | [Banerjee et al. 2023](https://doi.org/10.1103/PhysRevB.107.245304) |
| Microwave-resolved ABS transparency / induced gap | Up to 99.94% / ~150 μeV average | Gate-defined Al/InAs constriction; spectroscopy capability, not evidence of topology | [Elfeky et al. 2025](https://doi.org/10.1103/PhysRevResearch.7.013248) |
| Predicted optimized strip width / topological gap | 100–200 nm / up to 40% of parent gap | Clean-device theory for narrow superconducting strips; not experimentally demonstrated | [Paudel et al. 2025](https://doi.org/10.1103/894x-sl81) |
| Demonstrated logical-qubit fidelity/coherence | None | Platform remains at topological-signature and device-engineering stage | [Yu et al. 2025](https://doi.org/10.1103/3ccp-qyqs) |

## Scaling Considerations

- **Fabrication:** Fully planar, compatible with semiconductor foundry processes.
- **Networks:** Multiple junctions, gates, and probes can be patterned on a single 2DEG chip, but field orientation, disorder, and phase routing remain network-level constraints.
- **Spectral crowding:** Wide junctions host many trivial Andreev subbands that can imitate or obscure Majorana signatures; patterned contacts and electrostatic depletion are active mitigation strategies.
- **Phase control:** A superconducting loop converts applied flux (or an on-chip flux-control current) into a tunable phase difference $\varphi$ across the junction.

## References

### Original proposal
- F. Pientka et al., "Topological Superconductivity in a Planar Josephson Junction," [Phys. Rev. X 7, 021032 (2017)](https://doi.org/10.1103/PhysRevX.7.021032) — [arXiv:1609.09482](https://arxiv.org/abs/1609.09482)

### Experimental demonstrations
- A. Fornieri et al., "Evidence of topological superconductivity in planar Josephson junctions," [Nature 569, 89 (2019)](https://doi.org/10.1038/s41586-019-1068-8) — [arXiv:1809.03037](https://arxiv.org/abs/1809.03037)
- H. Ren et al., "Topological superconductivity in a phase-controlled Josephson junction," [Nature 569, 93 (2019)](https://doi.org/10.1038/s41586-019-1148-9) — [arXiv:1809.03076](https://arxiv.org/abs/1809.03076)
- A. Banerjee et al., "Signatures of a topological phase transition in a planar Josephson junction," [Phys. Rev. B 107, 245304 (2023)](https://doi.org/10.1103/PhysRevB.107.245304) — [arXiv:2201.03453](https://arxiv.org/abs/2201.03453)
- B. H. Elfeky et al., "Microwave Andreev bound state spectroscopy in a semiconductor-based Planar Josephson junction," [Phys. Rev. Research 7, 013248 (2025)](https://doi.org/10.1103/PhysRevResearch.7.013248) — [arXiv:2408.08487](https://arxiv.org/abs/2408.08487)
- P. Yu et al., "Gate-tunable enhancement of supercurrent in hybrid planar Josephson junctions," [Phys. Rev. B 112, 075419 (2025)](https://doi.org/10.1103/3ccp-qyqs) — [arXiv:2404.09901](https://arxiv.org/abs/2404.09901)
- S. R. Mudi et al., "Comparison of Origins of Re-Entrant Supercurrents at High In-Plane Magnetic Fields in Planar InAs-Al Josephson Junctions," [arXiv:2603.28530 (2026)](https://arxiv.org/abs/2603.28530)

### Related theory
- A. Stern and E. Berg, "Fractional Josephson Vortices and Braiding of Majorana Zero Modes in Planar Superconductor-Semiconductor Heterostructures," [Phys. Rev. Lett. 122, 107701 (2019)](https://doi.org/10.1103/PhysRevLett.122.107701) — [arXiv:1810.01200](https://arxiv.org/abs/1810.01200)
- B. Pekerten et al., "Microwave signatures of topological superconductivity in planar Josephson junctions," [Phys. Rev. B 110, L060513 (2024)](https://doi.org/10.1103/PhysRevB.110.L060513) — [arXiv:2407.16535](https://arxiv.org/abs/2407.16535)
- P. P. Paudel, J. Shabani, and T. D. Stanescu, "Planar Josephson junction devices with narrow superconducting strips: Topological properties and optimization," [Phys. Rev. B 112, 134522 (2025)](https://doi.org/10.1103/894x-sl81) — [arXiv:2504.04468](https://arxiv.org/abs/2504.04468)
- A. P. Garrido, P. A. Orellana, and A. Matos-Abiague, "Majorana edge and end states in planar Josephson junctions," [Physica E 177, 116444 (2026)](https://doi.org/10.1016/j.physe.2025.116444) — [arXiv:2409.19086](https://arxiv.org/abs/2409.19086)

## Linked Papers

- [[pientka-2017-planar-jj]]
- [[fornieri-2019-planar-jj]]
- [[stern-2019-fractional-josephson-vortices]]
- [[ren-2019-phase-controlled-planar-jj]]
- [[banerjee-2023-planar-jj-topological-transition]]
- [[pekerten-2024-microwave-planar-jj]]
- [[elfeky-2025-microwave-planar-jj]]
- [[yu-2025-gate-tunable-planar-jj]]
- [[paudel-2025-narrow-strip-planar-jj]]
- [[mudi-2026-reentrant-planar-jj]]
- [[garrido-2026-planar-jj-edge-end]]

## Related Entries

- [[majorana-topological-qubit]] — General Majorana qubit concept
- [[tetron-qubit]] — Majorana-parity encoding that could be implemented in a junction network
- [[andreev-spin-qubit]] — Andreev bound states in related junction geometries
- [[gatemon]] — Semiconductor-superconductor hybrid using similar materials
- [[qubit-readout]] — Tunnel and microwave probes used to distinguish topological from trivial subgap states
