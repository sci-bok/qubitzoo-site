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
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[fusion-based-photonic-qubit-figure.png]]

## Description

Fusion-based quantum computing (FBQC) is a photonic architecture proposed by Bartolucci et al. (2023) and developed primarily by PsiQuantum. Rather than building large entangled cluster states deterministically and then measuring them (as in standard measurement-based QC), FBQC uses small, constant-size entangled photonic resource states that are stitched together at computation time via probabilistic fusion gates.

A **Type II fusion gate** is a destructive Bell-state measurement on one photon from each of two resource states, projecting the remaining photons into a larger entangled state. Each fusion succeeds with probability $\leq 50\%$ using linear optics alone (boosted to $\sim 75\%$ with ancilla photons). The architecture is designed to tolerate this high failure rate: the resource states (e.g., 6-ring states or small graph states) are chosen so that the resulting entanglement structure remains percolated and supports fault-tolerant computation even when roughly half of all fusions fail.

The key advantage of FBQC is that it requires only constant-depth optical circuits: resource state generation is a fixed-size problem (not scaling with computation size), and fusions are local two-photon operations. This is compatible with photonic chip manufacturing, where reproducing many identical small circuits is far easier than building one large reconfigurable circuit.

## Hamiltonian

Photonic qubits are non-interacting; computation is performed through measurement. The relevant formalism is the fusion gate operation rather than a Hamiltonian.

A Type II fusion on two photonic qubits (one from each resource state) implements a projective Bell-state measurement:

$$\Pi_{\text{fusion}}^{\pm} = |\Phi^\pm\rangle\langle\Phi^\pm|$$

where $|\Phi^\pm\rangle = \frac{1}{\sqrt{2}}(|00\rangle \pm |11\rangle)$ in the dual-rail encoding.

The fusion succeeds with probability $p_{\text{success}} \leq 1/2$ (linear optics bound) or $p_{\text{success}} \leq 3/4$ with single ancilla photon boosting:

$$p_{\text{success}}^{\text{boosted}} = \frac{1}{2} + \frac{1}{4}\eta_{\text{ancilla}}$$

The resource state is a small entangled graph state:

$$|G\rangle = \prod_{(i,j) \in E} CZ_{ij} |+\rangle^{\otimes n}$$

where $E$ is the edge set of the resource graph (e.g., a 6-ring: $n=6$, $E = \{(1,2),(2,3),\ldots,(6,1)\}$).

## Motivation

Photonic quantum computing offers room-temperature operation, high clock speeds, and natural connectivity to quantum networks. However, photon-photon interactions are negligible, making deterministic two-qubit gates impossible with linear optics (KLM theorem). FBQC embraces this probabilistic nature: instead of demanding deterministic gates, it designs a fault-tolerant architecture around probabilistic fusion operations, tolerating failure rates up to $\sim50\%$ through topological redundancy in the resource state structure. This makes large-scale photonic quantum computing architecturally viable using only single-photon sources, linear optical circuits, and photon detectors — all of which are amenable to semiconductor manufacturing.

## Experimental Status

**Theoretical foundation — Bartolucci et al. (2023):**
- Introduced the FBQC architecture with fault-tolerant threshold of $\sim 50\%$ fusion failure rate, matching the linear optical bound
- Identified 6-ring resource states as minimal resource states sufficient for universal fault-tolerant FBQC
- Showed $O(1)$ optical depth per resource state, enabling chip-scale photonic manufacturing

**Topological fault tolerance — Bombin et al. (2021):**
- Demonstrated topological fault tolerance via Raussendorf lattice / foliated surface code structure surviving below-threshold fusion failures and photon loss

**Industry development — PsiQuantum:**
- Targeting $>10^6$ photonic qubits using silicon photonic chips with integrated single-photon sources and detectors
- Architecture designed for foundry-compatible semiconductor manufacturing

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Fusion success probability | ~50% (linear optics) | Up to ~75% with boosting | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Loss tolerance threshold | ~2–3% per photon | Below this photon loss rate, fault tolerance achieved | — |
| Resource state size | 6 photons (6-ring) | Minimal for fault-tolerant FBQC | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Optical depth per resource state | $O(1)$ | Constant, does not scale with computation | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Clock speed | ~GHz | Limited by photon generation and detection rates | — |
| Operating temperature | 300 K (photonic) / 1–4 K (detectors) | SNSPDs require cryogenics | — |
| Target qubit count | >10⁶ | PsiQuantum silicon photonic platform | — |

## References

### Original proposal
- S. Bartolucci et al., "Fusion-based quantum computation," [Nat. Commun. 14, 912 (2023)](https://doi.org/10.1038/s41467-023-36493-1)

### Fault tolerance theory
- H. Bombin et al., "Interleaving: Modular architectures for fault-tolerant photonic quantum computing," [arXiv:2101.09310 (2021)](https://arxiv.org/abs/2101.09310)

## Linked Papers

- [[bartolucci-2023-fbqc]]
- [[bombin-2021-interleaving]]

## Related Entries

- [[dual-rail-photonic-qubit]] — underlying photonic encoding
- [[time-bin-photonic-qubit]] — alternative photonic qubit compatible with FBQC
- [[surface-code-logical-qubit]] — error correction code used in FBQC
- [[color-code-logical-qubit]] — alternative topological code
