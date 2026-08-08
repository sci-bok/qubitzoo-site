---
title: Electron-on-Solid-Neon Qubit
entry_type: qubit
technology_family: Floating Electron
status: demonstrated
figure_reviewed: false
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/electron-on-solid-neon-qubit-figure.provenance.json"
first_proposed_year: 2021
first_demonstrated_year: 2022
keywords: [electron on neon, floating electron, motional qubit, charge qubit, circuit QED, vacuum interface]
influence_score: 0.72
last_updated: '2026-08-08'
generated_by: scibok-curation
verified_by: codex-daily-deep-audit-2026-08-08
---

## Figure

![[electron-on-solid-neon-qubit-figure.png]]

## Description

An **electron-on-solid-neon (eNe) qubit** stores quantum information in two lateral motional states of a single electron floating in vacuum roughly a nanometre above a solid-neon film. Image-charge attraction binds the electron toward the dielectric surface, while the neon surface barrier keeps it out of the solid. Electrode voltages and the local neon topography jointly determine the in-plane confinement.

The encoded states $|0\rangle$ and $|1\rangle$ are the lowest selected eigenstates of this anharmonic lateral potential. Their electric-dipole transition couples strongly to the microwave electric field of a superconducting resonator, enabling circuit-QED control and dispersive readout without embedding the carrier in a semiconductor crystal. The demonstrated devices are charge-like motional qubits, not electron-spin qubits.

Surface morphology is both a resource and a liability. Nanoscale neon bumps can provide strong natural confinement, including ring-like states, but uncontrolled trapping sites make device parameters difficult to reproduce and can leave stray electrons that add charge noise. Proposed engineered or levitated-neon geometries aim to make trapping deterministic while retaining the vacuum interface.

## Hamiltonian

After freezing the tightly bound vertical motion into its ground state, a useful lateral model is

$$H_e=\frac{\hat{\mathbf p}_{\parallel}^{2}}{2m_e}+V_{\mathrm{elec}}(\hat{\mathbf r}_{\parallel};\{V_i\})+V_{\mathrm{surf}}(\hat{\mathbf r}_{\parallel}),$$

where $V_{\mathrm{elec}}$ is set by the biased trap and guard electrodes and $V_{\mathrm{surf}}$ captures confinement from neon thickness and topography. The logical states are selected eigenstates $H_e|n\rangle=E_n|n\rangle$, with $\omega_{01}=(E_1-E_0)/\hbar$. The anharmonicity convention used here is $\alpha=\omega_{12}-\omega_{01}$; it need not have the negative sign familiar from a transmon.

Electric-dipole coupling to a resonator mode is described before truncation by

$$H=\hbar\omega_r a^\dagger a+\sum_n E_n|n\rangle\!\langle n|+\hbar(a+a^\dagger)\sum_{m,n}g_{mn}|m\rangle\!\langle n|.$$

Restricting to $|0\rangle,|1\rangle$ and applying the rotating-wave approximation gives the Jaynes–Cummings form

$$\frac{H}{\hbar}=\omega_r a^\dagger a+\frac{\omega_{01}}{2}\sigma_z+g_{01}(a^\dagger\sigma_-+a\sigma_+).$$

For detuning $\Delta=\omega_{01}-\omega_r$ with $|\Delta|\gg g_{01}$, the resonator acquires a state-dependent dispersive pull. The two-level estimate is $\chi\simeq g_{01}^2/\Delta$; quantitative work must retain higher motional levels and their measured anharmonicity.

## Motivation

- Place a charge carrier in vacuum above an inert quantum solid rather than inside a noisy semiconductor interface.
- Combine fast electrical control with superconducting circuit-QED readout and resonator-mediated connectivity.
- Exploit a large motional dipole for strong coupling while pursuing sweet spots and surface engineering to suppress charge noise.
- Provide a possible charge-control interface for future electron-spin storage, which remains a distinct, not-yet-demonstrated eNe operating mode.

## Experimental Status

**First circuit-QED demonstration — Zhou et al. (2022):**
- Demonstrated vacuum Rabi splitting with $g/2\pi=3.5\,\mathrm{MHz}$, coherent microwave control, and dispersive readout.
- Measured $T_1=15\,\mu\mathrm{s}$ and Hahn-echo coherence $T_2^{\mathrm{echo}}=220\,\mathrm{ns}$; the measured positive anharmonicity was about $40\,\mathrm{MHz}$ at one operating point.

**Coherence and fidelity benchmark — Zhou et al. (2024):**
- Extended relaxation and coherence into the $0.1\,\mathrm{ms}$ regime, including $T_1=102.2\,\mu\mathrm{s}$, sweet-spot $T_2^*=42.8\,\mu\mathrm{s}$, and $T_2^{\mathrm{echo}}=92.9\,\mu\mathrm{s}$ across the reported devices and bias points.
- Reported 98.1% single-shot readout fidelity without a quantum-limited amplifier and 99.97% average single-qubit gate fidelity from Clifford randomized benchmarking.

**Confinement mechanism — Kanai et al. (2024):**
- Showed theoretically that nanoscale solid-neon bumps can naturally confine electrons in ring-like lateral states, explaining why uncontrolled surface morphology can determine which electrons become usable qubits.

**Multi-qubit control — Li et al. (2026 preprint; first posted 2025):**
- Demonstrated coherent cross-resonance and bSWAP operations between interacting eNe charge qubits and observed direct charge–charge coupling up to $62.5\,\mathrm{MHz}$ in a three-qubit device.
- No two-qubit gate fidelity was reported, so this remains a control milestone rather than a fidelity benchmark.

**Noise and temperature characterization — Li et al. (2026):**
- Measured charge-noise spectra and maintained Hahn-echo coherence above $1\,\mu\mathrm{s}$ for qubits near $5\,\mathrm{GHz}$ at temperatures up to $400\,\mathrm{mK}$.

**Spin-compatible fast control — Wang et al. (2026 preprint):**
- Demonstrated microwave readout and charge-qubit Rabi frequencies up to $76\,\mathrm{MHz}$ with a magnetic-field-compatible NbTiN nanowire resonator.
- The device still trapped the electron at an unintended surface site, underscoring that deterministic positioning remains unresolved.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Charge–photon coupling $g/2\pi$ | 3.5 MHz | Vacuum Rabi splitting in the first device | [Zhou et al. 2022](https://doi.org/10.1038/s41586-022-04539-x) |
| $T_1$ | 102.2 μs | Longest value in the 2024 study; bias point with reduced Purcell decay | [Zhou et al. 2024](https://doi.org/10.1038/s41567-023-02247-5) |
| $T_2^*$ | 42.8 μs | Ramsey dephasing at a charge sweet spot | [Zhou et al. 2024](https://doi.org/10.1038/s41567-023-02247-5) |
| $T_2^{\mathrm{echo}}$ | 92.9 μs | Hahn echo at the same sweet spot | [Zhou et al. 2024](https://doi.org/10.1038/s41567-023-02247-5) |
| 1Q gate fidelity | 99.97% | Average Clifford randomized-benchmarking fidelity | [Zhou et al. 2024](https://doi.org/10.1038/s41567-023-02247-5) |
| Single-shot readout fidelity | 98.1% | No quantum-limited amplifier | [Zhou et al. 2024](https://doi.org/10.1038/s41567-023-02247-5) |
| Direct inter-qubit coupling $J/2\pi$ | Up to 62.5 MHz | Three-qubit device; preprint, no 2Q fidelity reported | [Li et al. 2026](https://arxiv.org/abs/2503.23738) |
| Charge-qubit Rabi frequency | Up to 76 MHz | NbTiN spin-compatible resonator; preprint | [Wang et al. 2026](https://arxiv.org/abs/2605.31185) |
| Elevated-temperature coherence | $T_2^{\mathrm{echo}}>1\,\mu$s at 400 mK | Qubits operated near 5 GHz | [Li et al. 2026](https://doi.org/10.1038/s41928-026-01613-4) |

## Scaling Considerations

- Uncontrolled neon morphology produces run-to-run trap variability, background electrons, and device-frequency disorder.
- Deterministic single-electron loading, positioning, shuttling, and reproducible inter-qubit spacing remain open engineering problems.
- The large motional dipole enables fast control and strong coupling but also increases sensitivity to electric-field fluctuations.
- Direct charge–charge coupling now supports coherent multi-qubit operations, but calibrated high-fidelity entangling gates have not yet been reported.
- Levitated-neon-particle arrays are a 2026 peer-reviewed proposal for separating the qubit host from substrate roughness; they are not yet an experimental processor architecture.

## References

### Experimental demonstrations

- X. Zhou et al., "Single electrons on solid neon as a solid-state qubit platform," [Nature 605, 46–50 (2022)](https://doi.org/10.1038/s41586-022-04539-x) — [arXiv:2106.10326](https://arxiv.org/abs/2106.10326).
- X. Zhou et al., "Electron charge qubit with 0.1 millisecond coherence time," [Nature Physics 20, 116–122 (2024)](https://doi.org/10.1038/s41567-023-02247-5) — [arXiv:2210.12337](https://arxiv.org/abs/2210.12337).
- X. Li et al., "Coherent manipulation of interacting electron qubits on solid neon," [arXiv:2503.23738 (2026 version; first posted 2025)](https://arxiv.org/abs/2503.23738).
- X. Li et al., "Solid neon as a noise-resilient host for electron qubits above 100 mK," [Nature Electronics 9, 621–629 (2026)](https://doi.org/10.1038/s41928-026-01613-4) — [arXiv:2502.01005](https://arxiv.org/abs/2502.01005).
- J. Wang et al., "Fast coherent control of a charge qubit on solid neon with a spin-qubit-compatible resonator," [arXiv:2605.31185 (2026)](https://arxiv.org/abs/2605.31185).

### Confinement and scaling

- T. Kanai, D. Jin, and W. Guo, "Single-Electron Qubits Based on Quantum Ring States on Solid Neon Surface," [Physical Review Letters 132, 250603 (2024)](https://doi.org/10.1103/PhysRevLett.132.250603) — [arXiv:2311.02501](https://arxiv.org/abs/2311.02501).
- S. Inui et al., "On-Chip Levitated Neon Particle Arrays for Robust and Scalable Electron Qubits," [PRX Quantum 7, 033019 (2026)](https://doi.org/10.1103/j7mn-x9f2) — [arXiv:2512.00654](https://arxiv.org/abs/2512.00654).

## Linked Papers

- [[zhou-2022-solid-neon-electron-qubit]]
- [[zhou-2024-neon-charge-qubit]]
- [[kanai-2024-neon-ring-states]]
- [[li-2026-interacting-neon-qubits]]
- [[li-2026-neon-noise-resilience]]
- [[wang-2026-fast-neon-charge-control]]
- [[inui-2026-levitated-neon-arrays]]

## Evergreen context

- [[jaynes-cummings-in-circuits]] — electron-photon strong coupling reduces to this interaction after two-level truncation and the rotating-wave approximation.
- [[dispersive-readout-mechanism]] — explains how the motional state produces a state-dependent resonator shift.
- [[charge-noise-sweet-spot]] — the central comparison for a strongly electric-dipole-coupled motional qubit.

## Related Entries

- [[semiconductor-charge-qubit]] — another electrically controlled charge-like encoding, but embedded in a semiconductor device.
- [[circuit-qed]] — shared microwave-control, strong-coupling, and dispersive-readout architecture.
- [[qubit-readout]] — system-level context for the demonstrated dispersive and single-shot measurements.
- [[spin-qubit]] — the proposed long-lived storage degree of freedom for future eNe devices; it has not yet been demonstrated on solid neon.
