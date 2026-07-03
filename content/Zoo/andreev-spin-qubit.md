---
title: Andreev Spin Qubit
entry_type: qubit
technology_family: Super-Semi
status: demonstrated
figure_reviewed: true
first_proposed_year: 2003
first_demonstrated_year: 2021
keywords:
- superconducting
- spin
- qubit
- andreev
- semiconductor nanowire
- spin-orbit coupling
influence_score: 0.70
last_updated: '2026-07-03'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-07-03
---

## Figure

![[andreev-spin-qubit-figure.png]]

## Description

The **Andreev spin qubit** encodes quantum information in the two spin-like states of a **single quasiparticle trapped in the odd-parity manifold** of a spin-split Andreev doublet in a semiconductor-superconductor Josephson weak link. The basic idea dates back to **2003 theory proposals**, while the Yale 2021 demonstration used an epitaxial **InAs/Al nanowire junction** embedded in a circuit-QED resonator.

The important physics is not a bare Zeeman-split electron spin in an isolated dot. Instead, spin-orbit coupling hybridizes spin with the orbital motion of the Andreev bound state, so the two qubit states carry **opposite supercurrents**. A nonzero superconducting **phase bias** across the junction then lifts their degeneracy and enables frequency-selective control. Readout comes from the resulting **state-dependent inductive response / supercurrent**, which shifts the frequency of a coupled microwave resonator.

This makes the Andreev spin qubit a genuine hybrid of spin-qubit and superconducting-circuit ideas: micron-scale like semiconductor spin devices, but naturally compatible with microwave resonators, flux biasing, and Josephson-circuit integration. Its main weakness so far is not control bandwidth but **parity stability and coherence**, especially quasiparticle poisoning and a spinful noise bath.

## Hamiltonian

For the actual qubit manifold, it is clearer to work directly in the **odd-parity doublet** instead of a particle-hole BdG basis. Near a chosen operating point, a representative effective Hamiltonian is

$$H_q = \frac{1}{2}\,\varepsilon_s(\varphi,V_g)\,\sigma_z + \frac{1}{2}\,\Omega_R(t)\,\sigma_x,$$

where $|\downarrow_q\rangle$ and $|\uparrow_q\rangle$ are the two states of the lowest Andreev doublet, $\varepsilon_s$ is the spin splitting, and $\Omega_R(t)$ is the driven control term. In the Yale realization, coherent control was implemented through a **Raman process** involving a higher Andreev doublet rather than a simple direct spin-flip drive.

The underlying short-junction Andreev spectrum is still set by

$$E_A(\varphi) = \Delta\sqrt{1-\tau\sin^2(\varphi/2)},$$

but spin-orbit coupling makes the two states of a given doublet carry opposite supercurrents $\pm I_s/2$ near $\varphi=0$. Consequently, a phase bias lifts the degeneracy; perturbatively near zero phase bias,

$$\varepsilon_s \approx I_s\,\varphi\,\Phi_0/(2\pi).$$

That phase-driven splitting, together with broken mirror symmetry of the nanowire device, is the key ingredient behind both coherent control and dispersive readout. This is the right umbrella picture for the 2021 experiment, and it is more faithful than writing the qubit as a generic Zeeman term added to the full Andreev spectrum.

## Motivation

- **Hybrid scalability story:** combines micron-scale semiconductor weak links with superconducting microwave control and readout.
- **Built-in cQED interface:** the qubit state directly changes the junction supercurrent and inductive response, so resonator coupling is natural rather than bolted on.
- **Material-platform overlap:** shares the InAs/Al super-semi stack with gatemons, planar Josephson devices, and parts of the Majorana ecosystem.
- **Interesting physics leverage:** the same Andreev-level structure relevant for quasiparticle poisoning and topological-device spectroscopy becomes the computational degree of freedom.

## Experimental Status

**Andreev-state precursor, not yet a spin qubit — Janvier et al. (2015):**
- Demonstrated coherent manipulation of Andreev bound-state occupations in superconducting atomic contacts.
- Established the single-quasiparticle weak-link / circuit-QED control and readout toolkit that later Andreev spin-qubit work builds on.
- Reported microsecond-scale lifetime and coherence for the non-spin Andreev-qubit precursor.

**First coherent Andreev spin qubit — Hays et al. (2021):**
- Demonstrated coherent control of the odd-parity spin doublet of a single Andreev bound state in an InAs/Al Josephson nanowire.
- Used **single-shot circuit-QED readout** to post-select the initial spin state, then drove **Raman transitions** through an auxiliary Andreev doublet.
- Measured a best spin lifetime of **$T_s = 17 \pm 1\,\mu$s**, **Ramsey coherence $T_{2R} = 18 \pm 1$ ns**, and **Hahn-echo coherence $T_{2E} = 52 \pm 3$ ns**.
- The paper does **not** report a source-backed single-qubit gate fidelity, so lore-style fidelity claims should not be carried forward.

**Recent directions (2024-2026):**
- No newer **peer-reviewed experimental benchmark** clearly superseding Hays et al. (2021) was found in this audit.
- Recent work has instead focused on new control and architecture ideas: **nonadiabatic geometric gates** for Andreev spin qubits (Ahari and Tserkovnyak, 2024), **direct phase-driven manipulation** (Fauvel, Meyer, and Houzet, 2024), and **germanium strain engineering** to boost spin splitting into the GHz regime (Coppini et al., 2026 preprint).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Spin lifetime $T_s$ | $17 \pm 1\,\mu$s | Best reported value in the 2021 device at finite phase bias | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |
| Ramsey coherence $T_{2R}$ | $18 \pm 1$ ns | Measured with Raman-based control | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |
| Hahn-echo coherence $T_{2E}$ | $52 \pm 3$ ns | Echo extends coherence but remains far below $T_s$ | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |
| Single-shot readout window | $1.9\,\mu$s | cQED readout distinguishes $|g\rangle$, $|\downarrow_q\rangle$, and $|\uparrow_q\rangle$ | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |

## References

### Early proposal
- N. M. Chtchelkatchev and Y. V. Nazarov, "Andreev Quantum Dots for Spin Manipulation," [Physical Review Letters 90, 226806 (2003)](https://doi.org/10.1103/PhysRevLett.90.226806)

### Foundational Andreev spin-qubit experiment
- M. Hays et al., "Coherent manipulation of an Andreev spin qubit," [Science 373, 430-433 (2021)](https://doi.org/10.1126/science.abf0345), [arXiv:2101.06701](https://arxiv.org/abs/2101.06701)

### Andreev-state precursor
- C. Janvier et al., "Coherent manipulation of Andreev states in superconducting atomic contacts," [Science 349, 1199-1202 (2015)](https://doi.org/10.1126/science.aab2179), [arXiv:1509.03961](https://arxiv.org/abs/1509.03961)

### Recent control and design directions
- M. Tanhayi Ahari and Y. Tserkovnyak, "Proposal for a nonadiabatic geometric gate with an Andreev spin qubit," [Physical Review A 109, 032601 (2024)](https://doi.org/10.1103/PhysRevA.109.032601), [arXiv:2303.04344](https://arxiv.org/abs/2303.04344)
- Y. Fauvel, J. S. Meyer, and M. Houzet, "Opportunities for the direct manipulation of a phase-driven Andreev spin qubit," [Physical Review B 109, 184515 (2024)](https://doi.org/10.1103/PhysRevB.109.184515)
- V. Coppini et al., "Strain engineering of Andreev spin qubits in Germanium," [arXiv:2604.22650 (2026)](https://arxiv.org/abs/2604.22650)

## Linked Papers

- [[hays-2021-andreev-spin-qubit]]
- [[janvier-2015-coherent-manipulation-andreev]]
- [[coppini-2026-strain-engineering-of-andreev]]

## Evergreen context

- [[spin-orbit-coupling-for-qubit-control]] — spin-orbit coupling and broken spatial symmetry convert phase bias into a spin-selective control handle.
- [[josephson-junction-as-nonlinear-element]] — the weak link is still a Josephson element, but its microscopic Andreev structure now matters explicitly.
- [[quantum-hardware]] — this is one of the clearest bridge cases between semiconductor spin logic and superconducting circuit engineering.
- [[divincenzo-criteria]] — parity stability, initialization without heavy post-selection, and coherence improvement are the real scaling bottlenecks.

## Related Entries

- [[gatemon]] — same InAs/Al material platform, but uses the junction as a gate-tunable superconducting element
- [[gatemonium]] — broader semiconductor-superconductor hybrid qubit family
- [[planar-josephson-junction-qubit]] — related Josephson weak-link geometry in the same super-semi design space
- [[majorana-topological-qubit]] — shares the broader hybrid-nanowire ecosystem and subgap-state concerns
- [[transmon]] — shares the circuit-QED dispersive-readout infrastructure
- [[spin-qubit]] — broader spin-qubit umbrella entry
- [[ferbo-qubit]] — uses Andreev physics in a different parity sector to pursue protected operation
