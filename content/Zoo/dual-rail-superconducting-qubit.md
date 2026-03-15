---
title: Dual-Rail Superconducting Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2016
keywords:
- dual-rail
- encoded qubit
- composite qubit
- microwave-free
- erasure
- cavity
- baseband
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The dual-rail superconducting qubit encodes quantum information in the single-excitation subspace of two coupled superconducting modes: $|0_L\rangle = |01\rangle$ and $|1_L\rangle = |10\rangle$. This encoding — borrowed from semiconductor spin-qubit design — enables microwave-free control via baseband pulses, intrinsic leakage detection, and conversion of dominant $T_1$ decay into detectable erasure errors. The concept has been realized in two forms: transmon pairs (composite qubit) and cavity pairs (cavity dual-rail).

## Description

### Photonic ancestry

The dual-rail encoding itself originates in quantum optics: a single photon across two spatial modes ($|01\rangle$/$|10\rangle$) has been the canonical photonic qubit since the late 1990s (see [[dual-rail-photonic-qubit]]). The key insight of Shim & Tahan (2016) was recognizing that the *same encoding* applied to superconducting modes unlocks microwave-free control — because the logical splitting is the mode detuning, controllable by baseband flux/voltage pulses. The SC dual-rail is thus a cross-platform translation of a photonic concept through semiconductor physics.

### Semiconductor-inspired origin

The dual-rail SC qubit was proposed by Shim et al. (2016) as a direct translation of semiconductor encoded qubit principles into superconducting circuits. In semiconductor spin qubits, two spins encode one logical qubit in $|01\rangle$/$|10\rangle$ because individual spins lack tunable frequencies. Superconducting qubits have tunable frequencies, making this encoding optional — but it brings profound advantages:

- **Microwave-free control:** The logical qubit splitting is the *difference frequency* of the two physical qubits, which can be tuned to zero. All single-qubit gates are performed by baseband (DC) flux pulses that detune the two qubits, driving coherent oscillations between $|01\rangle$ and $|10\rangle$. No microwave drives needed.
- **Leakage detection:** The encoded subspace $\{|01\rangle, |10\rangle\}$ has exactly one excitation. Any $T_1$ decay produces $|00\rangle$, which is outside the codespace and detectable — converting the dominant error into an erasure.
- **Super-semi compatibility:** The encoding is especially natural for variable-junction qubits (gatemons, super-semi junctions) where junction tunability replaces flux tunability.

### Composite qubit (CQB)

Campbell, Kannan, et al. (2020) demonstrated a composite qubit formed from two capacitively coupled transmons with a small avoided crossing (smaller than temperature). Controlled entirely by non-adiabatic baseband pulses and coherent Landau-Zener interference, achieving Clifford fidelities >99.7% without any microwave drives.

### Cavity dual-rail

Teoh et al. (2023, Yale/Schoelkopf) and Levine et al. (2024, AWS) encode the qubit in $|01\rangle$/$|10\rangle$ of two microwave cavities coupled by a transmon ancilla. The cavity version leverages the long photon lifetimes (>1 ms in 3D stub cavities) and converts dominant photon loss into detectable erasure events. Chou et al. (2024) demonstrated erasure-detected logical measurements with error rates at parts-per-$10^5$.

## Hamiltonian

Transmon-pair encoding:

$$H = \frac{\omega_1}{2}\sigma_z^{(1)} + \frac{\omega_2}{2}\sigma_z^{(2)} + g(\sigma_+^{(1)}\sigma_-^{(2)} + \text{h.c.})$$

In the $\{|01\rangle, |10\rangle\}$ subspace, this reduces to:

$$H_{\text{encoded}} = \frac{\Delta}{2}\tau_z + g\,\tau_x$$

where $\Delta = \omega_1 - \omega_2$ is the detuning (baseband-controllable) and $g$ is the coupling. Logical $X$ rotations come from $g$ (always-on), logical $Z$ rotations from $\Delta$ (tunable via flux). This is formally identical to a singlet-triplet spin qubit Hamiltonian — the semiconductor-superconductor bridge.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Clifford fidelity (CQB) | 99.7% | Baseband-only control, Landau-Zener | [[campbell-2020-composite-qubit]] |
| SPAM error (cavity) | ~10⁻⁵ | Erasure-detected, Yale 2024 | [[teoh-2023-dual-rail-cavity]] |
| Cavity T₁ | >1 ms | 3D stub cavities | [[teoh-2023-dual-rail-cavity]] |
| Erasure detection rate | >99% | Dominant T₁ errors detected | [[levine-2024-dual-rail-erasure]] |
| Effective T₁ (undetected) | ~10× bare | After erasure post-selection | [[levine-2024-dual-rail-erasure]] |

## Scaling Considerations

- **Microwave-free advantage:** Eliminates need for microwave generators, mixers, and filters per qubit — major simplification for large-scale systems.
- **Temperature tolerance:** Baseband control may enable operation at higher temperatures where microwave thermal population is problematic.
- **Super-semi synergy:** Gate-voltage-tunable junctions (gatemons) are a natural fit: detuning is controlled by gate voltages rather than flux, avoiding flux noise entirely.
- **QEC integration:** Erasure conversion reduces surface code overhead by 3–10× compared to standard depolarizing noise.

## Linked Papers
- [[shim-2016-semiconductor-inspired]]
- [[campbell-2020-composite-qubit]]
- [[teoh-2023-dual-rail-cavity]]
- [[levine-2024-dual-rail-erasure]]

## Related Entries
- [[dual-rail-photonic-qubit]]
- [[erasure-qubit]]
- [[transmon]]
- [[gatemon]]
- [[singlet-triplet-qubit]]
- [[circuit-qed]]
