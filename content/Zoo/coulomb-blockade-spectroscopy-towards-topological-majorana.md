---
title: Coulomb blockade spectroscopy towards topological Majorana zero mode qubit in the 1D semiconductor-superconductor nanowire
entry_type: qubit
technology_family: Topological
status: seed
figure_reviewed: true
seed_id: '24'
seed_source: qubitzoo-airtable
first_proposed_year: 2021
keywords:
- majorana
- majorana nanowire
- topological qubit
- zero-bias peak
- zero-bias conductance peak
- zbcp
- non-local
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



Coulomb blockade spectroscopy towards topological Majorana zero mode qubit in the 1D semiconductor-superconductor nanowire is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
Coulomb blockade (CB) tunneling can simultaneously detect the localization of states at both ends in a two-terminal device. It hence provides non-local information rather than the one-end zero-bias conductance peak (ZBCP), a signature of Majorana zero mode (MZM) which topologically trivial subgap states can also mimic. However, CB transport is difficult to analyze because Coulomb interaction cannot be treated perturbatively. Here we show that the CB transport can be modeled at the same level of complexity as quantum point contact tunneling that has routinely been used in mesoscopic physics to understand nanowire experiments.


## Figure

![[coulomb-blockade-spectroscopy-towards-topological-majorana-figure.png]]

## Motivation
Majorana zero mode (MZM) categorized as a topological qubit can be manipulated by its non-abelian statistics while being topologically protected from environmental interference. However, how to distinguish MZMs from topologically-trivial subgap bound states, which mimic MZMs in different ways but do not possess the qualifications of "qubit", is an essential issue in the Majorana nanowire.

## References
- https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.085403
- https://www.nature.com/articles/nature17162
- https://www.nature.com/articles/s41467-018-07279-7

## Seed Metadata
- date_published: 2021-08-03

## Physics

Topological qubit encoded non-locally in pairs of Majorana zero modes at the ends of a 1D topological superconductor. The material platform is InAs nanowires with epitaxial Al shell: semiconductor provides spin-orbit coupling + Zeeman splitting; Al provides proximity-induced superconductivity. At sufficient magnetic field, the system enters a topological phase with zero-energy Majorana bound states.

The topological qubit Hamiltonian (ideal):
$$H = 0$$

The ground-state degeneracy is topologically protected — local perturbations cannot distinguish or couple the two qubit states. This provides exponential protection against local noise, with errors suppressed as $\sim e^{-L/\xi}$ where $L$ is wire length and $\xi$ is coherence length.

**Status (2026)**: Experimental realization remains controversial. Distinguishing true topological Majoranas from trivial Andreev bound states is an ongoing challenge.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | Predicted: very long | Topological protection | — |
| Qubit coherence $T_2$ | Predicted: very long | Exponential suppression of local noise | — |
| Gate fidelity | TBD | No qubit operations demonstrated | https://journals.aps.org/prb/abstract/10.1103/PhysRevB.104.0 |
| Gate mechanism | Braiding | Non-Abelian anyon exchange | — |
| Topological gap | 20–50 μeV (claimed) | InAs-Al platform | — |
| Operating temperature | <100 mK | Below topological gap | — |
| Qubit footprint | ~1–5 μm wire | Nanowire device | — |

## Related Qubits

- [[andreev-spin-qubit]] — related InAs-Al material platform
- [[gatemon]] — same semiconductor-superconductor materials
