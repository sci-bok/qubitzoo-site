---
title: Heavy Fluxonium Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2019
keywords:
- heavy fluxonium
- superinductance
- disjoint support
- protected qubit
- superconducting
influence_score: 0.8
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

Heavy fluxonium is a fluxonium regime engineered for maximal coherence by increasing effective mass in phase space (large capacitance, moderate $E_J/E_C$), producing wavefunctions with disjoint support and suppressed relaxation matrix elements.

Compared with conventional fluxonium, heavy fluxonium prioritizes coherence and error bias over speed, and has demonstrated millisecond-scale $T_1$ in sweet-spot operation.


## Figure

![[heavy-fluxonium-qubit-figure.png]]

## Hamiltonian

Same base fluxonium Hamiltonian:

$$H = 4E_C n^2 - E_J\cos\varphi + \frac{1}{2}E_L(\varphi - 2\pi\Phi_{ext}/\Phi_0)^2$$

Heavy-fluxonium regime typically uses lower $E_C$ and operating points where wavefunctions are localized in different wells, suppressing dipole matrix elements.

## Motivation

Heavy fluxonium targets a "hardware-protected" operating regime where coherence is improved by circuit design rather than solely by control optimization. By engineering large effective mass in phase space and operating at sweet spots, matrix elements for dominant noise channels are strongly suppressed. This architecture is a practical bridge between conventional superconducting qubits and more strongly protected designs such as 0-π.

## Key Findings

- Millisecond-scale $T_1$ has been reported in heavy-fluxonium-like parameter regimes.
- Large anharmonicity enables selective control with low leakage.
- Sweet-spot operation reduces flux-noise sensitivity to first order.
- Heavy fluxonium is a strong candidate for low-error bosonic/encoded hybrid stacks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 0.5–1.5 ms | Sweet-spot operation | [Nguyen et al. 2019](https://doi.org/10.1103/PhysRevX.9.041041) |
| 1Q fidelity | 99.9%+ | Microwave control | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| Anharmonicity | GHz-scale | Much larger than transmon | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Linked Papers
- [[lin-2018-heavy-fluxonium]]

## Related Entries

- [[fluxonium]]
- [[0-pi-qubit]]
- [[transmon]]
