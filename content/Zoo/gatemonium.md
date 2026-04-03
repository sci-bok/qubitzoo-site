---
title: Gatemonium
entry_type: qubit
technology_family: Super-Semi
status: demonstrated
figure_reviewed: true
first_proposed_year: 2024
first_demonstrated_year: 2024
keywords:
  - gatemonium
  - gatemon
  - fluxonium
  - super-semi
  - voltage-tunable
  - superinductance
  - semiconductor Josephson junction
influence_score: 0.60
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: scibok-manual-2026-03-21
---

## Figure

![[gatemonium-figure.png]]

## Description

**Gatemonium** is a hybrid superconductor-semiconductor fluxonium qubit in which both the small Josephson junction and the superinductive shunt array are realized using gate-tunable Al/InAs Josephson junctions on a 2DEG (two-dimensional electron gas) platform. The name reflects its parentage: a **gatemon** (gate-voltage-tunable transmon) crossed with the **fluxonium** architecture (small junction shunted by a large superinductance).

The key innovation is that the Josephson energy $E_J$ of the single small junction can be continuously tuned by a gate voltage $V_g$ applied to the semiconductor channel, without requiring magnetic flux bias lines. This enables all-electrical frequency control and allows the device to be tuned between fundamentally different fluxonium operating regimes:

- **Light fluxonium** ($E_J \lesssim E_L$): Shallow cosine wells atop the parabolic inductive potential. Wavefunctions are delocalized across wells, and the qubit frequency is first-order insensitive to flux near the sweet spot — providing **flux noise protection**.
- **Heavy fluxonium** ($E_J \gg E_L$): Deep cosine wells with strongly localized states. Large $E_J/E_C$ ratio suppresses charge dispersion — providing **charge noise protection**.

The superinductance is achieved using approximately 600 planar Al-InAs Josephson junctions in series, each with large critical current so they behave as linear inductors. The 2DEG platform offers advantages over nanowire-based gatemons, including the ability to fabricate large junction arrays with controlled parameters.

## Hamiltonian

$$H = 4E_C(\hat{n} - n_g)^2 - E_J(V_g)\cos\hat{\varphi} + \frac{1}{2}E_L\hat{\varphi}^2$$

where:
- $E_C = e^2/(2C_\Sigma)$ is the charging energy
- $E_J(V_g)$ is the gate-voltage-tunable Josephson energy of the single junction
- $E_L = (\Phi_0/2\pi)^2/L_{\text{array}}$ is the inductive energy from the superinductive shunt
- $\hat{n}$ is the Cooper pair number operator conjugate to $\hat{\varphi}$
- $n_g$ is the offset charge

This is the standard fluxonium Hamiltonian, but with the critical distinction that $E_J$ is a continuously tunable function of the applied gate voltage rather than a fixed fabrication parameter. At half-flux-quantum bias ($\Phi_{\text{ext}} = \Phi_0/2$), the full Hamiltonian becomes $H = 4E_C(\hat{n} - n_g)^2 - E_J(V_g)\cos(\hat{\varphi} - \pi) + \frac{1}{2}E_L\hat{\varphi}^2$.

The nonsinusoidal current-phase relation of the semiconductor junction introduces corrections beyond the simple $\cos\hat{\varphi}$ potential, which are accounted for in spectroscopic fitting.

## Motivation

- Enables **all-electrical frequency tuning** of a fluxonium qubit without magnetic flux bias lines, simplifying wiring and reducing crosstalk at scale.
- Allows in-situ exploration of different fluxonium parameter regimes (light vs. heavy) on the **same device** by adjusting gate voltage.
- The 2DEG platform supports fabrication of large junction arrays with more uniform parameters than nanowire-based approaches.
- Potential path to enhanced coherence times through hybridization of fluxon and plasmon modes, and through high-plasma-frequency junction arrays.
- Demonstrates the viability of an all-superconductor-semiconductor platform for complex superconducting qubit circuits beyond the simple gatemon.

## Experimental Status

**First demonstration — Strickland et al. (2024):**
- Fabricated gatemonium using ~600 planar Al-InAs Josephson junctions in series for the superinductance.
- Demonstrated electrostatic control of effective Josephson energy via gate voltage on the single junction.
- Performed one- and two-tone spectroscopy revealing the hybrid plasmon-fluxon spectrum.
- Extracted charging and inductive energies by fitting measured spectra with a model accounting for nonsinusoidal current-phase relation.
- Time-domain characterization showed energy relaxation times limited by inductive loss, possibly in the thin aluminum film.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | TBD | Early-stage device; limited by inductive loss | [Strickland et al. 2024](https://arxiv.org/abs/2406.09002) |
| Qubit coherence $T_2$ | TBD | Not yet reported | — |
| $E_J$ tunability | Gate voltage | No flux bias lines needed | [Strickland et al. 2024](https://arxiv.org/abs/2406.09002) |
| Superinductance | ~600 JJs in series | Planar Al-InAs array | [Strickland et al. 2024](https://arxiv.org/abs/2406.09002) |
| Anharmonicity | Large (fluxonium-like) | $E_L \ll E_J$ regime accessible | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal and demonstration
- W. M. Strickland, B. H. Elfeky, L. Baker, A. Maiani, J. Lee, I. Levy, J. Issokson, A. Vrajitoarea, and J. Shabani, "Gatemonium: A Voltage-Tunable Fluxonium," [arXiv:2406.09002](https://arxiv.org/abs/2406.09002) (2024)

### Related fluxonium theory
- V. E. Manucharyan, J. Koch, L. I. Glazman, and M. H. Devoret, "Fluxonium: Single Cooper-Pair Circuit Free of Charge Offsets," [Science **326**, 113 (2009)](https://doi.org/10.1126/science.1175552)
- A. Somoroff, Q. Ficheux, R. A. Mencia, H. Xiong, R. V. Kuzmin, and V. E. Manucharyan, "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. **130**, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001)

### Related gatemon work
- L. Casparis, M. R. Connolly, M. Kjaergaard, N. J. Pearson, A. Kringhøj, T. W. Larsen, F. Kuemmeth, T. Wang, C. Thomas, S. Gronin, G. C. Gardner, M. J. Manfra, C. M. Marcus, and K. D. Petersson, "Superconducting gatemon qubit based on a proximitized two-dimensional electron gas," [Nat. Nanotechnol. **13**, 915 (2018)](https://doi.org/10.1038/s41565-018-0207-y)

## Linked Papers

- [[strickland-2024-gatemonium]]

## Related Entries

- [[gatemon]] — parent device (gate-tunable transmon, no superinductance)
- [[fluxonium]] — inductive shunt ancestor with oxide junctions
- [[transmon]] — capacitive shunt cousin
- [[andreev-spin-qubit]] — shares the Al/InAs material platform
- [[cos2phi-qubit]] — another protected superconducting qubit with superinductance
- [[flux-qubit]] — related persistent-current qubit
