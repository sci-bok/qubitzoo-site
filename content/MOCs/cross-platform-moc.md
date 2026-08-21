---
title: Cross-Platform MOC
type: moc
technology_family: Cross-Platform
note_count: 10
last_updated: '2026-08-02'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Cross-Platform** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[quantum-gate]] | concept | demonstrated |
| [[bacon-shor-code]] | encoding | demonstrated |
| [[color-code-logical-qubit]] | encoding | demonstrated |
| [[erasure-qubit]] | encoding | demonstrated |
| [[floquet-codes]] | encoding | proposed |
| [[qldpc-codes]] | encoding | proposed |
| [[surface-code-logical-qubit]] | encoding | demonstrated |
| [[classical-control]] | infrastructure | demonstrated |
| [[quantum-transduction]] | infrastructure | demonstrated |
| [[nuclear-magnetic-resonance-qubit]] | qubit | demonstrated |

## Composition

- concept: 1
- encoding: 6
- infrastructure: 2
- qubit: 1

<!-- CURATED -->

## Conceptual anchors

- [[codes-moc]] is the authoritative map when the comparison is about check structure, measurement schedule, or code-family identity; this page takes over when those choices become hardware-wide overhead and systems questions.
- [[threshold-theorem]] is the main bridge from `surface-code-logical-qubit` and `color-code-logical-qubit` back to hardware performance targets.
- [[erasure-error-vs-pauli-error]] separates `erasure-qubit` from the ordinary stabilizer-code story and explains why flagged loss can change the overhead regime.
- [[noise-bias-and-asymmetric-error-channels]] is the complementary lens when the win comes from skewed Pauli channels rather than explicit erasure detection.
- [[divincenzo-criteria]] explains why `classical-control` and `quantum-transduction` belong here even though they are not qubits.

## Architecture stack

- `quantum-gate` is the operation layer: it stays abstract on purpose so the same gate idea can descend either into physical pulse stacks or into encoded logical actions.
- `surface-code-logical-qubit` and `color-code-logical-qubit` are the geometry-and-decoder layer: both answer the threshold problem, but with different overhead, layout, and gate-transversality tradeoffs.
- `bacon-shor-code`, `floquet-codes`, and `qldpc-codes` are the check-structure layer: they move complexity respectively into gauge redundancy, time-ordered measurements, or sparse nonlocal connectivity. Their code-level comparison belongs in [[codes-moc]]; their control, connectivity, and decoder consequences belong here.
- `erasure-qubit` is the noise-model layer: it does not replace a code family so much as change the decoder assumptions under which the other logical encodings should be judged.
- `classical-control` and `quantum-transduction` are the systems layer: one closes the real-time local feedback loop, the other opens the nonlocal modular-network loop.
- `nuclear-magnetic-resonance-qubit` is the historical transfer layer: its shaped pulses, refocusing sequences, and early algorithm demonstrations helped establish portable control abstractions, even though its ensemble processor architecture did not scale.

## NMR as a portability test

[[nuclear-magnetic-resonance-qubit]] appears in this facet because it cleanly separates a platform's **transferable methods** from its **non-transferable scaling assumptions**.

- The portable layer runs toward [[quantum-gate]] and [[classical-control]]: selective rotations, refocusing, composite pulses, and optimal-control methods survived the NMR processor model and became general hardware tools.
- The non-portable layer stays with [[molecular-moc]]: pseudo-pure ensemble preparation, bulk-magnetization readout, and exponentially shrinking signal are properties of the liquid-state architecture, not generic quantum-computing constraints.
- The routing rule is therefore historical and methodological. Use this page to ask what NMR exported to later platforms; use [[molecular-moc]] to judge NMR itself against [[divincenzo-criteria]] and scalable processor requirements.

This distinction prevents an early algorithm demonstration from being mistaken for a scalable systems architecture: gate sequences transferred, but the state-preparation and measurement model did not.

## Family structure

- `surface-code-logical-qubit` and `color-code-logical-qubit` are logical overlays on top of many hardware platforms, so they should point outward to code and threshold concepts rather than read like standalone modalities.
- `erasure-qubit` is a noise-engineering pattern that can be instantiated in multiple families, not a single device recipe.
- `classical-control` and `quantum-transduction` are scaling interfaces: one connects algorithms to physical waveforms, the other connects local processors to networked photonic links.
- `quantum-gate` should stay as the operation-level abstraction that ties these layers together, not become a dumping ground for platform-specific pulse details.
- `nuclear-magnetic-resonance-qubit` is intentionally a secondary facet here and a primary member of [[molecular-moc]]; its cross-platform role is methodological inheritance, not present-day hardware competitiveness.

## Routing rule: when to enter this family

- Enter here when the main comparison is decoder assumptions, logical-overhead scaling, or systems integration rather than device physics.
- Stay in a source hardware family when the central claim is hardware-shaped noise, then cross over here only after the error model is clear. In practice that means reading `kerr-cat-qubit`, `0-pi-qubit`, or `dual-rail-superconducting-qubit` through [[noise-bias-and-asymmetric-error-channels]] or [[erasure-error-vs-pauli-error]] before collapsing them into `surface-code-logical-qubit`, `color-code-logical-qubit`, or `erasure-qubit`.
- Photonic notes should usually enter this family through `erasure-qubit`: stay in [[photonic-moc]] while the question is encoding choice (`dual-rail-photonic-qubit`, `time-bin-photonic-qubit`) or resource construction (`linear-optical-photonic-qubit`, `photonic-cluster-state-mbqc-qubit`, `fusion-based-photonic-qubit`), then cross here only once flagged loss or fusion failure becomes a decoder-overhead question.
- Use `classical-control` and `quantum-transduction` as the two stack edges: one asks whether local feedback can keep up with the code cycle, the other asks whether the logical architecture survives once the machine becomes modular.

## Boundary with the Codes MOC

- Stay in [[codes-moc]] while the live question is *which stabilizers, gauge operators, or measurement schedule define the code*.
- Cross here when the live question becomes *what that code demands from a physical machine*: local-feedback latency for Bacon-Shor or Floquet cycles, long-range connectivity for qLDPC checks, or decoder assumptions for erasure-aware logical qubits.
- `surface-code-logical-qubit`, `color-code-logical-qubit`, and `erasure-qubit` intentionally appear in both facets. In [[codes-moc]] they are code/noise-model families; here they are portable architectural overlays used to compare otherwise unrelated hardware modalities.

## Scope boundary

This facet covers architectural glue: platform-local implementation details remain in their physical-platform maps, while this page identifies concepts that travel across platforms.
