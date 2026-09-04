---
title: Singlet-Triplet Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
seed_id: '23'
seed_source: qubitzoo-airtable
first_proposed_year: 2002
first_demonstrated_year: 2005
keywords:
- singlet-triplet
- spin
- semiconductor
- double-quantum-dot
last_updated: '2026-09-04'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok-deep-audit-2026-09-04
figure_reviewed: false
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/singlet-triplet-qubit-figure.provenance.json"
figure_reviewed_by: "Scibok daily deep audit 2026-09-04"
figure_reviewed_at: "2026-09-04T14:20:52Z"
---

## Description

The singlet-triplet ($S$–$T_0$) qubit encodes a logical qubit in the $m_s=0$ subspace of two exchange-coupled spin-$1/2$ carriers in a **double quantum dot** (DQD). The canonical implementation uses electrons, while recent silicon and germanium devices also use holes. The singlet $|S\rangle$ and unpolarized triplet $|T_0\rangle$ form the computational basis; the polarized triplets $|T_+\rangle=|\!\uparrow\uparrow\rangle$ and $|T_-\rangle=|\!\downarrow\downarrow\rangle$ are leakage states split from the logical manifold by the mean Zeeman field.

Universal single-qubit control uses voltage pulses together with a static magnetic-field or Zeeman-energy gradient:
- **$Z$ rotations** (around the logical $\hat{z}$ axis): tuning the exchange coupling $J$ via the gate voltage on the barrier or detuning between dots
- **$X$ rotations** (around the logical $\hat{x}$ axis): evolution under a Zeeman-energy gradient $\Delta E_Z=g\mu_B\Delta B_z$ between the dots, produced by a micromagnet, nuclear polarization, or a $g$-factor difference

No oscillating magnetic drive is required for the basic baseband protocol. Resonant modulation of $J$ is an alternative that permits operation near a symmetric point. Two-qubit coupling uses either a **capacitive** interaction, exploiting the state-dependent charge admixture of $|S\rangle$, or **direct exchange** between adjacent physical spins of neighboring qubits.

After the single-spin Loss-DiVincenzo qubit, this is the next-simplest spin qubit — requiring only 2 dots per logical qubit — and was the first encoded spin qubit to be experimentally demonstrated (Petta et al. 2005).


## Figure

![[singlet-triplet-qubit-figure.png]]

## Hamiltonian

In the $\{|S\rangle,|T_0\rangle\}$ basis, define $\sigma_z=|T_0\rangle\!\langle T_0|-|S\rangle\!\langle S|$. After removing a common energy offset,

$$H = \frac{J(\varepsilon,t_c)}{2}\sigma_z + \frac{\Delta E_Z}{2}\sigma_x, \qquad \Delta E_Z=g\mu_B\Delta B_z.$$

Here $J=E_{T_0}-E_S>0$ is the exchange splitting. In a symmetric two-site Hubbard model with on-site charging energy $U$, detuning $\varepsilon$, and spin-conserving tunnel amplitude $t_c$, second-order perturbation theory in the $(1,1)$ charge sector gives

$$J(\varepsilon,t_c) \simeq 2t_c^2\!\left(\frac{1}{U+\varepsilon}+\frac{1}{U-\varepsilon}\right)=\frac{4t_c^2U}{U^2-\varepsilon^2},$$

valid away from the $(1,1)$–$(2,0)/(0,2)$ charge anticrossings. At the symmetric operating point $\varepsilon=0$, $\partial J/\partial\varepsilon=0$. Barrier control changes $t_c$ while remaining at this first-order detuning-noise sweet spot.

### Logical encoding

$$|0_L\rangle = |S\rangle = \frac{1}{\sqrt{2}}(|\!\uparrow\downarrow\rangle - |\!\downarrow\uparrow\rangle), \quad |1_L\rangle = |T_0\rangle = \frac{1}{\sqrt{2}}(|\!\uparrow\downarrow\rangle + |\!\downarrow\uparrow\rangle)$$

Both states have $m_s = 0$, giving first-order insensitivity to uniform magnetic field fluctuations.

### Two-qubit coupling

**Capacitive coupling** between DQDs produces state-dependent energy shifts. After absorbing single-qubit terms, its entangling component can be written

$$H_\text{cap} = \alpha\,\sigma_z^{(1)} \sigma_z^{(2)}$$

where $\alpha$ depends on inter-DQD capacitance and on the charge admixture of the logical states.

**Exchange coupling** acts first on the physical boundary spins, for example $H_c=J_c\,\mathbf{s}_2\!\cdot\!\mathbf{s}_3$. Its projection generates logical two-qubit interactions, but an abrupt pulse can also populate non-computational four-spin states; exchange-gate sequences therefore have to control leakage rather than treating $H_c$ as a simple logical Heisenberg term.

## Motivation

- **All-electrical control** — no microwave drive needed (unlike Loss-DiVincenzo)
- **Only 2 dots** per logical qubit — simpler than exchange-only (3 dots)
- **Fast gates** — exchange pulses at ns timescales
- **Well-established platform** — demonstrated with electron and hole spins in GaAs, Si/SiGe, silicon MOS, and Ge/SiGe
- Foundation for more complex encodings (exchange-only, AEON, RX)

## Experimental Status

**First demonstration**: Petta et al. (2005) in a GaAs/AlGaAs DQD — coherent singlet-triplet oscillations via exchange control, with $T_2^*\sim10$ ns limited by hyperfine fluctuations.

**Key experimental milestones**:
- **Bluhm et al. (2011)**: Dynamical decoupling extended $T_2$ to ~200 μs in GaAs
- **Maune et al. (2012)**: First Si/SiGe singlet-triplet qubit — isotopic purification dramatically improved coherence
- **Shulman et al. (2012)**: Two-qubit entangling gate via capacitive coupling, Bell state fidelity ~72% (GaAs)
- **Nichol et al. (2017)**: ~99% single-qubit fidelity and 90% entangling-gate fidelity in capacitively coupled GaAs $S$–$T_0$ qubits
- **Bøttcher et al. (2022)**: Parametric longitudinal coupling to high-impedance SC resonator
- **Ungerer et al. (2024)**: Strong single-photon coupling in an InAs nanowire $S$–$T$ device, $g/2\pi=139\pm4$ MHz
- **Song et al. (2024)**: ~100 MHz field-gradient-driven oscillations with quality factor $Q>580$ in $^{28}$Si/SiGe
- **Zhang et al. (2025)**: Universal control of four neighboring $S$–$T_-$ hole-spin qubits in a $2\times4$ germanium dot array; this is a related polarized-triplet variant, not the $S$–$T_0$ encoding defined above
- **Tsoukalas et al. (2026)**: Resonantly driven germanium hole $S$–$T_0$ qubit with 99.68(2)% average gate fidelity; continuous dressing extended rotating-frame coherence to $T_{2\rho}^*=20.3\,\mu\text{s}$ while retaining 99.63(7)% gates

## References

### Original proposal
- J. Levy, "Universal quantum computation with spin-1/2 pairs and Heisenberg exchange," [PRL 89, 147902 (2002)](https://doi.org/10.1103/PhysRevLett.89.147902)

### Landmark experiment
- J. R. Petta et al., "Coherent manipulation of coupled electron spins in semiconductor quantum dots," [Science 309, 2180 (2005)](https://doi.org/10.1126/science.1116955)

### Coherence advances
- H. Bluhm et al., "Dephasing time of GaAs electron-spin qubits coupled to a nuclear bath exceeding 200 μs," [Nature Phys. 7, 109 (2011)](https://doi.org/10.1038/nphys1856)
- B. M. Maune et al., "Coherent singlet-triplet oscillations in a silicon-based double quantum dot," [Nature 481, 344 (2012)](https://doi.org/10.1038/nature10707)

### Two-qubit gates
- M. D. Shulman et al., "Demonstration of entanglement of electrostatically coupled singlet-triplet qubits," [Science 336, 202 (2012)](https://doi.org/10.1126/science.1217692)
- J. M. Nichol et al., "High-fidelity entangling gate for double-quantum-dot spin qubits," [npj Quantum Information 3, 3 (2017)](https://doi.org/10.1038/s41534-016-0003-1), [arXiv:1608.04258](https://arxiv.org/abs/1608.04258)

### Readout
- C. Barthel et al., "Rapid single-shot measurement of a singlet-triplet qubit," [PRL 103, 160503 (2009)](https://doi.org/10.1103/PhysRevLett.103.160503)

### Resonator coupling
- C. G. L. Bøttcher et al., "Parametric longitudinal coupling between a high-impedance superconducting resonator and a semiconductor quantum dot singlet-triplet spin qubit," [Nature Commun. 13, 4773 (2022)](https://doi.org/10.1038/s41467-022-32236-w)
- J. H. Ungerer et al., "Strong coupling between a microwave photon and a singlet-triplet qubit," [Nature Communications 15, 1068 (2024)](https://doi.org/10.1038/s41467-024-45235-w), [arXiv:2303.16825](https://arxiv.org/abs/2303.16825)

### Recent control and scaling
- Y. Song et al., "Coherence of a field-gradient-driven singlet-triplet qubit coupled to many-electron spin states in $^{28}$Si/SiGe," [npj Quantum Information 10, 77 (2024)](https://doi.org/10.1038/s41534-024-00869-y), [arXiv:2310.12603](https://arxiv.org/abs/2310.12603)
- X. Zhang et al., "Universal control of four singlet-triplet qubits," [Nature Nanotechnology 20, 209 (2025)](https://doi.org/10.1038/s41565-024-01817-9), [arXiv:2312.16101](https://arxiv.org/abs/2312.16101)
- K. Tsoukalas et al., "A dressed singlet-triplet qubit in germanium," [Nature Communications 17, 699 (2026)](https://doi.org/10.1038/s41467-025-65569-3), [arXiv:2501.14627](https://arxiv.org/abs/2501.14627)

## Linked Papers
- [[petta-2005-singlet-triplet]]
- [[barthel-2009-rapid-single-shot]]
- [[bluhm-2011-dephasing-time-gaas]]
- [[bttcher-2022-parametric-longitudinal-coupling]]
- [[levy-2002-universal-computation-spin]]
- [[loss-divincenzo-1998-quantum-dots]]
- [[martins-2016-symmetric-exchange-gates]]
- [[maune-2012-coherent-singlet-triplet]]
- [[nichol-2017-high-fidelity-entangling-gate]]
- [[reed-2016-reduced-sensitivity-charge-noise]]
- [[shulman-2012-demonstration-entanglement-electrostatically]]
- [[song-2024-field-gradient-driven-singlet-triplet]]
- [[tsoukalas-2026-dressed-singlet-triplet]]
- [[ungerer-2024-strong-coupling-microwave-photon]]
- [[zhang-2025-universal-control-four-singlet-triplet]]

## Evergreen context

- [[exchange-interaction-in-quantum-dots]] — the physical origin of electrically tuned `J(\epsilon)` control
- [[heisenberg-exchange-in-quantum-dots]] — the minimal exchange Hamiltonian behind the logical $Z$ rotation generated by $J$
- [[decoherence-free-subspace]] — why the `m_S = 0` manifold partially protects against uniform field noise
- [[charge-noise-sweet-spot]] — where symmetric detuning helps, and where the tradeoffs remain
- [[vacuum-rms-field-scaling]] — the resonator-side lever behind the high-impedance longitudinal-coupling route, distinct from the qubit-side charge admixture that supplies the electric response

## Related Entries
- [[loss-divincenzo-qubit]]
- [[exchange-only-qubit]]
- [[rx-qubit]]
- [[aeon-qubit]]
- [[spin-qubit]]
- [[qubit-readout]]
- [[circuit-qed]]

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Inhomogeneous coherence $T_2^*$ | ~10 ns (GaAs); $<1\,\mu$s in the ergodic $^{28}$Si/SiGe measurement; $1.9\,\mu$s (Ge holes) | Platform- and protocol-dependent; hyperfine-limited in GaAs, with distinct noise regimes in enriched Si and Ge | [Petta et al. 2005](https://doi.org/10.1126/science.1116955); [Song et al. 2024](https://doi.org/10.1038/s41534-024-00869-y); [Tsoukalas et al. 2026](https://doi.org/10.1038/s41467-025-65569-3) |
| Protected/dressed coherence | $>200\,\mu$s (GaAs CPMG); $T_{2\rho}^*=20.3\,\mu$s (dressed Ge holes) | Different coherence definitions and platforms; values should not be read as a direct ranking | [Bluhm et al. 2011](https://doi.org/10.1038/nphys1856); [Tsoukalas et al. 2026](https://doi.org/10.1038/s41467-025-65569-3) |
| Gate fidelity (1Q) | 99.68(2)% bare resonant; 99.63(7)% dressed | Average physical-gate fidelity for a Ge hole $S$–$T_0$ qubit | [Tsoukalas et al. 2026](https://doi.org/10.1038/s41467-025-65569-3) |
| Entangling-gate fidelity (2Q) | 90% | Capacitively coupled GaAs $S$–$T_0$ qubits; process estimate from self-consistent tomography | [Nichol et al. 2017](https://doi.org/10.1038/s41534-016-0003-1) |
| Representative 1Q gate time | 327 ns bare; 500 ns dressed | $X_\pi$ gates in the 2026 Ge hole device | [Tsoukalas et al. 2026](https://doi.org/10.1038/s41467-025-65569-3) |
| Readout fidelity | $>90\%$ in ~7 μs | Pauli spin blockade plus charge sensing in GaAs | [Barthel et al. 2009](https://doi.org/10.1103/PhysRevLett.103.160503) |
| Spin-photon coupling | $g/2\pi=139\pm4$ MHz | Strong-coupling InAs nanowire experiment; $\gamma/2\pi=116\pm7$ MHz and $\kappa/2\pi=19.8\pm0.2$ MHz | [Ungerer et al. 2024](https://doi.org/10.1038/s41467-024-45235-w) |
| Scaled control milestone | Four neighboring $S$–$T_-$ qubits; 1Q fidelities 99.49(8)–99.84(1)% | Related polarized-triplet encoding in a $2\times4$ Ge hole array; Bell-state fidelities 73(1)–90(1)% | [Zhang et al. 2025](https://doi.org/10.1038/s41565-024-01817-9) |
