---
title: Xmon
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2013
first_demonstrated_year: 2013
keywords:
- xmon
- transmon variant
- cross-shaped
- google
- superconducting qubit
- planar
influence_score: 0.72
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
figure_reviewed: true
---

## Figure

![[xmon-figure.png]]

## Description

The Xmon is a planar transmon variant developed by the Martinis group (later Google Quantum AI) featuring a cross-shaped capacitor geometry. Introduced by Barends et al. (2013), the "+" shape provides four natural coupling points — one for readout and up to three for nearest-neighbor qubit-qubit coupling — enabling a scalable 2D grid layout.

The Xmon shares the same physics as the transmon ($E_J/E_C \gg 1$, charge-insensitive regime) but its geometry is optimized for multi-qubit integration. Each arm of the cross can capacitively couple to a bus resonator or neighboring Xmon, and the design minimizes spurious cross-talk. The qubit frequency is typically tunable via a SQUID loop (split junction), enabling parametric two-qubit gates (e.g., $i$SWAP or CZ via flux pulses).

The Xmon was the qubit used in Google's Sycamore processor (2019 quantum supremacy demonstration) and subsequent Willow processor.

## Hamiltonian

Identical to the transmon:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J(\Phi_\text{ext})\cos\hat{\varphi}$$

For the tunable variant (asymmetric SQUID):

$$E_J(\Phi_\text{ext}) = E_{J,\Sigma}\sqrt{\cos^2\left(\pi\frac{\Phi_\text{ext}}{\Phi_0}\right) + d^2\sin^2\left(\pi\frac{\Phi_\text{ext}}{\Phi_0}\right)}$$

where $E_{J,\Sigma} = E_{J1} + E_{J2}$ and $d = (E_{J1} - E_{J2})/E_{J,\Sigma}$ is the junction asymmetry.

## Motivation

Earlier transmon designs used coaxial or lumped-element capacitors that did not naturally tile into 2D arrays. The cross geometry solves the layout problem: it provides controllable coupling to 4 neighbors in a square lattice while maintaining low crosstalk and individual readout. This geometry was the key enabler for scaling to the 53-qubit Sycamore and 72-qubit Willow processors.

## Experimental Status

**First demonstration — Barends et al. (2013):**
- Introduced the cross-shaped capacitor geometry for planar transmon qubits
- Demonstrated $T_1$ of 20–40 μs in the initial devices
- Showed compatibility with scalable 2D grid layouts

**Surface code threshold — Barends et al. (2014):**
- Demonstrated single-qubit gate fidelity of 99.92% and two-qubit gate fidelity of 99.4% via randomized benchmarking
- First superconducting qubit system to reach the surface code fault-tolerance threshold
- Five-qubit device with simultaneous high-fidelity single- and two-qubit gates

**Quantum supremacy — Arute et al. (2019):**
- 53-qubit Sycamore processor using Xmon qubits
- Average single-qubit gate fidelity 99.84%, average CZ fidelity 99.4%
- Completed a random circuit sampling task in 200 seconds that would take classical supercomputers ~10,000 years

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 20–100 μs | Planar geometry | [Barends et al. 2013](https://doi.org/10.1103/PhysRevLett.111.080502) |
| 1Q gate fidelity | 99.84–99.9%+ | Sycamore RB: 99.84% avg; Willow improved | [Barends et al. 2014](https://doi.org/10.1038/nature13171), [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |
| 2Q gate fidelity | 99.4–99.9% | CZ or $i$SWAP via flux pulse; Sycamore 99.4% CZ avg | [Barends et al. 2014](https://doi.org/10.1038/nature13171), [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |
| Anharmonicity | −200 to −250 MHz | Same as transmon | — |
| Transition frequency | 4–7 GHz | Tunable via flux | — |
| Coupling to neighbors | 4 (cross arms) | Square lattice layout | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal / first demonstration
- R. Barends et al., "Coherent Josephson Qubit Suitable for Scalable Quantum Integrated Circuits," [Phys. Rev. Lett. 111, 080502 (2013)](https://doi.org/10.1103/PhysRevLett.111.080502) — [arXiv:1304.2322](https://arxiv.org/abs/1304.2322)

### Experimental demonstrations
- R. Barends et al., "Superconducting quantum circuits at the surface code threshold for fault tolerance," [Nature 508, 500 (2014)](https://doi.org/10.1038/nature13171) — [arXiv:1402.4848](https://arxiv.org/abs/1402.4848)
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505 (2019)](https://doi.org/10.1038/s41586-019-1666-5) — [arXiv:1910.11333](https://arxiv.org/abs/1910.11333)

## Linked Papers

- [[barends-2013-xmon]]

## Related Entries

- [[transmon]] — parent qubit type
- [[gmon]] — related Google qubit variant with tunable coupling
- [[circuit-qed]] — underlying hardware platform
