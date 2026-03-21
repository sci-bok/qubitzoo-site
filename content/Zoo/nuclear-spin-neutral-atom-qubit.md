---
title: Nuclear-Spin Neutral-Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
figure_reviewed: true
first_proposed_year: 2008
first_demonstrated_year: 2020
keywords:
- neutral atom
- nuclear spin
- clock state
- alkaline earth
- long coherence
influence_score: 0.71
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[nuclear-spin-neutral-atom-qubit-figure.png]]

## Description

Nuclear-spin neutral-atom qubits encode logical states in long-lived nuclear spin manifolds of alkaline-earth(-like) atoms such as $^{87}$Sr ($I = 9/2$) or $^{171}$Yb ($I = 1/2$), exploiting reduced magnetic sensitivity and ultra-narrow optical transitions. The key idea is a coherence-first strategy: logical information is stored in weakly magnetically sensitive nuclear spin states within the $^1S_0$ ground-state manifold, while excited-state manifolds (Rydberg or optical-clock $^3P_0$ transitions) are accessed transiently for fast entanglement and control.

For $^{87}$Sr, the $F = 9/2$ ground-state manifold provides 10 nuclear spin sublevels ($m_F = -9/2$ to $+9/2$). Qubit states can be chosen as magnetically insensitive pairs (e.g., $m_F = \pm 1/2$), where the differential Zeeman shift vanishes to first order. This architecture cleanly separates "memory" and "interaction" roles to reduce crosstalk, and is compatible with both optical tweezer and lattice implementations.

## Hamiltonian

Effective two-level encoding with weak magnetic sensitivity:

$$H = \frac{\omega_0}{2}\sigma_z + \frac{\Omega(t)}{2}\sigma_x + \delta(t)\frac{1-\sigma_z}{2}$$

with design target $\partial\omega_0/\partial B \approx 0$ at operating points, where $\omega_0$ is the qubit splitting, $\Omega(t)$ is the control field Rabi frequency, and $\delta(t)$ is the detuning.

## Motivation

Nuclear-spin encodings are a coherence-first strategy for neutral-atom computing. By pushing logical storage into weakly magnetically sensitive manifolds, these architectures can extend memory lifetimes while still using excited-state manifolds (Rydberg or optical-clock transitions) for fast entanglement and control. This provides:

- Long-lived storage with robust idle behavior
- Architecture-level separation of memory and interaction states to reduce crosstalk
- Compatibility with both tweezer and lattice implementations
- A promising route for modular networked neutral-atom processors

## Experimental Status

**Quantum computing proposal — Daley et al. (2008):**
- Proposed quantum computing with alkaline-earth atoms using nuclear spin encoding
- Identified state-dependent lattice potentials as a key control primitive

**High-fidelity entanglement — Madjarov et al. (2020):**
- Demonstrated high-fidelity entanglement and detection of alkaline-earth Rydberg atoms ($^{88}$Sr)
- Validated the Rydberg entanglement pathway for alkaline-earth platforms

**Nuclear spin coherence demonstrations:**
- Nuclear spin manifolds in $^{87}$Sr and $^{171}$Yb confirmed to support long-lived storage
- Compatible architectures demonstrated in multiple groups (Kaufman, Thompson, Ye)

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Coherence potential | Very long (clock-state limited) | Primary motivation for encoding choice | [Daley et al. 2008](https://doi.org/10.1103/PhysRevLett.101.170504) |
| Gate strategy | Raman / optical-clock transitions | Platform dependent | — |
| Entangling mechanism | Rydberg or cavity-mediated | Architecture dependent | [Madjarov et al. 2020](https://doi.org/10.1038/s41567-020-0903-z) |
| Main challenge | Balancing coherence and gate speed | Open optimization frontier | — |

## References

### Original proposal
- A. J. Daley et al., "Quantum Computing with Alkaline-Earth-Metal Atoms," [Phys. Rev. Lett. 101, 170504 (2008)](https://doi.org/10.1103/PhysRevLett.101.170504)

### Architecture development
- A. J. Daley, J. Ye, and P. Zoller, "State-dependent lattices for quantum computing with alkaline-earth-metal atoms," [Eur. Phys. J. D 65, 207 (2011)](https://doi.org/10.1140/epjd/e2011-20095-2)

### Experimental demonstrations
- I. S. Madjarov et al., "High-fidelity entanglement and detection of alkaline-earth Rydberg atoms," [Nat. Phys. 16, 857 (2020)](https://doi.org/10.1038/s41567-020-0903-z)

## Linked Papers

- [[ma-2022-nuclear-spin-atom]]

## Related Entries

- [[alkaline-earth-neutral-atom-clock-qubit]] — closely related clock-state encoding
- [[rydberg-neutral-atom-qubit]] — alkali Rydberg platform with complementary trade-offs
