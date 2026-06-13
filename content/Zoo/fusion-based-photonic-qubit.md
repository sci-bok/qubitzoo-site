---
title: Fusion-Based Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: proposed
figure_reviewed: true
first_proposed_year: 2021
keywords:
- fusion-based quantum computing
- FBQC
- photonic qubit
- PsiQuantum
- fusion gate
- resource state
- Bell-state measurement
- linear optical
- fault tolerance
influence_score: 0.72
last_updated: '2026-06-13'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-06-13
---

## Figure

![[fusion-based-photonic-qubit-figure.png]]

## Description

Fusion-based quantum computing (FBQC) is a photonic fault-tolerant architecture proposed by Bartolucci et al. (2023), building on fusion-gate primitives from Browne and Rudolph (2005) and the modular interleaving architecture of Bombín et al. (2021). Rather than preparing one monolithic cluster state offline, FBQC repeatedly generates small constant-size graph-state resource states and stitches them together during computation with heralded fusion measurements.

A **Type-II fusion** is a destructive two-photon Bell-basis measurement on one qubit from each resource state. When it succeeds, the measured photons are removed and the remaining graph-state neighborhoods are joined, so the computation grows through a sequence of local graph-state merge operations rather than deterministic two-qubit gates. Passive linear optics bounds the ideal success probability to 50%, while ancilla-assisted Bell-state-measurement schemes can raise that ceiling to 75%.

The architectural point of FBQC is that fault tolerance is engineered around those nondeterministic but heralded events. Small resource states such as 6-ring graphs are chosen so that the resulting entanglement network still percolates and supports topological error correction even with substantial fusion failure and photon loss. This keeps the optical depth per module constant and pushes the hard scaling problem into source quality, switching, and loss management instead of into ever-larger interferometers.

## Hamiltonian

There is no native interacting-qubit Hamiltonian in FBQC. Photons propagate under passive linear-optical mode transformations,

$$H_{\mathrm{LO}} = \sum_{ij} h_{ij}\, a_i^\dagger a_j,$$

while the computational model itself is specified by graph-state stabilizers plus heralded fusion measurements.

A resource state is a small graph state,

$$|G\rangle = \prod_{(i,j)\in E} CZ_{ij}\,|+\rangle^{\otimes n},$$

with stabilizers

$$K_i = X_i \prod_{j\in N(i)} Z_j.$$

A successful Type-II fusion consumes one qubit from each of two resource states and performs a Bell-basis measurement on that pair. In stabilizer language, it is most cleanly described as a joint parity measurement, equivalent up to local Cliffords and Pauli-frame updates to measuring commuting two-qubit observables such as $X_aX_b$ and $Z_aZ_b$, thereby merging the neighboring graph-state structure. The exact optical circuit sets which Bell outcomes are heralded, but the important computational fact is that success and failure are both flagged events rather than hidden coherent errors.

For passive linear optics the ideal Bell-measurement success probability is 50%; boosted ancilla-assisted schemes can reach 75%, and the FBQC threshold analysis is built around that nondeterministic but heralded operating point rather than around deterministic entangling gates.

## Motivation

Photonic quantum computing offers room-temperature operation, high clock speeds, and natural connectivity to quantum networks. However, photon-photon interactions are negligible, making deterministic two-qubit gates impossible with linear optics (KLM theorem). FBQC embraces this probabilistic nature: instead of demanding deterministic gates, it designs a fault-tolerant architecture around probabilistic fusion operations, tolerating failure rates up to $\sim50\%$ through topological redundancy in the resource state structure. This makes large-scale photonic quantum computing architecturally viable using only single-photon sources, linear optical circuits, and photon detectors — all of which are amenable to semiconductor manufacturing.

## Experimental Status

**Foundational fusion primitive — Browne and Rudolph (2005):**
- Introduced Type-I and Type-II fusion operations as resource-efficient graph-state building blocks for linear-optical quantum computing.

**Architecture proposal — Bartolucci et al. (2023):**
- Introduced FBQC as a modular fault-tolerant photonic architecture whose fusion-failure threshold is compatible with the 50% passive-linear-optics Bell-measurement limit.
- Identified small constant-size resource states, including 6-ring states, that suffice for universal fault-tolerant FBQC.
- Showed $O(1)$ optical depth per resource-state factory, making the architecture attractive for chip-scale replication.

**Modular fault tolerance — Bombín et al. (2021):**
- Developed interleaving modules that combine resource-state generators, fusion devices, and fiber delays into a scalable surface-code-compatible photonic architecture.
- Found that kilometer-scale delay modules can tolerate photon-loss rates above 2% in addition to fiber-delay loss while supporting distance-35 logical qubits.

**Threshold refinement — Melkozerov et al. (2024):**
- Compared multiple linear-optical Bell-state-measurement circuits as FBQC fusion gadgets.
- Converted abstract loss thresholds into component-level optical-loss requirements for sources, circuits, and detectors.

**Emitter-tailored FBQC — Chan et al. (2025):**
- Adapted FBQC resource states and decoding assumptions to deterministic quantum-emitter sources.
- Reported thresholds of about 8% photon loss and 4% emitter-to-emitter distinguishability mismatch in that hardware-specific regime.

**Industry development — PsiQuantum and related photonic efforts:**
- Pursue foundry-compatible silicon-photonic hardware with integrated sources, switching, and cryogenic detectors.
- Treat source quality, loss, and high-throughput fusion hardware as the central scaling bottlenecks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Bell-measurement success probability | 50% passive, up to 75% boosted | Hardware ceiling for Type-II fusion with linear optics | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Original FBQC loss threshold | ~1% total loss per fusion | Architecture-level threshold depends on where loss enters the fusion network | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Interleaved-module loss tolerance | >2% photon loss plus fiber-delay loss | From modular interleaving analysis with kilometer-scale delays | [Bombín et al. 2021](https://arxiv.org/abs/2103.08612) |
| Emitter-tailored photon-loss threshold | ~8% | Hardware-specific threshold for emitter-driven FBQC | [Chan et al. 2025](https://doi.org/10.1103/PRXQuantum.6.020304) |
| Resource state size | 6 photons (6-ring) | Minimal universal fault-tolerant resource state in the original proposal | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Optical depth per resource-state factory | $O(1)$ | Constant, does not scale with computation size | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Operating temperature | 300 K optics, 1–4 K detectors | Photonic routing is room-temperature; SNSPDs are cryogenic | — |
| Industrial scaling target | >10⁶ physical photonic qubits | Public photonic-roadmap target, not yet demonstrated | — |

## References

### Foundational fusion primitive
- D. E. Browne and T. Rudolph, "Resource-Efficient Linear Optical Quantum Computation," [Phys. Rev. Lett. 95, 010501 (2005)](https://doi.org/10.1103/PhysRevLett.95.010501)

### Architecture proposals
- S. Bartolucci et al., "Fusion-based quantum computation," [Nat. Commun. 14, 912 (2023)](https://doi.org/10.1038/s41467-023-36493-1)
- H. Bombín et al., "Interleaving: Modular architectures for fault-tolerant photonic quantum computing," [arXiv:2103.08612 (2021)](https://arxiv.org/abs/2103.08612)

### Recent threshold and hardware updates
- A. Melkozerov, A. Avanesov, I. Dyakonov, and S. Straupe, "Analysis of optical loss thresholds in the fusion-based quantum computing architecture," [APL Quantum 1, 036119 (2024)](https://doi.org/10.1063/5.0214728)
- M. L. Chan et al., "Tailoring Fusion-Based Photonic Quantum Computing Schemes to Quantum Emitters," [PRX Quantum 6, 020304 (2025)](https://doi.org/10.1103/PRXQuantum.6.020304)

## Linked Papers

- [[bartolucci-2023-fbqc]]
- [[bombin-2021-interleaving]]
- [[browne-2005-resource-efficient-linear-optical]]
- [[melkozerov-2024-optical-loss-thresholds-fbqc]]
- [[chan-2025-tailoring-fbqc-quantum-emitters]]

## Evergreen context

- [[threshold-theorem]] — FBQC is fundamentally a threshold-engineering answer to the 50% linear-optics fusion limit, not just a new photonic layout.
- [[erasure-error-vs-pauli-error]] — photon loss and failed fusions matter because they arrive as structured, often flagged failure modes that the decoder and resource lattice are explicitly built to absorb.
- [[noise-bias-and-asymmetric-error-channels]] — the architecture only works if those dominant failure channels stay sufficiently biased and interpretable, rather than washing out into generic depolarizing noise.

## Related Entries

- [[dual-rail-photonic-qubit]] — underlying photonic encoding used by most LOQC and FBQC proposals
- [[photonic-cluster-state-mbqc-qubit]] — direct graph-state and fusion-gate predecessor architecture
- [[time-bin-photonic-qubit]] — alternative photonic encoding compatible with fusion networks
- [[surface-code-logical-qubit]] — topological code family most often used to analyze FBQC thresholds
- [[color-code-logical-qubit]] — alternative topological-code perspective for lattice-surgery style constructions
