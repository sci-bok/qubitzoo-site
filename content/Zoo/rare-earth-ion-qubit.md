---
title: Rare-Earth Ion Qubit
entry_type: qubit
technology_family: Spin-Photon
moc_facets: [Color Center]
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/rare-earth-ion-qubit-figure.provenance.json"
figure_reviewed_by: "Scibok independent full-resolution physics audit 2026-11-01"
figure_reviewed_at: "2026-11-01T15:18:20.555036+00:00"
first_proposed_year: 2002
first_demonstrated_year: 2014
keywords:
- rare earth
- erbium
- europium
- praseodymium
- Er3+
- Eu3+
- Pr3+
- Y2SiO5
- telecom wavelength
- nuclear spin coherence
- quantum memory
- quantum network
- cavity QED
- nanophotonic
influence_score: 0.72
last_updated: '2026-11-01'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-01
---

## Figure

![[rare-earth-ion-qubit-figure.png]]

## Description

Rare-earth ion qubits encode quantum information in electronic or nuclear spin states of trivalent lanthanide dopants in crystalline hosts. Yttrium orthosilicate (Y₂SiO₅, or YSO) is widely used, but YVO₄, YAG, and CaWO₄ support complementary qubit and photonic properties. Important species include:

- **Erbium (Er³⁺)**: Possesses a $^4I_{15/2} \to {^4I_{13/2}}$ optical transition near 1536 nm, directly in the telecom C-band. This gives Er a native low-loss fiber interface without quantum frequency conversion. The $^{167}\text{Er}^{3+}$ isotope ($I = 7/2$) provides eight nuclear-spin sublevels for storage and processing.

- **Europium (Eu³⁺)**: Supports exceptionally long ensemble hyperfine coherence. The 2015 six-hour result was extended in 2025 to coherence exceeding 10 hours under ZEFOZ and dynamical decoupling [Wang et al., PRX Quantum 6, 010302 (2025)]. A separate Eu³⁺:YSO experiment stored photonic time-bin qubits with a $27.6 \pm 0.5\,\text{s}$ 1/e lifetime and $88.0 \pm 2.1\%$ fidelity at 5.6 s [Lv et al., arXiv:2511.12537].

- **Praseodymium (Pr³⁺)**: Used in early demonstrations of quantum memory protocols including electromagnetically induced transparency (EIT), atomic frequency comb (AFC) storage, and controlled reversible inhomogeneous broadening (CRIB).

- **Ytterbium (Yb³⁺)**: The $^{171}\text{Yb}^{3+}$ isotope provides a coherent hyperfine qubit and cycling transition in YVO₄. It underpins the first multiplexed rare-earth-ion network nodes, although its 984.5 nm optical line is not in the telecom band.

- **Cerium (Ce³⁺)**: A single Ce³⁺ electron spin in YAG provided the first coherent single-rare-earth-ion qubit demonstration in 2014.

Most 4f–4f optical transitions have weak oscillator strength because the 4f electrons are shielded by filled 5s and 5p shells, producing millisecond-scale radiative lifetimes and low photon rates. Purcell enhancement in nanophotonic or Fabry–Pérot cavities increases emission into a useful mode and can selectively enhance spin-preserving transitions, enabling single-ion detection, initialization, and single-shot readout.

## Hamiltonian

There is no single microscopic Hamiltonian for all rare-earth-ion qubits because the ion, isotope, host, and crystallographic site determine the effective tensors. After projecting a Kramers doublet such as Er³⁺ onto an effective electronic spin $\mathbf{S}$, a representative spin Hamiltonian is

$$H_{\mathrm{K}} = \mu_B\,\mathbf{B}\!\cdot\!\mathbf{g}\!\cdot\!\mathbf{S}+\mathbf{I}\!\cdot\!\mathbf{A}\!\cdot\!\mathbf{S}+\mathbf{I}\!\cdot\!\mathbf{Q}\!\cdot\!\mathbf{I}-\mu_n g_n\,\mathbf{B}\!\cdot\!\mathbf{I},$$

where $\mathbf{g}$ and $\mathbf{A}$ are generally anisotropic electronic-Zeeman and hyperfine tensors, and $\mathbf{Q}$ is the nuclear-quadrupole tensor. For even Er isotopes with $I=0$, the hyperfine and quadrupole terms vanish; for $^{167}$Er, $I=7/2$.

For non-Kramers ions such as Eu³⁺ and Pr³⁺, crystal-field singlets quench the first-order electronic moment and the low-energy hyperfine manifold is commonly written

$$H_{\mathrm{NK}} = \mathbf{I}\!\cdot\!\mathbf{Q}_{\mathrm{eff}}\!\cdot\!\mathbf{I}+\mu_n\,\mathbf{B}\!\cdot\!\mathbf{M}_{\mathrm{eff}}\!\cdot\!\mathbf{I},$$

with effective quadrupole and enhanced nuclear-Zeeman tensors. At a ZEFOZ point, $\nabla_{\mathbf B}\omega_{01}=0$, so the chosen transition is first-order insensitive to magnetic-field noise; dynamical decoupling can then suppress the remaining dephasing.

## Motivation

Rare-earth ions in crystals offer a unique combination: extremely long spin coherence times (hours), optical transitions at telecom wavelengths (Er³⁺), and the ability to frequency-multiplex many spectrally distinct ions within a single device. This makes them leading candidates for quantum network nodes — interfacing long-lived spin quantum memories with photonic channels. The crystalline host provides a reproducible, scalable environment compared to individually fabricated defects, and the narrow inhomogeneous optical lines (~GHz) contain thousands of individually addressable ions via frequency selection.

## Experimental Status

**Hours-long nuclear spin coherence — Zhong et al. (2015):**
- Demonstrated $T_2 = 6$ hours for $^{151}\text{Eu}^{3+}$ nuclear spins in Y₂SiO₅ at 2 K.
- Used a ZEFOZ magnetic field (1.28 T applied at a specific crystal orientation) and dynamical decoupling.
- Measured decoherence rate of $8 \times 10^{-5}\,\text{s}^{-1}$ over 100 ms evaluation windows.
- Record solid-state coherence time by orders of magnitude.

**Single Er³⁺ ion detection — Dibos et al. (2018):**
- First optical observation of individual Er³⁺ ions in a silicon nanophotonic crystal cavity.
- Purcell-enhanced emission rate >650× bulk, enabling identification of dozens of individual ions.
- Demonstrated spin-dependent optical transitions via Zeeman splitting.

**Single-shot spin readout — Raha et al. (2020):**
- Quantum nondemolition measurement of a single Er³⁺ ion qubit spin state.
- Achieved 94.6% single-shot readout fidelity via cavity-enhanced cycling transition.
- Demonstrated coherent spin dynamics and quantum jumps from optical pumping.

**Single Yb³⁺ cavity QED — Kindem et al. (2020):**
- Control and single-shot readout of a single $^{171}\text{Yb}^{3+}$ ion in a YVO₄ nanophotonic cavity.
- Spin coherence $T_2 > 30\,\text{ms}$ for a cavity-coupled ion.
- Single-shot readout fidelity >95%.

**Epitaxial Er³⁺ telecom interfaces — Gupta et al. (2025):**
- Demonstrated two erbium spin-photon interfaces in epitaxial Y₂O₃ thin films, combining fiber-compatible optical cavities with microwave control.
- Achieved spin coherence exceeding 10 ms, kilohertz-scale optical linewidths, and 92% single-shot readout fidelity.

**Efficient integrated Eu³⁺ memory — Meng et al. (2026):**
- Integrated $^{151}\text{Eu}^{3+}$:Y₂SiO₅ with impedance-matched waveguide and fiber microcavities.
- Reached $80.3(7)\%$ storage efficiency for weak coherent pulses and $69.8(1.6)\%$ for telecom-heralded single photons; stored 20 temporal modes at $51.3(2)\%$ average efficiency.

**Multiplexed remote entanglement — Ruskuc et al. (2025):**
- Built a two-node network with multiple spectrally distinguishable $^{171}\mathrm{Yb}^{3+}$ ions coupled to nanophotonic cavities.
- Entangled two remote ion pairs in a multiplexed protocol using frequency-erasing photon detection and real-time feedforward.
- Prepared a three-ion multipartite W state, demonstrating functionality beyond a single emitter per node.

**Interacting Er³⁺ qubits and local gates — Xu et al. (2026):**
- Frequency-resolved two Er³⁺ electron spins separated by tens of nanometres in CaWO₄ and coupled them through a measured $5.40(3)\,\text{kHz}$ magnetic dipolar interaction.
- Implemented an entangling gate with Bell-state fidelity $0.76(2)$ after readout correction, plus electron–nuclear gates to a $^{183}$W ancilla with $T_2 = 1.0(2)\,\text{s}$.

**All-optical $^{167}$Er nuclear-spin control and readout — Ulanowski et al. (2026):**
- Used a 65 MHz-linewidth Fabry–Pérot cavity to resolve neighboring hyperfine transitions separated by 0.9 GHz.
- Demonstrated $91(2)\%$ single-shot nuclear-spin readout and coherence exceeding 0.2 s in the telecom C-band.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_2$ (nuclear spin) | 6 hours | $^{151}\text{Eu}^{3+}$ in Y₂SiO₅, ZEFOZ + DD | [Zhong et al. 2015](https://doi.org/10.1038/nature14025) |
| Optical wavelength (Er³⁺) | 1536 nm | Telecom C-band; native fiber compatibility | [Dibos et al. 2018](https://doi.org/10.1103/PhysRevLett.120.243601) |
| Single-shot readout fidelity | 94.6% | Single Er³⁺ via cavity QND | [Raha et al. 2020](https://doi.org/10.1038/s41467-020-15138-7) |
| Purcell enhancement | >650× | Er³⁺ in Si nanophotonic cavity | [Dibos et al. 2018](https://doi.org/10.1103/PhysRevLett.120.243601) |
| Er spin coherence (epitaxial) | >10 ms | Er³⁺ in epitaxial Y₂O₃ thin film | [Gupta et al. 2025](https://doi.org/10.1038/s41467-025-64780-6) |
| Integrated memory efficiency | $69.8(1.6)\%$ | Telecom-heralded single photons in Eu³⁺:YSO | [Meng et al. 2026](https://doi.org/10.1038/s41566-026-01845-y) |
| Multiplexed remote pairs | 2 | Two $^{171}\mathrm{Yb}^{3+}$ ion pairs across two nodes | [Ruskuc et al. 2025](https://doi.org/10.1038/s41586-024-08537-z) |
| Multipartite network state | 3-ion W state | Three distinguishable ions | [Ruskuc et al. 2025](https://doi.org/10.1038/s41586-024-08537-z) |
| Er³⁺–Er³⁺ Bell-state fidelity | $0.76(2)$ | Readout-corrected, dipolar entangling gate | [Xu et al. 2026](https://doi.org/10.1038/s41567-026-03319-y) |
| $^{167}$Er nuclear-spin readout | $91(2)\%$ | Single-shot, cavity-enhanced optical readout | [Ulanowski et al. 2026](https://doi.org/10.1038/s41467-026-77060-8) |
| $^{167}$Er nuclear-spin coherence | >0.2 s | 6.8 T, cavity-coupled Er³⁺:YSO | [Ulanowski et al. 2026](https://doi.org/10.1038/s41467-026-77060-8) |

## Scaling Considerations

- **Weak oscillator strength**: the fundamental 4f–4f transition rates are slow (~ms radiative lifetimes), requiring high-finesse optical cavities for practical single-ion operation. Achieving sufficient Purcell enhancement while maintaining low loss is an active engineering challenge.
- **Inhomogeneous broadening**: while useful for multiplexing, the ~GHz inhomogeneous linewidth means that most ions in the ensemble are spectrally detuned from the cavity resonance. Strain tuning or spectral hole burning is needed to isolate and optimize individual ions.
- **Local gates**: dipolar Er³⁺–Er³⁺ gates are now experimentally demonstrated, but the 2026 Bell-state fidelity of $0.76(2)$ remains limited primarily by electron-spin decoherence. Scaling requires reproducible placement or identification of strongly coupled pairs and improved local coherence.
- **Integration with silicon photonics**: Er³⁺ in silicon is particularly promising for CMOS-compatible quantum networks, but erbium in silicon suffers from broad optical lines unless specific crystalline sites are engineered.
- **Quantum memory vs. processor**: the extremely long coherence times make rare-earth ions exceptional quantum memories, but gate operations are comparatively slow and two-qubit interactions remain challenging — the platform is better suited to quantum repeater nodes than general-purpose processors.

## References

### Coherence record
- M. Zhong et al., "Optically addressable nuclear spins in a solid with a six-hour coherence time," [Nature 517, 177 (2015)](https://doi.org/10.1038/nature14025)
- F. Wang et al., "Nuclear Spins in a Solid Exceeding 10-Hour Coherence Times for Ultra-Long-Term Quantum Storage," [PRX Quantum 6, 010302 (2025)](https://doi.org/10.1103/PRXQuantum.6.010302)
- Y.-C. Lv et al., "Minute-Scale Photonic Quantum Memory," [arXiv:2511.12537](https://arxiv.org/abs/2511.12537)

### Single-ion detection and readout
- A. M. Dibos et al., "Atomic Source of Single Photons in the Telecom Band," [Phys. Rev. Lett. 120, 243601 (2018)](https://doi.org/10.1103/PhysRevLett.120.243601) | [arXiv:1711.10368](https://arxiv.org/abs/1711.10368)
- M. Raha et al., "Optical quantum nondemolition measurement of a single rare earth ion qubit," [Nat. Commun. 11, 1605 (2020)](https://doi.org/10.1038/s41467-020-15138-7)

### Cavity QED
- J. M. Kindem et al., "Control and single-shot readout of an ion embedded in a nanophotonic cavity," [Nature 580, 201 (2020)](https://doi.org/10.1038/s41586-020-2160-9) | [arXiv:1907.12161](https://arxiv.org/abs/1907.12161)

### Telecom spin-photon interfaces and control
- S. Gupta et al., "Dual epitaxial telecom spin-photon interfaces with long-lived coherence," [Nat. Commun. 16, 9814 (2025)](https://doi.org/10.1038/s41467-025-64780-6)
- H. Xu et al., "Coherent control of interacting solid-state spins below the diffraction limit," [Nat. Phys. 22, 1216–1222 (2026)](https://doi.org/10.1038/s41567-026-03319-y) | [arXiv:2508.09122](https://arxiv.org/abs/2508.09122)
- A. Ulanowski et al., "Cavity-enhanced optical readout and control of nuclear spin qubits," [Nat. Commun. 17, 9234 (2026)](https://doi.org/10.1038/s41467-026-77060-8) | [arXiv:2603.01987](https://arxiv.org/abs/2603.01987)

### Integrated quantum memory
- R.-R. Meng et al., "Efficient integrated quantum memory for light," [Nat. Photonics 20, 437–443 (2026)](https://doi.org/10.1038/s41566-026-01845-y) | [arXiv:2511.05928](https://arxiv.org/abs/2511.05928)

### Multiplexed quantum networking
- A. Ruskuc et al., "Multiplexed entanglement of multi-emitter quantum network nodes," [Nature 639, 54–59 (2025)](https://doi.org/10.1038/s41586-024-08537-z)

## Linked Papers

- [[zhong-2015-six-hour-coherence]]
- [[wang-2025-prx-quantum-eu-coherence]]
- [[lv-2025-minute-scale-photonic-memory]]
- [[dibos-2018-telecom-single-photon]]
- [[raha-2020-rare-earth-qnd-readout]]
- [[kindem-2020-single-ion-nanophotonic]]
- [[gupta-2025-er-telecom-spin-photon]]
- [[ruskuc-2025-multiplexed-rare-earth-network]]
- [[xu-2026-interacting-rare-earth-spins]]
- [[ulanowski-2026-er-nuclear-spin-readout]]
- [[meng-2026-efficient-integrated-quantum-memory]]

## Evergreen context

- [[coherence-time-hierarchy]] — distinguishes hours-long Eu nuclear memories from faster optically active Er and Yb network qubits.
- [[divincenzo-criteria]] — keeps exceptional memory time separate from the still-open requirements for practical local gates, readout, and a scalable node interface.
- [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] — routes weak-oscillator-strength cavity enhancement through the resonant optical-emission mechanism rather than through off-resonant microwave circuit-QED notes.
- [[purcell-protection-via-detuning]] — the same $\kappa(g/\Delta)^2$ framework that suppresses spontaneous emission in circuit QED produces >650× cavity-enhanced emission here; the sign reverses because the optical 4f–4f transition is Purcell-enhanced rather than Purcell-protected.

## Related Entries

- [[nv-center-qubit]] — alternative solid-state defect qubit platform
- [[siv-color-center-qubit]] — group-IV color center in diamond
- [[t-center-qubit]] — telecom-wavelength defect in silicon
- [[quantum-transduction]] — frequency conversion for non-telecom qubits
