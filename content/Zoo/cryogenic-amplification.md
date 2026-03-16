---
title: Cryogenic Amplification (Quantum-Limited)
entry_type: infrastructure
technology_family: Classical Hardware
status: demonstrated
first_proposed_year: 2010
keywords:
- parametric amplifier
- JPA
- JTWPA
- quantum-limited amplifier
- readout
- HEMT
- signal chain
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

Quantum-limited cryogenic amplifiers are the first active stage of the superconducting qubit readout chain. They amplify the ~10-photon-level readout signal to levels detectable by room-temperature electronics while adding the minimum noise allowed by quantum mechanics ($\frac{1}{2}\hbar\omega$). Without them, readout fidelity is limited to ~90%; with them, >99.9% single-shot fidelity is routinely achieved.

## Figure

![[cryogenic-amplification-figure.png]]

## Description

### Types

1. **Josephson Parametric Amplifier (JPA):** Single-mode resonant amplifier using a Josephson junction's nonlinearity. Narrow bandwidth (~10 MHz) but truly quantum-limited. Workhorse for single-qubit readout.

2. **Josephson Traveling-Wave Parametric Amplifier (JTWPA):** Broadband (~4 GHz) amplifier using thousands of Josephson junctions in a transmission line. Enables frequency-multiplexed readout of many qubits simultaneously. Critical for scaling.

3. **HEMT (High Electron Mobility Transistor):** Semiconductor amplifier at 4K stage. Higher noise (~20× quantum limit) but robust, broadband, and commercially available. Used as second-stage amplification.

4. **Kinetic Inductance Amplifiers (KIT):** Uses the nonlinear kinetic inductance of superconducting thin films. Potentially simpler fabrication than JTWPA with comparable bandwidth.

### Readout chain

Typical signal flow: qubit → readout resonator → circulator → JPA/JTWPA (20 mK) → HEMT (4K) → room-temperature ADC. The quantum-limited first stage sets the ultimate readout fidelity.

## Hamiltonian

Josephson parametric amplifier (degenerate mode):

$$H = \omega_r a^\dagger a + \frac{K}{2}(a^\dagger)^2 a^2 + \epsilon_p(a^2 e^{i\omega_p t} + (a^\dagger)^2 e^{-i\omega_p t})$$

where $K$ is the Kerr nonlinearity from the Josephson junction and $\epsilon_p$ is the pump strength. Near-quantum-limited amplification occurs when the pump drives parametric gain: $\omega_p \approx 2\omega_r$.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| JPA added noise | ~0.5 photons | At quantum limit | [[macklin-2015-jtwpa]] |
| JTWPA bandwidth | ~4 GHz | 4–8 GHz typical | [[macklin-2015-jtwpa]] |
| JTWPA gain | ~20 dB | Sufficient for HEMT cascade | [[macklin-2015-jtwpa]] |
| Readout fidelity enabled | >99.9% | Single-shot, with JPA/JTWPA | [[macklin-2015-jtwpa]] |

## Linked Papers
- [[macklin-2015-jtwpa]]

## Related Entries
- [[qubit-readout]]
- [[circuit-qed]]
- [[transmon]]
