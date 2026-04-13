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
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[photonic-cluster-state-mbqc-qubit-figure.png]]

## Description

The **photonic cluster-state MBQC qubit** is a photonic qubit architecture designed for **measurement-based quantum computing** (MBQC, also called one-way quantum computing). In this model, computation does not proceed through a sequence of unitary gates applied to qubits. Instead, a large entangled resource state — a **cluster state** (or graph state) — is prepared first, and computation is then performed entirely through adaptive single-qubit measurements with classical feed-forward.

A cluster state $|G\rangle$ is defined on a graph $G$ where each vertex hosts a qubit initialized in the $|+\rangle$ state, and each edge represents a controlled-$Z$ (CZ) entangling operation between neighboring qubits. The resulting state is the unique simultaneous $+1$ eigenstate of all **graph stabilizer** generators. In a photonic implementation, the qubits are photonic modes (polarization, dual-rail, or time-bin encoded), and entanglement generation is realized using linear-optical circuits and probabilistic **fusion operations** — beam splitters, phase shifters, and single-photon detectors that project pairs of photons into entangled states with some probability of success.

Computation proceeds by measuring each qubit in a chosen basis (typically a rotated $X$-$Y$ plane basis). The measurement outcome is probabilistic, introducing random Pauli byproducts that are tracked classically (Pauli frame). Subsequent measurement bases are **adaptively chosen** based on prior outcomes to compensate for these byproducts, ensuring deterministic computation. A 2D cluster state is the minimal resource for universal quantum computation; 1D cluster states suffice only for single-qubit operations.

The key advantage of MBQC is the **separation of resource preparation from algorithm execution**: the cluster state can be generated offline using probabilistic operations, and the computational depth is determined by the measurement sequence, not by the entangling gate depth.

## Hamiltonian

Cluster states are defined as simultaneous $+1$ eigenstates of graph stabilizer generators:

$$K_i = X_i \prod_{j \in N(i)} Z_j, \qquad K_i|G\rangle = |G\rangle$$

where $N(i)$ is the set of vertices adjacent to vertex $i$ in the graph $G$. A parent Hamiltonian with $|G\rangle$ as its unique ground state is:

$$H_{\text{cluster}} = -\sum_i K_i$$

This is a frustration-free, gapped Hamiltonian with energy gap $\Delta = 2$. The cluster state is the unique ground state in the $+1$ eigenspace of all stabilizers.

Computation via measurements: measuring qubit $i$ in the basis $\{|+_\theta\rangle, |-_\theta\rangle\}$ with $|{\pm_\theta}\rangle = (|0\rangle \pm e^{i\theta}|1\rangle)/\sqrt{2}$ effectively implements a rotation $R_z(\theta)$ on the logical information propagating through the cluster, up to Pauli byproducts determined by the measurement outcome.

## Motivation

- **Separates resource preparation from computation**: Cluster states can be generated using probabilistic linear-optical operations, while computation proceeds deterministically via adaptive measurements.
- **Converts weak photonic interactions into a scalable model**: Photons interact weakly, making deterministic two-qubit gates extremely difficult. MBQC circumvents this by using probabilistic fusion gates only during resource state preparation, not during computation.
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
- Introduced fusion gates (Type-I and Type-II) as efficient primitives for building photonic cluster states.
- Demonstrated that linear-optical cluster state generation is more resource-efficient than KLM-style gate teleportation.

**Small-scale demonstrations (2005–2015):**
- Multiple groups demonstrated 4–6 photon cluster states and performed MBQC algorithms on them.
- Loss and detector inefficiency remained the dominant practical limitations.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Computation model | One-way MBQC | Universal via adaptive measurements on 2D cluster | [Raussendorf & Briegel 2001](https://doi.org/10.1103/PhysRevLett.86.5188) |
| Resource generation | Probabilistic fusion gates | Success probability ≤50% (75% with boosting) | [Browne & Rudolph 2005](https://doi.org/10.1103/PhysRevLett.95.010501) |
| Dominant bottleneck | Photon loss + detector efficiency | Primary practical limitation | — |
| Cluster state dimension | 2D minimum for universality | 1D only for single-qubit operations | [Raussendorf & Briegel 2001](https://doi.org/10.1103/PhysRevLett.86.5188) |
| Feed-forward latency | ~ns scale | Optical delay lines | — |

## References

### Original proposals
- R. Raussendorf and H. J. Briegel, "A One-Way Quantum Computer," [Phys. Rev. Lett. **86**, 5188 (2001)](https://doi.org/10.1103/PhysRevLett.86.5188)
- M. A. Nielsen, "Optical Quantum Computation Using Cluster States," [Phys. Rev. Lett. **93**, 040503 (2004)](https://doi.org/10.1103/PhysRevLett.93.040503)

### Resource-efficient linear optics
- D. E. Browne and T. Rudolph, "Resource-Efficient Linear Optical Quantum Computation," [Phys. Rev. Lett. **95**, 010501 (2005)](https://doi.org/10.1103/PhysRevLett.95.010501)

### Reviews
- P. Kok, W. J. Munro, K. Nemoto, T. C. Ralph, J. P. Dowling, and G. J. Milburn, "Linear optical quantum computing with photonic qubits," [Rev. Mod. Phys. **79**, 135 (2007)](https://doi.org/10.1103/RevModPhys.79.135)

## Linked Papers

- [[raussendorf-2000-quantum-computing-via-measurements-only]]
- [[nielsen-2004-optical-quantum-computation-using-cluster]]
- [[browne-2005-resource-efficient-linear-optical]]

## Related Entries

- [[linear-optical-photonic-qubit]] — gate-based photonic QC (KLM approach)
- [[fusion-based-photonic-qubit]] — modern fusion-based photonic architecture
- [[gkp-codes]] — bosonic code applicable to photonic modes
- [[dual-rail-photonic-qubit]] — common photonic qubit encoding
- [[continuous-variable-photonic-qubit]] — continuous-variable cluster-state MBQC using squeezed-light qumodes
