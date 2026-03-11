---
title: Transmon
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2007
keywords:
- transmon
- superconducting qubit
- charge insensitive
- cooper pair box
- josephson junction
- EJ/EC ratio
- circuit qed
- dispersive readout
influence_score: 0.95
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
published: 2007-01-01
---

## Description

The transmon (short for "transmission-line shunted plasma oscillation qubit") is a superconducting charge qubit derived from the Cooper pair box by dramatically increasing the ratio $E_J/E_C$. Koch et al. (2007) showed that operating at $E_J/E_C \sim 50{-}100$ (vs. $\sim 1$ for the CPB) exponentially suppresses charge dispersion — the sensitivity of transition frequencies to offset charge $n_g$ — while reducing anharmonicity only as a weak power law. This tradeoff is the central design insight: charge noise immunity improves exponentially while the penalty in anharmonicity is manageable.

The large $E_J/E_C$ ratio is achieved by shunting the Josephson junction with a large external capacitance (typically an interdigitated or pad capacitor). The qubit transition frequency $\omega_{01} \approx \sqrt{8E_JE_C} - E_C$ is set by lithographic design, and the anharmonicity $\alpha = \omega_{12} - \omega_{01} \approx -E_C$ is typically $-200$ to $-350\,\text{MHz}$ — small compared to the transition frequency ($\sim 4{-}6\,\text{GHz}$) but large enough for selective microwave control.

The transmon is almost always operated inside a circuit QED architecture: coupled to a coplanar waveguide or 3D cavity resonator for dispersive readout and Purcell-filtered spontaneous emission suppression. It is the dominant qubit modality in current superconducting quantum processors (IBM, Google, Rigetti, IQM, OQC).


## Figure

![[transmon-figure.png]]

## Hamiltonian

The full transmon Hamiltonian is identical to the Cooper pair box:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

where $E_C = e^2/2C_\Sigma$ is the charging energy, $E_J$ is the Josephson energy, $\hat{n}$ is the Cooper pair number operator, $n_g$ is the offset charge, and $\hat{\varphi}$ is the superconducting phase.

In the transmon regime ($E_J/E_C \gg 1$), the charge dispersion of the $m$-th level scales as:

$$\epsilon_m \propto e^{-\sqrt{8E_J/E_C}}$$

while the anharmonicity decreases only algebraically:

$$\alpha \approx -E_C$$

The energy levels approach those of a weakly anharmonic oscillator (Duffing oscillator):

$$E_m \approx -E_J + \sqrt{8E_JE_C}\left(m + \frac{1}{2}\right) - \frac{E_C}{12}(6m^2 + 6m + 3)$$

## Motivation

The Cooper pair box suffered from extreme sensitivity to $1/f$ charge noise, limiting $T_2$ to nanoseconds away from the charge degeneracy point. Active feedback to maintain $n_g = 1/2$ was impractical at scale. The transmon eliminates this problem by operating in a regime where the transition frequency is essentially flat as a function of $n_g$, enabling "set and forget" operation with coherence limited by other mechanisms (dielectric loss, quasiparticles, radiation).

## Key Findings

- Charge dispersion is exponentially suppressed: at $E_J/E_C = 50$, the charge dispersion of the 0→1 transition is $< 1\,\text{kHz}$, negligible compared to linewidths.
- Anharmonicity $|\alpha| \approx E_C/\hbar \sim 200{-}350\,\text{MHz}$ is sufficient for high-fidelity single-qubit gates with shaped pulses (DRAG).
- Dispersive readout via circuit QED provides QND measurement with high fidelity.
- The design is compatible with fixed-frequency operation (simpler fabrication, no flux noise) or frequency-tunable variants (split-junction transmon with flux control for two-qubit gates).
- State-of-the-art devices achieve $T_1 > 500\,\mu\text{s}$ in 3D cavities and $T_1 \sim 100{-}300\,\mu\text{s}$ in planar geometries.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 100–500 μs | Planar: ~100–300 μs; 3D cavity: >500 μs | [Koch 2007](https://doi.org/10.1103/PhysRevA.76.042319) |
| $T_2$ (echo) | 100–500 μs | Often $T_2 \approx 2T_1$ with echo | — |
| Anharmonicity $\alpha/2\pi$ | −200 to −350 MHz | $\approx -E_C/\hbar$ | [Koch 2007](https://doi.org/10.1103/PhysRevA.76.042319) |
| $E_J/E_C$ | 20–100 | Typical operating regime | [Koch 2007](https://doi.org/10.1103/PhysRevA.76.042319) |
| 1Q gate fidelity | 99.9–99.99% | Randomized benchmarking | — |
| 2Q gate fidelity (CZ/CR) | 99.0–99.9% | Cross-resonance or tunable coupler | — |
| Readout fidelity | 97–99.9% | Dispersive, with Purcell filter + JPA | — |
| Gate time (1Q) | 20–50 ns | DRAG pulse | — |
| Gate time (2Q) | 100–400 ns | Depends on gate scheme | — |
| Transition frequency | 4–6 GHz | Design-tunable | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |
| Chip footprint per qubit | ~300 μm × 300 μm | Pad + junction + readout resonator | — |


## Extracted Figures

![[koch-2007-transmon-paper-fig-1.png]]

![[koch-2007-transmon-paper-fig-2.png]]

## Linked Papers
- [[koch-2007-transmon]]

## Related Entries

- [[cooper-pair-box-charge-qubit]]
- [[circuit-qed]]
- [[fluxonium]]
- [[xmon]]
- [[gmon]]
