---
title: Color-Code Logical Qubit
entry_type: qubit
technology_family: Cross-Platform
status: demonstrated
first_proposed_year: 2006
first_demonstrated_year: 2021
keywords:
- color code
- logical qubit
- topological qec
- transversal gates
- stabilizer code
influence_score: 0.77
last_updated: '2026-04-02'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-04-02
figure_reviewed: true
---

## Figure

![[color-code-logical-qubit-figure.png]]

## Description

Color-code logical qubits are encoded in 2D or 3D topological stabilizer codes defined on trivalent, three-colorable lattices. Relative to surface codes, color codes can offer transversal implementation of a larger Clifford gate set (including the Hadamard and phase gates), reducing some lattice-surgery overheads for Clifford-heavy workloads.

The code is defined on a lattice where each face is assigned one of three colors (red, green, blue) such that no two adjacent faces share the same color. Physical qubits reside on the vertices. Both X-type and Z-type stabilizers are defined on the same faces, a key structural difference from the surface code.

## Hamiltonian

For each face $f$ in a colorable lattice:

$$S_f^X = \prod_{i\in f} X_i, \qquad S_f^Z = \prod_{i\in f} Z_i$$

Code space is the +1 eigenspace of all face stabilizers. Logical operators correspond to colored string operators connecting boundaries of matching color.

## Motivation

Color codes are a leading alternative to the surface code when gate-transversality and decoding tradeoffs favor reduced compilation overhead. The native transversal Clifford gate set eliminates the need for magic state distillation for H and S gates, which is especially advantageous for Clifford-heavy workloads common in many quantum algorithms.

## Experimental Status

**First fault-tolerant QEC with color code — Ryan-Anderson et al. (2021):**
- Realized real-time fault-tolerant quantum error correction on a Quantinuum trapped-ion processor
- Demonstrated fault-tolerant parity readout and logical qubit persistence through repeated QEC rounds
- Color code on a distance-3 lattice with flag qubits

**Transversal Clifford gates — Ryan-Anderson et al. (2024):**
- Demonstrated native transversal Hadamard and phase gates on encoded color-code qubits
- Confirmed the architectural advantage of color codes for Clifford-heavy circuits
- [arXiv:2404.02280](https://arxiv.org/abs/2404.02280)

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Logical lifetime | ~10 QEC rounds (d=3) | Demonstrated logical qubit persistence through repeated error correction | [Ryan-Anderson et al. 2021](https://doi.org/10.1103/PhysRevX.11.041058) |
| 1Q gate fidelity (transversal H/S) | 99%+ (d=3) | Native Clifford advantage — transversal gates without magic state distillation | [Ryan-Anderson et al. 2024](https://doi.org/10.1126/science.adp6016) |
| 2Q gate fidelity (logical CNOT) | ~97–99% (d=3, small scale) | Via code deformation; limited by physical gate fidelities | [Postler et al. 2022](https://doi.org/10.1038/s41586-022-04721-1) |
| Threshold | ~0.1–1% | Decoder/noise model dependent | — |
| Transversal Clifford support | Yes | Major architectural advantage | — |
| Qubit overhead | Comparable order to surface code | Constants depend on layout | — |

> **Note:** For QEC code entries, gate fidelities are logical-level operations on encoded information.

## References

### Original proposal
- H. Bombin and M. A. Martin-Delgado, "Topological Quantum Distillation," [Phys. Rev. Lett. 97, 180501 (2006)](https://doi.org/10.1103/PhysRevLett.97.180501) — [arXiv:quant-ph/0605138](https://arxiv.org/abs/quant-ph/0605138)

### Experimental demonstrations
- C. Ryan-Anderson et al., "Realization of Real-Time Fault-Tolerant Quantum Error Correction," [Phys. Rev. X 11, 041058 (2021)](https://doi.org/10.1103/PhysRevX.11.041058) — [arXiv:2107.07505](https://arxiv.org/abs/2107.07505)
- C. Ryan-Anderson et al., "High-fidelity and fault-tolerant teleportation of a logical qubit using transversal gates and lattice surgery on a trapped-ion quantum computer," [arXiv:2404.02280 (2024)](https://arxiv.org/abs/2404.02280)

## Linked Papers

- [[bombin-2006-color-codes]]

## Related Entries

- [[surface-code-logical-qubit]] — primary alternative topological QEC code
- [[transmon]] — physical qubit platform for superconducting color code implementations
- [[trapped-ion-qubit]] — physical qubit platform for Quantinuum demonstrations
