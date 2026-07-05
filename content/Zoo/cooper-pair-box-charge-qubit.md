---
title: Cooper-Pair Box (Charge Qubit)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 1997
first_demonstrated_year: 1999
keywords:
- superconducting qubit
- charge qubit
- cooper-pair box
- cpb
- nakamura
- charge degeneracy
influence_score: 0.70
last_updated: '2026-07-05'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-07-05
---

## Figure

![[cooper-pair-box-charge-qubit-figure.png]]

## Description

A nanometre-scale superconducting electrode (the "island") connected to a reservoir via a Josephson junction constitutes an artificial two-level electronic system: a single-Cooper-pair box. The two levels consist of charge states differing by one Cooper pair ($2e$) that are coupled by tunneling through the junction. Although the two-level system is macroscopic, containing a large number of electrons, the two charge states can be coherently superposed.

The Cooper-pair box operates in the **charge regime** where $E_C > E_J$ — the electrostatic energy cost of adding a Cooper pair to the island exceeds the Josephson coupling energy. At the **charge degeneracy point** $n_g = C_g V_g / 2e = 1/2$, the two lowest charge states $|n\rangle$ and $|n+1\rangle$ are degenerate and split by the Josephson energy $E_J$, forming a protected sweet spot with first-order insensitivity to charge noise. Away from this point, the qubit frequency is strongly sensitive to gate charge fluctuations, which historically limited coherence times.

The Cooper-pair box was the first superconducting qubit to demonstrate coherent quantum oscillations (Nakamura, Pashkin, and Tsai, 1999), establishing superconducting circuits as a viable platform for quantum computing. Its extreme charge noise sensitivity motivated the development of the transmon ($E_J/E_C \gg 1$), which trades anharmonicity for exponential suppression of charge dispersion.

## Hamiltonian

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

where $E_C = e^2/2C_\Sigma$ is the charging energy, $C_\Sigma$ is the total island capacitance (for the minimal textbook CPB, $C_\Sigma \approx C_J + C_g$ up to parasitic contributions), $n_g = C_g V_g / 2e$ is the gate-induced charge in units of Cooper pairs, $E_J$ is the Josephson energy, and $\hat{n}$, $\hat{\varphi}$ are conjugate charge number and phase operators.

In the charge regime ($E_C \gg E_J$), the two lowest-energy states near the degeneracy point $n_g = 1/2$ are approximately:

$$H_\text{2-level} \approx -2E_C(1 - 2n_g)\sigma_z - \frac{E_J}{2}\sigma_x$$

The qubit frequency $\omega_{01} = \sqrt{(4E_C(1-2n_g))^2 + E_J^2}/\hbar$ is minimized at degeneracy ($\omega_{01} = E_J/\hbar$) and is first-order insensitive to charge noise $\delta n_g$ at that point.

## Motivation

The Cooper-pair box was the original "artificial atom" formed in a superconducting circuit, demonstrating that macroscopic electrical circuits could exhibit quantum coherent behavior. Its sensitivity to charge noise ($\delta n_g$) at generic operating points motivated the development of charge-insensitive variants: the transmon (large shunt capacitance, $E_J/E_C \gg 1$) and the fluxonium (superinductive shunt). The CPB remains foundational as the circuit from which the entire family of superconducting qubits descends.

## Experimental Status

**First coherent oscillations — Nakamura, Pashkin, and Tsai (1999):**
- Demonstrated time-domain coherent quantum oscillations in a single-Cooper-pair box.
- Short gate-voltage pulses drove charge-state oscillations after a nonadiabatic excursion to the degeneracy point.
- Oscillation contrast decayed on the nanosecond scale, establishing both the promise of superconducting qubits and the severity of charge-noise limits.

**Quantronium sweet-spot operation — Vion et al. (2002):**
- Operated a split-junction CPB descendant at the charge sweet spot, strongly reducing first-order sensitivity to offset-charge noise.
- Introduced microwave control, Ramsey interferometry, and spin-echo protocols into the superconducting-qubit toolkit.
- Reported a coherence quality factor $Q_\phi \approx 25{,}000$, corresponding to sub-microsecond coherent control at gigahertz frequencies.

**Two-qubit coupling — Pashkin et al. (2003):**
- Demonstrated coherent oscillations in two capacitively coupled charge qubits.
- Observed spectra reflecting interqubit coupling and signatures consistent with entangled two-qubit states.
- Established coupling feasibility, but did **not** report a modern randomized-benchmark or process-fidelity style gate metric.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Coherent-oscillation period | ~0.15 ns | Pulse-driven charge oscillations in the original CPB experiment | [Nakamura et al. 1999](https://doi.org/10.1038/19718) |
| Oscillation decay time | ~2 ns | Nanosecond-scale coherence limit in the original charge-sensitive device | [Nakamura et al. 1999](https://doi.org/10.1038/19718) |
| Coherence quality factor $Q_\phi$ | $\approx 25{,}000$ | Quantronium sweet-spot benchmark; better grounded than quoting an unsourced generic $T_2$ range | [Vion et al. 2002](https://doi.org/10.1126/science.1069372) |
| Two-qubit milestone | Coherent oscillations in two coupled CPBs | Coupling and entangled-state signatures were demonstrated, but no process-fidelity style benchmark was reported | [Pashkin et al. 2003](https://doi.org/10.1038/nature01365) |

## References

### Original demonstration
- Y. Nakamura, Yu. A. Pashkin, and J. S. Tsai, "Coherent control of macroscopic quantum states in a single-Cooper-pair box," [Nature 398, 786 (1999)](https://doi.org/10.1038/19718)

### Key experiments
- D. Vion et al., "Manipulating the Quantum State of an Electrical Circuit," [Science 296, 886 (2002)](https://doi.org/10.1126/science.1069372)
- Yu. A. Pashkin et al., "Quantum oscillations in two coupled charge qubits," [Nature 421, 823 (2003)](https://doi.org/10.1038/nature01365)

### Related theory and precursors
- A. Shnirman, G. Schön, and Z. Hermon, "Quantum Manipulations of Small Josephson Junctions," [Phys. Rev. Lett. 79, 2371 (1997)](https://doi.org/10.1103/PhysRevLett.79.2371)
- V. Bouchiat et al., "Quantum Coherence with a Single Cooper Pair," [Phys. Scr. T76, 165 (1998)](https://doi.org/10.1238/Physica.Topical.076a00165)

## Linked Papers

- [[nakamura-1999-cpb-coherent-oscillation]]
- [[vion-2002-manipulating-state-electrical]]
- [[pashkin-2003-oscillations-coupled-charge]]
- [[bouchiat-1998-coherence-single-cooper]]

## Evergreen context

- [[charge-noise-in-superconducting-qubits]] — the original failure mode that limited the CPB
- [[charge-noise-sweet-spot]] — why the charge degeneracy point mattered, and why it was not enough
- [[josephson-junction-as-nonlinear-element]] — the nonlinear element underlying the CPB Hamiltonian
- [[coherence-time-hierarchy]] — how to read the jump from nanosecond-scale charge-noise-limited operation to the later sweet-spot and transmon generations
- [[jaynes-cummings-in-circuits]] — the CPB was the original artificial atom in the first circuit-QED mapping, before the transmon became the dominant superconducting implementation

## Related Entries

- [[transmon]] — descendant operating in $E_J \gg E_C$ for charge noise immunity
- [[fluxonium]] — inductive shunt alternative to capacitive shunting
- [[blochnium]] — quasicharge regime of the fluxonium circuit
- [[phase-qubit]] — operates in the complementary phase regime
- [[flux-qubit]] — encodes in persistent-current states rather than charge
- [[circuit-qed]] — CPB was the original qubit in the Blais et al. proposal
