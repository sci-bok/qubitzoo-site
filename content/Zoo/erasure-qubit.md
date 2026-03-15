---
title: Erasure Qubit
entry_type: qubit
technology_family: Cross-Platform
status: demonstrated
first_proposed_year: 2022
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
last_updated: '2026-03-14'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
---

## Description

An erasure qubit is a qubit encoding paradigm in which the dominant physical errors are converted into detectable erasure errors — the qubit leaks to a known non-computational state that can be identified by a non-destructive check, revealing the location (but not the content) of the error. The key insight, established by the quantum erasure channel theory, is that an error whose location is known costs dramatically less to correct than a Pauli error at an unknown location: the threshold error rate for erasure errors in the surface code is approximately $p_{\text{erasure}} \approx 50\%$, compared to $p_{\text{Pauli}} \approx 1\%$ for depolarizing noise. This 2–10$\times$ reduction in overhead motivates engineering qubits where the dominant failure mode is erasure.

Erasure qubits have been demonstrated across multiple platforms:

- **Neutral atoms (alkaline earth)**: In $^{171}\text{Yb}$ optical tweezer arrays, the metastable $^3P_0$ clock state and ground $^1S_0$ state encode the qubit, while Rydberg-mediated gate errors predominantly result in atom loss — a detectable erasure (Wu et al. 2022, Ma et al. 2023).

- **Dual-rail superconducting**: Two coupled transmons or cavities encode $|0_L\rangle = |01\rangle$ and $|1_L\rangle = |10\rangle$; photon loss sends the system to $|00\rangle$, a detectable erasure outside the code space (Kubica et al. 2023, Levine et al. 2024).

- **Trapped ions**: Metastable shelving states can convert decay errors to detectable leakage events.

## Hamiltonian

The erasure qubit is an encoding paradigm, not a single physical system. The general structure is a logical qubit encoded in a subspace $\mathcal{C} \subset \mathcal{H}$ such that the dominant error channel $\mathcal{E}$ maps $\mathcal{C}$ to an orthogonal, detectable subspace $\mathcal{L}$:

$$\mathcal{E}(\rho) = (1-p)\rho + p \sum_k L_k \rho L_k^\dagger$$

where the Lindblad operators $L_k$ satisfy $\Pi_\mathcal{C} L_k \Pi_\mathcal{C} = 0$, meaning errors always leave the code space and can be detected by measuring the projector $\Pi_\mathcal{L} = \mathbb{1} - \Pi_\mathcal{C}$.

For the dual-rail superconducting encoding, the effective Hamiltonian is:

$$H = \omega_1 \hat{a}_1^\dagger \hat{a}_1 + \omega_2 \hat{a}_2^\dagger \hat{a}_2 + g(\hat{a}_1^\dagger \hat{a}_2 + \hat{a}_1 \hat{a}_2^\dagger)$$

with the code space spanned by $\{|01\rangle, |10\rangle\}$ and the dominant error (single photon loss) producing the detectable state $|00\rangle$.

## Motivation

Quantum error correction overhead is dominated by the rate and type of physical errors. Unheralded Pauli errors require $O(d^2)$ physical qubits per logical qubit with code distance $d$ determined by $p/p_{\text{th}}$. Erasure errors, because their locations are known, effectively double the code distance for free — the same code corrects $d-1$ erasures vs. $\lfloor(d-1)/2\rfloor$ Pauli errors. Converting dominant errors to erasures can reduce the physical-to-logical qubit ratio by factors of 3–10$\times$, potentially bringing practical fault-tolerant computing to nearer-term hardware scales.

## Key Findings

- Surface code threshold for erasure errors is $\sim 50\%$, compared to $\sim 1\%$ for depolarizing noise, giving massive headroom for error correction (Stace et al. 2009).
- In $^{171}\text{Yb}$ tweezer arrays, Rydberg gate errors converted to erasure with $>98\%$ detection efficiency (Wu et al. 2022).
- Dual-rail superconducting erasure qubits demonstrated erasure fractions $>99\%$ of total errors (Levine et al. 2024).
- Theoretical analysis shows erasure conversion reduces surface code overhead by $3\times$ for realistic noise models (Kubica et al. 2023).
- Mid-circuit erasure detection compatible with real-time decoding demonstrated in neutral atom arrays (Ma et al. 2023).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Erasure fraction | >99% | Fraction of total errors that are detectable erasures | [Levine et al. 2024](https://doi.org/10.1103/PhysRevLett.132.030403) |
| Erasure detection efficiency | >98% | Probability of detecting an erasure event | [Wu et al. 2022](https://doi.org/10.1103/PhysRevLett.129.200501) |
| Surface code erasure threshold | ~50% | Vs. ~1% for depolarizing Pauli errors | [Stace et al. 2009](https://doi.org/10.1103/PhysRevLett.102.200501) |
| QEC overhead reduction | 3–10× | Compared to equivalent unheralded error rate | [Kubica et al. 2023](https://arxiv.org/abs/2208.05461) |
| 2Q gate fidelity (erasure-converted) | 99.0–99.5% | After post-selecting on no erasure detected | [Wu et al. 2022](https://doi.org/10.1103/PhysRevLett.129.200501) |
| Residual Pauli error rate | 0.1–0.5% | Errors that are NOT converted to erasure | [Levine et al. 2024](https://doi.org/10.1103/PhysRevLett.132.030403) |

## Linked Papers
- [[wu-2022-erasure-neutral-atoms]]
- [[kubica-2023-erasure-overhead]]
- [[levine-2024-dual-rail-erasure]]

## Related Entries

- [[dual-rail-photonic-qubit]]
- [[alkaline-earth-neutral-atom-clock-qubit]]
- [[noise-bias-and-asymmetric-error-channels]]
- [[surface-code-logical-qubit]]
- [[kerr-cat-qubit]]
