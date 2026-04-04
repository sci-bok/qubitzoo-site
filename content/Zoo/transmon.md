---
title: Transmon
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2007
first_demonstrated_year: 2007
keywords:
- transmon
- superconducting qubit
- charge insensitive
- cooper pair box
- josephson junction
- EJ/EC ratio
- circuit qed
- dispersive readout
influence_score: 0.95
last_updated: '2026-03-24'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-audit-2026-03-24
---

## Figure

![[transmon-figure.png]]

## Description

The transmon (short for "transmission-line shunted plasma oscillation qubit") is a superconducting charge qubit derived from the Cooper pair box by dramatically increasing the ratio $E_J/E_C$. Koch et al. (2007) showed that operating at $E_J/E_C \sim 50{-}100$ (vs. $\sim 1$ for the CPB) exponentially suppresses charge dispersion — the sensitivity of transition frequencies to offset charge $n_g$ — while reducing anharmonicity only as a weak power law. This tradeoff is the central design insight: charge noise immunity improves exponentially while the penalty in anharmonicity is manageable.

The large $E_J/E_C$ ratio is achieved by shunting the Josephson junction with a large external capacitance (typically an interdigitated or pad capacitor). The qubit transition frequency $\omega_{01} \approx \sqrt{8E_JE_C} - E_C$ is set by lithographic design, and the anharmonicity $\alpha = \omega_{12} - \omega_{01} \approx -E_C$ is typically $-200$ to $-350\,\text{MHz}$ — small compared to the transition frequency ($\sim 4{-}6\,\text{GHz}$) but large enough for selective microwave control.

The transmon is almost always operated inside a circuit QED architecture: coupled to a coplanar waveguide or 3D cavity resonator for dispersive readout and Purcell-filtered spontaneous emission suppression. It is the dominant qubit modality in current superconducting quantum processors (IBM, Google, Rigetti, IQM, OQC).

## Hamiltonian

The full transmon Hamiltonian is identical to the Cooper pair box:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

where $E_C = e^2/2C_\Sigma$ is the charging energy, $E_J$ is the Josephson energy, $\hat{n}$ is the Cooper pair number operator, $n_g$ is the offset charge, and $\hat{\varphi}$ is the superconducting phase.

In the transmon regime ($E_J/E_C \gg 1$), the charge dispersion of the $m$-th level scales as:

$$\epsilon_m \propto e^{-\sqrt{8E_J/E_C}}$$

while the anharmonicity decreases only algebraically:

$$\alpha \approx -E_C$$

The energy levels approach those of a weakly anharmonic oscillator (Duffing oscillator):

$$E_m \approx -E_J + \sqrt{8E_JE_C}\left(m + \frac{1}{2}\right) - \frac{E_C}{12}(6m^2 + 6m + 3)$$

## Motivation

The Cooper pair box suffered from extreme sensitivity to $1/f$ charge noise, limiting $T_2$ to nanoseconds away from the charge degeneracy point. Active feedback to maintain $n_g = 1/2$ was impractical at scale. The transmon eliminates this problem by operating in a regime where the transition frequency is essentially flat as a function of $n_g$, enabling "set and forget" operation with coherence limited by other mechanisms (dielectric loss, quasiparticles, radiation).

## Experimental Status

**Original proposal and demonstration — Koch et al. (2007):**
- Showed charge dispersion $< 1\,\text{kHz}$ at $E_J/E_C = 50$ (negligible vs. linewidths)
- Anharmonicity $|\alpha| \sim 200{-}350\,\text{MHz}$ sufficient for selective microwave control
- Demonstrated dispersive readout via circuit QED
- Compatible with fixed-frequency (no flux noise) or tunable (split-junction SQUID) variants

**Scaling milestones:**
- **Schreier et al. (2008)**: First experimental demonstration, $T_1 \sim 7\,\mu\text{s}$ in 2D CPW geometry
- **Paik et al. (2011)**: 3D transmon in aluminum cavity, $T_1 > 60\,\mu\text{s}$
- **Barends et al. (2014)**: Google Xmon variant, gate fidelities >99.4% (1Q) and >99.0% (2Q)
- **Arute et al. (2019)**: Google Sycamore, 53-qubit quantum computational advantage demonstration
- **Place et al. (2021)**: Tantalum-based transmon, $T_1 > 300\,\mu\text{s}$ in planar geometry
- **Google Willow (2024)**: 105-qubit processor, below-threshold surface code error correction, 2Q CZ fidelity 99.7–99.85%
- **Tuokkola et al. (2025)**: Aalto University, first transmon to break the millisecond coherence barrier — $T_{2,\text{echo}} = 1.06\,\text{ms}$ (record), median $T_1 = 502\,\mu\text{s}$, quality factor $\sim 8 \times 10^6$; planar geometry fabricated in academic cleanrooms
- **Bland et al. (2025)**: Princeton, tantalum-on-high-resistivity-silicon 2D transmon — $T_1$ up to $1.68\,\text{ms}$, time-averaged $Q$ up to $1.5 \times 10^7$; 1Q gate fidelity 99.994%; mean $T_1 = 0.45 \pm 0.18\,\text{ms}$ across 45 qubits on 9 chips
- **IQM (2025)**: Record 2Q CZ fidelity of 99.95% (max) / 99.93% (40-hour averaged), 1Q fidelity >99.98%, simultaneous readout fidelity 99.94%; achieved via the PALEA leakage reduction protocol

State-of-the-art (as of late 2025): $T_1$ up to $1.68\,\text{ms}$ (planar, tantalum on silicon), $T_{2,\text{echo}}$ up to $1.06\,\text{ms}$; 1Q gate fidelity up to 99.9926% (Z. Li et al. 2023); 2Q CZ fidelity up to 99.95% (IQM 2025).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 100 μs – 1.68 ms | Typical planar: ~100–500 μs; SOTA planar (Ta on Si): 1.68 ms | [Bland et al. 2025](https://doi.org/10.1038/s41586-025-09687-4) |
| $T_2$ (echo) | 100 μs – 1.06 ms | Often $T_2 \approx 2T_1$ with echo; SOTA 1.06 ms | [Tuokkola et al. 2025](https://doi.org/10.1038/s41467-025-61126-0) |
| Anharmonicity $\alpha/2\pi$ | −200 to −350 MHz | $\approx -E_C/\hbar$ | [Koch et al. 2007](https://doi.org/10.1103/PhysRevA.76.042319) |
| $E_J/E_C$ | 20–100 | Typical operating regime | [Koch et al. 2007](https://doi.org/10.1103/PhysRevA.76.042319) |
| 1Q gate fidelity | 99.9–99.99% | RB; SOTA 99.9926% (error 7.42 × 10⁻⁵) | [Z. Li et al. 2023](https://doi.org/10.1038/s41534-023-00781-x) |
| 2Q gate fidelity (CZ/CR) | 99.0–99.95% | Tunable coupler or cross-resonance; IQM SOTA 99.95% (max), 99.93% (40-hr avg) | [IQM 2025](https://meetiqm.com/blog/quantum-fidelity-milestone/) |
| Readout fidelity | 97–99.9% | Dispersive, with Purcell filter + JPA | [Arute et al. 2019](https://doi.org/10.1038/s41586-019-1666-5) |
| Gate time (1Q) | 20–50 ns | DRAG pulse | — |
| Gate time (2Q) | 100–400 ns | Depends on gate scheme | — |
| Transition frequency | 4–6 GHz | Design-tunable | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |
| Chip footprint per qubit | ~300 μm × 300 μm | Pad + junction + readout resonator | — |

## Scaling Considerations

- **Frequency crowding**: as qubit count grows, avoiding spectral collisions between qubits, readout resonators, and two-level system (TLS) defects becomes exponentially harder. This is a primary challenge for large-scale fixed-frequency transmon arrays.
- **Low anharmonicity**: the $|\alpha| \sim 200{-}350\,\text{MHz}$ anharmonicity, while sufficient for current gate speeds, causes persistent leakage to $|2\rangle$ and higher levels at faster gate rates. Competitors like fluxonium offer $\sim 10\times$ higher anharmonicity.
- **TLS defect losses**: two-level system defects at material interfaces (metal–substrate, metal–air, substrate–air) are the dominant source of $T_1$ variability and the primary obstacle to uniform coherence across large arrays.
- **Quasiparticle poisoning**: nonequilibrium quasiparticles limit $T_1$ and cause parity switching events. Mitigation strategies (normal-metal traps, phonon engineering) are active areas of research.
- **Residual ZZ coupling**: always-on parasitic $ZZ$ interaction between neighboring transmons is a significant source of correlated errors in multi-qubit systems, requiring careful frequency allocation or dynamical decoupling.
- **Cryogenic I/O overhead**: each qubit requires dedicated microwave control and readout lines routed to the 10–20 mK stage of a dilution refrigerator ($\sim \$500\text{K}+$). Scaling to $10^4+$ qubits demands multiplexing, cryo-CMOS control, or photonic interconnects.

## References

### Original proposal
- J. Koch et al., "Charge-insensitive qubit design derived from the Cooper pair box," [PRA 76, 042319 (2007)](https://doi.org/10.1103/PhysRevA.76.042319) — [arXiv:cond-mat/0703002](https://arxiv.org/abs/cond-mat/0703002)

### Key experimental milestones
- J. A. Schreier et al., "Suppressing charge noise decoherence in superconducting charge qubits," [PRB 77, 180502(R) (2008)](https://doi.org/10.1103/PhysRevB.77.180502) — first experimental transmon
- H. Paik et al., "Observation of high coherence in Josephson junction qubits measured in a three-dimensional circuit QED architecture," [PRL 107, 240501 (2011)](https://doi.org/10.1103/PhysRevLett.107.240501) — 3D transmon
- R. Barends et al., "Superconducting quantum circuits at the surface code threshold for fault tolerance," [Nature 508, 500 (2014)](https://doi.org/10.1038/nature13171) — Xmon, surface code threshold
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505 (2019)](https://doi.org/10.1038/s41586-019-1666-5) — Sycamore, 53 qubits
- A. P. M. Place et al., "New material platform for superconducting transmon qubits with coherence times exceeding 0.3 milliseconds," [Nature Commun. 12, 1779 (2021)](https://doi.org/10.1038/s41467-021-22030-5) — tantalum transmon
- Google Quantum AI, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2024)](https://doi.org/10.1038/s41586-024-08449-y) — Willow, 105 qubits
- M. Tuokkola et al., "Methods to achieve near-millisecond energy relaxation and dephasing times for a superconducting transmon qubit," [Nature Commun. 16, 5421 (2025)](https://doi.org/10.1038/s41467-025-61126-0) — [arXiv:2407.18778](https://arxiv.org/abs/2407.18778) — first ms-scale T₂ in transmon
- M. P. Bland et al., "Millisecond lifetimes and coherence times in 2D transmon qubits," [Nature 647, 343 (2025)](https://doi.org/10.1038/s41586-025-09687-4) — [arXiv:2503.14798](https://arxiv.org/abs/2503.14798) — Ta-on-Si, T₁ up to 1.68 ms

### Gate optimization
- F. Motzoi et al., "Simple pulses for elimination of leakage in weakly nonlinear qubits," [PRL 103, 110501 (2009)](https://doi.org/10.1103/PhysRevLett.103.110501) — DRAG pulse
- Z. Li et al., "Error per single-qubit gate below 10⁻⁴ in a superconducting qubit," [npj Quantum Info. 9, 111 (2023)](https://doi.org/10.1038/s41534-023-00781-x) — [arXiv:2302.08690](https://arxiv.org/abs/2302.08690) — SOTA 1Q error rate 7.42 × 10⁻⁵ (fidelity 99.9926%)

## Linked Papers
- [[koch-2007-transmon]]

## Related Entries
- [[cooper-pair-box-charge-qubit]] — ancestor (charge-sensitive limit)
- [[circuit-qed]] — readout and coupling architecture
- [[fluxonium]] — alternative SC qubit with higher anharmonicity
- [[xmon]] — planar transmon variant (Google)
- [[gmon]] — tunable-coupler transmon variant (Google)
- [[dual-rail-superconducting-qubit]] — encoded transmon-pair qubit
- [[microwave-photonic-qubit]] — flying qubits generated by shaped transmon emission
