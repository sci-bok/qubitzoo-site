---
title: Quantum Low-Density Parity-Check (qLDPC) Codes
entry_type: encoding
technology_family: Codes
status: proposed
figure_reviewed: true
first_proposed_year: 2021
keywords:
- qLDPC
- quantum error correction
- constant overhead
- fault tolerance
- hypergraph product
- balanced product
- asymptotically good codes
influence_score: 0.88
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[qldpc-codes-figure.png]]

## Description

Quantum low-density parity-check (qLDPC) codes are a family of quantum error-correcting codes where each stabilizer check acts on a bounded number of qubits and each qubit participates in a bounded number of checks, regardless of code size. This sparsity enables asymptotically constant encoding overhead — potentially requiring only $O(1)$ physical qubits per logical qubit — a dramatic improvement over the $O(d^2)$ overhead of the surface code.

Classical LDPC codes revolutionized telecommunications (5G, Wi-Fi, DVB-S2). Their quantum analogues face additional constraints: stabilizer checks must commute, which makes constructing good qLDPC codes far harder. The breakthrough came in 2021–2022 with several families achieving constant-rate, growing-distance codes:

- **Hypergraph product codes** (Tillich-Zémor 2014): $\lbrack\lbrack n,k,d \rbrack\rbrack$ with $k = \Theta(n)$ and $d = \Theta(\sqrt{n})$.
- **Lifted product / balanced product codes** (Breuckmann-Eberhardt 2021): Improved constructions with better distance scaling.
- **Asymptotically good codes** (Panteleev-Kalachev 2022): First codes with $k = \Theta(n)$ and $d = \Theta(n)$ — the qLDPC holy grail.
- **Fiber bundle codes** (Hastings, Haah, O'Donnell 2021): $d = \widetilde{\Omega}(n^{3/5})$.

The key practical challenge is that qLDPC codes require **non-local connectivity**: each physical qubit must interact with a constant number of other qubits that may be far apart in any 2D layout. This conflicts with the local connectivity of superconducting and neutral-atom hardware, requiring either long-range couplers, atom shuttling, or modular architectures.

## Stabilizer Formalism

A qLDPC code $\lbrack\lbrack n,k,d \rbrack\rbrack$ is defined by a pair of sparse parity-check matrices $H_X$ and $H_Z$ satisfying:

$$H_X H_Z^T = 0 \pmod{2}$$

with column and row weights bounded by constants $w_c$ and $w_r$ independent of $n$. The code parameters are:
- $n$ = number of physical qubits
- $k = n - \text{rank}(H_X) - \text{rank}(H_Z)$ = number of logical qubits
- $d$ = minimum weight of a non-trivial logical operator

For asymptotically good codes: $k = \Theta(n)$, $d = \Theta(n)$, giving constant encoding rate $k/n = \Theta(1)$.

## Motivation

- **Constant overhead:** Physical-to-logical qubit ratio approaches $O(1)$ for large codes, vs. $O(d^2)$ for surface codes — potentially 100–1000× reduction in resource overhead.
- **Asymptotically good parameters:** Panteleev-Kalachev codes achieve $k = \Theta(n)$ and $d = \Theta(n)$ simultaneously — the theoretical optimum for stabilizer codes.
- **Practical thresholds:** Simulated thresholds of ~1–5% are competitive with surface codes.
- **Architecture synergy:** Non-local connectivity naturally matches platforms with reconfigurable connectivity (neutral atom shuttling, photonic interconnects, modular superconducting).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Encoding rate $k/n$ | $\Theta(1)$ | Constant rate (vs. $1/d^2$ for surface code) | [Panteleev and Kalachev 2022](https://doi.org/10.1145/3519935.3520017) |
| Distance $d$ | $\Theta(n)$ | Linear distance for best constructions | [Panteleev and Kalachev 2022](https://doi.org/10.1145/3519935.3520017) |
| Check weight | 10–20 | Constant, independent of code size | — |
| Threshold (simulated) | ~1–5% | Depends on decoder and specific code family | — |
| Physical-to-logical overhead | $O(1)$ | vs. $O(d^2)$ for surface code | — |

## Scaling Considerations

- **Connectivity:** Non-local stabilizer checks are the main implementation barrier. Neutral atom shuttling and modular superconducting architectures are promising paths.
- **Decoding:** Belief-propagation + OSD decoders show good performance but latency is higher than surface-code decoders.
- **Practical crossover:** At small code sizes, surface codes still win due to local connectivity. qLDPC becomes advantageous at large $n$ where the rate savings dominate.

## References

### Original proposal (asymptotically good)
- P. Panteleev and G. Kalachev, "Asymptotically good Quantum and locally testable classical LDPC codes," [STOC 2022](https://doi.org/10.1145/3519935.3520017) — [arXiv:2202.13641](https://arxiv.org/abs/2202.13641)

### Key constructions
- J.-P. Tillich and G. Zémor, "Quantum LDPC codes with positive rate and minimum distance proportional to the square root of the blocklength," [IEEE Trans. Inf. Theory 60, 1193 (2014)](https://doi.org/10.1109/TIT.2013.2292061) — [arXiv:0903.0566](https://arxiv.org/abs/0903.0566)
- N. P. Breuckmann and J. N. Eberhardt, "Balanced Product Quantum Codes," [IEEE Trans. Inf. Theory 67, 6653 (2021)](https://doi.org/10.1109/TIT.2021.3097347) — [arXiv:2012.09271](https://arxiv.org/abs/2012.09271)

### Related theory
- M. B. Hastings, J. Haah, and R. O'Donnell, "Fiber bundle codes: breaking the $n^{1/2}\text{polylog}(n)$ barrier for quantum LDPC codes," [STOC 2021](https://doi.org/10.1145/3406325.3451005) — [arXiv:2009.03921](https://arxiv.org/abs/2009.03921)

## Linked Papers

- [[panteleev-2022-asymptotically-good]]

## Related Entries

- [[surface-code-logical-qubit]] — Local 2D code with $O(d^2)$ overhead; qLDPC aims to beat this
- [[color-code-logical-qubit]] — Another local 2D code with transversal gates
- [[floquet-codes]] — Dynamical codes that may help implement qLDPC on local hardware
