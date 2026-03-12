---
title: Phase Qubit
entry_type: qubit
technology_family: Superconducting
status: seed
seed_id: '2'
seed_source: qubitzoo-airtable
first_proposed_year: 2002
keywords:
- phase qubit
- current-biased junction
- washboard potential
- superconducting
- macroscopic quantum tunneling
influence_score: 0.65
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
figure_reviewed: true
---


## Description

The phase qubit is a superconducting qubit based on a current-biased Josephson junction operating in the phase regime ($E_J/E_C \gg 1$). The qubit states are the two lowest energy levels in a single well of the tilted-washboard potential, which approximates a cubic potential near the bias point.

When biased near the critical current ($I_\text{bias} \lesssim I_c$), the washboard potential develops shallow wells with a finite number of bound states. The two lowest states serve as $|0\rangle$ and $|1\rangle$, with transition frequency $\omega_{01}$ tunable by adjusting $I_\text{bias}$. The anharmonicity comes from the cubic shape of the potential near the top of the barrier: higher levels are more closely spaced and eventually become unbound (tunneling into the continuum).

Readout exploits this: the $|1\rangle$ state has a much higher tunneling rate out of the well than $|0\rangle$, so a brief measurement pulse causes $|1\rangle$ to tunnel (producing a voltage pulse across the junction) while $|0\rangle$ remains trapped.

The phase qubit was historically important — the Martinis group (UCSB/Google) used it extensively from 2002–2013 — but has been largely superseded by the transmon, which offers superior coherence with simpler operation.


## Figure

![[phase-qubit-figure.png]]

## Hamiltonian

Current-biased Josephson junction:

$$H = \frac{\hat{Q}^2}{2C} - E_J\cos\hat{\varphi} - \frac{\hbar I_\text{bias}}{2e}\hat{\varphi}$$

Near the bottom of a well (expanding the tilted cosine to cubic order):

$$H \approx \frac{\hat{p}^2}{2m} + \frac{1}{2}m\omega_p^2\hat{x}^2 - \frac{m\omega_p^2}{6\Delta x}\hat{x}^3$$

where $\omega_p = (2eI_c/\hbar C)^{1/2}(1 - (I_\text{bias}/I_c)^2)^{1/4}$ is the plasma frequency and $\Delta x$ sets the barrier height.

## Motivation

The phase qubit provided early demonstrations of quantum coherence and entanglement in superconducting circuits. Its straightforward readout mechanism (tunneling → voltage) was simpler than dispersive readout, making it an important stepping stone. However, its sensitivity to current-bias noise and the destructive nature of the tunneling measurement motivated the transition to transmon-based architectures.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 0.5–5 μs | Limited by dielectric loss | — |
| $T_2$ | 0.1–2 μs | Bias noise dominated | — |
| Anharmonicity | 1–5% of $\omega_{01}$ | Cubic potential shape | — |
| Transition frequency | 5–10 GHz | Tunable via bias current | — |
| Readout fidelity | 85–96% | Tunneling-based, destructive | — |
| Operating temperature | 10–25 mK | Dilution refrigerator | — |

## Related Entries

- [[transmon]]
- [[flux-qubit]]
- [[cooper-pair-box-charge-qubit]]
