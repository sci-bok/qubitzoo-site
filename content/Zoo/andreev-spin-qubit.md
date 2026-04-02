---
title: Andreev Spin Qubit
entry_type: qubit
technology_family: Super-Semi
status: demonstrated
figure_reviewed: true
first_proposed_year: 2015
first_demonstrated_year: 2021
keywords:
- superconducting
- spin
- qubit
- andreev
- semiconductor nanowire
- spin-orbit coupling
influence_score: 0.70
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[andreev-spin-qubit-figure.png]]

## Description

The **Andreev spin qubit** encodes quantum information in the spin degree of freedom of an electronic quasiparticle trapped in the supercurrent-carrying **Andreev bound states** of a semiconductor-superconductor nanowire Josephson junction. It combines the compact footprint and circuit-QED compatibility of superconducting qubits with the long-lived spin degree of freedom of semiconductor quantum dots.

In a Josephson junction made from a semiconductor nanowire (typically InAs) with superconducting contacts (Al), Andreev reflection at each superconductor-semiconductor interface creates bound states below the superconducting gap. With **spin-orbit coupling** in the semiconductor (Rashba-type in InAs), these Andreev bound states become spin-split: the two spin states $|\!\uparrow\rangle$ and $|\!\downarrow\rangle$ carry different supercurrents. This spin-dependent supercurrent enables **dispersive readout** via a coupled microwave resonator, directly bridging spin and superconducting qubit paradigms.

The qubit operates within a **fixed fermion parity** sector (odd parity — one quasiparticle occupying the Andreev level). At an optimal phase bias point, the spin transition frequency becomes first-order insensitive to phase fluctuations, providing a sweet spot for coherent operation. Quasiparticle poisoning (uncontrolled parity switches) is a primary decoherence mechanism.

## Hamiltonian

A minimal Andreev-spin-qubit model uses spin-split Andreev bound states in a phase-biased Josephson weak link:

$$H = E_A(\varphi)\tau_z + \frac{1}{2}g\mu_B\mathbf{B}\cdot\boldsymbol{\sigma} + H_{\text{SO}} + H_{\text{drive}}$$

with Andreev level dispersion (short-junction limit):

$$E_A(\varphi) = \Delta\sqrt{1 - \tau\sin^2(\varphi/2)}$$

where $\tau$ is the channel transparency, $\varphi$ the superconducting phase difference, and spin-orbit coupling $H_{\text{SO}}$ enables electrically driven spin control and spin-dependent supercurrent readout. The spin splitting at the optimal phase point depends on the spin-orbit energy and the Zeeman field.

## Motivation

- Combines the **scalability of superconducting circuits** (microwave control, resonator readout) with the **compact footprint of quantum dots** (~1 μm junction).
- The spin degree of freedom is potentially longer-lived than the charge/phase degrees of freedom used in standard superconducting qubits.
- Spin-dependent supercurrent provides a natural readout mechanism without requiring separate spin-to-charge conversion.
- Shares the InAs/Al material platform with topological qubit proposals, enabling technology cross-pollination.

## Experimental Status

**Coherent manipulation of Andreev states — Janvier et al. (2015):**
- Demonstrated coherent manipulation of Andreev charge states (parity-changing transitions) in superconducting atomic contacts.
- Established the circuit-QED framework for Andreev level spectroscopy.

**First Andreev spin qubit — Hays et al. (2021):**
- Demonstrated coherent manipulation of the spin degree of freedom in Andreev bound states of an InAs/Al nanowire junction.
- Achieved $T_1 \sim 1$–$10\,\mu$s (limited by quasiparticle poisoning), $T_2 \sim 0.1$–$1\,\mu$s.
- Single-qubit gate fidelity ~95% via microwave-driven spin transitions.
- Dispersive readout fidelity ~90% through spin-dependent supercurrent.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–10 μs | Limited by quasiparticle poisoning | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |
| $T_2$ | 0.1–1 μs | Early devices (2021) | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |
| 1Q gate fidelity | ~95% | Microwave-driven spin transitions | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |
| Readout fidelity | ~90% | Dispersive via resonator | [Hays et al. 2021](https://doi.org/10.1126/science.abf0345) |
| Qubit footprint | ~1 μm junction | Nanowire device | — |
| Operating temperature | 10–30 mK | Dilution refrigerator | — |

## References

### First Andreev spin qubit
- M. Hays et al., "Coherent manipulation of an Andreev spin qubit," [Science 373, 430 (2021)](https://doi.org/10.1126/science.abf0345)

### Andreev state coherent manipulation
- C. Janvier et al., "Coherent manipulation of Andreev states in superconducting atomic contacts," [Science 349, 1199 (2015)](https://doi.org/10.1126/science.aab2179)

## Linked Papers

- [[hays-2021-andreev-spin-qubit]]

## Related Entries

- [[gatemon]] — same InAs/Al material platform, charge degree of freedom
- [[gatemonium]] — semiconductor-superconductor hybrid qubit
- [[majorana-topological-qubit]] — related InAs/Al platform, topological protection
- [[transmon]] — shares dispersive readout mechanism
- [[spin-qubit]] — broader spin qubit family
