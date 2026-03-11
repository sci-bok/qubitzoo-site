---
title: Hybrid Qubit (Semiconductor Triple-Dot)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
first_proposed_year: 2012
keywords:
- hybrid qubit
- semiconductor
- triple dot
- charge spin hybrid
influence_score: 0.66
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
published: 2012-01-01
---

## Description

Hybrid semiconductor qubits combine spin and charge degrees of freedom in multi-electron quantum-dot configurations to enable fast electrical control while retaining partial spin-like coherence benefits.


## Figure

![[hybrid-qubit-figure.png]]

## Hamiltonian

A simplified effective model includes spin-like splitting plus electric-drive coupling through charge admixture:

$$H = \frac{\hbar\omega_q}{2}\sigma_z + g_E E(t)\sigma_x + H_{\text{noise}}$$

where $g_E$ captures electric dipole coupling enabled by spin-charge hybridization.

## Motivation

Pure spin qubits can be coherence-rich but slower to drive electrically; pure charge qubits are fast but noise-sensitive. Hybrid qubits deliberately mix these subspaces to capture fast electrical control while retaining enough spin character to keep coherence usable.

## Key Findings

- Demonstrated very fast single-qubit manipulation compared with many spin-only encodings.
- Serves as a useful architecture for benchmarking spin-charge tradeoffs in semiconductor stacks.
- Provides design intuition for next-generation electrically controlled semiconductor qubits.
- Highlights materials and sweet-spot engineering as central performance levers.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate time | 1–20 ns | fast all-electrical drive | — |
| 1Q fidelity | ~99% | platform dependent | — |
| Main tradeoff | speed vs charge-noise sensitivity | core design tension | — |

## Related Entries

- [[exchange-only-qubit]]
- [[spin-qubit]]
- [[hole-spin-qubit]]
