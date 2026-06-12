---
title: Cross-Platform MOC
type: moc
technology_family: Cross-Platform
note_count: 6
last_updated: '2026-06-12'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Cross-Platform** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[quantum-gate]] | concept | demonstrated |
| [[color-code-logical-qubit]] | encoding | demonstrated |
| [[erasure-qubit]] | encoding | demonstrated |
| [[surface-code-logical-qubit]] | encoding | demonstrated |
| [[classical-control]] | infrastructure | demonstrated |
| [[quantum-transduction]] | infrastructure | demonstrated |

## Composition

- concept: 1
- encoding: 3
- infrastructure: 2

<!-- CURATED -->



































## Conceptual anchors

- [[threshold-theorem]] is the main bridge from `surface-code-logical-qubit` and `color-code-logical-qubit` back to hardware performance targets.
- [[erasure-error-vs-pauli-error]] separates `erasure-qubit` from the ordinary stabilizer-code story and explains why flagged loss can change the overhead regime.
- [[noise-bias-and-asymmetric-error-channels]] is the complementary lens when the win comes from skewed Pauli channels rather than explicit erasure detection.
- [[divincenzo-criteria]] explains why `classical-control` and `quantum-transduction` belong here even though they are not qubits.

## Architecture stack

- `quantum-gate` is the operation layer: it stays abstract on purpose so the same gate idea can descend either into physical pulse stacks or into encoded logical actions.
- `surface-code-logical-qubit` and `color-code-logical-qubit` are the geometry-and-decoder layer: both answer the threshold problem, but with different overhead, layout, and gate-transversality tradeoffs.
- `erasure-qubit` is the noise-model layer: it does not replace a code family so much as change the decoder assumptions under which the other logical encodings should be judged.
- `classical-control` and `quantum-transduction` are the systems layer: one closes the real-time local feedback loop, the other opens the nonlocal modular-network loop.

## Family structure

- `surface-code-logical-qubit` and `color-code-logical-qubit` are logical overlays on top of many hardware platforms, so they should point outward to code and threshold concepts rather than read like standalone modalities.
- `erasure-qubit` is a noise-engineering pattern that can be instantiated in multiple families, not a single device recipe.
- `classical-control` and `quantum-transduction` are scaling interfaces: one connects algorithms to physical waveforms, the other connects local processors to networked photonic links.
- `quantum-gate` should stay as the operation-level abstraction that ties these layers together, not become a dumping ground for platform-specific pulse details.

## Editorial note

This family exists for architectural glue. Keep platform-local implementation details in the source hardware families, and use this page to clarify which concepts travel across platforms.

































