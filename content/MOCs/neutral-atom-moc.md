---
title: Neutral Atom MOC
type: moc
technology_family: Neutral Atom
note_count: 4
last_updated: '2026-08-02'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Neutral Atom** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[alkaline-earth-neutral-atom-clock-qubit]] | qubit | demonstrated |
| [[neutral-atom-qubit]] | qubit | demonstrated |
| [[nuclear-spin-neutral-atom-qubit]] | qubit | demonstrated |
| [[rydberg-neutral-atom-qubit]] | qubit | demonstrated |

## Composition

- qubit: 4

<!-- CURATED -->

## Conceptual anchors

- [[rydberg-blockade-mechanism]] is the common interaction layer across this whole family, even when the storage states differ sharply between alkali, clock-state, and nuclear-spin variants.
- [[coherence-time-hierarchy]] is the right comparison lens for the internal split between fast gate-first Rydberg stacks and coherence-first alkaline-earth / nuclear-spin stacks.
- [[erasure-error-vs-pauli-error]] matters here because atom loss can sometimes be detected and converted into a more structured fault model instead of behaving like anonymous depolarizing noise.

## Curated synthesis

This family is easiest to read if you separate **where the qubit is stored** from **where the entangling interaction lives**. Every note here eventually cashes out its two-qubit story through Rydberg physics, but the architectures differ sharply in whether storage and interaction are carried by the same states or by deliberately separated manifolds.

1. **`neutral-atom-qubit` is the systems umbrella**
   - Use it for the array-level story: tweezer assembly, reconfiguration, atom-loss management, and why neutral atoms scale differently from fabricated solid-state chips.
   - It should stay the best entry point when the live comparison is neutral atoms versus superconducting, trapped-ion, or photonic stacks.

2. **`rydberg-neutral-atom-qubit` is the execution-first branch**
   - This is the modern alkali / hyperfine processor stack where the same hardware package carries storage, transport, and fast blockade-mediated entangling gates.
   - The payoff is directness and current processor maturity. The cost is that Rydberg decay, laser noise, and atom loss sit very near the main computational path.

3. **`alkaline-earth-neutral-atom-clock-qubit` and `nuclear-spin-neutral-atom-qubit` are the coherence-first branch**
   - Both notes separate long-lived storage states from the excited manifolds used for control or entanglement.
   - `alkaline-earth-neutral-atom-clock-qubit` is the **architecture-and-control** view: optical-clock transitions, state-dependent lattices, and the clock-metrology lineage.
   - `nuclear-spin-neutral-atom-qubit` is the **encoding-and-memory** view: which weakly sensitive subspaces hold the information, and why that separation may matter for modular or deeper-circuit operation.

4. **The real family-level fork is where the coherence budget is spent**
   - The Rydberg branch spends coherence budget to keep the interaction primitive immediate.
   - The alkaline-earth / nuclear-spin branch spends hardware complexity to keep the stored qubit quieter and only borrow interaction strength transiently.
   - That is why these notes belong together but should not collapse into one generic “neutral atom” narrative.

## Routing rule

- Start with [[neutral-atom-qubit]] when the question is processor scale, array geometry, erasure handling, or why neutral atoms are strategically interesting at all.
- Start with [[rydberg-neutral-atom-qubit]] when the interesting variable is blockade-gate execution, alkali tweezer processors, or current digital-computing performance.
- Start with [[alkaline-earth-neutral-atom-clock-qubit]] when the comparison is really about clock-state hardware, state-dependent lattices, or the convergence of quantum-computing and optical-clock ideas.
- Start with [[nuclear-spin-neutral-atom-qubit]] when the main question is memory-first encoding, quiet idle behavior, or separating storage from interaction manifolds.
- Use [[erasure-error-vs-pauli-error]] alongside any of these notes when atom loss and reloadability become part of the architectural argument rather than just an experimental nuisance.

## Boundary with the trapped-ion family

Neutral atoms and trapped ions both offer individually addressable atomic qubits with long coherence, but the routing hinge is the interaction mechanism. Stay here when gates depend on optical tweezers, transient Rydberg excitation, and reconfigurable geometry. Hand off to [[trapped-ion-moc]] when the key story is shared motional modes, Coulomb-coupled gates, or laser-driven phonon control.

### Clock-state atomic boundary

The most common navigation mistake is to group [[alkaline-earth-neutral-atom-clock-qubit]] and [[nuclear-spin-neutral-atom-qubit]] with ion-trap clock-state qubits just because all of them are coherence-first atomic encodings. The family resemblance is real, but the system logic is different.

- Stay in this MOC when the quiet storage states are embedded in a **tweezer or lattice architecture** whose entangling step still comes from temporary Rydberg excitation, geometry rearrangement, or atom-loss-aware operation.
- Route to [[trapped-ion-moc]] when the quiet storage states live inside a **Coulomb crystal** and the real bottleneck is motional-bus engineering, not Rydberg-state borrowing.
- In practice, [[alkaline-earth-neutral-atom-clock-qubit]] is best read as "clock-state storage inside a neutral-atom processor," not as a softened version of [[ytterbium-hyperfine-qubit]]. The shared coherence philosophy matters, but the architectural constraints diverge as soon as you ask how entanglement, scaling, and reloadability actually work.

## Editorial note

Use this MOC to clarify the family split between interaction primitive and storage encoding. Keep species-specific experimental detail in the source entries, and keep this page focused on why several different neutral-atom notes still belong to one architectural cluster.
