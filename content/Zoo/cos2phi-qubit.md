---
title: cos(2φ) Qubit
entry_type: qubit
technology_family: Superconducting
status: proposed
first_proposed_year: 2019
keywords:
- cos2phi
- protected qubit
- charge noise
- flux noise
- superconducting
- disjoint support
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The cos(2φ) qubit is a proposed superconducting qubit with intrinsic protection against both charge noise and flux noise simultaneously, achieved through a potential energy that is $\pi$-periodic in the superconducting phase $\phi$ rather than $2\pi$-periodic. The qubit states are encoded in two degenerate minima of this $\cos(2\phi)$ potential, and transitions between them require tunneling through a large barrier — exponentially suppressing both bit-flip and phase-flip errors.


## Figure

![[cos2phi-qubit-figure.png]]

## Description

Most superconducting qubits are protected against one type of noise at the cost of sensitivity to another. The transmon suppresses charge noise by operating at large $E_J/E_C$, but gains sensitivity to flux noise. The flux qubit can be biased to a sweet spot for flux noise but remains charge-sensitive. The cos(2φ) qubit breaks this tradeoff.

The key insight: if the Josephson potential is $\cos(2\phi)$ rather than $\cos(\phi)$, the two qubit states $|0\rangle$ and $|1\rangle$ have wavefunctions localized in different wells separated by $\pi$ in phase space. Crucially, the charge and flux matrix elements connecting $|0\rangle$ and $|1\rangle$ are both exponentially small in the barrier height — the operators $\hat{\phi}$ and $\hat{n}$ have disjoint support on the two qubit states.

Proposed implementations use circuits with pairs of Josephson junctions arranged to cancel the $\cos(\phi)$ term and retain only $\cos(2\phi)$, typically involving a superinductance and carefully tuned junction asymmetry.

## Hamiltonian

Effective Hamiltonian:

$$H = 4E_C \hat{n}^2 + \frac{1}{2}E_L \hat{\phi}^2 - E_J \cos(2\hat{\phi})$$

where $E_C$ is the charging energy, $E_L$ is the inductive energy from the superinductance, and $E_J$ is the effective Josephson energy of the $\cos(2\phi)$ element.

The qubit states are the symmetric and antisymmetric combinations of wavefunctions localized near $\phi = 0$ and $\phi = \pi$:

$$|0\rangle \approx \frac{1}{\sqrt{2}}(|\phi \approx 0\rangle + |\phi \approx \pi\rangle)$$
$$|1\rangle \approx \frac{1}{\sqrt{2}}(|\phi \approx 0\rangle - |\phi \approx \pi\rangle)$$

Protection mechanism: $\langle 0|\hat{n}|1\rangle \sim e^{-S}$ and $\langle 0|\hat{\phi}|1\rangle \sim e^{-S}$ where $S$ is the WKB tunneling action through the barrier.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Predicted $T_1$ enhancement | $10^2$–$10^4$ × | Over transmon, from exponential suppression | [[kalashnikov-2019-cos2phi]] |
| Protection type | Charge + flux | Simultaneous protection (unique among SC qubits) | [[kalashnikov-2019-cos2phi]] |
| Required inductance | >100 nH | Superinductance (granular aluminum or JJ array) | — |
| Experimental status | Not yet realized | Circuit complexity is the barrier | — |

## Scaling Considerations

- **Circuit complexity:** Requires precise cancellation of $\cos(\phi)$ terms, demanding high junction symmetry and stable superinductance.
- **Not yet demonstrated:** Remains theoretical. The required parameter regime is at the edge of current fabrication capabilities.
- **Potential payoff:** If realized, would be the first superconducting qubit with built-in protection against all local noise channels, potentially eliminating the need for QEC at the physical level for memory operations.

## Related Entries
- [[0-pi-qubit]]
- [[fluxonium]]
- [[heavy-fluxonium-qubit]]
- [[blochnium]]
