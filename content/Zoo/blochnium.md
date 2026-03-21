---
title: Blochnium
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
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
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[blochnium-figure.png]]

## Description

**Blochnium** is a superconducting qubit that operates as the **charge-flux dual of the transmon**. Where the transmon achieves charge-noise insensitivity by operating at $E_J/E_C \gg 1$ (phase is well-defined, charge fluctuates), blochnium achieves flux-noise insensitivity by operating in the extreme fluxonium limit $E_L \ll E_C, E_J$ (quasicharge is well-defined, phase extends beyond $2\pi$).

The circuit consists of a single Josephson junction shunted by an extremely large inductance (a **superinductance**, typically made from granular aluminum or high-kinetic-inductance materials like NbN nanowires). In this regime, the superconducting phase $\varphi$ becomes quasi-continuous — the phase particle delocalizes across multiple wells of the Josephson cosine potential, forming **Bloch bands**. The qubit transition is between states in the lowest Bloch band, with the conjugate variable being the **quasicharge** $p$ (Bloch momentum).

The duality is precise: just as the transmon flattens charge dispersion via large $E_J/E_C$, blochnium flattens flux dispersion via small $E_L$. The qubit transition is exactly insensitive to offset charge (no island in the circuit) and, at the flux sweet spot, can also be made insensitive to flux noise. Unlike the transmon, blochnium retains **large anharmonicity**, which is advantageous for fast, leakage-free gates.

The key experimental challenge is fabricating a sufficiently large, low-loss superinductance while maintaining junction quality.

## Hamiltonian

The blochnium Hamiltonian is the same as the fluxonium, in the extreme inductive limit:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi} + \frac{1}{2}E_L(\hat{\varphi} - 2\pi\Phi_{\text{ext}}/\Phi_0)^2$$

In the blochnium regime ($E_L \ll E_J, E_C$), the inductive term is a weak parabolic confinement on the cosine potential. The phase particle delocalizes across many wells, and the low-energy physics is described by Bloch band theory with the quasicharge $p$ as the good quantum number — dual to the transmon's treatment of Cooper pair number.

## Motivation

- Fills a fundamental gap in the superconducting qubit taxonomy: charge, flux, and phase qubits were known, but the dual of the transmon (a "quasicharge qubit") was missing.
- Combines **charge insensitivity** (no island) with **flux insensitivity** (at the sweet spot) and **large anharmonicity** — a rare combination.
- Explores a qualitatively new regime of circuit quantum electrodynamics where the superconducting phase is a quasi-continuous Bloch variable.
- The large anharmonicity enables faster gates with lower leakage than the transmon.

## Experimental Status

**First demonstration — Pechenezhskiy et al. (2020):**
- Demonstrated the blochnium qubit using a single Josephson junction shunted by a superinductance chain.
- Observed vanishing flux sensitivity of the qubit transition between ground and first excited states, recovering rapidly for transitions to higher states.
- Measured $T_1 \sim 10$–$100\,\mu$s and $T_2 \sim 1$–$10\,\mu$s (echo) in early devices.
- Confirmed the duality mapping onto the transmon by replacing external flux with offset charge and introducing the quasicharge variable.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 10–100 μs | Early devices (2020) | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| $T_2$ (echo) | 1–10 μs | Echo measurement | [Pechenezhskiy et al. 2020](https://doi.org/10.1038/s41586-020-2687-9) |
| Charge sensitivity | Exactly zero | No island in circuit | — |
| Anharmonicity | Large | Unlike transmon; advantageous for fast gates | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |
| Qubit footprint | ~500 μm | Superinductance chain dominates device area | — |

## References

### Original demonstration
- I. V. Pechenezhskiy et al., "The superconducting quasicharge qubit," [Nature 585, 368 (2020)](https://doi.org/10.1038/s41586-020-2687-9)

## Linked Papers

- [[pechenezhskiy-2020-blochnium]]

## Related Entries

- [[fluxonium]] — parent architecture; blochnium is the extreme inductive limit
- [[transmon]] — charge-flux dual qubit
- [[cooper-pair-box-charge-qubit]] — island-based ancestor; blochnium eliminates the island
