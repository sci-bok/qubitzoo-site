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
last_updated: '2026-03-25'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-audit-2026-03-25
---

## Figure

![[trapped-ion-qubit-figure.png]]

## Description

Trapped-ion quantum computing encodes qubits in the internal electronic states of individual atomic ions confined in electromagnetic traps (typically linear Paul traps using oscillating RF fields). The idea was proposed by Cirac and Zoller in 1995, who showed that the shared motional (phonon) modes of a chain of ions could serve as a quantum bus for entangling gates.

Two principal qubit encodings are used:

**Hyperfine qubits** encode information in two hyperfine ground states of the ion (e.g., $^{171}\text{Yb}^+$ uses $|F=0, m_F=0\rangle$ and $|F=1, m_F=0\rangle$ at 12.6 GHz splitting). These are "clock states" — first-order insensitive to magnetic field fluctuations — and have essentially infinite $T_1$ (the states are both ground states with no spontaneous decay channel). Coherence times $T_2 > 10\,\text{minutes}$ have been demonstrated.

**Optical qubits** use a ground state and a long-lived metastable excited state connected by a narrow optical transition (e.g., $^{40}\text{Ca}^+$ uses the $S_{1/2} \to D_{5/2}$ transition at 729 nm). The metastable state lifetime ($\sim 1\,\text{s}$) limits $T_1$, but optical qubits benefit from direct laser addressing at optical wavelengths.

Single-qubit gates are performed via resonant microwave or Raman laser pulses. Two-qubit entangling gates (Cirac-Zoller, Mølmer-Sørensen, or light-shift gates) couple the internal states to the shared motional mode of the ion chain, mediating effective spin-spin interactions.

As of 2025, trapped ions hold records for the highest single-qubit gate fidelity (99.999985%, Oxford) and readout fidelity (99.99%) of any physical qubit platform, and remain among the highest for two-qubit gates — though superconducting qubits are now competitive (IQM CZ 99.95%). The primary tradeoffs are significantly slower gate speeds (~100× vs. superconducting) and the complexity of laser-based control systems.

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
- $T_2 > 10\,\text{min}$ demonstrated with sympathetic cooling in $^{171}\text{Yb}^+$ / $^{138}\text{Ba}^+$ (Wang et al. 2017).
- $T_2 > 10\,\text{hours}$ demonstrated in a decoherence-free subspace using a Yb-Ba-Yb ion chain (2024).

**High-fidelity gates — Ballance et al. (2016), Gaebler et al. (2016):**
- Two-qubit gate fidelities $> 99.9\%$ demonstrated via Mølmer-Sørensen gates.
- Ballance et al.: 99.9(1)% in $^{43}\text{Ca}^+$ hyperfine qubits.
- Gaebler et al.: 99.948% (error $5.2 \times 10^{-4}$) in $^{9}\text{Be}^+$.

**Readout via electron shelving:**
- $> 99.99\%$ readout fidelity demonstrated (Myerson et al. 2008).

**QCCD architecture — Kielpinski, Monroe, Wineland (2002):**
- Proposed the quantum charge-coupled device architecture for scalable ion transport between processing zones.
- Now the basis of Quantinuum's commercial systems.

**Oxford 1Q gate record — Smith et al. (2024/2025):**
- 1Q Clifford gate error of $1.5(4) \times 10^{-7}$ (fidelity 99.999985%) via microwave-driven $^{43}\text{Ca}^+$ hyperfine clock qubits.
- Nearly an order of magnitude improvement over Harty et al. 2014.
- Fastest gates (4.4 μs) achieved error of $2.9(5) \times 10^{-7}$.

**Quantinuum Helios (2025):**
- 98-qubit QCCD trapped-ion processor using $^{137}\text{Ba}^+$ hyperfine qubits.
- 1Q gate fidelity 99.9975%, 2Q gate fidelity 99.921%.
- Novel four-way "X" junction architecture with rotatable ion storage ring.
- Full all-to-all connectivity among 98 qubits.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10,000 s (hyperfine) | Hyperfine ground states have no decay | [Bruzewicz et al. 2019](https://doi.org/10.1063/1.5088164) |
| $T_2$ (echo) | >600 s | $^{171}\text{Yb}^+$ with sympathetic cooling | [Wang et al. 2017](https://doi.org/10.1038/s41566-017-0007-1) |
| 1Q gate fidelity | 99.999985% | $^{43}\text{Ca}^+$ microwave RB; error $1.5 \times 10^{-7}$ | [Smith et al. 2024](https://arxiv.org/abs/2412.04421) |
| 2Q gate fidelity | 99.9% | MS gate, $^{43}\text{Ca}^+$ | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| Readout fidelity | 99.99% | Electron shelving / fluorescence | [Myerson et al. 2008](https://doi.org/10.1103/PhysRevLett.100.200502) |
| Gate time (1Q) | 1–10 μs | Microwave or Raman | — |
| Gate time (2Q) | 10–200 μs | MS gate; speed-fidelity tradeoff | — |
| Connectivity | All-to-all (in chain) | Via shared phonon modes | — |
| Ions per chain | 10–50 | Practical limit before mode crowding | — |
| Operating temperature | ~4 K (trap), ions at mK | Doppler + resolved sideband cooling | — |

## Scaling Considerations

- **Gate speed**: trapped-ion gates are ~100× slower than superconducting gates (μs vs. ns), limiting circuit depth per unit time and setting a speed-fidelity tradeoff for practical algorithms.
- **Mode crowding**: as ion chains grow beyond ~50 ions, motional mode frequencies become closely spaced, making individual mode addressing increasingly difficult and degrading gate fidelity.
- **Anomalous heating**: electric field noise at trap electrode surfaces heats the ions' motional modes, degrading gate fidelity. Scales roughly as $d^{-4}$ with ion-electrode distance and remains an active area of materials research.
- **Laser complexity**: high-fidelity Raman-based gates require precisely controlled, phase-stable laser systems. Microwave-driven gates (as in the Oxford 1Q record) offer simpler control but currently limited to 1Q operations.
- **Ion loss and dark ions**: occasional loss of ions from the trap or background-gas collisions can produce "dark ions" that disrupt chain ordering and gate calibration.
- **QCCD overhead**: shuttling ions between zones introduces transport time, heating during transport, and junction-crossing errors — though Quantinuum's Helios demonstrates this architecture at 98 qubits.
- **Photonic interconnects**: linking separate traps via photonic channels enables modular scaling but requires high-efficiency ion-photon interfaces with entanglement rates currently ~100 Hz.

## References

### Original proposal
- J. I. Cirac and P. Zoller, "Quantum Computations with Cold Trapped Ions," [Phys. Rev. Lett. 74, 4091 (1995)](https://doi.org/10.1103/PhysRevLett.74.4091)

### Gate proposals
- A. Sørensen and K. Mølmer, "Quantum Computation with Ions in Thermal Motion," [Phys. Rev. Lett. 82, 1971 (1999)](https://doi.org/10.1103/PhysRevLett.82.1971) | [arXiv:quant-ph/9810060](https://arxiv.org/abs/quant-ph/9810060) — original Mølmer-Sørensen gate
- D. Kielpinski, C. Monroe, and D. J. Wineland, "Architecture for a large-scale ion-trap quantum computer," [Nature 417, 709 (2002)](https://doi.org/10.1038/nature00784) | [arXiv:quant-ph/0110143](https://arxiv.org/abs/quant-ph/0110143) — QCCD architecture proposal

### Experimental demonstrations
- C. Monroe et al., "Demonstration of a Fundamental Quantum Logic Gate," [Phys. Rev. Lett. 75, 4714 (1995)](https://doi.org/10.1103/PhysRevLett.75.4714) — first quantum logic gate
- A. H. Myerson et al., "High-Fidelity Readout of Trapped-Ion Qubits," [Phys. Rev. Lett. 100, 200502 (2008)](https://doi.org/10.1103/PhysRevLett.100.200502)
- T. P. Harty et al., "High-Fidelity Preparation, Gates, Memory, and Readout of a Trapped-Ion Quantum Bit," [Phys. Rev. Lett. 113, 220501 (2014)](https://doi.org/10.1103/PhysRevLett.113.220501) | [arXiv:1403.1524](https://arxiv.org/abs/1403.1524)
- C. J. Ballance et al., "High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits," [Phys. Rev. Lett. 117, 060504 (2016)](https://doi.org/10.1103/PhysRevLett.117.060504) | [arXiv:1512.04600](https://arxiv.org/abs/1512.04600)
- J. P. Gaebler et al., "High-Fidelity Universal Gate Set for $^{9}\text{Be}^+$ Ion Qubits," [Phys. Rev. Lett. 117, 060505 (2016)](https://doi.org/10.1103/PhysRevLett.117.060505) | [arXiv:1604.00032](https://arxiv.org/abs/1604.00032) — 2Q error $5.2 \times 10^{-4}$
- Y. Wang et al., "Single-qubit quantum memory exceeding ten-minute coherence time," [Nature Photon. 11, 646 (2017)](https://doi.org/10.1038/s41566-017-0007-1) | [arXiv:1701.04195](https://arxiv.org/abs/1701.04195) — see also P. Wang et al., [Nature Commun. 12, 233 (2021)](https://doi.org/10.1038/s41467-020-20330-w) for $T_2 > 1$ hour
- M. C. Smith et al., "Single-qubit gates with errors at the $10^{-7}$ level," [Phys. Rev. Lett. 134, 230601 (2025)](https://doi.org/10.1103/PhysRevLett.134.230601) | [arXiv:2412.04421](https://arxiv.org/abs/2412.04421) — 1Q fidelity 99.999985%

### Reviews
- C. D. Bruzewicz et al., "Trapped-ion quantum computing: Progress and challenges," [Appl. Phys. Rev. 6, 021314 (2019)](https://doi.org/10.1063/1.5088164)

## Linked Papers

- [[cirac-zoller-1995-trapped-ion-gate]]
- [[ballance-2016-ion-gate-fidelity]]
- [[harty-2014-high-fidelity-preparation]]
- [[myerson-2008-high-fidelity-readout]]
- [[bruzewicz-2019-trapped-ion-computing]]
- [[gaebler-2016-ms-gate]]
- [[sorensen-1999-ms-gate]]
- [[kielpinski-2002-shuttling]]
- [[wang-2017-single-qubit-quantum-memory]]
- [[smith-2024-single-qubit-gate-errors]]

## Related Entries

- [[cirac-zoller-gate]] — the original Cirac-Zoller entangling gate proposal
- [[molmer-sorenson-gate]] — dominant two-qubit gate for trapped ions
- [[shuttling-ion-trap-qubit]] — QCCD scalable architecture variant
- [[rydberg-neutral-atom-qubit]] — competing platform with similar atomic physics
- [[ytterbium-hyperfine-qubit]] — dominant commercial hyperfine species (Quantinuum, IonQ)
- [[barium-137-ion-qubit]] — Ba-137 hyperfine qubit; Quantinuum Helios data qubit
- [[calcium-43-ion-qubit]] — Ca-43 hyperfine qubit; holds all-time 1Q gate fidelity record
- [[trapped-electron-qubit]] — proposed electron-spin analogue using Paul traps
- [[strontium-88-ion-qubit]] — Sr-88 optical qubit; visible-wavelength transitions for integrated photonics
- [[beryllium-9-ion-qubit]] — Be-9 hyperfine qubit; NIST workhorse, first CNOT gate (1995)
