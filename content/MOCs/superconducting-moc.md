---
title: Superconducting MOC
type: moc
technology_family: Superconducting
note_count: 21
last_updated: '2026-07-03'
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
- `0-pi-qubit`, `cos2phi-qubit`, `blochnium`, and `heavy-fluxonium-qubit` are the protected-circuit branch, but they are not interchangeable. The real split is whether the design is buying protection from a sweet-spot-plus-matrix-element strategy, from a duality regime, or from a symmetry-engineered multi-axis potential.
- `dual-rail-superconducting-qubit` is the erasure-conversion branch: the dominant relaxation event is supposed to leave the codespace in a flagged way, so compare it through [[erasure-error-vs-pauli-error]] rather than only through bare gate fidelity.

## Protected-circuit routing

- `heavy-fluxonium-qubit` is the **nearest-term coherence-first branch**. It still lives squarely inside familiar fluxonium control and readout practice, but uses disjoint-support wavefunctions and sweet-spot operation to suppress matrix elements before the error ever reaches the decoder.
- `blochnium` is the **duality branch**. Read it when the interesting claim is quasicharge physics, large anharmonicity, and flux-dispersion flattening, not maximal passive protection in the 0-π sense.
- `0-pi-qubit` and `cos2phi-qubit` are the **symmetry-engineered protection branch**. They belong together because both aim for multi-axis protection by reshaping the circuit potential itself, even though `0-pi-qubit` is experimentally ahead and `cos2phi-qubit` is still a more aspirational construction.
- `dual-rail-superconducting-qubit` should sit adjacent to this branch, not inside it: the payoff is still lower logical overhead, but via flagged leakage and erasure structure rather than suppressed in-code-space matrix elements.

## Boundary with the super-semi family

Route superconducting descendants to [[super-semi-moc]] only when the semiconductor weak link or Andreev physics becomes part of the qubit's defining control story. If the central claim is still protected superconducting-circuit design, cavity coupling, or oscillator-level encoding, keep it here even when the fabrication stack overlaps materially with hybrid devices.

## Editorial note

This family mixes bare qubits, bosonic encodings, and enabling infrastructure. Keep the generated table exhaustive, but use the evergreen layer to prevent the family page from becoming a flat list.






































































































