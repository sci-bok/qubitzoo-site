---
title: Codes MOC
type: moc
technology_family: Codes
note_count: 3
last_updated: '2026-06-12'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Codes** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[bacon-shor-code]] | encoding | demonstrated |
| [[floquet-codes]] | encoding | proposed |
| [[qldpc-codes]] | encoding | proposed |

## Composition

- encoding: 3

<!-- CURATED -->















































































## Conceptual anchors

- [[threshold-theorem]] is the top-level reason these entries matter architecturally.
- [[erasure-error-vs-pauli-error]] is useful for separating codes that assume ordinary Pauli noise from hardware paths with flagged loss / erasure structure.

## Scope boundary

- `bacon-shor-code`, `floquet-codes`, and `qldpc-codes` live here because their identity is primarily code-theoretic: subsystem structure, measurement schedule, or parity-check sparsity is the main story.
- `surface-code-logical-qubit`, `color-code-logical-qubit`, and `erasure-qubit` stay in [[cross-platform-moc]] because they function as architecture-level roadmapping concepts as much as code families.
- `qldpc-codes` should usually be read together with [[quantum-transduction]] and modular-hardware notes, since its long-range-check promise matters most once distributed connectivity enters the design.

## Editorial note

This MOC is still narrow. It currently captures only families with stable Zoo-level identity. Keep generic code-theory papers in `References/` unless they materially change the hardware-facing story.













































































