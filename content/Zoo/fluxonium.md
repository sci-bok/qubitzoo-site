---
title: Fluxonium
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2009
keywords:
- fluxonium
- superconducting qubit
- superinductance
- josephson junction array
- flux qubit
- heavy fluxonium
- disjoint support
influence_score: 0.90
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
---

## Description

The fluxonium qubit, introduced by Manucharyan et al. (2009), consists of a small Josephson junction shunted by a superinductance — a very large inductance ($L \sim 1\,\mu\text{H}$, corresponding to $E_L/h \sim 0.5{-}1\,\text{GHz}$) realized as an array of larger Josephson junctions. This superinductance provides a DC path for phase slips, grounding the superconducting phase and enabling operation at the half-flux-quantum sweet spot $\Phi_\text{ext} = \Phi_0/2$, where the qubit transition is first-order insensitive to flux noise.

Unlike the transmon (which operates in the weakly anharmonic oscillator regime), the fluxonium can have enormous anharmonicity — the $|0\rangle \to |1\rangle$ transition can be as low as $100{-}1000\,\text{MHz}$ while higher transitions are at $5{-}8\,\text{GHz}$. This spectral isolation makes leakage errors fundamentally smaller. The tradeoff is that the low transition frequency makes direct dispersive readout more challenging, typically requiring auxiliary readout schemes or coupling to a transmon for measurement.

In the "heavy fluxonium" regime ($E_C/h \sim 0.5{-}1\,\text{GHz}$, $E_J/E_C \sim 3{-}8$), the wavefunctions of $|0\rangle$ and $|1\rangle$ have disjoint support in phase space: $|0\rangle$ is localized in one well of the cosine potential and $|1\rangle$ in the other. This disjoint support makes the qubit insensitive to virtually all local noise operators, enabling $T_1$ times exceeding $1\,\text{ms}$.


## Figure

![[fluxonium-figure.png]]

## Hamiltonian

$$H = 4E_C\hat{n}^2 - E_J\cos\hat{\varphi} + \frac{1}{2}E_L(\hat{\varphi} - 2\pi\Phi_\text{ext}/\Phi_0)^2$$

where $E_C = e^2/2C$ is the charging energy, $E_J$ is the Josephson energy of the small junction, $E_L = (\Phi_0/2\pi)^2/L$ is the inductive energy of the superinductance, $\hat{n}$ and $\hat{\varphi}$ are conjugate charge and phase operators, and $\Phi_\text{ext}$ is the external flux threading the loop.

At the half-flux-quantum sweet spot ($\Phi_\text{ext} = \Phi_0/2$), the potential has a double-well structure with the two minima related by parity symmetry $\varphi \to -\varphi + 2\pi$. The qubit states are the symmetric and antisymmetric superpositions of the states localized in each well, split by the tunneling rate through the cosine barrier.

## Motivation

The transmon's achilles heel is its weak anharmonicity ($\sim -200\,\text{MHz}$), which limits gate speeds and makes it vulnerable to leakage to $|2\rangle$. The fluxonium addresses this with GHz-scale anharmonicity while simultaneously achieving superior coherence through flux-sweet-spot operation and disjoint-support noise protection. The main challenge is implementing fast, high-fidelity gates at low qubit frequencies and achieving high-fidelity readout without a direct dispersive shift.

## Key Findings

- Superinductance via Josephson junction arrays provides $L > 100\,\text{nH}$ with self-resonance above qubit operating frequencies.
- At $\Phi_\text{ext} = \Phi_0/2$, first-order flux noise sensitivity vanishes (sweet spot).
- Heavy fluxonium regime achieves $T_1 > 1\,\text{ms}$ through disjoint-support protection.
- Two-qubit gates demonstrated via direct capacitive coupling and inductive coupling schemes.
- Recent results show single-qubit gate fidelities $> 99.99\%$ and two-qubit gate fidelities $> 99.7\%$.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 100 μs – 1.5 ms | Heavy fluxonium at half-flux sweet spot | [Manucharyan 2009](https://doi.org/10.1126/science.1175552) |
| $T_2$ (echo) | 100–500 μs | Echo at sweet spot | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| Anharmonicity | 3–8 GHz | $\omega_{12} - \omega_{01}$; much larger than transmon | [Manucharyan 2009](https://doi.org/10.1126/science.1175552) |
| Qubit frequency $\omega_{01}/2\pi$ | 100 MHz – 1 GHz | Much lower than transmon | — |
| $E_J/E_C$ | 3–8 | Heavy fluxonium regime | — |
| 1Q gate fidelity | 99.97–99.998% | Microwave or charge-parity-protected gates; MIT 2025 SOTA 99.998% | [Ding et al. 2023](https://doi.org/10.1103/PhysRevX.13.031035), [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| 2Q gate fidelity | 99.2–99.92% | Capacitive or inductive coupling; CZ 99.92% | [Ding et al. 2023](https://doi.org/10.1103/PhysRevX.13.031035) |
| Gate time (1Q) | 20–100 ns | Frequency-dependent | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |


## Linked Papers
- [[manucharyan-2009-fluxonium]]

## Related Entries

- [[transmon]]
- [[flux-qubit]]
- [[cooper-pair-box-charge-qubit]]
- [[circuit-qed]]
- [[blochnium]]
