---
title: Fluxonium
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2009
first_demonstrated_year: 2009
keywords:
- fluxonium
- superconducting qubit
- superinductance
- josephson junction array
- flux qubit
- heavy fluxonium
- disjoint support
influence_score: 0.90
last_updated: '2026-11-05'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-05
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/fluxonium-figure.provenance.json"
figure_reviewed_by: "Scibok deep audit 2026-11-05"
figure_reviewed_at: "2026-11-05T15:15:43.205261+00:00"
---

## Figure

![[fluxonium-figure.png]]

## Description

The fluxonium qubit, introduced by Manucharyan et al. (2009), consists of a small Josephson junction shunted by a capacitance and a superinductance — a very large inductance ($L \sim 0.1{-}1\,\mu\text{H}$, often corresponding to $E_L/h \sim 0.5{-}1\,\text{GHz}$) usually realized as an array of roughly 100 larger Josephson junctions. The inductive shunt makes the circuit galvanically connected at low frequency and removes offset-charge periodicity without requiring the large shunt capacitance of a transmon. At the half-flux-quantum sweet spot $\Phi_\text{ext}=\Phi_0/2$, symmetry makes the qubit transition first-order insensitive to flux noise.

Unlike the weakly anharmonic transmon, half-flux-biased fluxonium combines a low $|0\rangle\!\leftrightarrow\!|1\rangle$ frequency (typically $100{-}1000\,\text{MHz}$) with noncomputational transitions several gigahertz higher. The large spectral separation suppresses leakage during well-designed gates. Low $\omega_{01}$ complicates thermal initialization and direct resonant control, but ordinary dispersive readout remains possible because higher fluxonium transitions can produce a sizable cavity shift; a transmon coupler is useful for some gate architectures but is not required for measurement.

In the heavy-fluxonium regime ($E_J/E_C$ of order a few), the localized persistent-current states $|L\rangle$ and $|R\rangle$ occupy opposite wells and have exponentially small wavefunction overlap. Exactly at half flux, however, the energy eigenstates are the symmetric and antisymmetric combinations $(|L\rangle\pm|R\rangle)/\sqrt{2}$; they are not individually localized in opposite wells. Small charge-transition matrix elements and first-order flux-noise cancellation suppress important relaxation and dephasing channels, but do not provide immunity to every local noise source. Dielectric loss, thermal excitation, flux noise away from the sweet spot, and phase slips in the junction array remain relevant.

## Hamiltonian

$$H = 4E_C\hat{n}^2 - E_J\cos\hat{\varphi} + \frac{1}{2}E_L(\hat{\varphi} - 2\pi\Phi_\text{ext}/\Phi_0)^2$$

where $E_C=e^2/2C$ is the charging energy, $E_J$ is the Josephson energy of the small junction, $E_L=(\Phi_0/2\pi)^2/L$ is the inductive energy, $\hat n$ and $\hat\varphi$ obey $[\hat\varphi,\hat n]=i$, and $\varphi_\text{ext}=2\pi\Phi_\text{ext}/\Phi_0$ is the reduced external flux. An equivalent gauge places $\varphi_\text{ext}$ inside the cosine rather than the inductive term.

At the half-flux-quantum sweet spot ($\varphi_\text{ext}=\pi$), the potential is symmetric under $\varphi\to2\pi-\varphi$ and has a double-well structure for the usual fluxonium parameters. If $|L\rangle$ and $|R\rangle$ denote states localized in the two wells, then the two lowest energy eigenstates are approximately $|0\rangle=(|L\rangle+|R\rangle)/\sqrt{2}$ and $|1\rangle=(|L\rangle-|R\rangle)/\sqrt{2}$, with their splitting set by interwell tunneling. Higher plasmon-like states remain separated by several gigahertz.

## Motivation

The transmon's Achilles heel is its weak anharmonicity (typically about $-200\,\text{MHz}$), which constrains pulse bandwidth and increases leakage risk. Fluxonium trades a more complex junction-array circuit and low computational frequency for gigahertz-scale spectral separation, long coherence, and flexible access to noncomputational transitions. The engineering challenges are reproducible array fabrication, thermal initialization of sub-gigahertz qubits, scalable coupling and flux control, and fast QND readout without measurement-induced transitions.

## Experimental Status

**First demonstration — Manucharyan et al. (2009):**
- Realized the fluxonium circuit using a Josephson junction array as a superinductance.
- Demonstrated charge-offset insensitivity while preserving single-Cooper-pair anharmonicity.
- Confirmed spectroscopic signatures consistent with the fluxonium Hamiltonian.

**High-coherence fluxonium — Nguyen et al. (2019):**
- Reported $T_2>100\,\mu\text{s}$ reproducibly across seven of eight devices and above $300\,\mu\text{s}$ in one device at half flux.
- Established that an array of more than 100 junctions need not prevent high coherence.

**Millisecond coherence — Somoroff et al. (2023):**
- Measured $T_2^*=1.48\pm0.13\,\text{ms}$, a 12-hour-averaged $T_1=1.20\pm0.03\,\text{ms}$, and average physical-gate fidelity $99.991(1)\%$.

**High-fidelity gates — Ding et al. (2023):**
- Two-qubit fluxonium gates demonstrated with a transmon coupler.
- Demonstrated a 50 ns microwave-activated CZ gate with average fidelity $99.922\pm0.009\%$ and static $ZZ$ coupling at the kilohertz scale.

**Stable direct CNOT — Lin et al. (2025):**
- Demonstrated a 60 ns direct CNOT between two inductively coupled fluxonium qubits using selective darkening, with randomized-benchmarking fidelity as high as $99.94\%$.
- The measured CNOT fidelity remained above $99.9\%$ for 24 days without recalibration.

**Control-friendly and manufacturable variants — Mencia et al. (2024); Wang et al. (2025):**
- Integer fluxonium at zero magnetic field operated near 4 GHz with Ramsey coherence above $100\,\mu\text{s}$ and average Clifford fidelity above $99.9\%$.
- A CMOS-compatible overlap process achieved nearly 100% junction yield across a 2-inch wafer, below 5% variation for the phase-slip junction, below 2% for the array, and $T_1>1\,\text{ms}$ at half flux.

**QND readout — Bothara et al. (2025):**
- Published single-shot assignment fidelity was $97.8\pm0.4\%$ in 260 ns with a Josephson parametric amplifier; QND repeatability was $99.0\pm0.3\%$.
- State mixing and measurement-induced transitions, rather than signal-to-noise alone, remained the limiting mechanisms.

**Hardware-efficient erasure conversion — Liu et al.; An et al. (2026 preprints):**
- Liu et al. encoded a logical qubit in the $|0\rangle$-$|2\rangle$ subspace of a single zero-flux fluxonium and used the same resonator for mid-circuit erasure detection and final readout. Post-selection increased the logical lifetime from $193\,\mu\text{s}$ to $869\,\mu\text{s}$, with an inferred erasure-check dephasing error of $7.2\times10^{-5}$ per check.
- An et al. used the $|g\rangle$-$|f\rangle$ subspace of a single integer fluxonium with $|e\rangle$ as the erasure state. Ancilla-free erasure checks increased the $|f\rangle$ lifetime by $8.4\times$, increased Hahn-echo time by $1.38\times$, and reduced the post-selected single-qubit gate error from $0.061(2)\%$ to $0.030(5)\%$.

**Native three-qubit gate — Mazhorin et al. (2026 preprint):**
- Experimentally realized a 65 ns native CCZ operation, locally equivalent to a Toffoli gate, with $99.39(5)\%$ fidelity in a three-fluxonium processor unit using a microwave-driven transmon coupler.
- The single-pulse gate was coherence limited; reproducing its fidelity through a conventional decomposition would require approximately $99.94\%$ CZ fidelity.

**Processor scaling — Zhan et al.; Schirk et al. (2026 preprints):**
- A 22-qubit tunable-coupler processor demonstrated parallel 1Q fidelities approaching $99.99\%$, a best 32 ns CZ fidelity of $99.9\%$, and GHZ states involving up to 10 qubits.
- A complementary connectivity-four resonator-coupled processor reported parallel 1Q fidelities above $99.9\%$, 2Q fidelities above $99\%$, residual static $ZZ<1\,\text{kHz}$, and a five-qubit GHZ-state fidelity of $90\%$.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | $1.20\pm0.03\,\text{ms}$ (12 h average) | Half-flux sweet spot | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| $T_2^*$ | $1.48\pm0.13\,\text{ms}$ | Ramsey; highest reported trace in that device | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| Qubit frequency $\omega_{01}/2\pi$ | Typically $100\,\text{MHz}{-}1\,\text{GHz}$ at half flux | Sub-gigahertz fluxon transition | [Ding et al. 2023](https://doi.org/10.1103/PhysRevX.13.031035) |
| 1Q gate fidelity | $99.991(1)\%$ | Average physical-gate fidelity; randomized benchmarking | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| 2Q gate fidelity (CZ) | $99.922\pm0.009\%$ | 50 ns microwave-activated gate with transmon coupler | [Ding et al. 2023](https://doi.org/10.1103/PhysRevX.13.031035) |
| 2Q gate fidelity (direct CNOT) | $99.94\%$ | 60 ns selective-darkening gate; remained $>99.9\%$ for 24 days without recalibration | [Lin et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010349) |
| Readout fidelity | $97.8\pm0.4\%$ | Assignment fidelity; 260 ns, with JPA | [Bothara et al. 2025](https://doi.org/10.1063/5.0255892) |
| QND repeatability | $99.0\pm0.3\%$ | Published value; limited by state mixing | [Bothara et al. 2025](https://doi.org/10.1063/5.0255892) |
| Single-fluxonium erasure conversion | Logical lifetime $193\to869\,\mu\text{s}$; $7.2\times10^{-5}$ error/check | $\lvert0\rangle$-$\lvert2\rangle$ encoding at zero flux; post-selected non-erasure outcomes | [Liu et al. 2026](https://arxiv.org/abs/2601.11086) |
| Integer-fluxonium erasure detection | $8.4\times$ $\lvert f\rangle$ lifetime; gate error $0.061(2)\%\to0.030(5)\%$ | Ancilla-free mid-circuit checks with the readout resonator | [An et al. 2026](https://arxiv.org/abs/2607.27123) |
| Native three-qubit gate | $99.39(5)\%$ CCZ in 65 ns | Single-pulse gate with a microwave-driven transmon coupler | [Mazhorin et al. 2026](https://arxiv.org/abs/2607.27094) |
| Wafer-scale junction yield | Nearly $100\%$ | 2-inch wafer; $<5\%$ phase-slip-junction and $<2\%$ array variation | [Wang et al. 2025](https://doi.org/10.1103/PhysRevApplied.23.044064) |
| Scaled processor | 22 qubits; best CZ $99.9\%$ in 32 ns | 2026 preprint; parallel 1Q fidelity approaches $99.99\%$ | [Zhan et al. 2026](https://arxiv.org/abs/2604.13363) |

## References

### Original proposal
- V. E. Manucharyan et al., "Fluxonium: Single Cooper-Pair Circuit Free of Charge Offsets," [Science 326, 113 (2009)](https://doi.org/10.1126/science.1175552) · [arXiv:0906.0831](https://arxiv.org/abs/0906.0831)

### Experimental demonstrations
- L. B. Nguyen et al., "High-Coherence Fluxonium Qubit," [Phys. Rev. X 9, 041041 (2019)](https://doi.org/10.1103/PhysRevX.9.041041) · [arXiv:1810.11006](https://arxiv.org/abs/1810.11006)
- A. Somoroff et al., "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. 130, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001) · [arXiv:2103.08578](https://arxiv.org/abs/2103.08578)
- L. Ding et al., "High-Fidelity, Frequency-Flexible Two-Qubit Fluxonium Gates with a Transmon Coupler," [Phys. Rev. X 13, 031035 (2023)](https://doi.org/10.1103/PhysRevX.13.031035) · [arXiv:2304.06087](https://arxiv.org/abs/2304.06087)
- W.-J. Lin et al., "24 Days-Stable CNOT Gate on Fluxonium Qubits with Over 99.9% Fidelity," [PRX Quantum 6, 010349 (2025)](https://doi.org/10.1103/PRXQuantum.6.010349) · [arXiv:2407.15783](https://arxiv.org/abs/2407.15783)
- R. A. Mencia et al., "Integer Fluxonium Qubit," [PRX Quantum 5, 040318 (2024)](https://doi.org/10.1103/PRXQuantum.5.040318) · [arXiv:2403.16780](https://arxiv.org/abs/2403.16780)
- F. Wang et al., "High-coherence fluxonium qubits manufactured with a wafer-scale-uniformity process," [Phys. Rev. Applied 23, 044064 (2025)](https://doi.org/10.1103/PhysRevApplied.23.044064) · [arXiv:2405.05481](https://arxiv.org/abs/2405.05481)
- G. Bothara et al., "High-fidelity QND readout and measurement back-action in a tantalum-based high-coherence fluxonium qubit," [APL Quantum 2, 026103 (2025)](https://doi.org/10.1063/5.0255892) · [arXiv:2501.16691](https://arxiv.org/abs/2501.16691)
- C. Liu et al., "Converting qubit relaxation into erasures with a single fluxonium," [arXiv:2601.11086 (2026)](https://arxiv.org/abs/2601.11086)
- Z. Zhan et al., "Scalable Fluxonium Quantum Processors via Tunable-Coupler Architecture," [arXiv:2604.13363 (2026)](https://arxiv.org/abs/2604.13363)
- G. S. Mazhorin et al., "Native CCZ Gate with Fluxonium Qubits and a Microwave-Driven Coupler," [arXiv:2607.27094 (2026)](https://arxiv.org/abs/2607.27094)
- J. An et al., "Hardware-efficient erasure-error detection with an integer fluxonium," [arXiv:2607.27123 (2026)](https://arxiv.org/abs/2607.27123)
- J. Schirk et al., "High-Fidelity Entangled States in a Connectivity-Four Fluxonium Quantum Processor," [arXiv:2608.25503 (2026)](https://arxiv.org/abs/2608.25503)

## Linked Papers

- [[manucharyan-2009-fluxonium]]
- [[nguyen-2019-high-coherence-fluxonium]]
- [[somoroff-2023-millisecond-coherence-superconducting]]
- [[ding-2023-high-fidelity-frequency]]
- [[lin-2025-24-days-stable-cnot-fluxonium]]
- [[lin-2018-heavy-fluxonium]]
- [[mencia-2024-integer-fluxonium-qubit]]
- [[wang-2025-high-coherence-fluxonium-wafer-scale]]
- [[bothara-2025-high-fidelity-qnd-readout]]
- [[liu-2026-converting-qubit-relaxation-erasures]]
- [[zhan-2026-scalable-fluxonium-quantum-processors]]
- [[mazhorin-2026-native-ccz-gate-fluxonium]]
- [[an-2026-hardware-efficient-erasure-error-detection]]
- [[schirk-2026-high-fidelity-entangled-states-in]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the small junction supplying the nonlinearity
- [[charge-noise-in-superconducting-qubits]] — fluxonium is the classic reminder that the CPB offset-charge problem can be pushed far down without abandoning Josephson-circuit physics.
- [[charge-noise-sweet-spot]] — charge insensitivity is built into the architecture, but the best coherence still comes from the separate half-flux sweet-spot story.
- [[coherence-time-hierarchy]] — how to read the sweet-spot versus off-sweet-spot coherence claims
- [[dispersive-readout-mechanism]] — fluxonium retains a state-dependent cavity pull through its multilevel spectrum even when the computational transition itself is sub-gigahertz

## Related Entries

- [[transmon]] — operates in the opposite $E_J/E_C$ regime with weak anharmonicity
- [[flux-qubit]] — predecessor using persistent currents without superinductance
- [[cooper-pair-box-charge-qubit]] — original charge qubit that fluxonium generalizes
- [[circuit-qed]] — readout and coupling architecture used with fluxonium
- [[blochnium]] — quasicharge regime of the fluxonium circuit
- [[heavy-fluxonium-qubit]] — heavy regime variant with disjoint-support coherence protection
- [[cos2phi-qubit]] — protected qubit derived from fluxonium-family circuits
- [[0-pi-qubit]] — protected qubit in the same superconducting circuit family
- [[ferbo-qubit]] — light fluxonium with Andreev weak link; fermion-boson hybridization provides dual noise protection
