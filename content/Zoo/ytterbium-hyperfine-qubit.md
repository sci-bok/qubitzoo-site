---
title: Ytterbium-171 Hyperfine Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: true
first_proposed_year: 2002
first_demonstrated_year: 2002
keywords:
- ytterbium
- Yb-171
- hyperfine qubit
- trapped ion
- clock states
- field insensitive
- microwave qubit
- Quantinuum
- IonQ
influence_score: 0.88
last_updated: '2026-11-08'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-08
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/ytterbium-hyperfine-qubit-figure.provenance.json"
figure_reviewed_by: "codex-visual-physics-review-2026-11-08"
figure_reviewed_at: "2026-11-08T15:08:37.224031+00:00"
---

## Figure

![[ytterbium-hyperfine-qubit-figure.png]]

## Description

The ytterbium-171 hyperfine qubit encodes quantum information in the two hyperfine clock states of the $^{171}\text{Yb}^+$ ion's $^2S_{1/2}$ ground-state manifold: $|0\rangle \equiv |F=0, m_F=0\rangle$ and $|1\rangle \equiv |F=1, m_F=0\rangle$. Their zero-field splitting is approximately 12.642812118 GHz. Because both clock states have $m_F=0$, the transition has no first-order Zeeman shift at zero field; its leading magnetic sensitivity is quadratic rather than zero.

The $^{171}\text{Yb}^+$ ion has nuclear spin $I=1/2$. Its $^2S_{1/2}$ ground state has zero orbital angular momentum and electronic total angular momentum $J=1/2$, yielding the simplest hyperfine structure: an $F=0$ singlet and an $F=1$ triplet. This simplicity, combined with convenient photoionization loading and state-dependent fluorescence detection on the $^2S_{1/2} \leftrightarrow {^2P_{1/2}}$ transition near 369.5 nm, makes it the workhorse qubit for multiple trapped-ion quantum computing platforms including Quantinuum's H-series and IonQ systems.

Two-qubit entangling gates are performed through Coulomb-coupled motional modes, commonly with bichromatic 355 nm Raman fields in Mølmer–Sørensen-type or geometric-phase protocols. In the 56-qubit Quantinuum H2 QCCD processor, which uses $^{171}\text{Yb}^+$ computational ions, the reported average two-qubit gate fidelity is 99.843(5)%. This is a processor-level benchmark and should not be conflated with the 99.9% calcium-43 or beryllium-9 small-system gate records.

## Hamiltonian

For a static magnetic field $B$ along $z$, the ground-state Hamiltonian is

$$H = A_{\text{hfs}}\,\mathbf I\!\cdot\!\mathbf J + g_J\mu_B J_z B - g_I\mu_N I_z B,$$

where $A_{\text{hfs}}$ is the magnetic-dipole hyperfine constant, $\mathbf I$ is the nuclear spin, $\mathbf J$ is the electronic angular momentum, and the last two terms are the electronic and nuclear Zeeman interactions. For $^{171}\text{Yb}^+$ with $I=J=1/2$, the zero-field $F=1$ to $F=0$ splitting is

$$\Delta E_{\text{hfs}}=A_{\text{hfs}}=h\nu_{\text{hfs}},\qquad \nu_{\text{hfs}}\approx 12.642812118\,\text{GHz}.$$

Expanding the Breit–Rabi expression near zero field gives the clock-transition frequency

$$\nu_{01}(B)=\nu_{01}(0)+k_ZB^2+O(B^4),$$

with $k_Z=31.0869(22)\,\text{mHz}/\mu\text{T}^2=310.869(22)\,\text{Hz}/\text{G}^2$. The previous value of 310.8 Hz/mT$^2$ was a unit-conversion error by a factor of 100. In a frame rotating at a microwave or Raman drive frequency, coherent one-qubit control is represented by

$$H_{\text{rot}}=\frac{\hbar}{2}\left[\delta\sigma_z+\Omega\left(\cos\phi\,\sigma_x+\sin\phi\,\sigma_y\right)\right],$$

where $\delta$ is the detuning, $\Omega$ the Rabi frequency, and $\phi$ the drive phase.

## Motivation

Trapped-ion qubits require long coherence times and high-fidelity operations to serve as building blocks for fault-tolerant quantum computing. Hyperfine clock states in $^{171}\text{Yb}^+$ suppress first-order magnetic-field noise, while sympathetic cooling, dynamical decoupling, oscillator stabilization, and magnetic-field control can extend memory coherence far beyond bare Ramsey times. The simple level structure, mature fluorescence readout, and microwave-compatible splitting have made $^{171}\text{Yb}^+$ a widely deployed trapped-ion qubit platform.

## Experimental Status

**Early single-ion qubit demonstration — Hannemann et al. (2002):**
- Used the two ground-state hyperfine levels of a single trapped $^{171}\text{Yb}^+$ ion as a qubit
- Demonstrated microwave control and adaptive quantum-state estimation, establishing that the platform predates the 2007 characterization

**Comprehensive characterization — Olmschenk et al. (2007):**
- Demonstrated manipulation and detection of a trapped $\text{Yb}^+$ hyperfine qubit
- Characterized state preparation, single-qubit gates, and state-dependent fluorescence readout
- Measured a 2.5(3) s coherence time

**Fast state detection — Noek et al. (2013):**
- Demonstrated direct fluorescence detection fidelities of 99%, 99.85(1)%, and 99.915(7)% at 10.5, 28.1, and 99.8 $\mu$s, respectively
- Used efficient photon collection and time-resolved photon counting, not electron shelving

**Rigorous single-qubit characterization — Blume-Kohout et al. (2017):**
- Used gate-set tomography on a trapped $^{171}\text{Yb}^+$ qubit
- Measured diamond-norm errors of $(1.58\pm0.15)\times10^{-4}$, $(1.39\pm0.22)\times10^{-4}$, and $(1.62\pm0.27)\times10^{-4}$ for the idle, $X_{\pi/2}$, and $Y_{\pi/2}$ gates

**Long memory — Wang et al. (2017, 2021):**
- Reached 660 s coherence with sympathetic cooling and thousands of dynamical-decoupling pulses in 2017
- In 2021, inferred a 5500 s exponential coherence time from measurements extending to 960 s after suppressing magnetic-field, reference-frequency, and microwave-leakage limits

**System-level deployment — Quantinuum H2 (2024–2025):**
- 56-qubit fully connected $^{171}\text{Yb}^+$ register
- 99.843(5)% average two-qubit gate fidelity reported in the peer-reviewed H2 random-circuit study
- QCCD transport, arbitrary connectivity, parallel gate zones, mid-circuit measurement, and qubit reuse

**Precision clock parameters — Han et al. (2025):**
- Refined the ground-state electronic $g_J$ factor to 2.002615(70)
- Determined the second-order Zeeman coefficient as 31.0869(22) mHz/$\mu$T$^2$, fixing the unit error in the previous entry

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Ramsey coherence | 2.5(3) s | Single ion; no long dynamical-decoupling sequence | [Olmschenk et al. 2007](https://doi.org/10.1103/PhysRevA.76.052314) |
| Dynamically decoupled memory | 5500 s fitted $T_2$ | Exponential fit; measurements extended to 960 s | [Wang et al. 2021](https://doi.org/10.1038/s41467-020-20330-w) |
| Hyperfine splitting | 12.642812118 GHz | Zero-field clock transition | [Wang et al. 2017](https://doi.org/10.1038/s41566-017-0007-1) |
| Quadratic Zeeman coefficient | 31.0869(22) mHz/$\mu$T$^2$ | Equivalent to 310.869(22) Hz/G$^2$ | [Han et al. 2025](https://doi.org/10.1103/PhysRevA.111.012814) |
| 1Q gate diamond-norm error | $(1.39$–$1.62)\times10^{-4}$ | GST bounds for idle, $X_{\pi/2}$, and $Y_{\pi/2}$ operations | [Blume-Kohout et al. 2017](https://doi.org/10.1038/ncomms14485) |
| 2Q gate fidelity | 99.843(5)% | Average on the 56-qubit H2 QCCD processor | [DeCross et al. 2025](https://doi.org/10.1103/PhysRevX.15.021052) |
| Direct-detection fidelity | 99.915(7)% | 99.8 $\mu$s fluorescence-detection time | [Noek et al. 2013](https://doi.org/10.1364/OL.38.004735) |
| Processor scale | 56 qubits | Arbitrary connectivity on Quantinuum H2 | [DeCross et al. 2025](https://doi.org/10.1103/PhysRevX.15.021052) |

## References

### Early demonstration and characterization
- Th. Hannemann et al., "Self-learning estimation of quantum states," [Phys. Rev. A 65, 050303(R) (2002)](https://doi.org/10.1103/PhysRevA.65.050303)
- S. Olmschenk et al., "Manipulation and detection of a trapped Yb⁺ hyperfine qubit," [Phys. Rev. A 76, 052314 (2007)](https://doi.org/10.1103/PhysRevA.76.052314)

### Control and processors
- R. Blume-Kohout et al., "Demonstration of qubit operations below a rigorous fault tolerance threshold with gate set tomography," [Nat. Commun. 8, 14485 (2017)](https://doi.org/10.1038/ncomms14485)
- M. DeCross et al., "The computational power of random quantum circuits in arbitrary geometries," [Phys. Rev. X 15, 021052 (2025)](https://doi.org/10.1103/PhysRevX.15.021052)

### Coherence
- Y. Wang et al., "Single-qubit quantum memory exceeding ten-minute coherence time," [Nat. Photonics 11, 646–650 (2017)](https://doi.org/10.1038/s41566-017-0007-1)
- P. Wang et al., "Single ion qubit with estimated coherence time exceeding one hour," [Nat. Commun. 12, 233 (2021)](https://doi.org/10.1038/s41467-020-20330-w)

### Detection and precision atomic data
- R. Noek et al., "High speed, high fidelity detection of an atomic hyperfine qubit," [Opt. Lett. 38, 4735–4738 (2013)](https://doi.org/10.1364/OL.38.004735)
- J. Han et al., "Determination of the Landé $g_J$ factor and Zeeman coefficients in ground-state $^{171}\text{Yb}^+$ and their applications to quantum frequency standards," [Phys. Rev. A 111, 012814 (2025)](https://doi.org/10.1103/PhysRevA.111.012814)

## Linked Papers

- [[hannemann-2002-self-learning-yb171]]
- [[olmschenk-2007-yb171-qubit]]
- [[blume-kohout-2017-yb-gst]]
- [[decross-2025-h2-random-circuits]]
- [[noek-2013-high-speed-detection]]
- [[sorensen-1999-ms-gate]]
- [[wang-2017-single-qubit-quantum-memory]]
- [[wang-2021-single-ion-qubit]]
- [[han-2025-yb-zeeman-coefficients]]

## Evergreen context

- [[coherence-time-hierarchy]] — clock-state Yb$^+$ is the cleanest example of a qubit whose practical value comes from enormous $T_2/\tau_{\mathrm{gate}}$ separation, not raw gate speed
- [[motional-mode-coupling-in-ion-traps]] — Yb hyperfine qubits still rely on the shared phonon bus for entangling operations, whether Raman or microwave assisted
- [[divincenzo-criteria]] — helps explain why Yb$^+$ became the commercial workhorse: initialization, measurement, long coherence, and a mature entangling-gate stack all land in one species

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[cirac-zoller-gate]] — foundational trapped-ion gate proposal
- [[molmer-sorenson-gate]] — dominant modern entangling gate for the Yb hyperfine stack
