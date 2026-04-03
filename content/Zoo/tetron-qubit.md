---
title: Tetron Qubit (Topological Superconductor)
entry_type: qubit
technology_family: Topological
status: proposed
figure_reviewed: true
first_proposed_year: 2016
keywords:
- tetron
- Majorana
- topological
- Microsoft
- topoconductor
- measurement-based
- parity
- InAs-Al
influence_score: 0.72
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[tetron-qubit-figure.png]]

## Description

The tetron is a topological qubit design encoding quantum information in the joint fermion parity of four Majorana zero modes (MZMs) arranged in an H-shaped semiconductor-superconductor heterostructure. The qubit states $|0\rangle$ and $|1\rangle$ correspond to even and odd total parity of MZM pairs, and are topologically protected against local perturbations. The tetron is the architecture behind Microsoft's Majorana 1 processor (2025).

Four MZMs are hosted at the endpoints of two parallel topological superconductor segments connected by a trivial superconducting bridge (forming an "H" shape). The logical qubit is encoded in the parity degree of freedom:

$$|0_L\rangle = |p_{12}=+1, p_{34}=+1\rangle, \quad |1_L\rangle = |p_{12}=-1, p_{34}=-1\rangle$$

where $p_{ij}$ is the fermion parity of MZM pair $(i,j)$.

Gate operations use **measurement-based braiding**: joint parity measurements of MZM pairs implement effective braiding without physically moving quasiparticles. Parity readout uses quantum dot sensors coupled to MZM pairs via charge sensing. The complete Clifford group is achieved from single-qubit parity measurements plus two-qubit joint measurements.

Microsoft's 2025 Majorana 1 processor implements 8 tetron qubits using InAs/Al heterostructures ("topoconductors"). Key claims include topological gap protocol passed, controlled MZM parity, and a path toward 4×2 arrays with entanglement, targeting ~10× reduction in QEC overhead compared to conventional superconducting qubits.

## Hamiltonian

Low-energy effective Hamiltonian for four MZMs:

$$H_{\text{eff}} = i\epsilon_{12}\gamma_1\gamma_2 + i\epsilon_{34}\gamma_3\gamma_4$$

where $\gamma_i$ are Majorana operators ($\gamma_i^\dagger = \gamma_i$, $\{\gamma_i, \gamma_j\} = 2\delta_{ij}$) and $\epsilon_{ij}$ are exponentially suppressed overlap energies. Topological protection: $\epsilon_{ij} \propto e^{-L/\xi}$ where $L$ is the separation and $\xi$ the coherence length.

## Motivation

- **Topological protection:** Qubit states are protected by topology — local perturbations cannot distinguish $|0_L\rangle$ from $|1_L\rangle$, giving exponentially suppressed error rates.
- **Measurement-only gates:** No physical braiding needed — simplifies device layout and eliminates braiding-speed limitations.
- **QEC overhead reduction:** Microsoft claims ~10× fewer physical qubits needed for fault-tolerant computation vs. transmon + surface code.
- **Scalable architecture:** H-shaped design is lithographically defined and compatible with semiconductor fabrication; 4×2 arrays are near-term targets.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Topological gap | ~20–40 μeV | InAs/Al topoconductor | [Aghaee et al. 2025](https://doi.org/10.1038/s41586-025-08700-6) |
| MZM count | 4 per tetron | H-shaped device | [Karzig et al. 2017](https://doi.org/10.1103/PhysRevB.95.235305) |
| Parity lifetime | TBD | Key open metric | — |
| QEC overhead reduction | ~10× claimed | vs. transmon surface code | [Aghaee et al. 2025](https://doi.org/10.1038/s41586-025-08700-6) |

## Scaling Considerations

- **Measurement-only topological QC:** No physical braiding needed — simplifies device layout.
- **Modular arrays:** 4×2 tetron arrays planned as building blocks for larger processors.
- **QEC synergy:** Topological protection at physical level reduces logical overhead.
- **Materials challenge:** Requires pristine semiconductor-superconductor interfaces with hard induced gap.

## References

### Original proposal
- T. Karzig et al., "Scalable designs for quasiparticle-poisoning-protected topological quantum computation with Majorana zero modes," [Phys. Rev. B 95, 235305 (2017)](https://doi.org/10.1103/PhysRevB.95.235305) — [arXiv:1610.05289](https://arxiv.org/abs/1610.05289)

### Experimental progress
- M. Aghaee et al. (Microsoft Quantum), "Interferometric single-shot parity measurement in an InAs-Al hybrid device," [Nature 638, 651 (2025)](https://doi.org/10.1038/s41586-025-08700-6) — [arXiv:2405.10269](https://arxiv.org/abs/2405.10269)

## Linked Papers

- [[karzig-2017-tetron]]
- [[aghaee-2025-majorana-1]]

## Related Entries

- [[majorana-topological-qubit]] — General Majorana qubit concept
- [[planar-josephson-junction-qubit]] — Related InAs/Al heterostructure physics
- [[surface-code-logical-qubit]] — Conventional QEC approach that tetrons aim to improve upon
