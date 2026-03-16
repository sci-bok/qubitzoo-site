---
title: Exchange-only qubit
entry_type: qubit
technology_family: Semiconducting
status: seed
figure_reviewed: true
seed_id: '12'
seed_source: qubitzoo-airtable
first_proposed_year: 2000
keywords:
- exchange-only
- quantum dot
- spin
- encoded qubit
- decoherence-free
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



Exchange-only qubit is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
This is an encoded qubit defined in the two-dimensional subspace of a three- spin-half system. The two qubit states have the same total spin quantum numbers (Stot=1/2, Stotz=1/2), providing protection against some global magnetic field fluctuation. All the gate operations can be implemented by sequences of exchange interactions between neighboring spins. Single qubit gates require at most 3 or 4 exchange steps, while two-qubit gates require much longer exchange sequences (about 20 exchange steps).


## Figure

![[exchange-only-qubit-figure.png]]

## Motivation
This qubit has inherent protection against fluctuation of global magnetic field. More importantly, it requires only fast electrical gate control (exchange pulses) for full set of single- and two-qubit gate operations, without using any microwave control.

## References
- https://www.nature.com/articles/35042541
- https://journals.aps.org/pra/abstract/10.1103/PhysRevA.63.042307
- http://advances.sciencemag.org/content/1/4/e1500214

## Linked Papers
- [[divincenzo-2000-exchange-only]]

## Related Entries
- [[singlet-triplet-qubit]]
- [[rx-qubit]]
- [[hybrid-qubit]]
- [[aeon-qubit]]

## Seed Metadata
- date_published: 2000-11-16

## Physics

Logical qubit encoded in the $S = 1/2$, $S_z = +1/2$ subspace of three electron spins in a triple quantum dot:

$$|0_L\rangle = |S_{12}\rangle|\!\uparrow\rangle_3, \quad |1_L\rangle = \sqrt{\tfrac{2}{3}}\,|T_{12}^+\rangle|\!\downarrow\rangle_3 - \sqrt{\tfrac{1}{3}}\,|T_{12}^0\rangle|\!\uparrow\rangle_3$$

Universal control uses only pairwise Heisenberg exchange $J_{ij}\,\vec{S}_i \cdot \vec{S}_j$ between any pair in the triple dot — no magnetic fields or gradients needed. The encoding forms a decoherence-free subspace against collective dephasing.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1 s | Spin relaxation | [DiVincenzo et al. 2000](https://doi.org/10.1038/35042541) |
| Qubit coherence $T_2$ | 1–100 μs | DFS protects against uniform $B$ noise | [Medford et al. 2013](https://doi.org/10.1038/nnano.2013.174) |
| Gate fidelity (1Q) | 99–99.5% | All-exchange rotations | [Medford et al. 2013](https://doi.org/10.1038/nnano.2013.174) |
| Gate fidelity (2Q) | 95–99% | Between adjacent triples | [Medford et al. 2013](https://doi.org/10.1038/nnano.2013.174) |
| Gate time (1Q) | 1–50 ns | Exchange pulses | — |
| Gate time (2Q) | 10–100 ns | Inter-triple exchange | — |
| Readout fidelity | 95–99% | Spin-to-charge + charge sensor | [Medford et al. 2013](https://doi.org/10.1038/nnano.2013.174) |
| Qubit footprint | ~150–300 nm pitch | 3 dots per logical qubit | — |
| Operating temperature | 20–100 mK | GaAs or Si/SiGe | — |
| Connectivity | Nearest-neighbor | Between adjacent triple dots | — |

## Related Qubits

- [[loss-divincenzo-qubit]] — single-spin ancestor
- [[singlet-triplet-qubit]] — two-spin encoding (needs gradient)
- [[aeon-qubit]] — always-on variant
