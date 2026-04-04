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
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-04
---

## Figure

![[strontium-88-ion-qubit-figure.png]]

## Description

The strontium-88 trapped-ion qubit encodes quantum information in the optical transition between the $5S_{1/2}$ ground state and the $4D_{5/2}$ metastable excited state of $^{88}\text{Sr}^+$, driven by a narrow electric quadrupole transition at 674 nm. With zero nuclear spin ($I = 0$), $^{88}\text{Sr}^+$ has no hyperfine structure, yielding a clean two-level optical qubit with a natural lifetime of approximately 390 ms for the $4D_{5/2}$ state (corresponding to a natural linewidth of ~0.4 Hz).

The absence of hyperfine structure is both the defining advantage and limitation of $^{88}\text{Sr}^+$. On the advantage side, the simple level structure eliminates complications from multiple ground-state sublevels, simplifying state preparation and readout. Doppler cooling uses the strong $5S_{1/2} \to 5P_{1/2}$ transition at 422 nm with repumping from $4D_{3/2}$ at 1092 nm and $4D_{5/2}$ at 1033 nm. Photoionization loading is efficient via a two-photon process: 461 nm excites neutral Sr atoms from $5s^2\,{}^1S_0$ to $5s5p\,{}^1P_1$, followed by 405 nm to reach the continuum. All primary wavelengths are in the visible or near-IR, avoiding the UV lasers required by $\text{Ca}^+$ (397 nm) and $\text{Yb}^+$ (369.5 nm).

On the limitation side, without hyperfine clock states the qubit coherence is limited by the metastable state lifetime ($T_1 \approx 390$ ms) and magnetic field sensitivity (the Zeeman sublevels have first-order magnetic field dependence). This makes $^{88}\text{Sr}^+$ less suitable as a memory qubit compared to hyperfine species but well-suited as an interface qubit for photonic networking and integrated-photonics experiments, where its visible and near-UV transitions are accessible with mature laser and detector technology. Long-distance fiber networking would still generally require wavelength conversion.

## Hamiltonian

The optical qubit Hamiltonian in the rotating frame is:

$$H = \frac{\hbar \delta}{2} \sigma_z + \frac{\hbar \Omega}{2} \sigma_x$$

where $\delta$ is the detuning of the 674 nm laser from the $5S_{1/2} \to 4D_{5/2}$ quadrupole transition and $\Omega$ is the Rabi frequency. The Zeeman splitting in an external magnetic field $B$ is:

$$\Delta E = (g_J' m_J' - g_J m_J) \mu_B B$$

where $g_J(S_{1/2}) = 2.0023$ and $g_J(D_{5/2}) = 1.2$. The qubit is typically encoded in $|S_{1/2}, m_J = -1/2\rangle \leftrightarrow |D_{5/2}, m_J = -1/2\rangle$ to minimize sensitivity to field fluctuations via dynamical decoupling.

## Motivation

$^{88}\text{Sr}^+$ occupies a unique niche among trapped-ion qubits. Its visible-wavelength transitions make it the leading candidate for integrated photonic ion traps, where on-chip waveguides can deliver all necessary laser frequencies without UV damage to optical components. The 408 nm photon emitted during the $5P_{1/2} \to 4D_{5/2}$ decay provides a natural interface for ion-photon entanglement and quantum networking. The efficient two-photon photoionization loading and absence of isotope selection requirements (88 is the dominant isotope at 82.6% natural abundance) simplify trap loading compared to rare isotopes like $^{43}\text{Ca}$ (0.14%) or $^{137}\text{Ba}$ (11%).

## Experimental Status

**Early qubit demonstrations (~2000–2009):**
- Multiple groups (Los Alamos, Imperial College, Innsbruck) demonstrated coherent manipulation of the $5S_{1/2} \to 4D_{5/2}$ optical qubit using stabilized 674 nm diode lasers.
- Resolved-sideband cooling to the motional ground state with 98.6% occupation demonstrated.

**Integrated photonics (2024) — Mehta et al.:**
- Chip-scale photonic integrated circuit delivering a 674 nm Brillouin laser stabilized to the $^{88}\text{Sr}^+$ quadrupole transition.
- 6 kHz laser linewidth, 60 μs Ramsey coherence time, 99% SPAM fidelity.
- Rabi oscillations demonstrated without bulk free-space optics.

**Trapped-ion review — Bruzewicz et al. (2019):**
- Comprehensive review covering $^{88}\text{Sr}^+$ among other ion species, documenting the state of trapped-ion quantum computing including gate implementations, coherence properties, and scaling challenges.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ (metastable) | ~390 ms | $4D_{5/2}$ radiative lifetime | [Bruzewicz et al. 2019](https://doi.org/10.1063/1.5088164) |
| $T_2$ (Ramsey) | ~60 μs | Chip-integrated laser, limited by laser coherence | [Mehta et al. 2024](https://arxiv.org/abs/2402.16742) |
| Qubit transition | 674 nm | $5S_{1/2} \to 4D_{5/2}$ electric quadrupole | — |
| Cooling transition | 422 nm | $5S_{1/2} \to 5P_{1/2}$; visible, no UV | — |
| SPAM fidelity | 99% | Chip-integrated system | [Mehta et al. 2024](https://arxiv.org/abs/2402.16742) |
| Natural abundance | 82.6% | Dominant isotope; no enrichment needed | — |
| Nuclear spin | $I = 0$ | No hyperfine structure | — |
| Operating temperature | ~4 K (trap) | Ions laser-cooled to ~mK | — |

## Scaling Considerations

- **Integrated photonics**: the visible-wavelength transitions of $^{88}\text{Sr}^+$ are uniquely compatible with silicon nitride and other photonic platforms, enabling on-chip laser delivery and photon collection.
- **No clock states**: without hyperfine structure, there are no magnetically insensitive clock transitions. Coherence is limited by magnetic field fluctuations and the metastable state lifetime, unlike hyperfine qubits ($^{171}\text{Yb}^+$, $^{43}\text{Ca}^+$, $^{137}\text{Ba}^+$) which can achieve >1000 s coherence.
- **Networking interface**: the 408 nm photon from the $5P_{1/2} \to 4D_{5/2}$ decay provides an efficient ion-photon interface for quantum networking, making $^{88}\text{Sr}^+$ a natural choice for hybrid systems using hyperfine ions as data qubits and Sr as network qubits.
- **Abundant isotope**: 82.6% natural abundance eliminates the need for isotope-enriched sources or isotope-selective loading, simplifying trap loading.
- **Photoionization loading**: the two-photon scheme (461 nm + 405 nm) provides deterministic, fast, and low-background ion loading compatible with microfabricated traps.

## References

### Review
- C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, "Trapped-ion quantum computing: Progress and challenges," [Appl. Phys. Rev. 6, 021314 (2019)](https://doi.org/10.1063/1.5088164) | [arXiv:1904.04178](https://arxiv.org/abs/1904.04178)

### Integrated photonics
- K. K. Mehta et al., "Integrated optical control of a trapped-ion qubit," [arXiv:2402.16742 (2024)](https://arxiv.org/abs/2402.16742)

## Linked Papers

- [[bruzewicz-2019-trapped-ion-review]]
- [[mehta-2024-integrated-optical-sr]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[ytterbium-hyperfine-qubit]] — alternative species; hyperfine qubit with UV transitions
- [[barium-137-ion-qubit]] — alternative species; visible-wavelength hyperfine qubit
- [[calcium-43-ion-qubit]] — alternative species; microwave-driven hyperfine qubit
