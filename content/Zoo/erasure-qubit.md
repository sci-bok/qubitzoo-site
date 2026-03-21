---
title: Erasure Qubit
entry_type: encoding
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: true
first_proposed_year: 2022
first_demonstrated_year: 2023
keywords:
- erasure qubit
- erasure conversion
- leakage detection
- quantum error correction
- neutral atoms
- dual-rail superconducting
- alkaline earth
- error budget
influence_score: 0.82
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
---

## Figure

![[erasure-qubit-figure.png]]

## Description

An erasure qubit is a qubit encoding paradigm in which the dominant physical errors are converted into detectable **erasure errors** — the qubit leaks to a known non-computational state that can be identified by a non-destructive check, revealing the location (but not the content) of the error. The key insight, established by the quantum erasure channel theory, is that an error whose location is known costs dramatically less to correct than a Pauli error at an unknown location: the threshold error rate for erasure errors in the surface code is approximately $p_{\text{erasure}} \approx 50\%$, compared to $p_{\text{Pauli}} \approx 1\%$ for depolarizing noise. This 2–10× reduction in overhead motivates engineering qubits where the dominant failure mode is erasure.

Erasure qubits have been demonstrated across multiple platforms:

**Neutral atoms (alkaline earth):** In $^{171}\text{Yb}$ optical tweezer arrays, the metastable $^3P_0$ clock state and ground $^1S_0$ state encode the qubit, while Rydberg-mediated gate errors predominantly result in atom loss — a detectable erasure (Wu et al. 2022, Ma et al. 2023).

**Dual-rail superconducting:** Two coupled transmons or cavities encode $|0_L\rangle = |01\rangle$ and $|1_L\rangle = |10\rangle$; photon loss sends the system to $|00\rangle$, a detectable erasure outside the code space (Levine et al. 2024).

**Trapped ions:** Metastable shelving states can convert decay errors to detectable leakage events.

## Hamiltonian

The erasure qubit is an encoding paradigm, not a single physical system. The general structure is a logical qubit encoded in a subspace $\mathcal{C} \subset \mathcal{H}$ such that the dominant error channel $\mathcal{E}$ maps $\mathcal{C}$ to an orthogonal, detectable subspace $\mathcal{L}$:

$$\mathcal{E}(\rho) = (1-p)\rho + p \sum_k L_k \rho L_k^\dagger$$

where the Lindblad operators $L_k$ satisfy $\Pi_\mathcal{C} L_k \Pi_\mathcal{C} = 0$, meaning errors always leave the code space and can be detected by measuring the projector $\Pi_\mathcal{L} = \mathbb{1} - \Pi_\mathcal{C}$.

For the dual-rail superconducting encoding, the effective Hamiltonian is:

$$H = \omega_1 \hat{a}_1^\dagger \hat{a}_1 + \omega_2 \hat{a}_2^\dagger \hat{a}_2 + g(\hat{a}_1^\dagger \hat{a}_2 + \hat{a}_1 \hat{a}_2^\dagger)$$

with the code space spanned by $\{|01\rangle, |10\rangle\}$ and the dominant error (single photon loss) producing the detectable state $|00\rangle$.

## Motivation

Quantum error correction overhead is dominated by the rate and type of physical errors. Unheralded Pauli errors require $O(d^2)$ physical qubits per logical qubit with code distance $d$ determined by $p/p_{\text{th}}$. Erasure errors, because their locations are known, effectively double the code distance for free — the same code corrects $d-1$ erasures vs. $\lfloor(d-1)/2\rfloor$ Pauli errors. Converting dominant errors to erasures can reduce the physical-to-logical qubit ratio by factors of 3–10×, potentially bringing practical fault-tolerant computing to nearer-term hardware scales.

## Experimental Status

**Erasure conversion theory — Stace, Barrett, and Doherty (2009):**
- Established that the surface code threshold for erasure errors is $\sim 50\%$, compared to $\sim 1\%$ for depolarizing noise.

**Neutral atom erasure — Wu et al. (2022):**
- Proposed erasure conversion for alkaline earth Rydberg atom arrays using the $^{171}\text{Yb}$ metastable clock state.
- Theoretical framework for converting dominant Rydberg gate errors to detectable erasures.

**High-fidelity Rydberg erasure — Scholl et al. (2023):**
- Demonstrated erasure conversion in $^{171}\text{Yb}$ tweezer arrays with $>98\%$ erasure detection efficiency.
- Mid-circuit erasure detection compatible with real-time decoding.

**Dual-rail superconducting — Levine et al. (2024):**
- Demonstrated long-coherence dual-rail erasure qubit using tunable transmons.
- Achieved erasure fractions $>99\%$ of total errors.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Erasure fraction | >99% | Fraction of total errors that are detectable erasures | [Levine et al. 2024](https://doi.org/10.1103/PhysRevX.14.011051) |
| Erasure detection efficiency | >98% | Probability of detecting an erasure event | [Scholl et al. 2023](https://doi.org/10.1038/s41586-023-06516-4) |
| Surface code erasure threshold | ~50% | Vs. ~1% for depolarizing Pauli errors | [Stace et al. 2009](https://doi.org/10.1103/PhysRevLett.102.200501) |
| QEC overhead reduction | 3–10× | Compared to equivalent unheralded error rate | — |
| 2Q gate fidelity (erasure-converted) | 99.0–99.5% | After post-selecting on no erasure detected | [Scholl et al. 2023](https://doi.org/10.1038/s41586-023-06516-4) |
| Residual Pauli error rate | 0.1–0.5% | Errors that are NOT converted to erasure | [Levine et al. 2024](https://doi.org/10.1103/PhysRevX.14.011051) |

## References

### Theory
- Y. Wu et al., "Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays," [Phys. Rev. A 105, 062418 (2022)](https://doi.org/10.1103/PhysRevA.105.062418) — [arXiv:2201.03540](https://arxiv.org/abs/2201.03540)
- T. M. Stace, S. D. Barrett, and A. C. Doherty, "Thresholds for Topological Codes in the Presence of Loss," [Phys. Rev. Lett. 102, 200501 (2009)](https://doi.org/10.1103/PhysRevLett.102.200501)

### Experimental demonstrations
- P. Scholl et al., "Erasure conversion in a high-fidelity Rydberg quantum simulator," [Nature 622, 273 (2023)](https://doi.org/10.1038/s41586-023-06516-4)
- H. Levine et al., "Demonstrating a Long-Coherence Dual-Rail Erasure Qubit Using Tunable Transmons," [Phys. Rev. X 14, 011051 (2024)](https://doi.org/10.1103/PhysRevX.14.011051) — [arXiv:2307.08737](https://arxiv.org/abs/2307.08737)

## Linked Papers

- [[wu-2022-erasure-neutral-atoms]]
- [[kubica-2023-erasure-overhead]]
- [[levine-2024-dual-rail-erasure]]

## Related Entries

- [[dual-rail-photonic-qubit]] — photonic dual-rail encoding, a natural erasure architecture
- [[dual-rail-superconducting-qubit]] — superconducting implementation of dual-rail erasure
- [[alkaline-earth-neutral-atom-clock-qubit]] — provides the metastable state encoding for atom-based erasure
- [[surface-code-logical-qubit]] — primary QEC code benefiting from erasure conversion
- [[kerr-cat-qubit]] — complementary approach using noise bias rather than erasure conversion
