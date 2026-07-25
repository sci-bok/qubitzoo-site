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
last_updated: '2026-07-25'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-07-25
---

## Figure

![[majorana-topological-qubit-figure.png]]

## Description

The Majorana topological qubit seeks to encode quantum information in fermion-parity degrees of freedom built from spatially separated **Majorana zero modes** (MZMs) in hybrid semiconductor-superconductor nanostructures. The elementary building block is a nonlocal fermion mode

$$f = \frac{1}{2}(\gamma_1 + i\gamma_2)$$

constructed from two Majorana operators $\gamma_1, \gamma_2$ localized at opposite ends of a proximitized wire or island.

That two-MZM mode is an important **parity degree of freedom**, but by itself it is **not yet a full logical qubit** in a fixed-parity superconducting system. A minimal logical Majorana qubit requires **at least four MZMs**, so logical states can be defined within a fixed total parity sector, for example in tetron-style encodings.

In finite nanowires, overlapping end Majorana modes split away from zero energy. A central scaling requirement is **exponential suppression** of this splitting with wire length:

$$\delta E \propto e^{-L/\xi}$$

where $L$ is the Majorana separation and $\xi$ is the Majorana localization length. Coulomb-blockade transport in Majorana islands is a primary diagnostic channel for parity states and near-zero modes, with transitions between 2$e$ and 1$e$ periodicity serving as experimental signatures.

The hoped-for topological protection arises from nonlocal encoding: information stored in the relative parity of spatially separated modes is exponentially insensitive to local hybridization and some local noise channels. Experimentally, however, near-zero modes, parity signatures, and even parity readout are still not the same thing as a fully validated topological logical qubit. A minimal operational qubit requires four MZMs (two pairs) to define a logical qubit within a fixed total parity sector.

## Hamiltonian

A minimal 1D semiconductor-superconductor nanowire model (proximitized Rashba wire) is:

$$H = \int dx\, \Psi^\dagger\!\left[-\frac{\hbar^2\partial_x^2}{2m^*} - \mu - i\alpha_R\partial_x\sigma_y + V_Z\sigma_x\right]\!\Psi + \int dx\, \left(\Delta\,\psi_\uparrow\psi_\downarrow + \text{h.c.}\right)$$

Topological phase condition (idealized):

$$V_Z > \sqrt{\mu^2 + \Delta^2}$$

In the topological regime, Majorana zero modes localize at wire ends with overlap-induced splitting:

$$\delta E \sim e^{-L/\xi}\cos(k_F L + \phi)$$

which motivates long wires and hard-gap devices for robust parity protection.

At low energy, bilinears $i\gamma_a\gamma_b$ act as parity operators. In a four-Majorana encoding, one works inside a fixed total-parity sector, for example $(i\gamma_1\gamma_2)(i\gamma_3\gamma_4)=+1$, and defines logical states through relative pair parities. A single two-end wire instead provides only one nonlocal parity mode.

## Motivation

- Encodes information **nonlocally**, targeting intrinsic protection against local noise channels
- Offers a candidate path to hardware-level error suppression before full QEC overhead
- Topological braiding operations would implement certain gates fault-tolerantly by geometry
- Scalable architectures (tetron, hexon) proposed for integration with surface code error correction

## Evergreen context

- [[quantum-hardware]] places Majorana devices inside the broader hardware map, but with the unusual claim that materials design can suppress errors before conventional code overhead is paid.
- [[spin-orbit-coupling-for-qubit-control]] is part of the nanowire recipe: Rashba spin-orbit coupling, Zeeman splitting, and induced pairing together create the topological regime that supports end Majorana modes.
- [[divincenzo-criteria]] is still the right scorecard here, because zero-bias spectroscopy and parity signatures are not yet the same as scalable initialization, protected gates, and high-fidelity readout.
- [[threshold-theorem]] is the downstream test for whether nonlocal parity encoding actually buys a fault-tolerance advantage rather than just a distinctive spectroscopy signal.

## Experimental Status

**Exponential protection — Albrecht et al. (2016):**
- Observed exponential suppression of zero-mode splitting with wire length in InAs/Al nanowire devices
- Key milestone toward establishing topological protection in solid-state systems
- [Nature 531, 206 (2016)](https://doi.org/10.1038/nature17162)

**Parity signatures and interpretation work:**
- Coulomb-blockade parity signatures, including 2$e$/1$e$ transitions and odd-parity ground states, have been observed in hybrid InSb/Al and InAs/Al islands
- These signatures are consistent with isolated near-zero subgap states, but are not by themselves unique proof of a topological qubit
- [Nature Communications 9, 4801 (2018)](https://doi.org/10.1038/s41467-018-07279-7)

**Protocol-based topological-regime evidence (2024):**
- Gate-defined InAs/Al devices were reported to pass the topological gap protocol, a multi-stage local/nonlocal transport test designed to suppress false positives from trivial near-zero modes
- This is stronger than isolated zero-bias-peak lore, but still not a logical-qubit demonstration
- [arXiv:2207.02472](https://arxiv.org/abs/2207.02472)

**Single-shot parity readout (2025):**
- Interferometric single-shot parity measurement was demonstrated in InAs/Al hybrid devices, with reported 1% assignment error probability at the optimal operating point
- The paper explicitly notes that the observed low-energy state can admit both topologically trivial and non-trivial interpretations, so this is a parity-readout milestone rather than conclusive proof of topological quantum computation
- [Nature 638, 651 (2025)](https://doi.org/10.1038/s41586-024-08445-2)

**Current status:**
- Majorana ingredients are now substantially better controlled than in the first-wave spectroscopy era
- Robust four-MZM logical-qubit operation, fusion/braiding-grade control, and demonstrated topological logical gate fidelity remain open experimental milestones
- The field remains promising, but still pre-fault-tolerant experimentally

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Zero-mode splitting trend | Exponential suppression with $L$ | Key milestone toward topological protection | [Albrecht et al. 2016](https://doi.org/10.1038/nature17162) |
| Coulomb-blockade parity signatures | 2$e$/1$e$ regime transitions observed | Consistent with Majorana phenomenology | — |
| Single-shot parity measurement error | 1% assignment error probability | InAs/Al interferometric parity readout, not yet a full logical-qubit demonstration | [Microsoft Azure Quantum 2025](https://doi.org/10.1038/s41586-024-08445-2) |
| Topological logical gate fidelity | Not yet established | Full braiding-grade protected gates remain open | — |
| Topological phase condition | $V_Z > \sqrt{\mu^2 + \Delta^2}$ | Idealized Rashba wire model | — |

## References

### Foundational theory
- A. Y. Kitaev, "Unpaired Majorana fermions in quantum wires," [Phys.-Usp. 44, 131 (2001)](https://doi.org/10.1070/1063-7869/44/10S/S29)

### Experimental milestones
- S. M. Albrecht et al., "Exponential protection of zero modes in Majorana islands," [Nature 531, 206 (2016)](https://doi.org/10.1038/nature17162)

### Related theory
- J. Shen et al., "Parity transitions in the superconducting ground state of hybrid InSb–Al Coulomb islands," [Nat. Commun. 9, 4801 (2018)](https://doi.org/10.1038/s41467-018-07279-7)
- Y.-H. Lai, S. Das Sarma, and J. D. Sau, "Theory of Coulomb blockaded transport in realistic Majorana nanowires," [Phys. Rev. B 104, 085141 (2021)](https://doi.org/10.1103/PhysRevB.104.085141)

### Recent experimental status
- Microsoft Quantum, "InAs-Al Hybrid Devices Passing the Topological Gap Protocol," [arXiv:2207.02472](https://arxiv.org/abs/2207.02472)
- Microsoft Azure Quantum, "Interferometric single-shot parity measurement in InAs–Al hybrid devices," [Nature 638, 651 (2025)](https://doi.org/10.1038/s41586-024-08445-2)

## Linked Papers

- [[albrecht-2016-exponential-protection-of-zero]]
- [[lai-2021-theory-of-coulomb-blockaded]]
- [[shen-2018-parity-transitions-in-the]]
- [[microsoft-2024-inas-al-hybrid-devices-passing-the-topological-gap-protocol]]
- [[aghaee-2025-interferometric-parity]]

## Related Entries

- [[tetron-qubit]] — proposed scalable Majorana qubit architecture
- [[planar-josephson-junction-qubit]] — alternative topological superconductor platform
- [[qubit-readout]] — parity-sensitive readout is now a central experimental milestone for this platform
- [[surface-code-logical-qubit]] — error correction code compatible with topological qubits
- [[color-code-logical-qubit]] — alternative topological error correction code
