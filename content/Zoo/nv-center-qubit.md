---
title: Nitrogen-Vacancy (NV) Center Qubit
entry_type: qubit
technology_family: Color Center
status: demonstrated
first_proposed_year: 1997
first_demonstrated_year: 2004
keywords:
- nv center
- nitrogen vacancy
- diamond
- solid state
- spin qubit
- room temperature
- optically detected magnetic resonance
influence_score: 0.78
last_updated: '2026-05-23'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-05-23
figure_reviewed: true
---

## Figure

![[nv-center-qubit-figure.png]]

> **Figure note:** Schematic NV$^-$ center with one substitutional nitrogen next to one vacancy, a bias-field-selected $|0\rangle \leftrightarrow |-1\rangle$ qubit, spin-selective intersystem crossing, and the optical/networking interface that makes NV centers useful as quantum-network nodes.

## Description

The nitrogen-vacancy (NV) center in diamond is a point defect consisting of a substitutional nitrogen atom adjacent to a missing carbon atom. In its negatively charged state (NV$^-$), it hosts a spin-1 electronic ground state that can be initialized and read out optically and coherently driven with microwaves, even at room temperature.

The qubit is usually encoded in $|m_s=0\rangle$ and one of the $|m_s=\pm 1\rangle$ sublevels of the ground-state triplet. At zero field the $m_s=\pm 1$ states are degenerate, so experiments typically apply a static magnetic field along the NV axis to select a specific two-level subspace, most often $|0\rangle \equiv |m_s=0\rangle$ and $|1\rangle \equiv |m_s=-1\rangle$.

Spin-dependent intersystem crossing through metastable singlet states makes the $m_s=0$ manifold brighter than $m_s=\pm 1$, enabling optically detected magnetic resonance and repeated optical pumping into $m_s=0$. Nearby $^{13}$C and $^{14}$N nuclear spins can be coupled as long-lived memory qubits, while photons emitted on the zero-phonon line enable remote entanglement and network protocols.

NV centers are therefore best viewed as hybrid spin-photon network nodes and small quantum registers, rather than as dense local processors. Their main strengths are room-temperature operation, long-lived nuclear-spin memories, and optical interfacing. Their main bottlenecks are the low native coherent-photon fraction and limited room-temperature gate depth set by the electron-spin relaxation time.

## Hamiltonian

A standard ground-state Hamiltonian for NV$^-$ is

$$H = D S_z^2 + \gamma_e \mathbf{B}\cdot\mathbf{S} + E(S_x^2 - S_y^2) + \mathbf{S}\cdot\mathbf{A}_N\cdot\mathbf{I}_N,$$

where $D/2\pi \approx 2.87\,\text{GHz}$ is the zero-field splitting, $\gamma_e$ is the electron gyromagnetic ratio, $E$ captures symmetry-lowering strain or electric-field mixing of $m_s=\pm1$, and $\mathbf{A}_N$ is the hyperfine tensor to the host nitrogen nucleus.

After applying an axial bias field and choosing the common qubit subspace $\{|0\rangle, |-1\rangle\}$, a representative driven two-level model is

$$\frac{H_\mathrm{eff}}{\hbar} = \omega_q |-1\rangle\!\langle -1| + \frac{\Omega(t)}{2}\left(e^{i\phi}|0\rangle\!\langle -1| + e^{-i\phi}|-1\rangle\!\langle 0|\right),$$

with $\omega_q \approx D - \gamma_e B_z$. Coupling to nearby nuclear spins enters through the hyperfine term above, while remote entanglement uses the optical spin-photon interface rather than a direct two-qubit Hamiltonian between distant NV centers.

## Motivation

NV centers occupy a distinctive niche in the Zoo: they combine stationary solid-state spins, optical initialization/readout, nearby nuclear-spin memories, and a credible path to photonic networking. That makes them unusually attractive for distributed quantum computing, repeater-style architectures, and networked sensing.

The tradeoff is that NV centers are not obviously the best platform for dense monolithic processors. Room-temperature operation is possible, but the native optical interface is weak because only a small fraction of emission goes into the zero-phonon line. Modern work therefore focuses on cavity enhancement, improved spin-photon interfaces, and telecom-band frequency conversion rather than on brute-force local scaling.

## Experimental Status

**First coherent control of a single NV electron spin, Jelezko et al. (2004):**
- Demonstrated room-temperature Rabi oscillations and coherent microwave control of a single NV center
- Established the NV center as a real solid-state qubit rather than just a defect-spectroscopy system

**High-fidelity projective readout, Robledo et al. (2011):**
- Demonstrated single-shot, high-fidelity optical readout of an NV-based spin register at cryogenic temperature
- Solidified the spin-selective intersystem-crossing picture as a practical measurement primitive

**Room-temperature quantum memory beyond one second, Maurer et al. (2012):**
- Demonstrated nearby $^{13}$C nuclear-spin memory with coherence time exceeding 1 s at room temperature
- Showed the value of NV-plus-nuclear-spin hybrid registers for long-lived storage

**Loophole-free Bell test over 1.3 km, Hensen et al. (2015):**
- Achieved heralded entanglement between remote NV-center nodes separated by 1.3 km
- Landmark result for quantum-network credibility of solid-state spins

**Ten-qubit solid-state register, Bradley et al. (2019):**
- Controlled a ten-qubit NV register (electron spin plus surrounding nuclei)
- Protected an arbitrary single-qubit state for over 75 s and preserved two-qubit entanglement for over 10 s

**Three-node quantum network, Pompili et al. (2021):**
- Demonstrated entanglement distribution and teleportation across a three-node NV-center network
- Moved the platform from two-node links toward actual network protocols

**Cavity-enhanced spin-photon interface, Yurgens et al. (2024):**
- Coupled a single NV center to an open microcavity, increasing the zero-phonon-line fraction from its native ~3% to over 44%
- Reported cavity-assisted resonance fluorescence without temporal filtering, a meaningful step for higher-rate spin-photon entanglement

**Room-temperature four-qubit benchmarking, Jäger et al. (2026):**
- Performed randomized benchmarking on a room-temperature four-qubit NV register with all-to-all connectivity
- Extracted a quantum volume of 8 and quantified both 1Q and 2Q error-per-gate performance limits set largely by the electron-spin relaxation time

**Telecom-band interface for long-distance networking, Liao et al. (2026):**
- Down-converted 637.2 nm NV photons to 1588.3 nm in a fiber-integrated quantum-frequency-conversion system
- Reported ~9% total conversion efficiency and projected spin-photon entanglement fidelity above 52% after 100 km of fiber at NV emission rates

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Zero-field splitting $D/2\pi$ | 2.87 GHz | Ground-state triplet splitting that defines the ODMR qubit manifold | [Jelezko et al. 2004](https://doi.org/10.1103/PhysRevLett.92.076401) |
| Electron-spin $T_2$ (echo, room temperature) | 1.8 ms | Isotopically engineered $^{12}$C diamond | [Balasubramanian et al. 2009](https://doi.org/10.1038/nmat2420) |
| Nuclear-spin memory $T_2$ (room temperature) | >1 s | Nearby $^{13}$C memory qubit coupled to the NV center | [Maurer et al. 2012](https://doi.org/10.1126/science.1220513) |
| Single-shot electron-spin readout fidelity | 0.945(2) | Average readout fidelity in the cryogenic multiqubit-register setting | [Bradley et al. 2019](https://doi.org/10.1103/PhysRevX.9.031045) |
| Room-temperature 1Q error per gate | $1.0\times10^{-3}$ to $4.4\times10^{-3}$ | Three nuclear-spin qubits in a 4-qubit NV register, limited largely by electron-spin $T_1$ | [Jäger et al. 2026](https://doi.org/10.1038/s41534-025-01164-0) |
| Room-temperature 2Q error per gate | $2.3(1)\times10^{-2}$, $2.4(4)\times10^{-2}$, $4.7(4)\times10^{-2}$ | All three qubit-pair benchmarks in the same 4-qubit room-temperature register | [Jäger et al. 2026](https://doi.org/10.1038/s41534-025-01164-0) |
| Quantum volume | 8 | Estimated from the calibrated room-temperature 4-qubit error model | [Jäger et al. 2026](https://doi.org/10.1038/s41534-025-01164-0) |
| Cavity-enhanced zero-phonon-line fraction | >44% | Open-microcavity NV photonic interface, versus native ~3% | [Yurgens et al. 2024](https://doi.org/10.1038/s41534-024-00915-9) |
| Telecom QFC total efficiency | ~9% | 637.2 nm to 1588.3 nm interface for long-distance NV networking | [Liao et al. 2026](https://doi.org/10.1038/s41534-026-01225-y) |

## References

### Foundational / core experiments
- F. Jelezko et al., "Observation of Coherent Oscillations in a Single Electron Spin," [Phys. Rev. Lett. 92, 076401 (2004)](https://doi.org/10.1103/PhysRevLett.92.076401)
- G. Balasubramanian et al., "Ultralong spin coherence time in isotopically engineered diamond," [Nat. Mater. 8, 383 (2009)](https://doi.org/10.1038/nmat2420)
- L. Robledo et al., "High-fidelity projective read-out of a solid-state spin quantum register," [Nature 477, 574 (2011)](https://doi.org/10.1038/nature10401)
- P. C. Maurer et al., "Room-Temperature Quantum Bit Memory Exceeding One Second," [Science 336, 1283 (2012)](https://doi.org/10.1126/science.1220513)
- B. Hensen et al., "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres," [Nature 526, 682 (2015)](https://doi.org/10.1038/nature15759)
- C. E. Bradley et al., "A Ten-Qubit Solid-State Spin Register with Quantum Memory up to One Minute," [Phys. Rev. X 9, 031045 (2019)](https://doi.org/10.1103/PhysRevX.9.031045)
- M. Pompili et al., "Realization of a multinode quantum network of remote solid-state qubits," [Science 372, 259 (2021)](https://doi.org/10.1126/science.abg1919)

### Recent 2024-2026 updates
- V. Yurgens et al., "Cavity-assisted resonance fluorescence from a nitrogen-vacancy center in diamond," [npj Quantum Information 10, 112 (2024)](https://doi.org/10.1038/s41534-024-00915-9)
- T. Jäger et al., "Modeling quantum volume using randomized benchmarking of Room-Temperature NV center quantum registers," [npj Quantum Information 12, 6 (2026)](https://doi.org/10.1038/s41534-025-01164-0)
- Z. Liao et al., "Fiber-integrated quantum frequency conversion for long-distance quantum networking," [npj Quantum Information (2026)](https://doi.org/10.1038/s41534-026-01225-y)

## Linked Papers

- [[jelezko-2004-nv-center]]
- [[balasubramanian-2009-ultralong-spin-coherence]]
- [[robledo-2011-high-fidelity-projective]]
- [[maurer-2012-room-temperature-bit]]
- [[hensen-2015-loophole-free-bell]]
- [[bradley-2019-ten-qubit-solid]]
- [[pompili-2021-realization-multinode-network]]
- [[yurgens-2024-cavity-assisted-resonance-fluorescence-nv]]
- [[jager-2026-quantum-volume-room-temperature-nv-registers]]
- [[liao-2026-fiber-integrated-qfc-nv-networking]]

## Evergreen context

- [[divincenzo-criteria]] — NV centers are among the clearest examples of satisfying initialization, control, measurement, and spin-photon interconnect criteria in one hardware stack.
- [[coherence-time-hierarchy]] — the platform's advantage comes from layered memory: fast electron-spin operations, much longer-lived nearby nuclear spins, and a photonic channel for remote links.

## Related Entries

- [[spin-qubit]] — broader spin-qubit umbrella context
- [[t-center-qubit]] — another diamond-compatible color-center direction with a stronger telecom story
- [[siv-color-center-qubit]] — group-IV color centers optimized more directly for photonic interfaces
- [[qubit-readout]] — spin-selective optical readout is one of the platform's core strengths
- [[quantum-transduction]] — telecom conversion is now a live part of the NV networking stack
