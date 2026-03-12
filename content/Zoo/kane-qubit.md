---
title: Kane Qubit (Phosphorus-in-Silicon)
entry_type: qubit
technology_family: Semiconducting
status: seed
seed_id: '26'
seed_source: qubitzoo-airtable
first_proposed_year: 1998
keywords:
- kane qubit
- phosphorus
- silicon
- donor
- nuclear spin
- electron spin
- exchange coupling
influence_score: 0.76
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
figure_reviewed: true
---


## Description

The Kane qubit, proposed by Bruce Kane in 1998, encodes quantum information in the nuclear spin of individual $^{31}\text{P}$ donor atoms embedded in isotopically pure $^{28}\text{Si}$. The nuclear spin ($I = 1/2$) of phosphorus has extraordinarily long coherence times — $T_2 > 30\,\text{s}$ has been demonstrated — because the nuclear spin couples very weakly to the environment.

The architecture uses three types of gate electrodes above each donor:
1. **A-gates**: control the hyperfine coupling $A$ between the donor electron and nuclear spin, enabling selective NMR addressing of individual nuclei.
2. **J-gates**: control the exchange interaction $J$ between electrons on neighboring donors, mediating two-qubit gates.
3. **Global RF/microwave fields**: drive ESR/NMR transitions.

Single-qubit gates are performed by NMR pulses on individual nuclei (made distinguishable by A-gate detuning of the hyperfine coupling). Two-qubit gates use the electron-mediated exchange interaction, controlled by the J-gate voltage.

The silicon host is chosen for its nuclear-spin-free isotope ($^{28}\text{Si}$), eliminating magnetic noise from the lattice. Single-atom placement with scanning tunneling microscope (STM) lithography has been demonstrated by the Simmons group (UNSW), achieving atomic-precision donor placement.


## Figure

![[kane-qubit-figure.png]]

## Hamiltonian

Two-donor system:

$$H = \sum_{i=1,2}\left[\frac{g_e\mu_B B}{2}\sigma_z^{(e_i)} - \frac{g_n\mu_n B}{2}\sigma_z^{(n_i)} + A_i\,\mathbf{S}_{e_i}\cdot\mathbf{I}_{n_i}\right] + J\,\mathbf{S}_{e_1}\cdot\mathbf{S}_{e_2}$$

where $A_i$ is the gate-tunable contact hyperfine coupling for donor $i$, $J$ is the exchange coupling between donor electrons, $g_e$ ($g_n$) is the electron (nuclear) $g$-factor, and $B$ is the applied magnetic field.

At $B \sim 2\,\text{T}$, the electron Zeeman splitting ($\sim 56\,\text{GHz}$) far exceeds the hyperfine coupling ($A \sim 117\,\text{MHz}$ in bulk), so the electron spin adiabatically follows the nuclear spin state, mediating an effective nuclear-nuclear interaction.

## Motivation

Nuclear spins in silicon offer the longest coherence times of any solid-state qubit, and silicon fabrication is the most mature semiconductor technology on Earth. Kane's proposal connects quantum computing to the existing trillion-dollar silicon fab infrastructure, with qubit densities potentially approaching CMOS transistor scales.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Nuclear $T_1$ | >30 hours | $^{31}$P in $^{28}$Si at 1.5 K | — |
| Nuclear $T_2$ (echo) | >35 s | World record for solid-state qubit | [Muhonen 2014](https://doi.org/10.1038/nnano.2014.211) |
| Electron $T_2$ | 0.5–1 s | In $^{28}$Si | — |
| 1Q gate fidelity | 99.95% | Nuclear spin, NMR control | — |
| 2Q gate fidelity | 99.4% | Exchange-mediated | — |
| Donor spacing | 10–20 nm | STM lithography placement | — |
| Hyperfine coupling $A$ | ~117 MHz | Bulk value; gate-tunable | [Kane 1998](https://doi.org/10.1038/front_23906a0) |
| Operating temperature | 100 mK – 1 K | Electron spin relaxation limited | — |

## Related Entries

- [[spin-qubit]]
- [[single-spin-quantum-dot-loss-divincenzo-qubit]]
