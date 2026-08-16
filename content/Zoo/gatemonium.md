---
title: Gatemonium
entry_type: qubit
technology_family: Super-Semi
status: demonstrated
figure_reviewed: false
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
last_updated: '2026-08-16'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: codex-daily-deep-audit-2026-08-16
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/gatemonium-figure.provenance.json"
figure_reviewed_by: "Codex daily deep audit 2026-08-16"
figure_reviewed_at: "2026-08-16T14:05:00+00:00"
---

## Figure

![[gatemonium-figure.png]]

## Description

**Gatemonium** is a hybrid superconductor-semiconductor fluxonium qubit in which both the small Josephson junction and the superinductive shunt array are realized as planar Al/InAs junctions on a two-dimensional-electron-gas (2DEG) platform. A top gate tunes the small junction; the array supplies the large linear inductance. The name reflects its parentage: a **gatemon** (gate-voltage-tunable transmon) crossed with the **fluxonium** architecture (small junction shunted by a superinductance).

The key innovation is that the Josephson energy $E_J$ of the small junction can be tuned continuously by a gate voltage $V_g$, without using a SQUID flux to tune $E_J$. The fluxonium loop still requires an external flux bias to select its operating point. Independent electrical control of $E_J$ lets one device move between different fluxonium regimes while remaining at a chosen flux sweet spot:

- **Light fluxonium** ($E_J/E_C < 1$ in the convention used by Strickland *et al.*): the Josephson corrugation is weak, the low spectrum approaches a single harmonic well, and transition frequencies become comparatively flat with external flux, suppressing flux-noise dephasing.
- **Heavy fluxonium** ($E_J/E_C > 1$): deep Josephson wells form near half flux and the charge-number matrix element $|\langle 0|\hat n|1\rangle|$ can become small, suppressing dielectric-loss-induced bit flips. This is not simultaneous protection from every charge- and flux-noise channel.

The superinductance is achieved using approximately 600 planar Al-InAs Josephson junctions in series, each with large critical current so they behave as linear inductors. The 2DEG platform offers advantages over nanowire-based gatemons, including the ability to fabricate large junction arrays with controlled parameters.

## Hamiltonian

$$H = 4E_C(\hat{n} - n_g)^2 + \frac{1}{2}E_L\left(\hat{\varphi}-\varphi_{\mathrm{ext}}\right)^2 + U_J(\hat{\varphi};V_g),$$

with the sinusoidal weak-link approximation

$$U_J(\hat{\varphi};V_g)=-E_J(V_g)\cos\hat{\varphi}, \qquad \varphi_{\mathrm{ext}}=2\pi\frac{\Phi_{\mathrm{ext}}}{\Phi_0}.$$

where:
- $E_C = e^2/(2C_\Sigma)$ is the charging energy
- $E_J(V_g)$ is the gate-voltage-tunable Josephson energy of the single junction
- $E_L = (\Phi_0/2\pi)^2/L_{\text{array}}$ is the inductive energy from the superinductive shunt
- $\hat{n}$ is the Cooper pair number operator conjugate to $\hat{\varphi}$
- $n_g$ is the offset charge
- $\varphi_{\mathrm{ext}}$ is the reduced external flux through the loop

This is the standard fluxonium Hamiltonian with a gate-dependent junction potential. At half-flux-quantum bias, $\varphi_{\mathrm{ext}}=\pi$; equivalent phase-origin conventions can move this offset from the inductive term into the Josephson term, but it must appear exactly once.

For a short semiconductor junction with channel transparencies $\tau_i$, the spectroscopic model instead uses an Andreev weak-link potential of the form

$$U_J(\hat{\varphi};V_g)=-\Delta\sum_i\sqrt{1-\tau_i(V_g)\sin^2(\hat{\varphi}/2)},$$

which captures the nonsinusoidal current-phase relation and reduces to the cosine model in the many-channel, low-transparency limit.

## Motivation

- Enables **electrical tuning of $E_J$** without a SQUID-control flux, reducing one source of magnetic crosstalk while retaining the ordinary fluxonium loop bias.
- Allows in-situ exploration of different fluxonium parameter regimes (light vs. heavy) on the **same device** by adjusting gate voltage.
- The 2DEG platform supports fabrication of large junction arrays with more uniform parameters than nanowire-based approaches.
- Potential path to enhanced coherence times through hybridization of fluxon and plasmon modes, and through high-plasma-frequency junction arrays.
- Demonstrates the viability of an all-superconductor-semiconductor platform for complex superconducting qubit circuits beyond the simple gatemon.

## Experimental Status

**First demonstration — Strickland et al. (2024 preprint; 2025 peer-reviewed publication):**
- Fabricated Device A with 600 planar Al-InAs Josephson junctions in series for the superinductance; Device B used 400.
- Demonstrated electrostatic control of effective Josephson energy via gate voltage on the single junction.
- Performed one- and two-tone spectroscopy revealing the hybrid plasmon-fluxon spectrum.
- Extracted charging and inductive energies by fitting measured spectra with a model accounting for nonsinusoidal current-phase relation.
- Demonstrated Rabi oscillations of a heavy-regime plasmon mode and measured $T_1=78\pm4$ ns in Device B; the inferred $Q_L\sim630$ indicates dominant inductive loss, plausibly associated with the thin aluminum film.

**Related gate-tunable-fluxonium milestone — Isakov et al. (2026 preprint):**
- Used a gate-tunable semiconductor junction in a nanowire fluxonium to realize a drive-induced flux-charge interaction.
- Demonstrated coherent control of the even-parity $|0\rangle\rightarrow|2\rangle$ transition at half flux through gate modulation, where a purely capacitive drive is parity-forbidden.
- Identified a charge-insensitive-with-variable-$E_J$ (ChIVE) operating point: the transition is first-order insensitive to gate-voltage noise while the flux-charge coupling remains finite. This is a related architecture rather than the same all-planar Al/InAs-array device.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Heavy-regime plasmon $T_1$ | $78\pm4$ ns | Device B near 6.35 GHz; inferred $Q_L\sim630$ and inductive-loss limitation | [Strickland et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010326) |
| Rabi-envelope decay | $102\pm24$ ns | Device B plasmon mode; this is not a Ramsey $T_2$ measurement | [Strickland et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010326) |
| Fitted effective $E_J/h$ range | approximately 6–50 GHz | Device A, from gate-dependent spectroscopy with a nonsinusoidal weak-link model | [Strickland et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010326) |
| Junction-array size | 600 (Device A); 400 (Device B) | Planar Al-InAs junctions in series | [Strickland et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010326) |
| Inductive energy $E_L/h$ | 2.80 GHz (A); 4.97 GHz (B) | Spectroscopic fits | [Strickland et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010326) |
| Base temperature | 12 mK | Cryogen-free dilution refrigerator | [Strickland et al. 2025](https://doi.org/10.1103/PRXQuantum.6.010326) |

## References

### Original demonstration
- W. M. Strickland, B. H. Elfeky, L. Baker, A. Maiani, J. Lee, I. Levy, J. Issokson, A. Vrajitoarea, and J. Shabani, "Gatemonium: A Voltage-Tunable Fluxonium," [PRX Quantum **6**, 010326 (2025)](https://doi.org/10.1103/PRXQuantum.6.010326); [arXiv:2406.09002](https://arxiv.org/abs/2406.09002)

### Related gate-tunable fluxonium control
- B. D. Isakov, S. Singh, A. Parra-Rodriguez, D. Feldstein-Bofill, Z. Sun, A. Kringhøj, S. Krøjer, A. Blais, M. Kjaergaard, and A. Gyenis, "Observation of coherent flux-charge interaction in a gate-tunable fluxonium," [arXiv:2607.07798](https://arxiv.org/abs/2607.07798) (2026)

### Related fluxonium theory
- V. E. Manucharyan, J. Koch, L. I. Glazman, and M. H. Devoret, "Fluxonium: Single Cooper-Pair Circuit Free of Charge Offsets," [Science **326**, 113 (2009)](https://doi.org/10.1126/science.1175552)
- A. Somoroff, Q. Ficheux, R. A. Mencia, H. Xiong, R. V. Kuzmin, and V. E. Manucharyan, "Millisecond Coherence in a Superconducting Qubit," [Phys. Rev. Lett. **130**, 267001 (2023)](https://doi.org/10.1103/PhysRevLett.130.267001)

### Related gatemon work
- L. Casparis, M. R. Connolly, M. Kjaergaard, N. J. Pearson, A. Kringhøj, T. W. Larsen, F. Kuemmeth, T. Wang, C. Thomas, S. Gronin, G. C. Gardner, M. J. Manfra, C. M. Marcus, and K. D. Petersson, "Superconducting gatemon qubit based on a proximitized two-dimensional electron gas," [Nat. Nanotechnol. **13**, 915 (2018)](https://doi.org/10.1038/s41565-018-0207-y)

## Linked Papers

- [[strickland-2024-gatemonium]]
- [[isakov-2026-coherent-flux-charge-interaction]]
- [[manucharyan-2009-fluxonium]]
- [[somoroff-2023-millisecond-coherence-superconducting]]
- [[casparis-2018-ge-gatemon]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — gatemonium swaps the fixed tunnel junction for a gate-tunable semiconductor weak link.
- [[cos2phi]] — the weak link's nonsinusoidal current-phase relation makes gatemonium a useful bridge note for when higher-harmonic Josephson physics starts to matter inside an otherwise fluxonium-like circuit.
- [[charge-noise-in-superconducting-qubits]] — gate-voltage noise modulates the semiconductor weak link, while fluxonium matrix elements and sweet spots determine how strongly that noise reaches a chosen transition.
- [[charge-noise-sweet-spot]] — a gate-tunable fluxonium can reach transition-frequency extrema with respect to $E_J$, including the ChIVE mechanism demonstrated in 2026.
- [[quantum-hardware]] — it is a useful bridge note for how a super-semi platform can inherit the superconducting control stack while opening a new materials-design axis.

## Related Entries

- [[gatemon]] — parent device (gate-tunable transmon, no superinductance)
- [[fluxonium]] — inductive shunt ancestor with oxide junctions
- [[transmon]] — capacitive shunt cousin
- [[andreev-spin-qubit]] — shares the Al/InAs material platform
- [[all-semiconductor-superconducting-qubit]] — umbrella entry for circuits built entirely from semiconductor weak links
- [[mergemon]] — related multi-junction semiconductor-superconductor qubit architecture
- [[cos2phi-qubit]] — another protected superconducting qubit with superinductance
- [[flux-qubit]] — related persistent-current qubit
