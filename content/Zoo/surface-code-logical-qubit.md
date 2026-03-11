---
title: Surface-Code Logical Qubit
entry_type: qubit
technology_family: Topological
status: demonstrated
first_proposed_year: 1998
keywords:
- surface code
- logical qubit
- topological qec
- stabilizer code
- threshold theorem
influence_score: 0.83
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
published: 1998-01-01
---

## Description

A surface-code logical qubit is not a new physical modality, but a fault-tolerant logical qubit encoded across a 2D lattice of physical qubits using repeated stabilizer measurements.

Logical information is stored nonlocally; errors are detected via local parity checks and corrected by decoding syndrome histories.


## Figure

![[surface-code-logical-qubit-figure.png]]

## Hamiltonian / Stabilizers

The code space is defined by star and plaquette stabilizers:

$$A_s = \prod_{i\in s} X_i, \qquad B_p = \prod_{i\in p} Z_i$$

with code Hamiltonian form:

$$H = -\sum_s A_s - \sum_p B_p$$

Logical operators correspond to non-contractible strings across the patch.

## Why it matters

Surface code is currently the dominant QEC architecture for superconducting and trapped-ion roadmaps due to high threshold (~1%) and local nearest-neighbor constraints.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Threshold | ~1% | Circuit-level threshold | — |
| Physical qubits per logical | O(d²) | Code distance d | — |
| Stabilizer cycle time | 0.5–5 μs | Platform dependent | — |
| Current status | Early logical demonstrations | Below full fault tolerance | — |

## Related Entries

- [[color-code-logical-qubit]]
- [[transmon]]
- [[trapped-ion-qubit]]
