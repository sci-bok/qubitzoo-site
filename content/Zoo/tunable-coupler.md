---
title: Tunable Coupler
entry_type: coupling
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2018
first_demonstrated_year: 2018
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
- IBM Heron
influence_score: 0.82
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[tunable-coupler-figure.png]]

## Description

A tunable coupler is a superconducting coupling element — typically a frequency-tunable transmon or a flux-tunable resonator — placed between two computational qubits to enable fast, high-fidelity ON/OFF switching of qubit-qubit interactions. By modulating the coupler's frequency via an external flux bias, the effective coupling $g_{\text{eff}}$ between the computational qubits can be tuned from a large value (ON, enabling fast entangling gates) to near zero (OFF, suppressing unwanted always-on $ZZ$ crosstalk during idle periods).

The coupler mediates the interaction between qubits through virtual excitation exchange: when the coupler frequency is far detuned from both qubits, it mediates a second-order coupling. The direct capacitive coupling between qubits and the coupler-mediated coupling have opposite signs, and at a specific coupler frequency they cancel exactly, yielding $g_{\text{eff}} = 0$. This **zero-coupling condition** is the key innovation — it enables idling with negligible crosstalk.

Two-qubit gates (CZ, iSWAP, or $\sqrt{\text{iSWAP}}$) are implemented by briefly tuning the coupler to activate the interaction, performing a controlled phase accumulation or excitation swap, then returning to the OFF point. Gate times of 10–60 ns have been demonstrated with fidelities exceeding 99.5%.

Tunable couplers are the enabling technology behind Google's Sycamore (2019) and Willow (2024) processors, and IBM's Heron architecture.

## Hamiltonian

The system of two qubits ($Q_1$, $Q_2$) coupled via a tunable coupler ($C$) has the Hamiltonian:

$$H = \sum_{i \in \{1,2,C\}} \omega_i \hat{a}_i^\dagger \hat{a}_i + \frac{\alpha_i}{2}\hat{a}_i^{\dagger 2}\hat{a}_i^2 + \sum_{i<j} g_{ij}(\hat{a}_i^\dagger \hat{a}_j + \hat{a}_i \hat{a}_j^\dagger)$$

where $g_{ij}$ are the bare capacitive couplings. Adiabatic elimination of the coupler (valid when $|\omega_C - \omega_{1,2}| \gg g_{1C}, g_{2C}$) gives an effective qubit-qubit coupling:

$$g_{\text{eff}} = g_{12} + \frac{g_{1C}g_{2C}}{2}\left(\frac{1}{\omega_1 - \omega_C} + \frac{1}{\omega_2 - \omega_C}\right)$$

The zero-coupling condition $g_{\text{eff}} = 0$ is satisfied when the coupler-mediated term exactly cancels the direct coupling $g_{12}$. This occurs at a specific coupler frequency $\omega_C^{\text{off}}$.

The residual $ZZ$ interaction at the OFF point is:

$$\zeta_{ZZ} = \frac{2g_{\text{eff}}^2 \alpha_1 \alpha_2}{(\Delta_{12}^2 - \alpha_1^2)(\Delta_{12}^2 - \alpha_2^2)} + O(g_{\text{eff}}^4)$$

which can be tuned below $10\,\text{kHz}$ at the zero-coupling point.

## Motivation

Fixed-frequency transmon qubits coupled by fixed capacitors suffer from always-on $ZZ$ coupling ($\zeta_{ZZ} \sim 50{-}500\,\text{kHz}$) that accumulates correlated phase errors during idle time. Frequency-tunable qubits can reduce this but introduce flux-noise sensitivity. The tunable coupler resolves this tradeoff: the computational qubits can remain at fixed (or nearly fixed) frequencies, preserving their coherence, while the coupler provides the dynamic control needed for entangling gates and idle isolation. This enables simultaneous high coherence, fast gates, and low crosstalk — the three requirements for scalable superconducting quantum processors.

## Experimental Status

**First tunable-coupler demonstration — Yan et al. (2018):**
- Demonstrated ON/OFF coupling ratio >1000 with CZ gate fidelity 99.1%.
- Showed that coupler-mediated and direct coupling can be made to cancel at a specific coupler frequency.
- Established the tunable-coupler paradigm for high-fidelity two-qubit gates.

**High-fidelity CZ gates — Sung et al. (2021):**
- Achieved CZ gate fidelity of 99.76% with 60 ns gate time using parametric modulation of the coupler.
- Demonstrated $ZZ$-free iSWAP gates on the same platform.

**Google Sycamore — Arute et al. (2019):**
- 53-qubit processor with tunable couplers for 86 qubit pairs.
- Median CZ fidelity 99.4% via randomized benchmarking.

**Google Willow — Google Quantum AI (2025):**
- Improved to 99.7–99.85% median CZ fidelity.
- Enabled below-threshold surface code operation.

**IBM Heron (2024):**
- IBM adopted tunable couplers after transitioning from fixed-coupling cross-resonance gates.
- Achieved 99.5% two-qubit gate fidelity.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| ON/OFF coupling ratio | >1000:1 | $g_{\text{eff}}^{\text{on}}/g_{\text{eff}}^{\text{off}}$ | [Yan et al. 2018](https://doi.org/10.1103/PhysRevApplied.10.054062) |
| CZ gate fidelity | 99.5–99.85% | Randomized benchmarking; Willow SOTA | [Google Quantum AI 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| iSWAP gate fidelity | 99.5–99.7% | Used in Sycamore-type circuits | [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |
| Gate time (2Q) | 10–60 ns | Coupler-activated CZ or iSWAP | [Sung et al. 2021](https://doi.org/10.1103/PhysRevX.11.021058) |
| Residual $ZZ$ at OFF | <10 kHz | At zero-coupling operating point | [Yan et al. 2018](https://doi.org/10.1103/PhysRevApplied.10.054062) |
| Coupler frequency range | 4–8 GHz | Flux-tunable, typically above qubit frequencies | [Yan et al. 2018](https://doi.org/10.1103/PhysRevApplied.10.054062) |
| Coupler $T_1$ | 5–20 μs | Shorter than qubits; not a computational element | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal and demonstration
- F. Yan et al., "Tunable Coupling Scheme for Implementing High-Fidelity Two-Qubit Gates," [Phys. Rev. Applied 10, 054062 (2018)](https://doi.org/10.1103/PhysRevApplied.10.054062)

### High-fidelity implementations
- Y. Sung et al., "Realization of High-Fidelity CZ and ZZ-Free iSWAP Gates with a Tunable Coupler," [Phys. Rev. X 11, 021058 (2021)](https://doi.org/10.1103/PhysRevX.11.021058)
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505 (2019)](https://doi.org/10.1038/s41586-019-1666-5)
- Google Quantum AI, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y)

## Linked Papers

- [[yan-2018-tunable-coupler]]
- [[sung-2021-parametric-coupler]]

## Related Entries

- [[transmon]] — primary qubit type used with tunable couplers
- [[gmon]] — Google's qubit-plus-coupler architecture
- [[circuit-qed]] — measurement and readout framework
- [[fluxonium]] — alternative qubit with tunable-coupler compatibility
