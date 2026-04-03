---
title: Single-Spin Quantum Dot (Loss-DiVincenzo) Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 1998
first_demonstrated_year: 2004
keywords:
- spin qubit
- quantum dot
- silicon
- loss divincenzo
- exchange coupling
- edsr
- si/sige
influence_score: 0.80
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[loss-divincenzo-qubit-figure.png]]

## Description

The Loss-DiVincenzo qubit encodes quantum information in the spin-1/2 of a single excess electron ($|\!\uparrow\rangle$, $|\!\downarrow\rangle$) trapped in a gate-defined quantum dot in a semiconductor heterostructure, typically Si/SiGe or Si-MOS. Proposed by Loss and DiVincenzo (1998), it is arguably the simplest physical realization of a qubit: a single electron spin in a magnetic field.

Since spin is a magnetic property, the qubit does not directly couple to the dominant electrical noise sources in the semiconductor environment, leading to inherently long coherence times — particularly in isotopically purified $^{28}\text{Si}$, where the nuclear spin bath is eliminated. $T_2$ coherence times exceeding 28 ms have been demonstrated.

Single-qubit gates are implemented via **electric-dipole spin resonance (EDSR)**, which uses an AC electric field combined with a spin-orbit coupling gradient (or micromagnet) to drive spin rotations without requiring oscillating magnetic fields. Two-qubit entangling gates use the **exchange interaction**: by electrically tuning the tunnel barrier between adjacent quantum dots, the Heisenberg exchange coupling $J(t)$ is switched on, producing a $\sqrt{\text{SWAP}}$ gate that, combined with single-qubit rotations, forms a universal gate set.

The extremely small qubit footprint (~50–100 nm pitch) and compatibility with CMOS fabrication technology make spin qubits a leading candidate for large-scale quantum computing.

## Hamiltonian

The single-spin Zeeman Hamiltonian in an external magnetic field $B_0$:

$$H_Z = g\mu_B B_0 S_z = \frac{\hbar\omega_Z}{2}\sigma_z$$

where $g \approx 2$ is the electron g-factor in silicon, $\mu_B$ is the Bohr magneton, and $\omega_Z = g\mu_B B_0/\hbar$ is the Zeeman splitting (typically $\sim 10{-}40\,\text{GHz}$ at $B_0 \sim 0.5{-}1.5\,\text{T}$).

The two-qubit exchange Hamiltonian when the tunnel barrier between adjacent dots is lowered:

$$H_\text{ex}(t) = J(t)\,\vec{S}_1 \cdot \vec{S}_2$$

where $J(t) = 4t_0^2(t)/U$ is the exchange coupling, $t_0$ is the interdot tunneling matrix element (electrically tunable via gate voltage), and $U$ is the on-site charging energy. Pulsing $\int J\,dt = \pi\hbar/2$ produces a $\sqrt{\text{SWAP}}$ gate.

## Motivation

Individual spin with $S = 1/2$ is the simplest realization of a qubit. The electron spin qubit in a semiconductor quantum dot provides easy electrical control of exchange coupling, potentially excellent scalability via lithographic patterning, and compatibility with existing CMOS semiconductor fabrication technology. Isotopically purified $^{28}\text{Si}$ eliminates the nuclear spin bath, yielding coherence times orders of magnitude longer than in GaAs. The extremely small qubit footprint makes it a strong candidate for the high qubit densities needed for fault-tolerant quantum computing.

## Experimental Status

**Single-shot spin readout — Elzerman et al. (2004):**
- First single-shot readout of an individual electron spin in a quantum dot using spin-to-charge conversion.

**High-fidelity single-qubit gates — Yoneda et al. (2018):**
- Demonstrated 99.9% single-qubit gate fidelity in a Si/SiGe quantum dot with charge-noise-limited coherence.

**Universal gate set in silicon — Noiri et al. (2022):**
- Demonstrated fast universal two-qubit gates above the fault-tolerance threshold in silicon.
- Exchange-based $\sqrt{\text{SWAP}}$ gate fidelity of 99–99.8%.

**Long coherence in $^{28}\text{Si}$ — Veldhorst et al. (2014):**
- Demonstrated electrical control of a long-lived spin qubit in a Si/SiGe quantum dot.
- Hahn echo $T_2 \sim 28\,\text{ms}$ in isotopically purified silicon.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–45 s | Electron spin in Si/SiGe | [Elzerman et al. 2004](https://doi.org/10.1038/nature02693) |
| $T_2$ (echo) | 0.5–28 ms | Hahn echo in $^{28}$Si | [Veldhorst et al. 2014](https://doi.org/10.1038/nnano.2014.153) |
| 1Q gate fidelity | 99.6–99.95% | EDSR driven | [Yoneda et al. 2018](https://doi.org/10.1038/s41565-017-0014-x) |
| 2Q gate fidelity | 99–99.8% | Exchange-based $\sqrt{\text{SWAP}}$ | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| Gate time (1Q) | 1–100 μs | Depends on drive mechanism | — |
| Gate time (2Q) | 1–100 ns | Exchange pulse | — |
| Readout fidelity | 98–99.5% | Spin-to-charge conversion + SET | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| Qubit footprint | ~50–100 nm pitch | Very small; CMOS-compatible | — |
| Operating temperature | 20 mK–1 K | Silicon: some operation at >1 K | — |
| Connectivity | Nearest-neighbor (1D/2D) | Exchange range ~100 nm | — |

## References

### Original proposal
- D. Loss and D. P. DiVincenzo, "Quantum computation with quantum dots," [Phys. Rev. A 57, 120 (1998)](https://doi.org/10.1103/PhysRevA.57.120) — [arXiv:cond-mat/9701055](https://arxiv.org/abs/cond-mat/9701055)

### Experimental demonstrations
- J. M. Elzerman et al., "Single-shot read-out of an individual electron spin in a quantum dot," [Nature 430, 431 (2004)](https://doi.org/10.1038/nature02693)
- J. Yoneda et al., "A quantum-dot spin qubit with coherence limited by charge noise and fidelity higher than 99.9%," [Nat. Nanotechnol. 13, 102 (2018)](https://doi.org/10.1038/s41565-017-0014-x)
- A. Noiri et al., "Fast universal quantum gate above the fault-tolerance threshold in silicon," [Nature 601, 338 (2022)](https://doi.org/10.1038/s41586-021-04182-y)

### Coherence characterization
- E. Kawakami et al., "Electrical control of a long-lived spin qubit in a Si/SiGe quantum dot," [Nat. Nanotechnol. 9, 666 (2014)](https://doi.org/10.1038/nnano.2014.153)

## Linked Papers

- [[loss-divincenzo-1998-quantum-dots]]

## Related Entries

- [[singlet-triplet-qubit]] — two-spin encoding, no local fields needed for universal control
- [[exchange-only-qubit]] — three-spin encoding, exchange-only control
- [[aeon-qubit]] — always-on exchange variant
- [[semiconductor-charge-qubit]] — charge-based encoding (shorter coherence)
- [[kane-qubit]] — donor spin in silicon, similar physics with different confinement
- [[silicon-spin-qubit]] — broader family of silicon-based spin qubits
