---
title: Fluxonium
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2009
first_demonstrated_year: 2009
keywords:
- fluxonium
- superconducting qubit
- superinductance
- josephson junction array
- flux qubit
- heavy fluxonium
- integer fluxonium
influence_score: 0.90
last_updated: '2026-05-03'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-05-03
---

## Figure

![[fluxonium-figure.png]]

## Description

The fluxonium qubit, introduced by Manucharyan et al. (2009), consists of a small Josephson junction shunted by a superinductance, a very large inductance usually realized as an array of larger Josephson junctions. Together with the junction capacitance, this creates a superconducting circuit with strong anharmonicity, low sensitivity to offset charge, and a flux-tunable spectrum.

At the canonical half-flux-quantum sweet spot, $\Phi_\text{ext} = \Phi_0/2$, the $|0\rangle \leftrightarrow |1\rangle$ transition is first-order insensitive to flux noise. Unlike the transmon, fluxonium does not buy charge-noise robustness by pushing far into the weakly anharmonic regime. It keeps multi-GHz separation from higher transitions while the qubit transition itself can sit in the $100\text{ MHz} {-} 1\text{ GHz}$ range for heavy-fluxonium devices, making leakage easier to suppress but readout and fast control harder.

In the large-barrier heavy-fluxonium regime, one can think in terms of left- and right-well persistent-current states, but the actual low-energy eigenstates at the sweet spot are their symmetric and antisymmetric superpositions. In that regime, relevant transition matrix elements can become exponentially small, which is the real protection mechanism behind the best millisecond-$T_1$ results, not a literal removal of all noise channels.

Recent work broadened the fluxonium story beyond low-frequency protected-memory-style devices. Integer fluxonium (Mencia et al. 2024) operates at zero external flux near $4\text{ GHz}$ while retaining strong coherence and $>99.9\%$ average Clifford fidelity, and wafer-scale fabrication plus improved readout results in 2025 made the platform look more scalable and less idiosyncratic.

## Hamiltonian

$$H = 4E_C\hat{n}^2 - E_J\cos\hat{\varphi} + \frac{1}{2}E_L(\hat{\varphi} - 2\pi\Phi_\text{ext}/\Phi_0)^2$$

where $E_C = e^2/2C$ is the charging energy, $E_J$ is the Josephson energy of the small junction, $E_L = (\Phi_0/2\pi)^2/L$ is the inductive energy of the superinductance, $\hat{n}$ and $\hat{\varphi}$ are conjugate charge and phase operators, and $\Phi_\text{ext}$ is the external flux threading the loop.

At $\Phi_\text{ext} = \Phi_0/2$, the potential
$$U(\varphi) = -E_J\cos\varphi + \frac{1}{2}E_L(\varphi - \pi)^2$$
forms the familiar symmetric double well. In the large-barrier limit, the localized well states $|L\rangle$ and $|R\rangle$ are a useful basis, while the true low-energy eigenstates are approximately $(|L\rangle \pm |R\rangle)/\sqrt{2}$, split by the tunneling amplitude through the barrier.

## Motivation

The transmon's Achilles' heel is weak anharmonicity, which limits gate speed and makes leakage to $|2\rangle$ hard to ignore. Fluxonium targets a different operating point: strong anharmonicity, sweet-spot protection against flux noise, and in heavy devices a suppressed $|0\rangle \leftrightarrow |1\rangle$ matrix element that can dramatically improve $T_1$. The traditional pain points were low transition frequency, difficult readout, and fabrication of large junction arrays. The 2024-2025 fluxonium literature is largely about attacking those exact weaknesses.

## Experimental Status

**First demonstration, fluxonium architecture — Manucharyan et al. (2009):**
- Realized the superinductance-shunted Josephson circuit and demonstrated the spectroscopic signatures of the fluxonium Hamiltonian.
- Showed that the circuit largely eliminates offset-charge sensitivity without collapsing into the weakly anharmonic transmon limit.

**High-coherence sweet-spot fluxonium — Nguyen et al. (2019):**
- Established the half-flux sweet spot as the practical coherence-optimized operating point for modern fluxonium.
- Achieved roughly $T_1 \sim 300\,\mu\text{s}$ and $T_2^{\text{echo}} > 100\,\mu\text{s}$.

**Millisecond heavy fluxonium — Somoroff et al. (2023):**
- Demonstrated $T_1 > 1\,\text{ms}$ in heavy fluxonium.
- Tied the improvement to suppressed transition matrix elements in the large-barrier regime.

**High-fidelity gates — Ding et al. (2023):**
- Demonstrated fluxonium two-qubit gates mediated by a transmon coupler.
- Showed that fluxonium can support $>99.9\%$ single-qubit control and $>99.7\%$ two-qubit control, not just high-coherence idling.

**Integer fluxonium — Mencia et al. (2024):**
- Demonstrated a zero-field fluxonium variant operating near $4\text{ GHz}$.
- Reported Ramsey coherence beyond $100\,\mu\text{s}$ and average Clifford fidelity above $99.9\%$.
- Important because it attacks the historical "too-low-frequency" complaint directly.

**Wafer-scale-uniformity fluxonium — Wang et al. (2025):**
- Moved fluxonium coherence into a nearly 100%-yield overlap-fabrication process across a 2-inch wafer.
- Reported fluxonium devices with $T_1 > 1\,\text{ms}$ in a process aimed at manufacturability rather than hero devices.

**Modern QND readout — Bothara et al. (2025):**
- Reported $97.8 \pm 0.4\%$ single-shot assignment fidelity with a JPA and $99.0 \pm 0.3\%$ QND fidelity in a tantalum high-coherence fluxonium device.
- Useful because readout, not coherence, has often been the bottleneck for the platform.

**2026 audit check:**
- A 2024-2026 literature search surfaced new 2026 control and noise studies, but no clearly peer-reviewed experimental benchmark that supersedes the cited coherence, gate, or readout milestones for this umbrella entry.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | $300\,\mu\text{s}$ to $>1\,\text{ms}$ | High-coherence, heavy, and wafer-scale fluxonium devices at or near sweet-spot operation | [Nguyen et al. 2019](https://doi.org/10.1103/PhysRevX.9.041041); [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001); [Wang et al. 2025](https://doi.org/10.1103/PhysRevApplied.23.044064) |
| Coherence | $T_2^{\text{echo}} > 100\,\mu\text{s}$; Ramsey $>100\,\mu\text{s}$ at $\sim 4\text{ GHz}$ | Coherence depends strongly on regime and protocol | [Nguyen et al. 2019](https://doi.org/10.1103/PhysRevX.9.041041); [Mencia et al. 2024](https://doi.org/10.1103/PRXQuantum.5.040318) |
| Qubit frequency $\omega_{01}/2\pi$ | $0.1{-}1\,\text{GHz}$ (heavy) or $\sim 4\,\text{GHz}$ (integer) | Heavy fluxonium emphasizes protection; integer fluxonium emphasizes a more control-friendly operating point | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001); [Mencia et al. 2024](https://doi.org/10.1103/PRXQuantum.5.040318) |
| 1Q gate fidelity | $>99.9\%$ | Modern fluxonium has demonstrated both protected coherence and high-fidelity control | [Ding et al. 2023](https://doi.org/10.1103/PhysRevX.13.031035); [Mencia et al. 2024](https://doi.org/10.1103/PRXQuantum.5.040318) |
| 2Q gate fidelity | $>99.7\%$ | Fluxonium-fluxonium entangling gates with a transmon coupler | [Ding et al. 2023](https://doi.org/10.1103/PhysRevX.13.031035) |
| Readout assignment fidelity | $97.8 \pm 0.4\%$ | With JPA in a tantalum high-coherence fluxonium device; QND fidelity $99.0 \pm 0.3\%$ | [Bothara et al. 2025](https://doi.org/10.1063/5.0255892) |
| Fabrication uniformity | $<5\%$ phase-slip-junction variation across a 2-inch wafer | Manufacturability result rather than a qubit-state metric, but important for scaling claims | [Wang et al. 2025](https://doi.org/10.1103/PhysRevApplied.23.044064) |

## References

### Original proposal
- V. E. Manucharyan et al., "Fluxonium: Single Cooper-Pair Circuit Free of Charge Offsets," [Science 326, 113 (2009)](https://doi.org/10.1126/science.1175552) · [arXiv:0906.0831](https://arxiv.org/abs/0906.0831)

### Experimental milestones and recent developments
- L. B. Nguyen et al., "High-Coherence Fluxonium Qubit," [Phys. Rev. X 9, 041041 (2019)](https://doi.org/10.1103/PhysRevX.9.041041) · [arXiv:1810.11006](https://arxiv.org/abs/1810.11006)
- A. Somoroff et al., "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. 130, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001) · [arXiv:2103.08578](https://arxiv.org/abs/2103.08578)
- L. Ding et al., "High-Fidelity, Frequency-Flexible Two-Qubit Fluxonium Gates with a Transmon Coupler," [Phys. Rev. X 13, 031035 (2023)](https://doi.org/10.1103/PhysRevX.13.031035) · [arXiv:2304.06087](https://arxiv.org/abs/2304.06087)
- R. A. Mencia et al., "Integer Fluxonium Qubit," [PRX Quantum 5, 040318 (2024)](https://doi.org/10.1103/PRXQuantum.5.040318)
- F. Wang et al., "High-coherence fluxonium qubits manufactured with a wafer-scale-uniformity process," [Phys. Rev. Applied 23, 044064 (2025)](https://doi.org/10.1103/PhysRevApplied.23.044064)
- G. Bothara et al., "High-fidelity QND readout and measurement back-action in a tantalum-based high-coherence fluxonium qubit," [APL Quantum 2 (2025)](https://doi.org/10.1063/5.0255892)

## Linked Papers

- [[manucharyan-2009-fluxonium]]
- [[nguyen-2019-high-coherence-fluxonium]]
- [[somoroff-2023-millisecond-coherence-superconducting]]
- [[ding-2023-high-fidelity-frequency]]
- [[mencia-2024-integer-fluxonium-qubit]]
- [[wang-2025-high-coherence-fluxonium-wafer-scale]]
- [[bothara-2025-high-fidelity-qnd-readout]]

## Related Entries

- [[transmon]] — weakly anharmonic superconducting qubit that trades protection for control simplicity
- [[flux-qubit]] — persistent-current predecessor without the fluxonium superinductance strategy
- [[cooper-pair-box-charge-qubit]] — charge-sensitive ancestor that fluxonium generalizes away from
- [[circuit-qed]] — standard coupling and measurement architecture around many fluxonium experiments
- [[qubit-readout]] — directly relevant because modern fluxonium progress depends heavily on better measurement
- [[blochnium]] — quasicharge regime of the same circuit family
- [[heavy-fluxonium-qubit]] — protected low-frequency regime highlighted by the millisecond-coherence results
- [[cos2phi-qubit]] — protected superconducting circuit derived from fluxonium-family ideas
- [[0-pi-qubit]] — another protected superconducting circuit pursuing matrix-element suppression
- [[ferbo-qubit]] — Andreev/fluxonium hybrid proposal that borrows the fluxonium protection intuition
