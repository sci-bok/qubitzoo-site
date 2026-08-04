---
title: Superconducting MOC
type: moc
technology_family: Superconducting
note_count: 22
last_updated: '2026-08-02'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Superconducting** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[tunable-coupler]] | coupling | demonstrated |
| [[binomial-codes]] | encoding | demonstrated |
| [[circuit-qed]] | infrastructure | demonstrated |
| [[0-pi-qubit]] | qubit | demonstrated |
| [[bifluxon-qubit]] | qubit | demonstrated |
| [[blochnium]] | qubit | demonstrated |
| [[bosonic-qubit]] | qubit | demonstrated |
| [[cat-codes]] | qubit | demonstrated |
| [[cooper-pair-box-charge-qubit]] | qubit | demonstrated |
| [[cos2phi-qubit]] | qubit | demonstrated |
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
| [[unimon-qubit]] | qubit | demonstrated |
| [[xmon]] | qubit | demonstrated |

## Composition

- coupling: 1
- encoding: 1
- infrastructure: 1
- qubit: 19

<!-- CURATED -->

## Conceptual anchors

- [[charge-noise-in-superconducting-qubits]] and [[charge-noise-sweet-spot]] explain the CPB → transmon → protected-superconducting arc.
- [[josephson-junction-as-nonlinear-element]] is the common circuit primitive behind nearly every qubit in this family.
- [[jaynes-cummings-in-circuits]], [[dispersive-readout-mechanism]], and [[resonator-as-quantum-bus]] are the shared circuit-QED infrastructure layer.
- [[bosonic-code-hierarchy]] explains why `cat-codes`, `gkp-codes`, and `binomial-codes` are related but not interchangeable.

## Four-branch reading map

| Branch | What it is really optimizing | Best entry points | Evergreen lens |
|---|---|---|---|
| Baseline circuit-QED branch | Fast microwave control, scalable readout, and tunable two-qubit gates in a weakly anharmonic artificial atom stack | `transmon`, `xmon`, `gmon`, `tunable-coupler`, `circuit-qed` | [[josephson-junction-as-nonlinear-element]], [[dispersive-readout-mechanism]], [[resonator-as-quantum-bus]] |
| Protected-circuit branch | Suppress sensitivity before decoding by reshaping the circuit landscape or exploiting duality | `fluxonium`, `heavy-fluxonium-qubit`, `blochnium`, `0-pi-qubit`, `cos2phi-qubit`, `bifluxon-qubit` | [[charge-noise-sweet-spot]], [[coherence-time-hierarchy]], [[noise-bias-and-asymmetric-error-channels]] |
| Bosonic / oscillator branch | Push error correction partly into a long-lived cavity mode instead of a single anharmonic junction mode | `bosonic-qubit`, `cat-codes`, `kerr-cat-qubit`, `gkp-codes`, `binomial-codes` | [[bosonic-code-hierarchy]], [[noise-bias-and-asymmetric-error-channels]], [[erasure-error-vs-pauli-error]] |
| Rail / erasure branch | Turn dominant relaxation or leakage events into flagged faults that the decoder can exploit | `dual-rail-superconducting-qubit` | [[erasure-error-vs-pauli-error]], [[threshold-theorem]] |

A useful routing rule is that `circuit-qed` is **infrastructure, not a peer qubit**. Enter it when the live question is about readout, coupling, resonators, or cavity-mediated control. Enter `transmon`, `fluxonium`, `blochnium`, or the bosonic-code notes when the live question is what degree of freedom is actually carrying the logical information.

## Hardware-assisted fault-tolerance routes

- `transmon`, `xmon`, `gmon`, `flux-qubit`, and the broader circuit-QED stack are the baseline branch: improve raw gate and measurement fidelity, then hand off to [[surface-code-logical-qubit]] or [[color-code-logical-qubit]] for architecture-level scaling.
- `bosonic-qubit`, `cat-codes`, `kerr-cat-qubit`, `gkp-codes`, and `binomial-codes` are the oscillator branch: the hardware itself already starts behaving like a logical primitive, so route first through [[bosonic-code-hierarchy]] and then ask whether the win comes from general cavity QEC or from biased-noise protection.
- `0-pi-qubit`, `cos2phi-qubit`, `bifluxon-qubit`, `blochnium`, and `heavy-fluxonium-qubit` are the protected-circuit branch, but they are not interchangeable. The bifluxon uses odd-charge Aharonov-Casher interference in a split CPB to conserve fluxon parity; the others buy protection through different circuit symmetries or parameter regimes.
- [[unimon-qubit]] belongs near the baseline/protected boundary: a single junction embedded in a multimode resonator yields strong anharmonicity at a flux sweet spot, but it is not a parity-protected code.
- `dual-rail-superconducting-qubit` is the erasure-conversion branch: the dominant relaxation event is supposed to leave the codespace in a flagged way, so compare it through [[erasure-error-vs-pauli-error]] rather than only through bare gate fidelity.

## Protected-circuit routing

- `heavy-fluxonium-qubit` is the **nearest-term coherence-first branch**. It still lives squarely inside familiar fluxonium control and readout practice, but uses disjoint-support wavefunctions and sweet-spot operation to suppress matrix elements before the error ever reaches the decoder.
- `blochnium` is the **duality branch**. Read it when the interesting claim is quasicharge physics, large anharmonicity, and flux-dispersion flattening, not maximal passive protection in the 0-π sense.
- `0-pi-qubit` and `cos2phi-qubit` are the **symmetry-engineered protection branch**. Both are experimentally demonstrated, but neither yet eliminates active error correction: the cos(2φ) route strongly suppresses charge-coupled relaxation while present interference-based devices remain flux-noise limited.
- `dual-rail-superconducting-qubit` should sit adjacent to this branch, not inside it: the payoff is still lower logical overhead, but via flagged leakage and erasure structure rather than suppressed in-code-space matrix elements.

## Boundary with the super-semi family

Route superconducting descendants to [[super-semi-moc]] only when the semiconductor weak link or Andreev physics becomes part of the qubit's defining control story. If the central claim is still protected superconducting-circuit design, cavity coupling, or oscillator-level encoding, keep it here even when the fabrication stack overlaps materially with hybrid devices.

## Scope boundary

This facet currently mixes bare qubits, bosonic encodings, and enabling infrastructure. Its table is exhaustive within the facet, while the Evergreen links distinguish those different conceptual layers.
