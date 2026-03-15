---
title: Merged-Element Transmon (Mergemon)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2014
keywords:
- mergemon
- merged-element transmon
- compact qubit
- bottom-up superconductivity
- silicon
- germanium
- FinMET
- CMOS-compatible
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The merged-element transmon (mergemon or MET) is a superconducting qubit in which the Josephson junction's intrinsic self-capacitance replaces the large external shunt capacitor of a conventional transmon. This merges the two defining circuit elements into one, shrinking the qubit footprint by ~100× and confining >90% of the electromagnetic energy to the tunnel barrier region — away from the lossy interfaces that limit coherence in standard transmons.

## Description

### Bottom-up origin

The mergemon concept traces to the proposal by Shim et al. (2014) to build superconducting devices *inside* a group-IV semiconductor (Si or Ge) using precision atomic-scale doping. By creating heavily hole-doped regions within a single crystal, the doped regions become superconducting below ~1 K, and the undoped semiconductor between them forms a Josephson tunnel barrier. This "bottom-up" approach makes the entire qubit — junction and capacitor — from a single semiconductor crystal, naturally merging the elements.

### Modern implementations

The Pappas group (NIST/CU Boulder) demonstrated the first mergemon prototypes using:
- **Al/AlOₓ/Al overlap junctions** (2020–2021): Micrometer-scale junctions with long oxidation, achieving $T_1$ = 10–90 μs. Junction loss is not the dominant limiter.
- **FinMET:** Silicon fin-based merged transmons compatible with CMOS foundry processing. Uses mature semiconductor fin-etch processes.
- **Crystalline barriers:** All-crystalline mergemons using WSe₂ or epitaxial semiconductor barriers, aiming to eliminate amorphous dielectric loss entirely.

### Design advantage

In a standard transmon, the shunt capacitor (typically ~100 fF, ~300 μm across) dominates the device area. Surface dielectric loss at the capacitor's metal-substrate-vacuum interfaces is the primary coherence limiter. The mergemon eliminates this capacitor: the junction itself provides the required capacitance (20–100 fF for transmon operation), and the electric field is concentrated inside the junction barrier rather than at exposed surfaces.

## Hamiltonian

Same as the transmon:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

but with $E_C$ set by the junction self-capacitance $C_J$ rather than an external shunt: $E_C = e^2/2C_J$. The merged element enforces $C_J \gg C_{\text{stray}}$, concentrating field energy in the barrier.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| $T_1$ | 10–90 μs | Al/AlOₓ overlap mergemon | [[madon-2021-mergemon]] |
| $T_1$ (annealed) | >100 μs | With ABAA annealing | [[madon-2021-mergemon]] |
| Footprint reduction | ~100× | vs. standard transmon | [[zhao-2020-mergemon]] |
| Energy confinement | >90% in barrier | Reduced surface participation | [[zhao-2020-mergemon]] |
| Junction capacitance | 20–100 fF | Self-capacitance of large-area junction | — |
| CMOS compatibility | Yes | FinMET variant | — |

## Scaling Considerations

- **Density:** ~100× smaller footprint enables dramatically denser qubit arrays.
- **Loss mechanism shift:** Moves dominant loss from surface dielectrics to junction barrier quality — a more controllable parameter.
- **Fabrication:** Compatible with semiconductor foundry processes (fin etch, trilayer deposition). Path to industrial-scale manufacturing.
- **Materials frontier:** Crystalline barriers (epitaxial semiconductors, 2D materials) may push coherence beyond amorphous AlOₓ limits.
- **Super-semi integration:** Natural platform for merging spin qubit and transmon functionality on a single chip.

## Linked Papers
- [[shim-2014-bottom-up-sc]]
- [[zhao-2020-mergemon]]
- [[madon-2021-mergemon]]

## Related Entries
- [[transmon]]
- [[gatemon]]
- [[gatemonium]]
- [[silicon-spin-qubit]]
- [[all-semiconductor-superconducting-qubit]]
