---
title: Ion Trap MOC
type: moc
technology_family: Ion Trap
note_count: 2
last_updated: '2026-07-17'
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

## Routing rule

- Enter here when the comparison is about **real deployed trapped-ion systems**, clock-state hyperfine memories, or why Mølmer-Sørensen gates displaced stricter Cirac-Zoller-style sequences.
- Route back to [[trapped-ion-moc]] for modality history or architectural scaling, and out to [[trapped-ion-qubit]] when a reader needs the whole platform picture before species-specific detail.

## Editorial note

Treat this family as the "practical Yb + MS stack" slice of trapped-ion hardware. It should stay tighter and more operational than the broader trapped-ion family page.









































