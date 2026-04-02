---
title: Qubit Readout
entry_type: infrastructure
technology_family: Cross-Platform
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
- SPAM
- Elzerman readout
- photon counting
- charge sensing
influence_score: 0.88
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[qubit-readout-figure.png]]

## Description

Qubit readout is the process of extracting classical information from a quantum state — the final step in any quantum computation and often the fidelity-limiting operation. Every quantum error correction cycle requires fast, high-fidelity measurement, making readout a critical bottleneck for fault-tolerant quantum computing.

The fundamental challenge is the same across platforms: map a fragile quantum state to a robust classical signal (photon counts, microwave phase, charge state) with minimal back-action and maximal distinguishability. Each platform has evolved distinct solutions:

### Superconducting Qubits — Dispersive Readout

A microwave readout resonator is capacitively coupled to the qubit. In the dispersive regime ($|\Delta| = |\omega_q - \omega_r| \gg g$), the qubit imparts a state-dependent frequency shift $\pm\chi$ on the resonator. A weak probe tone acquires a phase shift that encodes the qubit state, detected via homodyne or heterodyne measurement. Quantum-limited amplifiers (JPAs, JTWPAs) at the mixing chamber stage boost the signal-to-noise ratio to enable single-shot discrimination in 100–500 ns.

Key elements of the readout chain: qubit → readout resonator → circulator → JPA/JTWPA (20 mK, ~20 dB gain, noise at $\frac{1}{2}\hbar\omega$) → HEMT (4 K, ~40 dB gain) → room-temperature ADC. Purcell filters protect the qubit from spontaneous emission through the resonator.

### Trapped Ions — State-Dependent Fluorescence

One qubit state is resonant with a cycling (closed) optical transition and scatters thousands of photons; the other is off-resonant and remains dark. Photon counting on a CCD, EMCCD, or PMT over ~100–300 μs discriminates bright from dark with fidelities exceeding 99.99%. This is inherently a quantum non-demolition (QND) measurement for the bright state, though off-resonant scattering can cause rare errors. The electron shelving technique (Dehmelt 1975) underlies all modern implementations.

### Neutral Atoms — Fluorescence Imaging

Similar to ions: atoms in optical tweezers are illuminated with resonant light, and fluorescence is collected through high-NA objective lenses. The dominant error channel is **atom loss** during readout — photon recoil can eject atoms from shallow traps, converting measurement errors into erasure errors. Recent advances include:
- **Nondestructive readout** via quadrupole-transition fluorescence (Infleqtion/UW-Madison 2025): 99.93% fidelity with 99.54% atom retention
- **Cavity-enhanced detection** using fiber Fabry-Pérot microcavities: 99.985% fidelity in ~1.6 μs
- **Erasure detection** via shelving: converts atom loss into a known error location, raising the effective QEC threshold from ~1% to ~4%

### Semiconductor Spin Qubits — Spin-to-Charge Conversion

Electron spins cannot be measured directly. Instead, the spin state is mapped to a charge state via:
- **Elzerman readout** (energy-selective tunneling): spin-up tunnels to a reservoir while spin-down stays; a nearby charge sensor (quantum point contact or RF-SET) detects the resulting charge change. First demonstrated by Elzerman et al. (2004).
- **Pauli spin blockade (PSB):** in a double dot, the (1,1)→(0,2) charge transition is forbidden for triplet states. Measuring whether the transition occurred reveals the two-spin state. Faster than Elzerman but requires careful tuning.
- **Latched readout:** amplifies the spin signal by cascading through auxiliary quantum dots, improving SNR.

Typical measurement times are 1–100 μs. SPAM fidelity in CMOS-foundry devices reached >99.2% (Steinacker/Diraq-imec 2025).

### Photonic Qubits — Single-Photon Detection

Dual-rail photonic qubits are read out by detecting which spatial/temporal mode contains the photon. Superconducting nanowire single-photon detectors (SNSPDs) achieve >95% detection efficiency at telecom wavelengths with sub-100 ps timing jitter. The dominant error is **photon loss** — a photon that never arrives produces no click, creating an erasure error. Photon-number-resolving (PNR) detectors are an active frontier for distinguishing multi-photon states in linear-optical and fusion-based architectures.

### Color Center and Molecular Qubits — Optical Readout

NV centers in diamond use spin-dependent fluorescence under 532 nm excitation: the $m_S = 0$ state fluoresces brightly while $m_S = \pm 1$ states undergo intersystem crossing to a dark metastable singlet. Single-shot readout requires spin-to-charge conversion or repetitive readout schemes to overcome low photon collection efficiency (~few %).

## Hamiltonian

Dispersive readout Hamiltonian (superconducting qubits):

$$H_{\text{disp}} = \omega_r a^\dagger a + \frac{\omega_q}{2}\sigma_z + \chi a^\dagger a \sigma_z$$

where $\omega_r$ is the resonator frequency, $\omega_q$ the qubit frequency, and $\chi = g^2/\Delta$ is the dispersive shift ($g$ = qubit-resonator coupling, $\Delta = \omega_q - \omega_r$ = detuning). The cavity frequency becomes $\omega_r + \chi$ when the qubit is in $|0\rangle$ and $\omega_r - \chi$ when in $|1\rangle$, producing measurably different transmitted phase and amplitude.

Elzerman readout condition (spin qubits):

The Fermi level of the reservoir is tuned between the spin-up and spin-down energies: $E_\downarrow < E_F < E_\uparrow$. Only $|\!\uparrow\rangle$ has sufficient energy to tunnel out, mapping $|\!\uparrow\rangle \to$ empty dot (charge change detected) and $|\!\downarrow\rangle \to$ occupied dot (no change). The measurement time must satisfy $\Gamma_\uparrow^{-1} \ll t_{\text{meas}} \ll T_1$ to capture the tunnel event before spin relaxation.

## Motivation

- **QEC bottleneck:** Logical error rates cannot be lower than readout error rates — a 1% readout error caps the logical fidelity regardless of gate quality.
- **Mid-circuit measurement:** Real-time error correction requires fast, high-fidelity, minimally destructive readout *during* the circuit, not just at the end. Superconducting platforms achieve this in <500 ns; trapped ions in ~100 μs.
- **Scaling constraint:** The number of qubits sharing a single readout line (multiplexing) determines wiring overhead. Superconducting platforms multiplex 8–12 qubits per feedline; trapped ions and atoms use spatially-resolved imaging.
- **Speed-fidelity tradeoff:** Faster readout reduces $T_1$-induced errors during measurement but requires higher SNR. Quantum-limited amplifiers (JPAs, JTWPAs) resolve this tension for superconducting qubits.
- **Erasure advantage:** Converting readout loss into known-location erasure errors (neutral atoms, photonic) can double the effective QEC threshold, dramatically reducing physical qubit overhead.

## Experimental Status

**First dispersive readout — Wallraff et al. (2004):**
- Strong coupling of a single photon to a superconducting qubit via circuit QED.
- Established the dispersive $\chi$-shift measurement paradigm that underlies all modern SC qubit readout.

**First single-shot spin readout — Elzerman et al. (2004):**
- Energy-selective tunneling of a single electron from a GaAs quantum dot.
- Demonstrated spin-to-charge conversion with quantum point contact charge sensing.
- Foundational technique for all semiconductor spin qubit readout.

**High-fidelity trapped-ion readout — Myerson et al. (2008):**
- 99.991% readout fidelity on $^{40}\text{Ca}^+$ optical qubit via adaptive time-resolved fluorescence detection.
- Remains among the highest-fidelity single-qubit measurements on any platform.

**Fast single-shot SC readout — Walter et al. (2017):**
- 99.2% readout fidelity in 88 ns using optimized pulse shapes and quantum-limited amplification.
- Established that high-fidelity single-shot readout is compatible with QEC cycle times.

**State-of-the-art (2024–2025):**
- **Superconducting:** >99.9% single-shot fidelity with JTWPA; standard in Google Willow, IBM Heron processors.
- **Trapped ions:** 99.991% ($^{40}\text{Ca}^+$, Myerson 2008); system-level >99.9% in Quantinuum H2.
- **Neutral atoms:** 99.93% via quadrupole-transition fluorescence (Infleqtion/UW-Madison 2025); 99.985% with cavity enhancement.
- **Spin qubits:** >99.2% SPAM fidelity in 300mm CMOS foundry devices (Steinacker/Diraq-imec 2025).
- **Photonic:** >95% photon detection efficiency with SNSPDs; loss-based erasure detection standard.

## Key Metrics

| Metric | Superconducting | Trapped Ion | Neutral Atom | Spin Qubit | Photonic |
|--------|-----------------|-------------|--------------|------------|----------|
| Readout fidelity | 99.5–99.9% | 99.9%+ | 99.5–99.93% | 98–99.5% | >95% (detection eff.) |
| Measurement time | 100–500 ns | 100–300 μs | 1–50 ms | 1–100 μs | <1 ns (detection) |
| QND? | Yes (dispersive) | Yes (cycling) | Mostly destructive | No (tunneling) | No (absorptive) |
| Dominant error | $T_1$ decay during meas. | Off-resonant scatter | Atom loss | Charge noise, $T_1$ | Photon loss |
| Multiplexing | 8–12/feedline | Imaging (100s) | Imaging (1000s) | 1 per sensor | Spatial/temporal modes |
| Mid-circuit capable? | Yes (<500 ns) | Yes (~100 μs) | Emerging | Emerging | Inherent |

## Scaling Considerations

- **Multiplexed readout:** Superconducting platforms use frequency-domain multiplexing (8–12 resonators per feedline, each at different frequency). Trapped ions and neutral atoms use spatially-resolved CCD/EMCCD imaging, which naturally scales to hundreds or thousands of qubits in a single image. Spin qubits require dedicated charge sensors per qubit or small cluster, making multiplexing harder.
- **Readout crosstalk:** In multi-qubit superconducting processors, residual coupling during measurement causes correlated assignment errors. Mitigation strategies include optimized resonator frequency placement, Purcell filters, and post-measurement classical correction matrices.
- **Real-time feedback latency:** QEC requires decoding syndrome measurements and applying corrections within the qubit coherence time. Superconducting platforms achieve <1 μs round-trip feedback; trapped ions require ~ms-scale feedback but have longer coherence to compensate.
- **Readout-induced dephasing:** The measurement process itself can dephase nearby qubits (measurement backaction). In superconducting systems, this arises from photon-number fluctuations in the readout resonator ("dressed dephasing"). Careful optimization of readout power, duration, and resonator design minimizes this.
- **Loss as erasure:** For neutral atoms and photonic qubits, the dominant readout error is particle loss — which is *detectable*. Converting these errors into known-location erasure errors effectively doubles the QEC threshold (from ~1% to ~4% for surface codes), a major architectural advantage.

## References

### Foundational
- A. Wallraff et al., "Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics," [Nature 431, 162 (2004)](https://doi.org/10.1038/nature02851) · [arXiv:cond-mat/0407325](https://arxiv.org/abs/cond-mat/0407325)
- J. M. Elzerman et al., "Single-shot read-out of an individual electron spin in a quantum dot," [Nature 430, 431 (2004)](https://doi.org/10.1038/nature02693)

### High-fidelity milestones
- A. H. Myerson et al., "High-Fidelity Readout of Trapped-Ion Qubits," [Phys. Rev. Lett. 100, 200502 (2008)](https://doi.org/10.1103/PhysRevLett.100.200502) · [arXiv:0802.1684](https://arxiv.org/abs/0802.1684)
- T. Walter et al., "Rapid High-Fidelity Single-Shot Dispersive Readout of Superconducting Qubits," [Phys. Rev. Applied 7, 054020 (2017)](https://doi.org/10.1103/PhysRevApplied.7.054020) · [arXiv:1701.06933](https://arxiv.org/abs/1701.06933)
- R. Noek et al., "High speed, high fidelity detection of an atomic hyperfine qubit," [Opt. Express 21, 21449 (2013)](https://doi.org/10.1364/OE.21.021449)

### Reviews
- A. Blais et al., "Circuit quantum electrodynamics," [Rev. Mod. Phys. 93, 025005 (2021)](https://doi.org/10.1103/RevModPhys.93.025005) · [arXiv:2005.12667](https://arxiv.org/abs/2005.12667)

## Linked Papers

- [[wallraff-2004-circuit-qed]]
- [[elzerman-2004-single-shot-spin]]
- [[myerson-2008-high-fidelity-readout]]
- [[walter-2017-rapid-readout]]
- [[noek-2013-high-speed-detection]]
- [[blais-2021-circuit-qed-review]]

## Related Entries

- [[cryogenic-amplification]] — Quantum-limited amplifiers (JPA, JTWPA) that enable high-fidelity SC readout
- [[circuit-qed]] — Theoretical framework for dispersive readout
- [[transmon]] — Primary superconducting qubit using dispersive readout
- [[trapped-ion-qubit]] — Fluorescence-based readout
- [[ytterbium-hyperfine-qubit]] — $^{171}\text{Yb}^+$ fluorescence detection at 369.5 nm
- [[spin-qubit]] — Spin-to-charge conversion readout
- [[silicon-spin-qubit]] — Elzerman and PSB readout in silicon
- [[neutral-atom-qubit]] — Fluorescence imaging readout in optical tweezers
- [[nv-center-qubit]] — Spin-dependent fluorescence under 532 nm
- [[erasure-qubit]] — Erasure detection as enhanced readout strategy
- [[dual-rail-photonic-qubit]] — SNSPD-based photon detection
- [[dual-rail-superconducting-qubit]] — Dual-rail dispersive readout
