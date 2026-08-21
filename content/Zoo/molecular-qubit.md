---
title: Molecular Qubit
entry_type: qubit
technology_family: Molecular
status: demonstrated
figure_reviewed: true
first_proposed_year: 2001
first_demonstrated_year: 2015
keywords:
- molecular qubit
- molecular spin
- coordination complex
- spin coherence
- chemical synthesis
influence_score: 0.66
last_updated: '2026-08-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: codex-daily-deep-audit-2026-08-21
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/molecular-qubit-figure.provenance.json"
figure_reviewed_by: "Codex daily deep audit 2026-08-21"
figure_reviewed_at: "2026-08-21T14:06:11Z"
---

## Figure

![[molecular-qubit-figure.png]]

## Description

Molecular qubits encode quantum states in the electronic or nuclear spin degrees of freedom of chemically defined molecules—often transition-metal coordination complexes such as V(IV), Cu(II), Cr(III), or Fe phthalocyanines, and sometimes lanthanide complexes such as Tb(III) or Ho(III). Chemical synthesis provides bottom-up control of anisotropy, spin-orbit coupling, hyperfine structure, and the local vibrational and nuclear-spin environment.

The qubit Hamiltonian can therefore be engineered at synthesis time. Ligand design, isotope choice, local symmetry, dilution, and clock-transition engineering provide complementary routes to tune control matrix elements and suppress decoherence. For $S=1/2$ systems, zero-field splitting vanishes and the leading terms are Zeeman and hyperfine interactions; for $S\geq1$, crystal-field anisotropy creates additional addressable levels and avoided crossings.

This entry concerns **chemically synthesized molecular spin qubits**. It is distinct from [[polar-molecule-qubit|ultracold polar-molecule qubits]], which encode information in rotational/hyperfine states of optically trapped molecules and use electric dipole-dipole exchange. It is also distinct from a single molecule used only as the weak link of a superconducting circuit.

## Hamiltonian

A conventional effective spin Hamiltonian for a molecular-spin complex is

$$
H=D\!\left[S_z^2-\frac{S(S+1)}{3}\right]
+E(S_x^2-S_y^2)
+\mu_B\mathbf B\!\cdot\!\mathbf g\!\cdot\!\mathbf S
+\sum_k \mathbf S\!\cdot\!\mathbf A_k\!\cdot\!\mathbf I_k,
$$

where $D$ and $E$ are the axial and rhombic zero-field-splitting parameters, $\mathbf g$ is the generally anisotropic electronic $g$ tensor, and $\mathbf A_k$ couples the electron spin $\mathbf S$ to nuclear spin $\mathbf I_k$. The omitted nuclear-Zeeman and higher-order crystal-field terms can matter in precision spectroscopy but are usually smaller than the displayed electronic terms. For a fixed-spin manifold, subtracting $S(S+1)/3$ changes only the energy origin; it also makes explicit that the rank-two zero-field-splitting terms vanish for $S=1/2$.

After selecting an isolated doublet and moving to its eigenbasis, resonant control reduces to the usual driven-qubit form

$$
H_q(t)=\frac{\hbar\omega_{01}}{2}\sigma_z+\frac{\hbar\Omega(t)}{2}\sigma_x,
$$

with $\omega_{01}$ and the drive matrix element $\Omega(t)$ inherited from the full molecular Hamiltonian and the chosen magnetic- or electric-field coupling mechanism.

## Motivation

Molecular qubits offer a distinct advantage over lithographic platforms: synthetic tunability at the molecular level. This bridges quantum information with chemistry and materials design, enabling:

- Bottom-up Hamiltonian engineering through ligand, isotope, and symmetry choice
- Potential dense integration through self-assembly and crystallization
- Complementary anisotropy/coherence tradeoffs between lanthanide and transition-metal families
- Local electric control and switchable interactions at the single-molecule scale
- A natural platform for hybrid quantum sensing and spin-photon architectures

## Experimental Status

**Milestone coherence — Zadrozny et al. (2015):**
- Measured a Hahn-echo coherence time $T_2=0.7\,\text{ms}$ in a chemically tunable V(IV) coordination complex, establishing that ligand and nuclear-spin engineering can produce millisecond-scale ensemble coherence.

**Coupled molecular dimers — Ardavan et al. (2015):**
- Constructed coupled Cr$_7$Ni molecular-spin dimers while retaining phase coherence.
- For one dimer, the reported $T_2\approx0.8\,\mu\text{s}$ exceeded the interaction timescale $h/J\approx77\,\text{ns}$, supporting chemically engineered two-qubit operations, although no randomized-benchmarking gate fidelity was reported.

**Room-temperature optical control — Mena et al. (2024):**
- Demonstrated optically detected coherent control of photoexcited pentacene triplet spins at room temperature in both a molecular crystal and a thermally evaporated film.
- Reported photoluminescence contrast above $15\%$ and microsecond-scale coherence, establishing an ambient molecular spin–optical interface for sensing-oriented operation.

**Single-molecule ferrimagnet — Huang et al. (2025):**
- Used ESR-STM to coherently control a mixed-spin FePc–Fe(C$_6$H$_6$) molecular ferrimagnet with a protected ground-state doublet.
- Measured a single-molecule spin lifetime up to $T_1=1.6\,\mu\text{s}$ and demonstrated controllable ferro- and antiferromagnetic intermolecular coupling.

**All-electrical local control — Greule et al. (2026):**
- Demonstrated exchange-mediated spin-electric control of individual FePc and coupled Fe–FePc complexes.
- Observed nonlinear resonance shifts approaching $30\%$ near a molecular orbital and used voltage detuning in coherent Rabi-control experiments on single and coupled molecular spins.

**Current limits:**
- Ensemble coherence records, single-molecule lifetimes, and coupled-dimer interaction times probe different regimes and should not be compared as a single performance leaderboard.
- Scalable initialization, calibrated two-qubit gates, and high-fidelity single-molecule readout remain open integration bottlenecks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Hahn-echo $T_2$ | $0.7\,\text{ms}$ | Diluted V(IV) coordination complex; ensemble pulsed EPR | [Zadrozny et al. 2015](https://doi.org/10.1021/acscentsci.5b00338) |
| Coupled-dimer timescales | $T_2\approx0.8\,\mu\text{s}$; $h/J\approx77\,\text{ns}$ | Cr$_7$Ni dimer 1A; interaction supports a two-qubit gate timescale but is not a measured gate fidelity | [Ardavan et al. 2015](https://doi.org/10.1038/npjqi.2015.12) |
| Room-temperature optical contrast | $>15\%$ | Optically detected Rabi control of photoexcited pentacene triplets in crystal and thin film | [Mena et al. 2024](https://doi.org/10.1103/PhysRevLett.133.120801) |
| Single-molecule $T_1$ | Up to $1.6\,\mu\text{s}$ | FePc–Fe(C$_6$H$_6$) ferrimagnet measured by ESR-STM | [Huang et al. 2025](https://doi.org/10.1038/s41467-025-60409-w) |
| Electrical ESR tuning | $\Delta f/f_0\approx10$–$30\%$ | Nonlinear exchange-mediated shift near the FePc LUMO; coherent voltage detuning demonstrated | [Greule et al. 2026](https://doi.org/10.1038/s41567-026-03353-w) |

## References

### Original proposal
- M. N. Leuenberger and D. Loss, "Quantum computing in molecular magnets," [Nature 410, 789–793 (2001)](https://doi.org/10.1038/35071024) — [arXiv:cond-mat/0011415](https://arxiv.org/abs/cond-mat/0011415)

### Experimental demonstrations
- J. M. Zadrozny et al., "Millisecond Coherence Time in a Tunable Molecular Electronic Spin Qubit," [ACS Cent. Sci. 1, 488–492 (2015)](https://doi.org/10.1021/acscentsci.5b00338)
- A. Ardavan et al., "Engineering coherent interactions in molecular nanomagnet dimers," [npj Quantum Inf. 1, 15012 (2015)](https://doi.org/10.1038/npjqi.2015.12) — [arXiv:1510.01694](https://arxiv.org/abs/1510.01694)
- A. Mena et al., "Room-Temperature Optically Detected Coherent Control of Molecular Spins," [Phys. Rev. Lett. 133, 120801 (2024)](https://doi.org/10.1103/PhysRevLett.133.120801) — [arXiv:2402.07572](https://arxiv.org/abs/2402.07572)
- W. Huang et al., "Quantum spin-engineering in on-surface molecular ferrimagnets," [Nat. Commun. 16, 5208 (2025)](https://doi.org/10.1038/s41467-025-60409-w) — [arXiv:2410.18563](https://arxiv.org/abs/2410.18563)
- P. Greule et al., "Exchange-mediated spin–electric control of single molecules on surfaces," [Nat. Phys. (2026)](https://doi.org/10.1038/s41567-026-03353-w) — [arXiv:2507.13699](https://arxiv.org/abs/2507.13699)

### Reviews and design principles
- A. Gaita-Ariño et al., "Molecular spins for quantum computation," [Nat. Chem. 11, 301–309 (2019)](https://doi.org/10.1038/s41557-019-0232-y)
- J. J. Baldoví et al., "Design of Magnetic Polyoxometalates for Molecular Spintronics and as Spin Qubits," [Adv. Inorg. Chem. 69, 213–249 (2017)](https://doi.org/10.1016/bs.adioch.2016.12.003)

## Linked Papers

- [[leuenberger-2001-quantum-computing-molecular-magnets]]
- [[zadrozny-2015-millisecond-coherence-time]]
- [[ardavan-2015-coherent-molecular-nanomagnet-dimers]]
- [[mena-2024-room-temperature-optical-molecular-spin-control]]
- [[huang-2025-on-surface-molecular-ferrimagnets]]
- [[greule-2026-spin-electric-control-molecules]]
- [[gaitaario-2019-molecular-spins-computation]]
- [[baldov-2017-design-magnetic-polyoxometalates]]

## Evergreen context

- [[coherence-time-hierarchy]] — molecular platforms are best compared through how chemistry reshapes $T_2^*$ and $T_2$, especially by suppressing nuclear-spin and vibrational noise rather than by changing the logical encoding itself.
- [[spin-orbit-coupling-for-qubit-control]] — ligand-field engineering lets molecular qubits tune the same core tradeoff seen in hole-spin platforms: stronger spin-orbit structure can enable richer control, but it also opens extra dephasing channels.
- [[divincenzo-criteria]] — synthetic tunability helps with well-defined qubits and coherence engineering, but scalable two-qubit coupling and high-fidelity single-molecule readout are still the criteria that keep the platform exploratory.

## Related Entries

- [[polar-molecule-qubit]] — ultracold tweezer-trapped molecules using rotational/hyperfine states and dipolar exchange, rather than chemically synthesized molecular spins.
- [[nv-center-qubit]] — solid-state spin qubit with related coherence and single-spin readout strategies.
- [[spin-qubit]] — semiconductor spin qubit with complementary lithographic control and coupling mechanisms.
- [[qubit-readout]] — single-molecule initialization and readout remain central scaling bottlenecks.
