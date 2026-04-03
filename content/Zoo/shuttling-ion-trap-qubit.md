---
title: Shuttling Ion-Trap Qubit (QCCD)
entry_type: infrastructure
technology_family: Trapped Ion
status: demonstrated
first_proposed_year: 2002
first_demonstrated_year: 2005
keywords:
- ion trap
- qccd
- shuttling
- segmented trap
- modular scaling
influence_score: 0.75
last_updated: '2026-03-21'
generated_by: scibok-curation
verified_by: scibok-manual-2026-03-21
figure_reviewed: true
---

## Figure

![[shuttling-ion-trap-qubit-figure.png]]

## Description

QCCD (Quantum Charge-Coupled Device) architectures scale trapped-ion quantum processors by physically transporting ions between segmented trap zones: memory, interaction, and readout regions. Rather than keeping very long ion chains (which suffer mode crowding and poor gate addressing), shuttling keeps chains short and composes operations through transport.

The key innovation is that two-qubit gates only need to be performed in dedicated interaction zones with optimized laser or microwave access, while idle qubits are stored in quiet memory zones with long coherence. Ions are moved between zones by time-varying DC voltages on segmented electrodes, passing through T-junctions and X-junctions for routing.

This architecture is central to Quantinuum's H-series processors and many trapped-ion fault-tolerance roadmaps.

## Hamiltonian

Each interaction zone follows standard trapped-ion Hamiltonians; shuttling adds time-dependent trap potentials:

$$H(t)=\sum_i\left[\frac{p_i^2}{2m}+V_i(x_i,t)\right]+H_{\text{int}}$$

with $V_i(x,t)$ engineered to keep motional excitation low during transport.

## Motivation

QCCD shuttling addresses the core scaling problem of trapped-ion systems: long chains become difficult to control due to mode crowding and transport bottlenecks. Segmented transport allows architectures to keep local interaction zones small while scaling globally through movement, routing, and scheduling. This separates the connectivity problem (routing) from the gate quality problem (local interactions), enabling each to be optimized independently.

## Experimental Status

**Original proposal — Kielpinski, Monroe, and Wineland (2002):**
- Proposed the QCCD architecture for large-scale ion-trap quantum computing
- Described segmented trap zones with ion transport between memory, interaction, and readout regions

**High-fidelity transport demonstrations:**
- Multi-zone junction transport with $< 1$ phonon added motional excitation (optimized shuttling)
- Transport speeds of 10–100 μs per hop demonstrated across multiple groups

**Quantinuum H-series processors — Moses et al. (2023):**
- Race-track trapped-ion quantum processor implementing full QCCD architecture
- Two-qubit gate fidelity exceeding 99% in interaction zones
- QCCD naturally supports memory/interaction/readout zone specialization
- Demonstrated the viability of QCCD for fault-tolerant quantum computing

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Transport speed | 10–100 μs / hop | Device dependent | — |
| Added motional excitation | <1 phonon (optimized) | Key transport quality metric | — |
| 2Q gate fidelity | 99%+ | In interaction zones | [Moses et al. 2023](https://doi.org/10.1103/PhysRevX.13.041052) |
| Main scaling bottleneck | Transport scheduling + heating | Architecture-level challenge | — |

## References

### Original proposal
- D. Kielpinski, C. Monroe, and D. J. Wineland, "Architecture for a large-scale ion-trap quantum computer," [Nature 417, 709 (2002)](https://doi.org/10.1038/nature00784)

### Experimental demonstrations
- S. A. Moses et al., "A Race-Track Trapped-Ion Quantum Processor," [Phys. Rev. X 13, 041052 (2023)](https://doi.org/10.1103/PhysRevX.13.041052) — [arXiv:2305.03828](https://arxiv.org/abs/2305.03828)

## Linked Papers

- [[kielpinski-2002-shuttling]]

## Related Entries

- [[trapped-ion-qubit]] — parent qubit platform
- [[cirac-zoller-gate]] — foundational trapped-ion gate scheme
