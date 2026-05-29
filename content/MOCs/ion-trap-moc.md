---
title: Ion Trap MOC
type: moc
technology_family: Ion Trap
note_count: 2
last_updated: '2026-05-29'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Ion Trap** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[molmer-sorenson-gate]] | gate | demonstrated |
| [[ytterbium-hyperfine-qubit]] | qubit | demonstrated |

## Composition

- gate: 1
- qubit: 1

<!-- CURATED -->


## Conceptual anchors

- [[motional-mode-coupling-in-ion-traps]] is the mechanism note that binds this family together: `molmer-sorenson-gate` is the virtual-phonon entangler, and `ytterbium-hyperfine-qubit` is one of the cleanest qubit encodings that rides on that bus.
- [[coherence-time-hierarchy]] is the right lens for understanding why hyperfine clock states are attractive here despite slower gate times than superconducting platforms.

## Family structure

- `ytterbium-hyperfine-qubit` is the species-specific workhorse note for the commercial trapped-ion stack, especially the long-coherence clock-state story.
- `molmer-sorenson-gate` is the operational center of gravity for modern ion-trap entangling gates, so this MOC should read as a gate-plus-encoding bundle rather than a broad platform survey.
- The broader modality, transport architecture, and Cirac-Zoller lineage already live in [[trapped-ion-moc]] and `trapped-ion-qubit`; avoid duplicating that page here.

## Editorial note

Treat this family as the "practical Yb + MS stack" slice of trapped-ion hardware. It should stay tighter and more operational than the broader trapped-ion family page.

