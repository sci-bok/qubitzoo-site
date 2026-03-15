---
title: Qubit Readout
entry_type: readout
technology_family: Cross-Platform
status: demonstrated
first_proposed_year: 1999
keywords:
- readout
- dispersive readout
- fluorescence
- QND measurement
- state discrimination
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

Qubit readout is the process of extracting classical information from a quantum state. It is the final (and often limiting) step in any quantum computation, and readout fidelity directly bounds achievable logical error rates.


## Figure

![[qubit-readout-figure.png]]

## Description

Readout mechanisms vary by platform but share the goal of mapping qubit states to distinguishable classical signals with minimal back-action:

**Superconducting qubits:** Dispersive readout via a coupled microwave resonator. The qubit-state-dependent frequency shift of the cavity (χ-shift) is detected by homodyne or heterodyne measurement of a transmitted/reflected microwave tone. Quantum-limited amplifiers (JPAs, TWPAs) boost SNR. Typical measurement time: 100–500 ns.

**Trapped ions:** State-dependent fluorescence. One qubit state is resonant with a cycling transition and scatters many photons; the other is dark. Photon counting on a CCD/PMT discriminates states. Typical measurement time: 100–300 μs.

**Neutral atoms:** Fluorescence imaging similar to ions, using high-NA objective lenses to collect photons from individual tweezers. Atom loss during readout is a dominant error channel; erasure detection via shelving mitigates this.

**Spin qubits:** Spin-to-charge conversion via energy-selective tunneling (Elzerman readout) or Pauli spin blockade, followed by charge sensing with a quantum point contact or RF-SET. Typical measurement time: 1–100 μs.

## Key Tradeoffs

| Metric | Superconducting | Trapped Ion | Neutral Atom | Spin Qubit |
|---|---|---|---|---|
| Readout fidelity | 99.5–99.9% | 99.9%+ | 99.5–99.8% | 98–99.5% |
| Measurement time | 100–500 ns | 100–300 μs | 10–50 ms | 1–100 μs |
| QND? | Yes (dispersive) | Mostly (cycling) | Destructive (loss) | No (tunneling) |
| Dominant error | Residual T₁ decay | Off-resonant scatter | Atom loss | Charge noise |

## Scaling Considerations

- **Multiplexed readout:** Superconducting platforms use frequency-multiplexed resonators (8–12 qubits per feedline). Trapped ions and atoms use spatially-resolved imaging.
- **Real-time feedback:** Fast readout (< 1 μs) enables mid-circuit measurement and feed-forward for QEC. Superconducting platforms currently lead here.
- **Readout crosstalk:** Residual coupling between qubits during measurement degrades fidelity in multi-qubit systems. Active mitigation via pulse shaping and optimized resonator placement.

## Related Entries
- [[circuit-qed]]
- [[transmon]]
- [[trapped-ion-qubit]]
- [[spin-qubit]]
- [[neutral-atom-qubit]]
- [[erasure-qubit]]

## Linked Papers
- [[walter-2017-rapid-readout]]
