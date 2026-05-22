---
title: Floquet Codes
entry_type: encoding
technology_family: Codes
status: proposed
figure_reviewed: true
first_proposed_year: 2021
keywords:
- Floquet
- dynamical code
- honeycomb code
- measurement-based
- quantum error correction
- two-body measurements
influence_score: 0.78
last_updated: '2026-05-22'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-05-22
---

## Figure

![[floquet-codes-figure.png]]

## Description

Floquet codes are a family of dynamical quantum error-correcting codes where logical information is defined stroboscopically by a periodic measurement schedule, not by a fixed stabilizer set at every instant. The canonical example is the honeycomb Floquet code introduced by Hastings and Haah (2021).

In the honeycomb construction, physical qubits sit on vertices of a trivalent lattice, and each round measures only pairwise Pauli checks on one edge family. Across a full three-round cycle, logical observables return to an equivalent frame and the resulting long-time memory behaves like a topological code.

## Representative Formalism

For the canonical 3-step honeycomb cycle:

$$\text{Round 1: } X_i X_j \text{ on one edge family}$$
$$\text{Round 2: } Y_i Y_j \text{ on a second edge family}$$
$$\text{Round 3: } Z_i Z_j \text{ on a third edge family}$$

The key umbrella-level point is that there is no single static stabilizer group (or static code Hamiltonian) that fully defines the logical qubit at a single instant. The correct object is the periodic spacetime measurement process. Effective stabilizer and logical information emerge over the full cycle.

## Motivation

- **Weight-2 measurements only:** Uses pairwise checks instead of larger ancilla-mediated stabilizer checks.
- **Hardware-facing simplicity:** Attractive for sparse-connectivity or native pair-measurement architectures.
- **Topological protection via dynamics:** Logical protection emerges from repeated rounds rather than a fixed parity-check block.
- **Design flexibility:** Floquet framing has expanded into boundary, color-code, and hyperbolic variants.

## Experimental Status

As of 2026, Floquet codes remain primarily a theory-and-simulation direction rather than an experimentally demonstrated logical-memory platform. Key recent progress includes:

- 2022: practical boundary constructions and planar benchmarking of honeycomb Floquet memories.
- 2024: Floquet/color-code construction via anyon-condensation formalism.
- 2025: dynamic-circuit honeycomb implementation with improved simulated performance.
- 2026: hyperbolic and semi-hyperbolic Floquet-code families explored under multiple noise models.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Measurement weight | 2 | Pairwise checks only | [Hastings and Haah 2021](https://doi.org/10.22331/q-2021-10-19-564) |
| Canonical cycle period | 3 rounds | XX, YY, ZZ schedule | [Hastings and Haah 2021](https://doi.org/10.22331/q-2021-10-19-564) |
| Planar honeycomb teraquop footprint | ~7000 physical qubits at 0.1% gate-level error (or ~900 with native pair measurements) | Simulation result for ~1e-12 logical-error target | [Gidney, Newman, and McEwen 2022](https://doi.org/10.22331/q-2022-09-21-813) |
| Representative planar thresholds | SD6: ~0.2–0.3%, SI1000: ~0.1–0.15%, EM3: ~1.5–2.0% | Strongly noise-model dependent | [Gidney, Newman, and McEwen 2022](https://doi.org/10.22331/q-2022-09-21-813) |
| Hyperbolic Floquet thresholds (preprint) | EM3: ~1.5%; SDEM3: ~1.0–1.2%; heralded loss: ~8.5–9% for {8,3} family | 2026 preprint, not yet archival | [Galimova 2026](https://arxiv.org/abs/2602.22906) |

## Scaling Considerations

- **Decoder and schedule coupling:** Performance depends on decoding the full spacetime syndrome history, not a single static round.
- **Noise-model sensitivity:** Relative performance versus surface-code-style baselines changes materially across circuit-level models.
- **Architecture fit matters:** Claimed gains are strongest when pair measurements are native or when ancilla overhead dominates alternatives.

## References

### Foundational Floquet / honeycomb
- M. B. Hastings and J. Haah, "Dynamically Generated Logical Qubits," [Quantum 5, 564 (2021)](https://doi.org/10.22331/q-2021-10-19-564) — [arXiv:2107.02194](https://arxiv.org/abs/2107.02194)
- J. Haah and M. B. Hastings, "Boundaries for the Honeycomb Code," [Quantum 6, 693 (2022)](https://doi.org/10.22331/q-2022-04-21-693) — [arXiv:2110.09545](https://arxiv.org/abs/2110.09545)
- C. Gidney, M. Newman, and M. McEwen, "Benchmarking the Planar Honeycomb Code," [Quantum 6, 813 (2022)](https://doi.org/10.22331/q-2022-09-21-813) — [arXiv:2202.11845](https://arxiv.org/abs/2202.11845)

### Recent developments
- M. S. Kesselring et al., "Anyon Condensation and the Color Code," [PRX Quantum 5, 010342 (2024)](https://doi.org/10.1103/PRXQuantum.5.010342) — [arXiv:2212.00042](https://arxiv.org/abs/2212.00042)
- J. Claes, "Dynamic circuit for the honeycomb Floquet code," [Phys. Rev. A 112, 062406 (2025)](https://doi.org/10.1103/QKLT-4JNJ) — [arXiv:2507.08069](https://arxiv.org/abs/2507.08069)
- A. A. Galimova, "Hyperbolic and Semi-Hyperbolic Floquet Codes for Photonic Quantum Computing," [arXiv:2602.22906](https://arxiv.org/abs/2602.22906)

## Linked Papers

- [[hastings-2021-floquet]]
- [[haah-2022-honeycomb-boundaries]]
- [[gidney-2022-planar-honeycomb-benchmark]]
- [[claes-2025-dynamic-circuit-honeycomb-floquet]]
- [[galimova-2026-hyperbolic-semi-hyperbolic-floquet]]

## Evergreen context

- [[threshold-theorem]] — Floquet codes are an alternate route to fault tolerance where the protected frame is periodic in time.
- [[quantum-hardware]] — Pairwise checks and sparse connectivity are the core hardware-facing motivation.
- [[erasure-error-vs-pauli-error]] — Reported thresholds are highly noise-model specific, so error model assumptions matter for cross-platform comparisons.

## Related Entries

- [[surface-code-logical-qubit]] — Static stabilizer topological baseline often used for comparisons
- [[color-code-logical-qubit]] — Related topological code family; connects to Floquet-color constructions
- [[qldpc-codes]] — Floquet measurement schedules are being explored as a route to locality-aware high-rate constructions
