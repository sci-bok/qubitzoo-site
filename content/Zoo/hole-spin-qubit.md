---
title: Hole Spin Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2013
first_demonstrated_year: 2018
keywords:
- hole spin
- semiconductor
- ge/sige
- spin orbit
- electric dipole spin resonance
- EDSR
influence_score: 0.74
last_updated: '2026-06-04'
generated_by: scibok-curation
verified_by: scibok-manual-2026-06-04
---

## Figure

![[hole-spin-qubit-figure.png]]

## Description

**Hole spin qubits** encode quantum information in the lowest Kramers doublet of a valence-band hole confined in a semiconductor quantum dot, most prominently in strained Ge/SiGe heterostructures. Unlike electron spin qubits that often rely on micromagnets or oscillating magnetic fields for strong electric control, hole devices inherit **strong spin-orbit coupling** from the valence band and therefore support fast **all-electrical** manipulation via electric-dipole spin resonance (EDSR).

The microscopic origin is the $j=3/2$ valence-band manifold. In compressively strained Ge/SiGe quantum wells, confinement and strain split the heavy-hole and light-hole subbands, while electric fields and device asymmetry admix them. The qubit is therefore not a bare electron-like spin-1/2, but an **effective pseudospin** formed from a hole Kramers pair with a strongly anisotropic $g$-tensor. That same heavy-hole/light-hole mixing enables fast Rabi driving, but also makes the qubit sensitive to charge noise and device variability.

Two-qubit operations usually rely on **tunable exchange coupling** between neighboring quantum dots, which keeps hole-spin processors compatible with the broader gate-defined semiconductor-quantum-dot control stack. The recent arc of the field has been clear: from single-hole EDSR, to entangling hole-hole gates, to multiqubit 2D processors, and now to modular arrays approaching the tens-of-qubits regime.

## Hamiltonian

The natural starting point is the valence-band $j=3/2$ manifold, but the operating qubit is the lowest Kramers doublet and is usually modeled as an effective pseudospin-1/2:

$$H_{1q}^{\mathrm{eff}} = \frac{\mu_B}{2}\,\mathbf{B}\cdot \mathbf{g}\cdot\boldsymbol{\sigma} + \frac{1}{2}\,\boldsymbol{\Omega}_{\mathrm{EDSR}}\big(V_{\mathrm{ac}}(t),\mathbf{B}\big)\cdot\boldsymbol{\sigma}$$

Here $\mathbf{g}$ is the anisotropic hole $g$-tensor and the electrically driven term $\boldsymbol{\Omega}_{\mathrm{EDSR}}$ arises from spin-orbit-mediated heavy-hole/light-hole mixing. For neighboring dots, the simplest two-qubit interaction is exchange,

$$H_{2q}^{\mathrm{eff}} \approx J(t)\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2,$$

although strong spin-orbit coupling can generate anisotropic corrections away from the simplest tuned regime.

## Motivation

- **All-electrical control:** strong valence-band spin-orbit coupling turns gate voltages directly into qubit rotations, often avoiding the micromagnets used in electron-spin platforms.
- **Fast gates in a compact footprint:** hole qubits can achieve large Rabi frequencies while staying inside dense gate-defined quantum-dot layouts.
- **CMOS-adjacent materials stack:** Ge/SiGe is compatible with advanced semiconductor processing and is a natural host for planar multiqubit arrays.
- **Low-spin-isotope materials advantage:** isotopic engineering can strongly suppress hyperfine noise, leaving charge noise and device variability as the dominant engineering constraints.

## Experimental Status

**First single-qubit demonstration, Watzinger et al. (2018):**
- Demonstrated a germanium hole-spin qubit in a hut-wire double quantum dot.
- Used Pauli-blockade-assisted EDSR for two-axis control of a spin-3/2-derived qubit.
- Reached Rabi frequencies up to 140 MHz with measured $T_2^* \approx 130$ ns.

**First two-qubit hole logic, Hendrickx et al. (2020):**
- Demonstrated fast exchange-based two-qubit logic with holes in germanium.
- Established that hole-spin processors could support entangling gates without giving up all-electrical control.

**Four-qubit Ge processor, Hendrickx et al. (2021):**
- Demonstrated a 2×2 germanium quantum-dot processor with universal quantum logic.
- Executed one-, two-, three-, and four-qubit operations, including GHZ-state preparation.
- Reported single-qubit fidelities around 99.3% in the processor setting.

**Uniform 10-spin 2D control, John et al. (2025):**
- Demonstrated a two-dimensional 10-spin germanium array with single-qubit fidelities above 99%.
- Showed that tuning to three-hole operation can improve control locality and reduce nearest-neighbor crosstalk.

**18-qubit modular array, Dijkema et al. (2026):**
- Demonstrated simultaneous initialization, control, and readout across an extendable 18-qubit germanium array.
- Reported average single-qubit gate fidelity of 99.8% and median fidelity of 99.9% across the array.
- Characterized nearest-neighbor exchange couplings and implemented controlled-Z gates that generated a three-qubit GHZ state.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q Rabi frequency | Up to 140 MHz | Fast EDSR in the first Ge hole-spin demonstration | [Watzinger et al. 2018](https://doi.org/10.1038/s41467-018-06418-4) |
| $T_2^*$ | 130 ns | First natural-Ge hut-wire device, without later array-level optimization | [Watzinger et al. 2018](https://doi.org/10.1038/s41467-018-06418-4) |
| 2Q gate fidelity | 98% | Fast exchange-based hole-hole gate in germanium | [Hendrickx et al. 2020](https://doi.org/10.1038/s41586-019-1919-3) |
| 1Q fidelity | 99.8% average, 99.9% median | 18-qubit modular Ge array | [Dijkema et al. 2026](https://arxiv.org/abs/2604.01063) |
| 1Q array fidelity | >99% | 10-spin 2D array with robust localized control | [John et al. 2025](https://doi.org/10.1038/s41467-025-65577-3) |
| Largest demonstrated processor | 18 qubits | Extendable 2×N modular architecture | [Dijkema et al. 2026](https://arxiv.org/abs/2604.01063) |

## References

### First single-qubit demonstration
- H. Watzinger et al., "A germanium hole spin qubit," [Nature Communications 9 (2018)](https://doi.org/10.1038/s41467-018-06418-4)

### First two-qubit hole logic
- N. W. Hendrickx et al., "Fast two-qubit logic with holes in germanium," [Nature 577, 487 (2020)](https://doi.org/10.1038/s41586-019-1919-3)

### Four-qubit processor milestone
- N. W. Hendrickx et al., "A four-qubit germanium quantum processor," [Nature 591, 580 (2021)](https://doi.org/10.1038/s41586-021-03332-6)

### 10-spin control milestone
- V. John et al., "Robust and localised control of a 10-spin qubit array in germanium," [Nature Communications 16 (2025)](https://doi.org/10.1038/s41467-025-65577-3)

### Current scaling milestone
- J. J. Dijkema et al., "Simultaneous operation of an 18-qubit modular array in germanium," [arXiv:2604.01063 (2026)](https://arxiv.org/abs/2604.01063)

### Review
- G. Scappucci et al., "The germanium quantum information route," [Nature Rev. Mater. 6, 926 (2021)](https://doi.org/10.1038/s41578-020-00262-z)

## Linked Papers

- [[watzinger-2018-germanium-hole-spin-qubit]]
- [[hendrickx-2020-fast-two-qubit-logic-holes]]
- [[hendrickx-2021-ge-4qubit]]
- [[john-2025-robust-localised-control-10spin]]
- [[dijkema-2026-simultaneous-operation-of-an]]
- [[scappucci-2021-ge-review]]

## Evergreen context

- [[spin-orbit-coupling-for-qubit-control]] — hole-spin qubits are the clean semiconductor case where valence-band spin-orbit coupling directly turns gate voltages into spin rotations
- [[exchange-interaction-in-quantum-dots]] — even with all-electrical single-qubit control, most multiqubit hole-spin processors still build entangling gates from tunable exchange
- [[charge-noise-sweet-spot]] — frames the main hole-spin tradeoff: the same electric tunability that buys speed also amplifies susceptibility to charge fluctuations and device variability

## Related Entries

- [[spin-qubit]] — broader gate-defined spin-qubit family
- [[silicon-spin-qubit]] — closest electron-spin cousin, with weaker intrinsic spin-orbit coupling
- [[singlet-triplet-qubit]] — related exchange-controlled semiconductor spin encoding
- [[andreev-spin-qubit]] — another Ge-friendly route that exploits strong spin-orbit physics in a hybrid superconducting setting
