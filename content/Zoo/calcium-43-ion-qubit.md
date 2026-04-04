---
title: Calcium-43 Trapped-Ion Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: false
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
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[calcium-43-ion-qubit-figure.png]]

## Description

The calcium-43 trapped-ion qubit encodes quantum information in the hyperfine clock states of the $^{43}\text{Ca}^+$ ion's $4S_{1/2}$ ground-state manifold. With nuclear spin $I = 7/2$, the ground state splits into $F = 3$ and $F = 4$ hyperfine levels separated by 3.226 GHz, yielding 16 ground-state sublevels. The qubit is encoded in the magnetically insensitive $|F=4, m_F=0\rangle \leftrightarrow |F=3, m_F=0\rangle$ clock transition, providing first-order immunity to magnetic field fluctuations with measured coherence times $T_2^* \approx 50$ seconds without magnetic shielding.

The $^{43}\text{Ca}^+$ ion is the workhorse qubit of the Oxford ion trap group. Its defining advantage is compatibility with microwave-driven single-qubit gates using chip-integrated microwave resonators and waveguides on surface-electrode traps. This eliminates the need for lasers in single-qubit operations entirely, providing a path to scalable control without complex optical addressing. Laser systems are still required for cooling (397 nm), repumping (866 nm), and state readout via electron shelving, but qubit manipulation itself is all-electronic.

This platform holds the all-time record for single-qubit gate fidelity across all physical qubit technologies: Smith et al. (2025) demonstrated a Clifford gate error of $1.5(4) \times 10^{-7}$ (fidelity 99.999985%), using a microfabricated surface-electrode trap at room temperature without magnetic shielding. The two-qubit gate record for $^{43}\text{Ca}^+$ is 99.9(1)%, demonstrated by Ballance et al. (2016) using geometric phase gates.

## Hamiltonian

The ground-state hyperfine Hamiltonian for $^{43}\text{Ca}^+$ ($I = 7/2$, $J = 1/2$):

$$H_{\text{hfs}} = A_{\text{hfs}} \, \mathbf{I} \cdot \mathbf{J} + B_{\text{hfs}} \frac{3(\mathbf{I} \cdot \mathbf{J})^2 + \frac{3}{2}(\mathbf{I} \cdot \mathbf{J}) - I(I+1)J(J+1)}{2I(2I-1)J(2J-1)}$$

For $J = 1/2$, the electric quadrupole term ($B_{\text{hfs}}$) vanishes, simplifying to:

$$H_{\text{hfs}} = A_{\text{hfs}} \, \mathbf{I} \cdot \mathbf{J}$$

with $\Delta E_{\text{hfs}} = h \times 3.226\,\text{GHz}$.

The clock-state transition frequency shifts only at second order in magnetic field:

$$\omega_{01}(B) = \omega_{01}(0) + \beta B^2$$

where $\beta/2\pi \approx 1243\,\text{Hz/mT}^2$.

## Motivation

The $^{43}\text{Ca}^+$ system demonstrates that microwave-driven qubit gates can achieve fidelities far exceeding what laser-driven systems have demonstrated for single-qubit operations. Microwave control offers fundamental advantages for scaling: microwave fields can be generated on-chip via lithographically defined resonators, avoiding the alignment, pointing stability, and individual beam delivery challenges of laser-based addressing. The record $10^{-7}$-level gate errors place single-qubit operations effectively in the "error-free" regime for practical fault-tolerant quantum computing, shifting the engineering focus to two-qubit gates and system-level integration.

## Experimental Status

**High-fidelity qubit operations — Harty et al. (2014):**
- First comprehensive characterization of $^{43}\text{Ca}^+$ as a microwave-driven hyperfine qubit.
- Single-qubit gate fidelity: 99.9999% (error $10^{-6}$).
- State preparation and readout fidelity: 99.93%.
- Coherence time: $T_2^* = 50\,\text{s}$ in room-temperature surface-electrode trap without magnetic shielding.
- Demonstrated all operations using chip-integrated microwave resonators.

**Two-qubit gate record — Ballance et al. (2016):**
- Two-qubit gate fidelity: 99.9(1)% using a geometric phase (light-shift) gate.
- Demonstrated in $^{43}\text{Ca}^+$ hyperfine qubits at Oxford.

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
| $T_1$ | >10,000 s | Hyperfine ground states; no radiative decay channel | — |
| $T_2^*$ | ~50–70 s | Room temperature, no magnetic shielding | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| Hyperfine splitting | 3.226 GHz | Clock transition, first-order field insensitive | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| 1Q gate fidelity | 99.999985% | Microwave RB, error $1.5 \times 10^{-7}$; all-time record | [Smith et al. 2025](https://doi.org/10.1103/42w2-6ccy) |
| 2Q gate fidelity | 99.9% | Geometric phase gate | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| SPAM fidelity | 99.93% | Single-shot fluorescence readout | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| Gate time (1Q) | 4.4–35 μs | Speed-fidelity tradeoff | [Smith et al. 2025](https://doi.org/10.1103/42w2-6ccy) |
| Nuclear spin | $I = 7/2$ | 16 ground-state sublevels | — |
| Operating temperature | Room temp (trap) | Ions at ~mK; no cryogenics required | — |

## Scaling Considerations

- **Microwave scalability**: chip-integrated microwave resonators enable on-chip qubit control without individual laser addressing, a major advantage for scaling to large arrays.
- **Isotope abundance**: $^{43}\text{Ca}$ has only 0.14% natural abundance, requiring enriched sources and isotope-selective photoionization for efficient loading.
- **Large ground-state manifold**: the 16 ground-state sublevels from $I = 7/2$ increase the risk of leakage to non-computational states, though Smith et al. measured leakage at $< 10^{-9}$ per gate.
- **Two-qubit gates**: the current 99.9% two-qubit fidelity lags behind the single-qubit record by orders of magnitude; closing this gap is the main challenge.
- **Optical transitions**: cooling and readout still require UV/visible lasers (397 nm, 866 nm), limiting the "all-electronic" advantage to qubit manipulation only.

## References

### High-fidelity operations
- T. P. Harty et al., "High-Fidelity Preparation, Gates, Memory, and Readout of a Trapped-Ion Quantum Bit," [Phys. Rev. Lett. 113, 220501 (2014)](https://doi.org/10.1103/PhysRevLett.113.220501) | [arXiv:1403.1524](https://arxiv.org/abs/1403.1524)

### Two-qubit gates
- C. J. Ballance et al., "High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits," [Phys. Rev. Lett. 117, 060504 (2016)](https://doi.org/10.1103/PhysRevLett.117.060504) | [arXiv:1512.04600](https://arxiv.org/abs/1512.04600)

### Single-qubit gate record
- M. C. Smith et al., "Single-qubit gates with errors at the $10^{-7}$ level," [Phys. Rev. Lett. 134, 230601 (2025)](https://doi.org/10.1103/42w2-6ccy) | [arXiv:2412.04421](https://arxiv.org/abs/2412.04421)

## Linked Papers

- [[harty-2014-high-fidelity-preparation]]
- [[ballance-2016-ion-gate-fidelity]]
- [[smith-2024-single-qubit-gate-errors]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[ytterbium-hyperfine-qubit]] — alternative hyperfine species, dominant in commercial systems
- [[cirac-zoller-gate]] — foundational trapped-ion gate proposal
