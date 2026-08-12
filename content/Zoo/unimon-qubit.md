---
title: Unimon Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/unimon-qubit-figure.provenance.json"
first_proposed_year: 2022
first_demonstrated_year: 2022
keywords: [unimon, superconducting qubit, geometric inductance, single junction, high anharmonicity, flux sweet spot]
influence_score: 0.72
last_updated: '2026-08-12'
generated_by: scibok-curation
verified_by: codex-daily-deep-audit-2026-08-12
figure_reviewed_by: "codex-daily-deep-audit-2026-08-12"
figure_reviewed_at: "2026-08-12T14:06:47.537472+00:00"
---

## Figure

![[unimon-qubit-figure.png]]

## Description

The unimon is a distributed-element superconducting qubit formed by interrupting the center conductor of a half-wavelength coplanar-waveguide (CPW) resonator with one Josephson junction while grounding the resonator at both ends. The two resonator halves and surrounding ground plane form a gradiometric pair of superconducting loops: differential flux controls the dc phase across the junction, while spatially uniform flux is partially rejected. Because the junction is shunted by the resonator's geometric inductance and capacitance, the circuit has no isolated charge island and is insensitive to low-frequency offset-charge noise.

At the half-flux sweet spot, the Josephson phase is biased to $\varphi_0=\pi$. The negative quadratic curvature of the expanded Josephson term then nearly cancels the positive linear-inductive curvature, leaving a strong positive quartic term. This produces positive anharmonicity, $\alpha/(2\pi)=f_{12}-f_{01}>0$, while the transition frequency is first-order insensitive to differential-flux fluctuations.

Unlike fluxonium and bifluxon circuits, the unimon does not require a junction-array superinductor. Unlike a transmon, its nonlinearity is a distributed resonator mode rather than a capacitively shunted island mode.

## Hamiltonian

For a selected anharmonic normal mode $m$, the single-mode Hamiltonian derived from the distributed circuit is

$$\hat H_m=4E_{C,m}(\varphi_0)\hat n_m^2+\frac{1}{2}E_{L,m}(\varphi_0)\hat\varphi_m^2+E_L\hat\varphi_m\!\left(\frac{2\pi\Phi_{\mathrm{diff}}}{\Phi_0}-\varphi_0\right)-E_J\cos(\hat\varphi_m-\varphi_0),$$

with $[\hat\varphi_m,\hat n_m]=i$. Here $E_{C,m}$ and $E_{L,m}$ are the mode energies, $E_L$ is the dc inductive energy of the center conductor, and the dimensionless dc phase $\varphi_0$ is fixed implicitly by the differential flux and circuit inductance. At $\Phi_{\mathrm{diff}}=\Phi_0/2$, $\varphi_0=\pi$ and the linear term vanishes, giving

$$\hat H_m=4E_{C,m}(\pi)\hat n_m^2+\frac{1}{2}E_{L,m}(\pi)\hat\varphi_m^2+E_J\cos\hat\varphi_m.$$

Expanding about $\hat\varphi_m=0$ yields a quadratic coefficient $[E_{L,m}(\pi)-E_J]/2$ and a positive quartic coefficient $E_J/24$. Near $E_J\lesssim E_{L,m}(\pi)$, the quadratic terms nearly cancel and the quartic term produces the large positive anharmonicity. Quantitative spectra can require a multimode treatment because unexcited higher CPW modes renormalize $E_J$ and shift the qubit frequency and anharmonicity.

## Motivation

- Obtain higher anharmonicity and faster gates than a typical transmon with one junction.
- Avoid junction-array superinductors and isolated charge islands.
- Use a gradiometric flux sweet spot to reduce common-mode flux sensitivity.

## Experimental Status

Hyyppä et al. introduced and measured five unimons in 2022. Two devices reached 99.9% and 99.8% single-qubit gate fidelity with 13.3 ns gates and sweet-spot anharmonicities of 434 and 744 MHz, respectively. The best-studied device had $T_1\lesssim10\,\mu\mathrm{s}$, with dielectric loss identified as the likely limitation.

The 2024 multimode analysis by Tuohino et al. showed that high-frequency modes materially renormalize the Josephson energy and that moving the junction away from the resonator midpoint can create strong cross-Kerr coupling among low modes. Duda et al. (2025) then predicted that a roughly 1--2 k$\Omega$ mode impedance, a qubit frequency near 1 GHz, and $E_J\approx E_L$ could push single-qubit fidelity above 99.99%; this remains a theoretical design target, not an experimental record. A 2026 APS conference abstract proposed a differential coplanar-stripline variant, but no later peer-reviewed experiment found in this audit has demonstrated a unimon two-qubit gate or multi-qubit processor.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| 1Q gate fidelity | 99.9% | 13.3 ns gates on qubit B | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |
| 1Q gate fidelity | 99.8% | 13.3 ns gates on qubit A | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |
| Anharmonicity | 434–744 MHz | Two highest-anharmonicity devices at the sweet spot | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |
| Long-term gate stability | 99.88 ± 0.02% | 20 ns gates over eight hours | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |

## Scaling Considerations

- Dielectric loss limited the first devices and must improve for competitive coherence.
- The distributed geometry occupies more area than a compact transmon island; the high impedance favored by 2025 optimization may require kinetic inductance or a nonstandard transmission-line geometry.
- Higher resonator modes renormalize the single-mode parameters and can create cross-Kerr interactions, so scalable designs need multimode-aware calibration and crosstalk control.
- Coupling strategies remain unvalidated by a measured unimon two-qubit gate.
- Gradiometry rejects common-mode flux only partially; differential-flux noise and bias calibration remain relevant even at the first-order sweet spot.

## References

- E. Hyyppä et al., "Unimon qubit," [Nature Communications 13, 6895 (2022)](https://doi.org/10.1038/s41467-022-34614-w); [arXiv:2203.05896](https://arxiv.org/abs/2203.05896).
- S. Tuohino et al., "Multimode physics of the unimon circuit," [Physical Review Research 6, 033001 (2024)](https://doi.org/10.1103/PhysRevResearch.6.033001); [arXiv:2309.09732](https://arxiv.org/abs/2309.09732).
- R. Duda et al., "Parameter optimization for the unimon qubit," [Physical Review Research 7, 033092 (2025)](https://doi.org/10.1103/7yvd-z6hk); [arXiv:2504.20205](https://arxiv.org/abs/2504.20205).
- G. Lee and E. Kim, "Differential Unimon Qubit: A Distributed-Element Superconducting Qubit Based on an Odd-Mode Transmission Line Resonator," [APS Global Physics Summit 2026 abstract](https://meetings-archive.aps.org/smt/2026/mar-c16/11/) (conference proposal).

## Linked Papers

- [[hyyppa-2022-unimon]]
- [[tuohino-2024-multimode-unimon]]
- [[duda-2025-parameter-optimization-unimon]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the single junction converts a distributed resonator mode into an anharmonic qubit.
- [[charge-noise-sweet-spot]] — absence of a charge island and half-flux operation define the protection story.
- [[resonator-as-quantum-bus]] — the unimon blurs the usual boundary between qubit mode and resonator mode.
- [[vacuum-rms-field-scaling]] — connects the distributed CPW geometry and proposed high-impedance designs to the zero-point voltage available for coupling, before junction nonlinearity is considered.

## Related Entries

- [[transmon]] — lower-anharmonicity capacitively shunted mainstream circuit.
- [[fluxonium]] — inductively shunted junction using a superinductor.
- [[bifluxon-qubit]] — fluxon-parity-protected inductively shunted circuit.
