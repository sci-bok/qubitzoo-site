---
title: Classical Control Hardware
entry_type: infrastructure
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: false
first_proposed_year: 2000
first_demonstrated_year: 2000
keywords:
  - control electronics
  - AWG
  - FPGA
  - QICK
  - microwave control
  - optical control
  - pulse generation
  - waveform synthesis
  - synchronization
  - room-temperature electronics
influence_score: 0.65
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

*(Figure pending)*

## Description

**Classical control hardware** encompasses the room-temperature and intermediate-stage electronics that generate, shape, route, and synchronize the signals used to manipulate qubits. Every qubit platform requires precision classical control; it is often the practical bottleneck for scaling quantum processors beyond hundreds of qubits.

Qubit operations (gates, initialization, dynamical decoupling, mid-circuit measurement feedback) require precisely timed analog and digital signals delivered to the quantum processor. Classical control systems translate a compiled quantum program into physical waveforms — microwave pulses for superconducting qubits, laser pulses for trapped ions and neutral atoms, voltage pulses for spin qubits — with timing resolution at or below the nanosecond scale.

**Rack-based (traditional):** Separate instruments (AWGs, microwave sources, digitizers, LO synthesizers) connected via cables. Flexible but bulky; wiring scales linearly with qubit count. Used in most academic labs up to ~50 qubits.

**FPGA-based integrated platforms:** Custom boards combining waveform generation, readout digitization, and real-time feedback on a single FPGA fabric. Examples include QICK (Quantum Instrumentation Control Kit, Fermilab), Zurich Instruments SHFQC, Keysight M-series, and Quantum Machines OPX. These systems support deterministic multi-board synchronization and low-latency classical communication for mid-circuit measurement and feed-forward.

**Optical control delivery:** Modulated laser light delivered over telecommunications fiber to cryogenic photodiodes, converting optical signals to microwave pulses at the mixing chamber stage. Eliminates bulky coaxial lines, reduces heat load, and offers a path to scaling beyond hundreds of qubits. Demonstrated with no measurable degradation of transmon coherence times.

## Motivation

- Every qubit platform requires classical control — it is a universal infrastructure dependency.
- **Wiring density** is a critical scaling bottleneck: each qubit typically requires 1–3 coaxial lines for control + readout, and at 1000+ qubits connector density and thermal load at each cryostat stage become critical.
- **Synchronization** across multi-board systems requires clock distribution with <100 ps jitter and deterministic inter-board communication.
- **Real-time processing** for error correction and mid-circuit measurement feedback demands sub-microsecond decision latency from the classical stack.
- **Cryogenic integration** (cryo-CMOS, SFQ logic) could reduce wiring by moving some control electronics to 4K or lower stages, but introduces power dissipation and noise constraints.

## Scaling Considerations

### Cross-platform signal requirements

| Platform | Primary Control Signals | Key Challenges |
|----------|------------------------|----------------|
| Superconducting | Microwave pulses (4–8 GHz), flux bias DC/RF | Frequency crowding, crosstalk |
| Spin qubits | RF/microwave + DC gate voltages | Sub-mV voltage precision, charge noise |
| Trapped ions | Laser pulses (optical + Raman) | Beam pointing stability, AOM bandwidth |
| Neutral atoms | Global + local laser addressing | Atom-resolved control, rearrangement |
| Photonic | Electro-optic modulators, timing | Synchronization across probabilistic sources |

### Scaling challenges
- Wiring density and thermal budget at each cryostat stage
- Deterministic synchronization across hundreds of control channels
- Sub-microsecond feedback latency for real-time QEC decoding
- Power dissipation constraints for cryogenic control electronics
- Cost and form factor reduction for commercial-scale systems

## Key Metrics

| Metric | Typical | State of the Art | Fidelity reference |
|--------|---------|------------------|--------------------|
| Timing jitter | <1 ns | <100 ps (XCOM/QICK) | — |
| DAC resolution | 14-bit | 16-bit | — |
| Update rate | 1–2 GSPS | 10+ GSPS | — |
| Feedback latency | 500 ns–1 µs | <200 ns | — |
| Inter-board sync | <1 ns | <100 ps | — |
| Channel density | 4–16 per board | 32+ per board | — |

## References

### Control platforms
- S. Stefanazzi et al., "The QICK (Quantum Instrumentation Control Kit): Readout and control for superconducting quantum bits," [Rev. Sci. Instrum. **93**, 044709 (2022)](https://doi.org/10.1063/5.0076249) — [arXiv:2110.00557](https://arxiv.org/abs/2110.00557)

### Optical control delivery
- D. Yost et al., "Optical delivery of microwave signals for qubit control," [Bull. Am. Phys. Soc. (2023)](https://meetings.aps.org/Meeting/MAR23/Session/N71.4)

## Linked Papers

- [[martin-2026-xcom-full-mesh-network]]
- [[monarkha-2026-comparing-optical-microwave-conversion-and]]

## Related Entries

- [[cryogenic-amplification]] — cryogenic signal chain for qubit readout
- [[qubit-readout]] — measurement infrastructure
- [[quantum-transduction]] — optical-to-microwave conversion for networking
