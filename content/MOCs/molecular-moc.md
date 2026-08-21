---
title: Molecular MOC
type: moc
technology_family: Molecular
note_count: 3
last_updated: '2026-08-14'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Molecular** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[molecular-qubit]] | qubit | demonstrated |
| [[nuclear-magnetic-resonance-qubit]] | qubit | demonstrated |
| [[polar-molecule-qubit]] | qubit | demonstrated |

## Composition

- qubit: 3

<!-- CURATED -->

## Curated synthesis

“Molecular” names the physical carrier, not a common processor architecture. The useful comparison is therefore not molecule versus atom, but **where each branch places addressability, interaction, and scaling cost**. [[molecular-qubit]] puts design freedom into synthesis but still lacks a standard single-molecule control/readout stack; [[polar-molecule-qubit]] gains individual addressing and a native dipolar entangler by paying an assembly, cooling, and survival-detection cost; [[nuclear-magnetic-resonance-qubit]] has exceptionally mature coherent control but pays an exponential pseudo-pure-state signal penalty because it addresses ensembles rather than individual processors.

This makes experimental age a poor proxy for architectural maturity. NMR reached algorithm demonstrations first yet closed off as a scalable route; molecular spin qubits show that chemistry can engineer coherence without by itself supplying an integration stack; trapped polar molecules are the newest branch but already expose a credible two-particle gate primitive. Read the family as three different answers to the same question: **which part of the quantum computer is delegated to molecular structure, and which unsolved burden remains outside the molecule?**

## Conceptual anchors

- [[coherence-time-hierarchy]] is the right comparison frame here, because molecular platforms compete less on raw gate speed and more on how chemical design reshapes dephasing channels and extends usable spin coherence.
- [[spin-orbit-coupling-for-qubit-control]] captures one of the central molecular design tensions: stronger ligand-field and spin-orbit structure can unlock richer control, but usually at the price of opening additional relaxation and dephasing pathways.
- [[divincenzo-criteria]] explains why this family remains strategically interesting but still immature, because synthetic tunability is strong while scalable entangling gates and qubit-specific readout remain the limiting criteria.

## Family structure

- [[molecular-qubit]] is the chemistry-designed solid-state spin branch: ligand fields and molecular synthesis shape the spin Hamiltonian.
- [[polar-molecule-qubit]] is the trapped-particle branch: rotational states carry the qubit and electrically induced dipoles provide entangling interactions.
- [[nuclear-magnetic-resonance-qubit]] is the ensemble-computing branch: nuclear spins inside molecules are controlled spectroscopically, but room-temperature demonstrations use pseudo-pure ensembles rather than individually addressable pure-state qubits.
- These are genuinely different hardware models. Their shared label is molecular degrees of freedom, not a shared readout stack or scaling architecture.

## Molecular platform routing table

| Branch | Logical degree of freedom | Interaction / control route | Readout model | Decisive scaling bottleneck |
|---|---|---|---|---|
| [[molecular-qubit]] | Electronic spin states engineered by ligand field, anisotropy, and hyperfine structure | Microwave spin control; proposed resonator and spin-photon interfaces | Ensemble control remains common; single-molecule readout is emerging | No standard scalable two-qubit coupling and readout stack yet |
| [[polar-molecule-qubit]] | Rotational and hyperfine states of individually trapped molecules | Switchable electric dipole exchange, naturally producing iSWAP-family gates; see [[sqrt-swap-as-universal-gate]] | State-selective survival detection in optical tweezers | Molecule assembly, cooling, loss, and parallel control |
| [[nuclear-magnetic-resonance-qubit]] | Nuclear spins within an ensemble of molecules | RF pulses plus intramolecular scalar $J$-coupling | Bulk ensemble magnetization | Pseudo-pure-state signal falls exponentially and cannot support single-shot error correction |

Use this table as a routing test: chemical synthesis alone points to the first branch, individually trapped dipolar rotors to the second, and bulk spectroscopic ensembles to the third. A new molecular entry should not be merged into an existing branch merely because its carrier is a molecule.

The three branches should remain separate in comparisons: chemistry-designed spin registers, trapped polar rotors, and ensemble NMR solve different problems and have radically different scaling limits.
