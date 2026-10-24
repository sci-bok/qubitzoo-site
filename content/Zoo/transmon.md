---
title: Transmon
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 2007
first_demonstrated_year: 2008
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
last_updated: '2026-10-24'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-audit-2026-10-24
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/transmon-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:46.480117+00:00"
---

## Figure

![[transmon-figure.png]]

## Description

The transmon (short for "transmission-line shunted plasma oscillation qubit") is a superconducting charge qubit derived from the Cooper pair box by dramatically increasing the ratio $E_J/E_C$. Koch et al. (2007) showed that operating at $E_J/E_C \sim 50{-}100$ (vs. $\sim 1$ for the CPB) exponentially suppresses charge dispersion — the sensitivity of transition frequencies to offset charge $n_g$ — while reducing anharmonicity only as a weak power law. This tradeoff is the central design insight: charge noise immunity improves exponentially while the penalty in anharmonicity is manageable.

The large $E_J/E_C$ ratio is achieved by shunting the Josephson junction with a large external capacitance (typically an interdigitated or pad capacitor). To leading order, the qubit transition obeys $\hbar\omega_{01} \approx \sqrt{8E_JE_C} - E_C$, and the angular-frequency anharmonicity $\alpha = \omega_{12} - \omega_{01}$ obeys $\hbar\alpha \approx -E_C$. Thus $\alpha/2\pi$ is typically $-200$ to $-350\,\text{MHz}$ — small compared with $\omega_{01}/2\pi \sim 4{-}6\,\text{GHz}$ but large enough for selective microwave control.

The transmon is almost always operated inside a circuit QED architecture: coupled to a coplanar waveguide or 3D cavity resonator for dispersive readout and Purcell-filtered spontaneous emission suppression. It is the dominant qubit modality in current superconducting quantum processors (IBM, Google, Rigetti, IQM, OQC).

## Hamiltonian

The full transmon Hamiltonian is identical to the Cooper pair box:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

where $E_C = e^2/2C_\Sigma$ is the charging energy, $E_J$ is the Josephson energy, $\hat{n}$ is the Cooper pair number operator, $n_g$ is the offset charge, and $\hat{\varphi}$ is the superconducting phase.

In the transmon regime ($E_J/E_C \gg 1$), the charge dispersion of the $m$-th level scales as:

$$\epsilon_m \propto e^{-\sqrt{8E_J/E_C}}$$

while the anharmonicity decreases only algebraically:

$$\hbar\alpha \approx -E_C, \qquad \alpha \equiv \omega_{12}-\omega_{01}$$

The energy levels approach those of a weakly anharmonic oscillator (Duffing oscillator):

$$E_m \approx -E_J + \sqrt{8E_JE_C}\left(m + \frac{1}{2}\right) - \frac{E_C}{12}(6m^2 + 6m + 3)$$

## Motivation

The Cooper pair box suffered from extreme sensitivity to $1/f$ charge noise, limiting $T_2$ to nanoseconds away from the charge degeneracy point. Active feedback to maintain $n_g = 1/2$ was impractical at scale. The transmon eliminates this problem by operating in a regime where the transition frequency is essentially flat as a function of $n_g$, enabling "set and forget" operation with coherence limited by other mechanisms (dielectric loss, quasiparticles, radiation).

## Experimental Status

**Original proposal — Koch et al. (2007):**
- Predicted exponentially suppressed charge dispersion in the large-$E_J/E_C$ regime while retaining usable anharmonicity
- Developed the circuit-QED coupling and dispersive-readout theory for the new design
- Established compatibility with fixed-frequency or flux-tunable split-junction variants

**Scaling milestones:**
- **Schreier et al. (2008)**: First experimental demonstration, $T_1 \sim 7\,\mu\text{s}$ in 2D CPW geometry
- **Paik et al. (2011)**: 3D transmon in aluminum cavity, $T_1 > 60\,\mu\text{s}$
- **Barends et al. (2014)**: Google Xmon variant, gate fidelities >99.4% (1Q) and >99.0% (2Q)
- **Arute et al. (2019)**: Google Sycamore, 53-qubit quantum computational advantage demonstration
- **Place et al. (2021)**: Tantalum-based transmon, $T_1 > 300\,\mu\text{s}$ in planar geometry
- **Google Quantum AI (online 2024; archival 2025)**: Willow-class 105-qubit processor with below-threshold surface-code error correction and median 2Q CZ errors of 0.15–0.3%
- **Tuokkola et al. (2025)**: Aalto University, first transmon to break the millisecond coherence barrier — $T_{2,\text{echo}} = 1.06\,\text{ms}$ (record), median $T_1 = 502\,\mu\text{s}$, quality factor $\sim 8 \times 10^6$; planar geometry fabricated in academic cleanrooms
- **Bland et al. (2025)**: Princeton, tantalum-on-high-resistivity-silicon 2D transmon — $T_1$ up to $1.68\,\text{ms}$, time-averaged $Q$ up to $1.5 \times 10^7$; 1Q gate fidelity 99.994%; mean $T_1 = 0.45 \pm 0.18\,\text{ms}$ across 45 qubits on 9 chips
- **Marxer et al. (2026)**: Peer-reviewed simultaneous-operation benchmark on an IQM transmon device — 99.93% CZ fidelity averaged over 40 hours, simultaneous 1Q fidelities above 99.98%, and readout fidelities above 99.94%; PALEA was used to calibrate coherent CZ error and leakage
- **Gao et al. (2026)**: 6.8 ns $X$ and $X/2$ gates above 99.98% fidelity with leakage below $2\times10^{-5}$, using recursive DRAG corrections that suppress higher-order multiphoton transitions

State-of-the-art snapshot (October 2026): planar tantalum-on-silicon transmons have reached $T_1=1.68\,\text{ms}$ and 99.994% 1Q fidelity (Bland et al. 2025), while the longest cited echo dephasing result is $T_{2,\text{echo}}=1.06\,\text{ms}$ (Tuokkola et al. 2025). For balanced device operation rather than a cherry-picked maximum, Marxer et al. report a 40-hour-averaged CZ fidelity of 99.93% alongside >99.98% simultaneous 1Q and >99.94% readout fidelities. Gao et al. set a complementary speed benchmark of >99.98% fidelity at 6.8 ns.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 100 μs – 1.68 ms | Typical planar: ~100–500 μs; SOTA planar (Ta on Si): 1.68 ms | [Bland et al. 2025](https://doi.org/10.1038/s41586-025-09687-4) |
| $T_2$ (echo) | 100 μs – 1.06 ms | Often $T_2 \approx 2T_1$ with echo; SOTA 1.06 ms | [Tuokkola et al. 2025](https://doi.org/10.1038/s41467-025-61126-0) |
| Anharmonicity $\alpha/2\pi$ | −200 to −350 MHz | $\approx -E_C/h$ | [Koch et al. 2007](https://doi.org/10.1103/PhysRevA.76.042319) |
| $E_J/E_C$ | 20–100 | Typical operating regime | [Koch et al. 2007](https://doi.org/10.1103/PhysRevA.76.042319) |
| 1Q gate fidelity | 99.9–99.994% | RB; best cited value is 99.994% on Ta-on-Si | [Bland et al. 2025](https://doi.org/10.1038/s41586-025-09687-4) |
| 2Q CZ fidelity | 99.0–99.93% | 99.93% averaged over 40 hours on a tunable-coupler device | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |
| Readout fidelity | 97–99.94% | Dispersive readout with Purcell filtering and near-quantum-limited amplification | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |
| Gate time (1Q) | 6.8–50 ns | 6.8 ns $X$/$X/2$ gates demonstrated above 99.98% fidelity | [Gao et al. 2026](https://doi.org/10.1038/s41467-026-78373-4) |
| Gate time (2Q CZ) | 33–400 ns | 33 ns total duration for the 99.93% PALEA-calibrated CZ benchmark | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |
| Transition frequency | 4–6 GHz | Representative audited devices operated at 4.80–5.32 GHz | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88); [Gao et al. 2026](https://doi.org/10.1038/s41467-026-78373-4) |
| Operating temperature | ~10 mK | Dilution-refrigerator mixing-chamber stage | [Marxer et al. 2026](https://doi.org/10.1103/n86s-2b88) |

## Scaling Considerations

- **Frequency crowding**: as qubit count grows, avoiding spectral collisions between qubits, readout resonators, and two-level system (TLS) defects becomes increasingly difficult. This is a primary challenge for large-scale fixed-frequency transmon arrays.
- **Low anharmonicity**: the $|\alpha| \sim 200{-}350\,\text{MHz}$ anharmonicity, while sufficient for current gate speeds, causes persistent leakage to $|2\rangle$ and higher levels at faster gate rates. Competitors like fluxonium offer $\sim 10\times$ higher anharmonicity.
- **TLS defect losses**: two-level system defects at material interfaces (metal–substrate, metal–air, substrate–air) are the dominant source of $T_1$ variability and the primary obstacle to uniform coherence across large arrays.
- **Quasiparticle poisoning**: nonequilibrium quasiparticles limit $T_1$ and cause parity switching events. Mitigation strategies (normal-metal traps, phonon engineering) are active areas of research.
- **Residual ZZ coupling**: always-on parasitic $ZZ$ interaction between neighboring transmons is a significant source of correlated errors in multi-qubit systems, requiring careful frequency allocation or dynamical decoupling.
- **Cryogenic I/O overhead**: dedicated microwave control, flux-bias, and readout wiring carries heat and consumes routing volume at the mixing-chamber stage. Large-scale systems therefore require aggressive multiplexing, cryogenic control electronics, or alternative interconnects.

## References

### Original proposal
- J. Koch et al., "Charge-insensitive qubit design derived from the Cooper pair box," [PRA 76, 042319 (2007)](https://doi.org/10.1103/PhysRevA.76.042319) — [arXiv:cond-mat/0703002](https://arxiv.org/abs/cond-mat/0703002)

### Key experimental milestones
- J. A. Schreier et al., "Suppressing charge noise decoherence in superconducting charge qubits," [PRB 77, 180502(R) (2008)](https://doi.org/10.1103/PhysRevB.77.180502) — first experimental transmon
- H. Paik et al., "Observation of high coherence in Josephson junction qubits measured in a three-dimensional circuit QED architecture," [PRL 107, 240501 (2011)](https://doi.org/10.1103/PhysRevLett.107.240501) — 3D transmon
- R. Barends et al., "Superconducting quantum circuits at the surface code threshold for fault tolerance," [Nature 508, 500 (2014)](https://doi.org/10.1038/nature13171) — Xmon, surface code threshold
- F. Arute et al., "Quantum supremacy using a programmable superconducting processor," [Nature 574, 505 (2019)](https://doi.org/10.1038/s41586-019-1666-5) — Sycamore, 53 qubits
- A. P. M. Place et al., "New material platform for superconducting transmon qubits with coherence times exceeding 0.3 milliseconds," [Nature Commun. 12, 1779 (2021)](https://doi.org/10.1038/s41467-021-22030-5) — tantalum transmon
- Google Quantum AI and Collaborators, "Quantum error correction below the surface code threshold," [Nature 638, 920 (2025)](https://doi.org/10.1038/s41586-024-08449-y) — [arXiv:2408.13687](https://arxiv.org/abs/2408.13687) — Willow-class 105-qubit processor
- M. Tuokkola et al., "Methods to achieve near-millisecond energy relaxation and dephasing times for a superconducting transmon qubit," [Nature Commun. 16, 5421 (2025)](https://doi.org/10.1038/s41467-025-61126-0) — [arXiv:2407.18778](https://arxiv.org/abs/2407.18778) — first ms-scale T₂ in transmon
- M. P. Bland et al., "Millisecond lifetimes and coherence times in 2D transmon qubits," [Nature 647, 343 (2025)](https://doi.org/10.1038/s41586-025-09687-4) — [arXiv:2503.14798](https://arxiv.org/abs/2503.14798) — Ta-on-Si, T₁ up to 1.68 ms

### Gate optimization
- F. Motzoi et al., "Simple pulses for elimination of leakage in weakly nonlinear qubits," [PRL 103, 110501 (2009)](https://doi.org/10.1103/PhysRevLett.103.110501) — DRAG pulse
- Z. Li et al., "Error per single-qubit gate below 10⁻⁴ in a superconducting qubit," [npj Quantum Info. 9, 111 (2023)](https://doi.org/10.1038/s41534-023-00781-x) — [arXiv:2302.08690](https://arxiv.org/abs/2302.08690) — SOTA 1Q error rate 7.42 × 10⁻⁵ (fidelity 99.9926%)
- F. Marxer et al., "Above 99.9% Fidelity Single-Qubit Gates, Two-Qubit Gates, and Readout in a Single Superconducting Quantum Device," [PRX Quantum 7 (2026)](https://doi.org/10.1103/n86s-2b88) — [arXiv:2508.16437](https://arxiv.org/abs/2508.16437) — simultaneous high-fidelity 1Q, CZ, and readout benchmark
- Y. Gao et al., "Ultrafast single-qubit gates through multi-photon transition removal," [Nature Commun. 17, 10874 (2026)](https://doi.org/10.1038/s41467-026-78373-4) — [arXiv:2511.22365](https://arxiv.org/abs/2511.22365) — 6.8 ns low-leakage transmon gates

## Linked Papers
- [[koch-2007-transmon]]
- [[acharya-2025-error-correction-below]]
- [[arute-2019-supremacy-programmable-superconducting]]
- [[barends-2013-xmon]]
- [[barends-2014-superconducting-circuits-surface]]
- [[bland-2025-millisecond-lifetimes-coherence]]
- [[campbell-2020-composite-qubit]]
- [[casparis-2018-ge-gatemon]]
- [[chen-2014-gmon]]
- [[divincenzo-2000-physical-implementation]]
- [[fowler-2012-surface-code-roadmap]]
- [[larsen-2015-gatemon]]
- [[levine-2024-dual-rail-erasure]]
- [[li-2023-error-per-single]]
- [[marxer-2026-above-99-9-fidelity]]
- [[gao-2026-ultrafast-single-qubit-gates]]
- [[madon-2021-mergemon]]
- [[motzoi-2009-simple-pulses-elimination]]
- [[nakamura-1999-cpb-coherent-oscillation]]
- [[paik-2011-observation-high-coherence]]
- [[place-2021-material-platform-superconducting]]
- [[purkayastha-2025-sn-inas-gatemon]]
- [[schreier-2008-suppressing-charge-noise]]
- [[sun-2026-junction-intrinsic-dissipation-in-hybrid]]
- [[sung-2021-parametric-coupler]]
- [[tuokkola-2025-methods-achieve-near]]
- [[walter-2017-rapid-readout]]
- [[yan-2018-tunable-coupler]]
- [[zhao-2020-mergemon]]
- [[wu-2026-demonstrating-advantages-of-dynamic]]
- [[lu-2026-dynamically-suppressing-cavity-dephasing]]
- [[qiao-2026-transducer-leakage-error-suppression]]
- [[wysocki-2026-detailed-interpretable-characterization-of]]
- [[li-2026-high-fidelity-control-of]]
- [[salmanogli-2026-a-unified-quantum-neural]]
- [[yang-2026-the-gain-engineered-transmon]]
- [[direkci-2026-dissipatively-stabilized-0-n-fock]]
- [[spring-2026-low-leakage-superconducting-qubit-measurement]]
- [[zhou-2026-superconducting-flux-memory-for]]
- [[fontaine-2026-programming-anharmonic-potentials-in]]
- [[luca-2026-implementation-of-quantum-gates]]
- [[lyngfelt-2026-analog-quantum-simulation-of]]
- [[guan-2026-mitigating-capacitive-loading-enables]]
- [[lisenfeld-2026-readout-failures-in-superconducting]]
- [[kubo-2026-instantaneous-frame-theory-of-strongly]]
- [[gohar-2026-the-halo-engine-mathcal-o-1-step]]
- [[liu-2026-two-qubit-gates-for-the]]
- [[kang-2026-quantum-simulation-of-two-dimensional]]
- [[geisert-2026-parametric-two-qubit-gates-via]]
- [[park-2026-an-all-van-der-waals-qubit]]
- [[heunisch-2026-analytic-leakage-suppression-with]]
- [[hajr-2026-dynamically-protected-erasure-qubit]]
- [[haug-2026-a-quasiparticle-protected-superconducting-qubit]]
- [[franzen-2026-deterministic-and-programmable-generation]]
- [[yuan-2026-experimental-realization-of-a]]
- [[wang-2026-quantum-enhanced-search-for-galactic]]
- [[machino-2026-zz-free-bswap-gates-under]]
- [[fechant-2026-superconducting-circuits-host-two-level]]
- [[richard-2026-accurate-gap-control-of]]
- [[chen-2026-controlled-z-gates-via-floquet]]
- [[huang-2026-high-fidelity-and-robust-controlled-z]]

## Evergreen context

- [[charge-noise-in-superconducting-qubits]] — why the transmon exists at all
- [[charge-noise-sweet-spot]] — the design pattern behind large-`E_J/E_C` operation
- [[josephson-junction-as-nonlinear-element]] — the circuit element that provides the weak anharmonicity
- [[coherence-time-hierarchy]] — how to interpret the `T_1`, `T_2`, and echo numbers in the metrics table
- [[jaynes-cummings-in-circuits]] — the transmon usually enters circuit QED through the same one-qubit, one-mode interaction that later gets reduced into dispersive readout and cavity-mediated coupling pictures
- [[dispersive-readout-mechanism]] — the cQED readout architecture that let the transmon replace destructive tunneling-style superconducting measurements
- [[purcell-protection-via-detuning]] — why transmons are usually parked far enough from their readout resonators, and then paired with Purcell filters, to keep fast measurement from quietly shortening $T_1$

## Related Entries
- [[cooper-pair-box-charge-qubit]] — ancestor (charge-sensitive limit)
- [[circuit-qed]] — readout and coupling architecture
- [[fluxonium]] — alternative SC qubit with higher anharmonicity
- [[xmon]] — planar transmon variant (Google)
- [[gmon]] — tunable-coupler transmon variant (Google)
- [[dual-rail-superconducting-qubit]] — encoded transmon-pair qubit
- [[tunable-coupler]] — suppresses idle coupling while enabling fast entangling gates
- [[qubit-readout]] — dispersive measurement, Purcell filtering, and amplifier chain
