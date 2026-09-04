---
title: Color Center MOC
type: moc
technology_family: Color Center
note_count: 4
last_updated: '2026-08-31'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Color Center** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[nv-center-qubit]] | qubit | demonstrated |
| [[rare-earth-ion-qubit]] | qubit | demonstrated |
| [[silicon-carbide-defect-qubit]] | qubit | demonstrated |
| [[siv-color-center-qubit]] | qubit | demonstrated |

## Composition

- qubit: 4

<!-- CURATED -->

## Conceptual anchors

- [[divincenzo-criteria]] is still the right scorecard here, but the non-obvious point is that NV centers reach the communication criteria without giving up the defect-spin story of optical pumping, microwave control, and nearby nuclear-memory registers.
- [[coherence-time-hierarchy]] matters because NV is best understood as a layered register: fast electron-spin control on top of much longer-lived nearby nuclear-spin memory.

## Curated synthesis

This family should stay the **defect-spin anchor**, not a catch-all bucket for every solid-state spin-photon platform.

1. **`nv-center-qubit` is the historical and systems baseline**
   - The core package is unusual: room-temperature operation, ODMR-based initialization and readout, and a real path from electron-spin control to long-lived nuclear memory.
   - That makes NV the right entry point when the question is about a *general-purpose defect-spin node* rather than the cleanest optical emitter.

2. **The real branch point is local-spin maturity versus network-emitter optimization**
   - NV centers prioritize a usable local spin register and broad experimental maturity, even though their optical interface is spectrally messy by modern networking standards.
   - The moment the comparison becomes mostly about indistinguishable photons, zero-phonon-line fraction, nanophotonic cavity integration, or telecom-fibre fit, the center of gravity has moved to [[spin-photon-moc]].

3. **Use this page for the physical defect/materials lineage**
   - Future defect notes belong here if the defining claim is still “optically addressable solid-state spin with a useful local memory stack,” especially when room-temperature or near-room-temperature operation is part of the identity.
   - Networking-specialized color centers such as SiV/SnV appear here as facets, while [[spin-photon-moc]] owns their network-interface comparison.
   - [[silicon-carbide-defect-qubit]] adds the wafer-scale wide-bandgap branch: multiple optically active defects, mature semiconductor processing, and operation extending beyond diamond-only materials assumptions.
   - [[rare-earth-ion-qubit]] appears here as a facet because it is a crystal-hosted optical spin defect, but its primary home is [[spin-photon-moc]] because long-lived memories and multiplexed network nodes are the sharper organizing idea.

## Materials-property to interface map

The useful family comparison starts with the microscopic property that makes each host or defect attractive, then follows the systems debt that property leaves behind. This keeps “color center” from becoming a vague synonym for every solid-state optical spin.

| Branch | Materials-level resource | What it buys locally | Debt exposed at the network boundary |
|---|---|---|---|
| [[nv-center-qubit]] | A robust spin-1 ground state with spin-selective intersystem crossing | Room-temperature optical pumping/readout and a mature electron-plus-nuclear register | A weak zero-phonon channel and spectral instability make collection and indistinguishable-photon generation harder than the local qubit operation |
| [[siv-color-center-qubit]] | Inversion-symmetric split-vacancy structure | Stable optical transitions and a high zero-phonon fraction suited to nanophotonic remote-entanglement links | Orbital-phonon coupling moves the main cost into cryogenic spin coherence, especially for SiV |
| [[silicon-carbide-defect-qubit]] | A wafer-scale wide-bandgap semiconductor hosting several optically addressable defect species | Room-temperature control, nuclear-spin registers, and monolithic waveguide/device integration | Defect-to-defect heterogeneity, spectral stability, and reproducible cavity-coupled yield limit a uniform node stack |
| [[rare-earth-ion-qubit]] | Shielded 4f states in crystalline hosts | Extremely long memories, narrow transitions, and spectral multiplexing; erbium can add native telecom emission | Weak oscillator strength makes resonant cavity enhancement essential, while deterministic local multi-ion gates remain immature |

Read this table from left to right before comparing headline records. [[coherence-time-hierarchy]] tests whether the local register survives a remote-entanglement cycle; [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] then separates the remaining optical debt into emission, collection, and link matching. Once those interface terms dominate the decision, hand off to [[spin-photon-moc]] rather than extending the materials taxonomy into a network-architecture ranking.

## Placement rule

- Keep `nv-center-qubit` as the anchor when the question is, "what is the most mature room-temperature defect-spin qubit with a real networking story?"
- Route to [[spin-photon-moc]] when optical indistinguishability, high zero-phonon-line fraction, or telecom-native interconnects matter more than physical defect taxonomy.
- Read both MOCs together when comparing **defect-spin memory quality** against **network-emitter quality** rather than looking for a single winner.
- Treat [[quantum-transduction]] as the downstream systems check after that split: NV often implies a harder wavelength / interface burden, while `t-center-qubit` can remove part of it by starting inside the telecom stack.
