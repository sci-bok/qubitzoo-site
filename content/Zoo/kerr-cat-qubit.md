---
title: Kerr-Cat Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2017
first_demonstrated_year: 2020
keywords:
- kerr-cat
- cat qubit
- two-photon drive
- noise bias
- bit-flip suppression
- bosonic code
- superconducting qubit
- detuned Kerr-cat
influence_score: 0.84
last_updated: '2026-10-31'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-10-31
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/kerr-cat-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-10-31"
figure_reviewed_at: "2026-10-31T14:10:33.749842+00:00"
---

## Figure

![[kerr-cat-qubit-figure.png]]

## Description

The Kerr-cat qubit is a superconducting bosonic qubit formed in a Kerr-nonlinear oscillator driven near twice its resonance frequency. In the usual logical convention, the computational states are the two opposite coherent states

$$|0_L\rangle \simeq |\alpha\rangle,\qquad |1_L\rangle \simeq |-\alpha\rangle.$$

The exactly orthogonal even- and odd-parity cat states

$$|\mathcal{C}_\alpha^\pm\rangle \propto |\alpha\rangle \pm |-\alpha\rangle$$

are the complementary $X_L$-basis states. Keeping these two bases distinct is essential: tunnelling between the two phase-space wells produces logical bit flips, whereas single-photon loss acts approximately as $\hat a|\pm\alpha\rangle=\pm\alpha|\pm\alpha\rangle$ and therefore produces the dominant logical phase flips.

The phase-space separation of the wells grows with the mean photon number $\bar n=|\alpha|^2$. Their overlap is $\langle-\alpha|\alpha\rangle=e^{-2|\alpha|^2}$, which underlies the exponential suppression of bit flips in the ideal large-cat regime. Phase-flip errors from photon loss instead grow roughly linearly with $\bar n$, producing a strongly biased but not error-free qubit.

## Hamiltonian

A representative rotating-frame Hamiltonian is

$$\frac{H}{\hbar}=\Delta\hat a^\dagger\hat a-K\hat a^{\dagger 2}\hat a^2+\varepsilon_2\hat a^{\dagger 2}+\varepsilon_2^*\hat a^2,$$

where $K>0$ is the self-Kerr strength, $\varepsilon_2$ is the complex two-photon-drive amplitude, and $\Delta$ is the detuning between the oscillator and half the pump frequency. For the resonant case $\Delta=0$, choose the phase convention in which $\varepsilon_2>0$ and define $\alpha=\sqrt{\varepsilon_2/K}$. The Hamiltonian can then be factorized as

$$\frac{H}{\hbar}=-K(\hat a^{\dagger 2}-\alpha^2)(\hat a^2-\alpha^2)+K|\alpha|^4.$$

Thus $|\pm\alpha\rangle$, and equivalently their even/odd superpositions $|\mathcal{C}_\alpha^\pm\rangle$, span an exactly degenerate eigenspace of the ideal model. They should not be described as ordinary ground states of an unbounded rotating-frame quartic Hamiltonian. In the large-cat limit, the separation to the first excited doublet is approximately

$$\Delta_{\mathrm{gap}}/\hbar\simeq4K|\alpha|^2.$$

Finite detuning is not merely a nuisance: the detuned Kerr-cat demonstrated in 2026 increases the coherent-state lifetime and enables a directly benchmarked control toolbox.

## Motivation

Hamiltonian confinement gives the Kerr-cat a native error asymmetry without repeated syndrome extraction at the physical-qubit level. It does not autonomously correct photon loss: the dominant phase errors still require an outer code. If control and readout preserve the bias, repetition, XZZX, or other asymmetric-noise codes can exploit the rare bit-flip channel and lower fault-tolerance overhead.

The engineering challenge is to retain that bias during gates. Strong pumps can heat auxiliary circuit modes, leakage can leave the protected manifold, and an idling-lifetime ratio can substantially overestimate the bias of an actual gate. Modern experiments therefore benchmark operations directly rather than inferring gate quality from $T_{\mathrm{bit}}/T_{\mathrm{phase}}$ alone.

## Experimental Status

**Hamiltonian proposal — Puri, Boutin, and Blais (2017):**
- Proposed preparing and controlling cat states in a two-photon-driven Kerr-nonlinear resonator and identified the degenerate encoded manifold.

**First complete Kerr-cat demonstration — Grimm et al. (2020):**
- Used a SNAIL-based nonlinear resonator to demonstrate stabilization, universal single-qubit control, and single-shot cat-quadrature readout.
- Reported process fidelities of $85.5\%$ for identity, $85.7\%$ for $X(\pi/2)$, and $81.1\%$ for $Z(\pi/2)$; these are historical benchmarks, not current records.

**Scalable planar architecture — Hajr et al. (2024):**
- Added an on-chip band-block filter in a two-dimensional circuit, obtained $99.6\%$ QND readout fidelity at $|\alpha|^2=8$, and measured coherent-state lifetimes near $0.95\,\mathrm{ms}$ at that cat size.

**Oscillator control — Ding et al. (2025):**
- Demonstrated a parametrically driven conditional-displacement interaction between a Kerr-cat and a high-Q cavity, enabling universal cavity control while frequency-selective dissipation suppressed heating-induced cavity dephasing.

**Direct operation benchmarking — Qing et al. (2026):**
- Demonstrated a detuned Kerr-cat in a planar circuit with initialization, universal one-qubit control, and QND readout.
- Measured a $1.2\,\mathrm{ms}$ bit-flip time and $4\,\mu\mathrm{s}$ phase-flip time, plus SPAM-free fidelities of $99.18(7)\%$ for the bias-preserving $Z(\pi/2)$ gate and $92.5(2)\%$ for $X(\pi/2)$.
- Direct dihedral randomized benchmarking found operational noise bias above $100$ and up to about $250$, showing why lifetime ratios alone are insufficient.

Bias-preserving Kerr-cat–Kerr-cat entangling gates remain an active development target; the widely cited CNOT and Toffoli constructions in Puri et al. (2020) are proposals, not experimental demonstrations.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| QND readout fidelity | $99.6\%$ | Planar resonant Kerr-cat, $\lvert\alpha\rvert^2=8$ | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |
| Coherent-state (bit-flip) lifetime | $\sim0.95\,\mathrm{ms}$ | Resonant planar device near $\lvert\alpha\rvert^2=8$ | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |
| Detuned coherent-state lifetime | $1.2\,\mathrm{ms}$ | About $3\times$ the resonant value in the same 2026 study | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |
| Detuned phase-flip time | $4\,\mu\mathrm{s}$ | Dominant error channel | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |
| $Z(\pi/2)$ process fidelity | $99.18(7)\%$ | SPAM-free gate-set tomography; bias-preserving operation | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |
| $X(\pi/2)$ process fidelity | $92.5(2)\%$ | SPAM-free gate-set tomography; tunnelling operation | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |
| Directly benchmarked operation bias | $>100$, up to $\sim250$ | Dihedral randomized benchmarking, not a lifetime-ratio estimate | [Qing et al. 2026](https://doi.org/10.1073/pnas.2520479123) |
| Kerr strength $K/2\pi$ | $0.93(3)\,\mathrm{MHz}$ | Kerr-cat ancilla used for conditional cavity control | [Ding et al. 2025](https://doi.org/10.1038/s41467-025-60352-w) |

## References

### Hamiltonian proposal
- S. Puri, S. Boutin, and A. Blais, "Engineering the quantum states of light in a Kerr-nonlinear resonator by two-photon driving," [npj Quantum Information 3, 18 (2017)](https://doi.org/10.1038/s41534-017-0019-1) — [arXiv:1605.09408](https://arxiv.org/abs/1605.09408)

### First demonstration
- A. Grimm et al., "Stabilization and operation of a Kerr-cat qubit," [Nature 584, 205–209 (2020)](https://doi.org/10.1038/s41586-020-2587-z) — [arXiv:1907.12131](https://arxiv.org/abs/1907.12131)

### Bias-preserving gate theory
- S. Puri et al., "Bias-preserving gates with stabilized cat qubits," [Science Advances 6, eaay5901 (2020)](https://doi.org/10.1126/sciadv.aay5901) — [arXiv:1905.00450](https://arxiv.org/abs/1905.00450)
- J. Guillaud and M. Mirrahimi, "Repetition Cat Qubits for Fault-Tolerant Quantum Computation," [Physical Review X 9, 041053 (2019)](https://doi.org/10.1103/PhysRevX.9.041053) — [arXiv:1904.09474](https://arxiv.org/abs/1904.09474)

### Modern experiments
- A. Hajr et al., "High-Coherence Kerr-Cat Qubit in 2D Architecture," [Physical Review X 14, 041049 (2024)](https://doi.org/10.1103/PhysRevX.14.041049) — [arXiv:2404.16697](https://arxiv.org/abs/2404.16697)
- A. Z. Ding et al., "Quantum control of an oscillator with a Kerr-cat qubit," [Nature Communications 16, 5279 (2025)](https://doi.org/10.1038/s41467-025-60352-w) — [arXiv:2407.10940](https://arxiv.org/abs/2407.10940)
- B. Qing et al., "Quantum benchmarking of high-fidelity noise-biased operations on a detuned Kerr-cat qubit," [PNAS 123, e2520479123 (2026)](https://doi.org/10.1073/pnas.2520479123) — [arXiv:2411.04442](https://arxiv.org/abs/2411.04442)

## Linked Papers

- [[puri-2017-engineering-states-light]]
- [[grimm-2020-kerr-cat]]
- [[puri-2020-bias-preserving-gates]]
- [[guillaud-2019-repetition-cat-qubits]]
- [[hajr-2024-high-coherence-kerr-cat]]
- [[ding-2025-kerr-cat-oscillator-control]]
- [[qing-2026-detuned-kerr-cat-benchmarking]]

## Evergreen context

- [[bosonic-code-hierarchy]] — where the Kerr-cat sits among cat, GKP, and binomial bosonic encodings
- [[josephson-junction-as-nonlinear-element]] — how the SNAIL / junction nonlinearity implements the driven Kerr oscillator
- [[noise-bias-and-asymmetric-error-channels]] — why exponentially rare bit flips change the error-correction strategy
- [[erasure-error-vs-pauli-error]] — contrast with architectures that lower overhead by flagging loss instead of biasing Pauli noise

## Related Entries

- [[cat-codes]] — umbrella entry spanning Hamiltonian and dissipative cat stabilization
- [[bosonic-qubit]] — parent oscillator-encoding family
- [[transmon]] — common ancilla and circuit ingredient, but a distinct encoding
- [[gkp-codes]] — alternative bosonic code with shift-error correction
- [[erasure-qubit]] — complementary route to lower-overhead fault tolerance
