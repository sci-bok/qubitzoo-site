---
title: Gatemon
entry_type: qubit
technology_family: Super-Semi
status: seed
seed_id: '11'
seed_source: qubitzoo-airtable
first_proposed_year: 2015
keywords:
- gatemon
- semiconductor nanowire
- voltage tunable
- josephson junction
- inas
- super-semi
influence_score: 0.68
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
figure_reviewed: true
published: 2015-01-01
---


## Description

The gatemon is a superconducting transmon-style qubit where the conventional tunnel-barrier Josephson junction is replaced by a semiconductor nanowire (typically InAs or InAs/Al) with a gate-tunable weak link. The supercurrent through the nanowire depends on the gate voltage applied to the semiconductor channel, making $E_J$ — and therefore the qubit frequency — voltage-tunable rather than flux-tunable.

Introduced independently by Larsen et al. and de Lange et al. in 2015, the gatemon inherits the transmon's charge-noise insensitivity ($E_J/E_C \gg 1$) while gaining two advantages:
1. **Voltage tunability**: no magnetic flux required, eliminating flux-noise sensitivity and simplifying wiring.
2. **Semiconductor integration**: the nanowire channel can host exotic physics (Andreev bound states, Majorana modes) while simultaneously serving as the qubit element.

The tradeoff is that semiconductor junctions currently have higher loss and lower reproducibility than aluminum oxide tunnel junctions, resulting in shorter coherence times than state-of-the-art transmons.


## Figure

![[gatemon-figure.png]]

## Hamiltonian

Same form as the transmon, but with gate-voltage-dependent Josephson energy:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J(V_g)\cos\hat{\varphi}$$

The current-phase relation of the semiconductor weak link can deviate from sinusoidal, introducing higher harmonics:

$$I(\varphi) = I_c\sin\varphi + I_2\sin 2\varphi + \cdots$$

which modifies the anharmonicity and energy-level structure compared to a standard transmon.

## Motivation

Flux-tunable transmons require magnetic flux bias lines that add wiring complexity and noise. The gatemon replaces this with a DC gate voltage — simpler, lower noise, and compatible with semiconductor qubit co-integration on the same chip.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–10 μs | Limited by semiconductor junction loss | [Larsen 2015](https://doi.org/10.1103/PhysRevLett.115.127001) |
| $T_2$ | 1–5 μs | Dominated by charge and junction noise | — |
| Frequency tunability | 4–8 GHz | Via gate voltage | — |
| 1Q gate fidelity | 98–99.5% | Improving with materials | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Related Entries

- [[transmon]]
- [[gatemonium]]
- [[andreev-spin-qubit]]
