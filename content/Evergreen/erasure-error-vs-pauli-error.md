---
title: "Erasure Error vs Pauli Error"
type: evergreen
status: evergreen
created: 2026-03-25
tags:
  - erasure
  - pauli-error
  - quantum-error-correction
  - error-detection
  - surface-code
  - dual-rail
---

# Erasure Error vs Pauli Error

The distinction between erasure errors and Pauli errors is one of the most consequential in quantum error correction. A **Pauli error** is hidden inside the computational space: the decoder must infer which qubit failed and which logical action occurred from syndrome data. An **erasure error** comes with location information: loss, leakage, or a heralding measurement identifies the affected qubit even though its encoded state must be treated as lost or arbitrary. The advantage is therefore not that the physical fault is intrinsically smaller, but that the decoder receives side information about where it happened. For independent erasures, the surface-code threshold can approach the roughly 50% bond-percolation limit, compared with order-1% circuit-level thresholds for generic unflagged Pauli noise; those numbers are model-dependent and should not be compared without stating the noise and measurement assumptions.

This note is about the **flagging axis** of an error model. It is deliberately separate from [[noise-bias-and-asymmetric-error-channels]], which asks whether hidden in-codespace faults favor one Pauli direction over another. A device can have a large erasure fraction and little Pauli bias, strong Pauli bias and no erasure flag, both, or neither.

## Routing boundary

| If the architectural resource is... | Start with... | Track... |
|---|---|---|
| A known fault location supplied by loss, leakage, or heralding | This note | Erasure fraction, flag-detection fidelity, and unflagged residual error |
| A skew among hidden $X$, $Y$, and $Z$ faults | [[noise-bias-and-asymmetric-error-channels]] | A declared Pauli-bias convention and its decoder assumptions |
| Both flagged loss and biased residual Pauli noise | Read both notes | Erasure and Pauli components separately; do not collapse them into one “bias” number |

The physics behind engineering erasure dominance is elegant: the dominant physical error processes are converted into transitions that leave the computational subspace entirely, landing in a detectable "leaked" state. The paradigmatic example is the **dual-rail encoding** in superconducting circuits. A logical qubit is encoded as $|0_L\rangle = |01\rangle$ and $|1_L\rangle = |10\rangle$ across two transmon modes (or a transmon and a cavity). The dominant error — single-photon loss ($T_1$ decay) — sends $|01\rangle \to |00\rangle$ or $|10\rangle \to |00\rangle$. The leaked state $|00\rangle$ is outside the code space and is detected by a parity check before each round of syndrome extraction. Once detected, the error is flagged as an erasure and the decoder operates in the favorable erasure regime. Crucially, the residual Pauli errors (dephasing within the code space, correlated multi-photon events) are much rarer than the converted erasures, establishing an error hierarchy where erasures dominate by a large factor.

Neutral atom platforms achieve erasure conversion through a different mechanism: atom loss. When a $^{171}$Yb or $^{87}$Rb atom in a tweezer array undergoes an off-resonant scattering event during a Rydberg gate, it is ejected from the trap. The resulting empty site is detected by fluorescence imaging with near-unit efficiency before the next error correction cycle. Since atom loss is the dominant gate error mechanism, the error budget is erasure-dominated. [[wu-2022-erasure-neutral-atoms|Wu et al. (2022)]] and related alkaline-earth neutral-atom work demonstrated that engineering this erasure hierarchy in $^{171}$Yb yields gate error budgets where erasures outnumber Pauli errors by $>10\times$, directly translating to reduced surface code overhead.

The erasure-vs-Pauli hierarchy is now a deliberate design principle for next-generation quantum architectures. Rather than fighting the dominant error channel, the strategy is to *convert* it: choose an encoding where the most common physical process produces a detectable leakage event rather than an undetected rotation. The dual-rail superconducting qubit ([[teoh-2023-dual-rail-cavity|Teoh et al. 2023]], [[levine-2024-dual-rail-erasure|Levine et al. 2024]]), dual-rail photonic qubit (photon loss → vacuum detection), and metastable-state neutral atom encodings all follow this philosophy. The key metric is the **erasure fraction** $f_e = p_{\text{erasure}}/(p_{\text{erasure}} + p_{\text{Pauli}})$: architectures with $f_e > 0.9$ can operate at significantly relaxed physical error rates while still achieving low logical error rates, potentially accelerating the timeline to fault-tolerant quantum computation.

## Key relationships

- [[erasure-qubit]] — the general concept of engineering qubits with erasure-dominated error budgets
- [[dual-rail-superconducting-qubit]] — converts $T_1$ decay to detectable $|00\rangle$ leakage via dual-rail encoding
- [[dual-rail-photonic-qubit]] — photon loss naturally produces a detectable vacuum state (erasure)
- [[rydberg-neutral-atom-qubit]] — atom loss during Rydberg gates detected via fluorescence; erasure-dominant error budget
- [[surface-code-logical-qubit]] — erasure threshold (~50%) vs Pauli threshold (~1%) drives the overhead advantage
- [[noise-bias-and-asymmetric-error-channels]] — orthogonal companion for asymmetry among the residual, unflagged Pauli faults

## References

- [[grassl-1997-codes-quantum-erasure-channel]] — quantum erasure channel theory and bounds
- [[wu-2022-erasure-neutral-atoms]] — erasure conversion in $^{171}$Yb neutral atom qubits
- [[teoh-2023-dual-rail-cavity]] — dual-rail erasure qubit proposal in superconducting circuits
- [[levine-2024-dual-rail-erasure]] — experimental demonstration of erasure-dominant superconducting dual-rail qubit
