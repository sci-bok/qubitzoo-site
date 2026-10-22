---
title: Silicon Spin Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 1998
first_demonstrated_year: 2014
keywords:
- silicon
- Si/SiGe
- Si-MOS
- quantum dot
- spin qubit
- isotopic purification
- valley splitting
influence_score: 0.90
last_updated: '2026-10-22'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-audit-2026-10-22
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/silicon-spin-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-10-22"
figure_reviewed_at: "2026-10-22T14:06:00+00:00"
---

## Figure

![[silicon-spin-qubit-figure.png]]

## Description

The silicon spin qubit encodes quantum information in the spin of a single electron (or hole) confined in a gate-defined quantum dot fabricated on a silicon substrate (Si/SiGe heterostructure or Si-MOS). Silicon is especially well suited to spin qubits because isotopic purification (²⁸Si) strongly suppresses hyperfine noise from nuclear spins, enabling coherence times exceeding 10 ms — orders of magnitude beyond III-V semiconductors.

Gate-defined quantum dots in silicon confine individual electrons using electrostatic potentials created by nanoscale metallic gates on a Si/SiGe or Si-MOS stack. Qubit states are the spin-up and spin-down states of a single electron, split by an external magnetic field (Zeeman splitting, typically ~14–42 GHz at 0.5–1.5 T, with $g \approx 2$ giving ~28 GHz/T). Single-qubit gates use **electric dipole spin resonance** (EDSR) via a micromagnet gradient or oscillating gate voltages exploiting spin-orbit coupling. Two-qubit gates use the **exchange interaction** $J$ between neighboring dots, controlled by barrier gate voltages.

Silicon's key advantage is the availability of isotopically enriched ²⁸Si, which has zero nuclear spin. In natural silicon (~4.7% ²⁹Si), hyperfine coupling is an important dephasing channel. With enrichment to >99.99% ²⁸Si, $T_2^*$ can improve from ~1 μs to >100 μs, and $T_2$ (Hahn echo) can exceed 10 ms. Residual nuclear spins, charge noise converted to magnetic noise by field gradients, and control-induced shifts still limit practical devices.

The materials system also benefits from decades of CMOS fabrication infrastructure, making silicon one of the strongest candidates for industrial-scale qubit manufacturing.

## Hamiltonian

Single-qubit Hamiltonian:

$$H_{1Q} = \frac{1}{2}g\mu_B B_0 \sigma_z + \frac{1}{2}g\mu_B B_{\text{ac}}(t)\sigma_x$$

Two-qubit exchange Hamiltonian:

$$H_{2Q} = J(V_B)\,\mathbf{S}_1 \cdot \mathbf{S}_2$$

where $J(V_B)$ is the exchange coupling controlled by the barrier gate voltage $V_B$, tunable from <1 kHz to >100 MHz. In the $|{\uparrow\downarrow}\rangle$, $|{\downarrow\uparrow}\rangle$ subspace, this generates a $\sqrt{\text{SWAP}}$ gate. A controlled-phase (CZ) gate is obtained when $J \ll \Delta E_Z$ (the Zeeman energy difference between qubits), which converts the exchange into an effective Ising $ZZ$ interaction.

Valley-mixing Hamiltonian (silicon-specific), in the bulk-valley basis $\{|z\rangle,|\bar z\rangle\}$:

$$H_{\text{valley}} = \Delta_c |z\rangle\langle \bar{z}| + \Delta_c^* |\bar z\rangle\langle z|,$$

where $\Delta_c$ is the interface-induced intervalley coupling. The energy splitting between the two valley eigenstates is $E_v=2|\Delta_c|$ (often itself denoted $\Delta_v$). Reported values are strongly device-dependent, commonly spanning tens to hundreds of μeV and sometimes approaching the meV scale; insufficient or spatially variable valley splitting can cause leakage and reduce device yield.

## Motivation

- **CMOS compatibility:** Fabrication leverages existing semiconductor foundry processes — the only qubit technology with a direct path to billion-transistor-scale manufacturing.
- **Isotopic purification:** Enriched ²⁸Si eliminates hyperfine noise, giving coherence times 3–4 orders of magnitude better than GaAs spin qubits.
- **Small footprint:** Quantum dot pitch ~60–100 nm enables extremely dense qubit arrays.
- **High-temperature operation:** Demonstrated at 1 K (vs. 10–20 mK for superconducting qubits), significantly reducing cryogenic overhead.
- **Industry backing:** Intel, GlobalFoundries, imec, and UNSW/SQC actively pursuing silicon spin qubits at foundry scale.

## Experimental Status

**First single-electron spin qubit in Si — Veldhorst et al. (2014):**
- Demonstrated a single-qubit gate with fault-tolerant control fidelity of 99.6% in isotopically enriched ²⁸Si MOS device
- $T_2^*$ = 120 μs, $T_2$ (Hahn echo) = 28 ms

**Above-threshold two-qubit gates — Noiri et al. (2022):**
- Single-qubit gate fidelity 99.8%, two-qubit gate fidelity 99.5% in ²⁸Si/SiGe
- Exchange-based CZ gate via barrier control
- A complementary same-issue experiment by Xue et al. reported single- and two-qubit gate fidelities all above 99.5% using gate-set tomography

**Hot silicon qubits — Petit et al. (2020):**
- Universal quantum logic at 1.1 K operating temperature
- Single-qubit fidelities up to 99.3%; exchange-tunable controlled rotations demonstrated, but the paper did not report a >98% measured two-qubit randomized-benchmarking fidelity

**Six-qubit processor — Philips et al. (2022):**
- 6-qubit linear array in ²⁸Si/SiGe with nearest-neighbor exchange coupling and universal control

**Industry-compatible CMOS qubits — Steinacker, Stuyck et al. / Diraq & imec (2025):**
- First 300mm foundry-fabricated silicon spin qubits exceeding fault-tolerance threshold
- SPAM fidelity >99.9%, 1Q and 2Q gate fidelities >99%
- T₁ up to 9.5 s, T₂(Hahn) = 1.9 ms in isotopically enriched ²⁸Si

**11-qubit atom processor — Edlbauer, Wang et al. / SQC (2025):**
- 9 nuclear + 2 electron spin qubits in precision-placed phosphorus donors
- 1Q gate fidelity up to 99.99% (nuclear spin), 2Q CROT fidelity 99.64%
- Scaling demonstrated without fidelity degradation

**Foundry-scale arrays and integrated processors (2026):**
- Nickl et al. coherently operated an eight-spin linear SiMOS array fabricated in a 300 mm foundry process, with $T_2^*$ up to 41(2) μs and Hahn-echo coherence up to 1.31(4) ms
- Members of the HRL Quantum Team and Collaborators integrated a 4 K cryo-CMOS controller with a 54-dot Si/SiGe chip configurable for up to 18 exchange-only qubits; they reported a mean 1Q error of $1.7\times10^{-4}$, mean CNOT error of $3.5\times10^{-3}$, and a lowest reproducible CNOT error of $9\times10^{-4}$
- Undseth et al. demonstrated a sparse five-qubit processor with a spin-shuttling bus, weight-four $X$- and $Z$-parity checks, and genuine five-qubit GHZ entanglement

**Parallel high-fidelity control — Wu et al. (2026):**
- Primitive 1Q gate fidelities exceeded 99.99% across a five-qubit ²⁸Si/SiGe array, with some approaching 99.999%
- Simultaneous operation preserved >99.99% fidelity for up to three qubits and ≥99.9% for all five after compensating drive-induced a.c.-Stark shifts

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q primitive-gate fidelity | >99.99% for all five qubits; some approach 99.999% | Individually addressed EDSR in a ²⁸Si/SiGe five-qubit array | [Wu et al. 2026](https://doi.org/10.1038/s41567-026-03466-2) |
| Parallel 1Q fidelity | >99.99% (up to 3 qubits); ≥99.9% (5 qubits) | Shared control line with pairwise a.c.-Stark calibration | [Wu et al. 2026](https://doi.org/10.1038/s41567-026-03466-2) |
| 1Q gate fidelity (nuclear) | 99.99% | P donor nuclear spin in ²⁸Si | [Edlbauer, Wang et al. / SQC 2025](https://arxiv.org/abs/2506.03567) |
| 2Q gate fidelity | 99.5% | Exchange-based CZ between single-spin qubits, Si/SiGe | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| CNOT fidelity (exchange-only) | 99.65% mean; 99.91% best reproducible | Three-spin encoded qubits under cryo-CMOS control | [HRL Quantum Team and Collaborators 2026](https://doi.org/10.1038/s41586-026-10754-7) |
| 2Q gate fidelity (CROT) | 99.64% | Electron exchange CROT, P donors | [Edlbauer, Wang et al. / SQC 2025](https://arxiv.org/abs/2506.03567) |
| SPAM fidelity | >99.9% | 300mm CMOS foundry Si-MOS | [Steinacker, Stuyck et al. / Diraq & imec 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| T₂* | 120 μs | Enriched ²⁸Si, single electron | [Veldhorst et al. 2014](https://doi.org/10.1038/nnano.2014.216) |
| T₂ (Hahn echo) | 28 ms | Enriched ²⁸Si MOS | [Veldhorst et al. 2014](https://doi.org/10.1038/nnano.2014.216) |
| T₁ | 9.5 s | 300mm CMOS foundry Si-MOS | [Steinacker, Stuyck et al. / Diraq & imec 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| Operating temperature | 1–1.2 K demonstrated | Higher T eases cryogenic requirements | [Petit et al. 2020](https://doi.org/10.1038/s41586-020-2170-7) |
| Operated foundry array | 8 single-spin qubits | 300 mm SiMOS linear array | [Nickl et al. 2026](https://doi.org/10.1038/s41467-026-74597-6) |
| Integrated encoded processor | 54 dots; up to 18 exchange-only qubits | 3 × 6 architecture with 4 K cryo-CMOS control | [HRL Quantum Team and Collaborators 2026](https://doi.org/10.1038/s41586-026-10754-7) |
| Demonstrated gate pitch | 70–90 nm | 70 nm in the HRL Si/SiGe processor; 90 nm in the foundry SiMOS array | [HRL 2026](https://doi.org/10.1038/s41586-026-10754-7); [Nickl et al. 2026](https://doi.org/10.1038/s41467-026-74597-6) |

## Scaling Considerations

- **CMOS compatibility:** Fabrication leverages existing semiconductor foundry processes (Intel, GlobalFoundries, imec).
- **Valley splitting variability:** Atomic-scale interface roughness causes dot-to-dot variation in valley splitting, currently a yield limiter.
- **Wiring density:** Each dot requires ~3–5 DC gates + RF lines. Crossbar architectures and shared gate control are active research areas.
- **Operating temperature:** Demonstrations at 1 K (vs. 10–20 mK for superconducting) significantly reduce cryogenic overhead.
- **Largest coherently operated single-spin foundry array:** 8-qubit linear SiMOS device (Nickl et al. 2026); its two-qubit demonstration was limited to one adjacent pair rather than a processor-wide high-fidelity entangling benchmark.
- **Largest integrated encoded-spin chip reported here:** 54 dots configurable for up to 18 exchange-only qubits, with seven qubits used for a distance-5 repetition-code experiment (HRL 2026).
- **Sparse connectivity:** A five-qubit shuttling architecture demonstrated weight-four parity checks and all-to-ancilla connectivity, but its 1.2 μm round-trip shuttle fidelity was 97.7(1)% and remained a major error source (Undseth et al. 2026).
- **Largest demonstrated (donor-based):** 11-qubit atom processor with 9 nuclear + 2 electron spin qubits (SQC, 2025).
- **Industrial fabrication:** Diraq/imec demonstrated fault-tolerant-threshold fidelities on standard 300mm CMOS line (2025).

## References

### Original proposal
- D. Loss and D. P. DiVincenzo, "Quantum computation with quantum dots," [Phys. Rev. A 57, 120 (1998)](https://doi.org/10.1103/PhysRevA.57.120) — [arXiv:cond-mat/9701055](https://arxiv.org/abs/cond-mat/9701055)

### Experimental demonstrations
- M. Veldhorst et al., "An addressable quantum dot qubit with fault-tolerant control-fidelity," [Nat. Nanotechnol. 9, 981 (2014)](https://doi.org/10.1038/nnano.2014.216)
- A. Noiri et al., "Fast universal quantum gate above the fault-tolerance threshold in silicon," [Nature 601, 338 (2022)](https://doi.org/10.1038/s41586-021-04182-y) — [arXiv:2108.02626](https://arxiv.org/abs/2108.02626)
- X. Xue et al., "Quantum logic with spin qubits crossing the surface code threshold," [Nature 601, 343 (2022)](https://doi.org/10.1038/s41586-021-04273-w) — [arXiv:2107.00628](https://arxiv.org/abs/2107.00628)
- L. Petit et al., "Universal quantum logic in hot silicon qubits," [Nature 580, 355 (2020)](https://doi.org/10.1038/s41586-020-2170-7) — [arXiv:1910.05289](https://arxiv.org/abs/1910.05289)
- S. G. J. Philips et al., "Universal control of a six-qubit quantum processor in silicon," [Nature 609, 919 (2022)](https://doi.org/10.1038/s41586-022-05117-x) — [arXiv:2202.09252](https://arxiv.org/abs/2202.09252)
- P. Steinacker, N. D. Stuyck et al., "Industry-compatible silicon spin-qubit unit cells exceeding 99% fidelity," [Nature 646, 81 (2025)](https://doi.org/10.1038/s41586-025-09531-9) — [arXiv:2410.15590](https://arxiv.org/abs/2410.15590)
- H. Edlbauer, J. Wang et al., "An 11-qubit atom processor in silicon," [Nature 648, 569 (2025)](https://doi.org/10.1038/s41586-025-09827-w) — [arXiv:2506.03567](https://arxiv.org/abs/2506.03567)
- A. Nickl et al., "Eight-qubit operation of a 300 mm SiMOS foundry-fabricated device," [Nature Communications 17, 5878 (2026)](https://doi.org/10.1038/s41467-026-74597-6) — [arXiv:2512.10174](https://arxiv.org/abs/2512.10174)
- Members of the HRL Quantum Team and Collaborators, "A digitally controlled silicon quantum processing unit," [Nature 655, 1154 (2026)](https://doi.org/10.1038/s41586-026-10754-7) — [arXiv:2604.16216](https://arxiv.org/abs/2604.16216)
- B. Undseth et al., "Weight-four parity checks in a spin-shuttling architecture," [Nature 655, 1160 (2026)](https://doi.org/10.1038/s41586-026-10766-3)
- Y.-H. Wu et al., "Simultaneous high-fidelity single-qubit gates in a spin qubit array," [Nature Physics (2026)](https://doi.org/10.1038/s41567-026-03466-2) — [arXiv:2507.11918](https://arxiv.org/abs/2507.11918)

## Linked Papers

- [[noiri-2022-silicon-1q-fidelity]]
- [[veldhorst-2014-silicon-coherence]]
- [[petit-2020-hot-silicon]]
- [[philips-2022-universal-control-six]]
- [[steinacker-2025-300mm-foundry-silicon]]
- [[edlbauer-2025-11-qubit-atom-processor]]
- [[nickl-2026-eight-qubit-foundry-device]]
- [[hrl-2026-digitally-controlled-silicon-qpu]]
- [[undseth-2026-weight-four-parity-checks]]
- [[wu-2026-simultaneous-high-fidelity-spin-array]]
- [[golovach-2006-electric-dipole-induced-spin-resonance]]
- [[hendrickx-2020-fast-two-qubit-logic-holes-germanium]]
- [[hendrickx-2021-ge-4qubit]]
- [[jiang-2025-sige-rx-resonator]]
- [[kane-1998-silicon-nuclear-spin]]
- [[loss-divincenzo-1998-quantum-dots]]
- [[nowack-2007-coherent-control-electric-fields]]
- [[reed-2016-reduced-sensitivity-charge-noise]]
- [[scappucci-2021-ge-review]]
- [[shim-2014-bottom-up-sc]]

## Evergreen context

- [[divincenzo-criteria]] — silicon is one of the cleanest examples of a platform competing on every criterion at once: long coherence, high-fidelity gates, scalable fabrication, and qubit-specific readout
- [[spin-orbit-coupling-for-qubit-control]] — clarifies why silicon usually needs micromagnets or synthetic SOC, unlike hole-spin devices
- [[exchange-interaction-in-quantum-dots]] — barrier-tuned exchange remains the standard entangling mechanism in gate-defined silicon dot arrays
- [[heisenberg-exchange-in-quantum-dots]] — useful when the silicon-specific device story has already been absorbed and the remaining question is whether exchange is being used as a $\sqrt{\text{SWAP}}$-style entangler or in the Zeeman-mismatched CZ limit
- [[sqrt-swap-as-universal-gate]] — the cleanest gate-level lens for the short exchange pulses used in neighboring-dot silicon entangling gates

## Related Entries

- [[spin-qubit]] — General spin qubit concept
- [[loss-divincenzo-qubit]] — Original Loss-DiVincenzo proposal
- [[singlet-triplet-qubit]] — Two-electron encoding variant
- [[exchange-only-qubit]] — Three-electron variant with all-electrical control
- [[hole-spin-qubit]] — Hole-spin variant with intrinsic spin-orbit coupling
- [[kane-qubit]] — Donor-based silicon spin qubit
- [[qubit-readout]] — Spin-to-charge conversion, Pauli-blockade, and QND readout methods used in silicon arrays
- [[classical-control]] — Cryogenic-CMOS and shared-line control are central to scaling dense silicon devices
