---
title: Color Center MOC
type: moc
technology_family: Color Center
note_count: 1
last_updated: '2026-07-17'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Color Center** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[nv-center-qubit]] | qubit | demonstrated |

## Composition

- qubit: 1

<!-- CURATED -->




















































## Conceptual anchors

- [[divincenzo-criteria]] is still the right scorecard here, but the non-obvious point is that NV centers reach the communication criteria without giving up the defect-spin story of optical pumping, microwave control, and nearby nuclear-memory registers.
- [[coherence-time-hierarchy]] matters because NV is best understood as a layered register: fast electron-spin control on top of much longer-lived nearby nuclear-spin memory.

## Curated synthesis

This family should stay the **defect-spin anchor**, not a catch-all bucket for every solid-state spin-photon platform.

1. **`nv-center-qubit` is the historical and systems baseline**
   - The core package is unusual: room-temperature operation, ODMR-based initialization and readout, and a real path from electron-spin control to long-lived nuclear memory.
   - That makes NV the right entry point when the question is about a *general-purpose defect-spin node* rather than the cleanest optical emitter.

2. **The main split is memory-first versus networking-first optimization**
   - NV centers prioritize a usable local spin register and broad experimental maturity, even though their optical interface is spectrally messy by modern networking standards.
   - The moment the comparison becomes mostly about indistinguishable photons, zero-phonon-line fraction, nanophotonic cavity integration, or telecom-fibre fit, the center of gravity has moved to [[spin-photon-moc]].

3. **Use this page to preserve the room-temperature / ODMR lineage**
   - Future defect notes belong here if the defining claim is still “optically addressable solid-state spin with a useful local memory stack,” especially when room-temperature or near-room-temperature operation is part of the identity.
   - Do not absorb newer networking-specialized defects here just because they are also color centers.

## Placement rule

- Keep `nv-center-qubit` as the anchor when the question is, "what is the most mature room-temperature defect-spin qubit with a real networking story?"
- Route to [[spin-photon-moc]] when optical indistinguishability, high zero-phonon-line fraction, or telecom-native interconnects matter more than room-temperature usability.
- Read both MOCs together when Charlie is comparing **defect-spin memory quality** against **network-emitter quality** rather than looking for a single winner.



















































