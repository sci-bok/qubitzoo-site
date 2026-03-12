---
title: Flux Qubit
entry_type: qubit
technology_family: Superconducting
status: seed
seed_id: '3'
seed_source: qubitzoo-airtable
first_proposed_year: 1999
keywords:
- flux qubit
- persistent current
- superconducting loop
- josephson junction
- rf squid
- three junction
influence_score: 0.75
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
figure_reviewed: true
---


## Description

The flux qubit (also called the persistent-current qubit) encodes quantum information in the direction of circulating persistent current in a superconducting loop interrupted by Josephson junctions. At an external flux bias of $\Phi_\text{ext} = \Phi_0/2$ (the degeneracy point), the two lowest-energy states correspond to clockwise and counterclockwise persistent currents of several hundred nanoamperes.

The original proposal by Orlando et al. (1999) uses a superconducting loop with three Josephson junctions, one of which is smaller by a factor $\alpha \approx 0.7{-}0.8$. This asymmetry frustrates the loop and creates a double-well potential in the phase space of the circuit. The qubit states $|0\rangle$ and $|1\rangle$ are the symmetric and antisymmetric superpositions of the persistent-current states, split by the tunnel coupling $\Delta$ through the potential barrier.

Flux qubits operate in the regime $E_J/E_C \sim 20{-}80$, intermediate between the transmon and the CPB. Their large anharmonicity (the $|2\rangle$ state is GHz above $|1\rangle$) makes them attractive for certain applications, but their sensitivity to $1/f$ flux noise at the degeneracy point historically limited coherence. Modern variants include the C-shunt flux qubit (capacitively shunted for improved $T_1$) and the fluxonium (which can be viewed as a flux qubit with a superinductance replacing two of the three junctions).


## Figure

![[flux-qubit-figure.png]]

## Hamiltonian

Near the degeneracy point, the effective two-level Hamiltonian is:

$$H = -\frac{1}{2}(\epsilon\,\sigma_z + \Delta\,\sigma_x)$$

where $\epsilon = 2I_p(\Phi_\text{ext} - \Phi_0/2)$ is the energy bias (proportional to flux detuning), $I_p$ is the persistent current, and $\Delta$ is the tunnel splitting.

The full circuit Hamiltonian for the three-junction loop:

$$U(\varphi_1, \varphi_2) = -E_{J1}\cos\varphi_1 - E_{J2}\cos\varphi_2 - \alpha E_J\cos(2\pi f + \varphi_1 - \varphi_2)$$

where $f = \Phi_\text{ext}/\Phi_0$ is the frustration parameter and $\alpha < 1$ is the junction asymmetry ratio.

## Motivation

The flux qubit was one of the three original superconducting qubit types (alongside charge and phase qubits). It provided the first macroscopic quantum superposition of persistent currents, demonstrating quantum coherence in a circuit carrying measurable electrical current. Its large anharmonicity and strong coupling to magnetic fields made it a testbed for fundamental quantum mechanics experiments and an early candidate for quantum annealing (D-Wave).

## Key Findings

- First spectroscopic observation of quantum superposition of macroscopic persistent-current states (Friedman et al. 2000; van der Wal et al. 2000).
- Three-junction design creates a controllable double-well potential via flux frustration.
- C-shunt variant (You et al. 2007; Yan et al. 2016) improved $T_1$ to >40 μs by reducing dielectric loss.
- Strong coupling to electromagnetic resonators demonstrated for readout and qubit-qubit coupling.
- Widely used in quantum annealing processors (D-Wave systems).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–55 μs | C-shunt: ~40–55 μs; traditional: ~1–5 μs | — |
| $T_2$ (echo) | 5–80 μs | At degeneracy point; C-shunt improved | — |
| Anharmonicity | 3–10 GHz | Much larger than transmon | — |
| Persistent current $I_p$ | 200–500 nA | Circulating supercurrent | [Orlando 1999](https://doi.org/10.1103/PhysRevB.60.15398) |
| Qubit frequency | 1–10 GHz | Tunable via external flux | — |
| 1Q gate fidelity | 99–99.9% | Microwave + flux pulses | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

- https://doi.org/10.1103/PhysRevB.60.15398

## Related Entries

- [[transmon]]
- [[fluxonium]]
- [[phase-qubit]]
- [[cooper-pair-box-charge-qubit]]
