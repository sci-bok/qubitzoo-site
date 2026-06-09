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
last_updated: '2026-06-09'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-06-09
figure_reviewed: true
---

## Figure

![[xmon-figure.png]]

## Description

The Xmon is a planar transmon variant developed by the Martinis group (later Google Quantum AI) featuring a cross-shaped capacitor geometry. Introduced by Barends et al. (2013), the "+" shape provides dedicated ports for readout, microwave drive, flux bias, and nearest-neighbor coupling, making it easy to tile into a scalable 2D grid layout.

The Xmon shares the same physics as the transmon ($E_J/E_C \gg 1$, charge-insensitive regime) but its geometry is optimized for multi-qubit integration. The large cross-shaped shunt capacitor suppresses radiative loss and provides clean wiring access, and the original Barends et al. implementation was a planar tunable transmon using a split-junction SQUID. The arms of the cross act as capacitive access pads for readout, XY drive, flux control, and nearest-neighbor coupling. In later Google processors, this Xmon-lineage qubit island was often paired with separate tunable couplers rather than relying on bare fixed capacitive coupling alone.

The Xmon was the core qubit geometry behind Google's five-qubit surface-code-threshold device, the 53-qubit Sycamore processor, and the later 105-qubit Willow processor.

## Hamiltonian

Identical to the transmon:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J(\Phi_\text{ext})\cos\hat{\varphi}$$

For the tunable variant (asymmetric SQUID):

$$E_J(\Phi_\text{ext}) = E_{J,\Sigma}\sqrt{\cos^2\left(\pi\frac{\Phi_\text{ext}}{\Phi_0}\right) + d^2\sin^2\left(\pi\frac{\Phi_\text{ext}}{\Phi_0}\right)}$$

where $E_{J,\Sigma} = E_{J1} + E_{J2}$ and $d = (E_{J1} - E_{J2})/E_{J,\Sigma}$ is the junction asymmetry. This standard expression assumes negligible SQUID-loop inductance.

## Motivation

Earlier transmon designs used coaxial or lumped-element capacitors that did not naturally tile into 2D arrays. The cross geometry solves the layout problem by exposing separate ports that can be assigned to readout, XY drive, Z flux bias, and one or more nearest-neighbor couplers while maintaining low crosstalk. This geometry was a key enabler for scaling to the 53-qubit Sycamore and 105-qubit Willow processors.

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

**Below-threshold QEC milestone — Google Quantum AI and Collaborators (2025):**
- 105-qubit Willow processor using Xmon-lineage tunable transmons with separate tunable couplers
- Demonstrated below-threshold surface-code operation and exponential logical-error suppression with code distance
- Reported median CZ fidelities of 99.7–99.85% in the deployed processor stack

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 20–44 μs | Initial planar tunable Xmon devices in Barends et al. 2013 | [Barends et al. 2013](https://doi.org/10.1103/PhysRevLett.111.080502) |
| 1Q gate fidelity | 99.84–99.92% | Five-qubit Xmon: 99.92%; Sycamore average: 99.84% | [Barends et al. 2014](https://doi.org/10.1038/nature13171), [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |
| 2Q gate fidelity | 99.4–99.85% | Five-qubit Xmon: 99.4%; Willow-era Xmon-lineage stack with separate tunable couplers: 99.7–99.85% median CZ | [Barends et al. 2014](https://doi.org/10.1038/nature13171), [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5), [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |
| Demonstrated processor scale | 5, 53, 105 qubits | Surface-code-threshold chip, Sycamore, and Willow | [Barends et al. 2014](https://doi.org/10.1038/nature13171), [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5), [Google Quantum AI and Collaborators 2025](https://doi.org/10.1038/s41586-024-08449-y) |

## References

### Original proposal / first demonstration
- R. Barends et al., "Coherent Josephson Qubit Suitable for Scalable Quantum Integrated Circuits," [Phys. Rev. Lett. 111, 080502 (2013)](https://doi.org/10.1103/PhysRevLett.111.080502) — [arXiv:1304.2322](https://arxiv.org/abs/1304.2322)

### Experimental demonstrations
- R. Barends et al., "Superconducting quantum circuits at the surface code threshold for fault tolerance," [Nature 508, 500 (2014)](https://doi.org/10.1038/nature13171) — [arXiv:1402.4848](https://arxiv.org/abs/1402.4848)
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505 (2019)](https://doi.org/10.1038/s41586-019-1666-5) — supplementary information on [arXiv:1910.11333](https://arxiv.org/abs/1910.11333)
- Google Quantum AI and Collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687)

## Linked Papers

- [[barends-2013-xmon]]
- [[barends-2014-superconducting-circuits-surface]]
- [[arute-2019-supremacy-programmable-superconducting]]
- [[acharya-2025-error-correction-below]]

## Evergreen context

- [[charge-noise-sweet-spot]] — the Xmon inherits the transmon strategy of buying coherence by flattening charge sensitivity, then spends the saved robustness on a scalable planar layout.
- [[josephson-junction-as-nonlinear-element]] — the cross capacitor changes packaging, not the underlying source of anharmonicity: the Josephson cosine still does the qubit-making work.
- [[threshold-theorem]] — Xmon mattered historically because it was one of the first planar superconducting stacks to pair coherence and gate fidelities in the range needed for surface-code scaling.

## Related Entries

- [[transmon]] — parent qubit type
- [[gmon]] — related Google qubit variant with tunable coupling
- [[tunable-coupler]] — coupling element used in later Xmon-lineage processors
- [[circuit-qed]] — underlying hardware platform
- [[qubit-readout]] — dedicated readout arm and resonator integration
