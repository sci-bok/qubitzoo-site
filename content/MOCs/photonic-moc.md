---
title: Photonic MOC
type: moc
technology_family: Photonic
note_count: 9
last_updated: '2026-08-12'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Photonic** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[fusion-based-photonic-qubit]] | architecture | proposed |
| [[linear-optical-photonic-qubit]] | architecture | demonstrated |
| [[photonic-cluster-state-mbqc-qubit]] | architecture | demonstrated |
| [[dual-rail-photonic-qubit]] | qubit | demonstrated |
| [[frequency-bin-photonic-qubit]] | qubit | demonstrated |
| [[photonic-qubit]] | qubit | demonstrated |
| [[polarization-photonic-qubit]] | qubit | demonstrated |
| [[time-bin-photonic-qubit]] | qubit | demonstrated |
| [[continuous-variable-photonic-qubit]] | qumode | demonstrated |

## Composition

- architecture: 3
- qubit: 5
- qumode: 1

<!-- CURATED -->

## Curated synthesis

The highest-value organizing move in this family is to **separate photonic encodings from photonic computation models**. Otherwise the graph quietly conflates “what degree of freedom stores the qubit?” with “how do we actually get entangling power and fault tolerance?”

1. **Encodings optimized for different physical routes**
   - [[dual-rail-photonic-qubit]] is the canonical chip-scale / LOQC encoding when spatial modes and integrated interferometers are the native hardware language.
   - [[time-bin-photonic-qubit]] is the fiber-native encoding when long-distance stability and network transport matter more than on-chip rail geometry.
   - [[polarization-photonic-qubit]] is the most direct single-photon Bloch-sphere encoding, with compact wave-plate control but polarization drift in deployed links.
   - [[frequency-bin-photonic-qubit]] uses discrete spectral modes and is especially natural for electro-optic control, dense multiplexing, and frequency-comb hardware.
   - These should be read together through [[erasure-error-vs-pauli-error]] and [[noise-bias-and-asymmetric-error-channels]]: all are loss-dominated photonic qubits, but they package mode matching and phase-stability constraints very differently.

2. **Continuous-variable photonics is a different information model**
   - [[continuous-variable-photonic-qubit]] is correctly typed as a `qumode`, not a discrete qubit. Gaussian gates are deterministic and time multiplexing reaches enormous mode counts, but universality and fault tolerance require non-Gaussian resources such as GKP states.
   - Route from it to [[bosonic-code-hierarchy]] when the question becomes how a continuous oscillator is converted into a protected logical qubit.

3. **Gate-based linear optics is an architecture, not an encoding**
   - [[linear-optical-photonic-qubit]] is the KLM lineage: minimal interactions, heavy ancilla and feed-forward overhead.
   - It usually rides on encodings like [[dual-rail-photonic-qubit]], but the conceptual payload is architectural: probabilistic optics plus teleportation still clear the [[threshold-theorem]] barrier in principle.

4. **Resource-state / measurement-first photonics is the modern scaling branch**
   - [[photonic-cluster-state-mbqc-qubit]] shifts the burden from online gates to offline cluster-state preparation plus adaptive measurement.
   - [[fusion-based-photonic-qubit]] goes one step further and treats failed entangling attempts as an architectural primitive rather than an exception.
   - Both belong in the same fault-tolerance conversation because they live or die on whether loss and fusion failures stay structured enough for erasure-aware decoding and percolation-style thresholds.

## Encoding-to-architecture routing matrix

The two layers are composable rather than mutually exclusive. Use the row to choose **what carries the information**, then the column to choose **how the machine obtains entangling power and fault tolerance**.

| Encoding route | Gate-based linear optics | Cluster-state MBQC | Fusion-based architecture |
|---|---|---|---|
| [[dual-rail-photonic-qubit]] | Canonical KLM-style carrier: beam splitters and phase shifters act directly on spatial rails | Natural graph-state carrier when dual-rail photons are prepared and consumed by adaptive measurements | Natural fit for discrete Bell/fusion measurements; loss is usually a detectable rail-vacancy event |
| [[polarization-photonic-qubit]] | Compact single-qubit control and common proof-of-principle LOQC encoding | Widely used for small photonic cluster demonstrations | Fusion-compatible, but deployed systems inherit polarization-drift and mode-matching burdens |
| [[time-bin-photonic-qubit]] | Possible, but active switching and interferometric delay stability replace simple on-chip rail routing | Strong fit for sequentially emitted and temporally multiplexed cluster states | Strong fit when repeated source cycles and delay networks feed fusion attempts |
| [[frequency-bin-photonic-qubit]] | Electro-optic mixing supplies dense mode transformations in place of spatial interferometer meshes | Useful when frequency-comb modes supply a multiplexed graph-state resource | Promising multiplexing layer for routing successful attempts, not a distinct fusion rule by itself |
| [[continuous-variable-photonic-qubit]] | Do not route through discrete single-photon KLM by default; Gaussian mode transformations are deterministic but not universal alone | CV cluster states are native, with non-Gaussian resources or [[bosonic-code-hierarchy|bosonic encodings]] needed for fault tolerance | Keep separate from the discrete-qubit fusion branch unless a specific hybrid or GKP construction supplies the bridge |

[[photonic-qubit]] does not occupy one cell: it is the carrier-level umbrella above the matrix. Likewise, [[linear-optical-photonic-qubit]], [[photonic-cluster-state-mbqc-qubit]], and [[fusion-based-photonic-qubit]] label columns rather than alternative encodings. This prevents a category error such as asking whether “dual rail or fusion based” is the better qubit—the former chooses a Hilbert-space encoding, while the latter chooses a resource-building architecture.

## Where the umbrella note belongs

- `photonic-qubit` should be the **family entry point**, not a peer competitor to the more specific notes. Use it when the question is simply why photons are attractive at all: low transport decoherence, room-temperature optics, and natural network compatibility.
- Hand off from `photonic-qubit` to [[dual-rail-photonic-qubit]], [[time-bin-photonic-qubit]], [[polarization-photonic-qubit]], or [[frequency-bin-photonic-qubit]] when the real comparison is the **discrete encoding degree of freedom**.
- Hand off to [[continuous-variable-photonic-qubit]] when the carrier is an oscillator quadrature rather than a two-level single-photon subspace.
- Hand off from `photonic-qubit` to [[linear-optical-photonic-qubit]], [[photonic-cluster-state-mbqc-qubit]], or [[fusion-based-photonic-qubit]] when the real comparison is the **scaling architecture**.
- Once the question stops being optical-hardware-specific and becomes, "what does flagged loss buy the decoder?", cross over to [[cross-platform-moc]] through `erasure-qubit` instead of repeating decoder logic inside this family.
