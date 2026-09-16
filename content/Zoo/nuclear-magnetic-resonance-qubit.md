---
title: Nuclear Magnetic Resonance (NMR) Qubit
entry_type: qubit
technology_family: Molecular
moc_facets: [Cross-Platform]
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/nuclear-magnetic-resonance-qubit-figure.provenance.json"
figure_reviewed_by: "Codex daily deep audit 2026-09-16"
figure_reviewed_at: "2026-09-16T14:11:44.444867+00:00"
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
last_updated: '2026-09-16'
generated_by: scibok-curation
extracted_by: scibok
verified_by: codex-daily-deep-audit-2026-09-16
---

## Figure

![[nuclear-magnetic-resonance-qubit-figure.png]]

## Description

This entry focuses on **liquid-state ensemble NMR quantum computing**, in which quantum information is encoded in spin-1/2 nuclei within many identical molecules. In a static field $B_0\hat z$, nucleus $i$ has a Zeeman splitting $\hbar|\gamma_i|B_0$ before shielding corrections. For the positive-gyromagnetic-ratio nuclei commonly used here, such as $^1\mathrm{H}$ and $^{13}\mathrm{C}$, the $m=+1/2$ state (often assigned $|0\rangle$) is lower in energy. RF pulses rotate the spins. Heteronuclear selectivity, such as between $^1\mathrm{H}$ and $^{13}\mathrm{C}$, comes mainly from their different gyromagnetic ratios; chemical shifts provide the smaller site-dependent frequency differences used to address like nuclei within a molecule.

NMR quantum computing holds a unique place in the history of the field: it was the platform on which the **first quantum algorithms were experimentally demonstrated**. In 1998, Chuang, Gershenfeld, and Kubinec implemented Grover's search algorithm on a 2-qubit NMR system using chloroform. In 2001, Vandersypen et al. at IBM implemented Shor's factoring algorithm on a 7-qubit NMR system, successfully factoring 15 = 3 × 5. These landmark demonstrations proved that quantum algorithms could work in practice and stimulated the enormous growth of the quantum computing field.

However, liquid-state NMR has a fundamental scalability barrier: it operates on a macroscopic **ensemble** of molecules near thermal equilibrium, not on individually initialized and measured registers. The observable state is the small deviation $\Delta\rho$ from a nearly maximally mixed density operator. Pseudo-pure-state preparation makes $\Delta\rho$ transform like a pure state, but it does not purify the physical ensemble, and common preparation methods incur an exponentially shrinking signal as the register grows. Bulk transverse-magnetization readout is also neither single-shot nor molecule-resolved. NMR therefore remains valuable as a precise small-system quantum-control and quantum-simulation testbed, but not as a competitive route to scalable digital quantum computing.

## Hamiltonian

Using dimensionless spin operators $I_\alpha=\sigma_\alpha/2$, a representative liquid-state spin Hamiltonian for $n$ nuclei in a static field $B_0\hat z$ is

$$H_0 = -\sum_{i=1}^n \hbar\omega_i I_z^{(i)} + 2\pi\hbar\sum_{i<j} J_{ij} \mathbf{I}^{(i)} \cdot \mathbf{I}^{(j)}$$

where $\omega_i = \gamma_i B_0(1 - \sigma_i)$ includes the chemical shielding $\sigma_i$, and $J_{ij}$ is the electron-mediated scalar coupling in hertz. In the weak-coupling, high-field limit ($2\pi|J_{ij}| \ll |\omega_i-\omega_j|$), the nonsecular flip-flop terms average away:

$$H_0 \approx -\sum_i \hbar\omega_i I_z^{(i)} + 2\pi\hbar\sum_{i<j} J_{ij} I_z^{(i)} I_z^{(j)}$$

In a frame rotating at the addressed resonance and under the rotating-wave approximation, a phase-controlled RF pulse gives

$$H_{\mathrm{RF}}^{(\mathrm{rot})}(t)=\hbar\Omega_i(t)\left[\cos\phi\,I_x^{(i)}+\sin\phi\,I_y^{(i)}\right].$$

Two-qubit controlled-phase operations use timed evolution under $2\pi\hbar J_{ij}I_z^{(i)}I_z^{(j)}$ together with single-qubit rotations and refocusing pulses. The scalar coupling alone is not a complete CNOT.

## Motivation

NMR was the first experimentally accessible platform for quantum computing because it leveraged decades of mature spectroscopy technology. Room-temperature operation, coherence long compared with the relevant pulse sequences, precise shaped-RF control, and well-characterized spin-spin couplings provided the ingredients for small quantum algorithms. The NMR community brought both experimental expertise and theoretical sophistication (average Hamiltonian theory, decoupling sequences, and optimal control) that profoundly influenced quantum control techniques used by other platforms.

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

**Control-scale benchmark — Negrevergne et al. (2006):**
- Extended universal-control benchmarking to a 12-spin liquid-state NMR processor.
- Prepared a 12-coherence (pseudo-pure cat) state and decoded it to an 11-qubit-plus-one-qutrit labeled pseudo-pure state.
- This remains a control benchmark, not evidence that pseudo-pure ensemble NMR scales efficiently.

**Continuing testbed role — 2024–2026:**
- Li et al. (2024) used NMR to experimentally simulate qubit superchannels.
- Wong, Zeng, and Li (2026) implemented interpolated quantum channels and observed second-order exceptional points with process fidelities above 93%.
- Singh et al. (2026) realized reference-state-dependent Petz recovery maps on an NMR processor.
- These experiments show that NMR remains useful for controlled protocol demonstrations; they do not remove the initialization, sampling, or readout scaling barriers.

**Scalability limit:**
- NMR quantum computing reached its practical limit at 7–12 qubits.
- Common pseudo-pure-state methods lose signal exponentially with register size, while ensemble readout precludes scalable mid-circuit, molecule-resolved measurement.
- Recent demonstrations remain small protocol simulations rather than scalable-computing milestones.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Landmark algorithm register | 7 nuclear spins | Factored 15 with a compiled Shor circuit in liquid-state NMR | [Vandersypen et al. (2001)](https://doi.org/10.1038/414883a) |
| Largest liquid-state control benchmark | 12 spins | 12-coherence/pseudo-pure-cat preparation; decoded to 11 qubits plus one qutrit | [Negrevergne et al. (2006)](https://doi.org/10.1103/PhysRevLett.96.170501) |
| Recent process benchmark | $>93\%$ | Fidelity across the interpolated single-qubit-channel range used to observe exceptional points | [Wong et al. (2026)](https://doi.org/10.1038/s41534-026-01205-2) |
| Operating regime | Room-temperature liquid state | Macroscopic ensemble near thermal equilibrium | [Vandersypen et al. (2001)](https://doi.org/10.1038/414883a) |
| Readout | Ensemble transverse magnetization | Fourier-transformed free-induction signal; not single-shot or molecule-resolved | [Li et al. (2024)](https://doi.org/10.1088/1367-2630/ad1c91) |

## Scaling Considerations

- **Fundamental barrier**: common pseudo-pure-state constructions have exponentially decreasing effective polarization (often scaling on the order of $n\epsilon/2^n$ for small thermal polarization $\epsilon$), so the sampling cost grows exponentially even though each molecule follows the intended unitary dynamics.
- **Entanglement qualification**: sufficiently mixed pseudo-pure states are separable under known bounds, so early room-temperature demonstrations did not by themselves establish the entanglement needed for scalable quantum advantage. That does not make the coherent spin dynamics classical; it limits the computational claim that can be made from the ensemble state.
- **No single-shot readout**: NMR measures the bulk magnetization of a macroscopic molecular ensemble, precluding molecule-resolved mid-circuit measurement for error correction or adaptive protocols.
- **Legacy impact**: despite these limitations, NMR quantum computing's influence on quantum control theory is enormous. Techniques like dynamical decoupling, composite pulses, and gradient ascent pulse engineering (GRAPE) were developed for NMR and are now standard tools across all qubit platforms.
- **Pedagogical value**: NMR remains an excellent teaching platform for quantum computing concepts, as experiments can be performed at room temperature with standard spectrometer equipment.

## References

### Grover's algorithm
- I. L. Chuang, N. Gershenfeld, and M. Kubinec, "Experimental Implementation of Fast Quantum Searching," [Phys. Rev. Lett. 80, 3408 (1998)](https://doi.org/10.1103/PhysRevLett.80.3408). No matching arXiv posting was found; the previously linked quant-ph/9801037 is a different NMR paper.

### Shor's algorithm
- L. M. K. Vandersypen, M. Steffen, G. Breyta, C. S. Yannoni, M. H. Sherwood, and I. L. Chuang, "Experimental realization of Shor's quantum factoring algorithm using nuclear magnetic resonance," [Nature 414, 883 (2001)](https://doi.org/10.1038/414883a) | [arXiv:quant-ph/0112176](https://arxiv.org/abs/quant-ph/0112176)

### Control scale and modern testbed demonstrations
- C. Negrevergne et al., "Benchmarking Quantum Control Methods on a 12-Qubit System," [Phys. Rev. Lett. 96, 170501 (2006)](https://doi.org/10.1103/PhysRevLett.96.170501) | [arXiv:quant-ph/0603248](https://arxiv.org/abs/quant-ph/0603248)
- H. Li et al., "Experimental simulation of quantum superchannels," [New J. Phys. 26, 013037 (2024)](https://doi.org/10.1088/1367-2630/ad1c91) | [arXiv:2308.14262](https://arxiv.org/abs/2308.14262)
- W. C. Wong, B. Zeng, and J. Li, "Non-Markovian exceptional points by interpolating quantum channels," [npj Quantum Information 12 (2026)](https://doi.org/10.1038/s41534-026-01205-2) | [arXiv:2507.16049](https://arxiv.org/abs/2507.16049)
- G. Singh, R. S. Sahani, V. Jagadish, L. Lautenbacher, N. K. Bernardes, and K. Dorai, "Realizing the Petz recovery map on an NMR quantum processor," [Phys. Rev. A 113, 052415 (2026)](https://doi.org/10.1103/xd6k-swv7) | [arXiv:2508.08998](https://arxiv.org/abs/2508.08998)

## Linked Papers

- [[chuang-1998-grover-nmr]]
- [[vandersypen-2001-shor-nmr]]
- [[negrevergne-2006-nmr-12-qubit-control]]
- [[li-2024-nmr-superchannels]]
- [[wong-2026-nmr-exceptional-points]]
- [[singh-2026-nmr-petz-recovery]]

## Evergreen context

- [[divincenzo-criteria]] — makes the ensemble-initialization and non-single-shot-readout scaling failures explicit.
- [[coherence-time-hierarchy]] — separates long ensemble spin coherence from the exponentially shrinking pseudo-pure-state signal.
- [[quantum-hardware]] — places NMR as a historically decisive control platform rather than a current scalable-computing contender.

## Related Entries

- [[quantum-gate]] — gates first demonstrated on NMR
- [[spin-qubit]] — semiconductor spin qubits inherit control techniques from NMR
- [[molecular-qubit]] — molecular-spin systems that inherit magnetic-resonance control ideas
- [[classical-control]] — pulse synthesis, calibration, and readout orchestration
