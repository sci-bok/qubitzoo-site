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
| $T_1$ (qubit lifetime) | 1–10 s | Hyperfine clock states in optical traps; vacuum-limited | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| $T_2$ (coherence) | 1–4 s | With spin-echo; limited by trap-induced dephasing | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| 1Q gate fidelity | 99.5–99.90% | Global and local Raman gates | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| 2Q gate fidelity (CZ) | 99.5% | Rydberg blockade CZ; SOTA with erasure conversion | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| Gate time (2Q) | 200–500 ns | Rydberg pulse sequence | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| Architecture scale | 100–1000+ physical atoms | Optical tweezer arrays; reconfigurable | [[henriet-2020-quantum-computing-with-neutral]], [[wu-2020-a-concise-review-of]] |
| 2Q gate mechanism | Rydberg blockade | $C_6/R^6$ van der Waals interaction | [[jaksch-2000-fast-quantum-gates-for]] |
| Operating temperature | ~10–50 μK | Laser-cooled; in ultrahigh vacuum | [Evered et al. 2023](https://doi.org/10.1038/s41586-023-06927-3) |
| Fault-tolerant logical gate regime | Not yet established | Active experimental frontier | [[henriet-2020-quantum-computing-with-neutral]] |

## Linked Papers

- [[jaksch-2000-fast-quantum-gates-for]]
- [[henriet-2020-quantum-computing-with-neutral]]
- [[wu-2020-a-concise-review-of]]

## Related Entries

- [[trapped-ion-qubit]]
- [[alkaline-earth-neutral-atom-clock-qubit]]
- [[nuclear-spin-neutral-atom-qubit]]
