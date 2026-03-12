---
title: Molecular Qubit
entry_type: qubit
technology_family: Molecular
status: demonstrated
first_proposed_year: 2007
keywords:
- molecular qubit
- molecular spin
- coordination complex
- spin coherence
- chemical synthesis
influence_score: 0.66
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

Molecular qubits encode quantum states in spin degrees of freedom of individual molecules (often transition-metal coordination complexes or lanthanide-based molecules). Chemical synthesis enables bottom-up tuning of anisotropy, spin-orbit coupling, and local environment.


## Figure

![[molecular-qubit-figure.png]]

## Hamiltonian

A common effective spin Hamiltonian:

$$H = D S_z^2 + E(S_x^2 - S_y^2) + g\mu_B\mathbf{B}\cdot\mathbf{S} + \mathbf{S}\cdot\mathbf{A}\cdot\mathbf{I}$$

where $D,E$ capture zero-field splitting and anisotropy, and hyperfine interactions are encoded by $\mathbf{A}$.

## Why it matters

Molecular qubits offer synthetic tunability and potential dense integration, bridging quantum information with chemistry and materials design.

## Motivation

Molecular qubits offer a distinct advantage over lithographic platforms: the qubit Hamiltonian can be engineered chemically at synthesis time. Ligand design, isotope choice, and local symmetry tuning provide a route to optimize anisotropy and decoherence channels in ways not available in fixed solid-state nanofabrication flows.

## Key Findings

- Coherence improvements have tracked progress in chemical purification and spin dilution.
- Lanthanide and transition-metal complexes offer complementary anisotropy/coherence tradeoffs.
- Integration with resonators and spin-to-photon interfaces remains an active frontier.
- Molecular systems are especially compelling for hybrid quantum sensing + computing stacks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_2$ | 1–100 μs | Strongly chemistry dependent | — |
| Operating temperature | mK to a few K | Some systems above dilution range | — |
| Addressability | Ensemble/single-molecule emerging | Readout remains a bottleneck | — |
| Main challenge | Decoherence + control integration | Interface to circuit/QED hardware | — |

## Related Entries

- [[nv-center-qubit]]
- [[spin-qubit]]
