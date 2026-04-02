---
title: Spin Qubit (Loss-DiVincenzo)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 1998
first_demonstrated_year: 2004
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
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[spin-qubit-figure.png]]

## Description

The semiconductor spin qubit, proposed by Loss and DiVincenzo in 1998, encodes quantum information in the spin state of a single electron (or hole) confined in a gate-defined quantum dot. The qubit states are the spin-up $|\!\uparrow\rangle$ and spin-down $|\!\downarrow\rangle$ states of the electron, split by the Zeeman energy $E_Z = g\mu_B B$ in an applied magnetic field.

Single-qubit gates are performed via electron spin resonance (ESR) — applying an oscillating magnetic field at the Larmor frequency — or, more commonly in modern implementations, via **electric-dipole spin resonance (EDSR)**, which uses an oscillating electric field combined with spin-orbit coupling or a micromagnet field gradient to drive spin rotations electrically. Electric driving is strongly preferred because it can be delivered through existing gate electrodes and is far easier to localize to individual qubits.

Two-qubit gates exploit the **Heisenberg exchange interaction** $J(t)$ between neighboring dots, controlled by the tunnel barrier gate voltage. A $\sqrt{\text{SWAP}}$ gate — the exchange interaction applied for a calibrated duration — is a universal two-qubit entangling gate.

The major materials platforms are:
- **Si/SiGe heterostructures**: lower spin-orbit coupling, longer $T_2$, isotopic purification ($^{28}\text{Si}$) removes nuclear spin noise.
- **Si MOS (metal-oxide-semiconductor)**: CMOS-compatible fabrication, sharp interfaces.
- **Ge/SiGe hole spin qubits**: strong spin-orbit coupling enables all-electric control without micromagnets, but shorter coherence.
- **GaAs**: historically first demonstrations, but nuclear spin bath limits $T_2$ to ~μs without dynamical decoupling.

## Hamiltonian

Single spin in a magnetic field with exchange coupling to a neighbor:

$$H = \frac{1}{2}g\mu_B B\,\sigma_z + J(t)\,\mathbf{S}_1 \cdot \mathbf{S}_2$$

where $g$ is the electron $g$-factor, $\mu_B$ is the Bohr magneton, $B$ is the applied field, and $J(t)$ is the exchange coupling controlled by the inter-dot barrier gate voltage:

$$J \propto \frac{4t_c^2}{U}$$

with $t_c$ the tunnel coupling and $U$ the on-site Coulomb repulsion. In the Hubbard model limit, the two-electron, two-dot Hamiltonian is:

$$H = \sum_\sigma \epsilon_\sigma (n_{L\sigma} + n_{R\sigma}) + t_c\sum_\sigma(c^\dagger_{L\sigma}c_{R\sigma} + \text{h.c.}) + U\sum_i n_{i\uparrow}n_{i\downarrow}$$

## Motivation

Semiconductor spin qubits promise integration with existing CMOS fabrication infrastructure, enabling potential scaling to millions of qubits using industrial foundry processes. The electron spin is naturally a two-level system with weak coupling to the solid-state environment (especially in isotopically purified $^{28}\text{Si}$, where the nuclear spin bath is eliminated). Qubit pitches of $\sim 100\,\text{nm}$ are orders of magnitude smaller than superconducting or trapped-ion qubits.

## Experimental Status

**Original proposal — Loss and DiVincenzo (1998):**
- Proposed single-spin qubits in gate-defined quantum dots with exchange-based two-qubit gates
- Established the foundational architecture for semiconductor quantum computing

**Isotopic purification breakthrough:**
- Isotopic purification of silicon ($^{28}\text{Si}$) eliminates hyperfine decoherence, achieving $T_2^* > 100\,\mu\text{s}$

**Single-qubit gate fidelities — Yoneda et al. (2018):**
- Single-qubit gate fidelities $> 99.9\%$ demonstrated in $^{28}\text{Si}$ quantum dots
- Coherence limited by charge noise, not magnetic noise

**Two-qubit gate fidelities (2022):**
- Noiri et al. (2022): Fast universal quantum gate above the fault-tolerance threshold in silicon, $> 99.5\%$ two-qubit fidelity
- Xue et al. (2022): Quantum logic with spin qubits crossing the surface code threshold
- Mills et al. (2022): Two-qubit silicon quantum processor with operation fidelity exceeding 99%

**Multi-qubit processors — Philips et al. (2022):**
- Universal control of a six-qubit quantum processor in silicon
- Demonstrated all-to-all connectivity within the six-qubit register

**Error correction milestone (2024):**
- Above-threshold quantum error correction demonstrated in spin qubits

**CMOS-foundry threshold — Steinacker, Stuyck et al. / Diraq & imec (2025):**
- First 300mm foundry-fabricated silicon spin qubits exceeding fault-tolerance threshold
- SPAM >99.9%, 1Q and 2Q fidelities >99%, $T_1$ up to 9.5 s

**11-qubit atom processor — Edlbauer, Wang et al. / SQC (2025):**
- 9 nuclear + 2 electron spin qubits in precision-placed phosphorus donors
- 1Q fidelity up to 99.99% (nuclear), 2Q CROT 99.64%

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–50 s | Spin relaxation in Si at ~100 mK | [Zwanenburg et al. 2013](https://doi.org/10.1103/RevModPhys.85.961) |
| $T_2^*$ | 1–120 μs | $^{28}$Si; GaAs ~10 ns without echo | — |
| $T_2$ (echo) | 1–28 ms | $^{28}$Si with Hahn echo | — |
| 1Q gate fidelity | 99.9–99.96% | $^{28}$Si, randomized benchmarking | [Yoneda et al. 2018](https://doi.org/10.1038/s41565-017-0014-x) |
| 2Q gate fidelity | 99.5–99.8% | Exchange-based $\sqrt{\text{SWAP}}$ | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| Readout fidelity | 97–99.5% | Spin-to-charge conversion + charge sensor | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| Gate time (1Q) | 50 ns – 1 μs | EDSR or ESR | — |
| Gate time (2Q) | 5–200 ns | Exchange pulse | — |
| Qubit pitch | ~80–150 nm | Gate-defined dot spacing | — |
| Operating temperature | 20 mK – 1 K | Hot-electron demonstrations at 1+ K | — |
| Connectivity | Nearest-neighbor | Exchange coupling between adjacent dots | — |

## Scaling Considerations

- Qubit pitch of ~100 nm is orders of magnitude smaller than superconducting (~mm) or trapped-ion (~μm) qubits
- CMOS foundry compatibility enables potential mass production using existing semiconductor infrastructure
- Nearest-neighbor connectivity requires routing strategies for non-local gates
- Cryogenic CMOS control electronics co-integrated on-chip is an active research frontier
- Hot-qubit operation above 1 K would dramatically reduce cooling requirements

## References

### Original proposal
- D. Loss and D. P. DiVincenzo, "Quantum computation with quantum dots," [Phys. Rev. A 57, 120 (1998)](https://doi.org/10.1103/PhysRevA.57.120) · [arXiv:cond-mat/9701055](https://arxiv.org/abs/cond-mat/9701055)

### Single-qubit gates
- J. Yoneda et al., "A quantum-dot spin qubit with coherence limited by charge noise and fidelity higher than 99.9%," [Nat. Nanotechnol. 13, 102 (2018)](https://doi.org/10.1038/s41565-017-0014-x)

### Two-qubit gates
- A. Noiri et al., "Fast universal quantum gate above the fault-tolerance threshold in silicon," [Nature 601, 338 (2022)](https://doi.org/10.1038/s41586-021-04182-y)
- X. Xue et al., "Quantum logic with spin qubits crossing the surface code threshold," [Nature 601, 343 (2022)](https://doi.org/10.1038/s41586-021-04273-w)
- A. R. Mills et al., "Two-qubit silicon quantum processor with operation fidelity exceeding 99%," [Sci. Adv. 8, eabn5130 (2022)](https://doi.org/10.1126/sciadv.abn5130)

### Multi-qubit processors
- S. G. J. Philips et al., "Universal control of a six-qubit quantum processor in silicon," [Nature 609, 919 (2022)](https://doi.org/10.1038/s41586-022-05117-x)

### Reviews
- F. A. Zwanenburg et al., "Silicon quantum electronics," [Rev. Mod. Phys. 85, 961 (2013)](https://doi.org/10.1103/RevModPhys.85.961)

## Linked Papers

- [[loss-divincenzo-1998-quantum-dots]]
- [[noiri-2022-silicon-1q-fidelity]]
- [[philips-2022-six-qubit-silicon]]
- [[steinacker-2025-300mm-foundry-silicon]]
- [[edlbauer-2025-11-qubit-atom-processor]]

## Related Entries

- [[loss-divincenzo-qubit]] — detailed entry on the original proposal
- [[singlet-triplet-qubit]] — two-electron variant using singlet-triplet encoding
- [[exchange-only-qubit]] — three-electron all-exchange variant
- [[aeon-qubit]] — always-on exchange-only sweet-spot variant
- [[semiconductor-charge-qubit]] — charge-degree-of-freedom encoding
- [[kane-qubit]] — donor-based spin qubit in silicon
- [[silicon-spin-qubit]] — detailed entry on silicon-specific implementations
- [[hole-spin-qubit]] — hole-spin variant with intrinsic spin-orbit coupling
- [[hybrid-qubit]] — spin-charge hybrid encoding
