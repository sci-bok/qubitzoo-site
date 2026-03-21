---
title: RX Qubit (Resonant Exchange)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2012
first_demonstrated_year: 2013
keywords:
- resonant exchange
- three-spin qubit
- semiconductor
- exchange-only
- triple quantum dot
influence_score: 0.69
last_updated: '2026-03-21'
generated_by: scibok-curation
verified_by: scibok-manual-2026-03-21
---

## Figure

![[rx-qubit-figure.png]]

## Description

The **resonant-exchange (RX) qubit** is a three-electron, triple-quantum-dot spin qubit operating with always-on exchange coupling and driven by resonant RF modulation near the qubit splitting. It encodes in the $S = 1/2$ subspace of three electrons, using the two degenerate $S_z = +1/2$ doublet states distinguished by their symmetry under exchange of the outer dots.

Unlike pulsed exchange-only qubits that require large, abrupt detuning pulses to switch couplings on and off, the RX qubit operates at a **symmetric operating point** ($J_{12} \approx J_{23}$) where the exchange-defined splitting creates a static energy gap $\hbar\omega_q$. Single-qubit rotations are then performed by resonantly driving at frequency $\omega_d \approx \omega_q$, analogous to electron spin resonance but using exchange modulation rather than magnetic fields.

This operating mode provides partial protection against low-frequency charge noise: at the symmetric point, the qubit frequency is first-order insensitive to detuning fluctuations (a **sweet spot**). The tradeoff is that the qubit is always precessing, requiring phase-locked resonant control rather than simpler DC pulsing.

## Hamiltonian

Low-energy effective qubit model in the rotating frame:

$$H = \frac{\hbar\omega_q}{2}\sigma_z + A_{\text{RF}}\cos(\omega_d t)\sigma_x$$

where $\omega_q$ is set by the static exchange couplings among the three dots. The qubit splitting at the symmetric point is:

$$\hbar\omega_q \propto \sqrt{J_{12}^2 + J_{23}^2 - J_{12}J_{23}}$$

which at $J_{12} = J_{23} = J$ gives $\hbar\omega_q \propto J$.

## Motivation

- Preserves the **all-electrical, exchange-only control** advantage — no micromagnets or magnetic field gradients needed.
- Operates at a charge-noise sweet spot, improving coherence over non-resonant exchange-only pulse sequences.
- Provides a practical bridge between exchange-only and AEON-type operation for three-spin encodings.
- Compatible with resonator-mediated long-range coupling proposals for scaling beyond nearest-neighbor interactions.

## Experimental Status

**First demonstration — Medford et al. (2013):**
- Demonstrated coherent resonant-exchange qubit operation in a GaAs triple quantum dot.
- Showed resonant driving at the exchange-defined splitting frequency.
- Observed Rabi oscillations and characterized the sweet-spot protection.

**Continued development (2013–present):**
- Demonstrated self-consistent measurement and state tomography of exchange-only qubits using resonant techniques (Medford et al., Nature Nanotechnology, 2013).
- Si/SiGe implementations of three-spin qubits have shown improved coherence over GaAs.
- Integration with resonator coupling for long-range interactions remains an active area.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate fidelity | 98–99.9% | Device and material dependent | [Gyenis et al. 2021](https://doi.org/10.1103/PRXQuantum.2.030101) |
| Qubit splitting | 1–10 GHz | Set by static exchange couplings | — |
| 2Q coupling path | Exchange / resonator-mediated | Architecture dependent | — |
| Operating temperature | 20–100 mK | Semiconductor dilution setups | — |

## References

### Original proposal
- J. Medford et al., "Quantum-Dot-Based Resonant Exchange Qubit," [Phys. Rev. Lett. 111, 050501 (2013)](https://doi.org/10.1103/PhysRevLett.111.050501)

### Experimental demonstrations
- J. Medford et al., "Self-consistent measurement and state tomography of an exchange-only spin qubit," [Nature Nanotech. 8, 654 (2013)](https://doi.org/10.1038/nnano.2013.168)

### Related review
- A. Gyenis et al., "Moving beyond the Transmon: Noise-Protected Superconducting Quantum Circuits," [PRX Quantum 2, 030101 (2021)](https://doi.org/10.1103/PRXQuantum.2.030101)

## Linked Papers

- [[medford-2013-rx-qubit]]

## Related Entries

- [[exchange-only-qubit]] — parent encoding; RX is the resonantly driven variant
- [[aeon-qubit]] — always-on exchange qubit with related operating principles
- [[singlet-triplet-qubit]] — two-electron spin qubit; simpler encoding, similar materials
