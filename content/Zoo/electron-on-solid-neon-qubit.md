---
title: Electron-on-Solid-Neon Qubit
entry_type: qubit
technology_family: Floating Electron
status: demonstrated
figure_reviewed: true
figure_renderer: "openai-imagegen"
figure_model: "gpt-image-2"
figure_provenance: "Figures/electron-on-solid-neon-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-02"
figure_reviewed_at: "2026-08-02T17:07:49Z"
first_proposed_year: 2021
first_demonstrated_year: 2022
keywords: [electron on neon, floating electron, motional qubit, charge qubit, circuit QED, vacuum interface]
influence_score: 0.72
last_updated: '2026-08-02'
generated_by: scibok-curation
verified_by: codex-literature-audit-2026-08-02
---

## Figure

![[electron-on-solid-neon-qubit-figure.png]]

## Description

An electron-on-solid-neon qubit stores information in two quantized motional states of a single electron trapped above an ultraclean neon surface. Patterned electrodes create the lateral electrostatic trap; the electron remains in vacuum, bound vertically by its image potential and the surface barrier. Its electric dipole couples directly to a superconducting microwave resonator, giving a circuit-QED interface without embedding the carrier in a semiconductor crystal.

The 2022 demonstration achieved coherent microwave control and dispersive readout. This is a charge-like motional qubit, not yet an electron-spin qubit. The attraction is the exceptionally clean environment and large electric dipole; the cost is sensitivity to electric-field fluctuations, trap disorder, and electron loading.

## Hamiltonian

Near a lateral trap minimum, the electron is approximately an anharmonic oscillator,

$$H_e=\frac{\hat p_x^2}{2m_e}+V_{\mathrm{trap}}(\hat x),$$

with the two lowest eigenstates selected as $|0\rangle$ and $|1\rangle$. Coupling to a microwave resonator is described in the rotating-wave approximation by

$$\frac{H}{\hbar}=\omega_r a^\dagger a+\frac{\omega_q}{2}\sigma_z+g(a^\dagger\sigma_-+a\sigma_+).$$

The large motional dipole produces strong coupling $g$; detuning the qubit from the resonator enables dispersive readout.

## Motivation

- Place a charge carrier in vacuum above an inert quantum solid rather than inside a noisy semiconductor interface.
- Combine fast electrical control with standard superconducting circuit-QED readout.
- Provide a route to floating-electron arrays and, eventually, spin storage with motional-state-mediated control.

## Experimental Status

Zhou et al. demonstrated strong electron-photon coupling, microwave gates, and dispersive measurement of a single electron above solid neon in 2022. The reported motional-state lifetime was $T_1=15\,\mu\text{s}$ and phase coherence exceeded 200 ns. Multi-electron processors and high-fidelity two-qubit gates remain future work.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| $T_1$ | 15 μs | Single-electron motional qubit | [Zhou et al. 2022](https://doi.org/10.1038/s41586-022-04539-x) |
| $T_2$ | >200 ns | Phase coherence in first device | [Zhou et al. 2022](https://doi.org/10.1038/s41586-022-04539-x) |
| Readout | Dispersive | Superconducting microwave resonator | [Zhou et al. 2022](https://doi.org/10.1038/s41586-022-04539-x) |

## Scaling Considerations

- Trap-to-trap frequency disorder and surface electric-field noise must be controlled across arrays.
- A scalable loading and shuttling protocol is needed for deterministic one-electron occupancy.
- The motional dipole is excellent for coupling but also exposes the qubit to charge noise.
- Spin-based storage could improve coherence, but that is a distinct, not-yet-demonstrated operating mode.

## References

- X. Zhou et al., "Single electrons on solid neon as a solid-state qubit platform," [Nature 605, 46–50 (2022)](https://doi.org/10.1038/s41586-022-04539-x).

## Linked Papers

- [[zhou-2022-solid-neon-electron-qubit]]

## Evergreen context

- [[jaynes-cummings-in-circuits]] — electron-photon strong coupling and dispersive control use the same circuit-QED interaction layer as superconducting qubits.
- [[dispersive-readout-mechanism]] — explains how the motional state is inferred from a resonator shift.
- [[charge-noise-sweet-spot]] — the central comparison for a strongly electric-dipole-coupled motional qubit.

## Related Entries

- [[semiconductor-charge-qubit]] — another electrically controlled charge-like encoding, but embedded in a semiconductor device.
- [[circuit-qed]] — shared microwave-control and readout architecture.
