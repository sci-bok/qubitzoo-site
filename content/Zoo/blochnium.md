---
title: Blochnium
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 2020
first_demonstrated_year: 2020
keywords:
- blochnium
- hyperinductance
- superconducting
- quasicharge
- dual of transmon
- fluxonium limit
influence_score: 0.70
last_updated: '2026-07-13'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-07-13
---

## Figure

![[blochnium-figure.png]]

## Description

**Blochnium** is a superconducting **quasicharge qubit** realized by shunting a small Josephson junction with an ultralarge inductance. It is best understood as the **extreme inductive limit of fluxonium** and, in its low-energy dual description, as the **charge-flux dual of the transmon**.

In the blochnium regime, the physical Hamiltonian is still the fluxonium circuit Hamiltonian, but with a very weak inductive confinement, $E_L \ll E_C, E_J$. The superconducting phase $\varphi$ then delocalizes across many cosine wells, and the low-energy spectrum is naturally described in terms of **Bloch bands** and a collective **quasicharge** variable rather than a well-localized phase particle. The hallmark experimental signature is that the qubit transition $|0\rangle \rightarrow |1\rangle$ becomes only weakly flux dependent near the sweet spot, while higher transitions rapidly recover stronger flux dispersion.

Blochnium inherits the attractive transmon-like protection logic, but not an arbitrarily strong nonlinearity. Early blochnium devices are protected and clearly anharmonic, yet follow-on theory work emphasizes that their anharmonicity is still relatively modest, which motivates quartic-Blochnium variants aimed at reducing leakage and frequency crowding.

The key experimental challenge is fabricating a sufficiently large, low-loss superinductance while keeping stray capacitance low enough to remain deep in the quasicharge regime.

## Hamiltonian

A representative blochnium device uses the same physical circuit Hamiltonian as fluxonium:

$$H = 4E_C\hat{n}^2 - E_J\cos\hat{\varphi} + \frac{1}{2}E_L\left(\hat{\varphi} - \varphi_{\mathrm{ext}}\right)^2,$$

with $\varphi_{\mathrm{ext}} = 2\pi\Phi_{\mathrm{ext}}/\Phi_0$.

The important correction is interpretive: because blochnium is galvanically shunted, there is **no physical static offset-charge term $n_g$** in the device Hamiltonian the way there is in a Cooper-pair box. Instead, $n_g$ appears only in the **dual mapping to the transmon**, where external flux in blochnium plays the role that offset charge plays for the transmon. In the deep-inductive regime $E_L/E_C \ll 1$, the phase explores many cosine wells and the low-energy physics is more naturally described by the lowest Bloch band $E_B(q)$ as a function of quasicharge $q$.

## Motivation

- Completes the charge-flux duality story in superconducting circuits: blochnium is the quasicharge-side counterpart of the transmon.
- Offers a qubit transition with strongly suppressed flux dispersion near the sweet spot, even though the device remains a closed superconducting loop.
- Opens access to an ultrahigh-impedance regime where quasicharge, rather than localized phase, is the natural low-energy variable.
- Provides a platform for exploring protected superconducting-circuit design beyond the usual transmon and fluxonium limits.
- Highlights a real tradeoff: strong noise protection is possible without large native nonlinearity, motivating quartic-Blochnium follow-ons.

## Experimental Status

**First demonstration, Pechenezhskiy et al. (2020):**
- Demonstrated blochnium using a single small Josephson junction shunted by a suspended Josephson-chain superinductance.
- Fit the measured spectrum with $E_J/h = 4.70\,\mathrm{GHz}$, $E_C/h = 7.07\,\mathrm{GHz}$, and $E_L/h = 66.5\,\mathrm{MHz}$, placing the device at $E_J/E_C = 0.66$ and $E_L/E_C = 0.009$.
- Observed that the qubit transition $|0\rangle \rightarrow |1\rangle$ has only about $100\,\mathrm{MHz}$ of flux modulation, while higher transitions recover much stronger flux sensitivity.
- Inferred a persistent current of about $7\,\mathrm{pA}$ for the qubit transition, consistent with the low-dispersion quasicharge regime.
- Reported initial time-domain coherence of $T_1 \approx 10\,\mu\mathrm{s}$ and relaxation-limited spin-echo coherence $T_2 \approx 20\,\mu\mathrm{s}$.
- Realized a hyperinductance of about $L \approx 2.5\,\mu\mathrm{H}$ with characteristic impedance above $200\,\mathrm{k}\Omega$ around $13\,\mathrm{GHz}$.

**Follow-on theory and recent status:**
- Chirolli, Carrega, and Giazotto (2023) proposed **quartic Blochnium**, explicitly to address the modest inherited anharmonicity of ordinary blochnium while keeping its quasicharge-protection advantages.
- A targeted 2024-2026 audit search did **not** uncover a newer peer-reviewed experimental blochnium-qubit benchmark that supersedes Pechenezhskiy et al. (2020).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | $\approx 10\,\mu$s | Initial time-domain measurement | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| $T_2$ (spin echo) | $\approx 20\,\mu$s | Relaxation-limited echo coherence | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| $|0\rangle \rightarrow |1\rangle$ flux modulation | $\sim 100\,\mathrm{MHz}$ | Much smaller than higher-transition dispersion | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| Superinductance | $\approx 2.5\,\mu\mathrm{H}$ | Suspended Josephson-chain hyperinductance | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| Characteristic impedance | $>200\,\mathrm{k}\Omega$ at $\sim 13\,\mathrm{GHz}$ | More than $30\times$ the Cooper-pair resistance quantum | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| Anharmonicity outlook | Modest in ordinary blochnium | Motivates quartic-Blochnium follow-on designs | [Chirolli et al. 2023](https://doi.org/10.22331/q-2023-12-04-1193) |

## References

### Core experiment
- I. V. Pechenezhskiy et al., "The superconducting quasicharge qubit," [Nature 585, 368 (2020)](https://doi.org/10.1038/s41586-020-2687-9), [arXiv:1907.02937](https://arxiv.org/abs/1907.02937)

### Follow-on theory
- L. Chirolli, M. Carrega, and F. Giazotto, "The quartic Blochnium: an anharmonic quasicharge superconducting qubit," [Quantum 7, 1193 (2023)](https://doi.org/10.22331/q-2023-12-04-1193), [arXiv:2304.10401](https://arxiv.org/abs/2304.10401)

## Linked Papers

- [[pechenezhskiy-2020-blochnium]]
- [[chirolli-2023-quartic-blochnium]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — blochnium uses the Josephson junction in the extended-phase, Bloch-band regime
- [[charge-noise-sweet-spot]] — its appeal is dual protection: galvanic screening removes static charge offsets, while the qubit transition is weakly flux dispersive near the sweet spot
- [[coherence-time-hierarchy]] — helps interpret the early-device gap between $T_1$ and the still comparable echo-limited $T_2$

## Related Entries

- [[fluxonium]] — parent circuit family; blochnium is the extreme inductive, quasicharge-side limit
- [[heavy-fluxonium-qubit]] — neighboring superinductor branch that instead emphasizes ultra-low transition frequencies and long coherence
- [[transmon]] — dual large-capacitance counterpart
- [[cooper-pair-box-charge-qubit]] — island-based ancestor whose offset-charge physics becomes dualized in blochnium
