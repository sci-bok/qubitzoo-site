---
title: Surface-Code Logical Qubit
entry_type: encoding
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: true
first_proposed_year: 1997
first_demonstrated_year: 2023
keywords:
- surface code
- logical qubit
- topological qec
- stabilizer code
- threshold theorem
influence_score: 0.83
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[surface-code-logical-qubit-figure.png]]

## Description

A surface-code logical qubit is not a new physical modality, but a fault-tolerant logical qubit encoded across a 2D lattice of physical qubits using repeated stabilizer measurements. The surface code, introduced by Kitaev (1997) and developed for practical implementation by Fowler et al. (2012), is the leading quantum error correction architecture due to its high threshold (~1% circuit-level error rate) and requirement of only nearest-neighbor interactions on a 2D grid.

Logical information is stored nonlocally across $d^2$ data qubits (for code distance $d$) and $(d^2 - 1)$ ancilla qubits used for syndrome extraction. Errors are detected via local parity checks — X-type (star) stabilizers detect Z errors, and Z-type (plaquette) stabilizers detect X errors — and corrected by decoding syndrome histories. Logical operators are non-contractible strings of Pauli operators spanning the patch, providing topological protection against local errors.

## Hamiltonian

The code space is defined by star and plaquette stabilizers:

$$A_s = \prod_{i\in s} X_i, \qquad B_p = \prod_{i\in p} Z_i$$

with code Hamiltonian form:

$$H = -\sum_s A_s - \sum_p B_p$$

The code space $\mathcal{C}$ is the simultaneous $+1$ eigenspace of all stabilizers. Logical operators correspond to non-contractible strings across the patch: $X_L$ connects the two smooth boundaries and $Z_L$ connects the two rough boundaries. The code distance $d$ is the minimum weight of any logical operator.

## Motivation

The surface code is currently the dominant QEC architecture for superconducting and trapped-ion roadmaps. Its key advantages are: a high circuit-level threshold of ~1%, compatibility with nearest-neighbor 2D qubit layouts (no long-range connectivity needed), well-understood decoder algorithms (MWPM, Union-Find), and experimental accessibility with current hardware. The primary cost is overhead: $O(d^2)$ physical qubits per logical qubit, with $d$ determined by the physical-to-threshold error ratio.

## Experimental Status

**Below-threshold operation — Google Quantum AI (2024):**
- Demonstrated logical error suppression when scaling from distance-3 to distance-5 to distance-7 on the Willow processor.
- Achieved a $\Lambda = 2.14 \pm 0.02$ error suppression factor per code distance step.
- Distance-7 code with 101 qubits achieved $0.143\% \pm 0.003\%$ error per cycle.
- Logical memory exceeded best physical qubit lifetime by factor $2.4 \pm 0.3$ (beyond break-even).

**Lattice surgery — Erhard et al. (2021):**
- Demonstrated entangling operations between logical qubits using lattice surgery protocols on trapped ions.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Logical lifetime | ~2× improvement per code distance step | Exponential suppression of logical errors demonstrated d=3→5→7 | [Google Quantum AI 2024](https://doi.org/10.1038/s41586-024-08449-y) |
| 1Q gate fidelity (logical Pauli) | 99.6–99.8% | d=5, Google Willow processor | [Google Quantum AI 2024](https://doi.org/10.1038/s41586-024-08449-y) |
| 2Q gate fidelity (logical CNOT) | ~99% (estimated) | Lattice surgery protocol; full demonstration pending | [Erhard et al. 2021](https://doi.org/10.1038/s41586-021-03928-y) |
| Threshold | ~1% | Circuit-level threshold | — |
| Physical qubits per logical | $O(d^2)$ | Code distance $d$ | — |
| Stabilizer cycle time | 0.5–5 μs | Platform dependent | — |
| Current status | Logical error suppression demonstrated | Below-threshold operation at d=7 | [Google Quantum AI 2024](https://doi.org/10.1038/s41586-024-08449-y) |

> **Note:** For QEC code entries, "T₁" refers to logical qubit lifetime (error-suppressed), and gate fidelities are logical-level operations on encoded information.

## References

### Original proposal
- A. Yu. Kitaev, "Fault-tolerant quantum computation by anyons," [Ann. Phys. 303, 2 (2003)](https://doi.org/10.1016/S0003-4916(02)00018-0) — [arXiv:quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021)

### Practical implementation roadmap
- A. G. Fowler et al., "Surface codes: Towards practical large-scale quantum computation," [Phys. Rev. A 86, 032324 (2012)](https://doi.org/10.1103/PhysRevA.86.032324) — [arXiv:1208.0928](https://arxiv.org/abs/1208.0928)

### Experimental demonstrations
- Google Quantum AI and Collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687)
- A. Erhard et al., "Entangling logical qubits with lattice surgery," [Nature 589, 220 (2021)](https://doi.org/10.1038/s41586-021-03928-y)

## Linked Papers

- [[fowler-2012-surface-code-roadmap]]

## Related Entries

- [[color-code-logical-qubit]] — alternative topological code with transversal Clifford gates
- [[transmon]] — dominant physical qubit for superconducting surface code implementations
- [[trapped-ion-qubit]] — alternative physical platform for surface code QEC
- [[erasure-qubit]] — erasure conversion dramatically increases the effective code threshold
