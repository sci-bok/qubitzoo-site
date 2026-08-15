---
title: Hybrid Qubit (Semiconductor Double Dot)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2012
first_demonstrated_year: 2014
keywords:
- hybrid qubit
- semiconductor
- double quantum dot
- three-electron qubit
- spin-charge hybrid
- fast electrical control
influence_score: 0.66
last_updated: '2026-08-15'
generated_by: scibok-curation
verified_by: scibok-daily-audit-2026-08-15
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/hybrid-qubit-figure.provenance.json"
figure_reviewed_by: "Codex daily deep audit 2026-08-15"
figure_reviewed_at: "2026-08-15T14:16:58.356258+00:00"
---

## Figure

![[hybrid-qubit-figure.png]]

## Description

The **quantum-dot hybrid qubit** encodes quantum information in three electrons confined to a **double quantum dot**. Its relevant charge sectors are $(2,1)$ and $(1,2)$, where the ordered pair gives the left- and right-dot occupations. The encoding combines charge mobility with a fixed total-spin manifold: both logical states have $S=1/2$ and a common $S_z$, while their singlet-versus-triplet character in the doubly occupied dot distinguishes them.

For a left-doubly-occupied convention, the asymptotic spin basis is

$$
|L,S\rangle=|S\rangle|\downarrow\rangle,\qquad
|L,T\rangle=\sqrt{\frac13}|T_0\rangle|\downarrow\rangle-
\sqrt{\frac23}|T_-\rangle|\uparrow\rangle,
$$

with analogous states $|R,S\rangle$ and $|R,T\rangle$ when the right dot is doubly occupied. The logical $|0\rangle$ and $|1\rangle$ are the two lowest eigenstates after interdot tunneling hybridizes these four charge-spin basis states; they are not bare charge configurations.

Electrical modulation of detuning or tunnel coupling drives the qubit because its eigenstates contain charge admixture. At favorable operating points, the two logical energies have nearly parallel dependence on detuning, suppressing first-order charge-noise dephasing while retaining a usable electric dipole. The central design tension remains speed versus noise: moving toward an anticrossing increases electrical controllability but also increases charge sensitivity.

## Hamiltonian

A representative four-state Hamiltonian in the ordered basis $\{|L,S\rangle,|L,T\rangle,|R,S\rangle,|R,T\rangle\}$ is

$$
H_q=
\begin{pmatrix}
\varepsilon/2 & 0 & \Delta_1 & -\Delta_2 \\
0 & \varepsilon/2+E_L & -\Delta_3 & \Delta_4 \\
\Delta_1 & -\Delta_3 & -\varepsilon/2 & 0 \\
-\Delta_2 & \Delta_4 & 0 & -\varepsilon/2+E_R
\end{pmatrix},
$$

where $\varepsilon$ is the double-dot detuning, $E_L$ and $E_R$ are the singlet-triplet splittings of the left and right dots, and $\Delta_{1\ldots4}$ are spin-conserving interdot tunnel matrix elements. The logical states are the two lowest eigenstates of $H_q$; the next levels are leakage states.

After projection into the logical subspace, a small detuning drive can be written

$$
H_{\mathrm{eff}}=\frac{\hbar\omega_q}{2}\sigma_z+
\frac{\delta\varepsilon(t)}{2}\left(d_z\sigma_z+d_x\sigma_x\right),
$$

where $d_z$ and $d_x$ are matrix elements of the detuning operator in the qubit eigenbasis. Transverse response drives rotations, longitudinal response shifts the qubit frequency, and a detuning sweet spot satisfies $\partial\omega_q/\partial\varepsilon=0$.

## Motivation

- Combine the fast electrical control of charge-like states with the spin structure and common-mode magnetic-noise rejection of an $S=1/2$ encoding.
- Implement universal single-qubit control without a micromagnet or nuclear-state preparation.
- Use sweet-spot operation, resonant driving, and engineered tunnel couplings to reduce the charge-noise cost of electrical control.
- Provide a compact double-dot alternative to three-dot exchange-only encodings, albeit with a less favorable demonstrated coherence and fidelity record than leading modern silicon spin qubits.

## Experimental Status

**Original proposal and pulse protocol — Shi et al. and Koh et al. (2012):**
- Shi et al. proposed the three-electron, silicon double-dot encoding and its electrically controlled singlet-triplet/tunnel-coupling Hamiltonian.
- Koh et al. developed nonadiabatic pulse-gated one- and two-qubit sequences that traverse charge-like anticrossings.

**First experimental demonstration — Kim et al. (2014):**
- Demonstrated universal control and process tomography in a Si/SiGe double dot.
- Achieved sub-100-ps rotations, with measured process fidelities of 85-89% for the reported $X$ rotations and 94-96% for the reported $Z$ rotations.
- Measured $T_2^*\approx2$ ns in the charge-like $X$-rotation regime and $T_2^*\approx10$ ns for the more spin-like $Z$ evolution.

**Resonant control — Kim et al. (2015):**
- Used microwave detuning modulation at a charge-noise-protected operating point.
- Reported $X$-axis $\pi$ rotations in under 5 ns with fidelity above 93%, $Z$ rotations with fidelity above 96%, and dynamical-decoupling coherence beyond 150 ns.

**Readout advances — Harpt et al. and Park et al. (2025):**
- Harpt et al. demonstrated parametric longitudinal resonator readout in an ultra-dispersive regime with qubit-resonator detuning of roughly 10 GHz.
- Park et al. demonstrated single-shot latched readout using barrier-gate control with one reservoir, obtaining readout SNR 10.2 and 98% reset/initialization probability after 2 ms, versus 80% without reset pulses.
- These results improve readout integration and reset, but they do not establish a newer single-qubit gate-fidelity record for the encoding.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| DC-pulsed rotation time | $<100$ ps | Demonstrated about two Bloch-sphere axes | [Kim et al. 2014](https://doi.org/10.1038/nature13407) |
| DC-pulsed process fidelity | 85-89% ($X$); 94-96% ($Z$) | Process-tomography values depend on rotation angle | [Kim et al. 2014](https://doi.org/10.1038/nature13407) |
| Resonant $\pi$-gate performance | $<5$ ns and $>93\%$ ($X$); 50 ps and $>96\%$ ($Z$) | Microwave detuning drive at a protected operating point | [Kim et al. 2015](https://doi.org/10.1038/npjqi.2015.4) |
| Dynamically decoupled coherence | $>150$ ns | Hahn echo and Carr-Purcell sequences | [Kim et al. 2015](https://doi.org/10.1038/npjqi.2015.4) |
| Ultra-dispersive readout detuning | $\sim10$ GHz | Parametric longitudinal resonator coupling | [Harpt et al. 2025](https://doi.org/10.1038/s41534-025-00962-w) |
| Latched-readout SNR / reset probability | 10.2 / 98% after 2 ms | Barrier-gate pulsing; 15-fold reset speedup | [Park et al. 2025](https://doi.org/10.1038/s41534-025-01094-x) |

## References

### Original proposals
- Z. Shi et al., "Fast Hybrid Silicon Double-Quantum-Dot Qubit," [Phys. Rev. Lett. 108, 140503 (2012)](https://doi.org/10.1103/PhysRevLett.108.140503); [arXiv:1110.6622](https://arxiv.org/abs/1110.6622)
- T. S. Koh et al., "Pulse-Gated Quantum-Dot Hybrid Qubit," [Phys. Rev. Lett. 109, 250503 (2012)](https://doi.org/10.1103/PhysRevLett.109.250503); [arXiv:1207.5581](https://arxiv.org/abs/1207.5581)

### Experimental milestones
- D. Kim et al., "Quantum control and process tomography of a semiconductor quantum dot hybrid qubit," [Nature 511, 70-74 (2014)](https://doi.org/10.1038/nature13407); [arXiv:1401.4416](https://arxiv.org/abs/1401.4416)
- D. Kim et al., "High-fidelity resonant gating of a silicon-based quantum dot hybrid qubit," [npj Quantum Information 1, 15004 (2015)](https://doi.org/10.1038/npjqi.2015.4); [arXiv:1502.03156](https://arxiv.org/abs/1502.03156)
- B. Harpt et al., "Ultra-dispersive resonator readout of a quantum-dot qubit using longitudinal coupling," [npj Quantum Information 11, 5 (2025)](https://doi.org/10.1038/s41534-025-00962-w); [arXiv:2407.08869](https://arxiv.org/abs/2407.08869)
- S. Park et al., "Single-shot latched readout of a quantum dot qubit using barrier gate pulsing," [npj Quantum Information 11, 148 (2025)](https://doi.org/10.1038/s41534-025-01094-x); [arXiv:2408.15380](https://arxiv.org/abs/2408.15380)

## Linked Papers

- [[shi-2012-fast-hybrid-double-dot]]
- [[koh-2012-pulse-gated-dot]]
- [[kim-2014-control-process-tomography]]
- [[kim-2015-resonant-hybrid-qubit]]
- [[harpt-2025-ultra-dispersive-hybrid-readout]]
- [[park-2025-latched-hybrid-readout]]

## Evergreen context

- [[charge-noise-sweet-spot]] — the hybrid qubit is a clean semiconductor example of why speed from charge admixture only becomes useful when the operating point is flattened against detuning noise.
- [[exchange-interaction-in-quantum-dots]] — tunnel coupling and detuning set the exchange-mediated hybridization in the double dot.
- [[heisenberg-exchange-in-quantum-dots]] — useful after projecting the charge sector into the logical $S=1/2$ subspace.
- [[divincenzo-criteria]] — hybrid qubits make an explicit control-speed-versus-coherence trade rather than maximizing either quantity alone.

## Related Entries

- [[exchange-only-qubit]] — three-electron, three-dot encoding with purely exchange control
- [[spin-qubit]] — broader semiconductor spin-qubit family
- [[semiconductor-charge-qubit]] — the charge-like limit of electrically driven double-dot control
- [[hole-spin-qubit]] — fast electrical spin control through spin-orbit coupling rather than deliberate charge hybridization
- [[qubit-readout]] — spin-to-charge, latched, and resonator-based measurement methods
- [[circuit-qed]] — framework for the 2025 longitudinal-resonator readout experiment
