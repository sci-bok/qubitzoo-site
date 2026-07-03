---
title: Super-Semi MOC
type: moc
technology_family: Super-Semi
note_count: 5
last_updated: '2026-07-03'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Super-Semi** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[all-semiconductor-superconducting-qubit]] | qubit | proposed |
| [[andreev-spin-qubit]] | qubit | demonstrated |
| [[ferbo-qubit]] | qubit | active |
| [[gatemon]] | qubit | demonstrated |
| [[gatemonium]] | qubit | demonstrated |

## Composition

- qubit: 5

<!-- CURATED -->



























































## Conceptual anchors

- [[josephson-junction-as-nonlinear-element]] is the shared superconducting backbone, even when the weak link is semiconductor-defined rather than oxide-barrier-defined.
- [[spin-orbit-coupling-for-qubit-control]] is the key separator between purely gate-tunable Josephson devices and spin-active Andreev hybrids.
- [[charge-noise-sweet-spot]] is the right lens for comparing how much electrical tunability each architecture gains without paying too much dephasing cost.

## Hybrid control spectrum

- `gatemon` and `gatemonium` use the semiconductor mainly to reshape the Josephson element: the qubit is still read most naturally as a superconducting circuit whose nonlinearity has become gate tunable.
- `andreev-spin-qubit` and `ferbo-qubit` move the semiconductor into the qubit degree of freedom itself, so parity stability, spin-orbit structure, and Andreev-level engineering matter as much as ordinary circuit-QED coherence numbers.
- `all-semiconductor-superconducting-qubit` is the fabrication-endpoint branch, asking whether the whole superconducting stack can inherit semiconductor-style integration advantages rather than just a gate-tunable weak link.

## Family structure

- `gatemon` and `gatemonium` are superconducting-circuit descendants that replace conventional tunnel junction elements with gate-tunable semiconductor weak links.
- `andreev-spin-qubit` and `ferbo-qubit` lean harder on Andreev-bound-state physics, using the semiconductor not just as a tunable junction but as part of the qubit degree of freedom itself.
- `all-semiconductor-superconducting-qubit` is best read as a materials-and-fabrication endpoint for this family, not yet the central coherence benchmark.
- For the non-hybrid dot and donor branch of the same broader materials ecosystem, see [[semiconducting-moc]].

## Boundary with the superconducting family

This family shares a lot of vocabulary with [[superconducting-moc]], especially around Josephson elements, circuit-QED readout, and sweet-spot language, but the routing rule is simple: stay here only when the **semiconductor weak link is doing conceptual work**. `gatemon` and `gatemonium` belong here because gate-tunable junction physics is the point, and `andreev-spin-qubit` / `ferbo-qubit` belong here because Andreev-level and parity structure enter the qubit itself. If the main story is instead protected-circuit geometry, bosonic encoding, or ordinary superconducting coherence scaling, route back to [[superconducting-moc]] even when the fabrication stack overlaps.

## Boundary with the topological family

This family shares hardware vocabulary with [[topological-moc]] such as InAs/Al heterostructures, Josephson weak links, and strong spin-orbit coupling, but it makes a different promise. `gatemon`, `andreev-spin-qubit`, and `ferbo-qubit` stay here because their value comes from tunability, Andreev structure, or circuit-level protection inside an otherwise conventional control stack. Once the central claim becomes nonlocal parity encoding or a phase-biased topological channel that is supposed to suppress errors before code overhead, route the reader to [[topological-moc]] instead.

## Editorial note

This family is about hybridization, not mere material substitution. Keep links focused on what the semiconductor changes in the circuit physics, control surface, or protection story.


























































