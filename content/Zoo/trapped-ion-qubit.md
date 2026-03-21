---
title: Trapped-Ion Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: true
first_proposed_year: 1995
first_demonstrated_year: 1995
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
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[trapped-ion-qubit-figure.png]]

## Description

Trapped-ion quantum computing encodes qubits in the internal electronic states of individual atomic ions confined in electromagnetic traps (typically linear Paul traps using oscillating RF fields). The idea was proposed by Cirac and Zoller in 1995, who showed that the shared motional (phonon) modes of a chain of ions could serve as a quantum bus for entangling gates.

Two principal qubit encodings are used:

**Hyperfine qubits** encode information in two hyperfine ground states of the ion (e.g., $^{171}\text{Yb}^+$ uses $|F=0, m_F=0\rangle$ and $|F=1, m_F=0\rangle$ at 12.6 GHz splitting). These are "clock states" — first-order insensitive to magnetic field fluctuations — and have essentially infinite $T_1$ (the states are both ground states with no spontaneous decay channel). Coherence times $T_2 > 10\,\text{minutes}$ have been demonstrated.

**Optical qubits** use a ground state and a long-lived metastable excited state connected by a narrow optical transition (e.g., $^{40}\text{Ca}^+$ uses the $S_{1/2} \to D_{5/2}$ transition at 729 nm). The metastable state lifetime ($\sim 1\,\text{s}$) limits $T_1$, but optical qubits benefit from direct laser addressing at optical wavelengths.

Single-qubit gates are performed via resonant microwave or Raman laser pulses. Two-qubit entangling gates (Cirac-Zoller, Mølmer-Sørensen, or light-shift gates) couple the internal states to the shared motional mode of the ion chain, mediating effective spin-spin interactions.

Trapped ions currently hold records for the highest single-qubit, two-qubit, and readout fidelities of any physical qubit platform.

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

## Experimental Status

**Original proposal — Cirac and Zoller (1995):**
- Proposed using cold trapped ions with shared motional modes as a quantum bus for universal quantum computation.
- Established ion traps as a viable quantum computing platform.

**Mølmer-Sørensen gate development:**
- Enables two-qubit operations without ground-state cooling.
- Became the dominant entangling gate for trapped-ion QC.

**Coherence records — hyperfine clock qubits:**
- $T_2 > 10\,\text{min}$ demonstrated with dynamical decoupling in $^{171}\text{Yb}^+$.

**High-fidelity gates — Ballance et al. (2016), Gaebler et al. (2016):**
- Two-qubit gate fidelities $> 99.9\%$ demonstrated via Mølmer-Sørensen gates.

**Readout via electron shelving:**
- $> 99.99\%$ readout fidelity demonstrated (Myerson et al. 2008).

**QCCD architecture:**
- Quantum charge-coupled device architecture demonstrated for scalable ion transport between zones.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10,000 s (hyperfine) | Hyperfine ground states have no decay | [Bruzewicz et al. 2019](https://doi.org/10.1063/1.5088164) |
| $T_2$ (echo) | >600 s | $^{171}\text{Yb}^+$ with DD sequences | — |
| 1Q gate fidelity | 99.9999% | $^{43}\text{Ca}^+$ RB | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| 2Q gate fidelity | 99.9% | MS gate, $^{43}\text{Ca}^+$ | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| Readout fidelity | 99.99% | Electron shelving / fluorescence | [Myerson et al. 2008](https://doi.org/10.1103/PhysRevLett.100.200502) |
| Gate time (1Q) | 1–10 μs | Microwave or Raman | — |
| Gate time (2Q) | 10–200 μs | MS gate; speed-fidelity tradeoff | — |
| Connectivity | All-to-all (in chain) | Via shared phonon modes | — |
| Ions per chain | 10–50 | Practical limit before mode crowding | — |
| Operating temperature | ~4 K (trap), ions at mK | Doppler + resolved sideband cooling | — |

## References

### Original proposal
- J. I. Cirac and P. Zoller, "Quantum Computations with Cold Trapped Ions," [Phys. Rev. Lett. 74, 4091 (1995)](https://doi.org/10.1103/PhysRevLett.74.4091)

### Experimental demonstrations
- C. J. Ballance et al., "High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits," [Phys. Rev. Lett. 117, 060504 (2016)](https://doi.org/10.1103/PhysRevLett.117.060504)
- T. P. Harty et al., "High-Fidelity Preparation, Gates, Memory, and Readout of a Trapped-Ion Quantum Bit," [Phys. Rev. Lett. 113, 220501 (2014)](https://doi.org/10.1103/PhysRevLett.113.220501)
- A. H. Myerson et al., "High-Fidelity Readout of Trapped-Ion Qubits," [Phys. Rev. Lett. 100, 200502 (2008)](https://doi.org/10.1103/PhysRevLett.100.200502)

### Reviews
- C. D. Bruzewicz et al., "Trapped-ion quantum computing: Progress and challenges," [Appl. Phys. Rev. 6, 021314 (2019)](https://doi.org/10.1063/1.5088164)

## Linked Papers

- [[cirac-zoller-1995-trapped-ion-gate]]

## Related Entries

- [[cirac-zoller-gate]] — the original Cirac-Zoller entangling gate proposal
- [[molmer-sorenson-gate]] — dominant two-qubit gate for trapped ions
- [[shuttling-ion-trap-qubit]] — QCCD scalable architecture variant
- [[rydberg-neutral-atom-qubit]] — competing platform with similar atomic physics
