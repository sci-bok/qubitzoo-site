---
title: Planar Josephson Junction Topological Qubit
entry_type: qubit
technology_family: Topological
status: proposed
first_proposed_year: 2017
keywords:
- planar Josephson junction
- topological superconductivity
- Majorana
- 2DEG
- spin-orbit coupling
- InAs
- proximity effect
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The planar Josephson junction (pJJ) topological qubit hosts Majorana zero modes at the ends of a topological superconducting channel formed in a two-dimensional electron gas (2DEG) sandwiched between two superconducting leads. Unlike nanowire-based approaches, the pJJ geometry uses a lithographically defined junction in a planar 2DEG — offering better scalability, easier fabrication, and less stringent magnetic field alignment requirements.

## Figure

![[planar-josephson-junction-qubit-figure.png]]

## Description

### Physical mechanism

A 2DEG with strong Rashba spin-orbit coupling (typically InAs or InAs/Al heterostructures) is contacted by two superconducting leads separated by a narrow gap. When an in-plane Zeeman field is applied and the superconducting phase difference $\varphi$ across the junction is tuned near $\pi$, the 1D channel between the leads enters a topological superconducting phase. Majorana zero modes appear at the channel endpoints.

### Key advantages over nanowires

- **Planar geometry:** Compatible with standard lithographic fabrication and scalable architectures
- **Relaxed field alignment:** Does not require precise magnetic field alignment along a 1D wire axis
- **Phase control:** The superconducting phase difference $\varphi$ provides an additional tuning knob — at $\varphi = \pi$, topological protection is maximized across a wide parameter range
- **Diagnostic tools:** The critical current shows a sharp minimum at the topological phase transition, providing an in-situ probe

### Experimental progress

Fornieri et al. (2019, Nature) observed signatures of topological superconductivity in InAs 2DEG-Al planar Josephson junctions, including closing and reopening of the superconducting gap as a function of in-plane field. Ren et al. (2019) independently demonstrated similar signatures in epitaxial Al-InAs devices.

## Hamiltonian

The Bogoliubov-de Gennes Hamiltonian for the junction region:

$$H = \left(\frac{p^2}{2m^*} - \mu\right)\tau_z + \alpha(p_x \sigma_y - p_y \sigma_x)\tau_z + V_Z \sigma_x + \Delta(y)\tau_x$$

where $\alpha$ is the Rashba coefficient, $V_Z$ is the Zeeman energy, $\Delta(y)$ is the proximity-induced pairing (nonzero under the leads, zero in the junction), and $\tau$, $\sigma$ are Nambu and spin Pauli matrices. The topological phase transition occurs when:

$$V_Z > \sqrt{\mu^2 + \Delta_{\text{ind}}^2}$$

at phase difference $\varphi = \pi$, with the topological gap $\propto \alpha$.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Topological gap | ~20–50 μeV | At optimal field/phase | [[pientka-2017-planar-jj]] |
| Operating temperature | <100 mK | Dilution refrigerator | [[fornieri-2019-planar-jj]] |
| Junction width | 50–150 nm | Lithographically defined | [[fornieri-2019-planar-jj]] |
| Phase tunability | Full 0–2π | Via flux through SQUID loop | [[pientka-2017-planar-jj]] |

## Scaling Considerations

- **Fabrication:** Fully planar, compatible with semiconductor foundry processes
- **Networks:** Multiple junctions can be patterned on a single 2DEG chip for braiding operations
- **Tetron geometry:** Microsoft's Majorana 1 processor uses related InAs/Al heterostructure physics in an H-shaped tetron layout
- **Phase control:** SQUID-loop geometries allow electrical tuning of $\varphi$ without external flux

## Linked Papers
- [[pientka-2017-planar-jj]]
- [[fornieri-2019-planar-jj]]

## Related Entries
- [[majorana-topological-qubit]]
- [[andreev-spin-qubit]]
- [[gatemon]]
