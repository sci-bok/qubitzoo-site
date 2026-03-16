---
title: Spin Qubit (Loss-DiVincenzo)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
first_proposed_year: 1998
keywords:
- spin qubit
- quantum dot
- semiconductor
- loss divincenzo
- exchange interaction
- silicon
- germanium
- single electron
influence_score: 0.88
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
---

## Description

The semiconductor spin qubit, proposed by Loss and DiVincenzo in 1998, encodes quantum information in the spin state of a single electron (or hole) confined in a gate-defined quantum dot. The qubit states are the spin-up $|\!\uparrow\rangle$ and spin-down $|\!\downarrow\rangle$ states of the electron, split by the Zeeman energy $E_Z = g\mu_B B$ in an applied magnetic field.

Single-qubit gates are performed via electron spin resonance (ESR) — applying an oscillating magnetic field at the Larmor frequency — or, more commonly in modern implementations, via electric-dipole spin resonance (EDSR), which uses an oscillating electric field combined with spin-orbit coupling or a micromagnet field gradient to drive spin rotations electrically. Electric driving is strongly preferred because it can be delivered through existing gate electrodes and is far easier to localize to individual qubits.

Two-qubit gates exploit the Heisenberg exchange interaction $J(t)$ between neighboring dots, controlled by the tunnel barrier gate voltage. A $\sqrt{\text{SWAP}}$ gate — the exchange interaction applied for a calibrated duration — is a universal two-qubit entangling gate.

The major materials platforms are:
- **Si/SiGe heterostructures**: lower spin-orbit coupling, longer $T_2$, isotopic purification ($^{28}\text{Si}$) removes nuclear spin noise.
- **Si MOS (metal-oxide-semiconductor)**: CMOS-compatible fabrication, sharp interfaces.
- **Ge/SiGe hole spin qubits**: strong spin-orbit coupling enables all-electric control without micromagnets, but shorter coherence.
- **GaAs**: historically first demonstrations, but nuclear spin bath limits $T_2$ to ~μs without dynamical decoupling.


## Figure

![[spin-qubit-figure.png]]

## Hamiltonian

Single spin in a magnetic field with exchange coupling to a neighbor:

$$H = \frac{1}{2}g\mu_B B\,\sigma_z + J(t)\,\mathbf{S}_1 \cdot \mathbf{S}_2$$

where $g$ is the electron $g$-factor, $\mu_B$ is the Bohr magneton, $B$ is the applied field, and $J(t)$ is the exchange coupling controlled by the inter-dot barrier gate voltage:

$$J \propto \frac{4t_c^2}{U}$$

with $t_c$ the tunnel coupling and $U$ the on-site Coulomb repulsion. In the Hubbard model limit, the two-electron, two-dot Hamiltonian is:

$$H = \sum_\sigma \epsilon_\sigma (n_{L\sigma} + n_{R\sigma}) + t_c\sum_\sigma(c^\dagger_{L\sigma}c_{R\sigma} + \text{h.c.}) + U\sum_i n_{i\uparrow}n_{i\downarrow}$$

## Motivation

Semiconductor spin qubits promise integration with existing CMOS fabrication infrastructure, enabling potential scaling to millions of qubits using industrial foundry processes. The electron spin is naturally a two-level system with weak coupling to the solid-state environment (especially in isotopically purified $^{28}\text{Si}$, where the nuclear spin bath is eliminated). Qubit pitches of $\sim 100\,\text{nm}$ are orders of magnitude smaller than superconducting or trapped-ion qubits.

## Key Findings

- Loss-DiVincenzo (1998) proposed single-spin qubits with exchange-based two-qubit gates.
- Isotopic purification of silicon ($^{28}\text{Si}$) eliminates hyperfine decoherence, achieving $T_2^* > 100\,\mu\text{s}$.
- Single-qubit gate fidelities $> 99.9\%$ demonstrated in $^{28}\text{Si}$ (Yoneda et al. 2018; Yang et al. 2019).
- Two-qubit gate fidelities $> 99.5\%$ demonstrated (Noiri et al. 2022; Xue et al. 2022; Mills et al. 2022).
- Six-qubit silicon processors demonstrated (Philips et al. 2022).
- Above-threshold quantum error correction demonstrated in spin qubits (2024).
- CMOS-compatible fabrication demonstrated at Intel, imec, and CEA-Leti.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–50 s | Spin relaxation in Si at ~100 mK | [Zwanenburg et al. 2013](https://doi.org/10.1103/RevModPhys.85.961) |
| $T_2^*$ | 1–120 μs | $^{28}$Si; GaAs ~10 ns without echo | — |
| $T_2$ (echo) | 1–28 ms | $^{28}$Si with Hahn echo | — |
| 1Q gate fidelity | 99.9–99.96% | $^{28}$Si, randomized benchmarking | [Yoneda 2018](https://doi.org/10.1038/s41565-017-0014-x) |
| 2Q gate fidelity | 99.5–99.8% | Exchange-based $\sqrt{\text{SWAP}}$ | [Noiri 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| Readout fidelity | 97–99.5% | Spin-to-charge conversion + charge sensor | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| Gate time (1Q) | 50 ns – 1 μs | EDSR or ESR | — |
| Gate time (2Q) | 5–200 ns | Exchange pulse | — |
| Qubit pitch | ~80–150 nm | Gate-defined dot spacing | — |
| Operating temperature | 20 mK – 1 K | Hot-electron demonstrations at 1+ K | — |
| Connectivity | Nearest-neighbor | Exchange coupling between adjacent dots | — |


## Extracted Figures

![[spin-qubit-paper-fig-1.png]]

![[spin-qubit-paper-fig-2.png]]

## Linked Papers
- [[loss-divincenzo-1998-quantum-dots]]

## Related Entries

- [[loss-divincenzo-qubit]]
- [[singlet-triplet-qubit]]
- [[exchange-only-qubit]]
- [[aeon-qubit]]
- [[semiconductor-charge-qubit]]
- [[kane-qubit]]
