---
title: Mølmer-Sørensen Gate
entry_type: gate
technology_family: Ion Trap
status: demonstrated
first_proposed_year: 1999
keywords:
- molmer sorensen
- trapped ion
- entangling gate
- bichromatic drive
influence_score: 0.79
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

The Mølmer-Sørensen (MS) gate is the standard high-fidelity entangling gate in trapped-ion systems, implemented by bichromatic driving near red/blue motional sidebands to produce an effective spin-spin interaction.


## Figure

![[molmer-sorenson-gate-figure.png]]

## Hamiltonian

In interaction picture, the gate implements approximately:

$$H_{\text{MS}} = \hbar\chi\, S_\phi^2$$

where $S_\phi = \sum_i \sigma_\phi^{(i)}$ and $\chi$ is set by drive detuning and Lamb-Dicke coupling. Evolution for calibrated time gives maximally entangling XX/YY interactions.

## Motivation

The Mølmer-Sørensen gate became dominant because it is experimentally robust: unlike early sideband gates, it can operate without strict ground-state cooling and is less sensitive to certain motional-state preparation errors. It maps naturally onto global-beam plus local-addressing hardware used in modern ion-trap systems.

## Key Findings

- Enables high-fidelity entanglement in long-lived hyperfine and optical-ion qubits.
- Naturally implements XX/YY interactions useful for digital and analog simulation.
- Compatible with pulse-shaping and amplitude/frequency modulation for error suppression.
- Scales to multi-ion entangling operations in programmable ion chains.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 2Q gate fidelity | 99.5–99.9% | state of the art trapped-ion gates | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| Gate time | 10–200 μs | detuning/fidelity tradeoff | — |
| Cooling requirement | no ground-state requirement (robust variants) | major practical advantage | — |

## Linked Papers
- [[sorensen-1999-ms-gate]]

## Related Entries

- [[trapped-ion-qubit]]
- [[cirac-zoller-gate]]
