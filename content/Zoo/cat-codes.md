---
title: Cat Qubit (Cat Codes)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 1999
first_demonstrated_year: 2020
keywords:
- cat qubit
- cat code
- bosonic code
- kerr nonlinearity
- dissipative stabilization
- two-photon driven
- bit-flip suppression
influence_score: 0.82
last_updated: '2026-11-13'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-13
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/cat-codes-figure.provenance.json"
figure_reviewed_by: "codex-daily-audit-2026-11-13"
figure_reviewed_at: "2026-11-13T15:15:12.379312+00:00"
---

## Figure

![[cat-codes-figure.png]]

## Description

Cat codes encode a qubit in two well-separated coherent states of a harmonic oscillator, typically a superconducting microwave mode. Two basis conventions are common and must not be conflated. The coherent-state computational basis used for the noise-biased dissipative and Kerr-cat qubits is approximately

$$|0_C\rangle \simeq |\alpha\rangle, \qquad |1_C\rangle \simeq |{-\alpha}\rangle,$$

where $\bar n=|\alpha|^2$ and $\langle\alpha|{-\alpha}\rangle=e^{-2\bar n}$. The even- and odd-parity cat states are the Hadamard-dual basis

$$|C_\pm\rangle=\mathcal N_\pm\bigl(|\alpha\rangle\pm|{-\alpha}\rangle\bigr),$$

which have even and odd photon-number parity. Single-photon loss therefore swaps $|C_+\rangle\leftrightarrow|C_-\rangle$, but the same operator acts approximately as logical $Z$ in the coherent-state basis because $a|\pm\alpha\rangle=\pm\alpha|\pm\alpha\rangle$. Modern cat-qubit experiments use this coherent-state convention: transitions between $|\alpha\rangle$ and $|{-\alpha}\rangle$ (logical bit flips) are exponentially suppressed as the states separate, while photon loss produces the dominant phase-flip channel with a rate that grows approximately linearly with $\bar n$.

The protected manifold can be created by engineered two-photon dissipation through a lossy buffer or by a two-photon-driven Kerr nonlinear oscillator. These mechanisms share the same logical coherent states but have different confinement dynamics, leakage channels, and control constraints.

## Hamiltonian

An ideal two-photon dissipative cat is described directly by the engineered jump operator

$$\dot\rho=-\frac{i}{\hbar}[H,\rho]+\kappa_2\mathcal D[a^2-\alpha^2]\rho+\kappa_1\mathcal D[a]\rho,$$

where $\mathcal D[L]\rho=L\rho L^\dagger-\tfrac12\{L^\dagger L,\rho\}$. The dark manifold of $a^2-\alpha^2$ is the span of $|\alpha\rangle$ and $|{-\alpha}\rangle$; it does not select only one of them.

A representative rotating-frame Kerr-cat Hamiltonian is

$$\frac{H_K}{\hbar}=-K a^{\dagger 2}a^2+\epsilon_2a^{\dagger 2}+\epsilon_2^*a^2=-K(a^{\dagger 2}-\alpha^{*2})(a^2-\alpha^2)+\text{const.},$$

with $\alpha^2=\epsilon_2/K$ for this phase convention. Projected into the coherent-state basis, single-photon loss gives $a\simeq\alpha Z_L$, so $\Gamma_Z\sim\kappa_1\bar n$, whereas local perturbations induce $|\alpha\rangle\leftrightarrow|{-\alpha}\rangle$ transitions only through their exponentially small overlap. The precise bit-flip exponent and prefactor depend on the stabilization mechanism and nonidealities.

## Motivation

Cat qubits suppress logical bit flips at the hardware level and leave a predominantly phase-flip-biased channel. A one-dimensional repetition code can then correct the remaining phase flips with substantially less overhead than a code designed for balanced $X$ and $Z$ noise, provided state preparation, gates, measurement, and leakage management preserve the bias.

## Experimental Status

**Dissipative-cat bit-flip suppression — Lescanne et al. (2020):**
- Demonstrated exponential suppression of logical bit flips as the coherent states were separated.
- Confirmed the complementary cost: single-photon loss produces a phase-flip rate that grows approximately linearly with $\bar n$.

**Protected control beyond ten seconds — Réglade et al. (2024):**
- Demonstrated dissipative-cat bit-flip times above 10 s, about four orders of magnitude beyond earlier implementations.
- Prepared and controlled superpositions without breaking the bit-flip protection; measured phase-flip times above 490 ns.

**Planar Kerr-cat architecture — Hajr et al. (2024):**
- Achieved 99.6% QND readout fidelity at $\bar n=8$ and bit-flip time above 1 ms for cat sizes up to ten photons.
- Demonstrated scalable 2D integration with an on-chip band-block filter and universal-control primitives.

**Concatenated cat-code QEC — Putterman et al. (2025):**
- Concatenated five bosonic cat qubits with an outer distance-5 repetition code and demonstrated below-threshold phase-flip correction from distance 3 to 5.
- Reached a minimum measured logical error per cycle of $1.65(3)\%$ for the distance-5 code while preserving bit-flip suppression during syndrome extraction.

**Detuned Kerr-cat benchmarking — Qing et al. (2026):**
- Measured SPAM-free $Z(\pi/2)$ and $X(\pi/2)$ fidelities of $99.18(7)\%$ and $92.5(2)\%$, respectively.
- Dihedral randomized benchmarking found operational noise bias above 100 and approaching 250, while showing that lifetime ratios alone can overestimate gate-level bias.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Protected bit-flip time | $>10$ s | Controlled dissipative cat; phase-flip time remained $>490$ ns | [Réglade et al. 2024](https://doi.org/10.1038/s41586-024-07294-3) |
| Kerr-cat QND readout fidelity | $99.6\%$ | Planar device at $\bar n=8$ | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |
| Concatenated logical error per cycle | $1.65(3)\%$ | Distance-5 repetition code over five cat qubits | [Putterman et al. 2025](https://doi.org/10.1038/s41586-025-08642-7) |
| Detuned Kerr-cat $Z(\pi/2)$ fidelity | $99.18(7)\%$ | SPAM-free gate-set-tomography estimate | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |
| Detuned Kerr-cat $X(\pi/2)$ fidelity | $92.5(2)\%$ | SPAM-free gate-set-tomography estimate | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |
| Operational noise bias | $>100$, approaching 250 | Dihedral randomized benchmarking; not inferred only from lifetimes | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |

> **Convention note:** these metrics use the coherent-state basis, in which the protected channel is the logical bit flip and photon loss drives logical phase flips. In the even/odd parity-cat basis, the same photon-loss event swaps parity sectors.

## References

### Original proposal
- P. T. Cochrane, G. J. Milburn, and W. J. Munro, "Macroscopically distinct quantum-superposition states as a bosonic code for amplitude damping," [Phys. Rev. A 59, 2631 (1999)](https://doi.org/10.1103/PhysRevA.59.2631)

### Stabilized cat-qubit architecture
- M. Mirrahimi et al., "Dynamically protected cat-qubits: a new paradigm for universal quantum computation," [New J. Phys. 16, 045014 (2014)](https://doi.org/10.1088/1367-2630/16/4/045014) — [arXiv:1312.2017](https://arxiv.org/abs/1312.2017)

### Experimental demonstrations
- R. Lescanne et al., "Exponential suppression of bit-flips in a qubit encoded in an oscillator," [Nat. Phys. 16, 509 (2020)](https://doi.org/10.1038/s41567-020-0824-x) — [arXiv:1907.11729](https://arxiv.org/abs/1907.11729)
- U. Réglade et al., "Quantum control of a cat qubit with bit-flip times exceeding ten seconds," [Nature 629, 778 (2024)](https://doi.org/10.1038/s41586-024-07294-3) — [arXiv:2307.06617](https://arxiv.org/abs/2307.06617)
- A. Hajr et al., "High-Coherence Kerr-Cat Qubit in 2D Architecture," [Phys. Rev. X 14, 041049 (2024)](https://doi.org/10.1103/PhysRevX.14.041049) — [arXiv:2404.16697](https://arxiv.org/abs/2404.16697)
- H. Putterman et al., "Hardware-efficient quantum error correction via concatenated bosonic qubits," [Nature 638, 927 (2025)](https://doi.org/10.1038/s41586-025-08642-7) — [arXiv:2409.13025](https://arxiv.org/abs/2409.13025)
- B. Qing et al., "Quantum Benchmarking of High-Fidelity Noise-Biased Operations on a Detuned-Kerr-Cat Qubit," [Proc. Natl. Acad. Sci. U.S.A. 123, e2520479123 (2026)](https://doi.org/10.1073/pnas.2520479123) — [arXiv:2411.04442](https://arxiv.org/abs/2411.04442)

### Related theory
- J. Guillaud and M. Mirrahimi, "Repetition Cat Qubits for Fault-Tolerant Quantum Computation," [Phys. Rev. X 9, 041053 (2019)](https://doi.org/10.1103/PhysRevX.9.041053) — [arXiv:1904.09474](https://arxiv.org/abs/1904.09474)

## Linked Papers

- [[mirrahimi-2014-cat-codes]]
- [[cochrane-1999-macroscopically-distinct-superposition]]
- [[grimm-2020-kerr-cat]]
- [[guillaud-2019-repetition-cat-qubits]]
- [[lescanne-2020-bit-flip-suppression]]
- [[michael-2016-binomial-codes]]
- [[puri-2020-bias-preserving-gates]]
- [[reglade-2024-kerr-cat-ten-seconds]]
- [[hajr-2024-high-coherence-kerr-cat]]
- [[putterman-2025-hardware-efficient-bosonic-qec]]
- [[qing-2026-detuned-kerr-cat-benchmarking]]
- [[ye-2026-bias-preserving-cat-cat-cnot-gate]]
- [[masuda-2026-engineered-two-photon-dissipative-confinement]]
- [[yurtseven-2026-bias-preserving-entanglement-of-kerr-cat]]

## Evergreen context

- [[bosonic-code-hierarchy]] — where cat codes sit relative to GKP and binomial encodings
- [[josephson-junction-as-nonlinear-element]] — the physical source of the Kerr and parametric nonlinearities that superconducting cat implementations engineer into a stabilized manifold
- [[noise-bias-and-asymmetric-error-channels]] — the central idea behind exponentially biased cat noise
- [[erasure-error-vs-pauli-error]] — useful contrast when comparing bosonic and heralded architectures

## Related Entries

- [[gkp-codes]] — alternative bosonic code with grid-state encoding
- [[kerr-cat-qubit]] — related cat qubit variant using Kerr nonlinearity
- [[circuit-qed]] — underlying hardware platform
- [[transmon]] — ancilla qubit used in cat qubit control
- [[binomial-codes]] — another bosonic code family
