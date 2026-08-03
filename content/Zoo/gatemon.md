---
title: Gatemon
entry_type: qubit
technology_family: Super-Semi
status: demonstrated
figure_reviewed: true
first_proposed_year: 2015
first_demonstrated_year: 2015
keywords:
- gatemon
- semiconductor nanowire
- voltage tunable
- josephson junction
- inas
- super-semi
influence_score: 0.68
last_updated: '2026-08-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: codex-deep-audit-2026-08-02
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/gatemon-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-02"
figure_reviewed_at: "2026-08-02T14:19:49.777695+00:00"
---

## Figure

![[gatemon-figure.png]]

## Description

The gatemon is a transmon-like superconducting qubit in which the conventional superconductor-insulator-superconductor tunnel junction is replaced by a **gate-tunable superconductor-semiconductor-superconductor weak link**. Implementations include proximitized InAs nanowires, planar InAs two-dimensional electron gases (2DEGs), and other gate-defined quantum conductors. The gate changes the weak link's transmission eigenvalues and therefore its Josephson potential, making the qubit frequency **voltage-tunable without a SQUID flux-bias loop**.

Introduced independently by Larsen et al. and de Lange et al. in 2015, the gatemon operates in the transmon regime ($E_J/E_C \gg 1$), which suppresses ordinary offset-charge dispersion. Voltage control avoids the first-order flux-noise channel of a SQUID-tunable transmon and can use high-impedance, low-static-power wiring. It does **not** make the device automatically lower-noise: charge traps, gate hysteresis, dielectric loss, and junction-specific dissipation remain important.

Because a semiconductor weak link can contain a few highly transmitting channels, its current-phase relation can be strongly non-sinusoidal. The resulting higher harmonics change the anharmonicity and spectrum relative to the tunnel-junction transmon. The same hybrid junction also provides a circuit-QED probe of Andreev physics and a materials route toward magnetic-field-compatible superconducting circuits; Majorana integration remains a proposed research direction rather than a demonstrated gatemon-computing capability.

The central tradeoff is coherence and stability. A 2025 reliability study achieved repeatable 1 MHz frequency placement across several gigahertz, but a controlled 2026 comparison still found gatemon $T_1$ values in the few-microsecond range while matched tunnel-junction transmons reached tens of microseconds. A 2025 $\beta$-Sn/InAs device reported $T_1=27\,\mu\text{s}$, showing that the limit is materials- and junction-dependent rather than a fixed architectural constant.

## Hamiltonian

The charging term is the same as for a transmon, but the Josephson potential is set by the transmission eigenvalues $T_i(V_g)$ of the semiconductor weak link:

$$
H = 4E_C(\hat n-n_g)^2 + U_J(\hat\varphi;V_g),
\qquad
U_J(\varphi;V_g) = -\Delta\sum_i\sqrt{1-T_i(V_g)\sin^2\!\left(\frac{\varphi}{2}\right)}.
$$

This short-junction expression assumes the even-parity ground branch at temperatures small compared with the induced gap $\Delta$. In the tunnel or low-transparency limit it reduces, up to an additive constant, to the familiar approximation

$$H \simeq 4E_C(\hat n-n_g)^2-E_J(V_g)\cos\hat\varphi.$$

At higher channel transparency the full $U_J$ must be retained; equivalently, the current-phase relation contains higher harmonics. The gate primarily tunes $T_i$ and $E_J$, while $n_g$ denotes offset charge and is not the same control variable.

## Motivation

- Replace local SQUID flux bias with high-impedance electrostatic control of the weak-link transmission and qubit frequency.
- Enable voltage-controlled $Z$ rotations and potentially dense integration with semiconductor processing, while accepting gate-noise and hysteresis engineering challenges.
- Use circuit QED to study few-channel Josephson physics and hybrid materials in a coherent quantum circuit.
- Develop superconducting circuits that may tolerate magnetic fields better than conventional all-aluminum SQUID-tunable devices.

## Experimental Status

**First demonstrations — Larsen et al. and de Lange et al. (2015):**
- Larsen et al. demonstrated coherent control of an epitaxial Al/InAs nanowire gatemon, with first-generation $T_1\sim0.8\,\mu\text{s}$ and $T_2\sim1\,\mu\text{s}$.
- de Lange et al. independently demonstrated capacitively shunted InAs/NbTiN nanowire Josephson elements. Their two-element loop exhibited a non-sinusoidal current-phase relation and flux-qubit-like behavior near half flux; it was not a two-gatemon entangling-gate demonstration.

**Benchmarking and planar scaling — Casparis et al. (2016, 2018):**
- A two-nanowire-gatemon device demonstrated randomized-benchmarking single-qubit errors below 0.7% (fidelity above 99.3%) and an estimated 91% controlled-phase-gate fidelity in 2016.
- The 2018 device used a proximitized **InAs/Al 2DEG**, not Ge/SiGe, and demonstrated voltage-controlled single-qubit rotations, coherent swap operations, and coherence up to about $2\,\mu\text{s}$.

**Materials, stability, and present limits (2024–2026):**
- Strickland et al. (2024) measured $T_1=100\,\text{ns}$ across a 1.5 GHz tunable band in one InAs-2DEG process, illustrating that wafer-scale hybrid materials can dominate loss.
- Feldstein-Bofill et al. (2025) achieved reliable 1 MHz frequency placement over several gigahertz and found grounded shunt capacitors more stable than floating designs.
- Purkayastha et al. (2025, preprint) reported a $\beta$-Sn/InAs nanowire gatemon with $T_1=27\,\mu\text{s}$ and echo $T_2=1.8\,\mu\text{s}$.
- Sun et al. (2026, preprint) co-fabricated nominally matched gatemons and tunnel-junction transmons. Representative devices gave $T_1=4.5\,\mu\text{s}$ versus $25.8\,\mu\text{s}$, and the measured gatemon loss exceeded their Purcell, control-line, and dielectric-loss budget, pointing to additional junction-intrinsic dissipation.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 27 μs | High-coherence $\beta$-Sn/InAs nanowire gatemon; preprint result | [Purkayastha et al. 2025](https://arxiv.org/abs/2508.04007) |
| Echo $T_2$ | 1.8 μs | Same $\beta$-Sn/InAs device; maximum occurred at a different bias from maximum $T_1$ | [Purkayastha et al. 2025](https://arxiv.org/abs/2508.04007) |
| Matched-device $T_1$ | 4.5 μs | Representative Al/InAs gatemon; matched tunnel-junction transmon: 25.8 μs | [Sun et al. 2026](https://arxiv.org/abs/2603.29498) |
| Frequency placement | 1 MHz precision over several GHz | Grounded gatemon design | [Feldstein-Bofill et al. 2025](https://doi.org/10.1103/d68y-sqzm) |
| 1Q gate fidelity | >99.3% | Randomized benchmarking; error below 0.7% | [Casparis et al. 2016](https://doi.org/10.1103/PhysRevLett.116.150505) |
| 2Q controlled-phase fidelity | 91% (estimated) | Two-nanowire-gatemon device | [Casparis et al. 2016](https://doi.org/10.1103/PhysRevLett.116.150505) |

## References

### Original demonstrations
- T. W. Larsen et al., "Semiconductor-Nanowire-Based Superconducting Qubit," [Phys. Rev. Lett. 115, 127001 (2015)](https://doi.org/10.1103/PhysRevLett.115.127001); [arXiv:1503.08339](https://arxiv.org/abs/1503.08339).
- G. de Lange et al., "Realization of Microwave Quantum Circuits Using Hybrid Superconducting-Semiconducting Nanowire Josephson Elements," [Phys. Rev. Lett. 115, 127002 (2015)](https://doi.org/10.1103/PhysRevLett.115.127002); [arXiv:1503.08483](https://arxiv.org/abs/1503.08483).

### Gate benchmarking
- L. Casparis et al., "Gatemon Benchmarking and Two-Qubit Operations," [Phys. Rev. Lett. 116, 150505 (2016)](https://doi.org/10.1103/PhysRevLett.116.150505); [arXiv:1512.09195](https://arxiv.org/abs/1512.09195).

### 2DEG gatemon
- L. Casparis et al., "Superconducting gatemon qubit based on a proximitized two-dimensional electron gas," [Nature Nanotech. 13, 915–919 (2018)](https://doi.org/10.1038/s41565-018-0207-y); [arXiv:1711.07665](https://arxiv.org/abs/1711.07665).

### 2024–2026 updates
- W. M. Strickland et al., "Characterizing losses in InAs two-dimensional electron gas-based gatemon qubits," [Phys. Rev. Research 6, 023094 (2024)](https://doi.org/10.1103/PhysRevResearch.6.023094); [arXiv:2309.17273](https://arxiv.org/abs/2309.17273).
- D. Feldstein-Bofill et al., "Gatemon qubit revisited for improved reliability and stability," [Phys. Rev. Applied 24, 044099 (2025)](https://doi.org/10.1103/d68y-sqzm); [arXiv:2412.11611](https://arxiv.org/abs/2412.11611).
- A. Purkayastha et al., "Transmon qubit using Sn as a junction superconductor," [arXiv:2508.04007](https://arxiv.org/abs/2508.04007) (2025 preprint).
- Z. Sun et al., "Junction-Intrinsic Dissipation in Hybrid Superconductor-Semiconductor Gatemon Qubits," [arXiv:2603.29498](https://arxiv.org/abs/2603.29498) (2026 preprint).

## Linked Papers

- [[larsen-2015-gatemon]]
- [[de-lange-2015-hybrid-nanowire-josephson-elements]]
- [[casparis-2016-gatemon-benchmarking]]
- [[casparis-2018-ge-gatemon]]
- [[strickland-2024-gatemon-losses]]
- [[feldstein-bofill-2025-gatemon-reliability]]
- [[purkayastha-2025-sn-inas-gatemon]]
- [[sun-2026-junction-intrinsic-dissipation-in-hybrid]]
- [[hays-2021-andreev-spin-qubit]]
- [[shim-2014-bottom-up-sc]]
- [[shim-2016-semiconductor-inspired]]
- [[strickland-2024-gatemonium]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the gatemon keeps transmon physics but replaces the oxide tunnel barrier with a semiconductor weak link whose $E_J$ is tuned electrostatically.
- [[dispersive-readout-mechanism]] — in practice the measurement story is still the standard circuit-QED one: gate tuning changes the qubit, but the state is read out from a small resonator shift rather than from a new measurement primitive.
- [[charge-noise-in-superconducting-qubits]] — even with a semiconductor weak link, the underlying CPB/transmon Hamiltonian still inherits the same offset-charge noise channel that large $E_J/E_C$ is meant to suppress.
- [[charge-noise-sweet-spot]] — its protection story is still the transmon one: keep charge dispersion flat enough that the added gate knob does not drag the device back toward charge-qubit fragility.
- [[quantum-hardware]] — this is the cleanest bridge between mainstream superconducting control stacks and semiconductor-process ambitions.

## Related Entries

- [[transmon]] — parent qubit architecture; gatemon replaces the tunnel junction
- [[gatemonium]] — related semiconductor-superconductor hybrid qubit
- [[andreev-spin-qubit]] — same material platform, spin degree of freedom
- [[quantum-transduction]] — hybrid superconducting-semiconductor circuits are also studied as interfaces and field-compatible circuit elements
