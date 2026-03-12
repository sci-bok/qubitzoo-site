---
title: Color-Code Logical Qubit
entry_type: qubit
technology_family: Topological
status: demonstrated
first_proposed_year: 2006
keywords:
- color code
- logical qubit
- topological qec
- transversal gates
- stabilizer code
influence_score: 0.77
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

Color-code logical qubits are encoded in 2D or 3D topological stabilizer codes defined on trivalent, three-colorable lattices. Relative to surface code, color codes can offer transversal implementation of a larger Clifford gate set, reducing some lattice-surgery overheads.


## Figure

![[color-code-logical-qubit-figure.png]]

## Hamiltonian / Stabilizers

For each face $f$ in a colorable lattice:

$$S_f^X = \prod_{i\in f} X_i, \qquad S_f^Z = \prod_{i\in f} Z_i$$

Code space is the +1 eigenspace of all face stabilizers. Logical operators correspond to colored string operators connecting boundaries.

## Why it matters

Color codes are a leading alternative to surface code when gate-transversality and decoding tradeoffs favor reduced compilation overhead, especially for Clifford-heavy workloads.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Threshold | ~0.1–1% | Decoder/noise model dependent | — |
| Transversal Clifford support | Yes | Major architectural advantage | — |
| Qubit overhead | Comparable order to surface code | Constants depend on layout | — |
| Experimental status | Early-scale demonstrations | Not yet full fault-tolerant stack | — |

## Related Entries

- [[surface-code-logical-qubit]]
- [[transmon]]
- [[trapped-ion-qubit]]
