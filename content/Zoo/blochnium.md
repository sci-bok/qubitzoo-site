---
title: 'Blochnium: superconducting quasicharge qubit'
entry_type: qubit
technology_family: Superconducting
status: seed
figure_reviewed: true
seed_id: '19'
seed_source: qubitzoo-airtable
first_proposed_year: 2020
keywords:
- blochnium
- hyperinductance
- superconducting
- quasicharge
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



Blochnium: superconducting quasicharge qubit is a seed entry imported from the legacy Qubit Zoo Airtable dataset.


## Figure

![[blochnium-figure.png]]

## Description
Blochnium is proposed as the dual of the transmon qubit, which exploits a coherent insulating response of a single Josephson junction that emerges from the extension of phase fluctuations beyond 2π. A weak junction is shunted by an extremely high inductance. The insulating character of the junction is manifested by the vanishing flux sensitivity of the qubit transition between the ground state and the first excited state, which recovers rapidly for transitions to higher-energy states. The spectrum agrees with a duality mapping of blochnium onto a transmon, which replaces the external flux by the offset charge and introduces a new collective quasicharge variable instead of the superconducting phase.


## Motivation
Three fundamental types of superconducting qubit are known, each reflecting a distinct behaviour of quantum fluctuations in a Cooper pair condensate: single-charge tunnelling (charge qubit), single-flux tunnelling (flux qubit) and phase oscillations (phase qubit or transmon). Yet, the dual nature of charge and flux suggests that circuit atoms must come in pairs, 'blochnium' is proposed as the dual of the transmon.

## References
- https://www.nature.com/articles/s41586-020-2687-9

## Linked Papers
- [[pechenezhskiy-2020-blochnium]]

## Related Entries
- [[transmon]]
- [[cooper-pair-box-charge-qubit]]
- [[fluxonium]]

## Seed Metadata
- date_published: 2020-09-16

## Physics

Operates in the extreme fluxonium limit $E_L \ll E_C, E_J$, where the superconducting phase $\varphi$ becomes quasi-continuous. The qubit transition is between states in the lowest Bloch band of the Josephson cosine potential, with the conjugate "quasicharge" $p$ (Bloch momentum) as the good quantum number. Hamiltonian same as fluxonium:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi} + \frac{1}{2}E_L(\hat{\varphi} - 2\pi\Phi_{\text{ext}}/\Phi_0)^2$$

Dual of the transmon: where the transmon flattens charge dispersion via $E_J/E_C \gg 1$, blochnium flattens flux dispersion via $E_L \to 0$. Exactly insensitive to offset charge; flux sensitivity can also be suppressed.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | 10–100 μs | Early devices (2020) | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| Qubit coherence $T_2$ | 1–10 μs | Echo measurement | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| Charge sensitivity | Exactly zero | No island in circuit | — |
| Anharmonicity | Large | Unlike transmon | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |
| Qubit footprint | ~500 μm | Superinductance chain | — |

## Related Qubits

- [[fluxonium]] — parent architecture
- [[transmon]] — dual qubit (charge vs flux continuous)
- [[cooper-pair-box-charge-qubit]] — island-based ancestor
