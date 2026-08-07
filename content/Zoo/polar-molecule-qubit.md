---
title: Polar-Molecule Qubit
entry_type: qubit
technology_family: Molecular
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/polar-molecule-qubit-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:45.996212+00:00"
first_proposed_year: 2002
first_demonstrated_year: 2024
keywords: [polar molecule, NaCs, rotational qubit, hyperfine qubit, dipole-dipole interaction, optical tweezer, iSWAP]
influence_score: 0.76
last_updated: '2026-08-02'
generated_by: scibok-curation
verified_by: codex-literature-audit-2026-08-02
---

## Figure

![[polar-molecule-qubit-figure.png]]

## Description

A polar-molecule qubit encodes information in rotational and hyperfine states of an individually trapped ultracold molecule. Long-lived hyperfine states in the rotational ground manifold provide storage, while a rotationally excited state turns on an electric dipole-dipole exchange interaction between nearby molecules. This separates memory from interaction without changing particles.

The platform is distinct from chemically synthesized molecular spin qubits: here intact diatomic molecules such as NaCs are assembled and trapped in optical tweezers, individually addressed, and coupled through their permanent electric dipoles.

## Hamiltonian

For one molecule,

$$H_{\mathrm{mol}}=B_{\mathrm{rot}}\mathbf N^2+H_{\mathrm{hf}}-\mathbf d\cdot\mathbf E,$$

where $\mathbf N$ is rotational angular momentum, $H_{\mathrm{hf}}$ resolves nuclear-spin sublevels, and the Stark term controls dipole character. Within an interacting two-state manifold, resonant dipolar exchange reduces to

$$H_{\mathrm{ex}}=\frac{J_\perp}{2}(\sigma_x^{(1)}\sigma_x^{(2)}+\sigma_y^{(1)}\sigma_y^{(2)}),$$

which generates an iSWAP at the appropriate interaction time. Microwave transfer between storage and interacting states toggles $J_\perp$.

## Motivation

- Combine atomic-style coherence and single-particle trapping with intrinsically strong, switchable electric dipoles.
- Simulate long-range spin models and implement exchange gates without Rydberg excitation.
- Use rich rotational/hyperfine structure as a controllable qubit or qudit resource.

## Experimental Status

DeMille proposed dipolar quantum computation with trapped polar molecules in 2002. Picard et al. later implemented a two-qubit iSWAP gate between individual NaCs molecules 1.9 μm apart, using a 664 μs interaction and producing a post-selected Bell state with 94(3)% fidelity.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Bell-state fidelity | 94(3)% | Post-selected on both NaCs molecules being detected | [Picard et al. 2025](https://doi.org/10.1038/s41586-024-08177-3) |
| iSWAP interaction time | 664 μs | Molecules separated by 1.9 μm | [Picard et al. 2025](https://doi.org/10.1038/s41586-024-08177-3) |
| Storage encoding | Hyperfine states | Non-interacting states in the rotational ground manifold | [Picard et al. 2025](https://doi.org/10.1038/s41586-024-08177-3) |

## Scaling Considerations

- Molecule assembly, motional ground-state cooling, and survival detection reduce usable duty cycle.
- Motion-rotation coupling and differential trapping shifts currently limit gate fidelity.
- The dense internal spectrum is a resource for control but creates leakage and calibration burden.
- Larger arrays require repeatable molecule formation and parallel microwave/optical addressing.

## References

- D. DeMille, "Quantum Computation with Trapped Polar Molecules," [Phys. Rev. Lett. 88, 067901 (2002)](https://doi.org/10.1103/PhysRevLett.88.067901).
- L. R. B. Picard et al., "Entanglement and iSWAP gate between molecular qubits," [Nature 637, 821–826 (2025)](https://doi.org/10.1038/s41586-024-08177-3).

## Linked Papers

- [[demille-2002-polar-molecule-quantum-computation]]
- [[picard-2025-molecular-iswap]]

## Evergreen context

- [[coherence-time-hierarchy]] — separates long-lived storage states from the shorter interaction and motional timescales.
- [[sqrt-swap-as-universal-gate]] — the dipolar exchange interaction naturally generates iSWAP-family entanglers.
- [[divincenzo-criteria]] — useful for separating compelling two-molecule physics from processor-scale readiness.

## Related Entries

- [[molecular-qubit]] — chemically synthesized molecular spin qubits rather than ultracold tweezer-trapped molecules.
- [[neutral-atom-qubit]] — shares optical trapping and single-particle assembly but uses atomic rather than molecular internal structure.
