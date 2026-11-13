---
title: Qubit Zoo Index MOC
type: moc
technology_family: index
note_count: 82
last_updated: '2026-11-07'
generated_by: pipeline-moc-v1
---

Top-level navigation for the Qubit Zoo through non-exclusive facets. An entry may appear in more than one map, so facet memberships can sum to more than the unique-entry count. These counts describe editorial organization, not platform importance or maturity.

## Family MOCs

- [[classical-hardware-moc]] (2 entries)
- [[codes-moc]] (6 entries)
- [[color-center-moc]] (4 entries)
- [[cross-platform-moc]] (12 entries)
- [[floating-electron-moc]] (1 entries)
- [[molecular-moc]] (3 entries)
- [[neutral-atom-moc]] (4 entries)
- [[photonic-moc]] (9 entries)
- [[semiconducting-moc]] (12 entries)
- [[spin-photon-moc]] (5 entries)
- [[super-semi-moc]] (6 entries)
- [[superconducting-moc]] (20 entries)
- [[topological-moc|Majorana / Topological]] (4 entries)
- [[trapped-ion-moc]] (5 entries)

## Editorial policy

- [[qubit-zoo-inclusion-editorial-policy]]

<!-- CURATED -->

## How to use this map

- Start with a family MOC when you want modality-local comparisons.
- Start with [[quantum-hardware]] when the first question is which layer of the machine you are looking at: physical qubit, local control/readout infrastructure, or cross-platform architectural glue.
- Switch to [[divincenzo-criteria]] when the question changes from *where does this belong?* to *does this platform satisfy the requirements of a usable quantum computer or network node?*
- Jump to Evergreen notes when you want mechanism-level synthesis that cuts across families.
- Treat Reference notes as evidence nodes, not the main conceptual layer.

This separation prevents three different tasks from collapsing into one page: this index owns exhaustive family navigation, [[quantum-hardware]] owns stack-layer routing, and [[divincenzo-criteria]] owns platform evaluation. A hardware note may legitimately point to all three, but each link should answer a different question.

## High-value cross-family slice: defect-spin networking

- Start in [[color-center-moc]] for the benchmark room-temperature defect-spin story centered on [[nv-center-qubit]].
- Move to [[spin-photon-moc]] when the real comparison is remote entanglement, photon indistinguishability, or telecom-native links via [[siv-color-center-qubit]] and [[t-center-qubit]].
- Use [[divincenzo-criteria]] as the common scorecard, then [[coherence-time-hierarchy]] to track where each platform parks the cost: local coherence, cryogenic overhead, or photonic interface quality.

## High-value cross-family slice: stationary-to-flying interfaces

- Start in [[superconducting-moc]] or [[semiconducting-moc]] while the information is still stored and controlled in a microwave-native stationary qubit. Local resonators and exchange links can move excitations around a processor, but they do not by themselves produce a low-loss fibre channel.
- Move through [[cross-platform-moc]] and [[quantum-transduction]] when the architecture must convert microwave quantum information into optical photons. Judge this route by end-to-end efficiency, added noise, bandwidth, and refrigerator heat load together; optimizing any one metric in isolation can hide the real systems cost.
- Take the native-emitter alternative through [[spin-photon-moc]] when the stationary qubit already has a useful optical transition. This can remove a frequency-conversion stage, but it moves the burden to photon collection, indistinguishability, spectral stability, and the emitter's cryogenic envelope.
- End in [[photonic-moc]] once the question becomes which flying encoding or optical computation model carries the information onward. Use [[divincenzo-criteria]] to compare the two interface strategies without confusing a good local qubit with a complete networking stack.

## High-value cross-family slice: what job is the resonator doing?

- Start with [[vacuum-rms-field-scaling]] when the resonator is still a **geometry resource**: mode volume, impedance, and capacitance determine the zero-point field available before any particular qubit is attached. Continue to [[jaynes-cummings-in-circuits]] only after a qubit dipole matrix element turns that field into a coupling rate $g$.
- Stay in [[superconducting-moc]] or [[floating-electron-moc]] when a microwave resonator is used in the **dispersive regime**. [[dispersive-readout-mechanism]] owns the useful cavity pull $\chi\sim g^2/\Delta$; [[purcell-protection-via-detuning]] owns the unwanted decay channel $\gamma_\kappa\sim\kappa(g/\Delta)^2$. These are linked consequences of the same small admixture, not interchangeable labels.
- Route to [[resonator-as-quantum-bus]] when the resonator mediates a **local two-qubit interaction** through virtual photons. The architectural question is then whether the bus returns to vacuum and how well residual exchange or $ZZ$ can be suppressed at idle—not how efficiently a real photon leaves the processor.
- Route to [[spin-photon-moc]] and [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] when a resonant optical cavity is meant to **accelerate emission into a collected mode**. Judge that branch by cooperativity or Purcell factor, emitter-mode overlap, spectral stability, and extraction efficiency; do not continue the dispersive $\kappa(g/\Delta)^2$ formula to $\Delta=0$.
- Move to [[cross-platform-moc]] and [[quantum-transduction]] only when the remaining task is to preserve an unmeasured quantum state while converting between local and network-compatible carriers. A readout resonator, a virtual-photon bus, and a cavity-enhanced optical emitter can all be excellent devices without yet being transducers.

The routing test is therefore: **is the mode supplying a field, revealing a state, mediating a local interaction, shaping an emitted photon, or converting a carrier?** Naming that job first prevents the shared word “cavity” from collapsing incompatible operating regimes and evidence standards.

## High-value cross-family slice: measurement-to-feedback closure

- Start in the source platform MOC while the failure is still quantum-to-pointer physics: cavity pull in [[superconducting-moc]], state-selective fluorescence in [[trapped-ion-moc]] or [[neutral-atom-moc]], spin-to-charge conversion in [[semiconducting-moc]], and mode-resolved detection in [[photonic-moc]]. Use [[qubit-readout]] as the platform-comparative umbrella and [[dispersive-readout-mechanism]] only for the superconducting cavity branch.
- Move to [[classical-hardware-moc]] once a physical pointer exists but must survive collection, gain, digitization, and discrimination. [[cryogenic-amplification]] is a specialization of the microwave route, not a universal readout stage; optical and charge-sensor branches reach the classical record through different front ends.
- Move to [[cross-platform-moc]] and [[classical-control]] when the record must become a synchronized decision and corrective waveform. Budget the whole loop—measurement, capture, inference, decoding, routing, and actuation—because a fast decoder cannot recover time or information already lost upstream.
- End in [[codes-moc]] and [[threshold-theorem]] when judging whether repeated syndrome extraction actually supports fault tolerance. Compare assignment error, back-action, leakage, cycle time, sustained throughput, and latency tails together; a high single-shot readout fidelity or a low component latency is not by itself a closed error-correction loop.
- Route separately through [[erasure-error-vs-pauli-error]] when the measurement identifies *where* information was lost. A dark result, missing photon, or absent atom is only an erasure resource if the protocol distinguishes flagged loss from an ordinary hidden state-assignment error.

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

## High-value cross-family slice: storage manifold versus interaction manifold

- Start in [[neutral-atom-moc]] for the cleanest deliberate separation: information idles in hyperfine, clock, or nuclear-spin states, then temporarily borrows a Rydberg manifold for entanglement. [[coherence-time-hierarchy]] explains the storage advantage; [[rydberg-blockade-mechanism]] explains the decay, leakage, and laser-control debt introduced during gates.
- Move to [[semiconducting-moc]] when encoded spin information is protected from uniform magnetic noise but electrical exchange control still borrows charge admixture. Read [[decoherence-free-subspace]] for what the encoding removes and [[charge-noise-sweet-spot]] for the residual cost of making that protected information electrically steerable.
- Use [[trapped-ion-moc]] when internal electronic or hyperfine states store the qubit while collective motion is populated only as a gate bus. [[motional-mode-coupling-in-ion-traps]] makes the key success condition explicit: the phonon trajectory must close so the logical state disentangles from motion at gate end.
- Use [[superconducting-moc]] when the separation is engineered through dressed modes rather than distinct atomic manifolds. A data qubit can stay detuned while virtual cavity photons or a tunable coupler activate an interaction, but [[purcell-protection-via-detuning]] and [[resonator-as-quantum-bus]] show that the borrowed mode still leaves lifetime and residual-coupling costs.
- Compare these branches by asking: **where does information wait, what auxiliary degree of freedom is occupied or admixed during a gate, and what evidence shows that degree of freedom is empty or disentangled afterward?** This catches leakage and bus-reset failure modes that a two-qubit fidelity number can conceal.

## High-value cross-family slice: hardware-assisted fault tolerance

- Start in the source-platform MOC and identify what the hardware changes about the effective error channel. [[superconducting-moc]] contains bosonic encodings, protected circuits, cat-bias engineering, and dual-rail erasure conversion; [[semiconducting-moc]] contains encoded-spin branches that use [[decoherence-free-subspace]] symmetry to reject collective magnetic noise; [[neutral-atom-moc]] and [[photonic-moc]] contain loss channels that can become erasures when the missing atom or photon is reliably localized.
- Keep the mechanisms distinct. A DFS passively removes only the noise operators that respect its assumed symmetry; a biased qubit suppresses one hidden Pauli direction relative to another; an erasure-converting encoding exposes a fault location to the decoder. None of these facts alone demonstrates a fault-tolerant logical qubit, and a device may combine more than one axis.
- Move through [[codes-moc]] when the next question is which check structure, measurement schedule, decoder, or connectivity tradeoff can actually exploit that channel. This is where the physical advantage must survive state preparation, gates, leakage checks, syndrome extraction, and measurement rather than appearing only in idle coherence.
- Move to [[cross-platform-moc]] when the comparison becomes hardware-wide overhead, feedback latency, or modular systems architecture via [[erasure-qubit]], [[surface-code-logical-qubit]], [[color-code-logical-qubit]], [[classical-control]], and [[quantum-transduction]].
- Use [[decoherence-free-subspace]], [[bosonic-code-hierarchy]], [[noise-bias-and-asymmetric-error-channels]], [[erasure-error-vs-pauli-error]], and [[threshold-theorem]] as the five-note bridge from hardware mechanism to architectural consequence. The routing question is: **what faults are removed, what faults are flagged, what hidden residual channel remains, and which outer code and decoder are assumed?**
