---
title: All-Semiconductor Superconducting Qubit
entry_type: qubit
technology_family: Super-Semi
status: proposed
figure_reviewed: true
first_proposed_year: 2014
keywords:
- all-semiconductor
- bottom-up superconductivity
- dopant-defined
- silicon
- germanium
- group-IV
- STM lithography
- monolithic
- Josephson junction
influence_score: 0.55
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[all-semiconductor-superconducting-qubit-figure.png]]

## Description

The all-semiconductor superconducting qubit is a proposed architecture in which every component of a superconducting quantum circuit — Josephson junctions, wires, inductors, capacitors — is fabricated within a single group-IV semiconductor crystal (Si or Ge) using precision atomic-scale doping. The heavily doped regions become superconducting below ~1 K, and the undoped crystal between them forms the tunnel barrier. No deposited metal is involved: superconductivity is *intrinsic* to the doped semiconductor.

Conventional superconducting qubits use deposited metal films (Al, Nb, Ta) on a semiconductor or sapphire substrate. Even "hybrid" super-semi devices like the gatemon deposit a metal superconductor onto a semiconductor nanowire or 2DEG. The all-semiconductor approach eliminates the metal entirely:

1. **Superconducting regions:** Created by dense substitutional doping (e.g., boron in Si at densities >10²¹ cm⁻³), which induces superconductivity via the BCS mechanism with $T_c \sim 0.3$–$0.6$ K.
2. **Josephson junctions:** Formed at the boundary between a doped (superconducting) region and an undoped (insulating) region — a doped-undoped-doped structure within the same crystal.
3. **Wires and interconnects:** Heavily doped superconducting channels patterned by STM hydrogen lithography or focused ion beam implantation.
4. **Capacitors:** Doped plates separated by undoped semiconductor dielectric — all within one crystal.

The critical advantage is the elimination of all metal-semiconductor interfaces, metal-substrate interfaces, and amorphous oxide barriers — the dominant sources of decoherence in conventional superconducting qubits. The entire device is a defect-free single crystal, with loss determined by the intrinsic quality of the crystalline semiconductor.

Atomic-precision placement of dopants using scanning tunneling microscope (STM) hydrogen desorption lithography enables deterministic positioning of individual dopant atoms. This technique, developed for silicon donor qubits (Kane qubit), can be repurposed to create superconducting circuits with atomic-scale control of junction dimensions and barrier thickness.

## Hamiltonian

The circuit Hamiltonian follows standard superconducting qubit forms (transmon, fluxonium, etc.) depending on the specific circuit design. The distinction is in the materials parameters:

$$H = 4E_C(\hat{n} - n_g)^2 - E_J\cos\hat{\varphi}$$

with $E_J = \frac{\hbar I_c}{2e}$ determined by the doped-undoped-doped junction geometry, and $E_C = \frac{e^2}{2C}$ from the crystalline capacitor. The BCS gap $\Delta \sim 0.1$–$0.3$ meV (smaller than Al's 0.18 meV gap at bulk) sets the operating temperature floor.

## Motivation

- **Interface elimination:** Removes all lossy metal-substrate, metal-air, and amorphous oxide interfaces — potentially a step change in coherence.
- **CMOS-native:** Built entirely within silicon/germanium — ultimate compatibility with semiconductor foundry processes.
- **Monolithic integration:** A Si crystal can host both superconducting circuits (doped regions) and spin qubits (donor atoms) in the same chip — true monolithic quantum processor.
- **Defect-free barriers:** Crystalline tunnel barriers instead of amorphous AlO$_x$ could dramatically reduce two-level system (TLS) defect density.
- **Atomic precision:** STM lithography enables sub-nm control of junction dimensions.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Predicted $T_c$ | 0.3–0.6 K | Boron-doped Si at >10²¹ cm⁻³ | [Shim and Tahan 2014](https://doi.org/10.1038/ncomms5225) |
| BCS gap $\Delta$ | 0.1–0.3 meV | Smaller than Al (0.18 meV) | [Shim and Tahan 2014](https://doi.org/10.1038/ncomms5225) |
| Junction $I_c R_N$ | ~0.1–0.5 mV | Estimated from doping profiles | [Shim and Tahan 2014](https://doi.org/10.1038/ncomms5225) |
| Experimental status | Not yet realized | Doped Si superconductivity confirmed; full qubit pending | — |
| Fabrication method | STM H-lithography | Atomic-precision dopant placement | — |

## Scaling Considerations

- **Interface-free:** Eliminates all lossy interfaces (metal-substrate, metal-air, amorphous oxide) — potentially a step change in coherence.
- **CMOS-native:** Built entirely within silicon/germanium — ultimate compatibility with semiconductor foundry processes.
- **Qubit-spin integration:** A Si crystal can host both superconducting circuits (doped regions) and spin qubits (donor atoms) in the same chip — true monolithic quantum processor.
- **Operating temperature:** Low $T_c$ requires dilution refrigerator operation well below 100 mK, similar to conventional SC qubits.
- **Fabrication maturity:** STM lithography is slow and serial; scaling to foundry-level throughput is a major open challenge.

## References

### Original proposal
- Y.-P. Shim and C. Tahan, "Bottom-up superconducting and Josephson junction devices inside a group-IV semiconductor," [Nat. Commun. 5, 4225 (2014)](https://doi.org/10.1038/ncomms5225) — [arXiv:1407.4786](https://arxiv.org/abs/1407.4786)

### Related theory
- Y.-P. Shim and C. Tahan, "Semiconductor-inspired design principles for superconducting quantum computing," [Nat. Commun. 7, 11059 (2016)](https://doi.org/10.1038/ncomms11059) — [arXiv:1507.07923](https://arxiv.org/abs/1507.07923)

## Linked Papers

- [[shim-2014-bottom-up-sc]]

## Related Entries

- [[mergemon]] — Merged-element transmon sharing the interface-elimination philosophy
- [[gatemon]] — Hybrid super-semi qubit with metal superconductor on semiconductor
- [[gatemonium]] — Gatemon variant with multiple junctions
- [[kane-qubit]] — Silicon donor qubit using same STM fabrication technique
- [[silicon-spin-qubit]] — Silicon platform cousin
- [[transmon]] — Conventional transmon that this aims to replace
