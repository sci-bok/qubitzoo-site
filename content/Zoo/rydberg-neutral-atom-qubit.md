---
title: Rydberg Neutral-Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
first_proposed_year: 2000
first_demonstrated_year: 2010
keywords:
- neutral atom
- rydberg blockade
- optical tweezer
- entangling gates
- hyperfine qubit
influence_score: 0.72
last_updated: '2026-06-16'
generated_by: scibok-curation
verified_by: scibok-audit-2026-06-16
figure_reviewed: true
---

## Figure

![[rydberg-neutral-atom-qubit-figure.png]]

## Description

The Rydberg neutral-atom qubit encodes quantum information in long-lived ground-state qubit levels, usually hyperfine states of individually trapped neutral atoms such as $^{87}\mathrm{Rb}$ or $^{133}\mathrm{Cs}$. Entangling interactions are turned on only during gate operations by transiently exciting one qubit level to a high-lying Rydberg state $|r\rangle$.

The key interaction is the **Rydberg blockade**. If atom $i$ is already in $|r\rangle$, the doubly excited state $|r_i r_j\rangle$ of a nearby atom pair is shifted by a large interaction energy $V_{ij}$, typically dominated by a van der Waals term $C_6/R_{ij}^6$ and sometimes by resonant dipole exchange with $1/R_{ij}^3$ scaling. When $V_{ij} \gg \Omega$, simultaneous excitation is suppressed and a controlled phase can be accumulated, enabling CZ-type entangling gates.

This architecture inherits the neutral-atom platform advantages of identical qubits, optical-tweezer reconfigurability, and large arrays, but its gate connectivity is **not** literally all-to-all in a single layer. Native entangling gates act within a finite blockade radius, while longer-range connectivity comes from shuttling, zoning, or remapping atoms between gate rounds.

## Hamiltonian

The computational qubit lives in two ground states $|0\rangle$ and $|1\rangle$, while the gate laser couples only one of them, usually $|1\rangle$, to a Rydberg state $|r\rangle$. A standard rotating-frame Hamiltonian is

$$H = \sum_i \left[\frac{\Omega_i(t)}{2}\left(|r_i\rangle\langle 1_i| + |1_i\rangle\langle r_i|\right) - \Delta_i(t) n_i^{(r)}\right] + \sum_{i<j} V_{ij} n_i^{(r)} n_j^{(r)},$$

where $n_i^{(r)} = |r_i\rangle\langle r_i|$ projects onto the Rydberg level, $\Omega_i$ is the Rabi drive, $\Delta_i$ the detuning, and $V_{ij}$ the interaction shift between two Rydberg excitations.

For two atoms within the blockade radius,

$$V_{ij} \gg \Omega_i, \Omega_j$$

pushes $|r_i r_j\rangle$ far off resonance. That is the physically correct gate actuator: the computational qubit is stored in ground states, while the Rydberg level is a transient interaction bus rather than one of the logical basis states.

## Motivation

Rydberg neutral-atom qubits are compelling because they combine long-lived atomic memories with strong, switchable entangling interactions. They offer:

- **Identical qubits:** no fabrication disorder or frequency-collision yield problem.
- **Fast switchable entangling gates:** interactions appear only when atoms are optically promoted to $|r\rangle$.
- **Reconfigurable geometry:** optical tweezers can rearrange atoms between circuit layers or logical zones.
- **A fault-tolerance path:** atom loss and leakage can often be converted into detectable erasures rather than silent Pauli errors.

The tradeoff is that the same Rydberg physics that enables fast gates also introduces finite Rydberg-state lifetime, Doppler sensitivity, laser-phase-noise requirements, and blockade crosstalk constraints.

## Experimental Status

**Foundational blockade-gate proposal — Jaksch et al. (2000):**
- Proposed fast neutral-atom entangling gates using Rydberg blockade.
- Established the core CZ/conditional-phase mechanism used by later experiments.

**First experimental two-qubit gate — Isenhower et al. (2010):**
- Demonstrated a neutral-atom controlled-NOT gate between two individually trapped $^{87}\mathrm{Rb}$ atoms.
- Gate fidelity was about 73%, limited mainly by atomic motion and laser phase noise.

**2D entangling-gate milestone — Graham et al. (2019):**
- Implemented Rydberg-mediated entangling gates inside a 121-site $^{133}\mathrm{Cs}$ tweezer array.
- Reported Bell-state fidelity 0.86(2), improving to 0.89 after SPAM correction, and CZ fidelity 0.91 including one-qubit errors.

**Alkaline-earth branch — Madjarov et al. (2020):**
- Demonstrated high-fidelity entanglement and detection in alkaline-earth Rydberg atoms.
- Important because it connects the Rydberg-gate model to clock-compatible alkaline-earth architectures rather than only alkali hyperfine qubits.

**Erasure-aware operation — Scholl et al. (2023):**
- Demonstrated erasure conversion in a high-fidelity Rydberg quantum simulator.
- This is strategically important because neutral atoms can often detect loss/leakage events instead of hiding them as undetected gate errors.

**Logical processor benchmark — Bluvstein et al. (2024):**
- Realized a logical neutral-atom processor with 48 logical qubits using up to 280 physical atoms.
- Reported 99.97% single-qubit fidelity, 99.5% two-qubit CZ fidelity, and 1–4 s hyperfine coherence in a reconfigurable Rydberg-gated architecture.

**Large-array engineering milestone — Pause et al. (2024):**
- Demonstrated 1167(46) loaded atoms across 3000 tweezer sites using tiled microlens arrays.
- This is a scale milestone rather than a gate-fidelity record, but it matters for architecture plausibility.

**Most recent SOTA signals (provisional, preprint) — Rozanov (2025), Lin et al. (2026):**
- Rozanov reports 99.963% single-qubit benchmarking on a neutral-atom processor.
- Lin reports 99.60(1)% raw and 99.81(1)% erasure-detected two-qubit controlled-gate fidelity sustained with mid-circuit operations.
- Both are useful 2025-2026 updates, but they should still be treated as preprint-level rather than archival benchmarks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate fidelity (peer-reviewed) | 99.97% | Reconfigurable $^{133}\mathrm{Cs}$ logical-processor stack | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| 2Q CZ fidelity (peer-reviewed) | 99.5% | Rydberg-blockade CZ in the logical-processor platform | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| 2Q controlled-gate fidelity (raw, preprint) | 99.60(1)% | Latest 2026 preprint signal; not yet archival | [Lin et al. 2026](https://arxiv.org/abs/2603.01612) |
| 2Q controlled-gate fidelity (with erasure detection, preprint) | 99.81(1)% | Non-destructive erasure detection; not yet archival | [Lin et al. 2026](https://arxiv.org/abs/2603.01612) |
| Hyperfine coherence $T_2$ | 1–4 s | Clock-state coherence with echo in the 2024 logical processor | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| Largest demonstrated loaded array | 1167(46) atoms across 3000 sites | Architecture-scale milestone, not a simultaneous fully connected gate graph | [Pause et al. 2024](https://doi.org/10.1364/OPTICA.513551) |
| First two-qubit gate fidelity | ~73% | Historic proof-of-principle Rb CNOT | [Isenhower et al. 2010](https://doi.org/10.1103/PhysRevLett.104.010503) |
| Typical interaction law | $V_{ij} \sim C_6/R_{ij}^6$ | Resonant Förster regimes can cross to $\sim 1/R^3$ | [Saffman et al. 2010](https://doi.org/10.1103/RevModPhys.82.2313) |

## Scaling Considerations

- **Connectivity:** native entangling gates are finite-range, set by the blockade radius and laser-addressing constraints. Longer-range connectivity is achieved by shuttling, zoning, or teleportation-style logical layouts rather than literal single-shot all-to-all coupling.
- **Parallelism:** disjoint blockade regions can be gated in parallel, which is a real strength of the platform.
- **Error budget:** dominant errors remain Doppler motion, laser phase noise, Rydberg decay, imperfect blockade, and atom loss/leakage.
- **Mid-circuit operations:** recent erasure-detection and recooling results materially improve the deep-circuit outlook.

### Limitations & Challenges

- **Finite Rydberg lifetime:** excited Rydberg states typically live for only tens to hundreds of microseconds, so gate protocols must be fast and carefully shaped.
- **Laser complexity:** high-power, phase-stable optical control is a major hardware burden.
- **Blockade crosstalk:** dense arrays make it easy to introduce correlated spectator errors if geometry and detunings are not managed carefully.
- **Transport overhead:** rearrangement gives powerful effective connectivity, but atom motion between zones is not free.

## References

### Original proposal
- D. Jaksch et al., "Fast Quantum Gates for Neutral Atoms," [Phys. Rev. Lett. 85, 2208 (2000)](https://doi.org/10.1103/PhysRevLett.85.2208) — [arXiv:quant-ph/0004038](https://arxiv.org/abs/quant-ph/0004038)

### Review
- M. Saffman, T. G. Walker, and K. Mølmer, "Quantum information with Rydberg atoms," [Rev. Mod. Phys. 82, 2313 (2010)](https://doi.org/10.1103/RevModPhys.82.2313)

### Experimental demonstrations and recent updates
- L. Isenhower et al., "Demonstration of a Neutral Atom Controlled-NOT Quantum Gate," [Phys. Rev. Lett. 104, 010503 (2010)](https://doi.org/10.1103/PhysRevLett.104.010503) — [arXiv:0907.5552](https://arxiv.org/abs/0907.5552)
- T. M. Graham et al., "Rydberg-Mediated Entanglement in a Two-Dimensional Neutral Atom Qubit Array," [Phys. Rev. Lett. 123, 230501 (2019)](https://doi.org/10.1103/PhysRevLett.123.230501) — [arXiv:1908.06103](https://arxiv.org/abs/1908.06103)
- I. S. Madjarov et al., "High-fidelity entanglement and detection of alkaline-earth Rydberg atoms," [Nat. Phys. 16, 857 (2020)](https://doi.org/10.1038/s41567-020-0903-z) — [arXiv:2001.04455](https://arxiv.org/abs/2001.04455)
- P. Scholl et al., "Erasure conversion in a high-fidelity Rydberg quantum simulator," [Nature 622, 273 (2023)](https://doi.org/10.1038/s41586-023-06516-4) — [arXiv:2305.03406](https://arxiv.org/abs/2305.03406)
- D. Bluvstein et al., "Logical quantum processor based on reconfigurable atom arrays," [Nature 626, 58 (2024)](https://doi.org/10.1038/s41586-023-06927-3) — [arXiv:2312.03982](https://arxiv.org/abs/2312.03982)
- L. Pause et al., "Supercharged two-dimensional tweezer array with more than 1000 atomic qubits," [Optica 11, 222 (2024)](https://doi.org/10.1364/OPTICA.513551) — [arXiv:2310.09191](https://arxiv.org/abs/2310.09191)
- A. Rozanov et al., "Benchmarking Single-Qubit Gates on a Neutral Atom Quantum Processor," [arXiv:2509.06881](https://arxiv.org/abs/2509.06881)
- R. Lin et al., "Sustaining high-fidelity quantum logic in neutral-atom circuits via mid-circuit operations," [arXiv:2603.01612](https://arxiv.org/abs/2603.01612)

## Linked Papers

- [[jaksch-2000-rydberg-gate]]
- [[saffman-2010-quantum-information-rydberg]]
- [[isenhower-2010-rydberg-cnot]]
- [[graham-2019-rydberg-entanglement-cs]]
- [[madjarov-2020-high-fidelity-entanglement-and-detection-of-alkaline-earth-rydberg-atoms]]
- [[scholl-2023-erasure-conversion-high]]
- [[bluvstein-2024-logical-processor-reconfigurable]]
- [[pause-2024-supercharged-dimensional-tweezer]]
- [[rozanov-2025-benchmarking-single-qubit-gates-neutral-atom]]
- [[lin-2026-sustaining-high-fidelity-neutral-atom-circuits]]

## Evergreen context

- [[rydberg-blockade-mechanism]] — the interaction primitive that sets gate range, blockade errors, and much of the platform's performance envelope
- [[coherence-time-hierarchy]] — useful for comparing long-lived hyperfine memory to short-lived Rydberg gate states
- [[erasure-error-vs-pauli-error]] — why detectable atom loss and leakage matter strategically for fault tolerance

## Related Entries

- [[neutral-atom-qubit]] — umbrella neutral-atom hardware entry
- [[alkaline-earth-neutral-atom-clock-qubit]] — related neutral-atom branch with optical-clock structure
- [[nuclear-spin-neutral-atom-qubit]] — long-coherence nuclear-spin neutral-atom variant
- [[erasure-qubit]] — closely connected because Rydberg arrays can convert some faults into detected erasures
- [[surface-code-logical-qubit]] — logical neutral-atom error-correction demonstrations now matter to the architecture story
- [[trapped-ion-qubit]] — closest atomic-physics competitor for high-fidelity digital gates
