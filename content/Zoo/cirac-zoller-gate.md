---
title: Cirac-Zoller Gate
entry_type: gate
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: false
first_proposed_year: 1995
first_demonstrated_year: 2003
keywords:
  - trapped ion
  - two-qubit gate
  - phonon bus
  - CNOT
  - controlled-phase
  - quantum computing
influence_score: 0.90
last_updated: '2026-04-24'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: scibok-audit-2026-04-24
---

## Figure

![[cirac-zoller-gate-figure.png]]

## Description

The **Cirac-Zoller gate** is the original trapped-ion proposal for a universal two-qubit entangling gate, introduced by J. I. Cirac and P. Zoller in 1995. It couples two ions through a shared quantized motional mode of a linear Paul trap, using resolved motional sidebands to map qubit information onto a phonon, apply a conditional phase, and map the phonon back to the ions.

The defining idea is a **phonon-bus gate**: two long-lived internal states encode the qubit, while a collective motional mode of the ion chain acts as an intermediary. In the original protocol, one ion's state is transferred to the motion with a red-sideband pulse, a second ion undergoes a conditional $2\pi$ excursion through an auxiliary internal state only when that phonon is present, and a final red-sideband pulse disentangles the motion. The net effect is a controlled phase, which can be converted into a CNOT with single-qubit rotations.

Unlike later trapped-ion entangling gates, the original Cirac-Zoller protocol requires **ground-state cooling** of the relevant motional mode and precise sideband resolution in the Lamb-Dicke regime. That sensitivity made it historically foundational but experimentally less robust than the Mølmer-Sørensen and geometric-phase gates that later became standard.

## Hamiltonian

In the interaction picture for a laser-driven trapped-ion qubit coupled to a single motional mode,

$$H_I = \frac{\hbar\Omega}{2}\left(\sigma_+ e^{i\eta(ae^{-i\nu t}+a^\dagger e^{i\nu t})-i\delta t+i\phi} + \text{h.c.}\right),$$

where $\Omega$ is the carrier Rabi frequency, $\nu$ is the motional-mode frequency, $\delta$ is the laser detuning from the carrier, $\eta$ is the Lamb-Dicke parameter, and $a$, $a^\dagger$ are motional annihilation and creation operators.

Expanding in the Lamb-Dicke limit ($\eta \ll 1$) and applying the rotating-wave approximation gives the familiar sideband interactions:

- **Carrier** ($\delta = 0$):
  $$H_{\mathrm{car}} = \frac{\hbar\Omega}{2}(\sigma_+ e^{i\phi} + \sigma_- e^{-i\phi})$$
- **Red sideband** ($\delta = -\nu$):
  $$H_{\mathrm{rsb}} = \frac{\hbar\eta\Omega}{2}(\sigma_+ a\, e^{i\phi} + \sigma_- a^\dagger e^{-i\phi})$$
- **Blue sideband** ($\delta = +\nu$):
  $$H_{\mathrm{bsb}} = \frac{\hbar\eta\Omega}{2}(\sigma_+ a^\dagger e^{i\phi} + \sigma_- a\, e^{-i\phi})$$

The Cirac-Zoller gate specifically uses red-sideband pulses to swap information between an ion and the motional bus, together with an auxiliary-state $2\pi$ pulse on the target ion to imprint the conditional phase. Correct operation requires $\bar{n} \approx 0$ and sideband selectivity strong enough to suppress unwanted carrier and blue-sideband excitation.

## Motivation

- First concrete blueprint for a scalable trapped-ion quantum computer with a universal two-qubit gate.
- Introduced the now-central idea of using shared ion motion as a **quantum bus**.
- Showed how long-lived atomic qubits and laser-mediated sideband control could satisfy the core ingredients of universal quantum computation.
- Directly inspired later trapped-ion gate families, especially Mølmer-Sørensen and geometric phase gates, which retained the phonon-bus idea while relaxing the original cooling and control constraints.

## Experimental Status

**Original proposal — Cirac and Zoller (1995):**
- Proposed a two-ion controlled gate mediated by a shared phonon mode in a linear ion chain.
- Established the trapped-ion platform as a serious route to universal quantum computation.

**Proof-of-principle logic gate — Monroe et al. (1995):**
- Demonstrated a fundamental quantum logic gate in a single $^9$Be$^+$ ion, using the internal state and one motional mode as the two logical degrees of freedom.
- Validated the essential sideband-control building block, but this was not yet the full two-ion Cirac-Zoller CNOT.

**First full Cirac-Zoller CNOT — Schmidt-Kaler et al. (2003):**
- Realized the complete Cirac-Zoller controlled-NOT gate between two individually addressed $^{40}$Ca$^+$ ions.
- Confirmed the original protocol experimentally, while also exposing its sensitivity to motional heating, laser-intensity noise, and calibration overhead.

**Modern descendants dominate practical trapped-ion hardware:**
- Later trapped-ion systems largely replaced literal Cirac-Zoller pulse sequences with Mølmer-Sørensen or geometric-phase variants that are more robust and do not require the same degree of ground-state preparation.
- Two-qubit gate fidelities of 99.9(1)% were demonstrated in $^{43}$Ca$^+$ by Ballance et al. (2016), while the best single-qubit trapped-ion control has since reached a 1Q Clifford error of $1.5(4)\times 10^{-7}$ in $^{43}$Ca$^+$ (Smith et al. 2025).
- A targeted 2024-2026 literature check during this audit did not reveal a newer direct Cirac-Zoller-gate milestone displacing the 2003 realization; current performance records continue to come from descendant gate families instead.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| First proposal | 1995 | Original phonon-bus two-ion gate proposal | [Cirac and Zoller 1995](https://doi.org/10.1103/PhysRevLett.74.4091) |
| Proof-of-principle logic gate | 1995 | Single-ion internal-state ↔ motion logic gate, not yet full two-ion CNOT | [Monroe et al. 1995](https://doi.org/10.1103/PhysRevLett.75.4714) |
| First full Cirac-Zoller CNOT | 2003 | Two individually addressed $^{40}$Ca$^+$ ions | [Schmidt-Kaler et al. 2003](https://doi.org/10.1038/nature01494) |
| Ground-state cooling requirement | Yes ($\bar{n} \approx 0$) | Required by the original protocol | [Cirac and Zoller 1995](https://doi.org/10.1103/PhysRevLett.74.4091) |
| 2Q gate fidelity in modern descendants | 99.9(1)% | Robust geometric-phase / MS-family descendants now used in practice | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| 2Q gate time in modern descendants | 3.8–520 μs | Demonstrated speed-fidelity sweep in trapped-ion descendant gates | [Ballance et al. 2016](https://arxiv.org/abs/1512.04600) |
| 1Q gate fidelity in descendant trapped-ion hardware | 99.999985% | $^{43}$Ca$^+$ microwave-driven clock-qubit benchmark | [Smith et al. 2025](https://arxiv.org/abs/2412.04421) |

## References

### Original proposal
- J. I. Cirac and P. Zoller, "Quantum Computations with Cold Trapped Ions," [Phys. Rev. Lett. **74**, 4091 (1995)](https://doi.org/10.1103/PhysRevLett.74.4091)

### Proof-of-principle and full realization
- C. Monroe, D. M. Meekhof, B. E. King, W. M. Itano, and D. J. Wineland, "Demonstration of a Fundamental Quantum Logic Gate," [Phys. Rev. Lett. **75**, 4714 (1995)](https://doi.org/10.1103/PhysRevLett.75.4714)
- F. Schmidt-Kaler, H. Häffner, M. Riebe, S. Gulde, G. P. T. Lancaster, T. Deuschle, C. Becher, C. F. Roos, J. Eschner, and R. Blatt, "Realization of the Cirac-Zoller controlled-NOT quantum gate," [Nature **422**, 408 (2003)](https://doi.org/10.1038/nature01494)

### Modern trapped-ion descendants and benchmarks
- T. P. Harty et al., "High-Fidelity Preparation, Gates, Memory, and Readout of a Trapped-Ion Quantum Bit," [Phys. Rev. Lett. **113**, 220501 (2014)](https://doi.org/10.1103/PhysRevLett.113.220501) | [arXiv:1403.1524](https://arxiv.org/abs/1403.1524)
- C. J. Ballance et al., "High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits," [Phys. Rev. Lett. **117**, 060504 (2016)](https://doi.org/10.1103/PhysRevLett.117.060504) | [arXiv:1512.04600](https://arxiv.org/abs/1512.04600)
- M. C. Smith, A. M. Steane, and D. M. Lucas, "Single-Qubit Gates with Errors at the $10^{-7}$ Level," [Phys. Rev. Lett. **134**, 230601 (2025)](https://doi.org/10.1103/42w2-6ccy) | [arXiv:2412.04421](https://arxiv.org/abs/2412.04421)

## Linked Papers

- [[cirac-zoller-1995-trapped-ion-gate]]
- [[monroe-1995-demonstration-fundamental-logic]]
- [[schmidtkaler-2003-realization-cirac-zoller]]
- [[harty-2014-high-fidelity-preparation]]
- [[ballance-2016-ion-gate-fidelity]]
- [[smith-2025-single-qubit-gates-10-7]]

## Related Entries

- [[trapped-ion-qubit]] — the parent platform
- [[molmer-sorenson-gate]] — the more robust trapped-ion entangling gate family that superseded literal Cirac-Zoller pulses in most practical systems
- [[shuttling-ion-trap-qubit]] — scaling architecture for trapped-ion quantum computing
- [[ytterbium-hyperfine-qubit]] — a major modern trapped-ion species and commercial hyperfine implementation
