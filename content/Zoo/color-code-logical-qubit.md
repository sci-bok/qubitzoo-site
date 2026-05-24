---
title: Color-Code Logical Qubit
entry_type: encoding
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
last_updated: '2026-05-24'
generated_by: scibok-curation
verified_by: scibok-manual-2026-05-24
figure_reviewed: false
---

## Figure

![[color-code-logical-qubit-figure.png]]

## Description

Color-code logical qubits are encoded in topological stabilizer codes defined on trivalent, face-3-colorable lattices (often called 2D color codes). Physical qubits live on vertices, and each face supports both an X-type and Z-type stabilizer. Relative to surface codes, color codes can reduce some Clifford-layer overhead because single-logical-qubit Clifford gates (notably H and S) are naturally transversal for standard 2D constructions.

## Hamiltonian

For each face \(f\):

\[
S_f^X = \prod_{i\in f} X_i, \qquad S_f^Z = \prod_{i\in f} Z_i
\]

The code space is the \(+1\) eigenspace of all face stabilizers. An idealized commuting-projector code Hamiltonian is:

\[
H_{\mathrm{code}} = -\sum_f \left(S_f^X + S_f^Z\right)
\]

Logical operators are nontrivial string/string-net operators determined by the lattice boundaries and coloring; in hardware implementations, protection is realized by repeated stabilizer measurement and decoding rather than by directly engineering \(H_{\mathrm{code}}\).

## Motivation

Color codes are a leading topological-code alternative when transversal Clifford structure is valuable. They support transversal single-logical-qubit Clifford gates on standard 2D layouts, and blockwise transversal CNOT between aligned code blocks, while keeping compatibility with fault-tolerant syndrome-extraction workflows.

## Experimental Status

**Real-time fault-tolerant QEC on [[7,1,3]] color code — Ryan-Anderson et al. (2021):**
- Ten-qubit trapped-ion QCCD implementation of repeated syndrome extraction and real-time decoding
- Demonstrated dynamically protected logical memory and logical SPAM below physical SPAM
- [arXiv:2107.07505](https://arxiv.org/abs/2107.07505)

**Fault-tolerant universal logical gates with two color-code blocks — Postler et al. (2022):**
- Demonstrated fault-tolerant logical CNOT and magic-state-injection T-gate workflow
- Verified hallmark fault-tolerance advantage over non-FT implementation
- [arXiv:2111.12654](https://arxiv.org/abs/2111.12654)

**Fault-tolerant logical teleportation (transversal + lattice surgery) — Ryan-Anderson et al. (2024):**
- First FT teleportation circuits for the planar [[7,1,3]] color code on Quantinuum H2
- Reported logical process fidelities for transversal and lattice-surgery variants
- [arXiv:2404.16728](https://arxiv.org/abs/2404.16728)

**Error-corrected molecular-energy computation with color-code logical qubits — Yamamoto et al. (2025/2026):**
- End-to-end QPE for H\(_2\) using [[7,1,3]] color-code logical qubits plus real-time Steane-QEC gadgets
- Energy estimate reached \(E-E_{\mathrm{FCI}}=0.001(13)\) hartree
- [arXiv:2505.09133](https://arxiv.org/abs/2505.09133)

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Logical SPAM error | \(1.7(2)\times10^{-3}\) | Lower than reported average physical SPAM \(2.4(8)\times10^{-3}\) in the same experiment | [Ryan-Anderson et al. 2021](https://doi.org/10.1103/PhysRevX.11.041058) |
| Logical process fidelity (transversal teleportation) | \(0.975\pm0.002\) | FT logical teleportation on planar [[7,1,3]] color code | [Ryan-Anderson et al. 2024](https://doi.org/10.1126/science.adp6016) |
| Logical process fidelity (lattice-surgery teleportation) | \(0.851\pm0.009\) | Same experiment, lattice-surgery variant | [Ryan-Anderson et al. 2024](https://doi.org/10.1126/science.adp6016) |
| Logical process fidelity (Knill-style logical teleportation/QEC circuit) | \(0.989\pm0.002\) | Teleportation circuit equivalent to Knill-style QEC | [Ryan-Anderson et al. 2024](https://doi.org/10.1126/science.adp6016) |
| Molecular-energy estimation error | \(E-E_{\mathrm{FCI}}=0.001(13)\) hartree | Color-code logical-qubit QPE demonstration | [Yamamoto et al. 2025/2026](https://doi.org/10.1103/m7j3-5sk6) |

> **Note:** For this entry, metrics are reported directly from demonstrated logical-level experiments; decoder/noise-model-dependent threshold claims are intentionally omitted unless tied to a specific cited setup.

## References

### Original proposal
- H. Bombin and M. A. Martin-Delgado, "Topological Quantum Distillation," [Phys. Rev. Lett. 97, 180501 (2006)](https://doi.org/10.1103/PhysRevLett.97.180501) — [arXiv:quant-ph/0605138](https://arxiv.org/abs/quant-ph/0605138)

### Experimental demonstrations
- C. Ryan-Anderson et al., "Realization of Real-Time Fault-Tolerant Quantum Error Correction," [Phys. Rev. X 11, 041058 (2021)](https://doi.org/10.1103/PhysRevX.11.041058) — [arXiv:2107.07505](https://arxiv.org/abs/2107.07505)
- L. Postler et al., "Demonstration of fault-tolerant universal quantum gate operations," [Nature 605, 675-680 (2022)](https://doi.org/10.1038/s41586-022-04721-1) — [arXiv:2111.12654](https://arxiv.org/abs/2111.12654)
- C. Ryan-Anderson et al., "High-fidelity teleportation of a logical qubit using transversal gates and lattice surgery," [Science 385, 1327-1331 (2024)](https://doi.org/10.1126/science.adp6016) — [arXiv:2404.16728](https://arxiv.org/abs/2404.16728)
- K. Yamamoto et al., "Quantum error-corrected computation of molecular energies," [PRX Quantum (2026)](https://doi.org/10.1103/m7j3-5sk6) — [arXiv:2505.09133](https://arxiv.org/abs/2505.09133)

## Linked Papers

- [[bombin-2006-color-codes]]
- [[ryananderson-2021-realization-real-time]]
- [[postler-2022-fault-tolerant-universal-gate-operations]]
- [[ryan-anderson-2024-logical-teleportation-color-code]]
- [[yamamoto-2025-quantum-error-corrected-computation-molecular-energies]]

## Evergreen context

- [[threshold-theorem]] — color codes pursue below-threshold scaling with a different overhead profile than surface-code-first stacks.
- [[erasure-error-vs-pauli-error]] — decoder and noise model assumptions materially change performance claims for any stabilizer code family.

## Related Entries

- [[surface-code-logical-qubit]] — primary alternative topological QEC code family
- [[trapped-ion-qubit]] — platform used in key color-code demonstrations
- [[bacon-shor-code]] — contrasting subsystem-code approach to FT overhead tradeoffs
