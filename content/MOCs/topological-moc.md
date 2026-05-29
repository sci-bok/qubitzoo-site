---
title: Topological MOC
type: moc
technology_family: Topological
note_count: 3
last_updated: '2026-05-29'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Topological** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[majorana-topological-qubit]] | qubit | demonstrated |
| [[planar-josephson-junction-qubit]] | qubit | proposed |
| [[tetron-qubit]] | qubit | proposed |

## Composition

- qubit: 3

<!-- CURATED -->





























## Three-layer map

- [[majorana-topological-qubit]] is the physics-layer note: nonlocal fermion-parity encoding, Majorana zero modes, and the requirement that splitting fall exponentially with separation.
- [[planar-josephson-junction-qubit]] is the fabrication-layer route: a lithographically defined InAs/Al-style junction where [[spin-orbit-coupling-for-qubit-control]] and phase bias near $\pi$ create a tunable topological channel.
- [[tetron-qubit]] is the architecture-layer proposal: four Majorana modes arranged for parity measurement and measurement-only braiding, with the long-term promise judged against [[threshold-theorem]] rather than spectroscopy alone.

## What unifies this family

Topological notes in the Zoo should read as a stack, not as three unrelated devices. The common claim is hardware-level error suppression from nonlocal parity encoding, but the practical bottleneck is still the same [[divincenzo-criteria]] scorecard as everywhere else: prepare a protected state, read parity reliably, and execute entangling operations before quasiparticle poisoning or mode overlap erases the advantage.

## Reading order

If you want the shortest conceptual path through this family, start with [[majorana-topological-qubit]] for the protection mechanism, then [[planar-josephson-junction-qubit]] for the scalable materials platform, and finish with [[tetron-qubit]] for the control architecture that tries to turn those ingredients into a computable qubit.




























