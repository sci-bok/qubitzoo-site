---
title: Ytterbium-171 Hyperfine Qubit
entry_type: qubit
technology_family: Ion Trap
status: demonstrated
figure_reviewed: true
first_proposed_year: 2007
first_demonstrated_year: 2007
keywords:
- ytterbium
- Yb-171
- hyperfine qubit
- trapped ion
- clock states
- field insensitive
- microwave qubit
- Quantinuum
- IonQ
influence_score: 0.88
last_updated: '2026-05-06'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-05-06
---

## Figure

![[ytterbium-hyperfine-qubit-figure.png]]

## Description

The ytterbium-171 hyperfine qubit encodes quantum information in the two clock states of the $^{171}\mathrm{Yb}^+$ $^2S_{1/2}$ ground-state manifold: $|0\rangle \equiv |F=0,m_F=0\rangle$ and $|1\rangle \equiv |F=1,m_F=0\rangle$, separated by 12.642812 GHz. Because both basis states have $m_F=0$, the qubit transition is first-order insensitive to magnetic-field noise, and the frequency shifts only quadratically with $B$ near zero field.

This species has nuclear spin $I=1/2$, so the $^2S_{1/2}$ ground manifold has a particularly simple hyperfine structure. Together with efficient fluorescence detection on the $^2S_{1/2}\leftrightarrow {}^2P_{1/2}$ transition at 369.5 nm and standard repumping through 935 nm light, that simplicity helped make $^{171}\mathrm{Yb}^+$ the workhorse qubit species for commercial trapped-ion systems such as Quantinuum H-series processors and much of IonQ's early architecture.

Entangling gates use shared motional modes of the ion chain, typically through Raman-driven geometric-phase or Mølmer-Sørensen interactions. In mixed-species systems, $^{171}\mathrm{Yb}^+$ also plays an important auxiliary role because its clock-state coherence and laser infrastructure make it attractive for sympathetic cooling, memory, and control tasks alongside other trapped-ion qubit species.

## Hamiltonian

A representative ground-manifold Hamiltonian is

$$H = A_{\mathrm{hfs}}\,\mathbf{I}\cdot\mathbf{J} + \mu_B\left(g_JJ_z + g_II_z\right)B,$$

where $A_{\mathrm{hfs}}$ is the magnetic-dipole hyperfine constant, $\mathbf{I}$ is the nuclear spin, $\mathbf{J}$ is the electronic angular momentum, and $B$ is an external magnetic field.

For $^{171}\mathrm{Yb}^+$, $I=J=1/2$, so the ground-state hyperfine splitting is

$$\Delta E_{\mathrm{hfs}} = h\times 12.642812\,\mathrm{GHz}.$$

The full field dependence is described by the Breit-Rabi formula. Near $B=0$, the clock transition $|F=0,m_F=0\rangle \leftrightarrow |F=1,m_F=0\rangle$ has no first-order Zeeman shift, so

$$\omega_{01}(B) \approx \omega_{01}(0) + \beta B^2,$$

with $\beta/2\pi \approx 31\,\mathrm{kHz/mT^2}$, equivalently about $310\,\mathrm{Hz/G^2}$. By contrast, the $|F=1,m_F=\pm1\rangle$ states acquire approximately linear Zeeman shifts at low field.

## Motivation

Trapped-ion quantum computing needs qubits with long coherence, clean state preparation and measurement, and high-fidelity microwave or laser control. The $^{171}\mathrm{Yb}^+$ clock-state qubit satisfies all three. It supports hour-scale coherence under dynamical decoupling, microsecond single-qubit gates, high-fidelity fluorescence readout, and robust transport in QCCD architectures. Those properties explain why it became one of the dominant trapped-ion qubit implementations in both laboratory and commercial systems.

## Experimental Status

**Foundational characterization, Olmschenk et al. (2007):**
- Demonstrated manipulation and detection of a trapped $^{171}\mathrm{Yb}^+$ hyperfine qubit.
- Established the canonical clock-state encoding and fluorescence-readout workflow.

**Microwave control scaling, Shappert et al. (2013):**
- Demonstrated spatially uniform near-field microwave single-qubit control in a surface-electrode trap.
- Reached about 1 $\mu$s $\pi$-rotations on the $^{171}\mathrm{Yb}^+$ hyperfine transition.

**Fast high-fidelity readout, Noek et al. (2013):**
- Demonstrated 99.93% state-preparation-and-measurement fidelity for a $^{171}\mathrm{Yb}^+$ hyperfine qubit.
- Used background-suppressed fluorescence detection on the 369.5 nm cycling transition.

**Transport robustness, Kaufmann et al. (2018):**
- Measured 99.9994% state fidelity per shuttling operation during repeated transport of a $^{171}\mathrm{Yb}^+$ hyperfine qubit.
- Important evidence that QCCD transport can preserve clock-state information with negligible added error.

**Long single-ion coherence, Wang et al. (2021):**
- Demonstrated a single-ion $^{171}\mathrm{Yb}^+$ qubit with estimated coherence time exceeding one hour under dynamical decoupling.
- Showed how improved magnetic-noise suppression and oscillator stability push clock-state memory far beyond the raw $T_2^*$ limit.

**Integrated photonic control, Hogle et al. (2023):**
- Demonstrated high-fidelity $^{171}\mathrm{Yb}^+$ single-qubit operations using scalable photonic modulators.
- Important because it ties Yb control fidelity to an architecture compatible with optical fanout and scaling.

**Logical experiments on commercial Yb hardware, Berthusen et al. (2024):**
- Performed 4D surface-code experiments on Quantinuum's H2 QCCD processor, which was configured with 56 physical $^{171}\mathrm{Yb}^+$ qubits.
- Reported a physical-layer error budget dominated by two-qubit gate errors $\le 1.3\times10^{-3}$, single-qubit gate errors $\sim 3\times10^{-5}$, and SPAM errors $\sim 1.5\times10^{-3}$.

**Dual-species commercial scale-up, Ransford et al. (2025):**
- Reported Quantinuum Helios, a 98-qubit QCCD processor based on $^{137}\mathrm{Ba}^+$ data qubits.
- Relevant here because $^{171}\mathrm{Yb}^+$ remains part of the dual-species trapped-ion toolbox for sympathetic-cooling and control roles even when it is not the data-qubit species.

**Ultra-long encoded coherence, Pi et al. (2026):**
- Reported coherence beyond ten hours in a decoherence-free clock-qubit encoding built from a pair of $^{171}\mathrm{Yb}^+$ ions, sympathetically cooled by barium.
- Shows that ytterbium clock qubits remain a leading platform for ultra-long-lived trapped-ion quantum memory.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | Effectively infinite on circuit timescales | Ground-state hyperfine qubit | — |
| Hyperfine splitting | 12.642812 GHz | Clock transition in $^2S_{1/2}$ | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| $T_2$ (single ion, DD) | >1 h | Estimated coherence exceeding 5500 s | [Wang et al. 2021](https://doi.org/10.1038/s41467-020-20330-w) |
| $T_2$ (DFS pair) | >10 h | Pair-encoded decoherence-free clock qubit | [Pi et al. 2026](https://arxiv.org/abs/2603.19631) |
| 1Q gate error (system) | $\sim 3\times10^{-5}$ | H2 physical-layer error budget on 56 $^{171}\mathrm{Yb}^+$ qubits | [Berthusen et al. 2024](https://doi.org/10.1103/PhysRevA.110.062413) |
| 2Q gate error (system) | $\le 1.3\times10^{-3}$ | H2 physical-layer error budget | [Berthusen et al. 2024](https://doi.org/10.1103/PhysRevA.110.062413) |
| SPAM fidelity (single ion) | 99.93% | Background-suppressed fluorescence detection | [Noek et al. 2013](https://doi.org/10.1364/OL.38.004735) |
| 1Q gate time | ~1 $\mu$s | Near-field microwave $\pi$ rotations | [Shappert et al. 2013](https://doi.org/10.1088/1367-2630/15/8/083053) |
| Transport fidelity | 99.9994% per hop | 280 $\mu$m shuttling in a microstructured trap | [Kaufmann et al. 2018](https://doi.org/10.1103/PhysRevLett.120.010501) |
| System scale | 56 qubits | H2 configuration used for 4D surface-code experiments | [Berthusen et al. 2024](https://doi.org/10.1103/PhysRevA.110.062413) |

## References

### Foundational characterization and control
- S. Olmschenk et al., "Manipulation and detection of a trapped Yb⁺ hyperfine qubit," [Phys. Rev. A 76, 052314 (2007)](https://doi.org/10.1103/PhysRevA.76.052314), [arXiv:0708.0657](https://arxiv.org/abs/0708.0657)
- C. M. Shappert et al., "Spatially uniform single-qubit gate operations with near-field microwaves and composite pulse compensation," [New J. Phys. 15, 083053 (2013)](https://doi.org/10.1088/1367-2630/15/8/083053), [arXiv:1304.6636](https://arxiv.org/abs/1304.6636)
- R. Noek et al., "High speed, high fidelity detection of an atomic hyperfine qubit," [Opt. Lett. 38, 4735 (2013)](https://doi.org/10.1364/OL.38.004735)
- P. Kaufmann et al., "High-Fidelity Preservation of Quantum Information During Trapped-Ion Transport," [Phys. Rev. Lett. 120, 010501 (2018)](https://doi.org/10.1103/PhysRevLett.120.010501), [arXiv:1704.02141](https://arxiv.org/abs/1704.02141)

### Coherence and scalable control
- P. Wang et al., "Single ion qubit with estimated coherence time exceeding one hour," [Nat. Commun. 12, 233 (2021)](https://doi.org/10.1038/s41467-020-20330-w)
- C. W. Hogle et al., "High-fidelity trapped-ion qubit operations with scalable photonic modulators," [npj Quantum Information 9, 67 (2023)](https://doi.org/10.1038/s41534-023-00737-1)
- J. Pi et al., "Beyond-Ten-Hour Coherence in a Decoherence-Free Trapped-Ion Clock Qubit," [arXiv:2603.19631 (2026)](https://arxiv.org/abs/2603.19631)

### Commercial and logical-scale deployment
- N. Berthusen et al., "Experiments with the four-dimensional surface code on a quantum charge-coupled device quantum computer," [Phys. Rev. A 110, 062413 (2024)](https://doi.org/10.1103/PhysRevA.110.062413), [arXiv:2408.08865](https://arxiv.org/abs/2408.08865)
- A. Ransford et al., "A 98-qubit trapped-ion quantum computer," [arXiv:2511.05465 (2025)](https://arxiv.org/abs/2511.05465)

## Linked Papers

- [[olmschenk-2007-yb171-qubit]]
- [[noek-2013-high-speed-detection]]
- [[wang-2021-single-ion-qubit]]
- [[berthusen-2024-4d-surface-code-qccd]]
- [[pi-2026-ten-hour-dfs-memory]]
- [[ransford-2025-helios-98-qubit]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[shuttling-ion-trap-qubit]] — QCCD transport architecture used in scalable ion processors
- [[molmer-sorenson-gate]] — widely used entangling-gate family on Yb platforms
- [[cirac-zoller-gate]] — foundational trapped-ion gate proposal
- [[motional-mode-coupling-in-ion-traps]] — physics of the Coulomb-mediated bus
- [[coherence-time-hierarchy]] — context for coherence comparison
