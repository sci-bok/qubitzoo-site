---
title: Trapped-Ion Qubit
entry_type: qubit
technology_family: Ion Trap
status: demonstrated
first_proposed_year: 1995
keywords:
- trapped ion
- ion trap
- paul trap
- cirac zoller
- molmer sorensen
- phonon bus
- sympathetic cooling
- shuttling
influence_score: 0.92
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
published: 1995-01-01
---

## Description

Trapped-ion quantum computing encodes qubits in the internal electronic states of individual atomic ions confined in electromagnetic traps (typically linear Paul traps using oscillating RF fields). The idea was proposed by Cirac and Zoller in 1995, who showed that the shared motional (phonon) modes of a chain of ions could serve as a quantum bus for entangling gates.

Two principal qubit encodings are used:

**Hyperfine qubits** encode information in two hyperfine ground states of the ion (e.g., $^{171}\text{Yb}^+$ uses $|F=0, m_F=0\rangle$ and $|F=1, m_F=0\rangle$ at 12.6 GHz splitting). These are "clock states" — first-order insensitive to magnetic field fluctuations — and have essentially infinite $T_1$ (the states are both ground states with no spontaneous decay channel). Coherence times $T_2 > 10\,\text{minutes}$ have been demonstrated.

**Optical qubits** use a ground state and a long-lived metastable excited state connected by a narrow optical transition (e.g., $^{40}\text{Ca}^+$ uses the $S_{1/2} \to D_{5/2}$ transition at 729 nm). The metastable state lifetime ($\sim 1\,\text{s}$) limits $T_1$, but optical qubits benefit from direct laser addressing at optical wavelengths.

Single-qubit gates are performed via resonant microwave or Raman laser pulses. Two-qubit entangling gates (Cirac-Zoller, Mølmer-Sørensen, or light-shift gates) couple the internal states to the shared motional mode of the ion chain, mediating effective spin-spin interactions.

Trapped ions currently hold records for the highest single-qubit, two-qubit, and readout fidelities of any physical qubit platform.


## Figure

![[trapped-ion-qubit-figure.png]]

## Hamiltonian

The Jaynes-Cummings-type interaction for a single ion coupled to a motional mode:

$$H = \frac{\hbar\omega_0}{2}\sigma_z + \hbar\nu\, a^\dagger a + \hbar\Omega\left(\sigma_+ e^{i\eta(a+a^\dagger)} + \text{h.c.}\right)$$

where $\omega_0$ is the qubit splitting, $\nu$ is the trap secular frequency, $\Omega$ is the Rabi frequency of the driving field, $\eta = k\sqrt{\hbar/2m\nu}$ is the Lamb-Dicke parameter, and $a^\dagger, a$ are phonon creation/annihilation operators.

In the Lamb-Dicke regime ($\eta\sqrt{\langle n\rangle + 1} \ll 1$), expanding to first order:
- **Carrier transition** ($\Delta = 0$): $H_\text{car} = \hbar\Omega(\sigma_+ + \sigma_-)$ — single-qubit rotations.
- **Red sideband** ($\Delta = -\nu$): $H_\text{rsb} = i\hbar\eta\Omega(\sigma_+ a - \sigma_- a^\dagger)$ — removes a phonon while flipping the spin.
- **Blue sideband** ($\Delta = +\nu$): $H_\text{bsb} = i\hbar\eta\Omega(\sigma_+ a^\dagger - \sigma_- a)$ — adds a phonon while flipping the spin.

The Mølmer-Sørensen gate drives both sidebands simultaneously on two ions, creating an effective $\sigma_x \otimes \sigma_x$ interaction that produces a maximally entangled state in one gate cycle.

## Motivation

Trapped ions offer natural identical qubits (every $^{171}\text{Yb}^+$ ion is identical), extraordinarily long coherence times (minutes for hyperfine qubits), all-to-all connectivity within a chain via shared motional modes, and the highest demonstrated gate fidelities. The primary scaling challenge is that long ion chains become difficult to control (mode crowding, heating), motivating architectures based on ion shuttling between zones (QCCD) or photonic interconnects between separate traps.

## Key Findings

- Cirac-Zoller (1995) proposal established ion traps as a viable quantum computing platform.
- Mølmer-Sørensen gate enables two-qubit operations without ground-state cooling.
- Hyperfine qubits in clock states achieve $T_2 > 10\,\text{min}$ with dynamical decoupling.
- Two-qubit gate fidelities $> 99.9\%$ demonstrated (Ballance et al. 2016, Gaebler et al. 2016).
- State detection via electron shelving achieves $> 99.99\%$ readout fidelity.
- QCCD (quantum charge-coupled device) architecture demonstrated for scalable ion transport.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10,000 s (hyperfine) | Hyperfine ground states have no decay | — |
| $T_2$ (echo) | >600 s | $^{171}\text{Yb}^+$ with DD sequences | — |
| 1Q gate fidelity | 99.9999% | $^{43}\text{Ca}^+$ RB (Harty et al. 2014) | [Harty 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| 2Q gate fidelity | 99.9% | MS gate, $^{43}\text{Ca}^+$ | [Ballance 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| Readout fidelity | 99.99% | Electron shelving / fluorescence | [Myerson 2008](https://doi.org/10.1103/PhysRevLett.100.200502) |
| Gate time (1Q) | 1–10 μs | Microwave or Raman | — |
| Gate time (2Q) | 10–200 μs | MS gate; speed-fidelity tradeoff | — |
| Connectivity | All-to-all (in chain) | Via shared phonon modes | — |
| Ions per chain | 10–50 | Practical limit before mode crowding | — |
| Operating temperature | ~4 K (trap), ions at mK | Doppler + resolved sideband cooling | — |


## Extracted Figures

![[trapped-ion-qubit-paper-fig-1.png]]

![[trapped-ion-qubit-paper-fig-2.png]]

## Linked Papers
- [[cirac-zoller-1995-trapped-ion-gate]]

## Related Entries

- [[cirac-zoller-gate-for-trapped-ion-qubits]]
- [[rydberg-neutral-atom-qubit]]
