---
title: Topological MOC
type: moc
technology_family: Topological
note_count: 3
last_updated: '2026-08-01'
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

## Protection-claim ladder

The easiest way to misread this family is to collapse three different claim levels into one bucket called "topological qubit."

- [[majorana-topological-qubit]] is the **protection primitive**: the important content is nonlocal fermion parity, end-mode splitting, and the evidence ladder from spectroscopy to controllable parity.
- [[planar-josephson-junction-qubit]] is the **materials-platform route**: it asks whether a lithographic Josephson geometry can reliably enter the topological regime at all.
- [[tetron-qubit]] is the **computing architecture claim**: four Majorana modes in a fixed-parity layout, repeated parity measurements, and the possibility of turning protection into an actual logical resource.

A useful guardrail is that a two-end-mode device can demonstrate the *ingredients* of topological protection without yet constituting a full logical qubit. In this family, the graph should climb from topological-channel evidence, to parity control, to fixed-parity four-mode encoding, and only then to protected computational primitives judged against [[divincenzo-criteria]] and [[threshold-theorem]].

## Boundary-case routing table

| Entry | Why it stays in [[topological-moc]] | What nearby family it can be confused with |
|---|---|---|
| [[majorana-topological-qubit]] | the core claim is nonlocal fermion-parity encoding with exponentially suppressed mode overlap, even before a full four-mode computational encoding is assembled | [[super-semi-moc]] shares the same InAs/Al language, but not the topological-protection claim |
| [[planar-josephson-junction-qubit]] | phase-biased Josephson geometry is being used to open a topological channel, not just to tune a qubit frequency | [[super-semi-moc]] if the junction is being discussed as an electrostatically tunable weak link rather than a topological medium |
| [[tetron-qubit]] | the device is an architecture for repeated parity measurements and measurement-only braiding built on Majorana ingredients | [[cross-platform-moc]] at the systems level, because its real payoff is lower logical overhead if the physical protection holds |

## Boundary with the super-semi family

The materials overlap with [[super-semi-moc]] on purpose, especially around InAs/Al weak links and Josephson geometries, but the classification hinge is different. Keep a note in **Topological** when the qubit claim depends on entering a topological superconducting regime and protecting information in nonlocal fermion parity. If the same hybrid hardware is being used mainly for gate-tunable Josephson physics, Andreev control, or protected-circuit engineering without a topological phase claim, it belongs in [[super-semi-moc]] instead.

A useful mental check is: if removing the words "topological phase" or "nonlocal parity" would leave the note conceptually intact, it probably is not a topological-family note.

## Reading order

If you want the shortest conceptual path through this family, start with [[majorana-topological-qubit]] for the protection mechanism, then [[planar-josephson-junction-qubit]] for the scalable materials platform, and finish with [[tetron-qubit]] for the control architecture that tries to turn those ingredients into a computable qubit.










































































































































