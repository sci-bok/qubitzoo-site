---
title: Rydberg Neutral-Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
first_proposed_year: 2000
keywords:
  - neutral atom
  - rydberg blockade
  - optical tweezers
  - entangling gates
influence_score: 0.72
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
published: 2000-01-01
---

# Rydberg Neutral-Atom Qubit

A neutral-atom qubit architecture where long-lived hyperfine ground states encode \(|0\rangle, |1\rangle\), and entangling interactions are turned on transiently by laser excitation to high-lying Rydberg states. This is the core hardware model for modern optical-tweezer neutral-atom processors.

## Physics

Single-qubit states are typically encoded in hyperfine "clock" states of alkali atoms (e.g., \(^{87}\mathrm{Rb}\), \(^{133}\mathrm{Cs}\)).

Two-qubit entangling gates exploit the Rydberg blockade effect: if one atom is excited to a Rydberg state, nearby atoms are shifted out of resonance, suppressing simultaneous excitation and enabling conditional dynamics.

## Hamiltonian

A standard driven Rydberg-array Hamiltonian (rotating frame) is:

$$H = \sum_i \left[\frac{\Omega_i(t)}{2}\sigma_x^{(i)} - \Delta_i(t) n_i\right] + \sum_{i<j} V_{ij} n_i n_j$$

where $n_i = |r\rangle_i\langle r|$ projects onto the Rydberg state, $\Omega_i$ is the Rabi drive, $\Delta_i$ detuning, and $V_{ij} = C_6/R_{ij}^6$ (van der Waals) or $\propto 1/R_{ij}^3$ in resonant dipole regimes.

Blockade condition for two atoms $i,j$:

$$V_{ij} \gg \Omega$$

suppresses double excitation $|rr\rangle$, enabling controlled-phase entangling gates.


## Figure

![[rydberg-neutral-atom-qubit-figure.png]]

## Why it matters

- Native all-to-all reconfigurability (via tweezer rearrangement) at array level.
- Strong, switchable interactions for fast entangling gates.
- A direct path from analog simulation to digital gate-based computing on the same hardware family.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Demonstrated two-qubit gate mechanism | Rydberg blockade | Foundational proposal and subsequent implementations | [[jaksch-2000-fast-quantum-gates-for]] |
| Typical architecture scale target | 100–1000+ physical atoms | Scalability emphasized in neutral-atom reviews | [[henriet-2020-quantum-computing-with-neutral]], [[wu-2020-a-concise-review-of]] |
| Fault-tolerant logical gate regime | Not yet established | Active experimental frontier | [[henriet-2020-quantum-computing-with-neutral]] |

## Linked Papers

- [[jaksch-2000-fast-quantum-gates-for]]
- [[henriet-2020-quantum-computing-with-neutral]]
- [[wu-2020-a-concise-review-of]]

## Related Entries

- [[trapped-ion-qubit]]
- [[alkaline-earth-neutral-atom-clock-qubit]]
- [[nuclear-spin-neutral-atom-qubit]]
