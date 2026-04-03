---
title: 0-π Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2013
first_demonstrated_year: 2021
keywords:
- 0-pi qubit
- protected qubit
- superconducting
- josephson array
- disjoint support
- noise bias
influence_score: 0.76
last_updated: '2026-03-21'
generated_by: scibok-curation
verified_by: scibok-manual-2026-03-21
figure_reviewed: true
---

## Figure

![[0-pi-qubit-figure.png]]

## Description

The 0-π qubit is a superconducting protected-qubit design (Brooks, Kitaev, and Preskill, 2013) that aims to suppress both bit-flip and phase-flip errors at the hardware level using a circuit with two nearly degenerate minima (near phase 0 and π) and strongly biased noise channels.

The circuit combines large inductive and capacitive elements with Josephson junctions to produce a potential landscape where logical states have exponentially small overlap. In the ideal parameter regime, local noise operators have exponentially weak matrix elements between logical states.

## Hamiltonian

A reduced 0-π model can be written in collective coordinates $\phi,\theta$ as:

$$H = 4E_{C\phi}n_\phi^2 + 4E_{C\theta}n_\theta^2 - 2E_J\cos\theta\cos\left(\phi - \frac{\varphi_{ext}}{2}\right) + E_L\phi^2$$

with design target $E_L \ll E_J$ and anisotropic capacitances producing disjoint-support wavefunctions in $\phi$.

## Motivation

0-π is one of the clearest "hardware-protected" superconducting qubit proposals: it targets passive suppression of dominant error channels before full QEC overhead. If the ideal parameter regime can be reached in practice, the qubit would provide exponential suppression of both bit-flip and phase-flip errors simultaneously, dramatically reducing the overhead needed for fault-tolerant quantum computing.

## Experimental Status

**First experimental realization — Gyenis et al. (2021):**
- Demonstrated a protected superconducting circuit derived from the 0-π qubit design
- Used an array of gate-tunable Josephson interferometers
- Observed signatures of the protected regime, though full exponential protection not yet achieved
- Dominant challenge remains disorder and parameter spread, which break the ideal protection symmetry

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Protection mechanism | Exponential wavefunction separation | In ideal parameter regime | [Brooks et al. 2013](https://doi.org/10.1103/PhysRevA.87.052306) |
| Dominant challenge | Disorder / parameter spread | Breaks ideal protection symmetry | — |
| Experimental status | Early prototypes / partial regimes | Not yet transmon-level maturity | [Gyenis et al. 2021](https://doi.org/10.1103/PRXQuantum.2.010339) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal
- P. Brooks, A. Kitaev, and J. Preskill, "Protected gates for superconducting qubits," [Phys. Rev. A 87, 052306 (2013)](https://doi.org/10.1103/PhysRevA.87.052306) — [arXiv:1302.4122](https://arxiv.org/abs/1302.4122)

### Experimental demonstrations
- A. Gyenis et al., "Experimental Realization of a Protected Superconducting Circuit Derived from the 0–π Qubit," [PRX Quantum 2, 010339 (2021)](https://doi.org/10.1103/PRXQuantum.2.010339) — [arXiv:1910.07542](https://arxiv.org/abs/1910.07542)

## Linked Papers

- [[brooks-2013-0-pi-qubit]]

## Related Entries

- [[fluxonium]] — parent circuit family
- [[heavy-fluxonium-qubit]] — related protected regime in the fluxonium family
- [[transmon]] — conventional superconducting qubit for comparison
- [[ferbo-qubit]] — alternative dual-protected design using single bosonic mode + fermionic Andreev degree of freedom
