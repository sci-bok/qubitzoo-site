---
title: Neutral Atom MOC
type: moc
technology_family: Neutral Atom
note_count: 4
last_updated: '2026-06-19'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Neutral Atom** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[alkaline-earth-neutral-atom-clock-qubit]] | qubit | demonstrated |
| [[neutral-atom-qubit]] | qubit | demonstrated |
| [[nuclear-spin-neutral-atom-qubit]] | qubit | demonstrated |
| [[rydberg-neutral-atom-qubit]] | qubit | demonstrated |

## Composition

- qubit: 4

<!-- CURATED -->













































## Conceptual anchors

- [[rydberg-blockade-mechanism]] is the common interaction layer across this whole family, even when the storage states differ sharply between alkali, clock-state, and nuclear-spin variants.
- [[coherence-time-hierarchy]] is the right comparison lens for the internal split between fast gate-first Rydberg stacks and coherence-first alkaline-earth / nuclear-spin stacks.
- [[erasure-error-vs-pauli-error]] matters here because atom loss can sometimes be detected and converted into a more structured fault model instead of behaving like anonymous depolarizing noise.

## Family structure

- `neutral-atom-qubit` should remain the umbrella systems note: tweezer assembly, array scale, and the general Rydberg-enabled processor story live there.
- `rydberg-neutral-atom-qubit` is the alkali-heavy execution stack where blockade physics is the main differentiator and the main error budget driver.
- `alkaline-earth-neutral-atom-clock-qubit` and `nuclear-spin-neutral-atom-qubit` form the coherence-first branch: they separate long-lived storage states from temporary access to interacting excited manifolds.
- The two alkaline-earth notes are related but not duplicates: one is the clock-state architecture framing, the other is the memory-encoding framing.

## Editorial note

Use this MOC to clarify the family split between interaction primitive and storage encoding. Keep species-specific experimental detail in the source entries, and keep this page focused on why several different neutral-atom notes still belong to one architectural cluster.












































