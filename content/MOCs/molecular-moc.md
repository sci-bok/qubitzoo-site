---
title: Molecular MOC
type: moc
technology_family: Molecular
note_count: 3
last_updated: '2026-08-02'
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

## Conceptual anchors

- [[coherence-time-hierarchy]] is the right comparison frame here, because molecular platforms compete less on raw gate speed and more on how chemical design reshapes dephasing channels and extends usable spin coherence.
- [[spin-orbit-coupling-for-qubit-control]] captures one of the central molecular design tensions: stronger ligand-field and spin-orbit structure can unlock richer control, but usually at the price of opening additional relaxation and dephasing pathways.
- [[divincenzo-criteria]] explains why this family remains strategically interesting but still immature, because synthetic tunability is strong while scalable entangling gates and qubit-specific readout remain the limiting criteria.

## Family structure

- [[molecular-qubit]] is the chemistry-designed solid-state spin branch: ligand fields and molecular synthesis shape the spin Hamiltonian.
- [[polar-molecule-qubit]] is the trapped-particle branch: rotational states carry the qubit and electrically induced dipoles provide entangling interactions.
- [[nuclear-magnetic-resonance-qubit]] is the ensemble-computing branch: nuclear spins inside molecules are controlled spectroscopically, but room-temperature demonstrations use pseudo-pure ensembles rather than individually addressable pure-state qubits.
- These are genuinely different hardware models. Their shared label is molecular degrees of freedom, not a shared readout stack or scaling architecture.

## Editorial note

Keep the three branches separate in comparisons: chemistry-designed spin registers, trapped polar rotors, and ensemble NMR solve different problems and have radically different scaling limits.
