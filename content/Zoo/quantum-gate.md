---
title: Quantum Gate
entry_type: gate
technology_family: Cross-Platform
status: demonstrated
first_demonstrated_year: 1995
keywords:
- quantum gate
- unitary operation
- gate fidelity
- control pulse
- single-qubit gate
- two-qubit gate
- entangling gate
- DRAG pulse
- randomized benchmarking
influence_score: 0.85
last_updated: '2026-10-26'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-10-26
figure_reviewed: false
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/quantum-gate-figure.provenance.json"
figure_reviewed_by: "pending 2026-10-26 regeneration"
figure_reviewed_at: "2026-10-26T14:00:00+00:00"
---

## Figure

![[quantum-gate-figure.png]]

## Description

A **quantum gate** is a physical control operation intended to implement a target unitary transformation on one or more qubits. The circuit symbol is an abstraction: hardware realizes the gate by shaping a time-dependent Hamiltonian, and the resulting propagator must approximate the target unitary within an error budget that includes decoherence, leakage, calibration error, and crosstalk.

**Single-qubit gates** generate rotations of the Bloch vector. Resonant in-phase and quadrature controls set the rotation axis in the equatorial plane, detuning contributes a $z$ component, and software frame updates implement virtual $Z$ rotations without a physical pulse. A universal gate set additionally requires at least one **entangling two-qubit gate**; CNOT, CZ, iSWAP-family, and Mølmer–Sørensen gates are different native realizations of that nonlocal resource.

In **superconducting circuits**, shaped microwave pulses implement one-qubit rotations. DRAG adds a derivative quadrature to suppress leakage in weakly anharmonic transmons. Entangling gates use interactions such as cross-resonance $ZX$, tunable-coupler controlled phase, resonator-mediated exchange, or parametrically activated iSWAP-like coupling. Representative one-qubit durations range from a few nanoseconds in strongly anharmonic fluxonium to tens of nanoseconds in transmons; two-qubit durations are commonly tens to hundreds of nanoseconds.

In **trapped ions**, Raman or microwave fields drive hyperfine or Zeeman qubits. Two-qubit gates use spin-dependent forces coupled through shared motional modes. The Mølmer–Sørensen interaction transiently displaces motion in phase space and closes the trajectory at the end of the pulse, ideally leaving a pure spin entangler; the Cirac–Zoller construction instead maps information through resolved sidebands and a single phonon.

In **semiconductor spin qubits**, ESR or EDSR provides local rotations, while voltage-controlled exchange between neighboring spins produces SWAP-family or controlled-phase operations. Exchange can be extremely fast, but charge noise, magnetic gradients, spectator states, and device-to-device variability make calibration and simultaneous operation central scaling problems.

In **neutral-atom processors**, local or global optical and microwave fields provide one-qubit control. Rydberg excitation creates a strong conditional interaction: blockade shifts the doubly excited state and permits a controlled phase. Reported fidelities depend on the averaging domain and leakage treatment, so symmetric-subspace benchmarks should not be compared naively with full two-qubit Haar-average fidelities.

For **photonic qubits**, passive linear optics implements deterministic one-qubit transformations on path, polarization, time-bin, or frequency-bin encodings. Deterministic photon–photon interactions are difficult; the KLM construction uses ancilla photons, detection, feed-forward, and teleportation to promote nondeterministic entangling operations, while fusion-based and measurement-based architectures consume entangled resource states.

Gate fidelity is not a single protocol-independent quantity. Randomized benchmarking suppresses state-preparation-and-measurement sensitivity under model assumptions; interleaved RB estimates a selected gate relative to a reference decay; gate-set tomography reconstructs a self-consistent gate set; and leakage-aware or subspace benchmarks answer narrower questions. The protocol, encoded subspace, averaging ensemble, concurrency, and uncertainty must accompany any record claim.

## Hamiltonian

The general controlled evolution is

$$
H(t)=H_0+\sum_k u_k(t)H_k,\qquad
U(t_g)=\mathcal{T}\exp\!\left[-\frac{i}{\hbar}\int_0^{t_g}H(t)\,dt\right].
$$

Here $H_0$ is the drift Hamiltonian, $H_k$ are available control or interaction operators, and $u_k(t)$ are calibrated waveforms. In a frame rotating near a two-level transition and after the rotating-wave approximation, a driven qubit is represented by

$$
\frac{H_{\mathrm{1q}}(t)}{\hbar}
=\frac{1}{2}\left[\Omega_x(t)\sigma_x+\Omega_y(t)\sigma_y+\Delta(t)\sigma_z\right].
$$

The pulse area and phase determine the rotation angle and axis. This reduction must be amended when the drive is strong, the qubit is weakly anharmonic, or counter-rotating terms are not negligible.

A useful canonical description of a two-qubit interaction is

$$
\frac{H_{\mathrm{int}}}{\hbar}
=J_{xx}(t)\,\sigma_x\!\otimes\!\sigma_x
+J_{yy}(t)\,\sigma_y\!\otimes\!\sigma_y
+J_{zz}(t)\,\sigma_z\!\otimes\!\sigma_z,
$$

with platform-specific local terms and unwanted spectators added as needed. For isotropic spin exchange, with $J(t)$ expressed as an energy,

$$
H_{\mathrm{ex}}(t)=\frac{J(t)}{\hbar^2}\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2
=\frac{J(t)}{4}\left(XX+YY+ZZ\right).
$$

Defining $\theta=\hbar^{-1}\int J(t)\,dt$, $\theta=\pi/2$ produces a $\sqrt{\mathrm{SWAP}}$ up to global phase, while $\theta=\pi$ produces SWAP. A controlled-$Z$ does **not** follow from one $\sqrt{\mathrm{SWAP}}$ pulse alone; it requires an appropriate interaction with a $ZZ$ component or a compiled sequence containing exchange pulses and local rotations.

## Motivation

- [[divincenzo-criteria]] make a high-quality universal gate set a basic requirement for a useful quantum processor.
- [[threshold-theorem]] turns control quality into a scaling question: physical errors must be sufficiently low and sufficiently well behaved for logical suppression to beat overhead.
- Native interactions determine compilation depth. [[resonator-as-quantum-bus]] and [[sqrt-swap-as-universal-gate]] illustrate two distinct routes from hardware coupling to universal circuits.
- Gate engineering exposes the central hardware trade-off: stronger, faster control reduces decoherence exposure but can increase leakage, counter-rotating error, crosstalk, heating, and calibration sensitivity.

## Experimental Status

**First experimental quantum logic gate — Monroe et al. (1995):**
- Demonstrated a controlled operation between the internal and motional states of a single trapped $^9\mathrm{Be}^+$ ion, establishing the first experimental two-bit quantum logic gate.

**Photonic universality with measurement — Knill, Laflamme, and Milburn (2001):**
- Showed that scalable quantum computation is possible with linear optics, ancilla photons, photodetection, feed-forward, and teleportation despite nondeterministic primitive entanglers.

**Leakage-aware superconducting control — Motzoi et al. (2009):**
- Introduced the derivative-quadrature strategy now called DRAG for suppressing leakage and phase error in weakly nonlinear qubits.

**Fast superconducting one-qubit frontier — Rower et al. (2024):**
- Demonstrated commensurate-pulse control of fluxonium and measured a best average single-qubit gate fidelity of $99.99807(7)\%$; the optimized $X$ pulse was about $8.2\,\mathrm{ns}$.

**Trapped-ion one-qubit frontier — Smith et al. (2025):**
- Reported a minimum error per Clifford of $1.5(4)\times10^{-7}$ on a $^{43}\mathrm{Ca}^+$ hyperfine clock qubit for gate times spanning $4.4$ to $35\,\mu\mathrm{s}$.

**Platform-diverse entangling benchmarks — Tsai et al., Edlbauer et al., and Hughes et al. (2025):**
- Neutral atoms: a Rydberg CZ fidelity of $0.9971(5)$ averaged over symmetric input states and downward-corrected for leakage.
- Silicon donor processor: one-qubit fidelity up to $99.99\%$ and a local nuclear-spin CZ fidelity of $99.90(4)\%$ in an 11-qubit device.
- Trapped ions: an electronically driven two-qubit gate error of $8.4(7)\times10^{-5}$ without ground-state cooling, using a $225.8\,\mu\mathrm{s}$ smooth gate.

**Balanced superconducting operation — Marxer et al. (2026):**
- Demonstrated a $33\,\mathrm{ns}$ tunable-coupler CZ with $99.93\%$ fidelity averaged over 40 hours, alongside $>99.98\%$ one-qubit gates and $>99.94\%$ readout in the same device.

The 2024–2026 literature search found no later peer-reviewed result that cleanly supersedes the cited one-qubit trapped-ion record, the Rower fluxonium result, the Tsai neutral-atom CZ benchmark, or the Marxer balanced superconducting benchmark as of this audit. Cross-platform rankings remain conditional on the benchmarking protocol and operating context.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q Clifford fidelity, trapped ion | $99.999985\%$ | $^{43}\mathrm{Ca}^+$; minimum error $1.5(4)\times10^{-7}$; $4.4$–$35\,\mu\mathrm{s}$ | [Smith et al. 2025](https://doi.org/10.1103/42w2-6ccy) |
| 1Q gate fidelity, fluxonium | $99.99807(7)\%$ | Best measured average; optimized $X$ pulse $\approx8.2\,\mathrm{ns}$ | [Rower et al. 2024](https://doi.org/10.1103/PRXQuantum.5.040342) |
| 1Q gate fidelity, transmon | $99.99258(4)\%$ | RB error $(7.42\pm0.04)\times10^{-5}$ | [Li et al. 2023](https://doi.org/10.1038/s41534-023-00781-x) |
| 1Q gate fidelity, silicon donor processor | up to $99.99\%$ | Best qubit in an 11-qubit atom processor | [Edlbauer et al. 2025](https://doi.org/10.1038/s41586-025-09827-w) |
| 2Q fidelity, trapped ion | $99.9916(7)\%$ | Smooth gate; no ground-state cooling; $225.8\,\mu\mathrm{s}$ | [Hughes et al. 2025](https://arxiv.org/abs/2510.17286) |
| 2Q CZ fidelity, superconducting transmons | $99.93\%$ | 40-hour average; $33\,\mathrm{ns}$; PALEA calibration | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |
| 2Q CZ fidelity, neutral atoms | $99.71(5)\%$ | Symmetric-input average; leakage-downward-corrected | [Tsai et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010331) |
| 2Q CZ fidelity, silicon donor nuclei | $99.90(4)\%$ | Local nuclear-spin CZ in an 11-qubit processor | [Edlbauer et al. 2025](https://doi.org/10.1038/s41586-025-09827-w) |

These values are not a protocol-independent league table. RB, interleaved RB, leakage-aware subspace RB, and restricted-input fidelity averages probe different channels and can differ in their treatment of leakage, SPAM, drift, concurrency, and spectators.

## Scaling Considerations

- **Decoherence:** relaxation and dephasing act during the finite gate time. The common estimate $t_g/T_{\mathrm{coh}}$ is only an order-of-magnitude guide and does not capture non-Markovian noise or pulse-dependent exposure.
- **Leakage:** fast control can populate noncomputational levels or motional states. DRAG, smooth envelopes, adiabatic closure, and leakage-aware calibration target different manifestations of this problem.
- **Crosstalk and spectators:** residual $ZZ$, microwave or optical spillover, shared modes, and frequency crowding create context-dependent and correlated errors that isolated-pair RB can miss.
- **Drift and calibration:** qubit frequencies, coupling strengths, pulse transfer functions, and readout parameters drift. Long-duration averages and simultaneous benchmarking are more informative for scale than a single best calibration.
- **Control hardware:** waveform bandwidth, DAC resolution, phase noise, latency, cryogenic heat load, optical stability, and channel count can dominate system-level performance even when a single gate is excellent.

## References

### Landmark gates and control methods
- C. Monroe et al., “Demonstration of a Fundamental Quantum Logic Gate,” [Physical Review Letters 75, 4714 (1995)](https://doi.org/10.1103/PhysRevLett.75.4714).
- E. Knill, R. Laflamme, and G. J. Milburn, “A scheme for efficient quantum computation with linear optics,” [Nature 409, 46 (2001)](https://doi.org/10.1038/35051009).
- F. Motzoi et al., “Simple Pulses for Elimination of Leakage in Weakly Nonlinear Qubits,” [Physical Review Letters 103, 110501 (2009)](https://doi.org/10.1103/PhysRevLett.103.110501).

### Recent one-qubit benchmarks
- Z. Li et al., “Error per single-qubit gate below $10^{-4}$ in a superconducting qubit,” [npj Quantum Information 9 (2023)](https://doi.org/10.1038/s41534-023-00781-x).
- D. A. Rower et al., “Suppressing Counter-Rotating Errors for Fast Single-Qubit Gates with Fluxonium,” [PRX Quantum 5, 040342 (2024)](https://doi.org/10.1103/PRXQuantum.5.040342) — [arXiv:2406.08295](https://arxiv.org/abs/2406.08295).
- M. C. Smith et al., “Single-qubit gates with errors at the $10^{-7}$ level,” [Physical Review Letters 134, 230601 (2025)](https://doi.org/10.1103/42w2-6ccy) — [arXiv:2412.04421](https://arxiv.org/abs/2412.04421).

### Recent entangling and integrated benchmarks
- R. B.-S. Tsai et al., “Benchmarking and fidelity response theory of high-fidelity Rydberg entangling gates,” [PRX Quantum 6, 010331 (2025)](https://doi.org/10.1103/PRXQuantum.6.010331) — [arXiv:2407.20184](https://arxiv.org/abs/2407.20184).
- H. Edlbauer et al., “An 11-qubit atom processor in silicon,” [Nature 648, 569 (2025)](https://doi.org/10.1038/s41586-025-09827-w) — [arXiv:2506.03567](https://arxiv.org/abs/2506.03567).
- A. C. Hughes et al., “Trapped-ion two-qubit gates with $>99.99\%$ fidelity without ground-state cooling,” [arXiv:2510.17286 (2025)](https://arxiv.org/abs/2510.17286).
- F. Marxer et al., “Above $99.9\%$ Fidelity Single-Qubit Gates, Two-Qubit Gates, and Readout in a Single Superconducting Quantum Device,” [PRX Quantum 7, 020333 (2026)](https://doi.org/10.1103/n86s-2b88) — [arXiv:2508.16437](https://arxiv.org/abs/2508.16437).

## Linked Papers
- [[monroe-1995-demonstration-fundamental-logic]]
- [[knill-2001-klm]]
- [[motzoi-2009-simple-pulses-elimination]]
- [[li-2023-error-per-single]]
- [[rower-2024-suppressing-counter-rotating-errors]]
- [[smith-2024-single-qubit-gate-errors]]
- [[tsai-2025-benchmarking-rydberg-entangling-gates]]
- [[edlbauer-2025-11-qubit-atom-processor]]
- [[hughes-2025-trapped-ion-two-qubit-gates]]
- [[marxer-2026-above-99-9-fidelity]]

## Related Entries
- [[transmon]] — dominant superconducting qubit platform
- [[fluxonium]] — strongly anharmonic superconducting qubit with record one-qubit control
- [[trapped-ion-qubit]] — platform with the lowest reported physical gate errors
- [[spin-qubit]] — umbrella entry for semiconductor spin encodings and exchange control
- [[silicon-spin-qubit]] — CMOS-compatible quantum-dot spin implementations
- [[kane-qubit]] — donor nuclear and electron spins in silicon
- [[neutral-atom-qubit]] — optically trapped atoms with Rydberg-mediated entanglers
- [[rydberg-neutral-atom-qubit]] — Rydberg-excited encoding and control
- [[photonic-qubit]] — flying-qubit platform based on optical modes
- [[qubit-readout]] — measurement and SPAM, distinct from gate error
- [[circuit-qed]] — microwave architecture for superconducting control and coupling
- [[tunable-coupler]] — switchable superconducting two-qubit interaction
- [[cirac-zoller-gate]] — original trapped-ion entangling construction
- [[molmer-sorenson-gate]] — workhorse spin-dependent-force trapped-ion gate
- [[dual-rail-photonic-qubit]] — path-mode photonic encoding
- [[linear-optical-photonic-qubit]] — KLM-family optical processing
- [[exchange-only-qubit]] — encoded spin control using exchange interactions
- [[surface-code-logical-qubit]] — error correction whose overhead depends strongly on gate error
