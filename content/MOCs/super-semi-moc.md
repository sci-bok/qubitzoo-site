---
title: Super-Semi MOC
type: moc
technology_family: Super-Semi
note_count: 6
last_updated: '2026-08-02'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Super-Semi** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[all-semiconductor-superconducting-qubit]] | qubit | proposed |
| [[andreev-pair-qubit]] | qubit | demonstrated |
| [[andreev-spin-qubit]] | qubit | demonstrated |
| [[ferbo-qubit]] | qubit | proposed |
| [[gatemon]] | qubit | demonstrated |
| [[gatemonium]] | qubit | demonstrated |

## Composition

- qubit: 6

<!-- CURATED -->

## Conceptual anchors

- [[josephson-junction-as-nonlinear-element]] is the shared superconducting backbone, even when the weak link is semiconductor-defined rather than oxide-barrier-defined.
- [[spin-orbit-coupling-for-qubit-control]] is the key separator between purely gate-tunable Josephson devices and spin-active Andreev hybrids.
- [[charge-noise-sweet-spot]] is the right lens for comparing how much electrical tunability each architecture gains without paying too much dephasing cost.
- [[noise-bias-and-asymmetric-error-channels]] is the extra routing note for the protection-first branch, where the claim is not just "higher coherence" but a deliberately skewed error channel.

## Curated synthesis

The cleanest way to read this family is to ask **where the semiconductor is doing the conceptual work**. The same InAs/Al or group-IV vocabulary can mean three very different things.

1. **Semiconductor as a tunable Josephson knob**
   - [[gatemon]] is the minimal case: transmon logic survives, but the weak link makes $E_J$ electrically tunable.
   - [[gatemonium]] is the protected-circuit extension of the same move: the weak link still tunes the Josephson element, but now inside a fluxonium-style inductive circuit where gate control moves the device between different protection regimes.
   - Read this branch primarily through [[josephson-junction-as-nonlinear-element]] and [[charge-noise-sweet-spot]], not through spin language.

2. **Semiconductor as part of the qubit subspace itself**
   - [[andreev-pair-qubit]] uses the even-parity empty/doubly occupied Andreev states; its microwave transition is controlled by superconducting phase and weak-link transmission.
   - [[andreev-spin-qubit]] uses spin-split Andreev levels as the qubit degree of freedom, so spin-orbit physics and parity stability are the central story rather than side constraints.
   - [[ferbo-qubit]] pushes further into the protection-first regime: the Andreev sector is part of the mechanism that suppresses relaxation before error correction, which is why it belongs adjacent to [[noise-bias-and-asymmetric-error-channels]] as well as to superconducting protected-circuit notes.
   - This branch should feel closer to "engineered weak-link quantum states" than to ordinary tunable transmons.

3. **Semiconductor as the full materials stack**
   - [[all-semiconductor-superconducting-qubit]] is the fabrication-endpoint branch. Its main claim is not a new control Hamiltonian but the possibility of moving the entire superconducting circuit, junctions included, inside one doped crystal.
   - Compare it to [[gatemon]] or [[transmon]] on interface elimination and process integration, and to [[kane-qubit]] on atomic-precision fabrication lineage.

## Semiconductor-superconductor routing table

| Entry | Keep it in [[super-semi-moc]] when the main claim is... | Hand off when the real question becomes... |
|---|---|---|
| [[gatemon]] | electrostatic tuning of an otherwise transmon-like Josephson element | ordinary circuit-QED scaling or baseline superconducting benchmarking in [[superconducting-moc]] |
| [[gatemonium]] | a gate-tunable weak link reshaping which fluxonium regime the same circuit can access | protected-circuit comparison against `fluxonium`, `heavy-fluxonium-qubit`, or `0-pi-qubit` inside [[superconducting-moc]] |
| [[andreev-spin-qubit]] | odd-parity Andreev states and spin-dependent supercurrent are the qubit resource | nonlocal parity encoding or a topological phase claim in [[topological-moc]] |
| [[andreev-pair-qubit]] | even-parity Andreev pair states and phase-dependent weak-link spectroscopy are the resource | ordinary Josephson-circuit scaling in [[superconducting-moc]] |
| [[ferbo-qubit]] | even-parity Andreev structure is being used as a relaxation-bias / protection mechanism inside a fluxonium-like circuit | the comparison becomes purely protected-circuit taxonomy in [[superconducting-moc]] or topological parity protection in [[topological-moc]] |
| [[all-semiconductor-superconducting-qubit]] | monolithic crystal growth and interface elimination are the conceptual novelty | donor-style atomic fabrication lineage in [[semiconducting-moc]] or ordinary superconducting-circuit performance in [[superconducting-moc]] |

## Routing rule inside the family

- Start with [[gatemon]] or [[gatemonium]] when the interesting question is what electrostatic control does to an otherwise familiar superconducting circuit.
- Start with [[andreev-spin-qubit]] or [[ferbo-qubit]] when the weak link's internal spin, parity, or Andreev structure is the qubit resource or the protection mechanism.
- Start with [[all-semiconductor-superconducting-qubit]] when the value proposition is monolithic fabrication or interface elimination rather than a mature coherence result.
- For the non-hybrid dot and donor branch of the same broader materials ecosystem, continue in [[semiconducting-moc]].

## Boundary with the superconducting family

This family shares a lot of vocabulary with [[superconducting-moc]], especially around Josephson elements, circuit-QED readout, and sweet-spot language, but the routing rule is simple: stay here only when the **semiconductor weak link is doing conceptual work**. `gatemon` and `gatemonium` belong here because gate-tunable junction physics is the point, and `andreev-spin-qubit` / `ferbo-qubit` belong here because Andreev-level and parity structure enter the qubit itself. If the main story is instead protected-circuit geometry, bosonic encoding, or ordinary superconducting coherence scaling, route back to [[superconducting-moc]] even when the fabrication stack overlaps.

## Boundary with the topological family

This family shares hardware vocabulary with [[topological-moc]] such as InAs/Al heterostructures, Josephson weak links, and strong spin-orbit coupling, but it makes a different promise. `gatemon`, `andreev-spin-qubit`, and `ferbo-qubit` stay here because their value comes from tunability, Andreev structure, or circuit-level protection inside an otherwise conventional control stack. Once the central claim becomes nonlocal parity encoding or a phase-biased topological channel that is supposed to suppress errors before code overhead, route the reader to [[topological-moc]] instead.

## Scope boundary

This facet is about hybridization, not mere material substitution: the semiconductor must change the circuit physics, control surface, or protection story.
