---
title: Photonic Cluster-State MBQC Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: true
first_proposed_year: 2001
first_demonstrated_year: 2005
keywords:
  - photonic qubit
  - cluster state
  - measurement-based quantum computing
  - one-way quantum computing
  - graph state
  - fusion gate
  - linear optics
influence_score: 0.70
last_updated: '2026-07-16'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[photonic-cluster-state-mbqc-qubit-figure.png]]

## Description

The **photonic cluster-state MBQC qubit** is a photonic qubit architecture designed for **measurement-based quantum computing** (MBQC, also called one-way quantum computing). In this model, computation does not proceed through a sequence of unitary gates applied to qubits. Instead, a large entangled resource state, a **cluster state** (or graph state), is prepared first, and computation is then performed entirely through adaptive single-qubit measurements with classical feed-forward.

A cluster state $|G\rangle$ is defined on a graph $G$ where each vertex hosts a qubit initialized in the $|+\rangle$ state, and each edge represents a controlled-$Z$ (CZ) entangling operation between neighboring qubits. The resulting state is the unique simultaneous $+1$ eigenstate of all **graph stabilizer** generators. In a photonic implementation, the qubits are photonic modes (polarization, dual-rail, or time-bin encoded), and entanglement generation is realized using linear-optical circuits and probabilistic **fusion operations**, beam splitters, phase shifters, delay lines, and single-photon detectors that project pairs of photons into entangled states with some probability of success.

Computation proceeds by measuring each qubit in a chosen basis, typically a rotated $X$-$Y$ plane basis. The measurement outcome is probabilistic, introducing random Pauli byproducts that are tracked classically in a Pauli frame. Subsequent measurement bases are **adaptively chosen** based on prior outcomes to compensate for these byproducts, ensuring deterministic logical computation. A 2D cluster state is the minimal resource for universal quantum computation, while 1D cluster states suffice only for state transport and single-qubit operations.

The key advantage of MBQC is the **separation of resource preparation from algorithm execution**: the cluster state can be generated offline using probabilistic operations, and the computational depth is determined by the measurement sequence rather than by an in-line entangling-gate depth.

## Hamiltonian

There is **no single native many-body photonic hardware Hamiltonian** that literally prepares or runs this architecture. In the Zoo sense, the right Hamiltonian to write down is the **abstract parent Hamiltonian** of the cluster state together with the measurement-update rule used during MBQC.

Cluster states are defined as simultaneous $+1$ eigenstates of graph stabilizer generators:

$$K_i = X_i \prod_{j \in N(i)} Z_j, \qquad K_i|G\rangle = |G\rangle$$

where $N(i)$ is the set of graph neighbors of vertex $i$. A standard parent Hamiltonian with $|G\rangle$ as its unique ground state is

$$H_{\mathrm{cluster}} = -\sum_i K_i.$$

This Hamiltonian is frustration-free and has gap $\Delta = 2$ in Pauli units, but it should be read as an **ideal stabilizer description**, not as the literal optical-device Hamiltonian. The actual photonic hardware consists of single-photon sources, interferometers, delay lines, detectors, and measurement-induced fusion operations.

For computation, measuring one qubit of a 1D cluster in the basis $B(\theta)=\{|+_{\theta}\rangle, |-_{\theta}\rangle\}$ with

$$|{\pm_{\theta}}\rangle = \frac{|0\rangle \pm e^{i\theta}|1\rangle}{\sqrt{2}}$$

teleports the logical state to the neighboring site as

$$|\psi\rangle \mapsto X^{m} H R_z(\theta)|\psi\rangle,$$

up to the measurement outcome $m\in\{0,1\}$. Adaptive basis updates absorb these Pauli byproducts into a classical Pauli frame. A 1D cluster is therefore enough for state transport and single-qubit rotations, while a 2D cluster is required for universal entangling computation.

## Motivation

- **Separates resource preparation from computation**: Cluster states can be generated using probabilistic linear-optical operations, while computation proceeds deterministically via adaptive measurements.
- **Converts weak photonic interactions into a scalable model**: Photons interact weakly, making deterministic two-qubit gates extremely difficult. MBQC circumvents this by using probabilistic fusion gates only during resource-state preparation, not during computation.
- **Distinct architectural path from gate-based photonic QC**: Avoids the massive overhead of KLM-style teleportation-based gates.
- **Naturally suited to photonic hardware**: Photons propagate at the speed of light, enabling high-bandwidth measurement and feed-forward with optical delay lines.
- **Scalability via multiplexing**: Temporal and spatial multiplexing of photonic modes can generate large cluster states from modest hardware.

## Experimental Status

**One-way quantum computation concept — Raussendorf and Briegel (2001):**
- Proposed MBQC using cluster states as universal computational resources.
- Showed that adaptive single-qubit measurements on a 2D cluster state are sufficient for universal quantum computation.

**Optical MBQC proposal — Nielsen (2004):**
- Showed how cluster states can be generated using linear optics and probabilistic operations.
- Connected the MBQC model to photonic implementations.

**Resource-efficient construction — Browne and Rudolph (2005):**
- Introduced Type-I and Type-II fusion gates as efficient primitives for building photonic cluster states from smaller entangled resources.
- Clarified why photonic MBQC is architecturally cleaner than KLM-style teleported-gate circuits.

**Small-scale qubit demonstrations (2005–2015):**
- Multiple groups demonstrated 4–6 photon cluster states and ran proof-of-principle MBQC algorithms.
- These experiments validated the model but remained far from fault-tolerant scale because loss, source brightness, and detector efficiency dominated the error budget.

**Fault-tolerant descendants (2021–2023):**
- Modern photonic fault-tolerance work shifted toward fusion-based resource-state architectures that still live inside the cluster-state / MBQC worldview.
- In practice, the frontier question is no longer whether MBQC works in principle, but whether photonic resource generation and loss management can reach the thresholds needed for large foliated or fusion-based cluster states.

**Recent hardware signals (2024–2026):**
- A 2024 dual-rail demonstration reported a 4-photon photonic cluster state with lower-bound fidelity 0.81, giving this entry a concrete modern qubit-level benchmark rather than only historical proposals.
- A 2026 telecom C-band quantum-dot preprint reported deterministic linear cluster-state generation with process fidelity $0.71 \pm 0.01$, spin-photon entanglement negativity $0.27 \pm 0.02$, and photon indistinguishability of at least 83%. This is still a resource-generation milestone, not a full fault-tolerant MBQC machine, but it is exactly the kind of result that matters for scaling photonic cluster-state hardware.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Universal resource | 2D cluster state | 1D chains support transport and single-qubit rotations, but not universal entangling computation | [Raussendorf & Briegel 2001](https://doi.org/10.1103/PhysRevLett.86.5188) |
| Resource-generation primitive | Probabilistic Type-I / Type-II fusion | Linear-optical entanglement growth from smaller photonic resources | [Browne & Rudolph 2005](https://doi.org/10.1103/PhysRevLett.95.010501) |
| Bare fusion success probability | ≤50% | The core linear-optical fusion primitives are intrinsically probabilistic | [Browne & Rudolph 2005](https://doi.org/10.1103/PhysRevLett.95.010501) |
| Recent explicit DV cluster-state demo | 4 photons, lower-bound fidelity 0.81 | Dual-rail photonic cluster-state demonstration | [Blau et al. 2024](https://doi.org/10.1364/CLEO_FS.2024.FM1K.5) |
| Recent telecom resource milestone | Process fidelity $0.71 \pm 0.01$; indistinguishability ≥83% | Deterministic linear cluster-state generation in the telecom C-band; still pre-fault-tolerant | [Peniakov et al. 2026](https://arxiv.org/abs/2607.04896) |
| Dominant scaling challenge | Photon loss / erasure plus detector inefficiency | The central obstacle is loss-tolerant resource generation and readout, not single-qubit control | [Kok et al. 2007](https://doi.org/10.1103/RevModPhys.79.135) |

## References

### Original proposals
- R. Raussendorf and H. J. Briegel, "A One-Way Quantum Computer," [Phys. Rev. Lett. **86**, 5188 (2001)](https://doi.org/10.1103/PhysRevLett.86.5188)
- M. A. Nielsen, "Optical Quantum Computation Using Cluster States," [Phys. Rev. Lett. **93**, 040503 (2004)](https://doi.org/10.1103/PhysRevLett.93.040503)

### Resource-efficient linear optics
- D. E. Browne and T. Rudolph, "Resource-Efficient Linear Optical Quantum Computation," [Phys. Rev. Lett. **95**, 010501 (2005)](https://doi.org/10.1103/PhysRevLett.95.010501)

### Reviews and modern descendants
- P. Kok, W. J. Munro, K. Nemoto, T. C. Ralph, J. P. Dowling, and G. J. Milburn, "Linear optical quantum computing with photonic qubits," [Rev. Mod. Phys. **79**, 135 (2007)](https://doi.org/10.1103/RevModPhys.79.135)
- S. Bartolucci et al., "Fusion-based quantum computation," [Nat. Commun. **14**, 912 (2023)](https://doi.org/10.1038/s41467-023-36493-1)

### Recent hardware milestones
- M. Blau, R. Oliver, X. Ji, M. Lipson, and A. L. Gaeta, "Realization of a Dual-Rail Photonic Cluster State," [CLEO 2024, FM1K.5](https://doi.org/10.1364/CLEO_FS.2024.FM1K.5)
- G. Peniakov, R. Hekmati, J. Michl, M. Helal, M. Meinecke, J. Kaupp, Y. Reum, M. Kamp, M. Emmerling, A. T. Pfenning, S. Höfling, and T. Huber-Loyola, "Photonic Cluster State Generation from a Quantum Dot Emitting in the Telecom C-band," [arXiv:2607.04896 (2026)](https://arxiv.org/abs/2607.04896)

## Linked Papers

- [[raussendorf-2000-quantum-computing-via-measurements-only]]
- [[nielsen-2004-optical-quantum-computation-using-cluster]]
- [[browne-2005-resource-efficient-linear-optical]]
- [[kok-2005-review-article-linear-optical]]
- [[bartolucci-2023-fbqc]]

## Evergreen context

- [[threshold-theorem]] — the main architectural question is how offline cluster-state preparation plus adaptive measurement still reaches a fault-tolerant regime despite probabilistic entangling operations
- [[erasure-error-vs-pauli-error]] — photon loss is often a flagged absence event, so loss-tolerant MBQC should be read through erasure structure rather than a purely Pauli-noise picture
- [[noise-bias-and-asymmetric-error-channels]] — cluster-state photonics only scales cleanly when loss and fusion failure remain structured, biased channels instead of washing out into generic depolarizing noise

## Related Entries

- [[photonic-qubit]] — umbrella entry for photonic encodings and hardware assumptions
- [[linear-optical-photonic-qubit]] — gate-based photonic QC (KLM approach)
- [[fusion-based-photonic-qubit]] — modern fault-tolerant descendant of the cluster-state worldview
- [[dual-rail-photonic-qubit]] — common discrete-variable encoding for photonic cluster states
- [[time-bin-photonic-qubit]] — time-multiplexed encoding path that pairs naturally with large photonic graph states
- [[gkp-codes]] — bosonic / CV error-correction direction that sometimes intersects photonic MBQC, but is conceptually distinct from this discrete-qubit entry
