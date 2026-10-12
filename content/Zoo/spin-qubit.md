---
title: Spin Qubit (Loss-DiVincenzo)
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
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
last_updated: '2026-10-12'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-10-12
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/spin-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-10-12"
figure_reviewed_at: "2026-10-12T14:00:00+00:00"
---

> **Scope:** This is the umbrella entry for gate-defined semiconductor spin qubits across electron and hole platforms. See [[loss-divincenzo-qubit]] for the original single-electron proposal and [[silicon-spin-qubit]] for the silicon-specific implementation landscape.

## Figure

![[spin-qubit-figure.png]]

## Description

The semiconductor spin qubit, proposed by Loss and DiVincenzo in 1998, encodes quantum information in the spin state of a single electron (or hole) confined in a gate-defined quantum dot. The qubit states are the spin-up $|\!\uparrow\rangle$ and spin-down $|\!\downarrow\rangle$ states of the electron, split by the Zeeman energy $E_Z = g\mu_B B$ in an applied magnetic field.

Single-qubit gates are performed via electron spin resonance (ESR) — applying an oscillating magnetic field at the Larmor frequency — or, more commonly in modern implementations, via **electric-dipole spin resonance (EDSR)**, which uses an oscillating electric field combined with spin-orbit coupling or a micromagnet field gradient to drive spin rotations electrically. Electric driving is strongly preferred because it can be delivered through existing gate electrodes and is far easier to localize to individual qubits.

Two-qubit gates exploit the **Heisenberg exchange interaction** $J(t)$ between neighboring dots, controlled by the tunnel-barrier voltage. A calibrated exchange pulse can implement $\sqrt{\mathrm{SWAP}}$-family operations; with Zeeman gradients and single-qubit phase control, modern devices also implement controlled-phase or controlled-rotation gates.

The major materials platforms are:
- **Si/SiGe heterostructures**: lower spin-orbit coupling, longer $T_2$, and isotopic purification ($^{28}\text{Si}$) that strongly suppresses nuclear-spin noise.
- **Si MOS (metal-oxide-semiconductor)**: CMOS-compatible fabrication, sharp interfaces.
- **Ge/SiGe hole spin qubits**: strong spin-orbit coupling enables all-electric control without micromagnets, but shorter coherence.
- **GaAs**: historically first demonstrations, but nuclear spin bath limits $T_2$ to ~μs without dynamical decoupling.

## Hamiltonian

A representative two-spin Hamiltonian is

$$H = \sum_{i=1}^{2}\frac{g_i\mu_B}{2}\,\mathbf{B}_i\cdot\boldsymbol{\sigma}_i
+ \frac{J(t)}{4}\,\boldsymbol{\sigma}_1\cdot\boldsymbol{\sigma}_2 + H_{\mathrm{drive}}(t),$$

where $g_i$ is the effective electron or hole $g$-factor, $\mu_B$ is the Bohr magneton, $\mathbf B_i$ includes static and local-gradient fields, and $H_{\mathrm{drive}}$ represents ESR or EDSR control. The exchange term uses $\mathbf S_i=\boldsymbol{\sigma}_i/2$ and is controlled by the inter-dot tunnel barrier. In the symmetric, singly occupied two-site Hubbard limit,

$$J \simeq \frac{4t_c^2}{U},$$

with $t_c$ the tunnel coupling and $U$ the on-site charging energy. Away from zero detuning $\varepsilon$, the leading superexchange becomes $J\simeq4t_c^2U/(U^2-\varepsilon^2)$ before multiorbital and valley corrections. A minimal two-dot Hubbard model is

$$H_{\mathrm{Hub}} = \sum_{i=L,R}\epsilon_i n_i
-t_c\sum_\sigma\left(c^\dagger_{L\sigma}c_{R\sigma}+\mathrm{h.c.}\right)
+U\sum_{i=L,R}n_{i\uparrow}n_{i\downarrow}+H_Z.$$

## Motivation

Semiconductor spin qubits promise integration with existing CMOS fabrication infrastructure, enabling potential scaling to millions of qubits using industrial foundry processes. The electron spin is naturally a two-level system with weak coupling to the solid-state environment (especially in isotopically purified $^{28}\text{Si}$, where the nuclear spin bath is eliminated). Qubit pitches of $\sim 100\,\text{nm}$ are orders of magnitude smaller than superconducting or trapped-ion qubits.

## Experimental Status

**Original proposal — Loss and DiVincenzo (1998):**
- Proposed single-spin qubits in gate-defined quantum dots with exchange-based two-qubit gates
- Established the foundational architecture for semiconductor quantum computing

**Single-qubit gate fidelities — Yoneda et al. (2018):**
- Single-qubit gate fidelities $> 99.9\%$ demonstrated in $^{28}\text{Si}$ quantum dots
- Coherence limited by charge noise, not magnetic noise

**Two-qubit gate fidelities (2022):**
- Noiri et al. (2022): Fast universal quantum gate above the fault-tolerance threshold in silicon, $> 99.5\%$ two-qubit fidelity
- Xue et al. (2022): Quantum logic with spin qubits crossing the surface code threshold
- Mills et al. (2022): Two-qubit silicon quantum processor with operation fidelity exceeding 99%

**Multi-qubit processors — Philips et al. (2022):**
- Universal control of a six-qubit quantum processor in silicon
- Operated a linear nearest-neighbor array and prepared two- and three-spin entangled states across it; this was not an all-to-all-connected device

**High-temperature operation — Huang et al. (2024):**
- Operated a silicon two-qubit processor above $1\,\mathrm{K}$ with 99.85% single-qubit Clifford fidelity, 98.92% two-qubit fidelity, and initialization/readout fidelity up to 99.34%

**Repeatable MOS entangling gates — Tanttu et al. (2024):**
- Demonstrated two-qubit gate fidelity above 99% across multiple SiMOS devices and extended runs, with an average interleaved-RB fidelity of 99.17% across three devices

**300-mm foundry unit cells — Steinacker et al. (2025):**
- Demonstrated all basic operations above 99% across four foundry-fabricated two-qubit devices, with CZ fidelity up to 99.56(6)% and SPAM fidelity up to 99.95(8)%

**Eight-qubit foundry array — Nickl et al. (2026):**
- Tuned and coherently controlled all eight spins in a 300-mm SiMOS linear array, with $T_2^*$ up to 41(2) μs and Hahn-echo coherence up to 1.31(4) ms; the work calibrated exchange in one pair but did not yet demonstrate a high-fidelity entangling gate across the array

**Single-qubit record — Takeda et al. (2026, preprint):**
- Reported a $\pi/2$ gate fidelity of 99.99920(2)% after suppressing reservoir-induced driven decoherence and off-resonant-drive benchmarking artifacts

Physical gate fidelities above a nominal surface-code target are not themselves a demonstration of quantum error correction. As of this audit, no gate-defined semiconductor spin-qubit processor has demonstrated below-threshold or beyond-break-even logical QEC.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | Up to 9.5 s | Foundry-fabricated SiMOS unit cells | [Steinacker et al. 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| $T_2^*$ | Up to 40.6 μs | Foundry-fabricated SiMOS unit cells | [Steinacker et al. 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| $T_2$ (Hahn echo) | Up to 1.9 ms | Foundry-fabricated SiMOS unit cells | [Steinacker et al. 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| 1Q gate fidelity | 99.99920(2)% | $\pi/2$ gate; 2026 preprint | [Takeda et al. 2026](https://arxiv.org/abs/2608.11072) |
| 2Q CZ fidelity | Up to 99.56(6)% | Gate-set tomography across 300-mm foundry devices | [Steinacker et al. 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| SPAM fidelity | Up to 99.95(8)% | Foundry SiMOS unit cell | [Steinacker et al. 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| Operation above 1 K | 99.85% 1Q; 98.92% 2Q | Two-qubit SiMOS processor | [Huang et al. 2024](https://doi.org/10.1038/s41586-024-07160-2) |

## Scaling Considerations

- Qubit pitch of ~100 nm is orders of magnitude smaller than superconducting (~mm) or trapped-ion (~μm) qubits
- CMOS foundry compatibility enables potential mass production using existing semiconductor infrastructure
- Nearest-neighbor connectivity requires routing strategies for non-local gates
- Cryogenic CMOS control electronics co-integrated on-chip is an active research frontier
- High-fidelity operation above 1 K has been demonstrated, but scaling must still manage control-electronics heat load, initialization, and readout

## References

### Original proposal
- D. Loss and D. P. DiVincenzo, "Quantum computation with quantum dots," [Phys. Rev. A 57, 120 (1998)](https://doi.org/10.1103/PhysRevA.57.120)

### Single-qubit gates
- J. Yoneda et al., "A quantum-dot spin qubit with coherence limited by charge noise and fidelity higher than 99.9%," [Nat. Nanotechnol. 13, 102 (2018)](https://doi.org/10.1038/s41565-017-0014-x)

### Two-qubit gates
- A. Noiri et al., "Fast universal quantum gate above the fault-tolerance threshold in silicon," [Nature 601, 338 (2022)](https://doi.org/10.1038/s41586-021-04182-y)
- X. Xue et al., "Quantum logic with spin qubits crossing the surface code threshold," [Nature 601, 343 (2022)](https://doi.org/10.1038/s41586-021-04273-w)
- A. R. Mills et al., "Two-qubit silicon quantum processor with operation fidelity exceeding 99%," [Sci. Adv. 8, eabn5130 (2022)](https://doi.org/10.1126/sciadv.abn5130)

### Multi-qubit processors
- S. G. J. Philips et al., "Universal control of a six-qubit quantum processor in silicon," [Nature 609, 919 (2022)](https://doi.org/10.1038/s41586-022-05117-x)

### Recent scaling and control milestones
- J. Y. Huang et al., "High-fidelity spin qubit operation and algorithmic initialization above 1 K," [Nature **627**, 772 (2024)](https://doi.org/10.1038/s41586-024-07160-2)
- T. Tanttu et al., "Assessment of the errors of high-fidelity two-qubit gates in silicon quantum dots," [Nature Physics **20**, 1804 (2024)](https://doi.org/10.1038/s41567-024-02614-w) — [arXiv:2303.04090](https://arxiv.org/abs/2303.04090)
- P. Steinacker et al., "Industry-compatible silicon spin-qubit unit cells exceeding 99% fidelity," [Nature **646**, 81 (2025)](https://doi.org/10.1038/s41586-025-09531-9) — [arXiv:2410.15590](https://arxiv.org/abs/2410.15590)
- A. Nickl et al., "Eight-qubit operation of a 300 mm SiMOS foundry-fabricated device," [Nature Communications **17**, 5878 (2026)](https://doi.org/10.1038/s41467-026-74597-6) — [arXiv:2512.10174](https://arxiv.org/abs/2512.10174)
- K. Takeda et al., "Assessing fidelity-limiting factors and achieving single-qubit gate fidelity beyond 99.999% in driven silicon spin qubits," [arXiv:2608.11072 (2026)](https://arxiv.org/abs/2608.11072)

### Reviews
- F. A. Zwanenburg et al., "Silicon quantum electronics," [Rev. Mod. Phys. 85, 961 (2013)](https://doi.org/10.1103/RevModPhys.85.961)

## Linked Papers

- [[loss-divincenzo-1998-quantum-dots]]
- [[divincenzo-2000-exchange-only]]
- [[hendrickx-2020-fast-two-qubit-logic-holes-germanium]]
- [[hendrickx-2021-ge-4qubit]]
- [[kane-1998-silicon-nuclear-spin]]
- [[martins-2016-symmetric-exchange-gates]]
- [[medford-2013-rx-qubit]]
- [[mills-2022-qubit-silicon-processor]]
- [[noiri-2022-silicon-1q-fidelity]]
- [[petersson-2010-semiconductor-charge]]
- [[petit-2020-hot-silicon]]
- [[petta-2005-singlet-triplet]]
- [[philips-2022-universal-control-six]]
- [[reed-2016-reduced-sensitivity-charge-noise]]
- [[scappucci-2021-ge-review]]
- [[shi-2012-fast-hybrid-double-dot]]
- [[shim-2016-aeon]]
- [[steinacker-2025-300mm-foundry-silicon]]
- [[huang-2024-high-fidelity-spin-qubit-above-1k]]
- [[tanttu-2024-errors-high-fidelity-two-qubit-gates]]
- [[nickl-2026-eight-qubit-foundry-device]]
- [[veldhorst-2014-silicon-coherence]]
- [[xue-2022-logic-spin-qubits]]
- [[yoneda-2018-dot-spin-qubit]]
- [[zwanenburg-2013-silicon-electronics]]
- [[takeda-2026-assessing-fidelity-limiting-factors-and]]

## Evergreen context

- [[divincenzo-criteria]] — this is the platform-level checklist that makes spin qubits legible across coherence, control, readout, and scalability at once
- [[spin-orbit-coupling-for-qubit-control]] — explains why modern devices favor electrically driven EDSR over local oscillating magnetic fields
- [[exchange-interaction-in-quantum-dots]] — the device-and-materials view of how neighboring dots generate the native nearest-neighbor coupling resource
- [[heisenberg-exchange-in-quantum-dots]] — the Hamiltonian-first lens for why barrier pulses turn that resource into partial-SWAP or exchange-phase gates rather than arbitrary two-qubit control
- [[sqrt-swap-as-universal-gate]] — the gate-level consequence of pulsing that exchange interaction for the right area

## Related Entries

- [[loss-divincenzo-qubit]] — detailed entry on the original proposal
- [[silicon-spin-qubit]] — silicon-specific materials, devices, and benchmarks
- [[hole-spin-qubit]] — valence-band spin qubits with strong spin-orbit coupling
- [[singlet-triplet-qubit]] — two-electron variant using singlet-triplet encoding
- [[exchange-only-qubit]] — three-electron all-exchange variant
- [[aeon-qubit]] — always-on exchange-only sweet-spot variant
- [[semiconductor-charge-qubit]] — charge-degree-of-freedom encoding
- [[kane-qubit]] — donor-based spin qubit in silicon
