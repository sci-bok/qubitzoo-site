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
last_updated: '2026-09-11'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-audit-2026-09-11
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/neutral-atom-qubit-figure.provenance.json"
figure_reviewed_by: "scibok-audit-2026-09-11"
figure_reviewed_at: "2026-09-11T14:23:12.986032+00:00"
---

## Figure

![[neutral-atom-qubit-figure.png]]

## Description

The neutral atom qubit encodes quantum information in internal states (typically hyperfine ground states) of individual neutral atoms trapped in optical tweezers or optical lattices. Entangling gates exploit strong dipole–dipole interactions via transient excitation to Rydberg states.

Neutral atom platforms trap individual alkali atoms (⁸⁷Rb, ¹³³Cs) or alkaline-earth atoms (⁸⁸Sr, ¹⁷¹Yb) in tightly focused optical tweezer arrays. Qubit states are encoded in two hyperfine ground states |0⟩ and |1⟩, which have long coherence times due to weak coupling to the environment. Single-qubit gates are driven by microwave or two-photon Raman transitions. Two-qubit entangling gates use the **Rydberg blockade** mechanism: when one atom is excited to a high-lying Rydberg state (n ~ 50–100), the strong van der Waals interaction shifts the doubly-excited state out of resonance, creating a conditional phase.

Key advantages include identical qubits (no fabrication disorder), reconfigurable geometry via tweezer rearrangement, and mid-circuit atom reloading. Arrays of up to 6,100 qubits have been demonstrated, with programmable connectivity set by Rydberg interaction range (~5–10 μm), requiring atom shuttling for longer-range gates.

## Hamiltonian

Single-qubit Hamiltonian in the rotating frame:

$$H_{\text{1Q}} = \frac{\hbar\Omega}{2}\sigma_x + \frac{\hbar\Delta}{2}\sigma_z$$

where $\Omega$ is the Rabi frequency and $\Delta$ the detuning.

Rydberg blockade Hamiltonian for two atoms separated by distance $R$:

$$H_{\text{2Q}} = \frac{\hbar\Omega_1}{2}(|g_1\rangle\langle r_1| + \text{h.c.}) + \frac{\hbar\Omega_2}{2}(|g_2\rangle\langle r_2| + \text{h.c.}) + \frac{C_6}{R^6}|r_1 r_2\rangle\langle r_1 r_2|$$

where $\Omega_i$ is the Rabi frequency driving atom $i$ between its ground state $|g_i\rangle$ and Rydberg state $|r_i\rangle$, and $C_6/R^6$ is the van der Waals shift of the doubly-excited state $|r_1 r_2\rangle$ (positive for the repulsive interaction of typical alkali Rydberg pairs). The blockade condition $C_6/R^6 \gg \hbar\Omega$ prevents simultaneous Rydberg excitation, enabling a controlled-Z gate: the interaction shifts the doubly-excited state out of resonance, so the second atom's excitation is suppressed exactly when the first is in $|r_1\rangle$.

## Motivation

- **Identical qubits:** Every atom of the same species is physically identical — no fabrication disorder, no frequency collisions.
- **Massive parallelism:** Global Rydberg pulses entangle all non-interacting pairs simultaneously.
- **Reconfigurable connectivity:** Atom shuttling via tweezer rearrangement enables arbitrary graph connectivity within a single zone.
- **Scalability:** 6,100-atom arrays demonstrated (Manetsch et al. 2025); scaling beyond 10,000 atoms is plausible but requires solving control, cooling, and readout challenges at scale.
- **Mid-circuit operations:** Erasure detection and atom reloading demonstrated, enabling erasure-error conversion and real-time error mitigation.

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

**Sustained high-fidelity logic — Lin et al. (2026):**
- Two-qubit CZ gate fidelity 99.60% raw, 99.81% with erasure detection
- Sustained fidelity across repeated circuit layers via mid-circuit cooling and atom reloading

**Rigorous 1Q benchmarking — Rozanov et al. (2025):**
- Single-qubit gate fidelity 99.963% via direct randomized benchmarking on a 25-qubit ⁸⁷Rb array

**6,100-qubit array — Manetsch et al. (2025):**
- 6,100-atom tweezer array in ~12,000 sites; record 12.6 s hyperfine coherence in an array
- Coherence-preserving transport with interleaved randomized benchmarking at large scale

**Erasure-detected 2Q gates in ¹⁷¹Yb — Senoo et al. (2025):**
- Error-detected two-qubit gate fidelity 99.78(4)% in metastable qubits via delayed erasure detection
- Coherent mapping of a 20-atom GHZ state between Rydberg and nuclear-spin manifolds

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate fidelity | 99.963% | ⁸⁷Rb DRB (25 qubits) | [Rozanov et al. 2025](https://arxiv.org/abs/2509.06881) |
| 2Q gate fidelity (CZ) | 99.81% | With erasure detection (99.60% raw) | [Lin et al. 2026](https://arxiv.org/abs/2603.01612) |
| 2Q gate fidelity (error-detected) | 99.78(4)% | ¹⁷¹Yb metastable qubits | [Senoo et al. 2025](https://arxiv.org/abs/2506.13632) |
| T₂ (Ramsey) | ~1 s | ⁸⁷Rb hyperfine | [Kleine Büning et al. 2011](https://doi.org/10.1103/PhysRevLett.106.240801) |
| T₂ (spin echo) | ~10–12.6 s | ¹⁷¹Yb clock states / ⁸⁷Rb array record | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028), [Manetsch et al. 2025](https://doi.org/10.1038/s41586-025-09641-4) |
| Readout fidelity | 99.8% | ¹³³Cs fluorescence | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| Array size | 6,100 atoms | ⁸⁷Rb (Rb tweezer array, ~12,000 sites) | [Manetsch et al. 2025](https://doi.org/10.1038/s41586-025-09641-4) |
| Atom loss per circuit | ~0.5% per layer | ¹³³Cs | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |

## Scaling Considerations

- **Connectivity:** Reconfigurable via atom shuttling; effective all-to-all within Rydberg range (~5–10 μm). Longer-range gates require physical atom transport with associated decoherence.
- **Parallelism:** Global Rydberg pulses enable parallel entangling gates on non-interacting pairs.
- **Error budget:** Dominated by Rydberg state decay, atomic motion (Doppler shifts), and atom loss (~0.5% per circuit layer, compounding in deep circuits).
- **Mid-circuit operations:** Erasure detection via shelving to auxiliary states demonstrated; enables erasure-error conversion.

### Limitations & Challenges

- **Gate speed:** Two-qubit gate times (~μs) are ~1000× slower than superconducting qubits (~ns), limiting circuit depth per unit time.
- **Atom loss:** Probabilistic atom loss during Rydberg excitation and imaging compounds at ~0.5% per circuit layer, requiring active reloading strategies.
- **Probabilistic loading:** Initial tweezer loading is stochastic (~50% per site); defect-free assembly via rearrangement is time-costly and scales with array size.
- **Vacuum requirements:** Ultra-high vacuum (~10⁻¹¹ Torr) systems are large, expensive, and have long pump-down times.
- **Laser noise & stability:** Rydberg excitation requires high-power, frequency-stabilized lasers; laser phase noise is a dominant gate error source.
- **Crosstalk:** At high site densities, residual Rydberg interactions and optical crosstalk between closely spaced tweezers can introduce correlated errors.

## References

### Original proposal
- D. Jaksch et al., "Fast Quantum Gates for Neutral Atoms," [Phys. Rev. Lett. 85, 2208 (2000)](https://doi.org/10.1103/PhysRevLett.85.2208) — [arXiv:quant-ph/0004038](https://arxiv.org/abs/quant-ph/0004038)

### Reviews
- M. Saffman, T. G. Walker, K. Mølmer, "Quantum information with Rydberg atoms," [Rev. Mod. Phys. 82, 2313 (2010)](https://doi.org/10.1103/RevModPhys.82.2313)
- M. Saffman, "Neutral atom quantum computing," [arXiv:2608.30783](https://arxiv.org/abs/2608.30783) (2026)

### Experimental demonstrations
- A. Isenhower et al., "Demonstration of a Neutral Atom Controlled-NOT Quantum Gate," [Phys. Rev. Lett. 104, 010503 (2010)](https://doi.org/10.1103/PhysRevLett.104.010503) — [arXiv:0907.5552](https://arxiv.org/abs/0907.5552)
- S. Ebadi et al., "Quantum phases of matter on a 256-atom programmable quantum simulator," [Nature 595, 227 (2021)](https://doi.org/10.1038/s41586-021-03582-4) — [arXiv:2012.12281](https://arxiv.org/abs/2012.12281)
- S. Ma et al., "Universal Gate Operations on Nuclear Spin Qubits in an Optical Tweezer Array of ¹⁷¹Yb Atoms," [Phys. Rev. X 12, 021028 (2022)](https://doi.org/10.1103/PhysRevX.12.021028) — [arXiv:2203.04340](https://arxiv.org/abs/2203.04340)
- D. Bluvstein et al., "Logical quantum processor based on reconfigurable atom arrays," [Nature 626, 58 (2024)](https://doi.org/10.1038/s41586-023-06927-3) — [arXiv:2312.03982](https://arxiv.org/abs/2312.03982)
- L. Pause et al., "Supercharged two-dimensional tweezer array with more than 1000 atomic qubits," [Optica 11, 222 (2024)](https://doi.org/10.1364/OPTICA.513551) — [arXiv:2310.09191](https://arxiv.org/abs/2310.09191)
- D. Rozanov et al., "Benchmarking Single-Qubit Gates on a Neutral Atom Quantum Processor," [arXiv:2509.06881](https://arxiv.org/abs/2509.06881) (2025)
- H. J. Manetsch et al., "A tweezer array with 6,100 highly coherent atomic qubits," [Nature (2025)](https://doi.org/10.1038/s41586-025-09641-4) — [arXiv:2403.12021](https://arxiv.org/abs/2403.12021)
- A. Senoo et al., "High-fidelity entanglement and coherent multi-qubit mapping in an atom array," [arXiv:2506.13632](https://arxiv.org/abs/2506.13632) (2025)
- R. Lin et al., "Sustaining high-fidelity quantum logic in neutral-atom circuits via mid-circuit operations," [arXiv:2603.01612](https://arxiv.org/abs/2603.01612) (2026)

### Coherence measurements
- G. Kleine Büning et al., "Extended Coherence Time on the Clock Transition of Optically Trapped Rubidium," [Phys. Rev. Lett. 106, 240801 (2011)](https://doi.org/10.1103/PhysRevLett.106.240801)

## Linked Papers

- [[jaksch-2000-rydberg-gate]]
- [[bluvstein-2024-logical-processor-reconfigurable]]
- [[ma-2022-nuclear-spin-atom]]
- [[pause-2024-supercharged-dimensional-tweezer]]
- [[ebadi-2021-256-atom-simulator]]
- [[isenhower-2010-rydberg-cnot]]
- [[kleine-buning-2011-clock-coherence]]
- [[wu-2022-erasure-neutral-atoms]]
- [[lin-2026-sustaining-high-fidelity-neutral-atom-circuits]]
- [[rozanov-2025-benchmarking-single-qubit-gates-neutral-atom]]
- [[saffman-2010-quantum-information-rydberg]]
- [[manetsch-2025-tweezer-array-6100-atoms]]
- [[senoo-2025-high-fidelity-entanglement-multiqubit-mapping]]
- [[sturm-2026-efficient-assembly-of-a]]
- [[ikari-2026-do-not-let-cnots]]
- [[liu-2026-architecture-and-compilation-co-design]]
- [[roschinski-2026-programmable-cavity-qed-with]]
- [[saffman-2026-neutral-atom-quantum-computing]]
- [[patil-2026-a-platform-aware-compilation-framework]]
- [[sharma-2026-loss-correcting-fault-tolerant-quantum-computing]]

## Evergreen context

- [[rydberg-blockade-mechanism]] — the interaction primitive that sets neutral-atom gate range, parallelism, and a large fraction of the error budget
- [[erasure-error-vs-pauli-error]] — explains why atom loss plus mid-circuit detection is strategically important rather than just a nuisance
- [[quantum-hardware]] — the right umbrella note when comparing neutral atoms against superconducting, ion-trap, and photonic system stacks

## Related Entries

- [[rydberg-neutral-atom-qubit]] — Rydberg-specific encoding variant
- [[alkaline-earth-neutral-atom-clock-qubit]] — Clock-state variant with narrower optical transitions
- [[nuclear-spin-neutral-atom-qubit]] — Nuclear spin encoding in ¹⁷¹Yb
- [[surface-code-logical-qubit]] — Error correction demonstrated on neutral atom arrays
- [[erasure-qubit]] — Erasure-error conversion demonstrated in neutral atom systems via shelving to detectable loss channels
- [[trapped-ion-qubit]] — Closest competing atomic-physics platform; similar individual-atom control but electromagnetic trapping and Coulomb-mediated gates