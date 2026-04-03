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
- optical tweezers
- entangling gates
influence_score: 0.72
last_updated: '2026-03-21'
generated_by: scibok-curation
verified_by: scibok-manual-2026-03-21
figure_reviewed: true
---

## Figure

![[rydberg-neutral-atom-qubit-figure.png]]

## Description

The Rydberg neutral-atom qubit architecture encodes quantum information in long-lived hyperfine ground states of neutral atoms (typically alkali species such as $^{87}\text{Rb}$ or $^{133}\text{Cs}$), with $|0\rangle$ and $|1\rangle$ defined in hyperfine "clock" states that are first-order insensitive to magnetic field fluctuations.

Entangling interactions are turned on transiently by laser excitation to high-lying **Rydberg states** (principal quantum number $n \sim 50$–$100$). The **Rydberg blockade effect** is the key mechanism: when one atom is excited to a Rydberg state, nearby atoms within the blockade radius $R_b$ experience a large energy shift from the van der Waals interaction ($V_{ij} = C_6/R_{ij}^6$), preventing simultaneous double excitation. This conditional dynamics enables controlled-phase (CZ) entangling gates.

Atoms are individually trapped and positioned using reconfigurable optical tweezer arrays, providing native all-to-all connectivity at the array level through tweezer rearrangement. Arrays of 100–1000+ atoms have been demonstrated, making this one of the most scalable qubit platforms.

This is the core hardware model for modern optical-tweezer neutral-atom processors being developed by Harvard/MIT (Lukin group), QuEra, Pasqal, Atom Computing, and others.

## Hamiltonian

A standard driven Rydberg-array Hamiltonian (rotating frame) is:

$$H = \sum_i \left[\frac{\Omega_i(t)}{2}\sigma_x^{(i)} - \Delta_i(t) n_i\right] + \sum_{i<j} V_{ij} n_i n_j$$

where $n_i = |r\rangle_i\langle r|$ projects onto the Rydberg state, $\Omega_i$ is the Rabi drive, $\Delta_i$ detuning, and $V_{ij} = C_6/R_{ij}^6$ (van der Waals) or $\propto 1/R_{ij}^3$ in resonant dipole regimes.

Blockade condition for two atoms $i,j$:

$$V_{ij} \gg \Omega$$

suppresses double excitation $|rr\rangle$, enabling controlled-phase entangling gates.

## Motivation

Rydberg neutral-atom qubits combine three key advantages: (1) native all-to-all reconfigurability via tweezer rearrangement at the array level, (2) strong, switchable interactions for fast entangling gates with no residual always-on coupling, and (3) a direct path from analog quantum simulation to digital gate-based computing on the same hardware. The platform has demonstrated the largest qubit arrays of any technology and is a leading candidate for near-term fault-tolerant quantum computing.

## Experimental Status

**Foundational Rydberg blockade gate proposal — Jaksch et al. (2000):**
- Proposed fast quantum gates for neutral atoms using the Rydberg blockade mechanism
- Established the theoretical basis for the entire Rydberg entangling gate paradigm

**Logical quantum processor — Bluvstein et al. (2024):**
- Demonstrated a logical quantum processor based on reconfigurable atom arrays
- 48 logical qubits with entangling operations between logical qubits
- Two-qubit CZ gate fidelity of 99.5% with erasure conversion
- Single-qubit gate fidelity of 99.5–99.9% via global and local Raman gates
- Hyperfine clock state coherence $T_2$ of 1–4 s with spin-echo

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ (qubit lifetime) | 1–10 s | Hyperfine clock states in optical traps; vacuum-limited | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| $T_2$ (coherence) | 1–4 s | With spin-echo; limited by trap-induced dephasing | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| 1Q gate fidelity | 99.5–99.90% | Global and local Raman gates | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| 2Q gate fidelity (CZ) | 99.5% | Rydberg blockade CZ; SOTA with erasure conversion | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| Gate time (2Q) | 200–500 ns | Rydberg pulse sequence | [Bluvstein et al. 2024](https://doi.org/10.1038/s41586-023-06927-3) |
| Architecture scale | 100–1000+ physical atoms | Optical tweezer arrays; reconfigurable | — |
| 2Q gate mechanism | Rydberg blockade | $C_6/R^6$ van der Waals interaction | — |
| Operating temperature | ~10–50 μK | Laser-cooled; in ultrahigh vacuum | — |

## References

### Original proposal
- D. Jaksch et al., "Fast Quantum Gates for Neutral Atoms," [Phys. Rev. Lett. 85, 2208 (2000)](https://doi.org/10.1103/PhysRevLett.85.2208)

### Experimental demonstrations
- D. Bluvstein et al., "Logical quantum processor based on reconfigurable atom arrays," [Nature 626, 58 (2024)](https://doi.org/10.1038/s41586-023-06927-3) — [arXiv:2312.03982](https://arxiv.org/abs/2312.03982)

## Linked Papers

- [[jaksch-2000-rydberg-gate]]
- [[henriet-2020-quantum-computing-with-neutral]]
- [[wu-2020-a-concise-review-of]]

## Related Entries

- [[trapped-ion-qubit]] — competing digital quantum computing platform
- [[alkaline-earth-neutral-atom-clock-qubit]] — related neutral-atom qubit using alkaline-earth species
- [[nuclear-spin-neutral-atom-qubit]] — related neutral-atom qubit using nuclear spin encoding
