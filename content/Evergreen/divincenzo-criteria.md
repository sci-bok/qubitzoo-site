---
title: "DiVincenzo Criteria for Quantum Computation"
type: evergreen
status: seed
tags:
  - quantum-computing
  - criteria
  - foundational
---

# DiVincenzo Criteria for Quantum Computation

Five requirements for a physical system to implement quantum computation, articulated by David DiVincenzo (1996/2000). Every qubit platform in the [[Zoo]] is evaluated against these criteria.

## The Five Criteria

1. **Well-defined qubits** — A scalable physical system with well-characterized two-level quantum systems.
2. **Reliable state preparation** — Ability to initialize qubits to a known state (e.g., $|0\rangle$).
3. **Long decoherence times** — Coherence time $T_2$ much longer than gate operation time. The ratio $T_2/\tau_{\text{gate}}$ sets the number of operations before errors dominate.
4. **Universal gate set** — A complete set of quantum gates (single-qubit + entangling two-qubit gate).
5. **Qubit-specific measurement** — Ability to measure individual qubits in the computational basis.

## Additional Criteria (for quantum communication)

6. **Interconversion** between stationary and flying qubits.
7. **Faithful transmission** of flying qubits between specified locations.

## Significance

These criteria provide a universal scorecard for comparing qubit implementations. No platform perfectly satisfies all criteria — the field advances by pushing the boundaries on each.

## References

- D. P. DiVincenzo, "The Physical Implementation of Quantum Computation," Fortschritte der Physik 48, 771 (2000). [arXiv:quant-ph/0002077](https://arxiv.org/abs/quant-ph/0002077)
- [[loss-divincenzo-1998-quantum-dots]] — applies criteria to quantum dots
- [[cirac-zoller-gate-for-trapped-ion-qubits]] — applies criteria to trapped ions
