---
title: Calcium-43 Trapped-Ion Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: true
first_proposed_year: 2014
first_demonstrated_year: 2014
keywords:
- calcium
- Ca-43
- hyperfine qubit
- trapped ion
- clock states
- microwave gates
- Oxford
- surface electrode trap
- single qubit fidelity record
influence_score: 0.84
last_updated: '2026-04-05'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-05
---

## Figure

![[calcium-43-ion-qubit-figure.png]]

## Description

The calcium-43 trapped-ion qubit stores quantum information in the hyperfine ground-state manifold of $^{43}\text{Ca}^+$, whose nuclear spin $I = 7/2$ splits the $4S_{1/2}$ level into $F = 3$ and $F = 4$ manifolds separated by 3.226 GHz at zero field, for a total of 16 ground-state sublevels. In the Oxford high-coherence implementation, the qubit is encoded in the field-independent hyperfine transition $|4,0\rangle \leftrightarrow |3,+1\rangle$ at a bias field of about 146 G, giving a qubit frequency near 3.200 GHz and strong suppression of first-order magnetic-field noise. This operating point underlies the long memory times reported by Harty et al. (2014) and the record single-qubit fidelities reported by Smith et al. (2025).

The $^{43}\text{Ca}^+$ ion is the workhorse qubit of the Oxford trapped-ion program because it pairs atomic-clock-grade coherence with microwave control in a microfabricated surface-electrode trap. Chip-integrated microwave resonators and waveguides drive single-qubit rotations electronically, avoiding laser-based single-qubit addressing. Lasers are still required for Doppler cooling (397 nm), repumping (866 nm), shelving/reset (393/850/854 nm), and fluorescence-based state preparation and readout, but coherent single-qubit control itself is all-electronic.

Different $^{43}\text{Ca}^+$ experiments use different hyperfine encodings depending on the task. The best single-qubit results use the 146 G clock transition above, while Ballance et al. (2016) used a low-field Raman-driven hyperfine basis for the 99.9(1)% two-qubit gate result. Together these experiments make $^{43}\text{Ca}^+$ a benchmark species for long-lived, high-fidelity trapped-ion qubits.

## Hamiltonian

For the $4S_{1/2}$ ground manifold of $^{43}\text{Ca}^+$ ($I = 7/2$, $J = 1/2$), the relevant Hamiltonian is the hyperfine-plus-Zeeman Hamiltonian

$$H = A_{\mathrm{hfs}}\, \mathbf{I}\cdot\mathbf{J} + \mu_B g_J J_z B - \mu_N g_I I_z B.$$

Because $J = 1/2$, there is no electric-quadrupole hyperfine term in this manifold. At zero field this produces the familiar $F=4$ and $F=3$ hyperfine manifolds with splitting $\Delta E_{\mathrm{hfs}} = h \times 3.226\,\mathrm{GHz}$. At finite magnetic field the eigenenergies follow the Breit-Rabi structure, and the Oxford clock qubit is chosen at the field-independent point near $B_0 \approx 146\,\mathrm{G}$ on the transition

$$|0\rangle \equiv |4,0\rangle, \qquad |1\rangle \equiv |3,+1\rangle,$$

with qubit frequency $\omega_{01}/2\pi \approx 3.200\,\mathrm{GHz}$. Near that operating point,

$$\omega_{01}(B) \approx \omega_{01}(B_0) + \tfrac{1}{2}\kappa (B-B_0)^2,$$

so the first-order magnetic sensitivity vanishes. Separate low-field gate experiments on the same species use other hyperfine basis states; for example, Ballance et al. (2016) operated a Raman-driven two-qubit gate in a low-field regime rather than at the 146 G clock point.

## Motivation

The $^{43}\text{Ca}^+$ system demonstrates that microwave-driven trapped-ion qubit gates can reach error rates deep into the fault-tolerant regime while preserving the long coherence times expected from hyperfine clock transitions. Microwave control offers fundamental scaling advantages: fields can be generated on-chip via lithographically defined resonators, avoiding the alignment, pointing stability, and individual beam-delivery burden of laser-based single-qubit addressing. The record $10^{-7}$-level single-qubit errors place 1Q operations effectively in the “error-free” regime for practical architectures, shifting the real bottleneck to entangling gates, optical infrastructure, and system integration.

## Experimental Status

**High-fidelity qubit operations — Harty et al. (2014):**
- First comprehensive characterization of $^{43}\text{Ca}^+$ as a microwave-driven hyperfine qubit.
- Qubit encoded in the field-independent $|4,0\rangle \leftrightarrow |3,+1\rangle$ transition near $B_0 \approx 146\,\text{G}$.
- Single-qubit gate fidelity: 99.9999% (error $10^{-6}$).
- State preparation and readout fidelity: 99.93%.
- Coherence time: $T_2^* = 50\,\text{s}$ in room-temperature surface-electrode trap without magnetic shielding.
- Demonstrated all coherent single-qubit operations using chip-integrated microwave resonators.

**Two-qubit gate record — Ballance et al. (2016):**
- Two-qubit gate fidelity: 99.9(1)% using a Raman-driven geometric phase ($\sigma_z \otimes \sigma_z$) gate.
- Demonstrated in $^{43}\text{Ca}^+$ hyperfine qubits at Oxford in a low-field operating regime ($B = 0.196\,\text{mT}$), distinct from the 146 G clock-state operating point used for the 1Q record.

**Single-qubit gate record — Smith et al. (2025):**
- Clifford gate error: $1.5(4) \times 10^{-7}$ (fidelity 99.999985%).
- All-time record across all physical qubit platforms.
- Fastest gates (4.4 μs) achieved error of $2.9(5) \times 10^{-7}$.
- Calibration errors suppressed below $10^{-8}$.
- Dominant errors: qubit decoherence ($T_2 \approx 70\,\text{s}$), leakage ($< 10^{-9}$ per gate), and measurement.
- Performed on a microfabricated surface-electrode Paul trap at room temperature without magnetic shielding.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10,000 s | Hyperfine ground states; practically limited by ion lifetime, not radiative decay | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| $T_2^*$ | ~50–70 s | 146 G field-independent clock transition $|4,0\rangle \leftrightarrow |3,+1\rangle$ in room-temperature trap without magnetic shielding | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501); [Smith et al. 2025](https://doi.org/10.1103/42w2-6ccy) |
| Zero-field hyperfine splitting | 3.226 GHz | Separation between the $F=4$ and $F=3$ ground manifolds | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| Operating qubit frequency | 3.200 GHz | Oxford clock-state operating point near $B_0 \approx 146\,\text{G}$ | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| 1Q gate fidelity | 99.999985% | Microwave randomized benchmarking, error $1.5 \times 10^{-7}$; all-time record across physical qubits | [Smith et al. 2025](https://doi.org/10.1103/42w2-6ccy) |
| 2Q gate fidelity | 99.9% | Raman-driven geometric phase gate in a low-field hyperfine basis, not the 146 G clock-state basis | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| SPAM fidelity | 99.93% | Single-shot fluorescence readout with shelving-based state discrimination | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| Gate time (1Q) | 4.4–35 μs | Speed-fidelity tradeoff in microwave control | [Smith et al. 2025](https://doi.org/10.1103/42w2-6ccy) |
| Nuclear spin | $I = 7/2$ | 16 ground-state sublevels in the $4S_{1/2}$ manifold | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| Operating temperature | Room temp (trap) | Ion motion cooled to mK scale; no cryogenic hardware required | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501); [Smith et al. 2025](https://doi.org/10.1103/42w2-6ccy) |

## Scaling Considerations

- **Microwave scalability**: chip-integrated microwave resonators enable on-chip qubit control without individual laser addressing, a major advantage for scaling to large arrays.
- **Isotope abundance**: $^{43}\text{Ca}$ has only 0.14% natural abundance, requiring enriched sources and isotope-selective photoionization for efficient loading.
- **Large ground-state manifold**: the 16 ground-state sublevels from $I = 7/2$ increase the risk of leakage to non-computational states, though Smith et al. measured leakage at $< 10^{-9}$ per gate.
- **Two-qubit gates**: the current 99.9% two-qubit fidelity lags behind the single-qubit record by orders of magnitude; closing this gap is the main challenge.
- **Operating-point mismatch**: the best 1Q and 2Q results were obtained in different hyperfine bases and magnetic-field regimes, so integrating record-level single- and two-qubit performance in one architecture remains an open systems challenge.
- **Optical transitions**: cooling and readout still require UV/visible lasers (397 nm, 866 nm, plus shelving/reset wavelengths), limiting the "all-electronic" advantage to qubit manipulation only.

## References

### High-fidelity operations
- T. P. Harty et al., "High-Fidelity Preparation, Gates, Memory, and Readout of a Trapped-Ion Quantum Bit," [Phys. Rev. Lett. 113, 220501 (2014)](https://doi.org/10.1103/PhysRevLett.113.220501) | [arXiv:1403.1524](https://arxiv.org/abs/1403.1524)

### Two-qubit gates
- C. J. Ballance et al., "High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits," [Phys. Rev. Lett. 117, 060504 (2016)](https://doi.org/10.1103/PhysRevLett.117.060504) | [arXiv:1512.04600](https://arxiv.org/abs/1512.04600)

### Single-qubit gate record
- M. C. Smith et al., "Single-Qubit Gates with Errors at the $10^{-7}$ Level," [Phys. Rev. Lett. 134, 230601 (2025)](https://doi.org/10.1103/42w2-6ccy) | [arXiv:2412.04421](https://arxiv.org/abs/2412.04421)

## Linked Papers

- [[harty-2014-high-fidelity-preparation]]
- [[ballance-2016-ion-gate-fidelity]]
- [[smith-2024-single-qubit-gate-errors]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[ytterbium-hyperfine-qubit]] — alternative hyperfine species, dominant in commercial systems
- [[strontium-88-ion-qubit]] — optical-clock trapped-ion species with a different control stack
- [[cirac-zoller-gate]] — foundational trapped-ion gate proposal
