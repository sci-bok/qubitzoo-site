---
title: A tunable coupling scheme for implementing high-fidelity superconducting two-qubit gates
entry_type: coupling
technology_family: Superconducting
status: seed
figure_reviewed: true
seed_id: '15'
seed_source: qubitzoo-airtable
first_proposed_year: 2018
keywords:
- superconducting
- coupler
- qubit
- off
- quantum supremacy
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



A tunable coupling scheme for implementing high-fidelity superconducting two-qubit gates is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
A two-qubit coupler switch that controls the qubit-qubit coupling by modulating the coupler frequency. The coupler frequency tunes the virtual exchange interaction between two qubits and features a critical bias point at which the exchange interaction offsets the direct qubit-qubit coupling, effectively turning off the net coupling. Two-qubit gate operations are executed by operating the coupler in the dispersive regime, strongly sup- pressing leakage to the coupler’s excited states.


## Figure

![[a-tunable-coupling-scheme-for-implementing-high-fidelity-figure.png]]

## Motivation
In general, there are two sources of gate errors: decoherence (stochastic) and non-ideal interactions (deterministic). The latter includes parasitic coupling, leakage to non-computational states, and control crosstalk. As one example of parasitic coupling, the next-nearest-neighbor coupling is a phenomenon commonly seen in many systems, including Rydberg atoms, trapped ions, semiconductor spin qubits, and superconducting qubits. Often, the N.N.N. coupling is considered spurious and introduces unwanted interactions between qubits that are meant to be unconnected. At the same time, a coupling switch can help mitigate the problem of frequency crowding that exacer- bates the effect from non-ideal interactions.

## References
- https://journals.aps.org/prapplied/abstract/10.1103/PhysRevApplied.10.054062
- https://arxiv.org/abs/1803.09813

## Related Entries
- [[transmon]]
- [[xmon]]
- [[gmon]]

## Seed Metadata
- date_published: 2018-03-26

## Physics

A tunable coupler element placed between two fixed-frequency transmon qubits. The coupler is a frequency-tunable transmon whose frequency is flux-modulated to control the effective qubit-qubit coupling $g_{\text{eff}}$. When the coupler is far detuned, $g_{\text{eff}} \approx 0$ (qubits decoupled). When brought near resonance, $g_{\text{eff}}$ is large, enabling fast two-qubit gates. The effective coupling:

$$g_{\text{eff}} = g_{1c}g_{2c}\left(\frac{1}{\Delta_{1c}} + \frac{1}{\Delta_{2c}}\right)$$

where $g_{ic}$ is the bare coupling of qubit $i$ to the coupler and $\Delta_{ic}$ is the detuning. Eliminates always-on ZZ crosstalk at the idle point.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Residual ZZ coupling (idle) | <10 kHz | Effectively zero | — |
| Two-qubit gate fidelity | 99.5–99.9% | CZ or iSWAP | https://journals.aps.org/prapplied/abstract/10.1103/PhysRevA |
| Gate time (2Q) | 20–60 ns | Fast parametric activation | — |
| On/off ratio | >1000× | Coupling on vs off | — |
| Coupler footprint | ~200 × 200 μm² | Additional transmon element | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Related Qubits

- [[transmon]] — qubit being coupled
- [[gmon]] — Google's tunable coupler variant
- [[xmon]] — often used with tunable couplers
