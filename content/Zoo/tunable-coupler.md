---
title: Tunable Coupler
entry_type: coupling
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
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
last_updated: '2026-05-12'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-05-12
---

## Figure

![[tunable-coupler-figure.png]]

## Description

A tunable coupler is a superconducting interaction element, typically a flux-tunable transmon-like mode, rf-SQUID element, or tunable resonator, placed between two computational qubits so that the effective qubit-qubit exchange can be turned ON for entangling gates and suppressed near zero while idling. The central trick is interference: the direct qubit-qubit coupling and the virtual-exchange path through the coupler contribute with opposite sign over the relevant operating range, so a flux bias can drive the net interaction through positive, zero, and negative values.

This solves a core superconducting-hardware tradeoff. Fixed capacitive coupling gives fast gates but leaves unwanted always-on interaction and residual $ZZ$ crosstalk. Frequency-tuning the computational qubits can suppress some of that, but it pushes the qubits themselves into flux-noise-sensitive operating regimes. A tunable coupler instead keeps the control burden on a dedicated coupling element, letting the data qubits remain comparatively coherence-friendly while still enabling fast two-qubit gates.

Modern tunable-coupler families include the integrated inductive gmon-style coupler (Chen et al. 2014), the separate flux-tunable transmon coupler now common in fixed-frequency transmon processors (Yan et al. 2018; Sung et al. 2021), and newer variants such as double-transmon couplers and multichip coupler modules. These devices underpin the entangling-gate layer in major superconducting processors including Sycamore-class and Willow-class architectures.

## Hamiltonian

A standard umbrella model is three weakly anharmonic modes, two computational qubits $Q_1,Q_2$ and one coupler mode $C$:

$$H = \sum_{i \in \{1,2,C\}} \left(\omega_i \hat{a}_i^\dagger \hat{a}_i + \frac{\alpha_i}{2}\hat{a}_i^{\dagger 2}\hat{a}_i^2\right) + g_{12}(\hat{a}_1^\dagger \hat{a}_2 + \hat{a}_1 \hat{a}_2^\dagger) + \sum_{j\in\{1,2\}} g_{jC}(\hat{a}_j^\dagger \hat{a}_C + \hat{a}_j \hat{a}_C^\dagger).$$

In the dispersive regime, where $|\Delta_{jC}| = |\omega_j-\omega_C| \gg g_{jC}$, adiabatic elimination of the coupler gives an effective exchange interaction

$$J_{\mathrm{eff}} \approx g_{12} - \frac{g_{1C}g_{2C}}{2}\left(\frac{1}{\Delta_{1C}} + \frac{1}{\Delta_{2C}}\right),$$

with the precise sign convention depending on circuit details. The tunable-coupler operating point is the bias where this effective exchange crosses zero or reaches the value needed for a target gate.

Static $ZZ$ is a separate higher-order effect arising from virtual occupation of noncomputational levels of the qubits and coupler. In real devices, the idle bias is chosen to minimize both $J_{\mathrm{eff}}$ and residual $ZZ$, but those minima do not have to coincide exactly. That distinction matters physically: a coupler can suppress exchange almost perfectly while still leaving a nonzero higher-order conditional phase if the spectrum is not engineered carefully.

## Motivation

For scalable superconducting processors, the coupler has to do three things well at once:

- **Gate quickly:** strong ON-state interaction for fast CZ, iSWAP, or related entangling gates.
- **Idle quietly:** near-zero exchange and strongly reduced residual $ZZ$ during spectator operations.
- **Preserve qubit coherence:** push flux sensitivity and control complexity onto a dedicated coupler element rather than the computational qubits.

That combination is why tunable couplers became one of the dominant design choices for fixed-frequency transmon platforms.

## Experimental Status

**Integrated tunable-coupling precursor, gmon — Chen et al. (2014):**
- Demonstrated a high-coherence superconducting architecture with fast tunable inductive coupling.
- Reached coupling tunability from 0 to about 30 MHz with switching on ~10 ns timescales.
- Showed that tunable coupling could coexist with coherence-friendly Xmon-style qubits.

**Separate tunable transmon coupler — Yan et al. (2018):**
- Established the now-standard separate coupler mode between fixed-frequency qubits.
- Demonstrated exchange tunability through zero and strong suppression of idle interaction.
- Made clear why destructive interference between direct and coupler-mediated exchange is the key design principle.

**High-fidelity CZ and ZZ-free iSWAP — Sung et al. (2021):**
- Achieved 99.76(3)% CZ fidelity and 99.87(3)% iSWAP fidelity on a tunable-coupler platform.
- Reported residual $ZZ$ below 10 kHz together with high-fidelity entangling control.
- Gate durations were about 200 ns for CZ and 120 ns for iSWAP.

**Double-transmon coupler — Li et al. (2024):**
- Realized a newer coupler variant designed to suppress residual interaction while keeping gates fast.
- Reported 99.90% CZ fidelity and 99.98% single-qubit fidelity.

**Processor-scale deployment — Google Quantum AI and collaborators (2025):**
- Willow-class below-threshold surface-code operation provides a system-level validation that tunable-coupler transmon hardware can support large-scale error-correction experiments, not just isolated pair benchmarks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Coupling tunability | about +5 to -5 MHz through zero | Effective exchange driven through the OFF point | [Yan et al. 2018](https://doi.org/10.1103/PhysRevApplied.10.054062) |
| ON/OFF interaction control | >1000:1 | Strong activated interaction with near-zero idle exchange | [Yan et al. 2018](https://doi.org/10.1103/PhysRevApplied.10.054062) |
| Residual $ZZ$ at idle | <10 kHz | Representative optimized idle point | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| CZ gate fidelity | 99.76(3)% | Fixed-frequency transmons with tunable coupler | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| iSWAP gate fidelity | 99.87(3)% | Same platform, engineered to be nearly $ZZ$-free | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| Best coupler-specific CZ fidelity in this entry | 99.90% | Double-transmon coupler variant | [Li et al. 2024](https://doi.org/10.1103/PhysRevX.14.041050) |
| Gate time (2Q) | 120-200 ns | iSWAP about 120 ns, CZ about 200 ns | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| Processor-scale median entangling fidelity | 99.4% | Sycamore-class deployment benchmark | [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |

## Scaling Considerations

- **Architecture fit:** Tunable couplers are especially attractive for fixed-frequency transmon chips because they decouple entangling control from qubit parking frequencies.
- **Crosstalk engineering:** The real optimization target is not just $J_{\mathrm{eff}}=0$, but jointly small exchange, small residual $ZZ$, and manageable flux sensitivity at the coupler bias point.
- **Variant landscape:** Recent work includes double-transmon couplers for better simultaneous speed and isolation, multichip tunable couplers for chiplet-scale superconducting processors, and long-range coupler proposals for modular fluxonium systems.
- **Tradeoffs:** The coupler itself can introduce flux noise, extra modes, Landau-Zener leakage risk during pulses, and calibration overhead. Tunable does not mean free.

## References

### Foundational architecture
- Y. Chen et al., "Qubit Architecture with High Coherence and Fast Tunable Coupling," [Phys. Rev. Lett. 113, 220502 (2014)](https://doi.org/10.1103/PhysRevLett.113.220502) — [arXiv:1402.7367](https://arxiv.org/abs/1402.7367)
- F. Yan et al., "Tunable Coupling Scheme for Implementing High-Fidelity Two-Qubit Gates," [Phys. Rev. Applied 10, 054062 (2018)](https://doi.org/10.1103/PhysRevApplied.10.054062) — [arXiv:1803.09813](https://arxiv.org/abs/1803.09813)

### High-fidelity implementations and recent directions
- Y. Sung et al., "Realization of High-Fidelity CZ and ZZ-Free iSWAP Gates with a Tunable Coupler," [Phys. Rev. X 11, 021058 (2021)](https://doi.org/10.1103/PhysRevX.11.021058) — [arXiv:2011.01261](https://arxiv.org/abs/2011.01261)
- R. Li et al., "Realization of High-Fidelity CZ Gate Based on a Double-Transmon Coupler," [Phys. Rev. X 14, 041050 (2024)](https://doi.org/10.1103/PhysRevX.14.041050)
- M. Field et al., "Modular superconducting-qubit architecture with a multichip tunable coupler," [Phys. Rev. Applied 21, 054063 (2024)](https://doi.org/10.1103/PhysRevApplied.21.054063)
- Google Quantum AI and collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920-926 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687)
- P. Zhao et al., "Long-range tunable coupler for modular fluxonium quantum processors," [arXiv:2604.12261](https://arxiv.org/abs/2604.12261) (2026)

### Processor-scale deployment
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505-510 (2019)](https://doi.org/10.1038/s41586-019-1666-5)

## Linked Papers

- [[chen-2014-gmon]]
- [[yan-2018-tunable-coupler]]
- [[sung-2021-parametric-coupler]]
- [[arute-2019-supremacy-programmable-superconducting]]
- [[acharya-2025-error-correction-below]]
- [[zhao-2026-long-range-tunable-coupler-for]]

## Related Entries

- [[transmon]] — the main qubit family paired with tunable couplers
- [[gmon]] — integrated tunable-coupling architecture that predates the separate-coupler mainstream
- [[xmon]] — the coherence-focused transmon design lineage from which gmon and Sycamore-class hardware emerged
- [[fluxonium]] — another superconducting family now exploring modular tunable-coupler designs
- [[quarton-coupler]] — nonlinear coupler variant for more specialized interaction engineering
- [[surface-code-logical-qubit]] — major system-level use case for tunable-coupler superconducting processors