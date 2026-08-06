---
title: Silicon-Carbide Defect Qubit
entry_type: qubit
technology_family: Color Center
moc_facets: [Spin-Photon]
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/silicon-carbide-defect-qubit-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:46.070691+00:00"
first_proposed_year: 2011
first_demonstrated_year: 2011
keywords: [silicon carbide, SiC, divacancy, silicon vacancy, defect spin, spin photon, wafer scale]
influence_score: 0.74
last_updated: '2026-08-02'
generated_by: scibok-curation
verified_by: codex-literature-audit-2026-08-02
---

## Figure

![[silicon-carbide-defect-qubit-figure.png]]

## Description

Silicon-carbide defect qubits use optically addressable electron spins associated with point defects in a technologically mature wide-band-gap semiconductor. Two major branches must not be conflated: the neutral divacancy has an $S=1$ ground state analogous in control language to diamond NV centers, while the negatively charged silicon vacancy has an $S=3/2$ ground state and different level structure.

SiC combines optical initialization/readout, microwave spin control, nearby nuclear-spin registers, and wafer-scale growth and nanofabrication. Its near-infrared optical transitions are attractive for spin-photon interfaces, though spectral stability and photon collection remain less mature than the best diamond nanophotonics.

## Hamiltonian

For an axial neutral divacancy, a useful ground-state spin Hamiltonian is

$$H=D\!\left(S_z^2-\frac{S(S+1)}{3}\right)+E(S_x^2-S_y^2)+g\mu_B\mathbf B\cdot\mathbf S+\mathbf S\cdot\mathbf A\cdot\mathbf I,$$

with $S=1$, zero-field splitting $D$, strain/electric-field splitting $E$, and hyperfine tensor $\mathbf A$. Silicon-vacancy centers require the corresponding $S=3/2$ crystal-field Hamiltonian; they are a related defect branch, not the same qubit.

## Motivation

- Retain optically addressable defect-spin physics in a semiconductor with established wafer processing.
- Integrate spin memories with nanophotonic cavities and electrical devices on the same material platform.
- Exploit multiple defect species and nuclear-spin registers while maintaining a clear physical taxonomy.

## Experimental Status

Room-temperature coherent control of SiC defect spins was demonstrated in 2011. Christle et al. isolated and coherently controlled individual neutral divacancies and measured ensemble Hahn-echo coherence exceeding 1 ms. Nagy et al. demonstrated high-fidelity spin and optical control of single silicon-vacancy centers in 4H-SiC.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Hahn-echo $T_2$ | >1 ms | Neutral divacancy ensemble in high-purity 4H-SiC | [Christle et al. 2015](https://doi.org/10.1038/nmat4144) |
| Operating regime | Room temperature demonstrated | Coherent defect-spin control | [Koehl et al. 2011](https://doi.org/10.1038/nature10562) |
| Defect branches | $S=1$ and $S=3/2$ | Divacancy and silicon-vacancy encodings | [Nagy et al. 2019](https://doi.org/10.1038/s41467-019-09873-9) |

## Scaling Considerations

- Different polytypes, lattice sites, and charge states create a rich but fragmented device landscape.
- Transform-limited optical lines and stable charge-state control are required for remote entanglement.
- Isotopic purification and nuclear-spin engineering can extend coherence but add materials complexity.
- Foundry compatibility is promising, but reproducible cavity-coupled single-defect yield remains a bottleneck.

## References

- W. F. Koehl et al., "Room temperature coherent control of defect spin qubits in silicon carbide," [Nature 479, 84–87 (2011)](https://doi.org/10.1038/nature10562).
- D. J. Christle et al., "Isolated electron spins in silicon carbide with millisecond coherence times," [Nature Materials 14, 160–163 (2015)](https://doi.org/10.1038/nmat4144).
- R. Nagy et al., "High-fidelity spin and optical control of single silicon-vacancy centres in silicon carbide," [Nature Communications 10, 1954 (2019)](https://doi.org/10.1038/s41467-019-09873-9).

## Linked Papers

- [[koehl-2011-sic-defect-spin-control]]
- [[christle-2015-sic-divacancy]]
- [[nagy-2019-sic-silicon-vacancy]]

## Evergreen context

- [[coherence-time-hierarchy]] — connects electron-spin operations to longer nuclear-memory timescales.
- [[divincenzo-criteria]] — evaluates the trade between local spin quality and network-interface maturity.

## Related Entries

- [[nv-center-qubit]] — diamond defect-spin baseline.
- [[siv-color-center-qubit]] — group-IV diamond defects optimized for optical quality.
- [[t-center-qubit]] — telecom-adjacent silicon defect node.
