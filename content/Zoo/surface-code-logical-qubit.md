---
title: Surface-Code Logical Qubit
entry_type: encoding
technology_family: Cross-Platform
moc_facets: [Codes]
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
last_updated: '2026-11-12'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-12
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/surface-code-logical-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-05"
figure_reviewed_at: "2026-08-05T04:32:43.526452+00:00"
---

## Figure

![[surface-code-logical-qubit-figure.png]]

## Description

A surface-code logical qubit is not a new physical modality, but a fault-tolerant logical qubit encoded across a 2D lattice of physical qubits using repeated stabilizer measurements. The surface code, introduced by Kitaev (1997) and developed for practical implementation by Fowler et al. (2012), is the leading quantum error correction architecture due to its high threshold (~1% circuit-level error rate) and requirement of only nearest-neighbor interactions on a 2D grid.

For the standard rotated planar patch, logical information is stored nonlocally across $d^2$ data qubits (for odd code distance $d$) and $d^2-1$ measurement ancillas used for syndrome extraction; other surface-code layouts have different constant factors while retaining $O(d^2)$ overhead. Errors are detected via local parity checks — X-type checks detect Z errors, and Z-type checks detect X errors — and corrected by decoding syndrome histories. Logical operators are non-contractible strings of Pauli operators spanning the patch, providing topological protection against local errors.

## Hamiltonian

In an idealized planar-code description, the code space is defined by mutually commuting X- and Z-type stabilizers (with reduced-weight checks at the boundaries):

$$A_s = \prod_{i\in s} X_i, \qquad B_p = \prod_{i\in p} Z_i$$

with commuting-projector code-Hamiltonian form:

$$H_{\mathrm{code}} = -J_X\sum_s A_s - J_Z\sum_p B_p, \qquad J_X,J_Z>0.$$

The code space $\mathcal{C}$ is the simultaneous $+1$ eigenspace of all stabilizers. With the boundary convention used here, $X_L$ connects the two smooth boundaries and $Z_L$ connects the two rough boundaries. The code distance $d$ is the minimum weight of any nontrivial logical operator. Current hardware does not obtain passive protection from $H_{\mathrm{code}}$: it realizes the same stabilizer constraints through repeated syndrome-extraction circuits, classical decoding, and Pauli-frame updates.

## Motivation

The surface code is currently the dominant QEC architecture for superconducting and trapped-ion roadmaps. Its key advantages are: a high circuit-level threshold of ~1%, compatibility with nearest-neighbor 2D qubit layouts (no long-range connectivity needed), well-understood decoder algorithms (MWPM, Union-Find), and experimental accessibility with current hardware. The primary cost is overhead: $O(d^2)$ physical qubits per logical qubit, with $d$ determined by the physical-to-threshold error ratio.

## Experimental Status

**Record surface-code memory — Sivak et al. (2026):**
- On Willow, a distance-7 surface code decoded with AlphaQubit2 reached an average logical error per cycle of $7.72(9)\times10^{-4}$ across the X and Z memory bases.
- Reinforcement-learning fine-tuning reduced logical error by about 20% after conventional expert calibration; under injected drift, joint control-and-decoder steering improved logical stability by $3.5\times$.

**Below-threshold scaling — Google Quantum AI and Collaborators (2025):**
- Demonstrated logical error suppression when scaling from distance-3 to distance-5 to distance-7 on the Willow processor.
- Achieved a $\Lambda = 2.14 \pm 0.02$ error-suppression factor per code-distance step.
- A distance-7 memory using 101 physical qubits achieved $0.143\% \pm 0.003\%$ logical error per cycle and exceeded the best constituent physical-qubit lifetime by $2.4 \pm 0.3\times$.

**Surface-code lattice surgery — Wang et al. (2026, preprint):**
- Implemented merge/split operations between two distance-3 superconducting surface-code logical qubits, prepared an error-corrected logical Bell state, and ran a two-qubit logical Deutsch–Jozsa circuit.
- Demonstrated magic-state injection and gate teleportation; the conditioned logical $R_X(\pi/4)$ fidelity was $0.943^{+0.010}_{-0.009}$.

**Cloud-accessible distance scaling — Kan et al. (2026, preprint):**
- On IBM Nighthawk r2, increasing the protected distance from 3 to 6 reduced logical error per round from $0.53\%$ to $0.24\%$ in Z memory and from $0.52\%$ to $0.22\%$ in X memory under maximum-likelihood decoding.
- The distance advantage weakened in runs extending to 150 rounds, exposing persistent correlated errors as a remaining limitation.

**Encoded logical operations — Marques et al. (2022):**
- Demonstrated repeated error detection, logical state preparation and measurement, and a universal set of encoded single-qubit gates on a distance-2 superconducting surface code.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Logical error per cycle | $7.72(9)\times10^{-4}$ | Distance-7 Willow surface-code memory, AlphaQubit2 decoder, averaged over X/Z bases | [Sivak et al. 2026](https://doi.org/10.1038/s41586-026-10759-2) |
| Error-suppression factor $\Lambda$ | $2.14 \pm 0.02$ | Improvement per code-distance step for $d=3\to5\to7$ on Willow | [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| Logical memory gain over best physical qubit | $2.4 \pm 0.3\times$ | Beyond-break-even distance-7 memory benchmark | [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| Conditioned logical $R_X(\pi/4)$ fidelity | $0.943^{+0.010}_{-0.009}$ | Magic-state injection and gate teleportation on a two-logical-qubit distance-3 lattice-surgery processor; shots with detected errors excluded | [Wang et al. 2026](https://arxiv.org/abs/2606.06598) |
| Cloud distance scaling | Z: $0.53\%\to0.24\%$; X: $0.52\%\to0.22\%$ | Per-round logical error from protected distance 3 to 6 at fixed orthogonal distance 3 | [Kan et al. 2026](https://arxiv.org/abs/2610.23840) |
| Encoded operation set | Initialization, measurement, universal 1Q logical gates | Distance-2 error-detecting superconducting surface code | [Marques et al. 2022](https://doi.org/10.1038/s41567-021-01423-9) |
| Threshold | ~1% | Canonical circuit-level threshold estimate under standard stochastic-noise assumptions | [Fowler et al. 2012](https://doi.org/10.1103/PhysRevA.86.032324) |
| Physical qubits per logical | $O(d^2)$ data plus syndrome ancillas | Standard planar-patch overhead; exact counts depend on layout and boundary convention | [Fowler et al. 2012](https://doi.org/10.1103/PhysRevA.86.032324) |

> **Note:** Memory and gate metrics here are logical-level properties of encoded information, not single-device $T_1/T_2$ values. Post-selected or detection-conditioned gate fidelities are not directly comparable to unconditional logical error rates.

## References

### Original proposal
- A. Yu. Kitaev, "Fault-tolerant quantum computation by anyons," [Ann. Phys. 303, 2 (2003)](https://doi.org/10.1016/S0003-4916(02)00018-0) — [arXiv:quant-ph/9707021](https://arxiv.org/abs/quant-ph/9707021)

### Practical implementation roadmap
- A. G. Fowler et al., "Surface codes: Towards practical large-scale quantum computation," [Phys. Rev. A 86, 032324 (2012)](https://doi.org/10.1103/PhysRevA.86.032324) — [arXiv:1208.0928](https://arxiv.org/abs/1208.0928)

### Experimental demonstrations
- J. F. Marques et al., "Logical-qubit operations in an error-detecting surface code," [Nature Physics 18, 80 (2022)](https://doi.org/10.1038/s41567-021-01423-9) — [arXiv:2102.13071](https://arxiv.org/abs/2102.13071)
- Google Quantum AI and Collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687)
- V. Sivak et al., "Reinforcement learning control of quantum error correction," [Nature 655, 879 (2026)](https://doi.org/10.1038/s41586-026-10759-2)
- Y. Wang et al., "A superconducting surface-code processor with lattice-surgery logical operations," [arXiv:2606.06598](https://arxiv.org/abs/2606.06598) (2026)
- S. Kan et al., "Demonstration of Logical Error Suppression in a Surface Code Memory on a Cloud-Accessible IBM Superconducting Processor," [arXiv:2610.23840](https://arxiv.org/abs/2610.23840) (2026)

## Linked Papers

- [[fowler-2012-surface-code-roadmap]]
- [[acharya-2025-error-correction-below]]
- [[marques-2022-logical-qubit-operations-error-detecting-surface-code]]
- [[sivak-2026-reinforcement-learning-control-qec]]
- [[wang-2026-superconducting-surface-code-lattice-surgery]]
- [[kan-2026-cloud-surface-code-error-suppression]]
- [[bacon-2006-bacon-shor]]
- [[bombin-2006-color-codes]]
- [[egan-2021-fault-tolerant-control]]
- [[hastings-2021-floquet]]
- [[kitaev-2003-fault-tolerant-computation]]
- [[kubica-2023-erasure-overhead]]
- [[panteleev-2022-asymptotically-good]]
- [[puri-2020-bias-preserving-gates]]

## Evergreen context

- [[threshold-theorem]] — the surface code is the canonical practical instantiation of the whole below-threshold scaling story.
- [[erasure-error-vs-pauli-error]] — one of the most important caveats on surface-code overhead is that its effective threshold changes dramatically once the hardware can flag loss or leakage.
- [[noise-bias-and-asymmetric-error-channels]] — explains why XZZX checks or asymmetric code distances can beat a square, depolarizing-noise design when the unflagged channel is directionally biased.
- [[quantum-hardware]] — keeps the code in the right frame: surface-code dominance is really a statement about which hardware layouts and control stacks are easiest to scale today.

## Related Entries

- [[color-code-logical-qubit]] — alternative topological code with transversal Clifford gates
- [[transmon]] — dominant physical qubit for superconducting surface code implementations
- [[trapped-ion-qubit]] — alternative physical platform for surface code QEC
- [[erasure-qubit]] — erasure conversion dramatically increases the effective code threshold
