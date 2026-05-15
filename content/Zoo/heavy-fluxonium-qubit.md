---
title: Heavy Fluxonium Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2018
first_demonstrated_year: 2018
keywords:
- heavy fluxonium
- superinductance
- selection-rule engineering
- protected qubit
- superconducting
influence_score: 0.80
last_updated: '2026-05-15'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-05-15
figure_reviewed: true
---

## Figure

![[heavy-fluxonium-qubit-figure.png]]

## Description

Heavy fluxonium is the large-capacitance, low-$E_C$ regime of fluxonium, typically operated near the half-flux-quantum sweet spot $\Phi_{\mathrm{ext}} \approx \Phi_0/2$. It keeps the same superinductor-plus-small-junction circuit as ordinary fluxonium, but pushes deeper into a regime where the low-lying states are separated by very small charge and flux matrix elements while retaining large anharmonicity.

The key protection mechanism is not that the qubit is immune to every noise channel. Rather, in a localized-well basis near $\Phi_0/2$, the relevant wavefunctions have exponentially small overlap, so specific relaxation matrix elements such as $\langle 0|\hat n|1\rangle$ can become strongly suppressed. At the exact sweet spot, the true energy eigenstates are the symmetric and antisymmetric superpositions of those localized states. This combination of sweet-spot operation, suppressed matrix elements, and strong anharmonicity has enabled millisecond-scale coherence, at the cost of lower transition frequencies and more demanding gate/readout engineering.

## Hamiltonian

Heavy fluxonium uses the standard fluxonium Hamiltonian,

$$H = 4E_C \hat n^2 - E_J \cos \hat\varphi + \frac{1}{2} E_L \left(\hat\varphi - 2\pi \Phi_{\mathrm{ext}}/\Phi_0\right)^2,$$

with $E_J \gg E_C \gg E_L$ in a typical heavy-fluxonium device. The larger shunt capacitance lowers $E_C$, increasing the effective mass for motion in phase space and reducing tunnel splittings and dipole matrix elements.

Near $\Phi_{\mathrm{ext}} = \Phi_0/2$, the potential forms a double well. The localized left- and right-well states provide the intuitive semiclassical picture, but the qubit eigenstates at the exact sweet spot are even/odd superpositions split by the tunneling amplitude. The protection comes from small matrix elements of the dominant relaxation operators, not from literally storing the computational basis as two perfectly isolated wells at all flux biases.

## Motivation

Heavy fluxonium is an experimentally realized form of hardware protection inside the superconducting-circuit toolbox. It aims to suppress relaxation by design, through selection rules and disjoint-support physics, instead of relying only on better materials or pulse shaping. That makes it an attractive bridge between conventional fluxonium and more aggressively protected superconducting encodings such as 0-π, while preserving a concrete path to microwave control and circuit-QED integration.

## Experimental Status

**Selection-rule-protected heavy fluxonium — Lin et al. (2018):**
- Demonstrated direct suppression of energy decay through transition-matrix-element engineering in a heavy-fluxonium device.
- Reached millisecond-class energy-relaxation times at fixed qubit frequency, establishing the core protection mechanism experimentally.
- Showed that forbidden qubit transitions can still be read out and controlled through higher allowed transitions.

**High-coherence fluxonium baseline — Nguyen et al. (2019):**
- Established reproducible high-coherence fluxonium operation at the half-flux sweet spot.
- Reported $T_2^{\mathrm{echo}} > 100\,\mu\mathrm{s}$ across devices, with one device exceeding $300\,\mu\mathrm{s}$.
- Provided the materials/fabrication baseline that heavy-fluxonium devices subsequently built on.

**Millisecond coherence — Somoroff et al. (2023):**
- Reached $T_2^* = 1.48 \pm 0.13\,\mathrm{ms}$ in a fluxonium device in the heavy protected regime.
- Reported average single-qubit gate fidelity above $99.99\%$.
- Strengthened the case that heavy fluxonium is a serious low-error superconducting-qubit architecture rather than a one-off coherence curiosity.

**Two-qubit logic in the low-frequency fluxonium family — Ficheux et al. (2021):**
- Demonstrated a microwave-activated CZ gate with fidelity about $99.2\%$ on low-frequency fluxoniums.
- Important caveat: this establishes entangling-gate viability for the low-frequency fluxonium family, but not yet a millisecond-coherence heavy-fluxonium two-qubit record on the same device class.

No peer-reviewed 2024-2026 heavy-fluxonium-specific coherence or gate benchmark clearly superseding Somoroff et al. (2023) was located during this audit. Recent fluxonium-family developments such as integer fluxonium and flux-trapping fluxonium are important neighboring variants, but they do not directly replace the heavy-fluxonium benchmark story.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | up to 1.5 ms | Protected heavy-fluxonium relaxation time near the sweet spot | [Lin et al. 2018](https://doi.org/10.1103/PhysRevLett.120.150503) |
| $T_2^*$ | $1.48 \pm 0.13$ ms | Ramsey coherence in the heavy protected regime | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| 1Q gate fidelity | $> 99.99\%$ | Average single-qubit gate fidelity | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| 2Q gate fidelity (CZ) | $99.2\%$ | Low-frequency fluxonium family result, not yet a same-device millisecond-heavy benchmark | [Ficheux et al. 2021](https://doi.org/10.1103/PhysRevX.11.021026) |

## References

### Experimental demonstrations
- Y.-H. Lin et al., "Demonstration of Protection of a Superconducting Qubit from Energy Decay," [Phys. Rev. Lett. 120, 150503 (2018)](https://doi.org/10.1103/PhysRevLett.120.150503) — [arXiv:1705.07873](https://arxiv.org/abs/1705.07873)
- L. B. Nguyen et al., "High-Coherence Fluxonium Qubit," [Phys. Rev. X 9, 041041 (2019)](https://doi.org/10.1103/PhysRevX.9.041041) — [arXiv:1810.11006](https://arxiv.org/abs/1810.11006)
- Q. Ficheux et al., "Fast Logic with Slow Qubits: Microwave-Activated Controlled-Z Gate on Low-Frequency Fluxoniums," [Phys. Rev. X 11, 021026 (2021)](https://doi.org/10.1103/PhysRevX.11.021026)
- A. Somoroff et al., "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. 130, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001) — [arXiv:2103.08578](https://arxiv.org/abs/2103.08578)

## Linked Papers

- [[lin-2018-heavy-fluxonium]]
- [[nguyen-2019-high-coherence-fluxonium]]
- [[somoroff-2023-millisecond-coherence-superconducting]]

## Evergreen context

- [[charge-noise-sweet-spot]] — heavy fluxonium still depends on operating at a carefully chosen protected bias point
- [[coherence-time-hierarchy]] — the long $T_1$ and $T_2^*$ claims should be read in the context of sweet-spot versus off-sweet-spot operation
- [[noise-bias-and-asymmetric-error-channels]] — heavy fluxonium is best understood as suppressing relaxation matrix elements much more strongly than all error channels equally

## Related Entries

- [[fluxonium]] — parent qubit type
- [[0-pi-qubit]] — related protected superconducting design
- [[transmon]] — conventional superconducting qubit for comparison
- [[qubit-readout]] — readout constraints become sharper as protected transition matrix elements are suppressed
