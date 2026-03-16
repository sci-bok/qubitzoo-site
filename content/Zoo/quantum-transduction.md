---
title: Quantum Transduction
entry_type: infrastructure
technology_family: Classical Hardware
status: demonstrated
first_proposed_year: 2010
keywords:
- transduction
- microwave-to-optical
- frequency conversion
- quantum interconnect
- quantum network
- electro-optic
- piezoelectric
- optomechanical
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

Quantum transduction converts quantum information between different frequency domains — most critically from microwave (~5–10 GHz, where superconducting and spin qubits operate) to optical/telecom (~200 THz, where photons can travel in fiber). This is the essential bridge for networking superconducting quantum processors and building distributed quantum computers.

## Figure

![[quantum-transduction-figure.png]]

## Description

### The problem

Superconducting qubits encode information at microwave frequencies (~5 GHz), where single photons carry ~25 μeV of energy — far below room-temperature thermal noise (~25 meV). Microwave photons cannot travel through optical fiber, and cryogenic microwave links are limited to meters. Optical photons at telecom wavelengths (1.3–1.5 μm) travel kilometers in fiber with negligible loss.

### Approaches

1. **Electro-optic:** Direct coupling of microwave and optical modes in nonlinear crystals (LiNbO₃, AlN). Fastest, but typically low efficiency without resonant enhancement.

2. **Piezoelectric/optomechanical:** Microwave → mechanical → optical. Uses an intermediate phonon mode. Higher efficiency demonstrated but adds noise from thermal phonons.

3. **Magnonic:** Microwave → magnon → optical via ferrimagnetic materials (YIG). Leverages strong magnon-photon coupling.

4. **Rare-earth ion:** Microwave-optical coupling via electronic transitions in rare-earth-doped crystals (Er³⁺ in Y₂SiO₅). Intrinsic quantum transducer, no moving parts.

### State of the art

Transduction efficiency remains the key challenge: quantum-limited operation requires added noise $< 1$ photon, while current devices typically add $\sim 1$–$100$ thermal photons. The best demonstrated efficiencies are $\sim 50$% (pulsed piezo-optomechanical) and $\sim 10$% (electro-optic), though not simultaneously quantum-noise-limited.

## Hamiltonian

Generic three-mode transduction (microwave-mechanical-optical):

$$H = \omega_m a_m^\dagger a_m + \omega_{\text{mech}} b^\dagger b + \omega_o a_o^\dagger a_o + g_{em}(a_m^\dagger b + a_m b^\dagger) + g_{om}(a_o^\dagger b + a_o b^\dagger)$$

where $a_m$, $b$, $a_o$ are microwave, mechanical, and optical mode operators, and $g_{em}$, $g_{om}$ are the electromechanical and optomechanical coupling rates.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Electro-optic efficiency | ~10% | Resonantly enhanced LiNbO₃ | [[lauk-2020-transduction-review]] |
| Piezo-optomechanical efficiency | ~50% | Pulsed, AlN on Si | [[lauk-2020-transduction-review]] |
| Added noise target | <1 photon | Required for quantum operation | [[lauk-2020-transduction-review]] |
| Bandwidth | ~1–100 MHz | Platform-dependent | [[lauk-2020-transduction-review]] |

## Scaling Considerations

- **Quantum internet:** Essential for connecting superconducting QPUs across distances > meters
- **Modular architectures:** Enables chip-to-chip entanglement distribution for modular quantum computers
- **Hybrid systems:** Bridges superconducting, spin, and photonic platforms
- **Noise challenge:** Must operate at millikelvin temperatures with minimal added thermal noise

## Linked Papers
- [[lauk-2020-transduction-review]]

## Related Entries
- [[circuit-qed]]
- [[dual-rail-photonic-qubit]]
- [[t-center-qubit]]
