---
title: Trapped Ion MOC
type: moc
technology_family: Trapped Ion
note_count: 5
last_updated: '2026-08-18'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Trapped Ion** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[cirac-zoller-gate]] | gate | demonstrated |
| [[molmer-sorenson-gate]] | gate | demonstrated |
| [[shuttling-ion-trap-qubit]] | infrastructure | demonstrated |
| [[trapped-ion-qubit]] | qubit | demonstrated |
| [[ytterbium-hyperfine-qubit]] | qubit | demonstrated |

## Composition

- gate: 2
- infrastructure: 1
- qubit: 2

<!-- CURATED -->

## Conceptual anchors

- [[motional-mode-coupling-in-ion-traps]] is the key evergreen note tying the modality to its entangling-gate layer.
- [[coherence-time-hierarchy]] is the right lens for comparing long hyperfine memory times to much faster gate and readout cycles.

## Curated synthesis

The most useful way to read this family is as a **three-layer stack rather than three unrelated notes**.

1. **`trapped-ion-qubit` is the modality baseline**
   - Start there when the question is why ions are still canonical: identical qubits, minute-scale coherence, high-fidelity readout, and shared-mode connectivity.
   - It owns the broad platform tradeoff against superconducting and neutral-atom systems.

2. **`cirac-zoller-gate` is the historical mechanism note**
   - It explains the original phonon-bus idea in its most literal form: map spin information into motion, apply a conditional phase, map back.
   - Read it when the important question is where trapped-ion entangling gates came from conceptually, not which pulse family dominates today.

3. **`shuttling-ion-trap-qubit` is the scaling architecture note**
   - It exists because the same shared-motion resource that gives all-to-all connectivity also stops scaling cleanly in very long chains.
   - QCCD is therefore best understood as an architectural response to motional-mode crowding, not as a new qubit modality.

## Modern operational stack

- [[ytterbium-hyperfine-qubit]] is the memory-and-readout anchor: clock-state storage, fluorescence detection, and long coherence margins.
- [[molmer-sorenson-gate]] is the modern entanglement anchor: virtual-phonon XX interactions, robustness beyond the strict Cirac-Zoller ground-state requirement, and pulse shaping toward 99.9%+ two-qubit fidelity.
- Together they expose the practical systems bottleneck: motional-mode engineering and calibration, not the existence of a clean atomic memory.

## Gate-to-architecture decision map

The two gate notes and the shuttling note answer different questions. The first two choose **how internal states borrow the phonon bus inside one interaction zone**; QCCD chooses **how many ions should share that bus before routing replaces longer-range collective motion**.

| Route | How motion is used | Closure condition | What it buys | Dominant systems debt | Read it when... |
|---|---|---|---|---|---|
| [[cirac-zoller-gate]] | Sequential sideband pulses map a qubit excitation into a real phonon, apply a conditional phase through a second ion and auxiliary level, then map the phonon back | The selected mode must begin near its ground state and end disentangled from both ions | The cleanest literal picture of a phonon as a quantum data bus and the historical route to trapped-ion universality | Ground-state preparation, auxiliary-level control, and sensitivity to heating during a multi-pulse sequence | the question is how the original bus-mediated gate works or why sideband resolution matters |
| [[molmer-sorenson-gate]] | A bichromatic spin-dependent force drives a closed trajectory in motional phase space and leaves an effective XX interaction | Every significantly driven mode must return to its starting phase-space point at the gate end; ground-state cooling is not required, but the Lamb-Dicke and mode-closure conditions remain | The modern operational default: direct entanglement, multi-ion reach, and better tolerance of imperfect motional preparation | Spectator-mode coupling, detuning and phase calibration, heating, and pulse-shape complexity as modes crowd | the question is how present-day ion processors execute high-fidelity entangling gates |
| [[shuttling-ion-trap-qubit]] | Ions are transported between short-chain memory, interaction, and readout zones; a local MS or related gate still supplies entanglement inside each zone | Transport must preserve internal coherence and deliver a sufficiently cold, well-characterized motional state for the next local gate | Keeps local mode spectra tractable while scaling processor connectivity beyond one long Coulomb crystal | Junction routing, scheduling, transport-induced excitation, recooling, and calibration across many zones | the question has shifted from one gate pulse to machine-scale connectivity and throughput |

This map prevents two common category errors. MS gates are less sensitive to the initial phonon occupation than Cirac-Zoller gates, but they are not independent of motion: residual phase-space displacement still leaves spin and motion entangled. Likewise, QCCD does not replace the phonon-bus gate; it repeatedly reconstructs a small, controllable local bus after transport. Read all three through [[motional-mode-coupling-in-ion-traps]] to track where motional complexity moves rather than assuming it disappears.

## Routing rule: when to stay here versus hand off

- Stay in this MOC for the full modality stack: optical and hyperfine encodings, Cirac-Zoller and Mølmer-Sørensen gates, shared motion, and QCCD scaling.
- Enter [[ytterbium-hyperfine-qubit]] or [[molmer-sorenson-gate]] directly for the modern Yb + MS implementation slice.
- Hand off to [[neutral-atom-moc]] when the comparison shifts from Coulomb-crystal buses to tweezer-rearranged atomic arrays with transient Rydberg interactions.

## Scope boundary

This is the authoritative trapped-ion platform map. Species-specific entries are reserved for materially distinct encodings or milestones rather than one page per isotope.
