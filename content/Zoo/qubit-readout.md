---
title: Qubit Readout
entry_type: readout
technology_family: Classical Hardware
status: demonstrated
figure_reviewed: true
first_proposed_year: 1999
first_demonstrated_year: 2004
keywords:
- readout
- dispersive readout
- fluorescence
- QND measurement
- state discrimination
- single-shot
influence_score: 0.88
last_updated: '2026-11-11'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-11-11
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/qubit-readout-figure.provenance.json"
figure_reviewed_by: "codex-daily-audit-2026-11-11"
figure_reviewed_at: "2026-11-11T15:10:47.095279+00:00"
---

## Figure

![[qubit-readout-figure.png]]

## Description

Qubit readout maps a quantum state onto a classical record. It is required at the end of a computation and, increasingly, during a computation for active reset, feed-forward, teleportation, and repeated error-syndrome extraction. The useful systems metric is therefore not assignment fidelity alone: latency, qubit back-action, leakage, residual photons, crosstalk, retention, and the time until coherent operations can safely resume all matter.

Readout mechanisms vary by platform but share the goal of mapping qubit states to distinguishable classical signals with minimal back-action:

**Superconducting qubits:** Dispersive readout uses a coupled microwave resonator. The qubit-state-dependent resonator frequencies, $\omega_r\pm\chi$, are distinguished by homodyne or heterodyne measurement of a reflected or transmitted probe. Purcell filters protect the qubit while JPAs, JTWPAs, and related near-quantum-limited amplifiers preserve the weak pointer signal. Fast readout must also suppress measurement-induced transitions and empty the resonator before the next gate.

**Trapped ions:** State-dependent fluorescence maps one qubit state to a bright cycling transition while the other is shelved in a metastable dark state. Time-resolved photon counting on a PMT or camera discriminates the two states; adaptive stopping can reduce average detection time without sacrificing the target error rate.

**Neutral atoms:** Fluorescence imaging uses high-NA objectives to resolve individual tweezers. Conventional imaging can eject atoms, so modern systems combine state-selective shelving, spatial transport, and non-destructive or erasure-aware detection to support atom reuse and mid-circuit measurement.

**Spin qubits:** Spin-to-charge conversion uses energy-selective tunneling (Elzerman readout) or Pauli spin blockade, followed by charge sensing with a quantum point contact, SET, or gate-based reflectometry. Latching can enlarge the charge-signal lifetime, while relaxation during the conversion and integration window limits fidelity.

## Hamiltonian

For superconducting-qubit readout, a representative driven dispersive Hamiltonian is

$$
\frac{H_{\mathrm{disp}}}{\hbar}
=\left(\omega_r+\chi\sigma_z\right)a^\dagger a
+\frac{\widetilde{\omega}_q}{2}\sigma_z
+\left[\epsilon(t)e^{-i\omega_d t}a^\dagger+\epsilon^*(t)e^{i\omega_d t}a\right].
$$

Here $a$ annihilates a readout-resonator photon, $\epsilon(t)$ is the measurement drive, $g$ is the qubit-resonator coupling, and $\Delta=\omega_{01}-\omega_r$ is the detuning. The qubit shifts the resonator by $\pm\chi$, so the two pointer resonances are separated by $2|\chi|$. For an ideal two-level Jaynes–Cummings system in the large-detuning limit, $\chi\simeq g^2/\Delta$. For a weakly anharmonic transmon with $\alpha=\omega_{12}-\omega_{01}<0$,

$$
\chi\simeq g^2\!\left(\frac{1}{\Delta}-\frac{1}{\Delta+\alpha}\right)
=\frac{g^2\alpha}{\Delta(\Delta+\alpha)},
$$

up to sign conventions and higher-level corrections. The interaction is approximately QND because $[H_{\mathrm{disp}},\sigma_z]=0$ within the dispersive model; strong measurement drives, Purcell decay, dressed dephasing, and multiphoton resonances break that idealization and can cause relaxation, excitation, or leakage.

## Motivation

- **Error correction bottleneck:** Repeated syndrome extraction requires low assignment error, low leakage, and short dead time; a nominally accurate readout can still harm the code through residual photons or measurement-induced transitions.
- **Mid-circuit measurement:** Real-time error correction and feed-forward require fast, high-fidelity, minimally destructive readout within the circuit.
- **Scaling constraint:** Multiplexed readout efficiency determines how many qubits can share a single measurement line, impacting wiring overhead.
- **Speed-fidelity tradeoff:** Longer integration improves signal separation but exposes the qubit to more relaxation. Larger resonator linewidth and photon number speed up acquisition but increase Purcell loss, crosstalk, and measurement-induced transitions unless the architecture is engineered around them.

## Experimental Status

**Dispersive readout of superconducting qubits — Wallraff et al. (2004):**
- Established circuit QED experimentally and resolved qubit-state-dependent resonator spectroscopy, providing the basis of the modern dispersive-readout paradigm.

**Single-shot superconducting readout — Walter et al. (2017):**
- Demonstrated 99.2% assignment fidelity in 88 ns and 98.25% in 48 ns using strong dispersive coupling, Purcell filtering, and phase-sensitive parametric amplification.

**Cross-platform and scaling milestones — Myerson et al. (2008), Bluvstein et al. (2024), Ma et al. (2024), and Lainé et al. (2026):**
- Time-resolved trapped-ion fluorescence reached 99.991(1)% average fidelity over one million trials; adaptive detection reached 99.99% in 145 μs average time.
- A reconfigurable neutral-atom processor reported 99.8% fluorescence readout and programmable mid-circuit readout.
- Enhanced-latching Pauli-spin-blockade readout in silicon MOS quantum dots reached 97.59% average experimental singlet-triplet discrimination; the separately quoted 99.67% result in that work applies to simulated traces, not the experimental benchmark.
- A compact single-electron-box sensor integrated into an industrial 300-mm silicon-MOS unit cell reached 99.92% dispersive parity-readout fidelity in 340 μs and 99% in 20 μs.

**Recent superconducting results — Spring et al. (2025, 2026), Marxer et al. (2026), and Xin et al. (2026):**
- Four-to-one frequency-multiplexed readout reached 99.77% average assignment fidelity with a 56 ns integration window; the best of four channels exceeded 99.9%.
- A balanced transmon device maintained readout fidelities above 99.94% alongside 99.98% simultaneous one-qubit gates and a 99.93% 40-hour-averaged CZ gate.
- A 2026 preprint demonstrated 0.17(1)% assignment error with a 58 ns pulse, 97(1) ns total time until subsequent operations incurred less than $10^{-4}$ measurement-induced error, and $2.7(2)\times10^{-5}$ leakage per measurement.
- A measurement-integrated leakage-reduction unit removed 98.4% of transmon leakage without time overhead while retaining 99.2% computational-state assignment fidelity, improving logical error correction without post-selection.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Superconducting assignment fidelity | $>99.94\%$ | Two-transmon device; 240 ns readout pulse; retained alongside high-fidelity 1Q and CZ gates | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |
| Multiplexed superconducting readout | $99.77\%$ average | Four qubits, 56 ns integration; best channel $>99.9\%$ | [Spring et al. 2025](https://doi.org/10.1103/PRXQuantum.6.020345) |
| Low-leakage superconducting readout | $99.83(1)\%$ assignment fidelity | 58 ns pulse; 97(1) ns total duration; leakage $2.7(2)\times10^{-5}$ per measurement; preprint | [Spring et al. 2026](https://arxiv.org/abs/2608.25484) |
| Trapped-ion fluorescence readout | $99.991(1)\%$ | $^{40}\mathrm{Ca}^+$ optical qubit; adaptive mode reaches $99.99\%$ in 145 μs average time | [Myerson et al. 2008](https://doi.org/10.1103/PhysRevLett.100.200502) |
| Neutral-atom fluorescence readout | $99.8\%$ | $^{133}\mathrm{Cs}$ processor with programmable mid-circuit readout | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| Silicon singlet-triplet readout | $97.59\%$ | Experimental enhanced-latching threshold benchmark; excludes the simulated-trace ML result | [Ma et al. 2024](https://doi.org/10.1103/PhysRevApplied.21.034022) |
| Silicon-MOS dispersive parity readout | $99.92\%$ | Compact single-electron-box sensor in a 300-mm-process unit cell; 340 μs integration, or 99% in 20 μs | [Lainé et al. 2026](https://doi.org/10.1038/s44460-026-00084-6) |
| Measurement-integrated leakage removal | $98.4\%$ | Concurrent transmon LRU with no time overhead; computational-state assignment fidelity remains 99.2% | [Xin et al. 2026](https://doi.org/10.1103/y66v-988s) |

## Scaling Considerations

- **Multiplexing:** Superconducting platforms frequency-multiplex resonators onto shared feedlines; the 2025 four-to-one result shows why assignment fidelity, linewidth, Purcell filtering, and ring-down must be reported together. Ion and neutral-atom systems instead rely mainly on spatially resolved photon collection.
- **Real-time feedback:** Sub-microsecond superconducting measurement supports reset and feed-forward, but end-to-end latency also includes digitization, classification, controller delay, and resonator depletion.
- **Crosstalk and correlated errors:** Shared feedlines, amplifier compression, spectator shifts, and scattered light can correlate assignment errors. Single-qubit headline fidelity does not predict simultaneous-array performance by itself.
- **QND, retention, and leakage removal:** Dispersive, fluorescence, and spin-to-charge measurements are only approximately QND. Repeated-measurement agreement, leakage, atom retention, and post-measurement state fidelity are separate observables; measurement-integrated leakage reduction can improve logical performance without extending the cycle.

## References

### Foundational
- A. Wallraff et al., "Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics," [Nature 431, 162 (2004)](https://doi.org/10.1038/nature02851) — [arXiv:cond-mat/0407325](https://arxiv.org/abs/cond-mat/0407325)

### Key experiments
- T. Walter et al., "Rapid High-Fidelity Single-Shot Dispersive Readout of Superconducting Qubits," [Phys. Rev. Applied 7, 054020 (2017)](https://doi.org/10.1103/PhysRevApplied.7.054020) — [arXiv:1701.06933](https://arxiv.org/abs/1701.06933)
- A. H. Myerson et al., "High-Fidelity Readout of Trapped-Ion Qubits," [Phys. Rev. Lett. 100, 200502 (2008)](https://doi.org/10.1103/PhysRevLett.100.200502) — [arXiv:0802.1684](https://arxiv.org/abs/0802.1684)
- D. Bluvstein et al., "Logical quantum processor based on reconfigurable atom arrays," [Nature 626, 58 (2024)](https://doi.org/10.1038/s41586-023-06927-3) — [arXiv:2312.03982](https://arxiv.org/abs/2312.03982)
- R.-L. Ma et al., "Singlet-triplet-state readout in silicon metal-oxide-semiconductor double quantum dots," [Phys. Rev. Applied 21, 034022 (2024)](https://doi.org/10.1103/PhysRevApplied.21.034022) — [arXiv:2309.09723](https://arxiv.org/abs/2309.09723)
- P. A. Spring et al., "Fast Multiplexed Superconducting-Qubit Readout with Intrinsic Purcell Filtering Using a Multiconductor Transmission Line," [PRX Quantum 6, 020345 (2025)](https://doi.org/10.1103/PRXQuantum.6.020345) — [arXiv:2409.04967](https://arxiv.org/abs/2409.04967)
- F. Marxer et al., "Above 99.9% Fidelity Single-Qubit Gates, Two-Qubit Gates, and Readout in a Single Superconducting Quantum Device," [PRX Quantum 7, 020326 (2026)](https://doi.org/10.1103/n86s-2b88) — [arXiv:2508.16437](https://arxiv.org/abs/2508.16437)
- P. A. Spring et al., "Low-leakage superconducting-qubit measurement with sub-100-ns total duration," arXiv:2608.25484 (2026) — [arXiv:2608.25484](https://arxiv.org/abs/2608.25484)
- C. Lainé et al., "High-fidelity dispersive spin sensing in a tunable unit cell of silicon MOS quantum dots," [Nature Sensors 1, 617 (2026)](https://doi.org/10.1038/s44460-026-00084-6) — [arXiv:2505.10435](https://arxiv.org/abs/2505.10435)
- Y. Xin et al., "Improved Error Correction with Leakage Reduction Units Built into Qubit Measurement in a Superconducting Quantum Processor," [PRX Quantum 7, 033062 (2026)](https://doi.org/10.1103/y66v-988s) — [arXiv:2511.17460](https://arxiv.org/abs/2511.17460)

### Reviews
- A. Blais et al., "Circuit quantum electrodynamics," [Rev. Mod. Phys. 93, 025005 (2021)](https://doi.org/10.1103/RevModPhys.93.025005) — [arXiv:2005.12667](https://arxiv.org/abs/2005.12667)

## Linked Papers

- [[walter-2017-rapid-readout]]
- [[blais-2021-circuit-electrodynamics]]
- [[wallraff-2004-strong-coupling-single]]
- [[soest-2026-suppressing-cavity-frequency-noise]]
- [[myerson-2008-high-fidelity-readout]]
- [[bluvstein-2024-logical-processor-reconfigurable]]
- [[ma-2024-singlet-triplet-state-readout]]
- [[spring-2025-fast-multiplexed-readout]]
- [[marxer-2026-above-99-9-fidelity]]
- [[spring-2026-low-leakage-superconducting-qubit-measurement]]
- [[laine-2026-high-fidelity-dispersive-spin-sensing]]
- [[xin-2026-improved-error-correction-leakage-reduction]]

## Evergreen context

- [[jaynes-cummings-in-circuits]] — the dispersive readout Hamiltonian is the large-detuning descendant of the same cavity-qubit interaction that first defined circuit QED
- [[dispersive-readout-mechanism]] — the standard superconducting readout pathway
- [[vacuum-rms-field-scaling]] — superconducting readout works so well in part because quasi-1D resonators concentrate zero-point fields strongly enough to make small devices look like good cavities
- [[resonator-as-quantum-bus]] — why readout resonators double as coupling infrastructure
- [[purcell-protection-via-detuning]] — the readout-speed versus spontaneous-emission tradeoff

## Related Entries

- [[cryogenic-amplification]] — Quantum-limited amplifiers that enable high-fidelity readout
- [[circuit-qed]] — Theoretical framework for dispersive readout
- [[transmon]] — Primary superconducting qubit using dispersive readout
- [[trapped-ion-qubit]] — Fluorescence-based readout
- [[spin-qubit]] — Spin-to-charge conversion readout
- [[neutral-atom-qubit]] — Fluorescence imaging readout
- [[erasure-qubit]] — Erasure detection as enhanced readout
