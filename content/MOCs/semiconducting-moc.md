---
title: Semiconducting MOC
type: moc
technology_family: Semiconducting
note_count: 11
last_updated: '2026-08-01'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Semiconducting** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[aeon-qubit]] | qubit | active |
| [[exchange-only-qubit]] | qubit | active |
| [[hole-spin-qubit]] | qubit | demonstrated |
| [[hybrid-qubit]] | qubit | demonstrated |
| [[kane-qubit]] | qubit | demonstrated |
| [[rx-qubit]] | qubit | demonstrated |
| [[semiconductor-charge-qubit]] | qubit | demonstrated |
| [[silicon-spin-qubit]] | qubit | demonstrated |
| [[loss-divincenzo-qubit]] | qubit | demonstrated |
| [[singlet-triplet-qubit]] | qubit | active |
| [[spin-qubit]] | qubit | demonstrated |

## Composition

- qubit: 11

<!-- CURATED -->

































































































































































## Conceptual anchors

- [[exchange-interaction-in-quantum-dots]] is the device-level primitive for the whole dot-defined branch: it explains where tunable $J$ actually comes from and why barrier control became the preferred route.
- [[heisenberg-exchange-in-quantum-dots]] is the algebraic companion note for the encoded-spin branch, where the main question is no longer how $J$ is made but what logical axis an exchange pulse implements.
- [[decoherence-free-subspace]] is the clean separator between simple one-spin / two-spin notes and the three-spin encoded branch.
- [[charge-noise-sweet-spot]] is the main cross-cutting lens for the whole family whenever electrical tunability starts pulling charge sensitivity back in.
- [[spin-orbit-coupling-for-qubit-control]] marks the main fork between electron-spin platforms that need synthetic gradients and hole-spin platforms that get direct electrical drive from strong SOC.

## Curated synthesis

The highest-value organizing move in this family is to **separate the single-spin baseline from the encoded-exchange ladder and from the charge-admixed side branches**. Otherwise `loss-divincenzo-qubit`, `singlet-triplet-qubit`, `exchange-only-qubit`, `rx-qubit`, and `aeon-qubit` blur into “more spin qubits” when they are actually different answers to the same control-versus-noise problem.

1. **The baseline branch is local-spin-first**
   - [[loss-divincenzo-qubit]] is the minimal recipe: one spin per dot, exchange for entangling gates, and extra engineering for fast one-qubit control.
   - [[spin-qubit]] and [[silicon-spin-qubit]] should stay as umbrella notes for the broader modality and materials trajectory, not absorb the encoded-spin descendants.

2. **The encoded-exchange ladder adds symmetry structure step by step**
   - [[singlet-triplet-qubit]] is the first compression move: two spins, one encoded qubit, exchange as a logical splitting instead of only a two-qubit gate primitive.
   - [[exchange-only-qubit]] pushes that idea into a true three-spin encoded subsystem, removing the need for microwave drive or field gradients at the price of more elaborate pulse geometry.
   - [[rx-qubit]] keeps the three-spin encoding but moves into an always-on, resonantly driven regime to gain a sweet-spot operating mode and cavity-friendly control.
   - [[aeon-qubit]] is the endpoint of this local ladder: keep exchange always on, stay at a double sweet spot, and turn barrier-gate tuning into the main control surface.
   - Read this whole branch by alternating between [[exchange-interaction-in-quantum-dots]] for the physical origin of $J$ and [[heisenberg-exchange-in-quantum-dots]] for the logical action of that coupling after projection.

3. **The side branches are different compromises, not incomplete versions of the ladder**
   - [[semiconductor-charge-qubit]] and [[hybrid-qubit]] buy speed by re-admitting charge character into the qubit itself.
   - [[hole-spin-qubit]] uses strong intrinsic SOC to make electrical control native rather than synthetic.
   - [[kane-qubit]] is the donor-spin branch, where atomic placement and hyperfine control replace lithographic quantum-dot tuning as the defining resource.

## Routing rule: when to enter which note

- Enter `spin-qubit` or `silicon-spin-qubit` when the question is platform-level competitiveness, fabrication trajectory, or the overall semiconductor pitch.
- Enter `loss-divincenzo-qubit` when you want the cleanest “single spin + exchange” template.
- Enter `singlet-triplet-qubit`, `exchange-only-qubit`, `rx-qubit`, and `aeon-qubit` as a sequence when the real comparison is how much encoding and sweet-spot structure is being introduced to civilize exchange control.
- Enter `semiconductor-charge-qubit`, `hybrid-qubit`, or `hole-spin-qubit` when the main tradeoff is faster electrical control versus renewed charge sensitivity.
- For semiconductor descendants that cross fully into Josephson-circuit territory, continue in [[super-semi-moc]].
































































































































































