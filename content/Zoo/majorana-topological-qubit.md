---
title: Majorana Topological Qubit
entry_type: qubit
technology_family: Topological
status: demonstrated
figure_reviewed: true
first_proposed_year: 2001
first_demonstrated_year: 2016
keywords:
- majorana zero mode
- topological qubit
- semiconductor-superconductor nanowire
- coulomb blockade
- fermion parity
- topological protection
influence_score: 0.69
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[majorana-topological-qubit-figure.png]]

## Description

The Majorana topological qubit encodes quantum information in fermion parity degrees of freedom built from spatially separated **Majorana zero modes** (MZMs) in hybrid semiconductor-superconductor nanostructures. The qubit states $|0_L\rangle$ (even parity) and $|1_L\rangle$ (odd parity) are defined by the occupation of a nonlocal fermion mode $f = \frac{1}{2}(\gamma_1 + i\gamma_2)$ constructed from two Majorana operators $\gamma_1, \gamma_2$ localized at opposite ends of a proximitized semiconductor nanowire.

In finite nanowires, overlapping end Majorana modes split away from zero energy. A central scaling requirement is **exponential suppression** of this splitting with wire length:

$$\delta E \propto e^{-L/\xi}$$

where $L$ is the Majorana separation and $\xi$ is the Majorana localization length. Coulomb-blockade transport in Majorana islands is a primary diagnostic channel for parity states and near-zero modes, with transitions between 2$e$ and 1$e$ periodicity serving as experimental signatures.

The topological protection arises from the nonlocal encoding: information stored in the relative parity of spatially separated modes is immune to local perturbations, offering a candidate path to hardware-level error suppression before full quantum error correction overhead. A minimal operational qubit requires four MZMs (two pairs) to define a logical qubit within a fixed total parity sector.

## Hamiltonian

A minimal 1D semiconductor-superconductor nanowire model (proximitized Rashba wire) is:

$$H = \int dx\, \Psi^\dagger\!\left[-\frac{\hbar^2\partial_x^2}{2m^*} - \mu - i\alpha_R\partial_x\sigma_y + V_Z\sigma_x\right]\!\Psi + \int dx\, \left(\Delta\,\psi_\uparrow\psi_\downarrow + \text{h.c.}\right)$$

Topological phase condition (idealized):

$$V_Z > \sqrt{\mu^2 + \Delta^2}$$

In the topological regime, Majorana zero modes localize at wire ends with overlap-induced splitting:

$$\delta E \sim e^{-L/\xi}\cos(k_F L + \phi)$$

which motivates long wires and hard-gap devices for robust parity protection.

## Motivation

- Encodes information **nonlocally**, targeting intrinsic protection against local noise channels
- Offers a candidate path to hardware-level error suppression before full QEC overhead
- Topological braiding operations would implement certain gates fault-tolerantly by geometry
- Scalable architectures (tetron, hexon) proposed for integration with surface code error correction

## Experimental Status

**Exponential protection — Albrecht et al. (2016):**
- Observed exponential suppression of zero-mode splitting with wire length in InAs/Al nanowire devices
- Key milestone toward establishing topological protection in solid-state systems
- [Nature 531, 206 (2016)](https://doi.org/10.1038/nature17162)

**Parity signatures:**
- Coulomb-blockade parity signatures observed: 2$e$/1$e$ regime transitions consistent with subgap-state / Majorana phenomenology
- Theoretical framework for Coulomb-blockaded Majorana devices developed (Shen et al., Lai et al.)

**Microsoft topological qubit program (2025):**
- Extensive spectroscopy and interferometric measurements on InAs/Al devices
- Topological gap protocol developed for identifying topological regime
- Full braiding-grade protected gates and logical qubit operations remain open experimental challenges

**Current status:**
- Robust topological protection must still be established under full control/readout stacks
- Still pre-fault-tolerant experimentally; demonstrated topological logical gate fidelity not yet established

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Zero-mode splitting trend | Exponential suppression with $L$ | Key milestone toward topological protection | [Albrecht et al. 2016](https://doi.org/10.1038/nature17162) |
| Coulomb-blockade parity signatures | 2$e$/1$e$ regime transitions observed | Consistent with Majorana phenomenology | — |
| Topological logical gate fidelity | Not yet established | Full braiding-grade protected gates remain open | — |
| Topological phase condition | $V_Z > \sqrt{\mu^2 + \Delta^2}$ | Idealized Rashba wire model | — |

## References

### Foundational theory
- A. Y. Kitaev, "Unpaired Majorana fermions in quantum wires," [Phys.-Usp. 44, 131 (2001)](https://doi.org/10.1070/1063-7869/44/10S/S29)

### Experimental milestones
- S. M. Albrecht et al., "Exponential protection of zero modes in Majorana islands," [Nature 531, 206 (2016)](https://doi.org/10.1038/nature17162)

### Related theory
- J. Shen et al., "Parity transitions in the superconducting ground state of hybrid InSb–Al Coulomb islands," [Nat. Commun. 9, 4801 (2018)](https://doi.org/10.1038/s41467-018-07279-7)

## Linked Papers

- [[albrecht-2016-exponential-protection-of-zero]]
- [[lai-2021-theory-of-coulomb-blockaded]]
- [[shen-2018-parity-transitions-in-the]]
- [[aghaee-2021-majorana-spectroscopy]]

## Related Entries

- [[tetron-qubit]] — proposed scalable Majorana qubit architecture
- [[planar-josephson-junction-qubit]] — alternative topological superconductor platform
- [[surface-code-logical-qubit]] — error correction code compatible with topological qubits
- [[color-code-logical-qubit]] — alternative topological error correction code
