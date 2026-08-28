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
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:46.034071+00:00"
first_proposed_year: 2002
first_demonstrated_year: 2015
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
last_updated: '2026-08-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: codex-recovery-audit-2026-08-02
---

## Figure

![[rare-earth-ion-qubit-figure.png]]

## Description

Rare-earth ion qubits encode quantum information in the electronic and nuclear spin states of trivalent rare-earth ions (lanthanides) doped into crystalline hosts, most commonly yttrium orthosilicate (Y₂SiO₅, or YSO). The three most studied species for quantum applications are:

- **Erbium (Er³⁺)**: Possesses a $^4I_{15/2} \to {^4I_{13/2}}$ optical transition near 1536 nm, directly in the telecom C-band. This gives Er a native low-loss fiber interface without quantum frequency conversion. The $^{167}\text{Er}^{3+}$ isotope ($I = 7/2$) provides hyperfine structure for long-lived nuclear-spin storage.

- **Europium (Eu³⁺)**: Reached $T_2 = 6$ hours for the $^{151}\text{Eu}^{3+}$ nuclear-spin transition in Y₂SiO₅ at 2 K using a zero-first-order Zeeman (ZEFOZ) field and dynamical decoupling (Zhong et al. 2015).

- **Praseodymium (Pr³⁺)**: Used in early demonstrations of quantum memory protocols including electromagnetically induced transparency (EIT), atomic frequency comb (AFC) storage, and controlled reversible inhomogeneous broadening (CRIB).

The fundamental challenge for all rare-earth species is the weak oscillator strength of the 4f–4f optical transitions (shielded by outer 5s and 5p electrons), resulting in long radiative lifetimes (~ms) and low photon emission rates. This is addressed through Purcell enhancement using optical cavities — nanophotonic resonators in silicon (for Er³⁺) or Fabry-Perot microcavities coupled to the crystal. Cavity enhancement factors exceeding 100× have been demonstrated, enabling single-ion detection and single-shot spin readout.

## Hamiltonian

For a Kramers ion (e.g., Er³⁺) in a crystal field with an applied magnetic field:

$$H = H_{\text{CF}} + \mu_B (\mathbf{L} + 2\mathbf{S}) \cdot \mathbf{B} + A_{\text{hfs}}\,\mathbf{I} \cdot \mathbf{J}$$

where $H_{\text{CF}}$ is the crystal field Hamiltonian splitting the $4f^N$ multiplets, $\mu_B$ is the Bohr magneton, and $A_{\text{hfs}}$ is the hyperfine constant.

For a non-Kramers ion (e.g., Eu³⁺, Pr³⁺), the ground state is a singlet in zero field, and the qubit is encoded in hyperfine levels split by the nuclear quadrupole and second-order hyperfine interactions:

$$H_{\text{nuc}} = A_{\text{hfs}}\,\mathbf{I} \cdot \mathbf{J}_{\text{eff}} + P[I_z^2 - I(I+1)/3] + \mu_n g_n \mathbf{I} \cdot \mathbf{B}$$

At a ZEFOZ (zero-first-order Zeeman) point, the transition frequency is insensitive to magnetic field fluctuations to first order, analogous to clock transitions in trapped ions, enabling the extraordinary 6-hour coherence time.

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

**Multiplexed remote entanglement — Ruskuc et al. (2025):**
- Built a two-node network with multiple spectrally distinguishable $^{171}\mathrm{Yb}^{3+}$ ions coupled to nanophotonic cavities.
- Entangled two remote ion pairs in a multiplexed protocol using frequency-erasing photon detection and real-time feedforward.
- Prepared a three-ion multipartite W state, demonstrating functionality beyond a single emitter per node.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_2$ (nuclear spin) | 6 hours | $^{151}\text{Eu}^{3+}$ in Y₂SiO₅, ZEFOZ + DD | [Zhong et al. 2015](https://doi.org/10.1038/nature14025) |
| Optical wavelength (Er³⁺) | 1536 nm | Telecom C-band; native fiber compatibility | [Dibos et al. 2018](https://doi.org/10.1103/PhysRevLett.120.243601) |
| Single-shot readout fidelity | 94.6% | Single Er³⁺ via cavity QND | [Raha et al. 2020](https://doi.org/10.1038/s41467-020-15138-7) |
| Purcell enhancement | >650× | Er³⁺ in Si nanophotonic cavity | [Dibos et al. 2018](https://doi.org/10.1103/PhysRevLett.120.243601) |
| Multiplexed remote pairs | 2 | Two $^{171}\mathrm{Yb}^{3+}$ ion pairs across two nodes | [Ruskuc et al. 2025](https://doi.org/10.1038/s41586-024-08537-z) |
| Multipartite network state | 3-ion W state | Three distinguishable ions | [Ruskuc et al. 2025](https://doi.org/10.1038/s41586-024-08537-z) |

## Scaling Considerations

- **Weak oscillator strength**: the fundamental 4f–4f transition rates are slow (~ms radiative lifetimes), requiring high-finesse optical cavities for practical single-ion operation. Achieving sufficient Purcell enhancement while maintaining low loss is an active engineering challenge.
- **Inhomogeneous broadening**: while useful for multiplexing, the ~GHz inhomogeneous linewidth means that most ions in the ensemble are spectrally detuned from the cavity resonance. Strain tuning or spectral hole burning is needed to isolate and optimize individual ions.
- **Local gates**: the 2025 result demonstrated remote photonic entanglement and a three-ion W state, not a deterministic high-fidelity local two-ion gate. Proposed local interactions include dipole-dipole and cavity-mediated coupling.
- **Integration with silicon photonics**: Er³⁺ in silicon is particularly promising for CMOS-compatible quantum networks, but erbium in silicon suffers from broad optical lines unless specific crystalline sites are engineered.
- **Quantum memory vs. processor**: the extremely long coherence times make rare-earth ions exceptional quantum memories, but gate operations are comparatively slow and two-qubit interactions remain challenging — the platform is better suited to quantum repeater nodes than general-purpose processors.

## References

### Coherence record
- M. Zhong et al., "Optically addressable nuclear spins in a solid with a six-hour coherence time," [Nature 517, 177 (2015)](https://doi.org/10.1038/nature14025)

### Single-ion detection and readout
- A. M. Dibos et al., "Atomic Source of Single Photons in the Telecom Band," [Phys. Rev. Lett. 120, 243601 (2018)](https://doi.org/10.1103/PhysRevLett.120.243601) | [arXiv:1711.10368](https://arxiv.org/abs/1711.10368)
- M. Raha et al., "Optical quantum nondemolition measurement of a single rare earth ion qubit," [Nat. Commun. 11, 1605 (2020)](https://doi.org/10.1038/s41467-020-15138-7)

### Cavity QED
- J. M. Kindem et al., "Control and single-shot readout of an ion embedded in a nanophotonic cavity," [Nature 580, 201 (2020)](https://doi.org/10.1038/s41586-020-2160-9) | [arXiv:1907.12161](https://arxiv.org/abs/1907.12161)

### Multiplexed quantum networking
- A. Ruskuc et al., "Multiplexed entanglement of multi-emitter quantum network nodes," [Nature 639, 54–59 (2025)](https://doi.org/10.1038/s41586-024-08537-z)

## Linked Papers

- [[zhong-2015-six-hour-coherence]]
- [[dibos-2018-telecom-single-photon]]
- [[raha-2020-rare-earth-qnd-readout]]
- [[kindem-2020-single-ion-nanophotonic]]
- [[ruskuc-2025-multiplexed-rare-earth-network]]

## Evergreen context

- [[coherence-time-hierarchy]] — distinguishes hours-long Eu nuclear memories from faster optically active Er and Yb network qubits.
- [[divincenzo-criteria]] — keeps exceptional memory time separate from the still-open requirements for practical local gates, readout, and a scalable node interface.
- [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] — routes weak-oscillator-strength cavity enhancement through the resonant optical-emission mechanism rather than through off-resonant microwave circuit-QED notes.

## Related Entries

- [[nv-center-qubit]] — alternative solid-state defect qubit platform
- [[siv-color-center-qubit]] — group-IV color center in diamond
- [[t-center-qubit]] — telecom-wavelength defect in silicon
- [[quantum-transduction]] — frequency conversion for non-telecom qubits
