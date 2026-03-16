---
title: Neutral Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
first_proposed_year: 2000
keywords:
- neutral atom
- optical tweezer
- ground state
- hyperfine
- alkali
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The neutral atom qubit encodes quantum information in internal states (typically hyperfine ground states) of individual neutral atoms trapped in optical tweezers or optical lattices. Entangling gates exploit strong dipole-dipole interactions via transient excitation to Rydberg states.


## Figure

![[neutral-atom-qubit-figure.png]]

## Description

Neutral atom platforms trap individual alkali atoms (⁸⁷Rb, ¹³³Cs) or alkaline-earth atoms (⁸⁸Sr, ¹⁷¹Yb) in tightly focused optical tweezer arrays. Qubit states are encoded in two hyperfine ground states |0⟩ and |1⟩, which have long coherence times due to weak coupling to the environment. Single-qubit gates are driven by microwave or two-photon Raman transitions. Two-qubit entangling gates use the Rydberg blockade mechanism: when one atom is excited to a high-lying Rydberg state (n ~ 50–100), the strong van der Waals interaction shifts the doubly-excited state out of resonance, creating a conditional phase.

Key advantages include identical qubits (no fabrication disorder), reconfigurable geometry via tweezer rearrangement, and mid-circuit atom reloading. Arrays of 1000+ atoms have been demonstrated, with programmable connectivity limited only by Rydberg interaction range.

## Hamiltonian

Single-qubit Hamiltonian in the rotating frame:

$$H_{\text{1Q}} = \frac{\hbar\Omega}{2}\sigma_x + \frac{\hbar\Delta}{2}\sigma_z$$

where $\Omega$ is the Rabi frequency and $\Delta$ the detuning.

Rydberg blockade Hamiltonian for two atoms separated by distance $R$:

$$H_{\text{2Q}} = \frac{\hbar\Omega_1}{2}|g_1\rangle\langle r_1| + \frac{\hbar\Omega_2}{2}|g_2\rangle\langle r_2| + \frac{C_6}{R^6}|r_1 r_2\rangle\langle r_1 r_2| + \text{h.c.}$$

The blockade condition $C_6/R^6 \gg \hbar\Omega$ prevents simultaneous Rydberg excitation, enabling a controlled-Z gate.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| 1Q gate fidelity | 99.97% | ¹³³Cs tweezers | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| 2Q gate fidelity (CZ) | 99.5% | ¹³³Cs tweezers | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| T₂ (Ramsey) | ~1 s | ⁸⁷Rb hyperfine | [Levine et al. 2022](https://doi.org/10.1103/PhysRevLett.129.150501) |
| T₂ (spin echo) | ~10 s | ¹⁷¹Yb clock states | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028) |
| Readout fidelity | 99.8% | ¹³³Cs fluorescence | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| Array size | 1225 atoms | Rb tweezer array | [Pause et al. 2024](https://doi.org/10.1364/OPTICA.513551) |
| Atom loss per circuit | ~0.5% per layer | ¹³³Cs | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |

## Scaling Considerations

- **Connectivity:** Reconfigurable via atom shuttling; effective all-to-all within Rydberg range (~5–10 μm).
- **Parallelism:** Global Rydberg pulses enable parallel entangling gates on non-interacting pairs.
- **Error budget:** Dominated by Rydberg state decay, atomic motion (Doppler shifts), and atom loss.
- **Mid-circuit operations:** Erasure detection via shelving to auxiliary states demonstrated; enables erasure-error conversion.

## Linked Papers
- [[jaksch-2000-rydberg-gate]]

## Related Entries
- [[rydberg-neutral-atom-qubit]]
- [[alkaline-earth-neutral-atom-clock-qubit]]
- [[nuclear-spin-neutral-atom-qubit]]
- [[surface-code-logical-qubit]]
