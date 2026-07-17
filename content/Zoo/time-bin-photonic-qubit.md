---
title: Time-Bin Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: false
first_proposed_year: 1999
first_demonstrated_year: 1999
keywords:
- time-bin
- photonic qubit
- optical fiber
- QKD
- single photon
- interferometric
- quantum network
influence_score: 0.70
last_updated: '2026-07-17'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-07-17
---

## Figure

![[time-bin-photonic-qubit-figure.png]]

## Description

A time-bin photonic qubit encodes quantum information in two well-separated temporal wave-packet modes of a single photon, $|0\rangle \equiv |\mathrm{early}\rangle$ and $|1\rangle \equiv |\mathrm{late}\rangle$. A general qubit state is therefore

$$|\psi\rangle = \alpha|\mathrm{early}\rangle + \beta e^{i\phi}|\mathrm{late}\rangle,$$

with the relative phase set by the preparation interferometer and optical path stability. In practice, the early and late bins are created with a matched unbalanced interferometer whose delay defines the bin separation.

Time-bin encoding is a natural choice for fiber quantum networking because both logical basis states propagate in the same spatial and polarization mode of the fiber, making the qubit far less sensitive to birefringence drift and polarization-mode mismatch than polarization encoding. It is not perfectly immune to noise, however: interferometer phase drift, chromatic dispersion, detector timing jitter, and photon loss still limit long-distance performance.

Computational-basis measurement requires only time-resolved single-photon detection. Superposition-basis measurement uses a second unbalanced interferometer with the same delay, where the early photon taking the long arm interferes with the late photon taking the short arm in the central arrival time slot. This encoding was introduced experimentally by Brendel et al. (1999) and remains a standard workhorse for fiber QKD, teleportation, and heterogeneous quantum-network interfaces.

## Hamiltonian

There is no single hardware-specific Hamiltonian for the encoding itself. A representative description treats the qubit as a single-photon state across two orthogonal temporal modes,

$$|\psi\rangle = \left(\alpha \hat{a}_E^\dagger + \beta e^{i\phi} \hat{a}_L^\dagger\right)|\mathrm{vac}\rangle,$$

where $\hat{a}_E^\dagger$ and $\hat{a}_L^\dagger$ create photons in the early and late wave packets.

Free propagation over the bin separation $\Delta t$ adds the relative optical phase $e^{-i\omega \Delta t}$. The preparation and analysis interferometers implement basis rotations between the time-bin basis and phase-sensitive superposition bases. For an analysis interferometer phase $\phi_A$, postselection on the central arrival time slot measures in the basis

$$|\pm_{\phi_A}\rangle = \frac{1}{\sqrt{2}}\left(|E\rangle \pm e^{i\phi_A}|L\rangle\right).$$

So the essential physics is better captured by temporal-mode creation operators plus interferometric basis change than by a standalone static two-level Hamiltonian.

## Motivation

Polarization qubits suffer from birefringence drift, polarization-mode dispersion, and mechanical stress in deployed fiber. Time-bin encoding avoids the need to preserve a fixed polarization reference because both logical states travel through the same spatial channel at different times. That makes time-bin qubits especially attractive for long-haul fiber links, field-deployed QKD, and hybrid quantum-network experiments where stability over hours matters more than compact on-chip gate geometry.

## Experimental Status

**First demonstration, Brendel et al. (1999):**
- Introduced pulsed time-bin entanglement with unbalanced interferometers matched to early/late temporal modes
- Established the basic preparation-and-analysis architecture still used in fiber time-bin experiments

**Long-fiber entanglement distribution, Marcikic et al. (2004):**
- Distributed time-bin entangled qubits over 50 km of optical fiber at telecom wavelengths
- Demonstrated high-visibility two-photon interference after long fiber transmission

**100 km fiber teleportation, Takesue et al. (2015):**
- Demonstrated quantum teleportation over 100 km of fiber using superconducting nanowire single-photon detectors
- Confirmed time-bin encoding as a practical long-distance telecom-fiber qubit platform

**Integrated telecom source, Thiel et al. (2024):**
- Demonstrated telecom-wavelength time-bin entanglement from a hybrid photonic integrated circuit
- Reached Bell-state fidelity and concurrence near 96%, showing credible integrated-hardware readiness

**Heterogeneous network interface, Iuliano et al. (2024):**
- Teleported a memory-compatible 795 nm time-bin photonic qubit onto a solid-state NV-center network node with real-time feedforward
- Showed that time-bin qubits can act as practical interface carriers between unlike quantum-network hardware

**Commercial and systems deployment:**
- Time-bin encoding remains standard in long-distance fiber QKD and network-testbed architectures
- It is compatible with integrated photonics, quantum frequency conversion, and memory-compatible networking stacks

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Long-fiber entanglement distribution | 50 km | Time-bin entangled qubits distributed through telecom fiber | [Marcikic et al. 2004](https://doi.org/10.1103/PhysRevLett.93.180502) |
| Two-photon interference visibility | >93% | After 50 km fiber distribution | [Marcikic et al. 2004](https://doi.org/10.1103/PhysRevLett.93.180502) |
| Quantum teleportation distance | 100 km | Telecom-fiber teleportation with SNSPDs | [Takesue et al. 2015](https://doi.org/10.1364/OPTICA.2.000832) |
| Integrated Bell-state fidelity | $96^{+2}_{-5}\%$ | Hybrid photonic integrated circuit at telecom wavelengths | [Thiel et al. 2024](https://doi.org/10.1038/s41598-024-60758-4) |
| Integrated concurrence | $96^{+3}_{-8}\%$ | Same integrated time-bin entangled source | [Thiel et al. 2024](https://doi.org/10.1038/s41598-024-60758-4) |
| Heterogeneous teleportation target | 795 nm time-bin qubit $\rightarrow$ NV-center spin node | Real-time feedforward; fidelity reported above the classical bound | [Iuliano et al. 2024](https://doi.org/10.1038/s41534-024-00910-0) |

## References

### Foundational and long-distance milestones
- J. Brendel et al., "Pulsed Energy-Time Entangled Twin-Photon Source for Quantum Communication," [Phys. Rev. Lett. 82, 2594 (1999)](https://doi.org/10.1103/PhysRevLett.82.2594), [arXiv:quant-ph/9809034](https://arxiv.org/abs/quant-ph/9809034)
- I. Marcikic et al., "Distribution of Time-Bin Entangled Qubits over 50 km of Optical Fiber," [Phys. Rev. Lett. 93, 180502 (2004)](https://doi.org/10.1103/PhysRevLett.93.180502), [arXiv:quant-ph/0404124](https://arxiv.org/abs/quant-ph/0404124)
- H. Takesue et al., "Quantum teleportation over 100 km of fiber using highly efficient superconducting nanowire single-photon detectors," [Optica 2, 832 (2015)](https://doi.org/10.1364/OPTICA.2.000832), [arXiv:1510.00476](https://arxiv.org/abs/1510.00476)

### Recent updates
- H. Thiel et al., "Time-bin entanglement at telecom wavelengths from a hybrid photonic integrated circuit," [Sci. Rep. 14, 9990 (2024)](https://doi.org/10.1038/s41598-024-60758-4), [arXiv:2309.00926](https://arxiv.org/abs/2309.00926)
- M. Iuliano et al., "Qubit teleportation between a memory-compatible photonic time-bin qubit and a solid-state quantum network node," [npj Quantum Information 10, 107 (2024)](https://doi.org/10.1038/s41534-024-00910-0), [arXiv:2403.18581](https://arxiv.org/abs/2403.18581)

## Linked Papers

- [[brendel-1999-time-bin-entanglement]]
- [[marcikic-2004-teleportation-fiber]]
- [[takesue-2015-teleportation-100-fiber]]
- [[thiel-2024-time-bin-integrated-telecom]]
- [[iuliano-2024-time-bin-teleportation-node]]

## Evergreen context

- [[quantum-hardware]] — time-bin is the right photonic route when the system-level problem is long-haul fiber transport, deployed-network stability, and detector timing rather than compact on-chip rail geometry.
- [[coherence-time-hierarchy]] — unlike stationary matter qubits, the limiting comparison here is less about intrinsic $T_1/T_2$ storage and more about how interferometer phase stability, detector timing, and fiber attenuation set the usable coherence window.
- [[erasure-error-vs-pauli-error]] — photon loss on long fiber links is usually a flagged absence event, so time-bin systems naturally live in an erasure-aware regime rather than a purely hidden-Pauli one.
- [[noise-bias-and-asymmetric-error-channels]] — time-bin encoding deliberately trades polarization drift for a cleaner loss-plus-phase-stability error model, which is exactly the kind of asymmetric noise structure photonic decoders can exploit.

## Related Entries

- [[photonic-qubit]] — umbrella entry for the broader photonic-qubit family
- [[dual-rail-photonic-qubit]] — alternative photonic encoding using spatial modes rather than temporal modes
- [[photonic-cluster-state-mbqc-qubit]] — measurement-based photonic architecture that can consume time-bin encoded photons as cluster-state qubits
- [[fusion-based-photonic-qubit]] — photonic architecture compatible with time-bin encoding when multiplexing and loss management matter more than on-chip rail geometry
- [[quantum-transduction]] — frequency-conversion and heterogeneous-network context for interfacing time-bin photons with non-telecom quantum nodes
