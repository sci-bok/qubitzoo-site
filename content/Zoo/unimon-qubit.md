---
title: Unimon Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
figure_renderer: "openai-imagegen"
figure_model: "gpt-image-2"
figure_provenance: "Figures/unimon-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-02"
figure_reviewed_at: "2026-08-02T17:07:49Z"
first_proposed_year: 2022
first_demonstrated_year: 2022
keywords: [unimon, superconducting qubit, geometric inductance, single junction, high anharmonicity, flux sweet spot]
influence_score: 0.72
last_updated: '2026-08-02'
generated_by: scibok-curation
verified_by: codex-literature-audit-2026-08-02
---

## Figure

![[unimon-qubit-figure.png]]

## Description

The unimon is a superconducting qubit formed by inserting one Josephson junction into the center conductor of a grounded coplanar-waveguide resonator. The junction is shunted by the resonator's geometric inductance and capacitance, so there is no isolated charge island and low-frequency charge noise is suppressed. At half a flux quantum, linear inductive energy partially cancels the Josephson curvature, increasing anharmonicity while retaining a flux sweet spot.

Unlike fluxonium and bifluxon circuits, the unimon does not require a junction-array superinductor. Unlike a transmon, its nonlinearity is a distributed resonator mode rather than a capacitively shunted island mode.

## Hamiltonian

For the selected anharmonic resonator mode,

$$H=4E_C\hat n^2+\frac{1}{2}E_L\hat\varphi^2+E_L\hat\varphi(\varphi_{\mathrm{diff}}-\varphi_0)-E_J\cos(\hat\varphi-\varphi_0),$$

where $\varphi_0$ is the dc phase determined by flux bias and the distributed circuit. Near $\Phi_{\mathrm{diff}}=\Phi_0/2$, cancellation between inductive and Josephson curvature produces high positive anharmonicity.

## Motivation

- Obtain higher anharmonicity and faster gates than a typical transmon with one junction.
- Avoid junction-array superinductors and isolated charge islands.
- Use a gradiometric flux sweet spot to reduce common-mode flux sensitivity.

## Experimental Status

Hyyppä et al. introduced and demonstrated five unimons in 2022. Two devices reached 99.9% and 99.8% fidelity for 13 ns single-qubit gates, with sweet-spot anharmonicities of 434 and 744 MHz. The work did not yet demonstrate two-qubit gates or a multi-qubit processor.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| 1Q gate fidelity | 99.9% | 13.3 ns gates on qubit B | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |
| 1Q gate fidelity | 99.8% | 13.3 ns gates on qubit A | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |
| Anharmonicity | 434–744 MHz | Two highest-anharmonicity devices at the sweet spot | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |
| Long-term gate stability | 99.88 ± 0.02% | 20 ns gates over eight hours | [Hyyppä et al. 2022](https://doi.org/10.1038/s41467-022-34614-w) |

## Scaling Considerations

- Dielectric loss limited the first devices and must improve for competitive coherence.
- The distributed geometry occupies more area than a compact transmon island.
- Coupling and crosstalk strategies require validation in multi-qubit layouts.
- Flux-bias calibration remains necessary even at the operating sweet spot.

## References

- E. Hyyppä et al., "Unimon qubit," [Nature Communications 13, 6895 (2022)](https://doi.org/10.1038/s41467-022-34614-w).

## Linked Papers

- [[hyyppa-2022-unimon]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the single junction converts a distributed resonator mode into an anharmonic qubit.
- [[charge-noise-sweet-spot]] — absence of a charge island and half-flux operation define the protection story.
- [[resonator-as-quantum-bus]] — the unimon blurs the usual boundary between qubit mode and resonator mode.

## Related Entries

- [[transmon]] — lower-anharmonicity capacitively shunted mainstream circuit.
- [[fluxonium]] — inductively shunted junction using a superinductor.
- [[bifluxon-qubit]] — fluxon-parity-protected inductively shunted circuit.
