---
title: '"Binomial code" fault-tolerant logical qubits encoded in bosonic modes of superconducting cavities'
entry_type: encoding
technology_family: Superconducting
status: seed
figure_reviewed: true
seed_id: '17'
seed_source: qubitzoo-airtable
first_proposed_year: 2016
keywords:
- binomial
- superconducting
- fault-tolerant
- logical
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



"Binomial code" fault-tolerant logical qubits encoded in bosonic modes of superconducting cavities is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
The bosonic modes of long-lifetime machined aluminum cavities may be universally controlled when coupled to a nonlinear oscillator, such as a transmon. This allows for the preparation and manipulation of exotic quantum states, some of which have desirable properties for quantum error detection and correction. One such scheme is a family of codes referred to as "binomial codes", which use finite superpositions of Fock states with definite generalized photon number parity to detect photon loss, the dominant error channel in the cavity.


## Figure

![[binomial-code-fault-tolerant-logical-qubits-encoded-in-figure.png]]

## Motivation
A superconducting qubit with long lifetime, a known dominant error channel, and a readily-implementable error correction scheme is desirable for quantum information processing.

## References
- https://journals.aps.org/prx/abstract/10.1103/PhysRevX.6.031006
- https://www.nature.com/articles/s41467-017-00045-1
- https://rsl.yale.edu/sites/default/files/files/RSL_Theses/Reinhold-Thesis%20(1).pdf

## Related Entries
- [[cat-codes]]
- [[gkp-codes]]

## Seed Metadata
- date_published: 2016-07-14

## Physics

Logical qubit encoded in weighted superpositions of Fock states of a harmonic oscillator (superconducting cavity), with binomial coefficients. The simplest code protecting against single photon loss ($L=1$):

$$|0_L\rangle \propto |0\rangle + |4\rangle, \quad |1_L\rangle = |2\rangle$$

General code words use Fock states spaced by $S+1$ with binomial weights, exactly correcting up to $L$ photon losses, $G$ gains, and $D$ dephasing events. Error detection via photon number parity measurement; correction via conditional displacements controlled by an ancilla transmon.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Logical error rate | Below break-even demonstrated | Ofek et al. 2016 | — |
| Cavity $T_1$ | >1 ms | 3D aluminum cavity | — |
| QEC cycle time | ~1–5 μs | Parity measurement + feedback | — |
| Fock space size | $N \leq 10$ | For $L=1$ code | — |
| Ancilla (transmon) $T_1$ | 50–200 μs | Limits QEC performance | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Related Qubits

- [[cat-codes]] — related bosonic code (coherent state basis)
- [[gkp-codes]] — related bosonic code (grid states)
- [[high-quality-superconducting-cavities-coupled-to-nonlinear]] — hardware platform
