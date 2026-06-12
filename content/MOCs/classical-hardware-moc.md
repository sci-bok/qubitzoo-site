---
title: Classical Hardware MOC
type: moc
technology_family: Classical Hardware
note_count: 2
last_updated: '2026-06-12'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Classical Hardware** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[cryogenic-amplification]] | infrastructure | demonstrated |
| [[qubit-readout]] | readout | demonstrated |

## Composition

- infrastructure: 1
- readout: 1

<!-- CURATED -->















## Conceptual anchors

- [[dispersive-readout-mechanism]] is the measurement-side mechanism note for the dominant superconducting stack in this family: `qubit-readout` is where state information first becomes classical, and `cryogenic-amplification` determines whether that weak signal survives the trip out of the fridge.
- [[divincenzo-criteria]] is the systems-level reason this family belongs in the Zoo at all, because qubit-specific measurement is one of the core platform requirements rather than an optional accessory.
- [[threshold-theorem]] is the downstream filter: readout hardware only matters insofar as it keeps repeated syndrome extraction and feedback below the logical error budget.

## Family structure

- `qubit-readout` is the measurement primitive and should stay platform-comparative: it explains how different qubit families turn quantum state into a discriminable classical signal.
- `cryogenic-amplification` is the enabling hardware stack for the superconducting branch in particular, where the first added noise in the microwave chain strongly sets practical readout fidelity.
- This family should read as an **enabling classical interface layer**, not as a standalone qubit modality. Keep qubit-physics details in the platform notes and use this page to map where control electronics, measurement physics, and signal-chain constraints touch the quantum stack.

## Editorial note

This is a boundary family between quantum hardware and the classical control plane. Keep the curated section focused on architectural role and measurement bottlenecks, not on exhaustive electronics taxonomy.














