---
title: "DiVincenzo Criteria for Quantum Computation"
type: evergreen
status: evergreen
tags:
  - quantum-computing
  - criteria
  - foundational
---

# DiVincenzo Criteria for Quantum Computation

Five requirements for a physical system to implement quantum computation, articulated by David DiVincenzo (1996/2000). Every qubit platform in the [[qubit-zoo-index-moc|Zoo]] is evaluated against these criteria.

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

These criteria provide a universal scorecard for comparing qubit implementations. No platform perfectly satisfies all criteria, and many of the most interesting Zoo entries are really different ways of trading one criterion against another.

## Boundary with [[quantum-hardware]]

Use [[quantum-hardware]] to answer **what kind of machine layer or modality** you are looking at. Use this note to answer **whether that machine can actually function as a scalable computer or network node**.

| If the question is... | Start here? | Why |
|---|---|---|
| What family of qubit or infrastructure is this? | No, go to [[quantum-hardware]] | That is a taxonomy / routing question. |
| Why does a networking-oriented platform care so much about photon quality or conversion loss? | Yes | Criteria 6 and 7 are the right lens. |
| Why does a control-stack note belong in the Zoo even though it is not itself a qubit? | Yes | Initialization, gates, measurement, and feedback only count if the surrounding hardware can deliver them. |
| Which requirement is this platform currently failing or paying most dearly for? | Yes | That tradeoff view is the real value of this note. |

## How to use the criteria in the Zoo

- Criteria 1–5 are the default lens for local quantum processors.
- Criteria 6–7 become decisive for [[nv-center-qubit]], [[siv-color-center-qubit]], [[t-center-qubit]], [[quantum-transduction]], and modular photonic or network-facing architectures.
- The criteria are most useful after the modality is already clear. First route through the relevant family or infrastructure note, then come here to judge whether the design is merely interesting physics or a credible computing stack.

## References

- [[divincenzo-2000-physical-implementation]]
- [[loss-divincenzo-1998-quantum-dots]] — applies criteria to quantum dots
- [[cirac-zoller-gate]] — applies criteria to trapped ions
