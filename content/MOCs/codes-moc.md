---
title: Codes MOC
type: moc
technology_family: Codes
note_count: 6
last_updated: '2026-08-08'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Codes** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[bacon-shor-code]] | encoding | demonstrated |
| [[color-code-logical-qubit]] | encoding | demonstrated |
| [[erasure-qubit]] | encoding | demonstrated |
| [[floquet-codes]] | encoding | proposed |
| [[qldpc-codes]] | encoding | proposed |
| [[surface-code-logical-qubit]] | encoding | demonstrated |

## Composition

- encoding: 6

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

## Hardware–code co-design routing

| Entry | Primary resource it exploits | Hardware burden it moves or accepts | Read next when... |
|---|---|---|---|
| [[surface-code-logical-qubit]] | A regular 2D nearest-neighbor patch with repeated local checks | Many physical qubits and fast, sustained syndrome extraction | the question becomes whether noise bias or erasure information changes the baseline patch overhead |
| [[color-code-logical-qubit]] | Transversal Clifford gates and three-colorable stabilizer geometry | Higher-weight checks and a different decoding / circuit-level threshold trade | transversal gates matter enough to justify harder stabilizer extraction |
| [[bacon-shor-code]] | Low-weight gauge measurements | Redundant subsystem encoding plus classical reconstruction of stabilizers | local parity measurement is easier than direct high-weight checks |
| [[floquet-codes]] | Time-ordered low-weight measurements | Schedule-aware control and a stroboscopic decoder | the hardware prefers simple checks but can sustain precise cyclic timing |
| [[qldpc-codes]] | Sparse checks with finite rate and favorable asymptotic overhead | Nonlocal connectivity and more demanding decoding | modular links, shuttling, or another long-range interaction layer is already credible |
| [[erasure-qubit]] | Reliable fault-location side information | Leakage / loss checks and high flag-detection fidelity | the decoder should compare known fault locations with the residual unflagged Pauli channel |

The first five rows choose a **code structure**. The last row changes the **information supplied to the decoder** and can therefore be layered onto several code structures rather than selected as a mutually exclusive geometry. Keep that distinction explicit: a surface-code or color-code implementation may also be erasure-aware, and its overhead should then be evaluated with [[erasure-error-vs-pauli-error]] rather than a generic depolarizing-noise threshold.

## Scope boundary

- This is the authoritative code-family map. `bacon-shor-code`, `floquet-codes`, and `qldpc-codes` are primary members because code structure is their main identity.
- `surface-code-logical-qubit`, `color-code-logical-qubit`, and `erasure-qubit` appear here through explicit MOC facets while remaining primary members of [[cross-platform-moc]], where their architectural consequences are compared.
- `qldpc-codes` should usually be read together with [[quantum-transduction]] and modular-hardware notes, since its long-range-check promise matters most once distributed connectivity enters the design.

Zoo coverage is intentionally selective: a code appears here when it has a stable hardware-facing identity, demonstrated logical role, or materially different overhead/noise tradeoff. Generic code-theory papers remain in `References/`.
