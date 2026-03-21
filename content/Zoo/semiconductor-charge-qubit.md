---
title: Semiconductor Charge Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2003
first_demonstrated_year: 2003
keywords:
  - semiconductor
  - charge qubit
  - double quantum dot
  - GaAs
  - silicon
  - electrostatic control
influence_score: 0.62
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: scibok-manual-2026-03-21
---

## Figure

![[semiconductor-charge-qubit-figure.png]]

## Description

The **semiconductor charge qubit** encodes quantum information in the position of a single electron within a **double quantum dot** (DQD). The two computational basis states correspond to the electron being localized in the left dot ($|L\rangle$) or the right dot ($|R\rangle$), with the qubit state $|\Psi\rangle = \alpha|L\rangle + \beta|R\rangle$ representing a coherent superposition of charge configurations.

The double quantum dot is formed in a two-dimensional electron gas (2DEG) at a semiconductor heterointerface — typically GaAs/AlGaAs or Si/SiGe — using lithographically defined metallic gate electrodes that electrostatically confine electrons. Two quantum dots are coupled via a tunnel barrier, and the relative chemical potentials $\mu_L$ and $\mu_R$ of the dots are controlled by gate voltages $V_L$ and $V_R$. At zero detuning ($\epsilon = \mu_L - \mu_R = 0$), the eigenstates are symmetric and antisymmetric superpositions split by twice the tunnel coupling $2t_c$.

Qubit operations are performed entirely electrically using fast voltage pulses that modulate the detuning $\epsilon(t)$, driving coherent charge oscillations between the two dots. This all-electrical control is a major advantage, enabling gate times below 1 ns. However, the charge degree of freedom couples directly to electric field fluctuations (charge noise) in the solid-state environment, resulting in very short coherence times ($T_2^* \sim 1$ ns).

The semiconductor charge qubit is historically significant as the **simplest semiconductor qubit** and the first demonstration that artificial atoms can be formed from semiconductors with coherent quantum control. Its rapid decoherence motivated the development of spin-based encodings (Loss-DiVincenzo, singlet-triplet, exchange-only) that exploit the weaker coupling of spin to the charge noise environment.

## Hamiltonian

$$H = \frac{\epsilon}{2}\sigma_z + t_c\,\sigma_x$$

where:
- $\epsilon = \mu_L - \mu_R$ is the detuning between dot chemical potentials, controlled by gate voltages
- $t_c$ is the tunnel coupling between the two dots
- $\sigma_z = |L\rangle\langle L| - |R\rangle\langle R|$ is the charge polarization operator
- $\sigma_x = |L\rangle\langle R| + |R\rangle\langle L|$ is the tunneling operator

The energy eigenvalues are $E_\pm = \pm\frac{1}{2}\sqrt{\epsilon^2 + 4t_c^2}$, producing a characteristic hyperbolic anticrossing with minimum splitting $2t_c$ at $\epsilon = 0$. At large detuning ($|\epsilon| \gg t_c$), the eigenstates approach the localized charge states $|L\rangle$ and $|R\rangle$.

**Key limitation:** Charge noise enters linearly through $\epsilon$ fluctuations, giving a dephasing rate $\Gamma_\phi \propto |\partial E/\partial\epsilon|$. At the **sweet spot** ($\epsilon = 0$), the first-order sensitivity vanishes ($\partial E/\partial\epsilon = 0$), but second-order sensitivity and the intrinsically strong charge-environment coupling still limit $T_2^*$ to the nanosecond scale.

## Motivation

- Demonstrates that **artificial atoms** can be formed from semiconductors with all-electrical quantum control — foundational proof of concept for the entire semiconductor qubit field.
- Extremely fast gate times (<1 ns) due to direct electrical coupling, establishing the speed benchmark for semiconductor qubits.
- Simplest semiconductor qubit, providing a pedagogical and experimental stepping stone to more complex encodings.
- Compatible with semiconductor fabrication technology, motivating the search for charge-noise-insensitive encodings within the same platform.
- The short coherence times directly motivated the development of **spin qubits** (Loss-DiVincenzo, singlet-triplet, exchange-only) that exploit the spin degree of freedom's weaker coupling to charge noise.

## Experimental Status

**First coherent manipulation — Hayashi et al. (2003):**
- Demonstrated coherent charge oscillations in a GaAs/AlGaAs double quantum dot using pulsed gate voltages.
- Observed $T_2^* \sim 1$ ns, confirming the dominant role of charge noise.
- Used a quantum point contact for single-shot charge readout.

**Charge qubit coherence — Petersson et al. (2010):**
- Achieved quantum coherence in a one-electron semiconductor charge qubit with improved gate fidelity.
- Demonstrated $T_2^*$ of a few nanoseconds, limited by $1/f$ charge noise.
- Validated the double-quantum-dot charge qubit as a platform, while highlighting the need for spin-based approaches for longer coherence.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | ~10 ns | Charge relaxation | [Hayashi et al. 2003](https://doi.org/10.1103/PhysRevLett.91.226804) |
| Qubit coherence $T_2^*$ | ~1 ns | Dominated by $1/f$ charge noise | [Hayashi et al. 2003](https://doi.org/10.1103/PhysRevLett.91.226804) |
| Gate time (1Q) | <1 ns | Very fast voltage pulses | — |
| Gate fidelity (1Q) | ~90% | Limited by decoherence | [Petersson et al. 2010](https://doi.org/10.1103/PhysRevLett.105.246804) |
| Readout fidelity | ~95% | Quantum point contact | [Petersson et al. 2010](https://doi.org/10.1103/PhysRevLett.105.246804) |
| Qubit footprint | ~100–200 nm | Double quantum dot pitch | — |
| Operating temperature | 20–100 mK | GaAs or Si heterostructure | — |

## References

### Experimental demonstrations
- T. Hayashi, T. Fujisawa, H. D. Cheong, Y. H. Jeong, and Y. Hirayama, "Coherent Manipulation of Electronic States in a Double Quantum Dot," [Phys. Rev. Lett. **91**, 226804 (2003)](https://doi.org/10.1103/PhysRevLett.91.226804)
- K. D. Petersson, J. R. Petta, H. Lu, and A. C. Gossard, "Quantum Coherence in a One-Electron Semiconductor Charge Qubit," [Phys. Rev. Lett. **105**, 246804 (2010)](https://doi.org/10.1103/PhysRevLett.105.246804)

### Related theory
- T. Fujisawa, T. Hayashi, R. Tomita, and Y. Hirayama, "Bidirectional counting of single electrons," [Science **312**, 1634 (2006)](https://doi.org/10.1126/science.1126788)

## Linked Papers

- [[petersson-2010-semiconductor-charge]]

## Related Entries

- [[loss-divincenzo-qubit]] — spin encoding in the same platform, much longer $T_2$
- [[singlet-triplet-qubit]] — two-electron spin encoding in a double quantum dot
- [[cooper-pair-box-charge-qubit]] — superconducting charge qubit analogue
- [[hybrid-qubit]] — exploits both charge and spin degrees of freedom
- [[silicon-spin-qubit]] — spin qubit in isotopically purified silicon
