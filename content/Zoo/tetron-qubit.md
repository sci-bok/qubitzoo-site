---
title: Tetron Qubit (Topological Superconductor)
entry_type: qubit
technology_family: Topological
status: proposed
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
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The tetron is a topological qubit design encoding quantum information in the joint fermion parity of four Majorana zero modes (MZMs) arranged in an H-shaped semiconductor-superconductor heterostructure. The qubit states $|0\rangle$ and $|1\rangle$ correspond to even and odd total parity of MZM pairs, and are topologically protected against local perturbations. The tetron is the architecture behind Microsoft's Majorana 1 processor (2025).

## Figure

![[tetron-qubit-figure.png]]

## Description

### Architecture

Four MZMs are hosted at the endpoints of two parallel topological superconductor segments connected by a trivial superconducting bridge (forming an "H" shape). The logical qubit is encoded in the parity degree of freedom:

$$|0_L\rangle = |p_{12}=+1, p_{34}=+1\rangle, \quad |1_L\rangle = |p_{12}=-1, p_{34}=-1\rangle$$

where $p_{ij}$ is the fermion parity of MZM pair $(i,j)$.

### Gate operations

- **Measurement-based braiding:** Joint parity measurements of MZM pairs implement effective braiding without physically moving quasiparticles
- **Parity readout:** Quantum dot sensors coupled to MZM pairs measure parity via charge sensing
- **Clifford gates:** Complete Clifford group from single-qubit parity measurements + two-qubit joint measurements

### Microsoft Majorana 1

Microsoft's 2025 Majorana 1 processor implements 8 tetron qubits using InAs/Al heterostructures ("topoconductors"). Key claims: topological gap protocol passed, controlled MZM parity, and path toward 4×2 arrays with entanglement. The approach targets ~10× reduction in QEC overhead compared to conventional superconducting qubits.

## Hamiltonian

Low-energy effective Hamiltonian for four MZMs:

$$H_{\text{eff}} = i\epsilon_{12}\gamma_1\gamma_2 + i\epsilon_{34}\gamma_3\gamma_4$$

where $\gamma_i$ are Majorana operators ($\gamma_i^\dagger = \gamma_i$, $\{\gamma_i, \gamma_j\} = 2\delta_{ij}$) and $\epsilon_{ij}$ are exponentially suppressed overlap energies. Topological protection: $\epsilon_{ij} \propto e^{-L/\xi}$ where $L$ is the separation and $\xi$ the coherence length.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Topological gap | ~20–40 μeV | InAs/Al topoconductor | [[aghaee-2025-majorana-1]] |
| MZM count | 4 per tetron | H-shaped device | [[karzig-2017-tetron]] |
| Parity lifetime | TBD | Key open metric | — |
| QEC overhead reduction | ~10× claimed | vs. transmon surface code | [[aghaee-2025-majorana-1]] |

## Scaling Considerations

- **Measurement-only topological QC:** No physical braiding needed — simplifies device layout
- **Modular arrays:** 4×2 tetron arrays planned as building blocks for larger processors
- **QEC synergy:** Topological protection at physical level reduces logical overhead
- **Materials challenge:** Requires pristine semiconductor-superconductor interfaces with hard induced gap

## Linked Papers
- [[karzig-2017-tetron]]
- [[aghaee-2025-majorana-1]]

## Related Entries
- [[majorana-topological-qubit]]
- [[planar-josephson-junction-qubit]]
- [[surface-code-logical-qubit]]
