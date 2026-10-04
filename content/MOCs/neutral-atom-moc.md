---
title: Neutral Atom MOC
type: moc
technology_family: Neutral Atom
note_count: 4
last_updated: '2026-09-21'
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

## Storage–interaction routing matrix

The four entries become easier to compare if storage and entanglement are treated as separate architectural choices. The last column records the cost of keeping those roles together or pulling them apart.

| Entry | Where information idles | How entanglement is activated | Architectural price paid |
|---|---|---|---|
| [[neutral-atom-qubit]] | Platform-level umbrella spanning ground-state hyperfine, clock, and nuclear-spin encodings | Transient Rydberg excitation inside a reconfigurable tweezer array | The overview must carry array assembly, transport, atom-loss detection, and reloading without pretending every species uses the same storage manifold |
| [[rydberg-neutral-atom-qubit]] | Alkali hyperfine ground states in the gate-first processor branch | Direct blockade-mediated Rydberg gates | Rydberg decay, laser noise, atomic motion, and detectable atom loss sit close to the main computational path |
| [[alkaline-earth-neutral-atom-clock-qubit]] | The long-lived $^1S_0 \leftrightarrow {}^3P_0$ clock manifold | Rydberg excitation from the metastable branch, with state-dependent trapping available for control | Extra optical transitions and state-dependent control buy a cleaner storage manifold at the cost of a more elaborate laser and trapping stack |
| [[nuclear-spin-neutral-atom-qubit]] | Weakly magnetic nuclear-spin sublevels, typically in the $^1S_0$ ground manifold | Rydberg or clock-state manifolds are borrowed only during control and entanglement | Memory and interaction are cleanly separated, but the gate path is less direct and the encoding remains a less mature systems branch |

Atom loss cuts across this matrix rather than defining one row. Read [[erasure-error-vs-pauli-error]] with the umbrella, Rydberg, and alkaline-earth branches when loss is detected or converted into a flagged event; do not assume that choosing a nuclear-spin storage manifold automatically supplies an erasure mechanism.

## Error-channel routing: loss is only useful when it is flagged

The family-level error story has three separate ledgers. Collapsing them into a single "atom loss" number overstates the architectural advantage.

| Ledger | Typical neutral-atom mechanism | Decoder-visible form | What must be reported |
|---|---|---|---|
| Flagged erasure | An atom leaves the trap, or a shelving / leakage check identifies that the computational state is gone | A known bad site or operation; route through [[erasure-error-vs-pauli-error]] | Physical loss probability, flag-detection fidelity and latency, false flags, and the residual error conditioned on no flag |
| Unflagged in-codespace error | Laser phase or amplitude noise, Doppler shifts, imperfect blockade, and coherent control error | Hidden Pauli or coherent error inferred only through syndrome data | The residual Pauli channel after erasure postselection, including any directional bias rather than only an average gate fidelity |
| Reload and rearrangement debt | Empty-site replacement, atom transport, recooling, and array repair | Not a gate error by itself, but a cycle-time and correlated-fault cost | Reload success, transport / recooling time, memory error accumulated by spectator qubits, and whether repair interrupts parallel operation |

This gives a stricter routing rule: **detectable loss is a candidate erasure, not automatically a useful erasure channel**. The advantage survives only if the flag arrives before decoding needs it, identifies the affected location reliably, and does not hide a large unflagged residual channel. Conversely, a quiet clock or nuclear-spin storage manifold can reduce idle error without changing the flagging axis at all. Use [[coherence-time-hierarchy]] for the storage benefit and [[erasure-error-vs-pauli-error]] only for the location information actually delivered to the decoder.

The comparison between branches should therefore preserve both coordinates. The alkali Rydberg branch has the most direct evidence for loss-aware logical operation, while alkaline-earth architectures can deliberately engineer leakage and loss into detectable manifolds. The nuclear-spin branch should not inherit that claim merely because it shares species or Rydberg access; its memory advantage and its erasure-conversion evidence must be evaluated separately.

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

## Scope boundary

This map distinguishes interaction primitives from storage encodings. Species-specific experimental details live in the source entries; this page explains why several neutral-atom implementations still form one architectural cluster.
