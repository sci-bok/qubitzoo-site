---
title: Alkaline-Earth Neutral-Atom Clock Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
figure_reviewed: true
first_proposed_year: 2008
first_demonstrated_year: 2020
keywords:
- neutral atom
- clock qubit
- alkaline-earth
- nuclear spin
- strontium
- ytterbium
- optical clock transition
influence_score: 0.69
last_updated: '2026-07-19'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-07-19
---

## Figure

![[alkaline-earth-neutral-atom-clock-qubit-figure.png]]

## Description

The alkaline-earth neutral-atom clock qubit is a family of neutral-atom architectures that exploits the clock-compatible $J=0$ manifolds of alkaline-earth-like atoms such as $^{87}$Sr and $^{171}$Yb. The central idea is **not** usually to store the logical qubit directly in the bare electronic $^1S_0 \leftrightarrow {^3P_0}$ optical transition. Instead, in the clearest computing demonstrations, logical information is stored in long-lived nuclear-spin states within the $^1S_0$ ground manifold, while the ultra-narrow clock transition and metastable manifolds are used for shelving, transport, ancilla roles, or access to Rydberg interactions.

This architecture therefore sits between pure nuclear-spin storage and literal optical-clock qubits. In $^{171}$Yb, for example, the data qubit can live in the two $m_I=\pm 1/2$ nuclear-spin states of $^1S_0$, while optical-clock and Rydberg-accessible states provide the control stack. Recent hybrid schemes go one step further by pairing nuclear-spin data qubits with separate optical-clock ancilla qubits in dual-isotope arrays.

Because both $^1S_0$ and $^3P_0$ have $J=0$, electronic magnetic sensitivity is strongly suppressed. The residual field sensitivity is set by the chosen hyperfine or nuclear-spin pair and operating bias field, so the relevant protection is a **clock-like encoding condition**, not a generic multi-branch Zeeman manifold of the bare electronic states.

## Hamiltonian

A representative effective model treats the logical qubit as two long-lived nuclear-spin states $|0\rangle, |1\rangle$ in the $^1S_0$ manifold, with an auxiliary Rydberg state $|r\rangle$ used for entangling gates:

$$H = \sum_i \left[ \frac{\omega_q}{2}\sigma_z^{(i)} + \frac{\Omega_q^{(i)}(t)}{2}\sigma_x^{(i)} - \Delta_r^{(i)} n_r^{(i)} + \frac{\Omega_r^{(i)}(t)}{2}\left(|1_i\rangle\langle r_i| + |r_i\rangle\langle 1_i|\right) \right] + \sum_{i<j} V_{ij} n_r^{(i)} n_r^{(j)}$$

where $\omega_q$ is the nuclear-spin qubit splitting, $\Omega_q$ is the single-qubit drive, $\Omega_r$ and $\Delta_r$ control the temporary excitation into a strongly interacting Rydberg manifold, and $V_{ij}$ is the Rydberg blockade interaction.

The narrow $^1S_0 \leftrightarrow {^3P_0}$ clock transition is then best viewed as part of the control and ancilla toolbox, not as the only possible logical basis. Hybrid architectures can also assign optical-clock qubits to dedicated ancilla atoms while retaining nuclear-spin data qubits.

## Motivation

- Combines **clock-grade internal-state stability** with neutral-atom array scalability
- Separates long-lived data storage from fast interaction channels, reducing control crosstalk
- Naturally supports hybrid data/ancilla architectures for mid-circuit readout and QEC primitives
- Offers a clean route to **erasure-biased** neutral-atom computing because metastable-state structure makes loss and leakage easier to identify

## Experimental Status

**Original proposal — Daley et al. (2008):**
- Proposed quantum computing with alkaline-earth atoms using nuclear-spin storage plus metastable-state transport and control
- Established the basic clock-compatible neutral-atom architecture

**Detailed control architecture — Daley, Ye, and Zoller (2011):**
- Developed state-dependent lattice schemes that separate storage and gate operations
- Clarified how $^1S_0$ and $^3P_0$ can play distinct architectural roles

**Alkaline-earth Rydberg entanglement — Madjarov et al. (2020):**
- Demonstrated high-fidelity entanglement and detection in $^{88}$Sr Rydberg atoms
- Validated the alkaline-earth-specific entangling path needed for clock-compatible architectures

**Universal logic in tweezers — Ma et al. (2022):**
- Demonstrated universal gate operations on $^{171}$Yb nuclear-spin qubits in an optical tweezer array
- Reported single-qubit gate fidelity of 99.96% and spin-echo coherence beyond 10 s

**Hybrid data/ancilla array — Nakamura et al. (2024):**
- Demonstrated a dual-isotope Yb array with $^{171}$Yb nuclear-spin data qubits and $^{174}$Yb optical-clock ancilla qubits
- Showed low-crosstalk ancilla readout compatible with mid-circuit-QEC-style operation

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate fidelity | 99.96% | $^{171}$Yb nuclear-spin qubit in optical tweezers | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028) |
| Coherence time | $T_2 > 10\,\text{s}$ | Spin-echo coherence for $^{171}$Yb nuclear-spin clock qubit | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028) |
| Ancilla discrimination fidelity | 0.9992 | $^{174}$Yb optical-clock ancilla readout in hybrid array | [Nakamura et al. 2024](https://doi.org/10.1103/PhysRevX.14.041062) |
| Ancilla survival probability | 0.988 | Post-readout atom survival in hybrid array | [Nakamura et al. 2024](https://doi.org/10.1103/PhysRevX.14.041062) |
| Erasure-conversion efficiency | $>97\%$ (proposed) | Converts loss / Rydberg-decay events into detectable erasures | [Wu et al. 2022](https://doi.org/10.1038/s41467-022-32094-6) |

## References

### Foundational architecture
- A. J. Daley, M. M. Boyd, J. Ye, and P. Zoller, "Quantum Computing with Alkaline-Earth-Metal Atoms," [Phys. Rev. Lett. 101, 170504 (2008)](https://doi.org/10.1103/PhysRevLett.101.170504), [arXiv:0808.1940](https://arxiv.org/abs/0808.1940)
- A. J. Daley, J. Ye, and P. Zoller, "State-dependent lattices for quantum computing with alkaline-earth-metal atoms," [Eur. Phys. J. D 65, 207 (2011)](https://doi.org/10.1140/epjd/e2011-20095-2), [arXiv:1102.1463](https://arxiv.org/abs/1102.1463)

### Experimental milestones
- I. S. Madjarov et al., "High-fidelity entanglement and detection of alkaline-earth Rydberg atoms," [Nat. Phys. 16, 857 (2020)](https://doi.org/10.1038/s41567-020-0903-z), [arXiv:2001.04455](https://arxiv.org/abs/2001.04455)
- S. Ma, A. P. Burgers, G. Liu, J. Wilson, B. Zhang, and J. D. Thompson, "Universal Gate Operations on Nuclear Spin Qubits in an Optical Tweezer Array of $^{171}$Yb Atoms," [Phys. Rev. X 12, 021028 (2022)](https://doi.org/10.1103/PhysRevX.12.021028), [arXiv:2112.13487](https://arxiv.org/abs/2112.13487)
- Y. Nakamura, T. Kusano, R. Yokoyama, K. Saito, K. Higashi, N. Ozawa, T. Takano, Y. Takasu, and Y. Takahashi, "Hybrid Atom Tweezer Array of Nuclear Spin and Optical Clock Qubits," [Phys. Rev. X 14, 041062 (2024)](https://doi.org/10.1103/PhysRevX.14.041062)

### Error-correction direction
- Y. Wu, S. Kolkowitz, S. Puri, and J. D. Thompson, "Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays," [Nat. Commun. 13, 4656 (2022)](https://doi.org/10.1038/s41467-022-32094-6), [arXiv:2201.03540](https://arxiv.org/abs/2201.03540)

## Linked Papers

- [[daley-2008-quantum-computing-with-alkaline-earth-atoms]]
- [[daley-2011-state-dependent-lattices-for-quantum-computing-with-alkaline-earth-metal-atoms]]
- [[madjarov-2020-high-fidelity-entanglement-and-detection-of-alkaline-earth-rydberg-atoms]]
- [[ma-2022-nuclear-spin-atom]]
- [[nakamura-2024-hybrid-atom-tweezer-array]]
- [[wu-2022-erasure-neutral-atoms]]

## Evergreen context

- [[coherence-time-hierarchy]] — the whole point is to keep the storage manifold much quieter than the interaction manifold
- [[rydberg-blockade-mechanism]] — fast entangling power still comes from temporary access to strongly interacting excited states
- [[erasure-error-vs-pauli-error]] — alkaline-earth platforms are unusually well placed to convert loss and leakage into decoder-friendly erasure information

## Related Entries

- [[nuclear-spin-neutral-atom-qubit]] — the most direct subset focused on ground-manifold nuclear-spin storage
- [[rydberg-neutral-atom-qubit]] — broader neutral-atom entangling-gate ecosystem
- [[erasure-qubit]] — error-model perspective strongly aligned with alkaline-earth proposals
- [[qubit-readout]] — hybrid ancilla-readout schemes are a major recent differentiator
