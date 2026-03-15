---
title: Quantum Low-Density Parity-Check (qLDPC) Codes
entry_type: qubit
technology_family: Codes
status: proposed
first_proposed_year: 2021
keywords:
- qLDPC
- quantum error correction
- constant overhead
- fault tolerance
- hypergraph product
- balanced product
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

Quantum low-density parity-check (qLDPC) codes are a family of quantum error-correcting codes where each stabilizer check acts on a bounded number of qubits and each qubit participates in a bounded number of checks, regardless of code size. This sparsity enables asymptotically constant encoding overhead — potentially requiring only $O(1)$ physical qubits per logical qubit — a dramatic improvement over the $O(d^2)$ overhead of the surface code.


## Figure

![[qldpc-codes-figure.png]]

## Description

Classical LDPC codes revolutionized telecommunications (5G, Wi-Fi, DVB-S2). Their quantum analogues face additional constraints: stabilizer checks must commute, which makes constructing good qLDPC codes far harder. The breakthrough came in 2021–2022 with several families achieving constant-rate, growing-distance codes:

- **Hypergraph product codes** (Tillich-Zémor 2014): $`$[n,k,d]$`$ with $k = \Theta(n)$ and $d = \Theta(\sqrt{n})$.
- **Lifted product / balanced product codes** (Breuckmann-Eberhardt 2021): Improved constructions with better distance scaling.
- **Asymptotically good codes** (Panteleev-Kalachev 2022): First codes with $k = \Theta(n)$ and $d = \Theta(n)$ — the qLDPC holy grail.
- **Fiber bundle codes** (Hastings, Haah, O'Donnell 2021): $d = \widetilde{\Omega}(n^{3/5})$.

The key practical challenge is that qLDPC codes require non-local connectivity: each physical qubit must interact with a constant number of other qubits that may be far apart in any 2D layout. This conflicts with the local connectivity of superconducting and neutral-atom hardware, requiring either long-range couplers, atom shuttling, or modular architectures.

## Stabilizer Formalism

A qLDPC code $`$[n,k,d]$`$ is defined by a pair of sparse parity-check matrices $H_X$ and $H_Z$ satisfying:

$$H_X H_Z^T = 0 \pmod{2}$$

with column and row weights bounded by constants $w_c$ and $w_r$ independent of $n$. The code parameters are:
- $n$ = number of physical qubits
- $k = n - \text{rank}(H_X) - \text{rank}(H_Z)$ = number of logical qubits
- $d$ = minimum weight of a non-trivial logical operator

For asymptotically good codes: $k = \Theta(n)$, $d = \Theta(n)$, giving constant encoding rate $k/n = \Theta(1)$.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Encoding rate $k/n$ | $\Theta(1)$ | Constant rate (vs. $1/d^2$ for surface code) | [[panteleev-2022-asymptotically-good]] |
| Distance $d$ | $\Theta(n)$ | Linear distance for best constructions | [[panteleev-2022-asymptotically-good]] |
| Check weight | 10–20 | Constant, independent of code size | — |
| Threshold (simulated) | ~1–5% | Depends on decoder and specific code family | — |
| Physical-to-logical overhead | $O(1)$ | vs. $O(d^2)$ for surface code | — |

## Scaling Considerations

- **Connectivity:** Non-local stabilizer checks are the main implementation barrier. Neutral atom shuttling and modular superconducting architectures are promising paths.
- **Decoding:** Belief-propagation + OSD decoders show good performance but latency is higher than surface-code decoders.
- **Practical crossover:** At small code sizes, surface codes still win due to local connectivity. qLDPC becomes advantageous at large $n$ where the rate savings dominate.

## Related Entries
- [[surface-code-logical-qubit]]
- [[color-code-logical-qubit]]
- [[floquet-codes]]
