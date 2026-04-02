---
title: Hybrid Qubit (Semiconductor Triple-Dot)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2012
first_demonstrated_year: 2014
keywords:
- hybrid qubit
- semiconductor
- triple dot
- charge spin hybrid
- fast electrical control
influence_score: 0.66
last_updated: '2026-04-02'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[hybrid-qubit-figure.png]]

## Description

The **hybrid semiconductor qubit** encodes quantum information in a three-electron, triple-quantum-dot system that deliberately mixes spin and charge degrees of freedom. The computational states arise from the hybridization of different charge configurations — principally (1,0,2) and (2,0,1) mixed with (1,1,1) — where the charge admixture provides an electric dipole moment enabling fast all-electrical control, while the spin character contributes to coherence.

The qubit operates near a charge transition where tunnel coupling between dots hybridizes states with different charge distributions. At a **sweet spot**, the qubit transition frequency is first-order insensitive to detuning fluctuations. The hybrid character means the qubit can be driven extremely fast (1–20 ns gate times) by electric fields through the charge component, while retaining enough spin character to keep coherence times usable.

The fundamental design tension is explicit: increasing charge character speeds up gates but increases susceptibility to charge noise, while increasing spin character improves coherence at the cost of slower control. Sweet-spot engineering and materials optimization are the central performance levers.

## Hamiltonian

A simplified effective model includes spin-like splitting plus electric-drive coupling through charge admixture:

$$H = \frac{\hbar\omega_q}{2}\sigma_z + g_E E(t)\sigma_x + H_{\text{noise}}$$

where $g_E$ captures the electric dipole coupling enabled by spin-charge hybridization, and $\omega_q$ is set by the tunnel coupling and detuning between dots.

## Motivation

- Pure spin qubits offer long coherence but are slow to drive electrically (weak spin-electric coupling).
- Pure charge qubits are fast but extremely noise-sensitive (short coherence).
- The hybrid qubit deliberately mixes these subspaces to capture **fast electrical control** with **usable coherence** — a practical compromise for semiconductor quantum dot architectures.
- Provides design intuition for next-generation electrically controlled semiconductor qubits, including the relationship between sweet-spot engineering and performance.

## Experimental Status

**Original proposal — Koh et al. (2012):**
- Proposed the pulse-gated quantum-dot hybrid qubit encoding in a Si/SiGe triple quantum dot.
- Identified the sweet-spot operating point and analyzed the charge-noise sensitivity tradeoff.

**First experimental demonstration — Kim et al. (2014):**
- Demonstrated quantum control and process tomography of a semiconductor quantum dot hybrid qubit.
- Achieved fast single-qubit manipulation with all-electrical control.
- Showed coherent Rabi oscillations and characterized gate fidelities.

**Continued development:**
- Hybrid qubit concepts have influenced the design of other fast electrically controlled spin qubits.
- Sweet-spot engineering techniques developed for the hybrid qubit apply broadly to spin-charge systems.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate time | 1–20 ns | Fast all-electrical drive | — |
| 1Q fidelity | ~99% | Platform dependent | [Kim et al. 2014](https://doi.org/10.1038/nature13407) |
| Main tradeoff | Speed vs charge-noise sensitivity | Core design tension of the hybrid encoding | — |

## References

### Original proposal
- T. S. Koh et al., "Pulse-Gated Quantum-Dot Hybrid Qubit," [Phys. Rev. Lett. 109, 250503 (2012)](https://doi.org/10.1103/PhysRevLett.109.250503)

### Experimental demonstration
- D. Kim et al., "Quantum control and process tomography of a semiconductor quantum dot hybrid qubit," [Nature 511, 70 (2014)](https://doi.org/10.1038/nature13407)

## Linked Papers

- [[shi-2015-hybrid-qubit]]

## Related Entries

- [[exchange-only-qubit]] — related triple-dot encoding with pure exchange control
- [[spin-qubit]] — broader spin qubit family
- [[hole-spin-qubit]] — alternative approach to fast electrical spin control via spin-orbit coupling
