---
title: Shuttling Ion-Trap Qubit (QCCD)
entry_type: infrastructure
technology_family: Trapped Ion
status: demonstrated
first_proposed_year: 2002
first_demonstrated_year: 2006
keywords:
- ion trap
- qccd
- shuttling
- segmented trap
- modular scaling
influence_score: 0.75
last_updated: '2026-06-01'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-06-01
figure_reviewed: true
---

## Figure

![[shuttling-ion-trap-qubit-figure.png]]

## Description

QCCD (quantum charge-coupled device) architectures scale trapped-ion processors by separating storage, interaction, cooling, and readout into dedicated zones of a segmented Paul trap, then physically transporting ions between those zones with time-dependent electrode voltages. The point is architectural, not modal: the qubit is still a trapped-ion qubit, but connectivity is created by routing ions through the trap instead of forcing every operation into one long chain.

In practice, QCCD hardware relies on splitting, merging, reordering, and junction transport of short ion chains while preserving low motional excitation. That lets a processor keep laser-intensive entangling gates in optimized interaction zones, park idle qubits in quieter memory zones, and insert sympathetic cooling or measurement only where needed. Modern QCCD systems now include T- and X-junction routing, race-track or storage-ring layouts, and real-time scheduling of transport operations across many zones.

## Hamiltonian

A representative QCCD transport Hamiltonian is the standard trapped-ion many-body Hamiltonian with explicitly time-dependent trap control:

$$
H(t)=\sum_i\left[\frac{\mathbf{p}_i^2}{2m}+q\,\Phi_{\mathrm{dc}}(\mathbf{r}_i,t)+\frac{q^2\lvert \mathbf{E}_{\mathrm{rf}}(\mathbf{r}_i)\rvert^2}{4m\Omega_{\mathrm{rf}}^2}\right]+\sum_{i<j}\frac{e^2}{4\pi\varepsilon_0\lvert \mathbf{r}_i-\mathbf{r}_j\rvert}+H_{\mathrm{int}}(t).
$$

Here $\Phi_{\mathrm{dc}}(\mathbf{r},t)$ is the programmed electrode waveform that shuttles, separates, and recombines ions, while the rf pseudopotential term provides transverse confinement. In transport segments one typically has $H_{\mathrm{int}}(t)\approx 0$ and engineers $\Phi_{\mathrm{dc}}(t)$ to suppress motional excitation, especially through junctions. In gate zones, $H_{\mathrm{int}}(t)$ becomes the usual driven spin-motion coupling used for Mølmer-Sørensen or related trapped-ion entangling gates.

## Motivation

QCCD addresses the main scaling failure mode of long trapped-ion chains: as chains grow, motional modes crowd together, transport and calibration overheads worsen, and local optical access becomes harder to optimize everywhere at once. Segmented transport trades some routing overhead for a cleaner systems architecture, where high-fidelity local operations and large-scale connectivity can be optimized separately. That is why QCCD keeps reappearing in trapped-ion fault-tolerance roadmaps: it turns scaling into a scheduling and transport problem instead of a single-chain control problem.

## Experimental Status

**Original proposal, Kielpinski-Monroe-Wineland (2002):**
- Introduced the QCCD architecture for moving ions among memory, interaction, and readout zones in a scalable trapped-ion computer.

**First junction-based demonstrations:**
- Hensinger et al. (2006) demonstrated two-dimensional T-junction shuttling, storage, separation, and ion swapping in an 11-zone array.
- Blakestad et al. (2009) demonstrated high-fidelity transport through an X-junction with energy gain below one motional quantum, establishing that routing need not destroy gate-ready motion.

**Processor-scale QCCD milestones:**
- Moses et al. (2023) demonstrated a 32-qubit race-track QCCD processor with average SPAM error $1.6\times10^{-3}$, single-qubit gate infidelity $2.5\times10^{-5}$, and two-qubit gate infidelity $1.84\times10^{-3}$.
- Berthusen et al. (2024) used Quantinuum's 56-qubit H2 QCCD system to demonstrate single-shot 4D surface-code error correction.
- Ransford et al. (2025) reported the 98-qubit Helios QCCD processor with a rotatable storage ring, two operation regions connected by a junction, and average infidelities of $2.5\times10^{-5}$ (1Q), $7.9\times10^{-4}$ (2Q), and $4.8\times10^{-4}$ (SPAM).
- Dasu et al. (2026) pushed the same Helios-class QCCD hardware to beyond-break-even encoded benchmarks with 48 to 94 logical qubits using high-rate iceberg codes.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| First 2D QCCD junction transport | 2006 | T-junction shuttling, storage, separation, and swapping in an 11-zone array | [Hensinger et al. 2006](https://doi.org/10.1063/1.2164910) |
| Junction transport excitation | <1 phonon | X-junction transport with sub-quantum added motional excitation | [Blakestad et al. 2009](https://doi.org/10.1103/PhysRevLett.102.153002) |
| Demonstrated QCCD processor size | 98 qubits | Quantinuum Helios architecture-level benchmark | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| 1Q gate fidelity in large QCCD processor | 99.9975% | Helios average 1Q infidelity $2.5\times10^{-5}$ | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| 2Q gate fidelity in large QCCD processor | 99.921% | Helios average 2Q infidelity $7.9\times10^{-4}$ | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| SPAM fidelity in large QCCD processor | 99.952% | Helios average SPAM infidelity $4.8\times10^{-4}$ | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| Physical qubits in QCCD surface-code experiment | 56 | Quantinuum H2 used for single-shot 4D surface-code experiments | [Berthusen et al. 2024](https://doi.org/10.1103/PhysRevA.110.062413) |
| Logical qubits on QCCD hardware | 48-94 | Beyond-break-even encoded benchmarks on Helios | [Dasu et al. 2026](https://arxiv.org/abs/2602.22211) |

## References

### Foundational architecture
- D. Kielpinski, C. Monroe, and D. J. Wineland, "Architecture for a large-scale ion-trap quantum computer," [Nature 417, 709 (2002)](https://doi.org/10.1038/nature00784)

### Transport demonstrations
- W. K. Hensinger et al., "T-junction ion trap array for two-dimensional ion shuttling, storage, and manipulation," [Appl. Phys. Lett. 88, 034101 (2006)](https://doi.org/10.1063/1.2164910)
- R. B. Blakestad et al., "High-Fidelity Transport of Trapped-Ion Qubits through an X-Junction Trap Array," [Phys. Rev. Lett. 102, 153002 (2009)](https://doi.org/10.1103/PhysRevLett.102.153002)

### Processor-scale QCCD milestones
- S. A. Moses et al., "A Race-Track Trapped-Ion Quantum Processor," [Phys. Rev. X 13, 041052 (2023)](https://doi.org/10.1103/PhysRevX.13.041052) — [arXiv:2305.03828](https://arxiv.org/abs/2305.03828)
- N. Berthusen et al., "Experiments with the four-dimensional surface code on a quantum charge-coupled device quantum computer," [Phys. Rev. A 110, 062413 (2024)](https://doi.org/10.1103/PhysRevA.110.062413) — [arXiv:2408.08865](https://arxiv.org/abs/2408.08865)
- A. Ransford et al., "A 98-qubit trapped-ion quantum computer," [arXiv:2511.05465 (2025)](https://arxiv.org/abs/2511.05465)
- S. Dasu et al., "Computing with many encoded logical qubits beyond break-even," [arXiv:2602.22211 (2026)](https://arxiv.org/abs/2602.22211)

## Linked Papers

- [[kielpinski-2002-shuttling]]
- [[moses-2023-race-track-trapped]]
- [[berthusen-2024-4d-surface-code-qccd]]
- [[ransford-2025-helios-98-qubit]]
- [[dasu-2026-many-encoded-logical-qubits]]

## Evergreen context

- [[motional-mode-coupling-in-ion-traps]] — explains why QCCD keeps interaction chains short and transport-induced heating low
- [[divincenzo-criteria]] — frames shuttling as an architectural answer to the scalability criterion, not a new qubit modality

## Related Entries

- [[trapped-ion-qubit]] — parent qubit platform
- [[cirac-zoller-gate]] — foundational trapped-ion gate scheme
- [[surface-code-logical-qubit]] — representative logical-layer workload now demonstrated on QCCD hardware
