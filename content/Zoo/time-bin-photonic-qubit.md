---
title: Time-Bin Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: true
first_proposed_year: 1999
first_demonstrated_year: 1999
keywords:
- time-bin
- photonic qubit
- optical fiber
- quantum key distribution
- QKD
- single photon
- interferometric
- quantum network
influence_score: 0.70
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[time-bin-photonic-qubit-figure.png]]

## Description

The time-bin qubit encodes quantum information in the temporal degree of freedom of a single photon: $|0\rangle \equiv |\text{early}\rangle$ and $|1\rangle \equiv |\text{late}\rangle$, corresponding to two well-separated time slots (typically $\Delta t \sim 1{-}5\,\text{ns}$) within a single optical pulse window. Superposition states $\alpha|\text{early}\rangle + \beta|\text{late}\rangle$ are prepared by passing a single photon through an unbalanced Mach-Zehnder interferometer, where the path-length difference defines the time-bin separation.

Time-bin encoding is the natural choice for fiber-based quantum communication because it is inherently robust against polarization-mode dispersion and birefringence fluctuations in optical fibers — the dominant decoherence mechanisms that plague polarization-encoded photonic qubits over long distances. The two time bins experience identical polarization transformations in the fiber (assuming slow polarization drift compared to $\Delta t$), making the encoding self-compensating.

Measurement in the computational basis requires only time-resolved single-photon detection, while measurement in the superposition basis uses a second unbalanced interferometer matched to the preparation interferometer. This encoding was introduced by Brendel et al. (1999) and has become the standard for long-distance quantum key distribution and quantum teleportation experiments over deployed fiber networks.

## Hamiltonian

The time-bin qubit is described by the single-photon state in a two-mode temporal basis:

$$|\psi\rangle = \alpha \hat{a}_E^\dagger|0\rangle + \beta \hat{a}_L^\dagger|0\rangle$$

where $\hat{a}_E^\dagger$ and $\hat{a}_L^\dagger$ create a photon in the early and late time bins, respectively.

The unbalanced Mach-Zehnder interferometer implements the beam-splitter transformation:

$$U_{\text{MZI}} = \begin{pmatrix} \cos\theta & e^{i\phi}\sin\theta \\ -e^{-i\phi}\sin\theta & \cos\theta \end{pmatrix}$$

where $\theta$ is set by the beam-splitter ratio and $\phi$ is the relative phase between the two arms. A balanced beam splitter ($\theta = \pi/4$) with phase $\phi$ prepares:

$$|\psi\rangle = \frac{1}{\sqrt{2}}(|\text{early}\rangle + e^{i\phi}|\text{late}\rangle)$$

## Motivation

Polarization qubits suffer rapid decoherence in optical fibers due to birefringence, polarization-mode dispersion, and mechanical stress — effects that fluctuate unpredictably over km-scale links. Time-bin encoding eliminates these issues because both temporal modes traverse the same fiber path and experience identical polarization evolution. This makes time-bin qubits the preferred encoding for deployed fiber-based quantum networks, QKD systems, and long-distance quantum teleportation, where stability over hours to days is required without active polarization compensation.

## Experimental Status

**First demonstration — Brendel et al. (1999):**
- Introduced time-bin encoding and demonstrated pulsed energy-time entangled twin-photon source
- Franson interferometry using time-bin entangled photon pairs demonstrated violation of Bell inequalities

**Fiber teleportation — Marcikic et al. (2004):**
- Distribution of time-bin entangled qubits over 50 km of optical fiber at telecom wavelengths
- Established viability of time-bin encoding for long-distance quantum communication

**Long-distance distribution — Takesue et al. (2015):**
- Quantum teleportation over 100 km of fiber using highly efficient superconducting nanowire single-photon detectors
- Time-bin encoding at 1550 nm telecom wavelength

**Commercial deployment:**
- Time-bin encoding adopted in commercial QKD systems (ID Quantique, Toshiba) operating over 100+ km fiber links
- Compatible with integrated photonic circuits: on-chip time-bin sources and interferometers demonstrated in silicon photonics

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Time-bin separation | 1–5 ns | Set by interferometer path difference | [Brendel et al. 1999](https://doi.org/10.1103/PhysRevLett.82.2594) |
| Fiber transmission distance | >100 km | At telecom wavelengths (1550 nm) | [Takesue et al. 2015](https://doi.org/10.1364/OPTICA.2.000832) |
| State preparation fidelity | >99% | Interferometric visibility | [Marcikic et al. 2004](https://doi.org/10.1103/PhysRevLett.93.180502) |
| Bell-state visibility | >95% | Franson interferometry | [Brendel et al. 1999](https://doi.org/10.1103/PhysRevLett.82.2594) |
| Photon loss rate | ~0.2 dB/km | Standard telecom fiber at 1550 nm | — |
| Detector timing jitter | <100 ps | Superconducting nanowire SPDs | — |
| Operating temperature | 300 K (fiber) / 1 K (detectors) | SNSPDs require cryogenics | — |

## References

### Original proposal
- J. Brendel et al., "Pulsed Energy-Time Entangled Twin-Photon Source for Quantum Communication," [Phys. Rev. Lett. 82, 2594 (1999)](https://doi.org/10.1103/PhysRevLett.82.2594)

### Experimental demonstrations
- I. Marcikic et al., "Distribution of Time-Bin Entangled Qubits over 50 km of Optical Fiber," [Phys. Rev. Lett. 93, 180502 (2004)](https://doi.org/10.1103/PhysRevLett.93.180502)
- H. Takesue et al., "Quantum teleportation over 100 km of fiber using highly efficient superconducting nanowire single-photon detectors," [Optica 2, 832 (2015)](https://doi.org/10.1364/OPTICA.2.000832)

## Linked Papers

- [[brendel-1999-time-bin-entanglement]]
- [[marcikic-2004-teleportation-fiber]]

## Related Entries

- [[dual-rail-photonic-qubit]] — alternative photonic encoding using spatial modes
- [[fusion-based-photonic-qubit]] — photonic architecture compatible with time-bin encoding
- [[coherence-time-hierarchy]] — context for comparing decoherence mechanisms
