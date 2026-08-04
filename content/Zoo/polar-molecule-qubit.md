---
title: Polar-Molecule Qubit
entry_type: qubit
technology_family: Molecular
status: demonstrated
figure_reviewed: true
figure_renderer: "openai-imagegen"
figure_model: "gpt-image-2"
figure_provenance: "Figures/polar-molecule-qubit-figure.provenance.json"
figure_reviewed_by: "Scibok deep audit 2026-08-04"
figure_reviewed_at: "2026-08-04T14:06:44Z"
first_proposed_year: 2002
first_demonstrated_year: 2024
keywords: [polar molecule, NaCs, rotational qubit, hyperfine qubit, dipole-dipole interaction, optical tweezer, iSWAP]
influence_score: 0.76
last_updated: '2026-08-04'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-08-04
---

## Figure

![[polar-molecule-qubit-figure.png]]

## Description

A polar-molecule qubit encodes information in rotational and hyperfine states of an individually trapped ultracold molecule. Long-lived hyperfine states in the rotational ground manifold provide storage, while microwave transfer to a rotationally excited state activates resonant electric dipole-dipole exchange between nearby molecules. This separates memory from interaction without changing particles.

The platform is distinct from chemically synthesized molecular spin qubits: here intact diatomic molecules such as NaCs are assembled and trapped in optical tweezers, individually addressed, and coupled through their permanent electric dipoles.

The same internal structure also supports qudit encodings and many-body entanglement. Recent work has extended the platform from two-molecule gates to simultaneous multilevel coherence, spin squeezing in molecular arrays, geometry-stabilized entanglement, and hybrid atom-molecule interfaces. The 2026 results remain preprints and should be treated as provisional until peer review.

## Hamiltonian

For one molecule, a representative rigid-rotor model is

$$H_{\mathrm{mol}}=B_{\mathrm{rot}}\mathbf N^2+H_{\mathrm{hf}}-\mathbf d\cdot\mathbf E,$$

where $\mathbf N$ is dimensionless rotational angular momentum, $H_{\mathrm{hf}}$ resolves nuclear-spin sublevels, and the Stark term describes coupling to a dc electric field. Two molecules separated by $R$ interact through

$$H_{\mathrm{dd}}=\frac{1}{4\pi\epsilon_0R^3}\left[\mathbf d_1\cdot\mathbf d_2-3(\mathbf d_1\cdot\hat{\mathbf R})(\mathbf d_2\cdot\hat{\mathbf R})\right].$$

Projecting $H_{\mathrm{dd}}$ onto a resonant two-state manifold gives

$$H_{\mathrm{ex}}=J_\perp(\sigma_+^{(1)}\sigma_-^{(2)}+\sigma_-^{(1)}\sigma_+^{(2)})=\frac{J_\perp}{2}(\sigma_x^{(1)}\sigma_x^{(2)}+\sigma_y^{(1)}\sigma_y^{(2)}),$$

which generates an iSWAP at the appropriate interaction time. Here $J_\perp$ contains transition-dipole matrix elements and the angular factor; it should not be interpreted simply as an interaction between two static lab-frame dipoles. Microwave transfer between storage and interacting states toggles $J_\perp$.

## Motivation

- Combine atomic-style coherence and single-particle trapping with intrinsically strong, switchable electric dipoles.
- Simulate long-range spin models and implement exchange gates without Rydberg excitation.
- Use rich rotational/hyperfine structure as a controllable qubit or qudit resource.

## Experimental Status

- **2002 — proposal:** DeMille proposed dipolar quantum computation with trapped polar molecules.
- **2024/2025 — two-molecule gates:** Picard et al. implemented an iSWAP gate between individual NaCs molecules 1.9 μm apart, using a 664 μs interaction and producing a post-selected Bell state with 94(3)% fidelity. The work appeared online in 2024 and in the 2025 print issue.
- **2025 — magic-wavelength coherence and entanglement:** Ruttley et al. used RbCs molecules in magic-wavelength tweezers to obtain a raw Bell-state fidelity of $0.924^{+0.013}_{-0.016}$, or $0.976^{+0.014}_{-0.016}$ after correcting detectable leakage, with no measurable entanglement decay over 0.5 s. Hepworth et al. then demonstrated simultaneous second-scale coherence across three rotational levels.
- **2026 — array and interface directions (preprints):** Holland et al. reported spin squeezing with 3.0(3) dB corrected metrological gain in a CaF tweezer array. Yu et al. reported geometry-stabilized two-molecule Bell fidelity of $0.976^{+0.008}_{-0.011}$ in directly laser-cooled molecules. Ruttley et al. demonstrated coherent MHz-scale atom-molecule dipolar exchange, atom-mediated molecular readout, and blockade-based atom-molecule entanglement.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Bell-state fidelity | 94(3)% | Post-selected on both NaCs molecules being detected | [Picard et al. 2025](https://doi.org/10.1038/s41586-024-08177-3) |
| iSWAP interaction time | 664 μs | Molecules separated by 1.9 μm | [Picard et al. 2025](https://doi.org/10.1038/s41586-024-08177-3) |
| Storage encoding | Hyperfine states | Non-interacting states in the rotational ground manifold | [Picard et al. 2025](https://doi.org/10.1038/s41586-024-08177-3) |
| Magic-tweezer Bell-state fidelity | $0.924^{+0.013}_{-0.016}$ raw; $0.976^{+0.014}_{-0.016}$ leakage-corrected | RbCs; no measurable entanglement decay over 0.5 s | [Ruttley et al. 2025](https://doi.org/10.1038/s41586-024-08365-1) |
| Multilevel rotational coherence | Three-level coherence observed at 0.5 s; modeled $T_2^*>1.5$ s | Simultaneous spin-1 coherence in near-magic RbCs tweezers | [Hepworth et al. 2025](https://doi.org/10.1038/s41467-025-62275-y) |
| Geometry-stabilized Bell-state fidelity | $0.976^{+0.008}_{-0.011}$ | Directly laser-cooled molecules; preprint | [Yu et al. 2026](https://arxiv.org/abs/2607.13008) |
| Molecular spin-squeezing gain | 3.0(3) dB corrected; 2.2(3) dB uncorrected | CaF tweezer array; preprint | [Holland et al. 2026](https://arxiv.org/abs/2606.02500) |
| Resonant atom-molecule interaction | $\lvert U\rvert/h\approx2$ MHz at $R=0.9(1)\,\mu\mathrm m$ | Hybrid Rb-RbCs interface; preprint | [Ruttley et al. 2026](https://arxiv.org/abs/2607.15976) |

## Scaling Considerations

- Molecule assembly, motional ground-state cooling, and survival detection reduce usable duty cycle.
- Motion-rotation coupling and differential trapping shifts currently limit gate fidelity.
- Magic-wavelength traps and geometric echo protocols reduce different dephasing mechanisms, but add wavelength, polarization, and tweezer-position calibration requirements.
- The dense internal spectrum is a resource for control but creates leakage and calibration burden.
- Larger arrays require repeatable molecule formation and parallel microwave/optical addressing.
- Hybrid Rydberg-atom ancillas can accelerate readout and entanglement, but introduce a second species, short-lived Rydberg states, and additional transfer errors.
- The most advanced 2026 array, geometry-control, and atom-molecule-interface results are preprints rather than peer-reviewed processor benchmarks.

## References

### Original proposal

- D. DeMille, "Quantum Computation with Trapped Polar Molecules," [Phys. Rev. Lett. 88, 067901 (2002)](https://doi.org/10.1103/PhysRevLett.88.067901).

### Peer-reviewed experimental milestones

- L. R. B. Picard et al., "Entanglement and iSWAP gate between molecular qubits," [Nature 637, 821–826 (2025)](https://doi.org/10.1038/s41586-024-08177-3) — [arXiv:2406.15345](https://arxiv.org/abs/2406.15345).
- D. K. Ruttley et al., "Long-lived entanglement of molecules in magic-wavelength optical tweezers," [Nature 637, 827–832 (2025)](https://doi.org/10.1038/s41586-024-08365-1) — [arXiv:2408.14904](https://arxiv.org/abs/2408.14904).
- T. R. Hepworth et al., "Long-lived multilevel coherences and spin-1 dynamics encoded in the rotational states of ultracold molecules," [Nature Communications 16, 7131 (2025)](https://doi.org/10.1038/s41467-025-62275-y).

### Recent preprints

- C. M. Holland et al., "Creating and Probing Spin-Squeezed States of Molecules," [arXiv:2606.02500 (2026)](https://arxiv.org/abs/2606.02500).
- S. S. Yu et al., "High-fidelity entanglement of polar molecules by dynamic geometric control," [arXiv:2607.13008 (2026)](https://arxiv.org/abs/2607.13008).
- D. K. Ruttley et al., "Harnessing resonant dipolar interactions in a hybrid atom-molecule quantum system," [arXiv:2607.15976 (2026)](https://arxiv.org/abs/2607.15976).

## Linked Papers

- [[demille-2002-polar-molecule-quantum-computation]]
- [[picard-2025-molecular-iswap]]
- [[ruttley-2025-long-lived-molecular-entanglement]]
- [[hepworth-2025-multilevel-molecular-coherence]]
- [[holland-2026-molecular-spin-squeezing]]
- [[yu-2026-geometric-control-molecular-entanglement]]
- [[ruttley-2026-hybrid-atom-molecule-interface]]

## Evergreen context

- [[coherence-time-hierarchy]] — separates long-lived storage states from the shorter interaction and motional timescales.
- [[sqrt-swap-as-universal-gate]] — the dipolar exchange interaction naturally generates iSWAP-family entanglers.
- [[divincenzo-criteria]] — useful for separating compelling two-molecule physics from processor-scale readiness.

## Related Entries

- [[molecular-qubit]] — chemically synthesized molecular spin qubits rather than ultracold tweezer-trapped molecules.
- [[neutral-atom-qubit]] — shares optical trapping and single-particle assembly but uses atomic rather than molecular internal structure.
- [[rydberg-neutral-atom-qubit]] — provides the fast ancilla interaction used in the 2026 hybrid atom-molecule interface.
