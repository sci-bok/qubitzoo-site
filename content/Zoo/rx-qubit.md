---
title: RX Qubit (Resonant Exchange)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
first_proposed_year: 2012
keywords:
- resonant exchange
- three-spin qubit
- semiconductor
- exchange-only
influence_score: 0.69
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
published: 2012-01-01
---

## Description

The resonant-exchange (RX) qubit is a three-electron, triple-dot spin qubit operating with always-on exchange and driven by RF modulation near the qubit splitting. It preserves exchange-only control while improving noise robustness compared with early exchange-only pulse sequences.


## Figure

![[rx-qubit-figure.png]]

## Hamiltonian

Low-energy effective qubit model:

$$H = \frac{\hbar\omega_q}{2}\sigma_z + A_{\text{RF}}\cos(\omega_d t)\sigma_x$$

with $\omega_q$ set by static exchange couplings among the three dots.

## Motivation

The RX qubit was designed to keep the control simplicity of exchange-only qubits while operating at a sweet-spot-like point where low-frequency charge noise is partially suppressed. By using resonant driving around a static exchange-defined splitting, it reduces reliance on large, abrupt pulsing sequences.

## Key Findings

- Demonstrates coherent control in always-on exchange regimes.
- Provides a practical bridge between exchange-only and AEON-type operation.
- Compatible with resonator coupling proposals for long-range interactions.
- Highlights the speed/coherence trade space in three-spin encodings.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate fidelity | 98–99.9% | Device dependent | — |
| 2Q coupling path | exchange / resonator-mediated | architecture dependent | — |
| Operating temperature | 20–100 mK | semiconductor dilution setups | — |

## Related Entries

- [[exchange-only-qubit]]
- [[always-on-exchange-only-aeon]]
- [[singlet-triplet-qubit]]
