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

The distinction between erasure errors and Pauli errors is one of the most consequential in quantum error correction. A **Pauli error** is an undetected error: the qubit suffers an unknown $X$, $Y$, or $Z$ rotation, and the decoder must determine both *which* qubit failed and *what* error occurred. An **erasure error** is a detected error: some ancillary measurement or leakage signature reveals *which* qubit was lost, and the decoder need only determine the nature of the error. This difference in information available to the decoder has a dramatic effect on correction overhead. For the surface code, the error correction threshold is approximately 1% for Pauli errors but approximately 50% for erasure errors — the theoretical maximum set by the percolation limit. In practical terms, erasure errors are roughly 3× cheaper to correct per unit error rate, meaning an erasure-dominated architecture can reach the same logical error rate with significantly fewer physical qubits.

The physics behind engineering erasure dominance is elegant: the dominant physical error processes are converted into transitions that leave the computational subspace entirely, landing in a detectable "leaked" state. The paradigmatic example is the **dual-rail encoding** in superconducting circuits. A logical qubit is encoded as $|0_L\rangle = |01\rangle$ and $|1_L\rangle = |10\rangle$ across two transmon modes (or a transmon and a cavity). The dominant error — single-photon loss ($T_1$ decay) — sends $|01\rangle \to |00\rangle$ or $|10\rangle \to |00\rangle$. The leaked state $|00\rangle$ is outside the code space and is detected by a parity check before each round of syndrome extraction. Once detected, the error is flagged as an erasure and the decoder operates in the favorable erasure regime. Crucially, the residual Pauli errors (dephasing within the code space, correlated multi-photon events) are much rarer than the converted erasures, establishing an error hierarchy where erasures dominate by a large factor.

Neutral atom platforms achieve erasure conversion through a different mechanism: atom loss. When a $^{171}$Yb or $^{87}$Rb atom in a tweezer array undergoes an off-resonant scattering event during a Rydberg gate, it is ejected from the trap. The resulting empty site is detected by fluorescence imaging with near-unit efficiency before the next error correction cycle. Since atom loss is the dominant gate error mechanism, the error budget is erasure-dominated. Wu et al. (2022) and Ma et al. (2023) demonstrated that engineering this erasure hierarchy in $^{171}$Yb yields gate error budgets where erasures outnumber Pauli errors by $>10\times$, directly translating to reduced surface code overhead.

The erasure-vs-Pauli hierarchy is now a deliberate design principle for next-generation quantum architectures. Rather than fighting the dominant error channel, the strategy is to *convert* it: choose an encoding where the most common physical process produces a detectable leakage event rather than an undetected rotation. The dual-rail superconducting qubit (Teoh et al. 2023, Levine et al. 2024), dual-rail photonic qubit (photon loss → vacuum detection), and metastable-state neutral atom encodings all follow this philosophy. The key metric is the **erasure fraction** $f_e = p_{\text{erasure}}/(p_{\text{erasure}} + p_{\text{Pauli}})$: architectures with $f_e > 0.9$ can operate at significantly relaxed physical error rates while still achieving low logical error rates, potentially accelerating the timeline to fault-tolerant quantum computation.

## Key relationships

- [[erasure-qubit]] — the general concept of engineering qubits with erasure-dominated error budgets
- [[dual-rail-superconducting-qubit]] — converts $T_1$ decay to detectable $|00\rangle$ leakage via dual-rail encoding
- [[dual-rail-photonic-qubit]] — photon loss naturally produces a detectable vacuum state (erasure)
- [[rydberg-neutral-atom-qubit]] — atom loss during Rydberg gates detected via fluorescence; erasure-dominant error budget
- [[surface-code-logical-qubit]] — erasure threshold (~50%) vs Pauli threshold (~1%) drives the overhead advantage
- [[noise-bias-and-asymmetric-error-channels]] — erasure dominance as a form of error asymmetry exploited by tailored codes

## References

- [Grassl, Beth & Pellizzari (1997)](https://doi.org/10.1103/PhysRevA.56.33) — quantum erasure channel theory and bounds
- [Wu et al. (2022)](https://doi.org/10.1103/PhysRevLett.129.200501) — erasure conversion in $^{171}$Yb neutral atom qubits
- [Teoh et al. (2023)](https://doi.org/10.48550/arXiv.2208.05461) — dual-rail erasure qubit proposal in superconducting circuits
- [Levine et al. (2024)](https://doi.org/10.1103/PhysRevX.14.011051) — experimental demonstration of erasure-dominant superconducting dual-rail qubit
