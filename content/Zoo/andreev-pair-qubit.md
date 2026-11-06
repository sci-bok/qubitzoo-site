---
title: Andreev Pair Qubit
entry_type: qubit
technology_family: Super-Semi
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/andreev-pair-qubit-figure.provenance.json"
figure_reviewed_by: "Scibok daily deep audit 2026-08-05"
figure_reviewed_at: "2026-08-05T14:14:51.186395+00:00"
first_proposed_year: 2003
first_demonstrated_year: 2013
keywords: [Andreev pair, Andreev bound state, superconducting weak link, even parity, microwave cavity, atomic contact]
influence_score: 0.74
last_updated: '2026-08-05'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-08-05
---

## Figure

![[andreev-pair-qubit-figure.png]]

## Description

An Andreev pair qubit uses the two even-parity states of one highly transmitting Andreev bound-state doublet in a superconducting weak link. The logical ground state has the negative-energy Andreev level occupied by a Cooper pair; the excited state has the positive-energy partner occupied. Their transition changes the occupancy by two quasiparticles while preserving even parity.

This is not the Andreev spin qubit. The pair qubit uses the even-parity ground/excited pair transition; the spin qubit uses the odd-parity spin degree of freedom of a trapped quasiparticle.

## Hamiltonian

For a short, spin-degenerate channel of transmission $\tau$,

$$E_A(\varphi)=\Delta\sqrt{1-\tau\sin^2(\varphi/2)},$$

and the even-parity transition energy is $2E_A$. The logical states are the even-parity configurations with the negative-energy level pair occupied ($|0\rangle$) or the positive-energy level pair occupied ($|1\rangle$); singly occupied configurations belong to the odd-parity sector.

A representative transverse two-level model for coupling to a microwave mode is the quantum-Rabi Hamiltonian,

$$\frac{H}{\hbar}=\frac{\omega_A(\varphi)}{2}\sigma_z+\omega_r a^\dagger a+g(a+a^\dagger)\sigma_x,\qquad \omega_A=\frac{2E_A}{\hbar}.$$

For $g\ll\omega_A,\omega_r$, the rotating-wave approximation reduces the interaction to $g(a^\dagger\sigma_-+a\sigma_+)$. That approximation is not valid when the coupling approaches the ultrastrong regime. Flux tunes $\varphi$ and therefore the qubit frequency; a resonator provides spectroscopy, control, readout, and remote coupling.

## Motivation

- Use the microscopic degrees of freedom that carry supercurrent as a compact qubit.
- Tune frequency with phase bias and couple distant weak links through microwave photons.
- Probe few-channel Josephson physics with coherent-control tools.

## Experimental Status

Zazunov et al. proposed the Andreev-level qubit in 2003. Bretheau et al. directly observed excited Andreev pair states by spectroscopy in 2013, and Janvier et al. demonstrated coherent control and single-shot circuit-QED readout in 2015. Cheung et al. demonstrated cavity-mediated coherent coupling between two pair qubits and identified entangled eigenstates across 6 mm in 2024. In 2025, Shvetsov et al. observed a pair-transition coupling of about 490 MHz to a high-impedance resonator and extracted larger phase-dependent couplings, approaching the ultrastrong-coupling regime. No peer-reviewed 2026 experiment found in this audit supersedes those pair-qubit milestones.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Remote separation | 6 mm | Two pair qubits coupled through a microwave cavity mode | [Cheung et al. 2024](https://doi.org/10.1038/s41567-024-02630-w) |
| Frequency control | Flux/phase tunable | Follows $2E_A(\varphi)$ | [Bretheau et al. 2013](https://doi.org/10.1038/nature12315) |
| Two-qubit interaction | Photon mediated | Avoided crossings and entangled two-qubit eigenstates | [Cheung et al. 2024](https://doi.org/10.1038/s41567-024-02630-w) |
| Coherent-control times | $T_1\approx4\,\mu\text{s}$; $T_2^*\approx38\,\text{ns}$; echo $T_2\approx565\,\text{ns}$ | Representative atomic-contact result at $\varphi=\pi$ | [Janvier et al. 2015](https://doi.org/10.1126/science.aab2179) |
| Pair-transition resonator coupling | $g/2\pi\approx490\,\text{MHz}$ observed | High-impedance InAs–Al device; model gives $968\pm7$ MHz maximum for the fitted transition | [Shvetsov et al. 2025](https://doi.org/10.1103/f81h-xjcv) |

## Scaling Considerations

- Quasiparticle poisoning moves the weak link between even and odd parity sectors.
- Atomic contacts and nanowire weak links require reproducible high-transmission channels.
- Flux sensitivity, dielectric loss, and cavity crowding remain system-level constraints.
- Universal calibrated two-qubit gates and processor-scale integration remain to be demonstrated.
- The 2025 high-impedance-resonator result strengthens light–matter coupling, but its largest inferred value lies beyond the perturbative model used to extract it and should not be read as a gate benchmark.

## References

- A. Zazunov et al., "Andreev Level Qubit," [Physical Review Letters 90, 087003 (2003)](https://doi.org/10.1103/PhysRevLett.90.087003); [arXiv:cond-mat/0206342](https://arxiv.org/abs/cond-mat/0206342).
- L. Bretheau et al., "Exciting Andreev pairs in a superconducting atomic contact," [Nature 499, 312–315 (2013)](https://doi.org/10.1038/nature12315); [arXiv:1305.4091](https://arxiv.org/abs/1305.4091).
- C. Janvier et al., "Coherent manipulation of Andreev states in superconducting atomic contacts," [Science 349, 1199–1202 (2015)](https://doi.org/10.1126/science.aab2179); [arXiv:1509.03961](https://arxiv.org/abs/1509.03961).
- L. Y. Cheung et al., "Photon-mediated long-range coupling of two Andreev pair qubits," [Nature Physics 20, 1793–1797 (2024)](https://doi.org/10.1038/s41567-024-02630-w); [arXiv:2310.15995](https://arxiv.org/abs/2310.15995).
- O. O. Shvetsov et al., "Approaching the ultrastrong-coupling regime between an Andreev level and a microwave resonator," [Physical Review Applied 24, 044015 (2025)](https://doi.org/10.1103/f81h-xjcv); [arXiv:2502.09243](https://arxiv.org/abs/2502.09243).

## Linked Papers

- [[zazunov-2003-andreev-level-qubit]]
- [[bretheau-2013-andreev-pairs]]
- [[janvier-2015-andreev-coherent-control]]
- [[cheung-2024-andreev-pair-coupling]]
- [[shvetsov-2025-andreev-ultrastrong-coupling]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — Andreev levels are the microscopic weak-link spectrum beneath the Josephson effect.
- [[jaynes-cummings-in-circuits]] — cavity coupling supplies the control and remote-interaction layer.
- [[spin-orbit-coupling-for-qubit-control]] — helps distinguish spin-active odd-parity Andreev devices from this even-parity pair encoding.

## Related Entries

- [[andreev-spin-qubit]] — odd-parity quasiparticle-spin encoding in a hybrid weak link.
- [[gatemon]] — uses the same gate-tunable weak-link family but encodes in a collective circuit mode.
- [[circuit-qed]] — shared microwave coupling and readout architecture.
