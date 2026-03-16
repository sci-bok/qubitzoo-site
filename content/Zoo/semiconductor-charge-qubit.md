---
title: Semiconductor charge qubit
entry_type: qubit
technology_family: Semiconducting
status: seed
figure_reviewed: true
seed_id: '21'
seed_source: qubitzoo-airtable
first_proposed_year: 2003
keywords:
- semiconductor; charge; gaas; silicon
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



Semiconductor charge qubit is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
A single electron is trapped in a double quantum dot. The double quantum dot consists of two quantum dots coupled to each other via a tunnel barrier and the electron can flip back and forth between them. Voltage pulses on the dots can be used to perform quantum operations on the state of the qubit.


## Figure

![[semiconductor-charge-qubit-figure.png]]

## Motivation
A semiconductor system in, e.g., GaAs or Silicon, much like a classical transistor can be used to create solid-state qubits. The charge qubit is the simplest semiconductor qubit. Although it typically suffers from fast decoherence and relaxation, the semiconductor charge qubit demonstrates first, that artificial atoms can be formed out of semiconductors, and two, that all electrical control of a qubit is possible.

## References
- https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.91.226804
- T. Fujisawa et al., Physica E 21, 1046 (2004)
- https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.105.246804

## Linked Papers
- [[petersson-2010-semiconductor-charge]]

## Related Entries
- [[loss-divincenzo-qubit]]

## Seed Metadata
- date_published: 2003-11-26

## Physics

Qubit encoded in the position of a single electron in a double quantum dot: $|L\rangle$ (left dot) and $|R\rangle$ (right dot). The Hamiltonian:

$$H = \frac{\epsilon}{2}\sigma_z + t_c\,\sigma_x$$

where $\epsilon$ is the detuning (gate-voltage controlled) and $t_c$ is the tunnel coupling. At zero detuning ($\epsilon = 0$), the eigenstates are symmetric/antisymmetric superpositions split by $2t_c$. Coherent charge oscillations between dots demonstrated by pulsed gate voltage.

**Key limitation**: Charge is directly coupled to electric field fluctuations in the solid-state environment → very short coherence times ($T_2^* \sim 1$ ns). This motivated the pivot to spin-based encodings.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | ~10 ns | Charge relaxation | [Hayashi et al. 2003](https://doi.org/10.1103/PhysRevLett.91.226804) |
| Qubit coherence $T_2$ | ~1 ns | Dominated by charge noise | [Hayashi et al. 2003](https://doi.org/10.1103/PhysRevLett.91.226804) |
| Gate time (1Q) | <1 ns | Very fast (voltage pulses) | — |
| Gate fidelity (1Q) | ~90% | Limited by decoherence | [Petersson et al. 2010](https://doi.org/10.1021/nl100663w) |
| Readout fidelity | ~95% | Quantum point contact | [Petersson et al. 2010](https://doi.org/10.1021/nl100663w) |
| Qubit footprint | ~100–200 nm | Double quantum dot | — |
| Operating temperature | 20–100 mK | GaAs heterostructure | — |

## Related Qubits

- [[loss-divincenzo-qubit]] — spin encoding (much longer $T_2$)
- [[singlet-triplet-qubit]] — spin encoding in same platform
- [[cooper-pair-box-charge-qubit]] — superconducting charge qubit analogue
