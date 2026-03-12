---
title: Singlet-Triplet Qubit
entry_type: qubit
technology_family: Semiconducting
status: seed
seed_id: '23'
seed_source: qubitzoo-airtable
first_proposed_year: 2002
keywords:
- singlet-triplet
- spin
- semiconductor
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
figure_reviewed: true
---



Singlet-Triplet Qubit is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
This qubit is encoded in the Sz=0 subspace of two exchange-coupled electronic spins.  These two spins are trapped inside quantum dots realized by electronic gates on the surface of a semiconductor, usually Si or GaAs, and are subject to a magnetic field gradient.  The singlet state, (|up down>-|down up>)/sqrt(2), and the triplet state, (|up down>+|down up>)/sqrt(2), are the logical |0> and |1> states.  Single-qubit gates are realized by tuning the exchange coupling between the two spins, which is done in experiments by changing the voltage on the electronic gate separating the two dots.  The magnetic field gradient is required in order to perform rotations about axes other than the logical z axis.

These qubits may be coupled in one of two ways.  One method is capacitive coupling, which uses the difference in dipole moment between the logical |0> and |1> states in order to couple qubits via dipole-dipole interaction.  Another is exchange coupling, in which the exchange interaction between one of the spins in one qubit (say, the right-hand spin) and one of the spins in the other qubit (say, the left-hand spin) is used to couple the qubits.


## Figure

![[singlet-triplet-qubit-figure.png]]

## Motivation
The most attractive property of the singlet-triplet qubit is the fact that both single- and two-qubit gates can be implemented entirely electronically, allowing for fast gates.  After the single-spin Loss-DiVincenzo qubit, this is the next-simplest realization of a qubit possible using electronic spins in semiconductor-based quantum dots.

## References
- https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.89.147902

## Related Entries
- [[single-spin-quantum-dot-loss-divincenzo-qubit]]
- [[exchange-only-qubit]]
- [[rx-qubit]]
- [[always-on-exchange-only-aeon]]

## Seed Metadata
- date_published: 2002-09-17

## Physics

Logical qubit encoded in the singlet-triplet subspace of two electron spins in a double quantum dot:

$$|0_L\rangle = |S\rangle = \frac{1}{\sqrt{2}}(|\!\uparrow\downarrow\rangle - |\!\downarrow\uparrow\rangle), \quad |1_L\rangle = |T_0\rangle = \frac{1}{\sqrt{2}}(|\!\uparrow\downarrow\rangle + |\!\downarrow\uparrow\rangle)$$

Both states have total $m_s = 0$, providing first-order insensitivity to uniform magnetic field fluctuations. Control: exchange interaction $J$ (gate voltage) rotates around $\hat{z}$ of the logical Bloch sphere; magnetic field gradient $\Delta B_z$ between dots rotates around $\hat{x}$.

## Related Qubits

- [[single-spin-quantum-dot-loss-divincenzo-qubit]] — single-spin ancestor
- [[exchange-only-qubit]] — three-spin descendant (no gradient needed)
- [[always-on-exchange-only-aeon]] — always-on variant

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1 s | Spin relaxation in GaAs/Si | — |
| Qubit coherence $T_2$ | 1–200 μs | Limited by nuclear spin bath (GaAs) or charge noise | — |
| Gate fidelity (1Q) | 99–99.9% | Exchange + gradient control | https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.89 |
| Gate fidelity (2Q) | 90–99% | Capacitive or exchange-mediated | https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.89 |
| Gate time (1Q) | 1–100 ns | Exchange pulse (Z) or gradient (X) | — |
| Gate time (2Q) | 10–200 ns | Inter-double-dot coupling | — |
| Readout fidelity | 95–99% | Pauli spin blockade + charge sensor | https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.89 |
| Qubit footprint | ~100–200 nm pitch | Two dots per logical qubit | — |
| Operating temperature | 20 mK–100 mK | GaAs or Si/SiGe | — |
| Connectivity | Nearest-neighbor | Between adjacent double dots | — |
