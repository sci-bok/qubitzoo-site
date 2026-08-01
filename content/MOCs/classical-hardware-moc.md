---
title: Classical Hardware MOC
type: moc
technology_family: Classical Hardware
note_count: 2
last_updated: '2026-08-01'
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

















## Curated synthesis

This family is best read as the **measurement-side classical interface**, not as the whole control stack.

1. **`qubit-readout` is where the quantum processor first has to become legible**
   - Every platform eventually has to map a qubit state onto a classical discriminator, but the physical mechanism differs sharply: cavity-phase shifts in superconducting circuits, fluorescence in atoms and ions, or spin-to-charge conversion in semiconductor devices.
   - That makes `qubit-readout` the right umbrella when the comparison is about *how information leaves the qubit* rather than how gates are driven into it.

2. **`cryogenic-amplification` is the superconducting bottleneck-breaker inside that story**
   - In the superconducting branch, the raw readout signal is too weak to survive without a quantum-limited first amplifier, so the measurement problem is inseparable from the microwave signal chain.
   - This note should therefore read as a hardware specialization nested under `qubit-readout`, not as an independent modality.

3. **The important boundary is downstream versus upstream classical hardware**
   - Stay in this family when the question is about readout fidelity, signal-to-noise, multiplexed measurement, or the refrigerator-side analog chain.
   - Hand off to [[classical-control]] when the limiting issue is waveform synthesis, synchronization, or feedback latency before or between gates.
   - Hand off to [[quantum-transduction]] when the machine-scale question becomes how measured or encoded information exits a local cryostat and enters a networked optical link.








































## Conceptual anchors

- [[dispersive-readout-mechanism]] is the measurement-side mechanism note for the dominant superconducting stack in this family: `qubit-readout` is where state information first becomes classical, and `cryogenic-amplification` determines whether that weak signal survives the trip out of the fridge.
- [[divincenzo-criteria]] is the systems-level reason this family belongs in the Zoo at all, because qubit-specific measurement is one of the core platform requirements rather than an optional accessory.
- [[threshold-theorem]] is the downstream filter: readout hardware only matters insofar as it keeps repeated syndrome extraction and feedback below the logical error budget.

## Family structure

- `qubit-readout` is the measurement primitive and should stay platform-comparative: it explains how different qubit families turn quantum state into a discriminable classical signal.
- `cryogenic-amplification` is the enabling hardware stack for the superconducting branch in particular, where the first added noise in the microwave chain strongly sets practical readout fidelity.
- This family should read as an **enabling classical interface layer**, not as a standalone qubit modality. Keep qubit-physics details in the platform notes, hand off upstream-control questions to [[classical-control]], and use this page to map where measurement physics and refrigerator-side signal-chain constraints touch the quantum stack.

## Editorial note

This is a boundary family between quantum hardware and the classical control plane. Keep the curated section focused on architectural role and measurement bottlenecks, not on exhaustive electronics taxonomy.























































