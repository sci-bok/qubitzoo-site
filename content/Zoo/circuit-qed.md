---
title: Circuit Quantum Electrodynamics (Circuit QED)
entry_type: coupling
technology_family: Classical Hardware
status: demonstrated
first_proposed_year: 2004
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
last_updated: '2026-03-05'
generated_by: pipeline-v1
extracted_by: claude-code
verified_by: pending
figure_reviewed: true
---



Circuit QED maps cavity quantum electrodynamics onto superconducting circuits: a Cooper pair box qubit couples to the quantized field of a 1D transmission line resonator, reaching the strong-coupling regime with vacuum Rabi rates $g/\pi \sim 100\,\text{MHz}$.

## Description

Circuit quantum electrodynamics (circuit QED) is the solid-state realization of cavity QED, where a superconducting qubit plays the role of the atom and a coplanar waveguide transmission line resonator plays the role of the optical cavity. The key insight is that the zero-point energy of a quasi-1D resonator is concentrated in an extremely small effective volume ($\approx 10^{-5}$ cubic wavelengths), producing rms vacuum fields $\mathcal{E}_\text{rms} \sim 0.2\,\text{V/m}$ — about 100× larger than 3D microwave cavities. Combined with the enormous transition dipole moment of the Cooper pair box ($d \sim 2 \times 10^4$ atomic units), this yields coupling strengths three orders of magnitude beyond atomic microwave cQED.

At the charge degeneracy point ($N_g = 1/2$), the system Hamiltonian reduces to the Jaynes-Cummings form:

$$H = \hbar\omega_r\left(a^\dagger a + \frac{1}{2}\right) + \frac{\Omega}{2}\sigma_z + \hbar g(a^\dagger \sigma_- + a\sigma_+)$$

with vacuum Rabi frequency:

$$g = \frac{\beta e}{\hbar}\sqrt{\frac{\hbar\omega_r}{cL}}$$

where $\beta = C_g/C_\Sigma$ is the capacitive coupling ratio.


## Figure

![[circuit-qed-figure.png]]

## Motivation

Previous proposals for coupling superconducting qubits used discrete LC circuits or large Josephson junctions, which suffered from parasitic resonances and 1/f noise sensitivity. The transmission line resonator approach provides: strong inhibition of spontaneous emission (Purcell protection), high-fidelity QND readout via dispersive phase shifts, a natural quantum bus for entangling qubits separated by centimeter distances, and compatibility with standard lithographic fabrication. The critical photon number $m_0 = \gamma^2/2g^2 \leq 10^{-6}$ and minimum detectable atom number $N_0 = 2\gamma\kappa/g^2 \leq 6 \times 10^{-5}$ confirm access to the very strong coupling regime.

## Key Findings

- Strong coupling achieved with $g/\pi \sim 100\,\text{MHz}$, vastly exceeding both cavity decay rate $\kappa$ and qubit decay rate $\gamma$.
- In the dispersive regime ($|\Delta| = |\omega_r - \Omega| \gg g$), the cavity frequency shifts by $\pm g^2/\Delta$ depending on qubit state, enabling QND readout.
- Purcell effect suppresses spontaneous emission by factor $(g/\Delta)^2$ when qubit is detuned from cavity.
- Resonator acts as quantum bus: two qubits at different antinodes can be entangled via virtual photon exchange with effective coupling $g_1 g_2 / \Delta$.
- Readout SNR analysis predicts measurement fidelity limited by amplifier noise temperature, not backaction.

## Linked Papers

- [[blais-2004-circuit-qed]]

## Related Entries

- [[transmon]]
- [[cooper-pair-box-charge-qubit]]
- [[circuit-qed]]
- [[dispersive-readout-mechanism]]
- [[jaynes-cummings-in-circuits]]
- [[vacuum-rms-field-scaling]]
- [[purcell-protection-via-detuning]]
- [[resonator-as-quantum-bus]]

## Physics

A superconducting qubit (e.g., Cooper pair box) coupled to a coplanar waveguide resonator via the vacuum electric field. The system is described by the Jaynes-Cummings Hamiltonian:

$$H = \hbar\omega_r a^\dagger a + \frac{\hbar\omega_q}{2}\sigma_z + \hbar g(a^\dagger\sigma_- + a\sigma_+)$$

where $g$ is the vacuum Rabi coupling. The qubit is placed at the voltage antinode of the fundamental $\lambda/2$ mode to maximize $g$. In the dispersive regime ($|\Delta| = |\omega_q - \omega_r| \gg g$), the qubit state shifts the resonator frequency by $\pm\chi = \pm g^2/\Delta$, enabling dispersive readout.

## Related Qubits

- [[transmon]] — most common qubit used in circuit QED
- [[cooper-pair-box-charge-qubit]] — original qubit in Blais proposal
- [[fluxonium]] — also operates in circuit QED architecture

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
