---
title: Xmon
entry_type: qubit
technology_family: Superconducting
status: seed
seed_id: '8'
seed_source: qubitzoo-airtable
first_proposed_year: 2013
keywords:
- xmon
- transmon variant
- cross-shaped
- google
- superconducting qubit
- planar
influence_score: 0.72
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
figure_reviewed: true
---


## Description

The Xmon is a planar transmon variant developed by the Martinis group (later Google Quantum AI) featuring a cross-shaped capacitor geometry. Introduced by Barends et al. (2013), the "+" shape provides four natural coupling points — one for readout and up to three for nearest-neighbor qubit-qubit coupling — enabling a scalable 2D grid layout.

The Xmon shares the same physics as the transmon ($E_J/E_C \gg 1$, charge-insensitive regime) but its geometry is optimized for multi-qubit integration. Each arm of the cross can capacitively couple to a bus resonator or neighboring Xmon, and the design minimizes spurious cross-talk. The qubit frequency is typically tunable via a SQUID loop (split junction), enabling parametric two-qubit gates (e.g., $i$SWAP or CZ via flux pulses).

The Xmon was the qubit used in Google's Sycamore processor (2019 quantum supremacy demonstration) and subsequent Willow processor.


## Figure

![[xmon-figure.png]]

## Hamiltonian

Identical to the transmon:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J(\Phi_\text{ext})\cos\hat{\varphi}$$

For the tunable variant (asymmetric SQUID):

$$E_J(\Phi_\text{ext}) = E_{J,\Sigma}\sqrt{\cos^2\left(\pi\frac{\Phi_\text{ext}}{\Phi_0}\right) + d^2\sin^2\left(\pi\frac{\Phi_\text{ext}}{\Phi_0}\right)}$$

where $E_{J,\Sigma} = E_{J1} + E_{J2}$ and $d = (E_{J1} - E_{J2})/E_{J,\Sigma}$ is the junction asymmetry.

## Motivation

Earlier transmon designs used coaxial or lumped-element capacitors that did not naturally tile into 2D arrays. The cross geometry solves the layout problem: it provides controllable coupling to 4 neighbors in a square lattice while maintaining low crosstalk and individual readout.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 20–100 μs | Planar geometry | [Barends 2013](https://doi.org/10.1103/PhysRevLett.111.080502) |
| 1Q gate fidelity | 99.9%+ | Sycamore/Willow benchmarks | — |
| 2Q gate fidelity | 99.5–99.9% | CZ or $i$SWAP via flux pulse | — |
| Anharmonicity | −200 to −250 MHz | Same as transmon | — |
| Transition frequency | 4–7 GHz | Tunable via flux | — |
| Coupling to neighbors | 4 (cross arms) | Square lattice layout | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Related Entries

- [[transmon]]
- [[gmon]]
- [[circuit-qed]]
