---
title: Heavy Fluxonium Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2019
first_demonstrated_year: 2019
keywords:
- heavy fluxonium
- superinductance
- disjoint support
- protected qubit
- superconducting
influence_score: 0.80
last_updated: '2026-04-02'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-04-02
figure_reviewed: false
---

## Figure

![[heavy-fluxonium-qubit-figure.png]]

## Description

Heavy fluxonium is a fluxonium regime engineered for maximal coherence by increasing effective mass in phase space (large capacitance, moderate $E_J/E_C$), producing wavefunctions with disjoint support and suppressed relaxation matrix elements.

Compared with conventional fluxonium, heavy fluxonium prioritizes coherence and error bias over speed, and has demonstrated millisecond-scale $T_1$ in sweet-spot operation.

## Hamiltonian

Same base fluxonium Hamiltonian:

$$H = 4E_C n^2 - E_J\cos\varphi + \frac{1}{2}E_L(\varphi - 2\pi\Phi_{ext}/\Phi_0)^2$$

Heavy-fluxonium regime typically uses lower $E_C$ and operating points where wavefunctions are localized in different wells, suppressing dipole matrix elements.

## Motivation

Heavy fluxonium targets a "hardware-protected" operating regime where coherence is improved by circuit design rather than solely by control optimization. By engineering large effective mass in phase space and operating at sweet spots, matrix elements for dominant noise channels are strongly suppressed. This architecture is a practical bridge between conventional superconducting qubits and more strongly protected designs such as 0-π.

## Experimental Status

**High-coherence fluxonium — Nguyen et al. (2019):**
- Demonstrated $T_1$ in the 0.5–1.5 ms range at the half-flux-quantum sweet spot
- Large anharmonicity (GHz-scale) enables selective control with low leakage
- First-order flux-noise insensitivity at the sweet spot

**Millisecond coherence — Somoroff et al. (2023):**
- Achieved millisecond-scale $T_1$ and $T_2$ coherence times
- Single-qubit gate fidelity exceeding 99.9%
- Confirmed heavy fluxonium as a strong candidate for low-error bosonic/encoded hybrid stacks

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 0.5–1.5 ms | Sweet-spot operation | [Nguyen et al. 2019](https://doi.org/10.1103/PhysRevX.9.041041) |
| 1Q gate fidelity | 99.9%+ | Microwave control | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| 2Q gate fidelity (CZ) | 99.2% | Conventional fluxonium regime; heavy-regime 2Q gates are active research frontier | [Ficheux et al. 2021](https://doi.org/10.1103/PhysRevX.11.021026) |
| Anharmonicity | GHz-scale | Much larger than transmon | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal / first demonstration
- L. B. Nguyen et al., "High-Coherence Fluxonium Qubit," [Phys. Rev. X 9, 041041 (2019)](https://doi.org/10.1103/PhysRevX.9.041041) — [arXiv:1907.12333](https://arxiv.org/abs/1907.12333)

### Experimental demonstrations
- A. Somoroff et al., "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. 130, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001) — [arXiv:2301.09549](https://arxiv.org/abs/2301.09549)

## Linked Papers

- [[lin-2018-heavy-fluxonium]]

## Related Entries

- [[fluxonium]] — parent qubit type
- [[0-pi-qubit]] — related protected superconducting design
- [[transmon]] — conventional superconducting qubit for comparison
