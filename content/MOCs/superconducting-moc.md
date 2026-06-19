---
title: Superconducting MOC
type: moc
technology_family: Superconducting
note_count: 21
last_updated: '2026-06-19'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Superconducting** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[tunable-coupler]] | coupling | demonstrated |
| [[binomial-code]] | encoding | demonstrated |
| [[binomial-codes]] | encoding | demonstrated |
| [[circuit-qed]] | infrastructure | demonstrated |
| [[0-pi-qubit]] | qubit | demonstrated |
| [[blochnium]] | qubit | demonstrated |
| [[bosonic-qubit]] | qubit | demonstrated |
| [[cat-codes]] | qubit | demonstrated |
| [[cooper-pair-box-charge-qubit]] | qubit | demonstrated |
| [[cos2phi-qubit]] | qubit | proposed |
| [[dual-rail-superconducting-qubit]] | qubit | demonstrated |
| [[flux-qubit]] | qubit | demonstrated |
| [[fluxonium]] | qubit | demonstrated |
| [[gkp-codes]] | qubit | demonstrated |
| [[gmon]] | qubit | demonstrated |
| [[heavy-fluxonium-qubit]] | qubit | demonstrated |
| [[kerr-cat-qubit]] | qubit | demonstrated |
| [[mergemon]] | qubit | demonstrated |
| [[phase-qubit]] | qubit | demonstrated |
| [[transmon]] | qubit | demonstrated |
| [[xmon]] | qubit | demonstrated |

## Composition

- coupling: 1
- encoding: 2
- infrastructure: 1
- qubit: 17

<!-- CURATED -->





























































































## Conceptual anchors

- [[charge-noise-in-superconducting-qubits]] and [[charge-noise-sweet-spot]] explain the CPB → transmon → protected-superconducting arc.
- [[josephson-junction-as-nonlinear-element]] is the common circuit primitive behind nearly every qubit in this family.
- [[jaynes-cummings-in-circuits]], [[dispersive-readout-mechanism]], and [[resonator-as-quantum-bus]] are the shared circuit-QED infrastructure layer.
- [[bosonic-code-hierarchy]] explains why `cat-codes`, `gkp-codes`, and `binomial-codes` are related but not interchangeable.

## Hardware-assisted fault-tolerance routes

- `transmon`, `xmon`, `gmon`, `flux-qubit`, and the broader circuit-QED stack are the baseline branch: improve raw gate and measurement fidelity, then hand off to [[surface-code-logical-qubit]] or [[color-code-logical-qubit]] for architecture-level scaling.
- `bosonic-qubit`, `cat-codes`, `kerr-cat-qubit`, `gkp-codes`, and `binomial-codes` are the oscillator branch: the hardware itself already starts behaving like a logical primitive, so route first through [[bosonic-code-hierarchy]] and then ask whether the win comes from general cavity QEC or from biased-noise protection.
- `0-pi-qubit`, `cos2phi-qubit`, `blochnium`, and `heavy-fluxonium-qubit` are the protected-circuit branch: the design goal is not merely better coherence, but residual error channels that are structurally easier to correct.
- `dual-rail-superconducting-qubit` is the erasure-conversion branch: the dominant relaxation event is supposed to leave the codespace in a flagged way, so compare it through [[erasure-error-vs-pauli-error]] rather than only through bare gate fidelity.

## Editorial note

This family mixes bare qubits, bosonic encodings, and enabling infrastructure. Keep the generated table exhaustive, but use the evergreen layer to prevent the family page from becoming a flat list.




























































































