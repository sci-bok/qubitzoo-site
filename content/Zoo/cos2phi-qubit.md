---
title: cos(2φ) Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2019
first_demonstrated_year: 2020
keywords:
- cos2phi
- protected qubit
- charge noise
- flux noise
- superconducting
- disjoint support
- two-Cooper-pair tunneling
influence_score: 0.60
last_updated: '2026-08-01'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-08-01
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/cos2phi-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-02"
figure_reviewed_at: "2026-08-02T13:57:26.397966+00:00"
---

## Figure

![[cos2phi-qubit-figure.png]]

## Description

The cos(2φ) qubit is a parity-protected superconducting qubit built around a Josephson element whose energy is approximately $\pi$-periodic in the superconducting phase. In the ideal limit, the element coherently transfers pairs of Cooper pairs (charge $4e$), producing a $-E_2\cos(2\phi)$ potential and conserving the parity of the Cooper-pair number on the island.

The two lowest energy eigenstates belong to opposite Cooper-pair-parity sectors: one contains only even charge states and the other only odd charge states. They are not simply wavefunctions localized in the two phase wells. Rather, phase-localized states near $\phi=0$ and $\phi=\pi$ are superpositions of the even- and odd-parity eigenstates. This complementary charge/phase structure is the origin of the protection proposed by Smith et al. (2020), and it must be stated with a basis convention: the same pair of states cannot simultaneously be described as both parity eigenstates and localized well states.

Parity conservation suppresses charge-induced transitions between the qubit eigenstates. Practical devices generate the second harmonic by destructive interference of odd Josephson harmonics near half a flux quantum, or by engineering an intrinsically strong charge-$4e$ current-phase relation. Residual first-harmonic terms break the parity symmetry, while fluctuations in the interference loop can make the device strongly sensitive to flux noise.

The platform is now experimentally demonstrated. Larsen et al. observed a tenfold relaxation suppression in a semiconductor-junction interferometer in 2020. In 2026, Roverc'h et al. and Zhurbina et al. independently realized cos(2φ)-dominated transmon-like qubits with coherent control. Both 2026 studies identified flux noise associated with imperfect first-harmonic cancellation as the principal remaining limitation, so the architecture does not generically provide simultaneous exponential protection from every local noise channel.

## Hamiltonian

An ideal single-mode model is

$$H_{\mathrm{ideal}} = 4E_C(\hat{N}-N_g)^2-E_2\cos(2\hat{\phi}),$$

where $\hat N$ counts Cooper pairs on the island, $N_g$ is the offset charge, and $E_2$ is the coherent two-Cooper-pair tunneling amplitude. Because $\cos(2\hat\phi)$ changes $N$ only by $\pm2$,

$$[H_{\mathrm{ideal}},(-1)^{\hat N}]=0.$$

The qubit eigenstates may therefore be labeled by Cooper-pair parity,

$$|+\rangle=\sum_k c_{2k}|2k\rangle,\qquad |-\rangle=\sum_k c_{2k+1}|2k+1\rangle.$$

The states localized near the two minima of the phase potential are instead approximately

$$|\circlearrowright/\circlearrowleft\rangle\approx\frac{|+\rangle\pm|-\rangle}{\sqrt2},$$

with centers separated by $\pi$. Charge-local operators cannot connect the two parity sectors in the ideal limit, while the two localized phase states acquire exponentially small overlap as $E_2/E_C$ grows. A practical interference-based device is better represented by

$$H = 4E_C(\hat N-N_g)^2-E_1(\Phi_{\mathrm{ext}})\cos\hat\phi-E_2(\Phi_{\mathrm{ext}})\cos(2\hat\phi)+\cdots,$$

where the intended operating point has $E_1\approx0$. Residual $E_1$ and flux fluctuations explicitly limit the protection. The earlier entry's added $E_L\hat\phi^2/2$ term described one specific superinductive implementation, not the generic ideal cos(2φ) qubit.

## Motivation

- **Parity selection rule:** A dominant second harmonic separates the qubit eigenstates into even and odd Cooper-pair-number sectors, strongly suppressing charge-coupled relaxation.
- **Hardware-level error bias:** Intrinsic selection rules can reduce selected physical error channels and potentially lower, but not eliminate, the overhead of active quantum error correction.
- **Test of engineered Josephson harmonics:** The architecture directly probes whether interference or material engineering can produce a sufficiently pure charge-$4e$ tunneling element.
- **Clear engineering target:** Progress can be measured through odd-harmonic suppression, charge-matrix-element suppression, and the residual flux-noise floor.

## Experimental Status

- **2020 — first parity-protection experiment:** Larsen et al. used gate-tunable semiconductor Josephson junctions in a half-flux interferometer and observed a tenfold suppression of relaxation in the protected regime.
- **2025 — high-purity second-harmonic element:** Leblanc et al. demonstrated a planar-Ge SQUID whose $\sin(2\phi)$ contribution reached 95.2% of the total supercurrent. This was an enabling element, not yet a complete qubit benchmark.
- **2026 — soft-transmon realization:** Roverc'h et al. measured a 13.6 MHz opposite-parity doublet, a 100-fold suppression of the island charge matrix element, coherent control, and single-shot readout. The measured $T_1=70\,\mu\mathrm{s}$ and $T_2^{\mathrm{echo}}=2.5\,\mu\mathrm{s}$ were limited by $1/f$ flux noise.
- **2026 — independent Fourier-engineered realization:** Zhurbina et al. suppressed odd harmonics in a multi-junction circuit and reproduced the expected cos(2φ) spectrum, but again found flux noise from residual first-harmonic fluctuations to be the limiting mechanism.
- **2026 — practical limit identified:** Messelot et al. showed that interference-based implementations retain a charge-versus-flux-noise tradeoff; their modeling permits millisecond-scale $T_1$ in favorable regimes while $T_\phi$ remains limited to a few microseconds with present parameters.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Relaxation suppression | 10× | First semiconductor-interferometer parity-protection experiment | [Larsen et al. 2020](https://doi.org/10.1103/PhysRevLett.125.056801) |
| Second-harmonic current fraction | 95.2% | Planar-Ge $\sin(2\phi)$ Josephson element; enabling component rather than a complete qubit | [Leblanc et al. 2025](https://doi.org/10.1038/s41467-025-56245-7) |
| Opposite-parity splitting | 13.6 MHz | Soft-transmon cos(2φ) realization | [Roverc'h et al. 2026](https://arxiv.org/abs/2603.13114) |
| Charge-matrix-element suppression | 100× | Relative to the unprotected plasmon transition; dielectric-loss limit above 10 ms | [Roverc'h et al. 2026](https://arxiv.org/abs/2603.13114) |
| Measured coherence | $T_1=70\,\mu\mathrm{s}$; $T_2^{\mathrm{echo}}=2.5\,\mu\mathrm{s}$ | Limited by $1/f$ flux noise, not charge-induced loss | [Roverc'h et al. 2026](https://arxiv.org/abs/2603.13114) |

## Scaling Considerations

- **Odd-harmonic purity:** Interference-based implementations require precise junction matching and half-flux biasing; a small residual $E_1\cos\phi$ term breaks Cooper-pair parity.
- **Flux-noise exposure:** The same loop used to cancel odd harmonics introduces a sensitive flux degree of freedom. Both 2026 experiments found this to be the dominant coherence limitation.
- **Control versus protection:** A strongly protected transition also becomes difficult to drive and read out. Practical protocols may temporarily weaken the symmetry or couple through an auxiliary mode.
- **Fabrication routes:** Semiconductor weak links and multi-junction Fourier engineering offer tunability, while intrinsically clean charge-$4e$ elements could reduce the need for fine cancellation.
- **QEC remains necessary:** Present devices suppress selected matrix elements but do not remove leakage, control error, quasiparticles, flux noise, or correlated faults.

## References

### Original proposal
- W. C. Smith et al., "Superconducting circuit protected by two-Cooper-pair tunneling," [npj Quantum Inf. 6, 8 (2020)](https://doi.org/10.1038/s41534-019-0231-2) — [arXiv:1905.01206](https://arxiv.org/abs/1905.01206)

### Experimental milestones
- T. W. Larsen et al., "Parity-Protected Superconductor-Semiconductor Qubit," [Phys. Rev. Lett. 125, 056801 (2020)](https://doi.org/10.1103/PhysRevLett.125.056801) — [arXiv:2004.03975](https://arxiv.org/abs/2004.03975)
- A. Leblanc et al., "Gate- and flux-tunable sin(2φ) Josephson element with planar-Ge junctions," [Nature Communications 16, 1010 (2025)](https://doi.org/10.1038/s41467-025-56245-7)
- E. Roverc'h et al., "Experimental realization of a cos(2φ) transmon qubit," [arXiv:2603.13114 (2026)](https://arxiv.org/abs/2603.13114)
- N. K. Zhurbina et al., "Coherence limitations of a Fourier-engineered cos(2φ) transmon qubit," [arXiv:2605.06372 (2026)](https://arxiv.org/abs/2605.06372)

### Related theory
- P. Brooks, A. Kitaev, and J. Preskill, "Protected gates for superconducting qubits," [Phys. Rev. A 87, 052306 (2013)](https://doi.org/10.1103/PhysRevA.87.052306) — [arXiv:1302.4122](https://arxiv.org/abs/1302.4122)
- S. Messelot et al., "Coherence limits in the interference-based cos(2φ) qubits," [Physical Review Applied, accepted 10 June 2026](https://doi.org/10.1103/x4vn-51dj) — [arXiv:2601.10209](https://arxiv.org/abs/2601.10209)

## Linked Papers

- [[smith-2020-superconducting-circuit-protected]]
- [[larsen-2020-parity-protected-superconductor-semiconductor-qubit]]
- [[leblanc-2025-gate-flux-tunable-sin2phi-element]]
- [[roverch-2026-experimental-cos2phi-transmon]]
- [[zhurbina-2026-coherence-limitations-of-a]]
- [[brooks-2013-0-pi-qubit]]
- [[messelot-2026-coherence-limits-cos2phi-qubits]]
- [[kalashnikov-2019-cos2phi]]

## Evergreen context

- [[cos2phi]] — the second-harmonic circuit element that gives the qubit its π-periodic protected potential
- [[charge-noise-sweet-spot]] — the qubit is best understood as an engineered multi-axis sweet spot against both charge and flux fluctuations
- [[josephson-junction-as-nonlinear-element]] — standard Josephson physics is being interference-cancelled here to expose the protected $\cos(2\phi)$ term

## Related Entries

- [[0-pi-qubit]] — Related protected qubit with $\cos(\phi)$ potential at $\pi$-sweet spot
- [[fluxonium]] — Uses superinductance but has $2\pi$-periodic potential
- [[heavy-fluxonium-qubit]] — Heavy variant approaching protected regime
- [[blochnium]] — Single-junction superinductance qubit
- [[transmon]] — conventional transmon that cos(2φ) qubit improves upon via disjoint support
- [[gatemonium]] — another higher-harmonic semiconductor-junction route to protected superconducting operation
- [[ferbo-qubit]] — protected superconductor-semiconductor alternative using Andreev–bosonic hybridization rather than Cooper-pair parity
