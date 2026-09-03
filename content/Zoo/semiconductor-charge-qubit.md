---
title: Semiconductor Charge Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 1999
first_demonstrated_year: 2003
keywords:
  - semiconductor
  - charge qubit
  - double quantum dot
  - GaAs
  - silicon
  - electrostatic control
influence_score: 0.62
last_updated: '2026-09-03'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: scibok-audit-2026-09-03
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/semiconductor-charge-qubit-figure.provenance.json"
figure_reviewed_by: "Codex daily deep audit 2026-09-03"
figure_reviewed_at: "2026-09-03T14:21:07.693653+00:00"
---

## Figure

![[semiconductor-charge-qubit-figure.png]]

## Description

The **semiconductor charge qubit** encodes quantum information in the position of a single electron within a **double quantum dot** (DQD). The two computational basis states correspond to the electron being localized in the left dot ($|L\rangle$) or the right dot ($|R\rangle$), with the qubit state $|\Psi\rangle = \alpha|L\rangle + \beta|R\rangle$ representing a coherent superposition of charge configurations.

The double quantum dot is formed in a two-dimensional electron gas (2DEG) at a semiconductor heterointerface — typically GaAs/AlGaAs or Si/SiGe — using lithographically defined metallic gate electrodes that electrostatically confine electrons. Two quantum dots are coupled via a tunnel barrier, and the relative chemical potentials $\mu_L$ and $\mu_R$ of the dots are controlled by gate voltages $V_L$ and $V_R$. At zero detuning ($\epsilon = \mu_L - \mu_R = 0$), the eigenstates are symmetric and antisymmetric superpositions split by twice the tunnel coupling $2t_c$.

Qubit operations are performed electrically using either fast detuning pulses or resonant microwave modulation. Detuning pulses can drive sub-nanosecond charge oscillations, while resonant operation at the zero-detuning sweet spot avoids the first-order frequency sensitivity incurred during large detuning excursions. The same large electric dipole that makes control fast also couples the qubit strongly to electrical noise and to phonons, so demonstrated coherence remains on the nanosecond scale.

The semiconductor charge qubit is historically significant as the **simplest semiconductor qubit** and as an early direct demonstration of coherent control over charge states in an artificial molecule. Its rapid decoherence motivated spin-based encodings (Loss-DiVincenzo, singlet-triplet, exchange-only), while its large electric dipole remains useful for fast control, resonator coupling, and charge-sensitive diagnostics.

## Hamiltonian

$$H = \frac{\epsilon}{2}\sigma_z + t_c\,\sigma_x$$

where:
- $\epsilon = \mu_L - \mu_R$ is the detuning between dot chemical potentials, controlled by gate voltages
- $t_c$ is the tunnel coupling between the two dots
- $\sigma_z = |L\rangle\langle L| - |R\rangle\langle R|$ is the charge polarization operator
- $\sigma_x = |L\rangle\langle R| + |R\rangle\langle L|$ is the tunneling operator

The energy eigenvalues are $E_\pm = \pm\frac{1}{2}\sqrt{\epsilon^2 + 4t_c^2}$, so the qubit splitting is $E_q = E_+ - E_- = \sqrt{\epsilon^2 + 4t_c^2}$. This produces a characteristic hyperbolic anticrossing with minimum splitting $2|t_c|$ at $\epsilon = 0$. At large detuning ($|\epsilon| \gg |t_c|$), the eigenstates approach the localized charge states $|L\rangle$ and $|R\rangle$.

**Key limitation:** Detuning noise perturbs $\epsilon$, and the first-order frequency sensitivity is proportional to $|\partial E_q/\partial\epsilon|$. At the **sweet spot** ($\epsilon = 0$), this derivative vanishes. Higher-order electrical noise, tunnel-coupling noise, relaxation, and electron-phonon coupling can still limit coherence; a 2024 InAs nanowire experiment found nearly unchanged decoherence between noise-sensitive and sweet-spot operating points, showing that charge noise is not universally the dominant channel.

## Motivation

- Demonstrates that **artificial atoms** can be formed from semiconductors with all-electrical quantum control — foundational proof of concept for the entire semiconductor qubit field.
- Extremely fast gate times (<1 ns) due to direct electrical coupling, establishing the speed benchmark for semiconductor qubits.
- Simplest semiconductor qubit, providing a pedagogical and experimental stepping stone to more complex encodings.
- Compatible with semiconductor fabrication technology, motivating the search for charge-noise-insensitive encodings within the same platform.
- The short coherence times directly motivated the development of **spin qubits** (Loss-DiVincenzo, singlet-triplet, exchange-only) that exploit the spin degree of freedom's weaker coupling to charge noise.

## Experimental Status

**Early position-qubit proposal — Wu et al. (1999/2000):**
- Proposed a single electron in two coupled semiconductor quantum dots, with localized molecular states used as the logical basis.
- Described resonant one-qubit control, capacitive two-qubit coupling, and polarization readout; the preprint appeared in 1999 and the archival paper in 2000.

**First coherent manipulation — Hayashi et al. (2003):**
- Demonstrated coherent charge oscillations in a GaAs/AlGaAs double quantum dot using pulsed gate voltages.
- Measured a coherence time of approximately $1\,\text{ns}$ at zero detuning and an oscillation frequency of approximately $2.3\,\text{GHz}$.
- Initialized and measured through controlled tunneling to the source and drain; this experiment did not use QPC single-shot readout.

**Charge qubit coherence — Petersson et al. (2010):**
- Demonstrated a one-electron GaAs charge qubit with non-invasive QPC charge sensing.
- Measured a maximum coherence time of $7 \pm 2.5\,\text{ns}$ at the zero-detuning sweet spot.
- Found behavior away from the sweet spot consistent with low-frequency $1/f$ detuning noise, while relaxation or higher-order coupling limited the sweet-spot coherence.

**Silicon charge oscillations and echo — Shi et al. (2013):**
- Demonstrated charge oscillations in a Si/SiGe double quantum dot.
- Measured $T_2^*$ from $127\,\text{ps}$ to approximately $2.1\,\text{ns}$ and extended a $127\,\text{ps}$ decay to $760\,\text{ps}$ with a charge-echo sequence.

**Universal microwave control — Kim et al. (2015):**
- Used resonant AC driving at the sweet spot to implement rotations about arbitrary Bloch-sphere axes.
- Reached Rabi frequencies up to $2\,\text{GHz}$ for a $4.5\,\text{GHz}$ qubit and process fidelities above 86% by process and gate-set tomography.

**Strong-coupling decoherence study — Ranni et al. (2024):**
- Realized strong coupling between an InAs crystal-phase-defined DQD and a high-impedance resonator, with $g/2\pi = 320\,\text{MHz}$ and total decoherence $\Gamma/2\pi = 260\,\text{MHz}$ at the sweet spot.
- Observed only a 10% change in decoherence despite a fivefold change in charge-noise sensitivity, implicating electron-phonon relaxation and circuit losses rather than detuning noise as the dominant limit in that device.

As of 2026, bare charge qubits remain valuable as ultrafast control elements and strong electric-dipole interfaces, but their nanosecond coherence and modest demonstrated gate fidelity keep them behind semiconductor spin encodings for scalable computation.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Coherence time $T_2$ | ~$1\,\text{ns}$ | GaAs DQD at zero detuning; exponential oscillation decay | [Hayashi et al. 2003](https://doi.org/10.1103/PhysRevLett.91.226804) |
| Maximum coherence time $T_2$ | $7 \pm 2.5\,\text{ns}$ | One-electron GaAs DQD at the sweet spot | [Petersson et al. 2010](https://doi.org/10.1103/PhysRevLett.105.246804) |
| Silicon $T_2^*$ | $127\,\text{ps}$–$2.1\,\text{ns}$ | Strongly dependent on detuning sensitivity | [Shi et al. 2013](https://doi.org/10.1103/PhysRevB.88.075416) |
| Charge-echo decay time | $760\,\text{ps}$ | Echo improved a $127\,\text{ps}$ free-induction decay | [Shi et al. 2013](https://doi.org/10.1103/PhysRevB.88.075416) |
| Maximum Rabi frequency | $2\,\text{GHz}$ | Resonant AC control of a $4.5\,\text{GHz}$ Si charge qubit | [Kim et al. 2015](https://doi.org/10.1038/nnano.2014.336) |
| 1Q process fidelity | $>86\%$ | Universal gate set; process tomography and GST | [Kim et al. 2015](https://doi.org/10.1038/nnano.2014.336) |
| Charge-photon coupling $g/2\pi$ | $320\,\text{MHz}$ | InAs DQD at the resonator-coupled sweet spot | [Ranni et al. 2024](https://doi.org/10.1103/PhysRevResearch.6.043134) |
| Total decoherence $\Gamma/2\pi$ | $260\,\text{MHz}$ | Strong-coupling fit at the sweet spot | [Ranni et al. 2024](https://doi.org/10.1103/PhysRevResearch.6.043134) |
| Operating temperature | $20\,\text{mK}$ lattice; ~$100\,\text{mK}$ electrons | Original GaAs experiment | [Hayashi et al. 2003](https://doi.org/10.1103/PhysRevLett.91.226804) |

## References

### Original proposal
- N.-J. Wu, M. Kamada, A. Natori, and H. Yasunaga, "Quantum Computer Using Coupled-Quantum-Dot Molecules," [Jpn. J. Appl. Phys. **39**, 4642 (2000)](https://doi.org/10.1143/JJAP.39.4642) — [arXiv:quant-ph/9912036](https://arxiv.org/abs/quant-ph/9912036)

### Experimental demonstrations
- T. Hayashi, T. Fujisawa, H. D. Cheong, Y. H. Jeong, and Y. Hirayama, "Coherent Manipulation of Electronic States in a Double Quantum Dot," [Phys. Rev. Lett. **91**, 226804 (2003)](https://doi.org/10.1103/PhysRevLett.91.226804)
- K. D. Petersson, J. R. Petta, H. Lu, and A. C. Gossard, "Quantum Coherence in a One-Electron Semiconductor Charge Qubit," [Phys. Rev. Lett. **105**, 246804 (2010)](https://doi.org/10.1103/PhysRevLett.105.246804) — [arXiv:1008.3089](https://arxiv.org/abs/1008.3089)
- Z. Shi et al., "Coherent quantum oscillations and echo measurements of a Si charge qubit," [Phys. Rev. B **88**, 075416 (2013)](https://doi.org/10.1103/PhysRevB.88.075416) — [arXiv:1208.0519](https://arxiv.org/abs/1208.0519)
- D. Kim et al., "Microwave-driven coherent operation of a semiconductor quantum dot charge qubit," [Nature Nanotechnology **10**, 243 (2015)](https://doi.org/10.1038/nnano.2014.336) — [arXiv:1407.7607](https://arxiv.org/abs/1407.7607)
- A. Ranni et al., "Decoherence in a crystal-phase defined double quantum dot charge qubit strongly coupled to a high-impedance resonator," [Phys. Rev. Research **6**, 043134 (2024)](https://doi.org/10.1103/PhysRevResearch.6.043134) — [arXiv:2308.14887](https://arxiv.org/abs/2308.14887)

### Charge sensing context
- T. Fujisawa, T. Hayashi, R. Tomita, and Y. Hirayama, "Bidirectional counting of single electrons," [Science **312**, 1634 (2006)](https://doi.org/10.1126/science.1126788)

## Linked Papers

- [[wu-2000-quantum-computer-coupled-dot-molecules]]
- [[petersson-2010-semiconductor-charge]]
- [[fujisawa-2006-bidirectional-counting-single]]
- [[hayashi-2003-coherent-manipulation-electronic]]
- [[shi-2013-si-charge-oscillations]]
- [[kim-2015-microwave-charge-qubit]]
- [[ranni-2024-charge-qubit-decoherence]]

## Evergreen context

- [[charge-noise-sweet-spot]] — this entry is the simplest reminder of why sweet spots matter at all: raw charge control is fast, but living on a slope in detuning space destroys coherence.
- [[divincenzo-criteria]] — semiconductor charge qubits satisfy initialization and control elegantly, but they fail the coherence margin badly enough to motivate the whole spin-qubit branch.
- [[quantum-hardware]] — useful umbrella for placing the charge qubit historically as the first semiconductor proof-of-principle rather than the scaling endpoint.

## Related Entries

- [[loss-divincenzo-qubit]] — spin encoding in the same platform, much longer $T_2$
- [[spin-qubit]] — umbrella for semiconductor spin encodings that trade electric-dipole strength for longer coherence
- [[singlet-triplet-qubit]] — two-electron spin encoding in a double quantum dot
- [[cooper-pair-box-charge-qubit]] — superconducting charge qubit analogue
- [[hybrid-qubit]] — exploits both charge and spin degrees of freedom
- [[silicon-spin-qubit]] — spin qubit in isotopically purified silicon
