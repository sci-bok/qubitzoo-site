---
title: "Cirac & Zoller 1995 — Quantum Computations with Cold Trapped Ions"
type: reference
doi: "10.1103/PhysRevLett.74.4091"
authors:
  - J. I. Cirac
  - P. Zoller
year: 1995
journal: "Physical Review Letters"
volume: 74
pages: "4091-4094"
status: seed
tags:
  - trapped-ion
  - quantum-gate
  - foundational
  - phonon-bus
---

# Quantum Computations with Cold Trapped Ions

**Cirac & Zoller, PRL 74, 4091 (1995)** — [DOI](https://doi.org/10.1103/PhysRevLett.74.4091)

## Summary

Proposes a scheme for quantum computation using cold trapped ions. The internal (electronic) states of individual ions serve as qubits, and the shared motional (phonon) mode of the ion chain acts as a quantum bus for two-qubit gates. This was the first concrete, physically realizable proposal for a universal quantum computer, and remains the conceptual foundation of all trapped-ion quantum computing.

## Key Contributions

1. **Qubit encoding**: Two long-lived internal states of each ion (e.g., hyperfine or optical levels) = qubit.

2. **Two-qubit gate mechanism**: 
   - Laser pulse on ion $j$ maps qubit state onto motional (phonon) mode of the chain (red sideband transition)
   - Conditional phase gate on ion $k$, dependent on phonon state
   - Reverse mapping to restore phonon mode to ground state
   - Net effect: controlled phase gate between ions $j$ and $k$

3. **Scalability argument**: $N$ ions in a linear trap, each individually addressable by focused laser beams. Universal quantum computation with $O(N^2)$ gate operations.

4. **Error sources identified**: Spontaneous emission, heating of motional mode, imperfect laser focusing.

## Physics

The center-of-mass phonon mode at frequency $\nu$ serves as the quantum bus:
- $|g,0\rangle \leftrightarrow |e,1\rangle$ (red sideband): $\pi$-pulse maps $\alpha|g\rangle + \beta|e\rangle$ onto $\alpha|0\rangle + \beta|1\rangle$ in phonon space
- Conditional dynamics on second ion + phonon → entangling gate
- Requires ground-state cooling of the motional mode ($\bar{n} \approx 0$)

Lamb-Dicke parameter $\eta = k\sqrt{\hbar/2M\nu} \ll 1$ ensures clean sideband transitions.

## Historical Impact

- First demonstrated by Monroe et al., PRL 75, 4714 (1995) — CNOT gate on a single $^9$Be$^+$ ion
- Led directly to modern trapped-ion quantum computers (IonQ, Quantinuum)
- The phonon-bus concept is analogous to the [[resonator-as-quantum-bus]] in circuit QED

## Zoo Links

- [[cirac-zoller-gate-for-trapped-ion-qubits]]

## Evergreen Links

- [[divincenzo-criteria]]
- [[resonator-as-quantum-bus]]
