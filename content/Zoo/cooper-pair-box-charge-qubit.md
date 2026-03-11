---
title: Cooper-pair box (charge) qubit
entry_type: qubit
technology_family: Superconducting
status: seed
seed_id: '20'
seed_source: qubitzoo-airtable
first_proposed_year: 1999
keywords:
- superconducting qubit; charge qubit; cooper-pair box
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
figure_reviewed: true
published: 1999-01-01
---



Cooper-pair box (charge) qubit is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
A nanometre-scale superconducting electrode connected to a reservoir via a Josephson junction constitutes an artificial two-level electronic system: a single-Cooper-pair box. The two levels consist of charge states (differing by 2e, where e is the electronic charge) that are coupled by tunnelling of Cooper pairs through the junction. Although the two-level system is macroscopic, containing a large number of electrons, the two charge states can be coherently superposed. The Cooper-pair box has therefore been suggested as a candidate for a quantum bit or ‘qubit’—the basic component of a quantum computer.


## Figure

![[cooper-pair-box-charge-qubit-figure.png]]

## Motivation
The original "artificial atom" formed in a superconducting circuit. Because of its sensitivity to charge noise, alternative qubit approaches that offer some immunity to charge noise were sought after.

## References
- https://www.nature.com/articles/19718
- https://iopscience.iop.org/article/10.1238/Physica.Topical.076a00165/pdf
- https://iopscience.iop.org/article/10.1088/1367-2630/7/1/180

## Related Entries
- [[phase-qubit]]
- [[flux-qubit]]

## Seed Metadata
- date_published: 1999-04-29

## Physics

The Cooper pair box Hamiltonian:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

Operating in the charge regime $E_C > E_J$, the qubit states are charge states $|n\rangle$ and $|n+1\rangle$ differing by one Cooper pair. At the charge degeneracy point $n_g = 1/2$, the two lowest states are split by $E_J$. Gate voltage tunes $n_g = C_g V_g / 2e$, controlling the qubit transition frequency. Highly sensitive to charge noise $\delta n_g$ at generic operating points.

## Related Qubits

- [[transmon]] — descendant operating in $E_J \gg E_C$ for charge noise immunity
- [[fluxonium]] — inductive shunt alternative
- [[blochnium-superconducting-quasicharge-qubit]] — quasicharge regime

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | ~1–10 μs | Limited by charge noise | — |
| Qubit coherence $T_2$ | ~0.5–5 μs | At sweet spot ($n_g = 1/2$) | — |
| Gate fidelity (1Q) | ~99% | Voltage-pulse driven | https://www.nature.com/articles/19718 |
| Gate fidelity (2Q) | ~95% | Capacitive coupling | https://www.nature.com/articles/19718 |
| Gate time (1Q) | ~1–10 ns | Fast voltage pulses | — |
| Gate time (2Q) | ~10–50 ns |  | — |
| Readout fidelity | ~90–95% | Probe junction or SET | https://www.nature.com/articles/19718 |
| Qubit footprint | ~1 × 1 μm² | Very compact | — |
| Operating temperature | 20–50 mK | Dilution refrigerator | — |
| Connectivity | Fixed capacitive | Nearest-neighbor | — |
