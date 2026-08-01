---
title: Trapped Ion MOC
type: moc
technology_family: Trapped Ion
note_count: 3
last_updated: '2026-08-01'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Trapped Ion** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[cirac-zoller-gate]] | gate | demonstrated |
| [[shuttling-ion-trap-qubit]] | infrastructure | demonstrated |
| [[trapped-ion-qubit]] | qubit | demonstrated |

## Composition

- gate: 1
- infrastructure: 1
- qubit: 1

<!-- CURATED -->

































































































































































## Conceptual anchors

- [[motional-mode-coupling-in-ion-traps]] is the key evergreen note tying the modality to its entangling-gate layer.
- [[coherence-time-hierarchy]] is the right lens for comparing long hyperfine memory times to much faster gate and readout cycles.

## Curated synthesis

The most useful way to read this family is as a **three-layer stack rather than three unrelated notes**.

1. **`trapped-ion-qubit` is the modality baseline**
   - Start there when the question is why ions are still canonical: identical qubits, minute-scale coherence, high-fidelity readout, and shared-mode connectivity.
   - It owns the broad platform tradeoff against superconducting and neutral-atom systems.

2. **`cirac-zoller-gate` is the historical mechanism note**
   - It explains the original phonon-bus idea in its most literal form: map spin information into motion, apply a conditional phase, map back.
   - Read it when the important question is where trapped-ion entangling gates came from conceptually, not which pulse family dominates today.

3. **`shuttling-ion-trap-qubit` is the scaling architecture note**
   - It exists because the same shared-motion resource that gives all-to-all connectivity also stops scaling cleanly in very long chains.
   - QCCD is therefore best understood as an architectural response to motional-mode crowding, not as a new qubit modality.

## Routing rule: when to stay here versus hand off

- Stay in this MOC when the question is about the **platform-wide logic** of trapped ions: why motion is the bus, why long chains saturate, and why transport solves a scaling bottleneck.
- Hand off to [[ion-trap-moc]] when the question becomes the **modern operational stack** built around species-specific clock-state qubits and Mølmer-Sørensen style entangling gates.
- Hand off to [[neutral-atom-moc]] when the comparison shifts from Coulomb-crystal buses to tweezer-rearranged atomic arrays with transient Rydberg interactions.

## Editorial note

This family should remain the broad modality page. Keep species-specific and gate-stack specialization lightweight here, then route to [[ion-trap-moc]] once the reader is really comparing the practical Yb + MS trapped-ion stack.
































































































































































