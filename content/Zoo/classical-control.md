---
title: Classical Control Hardware
entry_type: infrastructure
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: false
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
last_updated: '2026-09-18'
generated_by: scibok-curation
extracted_by: manual
verified_by: codex-daily-audit-2026-09-18
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/classical-control-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-05"
figure_reviewed_at: "2026-08-05T05:30:31.841333+00:00"
---

## Figure

![[classical-control-figure.png]]

## Description

**Classical control hardware** encompasses the room-temperature and intermediate-stage electronics that generate, shape, route, and synchronize the signals used to manipulate qubits. Every qubit platform requires precision classical control; it is often the practical bottleneck for scaling quantum processors beyond hundreds of qubits.

Qubit operations (gates, initialization, dynamical decoupling, readout, and mid-circuit feedback) require precisely timed analog and digital signals delivered to the quantum processor. Classical control systems translate a compiled quantum program into physical waveforms — microwave and flux pulses for superconducting qubits, laser pulses for trapped ions and neutral atoms, and voltage or RF pulses for spin qubits. Required timing precision is platform- and operation-dependent; modern RFSoC systems span sub-nanosecond pulse-duration resolution, nanosecond-scale event timing, and sub-microsecond feedback loops.

**Rack-based (traditional):** Separate instruments (AWGs, microwave sources, digitizers, and local oscillators) connected by cables. This architecture is flexible but bulky, and dedicated control, bias, and readout paths create a wiring and thermal-load problem as channel count grows.

**FPGA/RFSoC-based integrated platforms:** Custom boards combine waveform generation, direct-RF DAC/ADC channels, sequencing, readout digitization, digital signal processing, and real-time feedback in programmable logic. Open-source examples include QICK and FIREQ. Multi-board systems such as XCOM add deterministic clock alignment and low-latency all-to-all communication.

**Cryogenic and optical delivery:** Moving signal generation or conversion into the cryostat can reduce room-temperature cabling, but it introduces strict power-dissipation, noise, and thermalization constraints. Monarkha et al. (2026) delivered modulated light over telecom fiber to a photodiode at the 1 K stage and found no measurable transmon-coherence degradation relative to an all-microwave input line over repeated 20-hour runs. Liu et al. (2026) demonstrated a separate all-digital superconducting controller directly interconnected with a qubit at 10 mK.

## Hamiltonian / Control Model

Classical-control hardware is not a qubit modality and therefore has no unique microscopic Hamiltonian. For a representative microwave-controlled two-level system, however, the controller implements the rotating-frame drive Hamiltonian

$$
\frac{\hat H_{\mathrm{rot}}(t)}{\hbar}
= \frac{\Delta(t)}{2}\hat\sigma_z
+ \frac{\Omega_I(t)}{2}\hat\sigma_x
+ \frac{\Omega_Q(t)}{2}\hat\sigma_y,
$$

where $\Delta=\omega_q-\omega_d$ is the qubit-drive detuning and $\Omega_I$, $\Omega_Q$ are the calibrated in-phase and quadrature envelopes synthesized by the DAC/direct-RF chain. A real signal path has an impulse response $h(t)$, so the delivered complex envelope is

$$u_{\mathrm{del}}(t)=(h*u_{\mathrm{cmd}})(t).$$

Calibration and digital predistortion seek an inverse filter $g$ such that $g*h\approx\delta$, while respecting DAC bandwidth, quantization, latency, and stability constraints. Optical and voltage-controlled platforms use different carriers and microscopic couplings, but the same systems problem remains: synthesize a commanded control field, deliver it through a nonideal transfer chain, digitize the measurement return, and condition the next operation on the result.

## Motivation

- Every qubit platform requires classical control — it is a universal infrastructure dependency.
- **Wiring density** is a critical scaling bottleneck: superconducting and spin-qubit systems can require multiple control, bias, and readout paths per device, making connector density and thermal load increasingly difficult at large scale.
- **Synchronization** across multi-board systems requires a shared clock, calibrated deterministic delays, and low-latency communication. XCOM demonstrated drift-free alignment of QICK execution clocks to within 100 ps and communication latency below 185 ns; this is clock alignment/skew, not a universal jitter requirement.
- **Real-time processing** for error correction and mid-circuit feedback must close the loop within the hardware's measurement and QEC-cycle budget. Yang et al. (2026) experimentally demonstrated a 550 ns closed loop, including 124 ns of neural-network decoding, within a 1.25 $\mu$s superconducting surface-code cycle.
- **Cryogenic integration** (cryo-CMOS, SFQ logic) could reduce wiring by moving some control electronics to 4K or lower stages, but introduces power dissipation and noise constraints.

## Experimental Status

**Open-source RFSoC control — Stefanazzi et al. (2022):**
- QICK combined an RFSoC FPGA, firmware, software, and an optional analog front end for direct synthesis of control pulses up to 6 GHz.
- Transmon benchmarking reported 99.93% average gate fidelity.

**Deterministic multi-board control — Martin et al. (2026):**
- XCOM synchronized the absolute execution clocks of QICK boards to within 100 ps without drift or loss of lock.
- The full-mesh network provided deterministic simultaneous data communication with latency below 185 ns.

**Cryogenic signal delivery — Monarkha et al. and Liu et al. (2026):**
- Optical-to-microwave control using a photodiode at 1 K produced no measurable coherence degradation relative to conventional microwave delivery over repeated 20-hour measurements.
- A superconducting controller at 10 mK reported 99.9% average Clifford fidelity, leakage of order $10^{-4}$, and estimated gate-operation energy of 0.121 fJ.

**Closed-loop QEC — Yang et al. (2026):**
- A hardware-integrated FPGA neural-network decoder demonstrated real-time distance-3 surface-code correction on a superconducting processor.
- The deterministic closed-loop latency was 550 ns, including 124 ns for decoding, within a 1.25 $\mu$s QEC cycle.

**Direct-RF control and calibration — La Capra et al. and Huszabianlou et al. (2026):**
- FIREQ generated and acquired direct-RF signals up to 9.3 GHz, with 107 ps pulse-duration resolution and 1.7 ns event-timing resolution on a ZCU216 RFSoC.
- A QubiC fixed-point FIR/IIR predistortion cascade operated at a 500 MHz fabric clock for 1 GS/s flux lines and added 162 ns latency, making the control-transfer function an explicit hardware-design constraint.

## Evergreen context

- [[quantum-hardware]] treats control electronics as part of the machine, not just lab scaffolding, because usable qubits only matter if compiled programs can reach them as calibrated, deterministic waveforms.
- [[divincenzo-criteria]] makes the dependency explicit: universal gates, reliable state preparation, and qubit-specific measurement all fail in practice if the classical stack cannot synthesize, synchronize, and condition the required signals.
- [[threshold-theorem]] turns classical latency into a fault-tolerance constraint, since mid-circuit measurement and decoder feedback are only useful if the control system can react before accumulated errors erase the syndrome value.
- [[coherence-time-hierarchy]] — classical control latency (waveform synthesis, measurement digitization, decoder processing) must fit within the coherence budget of the fastest qubit in the architecture; the hierarchy makes this dependency explicit by separating coherence into distinct timescales and noise floors.

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

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Direct-RF synthesis | Up to 6 GHz | QICK RFSoC control output | [Stefanazzi et al. 2022](https://doi.org/10.1063/5.0076249) |
| Demonstrated average gate fidelity | 99.93% | Transmon benchmark using QICK | [Stefanazzi et al. 2022](https://doi.org/10.1063/5.0076249) |
| Multi-board clock alignment | Within 100 ps | Drift-free synchronization of QICK execution clocks | [Martin et al. 2026](https://arxiv.org/abs/2603.18977) |
| Inter-board communication latency | $<185$ ns | Deterministic all-to-all simultaneous XCOM messaging | [Martin et al. 2026](https://arxiv.org/abs/2603.18977) |
| Closed-loop QEC latency | 550 ns | Includes 124 ns FPGA decoding inside a 1.25 $\mu$s surface-code cycle | [Yang et al. 2026](https://arxiv.org/abs/2605.04892) |
| RFSoC pulse-duration resolution | 107 ps | FIREQ direct-RF generation to 9.3 GHz; event timing resolution 1.7 ns | [La Capra et al. 2026](https://arxiv.org/abs/2608.29399) |
| Millikelvin controller fidelity | 99.9% average Clifford fidelity | 10 mK controller; estimated operation energy 0.121 fJ | [Liu et al. 2026](https://arxiv.org/abs/2604.05693) |
| Real-time flux predistortion latency | 162 ns | Representative FIR/IIR cascade at 500 MHz for 1 GS/s flux lines | [Huszabianlou et al. 2026](https://arxiv.org/abs/2609.16488) |

## References

### Control platforms
- L. Stefanazzi et al., "The QICK (Quantum Instrumentation Control Kit): Readout and control for qubits and detectors," [Rev. Sci. Instrum. **93**, 044709 (2022)](https://doi.org/10.1063/5.0076249) — [arXiv:2110.00557](https://arxiv.org/abs/2110.00557)
- D. Martin et al., "XCOM: Full Mesh Network Synchronization and Low-Latency Communication for QICK (Quantum Instrumentation Control Kit)," [arXiv:2603.18977 (2026)](https://arxiv.org/abs/2603.18977)
- G. La Capra et al., "FIREQ: FPGA Instrumentation for Readout and Qubit control," [arXiv:2608.29399 (2026)](https://arxiv.org/abs/2608.29399)
- M. Huszabianlou et al., "Error-Bounded Fixed-Point Design of Super-Sample-Rate IIR Filters for Real-Time Superconducting Qubit Flux Predistortion," [arXiv:2609.16488 (2026)](https://arxiv.org/abs/2609.16488)

### Cryogenic delivery and feedback
- V. Monarkha et al., "Comparing optical-microwave conversion and all-microwave control schemes for a transmon qubit," [arXiv:2603.18780 (2026)](https://arxiv.org/abs/2603.18780)
- K. Liu et al., "A plug-and-play superconducting quantum controller at millikelvin temperatures enables exceeding 99.9% average gate fidelity," [arXiv:2604.05693 (2026)](https://arxiv.org/abs/2604.05693)
- X. Yang et al., "Real-time Surface-Code Error Correction Using an FPGA-based Neural-Network Decoder," [arXiv:2605.04892 (2026)](https://arxiv.org/abs/2605.04892)

## Linked Papers

- [[martin-2026-xcom-full-mesh-network]]
- [[monarkha-2026-comparing-optical-microwave-conversion-and]]
- [[liu-2026-a-plug-and-play-superconducting-quantum]]
- [[stefanazzi-2022-qick-instrumentation-control]]
- [[berritta-2026-adaptive-spectroscopy-of-fast]]
- [[wegmann-2026-zero-g-a-pre-decoder-aware-decoder]]
- [[capra-2026-fireq-fpga-instrumentation-for]]
- [[huszabianlou-2026-error-bounded-fixed-point-design-of]]
- [[yang-2026-real-time-surface-code-error-correction]]

## Related Entries

- [[cryogenic-amplification]] — cryogenic signal chain for qubit readout
- [[qubit-readout]] — measurement infrastructure
- [[quantum-transduction]] — optical-to-microwave conversion for networking
