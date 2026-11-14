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
last_updated: '2026-11-14'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-14
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/tunable-coupler-figure.provenance.json"
figure_reviewed_by: "Codex deep audit 2026-11-14"
figure_reviewed_at: "2026-11-14T15:20:09.745227+00:00"
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

**Processor-scale deployment — Google Quantum AI and collaborators (2025):**
- Willow-class below-threshold surface-code operation provided system-level evidence that tunable-coupler transmon hardware can support repeated error-correction experiments, not only isolated pair benchmarks.

**Simultaneous high-performance operation — Marxer et al. (2026):**
- Demonstrated a 40-hour-averaged CZ fidelity of 99.93%, simultaneous single-qubit fidelities of 99.98%, and readout fidelities above 99.94% in one tunable-coupler device.
- The reported calibrated CZ duration was 33 ns.

**Spectator-aware operating points — Vallés-Sanclemente et al. (2026):**
- Experimentally mapped residual $ZZ$ and exchange in the one- and two-excitation manifolds in a five-transmon processor.
- Showed that their nulls do not generally coincide, making idle-frequency placement and operation-dependent coupler bias a processor-level optimization problem.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Integrated coupling range | 0 to about 30 MHz | Gmon inductive coupler; nanosecond-scale tuning | [Chen et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220502) |
| Separate-coupler exchange range | about +5 to -5 MHz through zero | Simulated three-mode transmon-coupler design | [Yan et al. 2018](https://doi.org/10.1103/PhysRevApplied.10.054062) |
| Residual $ZZ$ at optimized idle | <10 kHz | Representative experimental operating point | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| CZ gate fidelity | 99.93% | 40-hour average; 33 ns total duration | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |
| iSWAP gate fidelity | 99.87(3)% | Approximately 120 ns; engineered to be nearly $ZZ$-free | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| Double-transmon-coupler CZ fidelity | 99.90% | First experimental DTC realization | [Li et al. 2024](https://doi.org/10.1103/PhysRevX.14.041050) |
| Processor-scale median entangling fidelity | 99.4% | Sycamore deployment benchmark | [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |

## Scaling Considerations

- **Architecture fit:** Tunable couplers are especially attractive for fixed-frequency transmon chips because they decouple entangling control from qubit parking frequencies.
- **Spectator-aware biasing:** The real optimization target is not just $J_{\mathrm{eff}}=0$, but jointly small exchange, small residual $ZZ$, low leakage, and weak spectator sensitivity.
- **Variant landscape:** Double-transmon couplers, floating couplers, multichip links, and proposed centimeter-scale fluxonium couplers extend the idea beyond one canonical circuit.
- **Tradeoffs:** The coupler adds a flux-sensitive mode, extra leakage channels, calibration overhead, pulse-distortion sensitivity, and fabrication complexity. Tunable does not mean error-free.

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
- P. Zhao, P. Xu, and Z.-Y. Xue, "Long-range tunable coupler for modular fluxonium quantum processors," [arXiv:2604.12261](https://arxiv.org/abs/2604.12261) (2026)

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
