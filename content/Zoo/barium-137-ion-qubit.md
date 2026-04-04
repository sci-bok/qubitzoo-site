---
title: Barium-137 Trapped-Ion Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: false
first_proposed_year: 2010
first_demonstrated_year: 2010
keywords:
- barium
- Ba-137
- hyperfine qubit
- trapped ion
- clock states
- visible wavelength
- Quantinuum
- Helios
- QCCD
- dual species
influence_score: 0.82
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[barium-137-ion-qubit-figure.png]]

## Description

The barium-137 trapped-ion qubit encodes quantum information in the hyperfine clock states of the $^{137}\text{Ba}^+$ ion's $6S_{1/2}$ ground-state manifold. With nuclear spin $I = 3/2$, the ground state splits into $F = 1$ and $F = 2$ hyperfine levels separated by approximately 8.037 GHz. The qubit is defined on the magnetically insensitive $|F=2, m_F=0\rangle \leftrightarrow |F=1, m_F=0\rangle$ clock transition, providing first-order immunity to magnetic field fluctuations.

The key advantage of $^{137}\text{Ba}^+$ over other trapped-ion species is that all primary transitions — the cooling/detection transition at 493 nm ($6S_{1/2} \to 6P_{1/2}$) and the repumper at 650 nm ($5D_{3/2} \to 6P_{1/2}$) — lie in the visible spectrum. This eliminates the need for ultraviolet lasers required by $^{40}\text{Ca}^+$ (397 nm) and $^{171}\text{Yb}^+$ (369.5 nm), enabling the use of more mature, higher-power, and lower-noise visible-wavelength laser technology. The shelving transition to the long-lived $5D_{5/2}$ state at 1.76 μm provides high-fidelity state readout.

Quantinuum's Helios processor (2025) adopted $^{137}\text{Ba}^+$ as its primary data qubit in a 98-qubit QCCD architecture, replacing ytterbium from the earlier H-series. The system uses a dual-species configuration: $^{137}\text{Ba}^+$ ions serve as data qubits while $^{171}\text{Yb}^+$ ions provide sympathetic cooling without disturbing the qubit states. This dual-species approach, combined with the visible-wavelength laser architecture, achieves two-qubit gate fidelities of 99.921% and single-qubit gate fidelities of 99.9975%.

## Hamiltonian

The ground-state hyperfine Hamiltonian for $^{137}\text{Ba}^+$ ($I = 3/2$, $J = 1/2$):

$$H_{\text{hfs}} = A_{\text{hfs}} \, \mathbf{I} \cdot \mathbf{J}$$

where $A_{\text{hfs}}$ is the magnetic dipole hyperfine constant. For $^{137}\text{Ba}^+$, the splitting gives:

$$\Delta E_{\text{hfs}} = h \times 8.037\,\text{GHz}$$

In an external magnetic field, the clock-state transition ($|F=2, m_F=0\rangle \leftrightarrow |F=1, m_F=0\rangle$) shifts only at second order:

$$\omega_{01}(B) = \omega_{01}(0) + \beta B^2$$

providing excellent field insensitivity analogous to other hyperfine clock qubits.

## Motivation

The visible-wavelength transitions of $^{137}\text{Ba}^+$ solve a major engineering bottleneck in scaling trapped-ion systems: UV lasers are expensive, lossy in fiber, and damage optical components over time. By operating entirely with visible and near-IR light, barium systems can leverage telecommunications-grade fiber optics and mature semiconductor laser technology. The nuclear spin $I = 3/2$ provides the four ground-state $m_F$ levels needed for a clock qubit while keeping the level structure manageable. The dual-species approach with ytterbium sympathetic cooling decouples the cooling and computation functions, enabling continuous motional cooling during long computations.

## Experimental Status

**Qubit characterization — Dietrich et al. (2010):**
- First demonstration of state preparation, qubit rotation, and readout for both hyperfine and optical $^{137}\text{Ba}^+$ qubits.
- Implemented the ground-state hyperfine qubit on the 8 GHz clock transition.
- Demonstrated shelving-based readout using the $5D_{5/2}$ state.

**Quantinuum Helios (2025) — Ransford et al.:**
- 98-qubit QCCD processor using $^{137}\text{Ba}^+$ data qubits with $^{171}\text{Yb}^+$ sympathetic cooling.
- Four-way "X" junction architecture with rotatable ion storage ring.
- 1Q gate fidelity: 99.9975%, 2Q gate fidelity: 99.921%.
- Full all-to-all connectivity via ion shuttling between 8 parallel gate zones.
- Demonstrated up to 94 logical qubits from 98 physical qubits using Iceberg error-correcting codes.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10,000 s | Hyperfine ground states; no radiative decay channel | — |
| Hyperfine splitting | 8.037 GHz | Clock transition, first-order field insensitive | [Dietrich et al. 2010](https://doi.org/10.1103/PhysRevA.81.052328) |
| 1Q gate fidelity | 99.9975% | Helios system-level benchmark | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| 2Q gate fidelity | 99.921% | MS gate, Helios benchmark | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| Cooling transition | 493 nm | $6S_{1/2} \to 6P_{1/2}$; visible, no UV | [Dietrich et al. 2010](https://doi.org/10.1103/PhysRevA.81.052328) |
| Repumper | 650 nm | $5D_{3/2} \to 6P_{1/2}$; visible | [Dietrich et al. 2010](https://doi.org/10.1103/PhysRevA.81.052328) |
| System size | 98 qubits | Helios QCCD processor | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| Operating temperature | ~4 K (trap) | Ions laser-cooled to ~mK | — |

## Scaling Considerations

- **Visible-wavelength advantage**: eliminates UV-induced damage to optics and fibers, reduces laser system cost and complexity, and enables use of high-power visible-wavelength semiconductor lasers.
- **Dual-species overhead**: maintaining two ion species requires additional laser systems and trap control complexity, but decouples cooling from computation.
- **Isotope abundance**: $^{137}\text{Ba}$ has only 11% natural abundance (vs. 100% for $^{171}\text{Yb}$ via enrichment), requiring isotope-selective loading or enriched sources.
- **QCCD transport**: as with all shuttling architectures, ion transport time and junction-crossing errors add overhead, though Helios demonstrates this at scale.
- **Laser complexity tradeoff**: while UV is avoided, the $^{137}\text{Ba}^+$ system still requires multiple visible-wavelength lasers with sidebands to address all hyperfine levels.

## References

### Qubit characterization
- M. R. Dietrich et al., "Hyperfine and optical barium ion qubits," [Phys. Rev. A 81, 052328 (2010)](https://doi.org/10.1103/PhysRevA.81.052328) | [arXiv:1004.1161](https://arxiv.org/abs/1004.1161)

### System demonstration
- A. Ransford et al., "Helios: A 98-qubit trapped-ion quantum computer," [arXiv:2511.05465 (2025)](https://arxiv.org/abs/2511.05465)

## Linked Papers

- [[dietrich-2010-barium-hyperfine-qubit]]
- [[ransford-2025-helios-98-qubit]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[ytterbium-hyperfine-qubit]] — alternative hyperfine ion species; Yb-171 used as sympathetic coolant in Helios
- [[shuttling-ion-trap-qubit]] — QCCD architecture used by Helios
- [[molmer-sorenson-gate]] — entangling gate used in Ba+ systems
