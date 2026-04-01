---
title: Fluxonium
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 2009
first_demonstrated_year: 2009
keywords:
- fluxonium
- superconducting qubit
- superinductance
- josephson junction array
- flux qubit
- heavy fluxonium
- disjoint support
influence_score: 0.90
last_updated: '2026-04-01'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-01
---

## Figure

![[fluxonium-figure.png]]

## Description

The fluxonium qubit, introduced by Manucharyan et al. (2009), consists of a small Josephson junction shunted by a superinductance — a very large inductance ($L \sim 1\,\mu\text{H}$, corresponding to $E_L/h \sim 0.5{-}1\,\text{GHz}$) realized as an array of larger Josephson junctions. This superinductance provides a DC path for phase slips, grounding the superconducting phase and enabling operation at the half-flux-quantum sweet spot $\Phi_\text{ext} = \Phi_0/2$, where the qubit transition is first-order insensitive to flux noise.

Unlike the transmon (which operates in the weakly anharmonic oscillator regime), the fluxonium can have enormous anharmonicity — the $|0\rangle \to |1\rangle$ transition can be as low as $100{-}1000\,\text{MHz}$ while higher transitions are at $5{-}8\,\text{GHz}$. This spectral isolation makes leakage errors fundamentally smaller. The tradeoff is that the low transition frequency makes direct dispersive readout more challenging, typically requiring auxiliary readout schemes or coupling to a transmon for measurement.

In the "heavy fluxonium" regime ($E_C/h \sim 0.5{-}1\,\text{GHz}$, $E_J/E_C \sim 3{-}8$), the wavefunctions of $|0\rangle$ and $|1\rangle$ have disjoint support in phase space: $|0\rangle$ is localized in one well of the cosine potential and $|1\rangle$ in the other. This disjoint support makes the qubit insensitive to virtually all local noise operators, enabling $T_1$ times exceeding $1\,\text{ms}$.

## Hamiltonian

$$H = 4E_C\hat{n}^2 - E_J\cos\hat{\varphi} + \frac{1}{2}E_L(\hat{\varphi} - 2\pi\Phi_\text{ext}/\Phi_0)^2$$

where $E_C = e^2/2C$ is the charging energy, $E_J$ is the Josephson energy of the small junction, $E_L = (\Phi_0/2\pi)^2/L$ is the inductive energy of the superinductance, $\hat{n}$ and $\hat{\varphi}$ are conjugate charge and phase operators, and $\Phi_\text{ext}$ is the external flux threading the loop.

At the half-flux-quantum sweet spot ($\Phi_\text{ext} = \Phi_0/2$), the potential has a double-well structure with the two minima related by parity symmetry $\varphi \to -\varphi + 2\pi$. The qubit states are the symmetric and antisymmetric superpositions of the states localized in each well, split by the tunneling rate through the cosine barrier.

## Motivation

The transmon's achilles heel is its weak anharmonicity ($\sim -200\,\text{MHz}$), which limits gate speeds and makes it vulnerable to leakage to $|2\rangle$. The fluxonium addresses this with GHz-scale anharmonicity while simultaneously achieving superior coherence through flux-sweet-spot operation and disjoint-support noise protection. The main challenge is implementing fast, high-fidelity gates at low qubit frequencies and achieving high-fidelity readout without a direct dispersive shift.

## Experimental Status

**First demonstration — Manucharyan et al. (2009):**
- Realized the fluxonium circuit using a Josephson junction array as a superinductance.
- Demonstrated charge-offset insensitivity while preserving single-Cooper-pair anharmonicity.
- Confirmed spectroscopic signatures consistent with the fluxonium Hamiltonian.

**Superinductance characterization:**
- Josephson junction arrays provide $L > 100\,\text{nH}$ with self-resonance above qubit operating frequencies.
- Flux-sweet-spot operation at $\Phi_\text{ext} = \Phi_0/2$ eliminates first-order flux noise sensitivity.

**High-coherence fluxonium — Nguyen et al. (2019):**
- First demonstration of high-coherence fluxonium at the half-flux sweet spot.
- Achieved $T_1 \sim 300\,\mu\text{s}$ and $T_2^{\text{echo}} > 100\,\mu\text{s}$ — an order-of-magnitude improvement over earlier fluxonium devices.
- Established the flux sweet spot as the preferred operating point for coherence-optimized fluxonium.

**Millisecond coherence — Somoroff et al. (2023):**
- Heavy fluxonium regime achieved $T_1 > 1\,\text{ms}$ through disjoint-support protection.

**High-fidelity gates — Ding et al. (2023):**
- Two-qubit fluxonium gates demonstrated with a transmon coupler.
- Two-qubit CZ gate fidelities $> 99.7\%$ via parametric coupling.

**Record single-qubit fidelity — Rower et al. (2024):**
- Achieved 99.998% single-qubit gate fidelity on a fluxonium qubit using circularly polarized microwave drives and commensurate pulse techniques.
- Suppressed counter-rotating errors that limit low-frequency qubit gate speeds.
- Highest single-qubit gate fidelity reported for any superconducting qubit.

**Wafer-scale fabrication — Wang et al. (2025):**
- Demonstrated $T_1 > 1\,\text{ms}$ fluxonium on 2-inch wafers using an overlap Josephson junction fabrication process.
- Nearly 100% JJ yield with $<5\%$ variation across wafers — a key step toward CMOS-compatible scalable fabrication.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 100 μs – 1.5 ms | Heavy fluxonium at half-flux sweet spot | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| $T_2$ (echo) | 100–500 μs | Echo at sweet spot | [Somoroff et al. 2023](https://doi.org/10.1103/PhysRevLett.130.267001) |
| Anharmonicity | 3–8 GHz | $\omega_{12} - \omega_{01}$; much larger than transmon | [Manucharyan et al. 2009](https://doi.org/10.1126/science.1175552) |
| Qubit frequency $\omega_{01}/2\pi$ | 100 MHz – 1 GHz | Much lower than transmon | — |
| $E_J/E_C$ | 3–8 | Heavy fluxonium regime | — |
| 1Q gate fidelity | 99.998% | Circularly polarized + commensurate pulses | [Rower et al. 2024](https://doi.org/10.1103/PRXQuantum.5.040342) |
| 2Q gate fidelity | 99.92% | CZ gate via parametric coupling | [Ding et al. 2023](https://doi.org/10.1103/PhysRevX.13.031035) |
| Gate time (1Q) | 20–100 ns | Frequency-dependent | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal
- V. E. Manucharyan et al., "Fluxonium: Single Cooper-Pair Circuit Free of Charge Offsets," [Science 326, 113 (2009)](https://doi.org/10.1126/science.1175552) · [arXiv:0906.0831](https://arxiv.org/abs/0906.0831)

### Experimental demonstrations
- L. B. Nguyen et al., "High-Coherence Fluxonium Qubit," [Phys. Rev. X 9, 041041 (2019)](https://doi.org/10.1103/PhysRevX.9.041041) · [arXiv:1810.11006](https://arxiv.org/abs/1810.11006)
- A. Somoroff et al., "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. 130, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001) · [arXiv:2103.08578](https://arxiv.org/abs/2103.08578)
- L. Ding et al., "High-Fidelity, Frequency-Flexible Two-Qubit Fluxonium Gates with a Transmon Coupler," [Phys. Rev. X 13, 031035 (2023)](https://doi.org/10.1103/PhysRevX.13.031035) · [arXiv:2304.06087](https://arxiv.org/abs/2304.06087)
- D. A. Rower et al., "Suppressing Counter-Rotating Errors for Fast Single-Qubit Gates with Fluxonium," [PRX Quantum 5, 040342 (2024)](https://doi.org/10.1103/PRXQuantum.5.040342) · [arXiv:2406.08295](https://arxiv.org/abs/2406.08295)
- F. Wang et al., "High-Coherence Fluxonium Qubit with Wafer-Scale Overlap Josephson Junctions," [Phys. Rev. Applied 23, 044064 (2025)](https://doi.org/10.1103/PhysRevApplied.23.044064)

## Linked Papers

- [[manucharyan-2009-fluxonium]]
- [[nguyen-2019-high-coherence-fluxonium]]
- [[somoroff-2023-millisecond-coherence-superconducting]]
- [[ding-2023-high-fidelity-frequency]]
- [[rower-2024-suppressing-counter-rotating]]
- [[wang-2025-high-coherence-fluxonium-wafer]]

## Related Entries

- [[transmon]] — operates in the opposite $E_J/E_C$ regime with weak anharmonicity
- [[flux-qubit]] — predecessor using persistent currents without superinductance
- [[cooper-pair-box-charge-qubit]] — original charge qubit that fluxonium generalizes
- [[circuit-qed]] — readout and coupling architecture used with fluxonium
- [[blochnium]] — quasicharge regime of the fluxonium circuit
- [[heavy-fluxonium-qubit]] — heavy regime variant with disjoint-support coherence protection
- [[cos2phi-qubit]] — protected qubit derived from fluxonium-family circuits
- [[0-pi-qubit]] — protected qubit in the same superconducting circuit family
