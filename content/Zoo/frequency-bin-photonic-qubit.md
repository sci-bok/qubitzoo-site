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
last_updated: '2026-08-06'
generated_by: scibok-curation
verified_by: codex-deep-audit-2026-08-06
---

## Figure

![[frequency-bin-photonic-qubit-figure.png]]

## Description

A frequency-bin photonic qubit uses two discrete optical frequency modes of a single photon,

$$|\psi\rangle=\alpha|\omega_0\rangle+\beta e^{i\phi}|\omega_1\rangle.$$

Here $|\omega_m\rangle=a_m^\dagger|\mathrm{vac}\rangle$ and $|\alpha|^2+|\beta|^2=1$. Electro-optic phase modulators coherently mix bins, while Fourier-transform pulse shapers apply bin-dependent phases. The same hardware naturally extends from qubits to high-dimensional qudits. Frequency modes share one spatial path and polarization, making them stable in fibre and compatible with dense wavelength multiplexing.

## Hamiltonian and Control

For equally spaced bins, a single-tone electro-optic modulator driven at the bin spacing produces the nearest-neighbour synthetic-frequency-lattice coupling

$$H_{\mathrm{EOM}}=\hbar g\sum_m\left(e^{i\phi_{\mathrm{RF}}}a_{m+1}^\dagger a_m+e^{-i\phi_{\mathrm{RF}}}a_m^\dagger a_{m+1}\right),$$

while a pulse shaper applies $U_{\mathrm{PS}}=\sum_m e^{i\theta_m}|m\rangle\langle m|$. Multi-tone modulation adds longer-range couplings. Alternating EOM and pulse-shaper stages synthesizes arbitrary $SU(2)$ rotations on a selected pair of bins and more general qudit unitaries, with finite success probability because modulation can scatter amplitude outside the chosen computational bins.

## Motivation

- Use telecom-compatible spectral multiplexing without multiplying spatial paths.
- Perform reconfigurable transformations using mature electro-optic and pulse-shaping technology.
- Scale naturally to qudits and parallel frequency channels.

## Experimental Status

Lu et al. demonstrated fully arbitrary control of frequency-bin qubits in 2020. Their quantum frequency processor implemented all fundamental rotations, tested 41 states across the Bloch sphere, measured mode-transformation fidelities above 0.9993 apart from one reported outlier, and obtained Bayesian-tomography state fidelities above 0.98 for every tested state.

Two 2026 preprints move the platform from bulk optics toward integrated processors. Congia et al. monolithically combined a biphoton frequency-comb source, pump rejection, phase modulators, and a four-channel pulse shaper on a $4\times7\,\mathrm{mm}^2$ silicon chip; they reported tunable frequency-beamsplitter success probabilities above 94%, a reconstructed 50:50 transformation fidelity of $0.999(1)$, and Bell-state tomography fidelity of $0.957(3)$. Yang et al. used thin-film lithium niobate coupled resonators to report arbitrary single-qubit rotations with an average control metric of $97.1(6)\%$ and an ancilla-free frequency-bin controlled-phase gate with a lower-bound process fidelity of $91.4(14)\%$. Both results remain preprints as of this audit.

A separate 2026 preprint by Koviri et al. demonstrates the high-dimensional scaling direction: spectral anticorrelations across 38 observed bins and a certified lower-bound biphoton Hilbert-space dimension of 289, corresponding to two 17-dimensional frequency-bin qudits.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Arbitrary-control state fidelity | $\mathcal{F}_\rho>0.98$ | All 41 tested Bloch-sphere states | [Lu et al. 2020](https://doi.org/10.1103/PhysRevLett.125.120503) |
| Experimental mode-transformation fidelity | $>0.9993$ except one reported outlier | Distinct from single-photon state fidelity | [Lu et al. 2020](https://arxiv.org/abs/2008.07444) |
| Integrated frequency beamsplitter | $F=0.999(1)$; success probability $>94\%$ | $4\times7\,\mathrm{mm}^2$ silicon processor; preprint | [Congia et al. 2026](https://arxiv.org/abs/2602.14240) |
| Integrated Bell-state tomography | $F=0.957(3)$ | Generated and manipulated on the same silicon chip; preprint | [Congia et al. 2026](https://arxiv.org/abs/2602.14240) |
| Integrated two-qubit controlled-phase gate | $F\geq91.4(14)\%$ | Lower-bound process fidelity on thin-film lithium niobate; preprint | [Yang et al. 2026](https://arxiv.org/abs/2603.11471) |
| High-dimensional frequency-bin state | 38 observed bins; dimension $\geq289$ | Two 17-dimensional entangled qudits; preprint | [Koviri et al. 2026](https://arxiv.org/abs/2605.14314) |

## Scaling Considerations

- Modulator bandwidth, pulse-shaper resolution, and insertion loss bound the usable number of bins.
- Spectral leakage and phase calibration grow with processor dimension.
- A frequency-mode transformation can have very high conditional fidelity while still losing probability to modes outside the computational subspace; fidelity and success probability must be reported separately.
- Entangling operations still depend on interference, measurement, nonlinear optics, or resource-state architectures.

## References

- H.-H. Lu et al., "Fully Arbitrary Control of Frequency-Bin Qubits," [Phys. Rev. Lett. 125, 120503 (2020)](https://doi.org/10.1103/PhysRevLett.125.120503); [arXiv:2008.07444](https://arxiv.org/abs/2008.07444).
- S. Congia et al., "Fully integrated quantum frequency processor on a silicon chip," [arXiv:2602.14240 (2026)](https://arxiv.org/abs/2602.14240), preprint.
- R. Yang et al., "Quantum photonic frequency processor on thin-film lithium niobate," [arXiv:2603.11471 (2026)](https://arxiv.org/abs/2603.11471), preprint.
- P. Koviri et al., "Quantum optical synthesis of high-dimensional ultrafast frequency-bin qudits," [arXiv:2605.14314 (2026)](https://arxiv.org/abs/2605.14314), preprint.

## Linked Papers

- [[lu-2020-frequency-bin-control]]
- [[congia-2026-integrated-frequency-processor]]
- [[yang-2026-tfln-frequency-processor]]
- [[koviri-2026-frequency-bin-qudits]]

## Evergreen context

- [[erasure-error-vs-pauli-error]] — optical loss remains the dominant fault channel even when control occurs in frequency space.
- [[quantum-hardware]] — the encoding is inseparable from the bandwidth, loss, and calibration limits of electro-optic hardware.

## Related Entries

- [[time-bin-photonic-qubit]] — temporal rather than spectral mode encoding.
- [[polarization-photonic-qubit]] — polarization encoding in the same spatial path.
- [[dual-rail-photonic-qubit]] — spatial-mode encoding.
- [[photonic-qubit]] — umbrella overview of photonic encodings.
- [[linear-optical-photonic-qubit]] — gate operations based on interference, measurement, and feed-forward.
