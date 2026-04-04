---
title: Beryllium-9 Trapped-Ion Qubit
entry_type: qubit
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: true
first_proposed_year: 1995
first_demonstrated_year: 1995
keywords:
- beryllium
- Be-9
- hyperfine qubit
- trapped ion
- clock states
- NIST
- Wineland
- lightest ion
- UV laser
- Raman gates
- first CNOT gate
influence_score: 0.76
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[beryllium-9-ion-qubit-figure.png]]

## Description

The beryllium-9 trapped-ion qubit encodes quantum information in the hyperfine clock states of the $^9\text{Be}^+$ ion's $2S_{1/2}$ ground-state manifold. With nuclear spin $I = 3/2$, the ground state splits into $F = 2$ and $F = 1$ hyperfine levels separated by approximately 1.25 GHz. The qubit is defined on the magnetically insensitive $|F=2, m_F=0\rangle \leftrightarrow |F=1, m_F=0\rangle$ clock transition, providing first-order immunity to magnetic field fluctuations with demonstrated coherence times exceeding 1 second.

$^9\text{Be}^+$ holds a unique place in quantum computing history as the ion species used for the **first experimental quantum logic gate**. In 1995, Monroe et al. at NIST demonstrated a controlled-NOT (CNOT) gate using a single trapped $^9\text{Be}^+$ ion, encoding two qubits in the ion's internal hyperfine states and external motional states. This experiment, implementing the Cirac-Zoller gate proposal, established trapped ions as a viable platform for quantum computation.

As the lightest ion species used for quantum computing ($m = 9$ u), $^9\text{Be}^+$ has the highest motional frequency for a given trap potential, enabling faster sideband-resolved gate operations. However, all optical transitions require deep ultraviolet light: the primary cycling transition $2S_{1/2} \to 2P_{3/2}$ is at 313 nm, and stimulated Raman transitions for qubit gates also use 313 nm laser pairs. This UV requirement is the primary engineering disadvantage relative to heavier ion species with visible-wavelength transitions.

## Hamiltonian

The ground-state hyperfine Hamiltonian for $^9\text{Be}^+$ ($I = 3/2$, $J = 1/2$):

$$H_{\text{hfs}} = A_{\text{hfs}} \, \mathbf{I} \cdot \mathbf{J}$$

where $A_{\text{hfs}}$ is the magnetic dipole hyperfine constant. The hyperfine splitting is:

$$\Delta E_{\text{hfs}} = h \times 1.2503\,\text{GHz}$$

In an external magnetic field, the clock-state transition ($|F=2, m_F=0\rangle \leftrightarrow |F=1, m_F=0\rangle$) shifts only at second order:

$$\omega_{01}(B) = \omega_{01}(0) + \beta B^2$$

providing excellent field insensitivity. Stimulated Raman gates use two beams detuned from the $2P$ excited states, with effective Hamiltonian:

$$H_{\text{Raman}} = \frac{\hbar \Omega_{\text{eff}}}{2} \sigma_+ e^{i(\Delta k \cdot x - \delta t)} + \text{h.c.}$$

where $\Omega_{\text{eff}}$ is the two-photon Rabi frequency, $\Delta k$ is the wavevector difference, and $\delta$ is the two-photon detuning.

## Motivation

$^9\text{Be}^+$ was the workhorse ion of the NIST Ion Storage Group (Wineland, Monroe, Leibfried) for over 30 years, serving as the platform for many foundational demonstrations in quantum information. Its light mass gives the highest trap frequencies and fastest motional dynamics among ion qubits, enabling rapid gate operations. The 1.25 GHz hyperfine splitting is low enough to be easily bridged by microwave techniques or Raman laser pairs, and the clock-state encoding provides long coherence times. The NIST group's sustained investment in $^9\text{Be}^+$ technology produced a stream of record-setting results from 1995 through the 2010s, establishing techniques that were later adopted by other ion species.

## Experimental Status

**First quantum logic gate — Monroe et al. (1995):**
- First demonstration of a CNOT gate using a single trapped $^9\text{Be}^+$ ion.
- Qubits encoded in internal hyperfine states and external motional states.
- Implemented the Cirac-Zoller gate protocol with three sequential Raman pulses.
- Gate fidelity ~90%, limited by motional heating.

**High-fidelity universal gate set — Gaebler et al. (2016):**
- Single-qubit gate error: $3.8(1) \times 10^{-5}$ (fidelity 99.9962%).
- Two-qubit gate error: $8(4) \times 10^{-4}$ (fidelity 99.92%).
- Bell state fidelity: 99.924%.
- Memory coherence >1 s using clock-state encoding.
- Performed in a multi-segmented linear Paul trap at NIST.

**Comprehensive review — Bruzewicz et al. (2019):**
- Documents the full history and state-of-the-art of $^9\text{Be}^+$ alongside other trapped-ion species.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >10,000 s | Hyperfine ground states; no radiative decay | — |
| $T_2$ | >1 s | Clock-state encoding, magnetic-field insensitive | [Gaebler et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060505) |
| Hyperfine splitting | 1.2503 GHz | Clock transition, first-order field insensitive | — |
| 1Q gate fidelity | 99.9962% | Stimulated Raman, randomized benchmarking | [Gaebler et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060505) |
| 2Q gate fidelity | 99.92% | Mølmer-Sørensen gate | [Gaebler et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060505) |
| Qubit drive | 313 nm | Stimulated Raman transitions via $2P$ states | — |
| Ion mass | 9 u | Lightest ion used for QC; highest trap frequency | — |
| Nuclear spin | $I = 3/2$ | 8 ground-state sublevels ($F=1$: 3, $F=2$: 5) | — |
| Operating temperature | Room temp (trap) | Ions at ~mK | — |

## Scaling Considerations

- **UV laser requirement**: all transitions require 313 nm UV light, which is difficult to generate, lossy in optical fibers, and causes long-term damage to optical coatings and trap electrodes. This is the primary barrier to scaling $^9\text{Be}^+$ systems.
- **Light mass advantage**: high motional frequencies enable faster sideband operations and reduce anomalous heating effects (which scale as $\omega^{-\alpha}$).
- **Light mass disadvantage**: lighter ions are more susceptible to background gas collisions and require tighter trap confinement, making trap design more demanding.
- **Historical momentum**: three decades of NIST expertise provide extensive characterization data and well-understood error budgets, but commercial efforts have favored heavier ions with visible-wavelength transitions.
- **Mixed-species potential**: $^9\text{Be}^+$ can serve as a sympathetic coolant for heavier ion species (e.g., $^{25}\text{Mg}^+$, $^{40}\text{Ca}^+$) due to its efficient laser cooling.

## References

### First quantum logic gate
- C. Monroe, D. M. Meekhof, B. E. King, W. M. Itano, and D. J. Wineland, "Demonstration of a Fundamental Quantum Logic Gate," [Phys. Rev. Lett. 75, 4714 (1995)](https://doi.org/10.1103/PhysRevLett.75.4714)

### High-fidelity gate set
- J. P. Gaebler et al., "High-Fidelity Universal Gate Set for $^9\text{Be}^+$ Ion Qubits," [Phys. Rev. Lett. 117, 060505 (2016)](https://doi.org/10.1103/PhysRevLett.117.060505) | [arXiv:1604.00032](https://arxiv.org/abs/1604.00032)

### Review
- C. D. Bruzewicz, J. Chiaverini, R. McConnell, and J. M. Sage, "Trapped-ion quantum computing: Progress and challenges," [Appl. Phys. Rev. 6, 021314 (2019)](https://doi.org/10.1063/1.5088164) | [arXiv:1904.04178](https://arxiv.org/abs/1904.04178)

## Linked Papers

- [[monroe-1995-first-cnot-gate]]
- [[gaebler-2016-be9-high-fidelity-gates]]
- [[bruzewicz-2019-trapped-ion-review]]

## Related Entries

- [[trapped-ion-qubit]] — parent platform
- [[cirac-zoller-gate]] — gate protocol demonstrated in the first Be+ CNOT
- [[molmer-sorenson-gate]] — entangling gate used in high-fidelity demonstrations
