---
title: Cirac-Zoller gate for trapped ion qubits
entry_type: gate
technology_family: Ion Trap
status: seed
figure_reviewed: true
seed_id: '22'
seed_source: qubitzoo-airtable
first_proposed_year: 2015
keywords:
- trapped ion qubit
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



Cirac-Zoller gate for trapped ion qubits is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
The key idea of the Cirac–Zoller proposal is to mediate the interaction between two long-lived ion qubits through the joint motion of the complete chain of trapped ions. The first quantum computer proposal.


## Figure

![[cirac-zoller-gate-for-trapped-ion-qubits-figure.png]]

## Motivation
A quantum computer can be implemented with cold ions confined in a linear trap and interacting with laser beams. The quantized vibrations of the ions in the trap (“phonons”) can serve as a quantum bus, enabling highly controllable interactions between ions.

## References
- https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74.4091
- https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.75.4714
- https://www.nature.com/articles/nature01494

## Related Entries
- [[molmer-sorenson-gate]]

## Seed Metadata
- date_published: 2015-05-15

## Physics

Two-qubit gate for trapped ions using the shared motional (phonon) mode as a quantum bus. The qubit is encoded in two internal electronic states of each ion. Gate sequence:

1. Red sideband $\pi$-pulse on ion $j$: maps $\alpha|g\rangle + \beta|e\rangle$ onto phonon mode $\alpha|0\rangle + \beta|1\rangle$
2. Conditional phase gate on ion $k$ (2$\pi$ pulse on $|e,1\rangle$ transition): acquires phase conditional on phonon + qubit state
3. Reverse red sideband on ion $j$: restores phonon to $|0\rangle$

Requires ground-state cooling of motional mode ($\bar{n} \approx 0$) and Lamb-Dicke regime ($\eta = k\sqrt{\hbar/2M\nu} \ll 1$).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1000 s | Hyperfine qubits (e.g., $^{171}$Yb$^+$) | — |
| Qubit coherence $T_2$ | 1–600 s | With dynamical decoupling | — |
| Gate fidelity (1Q) | 99.9999% | Record: Harty et al. 2014 | https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74 |
| Gate fidelity (2Q) | 99.5–99.9% | Mølmer-Sørensen or CZ variant | https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74 |
| Gate time (1Q) | 1–10 μs | Microwave or Raman | — |
| Gate time (2Q) | 10–200 μs | Laser-mediated | — |
| Readout fidelity | 99.9%+ | Fluorescence detection | https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.74 |
| Qubit footprint | ~5 μm ion spacing | In linear Paul trap | — |
| Operating temperature | Room temp (trap) / 4K (cryo) | Vacuum chamber | — |
| Connectivity | All-to-all (small chains) | Via shared phonon modes | — |

## Related Qubits

- [[single-spin-quantum-dot-loss-divincenzo-qubit]] — semiconductor analogue
