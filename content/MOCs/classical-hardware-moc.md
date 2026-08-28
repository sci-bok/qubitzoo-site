---
title: Classical Hardware MOC
type: moc
technology_family: Classical Hardware
note_count: 2
last_updated: '2026-08-27'
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

1. **[[qubit-readout]] is where the quantum processor first has to become legible**
   - Every platform eventually has to map a qubit state onto a classical discriminator, but the physical mechanism differs sharply: cavity-phase shifts in superconducting circuits, fluorescence in atoms and ions, or spin-to-charge conversion in semiconductor devices.
   - That makes [[qubit-readout]] the right umbrella when the comparison is about *how information leaves the qubit* rather than how gates are driven into it.

2. **[[cryogenic-amplification]] is the superconducting bottleneck-breaker inside that story**
   - In the superconducting branch, the raw readout signal is too weak to survive without a quantum-limited first amplifier, so the measurement problem is inseparable from the microwave signal chain.
   - This note should therefore read as a hardware specialization nested under [[qubit-readout]], not as an independent modality.

3. **The important boundary is downstream versus upstream classical hardware**
   - Stay in this family when the question is about readout fidelity, signal-to-noise, multiplexed measurement, or the refrigerator-side analog chain.
   - Hand off to [[classical-control]] when the limiting issue is waveform synthesis, synchronization, or feedback latency before or between gates.
   - Hand off to [[quantum-transduction]] when the machine-scale question becomes how measured or encoded information exits a local cryostat and enters a networked optical link.

## Interface-failure routing matrix

“Readout failure” can name several physically different bottlenecks. Route by the stage that destroys the information, rather than treating every measurement error as a property of the qubit sensor.

| Interface stage | Primary note | Information-processing job | Diagnostic quantity | Routing boundary |
|---|---|---|---|---|
| Quantum state → physical pointer | [[qubit-readout]] | Map the logical state onto cavity phase, fluorescence counts, charge configuration, or another distinguishable observable | State-assignment contrast, back-action, QND character, measurement time | Stay here when the pointer states were never separated cleanly, even with an ideal detector |
| Weak pointer signal → robust analog record | [[cryogenic-amplification]] | Preserve and amplify a superconducting microwave signal before later stages add overwhelming noise | Added noise, gain, bandwidth, saturation power | Enter here when the cavity produced contrast but the first-stage signal chain buried or compressed it; [[dispersive-readout-mechanism]] supplies the upstream cavity pull |
| Analog record → decision → corrective actuation | [[classical-control]] | Digitize, discriminate, synchronize, and return feed-forward within the code cycle | Decision latency, timing jitter, channel synchronization, sustained throughput | Hand off when single-shot discrimination is adequate but the result cannot reach the next operation quickly or deterministically enough |
| Local quantum carrier → network-compatible carrier | [[quantum-transduction]] | Convert microwave or other local quantum excitations into low-loss optical links without destroying coherence | Conversion efficiency, added noise, bandwidth | Use only when the information must remain quantum across a module boundary; ordinary room-temperature readout does not require quantum transduction |

These rows are not a universal serial chain: fluorescence and spin-to-charge readout bypass cryogenic microwave amplification, while a modular processor may transduce a quantum state without measuring it. The matrix is a fault-localization tool. It keeps sensor physics in [[qubit-readout]], superconducting first-stage noise in [[cryogenic-amplification]], feedback timing in [[classical-control]], and coherent interconnect conversion in [[quantum-transduction]].

## Conceptual anchors

- [[dispersive-readout-mechanism]] is the measurement-side mechanism note for the dominant superconducting stack in this family: [[qubit-readout]] is where state information first becomes classical, and [[cryogenic-amplification]] determines whether that weak signal survives the trip out of the fridge.
- [[divincenzo-criteria]] is the systems-level reason this family belongs in the Zoo at all, because qubit-specific measurement is one of the core platform requirements rather than an optional accessory.
- [[threshold-theorem]] is the downstream filter: readout hardware only matters insofar as it keeps repeated syndrome extraction and feedback below the logical error budget.

## Family structure

- [[qubit-readout]] is the measurement primitive and should stay platform-comparative: it explains how different qubit families turn quantum state into a discriminable classical signal.
- [[cryogenic-amplification]] is the enabling hardware stack for the superconducting branch in particular, where the first added noise in the microwave chain strongly sets practical readout fidelity.
- This family should read as an **enabling classical interface layer**, not as a standalone qubit modality. Keep qubit-physics details in the platform notes, hand off upstream-control questions to [[classical-control]], and use this page to map where measurement physics and refrigerator-side signal-chain constraints touch the quantum stack.

## Scope boundary

This is a boundary facet between quantum hardware and the classical control plane. It covers architectural roles and measurement bottlenecks rather than an exhaustive electronics taxonomy.
