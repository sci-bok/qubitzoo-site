---
title: Molecular MOC
type: moc
technology_family: Molecular
note_count: 3
last_updated: '2026-08-21'
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

“Molecular” names the physical carrier, not a common processor architecture. The useful comparison is therefore not molecule versus atom, but **where each branch places addressability, interaction, and scaling cost**. [[molecular-qubit]] puts design freedom into synthesis and now spans ensemble coherence, coupled dimers, optical spin control, and electrically driven single molecules, but still lacks a standard scalable initialization/readout stack; [[polar-molecule-qubit]] gains individual addressing and a native dipolar entangler by paying an assembly, cooling, and survival-detection cost; [[nuclear-magnetic-resonance-qubit]] has exceptionally mature coherent control but pays an exponential pseudo-pure-state signal penalty because it addresses ensembles rather than individual processors.

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
| [[molecular-qubit]] | Electronic spin states engineered by ligand field, anisotropy, and hyperfine structure | Microwave, optical, or exchange-mediated electrical control; chemically coupled dimers | Ensemble EPR, optical detection, or local ESR-STM; no standard scalable readout stack | Convert chemically engineered coupling and local control into calibrated gates with repeatable initialization/readout |
| [[polar-molecule-qubit]] | Rotational and hyperfine states of individually trapped molecules | Switchable electric dipole exchange, naturally producing iSWAP-family gates; see [[sqrt-swap-as-universal-gate]] | State-selective survival detection in optical tweezers | Molecule assembly, cooling, loss, and parallel control |
| [[nuclear-magnetic-resonance-qubit]] | Nuclear spins within an ensemble of molecules | RF pulses plus intramolecular scalar $J$-coupling | Bulk ensemble magnetization | Pseudo-pure-state signal falls exponentially and cannot support single-shot error correction |

Use this table as a routing test: chemical synthesis alone points to the first branch, individually trapped dipolar rotors to the second, and bulk spectroscopic ensembles to the third. A new molecular entry should not be merged into an existing branch merely because its carrier is a molecule.

## Molecular-spin evidence ladder

The [[molecular-qubit]] branch now contains several experimental regimes that should not be collapsed into one maturity claim:

1. **Ensemble coherence** shows that isotope, ligand, and nuclear-spin engineering can preserve a molecular electronic spin for useful times, but does not establish individual addressability.
2. **Coupled molecular dimers** show that chemically designed interactions can outrun decoherence, but an interaction timescale is not a calibrated two-qubit-gate fidelity.
3. **Optically detected room-temperature control** supplies a spin–optical interface and ambient operation, but currently serves sensing-style operation more directly than a scalable register.
4. **Single-molecule electrical control** demonstrates local tuning and coherent drive on surfaces, while initialization, nondestructive readout, and repeatable multi-qubit integration remain open.

Read these as complementary rungs rather than a performance leaderboard: ensemble $T_2$, single-molecule $T_1$, optical contrast, and exchange times measure different parts of the processor stack. The next decisive evidence is not another isolated record but a repeatable experiment combining local initialization, coherent interaction, and qubit-specific readout in one architecture.

The three branches should remain separate in comparisons: chemistry-designed spin registers, trapped polar rotors, and ensemble NMR solve different problems and have radically different scaling limits.
