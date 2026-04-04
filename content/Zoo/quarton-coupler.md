---
title: Quarton Coupler
entry_type: technique
technology_family: Superconducting
status: proposed
figure_reviewed: true
first_proposed_year: 2021
first_demonstrated_year: null
keywords:
- quarton
- quartic potential
- purely nonlinear coupling
- cross-Kerr
- transmon coupler
- ultrafast readout
- MIT
- O'Brien
- SNAIL-adjacent
- dispersive coupling
influence_score: 0.62
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[quarton-coupler-figure.png]]

## Description

The quarton is a superconducting circuit element engineered to possess a **purely quartic potential** — $V(\varphi) \propto \varphi^4$ with no quadratic $\varphi^2$ term — enabling ultrastrong nonlinear coupling between superconducting qubits or between a qubit and a readout resonator. Proposed by Ye et al. at MIT in 2021, the quarton achieves this by carefully balancing the Josephson energy of series junctions against a lone junction, such that the linear (inductive) contribution to the potential cancels exactly, leaving only the quartic nonlinearity.

The quarton is **not itself a qubit** but a coupler that mediates interactions between other circuit elements. Its key innovation is that it couples two linearly decoupled transmon qubits with a gigahertz-scale cross-Kerr interaction ($\chi_{zz}$) — an order of magnitude stronger than achievable with conventional dispersive coupling. At the same time, the quarton's positive $\varphi^4$ potential can cancel the negative self-Kerr (anharmonicity) of a transmon, effectively linearizing it into a harmonic resonator. This dual capability enables two breakthrough applications: (1) ultrafast two-qubit entangling gates and (2) ultrafast qubit readout with >99% fidelity in 5 ns.

The circuit consists of two transmon qubits connected through series Josephson junctions and a lone (shunt) junction, with a tilt parameter $2\alpha \approx 1$ tuning the balance between quadratic and quartic terms. When $2\alpha = 1$, the quadratic contribution vanishes, and the leading potential term is:

$$V(\varphi) = \frac{E_Q}{4!}\varphi^4$$

where $E_Q/2\pi \approx 88$–120 GHz in typical designs.

## Hamiltonian

The quarton potential for a circuit element with series junctions (energy $E_J^s$) and a lone junction (energy $E_J^l$) at external flux $\Phi_{\text{ext}}$:

$$V(\varphi) = -2E_J^s \cos\left(\frac{\varphi}{2}\right)\cos\left(\frac{\varphi_{\text{ext}}}{2}\right) - E_J^l \cos(\varphi)$$

At the quarton operating point ($2E_J^s \cos(\varphi_{\text{ext}}/2) = E_J^l$, i.e., $2\alpha = 1$), the Taylor expansion gives:

$$V(\varphi) \approx \frac{E_Q}{4!}\varphi^4 + O(\varphi^6)$$

with $E_Q = E_J^l/4 + E_J^s \cos(\varphi_{\text{ext}}/2)/16$. The full system Hamiltonian for two transmons ($a$, $b$) coupled by a quarton:

$$H = \sum_{i=a,b}\left[\hbar\omega_i a_i^\dagger a_i - \frac{E_{C,i}}{2}a_i^\dagger a_i^\dagger a_i a_i\right] + \hbar\chi_{zz} a_a^\dagger a_a a_b^\dagger a_b$$

where the cross-Kerr $\chi_{zz} \propto E_Q$ can reach >200 MHz, compared to ~1–10 MHz in conventional dispersive coupling.

## Motivation

Standard dispersive readout of superconducting qubits is limited to ~50 ns by the modest cross-Kerr interaction (~10 MHz) between qubit and resonator. This readout bottleneck limits the speed of quantum error correction cycles, which require fast mid-circuit measurements. The quarton addresses this by boosting the cross-Kerr by 1–2 orders of magnitude, enabling 5 ns readout — fast enough for real-time error correction feedback. Similarly, the ultrastrong qubit-qubit coupling enables entangling gates in ~1 ns, far below typical gate times of 20–200 ns. These improvements directly translate to higher quantum error correction thresholds and more efficient use of qubit coherence time.

## Experimental Status

**Theory and simulation — Ye et al. (2021):**
- Proposed the quarton circuit and demonstrated purely nonlinear coupling via analytical and numerical analysis.
- Showed cross-Kerr coupling >1 GHz is achievable with realistic circuit parameters.
- Published in PRL 127, 050502 (2021).

**Ultrafast readout proposal — Ye et al. (2024):**
- Applied the quarton to qubit readout, showing >200 MHz cross-Kerr between a transmon qubit and a linearized transmon resonator.
- Full master equation simulations predict 5 ns readout with >99% fidelity and >99.9% QND fidelity.
- Published in Science Advances (2024).

**Experimental status**: as of early 2026, the quarton has been validated through detailed simulations and parameter studies, but no experimental demonstration has been published. Fabrication feasibility has been confirmed based on existing transmon and SNAIL junction technology.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Cross-Kerr $\chi_{zz}$ | >200 MHz | Qubit-resonator coupling | [Ye et al. 2024](https://doi.org/10.1126/sciadv.ado9094) |
| Readout time | 5 ns | Simulated, >99% fidelity | [Ye et al. 2024](https://doi.org/10.1126/sciadv.ado9094) |
| QND fidelity | >99.9% | Simulated | [Ye et al. 2024](https://doi.org/10.1126/sciadv.ado9094) |
| $E_Q/2\pi$ | 88–120 GHz | Quartic energy scale | [Ye et al. 2021](https://doi.org/10.1103/PhysRevLett.127.050502) |
| Tilt parameter | $2\alpha \approx 1$ | Cancels quadratic term | [Ye et al. 2021](https://doi.org/10.1103/PhysRevLett.127.050502) |
| Operating temperature | ~20 mK | Dilution refrigerator | — |

## Scaling Considerations

- **Fabrication sensitivity**: the quarton requires precise tuning of the tilt parameter $2\alpha = 1$ to cancel the quadratic potential. Simulations show tolerance of $\delta\alpha/\alpha \leq 3.5\%$, achievable with current junction fabrication but requiring careful process control.
- **Flux tuning**: the quarton operating point can be tuned via external flux using a gradiometric design, providing in-situ correction of fabrication variations.
- **Compatibility**: the quarton is designed to be compatible with existing transmon-based architectures (Google, IBM), requiring only replacement of the coupling element between qubits or between qubit and readout resonator.
- **Gate speed vs. coherence**: if the ~1 ns entangling gate can be realized experimentally, the gate time/coherence time ratio would improve by 1–2 orders of magnitude, dramatically reducing the logical error rate per QEC cycle.
- **Experimental validation**: the key open question is whether the simulated performance survives in the presence of real fabrication disorder, junction aging, and low-frequency noise.

## References

### Proposal
- Y. Ye, K. Peng, M. Naghiloo, G. Cunningham, and K. P. O'Brien, "Engineering Purely Nonlinear Coupling between Superconducting Qubits Using a Quarton," [Phys. Rev. Lett. 127, 050502 (2021)](https://doi.org/10.1103/PhysRevLett.127.050502) | [arXiv:2010.09959](https://arxiv.org/abs/2010.09959)

### Ultrafast readout application
- Y. Ye et al., "Quarton couplers for ultrafast superconducting qubit readout," [Science Advances (2024)](https://doi.org/10.1126/sciadv.ado9094) | [arXiv:2402.15664](https://arxiv.org/abs/2402.15664)

## Linked Papers

- [[ye-2021-quarton-nonlinear-coupling]]
- [[ye-2024-quarton-ultrafast-readout]]

## Related Entries

- [[transmon]] — qubit coupled by the quarton
- [[fluxonium]] — alternative circuit with large inductance
- [[kerr-cat-qubit]] — another approach using engineered nonlinearity
- [[0-pi-qubit]] — protected qubit with different circuit topology
