---
title: Alkaline-Earth Neutral-Atom Clock Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
first_proposed_year: 2008
keywords:
  - neutral atom
  - clock qubit
  - alkaline-earth
  - nuclear spin
influence_score: 0.69
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
published: 2008-01-01
---

# Alkaline-Earth Neutral-Atom Clock Qubit

A neutral-atom qubit subtype where information is encoded in long-lived nuclear-spin / clock-compatible states of alkaline-earth(-like) atoms (e.g., Sr, Yb), with metastable electronic manifolds used for manipulation, addressing, or transport.

## Physics

Unlike alkali Rydberg platforms centered on hyperfine ground states, this architecture exploits the multielectron structure of alkaline-earth atoms. Proposals use separate optical potentials for \(^1S_0\) and \(^3P_0\) manifolds to decouple storage and control operations while preserving long coherence-compatible encoding states.

## Hamiltonian

A minimal clock-qubit + Rydberg-control model in tweezer/lattice arrays:

$$H = \sum_i \frac{\omega_0}{2}\sigma_z^{(i)} + \sum_i \left[\frac{\Omega_i(t)}{2}\sigma_x^{(i)} + \delta_i(t)\frac{1-\sigma_z^{(i)}}{2}\right] + \sum_{i<j} V_{ij} n_i n_j$$

where $\omega_0$ is the clock transition splitting (e.g., $^1S_0 \leftrightarrow ^3P_0$ manifold-encoded qubit), $\Omega_i$ and $\delta_i$ are local control fields, and $V_{ij}$ is a state-dependent interaction term (often Rydberg-mediated for entangling operations).

For clock-state encoding specifically, first-order magnetic sensitivity can be engineered to vanish at operating points:

$$\frac{\partial \omega_0}{\partial B} \approx 0$$

which is the central coherence advantage over many hyperfine encodings.


## Figure

![[alkaline-earth-neutral-atom-clock-qubit-figure.png]]

## Why it matters

- Natural compatibility with optical-clock-grade internal states.
- Access to architecture-level control primitives not available in simpler alkali-only manifolds.
- Potential convergence path between neutral-atom quantum computing and quantum-metrology hardware stacks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Core qubit encoding model | Long-lived nuclear-spin / clock-compatible states | Distinct from alkali hyperfine-only architecture assumptions | [[daley-2008-quantum-computing-with-alkaline-earth-atoms]], [[daley-2011-state-dependent-lattices-for-quantum-computing-with-alkaline-earth-metal-atoms]] |
| Gate/control strategy | State-dependent lattices + metastable-state control; compatible with Rydberg entangling pathways | Architecture proposals plus subsequent alkaline-earth Rydberg experiments | [[daley-2011-state-dependent-lattices-for-quantum-computing-with-alkaline-earth-metal-atoms]], [[madjarov-2020-high-fidelity-entanglement-and-detection-of-alkaline-earth-rydberg-atoms]] |
| Demonstrated alkaline-earth entanglement performance | High-fidelity two-atom entanglement demonstrated | Experimental support for practical alkaline-earth neutral-atom processing | [[madjarov-2020-high-fidelity-entanglement-and-detection-of-alkaline-earth-rydberg-atoms]] |

## Linked Papers

- [[daley-2008-quantum-computing-with-alkaline-earth-atoms]]
- [[daley-2011-state-dependent-lattices-for-quantum-computing-with-alkaline-earth-metal-atoms]]
- [[madjarov-2020-high-fidelity-entanglement-and-detection-of-alkaline-earth-rydberg-atoms]]

## Related Entries

- [[rydberg-neutral-atom-qubit]]
- [[trapped-ion-qubit]]
