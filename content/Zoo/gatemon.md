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
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[gatemon-figure.png]]

## Description

The gatemon is a superconducting transmon-style qubit where the conventional tunnel-barrier Josephson junction is replaced by a **semiconductor nanowire** (typically InAs or InAs/Al) with a gate-tunable weak link. The supercurrent through the nanowire depends on the gate voltage applied to the semiconductor channel, making $E_J$ — and therefore the qubit frequency — **voltage-tunable** rather than flux-tunable.

Introduced independently by Larsen et al. and de Lange et al. in 2015, the gatemon inherits the transmon's charge-noise insensitivity ($E_J/E_C \gg 1$) while gaining two advantages:
1. **Voltage tunability**: no magnetic flux required, eliminating flux-noise sensitivity and simplifying wiring.
2. **Semiconductor integration**: the nanowire channel can host exotic physics (Andreev bound states, Majorana modes) while simultaneously serving as the qubit element.

The current-phase relation of the semiconductor weak link can deviate from sinusoidal, introducing higher harmonics ($I(\varphi) = I_c\sin\varphi + I_2\sin 2\varphi + \cdots$) that modify the anharmonicity and energy-level structure compared to a standard transmon.

The tradeoff is that semiconductor junctions currently have higher loss and lower reproducibility than aluminum oxide tunnel junctions, resulting in shorter coherence times than state-of-the-art transmons.

## Hamiltonian

Same form as the transmon, but with gate-voltage-dependent Josephson energy:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J(V_g)\cos\hat{\varphi}$$

The current-phase relation of the semiconductor weak link can deviate from sinusoidal, introducing higher harmonics:

$$I(\varphi) = I_c\sin\varphi + I_2\sin 2\varphi + \cdots$$

which modifies the anharmonicity and energy-level structure compared to a standard transmon.

## Motivation

- Flux-tunable transmons require magnetic flux bias lines that add wiring complexity and introduce flux noise.
- The gatemon replaces this with a DC gate voltage — simpler, lower noise, and compatible with semiconductor qubit co-integration on the same chip.
- Provides a platform for exploring novel semiconductor-superconductor physics (Andreev states, Majorana modes) within a circuit-QED-compatible architecture.

## Experimental Status

**First demonstrations — Larsen et al. and de Lange et al. (2015):**
- Larsen et al. demonstrated the first gatemon using an InAs nanowire Josephson junction, showing gate-voltage tunability of the qubit frequency from 4–8 GHz.
- de Lange et al. independently demonstrated a gatemon with two-qubit coupling.
- Coherence times of $T_1 \sim 1$–$10\,\mu$s, limited by semiconductor junction losses.

**Ge/SiGe gatemon — Casparis et al. (2018):**
- Extended the gatemon concept to a proximitized two-dimensional electron gas (2DEG) platform.
- Improved junction reproducibility compared to nanowire devices.

**Ongoing development (2020s):**
- Continued materials and fabrication improvements targeting higher coherence.
- Integration with Majorana-based topological qubit proposals.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–10 μs | Limited by semiconductor junction loss | [Larsen et al. 2015](https://doi.org/10.1103/PhysRevLett.115.127001) |
| $T_2$ | 1–5 μs | Dominated by charge and junction noise | — |
| Frequency tunability | 4–8 GHz | Via gate voltage | — |
| 1Q gate fidelity | 98–99.5% | Improving with materials | [Larsen et al. 2015](https://doi.org/10.1103/PhysRevLett.115.127001) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original demonstrations
- T. W. Larsen et al., "Semiconductor-Nanowire-Based Superconducting Qubit," [Phys. Rev. Lett. 115, 127001 (2015)](https://doi.org/10.1103/PhysRevLett.115.127001)

### 2DEG gatemon
- L. Casparis et al., "Superconducting gatemon qubit based on a proximitized two-dimensional electron gas," [Nature Nanotech. 13, 915 (2018)](https://doi.org/10.1038/s41565-018-0207-y)

## Linked Papers

- [[larsen-2015-gatemon]]
- [[casparis-2018-ge-gatemon]]

## Related Entries

- [[transmon]] — parent qubit architecture; gatemon replaces the tunnel junction
- [[gatemonium]] — related semiconductor-superconductor hybrid qubit
- [[andreev-spin-qubit]] — same material platform, spin degree of freedom
- [[ferbo-qubit]] — uses same nanowire weak link platform in high-impedance regime for dual noise protection
