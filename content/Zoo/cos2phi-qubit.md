---
title: cos(2φ) Qubit
entry_type: qubit
technology_family: Superconducting
status: proposed
figure_reviewed: true
first_proposed_year: 2019
keywords:
- cos2phi
- protected qubit
- charge noise
- flux noise
- superconducting
- disjoint support
- two-Cooper-pair tunneling
influence_score: 0.60
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[cos2phi-qubit-figure.png]]

## Description

The cos(2φ) qubit is a proposed superconducting qubit with intrinsic protection against both charge noise and flux noise simultaneously, achieved through a potential energy that is $\pi$-periodic in the superconducting phase $\phi$ rather than $2\pi$-periodic. The qubit states are encoded in two degenerate minima of this $\cos(2\phi)$ potential, and transitions between them require tunneling through a large barrier — exponentially suppressing both bit-flip and phase-flip errors.

Most superconducting qubits are protected against one type of noise at the cost of sensitivity to another. The transmon suppresses charge noise by operating at large $E_J/E_C$, but gains sensitivity to flux noise. The flux qubit can be biased to a sweet spot for flux noise but remains charge-sensitive. The cos(2φ) qubit breaks this tradeoff.

The key insight: if the Josephson potential is $\cos(2\phi)$ rather than $\cos(\phi)$, the two qubit states $|0\rangle$ and $|1\rangle$ have wavefunctions localized in different wells separated by $\pi$ in phase space. Crucially, the charge and flux matrix elements connecting $|0\rangle$ and $|1\rangle$ are both exponentially small in the barrier height — the operators $\hat{\phi}$ and $\hat{n}$ have **disjoint support** on the two qubit states.

Proposed implementations use circuits with pairs of Josephson junctions arranged to cancel the $\cos(\phi)$ term and retain only $\cos(2\phi)$, typically involving a superinductance and carefully tuned junction asymmetry.

## Hamiltonian

Effective Hamiltonian:

$$H = 4E_C \hat{n}^2 + \frac{1}{2}E_L \hat{\phi}^2 - E_J \cos(2\hat{\phi})$$

where $E_C$ is the charging energy, $E_L$ is the inductive energy from the superinductance, and $E_J$ is the effective Josephson energy of the $\cos(2\phi)$ element.

The qubit states are the symmetric and antisymmetric combinations of wavefunctions localized near $\phi = 0$ and $\phi = \pi$:

$$|0\rangle \approx \frac{1}{\sqrt{2}}(|\phi \approx 0\rangle + |\phi \approx \pi\rangle)$$
$$|1\rangle \approx \frac{1}{\sqrt{2}}(|\phi \approx 0\rangle - |\phi \approx \pi\rangle)$$

Protection mechanism: $\langle 0|\hat{n}|1\rangle \sim e^{-S}$ and $\langle 0|\hat{\phi}|1\rangle \sim e^{-S}$ where $S$ is the WKB tunneling action through the barrier.

## Motivation

- **Dual protection:** First superconducting qubit proposal with simultaneous exponential suppression of both charge and flux noise — breaks the transmon/fluxonium tradeoff.
- **Disjoint support:** Qubit states have exponentially small overlap in both charge and flux basis, making all local noise channels exponentially suppressed.
- **Potential QEC bypass:** If realized, could eliminate the need for quantum error correction at the physical level for memory operations.
- **Scalable protection:** Protection improves exponentially with barrier height, which is a tunable circuit parameter.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Predicted $T_1$ enhancement | $10^2$–$10^4$ × | Over transmon, from exponential suppression | [Smith et al. 2020](https://doi.org/10.1038/s41534-019-0231-2) |
| Protection type | Charge + flux | Simultaneous protection (unique among SC qubits) | [Smith et al. 2020](https://doi.org/10.1038/s41534-019-0231-2) |
| Required inductance | >100 nH | Superinductance (granular aluminum or JJ array) | — |
| Experimental status | Not yet realized | Circuit complexity is the barrier | — |

## Scaling Considerations

- **Circuit complexity:** Requires precise cancellation of $\cos(\phi)$ terms, demanding high junction symmetry and stable superinductance.
- **Not yet demonstrated:** Remains theoretical. The required parameter regime is at the edge of current fabrication capabilities.
- **Potential payoff:** If realized, would be the first superconducting qubit with built-in protection against all local noise channels, potentially eliminating the need for QEC at the physical level for memory operations.

## References

### Original proposal
- W. C. Smith et al., "Superconducting circuit protected by two-Cooper-pair tunneling," [npj Quantum Inf. 6, 8 (2020)](https://doi.org/10.1038/s41534-019-0231-2) — [arXiv:1905.01206](https://arxiv.org/abs/1905.01206)

### Related theory
- A. Kitaev, "Protected qubit based on a superconducting current mirror," [arXiv:cond-mat/0609441](https://arxiv.org/abs/cond-mat/0609441) (2006)
- P. Brooks, A. Kitaev, and J. Preskill, "Protected gates for superconducting qubits," [Phys. Rev. A 87, 052306 (2013)](https://doi.org/10.1103/PhysRevA.87.052306) — [arXiv:1302.4122](https://arxiv.org/abs/1302.4122)

## Linked Papers

- [[smith-2020-cos2phi]]

## Related Entries

- [[0-pi-qubit]] — Related protected qubit with $\cos(\phi)$ potential at $\pi$-sweet spot
- [[fluxonium]] — Uses superinductance but has $2\pi$-periodic potential
- [[heavy-fluxonium-qubit]] — Heavy variant approaching protected regime
- [[blochnium]] — Single-junction superinductance qubit
