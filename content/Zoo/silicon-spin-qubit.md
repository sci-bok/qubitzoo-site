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
last_updated: '2026-03-28'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-audit-2026-03-28
---

## Figure

![[silicon-spin-qubit-figure.png]]

## Description

The silicon spin qubit encodes quantum information in the spin of a single electron (or hole) confined in a gate-defined quantum dot fabricated on a silicon substrate (Si/SiGe heterostructure or Si-MOS). Silicon is uniquely suited to spin qubits because isotopic purification (²⁸Si) eliminates hyperfine noise from nuclear spins, enabling coherence times exceeding 10 ms — orders of magnitude beyond III-V semiconductors.

Gate-defined quantum dots in silicon confine individual electrons using electrostatic potentials created by nanoscale metallic gates on a Si/SiGe or Si-MOS stack. Qubit states are the spin-up and spin-down states of a single electron, split by an external magnetic field (Zeeman splitting, typically ~14–42 GHz at 0.5–1.5 T, with $g \approx 2$ giving ~28 GHz/T). Single-qubit gates use **electric dipole spin resonance** (EDSR) via a micromagnet gradient or oscillating gate voltages exploiting spin-orbit coupling. Two-qubit gates use the **exchange interaction** $J$ between neighboring dots, controlled by barrier gate voltages.

Silicon's key advantage is the availability of isotopically enriched ²⁸Si, which has zero nuclear spin. In natural silicon (~4.7% ²⁹Si), hyperfine interaction is the dominant dephasing mechanism. With enrichment to >99.99% ²⁸Si, $T_2^*$ improves from ~1 μs to >100 μs, and $T_2$ (Hahn echo) exceeds 10 ms.

The materials system also benefits from decades of CMOS fabrication infrastructure, making silicon the most plausible path to industrial-scale qubit manufacturing.

## Hamiltonian

Single-qubit Hamiltonian:

$$H_{1Q} = \frac{1}{2}g\mu_B B_0 \sigma_z + \frac{1}{2}g\mu_B B_{\text{ac}}(t)\sigma_x$$

Two-qubit exchange Hamiltonian:

$$H_{2Q} = J(V_B)\,\mathbf{S}_1 \cdot \mathbf{S}_2$$

where $J(V_B)$ is the exchange coupling controlled by the barrier gate voltage $V_B$, tunable from <1 kHz to >100 MHz. In the $|{\uparrow\downarrow}\rangle$, $|{\downarrow\uparrow}\rangle$ subspace, this generates a $\sqrt{\text{SWAP}}$ gate. A controlled-phase (CZ) gate is obtained when $J \ll \Delta E_Z$ (the Zeeman energy difference between qubits), which converts the exchange into an effective Ising $ZZ$ interaction.

Valley splitting Hamiltonian (silicon-specific):

$$H_{\text{valley}} = \Delta_v |z\rangle\langle \bar{z}| + \text{h.c.}$$

where $\Delta_v$ is the valley splitting (typically 0.03–1 meV in Si/SiGe, 0.3–1.5 meV in Si-MOS). Insufficient valley splitting is a yield-limiting factor.

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

**Hot silicon qubits — Petit et al. (2020):**
- Universal quantum logic at 1.1 K operating temperature
- Two-qubit gate fidelity >98% above 1 K

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

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q gate fidelity | 99.8% | EDSR with ²⁸Si/SiGe | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| 1Q gate fidelity (nuclear) | 99.99% | P donor nuclear spin in ²⁸Si | [Edlbauer, Wang et al. / SQC 2025](https://arxiv.org/abs/2506.03567) |
| 2Q gate fidelity | 99.5% | Exchange-based CZ, Si/SiGe | [Noiri et al. 2022](https://doi.org/10.1038/s41586-021-04182-y) |
| 2Q gate fidelity (CROT) | 99.64% | Electron exchange CROT, P donors | [Edlbauer, Wang et al. / SQC 2025](https://arxiv.org/abs/2506.03567) |
| SPAM fidelity | >99.9% | 300mm CMOS foundry Si-MOS | [Steinacker, Stuyck et al. / Diraq & imec 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| T₂* | 120 μs | Enriched ²⁸Si, single electron | [Veldhorst et al. 2014](https://doi.org/10.1038/nnano.2014.216) |
| T₂ (Hahn echo) | 28 ms | Enriched ²⁸Si MOS | [Veldhorst et al. 2014](https://doi.org/10.1038/nnano.2014.216) |
| T₁ | 9.5 s | 300mm CMOS foundry Si-MOS | [Steinacker, Stuyck et al. / Diraq & imec 2025](https://doi.org/10.1038/s41586-025-09531-9) |
| Operating temperature | 1–1.2 K demonstrated | Higher T eases cryogenic requirements | [Petit et al. 2020](https://doi.org/10.1038/s41586-020-2170-7) |
| Qubit pitch | 60–100 nm | Gate-defined dot spacing | — |

## Scaling Considerations

- **CMOS compatibility:** Fabrication leverages existing semiconductor foundry processes (Intel, GlobalFoundries, imec).
- **Valley splitting variability:** Atomic-scale interface roughness causes dot-to-dot variation in valley splitting, currently a yield limiter.
- **Wiring density:** Each dot requires ~3–5 DC gates + RF lines. Crossbar architectures and shared gate control are active research areas.
- **Operating temperature:** Demonstrations at 1 K (vs. 10–20 mK for superconducting) significantly reduce cryogenic overhead.
- **Largest demonstrated (gate-defined QD):** 6-qubit linear array (Philips et al. 2022), 12-dot devices in testing.
- **Largest demonstrated (donor-based):** 11-qubit atom processor with 9 nuclear + 2 electron spin qubits (SQC, 2025).
- **Industrial fabrication:** Diraq/imec demonstrated fault-tolerant-threshold fidelities on standard 300mm CMOS line (2025).

## References

### Original proposal
- D. Loss and D. P. DiVincenzo, "Quantum computation with quantum dots," [Phys. Rev. A 57, 120 (1998)](https://doi.org/10.1103/PhysRevA.57.120) — [arXiv:cond-mat/9701055](https://arxiv.org/abs/cond-mat/9701055)

### Experimental demonstrations
- M. Veldhorst et al., "An addressable quantum dot qubit with fault-tolerant control-fidelity," [Nat. Nanotechnol. 9, 981 (2014)](https://doi.org/10.1038/nnano.2014.216)
- A. Noiri et al., "Fast universal quantum gate above the fault-tolerance threshold in silicon," [Nature 601, 338 (2022)](https://doi.org/10.1038/s41586-021-04182-y) — [arXiv:2108.02626](https://arxiv.org/abs/2108.02626)
- L. Petit et al., "Universal quantum logic in hot silicon qubits," [Nature 580, 355 (2020)](https://doi.org/10.1038/s41586-020-2170-7) — [arXiv:1910.05289](https://arxiv.org/abs/1910.05289)
- S. G. J. Philips et al., "Universal control of a six-qubit quantum processor in silicon," [Nature 609, 919 (2022)](https://doi.org/10.1038/s41586-022-05117-x) — [arXiv:2202.09252](https://arxiv.org/abs/2202.09252)
- P. Steinacker, N. D. Stuyck et al., "A 300 mm foundry silicon spin qubit unit cell exceeding 99% fidelity in all operations," [Nature 646, 81 (2025)](https://doi.org/10.1038/s41586-025-09531-9) — [arXiv:2410.15590](https://arxiv.org/abs/2410.15590)
- H. Edlbauer, J. Wang et al., "An 11-qubit atom processor in silicon," [Nature 648, 569 (2025)](https://doi.org/10.1038/s41586-025-09827-w) — [arXiv:2506.03567](https://arxiv.org/abs/2506.03567)

## Linked Papers

- [[noiri-2022-silicon-1q-fidelity]]
- [[veldhorst-2014-silicon-coherence]]
- [[petit-2020-hot-silicon]]
- [[philips-2022-universal-control-six]]
- [[steinacker-2025-300mm-foundry-silicon]]
- [[edlbauer-2025-11-qubit-atom-processor]]

## Related Entries

- [[spin-qubit]] — General spin qubit concept
- [[loss-divincenzo-qubit]] — Original Loss-DiVincenzo proposal
- [[singlet-triplet-qubit]] — Two-electron encoding variant
- [[exchange-only-qubit]] — Three-electron variant with all-electrical control
- [[hole-spin-qubit]] — Hole-spin variant with intrinsic spin-orbit coupling
- [[kane-qubit]] — Donor-based silicon spin qubit
- [[flip-flop-qubit]] — combined electron-nuclear spin encoding with long-range dipole coupling
