---
title: High-quality superconducting cavities coupled to nonlinear oscillators
entry_type: coupling
technology_family: Superconducting
status: seed
figure_reviewed: true
seed_id: '16'
seed_source: qubitzoo-airtable
first_proposed_year: 2016
keywords:
- superconducting
- cavity
- bosonic
- circuit qed
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
published: 2016-01-01
---



High-quality superconducting cavities coupled to nonlinear oscillators is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
Machined high-purity aluminum cavities have demonstrated lifetimes on the order of milliseconds when carefully engineered. Coupling a nonlinear oscillator to such a cavity allows for universal control of its modes, which otherwise could only be driven into coherent states. The dominant error channel of this device is single-photon loss, and the rich, high-dimensional state space of this system provides a useful venue for a number of error-correction schemes to recover from these events.


## Figure

![[high-quality-superconducting-cavities-coupled-to-nonlinear-figure.png]]

## Motivation
The rich state space of a quantum harmonic oscillator and the desire to encode qubits in long-lifetime, error-correctable modes make this system a viable platform for quantum information processing.

## References
- https://journals.aps.org/prb/abstract/10.1103/PhysRevB.94.014506
- https://journals.aps.org/pra/abstract/10.1103/PhysRevA.92.040303
- https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.137002

## Related Entries
- [[binomial-code-fault-tolerant-logical-qubits-encoded-in]]
- [[cat-codes]]
- [[gkp-codes]]

## Seed Metadata
- date_published: 2016-07-08

## Physics

Superconducting 3D microwave cavities with single-photon lifetimes exceeding 1 millisecond, dispersively coupled to transmon ancilla qubits. The cavity modes serve as quantum memories and as physical substrates for bosonic error-correcting codes. The system Hamiltonian in the dispersive regime:

$$H = \hbar\omega_c\,a^\dagger a + \frac{\hbar\omega_q}{2}\sigma_z + \hbar\chi\,a^\dagger a\,\sigma_z$$

where $\chi$ is the dispersive shift enabling photon-number-resolved spectroscopy and conditional operations on cavity Fock states.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Cavity $T_1$ | 1–10 ms | 3D aluminum (Reagor 2016) | — |
| Cavity $Q$ | $>10^7$ | High-purity Al, seam minimization | — |
| Dispersive shift $\chi/2\pi$ | 1–5 MHz | Photon-number-resolved | — |
| Ancilla $T_1$ (transmon) | 50–200 μs | Limits QEC cycle | — |
| Mode frequency | 4–8 GHz | Fundamental mode | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |
| Cavity volume | ~10 cm³ | 3D post cavity | — |

## Related Qubits

- [[binomial-code-fault-tolerant-logical-qubits-encoded-in]] — bosonic code hosted here
- [[cat-codes]] — bosonic code hosted here
- [[gkp-codes]] — bosonic code hosted here
- [[circuit-qed]] — same dispersive coupling physics
- [[transmon]] — ancilla qubit for cavity control
