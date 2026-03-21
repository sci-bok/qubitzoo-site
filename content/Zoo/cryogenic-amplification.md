---
title: Cryogenic Amplification (Quantum-Limited)
entry_type: infrastructure
technology_family: Classical Hardware
status: demonstrated
figure_reviewed: true
first_proposed_year: 2010
first_demonstrated_year: 2015
keywords:
- parametric amplifier
- JPA
- JTWPA
- quantum-limited amplifier
- readout
- HEMT
- signal chain
influence_score: 0.85
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[cryogenic-amplification-figure.png]]

## Description

Quantum-limited cryogenic amplifiers are the first active stage of the superconducting qubit readout chain. They amplify the ~10-photon-level readout signal to levels detectable by room-temperature electronics while adding the minimum noise allowed by quantum mechanics ($\frac{1}{2}\hbar\omega$). Without them, readout fidelity is limited to ~90%; with them, >99.9% single-shot fidelity is routinely achieved.

The main amplifier types are:

1. **Josephson Parametric Amplifier (JPA):** Single-mode resonant amplifier using a Josephson junction's nonlinearity. Narrow bandwidth (~10 MHz) but truly quantum-limited. Workhorse for single-qubit readout.

2. **Josephson Traveling-Wave Parametric Amplifier (JTWPA):** Broadband (~4 GHz) amplifier using thousands of Josephson junctions in a transmission line. Enables frequency-multiplexed readout of many qubits simultaneously. Critical for scaling.

3. **HEMT (High Electron Mobility Transistor):** Semiconductor amplifier at 4K stage. Higher noise (~20× quantum limit) but robust, broadband, and commercially available. Used as second-stage amplification.

4. **Kinetic Inductance Amplifiers (KIT):** Uses the nonlinear kinetic inductance of superconducting thin films. Potentially simpler fabrication than JTWPA with comparable bandwidth.

The typical signal flow is: qubit → readout resonator → circulator → JPA/JTWPA (20 mK) → HEMT (4K) → room-temperature ADC. The quantum-limited first stage sets the ultimate readout fidelity.

## Hamiltonian

Josephson parametric amplifier (degenerate mode):

$$H = \omega_r a^\dagger a + \frac{K}{2}(a^\dagger)^2 a^2 + \epsilon_p(a^2 e^{i\omega_p t} + (a^\dagger)^2 e^{-i\omega_p t})$$

where $K$ is the Kerr nonlinearity from the Josephson junction and $\epsilon_p$ is the pump strength. Near-quantum-limited amplification occurs when the pump drives parametric gain: $\omega_p \approx 2\omega_r$.

## Motivation

- **Readout bottleneck:** Without quantum-limited amplification, superconducting qubit readout fidelity is capped at ~90% — insufficient for quantum error correction.
- **Scaling enabler:** Broadband JTWPAs enable frequency-multiplexed readout of 8–12+ qubits per feedline, critical for scaling to thousands of qubits.
- **Signal-to-noise:** Quantum-limited noise floor ($\frac{1}{2}\hbar\omega$) maximizes the information extracted per measurement, enabling single-shot readout in <500 ns.
- **Mid-circuit measurement:** Fast, high-fidelity readout is essential for real-time error correction and feed-forward operations.

## Experimental Status

**JTWPA demonstration — Macklin et al. (2015):**
- First near-quantum-limited Josephson traveling-wave parametric amplifier
- ~20 dB gain over 4 GHz bandwidth (4–8 GHz)
- Added noise within factor of 2 of the quantum limit
- Enabled frequency-multiplexed readout of multiple qubits

**Routine deployment (2020–present):**
- JTWPAs now standard in multi-qubit superconducting processors (Google, IBM, Rigetti)
- Single-shot readout fidelities >99.9% routinely achieved with quantum-limited first stage

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| JPA added noise | ~0.5 photons | At quantum limit | [Macklin et al. 2015](https://doi.org/10.1126/science.aaa8525) |
| JTWPA bandwidth | ~4 GHz | 4–8 GHz typical | [Macklin et al. 2015](https://doi.org/10.1126/science.aaa8525) |
| JTWPA gain | ~20 dB | Sufficient for HEMT cascade | [Macklin et al. 2015](https://doi.org/10.1126/science.aaa8525) |
| Readout fidelity enabled | >99.9% | Single-shot, with JPA/JTWPA | [Macklin et al. 2015](https://doi.org/10.1126/science.aaa8525) |

## Scaling Considerations

- **Multiplexed readout:** JTWPAs enable 8–12+ qubits per readout feedline via frequency multiplexing.
- **Power handling:** Amplifier saturation power limits the number of simultaneous readout tones. Higher saturation power is an active research area.
- **Cryogenic heat load:** Each amplifier dissipates ~1–10 μW at the mixing chamber stage. At 1000+ qubits, cumulative heat load becomes a constraint.
- **Commercial availability:** JTWPAs becoming commercially available (e.g., from Silent Waves, Quantum Microwave) but still expensive.

## References

### Key experiments
- C. Macklin et al., "A near-quantum-limited Josephson traveling-wave parametric amplifier," [Science 350, 307 (2015)](https://doi.org/10.1126/science.aaa8525) — [arXiv:1507.06672](https://arxiv.org/abs/1507.06672)

### Reviews
- A. A. Clerk et al., "Introduction to quantum noise, measurement, and amplification," [Rev. Mod. Phys. 82, 1155 (2010)](https://doi.org/10.1103/RevModPhys.82.1155) — [arXiv:0810.4729](https://arxiv.org/abs/0810.4729)

## Linked Papers

- [[macklin-2015-jtwpa]]

## Related Entries

- [[qubit-readout]] — The measurement process that cryogenic amplifiers enable
- [[circuit-qed]] — Microwave quantum optics framework for readout
- [[transmon]] — Primary qubit type requiring quantum-limited readout
