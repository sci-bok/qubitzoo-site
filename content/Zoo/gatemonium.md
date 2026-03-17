---
title: Gatemonium
entry_type: qubit
technology_family: Super-Semi
status: seed
figure_reviewed: true
seed_id: '25'
seed_source: qubitzoo-airtable
first_proposed_year: 2024
keywords:
- gatemonium gatemon fluxonium
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok
---




## Description
This is a fluxonium qubit made entirely with super-semi junctions. The gate voltage tunability of the single junction in the fluxonium allows one to tune the fluxonium between light and heavy regimes, and equivalently between bit and phase flip protected regimes (fluxonium cannot simultaneously protect against both). Also, the array of super-semi junctions may have applications in microwave components due to a different plasma frequency than AlOx junctions. Finally, hybridization of fluxon and plasmon modes may lead to enhanced coherence times over standard gatemons, which are limited by dielectric loss to the ~1-10us range.


## Figure

![[gatemonium-figure.png]]

## Motivation
Tunable super semi fluxonium: tune between different parameter regimes of fluxonium (e.g. Fig 6 https://journals.aps.org/prxquantum/abstract/10.1103/PRXQuantum.2.030101). Using super-semi junctions for the single JJ makes it easy to tune, more difficult with a SQUID because there are multiple loops. The array of super-semi junctions is also an advantage that the 2DEG platform has over the nanowire platform.

## References
- https://arxiv.org/abs/2406.09002

## Linked Papers
- [[strickland-2024-gatemonium]]

## Related Entries
- [[gatemon]]
- [[fluxonium]]
- [[transmon]]
- [[andreev-spin-qubit]]
- [[cos2phi]]
- [[flux-qubit]]

## Seed Metadata
- date_published: 2024-06-13

## Physics

Combines the gatemon (gate-tunable semiconductor Josephson junction) with a fluxonium-style superinductive shunt. The Hamiltonian:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J(V_g)\cos\hat{\varphi} + \frac{1}{2}E_L\hat{\varphi}^2$$

where $E_J(V_g)$ is voltage-tunable via the semiconductor channel. This enables all-electrical frequency control (no flux lines) while the superinductance provides charge noise protection. Potential path to flux-free, voltage-only superconducting qubit control.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | Not yet reported | Early-stage device (2024) | [Strickland et al. 2024](https://arxiv.org/abs/2406.09002) |
| Qubit coherence $T_2$ | Not yet reported |  | — |
| $E_J$ tunability | Gate voltage | No flux bias needed | — |
| Anharmonicity | Large (fluxonium-like) | $E_L \ll E_J$ | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Related Qubits

- [[gatemon]] — parent (no superinductance)
- [[fluxonium]] — inductive shunt ancestor
- [[transmon]] — capacitive shunt cousin
- [[andreev-spin-qubit]] — same material platform
