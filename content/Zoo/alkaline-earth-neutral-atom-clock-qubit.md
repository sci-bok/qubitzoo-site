---
title: Alkaline-Earth Neutral-Atom Clock Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
figure_reviewed: true
first_proposed_year: 2008
first_demonstrated_year: 2020
keywords:
- neutral atom
- clock qubit
- alkaline-earth
- nuclear spin
- strontium
- ytterbium
- optical clock transition
influence_score: 0.69
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[alkaline-earth-neutral-atom-clock-qubit-figure.png]]

## Description

The alkaline-earth neutral-atom clock qubit encodes information in long-lived nuclear-spin or clock-compatible states of alkaline-earth(-like) atoms (e.g., Sr, Yb), with metastable electronic manifolds used for manipulation, addressing, or transport.

Unlike alkali Rydberg platforms centered on hyperfine ground states, this architecture exploits the multielectron structure of alkaline-earth atoms. The key encoding uses the $^1S_0$ ground state and $^3P_0$ metastable excited state — the same $J=0 \to J=0$ **optical clock transition** used in the world's most precise atomic clocks. This transition has a naturally narrow linewidth (metastable lifetime $\tau > 10\,\text{s}$ for Sr, $> 20\,\text{s}$ for Yb) and is first-order insensitive to magnetic field fluctuations:

$$\frac{\partial \omega_0}{\partial B} \approx 0$$

which is the central coherence advantage over many hyperfine encodings.

Proposals use separate optical potentials (**state-dependent lattices**) for the $^1S_0$ and $^3P_0$ manifolds to decouple storage and control operations while preserving long coherence-compatible encoding states. Entanglement is achieved via Rydberg excitation from the $^3P_0$ state, providing access to strong interactions while maintaining the coherence benefits of clock-state storage. For Sr, the clock transition is at 698 nm; for Yb, at 578 nm.

## Hamiltonian

A minimal clock-qubit + Rydberg-control model in tweezer/lattice arrays:

$$H = \sum_i \frac{\omega_0}{2}\sigma_z^{(i)} + \sum_i \left[\frac{\Omega_i(t)}{2}\sigma_x^{(i)} + \delta_i(t)\frac{1-\sigma_z^{(i)}}{2}\right] + \sum_{i<j} V_{ij} n_i n_j$$

where $\omega_0$ is the clock transition splitting (encoding $^1S_0 \leftrightarrow {^3P_0}$), $\Omega_i$ and $\delta_i$ are local control fields, and $V_{ij}$ is a Rydberg-mediated interaction term for entangling operations.

For clock-state encoding specifically, first-order magnetic sensitivity can be engineered to vanish at operating points, providing the central coherence advantage.

## Motivation

- Natural compatibility with **optical-clock-grade** internal states — leverages decades of atomic clock R&D
- Access to architecture-level control primitives (state-dependent lattices, narrow-line transitions) not available in simpler alkali-only manifolds
- Potential convergence path between neutral-atom quantum computing and quantum-metrology hardware stacks
- Nuclear spin encoding in $J=0$ states provides intrinsic protection from electronic decoherence channels

## Experimental Status

**Original proposal — Daley et al. (2008):**
- Proposed quantum computing with alkaline-earth-metal atoms using nuclear spin encoding
- Identified the clock transition and state-dependent lattices as key resources

**Architecture development — Daley, Ye, and Zoller (2011):**
- Developed detailed proposals for state-dependent lattices for quantum computing with alkaline-earth atoms
- Showed how separate trapping potentials for $^1S_0$ and $^3P_0$ enable independent control of storage and gate operations

**High-fidelity entanglement — Madjarov et al. (2020):**
- Demonstrated high-fidelity entanglement and detection of alkaline-earth Rydberg atoms using $^{88}$Sr in optical tweezers
- Experimental validation of the Rydberg entanglement pathway for alkaline-earth platforms

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Clock transition coherence | Very long ($\tau > 10$ s for Sr) | Metastable $^3P_0$ lifetime | [Daley et al. 2008](https://doi.org/10.1103/PhysRevLett.101.170504) |
| Gate/control strategy | State-dependent lattices + Rydberg entanglement | Separates storage and interaction | [Daley et al. 2011](https://doi.org/10.1140/epjd/e2011-20095-2) |
| Entanglement fidelity | High (demonstrated in Sr Rydberg) | Two-atom entanglement demonstrated | [Madjarov et al. 2020](https://doi.org/10.1038/s41567-020-0903-z) |
| Magnetic sensitivity | First-order insensitive | $J=0 \to J=0$ clock transition | — |

## References

### Original proposal
- A. J. Daley et al., "Quantum Computing with Alkaline-Earth-Metal Atoms," [Phys. Rev. Lett. 101, 170504 (2008)](https://doi.org/10.1103/PhysRevLett.101.170504)

### Architecture development
- A. J. Daley, J. Ye, and P. Zoller, "State-dependent lattices for quantum computing with alkaline-earth-metal atoms," [Eur. Phys. J. D 65, 207 (2011)](https://doi.org/10.1140/epjd/e2011-20095-2)

### Experimental demonstrations
- I. S. Madjarov et al., "High-fidelity entanglement and detection of alkaline-earth Rydberg atoms," [Nat. Phys. 16, 857 (2020)](https://doi.org/10.1038/s41567-020-0903-z)

## Linked Papers

- [[daley-2008-quantum-computing-with-alkaline-earth-atoms]]
- [[daley-2011-state-dependent-lattices-for-quantum-computing-with-alkaline-earth-metal-atoms]]
- [[madjarov-2020-high-fidelity-entanglement-and-detection-of-alkaline-earth-rydberg-atoms]]

## Related Entries

- [[rydberg-neutral-atom-qubit]] — alkali Rydberg platform with complementary trade-offs
- [[nuclear-spin-neutral-atom-qubit]] — closely related nuclear spin encoding approach
- [[trapped-ion-qubit]] — alternative platform with similar clock-state philosophy
