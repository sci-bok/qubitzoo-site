---
title: Codes MOC
type: moc
technology_family: Codes
note_count: 3
last_updated: '2026-08-01'
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

































































































































































## Curated synthesis

The cleanest way to read this family is that each entry makes a **different bet about where to spend complexity** in fault tolerance, and that bet matters more than the shared label “code.”

1. **[[bacon-shor-code]] spends complexity in redundancy, not check hardware**
   - The main win is subsystem structure: measure only weight-2 gauge operators, then reconstruct the heavier stabilizer information classically.
   - Route here when the hardware can do repeated local parity checks reliably but deeper ancilla-mediated stabilizer extraction is still the bottleneck.

2. **[[floquet-codes]] spend complexity in time ordering**
   - The code is not static; logical protection emerges over a measurement cycle.
   - Route here when the key question is whether a platform would rather keep checks two-body and local, even if that means accepting a stroboscopic decoder and schedule-aware syndrome logic.

3. **[[qldpc-codes]] spend complexity in connectivity and decoding**
   - The prize is asymptotically lower overhead, but the cost is sparse nonlocal check structure plus more demanding decoders.
   - Route here only once the discussion has already moved beyond nearest-neighbor patch layouts and toward modular links, shuttling, or otherwise nonlocal hardware.

Taken together, this family is best seen as the place where the Zoo asks **which bottleneck is actually dominant**: measurement weight, measurement schedule, or architectural connectivity. Once the answer becomes mostly about decoder assumptions or logical-overhead comparisons across many hardware families, hand off to [[cross-platform-moc]].

## Conceptual anchors

- [[threshold-theorem]] is the top-level reason these entries matter architecturally.
- [[erasure-error-vs-pauli-error]] is useful for separating codes that assume ordinary Pauli noise from hardware paths with flagged loss / erasure structure.

## Scope boundary

- `bacon-shor-code`, `floquet-codes`, and `qldpc-codes` live here because their identity is primarily code-theoretic: subsystem structure, measurement schedule, or parity-check sparsity is the main story.
- `surface-code-logical-qubit`, `color-code-logical-qubit`, and `erasure-qubit` stay in [[cross-platform-moc]] because they function as architecture-level roadmapping concepts as much as code families.
- `qldpc-codes` should usually be read together with [[quantum-transduction]] and modular-hardware notes, since its long-range-check promise matters most once distributed connectivity enters the design.

## Editorial note

This MOC is still narrow. It currently captures only families with stable Zoo-level identity. Keep generic code-theory papers in `References/` unless they materially change the hardware-facing story.































































































































































