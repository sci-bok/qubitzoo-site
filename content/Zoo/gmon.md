---
title: Gmon
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2014
first_demonstrated_year: 2014
keywords:
- gmon
- tunable coupler
- google
- superconducting qubit
- xmon
- tunable inductive coupling
influence_score: 0.70
last_updated: '2026-07-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-audit-2026-07-10
---

## Figure

![[gmon-figure.png]]

## Description

The Gmon is Google's 2014 extension of the Xmon: a high-coherence Xmon-style transmon paired with a **flux-tunable inductive coupling element** between neighboring qubits. Introduced by Chen et al. (2014), the name emphasizes the tunable interaction strength $g$ rather than a fundamentally new qubit Hamiltonian.

Historically, Gmon is best treated as the original Google **qubit-plus-tunable-coupling architecture**, not as the umbrella entry for every later superconducting tunable coupler. The original device uses a grounded Josephson-element coupler that tunes the effective mutual inductive interaction between two Xmons through positive, near-zero, and negative values. That enables three things at once:

1. **Fast exchange-type two-qubit interactions** when the coupling is turned on.
2. **Idle isolation** by tuning the interaction near zero instead of leaving a large always-on coupling.
3. **A clean scaling path** from coherent single qubits to processor-scale Google chips such as Sycamore and Willow.

Later superconducting processors often describe similar hardware with a more general explicit "tunable coupler" mode. That broader story belongs primarily in [[tunable-coupler]]; Gmon is the historically specific Google lineage that helped establish it.

## Hamiltonian

Because the original Gmon is most naturally viewed as **two Xmon/transmon qubits with a flux-controlled interaction**, a useful reduced model is

$$H \approx \sum_{i=1,2}\left(\omega_i a_i^\dagger a_i + \frac{\alpha_i}{2}a_i^{\dagger 2}a_i^2\right) + g(\Phi_c)\,(a_1^\dagger a_2 + a_1 a_2^\dagger) + \zeta(\Phi_c)\,a_1^\dagger a_1 a_2^\dagger a_2,$$

where $\Phi_c$ is the coupler flux bias, $g(\Phi_c)$ is the tunable exchange interaction, and $\zeta(\Phi_c)$ is the residual cross-Kerr/$ZZ$ term. The key physics is that the coupler changes the **effective mutual inductance**, allowing $g(\Phi_c)$ to pass through zero at the idle point while preserving Xmon-like single-qubit coherence.

A more generic three-mode Hamiltonian with an explicit coupler oscillator is often appropriate for later [[tunable-coupler]] devices, but treating that as the defining Gmon picture overstates how qubit-like the original grounded coupler is.

## Motivation

Fixed capacitive coupling in early Xmon-style arrays created spectral crowding and unwanted idle interaction. Gmon moved the aggressive tunability into a dedicated coupling element instead of paying the full coherence penalty on the computational qubits themselves. That architectural split, coherence-friendly data qubits plus a sacrificial flux-sensitive coupler, became one of the central design ideas in modern superconducting processors.

## Experimental Status

**Original Gmon demonstration — Chen et al. (2014):**
- Introduced the Google Gmon architecture: two Xmon-like qubits linked by a grounded tunable inductive coupler.
- Demonstrated coupling tunable from essentially off to about 30 MHz, with switching on ~10 ns timescales.
- Reported an excitation-swap interaction time of about 12 ns while retaining high-coherence Xmon behavior.

**Sycamore processor — Arute et al. (2019):**
- Scaled the Google tunable-coupling lineage to a 53-qubit processor with 86 couplers.
- Achieved processor-level average CZ fidelity of about 99.4%.
- Established the architecture as viable for classically hard random-circuit sampling.

**Willow / below-threshold surface-code era — Google Quantum AI and Collaborators (2025):**
- Pushed processor-level median CZ fidelity into the roughly 99.7–99.85% range.
- Enabled below-threshold surface-code operation on a 105-qubit superconducting processor.
- A targeted 2024-2026 search did not surface a newer peer-reviewed **Gmon-specific** benchmark that supersedes Willow; more recent coupler innovations are better treated under [[tunable-coupler]].

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Tunable coupling range | 0 to ~30 MHz | Original Gmon two-Xmon demo | [Chen et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220502) |
| Coupling switch timescale | ~10 ns | Flux control of inductive coupler | [Chen et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220502) |
| Excitation-swap interaction time | ~12 ns | Original fast interaction benchmark | [Chen et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220502) |
| Processor-scale CZ fidelity (Sycamore) | ~99.4% | Average CZ fidelity across the 53-qubit processor | [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |
| Processor-scale CZ fidelity (Willow) | 99.7–99.85% | Median/fleet-level Willow-era performance cited in below-threshold work | [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| Operating temperature | 10–20 mK | Dilution refrigerator environment | — |

## References

### Original proposal and demonstration
- Y. Chen et al., "Qubit Architecture with High Coherence and Fast Tunable Coupling," [Phys. Rev. Lett. 113, 220502 (2014)](https://doi.org/10.1103/PhysRevLett.113.220502) — [arXiv:1402.7367](https://arxiv.org/abs/1402.7367)

### Key experimental milestones
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505 (2019)](https://doi.org/10.1038/s41586-019-1666-5) — [arXiv:1910.11333](https://arxiv.org/abs/1910.11333)
- Google Quantum AI and Collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687)

## Linked Papers

- [[chen-2014-gmon]]
- [[arute-2019-supremacy-programmable-superconducting]]
- [[acharya-2025-error-correction-below]]

## Evergreen context

- [[charge-noise-sweet-spot]] — the architectural trick is to keep the computational qubits transmon-like and coherence-friendly while localizing most of the flux sensitivity in the coupling element.
- [[josephson-junction-as-nonlinear-element]] — the Gmon coupler uses Josephson nonlinearity to make the effective inductive interaction programmable rather than fixed.
- [[threshold-theorem]] — Gmon mattered because suppressing idle interaction while preserving fast entangling gates is exactly the kind of error-budget engineering needed before surface-code scaling works in practice.

## Related Entries

- [[xmon]] — the underlying Google transmon geometry that Gmon extends
- [[transmon]] — parent qubit family
- [[tunable-coupler]] — the broader superconducting coupler umbrella entry
- [[surface-code-logical-qubit]] — why Willow-era Gmon descendants matter architecturally
- [[circuit-qed]] — shared superconducting control and readout stack
