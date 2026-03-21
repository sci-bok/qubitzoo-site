---
title: Singlet-Triplet Qubit
entry_type: qubit
technology_family: Semiconducting
status: active
seed_id: '23'
seed_source: qubitzoo-airtable
first_proposed_year: 2002
first_demonstrated_year: 2005
keywords:
- singlet-triplet
- spin
- semiconductor
- double-quantum-dot
last_updated: '2026-03-20'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok-manual-2026-03-20
figure_reviewed: true
---

## Description

The singlet-triplet ($S$–$T_0$) qubit encodes a logical qubit in the $m_s = 0$ subspace of two exchange-coupled electron spins in a **double quantum dot** (DQD). The singlet $|S\rangle$ and unpolarized triplet $|T_0\rangle$ form the computational basis, while the polarized triplets $|T_+\rangle = |\!\uparrow\uparrow\rangle$ and $|T_-\rangle = |\!\downarrow\downarrow\rangle$ are split off by a uniform magnetic field and lie outside the computational subspace.

Both single- and two-qubit gates are **fully electrical**:
- **$Z$ rotations** (around the logical $\hat{z}$ axis): tuning the exchange coupling $J$ via the gate voltage on the barrier or detuning between dots
- **$X$ rotations** (around the logical $\hat{x}$ axis): a magnetic field gradient $\Delta B_z$ between the two dots (from a micromagnet, nuclear polarization, or $g$-factor difference)

Two-qubit coupling uses either **capacitive (dipole-dipole)** interaction, exploiting the charge-dipole difference between $|S\rangle$ and $|T_0\rangle$ at finite detuning, or **direct exchange** between adjacent spins of neighboring qubits.

After the single-spin Loss-DiVincenzo qubit, this is the next-simplest spin qubit — requiring only 2 dots per logical qubit — and was the first encoded spin qubit to be experimentally demonstrated (Petta et al. 2005).


## Figure

![[singlet-triplet-qubit-figure.png]]

## Hamiltonian

In the $\{|S\rangle, |T_0\rangle\}$ basis:

$$H = \frac{J(\varepsilon)}{2}\sigma_z + \frac{g\mu_B \Delta B_z}{2}\sigma_x$$

where $J(\varepsilon)$ is the exchange splitting controlled by the detuning $\varepsilon$ between dots (or by the tunnel barrier), and $\Delta B_z$ is the magnetic field gradient. The exchange splitting $J$ depends on detuning as:

$$J(\varepsilon) \approx \frac{2t_c^2}{\varepsilon + \sqrt{\varepsilon^2 + 4t_c^2}} + \frac{2t_c^2}{U - \varepsilon + \sqrt{(U-\varepsilon)^2 + 4t_c^2}}$$

where $t_c$ is the tunnel coupling and $U$ the on-site Coulomb energy. At the symmetric operating point ($\varepsilon = 0$), $\partial J/\partial\varepsilon = 0$, providing a **charge noise sweet spot** for $J$.

### Logical encoding

$$|0_L\rangle = |S\rangle = \frac{1}{\sqrt{2}}(|\!\uparrow\downarrow\rangle - |\!\downarrow\uparrow\rangle), \quad |1_L\rangle = |T_0\rangle = \frac{1}{\sqrt{2}}(|\!\uparrow\downarrow\rangle + |\!\downarrow\uparrow\rangle)$$

Both states have $m_s = 0$, giving first-order insensitivity to uniform magnetic field fluctuations.

### Two-qubit coupling

**Capacitive coupling** between DQDs produces an effective $ZZ$ interaction in the logical basis:

$$H_\text{cap} = \alpha\,\sigma_z^{(1)} \sigma_z^{(2)}$$

where $\alpha$ depends on the inter-dot capacitance and the charge-dipole difference between $|S\rangle$ and $|T_0\rangle$.

**Exchange coupling** between adjacent spins of neighboring qubits gives an effective Heisenberg-type interaction in the logical basis.

## Motivation

- **All-electrical control** — no microwave drive needed (unlike Loss-DiVincenzo)
- **Only 2 dots** per logical qubit — simpler than exchange-only (3 dots)
- **Fast gates** — exchange pulses at ns timescales
- **Well-established platform** — demonstrated in GaAs and Si/SiGe with high fidelity
- Foundation for more complex encodings (exchange-only, AEON, RX)

## Experimental Status

**First demonstration**: Petta et al. (2005) in GaAs/AlGaAs DQD — coherent singlet-triplet oscillations via exchange control, $T_2^* \sim 10$ ns (nuclear-limited).

**Key experimental milestones**:
- **Bluhm et al. (2011)**: Dynamical decoupling extended $T_2$ to ~200 μs in GaAs
- **Maune et al. (2012)**: First Si/SiGe singlet-triplet qubit — isotopic purification dramatically improved coherence
- **Shulman et al. (2012)**: Two-qubit entangling gate via capacitive coupling, Bell state fidelity ~72% (GaAs)
- **Nichol et al. (2017)**: Two-qubit gate fidelity ~90% via capacitive coupling (GaAs)
- **Jock et al. (2018)**: Si/SiGe with $T_2^* \sim 1\,\mu\text{s}$, single-qubit fidelity >99%
- **Weinstein et al. (2023)**: Symmetric operation sweet spot, high-fidelity gates in Si/SiGe
- **Bøttcher et al. (2022)**: Parametric longitudinal coupling to high-impedance SC resonator

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
- J. M. Nichol et al., "High-fidelity entangling gate for double-quantum-dot spin qubits," [npj Quantum Info. 3, 3 (2017)](https://doi.org/10.1038/s41534-017-0019-1)

### Readout
- C. Barthel et al., "Rapid single-shot measurement of a singlet-triplet qubit," [PRL 103, 160503 (2009)](https://doi.org/10.1103/PhysRevLett.103.160503)

### Resonator coupling
- C. G. L. Bøttcher et al., "Parametric longitudinal coupling between a high-impedance superconducting resonator and a semiconductor quantum dot singlet-triplet spin qubit," [Nature Commun. 13, 4773 (2022)](https://doi.org/10.1038/s41467-022-32236-w)

## Linked Papers
- [[petta-2005-singlet-triplet]]

## Related Entries
- [[loss-divincenzo-qubit]]
- [[exchange-only-qubit]]
- [[rx-qubit]]
- [[aeon-qubit]]

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_2^*$ | 10 ns (GaAs), ~1 μs (Si) | Nuclear-limited (GaAs), charge-limited (Si) | [Petta et al. 2005](https://doi.org/10.1126/science.1116955) |
| Qubit coherence $T_2^\text{echo}$ | ~200 μs (GaAs), >1 ms (Si) | With dynamical decoupling | [Bluhm et al. 2011](https://doi.org/10.1038/nphys1856) |
| Gate fidelity (1Q) | >99% | Exchange + gradient control (Si) | [Jock et al. 2018](https://doi.org/10.1038/s41565-017-0014-x) |
| Gate fidelity (2Q) | ~90% | Capacitive coupling (GaAs) | [Nichol et al. 2017](https://doi.org/10.1038/s41534-017-0019-1) |
| Gate time (1Q) | 1–100 ns | Exchange pulse ($Z$) or gradient ($X$) | — |
| Gate time (2Q) | 10–200 ns | Capacitive or exchange-mediated | — |
| Readout fidelity | 95–99% | Pauli spin blockade + charge sensor | [Barthel et al. 2009](https://doi.org/10.1103/PhysRevLett.103.160503) |
| Qubit footprint | ~100–200 nm pitch | 2 dots per logical qubit | — |
| Operating temperature | 20–100 mK | GaAs or Si/SiGe | — |
| Connectivity | Nearest-neighbor | Between adjacent double dots | — |
