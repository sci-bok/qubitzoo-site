---
title: GKP Qubit (Gottesman-Kitaev-Preskill Code)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
seed_id: '15'
seed_source: qubitzoo-airtable
first_proposed_year: 2001
keywords:
- gkp
- gottesman kitaev preskill
- bosonic code
- grid state
- displacement error
- squeezed state
influence_score: 0.84
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
figure_reviewed: true
---


## Description

The GKP (Gottesman-Kitaev-Preskill) code, proposed in 2001, encodes a qubit in the position/momentum space of a harmonic oscillator using grid states — superpositions of periodically spaced position (or momentum) eigenstates. The ideal logical states are:

$$|0_L\rangle \propto \sum_{s=-\infty}^{\infty} |q = 2s\sqrt{\pi}\rangle, \quad |1_L\rangle \propto \sum_{s=-\infty}^{\infty} |q = (2s+1)\sqrt{\pi}\rangle$$

These states have a comb-like structure in position space with spacing $2\sqrt{\pi}$ and are displaced by $\sqrt{\pi}$ between $|0_L\rangle$ and $|1_L\rangle$. The key property is that small displacement errors $e^{i\xi\hat{p}}$ or $e^{-i\eta\hat{q}}$ (with $|\xi|, |\eta| < \sqrt{\pi}/2$) can be detected and corrected by measuring the stabilizers $e^{2i\sqrt{\pi}\hat{p}}$ and $e^{-2i\sqrt{\pi}\hat{q}}$.

In practice, ideal GKP states have infinite energy. Physical (approximate) GKP states are formed from finitely squeezed peaks, with squeezing level $\Delta$ controlling the code quality. The error correction threshold requires $\Delta \lesssim 0.5$ ($\sim 10\,\text{dB}$ squeezing).

GKP qubits have been realized in trapped-ion motional modes (Flühmann et al. 2019) and superconducting cavities (Campagne-Ibarcq et al. 2020), with the latter demonstrating beyond-break-even quantum error correction — the encoded logical qubit outlived the best physical component.


## Figure

![[gkp-codes-figure.png]]

## Hamiltonian

GKP states are eigenstates of the stabilizer operators:

$$S_q = e^{2i\sqrt{\pi}\hat{p}}, \quad S_p = e^{-2i\sqrt{\pi}\hat{q}}$$

with eigenvalue +1. The logical Pauli operators are:

$$\bar{X} = e^{i\sqrt{\pi}\hat{p}}, \quad \bar{Z} = e^{-i\sqrt{\pi}\hat{q}}$$

For approximate (finite-energy) GKP states with envelope width $\Delta$:

$$|0_L\rangle_\Delta \propto \sum_{s} e^{-\Delta^2 \pi s^2} |q = s\sqrt{\pi}\rangle$$

The squeezing level in dB: $\text{sq}_\text{dB} = -10\log_{10}(2\Delta^2)$.

## Motivation

GKP codes protect against the dominant error channel in bosonic systems — small displacements in phase space caused by photon loss, thermal noise, and dephasing. Unlike cat or binomial codes, GKP codes correct both quadrature errors simultaneously, achieving the hashing bound for Gaussian displacement channels. They are the only known bosonic code to demonstrate beyond-break-even error correction in a superconducting circuit.

## Key Findings

- Beyond-break-even QEC demonstrated in a superconducting cavity (Sivak et al. 2023; logical qubit lifetime 2.3× physical $T_1$).
- GKP states prepared in trapped-ion motional modes (Flühmann et al. 2019).
- Concatenation of GKP with surface code is highly resource-efficient: GKP "pre-corrects" analog errors, dramatically reducing the physical overhead for fault tolerance.
- Teleportation-based GKP error correction demonstrated.
- Compatible with both superconducting cavities and trapped-ion motional modes.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Squeezing level (best) | 9–12 dB | Approximate GKP state quality | — |
| Logical lifetime / $T_1$ | 2.3× | Beyond break-even (Sivak 2023) | [Sivak 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| Stabilizer measurement time | ~1 μs | In superconducting cavities | — |
| Phase space grid spacing | $2\sqrt{\pi}$ | In position quadrature | — |
| Error correction threshold | ~10 dB squeezing | Below this, QEC helps | [GKP 2001](https://doi.org/10.1103/PhysRevA.64.012310) |
| Operating temperature | 10–20 mK | Superconducting implementation | — |

## Linked Papers
- [[gottesman-2001-gkp]]

## Related Entries

- [[cat-codes]]
- [[circuit-qed]]
- [[binomial-codes]]
