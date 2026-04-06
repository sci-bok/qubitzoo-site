---
title: Barium-137 Trapped-Ion Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: true
first_proposed_year: 2010
first_demonstrated_year: 2010
keywords:
- barium
- Ba-137
- hyperfine qubit
- trapped ion
- clock states
- visible wavelength
- Quantinuum
- Helios
- QCCD
- dual species
influence_score: 0.82
last_updated: '2026-04-06'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-06
---

## Figure

![[barium-137-ion-qubit-figure.png]]

## Description

The barium-137 trapped-ion qubit encodes quantum information in the hyperfine manifold of the $6S_{1/2}$ ground state of $^{137}\mathrm{Ba}^+$. With nuclear spin $I=3/2$, the ground state splits into $F=1$ and $F=2$ hyperfine levels separated by $\omega_{\mathrm{hfs}}/2\pi \approx 8.037\,\mathrm{GHz}$. Both the 2010 single-ion demonstration and Quantinuum's 2025 Helios processor define the qubit on the magnetically insensitive clock transition $|F=1,m_F=0\rangle \leftrightarrow |F=2,m_F=0\rangle$, with Helios taking $|0\rangle \equiv |F=1,m_F=0\rangle$ and $|1\rangle \equiv |F=2,m_F=0\rangle$.

A major attraction of $^{137}\mathrm{Ba}^+$ is its favorable laser stack for qubit control and readout. Fluorescence detection uses the 493 nm $6S_{1/2}\!\to\!6P_{1/2}$ transition with 650 nm repumping from $5D_{3/2}$, while shelving and protected measurement use the narrow 1762 nm transition to the metastable $5D_{5/2}$ manifold. In Helios, single- and two-qubit gates are driven by pairs of 515 nm Raman beams separated by the qubit splitting. Compared with ultraviolet-gated species, this pushes the core qubit-control optics into a more mature visible/near-IR regime with higher available laser power and reduced UV-induced optics degradation.

Quantinuum's Helios processor made $^{137}\mathrm{Ba}^+$ the first barium-based species deployed in a large-scale trapped-ion quantum computer. Helios is a 98-qubit QCCD processor with $^{137}\mathrm{Ba}^+$ data qubits and co-trapped $^{171}\mathrm{Yb}^+$ coolant ions for sympathetic recooling. Averaged over its operational zones, Helios reports single-qubit, two-qubit, and SPAM infidelities of $2.5(1)\times10^{-5}$, $7.9(2)\times10^{-4}$, and $4.8(6)\times10^{-4}$ respectively, corresponding to fidelities of 99.9975%, 99.921%, and 99.952%. In 2026, the same Helios hardware was used to demonstrate encoded computations with 48 to 94 logical qubits using high-rate iceberg codes.

## Hamiltonian

The relevant internal Hamiltonian is the hyperfine-plus-Zeeman Hamiltonian

$$H = A_{\mathrm{hfs}}\,\mathbf I\cdot\mathbf J + \mu_B\bigl(g_J J_z + g_I I_z\bigr)B,$$

where $A_{\mathrm{hfs}}$ is the magnetic-dipole hyperfine constant, $\mathbf I$ is the nuclear spin, $\mathbf J$ is the electronic angular momentum, and $B$ is the applied bias field. For the $6S_{1/2}$ ground state of $^{137}\mathrm{Ba}^+$,

$$\Delta E_{\mathrm{hfs}} = h\times 8.037\,\mathrm{GHz}.$$

At zero field, the $m_F=0 \leftrightarrow m_F=0$ transition is a true clock transition with no first-order Zeeman shift. Helios operates instead at a finite bias field of about $3.95\,\mathrm{G}$, where the qubit remains an approximate clock transition with second-order magnetic sensitivity; the paper quotes a second-order coefficient of $488.8\,\mathrm{Hz/G^2}$ at zero field. State preparation and measurement are implemented by coherently mapping the $|F=1,m_F=0\rangle$ state into the metastable $5D_{5/2}$ manifold with 1762 nm pulses, followed by fluorescence detection on the 493/650 nm cycling transitions.

## Motivation

Barium offers an unusually attractive trapped-ion engineering point: the qubit species itself can be controlled and measured primarily with visible and near-IR light rather than relying on deep-UV qubit lasers. That improves component availability, eases power delivery, and reduces long-term UV damage to fibers and optics. The $^{137}\mathrm{Ba}^+$ hyperfine clock transition also provides the standard trapped-ion virtues of long-lived ground-state storage and magnetic-field robustness.

The species is especially compelling inside a QCCD architecture. In Helios, $^{137}\mathrm{Ba}^+$ serves as the data qubit while $^{171}\mathrm{Yb}^+$ handles sympathetic cooling, separating computation from recooling and helping preserve qubit coherence during long, transport-heavy programs. The tradeoff is that the full dual-species machine still requires additional UV infrastructure for the ytterbium coolant, so the visible-wavelength advantage applies primarily to the qubit species and gate/readout stack rather than the entire system.

## Experimental Status

**First hyperfine-qubit demonstration — Dietrich et al. (2010):**
- Demonstrated state preparation, microwave-driven qubit rotation, and shelving-based readout for a single $^{137}\mathrm{Ba}^+$ ion.
- Implemented the ground-state hyperfine qubit on the 8.037 GHz clock transition.
- Used the 1762 nm $6S_{1/2}\leftrightarrow 5D_{5/2}$ transition for selective shelving and readout.

**Large-scale processor deployment — Ransford et al. (2025):**
- Introduced Helios, a 98-qubit QCCD processor using $^{137}\mathrm{Ba}^+$ hyperfine qubits as data qubits.
- Co-trapped $^{171}\mathrm{Yb}^+$ coolant ions provide sympathetic recooling with 369 nm light.
- Reported average infidelities of $2.5(1)\times10^{-5}$ (1Q), $7.9(2)\times10^{-4}$ (2Q), and $4.8(6)\times10^{-4}$ (SPAM).
- Used a four-way X junction, rotatable storage ring, and 8 parallel operation zones for all-to-all connectivity via transport.

**Encoded-computation milestone on Helios — Dasu et al. (2026):**
- Demonstrated beyond-break-even encoded computations on the 98-qubit Helios processor using high-rate iceberg codes.
- Realized fault-tolerant and partially fault-tolerant benchmarks with between 48 and 94 logical qubits.
- Shows that the barium-based Helios platform is now supporting logical-layer as well as physical-qubit milestones.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Hyperfine splitting | 8.037 GHz | $|F=1,m_F=0\rangle \leftrightarrow |F=2,m_F=0\rangle$ clock transition | [Dietrich et al. 2010](https://doi.org/10.1103/PhysRevA.81.052328) |
| 1Q gate fidelity | 99.9975% | Helios zone-averaged benchmark | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| 2Q gate fidelity | 99.921% | Native $R_{ZZ}(\pi/2)$ / MS-family entangling benchmark on Helios | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| SPAM fidelity | 99.952% | From average infidelity $4.8(6)\times10^{-4}$ | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| 1Q/2Q gate wavelength | 515 nm | Raman beam pairs separated by the qubit splitting | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| Cooling / detection | 493 nm | $6S_{1/2} \to 6P_{1/2}$ fluorescence transition | [Dietrich et al. 2010](https://doi.org/10.1103/PhysRevA.81.052328) |
| Repump wavelength | 650 nm | Clears population from $5D_{3/2}$ during fluorescence cycle | [Dietrich et al. 2010](https://doi.org/10.1103/PhysRevA.81.052328) |
| Shelving wavelength | 1762 nm | Coherent mapping to the $5D_{5/2}$ manifold for readout | [Dietrich et al. 2010](https://doi.org/10.1103/PhysRevA.81.052328) |
| Bias field (Helios) | 3.95 G | Approximate clock-state operation point | [Ransford et al. 2025](https://arxiv.org/abs/2511.05465) |
| Logical qubits demonstrated | 48–94 | High-rate iceberg-code benchmarks on Helios | [Dasu et al. 2026](https://arxiv.org/abs/2602.22211) |

## Scaling Considerations

- **Visible/near-IR qubit optics**: the barium qubit species moves gate, shelving, and fluorescence hardware away from deep-UV qubit lasers, improving component availability and reducing optics degradation.
- **Not a fully UV-free computer**: Helios still relies on $^{171}\mathrm{Yb}^+$ sympathetic cooling at 369 nm, so the visible-wavelength advantage is species-specific rather than system-wide.
- **Dual-species complexity**: mixed-species loading, transport, recooling, and calibration add real overhead, even though they decouple cooling from computation.
- **QCCD transport overhead**: shuttling through junctions and between storage and logic zones trades wiring simplicity for transport scheduling, calibration burden, and clock-speed limits.
- **Isotope logistics**: $^{137}\mathrm{Ba}$ is only about 11% naturally abundant, so isotope-selective loading or enriched sources remain operational considerations.
- **Measurement complexity**: the high-fidelity readout stack is powerful but nontrivial, involving coherent 1762 nm mapping pulses, fluorescence cycling, and crosstalk-mitigation protocols.

## References

### Qubit characterization
- M. R. Dietrich, N. Kurz, T. Noel, G. Shu, and B. B. Blinov, "Hyperfine and optical barium ion qubits," [Phys. Rev. A 81, 052328 (2010)](https://doi.org/10.1103/PhysRevA.81.052328) | [arXiv:1004.1161](https://arxiv.org/abs/1004.1161)

### Large-scale processor
- A. Ransford et al., "Helios: A 98-qubit trapped-ion quantum computer," [arXiv:2511.05465 (2025)](https://arxiv.org/abs/2511.05465)

### Logical-layer milestone
- S. Dasu et al., "Computing with many encoded logical qubits beyond break-even," [arXiv:2602.22211 (2026)](https://arxiv.org/abs/2602.22211)

## Linked Papers

- [[dietrich-2010-barium-hyperfine-qubit]]
- [[ransford-2025-helios-98-qubit]]
- [[dasu-2026-many-encoded-logical-qubits]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[ytterbium-hyperfine-qubit]] — alternative hyperfine ion species; Yb-171 serves as sympathetic coolant in Helios
- [[strontium-88-ion-qubit]] — another visible-wavelength trapped-ion species for comparison
- [[shuttling-ion-trap-qubit]] — QCCD architecture used by Helios
- [[molmer-sorenson-gate]] — entangling gate family used in Ba+ systems
