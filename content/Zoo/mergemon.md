---
title: Merged-Element Transmon (Mergemon)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2014
first_demonstrated_year: 2020
keywords:
- mergemon
- merged-element transmon
- compact qubit
- bottom-up superconductivity
- silicon
- germanium
- FinMET
- CMOS-compatible
influence_score: 0.68
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[mergemon-figure.png]]

## Description

The merged-element transmon (mergemon or MET) is a superconducting qubit in which the Josephson junction's intrinsic self-capacitance replaces the large external shunt capacitor of a conventional transmon. This merges the two defining circuit elements into one, shrinking the qubit footprint by ~100× and confining >90% of the electromagnetic energy to the tunnel barrier region — away from the lossy interfaces that limit coherence in standard transmons.

The mergemon concept traces to the proposal by Shim and Tahan (2014) to build superconducting devices *inside* a group-IV semiconductor using precision atomic-scale doping. The Pappas group (NIST/CU Boulder) demonstrated the first mergemon prototypes using **Al/AlOₓ/Al overlap junctions** (2020–2021): micrometer-scale junctions with long oxidation, achieving $T_1$ = 10–90 μs. The **FinMET** variant uses silicon fin-based merged transmons compatible with CMOS foundry processing. Ongoing work explores **crystalline barriers** (WSe₂ or epitaxial semiconductor barriers) aiming to eliminate amorphous dielectric loss entirely.

In a standard transmon, the shunt capacitor (typically ~100 fF, ~300 μm across) dominates the device area. Surface dielectric loss at the capacitor's metal-substrate-vacuum interfaces is the primary coherence limiter. The mergemon eliminates this capacitor: the junction itself provides the required capacitance (20–100 fF for transmon operation), and the electric field is concentrated inside the junction barrier rather than at exposed surfaces.

## Hamiltonian

Same as the transmon:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

but with $E_C$ set by the junction self-capacitance $C_J$ rather than an external shunt: $E_C = e^2/2C_J$. The merged element enforces $C_J \gg C_{\text{stray}}$, concentrating field energy in the barrier.

## Motivation

- **100× footprint reduction:** Eliminates the large shunt capacitor, enabling dramatically denser qubit arrays.
- **Interface loss elimination:** Moves dominant loss mechanism from surface dielectrics (uncontrollable) to junction barrier quality (engineerable).
- **CMOS compatibility:** FinMET variant uses mature semiconductor fin-etch processes for foundry-scale manufacturing.
- **Crystalline barrier frontier:** All-crystalline mergemons could push coherence beyond the amorphous AlO$_x$ limit.
- **Super-semi integration:** Natural platform for merging spin qubit and transmon functionality on a single chip.

## Experimental Status

**First mergemon demonstration — Zhao et al. (2020):**
- Al/AlOₓ/Al overlap junction mergemon with ~100× footprint reduction
- >90% electromagnetic energy participation in the tunnel barrier
- Demonstrated transmon-regime operation without external shunt capacitor

**Improved coherence — Madon et al. (2021):**
- $T_1$ = 10–90 μs for standard overlap mergemons
- $T_1$ > 100 μs achieved with ABAA (anneal-based) annealing protocol
- Junction loss demonstrated to not be the dominant coherence limiter

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 10–90 μs | Al/AlOₓ overlap mergemon | [Zhao et al. 2020](https://doi.org/10.1103/PhysRevApplied.14.064006) |
| $T_1$ (annealed) | >100 μs | With ABAA annealing | — |
| Footprint reduction | ~100× | vs. standard transmon | [Zhao et al. 2020](https://doi.org/10.1103/PhysRevApplied.14.064006) |
| Energy confinement | >90% in barrier | Reduced surface participation | [Zhao et al. 2020](https://doi.org/10.1103/PhysRevApplied.14.064006) |
| Junction capacitance | 20–100 fF | Self-capacitance of large-area junction | — |
| CMOS compatibility | Yes | FinMET variant | — |

## Scaling Considerations

- **Density:** ~100× smaller footprint enables dramatically denser qubit arrays.
- **Loss mechanism shift:** Moves dominant loss from surface dielectrics to junction barrier quality — a more controllable parameter.
- **Fabrication:** Compatible with semiconductor foundry processes (fin etch, trilayer deposition). Path to industrial-scale manufacturing.
- **Materials frontier:** Crystalline barriers (epitaxial semiconductors, 2D materials) may push coherence beyond amorphous AlOₓ limits.
- **Super-semi integration:** Natural platform for merging spin qubit and transmon functionality on a single chip.

## References

### Original concept
- Y.-P. Shim and C. Tahan, "Bottom-up superconducting and Josephson junction devices inside a group-IV semiconductor," [Nat. Commun. 5, 4225 (2014)](https://doi.org/10.1038/ncomms5225) — [arXiv:1407.4786](https://arxiv.org/abs/1407.4786)

### Experimental demonstrations
- R. Zhao et al., "Merged-Element Transmon," [Phys. Rev. Applied 14, 064006 (2020)](https://doi.org/10.1103/PhysRevApplied.14.064006) — [arXiv:2003.02686](https://arxiv.org/abs/2003.02686)

## Linked Papers

- [[shim-2014-bottom-up-sc]]
- [[zhao-2020-mergemon]]
- [[madon-2021-mergemon]]

## Related Entries

- [[transmon]] — Parent architecture; mergemon eliminates its shunt capacitor
- [[gatemon]] — Hybrid super-semi qubit sharing semiconductor junction theme
- [[gatemonium]] — Multi-junction gatemon variant
- [[silicon-spin-qubit]] — Co-integration target for super-semi platforms
- [[all-semiconductor-superconducting-qubit]] — Full semiconductor SC qubit concept
