---
title: Hole Spin Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
first_proposed_year: 2013
keywords:
- hole spin
- semiconductor
- ge/sige
- spin orbit
- electric dipole spin resonance
influence_score: 0.74
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

Hole spin qubits encode quantum information in valence-band hole spins confined in semiconductor quantum dots (commonly Ge/SiGe). Strong spin-orbit coupling enables all-electric qubit control (EDSR) without requiring micromagnets, enabling faster gate operations and easier scaling of control wiring.

The tradeoff is stronger coupling to electrical noise compared with electron-spin qubits, which can limit coherence unless careful sweet-spot design and materials engineering are used.


## Figure

![[hole-spin-qubit-figure.png]]

## Hamiltonian

Effective single-qubit model:

$$H = \frac{1}{2}g\mu_B\mathbf{B}\cdot\boldsymbol{\sigma} + \mathbf{E}(t)\cdot\mathbf{d}_{SO}(\boldsymbol{\sigma})$$

where the second term is spin-orbit-mediated electric driving. Two-qubit coupling is typically exchange:

$$H_{2q} = J(t)\,\mathbf{S}_1\cdot\mathbf{S}_2$$

## Motivation

Hole-spin platforms are attractive because spin-orbit coupling turns electric fields into effective spin-control channels, eliminating some of the microwave magnetic-field infrastructure needed for electron-spin ESR control. This supports dense integration and fast gate operations in semiconductor-compatible processes.

## Key Findings

- Ge/SiGe hole-spin qubits demonstrate fast all-electric control.
- Strong spin-orbit coupling enables high Rabi frequencies at modest drive power.
- Device design can trade speed for coherence by tuning confinement and field orientation.
- Two-qubit exchange gates are compatible with existing semiconductor control stacks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate time | 1–50 ns | Fast EDSR control | — |
| 1Q fidelity | 99–99.9% | Rapid progress in Ge devices | [Hendrickx et al. 2021](https://doi.org/10.1038/s41586-021-03332-6) |
| 2Q fidelity | 98–99.5% | Exchange-based | [Hendrickx et al. 2021](https://doi.org/10.1038/s41586-021-03332-6) |
| $T_2^*$ | 1–20 μs | Device/material dependent | — |
| Operating temperature | 20 mK – 1 K | Some hot-qubit demonstrations | — |

## Linked Papers
- [[scappucci-2021-ge-review]]
- [[hendrickx-2021-ge-4qubit]]

## Related Entries

- [[spin-qubit]]
- [[singlet-triplet-qubit]]
- [[kane-qubit]]
