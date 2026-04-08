---
title: Strontium-88 Trapped-Ion Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: true
first_proposed_year: 2000
first_demonstrated_year: 2009
keywords:
- strontium
- Sr-88
- optical qubit
- trapped ion
- metastable state
- visible wavelength
- no hyperfine structure
- photoionization loading
- integrated photonics
influence_score: 0.78
last_updated: '2026-04-08'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-08
---

## Figure

![[strontium-88-ion-qubit-figure.png]]

## Description

The strontium-88 trapped-ion qubit encodes quantum information in the optical transition between the $5S_{1/2}$ ground state and the $4D_{5/2}$ metastable excited state of $^{88}\text{Sr}^+$, driven by a narrow electric-quadrupole transition at 674 nm. With zero nuclear spin ($I = 0$), $^{88}\text{Sr}^+$ has no hyperfine structure, yielding a comparatively clean optical-qubit manifold with a $4D_{5/2}$ lifetime of about 390 ms (natural linewidth $\sim 0.4$ Hz).

The absence of hyperfine structure is both the defining advantage and the main tradeoff of $^{88}\text{Sr}^+$. On the plus side, the simple level structure simplifies spectroscopy, optical pumping, and integrated-photonics control. Doppler cooling uses the strong $5S_{1/2} \to 5P_{1/2}$ transition at 422 nm, with repumping from $4D_{3/2}$ at 1092 nm and from $4D_{5/2}$ at 1033 nm. Photoionization loading is efficient via a two-photon process: 461 nm excites neutral Sr atoms from $5s^2\,{}^1S_0$ to $5s5p\,{}^1P_1$, followed by 405 nm to reach the continuum. Most routine control wavelengths therefore sit in the visible or near-IR rather than the shorter-wavelength near-UV used by species such as $\text{Yb}^+$.

On the minus side, there are no hyperfine clock states to suppress first-order magnetic-field sensitivity. Optical-qubit coherence is therefore ultimately limited by the metastable-state lifetime and by Zeeman noise unless magnetic stabilization and dynamical-decoupling techniques are used. That makes $^{88}\text{Sr}^+$ less attractive as a long-lived memory qubit than hyperfine species, but especially attractive for integrated-photonics experiments and photonic networking. In particular, recent work has used the $1092\,\text{nm}$ $5P_{1/2} \to 4D_{3/2}$ transition to generate infrared ion-photon entanglement directly in a fiber-friendly band, reducing the need for external frequency conversion at metropolitan scales.

## Hamiltonian

The optical qubit Hamiltonian in the rotating frame is:

$$H = \frac{\hbar \delta}{2} \sigma_z + \frac{\hbar \Omega}{2} \sigma_x$$

where $\delta$ is the detuning of the 674 nm laser from the $5S_{1/2} \to 4D_{5/2}$ quadrupole transition and $\Omega$ is the Rabi frequency. Because $^{88}\text{Sr}^+$ has $I=0$, there is no hyperfine term; the relevant structure is the fine-structure manifold plus Zeeman shifts in a bias field $B$:

$$\Delta E = (g_J' m_J' - g_J m_J) \mu_B B$$

with $g_J(5S_{1/2}) \approx 2.0023$ and $g_J(4D_{5/2}) \approx 1.2$. A common optical-qubit encoding uses $|5S_{1/2}, m_J=-1/2\rangle \leftrightarrow |4D_{5/2}, m_J=-5/2\rangle$, an electric-quadrupole transition with allowed $\Delta m = -2$; the exact Zeeman pair can vary between experiments.

## Motivation

$^{88}\text{Sr}^+$ occupies a useful niche among trapped-ion qubits. Its visible and near-IR transitions make it especially attractive for integrated photonic ion traps, where on-chip waveguides and compact lasers can address the ion without the deepest-UV optics used by some competing species. The efficient two-photon photoionization loading and the high natural abundance of $^{88}$Sr (82.6%) also simplify loading compared with rarer isotopes such as $^{43}\text{Ca}$ and $^{137}\text{Ba}$.

Its strongest differentiator in 2025-era networking work is not just optical simplicity but wavelength placement: the $1092\,\text{nm}$ photon emitted on the $5P_{1/2} \to 4D_{3/2}$ transition is much more fiber-compatible than the visible/near-UV photons used in many ion-networking architectures. That gives $^{88}\text{Sr}^+$ a credible role as a networking or interface qubit even when hyperfine species remain more attractive as long-coherence memory qubits.

## Experimental Status

**Established optical-qubit platform (2000s–2010s):**
- $^{88}\text{Sr}^+$ became a standard optical-qubit and precision-spectroscopy ion platform, with coherent 674 nm control, resolved-sideband cooling, and state-dependent fluorescence readout documented in the trapped-ion literature summarized by Bruzewicz et al. (2019).

**Integrated photonics (2024) — Chauhan, Caron, Wang, Isichenko, Helaly, Liu, Niffenegger, and Blumenthal / Mehta et al.:**
- Chip-scale photonic hardware delivered a direct-drive 674 nm Brillouin laser stabilized to the $^{88}\text{Sr}^+$ quadrupole transition.
- Reported performance: 6 kHz linewidth on the ion transition, 60 $\mu$s Ramsey coherence time, and 99% SPAM fidelity.
- Rabi oscillations and qubit/clock operations were demonstrated without bulk free-space stabilization cavities.

**Quantum networking (2025) — Zalewski et al.:**
- Demonstrated ion-photon entanglement between a metastable $^{88}\text{Sr}^+$ qubit and a $1092\,\text{nm}$ photon.
- Measured entangled-state fidelity of $0.949(4)$ in the lab and $0.929(5)$ after transmission through 2.8 km of deployed commercial fiber.
- Established $^{88}\text{Sr}^+$ as a serious candidate for metropolitan-scale trapped-ion networking without external quantum-frequency conversion.

**Classical-control improvement (2026) — Markov et al.:**
- Demonstrated digital predistortion of the optical control chain in an $^{88}\text{Sr}^+$ trapped-ion processor.
- Suppressed intermodulation tones by 3–5 dB and improved Bell-state performance for fast multi-tone entangling-gate waveforms.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ (metastable) | ~390 ms | $4D_{5/2}$ radiative lifetime | [Bruzewicz et al. 2019](https://doi.org/10.1063/1.5088164) |
| $T_2$ (Ramsey) | ~60 μs | Chip-integrated 674 nm laser demo; limited by laser coherence | [Mehta et al. 2024](https://arxiv.org/abs/2402.16742) |
| Qubit transition | 674 nm | $5S_{1/2} \to 4D_{5/2}$ electric-quadrupole transition | [Mehta et al. 2024](https://arxiv.org/abs/2402.16742) |
| Detection / cooling transition | 422 nm | $5S_{1/2} \to 5P_{1/2}$ fluorescence cycle | [Bruzewicz et al. 2019](https://doi.org/10.1063/1.5088164) |
| SPAM fidelity | 99% | Chip-integrated qubit/clock system | [Mehta et al. 2024](https://arxiv.org/abs/2402.16742) |
| Ion-photon entanglement fidelity (lab) | $0.949(4)$ | Metastable-qubit entanglement with a $1092\,\text{nm}$ photon | [Zalewski et al. 2025](https://arxiv.org/abs/2506.11257) |
| Ion-photon entanglement fidelity (2.8 km fiber) | $0.929(5)$ | Uncorrected for readout errors after deployed-fiber transmission | [Zalewski et al. 2025](https://arxiv.org/abs/2506.11257) |

## Scaling Considerations

- **Integrated photonics**: the visible / near-IR control stack of $^{88}\text{Sr}^+$ is especially compatible with silicon nitride and related photonic platforms, enabling on-chip laser delivery and photon collection.
- **No clock states**: without hyperfine structure, there are no magnetically insensitive microwave clock transitions. Coherence is limited by magnetic-field fluctuations and the metastable-state lifetime, unlike hyperfine qubits such as $^{171}\text{Yb}^+$, $^{43}\text{Ca}^+$, and $^{137}\text{Ba}^+$.
- **Networking interface**: $1092\,\text{nm}$ photons from the $5P_{1/2} \to 4D_{3/2}$ transition suffer much lower fiber loss than visible ion-networking photons, making $^{88}\text{Sr}^+$ appealing for medium-distance quantum links.
- **Optical-control burden**: because the qubit itself is optical, high-fidelity control demands narrow-line 674 nm lasers and careful magnetic stabilization; there is no easy microwave-only control layer.
- **Abundant isotope**: 82.6% natural abundance eliminates the need for isotope-enriched sources or isotope-selective loading, simplifying trap loading.
- **Photoionization loading**: the two-photon scheme (461 nm + 405 nm) provides fast, low-background loading compatible with microfabricated traps.

## References

### Review
- C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, "Trapped-ion quantum computing: Progress and challenges," [Appl. Phys. Rev. 6, 021314 (2019)](https://doi.org/10.1063/1.5088164) | [arXiv:1904.04178](https://arxiv.org/abs/1904.04178)

### Integrated photonics
- N. Chauhan, C. Caron, J. Wang, A. Isichenko, N. Helaly, K. Liu, R. J. Niffenegger, and D. J. Blumenthal, "Trapped ion qubit and clock operations with a visible wavelength photonic coil resonator stabilized integrated Brillouin laser," [arXiv:2402.16742 (2024)](https://arxiv.org/abs/2402.16742)

### Networking and control
- M. A. Zalewski et al., "Kilometer-Scale Ion-Photon Entanglement with a Metastable $^{88}$Sr$^{+}$ Qubit," [arXiv:2506.11257 (2025)](https://arxiv.org/abs/2506.11257)
- J. Markov et al., "Digital Predistortion of Optical Fields for Fast and High-Fidelity Entangling Gates in Trapped-Ion Qubits," [arXiv:2603.27761 (2026)](https://arxiv.org/abs/2603.27761)

## Linked Papers

- [[bruzewicz-2019-trapped-ion-review]]
- [[mehta-2024-integrated-optical-sr]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[ytterbium-hyperfine-qubit]] — alternative species; hyperfine qubit with shorter-wavelength control
- [[barium-137-ion-qubit]] — visible-wavelength hyperfine trapped-ion comparison
- [[calcium-43-ion-qubit]] — hyperfine trapped-ion comparison with much longer coherence
- [[molmer-sorenson-gate]] — standard trapped-ion entangling-gate context
- [[qubit-readout]] — fluorescence readout and state-discrimination context
