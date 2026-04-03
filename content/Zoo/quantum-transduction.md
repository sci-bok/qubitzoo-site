---
title: Quantum Transduction
entry_type: infrastructure
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: true
first_proposed_year: 2010
first_demonstrated_year: 2020
keywords:
- transduction
- microwave-to-optical
- frequency conversion
- quantum interconnect
- quantum network
- electro-optic
- piezoelectric
- optomechanical
influence_score: 0.80
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[quantum-transduction-figure.png]]

## Description

Quantum transduction converts quantum information between different frequency domains — most critically from microwave (~5–10 GHz, where superconducting and spin qubits operate) to optical/telecom (~200 THz, where photons can travel in fiber). This is the essential bridge for networking superconducting quantum processors and building distributed quantum computers.

Superconducting qubits encode information at microwave frequencies (~5 GHz), where single photons carry ~25 μeV of energy — far below room-temperature thermal noise (~25 meV). Microwave photons cannot travel through optical fiber, and cryogenic microwave links are limited to meters. Optical photons at telecom wavelengths (1.3–1.5 μm) travel kilometers in fiber with negligible loss.

The main approaches include:
1. **Electro-optic:** Direct coupling of microwave and optical modes in nonlinear crystals (LiNbO₃, AlN). Fastest, but typically low efficiency without resonant enhancement.
2. **Piezoelectric/optomechanical:** Microwave → mechanical → optical. Uses an intermediate phonon mode. Higher efficiency demonstrated but adds noise from thermal phonons.
3. **Magnonic:** Microwave → magnon → optical via ferrimagnetic materials (YIG). Leverages strong magnon-photon coupling.
4. **Rare-earth ion:** Microwave-optical coupling via electronic transitions in rare-earth-doped crystals (Er³⁺ in Y₂SiO₅). Intrinsic quantum transducer, no moving parts.

Transduction efficiency remains the key challenge: quantum-limited operation requires added noise < 1 photon, while current devices typically add ~1–100 thermal photons. The best demonstrated efficiencies are ~50% (pulsed piezo-optomechanical) and ~10% (electro-optic), though not simultaneously quantum-noise-limited.

## Hamiltonian

Generic three-mode transduction (microwave-mechanical-optical):

$$H = \omega_m a_m^\dagger a_m + \omega_{\text{mech}} b^\dagger b + \omega_o a_o^\dagger a_o + g_{em}(a_m^\dagger b + a_m b^\dagger) + g_{om}(a_o^\dagger b + a_o b^\dagger)$$

where $a_m$, $b$, $a_o$ are microwave, mechanical, and optical mode operators, and $g_{em}$, $g_{om}$ are the electromechanical and optomechanical coupling rates.

## Motivation

- **Quantum internet:** Essential bridge for connecting superconducting QPUs across distances > meters via optical fiber.
- **Modular quantum computing:** Enables chip-to-chip entanglement distribution for modular quantum computer architectures.
- **Hybrid platform bridge:** Connects superconducting, spin, and photonic quantum platforms into unified systems.
- **Distributed error correction:** Non-local connectivity required by qLDPC codes can be provided by optical interconnects via transduction.

## Experimental Status

**Electro-optic transduction — Fan et al. (2018):**
- Demonstrated microwave-to-optical conversion using resonantly enhanced LiNbO₃ cavities
- Efficiency ~10%, limited by coupling rates and optical absorption

**Piezo-optomechanical transduction — Mirhosseini et al. (2020):**
- Pulsed conversion with ~50% efficiency using AlN piezoelectric resonators
- Near quantum-limited noise performance demonstrated in pulsed operation

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Electro-optic efficiency | ~10% | Resonantly enhanced LiNbO₃ | [Lauk et al. 2020](https://doi.org/10.1088/2058-9565/ab788a) |
| Piezo-optomechanical efficiency | ~50% | Pulsed, AlN on Si | [Lauk et al. 2020](https://doi.org/10.1088/2058-9565/ab788a) |
| Added noise target | <1 photon | Required for quantum operation | [Lauk et al. 2020](https://doi.org/10.1088/2058-9565/ab788a) |
| Bandwidth | ~1–100 MHz | Platform-dependent | [Lauk et al. 2020](https://doi.org/10.1088/2058-9565/ab788a) |

## Scaling Considerations

- **Quantum internet:** Essential for connecting superconducting QPUs across distances > meters.
- **Modular architectures:** Enables chip-to-chip entanglement distribution for modular quantum computers.
- **Hybrid systems:** Bridges superconducting, spin, and photonic platforms.
- **Noise challenge:** Must operate at millikelvin temperatures with minimal added thermal noise.

## References

### Review
- N. Lauk et al., "Perspectives on quantum transduction," [Quantum Sci. Technol. 5, 020501 (2020)](https://doi.org/10.1088/2058-9565/ab788a) — [arXiv:1910.04821](https://arxiv.org/abs/1910.04821)

### Key experiments
- M. Mirhosseini et al., "Superconducting qubit to optical photon transduction," [Nature 588, 599 (2020)](https://doi.org/10.1038/s41586-020-3038-6) — [arXiv:2004.04838](https://arxiv.org/abs/2004.04838)

### Related theory
- L. Fan et al., "Superconducting cavity electro-optics: A platform for coherent photon conversion between superconducting and photonic circuits," [Sci. Adv. 4, eaar4994 (2018)](https://doi.org/10.1126/sciadv.aar4994) — [arXiv:1806.04244](https://arxiv.org/abs/1806.04244)

## Linked Papers

- [[lauk-2020-transduction-review]]

## Related Entries

- [[circuit-qed]] — Microwave-frequency quantum information that transduction aims to convert
- [[dual-rail-photonic-qubit]] — Optical-frequency quantum information target
- [[t-center-qubit]] — Silicon spin-photon interface with native telecom emission (alternative to transduction)
