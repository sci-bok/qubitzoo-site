---
title: Photonic MOC
type: moc
technology_family: Photonic
note_count: 6
last_updated: '2026-07-17'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Photonic** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[dual-rail-photonic-qubit]] | qubit | demonstrated |
| [[fusion-based-photonic-qubit]] | qubit | proposed |
| [[linear-optical-photonic-qubit]] | qubit | demonstrated |
| [[photonic-cluster-state-mbqc-qubit]] | qubit | demonstrated |
| [[photonic-qubit]] | qubit | demonstrated |
| [[time-bin-photonic-qubit]] | qubit | demonstrated |

## Composition

- qubit: 6

<!-- CURATED -->





























































































## Curated synthesis

The highest-value organizing move in this family is to **separate photonic encodings from photonic computation models**. Otherwise the graph quietly conflates “what degree of freedom stores the qubit?” with “how do we actually get entangling power and fault tolerance?”

1. **Encodings optimized for different physical routes**
   - [[dual-rail-photonic-qubit]] is the canonical chip-scale / LOQC encoding when spatial modes and integrated interferometers are the native hardware language.
   - [[time-bin-photonic-qubit]] is the fiber-native encoding when long-distance stability and network transport matter more than on-chip rail geometry.
   - These should be read together through [[erasure-error-vs-pauli-error]] and [[noise-bias-and-asymmetric-error-channels]]: both are loss-dominated photonic qubits, but they package phase stability constraints very differently.

2. **Gate-based linear optics is an architecture, not an encoding**
   - [[linear-optical-photonic-qubit]] is the KLM lineage: minimal interactions, heavy ancilla and feed-forward overhead.
   - It usually rides on encodings like [[dual-rail-photonic-qubit]], but the conceptual payload is architectural: probabilistic optics plus teleportation still clear the [[threshold-theorem]] barrier in principle.

3. **Resource-state / measurement-first photonics is the modern scaling branch**
   - [[photonic-cluster-state-mbqc-qubit]] shifts the burden from online gates to offline cluster-state preparation plus adaptive measurement.
   - [[fusion-based-photonic-qubit]] goes one step further and treats failed entangling attempts as an architectural primitive rather than an exception.
   - Both belong in the same fault-tolerance conversation because they live or die on whether loss and fusion failures stay structured enough for erasure-aware decoding and percolation-style thresholds.

## Where the umbrella note belongs

- `photonic-qubit` should be the **family entry point**, not a peer competitor to the more specific notes. Use it when the question is simply why photons are attractive at all: low transport decoherence, room-temperature optics, and natural network compatibility.
- Hand off from `photonic-qubit` to [[dual-rail-photonic-qubit]] or [[time-bin-photonic-qubit]] when the real comparison is the **encoding degree of freedom**.
- Hand off from `photonic-qubit` to [[linear-optical-photonic-qubit]], [[photonic-cluster-state-mbqc-qubit]], or [[fusion-based-photonic-qubit]] when the real comparison is the **scaling architecture**.
- Once the question stops being optical-hardware-specific and becomes, "what does flagged loss buy the decoder?", cross over to [[cross-platform-moc]] through `erasure-qubit` instead of repeating decoder logic inside this family.

## Editorial note

The next highest-value follow-up is a dedicated evergreen note on the photonic split between **encoding choice** (dual-rail vs time-bin) and **scaling strategy** (KLM vs MBQC vs fusion), but the current pass is enough to stop `photonic-qubit` from floating as an undifferentiated umbrella note.




























































































