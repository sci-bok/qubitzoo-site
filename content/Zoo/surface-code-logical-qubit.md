---
title: Surface-Code Logical Qubit
entry_type: encoding
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: true
first_proposed_year: 1997
first_demonstrated_year: 2022
keywords:
- surface code
- logical qubit
- topological qec
- stabilizer code
- threshold theorem
influence_score: 0.83
last_updated: '2026-05-09'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-05-09
---

## Figure

![[surface-code-logical-qubit-figure.png]]

## Description

A surface-code logical qubit is not a new physical modality, but a fault-tolerant logical qubit encoded across a 2D lattice of physical qubits using repeated stabilizer measurements. The surface code, introduced by Kitaev (1997) and developed for practical implementation by Fowler et al. (2012), is the leading quantum error correction architecture due to its high threshold (~1% circuit-level error rate) and requirement of only nearest-neighbor interactions on a 2D grid.

Logical information is stored nonlocally across $d^2$ data qubits (for code distance $d$) and $(d^2 - 1)$ ancilla qubits used for syndrome extraction. Errors are detected via local parity checks — X-type (star) stabilizers detect Z errors, and Z-type (plaquette) stabilizers detect X errors — and corrected by decoding syndrome histories. Logical operators are non-contractible strings of Pauli operators spanning the patch, providing topological protection against local errors.

## Hamiltonian

The code space is defined by star and plaquette stabilizers:

$$A_s = \prod_{i\in s} X_i, \qquad B_p = \prod_{i\in p} Z_i$$

with idealized code Hamiltonian form:

$$H = -\sum_s A_s - \sum_p B_p$$

The code space $\mathcal{C}$ is the simultaneous $+1$ eigenspace of all stabilizers. Logical operators correspond to non-contractible strings across the patch: $X_L$ connects the two smooth boundaries and $Z_L$ connects the two rough boundaries. The code distance $d$ is the minimum weight of any logical operator. In hardware implementations, however, surface-code logical qubits are realized by repeated syndrome extraction and classical decoding rather than passive protection under this Hamiltonian.

## Motivation

The surface code is currently the dominant QEC architecture for superconducting and trapped-ion roadmaps. Its key advantages are: a high circuit-level threshold of ~1%, compatibility with nearest-neighbor 2D qubit layouts (no long-range connectivity needed), well-understood decoder algorithms (MWPM, Union-Find), and experimental accessibility with current hardware. The primary cost is overhead: $O(d^2)$ physical qubits per logical qubit, with $d$ determined by the physical-to-threshold error ratio.

## Experimental Status

**Below-threshold logical memory — Google Quantum AI and Collaborators (2025):**
- Demonstrated logical error suppression when scaling from distance-3 to distance-5 to distance-7 on the Willow processor.
- Achieved a $\Lambda = 2.14 \pm 0.02$ error suppression factor per code-distance step.
- Distance-7 code with 101 qubits achieved $0.143\% \pm 0.003\%$ logical error per cycle.
- Logical memory exceeded the best physical qubit lifetime by a factor $2.4 \pm 0.3$, establishing beyond-break-even memory in a surface-code architecture.

**Encoded logical operations — Marques et al. (2022):**
- Realized repeated error-detection cycles on a distance-2 superconducting surface-code logical qubit.
- Demonstrated logical state preparation, measurement in the cardinal Bloch bases, and a universal set of encoded single-qubit gates.
- Showed that the fault-tolerant variants outperformed matched non-fault-tolerant implementations for the tested logical operations.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Error-suppression factor $\Lambda$ | $2.14 \pm 0.02$ | Improvement per code-distance step for $d=3 \to 5 \to 7$ on Willow | [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| Logical error per cycle | $0.143\% \pm 0.003\%$ | Distance-7, 101-qubit surface-code memory experiment | [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| Logical memory gain over best physical qubit | $2.4 \pm 0.3\times$ | Beyond-break-even logical memory benchmark | [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| Encoded operation set | Initialization, measurement, universal 1Q logical gates | Demonstrated on a distance-2 error-detecting superconducting surface code | [Marques et al. 2022](https://doi.org/10.1038/s41567-021-01423-9) |
| Threshold | ~1% | Canonical circuit-level threshold estimate for the surface code | [Fowler et al. 2012](https://doi.org/10.1103/PhysRevA.86.032324) |
| Physical qubits per logical | $O(d^2)$ data plus syndrome ancillas | Standard planar/square-patch overhead scales quadratically with code distance | [Fowler et al. 2012](https://doi.org/10.1103/PhysRevA.86.032324) |
| Current status | Below-threshold logical memory demonstrated | Best peer-reviewed surface-code benchmark here is the Willow $d=7$ memory experiment | [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |

> **Note:** For QEC code entries, lifetime and operation metrics are logical-level properties of encoded information, not single-device $T_1/T_2$ numbers.

## References

### Original proposal
- A. Yu. Kitaev, "Fault-tolerant quantum computation by anyons," [Ann. Phys. 303, 2 (2003)](https://doi.org/10.1016/S0003-4916(02)00018-0) — [arXiv:quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021)

### Practical implementation roadmap
- A. G. Fowler et al., "Surface codes: Towards practical large-scale quantum computation," [Phys. Rev. A 86, 032324 (2012)](https://doi.org/10.1103/PhysRevA.86.032324) — [arXiv:1208.0928](https://arxiv.org/abs/1208.0928)

### Experimental demonstrations
- J. F. Marques et al., "Logical-qubit operations in an error-detecting surface code," [Nature Physics 18, 80 (2022)](https://doi.org/10.1038/s41567-021-01423-9) — [arXiv:2102.13071](https://arxiv.org/abs/2102.13071)
- Google Quantum AI and Collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687)

## Linked Papers

- [[kitaev-2003-fault-tolerant-computation]]
- [[fowler-2012-surface-code-roadmap]]
- [[marques-2022-logical-qubit-operations-error-detecting-surface-code]]
- [[acharya-2025-error-correction-below]]

## Related Entries

- [[color-code-logical-qubit]] — alternative topological code with transversal Clifford gates
- [[transmon]] — dominant physical qubit for superconducting surface code implementations
- [[trapped-ion-qubit]] — alternative physical platform for surface code QEC
- [[erasure-qubit]] — erasure conversion dramatically increases the effective code threshold
- [[bacon-shor-code]] — contrasting subsystem-code route to logical protection with different locality and overhead tradeoffs
