---
title: GKP Qubit (Gottesman-Kitaev-Preskill Code)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2001
first_demonstrated_year: 2019
keywords:
- gkp
- gottesman kitaev preskill
- bosonic code
- grid state
- displacement error
- squeezed state
influence_score: 0.84
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
figure_reviewed: true
---

## Figure

![[gkp-codes-figure.png]]

## Description

The GKP (Gottesman-Kitaev-Preskill) code, proposed in 2001, encodes a qubit in the position/momentum space of a harmonic oscillator using grid states — superpositions of periodically spaced position (or momentum) eigenstates. The ideal logical states are:

$$|0_L\rangle \propto \sum_{s=-\infty}^{\infty} |q = 2s\sqrt{\pi}\rangle, \quad |1_L\rangle \propto \sum_{s=-\infty}^{\infty} |q = (2s+1)\sqrt{\pi}\rangle$$

These states have a comb-like structure in position space with spacing $2\sqrt{\pi}$ and are displaced by $\sqrt{\pi}$ between $|0_L\rangle$ and $|1_L\rangle$. The key property is that small displacement errors $e^{i\xi\hat{p}}$ or $e^{-i\eta\hat{q}}$ (with $|\xi|, |\eta| < \sqrt{\pi}/2$) can be detected and corrected by measuring the stabilizers $e^{2i\sqrt{\pi}\hat{p}}$ and $e^{-2i\sqrt{\pi}\hat{q}}$.

In practice, ideal GKP states have infinite energy. Physical (approximate) GKP states are formed from finitely squeezed peaks, with squeezing level $\Delta$ controlling the code quality. The error correction threshold requires $\Delta \lesssim 0.5$ ($\sim 10\,\text{dB}$ squeezing).

GKP qubits have been realized in trapped-ion motional modes (Flühmann et al. 2019) and superconducting cavities (Campagne-Ibarcq et al. 2020), with the latter demonstrating beyond-break-even quantum error correction — the encoded logical qubit outlived the best physical component.

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

## Experimental Status

**First realization in trapped-ion motional mode — Flühmann et al. (2019):**
- Prepared approximate GKP states in the motional mode of a trapped $^{40}\text{Ca}^+$ ion
- Demonstrated stabilizer measurements and small displacement error correction
- Verified grid structure via Wigner function tomography

**Superconducting cavity realization — Campagne-Ibarcq et al. (2020):**
- GKP states prepared in a 3D superconducting microwave cavity using a transmon ancilla
- Demonstrated SBS (small-Big-small) displacement gates with 99.7% single-qubit gate fidelity
- First real-time GKP error correction in a circuit QED platform

**Beyond-break-even QEC — Sivak et al. (2023):**
- Logical qubit lifetime 2.3× the best physical component $T_1$
- First demonstration of beyond-break-even quantum error correction
- Used real-time feedback with optimized control via reinforcement learning

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ (logical) | ~1.8 ms | Cavity photon lifetime limited; logical qubit outlives best physical component | [Sivak et al. 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| Logical lifetime / physical $T_1$ | 2.3× | Beyond break-even QEC | [Sivak et al. 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| 1Q gate fidelity (logical) | 99.7% | SBS displacement gates | [Campagne-Ibarcq et al. 2020](https://doi.org/10.1038/s41586-020-2603-3) |
| 2Q gate fidelity (logical) | ~96–98% (projected) | eSWAP-based; not yet independently benchmarked | [Rojkov et al. 2024](https://doi.org/10.1103/PhysRevLett.133.100601) |
| Squeezing level (best) | 9–12 dB | Approximate GKP state quality | — |
| Stabilizer measurement time | ~1 μs | In superconducting cavities | — |
| Phase space grid spacing | $2\sqrt{\pi}$ | In position quadrature | — |
| Error correction threshold | ~10 dB squeezing | Below this, QEC helps | [Gottesman et al. 2001](https://doi.org/10.1103/PhysRevA.64.012310) |
| Operating temperature | 10–20 mK | Superconducting implementation | — |

> **Note:** For bosonic code entries, "T₁" refers to the logical qubit lifetime (cavity-limited), not a bare qubit relaxation time. Gate fidelities are logical-level operations.

## References

### Original proposal
- D. Gottesman, A. Kitaev, and J. Preskill, "Encoding a qubit in an oscillator," [Phys. Rev. A 64, 012310 (2001)](https://doi.org/10.1103/PhysRevA.64.012310) — [arXiv:quant-ph/0008040](https://arxiv.org/abs/quant-ph/0008040)

### Experimental demonstrations
- C. Flühmann et al., "Encoding a qubit in a trapped-ion mechanical oscillator," [Nature 566, 513 (2019)](https://doi.org/10.1038/s41586-019-0960-6) — [arXiv:1807.01033](https://arxiv.org/abs/1807.01033)
- P. Campagne-Ibarcq et al., "Quantum error correction of a qubit encoded in grid states of an oscillator," [Nature 584, 368 (2020)](https://doi.org/10.1038/s41586-020-2603-3) — [arXiv:1907.12487](https://arxiv.org/abs/1907.12487)
- V. V. Sivak et al., "Real-time quantum error correction beyond break-even," [Nature 616, 50 (2023)](https://doi.org/10.1038/s41586-023-05782-6) — [arXiv:2211.09116](https://arxiv.org/abs/2211.09116)

## Linked Papers

- [[gottesman-2001-gkp]]

## Related Entries

- [[cat-codes]] — alternative bosonic code using coherent state superpositions
- [[circuit-qed]] — underlying hardware platform for superconducting GKP
- [[binomial-codes]] — another bosonic code family
- [[bosonic-qubit]] — parent category entry for bosonic encodings
