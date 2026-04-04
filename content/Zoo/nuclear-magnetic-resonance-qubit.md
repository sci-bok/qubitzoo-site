---
title: Nuclear Magnetic Resonance (NMR) Qubit
entry_type: qubit
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: true
first_proposed_year: 1997
first_demonstrated_year: 1998
keywords:
- NMR
- nuclear magnetic resonance
- nuclear spin
- liquid state
- ensemble measurement
- room temperature
- Shor algorithm
- Grover algorithm
- historical
- not scalable
- IBM
- Chuang
- Vandersypen
influence_score: 0.65
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-04
---

## Figure

![[nuclear-magnetic-resonance-qubit-figure.png]]

## Description

The nuclear magnetic resonance (NMR) qubit encodes quantum information in the nuclear spin states of atoms within molecules in liquid or solid-state samples. In an external magnetic field $B_0$, a spin-1/2 nucleus splits into two Zeeman levels $|\uparrow\rangle$ and $|\downarrow\rangle$ separated by $\hbar\gamma B_0$, where $\gamma$ is the gyromagnetic ratio. Qubits are manipulated by radiofrequency (RF) pulses that selectively rotate individual nuclear spins, exploiting the distinct chemical shifts of different nuclei within a molecule (e.g., the $^1\text{H}$ and $^{13}\text{C}$ nuclei in chloroform have different resonance frequencies).

NMR quantum computing holds a unique place in the history of the field: it was the platform on which the **first quantum algorithms were experimentally demonstrated**. In 1998, Chuang, Gershenfeld, and Kubinec implemented Grover's search algorithm on a 2-qubit NMR system using chloroform. In 2001, Vandersypen et al. at IBM implemented Shor's factoring algorithm on a 7-qubit NMR system, successfully factoring 15 = 3 × 5. These landmark demonstrations proved that quantum algorithms could work in practice and stimulated the enormous growth of the quantum computing field.

However, NMR quantum computing has a fundamental scalability barrier: it operates on an **ensemble** of ~$10^{18}$ molecules in thermal equilibrium, not on individual quantum systems. The "quantum state" is encoded in the tiny deviation of the ensemble from the maximally mixed thermal state. The signal from this deviation (the "pseudo-pure state") decreases exponentially with the number of qubits as $2^{-n}$, making it impractical beyond ~10–12 qubits. Additionally, NMR readout measures the bulk magnetization of the ensemble — there is no single-shot, single-qubit readout. For these reasons, NMR is no longer pursued as a path to scalable quantum computing, but its historical contributions and pedagogical value justify its inclusion in the Qubit Zoo.

## Hamiltonian

The NMR spin Hamiltonian for $n$ nuclear spins in a static magnetic field $B_0$ along $\hat{z}$:

$$H_0 = -\sum_{i=1}^n \hbar\omega_i I_z^{(i)} + 2\pi\hbar\sum_{i<j} J_{ij} \mathbf{I}^{(i)} \cdot \mathbf{I}^{(j)}$$

where $\omega_i = \gamma_i B_0(1 - \sigma_i)$ is the Larmor frequency of spin $i$ (with chemical shift $\sigma_i$), $I_z^{(i)}$ is the $z$-component of the spin-1/2 angular momentum operator, and $J_{ij}$ is the scalar (J-coupling) between spins $i$ and $j$ mediated by bonding electrons. In the weak-coupling limit ($|J_{ij}| \ll |\omega_i - \omega_j|$):

$$H_0 \approx -\sum_i \hbar\omega_i I_z^{(i)} + 2\pi\hbar\sum_{i<j} J_{ij} I_z^{(i)} I_z^{(j)}$$

Single-qubit gates are implemented by resonant RF pulses: $H_{\text{RF}} = \hbar\Omega(t)[\cos(\omega_{\text{RF}}t + \phi)\,I_x^{(i)} + \sin(\omega_{\text{RF}}t + \phi)\,I_y^{(i)}]$, where $\Omega$ is the Rabi frequency and $\phi$ controls the rotation axis. Two-qubit gates exploit the natural $J$-coupling between spins, using refocusing pulse sequences to selectively enable or disable specific couplings.

## Motivation

NMR was the first experimentally accessible platform for quantum computing because it leveraged 50 years of mature NMR spectroscopy technology. Room-temperature operation, long coherence times ($T_2 \sim 1$–10 s in liquid state), exquisite control over individual spin rotations via shaped RF pulses, and well-characterized spin-spin couplings provided all the ingredients for small quantum algorithms. The NMR community brought both experimental expertise and theoretical sophistication (average Hamiltonian theory, decoupling sequences, optimal control) that profoundly influenced quantum control techniques used by all other platforms today.

## Experimental Status

**Grover's algorithm — Chuang, Gershenfeld, and Kubinec (1998):**
- First complete experimental demonstration of a quantum algorithm.
- 2-qubit NMR system using $^1\text{H}$ and $^{13}\text{C}$ spins in chloroform ($\text{CHCl}_3$).
- Searched a 4-element database in a single query (classical: 2.25 average).
- Published in PRL 80, 3408 (1998).

**Shor's factoring algorithm — Vandersypen et al. (2001):**
- First experimental implementation of Shor's algorithm.
- 7-qubit NMR system using custom-synthesized perfluorobutadienyl iron complex molecule.
- Successfully factored 15 = 3 × 5.
- Dominant errors from decoherence, not control.
- Published in Nature 414, 883 (2001).

**Scalability limit:**
- NMR quantum computing reached its practical limit at 7–12 qubits.
- The exponential signal decay ($\sim 2^{-n}$) and ensemble measurement preclude scaling to useful sizes.
- No new NMR quantum computing demonstrations of note since ~2012.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | 1–100 s | Spin-lattice relaxation; molecule-dependent | — |
| $T_2$ | 1–10 s | Spin-spin relaxation in liquid state | — |
| Qubit number (max) | 12 | Practical limit due to signal decay | — |
| Signal/qubit ratio | $\sim 2^{-n}$ | Exponential decrease with qubit count | — |
| Gate time (1Q) | ~10 μs | RF pulse duration | — |
| Gate time (2Q) | ~ms | $J$-coupling evolution period | — |
| Operating temperature | Room temp | ~300 K; no cryogenics | — |
| Readout | Ensemble | No single-shot, single-qubit readout | — |
| Larmor frequency | 100–900 MHz | Depends on nucleus and field strength | — |

## Scaling Considerations

- **Fundamental barrier**: the pseudo-pure state signal decreases as $2^{-n}$, requiring exponentially more averaging to detect. Beyond ~12 qubits, the signal is indistinguishable from noise.
- **No entanglement debate**: there is ongoing debate about whether liquid-state NMR quantum computing at room temperature actually produces entanglement, or whether the pseudo-pure state approach is a classical simulation of quantum dynamics. Braunstein et al. (1999) showed that for sufficiently mixed states, the dynamics can be efficiently simulated classically.
- **No single-shot readout**: NMR measures the bulk magnetization of ~$10^{18}$ molecules, precluding measurement-based quantum error correction or adaptive protocols.
- **Legacy impact**: despite these limitations, NMR quantum computing's influence on quantum control theory is enormous. Techniques like dynamical decoupling, composite pulses, and gradient ascent pulse engineering (GRAPE) were developed for NMR and are now standard tools across all qubit platforms.
- **Pedagogical value**: NMR remains an excellent teaching platform for quantum computing concepts, as experiments can be performed at room temperature with standard spectrometer equipment.

## References

### Grover's algorithm
- I. L. Chuang, N. Gershenfeld, and M. Kubinec, "Experimental Implementation of Fast Quantum Searching," [Phys. Rev. Lett. 80, 3408 (1998)](https://doi.org/10.1103/PhysRevLett.80.3408) | [arXiv:quant-ph/9801037](https://arxiv.org/abs/quant-ph/9801037)

### Shor's algorithm
- L. M. K. Vandersypen, M. Steffen, G. Breyta, C. S. Yannoni, M. H. Sherwood, and I. L. Chuang, "Experimental realization of Shor's quantum factoring algorithm using nuclear magnetic resonance," [Nature 414, 883 (2001)](https://doi.org/10.1038/414883a) | [arXiv:quant-ph/0112176](https://arxiv.org/abs/quant-ph/0112176)

## Linked Papers

- [[chuang-1998-grover-nmr]]
- [[vandersypen-2001-shor-nmr]]

## Related Entries

- [[quantum-gate]] — gates first demonstrated on NMR
- [[spin-qubit]] — semiconductor spin qubits inherit control techniques from NMR
