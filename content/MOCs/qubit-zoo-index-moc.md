---
title: Qubit Zoo Index MOC
type: moc
technology_family: index
note_count: 81
last_updated: '2026-08-26'
generated_by: pipeline-moc-v1
---

Top-level navigation for the Qubit Zoo through non-exclusive facets. An entry may appear in more than one map, so facet memberships can sum to more than the unique-entry count. These counts describe editorial organization, not platform importance or maturity.

## Family MOCs

- [[classical-hardware-moc]] (2 entries)
- [[codes-moc]] (6 entries)
- [[color-center-moc]] (4 entries)
- [[cross-platform-moc]] (10 entries)
- [[floating-electron-moc]] (1 entries)
- [[molecular-moc]] (3 entries)
- [[neutral-atom-moc]] (4 entries)
- [[photonic-moc]] (9 entries)
- [[semiconducting-moc]] (12 entries)
- [[spin-photon-moc]] (5 entries)
- [[super-semi-moc]] (6 entries)
- [[superconducting-moc]] (22 entries)
- [[topological-moc|Majorana / Topological]] (3 entries)
- [[trapped-ion-moc]] (5 entries)

## Editorial policy

- [[qubit-zoo-inclusion-editorial-policy]]

<!-- CURATED -->

## How to use this map

- Start with a family MOC when you want modality-local comparisons.
- Jump to Evergreen notes when you want mechanism-level synthesis that cuts across families.
- Treat Reference notes as evidence nodes, not the main conceptual layer.

## High-value cross-family slice: defect-spin networking

- Start in [[color-center-moc]] for the benchmark room-temperature defect-spin story centered on [[nv-center-qubit]].
- Move to [[spin-photon-moc]] when the real comparison is remote entanglement, photon indistinguishability, or telecom-native links via [[siv-color-center-qubit]] and [[t-center-qubit]].
- Use [[divincenzo-criteria]] as the common scorecard, then [[coherence-time-hierarchy]] to track where each platform parks the cost: local coherence, cryogenic overhead, or photonic interface quality.

## High-value cross-family slice: stationary-to-flying interfaces

- Start in [[superconducting-moc]] or [[semiconducting-moc]] while the information is still stored and controlled in a microwave-native stationary qubit. Local resonators and exchange links can move excitations around a processor, but they do not by themselves produce a low-loss fibre channel.
- Move through [[cross-platform-moc]] and [[quantum-transduction]] when the architecture must convert microwave quantum information into optical photons. Judge this route by end-to-end efficiency, added noise, bandwidth, and refrigerator heat load together; optimizing any one metric in isolation can hide the real systems cost.
- Take the native-emitter alternative through [[spin-photon-moc]] when the stationary qubit already has a useful optical transition. This can remove a frequency-conversion stage, but it moves the burden to photon collection, indistinguishability, spectral stability, and the emitter's cryogenic envelope.
- End in [[photonic-moc]] once the question becomes which flying encoding or optical computation model carries the information onward. Use [[divincenzo-criteria]] to compare the two interface strategies without confusing a good local qubit with a complete networking stack.

## High-value cross-family slice: semiconductor-superconductor boundary

- Use [[super-semi-moc]] when the same InAs/Al or Josephson-weak-link hardware is being used for tunable circuit physics, Andreev-spin control, or protected-circuit variants like [[ferbo-qubit]].
- Switch to [[topological-moc]] when the decisive claim is nonlocal parity encoding or a topological superconducting channel, as in [[majorana-topological-qubit]], [[planar-josephson-junction-qubit]], and [[tetron-qubit]].
- Keep [[josephson-junction-as-nonlinear-element]] and [[spin-orbit-coupling-for-qubit-control]] as the shared mechanism notes, then use [[threshold-theorem]] to judge whether the topological branch actually earns its overhead-reduction promise.

## High-value cross-family slice: two-qubit interaction carriers

- Start in [[semiconducting-moc]] when neighboring spins entangle through electrically pulsed exchange. Read [[exchange-interaction-in-quantum-dots]] for how gate voltages manufacture $J(t)$, then [[heisenberg-exchange-in-quantum-dots]] for the logical unitary after the charge sector has been projected out. The scaling debt is local wiring, charge sensitivity, and routing beyond a nearest-neighbor exchange graph.
- Move to [[superconducting-moc]] when a microwave resonator or tunable coupler mediates the interaction. [[resonator-as-quantum-bus]] explains the shared-mode route; the architectural comparison should track parasitic $ZZ$, idle isolation, frequency crowding, and coupler calibration rather than treating every connected edge as equivalent.
- Use [[trapped-ion-moc]] when the carrier is a collective phonon mode. [[motional-mode-coupling-in-ion-traps]] explains why ions can interact across a chain and why that advantage eventually creates mode-crowding, heating, and closure constraints that motivate shuttling into smaller interaction zones.
- Use [[neutral-atom-moc]] when the interaction is borrowed transiently from Rydberg excitation rather than stored in a persistent bus. [[rydberg-blockade-mechanism]] ties gate range to blockade strength and geometry, while tweezer rearrangement changes which pairs are brought into that interaction neighborhood.
- Compare these branches by asking three questions in order: **what carries the interaction, how completely can it be turned off or disentangled at gate end, and what resource must be routed or recalibrated as the processor grows?** Raw two-qubit fidelity alone hides the architectural cost that distinguishes direct exchange, virtual photons, collective motion, and blockade.

## High-value cross-family slice: hardware-assisted fault tolerance

- Start in [[superconducting-moc]] when the win is being claimed at the device layer: bosonic encodings, protected circuits, cat-bias engineering, or erasure-converting superconducting encodings all live there first.
- Move through [[codes-moc]] when the next question is which check structure, measurement schedule, or connectivity tradeoff best matches that hardware; this is where Bacon-Shor, Floquet, qLDPC, surface-code, and color-code choices are compared as code families.
- Move to [[cross-platform-moc]] when the comparison becomes hardware-wide overhead, decoder assumptions, feedback latency, or modular systems architecture via [[erasure-qubit]], [[surface-code-logical-qubit]], [[color-code-logical-qubit]], [[classical-control]], and [[quantum-transduction]].
- Use [[bosonic-code-hierarchy]], [[noise-bias-and-asymmetric-error-channels]], [[erasure-error-vs-pauli-error]], and [[threshold-theorem]] as the four-note bridge from hardware mechanism to architectural consequence.
