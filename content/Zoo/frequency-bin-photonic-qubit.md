---
title: Frequency-Bin Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/frequency-bin-photonic-qubit-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:45.920824+00:00"
keywords: [frequency bin, spectral mode, electro-optic modulation, pulse shaper, quantum frequency processor, photonic qudit]
influence_score: 0.74
last_updated: '2026-08-02'
generated_by: scibok-curation
verified_by: codex-literature-audit-2026-08-02
---

## Figure

![[frequency-bin-photonic-qubit-figure.png]]

## Description

A frequency-bin photonic qubit uses two discrete optical frequency modes of a single photon,

$$|\psi\rangle=\alpha|\omega_0\rangle+\beta e^{i\phi}|\omega_1\rangle.$$

Electro-optic phase modulators coherently mix bins, while Fourier-transform pulse shapers apply bin-dependent phases. The same hardware naturally extends from qubits to high-dimensional qudits. Frequency modes share one spatial path and polarization, making them stable in fibre and compatible with dense wavelength multiplexing.

## Hamiltonian and Control

An electro-optic modulator driven at the bin spacing creates a synthetic frequency-lattice coupling,

$$H_{\mathrm{EOM}}=\hbar\sum_m J_m e^{i\phi_m}a_{m+1}^\dagger a_m+\mathrm{h.c.},$$

while a pulse shaper applies $U_{\mathrm{PS}}=\sum_m e^{i\theta_m}|m\rangle\langle m|$. Alternating these operations synthesizes arbitrary $SU(2)$ rotations on a selected pair of bins and more general unitaries on frequency-bin qudits.

## Motivation

- Use telecom-compatible spectral multiplexing without multiplying spatial paths.
- Perform reconfigurable transformations using mature electro-optic and pulse-shaping technology.
- Scale naturally to qudits and parallel frequency channels.

## Experimental Status

Lu et al. demonstrated fully arbitrary control of frequency-bin qubits in 2020. A quantum frequency processor implemented all fundamental rotations, tested 41 states across the Bloch sphere, and achieved near-unity mode-transformation fidelity with state verification by Bayesian tomography.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Control coverage | Arbitrary $SU(2)$ | 41 tested Bloch-sphere states | [Lu et al. 2020](https://doi.org/10.1103/PhysRevLett.125.120503) |
| Mode-transformation fidelity | Near unity | Fundamental rotations in a quantum frequency processor | [Lu et al. 2020](https://doi.org/10.1103/PhysRevLett.125.120503) |
| Native extension | Qudit | More than two discrete bins | [Lu et al. 2020](https://doi.org/10.1103/PhysRevLett.125.120503) |

## Scaling Considerations

- Modulator bandwidth, pulse-shaper resolution, and insertion loss bound the usable number of bins.
- Spectral leakage and phase calibration grow with processor dimension.
- Entangling operations still depend on interference, measurement, nonlinear optics, or resource-state architectures.

## References

- H.-H. Lu et al., "Fully Arbitrary Control of Frequency-Bin Qubits," [Phys. Rev. Lett. 125, 120503 (2020)](https://doi.org/10.1103/PhysRevLett.125.120503).

## Linked Papers

- [[lu-2020-frequency-bin-control]]

## Evergreen context

- [[erasure-error-vs-pauli-error]] — optical loss remains the dominant fault channel even when control occurs in frequency space.
- [[quantum-hardware]] — the encoding is inseparable from the bandwidth, loss, and calibration limits of electro-optic hardware.

## Related Entries

- [[time-bin-photonic-qubit]] — temporal rather than spectral mode encoding.
- [[polarization-photonic-qubit]] — polarization encoding in the same spatial path.
- [[dual-rail-photonic-qubit]] — spatial-mode encoding.
