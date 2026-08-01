---
title: Ion Trap MOC
type: moc
technology_family: Ion Trap
note_count: 2
last_updated: '2026-08-01'
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

## Curated synthesis

This page should read as the **practical trapped-ion stack that most commercial and benchmark-focused discussion now defaults to**.

- `ytterbium-hyperfine-qubit` is the memory-and-readout anchor: clock-state storage, straightforward fluorescence detection, and the long coherence margins that make Yb$^+$ such a durable systems choice.
- `molmer-sorenson-gate` is the control-and-entanglement anchor: virtual-phonon XX interactions, robustness to imperfect ground-state cooling, and the pulse-shaping path to 99.9%+ two-qubit fidelities.
- Read together, the pair explains why many modern trapped-ion conversations collapse into a single operational bundle: **Yb hyperfine qubits for clean storage, MS gates for routine entanglement, and motional engineering as the shared bottleneck**.

## Boundary with the broader trapped-ion family

- [[trapped-ion-moc]] owns the modality-wide story: the original Cirac-Zoller logic, the broader platform tradeoff, and QCCD scaling architecture.
- This page is narrower on purpose. It is for the question, "what is the modern workhorse ion-trap stack in practice?"
- Do not let it become a duplicate of `trapped-ion-qubit`; keep it centered on the species-plus-gate bundle that dominates current implementations.

## Boundary with coherence-first neutral atoms

Readers often land here from clock-state language that also appears in [[alkaline-earth-neutral-atom-clock-qubit]] and [[nuclear-spin-neutral-atom-qubit]]. The right split is not "which platform has the quieter atomic states?" but "what bus and scaling architecture those quiet states are embedded in."

- Stay here when the answer is **shared motion in a Coulomb crystal**: [[ytterbium-hyperfine-qubit]] plus [[molmer-sorenson-gate]] is the canonical package where long-lived memory is only half the story and motional control is the real systems constraint.
- Route to [[neutral-atom-moc]] when the answer is **tweezer or lattice geometry plus transient Rydberg interaction**, even if the storage manifold itself sounds clock-like or nuclear-spin-like.
- A useful mnemonic: Yb$^+$ clock-state qubits and alkaline-earth neutral-atom clock qubits share a coherence-first instinct, but ions pay their complexity bill in phonon-bus calibration while neutral atoms pay it in optical-manifold separation, array assembly, and atom-loss management.

## Routing rule

- Enter here when the comparison is about **real deployed trapped-ion systems**, clock-state hyperfine memories, or why Mølmer-Sørensen gates displaced stricter Cirac-Zoller-style sequences.
- Route back to [[trapped-ion-moc]] for modality history or architectural scaling, out to [[trapped-ion-qubit]] when a reader needs the whole platform picture before species-specific detail, and across to [[neutral-atom-moc]] when the real comparison is between two coherence-first atomic stacks with different entangling buses.

## Editorial note

Treat this family as the "practical Yb + MS stack" slice of trapped-ion hardware. It should stay tighter and more operational than the broader trapped-ion family page.
























































