---
title: Floating Electron MOC
type: moc
technology_family: Floating Electron
note_count: 1
last_updated: '2026-08-10'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Floating Electron** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[electron-on-solid-neon-qubit]] | qubit | demonstrated |

## Composition

- qubit: 1

<!-- CURATED -->

## Curated synthesis

This family currently has one experimentally demonstrated member: [[electron-on-solid-neon-qubit]]. Its logical states are quantized *motional* levels of an electron above an inert neon surface, so it should not be conflated with electron-spin qubits on helium or semiconductor charge qubits. Read it through [[jaynes-cummings-in-circuits]] and [[dispersive-readout-mechanism]] for the circuit-QED layer, then through [[charge-noise-sweet-spot]] for the central large-dipole/noise tradeoff.

## Coupling-budget reading order

The useful circuit-QED comparison is a four-step chain, not just the statement that the electron couples to a resonator:

1. [[vacuum-rms-field-scaling]] isolates the resonator-side resource: impedance and effective capacitance set the zero-point voltage available at the electron.
2. The electron's unusually large motional dipole combines with that field to produce the measured coupling $g$; [[jaynes-cummings-in-circuits]] is the effective model only after truncating the motional spectrum to a qubit.
3. Detuning turns that coupling into the state-dependent shift used for measurement, which is the branch explained by [[dispersive-readout-mechanism]].
4. The same cavity admixture also opens a relaxation channel. [[purcell-protection-via-detuning]] explains why the entry's reported long-$T_1$ bias point with reduced Purcell decay is part of the architecture tradeoff rather than an unrelated coherence detail.

This ordering keeps three knobs distinct: the resonator's vacuum field, the electron's dipole matrix element, and the chosen detuning. Together they determine whether stronger coupling buys faster readout, more cavity-induced decay, or both.

## Coverage frontier

Future additions belong here only when the electron is physically suspended above a cryogenic surface. Electron-on-helium spin or motional qubits are the most obvious missing branch once a sufficiently mature, source-backed entry can be written; image-state electrons and semiconductor-confined carriers belong elsewhere.
