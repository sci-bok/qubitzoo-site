---
title: Cirac-Zoller Gate
entry_type: gate
technology_family: Trapped Ion
status: demonstrated
figure_reviewed: false
first_proposed_year: 1995
first_demonstrated_year: 1995
keywords:
  - trapped ion
  - two-qubit gate
  - phonon bus
  - CNOT
  - controlled-phase
  - quantum computing
influence_score: 0.90
last_updated: '2026-04-01'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: scibok-deep-audit-2026-04-01
---

## Figure

![[cirac-zoller-gate-figure.png]]

## Description

The **Cirac-Zoller gate** is the first proposal for a universal two-qubit quantum gate and a scalable quantum computing architecture, published by J. I. Cirac and P. Zoller in 1995. The key idea is to mediate the interaction between two long-lived ion qubits through the quantized collective motion (phonon mode) of a chain of trapped ions in a linear Paul trap.

Each qubit is encoded in two long-lived internal electronic states of a trapped ion — typically hyperfine ground states (e.g., $^{171}$Yb$^+$) or optical clock transitions (e.g., $^{40}$Ca$^+$). The shared motional mode of the ion chain serves as a **quantum bus**, enabling highly controllable entangling interactions between any pair of ions via individually addressed laser beams.

The gate operates through a three-step sequence:

1. **Red sideband $\pi$-pulse on ion $j$:** Maps the qubit state information of ion $j$ onto the shared phonon mode. The transition $|e\rangle|0\rangle \to |g\rangle|1\rangle$ transfers one quantum of excitation from the internal state to the motional degree of freedom.

2. **Conditional $2\pi$-pulse on ion $k$:** A resonant $2\pi$ Rabi cycle is driven on ion $k$ using an auxiliary internal level, connecting $|e,1\rangle$ through the auxiliary state and back. This acquires a geometric phase of $\pi$ (sign flip) conditional on both the phonon state and ion $k$'s internal state. If the phonon number is zero, the transition is off-resonant and no phase is acquired.

3. **Reverse red sideband $\pi$-pulse on ion $j$:** Maps the phonon state back to ion $j$'s internal state, returning the motional mode to its ground state $|0\rangle$.

The gate requires ground-state cooling of the motional mode ($\bar{n} \approx 0$) and operation in the Lamb-Dicke regime ($\eta = k\sqrt{\hbar/2M\nu} \ll 1$), where $\eta$ is the Lamb-Dicke parameter, $M$ is the ion mass, and $\nu$ is the trap frequency.

## Hamiltonian

The ion-laser interaction in the Lamb-Dicke regime is described by:

$$H_{\text{int}} = \frac{\hbar\Omega}{2}\left(\sigma^+ e^{i\eta(a + a^\dagger)} + \text{h.c.}\right)$$

where $\Omega$ is the Rabi frequency, $\sigma^+$ is the internal state raising operator, and $a$, $a^\dagger$ are the motional mode operators. In the Lamb-Dicke limit ($\eta \ll 1$), this decomposes into:

- **Carrier:** $H_{\text{car}} = \frac{\hbar\Omega}{2}(\sigma^+ + \sigma^-)$ — flips the internal state without changing motion
- **Red sideband:** $H_{\text{rsb}} = \frac{\hbar\eta\Omega}{2}(\sigma^+ a + \sigma^- a^\dagger)$ — exchanges quanta between internal and motional states
- **Blue sideband:** $H_{\text{bsb}} = \frac{\hbar\eta\Omega}{2}(\sigma^+ a^\dagger + \sigma^- a)$ — creates/destroys correlated excitations

The Cirac-Zoller gate uses red sideband pulses for state mapping and a $2\pi$ pulse on an auxiliary transition for the conditional phase.

## Motivation

- First concrete proposal for a scalable, universal quantum computer — established trapped ions as a leading platform for quantum information processing.
- The phonon bus concept enables all-to-all connectivity within an ion chain, a major advantage over nearest-neighbor architectures.
- Demonstrated that long-lived atomic qubits (coherence times of seconds to minutes) combined with laser-mediated interactions could achieve the DiVincenzo criteria for quantum computation.
- Inspired subsequent entangling gate schemes (Mølmer-Sørensen, geometric phase gates) that are more robust to motional heating and do not require ground-state cooling.

## Experimental Status

**First two-qubit gate — Monroe et al. (1995):**
- Demonstrated the first quantum logic gate (CNOT) with a single trapped $^9$Be$^+$ ion, using two internal states as the qubit and a motional state as the target.
- Achieved the essential Cirac-Zoller mechanism within months of the theoretical proposal.

**Cirac-Zoller CNOT realization — Schmidt-Kaler et al. (2003):**
- First complete realization of the Cirac-Zoller CNOT gate between two individually addressed $^{40}$Ca$^+$ ions in a linear Paul trap.
- Gate fidelity limited by motional heating and laser intensity fluctuations.

**Modern trapped-ion gates (Mølmer-Sørensen variants):**
- Two-qubit gate fidelities now exceed 99.9% using geometric phase gates that evolved from the Cirac-Zoller concept (Ballance et al. 2016).
- Single-qubit gate fidelities reach 99.999985% — error rate $1.5 \times 10^{-7}$ — the lowest for any physical qubit (Smith et al. 2024, Oxford, $^{43}$Ca$^+$).
- Prior single-qubit record: 99.9999% (Harty et al. 2014, also $^{43}$Ca$^+$).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1000 s | Hyperfine qubits (e.g., $^{171}$Yb$^+$) | [Wang et al. 2021](https://doi.org/10.1038/s41467-020-20330-w) |
| Qubit coherence $T_2$ | 1–600 s | With dynamical decoupling | [Wang et al. 2021](https://doi.org/10.1038/s41567-021-01237-9) |
| Gate fidelity (1Q) | 99.999985% | Record: $^{43}$Ca$^+$ microwave gates | [Smith et al. 2024](https://arxiv.org/abs/2412.04421) |
| Gate fidelity (1Q, prior) | 99.9999% | $^{43}$Ca$^+$ hyperfine | [Harty et al. 2014](https://doi.org/10.1103/PhysRevLett.113.220501) |
| Gate fidelity (2Q) | 99.9% | $^{43}$Ca$^+$ Mølmer-Sørensen | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| Gate time (1Q) | 1–10 μs | Microwave or Raman | — |
| Gate time (2Q) | 10–200 μs | Laser-mediated | — |
| Readout fidelity | 99.9%+ | Fluorescence detection | [Myerson et al. 2008](https://doi.org/10.1103/PhysRevLett.100.200502) |
| Qubit footprint | ~5 μm ion spacing | In linear Paul trap | — |
| Operating temperature | Room temp (trap) / 4K (cryo) | Vacuum chamber | — |
| Connectivity | All-to-all (small chains) | Via shared phonon modes | — |

## References

### Original proposal
- J. I. Cirac and P. Zoller, "Quantum Computations with Cold Trapped Ions," [Phys. Rev. Lett. **74**, 4091 (1995)](https://doi.org/10.1103/PhysRevLett.74.4091)

### Experimental demonstrations
- C. Monroe, D. M. Meekhof, B. E. King, W. M. Itano, and D. J. Wineland, "Demonstration of a Fundamental Quantum Logic Gate," [Phys. Rev. Lett. **75**, 4714 (1995)](https://doi.org/10.1103/PhysRevLett.75.4714)
- F. Schmidt-Kaler, H. Häffner, M. Riebe, S. Gulde, G. P. T. Lancaster, T. Deuschle, C. Becher, C. F. Roos, J. Eschner, and R. Blatt, "Realization of the Cirac–Zoller controlled-NOT quantum gate," [Nature **422**, 408 (2003)](https://doi.org/10.1038/nature01494)

### Modern gate benchmarks
- J. P. Gaebler, T. R. Tan, Y. Lin, Y. Wan, R. Bowler, A. C. Keith, S. Glancy, K. Coakley, E. Knill, D. Leibfried, and D. J. Wineland, "High-Fidelity Universal Gate Set for $^9$Be$^+$ Ion Qubits," [Phys. Rev. Lett. **117**, 060505 (2016)](https://doi.org/10.1103/PhysRevLett.117.060505)

## Linked Papers

- [[cirac-zoller-1995-trapped-ion-gate]]
- [[monroe-1995-demonstration-fundamental-logic]]
- [[schmidt-kaler-2003-cirac-zoller-cnot]]
- [[harty-2014-high-fidelity-preparation]]
- [[ballance-2016-ion-gate-fidelity]]
- [[smith-2024-single-qubit-gate-errors]]

## Related Entries

- [[molmer-sorenson-gate]] — geometric phase gate that evolved from the Cirac-Zoller concept
- [[trapped-ion-qubit]] — the qubit platform
- [[loss-divincenzo-qubit]] — semiconductor analogue of bus-mediated two-qubit gates
- [[shuttling-ion-trap-qubit]] — scaling architecture for trapped-ion quantum computing
- [[ytterbium-hyperfine-qubit]] — modern trapped-ion qubit commonly used with Cirac-Zoller-derived gates
