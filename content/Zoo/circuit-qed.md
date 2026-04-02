---
title: Circuit Quantum Electrodynamics (Circuit QED)
entry_type: infrastructure
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 2004
first_demonstrated_year: 2004
keywords:
- circuit qed
- cavity
- jaynes-cummings
- strong coupling
- transmission line resonator
- vacuum rabi
- dispersive readout
- qnd measurement
- quantum bus
influence_score: 0.85
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[circuit-qed-figure.png]]

## Description

Circuit quantum electrodynamics (circuit QED) is the solid-state realization of cavity QED, where a superconducting qubit plays the role of the atom and a coplanar waveguide (CPW) transmission line resonator plays the role of the optical cavity. Proposed by Blais, Huang, Wallraff, Girvin, and Schoelkopf (2004), the key insight is that the zero-point energy of a quasi-1D resonator is concentrated in an extremely small effective volume ($\approx 10^{-5}$ cubic wavelengths), producing rms vacuum fields $\mathcal{E}_\text{rms} \sim 0.2\,\text{V/m}$ — about 100× larger than 3D microwave cavities. Combined with the enormous transition dipole moment of the Cooper pair box ($d \sim 2 \times 10^4$ atomic units), this yields coupling strengths three orders of magnitude beyond atomic microwave cQED.

The system reaches the **strong coupling regime** where the vacuum Rabi frequency $g/2\pi \sim 100\,\text{MHz}$ vastly exceeds both the cavity decay rate $\kappa$ and the qubit decay rate $\gamma$. In the **dispersive regime** ($|\Delta| = |\omega_q - \omega_r| \gg g$), the cavity frequency shifts by $\pm\chi = \pm g^2/\Delta$ depending on the qubit state, enabling quantum non-demolition (QND) readout. The resonator simultaneously provides **Purcell protection** — suppressing spontaneous emission by a factor $(g/\Delta)^2$ — and acts as a **quantum bus** for entangling qubits at different antinodes via virtual photon exchange.

Circuit QED is the foundational measurement and coupling architecture underlying virtually all modern superconducting quantum processors.

## Hamiltonian

At the charge degeneracy point, the system is described by the Jaynes-Cummings Hamiltonian:

$$H = \hbar\omega_r\left(a^\dagger a + \frac{1}{2}\right) + \frac{\hbar\omega_q}{2}\sigma_z + \hbar g(a^\dagger \sigma_- + a\sigma_+)$$

where $\omega_r$ is the resonator frequency, $\omega_q$ is the qubit frequency, $g$ is the vacuum Rabi coupling, and $a^{(\dagger)}$ are the resonator photon operators.

The coupling strength is:

$$g = \frac{\beta e}{\hbar}\sqrt{\frac{\hbar\omega_r}{cL}}$$

where $\beta = C_g/C_\Sigma$ is the capacitive coupling ratio, $c$ is the capacitance per unit length, and $L$ is the resonator length.

In the dispersive regime ($|\Delta| \gg g$), the effective Hamiltonian becomes:

$$H_\text{disp} \approx \hbar(\omega_r + \chi\sigma_z)a^\dagger a + \frac{\hbar(\omega_q + \chi)}{2}\sigma_z$$

where $\chi = g^2/\Delta$ is the dispersive shift. The qubit-state-dependent cavity frequency shift enables QND measurement of the qubit.

## Motivation

Previous proposals for coupling superconducting qubits used discrete LC circuits or large Josephson junctions, which suffered from parasitic resonances and 1/f noise sensitivity. The transmission line resonator approach provides: strong inhibition of spontaneous emission (Purcell protection), high-fidelity QND readout via dispersive phase shifts, a natural quantum bus for entangling qubits separated by centimeter distances, and compatibility with standard lithographic fabrication. Circuit QED made dispersive readout and multi-qubit coupling practical, enabling the scaling of superconducting quantum processors.

## Experimental Status

**First strong coupling — Wallraff et al. (2004):**
- Achieved strong coupling between a Cooper pair box and a CPW resonator with $g/2\pi \sim 100\,\text{MHz}$.
- Observed vacuum Rabi splitting in transmission spectroscopy.

**Dispersive readout established:**
- QND measurement of qubit state via cavity phase shift became the standard readout method for all transmon-based processors.

**Quantum bus demonstrations:**
- Two qubits at different antinodes entangled via virtual photon exchange with effective coupling $g_1 g_2/\Delta$.

**3D circuit QED:**
- Extension to 3D microwave cavities achieved resonator lifetimes $>1\,\text{ms}$, enabling long-lived bosonic codes.

**High-fidelity dispersive readout (2025):**
- Tunable broadband Purcell filters achieved 99.9% single-qubit readout fidelity in 50 ns and multiplexed 3-qubit readout at 99.5% average fidelity in 100 ns.
- Intrinsic Purcell filtering via multiconductor transmission lines enabled 4-qubit simultaneous readout with 99.77% average assignment fidelity in 56 ns integration time.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Vacuum Rabi coupling $g/2\pi$ | 50–400 MHz | Depending on qubit type and geometry | — |
| Resonator $T_1$ | 1–10 μs (2D), >1 ms (3D) | Planar vs 3D cavity | — |
| Dispersive shift $\chi/2\pi$ | 0.5–5 MHz | $\chi = g^2/\Delta$ | — |
| Readout speed | 200–500 ns | Dispersive measurement | — |
| Purcell limit $T_1^P$ | >1 ms | With Purcell filter | — |
| Resonator footprint | ~5 mm (λ/2) | Coplanar waveguide | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |
| Strong coupling ratio $g/\kappa$ | 10–1000 | $\kappa$ = resonator linewidth | — |

## References

### Original proposal
- A. Blais et al., "Cavity quantum electrodynamics for superconducting electrical circuits: An architecture for quantum computation," [Phys. Rev. A 69, 062320 (2004)](https://doi.org/10.1103/PhysRevA.69.062320) — [arXiv:cond-mat/0402216](https://arxiv.org/abs/cond-mat/0402216)

### First experimental demonstration
- A. Wallraff et al., "Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics," [Nature 431, 162 (2004)](https://doi.org/10.1038/nature02851) — [arXiv:cond-mat/0407325](https://arxiv.org/abs/cond-mat/0407325)

### Comprehensive review
- A. Blais, A. L. Grimsmo, S. M. Girvin, and A. Wallraff, "Circuit quantum electrodynamics," [Rev. Mod. Phys. 93, 025005 (2021)](https://doi.org/10.1103/RevModPhys.93.025005) — [arXiv:2005.12667](https://arxiv.org/abs/2005.12667)

## Linked Papers

- [[blais-2004-circuit-qed]]
- [[wallraff-2004-strong-coupling-single]]
- [[blais-2021-circuit-electrodynamics]]

## Related Entries

- [[transmon]] — most common qubit used in circuit QED architectures
- [[cooper-pair-box-charge-qubit]] — original qubit in the Blais et al. proposal
- [[fluxonium]] — also operates within circuit QED, requires auxiliary readout
- [[qubit-readout]] — dispersive readout is the primary application of circuit QED
- [[cryogenic-amplification]] — quantum-limited amplifiers in the readout chain
- [[bosonic-qubit]] — bosonic codes operate within the circuit QED framework (3D cavities)
- [[cat-codes]] — cat code bosonic qubits in circuit QED
- [[gkp-codes]] — GKP error correction implemented in circuit QED cavities
- [[tunable-coupler]] — parametric coupling schemes within circuit QED
- [[xmon]] — planar transmon variant for scalable circuit QED
