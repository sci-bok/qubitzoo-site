---
title: Floating Electron MOC
type: moc
technology_family: Floating Electron
note_count: 1
last_updated: '2026-09-05'
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

## Evidence-to-scaling ladder

The platform's evidence is now strong enough that **single-qubit quality is no longer the cleanest proxy for architectural maturity**. Read the record in four layers:

| Layer | Best current evidence | What it establishes | What it does not establish |
|---|---|---|---|
| Circuit-QED primitive | [[zhou-2022-solid-neon-electron-qubit]] | One trapped electron can reach strong microwave coupling, coherent control, and dispersive readout | Reproducible trap placement or a processor-scale device geometry |
| Single-qubit quality | [[zhou-2024-neon-charge-qubit]] and [[li-2026-neon-noise-resilience]] | High-fidelity one-qubit control, near-$0.1\,\mathrm{ms}$ coherence, and operation above the lowest dilution-refrigerator temperatures | A calibrated entangling gate or uniform multi-site performance |
| Multi-qubit interaction | [[li-2026-interacting-neon-qubits]] | Direct charge-charge coupling and coherent cross-resonance / bSWAP operations in a three-qubit device | A reported two-qubit gate fidelity; coherent interaction is not yet a fault-tolerance benchmark |
| Spatial control | [[zheng-2025-neon-surface-morphology]] diagnoses morphology-selected traps; [[wang-2026-fast-neon-charge-control]] still reports an unintended site | The dominant integration problem is experimentally visible rather than hypothetical | A demonstrated deterministic loader; [[inui-2026-levitated-neon-arrays]] and [[surse-2026-deterministic-neon-trapping]] remain architecture proposals |

This ladder changes the comparison question. The near-term discriminator is not whether an isolated eNe qubit can be coherent and fast; it is whether fabrication can place known electrons at designed sites with reproducible frequencies and separations, then turn the observed interactions into calibrated two-qubit gates. Keep proposed spin storage downstream of that test: a magnetic-field-compatible resonator is enabling infrastructure, not evidence that an electron-spin eNe qubit has been realized.

## Coverage frontier

Future additions belong here only when the electron is physically suspended above a cryogenic surface. Electron-on-helium spin or motional qubits are the most obvious missing branch once a sufficiently mature, source-backed entry can be written; image-state electrons and semiconductor-confined carriers belong elsewhere.
