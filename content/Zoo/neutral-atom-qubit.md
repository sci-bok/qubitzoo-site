---
title: Neutral Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
figure_reviewed: true
first_proposed_year: 2000
first_demonstrated_year: 2010
keywords:
- neutral atom
- optical tweezer
- ground state
- hyperfine
- alkali
- Rydberg blockade
influence_score: 0.92
last_updated: '2026-04-01'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[neutral-atom-qubit-figure.png]]

## Description

The neutral atom qubit encodes quantum information in internal states (typically hyperfine ground states) of individual neutral atoms trapped in optical tweezers or optical lattices. Entangling gates exploit strong dipole–dipole interactions via transient excitation to Rydberg states.

Neutral atom platforms trap individual alkali atoms (⁸⁷Rb, ¹³³Cs) or alkaline-earth atoms (⁸⁸Sr, ¹⁷¹Yb) in tightly focused optical tweezer arrays. Qubit states are encoded in two hyperfine ground states |0⟩ and |1⟩, which have long coherence times due to weak coupling to the environment. Single-qubit gates are driven by microwave or two-photon Raman transitions. Two-qubit entangling gates use the **Rydberg blockade** mechanism: when one atom is excited to a high-lying Rydberg state (n ~ 50–100), the strong van der Waals interaction shifts the doubly-excited state out of resonance, creating a conditional phase.

Key advantages include identical qubits (no fabrication disorder), reconfigurable geometry via tweezer rearrangement, and mid-circuit atom reloading. Arrays of 1000+ atoms have been demonstrated, with programmable connectivity governed by the Rydberg interaction range (~5–10 μm). Gate speeds (~μs) remain significantly slower than superconducting platforms (~ns), and probabilistic atom loading requires time-costly rearrangement cycles.

## Hamiltonian

Single-qubit Hamiltonian in the rotating frame:

$$H_{\text{1Q}} = \frac{\hbar\Omega}{2}\sigma_x + \frac{\hbar\Delta}{2}\sigma_z$$

where $\Omega$ is the Rabi frequency and $\Delta$ the detuning.

Rydberg blockade Hamiltonian for two atoms separated by distance $R$:

$$H_{\text{2Q}} = \frac{\hbar\Omega_1}{2}|g_1\rangle\langle r_1| + \frac{\hbar\Omega_2}{2}|g_2\rangle\langle r_2| + \frac{C_6}{R^6}|r_1 r_2\rangle\langle r_1 r_2| + \text{h.c.}$$

The blockade condition $C_6/R^6 \gg \hbar\Omega$ prevents simultaneous Rydberg excitation, enabling a controlled-Z gate.

## Motivation

- **Identical qubits:** Every atom of the same species is physically identical — no fabrication disorder, no frequency collisions.
- **Massive parallelism:** Global Rydberg pulses entangle all non-interacting pairs simultaneously.
- **Reconfigurable connectivity:** Atom shuttling via tweezer rearrangement enables arbitrary graph connectivity within a single zone.
- **Scalability:** 1000+ atom arrays demonstrated; further scaling requires addressing cooling, individual control, and readout challenges at high qubit counts.
- **Mid-circuit operations:** Erasure detection and atom reloading demonstrated, enabling [[erasure-qubit|erasure-error conversion]] and real-time error mitigation.

## Experimental Status

**First Rydberg blockade gate — Isenhower et al. (2010):**
- Demonstrated controlled-NOT gate between two individually trapped ⁸⁷Rb atoms via Rydberg blockade
- Gate fidelity ~73% (limited by atomic motion and laser phase noise)

**Large-scale programmable arrays — Ebadi et al. (2021):**
- 256-atom programmable quantum simulator using ⁸⁷Rb tweezer arrays
- Demonstrated quantum phases of matter and optimization algorithms

**High-fidelity entanglement — Bluvstein et al. (2024):**
- Two-qubit CZ gate fidelity of 99.5% in ¹³³Cs tweezer arrays
- Single-qubit gate fidelity of 99.97%
- Logical qubit operations with error correction demonstrated

**1000+ atom arrays — Pause et al. (2024):**
- 1225-atom ⁸⁷Rb tweezer array with >97% loading efficiency

**High-fidelity sustained gates — Lin et al. (2026):**
- Two-qubit CZ gate fidelity 99.60% raw, 99.81% with erasure detection
- Sustained fidelity across repeated circuit layers via mid-circuit cooling and atom reloading

**Rigorous 1Q benchmarking — Rozanov et al. (2025):**
- Single-qubit gate fidelity 99.963% via direct randomized benchmarking on 25-qubit ⁸⁷Rb array

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate fidelity | 99.963% | ⁸⁷Rb DRB (25 qubits) | [Rozanov et al. 2025](https://arxiv.org/abs/2509.06881) |
| 2Q gate fidelity (CZ) | 99.81% | With erasure detection | [Lin et al. 2026](https://arxiv.org/abs/2603.01612) |
| T₂ (Ramsey) | ~1 s | ⁸⁷Rb hyperfine | [Kleine Büning et al. 2011](https://doi.org/10.1103/PhysRevLett.106.240801) |
| T₂ (spin echo) | ~10 s | ¹⁷¹Yb clock states | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028) |
| Readout fidelity | 99.8% | ¹³³Cs fluorescence | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| Array size | 1225 atoms | Rb tweezer array | [Pause et al. 2024](https://doi.org/10.1364/OPTICA.513551) |
| Atom loss per circuit | ~0.5% per layer | ¹³³Cs | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |

## Scaling Considerations

- **Connectivity:** Reconfigurable via atom shuttling; effective all-to-all within Rydberg range (~5–10 μm).
- **Parallelism:** Global Rydberg pulses enable parallel entangling gates on non-interacting pairs.
- **Error budget:** Dominated by Rydberg state decay, atomic motion (Doppler shifts), and atom loss (~0.5% per circuit layer).
- **Mid-circuit operations:** Erasure detection via shelving to auxiliary states demonstrated; enables erasure-error conversion.
- **Challenges:** Ultra-high vacuum requirements (≤10⁻¹¹ Torr), probabilistic atom loading with rearrangement overhead, laser noise and intensity stability as dominant error sources, and crosstalk between closely spaced tweezers at high density.

## References

### Original proposal
- D. Jaksch et al., "Fast Quantum Gates for Neutral Atoms," [Phys. Rev. Lett. 85, 2208 (2000)](https://doi.org/10.1103/PhysRevLett.85.2208) — [arXiv:quant-ph/0004038](https://arxiv.org/abs/quant-ph/0004038)

### Experimental demonstrations
- D. Bluvstein et al., "Logical quantum processor based on reconfigurable atom arrays," [Nature 626, 58 (2024)](https://doi.org/10.1038/s41586-023-06927-3) — [arXiv:2312.03982](https://arxiv.org/abs/2312.03982)
- S. Ma et al., "Universal Gate Operations on Nuclear Spin Qubits in an Optical Tweezer Array of ¹⁷¹Yb Atoms," [Phys. Rev. X 12, 021028 (2022)](https://doi.org/10.1103/PhysRevX.12.021028) — [arXiv:2203.04340](https://arxiv.org/abs/2203.04340)
- L. Pause et al., "Supercharged two-dimensional tweezer array with more than 1000 atomic qubits," [Optica 11, 222 (2024)](https://doi.org/10.1364/OPTICA.513551) — [arXiv:2310.09191](https://arxiv.org/abs/2310.09191)
- L. Isenhower et al., "Demonstration of a Neutral Atom Controlled-NOT Quantum Gate," [Phys. Rev. Lett. 104, 010503 (2010)](https://doi.org/10.1103/PhysRevLett.104.010503) — [arXiv:0907.5552](https://arxiv.org/abs/0907.5552)
- S. Ebadi et al., "Quantum Phases of Matter on a 256-Atom Programmable Quantum Simulator," [Nature 595, 227 (2021)](https://doi.org/10.1038/s41586-021-03582-4) — [arXiv:2012.12281](https://arxiv.org/abs/2012.12281)
- R. Lin et al., "Sustaining high-fidelity quantum logic in neutral-atom circuits via mid-circuit operations," [arXiv:2603.01612](https://arxiv.org/abs/2603.01612) (2026)
- D. Rozanov et al., "Benchmarking Single-Qubit Gates on a Neutral Atom Quantum Processor," [arXiv:2509.06881](https://arxiv.org/abs/2509.06881) (2025)

### Coherence measurements
- G. Kleine Büning et al., "Extended Coherence Time on the Clock Transition of Optically Trapped Rubidium," [Phys. Rev. Lett. 106, 240801 (2011)](https://doi.org/10.1103/PhysRevLett.106.240801)

## Linked Papers

- [[jaksch-2000-rydberg-gate]]
- [[bluvstein-2024-logical-processor-reconfigurable]]
- [[ma-2022-nuclear-spin-atom]]
- [[pause-2024-supercharged-dimensional-tweezer]]

## Related Entries

- [[rydberg-neutral-atom-qubit]] — Rydberg-specific encoding variant
- [[alkaline-earth-neutral-atom-clock-qubit]] — Clock-state variant with narrower optical transitions
- [[nuclear-spin-neutral-atom-qubit]] — Nuclear spin encoding in ¹⁷¹Yb
- [[erasure-qubit]] — Erasure-error conversion strategy demonstrated with neutral atoms
- [[trapped-ion-qubit]] — Competing atomic platform with similar qubit encoding principles
- [[surface-code-logical-qubit]] — Error correction demonstrated on neutral atom arrays
