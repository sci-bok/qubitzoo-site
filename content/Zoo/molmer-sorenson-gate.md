---
title: Mølmer-Sørensen Gate
entry_type: gate
technology_family: Ion Trap
status: demonstrated
figure_reviewed: true
first_proposed_year: 1999
first_demonstrated_year: 2000
keywords:
- molmer sorensen
- trapped ion
- entangling gate
- bichromatic drive
- XX gate
influence_score: 0.79
last_updated: '2026-04-02'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[molmer-sorenson-gate-figure.png]]

## Description

The **Mølmer-Sørensen (MS) gate** is the standard high-fidelity entangling gate in trapped-ion quantum computing. It uses a bichromatic laser field — two tones placed symmetrically around the qubit carrier frequency, near the red and blue motional sidebands — to generate an effective spin-spin (XX) interaction between two or more ions sharing a common motional mode.

The key physics is that each drive tone couples the ion's internal state to the shared motional bus: the blue-detuned tone drives $|0,n\rangle \to |1,n+1\rangle$ transitions while the red-detuned tone drives $|0,n\rangle \to |1,n-1\rangle$. When both tones act simultaneously on all addressed ions, the motional excitation is virtual — the motional state returns to its initial value after the gate duration — while a geometric phase accumulates that depends on the product of the ions' spin states. This produces the desired entangling interaction.

A crucial practical advantage is that the MS gate does **not require ground-state cooling** of the motional mode. Because the interaction is mediated through virtual phonon excitation, the gate works for thermal motional states as long as the Lamb-Dicke parameter $\eta\sqrt{\bar{n}+1} \ll 1$ is satisfied.

## Hamiltonian

In the interaction picture, the MS gate Hamiltonian for $N$ ions is:

$$H_{\text{MS}} = \hbar\Omega\sum_{i=1}^N \eta_i \sigma_\phi^{(i)} \left(a\, e^{-i\delta t} + a^\dagger e^{i\delta t}\right)$$

where $\Omega$ is the Rabi frequency, $\eta_i$ is the Lamb-Dicke parameter for ion $i$, $\delta$ is the detuning from the motional sideband, and $a$, $a^\dagger$ are the motional mode operators. After adiabatic elimination of the motional degrees of freedom, this reduces to an effective spin-spin interaction:

$$H_{\text{eff}} = \hbar\sum_{i<j} J_{ij}\,\sigma_\phi^{(i)}\sigma_\phi^{(j)}, \quad J_{ij} \propto \frac{\eta_i\eta_j\Omega^2}{\delta}$$

For a two-ion gate, evolution for time $\tau = \pi/(4J_{12})$ produces the maximally entangling unitary:

$$U_{\text{MS}} = \exp\!\left(-i\frac{\pi}{4}\sigma_\phi^{(1)}\sigma_\phi^{(2)}\right)$$

## Motivation

- The MS gate became the dominant trapped-ion entangling gate because it is experimentally **robust to motional-state preparation errors** — unlike early Cirac–Zoller gates, it does not require ground-state cooling.
- Maps naturally onto global-beam plus local-addressing hardware used in modern ion-trap systems.
- Scalable to multi-ion entangling operations via amplitude/frequency pulse shaping.
- Achieves the highest two-qubit gate fidelities reported for any qubit platform (99.9%+).

## Experimental Status

**Original proposal — Mølmer and Sørensen (1999):**
- Proposed bichromatic driving scheme for entangling hot trapped ions without ground-state cooling.
- Two papers: Mølmer and Sørensen, PRL 82, 1835 (1999) and Sørensen and Mølmer, PRL 82, 1971 (1999).

**First multi-particle entanglement — Sackett et al. (2000):**
- Demonstrated entanglement of up to 4 ions using the MS interaction at NIST.

**High-fidelity demonstration — Benhelm et al. (2008):**
- Achieved 99.3% Bell-state fidelity with $^{40}$Ca$^+$ ions using an MS gate.
- First demonstration approaching fault-tolerant thresholds.

**State-of-the-art — Ballance et al. (2016):**
- Achieved 99.9% two-qubit gate fidelity with $^{43}$Ca$^+$ hyperfine qubits.
- Used careful pulse shaping and error suppression techniques.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 2Q gate fidelity | 99.9%+ | State-of-the-art trapped-ion MS gate | [Ballance et al. 2016](https://doi.org/10.1103/PhysRevLett.117.060504) |
| Gate time | 10–200 μs | Detuning/fidelity tradeoff | — |
| Cooling requirement | No ground-state cooling required | Major practical advantage over Cirac–Zoller | — |
| Gate type | XX (or YY) entangling | Geometric phase gate | — |
| Scalability | Multi-ion entangling | Via pulse shaping; demonstrated for 4+ ions | [Sackett et al. 2000](https://doi.org/10.1038/35005011) |

## References

### Original proposals
- K. Mølmer and A. Sørensen, "Multiparticle Entanglement of Hot Trapped Ions," [Phys. Rev. Lett. 82, 1835 (1999)](https://doi.org/10.1103/PhysRevLett.82.1835) · [arXiv:quant-ph/9810060](https://arxiv.org/abs/quant-ph/9810060)
- A. Sørensen and K. Mølmer, "Quantum Computation with Ions in Thermal Motion," [Phys. Rev. Lett. 82, 1971 (1999)](https://doi.org/10.1103/PhysRevLett.82.1971) · [arXiv:quant-ph/9810039](https://arxiv.org/abs/quant-ph/9810039)

### Experimental demonstrations
- C. A. Sackett et al., "Experimental entanglement of four particles," [Nature 404, 256 (2000)](https://doi.org/10.1038/35005011)
- J. Benhelm et al., "Towards fault-tolerant quantum computing with trapped ions," [Nature Phys. 4, 463 (2008)](https://doi.org/10.1038/nphys961)
- C. J. Ballance et al., "High-Fidelity Quantum Logic Gates Using Trapped-Ion Hyperfine Qubits," [Phys. Rev. Lett. 117, 060504 (2016)](https://doi.org/10.1103/PhysRevLett.117.060504)

## Linked Papers

- [[sorensen-1999-ms-gate]]

## Related Entries

- [[trapped-ion-qubit]] — qubit platform where the MS gate is standard
- [[cirac-zoller-gate]] — earlier trapped-ion entangling gate requiring ground-state cooling
