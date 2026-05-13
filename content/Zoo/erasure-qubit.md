---
title: Erasure Qubit
entry_type: encoding
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: true
first_proposed_year: 2009
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
last_updated: '2026-05-13'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-05-13
---

## Figure

![[erasure-qubit-figure.png]]

## Description

An erasure qubit is a qubit encoding or operating paradigm in which the dominant physical faults are engineered to leave the computational subspace in a **detectable** way. Instead of suffering an unheralded Pauli error inside the code space, the hardware preferentially produces a flagged leakage or loss event whose **location** is known to the decoder. That distinction matters enormously: in the ideal known-loss limit, surface-code thresholds can approach $50\%$ (Stace et al. 2009), whereas realistic hardware-level erasure-conversion schemes raise thresholds from the usual $\sim 1\%$ range only to the few-percent range, for example from $0.937\%$ to $4.15\%$ in the alkaline-earth neutral-atom proposal of Wu et al. (2022). The point is not that every erasure-qubit architecture literally inherits a $50\%$ threshold, but that known-location errors are much cheaper to correct than hidden ones.

Erasure qubits have now appeared in several hardware families:

**Neutral atoms (alkaline earth):** In $^{171}\mathrm{Yb}$ tweezer arrays, the qubit is encoded in the $^1S_0$ ground state and metastable $^3P_0$ clock state. Rydberg-gate failures can be converted into bright, detectable states outside the qubit manifold and identified by fast imaging or other non-destructive checks (Wu et al. 2022, Scholl et al. 2023, Lin et al. 2026).

**Dual-rail superconducting qubits:** The logical states are encoded in a single-excitation manifold, for example $|0_L\rangle = |01\rangle$ and $|1_L\rangle = |10\rangle$. The dominant loss process takes the system to $|00\rangle$, outside the code space, so the event can be heralded rather than silently corrupting the logical qubit (Kubica et al. 2023, Levine et al. 2024, Chou et al. 2024).

**Other platforms:** The same idea can be implemented whenever the dominant decay channel can be routed into an orthogonal, measurable subspace, for example with metastable shelving in trapped ions or bosonic encodings with loss detection.

## Hamiltonian

The erasure qubit is an encoding paradigm, not a single microscopic Hamiltonian. The common structure is a code space $\mathcal{C} \subset \mathcal{H}$ together with dominant jump operators $L_k$ that map the code space into an orthogonal detectable subspace $\mathcal{L}$:

$$\Pi_{\mathcal{C}} L_k \Pi_{\mathcal{C}} = 0, \qquad \Pi_{\mathcal{L}} = \mathbb{1} - \Pi_{\mathcal{C}}.$$ 

A convenient open-system description is

$$\dot{\rho} = -i[H,\rho] + \sum_k \mathcal{D}[L_k]\rho,$$

where the useful figure of merit is not only the total physical error rate but also the **erasure-conversion efficiency**, that is, the probability that an error produces a flaggable excursion into $\mathcal{L}$ rather than an unflagged logical error inside $\mathcal{C}$.

For a dual-rail superconducting realization with two coupled modes, a representative effective Hamiltonian is

$$H = \omega_1 a_1^\dagger a_1 + \omega_2 a_2^\dagger a_2 + g\left(a_1^\dagger a_2 + a_1 a_2^\dagger\right),$$

with logical space $\mathcal{C} = \mathrm{span}\{|01\rangle, |10\rangle\}$. A single loss event, represented by $a_1$ or $a_2$, takes the system to $|00\rangle \in \mathcal{L}$, producing a heralded erasure rather than an undetected in-subspace error.

## Motivation

Quantum error correction overhead depends not only on how often hardware fails but on **what kind** of failure occurs. Unknown Pauli errors must be inferred from syndrome patterns and therefore consume code distance inefficiently. Known-location erasures are much friendlier: a distance-$d$ code can tolerate up to $d-1$ erasures but only $\lfloor (d-1)/2 \rfloor$ arbitrary Pauli errors. Erasure conversion therefore reduces the physical overhead for a target logical error rate, often by factors of a few in realistic architectures, and can move near-threshold hardware meaningfully closer to fault-tolerant operation.

## Experimental Status

**Loss-tolerant decoding theory — Stace, Barrett, and Doherty (2009):**
- Established the idealized surface-code loss threshold of roughly $50\%$ for known-location loss errors.

**Neutral-atom erasure-conversion proposal — Wu et al. (2022):**
- Proposed an alkaline-earth Rydberg architecture in which about $98\%$ of dominant errors are converted to detectable erasures.
- Estimated a circuit-level surface-code threshold increase from $0.937\%$ to $4.15\%$ under that noise model.

**High-fidelity neutral-atom demonstration — Scholl et al. (2023):**
- Demonstrated erasure conversion in an alkaline-earth Rydberg simulator.
- Reported Bell-state fidelity $\ge 99.71\%$, improving to $\ge 99.85\%$ after correcting residual state-preparation error when erasure events are excised.

**Superconducting dual-rail transmons — Levine et al. (2024):**
- Demonstrated a long-coherence erasure qubit built from resonantly coupled tunable transmons.
- Reported erasure probability $2.19(2)\times10^{-3}$ per single-qubit gate, with residual non-erasure errors about $40\times$ lower and less than $0.1\%$ dephasing per erasure check.

**Superconducting dual-rail cavities — Chou et al. (2024):**
- Demonstrated erasure-detected logical measurements in a cavity-based dual-rail superconducting architecture, showing the erasure paradigm is not limited to the tunable-transmon realization.

**Repeated-round neutral-atom operation — Lin et al. (2026):**
- Reported a raw controlled-gate fidelity of $99.60(1)\%$, rising to $99.81(1)\%$ with non-destructive erasure detection.
- Sustained roughly $99.8\%$ gate performance across repeated rounds using in-circuit cooling and re-initialization, which is directly relevant for syndrome-extraction workloads.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Surface-code loss threshold (ideal) | ~50% | Ideal known-location loss/erasure limit, not a generic hardware threshold | [Stace et al. 2009](https://doi.org/10.1103/PhysRevLett.102.200501) |
| Neutral-atom threshold with erasure conversion | 4.15% | Versus 0.937% without erasure conversion in the Wu circuit-level model | [Wu et al. 2022](https://doi.org/10.1038/s41467-022-32094-6) |
| Neutral-atom erasure-conversion efficiency (proposal) | ~98% | Fraction of dominant errors converted into detectable erasures in the alkaline-earth proposal | [Wu et al. 2022](https://doi.org/10.1038/s41467-022-32094-6) |
| Neutral-atom Bell-state fidelity with erasure excision | ≥99.71% | Improves to ≥99.85% after correcting residual state-preparation error | [Scholl et al. 2023](https://doi.org/10.1038/s41586-023-06516-4) |
| Superconducting erasure probability per 1Q gate | 2.19(2)×10^-3 | Residual non-erasure errors are about 40× lower | [Levine et al. 2024](https://doi.org/10.1103/PhysRevX.14.011051) |
| Neutral-atom controlled-gate fidelity with non-destructive erasure detection | 99.81(1)% | Repeated-round architecture with mid-circuit operations | [Lin et al. 2026](https://arxiv.org/abs/2603.01612) |
| Surface-code overhead reduction | 3–10× | Representative superconducting erasure-qubit estimate relative to comparable unheralded noise | [Kubica et al. 2023](https://doi.org/10.1103/PhysRevX.13.041022) |

## References

### Theory and architecture
- T. M. Stace, S. D. Barrett, and A. C. Doherty, "Thresholds for Topological Codes in the Presence of Loss," [Phys. Rev. Lett. 102, 200501 (2009)](https://doi.org/10.1103/PhysRevLett.102.200501)
- Y. Wu, S. Kolkowitz, S. Puri, and J. D. Thompson, "Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays," [Nat. Commun. 13, 4656 (2022)](https://doi.org/10.1038/s41467-022-32094-6) — [arXiv:2201.03540](https://arxiv.org/abs/2201.03540)
- A. Kubica, A. Haim, Y. Vaknin, H. Levine, F. Brandão, and A. Retzker, "Erasure Qubits: Overcoming the $T_1$ Limit in Superconducting Circuits," [Phys. Rev. X 13, 041022 (2023)](https://doi.org/10.1103/PhysRevX.13.041022) — [arXiv:2208.05461](https://arxiv.org/abs/2208.05461)

### Experimental demonstrations
- P. Scholl, A. L. Shaw, R. Bing-Shiun Tsai, R. Finkelstein, J. Choi, and M. Endres, "Erasure conversion in a high-fidelity Rydberg quantum simulator," [Nature 622, 273-278 (2023)](https://doi.org/10.1038/s41586-023-06516-4)
- H. Levine et al., "Demonstrating a Long-Coherence Dual-Rail Erasure Qubit Using Tunable Transmons," [Phys. Rev. X 14, 011051 (2024)](https://doi.org/10.1103/PhysRevX.14.011051) — [arXiv:2307.08737](https://arxiv.org/abs/2307.08737)
- K. S. Chou et al., "A superconducting dual-rail cavity qubit with erasure-detected logical measurements," [Nat. Phys. 20, 1453-1459 (2024)](https://doi.org/10.1038/s41567-024-02539-4)
- R. Lin et al., "Sustaining high-fidelity quantum logic in neutral-atom circuits via mid-circuit operations," [arXiv:2603.01612](https://arxiv.org/abs/2603.01612) (2026)

## Linked Papers

- [[stace-2009-thresholds-topological-codes]]
- [[wu-2022-erasure-neutral-atoms]]
- [[scholl-2023-erasure-conversion-high]]
- [[kubica-2023-erasure-overhead]]
- [[levine-2024-dual-rail-erasure]]
- [[chou-2024-superconducting-dual-rail]]
- [[lin-2026-sustaining-high-fidelity-neutral-atom-circuits]]

## Related Entries

- [[dual-rail-photonic-qubit]] — photonic dual-rail encoding, a natural erasure architecture
- [[dual-rail-superconducting-qubit]] — superconducting implementation of dual-rail erasure
- [[neutral-atom-qubit]] — broader platform context for atom-based erasure conversion
- [[alkaline-earth-neutral-atom-clock-qubit]] — provides the clock-state encoding used in atom-based erasure proposals
- [[surface-code-logical-qubit]] — primary QEC code whose threshold and overhead improve under erasure-biased noise
- [[qubit-readout]] — erasure conversion depends on reliable mid-circuit flagging of leakage/loss events
- [[kerr-cat-qubit]] — complementary approach using noise bias rather than erasure conversion
- [[transmon]] — baseline superconducting qubit family from which several erasure-qubit variants are built
