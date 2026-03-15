---
title: Shuttling Ion-Trap Qubit (QCCD)
entry_type: qubit
technology_family: Ion Trap
status: demonstrated
first_proposed_year: 2002
keywords:
- ion trap
- qccd
- shuttling
- segmented trap
- modular scaling
influence_score: 0.75
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

QCCD-style trapped-ion architectures scale by physically transporting ions between segmented trap zones: memory, interaction, and readout regions. Rather than keeping very long ion chains (which suffer mode crowding), shuttling keeps chains short and composes operations through transport.


## Figure

![[shuttling-ion-trap-qubit-figure.png]]

## Hamiltonian

Each interaction zone follows standard trapped-ion Hamiltonians; shuttling adds time-dependent trap potentials:

$$H(t)=\sum_i\left[\frac{p_i^2}{2m}+V_i(x_i,t)\right]+H_{\text{int}}$$

with $V_i(x,t)$ engineered to keep motional excitation low during transport.

## Motivation

QCCD shuttling addresses the core scaling problem of trapped-ion systems: long chains become difficult to control due to mode crowding and transport bottlenecks. Segmented transport allows architectures to keep local interaction zones small while scaling globally through movement, routing, and scheduling.

## Key Findings

- High-fidelity ion transport through multi-zone junctions has been demonstrated.
- Practical performance is dominated by transport-induced heating and scheduler quality.
- QCCD naturally supports memory/interaction/readout zone specialization.
- This architecture is central to many trapped-ion fault-tolerance roadmaps.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Transport speed | 10–100 μs / hop | Device dependent | — |
| Added motional excitation | <1 phonon (optimized) | Key transport quality metric | — |
| 2Q gate fidelity | 99%+ | In interaction zones | [Moses et al. 2023](https://doi.org/10.48550/arXiv.2305.03828) |
| Main scaling bottleneck | transport scheduling + heating | architecture-level challenge | — |

## Linked Papers
- [[kielpinski-2002-shuttling]]

## Related Entries

- [[trapped-ion-qubit]]
- [[cirac-zoller-gate]]
