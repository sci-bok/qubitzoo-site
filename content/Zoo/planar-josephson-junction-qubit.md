---
title: Planar Josephson Junction Topological Qubit
entry_type: qubit
technology_family: Topological
status: proposed
figure_reviewed: true
first_proposed_year: 2017
keywords:
- planar Josephson junction
- topological superconductivity
- Majorana
- 2DEG
- spin-orbit coupling
- InAs
- proximity effect
influence_score: 0.62
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[planar-josephson-junction-qubit-figure.png]]

## Description

The planar Josephson junction (pJJ) topological qubit hosts Majorana zero modes at the ends of a topological superconducting channel formed in a two-dimensional electron gas (2DEG) sandwiched between two superconducting leads. Unlike nanowire-based approaches, the pJJ geometry uses a lithographically defined junction in a planar 2DEG — offering better scalability, easier fabrication, and less stringent magnetic field alignment requirements.

A 2DEG with strong **Rashba spin-orbit coupling** (typically InAs or InAs/Al heterostructures) is contacted by two superconducting leads separated by a narrow gap. When an in-plane Zeeman field is applied and the superconducting phase difference $\varphi$ across the junction is tuned near $\pi$, the 1D channel between the leads enters a topological superconducting phase. Majorana zero modes appear at the channel endpoints.

Key advantages over nanowires include planar geometry compatible with standard lithographic fabrication, relaxed magnetic field alignment requirements, phase control via SQUID-loop geometries, and diagnostic tools where the critical current shows a sharp minimum at the topological phase transition.

Fornieri et al. (2019) observed signatures of topological superconductivity in InAs 2DEG-Al planar Josephson junctions, including closing and reopening of the superconducting gap as a function of in-plane field. Ren et al. (2019) independently demonstrated similar signatures in epitaxial Al-InAs devices.

## Hamiltonian

The Bogoliubov-de Gennes Hamiltonian for the junction region:

$$H = \left(\frac{p^2}{2m^*} - \mu\right)\tau_z + \alpha(p_x \sigma_y - p_y \sigma_x)\tau_z + V_Z \sigma_x + \Delta(y)\tau_x$$

where $\alpha$ is the Rashba coefficient, $V_Z$ is the Zeeman energy, $\Delta(y)$ is the proximity-induced pairing (nonzero under the leads, zero in the junction), and $\tau$, $\sigma$ are Nambu and spin Pauli matrices. The topological phase transition occurs when:

$$V_Z > \sqrt{\mu^2 + \Delta_{\text{ind}}^2}$$

at phase difference $\varphi = \pi$, with the topological gap $\propto \alpha$.

## Motivation

- **Planar scalability:** Fully compatible with standard semiconductor lithography — no nanowire growth or mechanical assembly.
- **Phase tunability:** The superconducting phase difference $\varphi$ provides an additional tuning knob; at $\varphi = \pi$, topological protection is maximized.
- **Relaxed field requirements:** Does not require precise magnetic field alignment along a 1D wire axis.
- **In-situ diagnostics:** Critical current minimum at the topological transition provides a built-in probe of the topological phase.
- **Network scalability:** Multiple junctions can be patterned on a single 2DEG chip for braiding operations.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Topological gap | ~20–50 μeV | At optimal field/phase | [Pientka et al. 2017](https://doi.org/10.1103/PhysRevX.7.021032) |
| Operating temperature | <100 mK | Dilution refrigerator | [Fornieri et al. 2019](https://doi.org/10.1038/s41586-019-1068-8) |
| Junction width | 50–150 nm | Lithographically defined | [Fornieri et al. 2019](https://doi.org/10.1038/s41586-019-1068-8) |
| Phase tunability | Full 0–2π | Via flux through SQUID loop | [Pientka et al. 2017](https://doi.org/10.1103/PhysRevX.7.021032) |

## Scaling Considerations

- **Fabrication:** Fully planar, compatible with semiconductor foundry processes.
- **Networks:** Multiple junctions can be patterned on a single 2DEG chip for braiding operations.
- **Tetron geometry:** Microsoft's Majorana 1 processor uses related InAs/Al heterostructure physics in an H-shaped tetron layout.
- **Phase control:** SQUID-loop geometries allow electrical tuning of $\varphi$ without external flux.

## References

### Original proposal
- F. Pientka et al., "Topological Superconductivity in a Planar Josephson Junction," [Phys. Rev. X 7, 021032 (2017)](https://doi.org/10.1103/PhysRevX.7.021032) — [arXiv:1609.09482](https://arxiv.org/abs/1609.09482)

### Experimental demonstrations
- A. Fornieri et al., "Evidence of topological superconductivity in planar Josephson junctions," [Nature 569, 89 (2019)](https://doi.org/10.1038/s41586-019-1068-8) — [arXiv:1809.03037](https://arxiv.org/abs/1809.03037)

### Related theory
- A. Stern and E. Berg, "Topological Superconductivity in Planar Josephson Junctions," [Phys. Rev. Lett. 122, 107701 (2019)](https://doi.org/10.1103/PhysRevLett.122.107701)

## Linked Papers

- [[pientka-2017-planar-jj]]
- [[fornieri-2019-planar-jj]]

## Related Entries

- [[majorana-topological-qubit]] — General Majorana qubit concept
- [[tetron-qubit]] — Microsoft's tetron uses related InAs/Al heterostructure physics
- [[andreev-spin-qubit]] — Andreev bound states in related junction geometries
- [[gatemon]] — Semiconductor-superconductor hybrid using similar materials
