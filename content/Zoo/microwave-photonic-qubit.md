---
title: Microwave Photonic Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2013
first_demonstrated_year: 2018
keywords:
- microwave photon
- itinerant qubit
- flying qubit
- quantum state transfer
- modular quantum computing
- transmission line
- Fock states
- time-bin encoding
- remote entanglement
- cryogenic network
influence_score: 0.68
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[microwave-photonic-qubit-figure.png]]

## Description

The microwave photonic qubit encodes quantum information in single microwave-frequency photons propagating through superconducting transmission lines or waveguides. Unlike stationary qubits stored in superconducting circuits or trapped ions, itinerant microwave photons serve as "flying qubits" that transport quantum information between spatially separated quantum processing nodes in a modular architecture.

The qubit can be encoded in several bases: Fock-state encoding uses the vacuum $|0\rangle$ and single-photon $|1\rangle$ states of the propagating mode; time-bin encoding splits a photon into early and late temporal modes; and dual-rail encoding uses two spatially separated transmission lines. Fock-state encoding is the simplest and most commonly demonstrated.

The key physical process is shaped emission and absorption of single microwave photons by superconducting transmon qubits coupled to high-$Q$ cavities. By parametrically controlling the transmon-cavity coupling, a stationary qubit's state can be mapped onto a propagating photon wavepacket with a carefully engineered temporal profile. At the receiving node, the time-reversed process absorbs the photon deterministically. This deterministic emission/absorption is a critical advantage over optical photons, where probabilistic detection is the norm — microwave photons can be absorbed with >98% efficiency because the emitter and absorber are nearly identical quantum systems operating in the strong coupling regime of circuit QED.

## Hamiltonian

The system Hamiltonian for a transmon qubit coupled to a cavity mode with a propagating waveguide mode:

$$H = \hbar\omega_q \frac{\sigma_z}{2} + \hbar\omega_c a^\dagger a + \hbar g(t)(\sigma_+ a + \sigma_- a^\dagger) + \hbar\sqrt{\kappa}\,(a^\dagger b_{\text{in}} + a\, b_{\text{in}}^\dagger)$$

where $\omega_q$ is the qubit frequency, $\omega_c$ is the cavity frequency, $g(t)$ is the tunable qubit-cavity coupling, $\kappa$ is the cavity decay rate into the waveguide, and $b_{\text{in}}$ is the propagating mode input field. The shaped emission protocol controls $g(t)$ to produce a time-symmetric photon wavepacket:

$$\xi(t) \propto \text{sech}\left(\frac{t - t_0}{\tau}\right)$$

optimized for efficient re-absorption at the receiver.

## Motivation

Scaling superconducting quantum processors beyond a single chip faces fundamental limits: on-chip wiring density, crosstalk, and the physical size of dilution refrigerators constrain monolithic architectures to ~1000 qubits. Modular architectures distribute qubits across multiple chips or modules connected by quantum communication channels. Microwave photonic qubits provide the natural quantum bus for such modular superconducting systems, as they propagate natively in the same cryogenic coaxial cables and transmission lines already used for classical control signals. No frequency conversion is needed — the photon frequency matches the qubit frequency (~5–8 GHz), unlike optical interconnects which require lossy quantum transduction.

## Experimental Status

**Deterministic quantum state transfer — Kurpiers et al. (2018):**
- First deterministic quantum state transfer between two transmon qubits on separate chips connected by ~1 m of coaxial cable.
- Transfer rate: 50 kHz; photon absorption efficiency: 98.1 ± 0.1%.
- Process fidelity: 80.02 ± 0.07% (limited by photon loss and decoherence).
- On-demand remote entanglement with fidelity 78.9 ± 0.1%.

**On-demand state transfer between cavity memories — Axline et al. (2018):**
- Deterministic quantum state transfer between two remote superconducting cavity memories using shaped microwave photons.
- Average transfer fidelity: 76%, improved to 87% with error heralding.
- Demonstrated in both single- and multi-photon encodings.
- Uses parametrically controlled emission/absorption via transmon intermediaries.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Transfer fidelity | 80% | Deterministic state transfer, 180 ns | [Kurpiers et al. 2018](https://doi.org/10.1038/s41586-018-0195-y) |
| Absorption efficiency | 98.1% | Single-photon absorption at receiver | [Kurpiers et al. 2018](https://doi.org/10.1038/s41586-018-0195-y) |
| Entanglement fidelity | 78.9% | On-demand remote Bell state | [Kurpiers et al. 2018](https://doi.org/10.1038/s41586-018-0195-y) |
| Transfer rate | 50 kHz | Limited by photon travel time and protocol duration | [Kurpiers et al. 2018](https://doi.org/10.1038/s41586-018-0195-y) |
| Heralded fidelity | 87% | With error heralding (success prob. 0.87) | [Axline et al. 2018](https://doi.org/10.1038/s41567-018-0115-y) |
| Photon frequency | 5–8 GHz | Matches transmon qubit frequency | — |
| Operating temperature | ~20 mK | Requires dilution refrigerator | — |
| Channel length | ~1 m | Cryogenic coaxial cable; limited by photon loss | — |

## Scaling Considerations

- **Cryogenic constraint**: microwave photons cannot propagate at room temperature without overwhelming thermal noise ($k_BT \gg \hbar\omega$ at 300 K for GHz frequencies). All interconnects must remain within the cryogenic environment, limiting inter-module distances to ~1 m in current dilution refrigerators.
- **Photon loss**: superconducting coaxial cables have finite loss (~0.1 dB/m at millikelvin temperatures), limiting the practical interconnect length and fidelity.
- **No amplification**: unlike classical signals, quantum states cannot be amplified without adding noise. Error correction or entanglement distillation is needed for longer channels.
- **Frequency conversion**: for room-temperature or long-distance links, microwave-to-optical transduction is required, which remains a major open challenge (see [[quantum-transduction]]).
- **Bandwidth**: the narrow bandwidth of high-$Q$ cavities limits the photon emission/absorption rate, creating a speed-fidelity tradeoff.

## References

### Deterministic state transfer
- P. Kurpiers et al., "Deterministic quantum state transfer and remote entanglement using microwave photons," [Nature 558, 264 (2018)](https://doi.org/10.1038/s41586-018-0195-y) | [arXiv:1712.08593](https://arxiv.org/abs/1712.08593)

### Cavity-to-cavity transfer
- C. J. Axline et al., "On-demand quantum state transfer and entanglement between remote microwave cavity memories," [Nature Phys. 14, 705 (2018)](https://doi.org/10.1038/s41567-018-0115-y) | [arXiv:1712.05832](https://arxiv.org/abs/1712.05832)

## Linked Papers

- [[kurpiers-2018-deterministic-state-transfer]]
- [[axline-2018-on-demand-cavity-transfer]]

## Related Entries

- [[circuit-qed]] — underlying physical framework
- [[transmon]] — stationary qubit that emits/absorbs microwave photons
- [[quantum-transduction]] — microwave-to-optical conversion for long-distance links
- [[dual-rail-superconducting-qubit]] — alternative encoding using two modes
