---
title: Flux Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 1999
first_demonstrated_year: 2000
keywords:
- flux qubit
- persistent current
- superconducting loop
- josephson junction
- rf squid
- three junction
influence_score: 0.75
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[flux-qubit-figure.png]]

## Description

The flux qubit (also called the persistent-current qubit) encodes quantum information in the direction of circulating persistent current in a superconducting loop interrupted by Josephson junctions. At an external flux bias of $\Phi_\text{ext} = \Phi_0/2$ (the degeneracy point), the two lowest-energy states correspond to clockwise and counterclockwise persistent currents of several hundred nanoamperes.

The original proposal by Orlando et al. (1999) uses a superconducting loop with three Josephson junctions, one of which is smaller by a factor $\alpha \approx 0.7{-}0.8$. This asymmetry frustrates the loop and creates a double-well potential in the phase space of the circuit. The qubit states $|0\rangle$ and $|1\rangle$ are the symmetric and antisymmetric superpositions of the persistent-current states, split by the tunnel coupling $\Delta$ through the potential barrier.

Flux qubits operate in the regime $E_J/E_C \sim 20{-}80$, intermediate between the transmon and the CPB. Their large anharmonicity (the $|2\rangle$ state is GHz above $|1\rangle$) makes them attractive for certain applications, but their sensitivity to $1/f$ flux noise at the degeneracy point historically limited coherence. Modern variants include the C-shunt flux qubit (capacitively shunted for improved $T_1$) and the fluxonium (which can be viewed as a flux qubit with a superinductance replacing two of the three junctions).

## Hamiltonian

Near the degeneracy point, the effective two-level Hamiltonian is:

$$H = -\frac{1}{2}(\epsilon\,\sigma_z + \Delta\,\sigma_x)$$

where $\epsilon = 2I_p(\Phi_\text{ext} - \Phi_0/2)$ is the energy bias (proportional to flux detuning), $I_p$ is the persistent current, and $\Delta$ is the tunnel splitting.

The full circuit Hamiltonian for the three-junction loop:

$$U(\varphi_1, \varphi_2) = -E_{J1}\cos\varphi_1 - E_{J2}\cos\varphi_2 - \alpha E_J\cos(2\pi f + \varphi_1 - \varphi_2)$$

where $f = \Phi_\text{ext}/\Phi_0$ is the frustration parameter and $\alpha < 1$ is the junction asymmetry ratio.

## Motivation

The flux qubit was one of the three original superconducting qubit types (alongside charge and phase qubits). It provided the first macroscopic quantum superposition of persistent currents, demonstrating quantum coherence in a circuit carrying measurable electrical current. Its large anharmonicity and strong coupling to magnetic fields made it a testbed for fundamental quantum mechanics experiments and an early candidate for quantum annealing (D-Wave).

## Experimental Status

**First spectroscopic observation — Friedman et al. (2000), van der Wal et al. (2000):**
- Observed quantum superposition of macroscopic persistent-current states.
- Three-junction design creates a controllable double-well potential via flux frustration.

**C-shunt variant — Yan et al. (2016):**
- Capacitive shunting improved $T_1$ to >40 μs by reducing dielectric loss.
- Enhanced reproducibility compared to traditional flux qubits.

**Coupling and readout:**
- Strong coupling to electromagnetic resonators demonstrated for dispersive readout and qubit-qubit coupling.

**Quantum annealing:**
- Widely used in quantum annealing processors (D-Wave systems use flux-qubit-based architecture).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–55 μs | C-shunt: ~40–55 μs; traditional: ~1–5 μs | [Yan et al. 2016](https://doi.org/10.1038/ncomms12964) |
| $T_2$ (echo) | 5–80 μs | At degeneracy point; C-shunt improved | — |
| Anharmonicity | 3–10 GHz | Much larger than transmon | — |
| Persistent current $I_p$ | 200–500 nA | Circulating supercurrent | [Orlando et al. 1999](https://doi.org/10.1103/PhysRevB.60.15398) |
| Qubit frequency | 1–10 GHz | Tunable via external flux | — |
| 1Q gate fidelity | 99–99.9% | Microwave + flux pulses | [Yan et al. 2016](https://doi.org/10.1038/ncomms12964) |
| 2Q gate fidelity | 95–99% | CZ/iSWAP; flux qubits also used in quantum annealing where gate fidelity is not the standard metric | [Yan et al. 2016](https://doi.org/10.1038/ncomms12964) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal
- T. P. Orlando et al., "Superconducting persistent-current qubit," [Phys. Rev. B 60, 15398 (1999)](https://doi.org/10.1103/PhysRevB.60.15398) — [arXiv:cond-mat/9908283](https://arxiv.org/abs/cond-mat/9908283)

### Experimental demonstrations
- F. Yan et al., "The flux qubit revisited to enhance coherence and reproducibility," [Nat. Commun. 7, 12964 (2016)](https://doi.org/10.1038/ncomms12964)

## Linked Papers

- [[mooij-1999-flux-qubit]]

## Related Entries

- [[transmon]] — complementary superconducting qubit with weak anharmonicity
- [[fluxonium]] — flux qubit generalized with superinductance for enhanced coherence
- [[phase-qubit]] — the third original superconducting qubit type
- [[cooper-pair-box-charge-qubit]] — the charge-regime counterpart
