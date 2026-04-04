---
title: Quantum Gate
entry_type: concept
technology_family: Cross-Platform
status: demonstrated
keywords:
- quantum gate
- unitary operation
- gate fidelity
- control pulse
- single-qubit gate
- two-qubit gate
- entangling gate
- DRAG pulse
- cross-resonance
- Molmer-Sorensen
- Rydberg blockade
- exchange coupling
- randomized benchmarking
influence_score: 0.85
last_updated: '2026-03-25'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
---

## Description

A quantum gate is a **physical operation** that implements a unitary transformation $U$ on one or more qubits by applying precisely calibrated control signals — microwave pulses, laser beams, voltage waveforms, or magnetic field gradients — for a specific duration. In the abstract circuit model, gates are idealized unitary matrices; in hardware, every gate is a time-dependent Hamiltonian interaction $H(t)$ whose propagator $U = \mathcal{T}\exp\!\left(-\frac{i}{\hbar}\int_0^{t_g} H(t)\,dt\right)$ must approximate the target unitary to within a specified error budget.

**Single-qubit gates** rotate the Bloch vector about arbitrary axes and are typically the highest-fidelity operations on any platform. Physically, they correspond to resonant or near-resonant driving of the qubit transition (e.g., $\hat{H} = \frac{\Omega(t)}{2}\hat{\sigma}_x$ for a Rabi drive with envelope $\Omega(t)$).

**Two-qubit entangling gates** (CNOT, CZ, $\sqrt{\text{iSWAP}}$, etc.) create entanglement by exploiting a controllable interaction between qubits — capacitive coupling, shared motional modes, exchange interaction, or dipolar Rydberg blockade. These are typically the fidelity-limiting operations and the primary bottleneck for fault-tolerant quantum computing.

## Physical Implementations by Platform

### Superconducting Qubits

**Single-qubit gates** are driven by shaped microwave pulses at the qubit transition frequency ($\sim 4{-}6\,\text{GHz}$). DRAG (Derivative Removal by Adiabatic Gate) pulses suppress leakage to the $|2\rangle$ state caused by the transmon's weak anharmonicity, achieving gate times of $20{-}50\,\text{ns}$. Rotations about $\hat{z}$ are implemented virtually (frame updates in the control software) at zero time cost.

**Two-qubit gates** use several schemes:
- **Cross-resonance (CR):** driving one transmon at a neighbor's frequency to produce a $ZX$ interaction (IBM's native gate)
- **Tunable coupler + CZ:** flux-pulsing a tunable element to mediate a controlled-phase gate ($100{-}300\,\text{ns}$)
- **Parametric gates:** modulating the coupler at the difference frequency to activate $\text{iSWAP}$-like interactions

### Trapped Ions

**Single-qubit gates** use laser-driven Raman transitions between hyperfine ground states (gate time $\sim 1{-}10\,\mu\text{s}$), or direct microwave driving of the hyperfine splitting ($\sim 4{-}35\,\mu\text{s}$ for $^{43}\text{Ca}^+$). All-electronic microwave control avoids laser-induced photon scattering entirely.

**Two-qubit gates** exploit shared motional (phonon) modes of the ion chain:
- **Mølmer–Sørensen (MS) gate:** bichromatic laser fields create a spin-dependent force, generating an $XX$ interaction via transient phonon excitation ($\sim 30{-}200\,\mu\text{s}$)
- **Cirac–Zoller gate:** sequential sideband pulses transfer information through a single phonon; historically first but slower and less robust than MS

### Semiconductor Spin Qubits

**Single-qubit gates** rotate individual electron or hole spins via:
- **ESR (Electron Spin Resonance):** oscillating magnetic fields at the Larmor frequency
- **EDSR (Electric Dipole Spin Resonance):** oscillating electric fields coupled to spin via spin–orbit interaction or micromagnet field gradients; faster and more locally addressable than ESR

Gate times are $\sim 0.1{-}10\,\mu\text{s}$ depending on driving mechanism and Rabi frequency.

**Two-qubit gates** exploit the **exchange interaction** $H_{\text{ex}} = J(t)\,\hat{\mathbf{S}}_1 \cdot \hat{\mathbf{S}}_2$ controlled by the barrier gate voltage between neighboring quantum dots. Pulsing $J(t)$ implements $\sqrt{\text{SWAP}}$ or CZ-like operations in $\sim 1{-}100\,\text{ns}$.

### Neutral Atoms (Rydberg)

**Single-qubit gates** use global or site-selective Raman transitions between hyperfine ground states of alkali atoms ($^{87}\text{Rb}$, $^{133}\text{Cs}$) held in optical tweezer arrays. Gate times are $\sim 1{-}10\,\mu\text{s}$.

**Two-qubit gates** exploit the **Rydberg blockade**: when one atom is excited to a Rydberg state ($n \sim 50{-}100$), the strong dipole–dipole interaction ($\sim \text{GHz}$ at $\mu\text{m}$ separations) shifts the doubly-excited state out of resonance, implementing a conditional phase (CZ) gate. Gate times are $\sim 0.1{-}1\,\mu\text{s}$.

### Photonic Qubits

**Single-qubit gates** are implemented with passive linear-optical elements: beam splitters (Hadamard), phase shifters (rotations about $\hat{z}$), and wave plates (arbitrary SU(2)). These are deterministic and high-fidelity.

**Two-qubit gates** are fundamentally challenging because photons do not naturally interact. The **KLM scheme** (Knill, Laflamme, Milburn 2001) achieves probabilistic entangling gates using ancilla photons, beam splitters, and post-selection on photon detection. Success probability is $\sim 1/16$ for a bare CZ, improved to near-deterministic rates with teleportation-based boosting. Measurement-based (fusion) approaches sidestep this by consuming entangled resource states.

## Key Metrics

| Metric | Platform | SOTA Value | Gate Time | Reference |
|--------|----------|------------|-----------|-----------|
| 1Q fidelity | Trapped ion | 99.999985% | 4–35 μs | [Oxford 2025](https://doi.org/10.1103/h4wk-v31j), $^{43}\text{Ca}^+$ microwave |
| 1Q fidelity | Superconducting | 99.998% | ~25 ns | [Ding et al. 2025](https://doi.org/10.1038/s41467-025-56746-4), fluxonium, MIT |
| 1Q fidelity | Superconducting (transmon) | 99.9926% | ~25 ns | [Z. Li et al. 2023](https://doi.org/10.1038/s41534-023-00781-x) |
| 1Q fidelity | Spin qubit | >99.9% | ~1 μs | [Mądzik et al. 2022](https://doi.org/10.1038/s41586-021-04292-7), UNSW Si donor |
| 1Q fidelity | Neutral atom | >99.9% | ~1 μs | Raman/microwave on $^{87}\text{Rb}$ |
| 2Q fidelity | Trapped ion | 99.99% | ~100 μs | [IonQ 2025](https://arxiv.org/abs/2510.17286), EQC, R&D lab |
| 2Q fidelity | Trapped ion (production) | 99.914% | ~200 μs | [Quantinuum H1-1](https://www.quantinuum.com/blog/quantinuum-extends-its-significant-lead-in-quantum-computing), all pairs |
| 2Q fidelity | Superconducting (CZ) | 99.95% | ~60 ns | [IQM 2025](https://arxiv.org/abs/2508.16437), PALEA protocol |
| 2Q fidelity | Neutral atom (CZ) | 99.6% | ~0.5 μs | [Atom Computing 2024](https://azure.microsoft.com/en-us/blog/quantum/2024/11/19/microsoft-and-atom-computing-offer-a-commercial-quantum-machine-with-the-largest-number-of-entangled-logical-qubits-on-record/) |
| 2Q fidelity | Spin qubit | >99% | ~10–100 ns | CMOS-compatible Si, multiple groups (2024) |

Fidelities are measured via **randomized benchmarking (RB)** or **interleaved RB**, which isolate gate errors from state-preparation and measurement (SPAM) errors.

## Gate Error Sources

Gate infidelity $1 - F$ arises from several distinct physical mechanisms:

- **Decoherence during the gate:** $T_1$ (energy relaxation) and $T_2$ (dephasing) processes degrade the qubit state during the finite gate duration $t_g$. The coherence-limited error scales roughly as $\sim t_g / T_2$, making fast gates essential.

- **Leakage to non-computational states:** in weakly anharmonic systems (transmons, $|\alpha| \sim 300\,\text{MHz}$), population can leak to $|2\rangle$ or higher levels during fast pulses. DRAG pulses and leakage reduction protocols (e.g., IQM's PALEA) specifically target this error.

- **Calibration drift:** qubit frequencies, coupling strengths, and pulse amplitudes drift on timescales of minutes to hours due to TLS fluctuations, flux noise, or thermal effects. Requires periodic recalibration and drift-tracking protocols.

- **Crosstalk:** in multi-qubit processors, driving one qubit inadvertently perturbs neighbors through residual coupling (always-on $ZZ$), microwave leakage, or shared control lines. This produces correlated errors that are harder to correct.

- **Control imperfections:** finite pulse bandwidth, DAC quantization, IQ mixer imbalance, and timing jitter all contribute systematic coherent errors.

- **SPAM errors** (state preparation and measurement) are distinct from gate errors but often conflated in raw process metrics. Randomized benchmarking specifically separates gate error from SPAM.

## Historical Milestones

| Year | Milestone | Reference |
|------|-----------|-----------|
| 1995 | First experimental CNOT gate (trapped ion, $^9\text{Be}^+$) | Monroe et al., PRL 75, 4714 |
| 1998 | First NMR quantum gates demonstrated | Chuang et al., Nature 393, 143 |
| 2003 | First solid-state two-qubit gate (superconducting charge qubits) | Yamamoto et al., Nature 425, 941 |
| 2007 | Transmon qubit introduced, enabling high-fidelity SC gates | Koch et al., PRA 76, 042319 |
| 2009 | DRAG pulse invented for leakage suppression | Motzoi et al., PRL 103, 110501 |
| 2014 | Surface code threshold crossed in superconducting qubits | Barends et al., Nature 508, 500 |
| 2016 | First $>99.9\%$ two-qubit MS gate (trapped ions) | Ballance et al., PRL 117, 060504 |
| 2023 | $99.5\%$ two-qubit CZ on 60 neutral atoms simultaneously | Evered et al., Nature 622, 268 |
| 2024 | Google Willow: below-threshold surface code error correction | Google QAI, Nature 638, 920 |
| 2025 | Oxford: 1Q error rate $1.5 \times 10^{-7}$ (trapped ion, microwave) | Sheridan et al., PRL (2025) |
| 2025 | IonQ: 99.99% 2Q fidelity (trapped ion, EQC) | Moses et al., arXiv:2510.17286 |
| 2025 | IQM: 99.95% 2Q CZ fidelity (superconducting, PALEA) | Landra et al., arXiv:2508.16437 |

## Linked Papers
- [[heeres-2017-implementing-universal-gate]]

## Related Entries
- [[transmon]] — dominant superconducting qubit platform
- [[fluxonium]] — alternative SC qubit with higher anharmonicity, record 1Q fidelity
- [[trapped-ion-qubit]] — leading platform for 2Q gate fidelity
- [[spin-qubit]] — semiconductor spin qubits with ultrafast exchange gates
- [[silicon-spin-qubit]] — CMOS-compatible spin qubit implementations
- [[neutral-atom-qubit]] — Rydberg-mediated entangling gates
- [[rydberg-neutral-atom-qubit]] — Rydberg blockade mechanism for 2Q gates
- [[qubit-readout]] — measurement (distinct from gate operations)
- [[circuit-qed]] — architecture enabling SC qubit control and readout
- [[tunable-coupler]] — mediates high-fidelity 2Q gates in SC processors
- [[cirac-zoller-gate]] — original trapped-ion 2Q gate proposal
- [[molmer-sorenson-gate]] — workhorse trapped-ion entangling gate
- [[dual-rail-photonic-qubit]] — photonic encoding for linear-optical gates
- [[linear-optical-photonic-qubit]] — KLM-scheme photonic gates
- [[exchange-only-qubit]] — all-exchange spin qubit gates
- [[surface-code-logical-qubit]] — error correction enabled by high gate fidelities
- [[nuclear-magnetic-resonance-qubit]] — NMR platform; first experimental quantum algorithm demonstrations
