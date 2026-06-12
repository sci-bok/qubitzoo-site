---
title: Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: true
first_proposed_year: 2001
first_demonstrated_year: 2003
keywords:
- photonic qubit
- single photon
- polarization encoding
- dual-rail encoding
- time-bin encoding
- linear optics
- cluster state
- fusion-based quantum computing
influence_score: 0.68
last_updated: '2026-06-12'
generated_by: scibok-curation
verified_by: scibok-manual-2026-06-12
---

## Figure

![[photonic-qubit-figure.png]]

## Description

The **photonic qubit** is the umbrella discrete-variable optical qubit family in which quantum information is encoded into a small Hilbert space of one or a few optical modes, most commonly a single photon in a polarization, path/dual-rail, or time-bin basis. A representative single-photon state is

$$
|\psi\rangle = \alpha |1,0\rangle + \beta |0,1\rangle,
$$

where the two logical basis states may correspond to horizontal/vertical polarization, two spatial rails, or two well-separated time bins. This entry is about that **single-photon discrete-variable family** rather than continuous-variable photonic computing or oscillator-code encodings such as GKP.

Photonic qubits are attractive because photons suffer extremely little decoherence while propagating through low-loss waveguides or optical fiber, making them natural carriers of quantum information across a chip or between modules. The tradeoff is that photons interact only weakly, so universal computation usually relies on **measurement-induced entangling operations**, ancillary photons, feed-forward, or photonic resource-state constructions rather than a strong native two-photon interaction.

In practice, photonic quantum computing splits into several closely related layers: the encoding itself (dual-rail, polarization, time-bin), gate-based linear optics (KLM-style), cluster-state measurement-based photonics, and fusion-based fault-tolerant architectures. The umbrella entry should therefore be read as the common physical substrate beneath those more specific child entries.

## Hamiltonian

There is no single universal microscopic Hamiltonian for all photonic-qubit platforms, but passive control of a discrete-variable photonic qubit is well represented by a bilinear mode Hamiltonian,

$$
H_{\mathrm{passive}} = \sum_{ij} h_{ij} a_i^\dagger a_j,
$$

which generates beam-splitter and phase-shifter transformations among optical modes while conserving total photon number. For a two-mode encoding,

$$
H_{\mathrm{BS}} = \kappa a^\dagger b + \kappa^* b^\dagger a, \qquad H_{\phi} = \phi\, a^\dagger a,
$$

which, for real $\kappa$, reduces to the familiar beam-splitter form and provides a representative $SU(2)$ control set for single-qubit rotations in the logical subspace.

Universal computation is not obtained from this passive Hamiltonian alone. Instead, the crucial nontrivial resource is **measurement-induced effective nonlinearity**: two-photon interference, ancilla preparation, photon counting, and classical feed-forward generate heralded entangling operations or larger cluster/resource states. For that reason, a photonic-qubit umbrella entry should treat the bilinear optics Hamiltonian as representative of single-qubit transport and control, not as the whole computational story.

## Motivation

- **Minimal transport decoherence:** photons are the natural flying qubits for on-chip routing and long-distance networking.
- **Encoding flexibility:** the same logical qubit idea can live in polarization, path, or time-bin modes depending on whether the priority is integrated optics, interferometric stability, or fiber transmission.
- **Room-temperature optical layer:** most sources, interferometers, and waveguides operate without millikelvin infrastructure, though many high-performance detectors do require cryogenics.
- **Erasure-friendly failure mode:** photon loss often appears as a flagged absence event rather than an unheralded over-rotation, which is attractive for loss-aware fault-tolerance.
- **Main hardware challenge:** the platform pays for those advantages with loss sensitivity, source/detector inefficiency, mode mismatch, and the lack of a deterministic native two-photon gate.

## Experimental Status

**Scalable linear-optical route established — Knill, Laflamme, and Milburn (2001):**
- Showed that universal quantum computation is possible with single-photon sources, passive linear optics, photon counting, and feed-forward.
- Established the canonical photonic trade: weak native interactions can be replaced by measurement-induced nonlinear operations at resource-cost overhead.

**First landmark entangling-gate experiment — O'Brien et al. (2003):**
- Demonstrated a post-selected all-optical controlled-NOT gate.
- Confirmed that nontrivial two-qubit photonic logic is experimentally reachable without a direct optical nonlinearity.

**Encoding-specific diversification (2000s-2020s):**
- Dual-rail/path encoding became the canonical integrated-LOQC language.
- Time-bin encoding became the workhorse for deployed fiber links and long-distance photonic networking.
- Polarization encoding remained central for tabletop and many source-characterization experiments.

**Fault-tolerant architectural shift — Bartolucci et al. (2023):**
- Modern photonic roadmaps increasingly emphasize cluster-state and fusion-based resource-state consumption rather than literal KLM gate teleportation.
- The important modern question is less "can photons compute?" and more "can loss, feed-forward latency, and source multiplexing be engineered below threshold?"

**Recent 2024-2026 direction check:**
- A targeted re-check did not uncover a single peer-reviewed 2025-2026 experimental result that supersedes the canonical umbrella milestones above for the whole discrete-variable photonic-qubit family.
- The most relevant recent motion is architectural and systems-level: fusion-based fault tolerance, large photonic resource-state generation, and networked spin-photon modules such as the 2024 `Distributed Quantum Computing in Silicon` preprint.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Representative logical encodings | polarization, path/dual-rail, time-bin | Same single-photon DV qubit family, different optical modes | [Kok et al. 2007](https://doi.org/10.1103/RevModPhys.79.135) |
| Native 1Q control | Deterministic linear optics | Beam splitters and phase shifters implement single-qubit mode rotations | [Knill et al. 2001](https://doi.org/10.1038/35051009) |
| Native 2Q interaction | None in passive optics | Universal 2Q logic is usually measurement-induced and probabilistic | [Knill et al. 2001](https://doi.org/10.1038/35051009) |
| First landmark optical 2Q gate demo | 2003 | Post-selected all-optical CNOT | [O'Brien et al. 2003](https://doi.org/10.1038/nature02054) |
| Dominant scaling bottleneck | Photon loss + indistinguishability + detector efficiency | Weak interaction is manageable only if those optical imperfections stay below threshold | [Kok et al. 2007](https://doi.org/10.1103/RevModPhys.79.135) |
| Modern FT architecture direction | Fusion / cluster-state resource consumption | Emphasizes small entangled resource states plus destructive fusion measurements | [Bartolucci et al. 2023](https://doi.org/10.1038/s41467-023-36493-1) |
| Recent systems milestone | Remote entanglement plus teleported gate between silicon spin-photon nodes | Important 2024 direction, but still a preprint and not a canonical family-wide benchmark | [Photonic Inc. 2024](https://arxiv.org/abs/2406.01704) |

## References

### Foundational proposals and reviews
- E. Knill, R. Laflamme, and G. J. Milburn, "A scheme for efficient quantum computation with linear optics," [Nature 409, 46 (2001)](https://doi.org/10.1038/35051009) — [arXiv:quant-ph/0006088](https://arxiv.org/abs/quant-ph/0006088)
- P. Kok, W. J. Munro, K. Nemoto, T. C. Ralph, J. P. Dowling, and G. J. Milburn, "Linear optical quantum computing with photonic qubits," [Rev. Mod. Phys. 79, 135 (2007)](https://doi.org/10.1103/RevModPhys.79.135) — [arXiv:quant-ph/0512071](https://arxiv.org/abs/quant-ph/0512071)

### Landmark experiment
- J. L. O'Brien, G. J. Pryde, A. G. White, T. C. Ralph, and D. Branning, "Demonstration of an all-optical quantum controlled-NOT gate," [Nature 426, 264 (2003)](https://doi.org/10.1038/nature02054)

### Modern fault-tolerant architecture and recent direction
- S. Bartolucci et al., "Fusion-based quantum computation," [Nat. Commun. 14, 912 (2023)](https://doi.org/10.1038/s41467-023-36493-1) — [arXiv:2101.09310](https://arxiv.org/abs/2101.09310)
- Photonic Inc., "Distributed Quantum Computing in Silicon," [arXiv:2406.01704 (2024)](https://arxiv.org/abs/2406.01704)

## Linked Papers

- [[knill-2001-klm]]
- [[kok-2005-review-article-linear-optical]]
- [[obrien-2003-all-optical-cnot]]
- [[bartolucci-2023-fbqc]]
- [[photonic-2024-distributed-qc]]

## Evergreen context

- [[erasure-error-vs-pauli-error]] — photonic platforms are unusually important for erasure-aware thinking because missing photons are often flagged absence events rather than hidden unitary errors.
- [[noise-bias-and-asymmetric-error-channels]] — the platform only scales cleanly when its dominant imperfections stay in the structured loss, mismatch, and detection-failure regime rather than washing out into generic depolarizing noise.
- [[threshold-theorem]] — photonic architectures are one of the clearest demonstrations that threshold engineering can trade deterministic interactions for resource overhead, feed-forward, and loss-tolerant coding.

## Related Entries

- [[dual-rail-photonic-qubit]] — canonical path-encoded child entry
- [[time-bin-photonic-qubit]] — fiber-native temporal encoding
- [[linear-optical-photonic-qubit]] — gate-based LOQC framing of the same family
- [[photonic-cluster-state-mbqc-qubit]] — measurement-based photonic computation
- [[fusion-based-photonic-qubit]] — fault-tolerant resource-state architecture
