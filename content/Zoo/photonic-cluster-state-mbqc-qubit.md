---
title: Photonic Cluster-State MBQC Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
first_proposed_year: 2004
keywords:
  - photonic qubit
  - cluster state
  - measurement-based quantum computing
  - one-way quantum computing
influence_score: 0.7
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---


A photonic qubit architecture specialized for measurement-based quantum computing (MBQC), where large photonic cluster states are prepared as entangled resources and computation proceeds through adaptive single-qubit measurements and feed-forward.

## Physics

The model follows one-way quantum computing: initialize a graph-state resource \(|G\rangle\), then enact logic via local measurements in chosen bases. In photonic implementations, entanglement generation is realized with linear-optical circuits and probabilistic fusion operations.

## Hamiltonian / Stabilizer Model

Cluster states are defined as simultaneous +1 eigenstates of graph stabilizers:

$$K_i = X_i \prod_{j \in N(i)} Z_j, \qquad K_i|G\rangle = |G\rangle$$

where $N(i)$ is the neighborhood of vertex $i$ in the cluster graph. A parent Hamiltonian with $|G\rangle$ as unique ground state is:

$$H_\text{cluster} = -\sum_i K_i$$

Computation proceeds by adaptive local measurements, effectively teleporting logical information through the graph while implementing gates via measurement basis choices.

## Why it matters

- Separates resource preparation (cluster generation) from algorithm execution (measurement sequence).
- Converts weak or probabilistic photonic interactions into a scalable computation model via resource states.
- Provides a distinct architectural path from gate-by-gate KLM-style photonic circuits.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Computation model | One-way MBQC on cluster states | Universal computation by adaptive measurements | [[raussendorf-2000-quantum-computing-via-measurements-only]], [[nielsen-2004-optical-quantum-computation-using-cluster]] |
| Cluster-state generation primitive | Linear optics + fusion/parity-style operations | Resource-efficient photonic construction strategy | [[browne-2005-resource-efficient-linear-optical]] |
| Dominant scaling bottleneck | Loss and source/detector efficiency | Primary practical limitation in photonic MBQC implementations | [[browne-2005-resource-efficient-linear-optical]], [[kok-2005-review-article-linear-optical]] |

## Figure

![[photonic-cluster-state-mbqc-qubit-figure.png]]

## Linked Papers

- [[raussendorf-2000-quantum-computing-via-measurements-only]]
- [[nielsen-2004-optical-quantum-computation-using-cluster]]
- [[browne-2005-resource-efficient-linear-optical]]

## Related Entries

- [[linear-optical-photonic-qubit]]
- [[gkp-codes]]
