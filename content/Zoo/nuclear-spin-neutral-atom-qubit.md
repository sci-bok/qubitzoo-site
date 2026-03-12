---
title: Nuclear-Spin Neutral-Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
first_proposed_year: 2008
keywords:
- neutral atom
- nuclear spin
- clock state
- alkaline earth
- long coherence
influence_score: 0.71
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

Nuclear-spin neutral-atom qubits encode logical states in long-lived nuclear spin manifolds (often in alkaline-earth(-like) atoms such as Sr/Yb), exploiting reduced magnetic sensitivity and ultra-narrow optical transitions.


## Figure

![[nuclear-spin-neutral-atom-qubit-figure.png]]

## Hamiltonian

Effective two-level encoding with weak magnetic sensitivity:

$$H = \frac{\omega_0}{2}\sigma_z + \frac{\Omega(t)}{2}\sigma_x + \delta(t)\frac{1-\sigma_z}{2}$$

with design target $\partial\omega_0/\partial B \approx 0$ at operating points.

## Motivation

Nuclear-spin encodings are a coherence-first strategy for neutral-atom computing. By pushing logical storage into weakly magnetically sensitive manifolds, these architectures can extend memory lifetimes while still using excited-state manifolds (Rydberg or optical-clock transitions) for fast entanglement and control.

## Key Findings

- Nuclear-spin manifolds support long-lived storage and robust idle behavior.
- Architectures can separate "memory" and "interaction" states to reduce crosstalk.
- Compatible with both tweezer and lattice implementations.
- Promising route for modular networked neutral-atom processors.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Coherence potential | very long (clock-state limited) | primary motivation | — |
| Gate strategy | Raman / optical-clock transitions | platform dependent | — |
| Entangling mechanism | Rydberg or cavity-mediated | architecture dependent | — |
| Main challenge | balancing coherence and gate speed | open optimization frontier | — |

## Related Entries

- [[alkaline-earth-neutral-atom-clock-qubit]]
- [[rydberg-neutral-atom-qubit]]
