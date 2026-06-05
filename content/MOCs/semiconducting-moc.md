---
title: Semiconducting MOC
type: moc
technology_family: Semiconducting
note_count: 11
last_updated: '2026-06-05'
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

- [[exchange-interaction-in-quantum-dots]] is the core coupling primitive for `loss-divincenzo-qubit`, `singlet-triplet-qubit`, `exchange-only-qubit`, `aeon-qubit`, and `rx-qubit`.
- [[decoherence-free-subspace]] separates the encoded-spin branch from the simpler one- and two-spin modalities.
- [[charge-noise-sweet-spot]] is the right cross-cutting lens for AEON, singlet-triplet, and other detuning-sensitive devices.
- [[spin-orbit-coupling-for-qubit-control]] marks the main fork between electron-spin designs that need synthetic field gradients and hole-spin designs that get all-electrical control natively.

## Control surfaces

- `loss-divincenzo-qubit`, `spin-qubit`, and `silicon-spin-qubit` are the coherence-first baseline: local spin states, exchange for two-qubit logic, and extra engineering for fast single-qubit drive.
- `singlet-triplet-qubit`, `exchange-only-qubit`, `rx-qubit`, and `aeon-qubit` are the encoded-exchange branch, trading simpler state definitions for symmetry protection, exchange-only control, or sweet-spot operation.
- `semiconductor-charge-qubit` and `hybrid-qubit` sit on the charge-admixed edge of the family, where stronger electrical control is bought by re-exposing the device to detuning noise.
- `hole-spin-qubit` is the high-SOC branch: faster and cleaner electrical drive, but with charge-noise sensitivity moved back into the center of the design problem.

## Family structure

- `loss-divincenzo-qubit` is the minimal single-spin + exchange proposal.
- `singlet-triplet-qubit`, `exchange-only-qubit`, `rx-qubit`, and `aeon-qubit` are best read as a local progression in how much symmetry structure is added to tame exchange control.
- `kane-qubit` is the donor-spin branch: same semiconductor ambition, but with atomically placed dopants instead of lithographic dots as the qubit-defining resource.
- `spin-qubit` and `silicon-spin-qubit` should stay as broad modality overviews, not absorb the encoded-spin subfamily.
- For the semiconductor descendants that cross into Josephson-circuit territory, see [[super-semi-moc]].
































































