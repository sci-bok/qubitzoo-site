---
title: Phase Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 2002
first_demonstrated_year: 2002
keywords:
- phase qubit
- current-biased junction
- washboard potential
- superconducting
- macroscopic quantum tunneling
influence_score: 0.65
last_updated: '2026-08-22'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-08-22
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/phase-qubit-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:46.368565+00:00"
---

## Figure

![[phase-qubit-figure.png]]

## Description

The phase qubit is a superconducting qubit based on a current-biased Josephson junction operating in the phase regime ($E_J/E_C \gg 1$). The qubit states are the two lowest energy levels in one metastable well of the tilted-washboard potential, which becomes approximately cubic when the bias approaches the junction critical current.

When biased near the critical current ($I_\text{bias} \lesssim I_c$), the washboard potential has shallow metastable wells containing only a few quantized levels. The two lowest levels serve as $|0\rangle$ and $|1\rangle$, with transition frequency $\omega_{01}$ tunable by adjusting $I_\text{bias}$. The cubic asymmetry makes higher levels more closely spaced and gives excited states exponentially larger escape rates.

Readout exploits this escape-rate contrast. A fast bias pulse lowers the barrier so that the excited-state population escapes with much greater probability than $|0\rangle$; the switched state is then amplified into a classical circulating-current or voltage signal. The original 2002 device first drove $|1\rangle\!\to\!|2\rangle$ to enhance escape, whereas later capacitively shunted devices used direct state-selective tunneling.

The phase qubit was historically important—the Martinis group used it extensively from 2002 through the early 2010s—but it was superseded in quantum processors by transmon-family circuits with much longer coherence and nondestructive dispersive readout. Current-biased Josephson junctions remain active as macroscopic quantum systems and threshold detectors, not as a competitive processor-qubit architecture.

## Hamiltonian

For a current-biased junction, with $\hat Q=2e\hat n$, $[\hat\varphi,\hat n]=i$, and $\Phi_0/2\pi=\hbar/2e$,

$$H = \frac{\hat{Q}^2}{2C} - E_J\cos\hat{\varphi} - \frac{\Phi_0 I_\text{bias}}{2\pi}\hat{\varphi}.$$

Writing $s=I_\text{bias}/I_c$, the local minimum is at $\varphi_0=\arcsin s$. For $\hat x=\hat\varphi-\varphi_0$, expansion about that minimum gives

$$U(\hat x)=U(0)+\frac{E_J\cos\varphi_0}{2}\hat x^2-\frac{E_J\sin\varphi_0}{6}\hat x^3+O(\hat x^4),$$

with plasma frequency

$$\omega_p=\sqrt{\frac{2eI_c}{\hbar C}}\,(1-s^2)^{1/4}.$$

The exact barrier from the local minimum to the adjacent maximum is

$$\Delta U=2E_J\!\left[\sqrt{1-s^2}-s\arccos s\right]\approx\frac{4\sqrt 2}{3}E_J(1-s)^{3/2},$$

where the approximation holds for $s\to1^-$. In the cubic-well limit the ground-state escape rate has the leading WKB dependence $\Gamma_0\propto\exp[-36\Delta U/(5\hbar\omega_p)]$; excited levels escape much faster.

## Motivation

The phase qubit provided early demonstrations of quantum coherence and entanglement in superconducting circuits. Its straightforward readout mechanism (tunneling → voltage) was simpler than dispersive readout, making it an important stepping stone. However, its sensitivity to current-bias noise and the destructive nature of the tunneling measurement motivated the transition to transmon-based architectures.

## Experimental Status

**First coherent phase qubit — Martinis et al. (2002):**
- Rabi oscillations observed in a large-area current-biased Josephson junction at $\omega_{01}/2\pi=6.9$ GHz
- Spectroscopic quality factor $Q\approx1000$ and an inferred coherence time of about 10 ns in the reported device
- State-selective tunneling readout with 85% excited-state fidelity and greater than 99% ground-state preparation/readout fidelity

**Capacitively shunted redesign — Steffen et al. (2006):**
- Separated the shunt capacitor from the tunnel junction, reducing strongly coupled two-level defects by roughly an order of magnitude
- Demonstrated single-shot state tomography with about 90% measurement fidelity

**Two-qubit entanglement — Steffen et al. (2006):**
- Demonstrated entanglement between two capacitively coupled phase qubits
- Reconstructed a Bell state with 87% fidelity after correcting measurement error
- Reported $T_1=130$ ns and $T_2^*=80$ ns for the coupled devices

**Three-qubit entanglement — Neeley et al. (2010):**
- Generated both three-qubit W and GHZ states
- State tomography gave $F_W=0.78$ and $F_\mathrm{GHZ}=0.62$, both above their respective genuine-three-party-entanglement witness thresholds

**Materials endpoint — Patel et al. (2013):**
- A phase qubit with a single-crystal silicon shunt capacitor reached $T_1=1.6\,\mu\text{s}$ at 5.093 GHz
- The same device had $T_2^*=110$ ns because the architecture has no flux sweet spot

**Recent status — 2024–2026:**
- No phase-qubit processor result or coherence/gate record superseding the early-2010s endpoint was found
- Ouyang et al. (2024) experimentally revisited the bias-controlled crossover of a current-biased junction from a nearly harmonic oscillator to a nonlinear two-level artificial atom; subsequent work has emphasized threshold detection rather than phase-qubit computing

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1.6 μs | Single-crystal-Si shunt; best value in the cited device | [Patel et al. 2013](https://doi.org/10.1063/1.4773996) |
| $T_2^*$ | 110 ns | No flux sweet spot; low-frequency flux noise dominated | [Patel et al. 2013](https://doi.org/10.1063/1.4773996) |
| Anharmonicity | $\omega_{01}-\omega_{12}\approx0.1\omega_{01}$ | Representative shallow well with $\Delta U/\hbar\omega_p\sim3$ | [Martinis et al. 2002](https://doi.org/10.1103/PhysRevLett.89.117901) |
| Transition frequency | 5.093 GHz | Operating point of the 2013 crystalline-Si device | [Patel et al. 2013](https://doi.org/10.1063/1.4773996) |
| Readout fidelity | 85% (2002); about 90% (2006) | Destructive, tunneling-based single-shot readout | [Martinis et al. 2002](https://doi.org/10.1103/PhysRevLett.89.117901); [Steffen et al. 2006](https://doi.org/10.1103/PhysRevLett.97.050502) |
| Two-qubit Bell-state fidelity | 87% | Tomographic fidelity after measurement-error correction | [Steffen et al. 2006](https://doi.org/10.1126/science.1130886) |
| Three-qubit state fidelity | $F_W=0.78$; $F_\mathrm{GHZ}=0.62$ | Both exceeded the relevant entanglement-witness threshold | [Neeley et al. 2010](https://doi.org/10.1038/nature09418) |
| Operating temperature | 25 mK (2002); 35 mK (2013) | Dilution refrigerator | [Martinis et al. 2002](https://doi.org/10.1103/PhysRevLett.89.117901); [Patel et al. 2013](https://doi.org/10.1063/1.4773996) |

## References

### Original proposal / demonstration
- J. M. Martinis et al., "Rabi Oscillations in a Large Josephson-Junction Qubit," [Phys. Rev. Lett. 89, 117901 (2002)](https://doi.org/10.1103/PhysRevLett.89.117901)

### Experimental demonstrations
- M. Steffen et al., "State Tomography of Capacitively Shunted Phase Qubits with High Fidelity," [Phys. Rev. Lett. 97, 050502 (2006)](https://doi.org/10.1103/PhysRevLett.97.050502), [arXiv:cond-mat/0602432](https://arxiv.org/abs/cond-mat/0602432)
- M. Steffen et al., "Measurement of the Entanglement of Two Superconducting Qubits via State Tomography," [Science 313, 1423 (2006)](https://doi.org/10.1126/science.1130886)
- M. Neeley et al., "Generation of Three-Qubit Entangled States using Superconducting Phase Qubits," [Nature 467, 570 (2010)](https://doi.org/10.1038/nature09418), [arXiv:1004.4246](https://arxiv.org/abs/1004.4246)
- U. Patel et al., "Coherent Josephson phase qubit with a single crystal silicon capacitor," [Appl. Phys. Lett. 102, 012602 (2013)](https://doi.org/10.1063/1.4773996), [arXiv:1210.1545](https://arxiv.org/abs/1210.1545)

### Recent current-biased-junction context
- P. H. Ouyang et al., "Experimental evidence for a current-biased Josephson junction acting as either a macroscopic boson or fermion," [Phys. Rev. Research 6, 013236 (2024)](https://doi.org/10.1103/PhysRevResearch.6.013236)

### Reviews
- J. Clarke and F. K. Wilhelm, "Superconducting quantum bits," [Nature 453, 1031 (2008)](https://doi.org/10.1038/nature07128)
- J. M. Martinis, "Superconducting phase qubits," [Quantum Inf. Process. 8, 81 (2009)](https://doi.org/10.1007/s11128-009-0105-1)

## Linked Papers

- [[martinis-2002-phase-qubit]]
- [[steffen-2006-state-tomography-phase-qubits]]
- [[martinis-2009-superconducting-phase-qubits]]
- [[clarke-2008-superconducting-bits]]
- [[neeley-2010-generation-three-qubit]]
- [[steffen-2006-measurement-entanglement-superconducting]]
- [[patel-2013-coherent-phase-qubit-silicon-capacitor]]
- [[ouyang-2024-current-biased-josephson-boson-fermion]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the tilted cosine potential and plasma-mode anharmonicity that the current-biased junction turns into a qubit
- [[coherence-time-hierarchy]] — how to interpret the short $T_1$ and $T_2$ numbers that ultimately made the phase qubit a transitional architecture
- [[dispersive-readout-mechanism]] — the non-destructive resonator readout paradigm that replaced tunneling-based measurement in mainstream superconducting processors

## Related Entries

- [[transmon]] — successor architecture with superior coherence
- [[flux-qubit]] — alternative superconducting qubit in the phase regime
- [[cooper-pair-box-charge-qubit]] — charge-regime predecessor
