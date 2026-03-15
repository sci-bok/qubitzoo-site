---
title: Silicon Spin Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
first_proposed_year: 1998
keywords:
- silicon
- Si/SiGe
- Si-MOS
- quantum dot
- spin qubit
- isotopic purification
- valley splitting
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The silicon spin qubit encodes quantum information in the spin of a single electron (or hole) confined in a gate-defined quantum dot fabricated on a silicon substrate (Si/SiGe heterostructure or Si-MOS). Silicon is uniquely suited to spin qubits because isotopic purification (²⁸Si) eliminates hyperfine noise from nuclear spins, enabling coherence times exceeding 10 ms — orders of magnitude beyond III-V semiconductors.


## Figure

![[silicon-spin-qubit-figure.png]]

## Description

Gate-defined quantum dots in silicon confine individual electrons using electrostatic potentials created by nanoscale metallic gates on a Si/SiGe or Si-MOS stack. Qubit states are the spin-up and spin-down states of a single electron, split by an external magnetic field (Zeeman splitting, typically 5–40 GHz at 1–1.5 T). Single-qubit gates use electric dipole spin resonance (EDSR) via a micromagnet gradient or oscillating gate voltages exploiting spin-orbit coupling. Two-qubit gates use the exchange interaction $J$ between neighboring dots, controlled by barrier gate voltages.

Silicon's key advantage is the availability of isotopically enriched ²⁸Si, which has zero nuclear spin. In natural silicon (~4.7% ²⁹Si), hyperfine interaction is the dominant dephasing mechanism. With enrichment to >99.99% ²⁸Si, $T_2^*$ improves from ~1 μs to >100 μs, and $T_2$ (Hahn echo) exceeds 10 ms.

The materials system also benefits from decades of CMOS fabrication infrastructure, making silicon the most plausible path to industrial-scale qubit manufacturing.

## Hamiltonian

Single-qubit Hamiltonian:

$$H_{1Q} = \frac{1}{2}g\mu_B B_0 \sigma_z + \frac{1}{2}g\mu_B B_{\text{ac}}(t)\sigma_x$$

Two-qubit exchange Hamiltonian:

$$H_{2Q} = J(V_B)\,\mathbf{S}_1 \cdot \mathbf{S}_2$$

where $J(V_B)$ is the exchange coupling controlled by the barrier gate voltage $V_B$, tunable from <1 kHz to >100 MHz. In the $|{\uparrow\downarrow}\rangle$, $|{\downarrow\uparrow}\rangle$ subspace, this generates a $\sqrt{\text{SWAP}}$ or controlled-phase gate.

Valley splitting Hamiltonian (silicon-specific):

$$H_{\text{valley}} = \Delta_v |z\rangle\langle \bar{z}| + \text{h.c.}$$

where $\Delta_v$ is the valley splitting (typically 0.1–1 meV in Si/SiGe, 0.3–1.5 meV in Si-MOS). Insufficient valley splitting is a yield-limiting factor.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| 1Q gate fidelity | 99.95% | EDSR with ²⁸Si/SiGe | [[noiri-2022-silicon-1q-fidelity]] |
| 2Q gate fidelity | 99.65% | Exchange-based CZ, Si/SiGe | [[noiri-2022-silicon-1q-fidelity]] |
| T₂* | 120 μs | Enriched ²⁸Si, single electron | [[veldhorst-2014-silicon-coherence]] |
| T₂ (Hahn echo) | 28 ms | Enriched ²⁸Si MOS | [[veldhorst-2014-silicon-coherence]] |
| Readout fidelity | 99.7% | Latched Pauli spin blockade | [[noiri-2022-silicon-1q-fidelity]] |
| Operating temperature | 1–1.2 K demonstrated | Higher T eases cryogenic requirements | [[petit-2020-hot-silicon]] |
| Qubit pitch | 60–100 nm | Gate-defined dot spacing | — |

## Scaling Considerations

- **CMOS compatibility:** Fabrication leverages existing semiconductor foundry processes (Intel, GlobalFoundries, imec).
- **Valley splitting variability:** Atomic-scale interface roughness causes dot-to-dot variation in valley splitting, currently a yield limiter.
- **Wiring density:** Each dot requires ~3–5 DC gates + RF lines. Crossbar architectures and shared gate control are active research areas.
- **Operating temperature:** Demonstrations at 1 K (vs. 10–20 mK for superconducting) significantly reduce cryogenic overhead.
- **Largest demonstrated:** 6-qubit linear array (Philips et al. 2022), 12-dot devices in testing.

## Related Entries
- [[spin-qubit]]
- [[loss-divincenzo-qubit]]
- [[singlet-triplet-qubit]]
- [[exchange-only-qubit]]
- [[hole-spin-qubit]]
- [[kane-qubit]]
