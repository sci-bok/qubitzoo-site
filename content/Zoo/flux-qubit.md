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
last_updated: '2026-05-30'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-05-30
---

## Figure

![[flux-qubit-figure.png]]

## Description

The flux qubit (also called the persistent-current qubit) encodes quantum information in the direction of circulating persistent current in a superconducting loop interrupted by Josephson junctions. At an external flux bias of $\Phi_\text{ext} = \Phi_0/2$ (the degeneracy point), the two lowest-energy states correspond to clockwise and counterclockwise persistent currents of several hundred nanoamperes.

The original proposal by Orlando et al. (1999) uses a superconducting loop with three Josephson junctions, one of which is smaller by a factor $\alpha \approx 0.7{-}0.8$. This asymmetry frustrates the loop and creates a double-well potential in the phase space of the circuit. The qubit states $|0\rangle$ and $|1\rangle$ are the symmetric and antisymmetric superpositions of the persistent-current states, split by the tunnel coupling $\Delta$ through the potential barrier.

Flux qubits operate in the regime $E_J/E_C \sim 20{-}80$, intermediate between the transmon and the CPB. Their large anharmonicity (the $|2\rangle$ state is GHz above $|1\rangle$) makes them attractive for certain applications, but their sensitivity to $1/f$ flux noise at the degeneracy point historically limited coherence. Modern variants include the C-shunt flux qubit (capacitively shunted for improved $T_1$) and the fluxonium (which can be viewed as a flux qubit with a superinductance replacing two of the three junctions).

## Hamiltonian

Near the degeneracy point, the effective two-level Hamiltonian is:

$$H_\mathrm{eff} = -\frac{1}{2}(\epsilon\,\sigma_z + \Delta\,\sigma_x)$$

where $\epsilon = 2I_p(\Phi_\text{ext} - \Phi_0/2)$ is the energy bias (proportional to flux detuning), $I_p$ is the persistent current, and $\Delta$ is the tunnel splitting.

A fuller circuit description for the standard three-junction design keeps two independent superconducting phases and their conjugate Cooper-pair numbers:

$$H = 4\,\mathbf{n}^{\mathsf T} E_C\, \mathbf{n} + U(\varphi_1, \varphi_2)$$

with Josephson potential

$$U(\varphi_1, \varphi_2) = -E_J\cos\varphi_1 - E_J\cos\varphi_2 - \alpha E_J\cos(2\pi f + \varphi_1 - \varphi_2),$$

where $f = \Phi_\text{ext}/\Phi_0$ is the frustration parameter and $\alpha < 1$ is the junction asymmetry ratio. Near $f \approx 1/2$ and for $\alpha \approx 0.7{-}0.8$, this potential develops the double-well structure whose localized states correspond to opposite circulating currents.

## Motivation

The flux qubit was one of the three original superconducting qubit types (alongside charge and phase qubits). It provided the first macroscopic quantum superposition of persistent currents, demonstrating quantum coherence in a circuit carrying measurable electrical current. Its large anharmonicity and strong coupling to magnetic fields made it a testbed for fundamental quantum mechanics experiments and an early candidate for quantum annealing (D-Wave).

## Experimental Status

**Foundational flux-qubit architecture (1999-2000):**
- Orlando et al. (1999) and Mooij et al. (1999) established the canonical three-junction persistent-current design near half-flux bias.
- Early 2000 experiments then confirmed spectroscopy and macroscopic-state superposition in persistent-current circuits, fixing the flux qubit as one of the original superconducting qubit modalities.

**C-shunt coherence revival — Yan et al. (2016):**
- Capacitive shunting pushed sweet-spot relaxation times beyond 40 μs in a planar flux-qubit design.
- This revived the gate-model flux-qubit line by reducing dielectric loss and improving device reproducibility.

**Annealing-oriented tunable CSFQ — Trappen et al. (2025):**
- A modern tunable capacitively shunted flux-qubit study mapped coherence across annealing-relevant biases and identified intrinsic low-frequency flux noise plus bias-line thermal noise as the dominant decoherence channels.
- In that device, Ramsey pure-dephasing at the symmetry point was only about 100-200 ns, with spin echo improving dephasing by roughly a factor of five, underscoring the different control-noise tradeoffs of annealing-oriented operation.

**Platform role today:**
- Flux qubits remain historically central and still matter for quantum annealing architectures, but the record-setting gate-model superconducting coherence frontier has largely shifted to descendants such as fluxonium and to transmon-family processors.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Persistent current $I_p$ | ~300 nA | Canonical three-junction persistent-current basis scale in the original Science proposal | [Mooij et al. 1999](https://doi.org/10.1126/science.285.5430.1036) |
| Junction asymmetry $\alpha$ | ~0.75 (typ. 0.7-0.8) | Smaller third junction sets the barrier height and tunnel splitting in the standard design | [Orlando et al. 1999](https://doi.org/10.1103/PhysRevB.60.15398) |
| $T_1$ (sweet-spot C-shunt flux qubit) | >40 μs | Planar capacitive-shunt redesign at the flux-insensitive point | [Yan et al. 2016](https://doi.org/10.1038/ncomms12964) |
| Tunable gap $\Delta/2\pi$ | ~1-6.2 GHz | Annealing-oriented tunable CSFQ coherence study across flux bias | [Trappen et al. 2025](https://doi.org/10.1038/s42005-025-02360-2) |
| Ramsey pure-dephasing $T_\phi$ | ~100-200 ns | 2025 tunable CSFQ study at the symmetry point, with spin echo improving dephasing by about 5× | [Trappen et al. 2025](https://doi.org/10.1038/s42005-025-02360-2) |

## References

### Foundational papers
- T. P. Orlando et al., "Superconducting persistent-current qubit," [Phys. Rev. B 60, 15398 (1999)](https://doi.org/10.1103/PhysRevB.60.15398) — [arXiv:cond-mat/9908283](https://arxiv.org/abs/cond-mat/9908283)
- J. E. Mooij et al., "Josephson Persistent-Current Qubit," [Science 285, 1036 (1999)](https://doi.org/10.1126/science.285.5430.1036)

### Modern coherence and noise benchmarks
- F. Yan et al., "The flux qubit revisited to enhance coherence and reproducibility," [Nat. Commun. 7, 12964 (2016)](https://doi.org/10.1038/ncomms12964)
- R. Trappen et al., "Decoherence of a tunable capacitively shunted flux qubit," [Commun. Phys. 8, 453 (2025)](https://doi.org/10.1038/s42005-025-02360-2)

## Linked Papers

- [[orlando-1999-superconducting-persistent-current]]
- [[mooij-1999-flux-qubit]]
- [[yan-2016-flux-qubit-revisited]]
- [[trappen-2025-decoherence-tunable-capacitively]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the cosine nonlinearity and frustrated loop physics that generate the persistent-current double well
- [[coherence-time-hierarchy]] — how to interpret sweet-spot Ramsey, echo, and relaxation numbers in a flux-noise-sensitive qubit
- [[dispersive-readout-mechanism]] — the resonator-based readout path that supplanted the original strong-perturbation SQUID-style measurement schemes

## Related Entries

- [[transmon]] — complementary superconducting qubit with weak anharmonicity
- [[fluxonium]] — flux qubit generalized with superinductance for enhanced coherence
- [[phase-qubit]] — the third original superconducting qubit type
- [[cooper-pair-box-charge-qubit]] — the charge-regime counterpart
