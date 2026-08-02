---
title: Andreev Pair Qubit
entry_type: qubit
technology_family: Super-Semi
status: demonstrated
figure_reviewed: true
figure_renderer: "openai-imagegen"
figure_model: "gpt-image-2"
figure_provenance: "Figures/andreev-pair-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-02"
figure_reviewed_at: "2026-08-02T17:07:49Z"
first_proposed_year: 2003
first_demonstrated_year: 2013
keywords: [Andreev pair, Andreev bound state, superconducting weak link, even parity, microwave cavity, atomic contact]
influence_score: 0.74
last_updated: '2026-08-02'
generated_by: scibok-curation
verified_by: codex-literature-audit-2026-08-02
---

## Figure

![[andreev-pair-qubit-figure.png]]

## Description

An Andreev pair qubit uses the two even-parity states of one highly transmitting Andreev bound-state doublet in a superconducting weak link. The logical ground state has the negative-energy Andreev level occupied by a Cooper pair; the excited state has the positive-energy partner occupied. Their transition changes the occupancy by two quasiparticles while preserving even parity.

This is not the Andreev spin qubit. The pair qubit uses the even-parity ground/excited pair transition; the spin qubit uses the odd-parity spin degree of freedom of a trapped quasiparticle.

## Hamiltonian

For a short channel of transmission $\tau$,

$$E_A(\varphi)=\Delta\sqrt{1-\tau\sin^2(\varphi/2)},$$

and the even-parity transition energy is $2E_A$. In a two-level description coupled to a microwave mode,

$$\frac{H}{\hbar}=\frac{\omega_A(\varphi)}{2}\sigma_z+\omega_r a^\dagger a+g(a^\dagger\sigma_-+a\sigma_+),\qquad \omega_A=\frac{2E_A}{\hbar}.$$

Flux tunes $\varphi$ and therefore the qubit frequency; a resonator provides spectroscopy, control, readout, and remote coupling.

## Motivation

- Use the microscopic degrees of freedom that carry supercurrent as a compact qubit.
- Tune frequency with phase bias and couple distant weak links through microwave photons.
- Probe few-channel Josephson physics with coherent-control tools.

## Experimental Status

Bretheau et al. directly observed excited Andreev pair states by spectroscopy in 2013. Subsequent work established coherent control. Cheung et al. demonstrated cavity-mediated coherent coupling between two pair qubits and identified entangled states across 6 mm in 2024.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Remote separation | 6 mm | Two pair qubits coupled through a microwave cavity mode | [Cheung et al. 2024](https://doi.org/10.1038/s41567-024-02630-w) |
| Frequency control | Flux/phase tunable | Follows $2E_A(\varphi)$ | [Bretheau et al. 2013](https://doi.org/10.1038/nature12315) |
| Two-qubit interaction | Photon mediated | Avoided crossings and entangled two-qubit eigenstates | [Cheung et al. 2024](https://doi.org/10.1038/s41567-024-02630-w) |

## Scaling Considerations

- Quasiparticle poisoning moves the weak link between even and odd parity sectors.
- Atomic contacts and nanowire weak links require reproducible high-transmission channels.
- Flux sensitivity, dielectric loss, and cavity crowding remain system-level constraints.
- Universal calibrated two-qubit gates and processor-scale integration remain to be demonstrated.

## References

- L. Bretheau et al., "Exciting Andreev pairs in a superconducting atomic contact," [Nature 499, 312–315 (2013)](https://doi.org/10.1038/nature12315).
- L. Y. Cheung et al., "Photon-mediated long-range coupling of two Andreev pair qubits," [Nature Physics 20, 1793–1797 (2024)](https://doi.org/10.1038/s41567-024-02630-w).

## Linked Papers

- [[bretheau-2013-andreev-pairs]]
- [[cheung-2024-andreev-pair-coupling]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — Andreev levels are the microscopic weak-link spectrum beneath the Josephson effect.
- [[jaynes-cummings-in-circuits]] — cavity coupling supplies the control and remote-interaction layer.
- [[spin-orbit-coupling-for-qubit-control]] — helps distinguish spin-active odd-parity Andreev devices from this even-parity pair encoding.

## Related Entries

- [[andreev-spin-qubit]] — odd-parity quasiparticle-spin encoding in a hybrid weak link.
- [[gatemon]] — uses the same gate-tunable weak-link family but encodes in a collective circuit mode.
- [[circuit-qed]] — shared microwave coupling and readout architecture.
