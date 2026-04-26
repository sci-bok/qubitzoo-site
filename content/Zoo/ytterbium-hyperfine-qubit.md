---
title: Ytterbium-171 Hyperfine Qubit
entry_type: qubit
technology_family: Ion Trap
status: demonstrated
figure_reviewed: false
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
last_updated: '2026-04-26'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-26
---

## Figure

![[ytterbium-hyperfine-qubit-figure.png]]

## Description

The ytterbium-171 hyperfine qubit encodes quantum information in the two hyperfine clock states of the $^{171}\text{Yb}^+$ ion's $^2S_{1/2}$ ground-state manifold: $|0\rangle \equiv |F=0, m_F=0\rangle$ and $|1\rangle \equiv |F=1, m_F=0\rangle$, separated by 12.642812 GHz. Because both states have $m_F=0$, the qubit is first-order insensitive to magnetic-field noise, and the transition frequency shifts only quadratically with $B$ near zero field.

The $^{171}\text{Yb}^+$ ion has nuclear spin $I=1/2$ and a simple $S_{1/2}$ ground-state hyperfine structure, which makes state preparation, microwave control, Raman control, and fluorescence readout comparatively clean. The main detection and cooling transition is $^2S_{1/2} \leftrightarrow {}^2P_{1/2}$ at 369.5 nm, with 935 nm repumping through the $^2D_{3/2}$ manifold. This combination of clock-state robustness, simple level structure, and high-quality optical control made $^{171}\text{Yb}^+$ the workhorse qubit species for commercial trapped-ion systems such as Quantinuum's H-series processors.

Two-qubit entangling gates use shared motional modes of the ion chain, typically via Raman-driven geometric-phase or Mølmer-Sørensen-type interactions. In modern commercial systems, $^{171}\text{Yb}^+$ has also been combined with other ion species in dual-species architectures, where ytterbium provides sympathetic cooling or auxiliary functionality even when another species carries the data qubits.

## Hamiltonian

A more complete ground-manifold Hamiltonian is

$$H = A_{\mathrm{hfs}}\,\mathbf{I}\cdot\mathbf{J} + \mu_B\left(g_J J_z + g_I I_z\right)B,$$

where $A_{\mathrm{hfs}}$ is the magnetic-dipole hyperfine constant, $\mathbf{I}$ is the nuclear spin, $\mathbf{J}$ is the electronic angular momentum, and $B$ is an external magnetic field.

For $^{171}\text{Yb}^+$, $I=J=1/2$, giving the ground-state hyperfine splitting

$$\Delta E_{\mathrm{hfs}} = h \times 12.642812\,\mathrm{GHz}.$$

The full field dependence is given by the Breit-Rabi formula. Near $B=0$, the clock transition $|F=0,m_F=0\rangle \leftrightarrow |F=1,m_F=0\rangle$ has no first-order Zeeman shift, so

$$\omega_{01}(B) \approx \omega_{01}(0) + \beta B^2,$$

with $\beta/2\pi \approx 31\,\mathrm{kHz/mT^2}$ (equivalently about $310\,\mathrm{Hz/G^2}$). By contrast, the $|F=1,m_F=\pm1\rangle$ states acquire approximately linear Zeeman shifts at low field.

## Motivation

Trapped-ion quantum computing needs qubits with long coherence, clean state preparation and measurement, and control compatible with high-fidelity microwave and laser operations. The $^{171}\text{Yb}^+$ clock-state qubit satisfies all three. It supports hour-scale coherence under dynamical decoupling, microsecond single-qubit gates, high-fidelity fluorescence readout, and reliable transport in QCCD architectures. Those properties are exactly why it became one of the dominant trapped-ion qubit implementations in both laboratory and commercial systems.

## Experimental Status

**First characterization, Olmschenk et al. (2007):**
- Demonstrated manipulation and detection of a trapped $^{171}\text{Yb}^+$ hyperfine qubit.
- Established the canonical clock-state encoding and fluorescence-readout workflow.

**Microwave control scaling, Shappert et al. (2013):**
- Demonstrated spatially uniform microwave single-qubit control in a surface-electrode trap.
- Achieved $\pi$-rotations as fast as about 1 $\mu$s on the $^{171}\text{Yb}^+$ hyperfine transition.

**Fast high-fidelity readout, Noek et al. (2013):**
- Demonstrated 99.93% state-preparation-and-measurement fidelity for a $^{171}\text{Yb}^+$ hyperfine qubit.
- Used background-suppressed fluorescence detection on the 369.5 nm cycling transition.

**Transport robustness, Kaufmann et al. (2018):**
- Measured 99.9994% state fidelity per shuttling operation during repeated transport of a $^{171}\text{Yb}^+$ hyperfine qubit.
- Important evidence that QCCD transport can preserve hyperfine-qubit information with negligible added error.

**Long coherence, Wang et al. (2021):**
- Demonstrated a single-ion $^{171}\text{Yb}^+$ qubit with estimated coherence time exceeding one hour under dynamical decoupling.
- Showed how magnetic-noise suppression and sympathetic-cooling support can push physical clock-state coherence far beyond the raw $T_2^*$ limit.

**Integrated-control fidelity, Hogle et al. (2023):**
- Demonstrated $^{171}\text{Yb}^+$ single-qubit gate fidelities above 99.7% using scalable integrated photonic modulators.
- Relevant because it connects high-fidelity qubit control to an architecture compatible with large-scale optical fanout.

**System-level deployment, Quantinuum H2 (2024):**
- Quantinuum's H2 processor used a fully connected $^{171}\text{Yb}^+$ QCCD register for logical-qubit and error-correction experiments.
- This includes the 4D surface-code demonstration on a commercial trapped-ion processor.

**Ultra-long encoded coherence, Pi et al. (2026):**
- Reported coherence beyond ten hours in a decoherence-free clock-qubit encoding built from a pair of $^{171}\text{Yb}^+$ ions.
- Shows that ytterbium clock qubits remain a leading platform for long-lived trapped-ion quantum memory.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | Effectively infinite on circuit timescales | Ground-state hyperfine qubit | — |
| Hyperfine splitting | 12.642812 GHz | Clock transition in $^2S_{1/2}$ | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| $T_2$ (single ion, DD) | >1 h | Best reported single-ion coherence under dynamical decoupling | [Wang et al. 2021](https://doi.org/10.1038/s41467-020-20330-w) |
| $T_2$ (DFS pair) | >10 h | Pair-encoded decoherence-free clock qubit | [Pi et al. 2026](https://arxiv.org/abs/2603.19631) |
| 1Q gate fidelity | >99.7% | Gate set tomography with integrated photonic modulators | [Hogle et al. 2023](https://doi.org/10.1038/s41534-023-00737-1) |
| SPAM fidelity | 99.93% | Background-suppressed fluorescence detection | [Noek et al. 2013](https://doi.org/10.1364/OL.38.004735) |
| 1Q gate time | ~1 $\mu$s | Microwave-driven $\pi$ rotations | [Shappert et al. 2013](https://doi.org/10.1088/1367-2630/15/8/083053) |
| Transport fidelity | 99.9994% per hop | 280 $\mu$m shuttling operation in a microstructured trap | [Kaufmann et al. 2018](https://doi.org/10.1103/PhysRevLett.120.010501) |
| System scale | 56 qubits (H2, 2024) | Commercial all-to-all $^{171}\text{Yb}^+$ QCCD register | [Berthusen et al. 2024](https://doi.org/10.1103/PhysRevA.110.062413) |

## References

### Original characterization
- S. Olmschenk et al., "Manipulation and detection of a trapped Yb⁺ hyperfine qubit," [Phys. Rev. A 76, 052314 (2007)](https://doi.org/10.1103/PhysRevA.76.052314), [arXiv:0708.0657](https://arxiv.org/abs/0708.0657)

### Control, transport, and readout
- C. M. Shappert et al., "Spatially uniform single-qubit gate operations with near-field microwaves and composite pulse compensation," [New J. Phys. 15, 083053 (2013)](https://doi.org/10.1088/1367-2630/15/8/083053), [arXiv:1304.6636](https://arxiv.org/abs/1304.6636)
- R. Noek et al., "High speed, high fidelity detection of an atomic hyperfine qubit," [Opt. Lett. 38, 4735 (2013)](https://doi.org/10.1364/OL.38.004735)
- P. Kaufmann et al., "High-Fidelity Preservation of Quantum Information During Trapped-Ion Transport," [Phys. Rev. Lett. 120, 010501 (2018)](https://doi.org/10.1103/PhysRevLett.120.010501), [arXiv:1704.02141](https://arxiv.org/abs/1704.02141)

### Coherence and integrated control
- P. Wang et al., "Single ion qubit with estimated coherence time exceeding one hour," [Nat. Commun. 12, 233 (2021)](https://doi.org/10.1038/s41467-020-20330-w)
- C. W. Hogle et al., "High-fidelity trapped-ion qubit operations with scalable photonic modulators," [npj Quantum Information (2023)](https://doi.org/10.1038/s41534-023-00737-1)
- J. Pi et al., "Beyond-Ten-Hour Coherence in a Decoherence-Free Trapped-Ion Clock Qubit," [arXiv:2603.19631 (2026)](https://arxiv.org/abs/2603.19631)

### System-level deployment
- N. Berthusen et al., "Experiments with the four-dimensional surface code on a quantum charge-coupled device quantum computer," [Phys. Rev. A 110, 062413 (2024)](https://doi.org/10.1103/PhysRevA.110.062413), [arXiv:2408.08865](https://arxiv.org/abs/2408.08865)
- A. Ransford et al., "A 98-qubit trapped-ion quantum computer," [arXiv:2511.05465 (2025)](https://arxiv.org/abs/2511.05465)

## Linked Papers

- [[olmschenk-2007-yb171-qubit]]
- [[noek-2013-high-speed-detection]]
- [[wang-2021-single-ion-qubit]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[shuttling-ion-trap-qubit]] — QCCD transport architecture used in scalable ion processors
- [[cirac-zoller-gate]] — foundational trapped-ion gate proposal
- [[motional-mode-coupling-in-ion-traps]] — physics of the Coulomb-mediated bus
- [[coherence-time-hierarchy]] — context for coherence comparison
