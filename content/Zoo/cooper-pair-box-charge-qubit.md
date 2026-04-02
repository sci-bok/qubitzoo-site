---
title: Cooper-Pair Box (Charge Qubit)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 1999
first_demonstrated_year: 1999
keywords:
- superconducting qubit
- charge qubit
- cooper-pair box
- cpb
- nakamura
- charge degeneracy
influence_score: 0.70
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[cooper-pair-box-charge-qubit-figure.png]]

## Description

A nanometre-scale superconducting electrode (the "island") connected to a reservoir via a Josephson junction constitutes an artificial two-level electronic system: a single-Cooper-pair box. The two levels consist of charge states differing by one Cooper pair ($2e$) that are coupled by tunneling through the junction. Although the two-level system is macroscopic, containing a large number of electrons, the two charge states can be coherently superposed.

The Cooper-pair box operates in the **charge regime** where $E_C > E_J$ — the electrostatic energy cost of adding a Cooper pair to the island exceeds the Josephson coupling energy. At the **charge degeneracy point** $n_g = C_g V_g / 2e = 1/2$, the two lowest charge states $|n\rangle$ and $|n+1\rangle$ are degenerate and split by the Josephson energy $E_J$, forming a protected sweet spot with first-order insensitivity to charge noise. Away from this point, the qubit frequency is strongly sensitive to gate charge fluctuations, which historically limited coherence times.

The Cooper-pair box was the first superconducting qubit to demonstrate coherent quantum oscillations (Nakamura, Pashkin, and Tsai, 1999), establishing superconducting circuits as a viable platform for quantum computing. Its extreme charge noise sensitivity motivated the development of the transmon ($E_J/E_C \gg 1$), which trades anharmonicity for exponential suppression of charge dispersion.

## Hamiltonian

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

where $E_C = e^2/2C_\Sigma$ is the charging energy, $C_\Sigma = C_J + C_g$ is the total island capacitance, $n_g = C_g V_g / 2e$ is the gate-induced charge in units of Cooper pairs, $E_J$ is the Josephson energy, and $\hat{n}$, $\hat{\varphi}$ are conjugate charge number and phase operators.

In the charge regime ($E_C \gg E_J$), the two lowest-energy states near the degeneracy point $n_g = 1/2$ are approximately:

$$H_\text{2-level} \approx -2E_C(1 - 2n_g)\sigma_z - \frac{E_J}{2}\sigma_x$$

The qubit frequency $\omega_{01} = \sqrt{(4E_C(1-2n_g))^2 + E_J^2}/\hbar$ is minimized at degeneracy ($\omega_{01} = E_J/\hbar$) and is first-order insensitive to charge noise $\delta n_g$ at that point.

## Motivation

The Cooper-pair box was the original "artificial atom" formed in a superconducting circuit, demonstrating that macroscopic electrical circuits could exhibit quantum coherent behavior. Its sensitivity to charge noise ($\delta n_g$) at generic operating points motivated the development of charge-insensitive variants: the transmon (large shunt capacitance, $E_J/E_C \gg 1$) and the fluxonium (superinductive shunt). The CPB remains foundational as the circuit from which the entire family of superconducting qubits descends.

## Experimental Status

**First coherent oscillations — Nakamura, Pashkin, and Tsai (1999):**
- Demonstrated time-domain coherent quantum oscillations in a single-Cooper-pair box.
- Gate-voltage pulses drove Rabi-like oscillations between charge states.
- Coherence limited by charge noise to $T_2 \sim 1\,\text{ns}$.

**Quantronium — Vion et al. (2002):**
- Operated at the charge degeneracy sweet spot, achieving $T_2 \sim 0.5\,\mu\text{s}$.
- Introduced Ramsey interferometry and spin-echo techniques for superconducting qubits.
- Demonstrated single-qubit gate fidelity ~99%.

**Two-qubit coupling — Yamamoto et al. (2003):**
- Capacitive coupling between two CPBs demonstrated with ~95% gate fidelity.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | ~1–10 μs | Limited by charge noise | [Nakamura et al. 1999](https://doi.org/10.1038/19718) |
| $T_2$ | ~0.5–5 μs | At sweet spot ($n_g = 1/2$) | [Vion et al. 2002](https://doi.org/10.1126/science.1069372) |
| 1Q gate fidelity | ~99% | Voltage-pulse driven | [Vion et al. 2002](https://doi.org/10.1126/science.1069372) |
| 2Q gate fidelity | ~95% | Capacitive coupling | [Yamamoto et al. 2003](https://doi.org/10.1038/nature01365) |
| Gate time (1Q) | ~1–10 ns | Fast voltage pulses | — |
| Gate time (2Q) | ~10–50 ns | Capacitive coupling | — |
| Readout fidelity | ~90–95% | Probe junction or SET | [Vion et al. 2002](https://doi.org/10.1126/science.1069372) |
| Qubit footprint | ~1 × 1 μm² | Very compact | — |
| Operating temperature | 20–50 mK | Dilution refrigerator | — |
| Connectivity | Fixed capacitive | Nearest-neighbor | — |

## References

### Original demonstration
- Y. Nakamura, Yu. A. Pashkin, and J. S. Tsai, "Coherent control of macroscopic quantum states in a single-Cooper-pair box," [Nature 398, 786 (1999)](https://doi.org/10.1038/19718)

### Key experiments
- D. Vion et al., "Manipulating the Quantum State of an Electrical Circuit," [Science 296, 886 (2002)](https://doi.org/10.1126/science.1069372)
- T. Yamamoto et al., "Demonstration of conditional gate operation using superconducting charge qubits," [Nature 425, 941 (2003)](https://doi.org/10.1038/nature01365)

### Related theory
- V. Bouchiat et al., "Quantum Coherence with a Single Cooper Pair," [Phys. Scr. T76, 165 (1998)](https://doi.org/10.1238/Physica.Topical.076a00165)

## Linked Papers

- [[nakamura-1999-cpb-coherent-oscillation]]

## Related Entries

- [[transmon]] — descendant operating in $E_J \gg E_C$ for charge noise immunity
- [[fluxonium]] — inductive shunt alternative to capacitive shunting
- [[blochnium]] — quasicharge regime of the fluxonium circuit
- [[phase-qubit]] — operates in the complementary phase regime
- [[flux-qubit]] — encodes in persistent-current states rather than charge
- [[circuit-qed]] — CPB was the original qubit in the Blais et al. proposal
