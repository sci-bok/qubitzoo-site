---
title: Quantum Low-Density Parity-Check (qLDPC) Codes
entry_type: encoding
technology_family: Codes
moc_facets: [Cross-Platform]
status: demonstrated
figure_reviewed: true
first_proposed_year: 2001
first_demonstrated_year: 2025
keywords:
- qLDPC
- quantum error correction
- constant overhead
- fault tolerance
- hypergraph product
- balanced product
- asymptotically good codes
influence_score: 0.88
last_updated: '2026-10-07'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-10-07
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/qldpc-codes-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:46.405314+00:00"
---

## Figure

![[qldpc-codes-figure.png]]

## Description

Quantum low-density parity-check (qLDPC) codes are quantum error-correcting codes in which each stabilizer check acts on a bounded number of qubits and each qubit participates in a bounded number of checks, independent of code size. Some qLDPC families have constant asymptotic encoding rate and linear distance, so their code-block ratio $n/k$ remains $O(1)$ as the code grows. That is an asymptotic statement, not a guarantee that every finite qLDPC instance beats a surface-code implementation once ancillas, routing, and logical operations are counted.

Classical LDPC codes revolutionized telecommunications (5G, Wi-Fi, DVB-S2). Their quantum analogues face the additional constraint that stabilizer checks must commute, which makes good qLDPC codes much harder to construct. The first explicit qLDPC proposal appeared in 2001. A sequence of product constructions then improved the asymptotic parameters, culminating in the 2021–2022 proof that asymptotically good qLDPC families exist:

- **Hypergraph product codes** (Tillich-Zémor 2014): $[\![n,k,d]\!]$ families with $k = \Theta(n)$ and $d = \Theta(\sqrt{n})$.
- **Balanced product codes** (Breuckmann-Eberhardt 2021): Explicit families with $k = \Theta(n^{4/5})$ and $d = \Omega(n^{3/5})$, plus constant-rate families conjectured there to have linear distance.
- **Asymptotically good codes** (Panteleev-Kalachev 2022): First codes with $k = \Theta(n)$ and $d = \Theta(n)$.
- **Fiber bundle codes** (Hastings, Haah, O'Donnell 2021): $d = \Omega(n^{3/5}/\operatorname{polylog} n)$, breaking the square-root distance barrier.

The key practical challenge is **non-local connectivity**: each physical qubit interacts with only a constant number of checks, but those partners need not be nearby in a two-dimensional layout. Bivariate-bicycle (BB) codes reduce this burden to a degree-6 graph that can be decomposed into two planar subgraphs. First reported in 2025 and published in 2026, Wang et al. experimentally measured all non-local weight-6 stabilizers of small BB-family codes on a 32-qubit long-range-coupled superconducting processor, moving qLDPC from proposal to demonstration.

## Stabilizer Formalism and Code Hamiltonian

A qLDPC code $[\![n,k,d]\!]$ is defined by a pair of sparse parity-check matrices $H_X$ and $H_Z$ satisfying:

$$H_X H_Z^T = 0 \pmod{2}$$

with column and row weights bounded by constants $w_c$ and $w_r$ independent of $n$. The code parameters are:
- $n$ = number of physical qubits
- $k = n - \text{rank}(H_X) - \text{rank}(H_Z)$ = number of logical qubits
- $d$ = minimum weight of a non-trivial logical operator

For asymptotically good codes: $k = \Theta(n)$, $d = \Theta(n)$, giving constant encoding rate $k/n = \Theta(1)$.

Writing the rows of $H_X$ and $H_Z$ as commuting Pauli checks,

$$S_a^X = \prod_i X_i^{(H_X)_{ai}}, \qquad S_b^Z = \prod_i Z_i^{(H_Z)_{bi}},$$

a representative commuting-projector code Hamiltonian is

$$H_{\mathrm{code}} = -\Delta_X\sum_a S_a^X - \Delta_Z\sum_b S_b^Z.$$

Its ground space is the simultaneous $+1$ eigenspace of all checks. This Hamiltonian defines the code space; hardware implementations normally realize error correction by repeatedly measuring the checks rather than by physically engineering $H_{\mathrm{code}}$.

## Motivation

- **Constant-rate code blocks:** For asymptotically good families, $n/k = O(1)$ rather than the vanishing rate of a fixed-logical-count surface-code patch.
- **Asymptotically good parameters:** Panteleev-Kalachev codes achieve $k = \Theta(n)$ and $d = \Theta(n)$ simultaneously — the theoretical optimum for stabilizer codes.
- **Competitive finite-size memory:** BB-code simulations give a $0.7\%$ circuit-level threshold and a concrete $[\![144,12,12]\!]$ example with 144 data plus 144 ancilla qubits.
- **Architecture synergy:** Non-local connectivity naturally matches platforms with reconfigurable connectivity (neutral atom shuttling, photonic interconnects, modular superconducting).

## Experimental Status

**First low-overhead qLDPC demonstration — Wang et al. (first reported 2025; published 2026):**
- Used a 32-qubit superconducting processor with overlapping long-range couplers.
- Demonstrated simultaneous measurement of all non-local weight-6 stabilizers for a distance-4 BB code encoding four logical qubits and a distance-3 punctured BB code encoding six.
- Measured logical error per logical qubit per cycle of $(8.91 \pm 0.17)\%$ and $(7.77 \pm 0.12)\%$, respectively. These results demonstrate feasibility, not below-threshold error suppression.

**Practical fault-tolerant memory design — Bravyi et al. (2024):**
- A degree-6 BB connectivity graph, decomposable into two planar subgraphs, supports a depth-8 syndrome cycle.
- The final peer-reviewed analysis reports a $0.7\%$ circuit-level threshold.
- A $[\![144,12,12]\!]$ code uses 144 data and 144 ancilla qubits and is projected to preserve 12 logical qubits for nearly one million cycles at physical error rate $10^{-3}$.

**Reconfigurable neutral-atom architecture — Xu et al. (2024):**
- Proposed product-structured syndrome extraction by atom rearrangement and found a simulated crossover below surface-code overhead at several hundred physical qubits for physical error rate $10^{-3}$.
- This remains an architecture proposal; it is not a hardware qLDPC demonstration.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Encoding rate $k/n$ | $\Theta(1)$ | Constant rate (vs. $1/d^2$ for surface code) | [Panteleev and Kalachev 2022](https://doi.org/10.1145/3519935.3520017) |
| Distance $d$ | $\Theta(n)$ | Linear distance for best constructions | [Panteleev and Kalachev 2022](https://doi.org/10.1145/3519935.3520017) |
| BB check weight / degree | 6 / 6 | Weight-6 X and Z checks; each data qubit participates in six checks | [Bravyi et al. 2024](https://doi.org/10.1038/s41586-024-07107-7) |
| BB circuit-level threshold | $0.7\%$ | Final peer-reviewed circuit-noise analysis | [Bravyi et al. 2024](https://doi.org/10.1038/s41586-024-07107-7) |
| Demonstrated BB logical error per cycle | $(8.91 \pm 0.17)\%$ | Per logical qubit; distance-4 code encoding four logical qubits | [Wang et al. 2026](https://doi.org/10.1038/s41567-025-03157-4) |
| Demonstrated punctured-BB logical error per cycle | $(7.77 \pm 0.12)\%$ | Per logical qubit; distance-3 code encoding six logical qubits | [Wang et al. 2026](https://doi.org/10.1038/s41567-025-03157-4) |
| Asymptotic code-block overhead $n/k$ | $O(1)$ | For constant-rate families; excludes implementation ancillas and routing | [Panteleev and Kalachev 2022](https://doi.org/10.1145/3519935.3520017) |

## Scaling Considerations

- **Connectivity:** Non-local stabilizer checks remain the main implementation barrier. Long-range superconducting couplers now have a small-code demonstration; neutral-atom shuttling remains a simulated architecture proposal.
- **Decoding:** Belief-propagation plus ordered-statistics-style post-processing performs well numerically, but real-time decoder latency remains an engineering constraint.
- **Practical crossover:** Constant asymptotic rate does not imply immediate finite-size advantage. The crossover depends on the code family, physical noise, ancilla count, routing, decoder, and logical-operation protocol.

## References

### Foundational proposals
- M. S. Postol, "A Proposed Quantum Low Density Parity Check Code," [arXiv:quant-ph/0108131](https://arxiv.org/abs/quant-ph/0108131) (2001)
- P. Panteleev and G. Kalachev, "Asymptotically Good Quantum and Locally Testable Classical LDPC Codes," [STOC 2022](https://doi.org/10.1145/3519935.3520017) — [arXiv:2111.03654](https://arxiv.org/abs/2111.03654)

### Key constructions
- J.-P. Tillich and G. Zémor, "Quantum LDPC codes with positive rate and minimum distance proportional to the square root of the blocklength," [IEEE Trans. Inf. Theory 60, 1193 (2014)](https://doi.org/10.1109/TIT.2013.2292061) — [arXiv:0903.0566](https://arxiv.org/abs/0903.0566)
- N. P. Breuckmann and J. N. Eberhardt, "Balanced Product Quantum Codes," [IEEE Trans. Inf. Theory 67, 6653 (2021)](https://doi.org/10.1109/TIT.2021.3097347) — [arXiv:2012.09271](https://arxiv.org/abs/2012.09271)

### Related theory
- M. B. Hastings, J. Haah, and R. O'Donnell, "Fiber bundle codes: breaking the $n^{1/2}\text{polylog}(n)$ barrier for quantum LDPC codes," [STOC 2021](https://doi.org/10.1145/3406325.3451005) — [arXiv:2009.03921](https://arxiv.org/abs/2009.03921)

### Practical architectures and experiment
- S. Bravyi et al., "High-threshold and low-overhead fault-tolerant quantum memory," [Nature 627, 778 (2024)](https://doi.org/10.1038/s41586-024-07107-7) — [arXiv:2308.07915](https://arxiv.org/abs/2308.07915)
- Q. Xu et al., "Constant-overhead fault-tolerant quantum computation with reconfigurable atom arrays," [Nature Physics 20, 1084 (2024)](https://doi.org/10.1038/s41567-024-02479-z) — [arXiv:2308.08648](https://arxiv.org/abs/2308.08648)
- K. Wang et al., "Demonstration of low-overhead quantum error correction codes," [Nature Physics 22, 308 (2026)](https://doi.org/10.1038/s41567-025-03157-4) — [arXiv:2505.09684](https://arxiv.org/abs/2505.09684)

## Linked Papers

- [[panteleev-2022-asymptotically-good]]
- [[postol-2001-qldpc]]
- [[breuckmann-2021-balanced-product-codes]]
- [[hastings-2021-fiber-bundle-codes]]
- [[tillich-2014-ldpc-codes-positive]]
- [[bravyi-2024-high-threshold-qldpc-memory]]
- [[xu-2024-constant-overhead-atom-arrays]]
- [[wang-2026-low-overhead-qec-codes]]

## Evergreen context

- [[threshold-theorem]] — qLDPC matters only insofar as its constant-rate promise still lives in a realistic below-threshold regime
- [[erasure-error-vs-pauli-error]] — a useful lens for reading qLDPC threshold claims, since decoder advantages depend strongly on whether the hardware exposes flagged loss or ordinary Pauli noise
- [[noise-bias-and-asymmetric-error-channels]] — keeps a second decoder assumption explicit: even after separating flagged erasures, the unflagged residual may be strongly biased among $X$, $Y$, and $Z$ errors

## Related Entries

- [[surface-code-logical-qubit]] — Local 2D code with $O(d^2)$ overhead; qLDPC aims to beat this
- [[color-code-logical-qubit]] — Another local 2D code with transversal gates
- [[floquet-codes]] — Dynamical codes that may help implement qLDPC on local hardware
- [[tunable-coupler]] — Long-range and reconfigurable superconducting connectivity is central to small-code qLDPC implementations
- [[neutral-atom-qubit]] — Reconfigurable atom motion is a leading route to non-local qLDPC checks
