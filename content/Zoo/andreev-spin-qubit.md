---
title: Andreev spin qubit
entry_type: qubit
technology_family: Super-Semi
status: seed
figure_reviewed: true
seed_id: '18'
seed_source: qubitzoo-airtable
first_proposed_year: 2021
keywords:
- superconducting
- spin
- qubit
- andreev
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok
---




## Description
Andreev spin qubit: the spin degree of freedom of an electronic quasiparticle trapped in the supercurrent-carrying Andreev levels of a Josephson semiconductor nanowire.


## Figure

![[andreev-spin-qubit-figure.png]]

## Hamiltonian

A minimal Andreev-spin-qubit model uses spin-split Andreev bound states in a phase-biased Josephson weak link:

$$H = E_A(\varphi)\tau_z + \frac{1}{2}g\mu_B\mathbf{B}\cdot\boldsymbol{\sigma} + H_{\text{SO}} + H_{\text{drive}}$$

with Andreev level dispersion (short-junction limit):

$$E_A(\varphi) = \Delta\sqrt{1 - \tau\sin^2(\varphi/2)}$$

where $\tau$ is channel transparency, $\varphi$ the superconducting phase difference, and spin-orbit coupling $H_{\text{SO}}$ enables electrically driven spin control and spin-dependent supercurrent readout.

## Motivation
The most promising solid-state approaches for developing quantum information-processing systems have been based on the circulating supercurrents of superconducting circuits and manipulating the spin properties of electrons in semiconductor quantum dots. The Andreev spin qubit is an attempt to combine the desirable aspects of both approaches, the scalability of the superconducting circuits and the compact footprint of the quantum dots, to design and fabricate a superconducting spin qubit.

## References
- https://science.sciencemag.org/content/373/6553/430
- https://science.sciencemag.org/content/349/6253/1199.abstract
- https://www.nature.com/articles/nphys4150

## Linked Papers
- [[hays-2021-andreev-spin-qubit]]

## Related Entries
- [[transmon]]
- [[spin-qubit]]
- [[gatemon]]
- [[gatemonium]]

## Seed Metadata
- date_published: 2021-07-23

## Physics

Qubit encoded in the spin degree of freedom of an Andreev bound state in a semiconductor-superconductor nanowire Josephson junction. Spin-orbit coupling in the semiconductor (InAs) creates spin-split Andreev levels $|\!\uparrow\rangle$, $|\!\downarrow\rangle$ below the superconducting gap. The different spin states carry different supercurrents, enabling dispersive readout via a coupled microwave resonator — bridging spin and superconducting qubit paradigms.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | 1–10 μs | Limited by quasiparticle poisoning | [Hays et al. 2021](https://doi.org/10.1126/science.abi7515) |
| Qubit coherence $T_2$ | 0.1–1 μs | Early devices (2021) | [Hays et al. 2021](https://doi.org/10.1126/science.abi7515) |
| Gate fidelity (1Q) | ~95% | Microwave-driven spin transitions | [Hays et al. 2021](https://doi.org/10.1126/science.abi7515) |
| Readout fidelity | ~90% | Dispersive via resonator | [Hays et al. 2021](https://doi.org/10.1126/science.abi7515) |
| Qubit footprint | ~1 μm junction | Nanowire device | — |
| Operating temperature | 10–30 mK | Dilution refrigerator | — |

## Related Qubits

- [[gatemon]] — same material platform, charge degree of freedom
- [[gatemonium]] — semiconductor-superconductor hybrid
- [[majorana-topological-qubit]] — related InAs-Al platform
- [[transmon]] — shares dispersive readout mechanism
