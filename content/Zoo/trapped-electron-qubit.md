---
title: Trapped-Electron Qubit
entry_type: qubit
technology_family: Trapped Particle
status: proposed
figure_reviewed: true
first_proposed_year: 2013
first_demonstrated_year: null
keywords:
- trapped electron
- electron spin qubit
- Paul trap
- Penning trap
- electron qubit
- Häffner
- all-electronic quantum computing
- motional frequency
influence_score: 0.68
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[trapped-electron-qubit-figure.png]]

## Description

The trapped-electron qubit encodes quantum information in the spin state of a single electron confined in an electromagnetic trap — either a radio-frequency Paul trap or a Penning trap. The electron spin-1/2 provides a natural two-level system: $|0\rangle = |\!\uparrow\rangle$ and $|1\rangle = |\!\downarrow\rangle$, split by the Zeeman energy $\hbar\omega_s = g_e \mu_B B$ in an applied magnetic field $B$.

The fundamental motivation is the electron's extraordinarily low mass: at $9.1 \times 10^{-31}$ kg, it is roughly 1,800× lighter than the lightest trapped-ion species ($^{9}\text{Be}^+$) and over 250,000× lighter than $^{171}\text{Yb}^+$. Since motional (secular) frequencies in a Paul trap scale as $\omega_{\text{sec}} \propto 1/\sqrt{m}$, electrons have motional frequencies in the GHz range (vs. MHz for ions). This translates to potentially much faster two-qubit gate operations — the ion's shared-motion entangling gate speed is limited by the motional frequency — and faster transport in QCCD-style architectures.

Unlike trapped ions, electrons have no internal level structure beyond spin, eliminating laser-based state preparation, manipulation, and readout entirely. All control would be electronic: microwave fields for spin rotations, dc/rf electric fields for trapping and transport, and image current or cavity-coupled detection for readout. This "all-electronic" approach avoids the laser system complexity that is a primary scaling bottleneck for trapped-ion systems.

However, the same light mass that enables fast operations also creates challenges: the electron is highly sensitive to electric field noise (anomalous heating rates scale as $\propto q^2/m$, so heating is severe), and the spin readout — trivial for ions via fluorescence — requires sophisticated detection schemes using magnetic gradients and motional coupling (Peng et al. 2017) or coupling to superconducting resonators.

## Hamiltonian

A single electron in a linear Paul trap with an applied magnetic field:

$$H = \frac{\hat{p}^2}{2m_e} + \frac{1}{2}m_e\omega_{\text{sec}}^2\hat{x}^2 + \frac{\hbar\omega_s}{2}\sigma_z$$

where $m_e$ is the electron mass, $\omega_{\text{sec}}$ is the secular trap frequency (GHz range), and $\omega_s = g_e \mu_B B / \hbar$ is the spin Larmor frequency.

For two-qubit gates, the spin-motion coupling is induced by a magnetic field gradient $\partial B / \partial x$:

$$H_{\text{int}} = -g_e \mu_B \frac{\partial B}{\partial x} \hat{x} \, \sigma_z$$

This couples the electron's motional state to its spin, enabling Mølmer-Sørensen-type or geometric phase entangling gates via the shared motional mode, directly analogous to trapped-ion gates but at GHz motional frequencies.

The predicted two-qubit gate time scales as:

$$\tau_{\text{gate}} \sim \frac{1}{\eta \omega_{\text{sec}}}$$

where $\eta$ is an effective Lamb-Dicke-like parameter for the spin-motion coupling, yielding predicted gate times of tens to hundreds of nanoseconds — comparable to superconducting qubits.

## Motivation

Trapped-electron qubits aim to combine the best features of trapped ions (long spin coherence, identical qubits, motional-mode entangling gates) with the speed of superconducting circuits (ns-scale gates), while eliminating laser systems entirely. If the technical challenges of single-electron detection, ground-state cooling, and heating suppression can be overcome, trapped electrons could offer a uniquely scalable platform: all-electronic control, CMOS-compatible fabrication of surface traps, and gate speeds competitive with solid-state platforms while maintaining the isolation-from-material-defects advantage of trapped-particle approaches.

## Experimental Status

**Quantum information processing proposal — Daniilidis et al. (2013):**
- Proposed interfacing trapped electrons with superconducting electronics via parametric frequency conversion.
- Designed a scheme for coherent quantum information transfer between electron motional states and superconducting resonators.
- Identified geometric nonlinearities in the trapping potential as a resource for coupling.

**Feasibility study — Yu et al. (2022):**
- Comprehensive theoretical analysis of trapped-electron quantum computing in a linear Paul trap.
- Proposed experimental sequence: trapping, resistive cooling to ~0.4 K, electronic detection, spin readout via magnetic gradients, and entangling gates.
- Simulated two-qubit Bell-state fidelities of ~99.99% under realistic parameters.
- Proposed QCCD architecture adapted for electrons, with transport times ~100× faster than ions.

**Spin readout proposal — Peng et al. (2017):**
- Proposed spin readout via oscillating magnetic field gradients in a surface Paul trap.
- Predicted readout fidelity of 99.7% in 25 μs.
- All-electronic scheme: no lasers or fluorescence required.

**Electron trapping and detection — Taniguchi and Noguchi (2025):**
- Demonstrated image current detection of electrons in a room-temperature Paul trap.
- Extracted electron signals via coupling to microwave cavity modes.
- Observed resistive cooling of trapped electron clouds.
- Key step toward single-electron ground-state cooling at cryogenic temperatures.

**Electron dynamics simulations — Huang et al. (2025):**
- Numerical studies of electron dynamics in linear Paul traps including Wigner crystal formation for multi-electron entangling operations.
- Analyzed cooling methods and stability under strong magnetic fields.

**Status as of 2026:**
- No trapped-electron spin qubit has been experimentally demonstrated. Electron trapping in Paul traps at room temperature and image current detection have been achieved, but single-electron isolation, ground-state cooling, and spin readout remain undemonstrated.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Motional frequency | ~GHz | vs. ~MHz for ions; enables faster gates | [Yu et al. 2022](https://doi.org/10.1103/PhysRevA.105.022420) |
| 2Q gate fidelity | ~99.99% (predicted) | Simulated Bell-state fidelity | [Yu et al. 2022](https://doi.org/10.1103/PhysRevA.105.022420) |
| Spin readout fidelity | 99.7% (predicted) | Via magnetic gradient + motional coupling | [Peng et al. 2017](https://doi.org/10.1103/PhysRevA.95.012312) |
| Gate time (2Q) | ~10–100 ns (predicted) | Comparable to superconducting gates | [Yu et al. 2022](https://doi.org/10.1103/PhysRevA.105.022420) |
| Control mechanism | All-electronic | Microwave spin rotations, dc/rf trapping, image current readout | — |
| Operating temperature | ~100 mK (target) | Cryogenic needed for ground-state cooling; trapping at room temperature demonstrated | — |

## Scaling Considerations

- **Anomalous heating**: the $q^2/m$ scaling of heating rates means electrons are ~10⁶× more susceptible to electric field noise than ions. Cryogenic operation and ultra-clean trap surfaces are essential, and the heating rate may ultimately limit gate fidelities.
- **Single-electron detection**: detecting and addressing individual electrons without fluorescence requires sensitive electronic readout (image currents, superconducting resonators). This has been demonstrated for electron clouds but not single electrons in Paul traps.
- **Ground-state cooling**: achieving motional ground state at GHz frequencies requires starting temperatures below ~50 mK. Resistive cooling followed by sideband cooling via spin-motion coupling is the proposed path.
- **Magnetic field stability**: the Zeeman splitting depends on magnetic field, requiring either shielding or clock-like transition schemes for long coherence.
- **Fabrication compatibility**: surface Paul traps for electrons can leverage CMOS fabrication technology, with electrode dimensions of ~10 μm, a potential advantage over ion traps requiring ~100 μm features.
- **Comparison to ions**: trapped electrons trade the proven, high-fidelity operations of trapped ions for theoretical speed advantages that remain unvalidated experimentally.

## References

### Proposals
- N. Daniilidis et al., "Quantum information processing with trapped electrons and superconducting electronics," [New J. Phys. 15, 073017 (2013)](https://doi.org/10.1088/1367-2630/15/7/073017) | [arXiv:1304.4710](https://arxiv.org/abs/1304.4710)
- P. Peng, C. Matthiesen, and H. Häffner, "Spin readout of trapped electron qubits," [Phys. Rev. A 95, 012312 (2017)](https://doi.org/10.1103/PhysRevA.95.012312) | [arXiv:1611.00130](https://arxiv.org/abs/1611.00130)
- Q. Yu et al., "Feasibility study of quantum computing using trapped electrons," [Phys. Rev. A 105, 022420 (2022)](https://doi.org/10.1103/PhysRevA.105.022420) | [arXiv:2112.04034](https://arxiv.org/abs/2112.04034)

### Experimental progress
- A. Huang et al., "Numerical Investigations of Electron Dynamics in a Linear Paul Trap," [arXiv:2503.12379 (2025)](https://arxiv.org/abs/2503.12379)

## Linked Papers

- [[daniilidis-2013-trapped-electron-superconducting]]
- [[peng-2017-electron-spin-readout]]
- [[yu-2022-trapped-electron-feasibility]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform concept; electrons replace ions
- [[cirac-zoller-gate]] — entangling gate principle adapted for electron motional modes
- [[spin-qubit]] — broader spin qubit family
