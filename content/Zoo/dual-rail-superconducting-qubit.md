---
title: Dual-Rail Superconducting Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2016
first_demonstrated_year: 2020
keywords:
- dual-rail
- encoded qubit
- composite qubit
- microwave-free
- erasure
- cavity
- baseband
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[dual-rail-superconducting-qubit-figure.png]]

## Description

The dual-rail superconducting qubit encodes quantum information in the single-excitation subspace of two coupled superconducting modes: $|0_L\rangle = |01\rangle$ and $|1_L\rangle = |10\rangle$. This encoding — borrowed from semiconductor spin qubit and photonic qubit design — converts dominant $T_1$ decay into detectable erasure errors and, in the transmon-pair implementation, enables microwave-free control via baseband pulses.

The concept originates in quantum optics (a single photon across two spatial modes is the canonical photonic qubit; see [[dual-rail-photonic-qubit]]), but the specific application to superconducting circuits was proposed by Shim & Tahan (2016), who recognized that the same encoding applied to coupled transmons yields a Hamiltonian formally identical to the semiconductor singlet-triplet qubit — with the logical splitting set by mode detuning, controllable by baseband flux/voltage pulses.

The encoding has been realized in two distinct physical platforms:

**Transmon-pair (composite qubit, CQB)** — Two capacitively coupled transmons with a small avoided crossing, controlled entirely by non-adiabatic baseband pulses and coherent Landau-Zener interference. No microwave drives required. First demonstrated by Campbell et al. (2020) with Clifford fidelities >99.7%.

**Cavity dual-rail** — Two microwave cavities (typically 3D stub cavities with photon lifetimes >1 ms) coupled by a transmon ancilla. The cavity version leverages long photon lifetimes and converts dominant photon loss into detectable erasure events. Note: the cavity implementation does use microwave drives for state preparation, beamsplitter operations, and readout — the strict "no microwave qubit drive" advantage applies primarily to the transmon-pair CQB. Demonstrated by Teoh et al. (2023, Yale/Schoelkopf) and Levine et al. (2024, AWS).

Key advantages of the dual-rail encoding:

- **Erasure detection:** The encoded subspace $\{|01\rangle, |10\rangle\}$ has exactly one excitation. Any $T_1$ decay produces $|00\rangle$, which is outside the codespace and detectable — converting the dominant error channel into an erasure. The double-excitation state $|11\rangle$ is also outside the codespace and detectable, but is reached by excitation errors (heating, gate errors), not by $T_1$ relaxation.
- **Microwave-free control (CQB):** In the transmon-pair implementation, all single-qubit gates are performed by baseband (DC) flux pulses that detune the two transmons, eliminating the need for microwave generators, mixers, and filters per qubit.
- **Super-semi compatibility:** The encoding is especially natural for variable-junction qubits (gatemons, super-semi junctions) where junction tunability replaces flux tunability.
- **QEC efficiency:** Erasure conversion reduces surface code overhead by 3–10× compared to standard depolarizing noise.


## Hamiltonian

### Transmon-pair encoding

$$H = \frac{\omega_1}{2}\sigma_z^{(1)} + \frac{\omega_2}{2}\sigma_z^{(2)} + g(\sigma_+^{(1)}\sigma_-^{(2)} + \text{h.c.})$$

In the $\{|01\rangle, |10\rangle\}$ single-excitation subspace, this reduces to:

$$H_{\text{encoded}} = \frac{\Delta}{2}\tau_z + g\,\tau_x$$

where $\Delta = \omega_1 - \omega_2$ is the detuning (baseband-controllable via flux) and $g$ is the transmon-transmon coupling. Logical $Z$ rotations come from $\Delta$ (tunable), logical $X$ rotations from $g$ (always-on exchange). This is formally identical to the singlet-triplet spin qubit Hamiltonian $H = (J/2)\sigma_z + (g\mu_B\Delta B_z/2)\sigma_x$ — the semiconductor-superconductor bridge that motivated the proposal.

### Cavity dual-rail encoding

For two cavities coupled by a transmon ancilla, the beamsplitter interaction in the single-photon subspace gives the same effective Hamiltonian. The transmon mediates a parametrically activated coupling $g_\text{BS}(t)$ between the cavity modes, enabling controlled rotations in the logical subspace.


## Motivation

- **Erasure advantage:** Converting $T_1$ errors (the dominant error channel in superconducting qubits) into detectable erasures dramatically improves QEC performance. Erasure errors are ~3× cheaper to correct than Pauli errors in surface codes.
- **Microwave-free scaling (CQB):** Eliminating microwave control lines removes a major bottleneck for scaling — no microwave generators, mixers, filters, or IQ calibration per qubit.
- **Temperature tolerance:** Baseband control may enable operation at higher temperatures where microwave thermal population is problematic.
- **Cross-platform insight:** The semiconductor-inspired encoding demonstrates that design principles from spin qubits can yield practical advantages in superconducting circuits.


## Experimental Status

**Transmon-pair CQB — Campbell et al. (2020):**
- Two capacitively coupled transmons with small avoided crossing (gap < $k_BT$)
- Control: solely baseband pulses + Landau-Zener interference
- Average Clifford fidelity: >99.7% (randomized benchmarking)
- Coupled CQB-CQB operations demonstrated
- No microwave generators/mixers/filters needed

**Cavity dual-rail — Teoh et al. (2023, Yale/Schoelkopf):**
- Logical qubit in $|01\rangle$/$|10\rangle$ of two 3D stub superconducting cavities
- Photon lifetime: >1 ms
- Erasure:Pauli error ratio strongly biased (>10:1)
- QND parity measurement via transmon ancilla

**Cavity dual-rail — Levine et al. (2024, AWS):**
- Erasure detection rate: >99% of $T_1$ errors detected
- Effective $T_1$ (undetected): ~10× improvement over bare transmon
- First demonstration of erasure conversion in superconducting circuits

**Erasure-detected logical measurements — Chou et al. (2024, Yale):**
- Logical state preparation and measurement errors at the **0.01% level** ($\sim 10^{-4}$)
- Over 99% of cavity decay events detected as erasures
- Confirmed error hierarchy: decay errors ~0.2%/μs, phase errors 6× less, bit flips ≥140× less
- First confirmation of the error hierarchy needed for efficient erasure code concatenation

**Two-qubit gates — Mehta et al. (2025, Yale):**
- Bias-preserving and error-detectable two-qubit entangling operations
- Demonstrated in dual-rail cavity system

**Multi-qubit entanglement — Huang et al. (2026):**
- Logical multi-qubit entanglement with dual-rail superconducting qubits
- Published in Nature Physics


## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Clifford fidelity (CQB) | >99.7% | Baseband-only control, Landau-Zener | [Campbell et al. 2020](https://doi.org/10.1103/PhysRevX.10.041051) |
| SPAM error (cavity) | ~10⁻⁴ (0.01%) | Erasure-detected logical measurement | [Chou et al. 2024](https://doi.org/10.1038/s41567-024-02539-4) |
| Cavity $T_1$ | >1 ms | 3D stub cavities | [Teoh et al. 2023](https://doi.org/10.1073/pnas.2221736120) |
| Erasure detection rate | >99% | Dominant $T_1$ errors detected | [Levine et al. 2024](https://doi.org/10.1103/PhysRevX.14.011051) |
| Effective $T_1$ (undetected) | ~10× bare | After erasure post-selection | [Levine et al. 2024](https://doi.org/10.1103/PhysRevX.14.011051) |
| Decay error rate | ~0.2%/μs | Dominant error channel | [Chou et al. 2024](https://doi.org/10.1038/s41567-024-02539-4) |
| Phase error rate | ~6× lower than decay | Confirmed error hierarchy | [Chou et al. 2024](https://doi.org/10.1038/s41567-024-02539-4) |
| Bit flip rate | ≥140× lower than decay | Strongly suppressed | [Chou et al. 2024](https://doi.org/10.1038/s41567-024-02539-4) |


## Scaling Considerations

- **Microwave-free advantage (CQB):** Eliminates microwave generators, mixers, and filters per qubit — major simplification for large-scale systems.
- **Temperature tolerance:** Baseband control may enable operation at higher temperatures where microwave thermal population is problematic.
- **Super-semi synergy:** Gate-voltage-tunable junctions (gatemons) are a natural fit: detuning is controlled by gate voltages rather than flux, avoiding flux noise entirely.
- **QEC integration:** Erasure conversion reduces surface code overhead by 3–10× compared to standard depolarizing noise. The confirmed error hierarchy (decay ≫ phase ≫ bit flip) enables efficient concatenation with tailored erasure codes.


## References

### Original proposal
- Y.-P. Shim and C. Tahan, "Semiconductor-inspired design principles for superconducting quantum computing," [Nature Commun. 7, 11059 (2016)](https://doi.org/10.1038/ncomms11059) — [arXiv:1507.07923](https://arxiv.org/abs/1507.07923)

### Composite qubit (transmon-pair)
- D. L. Campbell et al., "Universal non-adiabatic control of small-gap superconducting qubits," [PRX 10, 041051 (2020)](https://doi.org/10.1103/PhysRevX.10.041051) — [arXiv:2003.13154](https://arxiv.org/abs/2003.13154)

### Cavity dual-rail
- J. D. Teoh et al., "Dual-rail encoding with superconducting cavities," [PNAS 120, e2221736120 (2023)](https://doi.org/10.1073/pnas.2221736120) — [arXiv:2212.12077](https://arxiv.org/abs/2212.12077)
- H. Levine et al., "Demonstrating a long-coherence dual-rail erasure qubit using tunable transmons," [PRX 14, 011051 (2024)](https://doi.org/10.1103/PhysRevX.14.011051) — [arXiv:2307.08737](https://arxiv.org/abs/2307.08737)

### Erasure-detected logical operations
- K. S. Chou et al., "Demonstrating a superconducting dual-rail cavity qubit with erasure-detected logical measurements," [Nature Phys. (2024)](https://doi.org/10.1038/s41567-024-02539-4) — [arXiv:2307.03169](https://arxiv.org/abs/2307.03169)
- N. Mehta et al., "Bias-preserving and error-detectable entangling operations in a superconducting dual-rail system," [arXiv:2503.10935 (2025)](https://arxiv.org/abs/2503.10935)

### Multi-qubit entanglement
- W. Huang et al., "Logical multi-qubit entanglement with dual-rail superconducting qubits," [Nature Phys. (2026)](https://doi.org/10.1038/s41567-026-03211-9)

### Related photonic dual-rail
- E. Knill, R. Laflamme, and G. J. Milburn, "A scheme for efficient quantum computation with linear optics," [Nature 409, 46 (2001)](https://doi.org/10.1038/35051009) — KLM protocol using dual-rail photonic encoding


## Linked Papers
- [[shim-2016-semiconductor-inspired]]
- [[campbell-2020-composite-qubit]]
- [[teoh-2023-dual-rail-cavity]]
- [[levine-2024-dual-rail-erasure]]

## Related Entries
- [[dual-rail-photonic-qubit]] — photonic ancestor encoding
- [[erasure-qubit]] — general erasure qubit concept
- [[transmon]] — physical qubit used in both implementations
- [[gatemon]] — natural super-semi variant for CQB
- [[singlet-triplet-qubit]] — semiconductor analog (formally identical Hamiltonian)
- [[circuit-qed]] — architecture for cavity dual-rail
