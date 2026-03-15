---
title: 0-π Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2013
keywords:
- 0-pi qubit
- protected qubit
- superconducting
- josephson array
- disjoint support
- noise bias
influence_score: 0.76
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---

## Description

The 0-π qubit is a superconducting protected-qubit design (Brooks, Kitaev, Preskill, 2013) that aims to suppress both bit-flip and phase-flip errors at the hardware level using a circuit with two nearly degenerate minima (near phase 0 and π) and strongly biased noise channels.

The circuit combines large inductive and capacitive elements with Josephson junctions to produce a potential landscape where logical states have exponentially small overlap. In the ideal parameter regime, local noise operators have exponentially weak matrix elements between logical states.


## Figure

![[0-pi-qubit-figure.png]]

## Hamiltonian

A reduced 0-π model can be written in collective coordinates $\phi,\theta$ as:

$$H = 4E_{C\phi}n_\phi^2 + 4E_{C\theta}n_\theta^2 - 2E_J\cos\theta\cos\left(\phi - \frac{\varphi_{ext}}{2}\right) + E_L\phi^2$$

with design target $E_L \ll E_J$ and anisotropic capacitances producing disjoint-support wavefunctions in $\phi$.

## Why it matters

0-π is one of the clearest "hardware-protected" superconducting qubit proposals: it targets passive suppression of dominant error channels before full QEC overhead.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Protection mechanism | Exponential wavefunction separation | In ideal parameter regime | [Brooks 2013](https://doi.org/10.1103/PhysRevA.87.052306) |
| Dominant challenge | Disorder / parameter spread | Breaks ideal protection symmetry | — |
| Experimental status | Early prototypes / partial regimes | Not yet transmon-level maturity | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Linked Papers
- [[brooks-2013-0-pi-qubit]]

## Related Entries

- [[fluxonium]]
- [[transmon]]
