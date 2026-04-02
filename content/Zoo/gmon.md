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
- frequency-tunable
influence_score: 0.70
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[gmon-figure.png]]

## Description

The Gmon is a superconducting qubit architecture developed at Google that adds a **tunable coupler** between neighboring Xmon-style qubits. Introduced by Y. Chen et al. (2014), the "g" in Gmon refers to the tunable coupling strength $g$ between qubits.

The tunable coupler is itself a frequency-tunable transmon-like element placed between two computational qubits. By adjusting its frequency via a flux line, the effective qubit-qubit coupling can be tuned from a finite positive value through zero to a finite negative value. This enables:

1. **Fast two-qubit gates**: bringing qubits into resonance with strong coupling for $i$SWAP-like gates in ~10–20 ns.
2. **Idle isolation**: parking the coupler to cancel residual $ZZ$ coupling, suppressing always-on errors.
3. **CZ gates**: diabatic flux pulses that accumulate a conditional phase.

The Gmon/tunable-coupler architecture was used in Google's Sycamore (2019) and Willow (2024) processors and has become the dominant paradigm for frequency-tunable superconducting qubit arrays.

## Hamiltonian

The three-body system (qubit 1 — coupler — qubit 2):

$$H = \sum_{i=1,2,c} \omega_i a_i^\dagger a_i + \frac{\alpha_i}{2} a_i^\dagger a_i^\dagger a_i a_i + \sum_{i<j} g_{ij}(a_i^\dagger a_j + a_i a_j^\dagger)$$

The effective qubit-qubit coupling after adiabatically eliminating the coupler:

$$g_\text{eff} = g_{12} - \frac{g_{1c}\,g_{2c}}{\Delta_c}$$

where $\Delta_c = \omega_c - (\omega_1 + \omega_2)/2$ is the coupler detuning. Setting $g_{12} = g_{1c}g_{2c}/\Delta_c$ achieves zero effective coupling (idle point).

## Motivation

Fixed-coupling architectures suffer from always-on $ZZ$ interaction, causing idle errors and frequency-crowding constraints. The tunable coupler solves both: it allows fast gates when coupling is "on" and near-perfect isolation when "off," dramatically improving circuit fidelity for multi-qubit algorithms.

## Experimental Status

**First demonstration — Y. Chen et al. (2014):**
- Demonstrated tunable coupling between two Xmon-style qubits via a flux-tunable coupler element.
- Achieved two-qubit gate fidelities suitable for quantum error correction exploration.
- Showed ON/OFF switching of effective coupling by tuning the coupler frequency.

**Sycamore processor — Arute et al. (2019):**
- 53-qubit processor using Gmon-style tunable couplers for 86 qubit pairs.
- Median CZ fidelity 99.4% via randomized benchmarking.
- Demonstrated quantum computational advantage.

**Willow processor — Google Quantum AI (2025):**
- Improved to 99.7–99.85% median CZ fidelity.
- Enabled below-threshold surface code operation with 105 qubits.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 2Q gate fidelity | 99.5–99.9% | CZ or $i$SWAP | [Y. Chen et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220502) |
| 2Q gate time | 10–30 ns | Fast parametric gates | — |
| Residual $ZZ$ (off) | <10 kHz | At idle point | — |
| 1Q gate fidelity | 99.9%+ | Same as Xmon | [Y. Chen et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220502) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal and demonstration
- Y. Chen et al., "Qubit Architecture with High Coherence and Fast Tunable Coupling," [Phys. Rev. Lett. 113, 220502 (2014)](https://doi.org/10.1103/PhysRevLett.113.220502)

### Key experimental milestones
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505 (2019)](https://doi.org/10.1038/s41586-019-1666-5)
- Google Quantum AI, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y)

## Linked Papers

- [[chen-2014-gmon]]

## Related Entries

- [[xmon]] — predecessor qubit architecture without tunable coupling
- [[transmon]] — parent qubit family
- [[tunable-coupler]] — the coupling element technology in detail
- [[circuit-qed]] — measurement and readout framework
