---
title: SiV / SnV Color Center Qubit
entry_type: qubit
technology_family: Color Center
moc_facets: [Spin-Photon]
status: demonstrated
figure_reviewed: true
first_proposed_year: 2017
first_demonstrated_year: 2017
keywords:
- silicon-vacancy
- tin-vacancy
- diamond
- color center
- quantum network
- spin-photon interface
- group-IV vacancy
influence_score: 0.82
last_updated: '2026-11-25'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-11-25
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/siv-color-center-qubit-figure.provenance.json"
figure_reviewed_by: "Scibok deep audit 2026-11-25 full-resolution review"
figure_reviewed_at: "2026-11-25T15:18:11.387828+00:00"
---

## Figure

![[siv-color-center-qubit-figure.png]]

## Description

Silicon-vacancy (SiV⁻) and tin-vacancy (SnV⁻) centers in diamond are group-IV color center qubits with inversion symmetry that protects their optical transitions from electric field noise. This gives them spectrally stable, nearly transform-limited optical emission — a critical advantage over NV centers for quantum networking, where photon indistinguishability is essential for remote entanglement.

Group-IV color centers (SiV, GeV, SnV, PbV) share a **split-vacancy structure**: the impurity atom sits at an inversion center between two vacant carbon sites. This $D_{3d}$ symmetry eliminates first-order coupling to electric fields (Stark effect), producing narrow, stable optical lines even in nanostructures.

**SiV⁻:** The ground-state manifold contains two spin-orbit orbital branches separated by about 48 GHz in a low-strain center; each branch is a Kramers spin-1/2 doublet. The qubit uses Zeeman-split spin states in the lower branch. Its 737 nm optical transition places about 70% of fluorescence in the zero-phonon line (ZPL), versus roughly 3–4% for NV centers. The small ground-state branch splitting makes the spin sensitive to resonant acoustic phonons, so millisecond electronic-spin coherence requires sub-kelvin operation, typically near 100 mK unless strain engineering increases the splitting.

**SnV⁻:** The much larger ground-state branch splitting (~850 GHz in a low-strain center) suppresses one-phonon orbital relaxation at higher temperatures, enabling spin coherence at ~1–2 K — accessible with a standard ³He cryostat rather than a dilution refrigerator. Its optical transition is near 619 nm, with a measured low-temperature Debye-Waller factor of $0.57(1)$.

Both are promising for quantum repeater nodes, where spin-photon entanglement and photon-mediated remote spin-spin entanglement are the core operations.

## Hamiltonian

For either the ground ($m=g$) or excited ($m=e$) manifold, a representative four-level effective Hamiltonian in the orbital basis $(|e_x\rangle,|e_y\rangle)$ and spin basis $(|\uparrow\rangle,|\downarrow\rangle)$ is

$$H^{(m)} = H_{\mathrm{SO}}^{(m)} + H_{\mathrm{JT/strain}}^{(m)} + H_{Z,S}^{(m)} + H_{Z,L}^{(m)},$$

with, up to basis-dependent signs,

$$\frac{H_{\mathrm{SO}}^{(m)}}{\hbar}=\frac{\lambda_m}{2}\,\tau_y\sigma_z,\qquad \frac{H_{\mathrm{JT/strain}}^{(m)}}{\hbar}=\Upsilon_{x,m}\tau_z+\Upsilon_{y,m}\tau_x,$$

$$H_{Z,S}^{(m)}\simeq \frac{g_{S,m}\mu_B}{2}\,\mathbf B\cdot\boldsymbol\sigma,\qquad H_{Z,L}^{(m)}\simeq q_m\mu_B B_z\tau_y.$$

Here $\tau_i$ and $\sigma_i$ act on orbital and spin subspaces, respectively; $\Upsilon_{x,y}$ collect transverse strain and dynamic Jahn-Teller terms; and $q_m$ is an orbitally reduced Zeeman coefficient. The zero-field orbital-branch splitting is

$$\Delta_m=\sqrt{\lambda_m^2+4\left(\Upsilon_{x,m}^2+\Upsilon_{y,m}^2\right)},$$

so the commonly quoted 48 GHz (SiV⁻) and 850 GHz (SnV⁻) values are low-strain ground-manifold splittings, not universally equal to a bare spin-orbit constant. Qubit states are the Zeeman-split Kramers pair within the lower branch. Strain mixes the orbital states and can enable otherwise suppressed microwave transitions, but too much mixing reduces optical cycling.

## Motivation

- **Spectral stability:** Inversion symmetry suppresses the first-order Stark response to homogeneous electric fields, enabling near-transform-limited optical transitions in nanostructures — critical for photon-mediated entanglement.
- **High ZPL fraction:** About 70% (SiV⁻) and $57(1)\%$ at low temperature (SnV⁻) of emission enters the zero-phonon line, versus roughly 3–4% for NV⁻.
- **Quantum networking:** Best-in-class spin-photon interface for diamond platforms; SiV demonstrated metropolitan-scale entanglement.
- **Temperature tradeoff spectrum:** SiV (100 mK) → SnV (1.5 K) → PbV (potentially higher) — SnV already accessible without dilution refrigerator.
- **Nanophotonic integration:** High ZPL fraction enables efficient cavity coupling; SiV nanocavities have demonstrated single-photon cooperativity above 30 and a nearly deterministic photon-spin interface.

## Experimental Status

**SiV spin coherence — Sukachev et al. (2017):**
- Demonstrated SiV spin qubit as quantum memory exceeding 10 ms coherence
- CPMG coherence $T_2=13$ ms, relaxation $T_1>1$ s, and single-shot spin readout fidelity of 89% at 100 mK

**SiV quantum network — Nguyen et al. (2019):**
- Demonstrated a cavity-coupled SiV network node with cooperativity $C>30$, electron-spin memory above 1 ms, and a proximal $^{13}$C memory approaching one second
- Demonstrated heralded storage of photonic time-bin qubits and universal control of a two-qubit local register; this paper did **not** demonstrate remote two-node entanglement

**Metropolitan entanglement — Knaut et al. (2024):**
- Entanglement of SiV quantum memory nodes across a deployed telecom fiber network in Boston
- Electron-spin Bell-state fidelities of $0.86(3)$ and $0.74(3)$ locally, and error-detected nuclear-spin Bell fidelity $0.77(5)$
- Nuclear-memory entanglement fidelity $0.69(7)$ through a 35 km deployed urban fiber loop; entanglement also persisted through 40 km fiber spools

**SnV coherence — Debroux et al. (2021):**
- Quantum control of SnV spin qubit at 1.7 K (³He cryostat)
- All-optical control with $T_2^*=1.3(3)\,\mu\text{s}$, Hahn echo $T_2=28.3(6)\,\mu\text{s}$, and CPMG-2 $T_2=0.33(14)$ ms

**High-fidelity SnV control and readout — Rosenthal et al. (2023, 2024); Karapatzakis et al. (2024):**
- Microwave $\pi$-pulse fidelity $99.51(3)\%$ at 1.7 K
- Superconducting-waveguide control reached Hahn-echo $T_2=430\,\mu\text{s}$ and dynamical-decoupling $T_2=10$ ms
- Single-shot electronic-spin readout reached 87.4%, or 98.5% when conditioning on repeated readouts

**Electro-nuclear SnV interface — Harris et al. (2025):**
- Demonstrated zero-field control of a $^{117}$SnV⁻ electron-nuclear spin-photon interface integrated with a photonic circuit
- Reported 97.8% physical gate fidelity and $2.5(1.2)$ ms coherence for the nuclear-memory transition (preprint)

**Strain- and phonon-enabled SiV control — Cornell et al.; Klotz et al. (2026):**
- All-mechanical dressed-state protection enabled SiV Rabi frequencies up to 800 MHz in a phononic-cavity-compatible basis
- A highly strained SiV at liquid-helium temperature mediated bipartite entanglement in a fully connected three-$^{13}$C nuclear-spin register

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| ZPL fraction (Debye-Waller) | ~70% (SiV⁻), $57(1)\%$ (SnV⁻, 0 K extrapolation) | vs. ~3–4% for NV⁻ | [Görlitz et al. 2020](https://doi.org/10.1088/1367-2630/ab6631) |
| SiV⁻ electronic-spin coherence | $T_2=13$ ms (CPMG); $T_1>1$ s | 100 mK | [Sukachev et al. 2017](https://doi.org/10.1103/PhysRevLett.119.223602) |
| SnV⁻ electronic-spin coherence | $T_2=430\,\mu\text{s}$ (Hahn); 10 ms (dynamical decoupling) | Superconducting waveguide, 1.7 K | [Karapatzakis et al. 2024](https://doi.org/10.1103/PhysRevX.14.031036) |
| SiV⁻ single-shot readout | 89% | Resonance fluorescence, 100 mK | [Sukachev et al. 2017](https://doi.org/10.1103/PhysRevLett.119.223602) |
| SnV⁻ single-shot readout | 87.4% raw; 98.5% conditional | Repeated-readout conditioning | [Rosenthal et al. 2024](https://doi.org/10.1103/PhysRevX.14.041008) |
| SnV⁻ $\pi$-pulse fidelity | $99.51(3)\%$ | Microwave control, 1.7 K | [Rosenthal et al. 2023](https://doi.org/10.1103/PhysRevX.13.031022) |
| Deployed-network nuclear Bell fidelity | $0.69(7)$ | 35 km Boston-area fiber loop; 17 dB link loss | [Knaut et al. 2024](https://doi.org/10.1038/s41586-024-07252-z) |
| Fastest demonstrated SiV⁻ Rabi rate | 800 MHz | Mechanically dressed basis | [Cornell et al. 2026](https://doi.org/10.1038/s41567-026-03369-2) |

## Scaling Considerations

- **Quantum networking:** Best-in-class spin-photon interface for diamond platforms. SiV demonstrated Boston-to-Harvard entanglement over deployed fiber.
- **Nanophotonic integration:** High ZPL fraction and stable optical lines support high-cooperativity nanocavities, but cavity yield, spectral alignment, and fiber packaging remain system-level bottlenecks.
- **Temperature tradeoff:** SiV needs dilution refrigerator; SnV works at ³He temperatures. PbV may work even higher.
- **Fabrication:** Requires implantation + annealing in high-purity diamond. Yield and placement precision improving but below semiconductor standards.

## References

### Key experiments
- D. D. Sukachev et al., "Silicon-Vacancy Spin Qubit in Diamond: A Quantum Memory Exceeding 10 ms with Single-Shot State Readout," [Phys. Rev. Lett. 119, 223602 (2017)](https://doi.org/10.1103/PhysRevLett.119.223602) — [arXiv:1708.08852](https://arxiv.org/abs/1708.08852)
- C. T. Nguyen et al., "Quantum Network Nodes Based on Diamond Qubits with an Efficient Nanophotonic Interface," [Phys. Rev. Lett. 123, 183602 (2019)](https://doi.org/10.1103/PhysRevLett.123.183602) — [arXiv:1907.13199](https://arxiv.org/abs/1907.13199)
- J. Görlitz et al., "Spectroscopic Investigations of Negatively Charged Tin-Vacancy Centres in Diamond," [New J. Phys. 22, 013048 (2020)](https://doi.org/10.1088/1367-2630/ab6631) — [arXiv:1909.09435](https://arxiv.org/abs/1909.09435)
- R. Debroux et al., "Quantum Control of the Tin-Vacancy Spin Qubit in Diamond," [Phys. Rev. X 11, 041041 (2021)](https://doi.org/10.1103/PhysRevX.11.041041) — [arXiv:2106.00723](https://arxiv.org/abs/2106.00723)
- E. I. Rosenthal et al., "Microwave Spin Control of a Tin-Vacancy Qubit in Diamond," [Phys. Rev. X 13, 031022 (2023)](https://doi.org/10.1103/PhysRevX.13.031022) — [arXiv:2306.13199](https://arxiv.org/abs/2306.13199)
- C. M. Knaut et al., "Entanglement of nanophotonic quantum memory nodes in a telecom network," [Nature 629, 573 (2024)](https://doi.org/10.1038/s41586-024-07252-z) — [arXiv:2310.01316](https://arxiv.org/abs/2310.01316)
- I. Karapatzakis et al., "Microwave Control of the Tin-Vacancy Spin Qubit in Diamond with a Superconducting Waveguide," [Phys. Rev. X 14, 031036 (2024)](https://doi.org/10.1103/PhysRevX.14.031036) — [arXiv:2403.00521](https://arxiv.org/abs/2403.00521)
- E. I. Rosenthal et al., "Single-Shot Readout and Weak Measurement of a Tin-Vacancy Qubit in Diamond," [Phys. Rev. X 14, 041008 (2024)](https://doi.org/10.1103/PhysRevX.14.041008) — [arXiv:2403.13110](https://arxiv.org/abs/2403.13110)
- I. B. W. Harris et al., "High-Fidelity Control of a Strongly Coupled Electro-Nuclear Spin-Photon Interface," arXiv preprint (2025) — [arXiv:2505.09267](https://arxiv.org/abs/2505.09267)
- E. Cornell et al., "All-mechanical coherence protection and fast control of a spin qubit," [Nat. Phys. 22, 1493 (2026)](https://doi.org/10.1038/s41567-026-03369-2) — [arXiv:2508.13356](https://arxiv.org/abs/2508.13356)
- M. Klotz et al., "Bipartite entanglement in a nuclear spin register mediated by a quasi-free electron spin," [Nat. Commun. 17, 2325 (2026)](https://doi.org/10.1038/s41467-026-70154-3) — [arXiv:2508.05255](https://arxiv.org/abs/2508.05255)

## Linked Papers

- [[nguyen-2019-siv-network]]
- [[sukachev-2017-siv-coherence]]
- [[debroux-2021-snv-coherence]]
- [[knaut-2024-siv-entanglement]]
- [[goerlitz-2020-snv-spectroscopy]]
- [[rosenthal-2023-snv-microwave-control]]
- [[karapatzakis-2024-snv-superconducting-waveguide]]
- [[rosenthal-2024-snv-single-shot-readout]]
- [[harris-2025-snv-electronuclear-interface]]
- [[cornell-2026-siv-mechanical-control]]
- [[klotz-2026-siv-nuclear-register]]
- [[huang-2026-dissipation-dilution-enhances-siv]]

## Evergreen context

- [[divincenzo-criteria]] — SiV and SnV are standout examples of the communication criteria, because inversion-symmetric optical transitions make spin-to-photon conversion far cleaner than in NV centers, but only if the cryogenic coherence constraint is handled.
- [[coherence-time-hierarchy]] — the platform's main systems tradeoff is the split between excellent optical coherence and phonon-limited spin coherence, especially for SiV versus the larger-orbit SnV variant.
- [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] — places the high-ZPL nanocavity advantage upstream of the separate cryogenic-coherence and downstream telecom-conversion burdens.

## Related Entries

- [[t-center-qubit]] — Silicon-based spin-photon interface with native telecom emission
- [[nv-center-qubit]] — Nitrogen-vacancy center; more mature but worse optical properties
- [[dual-rail-photonic-qubit]] — Photonic encoding for quantum networking
