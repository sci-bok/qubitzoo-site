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
last_updated: '2026-05-26'
generated_by: scibok-curation
verified_by: scibok-manual-2026-05-26
figure_reviewed: true
---

## Figure

![[0-pi-qubit-figure.png]]

## Description

The 0-π qubit is a superconducting protected-qubit design (Brooks, Kitaev, and Preskill, 2013) that aims to suppress both bit-flip and phase-flip errors at the hardware level using a circuit with two nearly degenerate minima (near phase 0 and π) and strongly biased noise channels.

The circuit combines large inductive and capacitive elements with Josephson junctions to produce a potential landscape where logical states have exponentially small overlap. In the ideal parameter regime, local noise operators have exponentially weak matrix elements between logical states.

## Hamiltonian

In the ideal disorder-free limit, a reduced 0-π model can be written in collective coordinates $\phi,\theta$ as:

$$H = 4E_{C\phi}n_\phi^2 + 4E_{C\theta}n_\theta^2 - 2E_J\cos\theta\cos\left(\phi - \frac{\varphi_{ext}}{2}\right) + E_L\phi^2$$

where $\varphi_{ext}$ is the reduced external flux. Protection requires $E_L \ll E_J$ together with anisotropic charging energies that keep the logical wavefunctions nearly disjoint. In real devices, disorder-induced couplings spoil exact disjoint support and remain the main obstacle to the asymptotic protected regime.

## Motivation

0-π is one of the clearest "hardware-protected" superconducting qubit proposals: it targets passive suppression of dominant error channels before full QEC overhead. If the ideal parameter regime can be reached in practice, the qubit would provide exponential suppression of both bit-flip and phase-flip errors simultaneously, dramatically reducing the overhead needed for fault-tolerant quantum computing.

## Experimental Status

**First experimental realization — Gyenis et al. (2021):**
- Demonstrated a superconducting circuit derived from the 0-π qubit design in a circuit-QED architecture
- Used an array of gate-tunable Josephson interferometers to engineer the protected manifold
- Measured relaxation times up to $T_1 = 1.6\,\mathrm{ms}$ together with dephasing times around $25\,\mu\mathrm{s}$ in the protected-state manifold
- Observed a disorder-limited partially protected regime, not the fully symmetry-ideal exponential-protection limit envisioned in the original proposal
- No clearly superseding peer-reviewed 2024-2026 experimental 0-π hardware milestone was found in this audit

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Protection target | Exponentially small logical-state overlap | Ideal hardware-level suppression of both relaxation and dephasing channels | [Brooks et al. 2013](https://doi.org/10.1103/PhysRevA.87.052306) |
| Measured relaxation time | $T_1 = 1.6\,\mathrm{ms}$ | Reported for the protected-state manifold in the first circuit-QED realization | [Gyenis et al. 2021](https://doi.org/10.1103/PRXQuantum.2.010339) |
| Measured dephasing time | $25\,\mu\mathrm{s}$ | Same experiment, showing useful protection but still substantial residual dephasing | [Gyenis et al. 2021](https://doi.org/10.1103/PRXQuantum.2.010339) |
| Dominant challenge | Disorder / parameter spread | Breaks the ideal symmetry and couples the soft protected mode to unwanted degrees of freedom | [Gyenis et al. 2021](https://doi.org/10.1103/PRXQuantum.2.010339) |

## References

### Original proposal
- P. Brooks, A. Kitaev, and J. Preskill, "Protected gates for superconducting qubits," [Phys. Rev. A 87, 052306 (2013)](https://doi.org/10.1103/PhysRevA.87.052306) — [arXiv:1302.4122](https://arxiv.org/abs/1302.4122)

### Experimental demonstrations
- A. Gyenis et al., "Experimental Realization of a Protected Superconducting Circuit Derived from the 0–π Qubit," [PRX Quantum 2, 010339 (2021)](https://doi.org/10.1103/PRXQuantum.2.010339) — [arXiv:1910.07542](https://arxiv.org/abs/1910.07542)

## Linked Papers

- [[brooks-2013-0-pi-qubit]]
- [[gyenis-2021-experimental-realization-protected]]

## Evergreen context

- [[cos2phi]] — the doubled-periodicity circuit intuition behind related protected superconducting designs
- [[charge-noise-sweet-spot]] — frames the 0-π qubit as a multi-axis sweet-spot strategy against both charge and flux noise
- [[noise-bias-and-asymmetric-error-channels]] — the protection target is not just lower error, but strongly biased residual error channels

## Related Entries

- [[cos2phi-qubit]] — another superconducting protected-qubit design built around doubled periodicity and 0/π structure
- [[fluxonium]] — neighboring superinductor-based superconducting circuit family
- [[heavy-fluxonium-qubit]] — related protected regime in the fluxonium family
- [[transmon]] — conventional superconducting qubit for comparison
