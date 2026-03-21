---
title: Phase Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2002
first_demonstrated_year: 2002
keywords:
- phase qubit
- current-biased junction
- washboard potential
- superconducting
- macroscopic quantum tunneling
influence_score: 0.65
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[phase-qubit-figure.png]]

## Description

The phase qubit is a superconducting qubit based on a current-biased Josephson junction operating in the phase regime ($E_J/E_C \gg 1$). The qubit states are the two lowest energy levels in a single well of the tilted-washboard potential, which approximates a cubic potential near the bias point.

When biased near the critical current ($I_\text{bias} \lesssim I_c$), the washboard potential develops shallow wells with a finite number of bound states. The two lowest states serve as $|0\rangle$ and $|1\rangle$, with transition frequency $\omega_{01}$ tunable by adjusting $I_\text{bias}$. The anharmonicity comes from the cubic shape of the potential near the top of the barrier: higher levels are more closely spaced and eventually become unbound (tunneling into the continuum).

Readout exploits this: the $|1\rangle$ state has a much higher tunneling rate out of the well than $|0\rangle$, so a brief measurement pulse causes $|1\rangle$ to tunnel (producing a voltage pulse across the junction) while $|0\rangle$ remains trapped.

The phase qubit was historically important — the Martinis group (UCSB/Google) used it extensively from 2002–2013 — but has been largely superseded by the transmon, which offers superior coherence with simpler operation.

## Hamiltonian

Current-biased Josephson junction:

$$H = \frac{\hat{Q}^2}{2C} - E_J\cos\hat{\varphi} - \frac{\hbar I_\text{bias}}{2e}\hat{\varphi}$$

Near the bottom of a well (expanding the tilted cosine to cubic order):

$$H \approx \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega_p^2\hat{x}^2 - \frac{m\omega_p^2}{6\Delta x}\hat{x}^3$$

where $\omega_p = (2eI_c/\hbar C)^{1/2}(1 - (I_\text{bias}/I_c)^2)^{1/4}$ is the plasma frequency and $\Delta x$ sets the barrier height.

## Motivation

The phase qubit provided early demonstrations of quantum coherence and entanglement in superconducting circuits. Its straightforward readout mechanism (tunneling → voltage) was simpler than dispersive readout, making it an important stepping stone. However, its sensitivity to current-bias noise and the destructive nature of the tunneling measurement motivated the transition to transmon-based architectures.

## Experimental Status

**First demonstration — Martinis et al. (2002):**
- Rabi oscillations observed in a large-area current-biased Josephson junction
- Demonstrated coherent control of quantum states in the phase regime
- Tunneling-based readout with ~85% fidelity

**Two-qubit entanglement — Steffen et al. (2006):**
- Demonstrated entanglement between two capacitively coupled phase qubits
- Bell state fidelity sufficient to violate Bell inequality
- Established viability of multi-qubit superconducting processors

**Three-qubit entanglement — Neeley et al. (2010):**
- Generated three-qubit GHZ states using phase qubits
- Process tomography demonstrated coherent multi-qubit operations
- Marked the largest entangled state in superconducting circuits at the time

**Transition to transmon — post-2013:**
- The Martinis group transitioned from phase qubits to transmon-based architectures (Xmon)
- Superior coherence times ($T_1 > 50\,\mu\text{s}$ vs. $\sim 1\,\mu\text{s}$) and non-destructive readout drove the switch

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 0.5–5 μs | Limited by dielectric loss | [Martinis et al. 2002](https://doi.org/10.1103/PhysRevLett.89.117901) |
| $T_2$ | 0.1–2 μs | Bias noise dominated | — |
| Anharmonicity | 1–5% of $\omega_{01}$ | Cubic potential shape | — |
| Transition frequency | 5–10 GHz | Tunable via bias current | — |
| Readout fidelity | 85–96% | Tunneling-based, destructive | [Martinis et al. 2002](https://doi.org/10.1103/PhysRevLett.89.117901) |
| Operating temperature | 10–25 mK | Dilution refrigerator | — |

## References

### Original proposal / demonstration
- J. M. Martinis et al., "Rabi Oscillations in a Large Josephson-Junction Qubit," [Phys. Rev. Lett. 89, 117901 (2002)](https://doi.org/10.1103/PhysRevLett.89.117901)

### Experimental demonstrations
- M. Steffen et al., "Measurement of the Entanglement of Two Superconducting Qubits via State Tomography," [Science 313, 1423 (2006)](https://doi.org/10.1126/science.1130886)
- M. Neeley et al., "Generation of Three-Qubit Entangled States using Superconducting Phase Qubits," [Nature 467, 570 (2010)](https://doi.org/10.1038/nature09418)

### Reviews
- J. Clarke and F. K. Wilhelm, "Superconducting quantum bits," [Nature 453, 1031 (2008)](https://doi.org/10.1038/nature07128)

## Linked Papers

- [[martinis-2002-phase-qubit]]

## Related Entries

- [[transmon]] — successor architecture with superior coherence
- [[flux-qubit]] — alternative superconducting qubit in the phase regime
- [[cooper-pair-box-charge-qubit]] — charge-regime predecessor
