---
title: Qubit Readout
entry_type: readout
technology_family: Classical Hardware
status: demonstrated
figure_reviewed: true
first_proposed_year: 1999
first_demonstrated_year: 2004
keywords:
- readout
- dispersive readout
- fluorescence
- QND measurement
- state discrimination
- single-shot
influence_score: 0.88
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[qubit-readout-figure.png]]

## Description

Qubit readout is the process of extracting classical information from a quantum state. It is the final (and often limiting) step in any quantum computation, and readout fidelity directly bounds achievable logical error rates.

Readout mechanisms vary by platform but share the goal of mapping qubit states to distinguishable classical signals with minimal back-action:

**Superconducting qubits:** Dispersive readout via a coupled microwave resonator. The qubit-state-dependent frequency shift of the cavity ($\chi$-shift) is detected by homodyne or heterodyne measurement of a transmitted/reflected microwave tone. Quantum-limited amplifiers (JPAs, JTWPAs) boost SNR. Typical measurement time: 100–500 ns.

**Trapped ions:** State-dependent fluorescence. One qubit state is resonant with a cycling transition and scatters many photons; the other is dark. Photon counting on a CCD/PMT discriminates states. Typical measurement time: 100–300 μs.

**Neutral atoms:** Fluorescence imaging similar to ions, using high-NA objective lenses to collect photons from individual tweezers. Atom loss during readout is a dominant error channel; erasure detection via shelving mitigates this.

**Spin qubits:** Spin-to-charge conversion via energy-selective tunneling (Elzerman readout) or Pauli spin blockade, followed by charge sensing with a quantum point contact or RF-SET. Typical measurement time: 1–100 μs.

## Hamiltonian

Dispersive readout Hamiltonian (superconducting qubits):

$$H_{\text{disp}} = \omega_r a^\dagger a + \frac{\omega_q}{2}\sigma_z + \chi a^\dagger a \sigma_z$$

where $\omega_r$ is the resonator frequency, $\omega_q$ the qubit frequency, and $\chi = g^2/\Delta$ is the dispersive shift (with $g$ the qubit-resonator coupling and $\Delta = \omega_q - \omega_r$ the detuning). The qubit state shifts the resonator frequency by $\pm\chi$, producing state-dependent transmitted/reflected amplitude and phase.

## Motivation

- **Error correction bottleneck:** Readout fidelity directly limits the achievable logical error rate — poor readout negates good gates.
- **Mid-circuit measurement:** Real-time error correction and feed-forward require fast, high-fidelity, minimally destructive readout within the circuit.
- **Scaling constraint:** Multiplexed readout efficiency determines how many qubits can share a single measurement line, impacting wiring overhead.
- **Speed-fidelity tradeoff:** Faster readout reduces T₁-induced errors but requires higher SNR; quantum-limited amplifiers resolve this tension.

## Experimental Status

**Dispersive readout of superconducting qubits — Wallraff et al. (2004):**
- First demonstration of dispersive readout via circuit QED
- Established the $\chi$-shift measurement paradigm

**Single-shot readout — Walter et al. (2017):**
- Rapid high-fidelity single-shot readout of superconducting qubits
- 99.2% readout fidelity in 88 ns using optimized pulse shapes and quantum-limited amplification

**State-of-the-art (2024):**
- Superconducting: >99.9% single-shot fidelity with JTWPA, 100–300 ns
- Trapped ions: >99.9% via fluorescence, 100–300 μs
- Neutral atoms: 99.5–99.8% via fluorescence imaging

## Key Metrics

| Metric | Superconducting | Trapped Ion | Neutral Atom | Spin Qubit |
|--------|-----------------|-------------|--------------|------------|
| Readout fidelity | 99.5–99.9% | 99.9%+ | 99.5–99.8% | 98–99.5% |
| Measurement time | 100–500 ns | 100–300 μs | 10–50 ms | 1–100 μs |
| QND? | Yes (dispersive) | Mostly (cycling) | Destructive (loss) | No (tunneling) |
| Dominant error | Residual T₁ decay | Off-resonant scatter | Atom loss | Charge noise |

## Scaling Considerations

- **Multiplexed readout:** Superconducting platforms use frequency-multiplexed resonators (8–12 qubits per feedline). Trapped ions and atoms use spatially-resolved imaging.
- **Real-time feedback:** Fast readout (< 1 μs) enables mid-circuit measurement and feed-forward for QEC. Superconducting platforms currently lead here.
- **Readout crosstalk:** Residual coupling between qubits during measurement degrades fidelity in multi-qubit systems. Active mitigation via pulse shaping and optimized resonator placement.

## References

### Foundational
- A. Wallraff et al., "Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics," [Nature 431, 162 (2004)](https://doi.org/10.1038/nature02851) — [arXiv:cond-mat/0407325](https://arxiv.org/abs/cond-mat/0407325)

### Key experiments
- T. Walter et al., "Rapid High-Fidelity Single-Shot Dispersive Readout of Superconducting Qubits," [Phys. Rev. Applied 7, 054020 (2017)](https://doi.org/10.1103/PhysRevApplied.7.054020) — [arXiv:1701.06933](https://arxiv.org/abs/1701.06933)

### Reviews
- A. Blais et al., "Circuit quantum electrodynamics," [Rev. Mod. Phys. 93, 025005 (2021)](https://doi.org/10.1103/RevModPhys.93.025005) — [arXiv:2005.12667](https://arxiv.org/abs/2005.12667)

## Linked Papers

- [[wallraff-2004-circuit-qed]]
- [[walter-2017-rapid-readout]]
- [[blais-2021-circuit-qed-review]]

## Related Entries

- [[cryogenic-amplification]] — Quantum-limited amplifiers that enable high-fidelity readout
- [[circuit-qed]] — Theoretical framework for dispersive readout
- [[transmon]] — Primary superconducting qubit using dispersive readout
- [[trapped-ion-qubit]] — Fluorescence-based readout
- [[spin-qubit]] — Spin-to-charge conversion readout
- [[neutral-atom-qubit]] — Fluorescence imaging readout
- [[erasure-qubit]] — Erasure detection as enhanced readout
