---
title: Tunable Coupler
entry_type: coupling
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 2014
first_demonstrated_year: 2014
keywords:
- tunable coupler
- superconducting
- coupler
- CZ gate
- iSWAP gate
- parasitic coupling
- residual ZZ
- Google Sycamore
- Google Willow
- modular architecture
influence_score: 0.82
last_updated: '2026-11-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-21
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/tunable-coupler-figure.provenance.json"
figure_reviewed_by: "Codex daily deep audit 2026-11-21"
figure_reviewed_at: "2026-11-21T15:06:18+00:00"
---

## Figure

![[tunable-coupler-figure.png]]

## Description

A tunable coupler is a superconducting interaction element—typically a flux-tunable transmon-like mode, rf-SQUID element, or tunable resonator—placed between computational qubits so that the effective qubit-qubit interaction can be turned ON for entangling gates and suppressed near zero while idling. In the widely used three-mode architecture, the central trick is interference: direct qubit-qubit exchange and virtual exchange through the coupler contribute with opposite signs over the relevant operating range, so a flux bias can drive the net exchange through positive, zero, and negative values.

This solves a core superconducting-hardware tradeoff. Fixed capacitive coupling gives fast gates but leaves unwanted always-on interactions and residual $ZZ$ crosstalk. Frequency-tuning the computational qubits can suppress some of that interaction, but it pushes the data qubits themselves into flux-noise-sensitive operating regimes. A tunable coupler instead places most of the flux-control burden on a dedicated interaction element, allowing the qubits to remain comparatively coherence-friendly while still supporting fast two-qubit gates.

Modern tunable-coupler families include the integrated inductive gmon architecture (Chen et al. 2014), separate flux-tunable transmon couplers between fixed-frequency qubits (Yan et al. 2018; Sung et al. 2021), floating and multichip couplers, double-transmon couplers, and newer nonlinear or long-range variants. Tunable-coupler hardware now supports both pair-level gate fidelities above 99.9% and processor-scale surface-code experiments.

## Hamiltonian

For two weakly anharmonic computational modes $Q_1,Q_2$ and one tunable coupler mode $C$, a representative rotating-wave model in angular-frequency units is

$$\frac{H}{\hbar}=\sum_{i\in\{1,2,C\}}\left(\omega_i \hat a_i^\dagger \hat a_i+\frac{\alpha_i}{2}\hat a_i^{\dagger 2}\hat a_i^2\right)+g_{12}(\hat a_1^\dagger\hat a_2+\hat a_1\hat a_2^\dagger)+\sum_{j\in\{1,2\}}g_{jC}(\hat a_j^\dagger\hat a_C+\hat a_j\hat a_C^\dagger).$$

In the dispersive regime, with $\Delta_{jC}=\omega_j-\omega_C$ and $|\Delta_{jC}|\gg g_{jC}$, eliminating the coupler gives the leading exchange term

$$\frac{H_{\mathrm{eff}}}{\hbar}\supset J_{\mathrm{eff}}(\hat a_1^\dagger\hat a_2+\hat a_1\hat a_2^\dagger),\qquad J_{\mathrm{eff}}\approx g_{12}+\frac{g_{1C}g_{2C}}{2}\left(\frac{1}{\Delta_{1C}}+\frac{1}{\Delta_{2C}}\right),$$

up to circuit-dependent signs and higher-order corrections. The OFF point is the flux bias where the direct and coupler-mediated contributions cancel, $J_{\mathrm{eff}}\approx0$.

Static $ZZ$ is a distinct higher-order effect caused by virtual occupation of noncomputational levels of the qubits and coupler. It is not determined by $J_{\mathrm{eff}}^2$ alone. Experiments can null residual $ZZ$ and exchange in the one- and two-excitation manifolds, but the corresponding bias points need not coincide. A practical idle point therefore balances exchange suppression, conditional phase, spectator errors, leakage, and flux sensitivity rather than assuming that one analytic zero removes every interaction.

## Motivation

For scalable superconducting processors, a coupler must do three things well at once:

- **Gate quickly:** provide a strong ON-state interaction for CZ, iSWAP, or related entangling gates.
- **Idle quietly:** suppress exchange and residual conditional phase during spectator operations.
- **Preserve qubit coherence:** localize flux sensitivity and control complexity in a dedicated coupling element rather than the data qubits.

That combination is why tunable couplers became a dominant design choice for many fixed-frequency and weakly tunable transmon platforms.

## Experimental Status

**Integrated tunable-coupling architecture, gmon — Chen et al. (2014):**
- Demonstrated a high-coherence superconducting architecture with fast tunable inductive coupling.
- Tuned the coupling from zero to about 30 MHz with nanosecond-scale control.
- Established the 2014 historical baseline for an experimentally demonstrated qubit architecture with a true OFF point.

**Separate transmon-coupler scheme — Yan et al. (2018):**
- Proposed the now-standard three-mode layout with a frequency-tunable coupler between two qubits.
- Showed theoretically how direct and coupler-mediated exchange can cancel and simulated an iSWAP fidelity above 99.999% in 100 ns in the absence of decoherence.
- This paper was a proposal and numerical study, not the experimental 99.1% CZ demonstration previously claimed by this entry.

**High-fidelity CZ and $ZZ$-free iSWAP — Sung et al. (2021):**
- Experimentally achieved 99.76(3)% CZ fidelity and 99.87(3)% iSWAP fidelity.
- Reported residual $ZZ$ below 10 kHz with gate durations of about 200 ns for CZ and 120 ns for iSWAP.

**Expanded coupler variants — Li et al. and Field et al. (2024):**
- Li et al. realized a double-transmon coupler with 99.90% CZ and 99.98% single-qubit fidelity.
- Field et al. demonstrated zero coupling and two-qubit gates across separate chips using a multichip floating tunable coupler.

**Centimeter-scale hybrid-mode coupling — Xu et al. (2026):**
- Experimentally demonstrated flux-tunable hybrid modes coupling transmons across a 1 cm structure.
- Measured $XX$ and $ZZ$ coupling strengths above 23 MHz and 10 MHz, respectively; the same two-channel architecture is predicted to support $ZZ$ modulation contrast above $10^4$.
- This long-range transmon result complements multichip and fluxonium-coupler approaches without superseding the local-gate fidelity records below.

**Fast adiabatic CZ with a floating tunable coupler — Chen et al. (2026):**
- Experimentally demonstrated a symmetric floating tunable coupler whose level structure supports both an exact residual-$ZZ$ cancellation point at idle and fast adiabatic CZ control.
- Reported a 24 ns CZ fidelity of 99.927(15)% and an 8.5-hour average of 99.878(16)% in the November 2026 revision.
- This remains an arXiv preprint, so the result is included as a current experimental milestone rather than an archival record.

**Spectator-leakage suppression — Wang et al. (2026):**
- Used tunable-coupler control to engineer an invariant two-dimensional subspace during CZ operation, suppressing near-resonant leakage into spectator states.
- Demonstrated leakage at the $10^{-4}$ level across a wide detuning range with up to three simultaneous spectator qubits on a multiqubit superconducting processor.

**Processor-scale deployment — Google Quantum AI and collaborators (2025):**
- Willow-class below-threshold surface-code operation provided system-level evidence that tunable-coupler transmon hardware can support repeated error-correction experiments, not only isolated pair benchmarks.

**Simultaneous high-performance operation — Marxer et al. (2026):**
- Demonstrated a 40-hour-averaged CZ fidelity of 99.93%, simultaneous single-qubit fidelities of 99.98%, and readout fidelities above 99.94% in one tunable-coupler device.
- The reported calibrated CZ duration was 33 ns.

**Spectator-aware operating points — Vallés-Sanclemente et al. (2026):**
- Experimentally mapped residual $ZZ$ and exchange in the one- and two-excitation manifolds in a five-transmon processor.
- Showed that their nulls do not generally coincide, making idle-frequency placement and operation-dependent coupler bias a processor-level optimization problem.

**Late-2026 architecture and control updates — Orell et al.; Gulácsi and Burkard; Kim et al. (2026):**
- Orell et al. theoretically analyzed a high-connectivity transmon unit cell in which dedicated tunable couplers connect peripheral qubits through a shared central mode, with spectator-aware pulse schedules for pair-selective CZ gates.
- Gulácsi and Burkard showed that time-dependent external flux can induce cross-voltage driving in capacitively linked circuits. The mechanism is both a newly identified crosstalk channel and a possible route to coupler-driven single-qubit control.
- Kim et al. proposed a modeless SQUID coupler whose tunable intrinsic cross-Kerr interaction avoids introducing an additional hybridizing coupler mode; this remains a theoretical architecture rather than an experimental benchmark.

**Coupler-flux crosstalk calibration — Gao et al. (2026):**
- Experimentally demonstrated two indirect calibration methods for tunable couplers without dedicated coupler drive or readout: zero-knowledge characterization through coupler-resonator shifts and symmetric-branch cancellation.
- With iterative compensation, suppressed residual coupler flux crosstalk below $5\times10^{-5}$, addressing a processor bring-up and simultaneous-control bottleneck rather than setting a two-qubit-gate record.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Integrated coupling range | 0 to about 30 MHz | Gmon inductive coupler; nanosecond-scale tuning | [Chen et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220502) |
| Separate-coupler exchange range | about +5 to -5 MHz through zero | Simulated three-mode transmon-coupler design | [Yan et al. 2018](https://doi.org/10.1103/PhysRevApplied.10.054062) |
| Residual $ZZ$ at optimized idle | <10 kHz | Representative experimental operating point | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| CZ gate fidelity | 99.93% | 40-hour average; 33 ns total duration | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |
| iSWAP gate fidelity | 99.87(3)% | Approximately 120 ns; engineered to be nearly $ZZ$-free | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| Double-transmon-coupler CZ fidelity | 99.90% | First experimental DTC realization | [Li et al. 2024](https://doi.org/10.1103/PhysRevX.14.041050) |
| Centimeter-scale tunable coupling | $XX>23$ MHz; $ZZ>10$ MHz | Experimental 1 cm hybrid-mode coupler | [Xu et al. 2026](https://doi.org/10.1103/ls5b-279m) |
| Fast adiabatic CZ fidelity | 99.927(15)% | 24 ns; 8.5-hour average 99.878(16)% | [Chen et al. 2026](https://arxiv.org/abs/2604.05048) |
| Spectator leakage | order of $10^{-4}$ | Invariant-subspace control with up to three simultaneous spectators | [Wang et al. 2026](https://doi.org/10.1103/zywf-twfv) |
| Residual coupler flux crosstalk | $<5\times10^{-5}$ | Indirect calibration without dedicated coupler drive or readout | [Gao et al. 2026](https://arxiv.org/abs/2611.06656) |
| Processor-scale median entangling fidelity | 99.4% | Sycamore deployment benchmark | [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |

## Scaling Considerations

- **Architecture fit:** Tunable couplers are especially attractive for fixed-frequency transmon chips because they decouple entangling control from qubit parking frequencies.
- **Spectator-aware biasing:** The real optimization target is not just $J_{\mathrm{eff}}=0$, but jointly small exchange, small residual $ZZ$, low leakage, and weak spectator sensitivity.
- **Variant landscape:** Double-transmon couplers, floating couplers, multichip links, the experimentally demonstrated 1 cm hybrid-mode transmon coupler, and proposed or demonstrated long-range fluxonium couplers extend the idea beyond one canonical circuit.
- **Tradeoffs:** The coupler adds flux sensitivity, extra leakage or hybridization channels in mode-based designs, calibration overhead, pulse-distortion sensitivity, and fabrication complexity. Time-dependent flux can also induce cross-voltage driving in capacitively linked modes, creating a crosstalk channel that circuit quantization and control design must include. Indirect coupler-flux calibration can compensate residual classical crosstalk below $5\times10^{-5}$, but tunable does not mean error-free.

## References

### Foundational architecture and scheme
- Y. Chen et al., "Qubit Architecture with High Coherence and Fast Tunable Coupling," [Phys. Rev. Lett. 113, 220502 (2014)](https://doi.org/10.1103/PhysRevLett.113.220502) — [arXiv:1402.7367](https://arxiv.org/abs/1402.7367)
- F. Yan et al., "Tunable Coupling Scheme for Implementing High-Fidelity Two-Qubit Gates," [Phys. Rev. Applied 10, 054062 (2018)](https://doi.org/10.1103/PhysRevApplied.10.054062) — [arXiv:1803.09813](https://arxiv.org/abs/1803.09813)

### Experimental implementations and scaling
- Y. Sung et al., "Realization of High-Fidelity CZ and ZZ-Free iSWAP Gates with a Tunable Coupler," [Phys. Rev. X 11, 021058 (2021)](https://doi.org/10.1103/PhysRevX.11.021058) — [arXiv:2011.01261](https://arxiv.org/abs/2011.01261)
- R. Li et al., "Realization of High-Fidelity CZ Gate Based on a Double-Transmon Coupler," [Phys. Rev. X 14, 041050 (2024)](https://doi.org/10.1103/PhysRevX.14.041050) — [arXiv:2402.18926](https://arxiv.org/abs/2402.18926)
- M. Field et al., "Modular superconducting-qubit architecture with a multichip tunable coupler," [Phys. Rev. Applied 21, 054063 (2024)](https://doi.org/10.1103/PhysRevApplied.21.054063)
- Google Quantum AI and Collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920-926 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687)
- F. Marxer et al., "Above 99.9% Fidelity Single-Qubit Gates, Two-Qubit Gates, and Readout in a Single Superconducting Quantum Device," [PRX Quantum 7, 020333 (2026)](https://doi.org/10.1103/n86s-2b88) — [arXiv:2508.16437](https://arxiv.org/abs/2508.16437)
- S. Vallés-Sanclemente et al., "Optimizing the Frequency Positioning of Tunable Couplers in a Circuit QED Processor to Mitigate Spectator Effects on Quantum Operations," [Phys. Rev. Lett. 136, 200801 (2026)](https://doi.org/10.1103/wdfj-4nbt) — [arXiv:2503.13225](https://arxiv.org/abs/2503.13225)
- J. Xu et al., "Tunable Hybrid-Mode Coupler Enabling Strong Interactions between Transmons at Centimeter-Scale Distance," [Phys. Rev. Applied 25, 014016 (2026)](https://doi.org/10.1103/ls5b-279m) — [arXiv:2506.14128](https://arxiv.org/abs/2506.14128)
- A. Q. Chen, S. Strong, X. Wu, and S. Poletto, "Unlocking a fast adiabatic CZ gate and exact residual $ZZ$ cancellation between fixed-frequency transmons using a floating tunable coupler," [arXiv:2604.05048](https://arxiv.org/abs/2604.05048) (2026)
- P. Wang et al., "Spectator Leakage Suppression via Invariant Subspace Engineering for CZ Gates in Superconducting Quantum Circuits," [Phys. Rev. Lett. 137, 100802 (2026)](https://doi.org/10.1103/zywf-twfv) — [arXiv:2507.14531](https://arxiv.org/abs/2507.14531)
- P. Zhao, P. Xu, and Z.-Y. Xue, "Long-range tunable coupler for modular fluxonium quantum processors," [arXiv:2604.12261](https://arxiv.org/abs/2604.12261) (2026)
- T. Orell et al., "Two-qubit-gate operation in a high-connectivity transmon lattice utilizing a tunable coupling to a shared mode," [Phys. Rev. Applied 26, 054021 (2026)](https://doi.org/10.1103/5vv7-y2rj) — [arXiv:2603.10699](https://arxiv.org/abs/2603.10699)
- B. Gulácsi and G. Burkard, "Inherent flux crosstalk and coupler-driven single-qubit gates in superconducting circuits," [Phys. Rev. Applied 26, 044056 (2026)](https://doi.org/10.1103/q2j3-mftf) — [arXiv:2606.10970](https://arxiv.org/abs/2606.10970)
- G. Kim, A. Butler, and O. Painter, "Tunable, modeless, and hybridization-free cross-Kerr coupler for miniaturized superconducting qubits," [PRX Quantum, accepted (2026)](https://doi.org/10.1103/cx2t-3hq7) — [arXiv:2602.03186](https://arxiv.org/abs/2602.03186)
- Y. Gao et al., "Flux Crosstalk Calibration from Zero Knowledge to High Precision in Fully Tunable Superconducting Circuits," [arXiv:2611.06656](https://arxiv.org/abs/2611.06656) (2026)

### Processor-scale deployment
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505-510 (2019)](https://doi.org/10.1038/s41586-019-1666-5)

## Linked Papers

- [[chen-2014-gmon]]
- [[yan-2018-tunable-coupler]]
- [[sung-2021-parametric-coupler]]
- [[arute-2019-supremacy-programmable-superconducting]]
- [[acharya-2025-error-correction-below]]
- [[marxer-2026-above-99-9-fidelity]]
- [[valles-sanclemente-2026-optimizing-tunable-couplers]]
- [[chen-2026-fast-adiabatic-cz-floating-coupler]]
- [[wang-2026-spectator-leakage-suppression]]
- [[gao-2026-flux-crosstalk-calibration]]

## Evergreen context

- [[charge-noise-sweet-spot]] — tunable couplers keep data qubits near coherence-friendly operating points while moving most flux sensitivity into a dedicated interaction element.
- [[josephson-junction-as-nonlinear-element]] — Josephson nonlinearity makes the coupler frequency and mediated interaction flux-tunable.
- [[resonator-as-quantum-bus]] — a tunable coupler inherits the virtual-exchange logic of a shared bus but adds a controllable idle point.
- [[threshold-theorem]] — residual correlated phase and spectator errors consume the same below-threshold margin that high ON-state gate fidelity is meant to protect.

## Related Entries

- [[transmon]] — the main qubit family paired with tunable couplers
- [[gmon]] — integrated tunable-coupling architecture that predates the separate-coupler mainstream
- [[xmon]] — the coherence-focused transmon design lineage behind gmon and Sycamore-class hardware
- [[circuit-qed]] — the multi-mode interaction framework used to derive and calibrate coupler behavior
- [[fluxonium]] — another superconducting family using transmon and SQUID couplers
- [[surface-code-logical-qubit]] — a major system-level use case for tunable-coupler processors
