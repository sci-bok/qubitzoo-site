---
title: Kane Qubit (Phosphorus-in-Silicon)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
first_proposed_year: 1998
first_demonstrated_year: 2013
keywords:
- kane qubit
- phosphorus
- silicon
- donor
- nuclear spin
- electron spin
- exchange coupling
influence_score: 0.76
last_updated: '2026-05-28'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-05-28
figure_reviewed: false
---

## Figure

![[kane-qubit-figure.png]]

## Description

The Kane qubit, proposed by Bruce Kane in 1998, encodes quantum information in the nuclear spin of individual $^{31}\mathrm{P}$ donor atoms embedded in isotopically enriched $^{28}\mathrm{Si}$. The donor electron is not the long-lived memory qubit itself, but it is essential: it enables hyperfine-tuned addressability, mediates exchange-coupled two-qubit gates, and provides the route to spin-to-charge readout through a nearby charge sensor.

The architecture uses three main control elements:
1. **A-gates** tune the contact hyperfine coupling $A$ between each donor electron and nucleus by distorting the electron wavefunction at the nucleus.
2. **J-gates** or equivalent electrostatic barrier gates tune the exchange interaction $J$ between electrons on neighboring donor sites.
3. **Global RF/microwave fields** drive ESR and NMR transitions, with qubit selectivity obtained primarily from local A-gate detuning rather than fully local drive lines.

Single-qubit gates are performed on the nuclear spin via NMR, typically after shifting its resonance with the A-gate. Two-qubit operations are mediated by the donor electrons through exchange-enabled electron-nuclear logic or effective nuclear-nuclear couplings derived from the same underlying interaction. Readout is usually performed by mapping the nuclear state onto the electron spin and then using spin-dependent tunnelling or related spin-to-charge conversion schemes.

The platform is compelling because donor nuclear spins in isotopically enriched silicon combine extraordinarily long coherence with atomic-scale fabrication. But it is also unforgiving: exchange depends sensitively on donor placement, so the Kane architecture only works when fabrication, electrostatics, and calibration are all exceptionally precise.

## Hamiltonian

For two donor sites, a representative Kane-style Hamiltonian is

$$H = \sum_{i=1,2}\left[g_e\mu_B B\,S_{iz} - g_n\mu_N B\,I_{iz} + A_i(V_{A_i})\,\mathbf{S}_i\!\cdot\!\mathbf{I}_i\right] + J(V_J)\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + H_{\mathrm{ac}}(t)$$

where $\mathbf{S}_i$ and $\mathbf{I}_i$ are the electron and nuclear spin operators of donor $i$, $A_i(V_{A_i})$ is the A-gate-tunable hyperfine coupling, $J(V_J)$ is the exchange interaction controlled by the inter-donor electrostatics, and $H_{\mathrm{ac}}(t)$ represents the global ESR/NMR drive fields.

In the experimentally relevant high-field regime, $g_e\mu_B B \gg A_i$, so the electron and nuclear product-state basis is a good starting point. Kane-style entangling gates then use the donor electron as the fast actuator, either through exchange-assisted electron-nuclear logic or through effective interactions generated perturbatively from the same Hamiltonian. The key physical point is that the nuclear qubit inherits long coherence, while the electron channel supplies control, coupling, and readout.

## Motivation

Nuclear spins in silicon offer some of the longest coherence times in solid-state quantum hardware, and silicon is the most industrially mature materials platform in computing. Kane's proposal was the cleanest early vision of a semiconductor quantum computer built from atomically engineered qubits rather than lithographically defined mesoscopic islands.

## Experimental Status

**Single-donor control milestone — Pla et al. (2012, 2013):**
- 2012 established coherent control of a single $^{31}\mathrm{P}$ donor electron spin in silicon, the direct single-atom precursor to Kane-style donor processors.
- 2013 demonstrated high-fidelity readout and control of the donor nuclear-spin qubit itself, which is the canonical Kane encoding.

**Record nuclear coherence — Muhonen et al. (2014):**
- Demonstrated nuclear $T_2 > 35\,\mathrm{s}$ and nuclear $T_1 > 30$ hours for $^{31}\mathrm{P}$ in enriched $^{28}\mathrm{Si}$.
- Established the donor nuclear spin as a genuine long-lived quantum memory, not just a proposal-level advantage.

**Multi-qubit donor processor — Mądzik et al. (2022):**
- Demonstrated precision tomography of a three-qubit donor processor in silicon.
- Reported exchange-mediated multi-qubit control with two-qubit fidelity at the 99%-level.

**Two-register atom processor — Edlbauer, Wang et al. / SQC (2025):**
- Demonstrated an 11-qubit processor built from two phosphorus donor spin registers linked by electron exchange.
- Reported single- and multi-qubit fidelities spanning roughly 99.5% to 99.99%, Bell-state fidelities up to 99.5%, and GHZ-state generation across eight nuclear spins.
- This is the clearest 2025 scaling milestone for the Kane architecture proper, not just for generic silicon spin qubits.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Nuclear $T_1$ | >30 hours | $^{31}$P in enriched $^{28}$Si at 1.5 K | [Muhonen et al. 2014](https://doi.org/10.1038/nnano.2014.211) |
| Nuclear $T_2$ (echo) | >35 s | Long-lived donor nuclear memory | [Muhonen et al. 2014](https://doi.org/10.1038/nnano.2014.211) |
| 1Q gate fidelity (nuclear) | up to 99.99% | Precision-placed phosphorus donor processor | [Edlbauer, Wang et al. 2025](https://doi.org/10.1038/s41586-025-09827-w) |
| 2Q gate fidelity (CROT) | 99.64% | Electron-mediated donor logic | [Edlbauer, Wang et al. 2025](https://doi.org/10.1038/s41586-025-09827-w) |
| Bell-state fidelity | up to 99.5% | Local and non-local donor-register pairs | [Edlbauer, Wang et al. 2025](https://doi.org/10.1038/s41586-025-09827-w) |
| Demonstrated processor size | 11 qubits | 9 nuclear + 2 electron spin qubits | [Edlbauer, Wang et al. 2025](https://doi.org/10.1038/s41586-025-09827-w) |
| Hyperfine coupling $A$ | ~117 MHz | Bulk $^{31}$P donor value, A-gate tunable in device | [Kane 1998](https://doi.org/10.1038/30156) |

## Scaling Considerations

- **Placement precision is existential:** exchange in donor devices depends strongly on donor separation and valley physics, so atomic-scale positioning errors directly hit gate calibration and yield.
- **Readout and control remain electron-mediated:** the nuclear qubit is the memory, but fast logic and measurement still route through the donor electron and charge-sensor stack.
- **Fabrication is improving:** Holmes et al. (2024) showed improved deterministic donor-placement workflows using molecule-ion implantation, directly addressing one of Kane's oldest practical bottlenecks.
- **Longer-range coupling is an active direction:** Munia et al. (2024) showed that donor-chain superexchange can in principle relax strict nearest-neighbor spacing constraints.
- **Best current scaling evidence:** the 2025 SQC 11-qubit atom processor is the strongest direct experimental sign that multi-register donor architectures can move beyond isolated few-qubit demonstrations.

## References

### Original proposal
- B. E. Kane, "A silicon-based nuclear spin quantum computer," [Nature 393, 133 (1998)](https://doi.org/10.1038/30156)

### Experimental demonstrations
- J. J. Pla et al., "A single-atom electron spin qubit in silicon," [Nature 489, 541 (2012)](https://doi.org/10.1038/nature11449)
- J. J. Pla et al., "High-fidelity readout and control of a nuclear spin qubit in silicon," [Nature 496, 334 (2013)](https://doi.org/10.1038/nature12011)
- J. T. Muhonen et al., "Storing quantum information for 30 seconds in a nanoelectronic device," [Nat. Nanotechnol. 9, 986 (2014)](https://doi.org/10.1038/nnano.2014.211)
- M. T. Mądzik et al., "Precision tomography of a three-qubit donor quantum processor in silicon," [Nature 601, 348 (2022)](https://doi.org/10.1038/s41586-021-04292-7)
- H. Edlbauer, J. Wang et al., "An 11-qubit atom processor in silicon," [Nature 648, 569 (2025)](https://doi.org/10.1038/s41586-025-09827-w) — [arXiv:2506.03567](https://arxiv.org/abs/2506.03567)

### Architecture and scaling directions
- D. Holmes et al., "Improved Placement Precision of Donor Spin Qubits in Silicon using Molecule Ion Implantation," [Adv. Quantum Technol. 7 (2024)](https://doi.org/10.1002/qute.202300316)
- M. M. Munia et al., "Superexchange coupling of donor qubits in silicon," [Phys. Rev. Applied 21, 014038 (2024)](https://doi.org/10.1103/PhysRevApplied.21.014038)

## Linked Papers

- [[kane-1998-silicon-nuclear-spin]]
- [[muhonen-2014-storing-information-seconds]]
- [[mdzik-2022-precision-tomography-three]]
- [[edlbauer-2025-11-qubit-atom-processor-silicon]]

## Evergreen context

- [[divincenzo-criteria]] — donor spins are especially strong on qubit definition, initialization, and coherence, but they make the scalability challenge show up in fabrication precision and dense control wiring.
- [[coherence-time-hierarchy]] — the architecture only makes sense if you separate the ultralong nuclear-memory timescale from the much faster donor-electron control and readout channel.
- [[exchange-interaction-in-quantum-dots]] — the Kane J-gate is the donor-spin analogue of electrically tuned exchange, even though the confinement comes from dopants rather than lithographic dots.

## Related Entries

- [[silicon-spin-qubit]] — broader silicon umbrella entry spanning donor and gate-defined variants
- [[loss-divincenzo-qubit]] — foundational semiconductor spin-qubit proposal with different confinement physics
- [[spin-qubit]] — broader spin-qubit family
- [[qubit-readout]] — donor nuclear qubits rely on electron-mediated spin-to-charge readout infrastructure
