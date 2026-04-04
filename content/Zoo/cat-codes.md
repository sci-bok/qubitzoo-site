---
title: Cat Qubit (Cat Codes)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2001
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
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-03-21
figure_reviewed: true
---

## Figure

![[cat-codes-figure.png]]

## Description

Cat qubits encode quantum information in superpositions of coherent states of a harmonic oscillator (typically a superconducting microwave cavity). The logical states are:

$$|0_L\rangle = \mathcal{N}_+(|\alpha\rangle + |{-\alpha}\rangle), \quad |1_L\rangle = \mathcal{N}_-(|\alpha\rangle - |{-\alpha}\rangle)$$

where $|\alpha\rangle$ is a coherent state with mean photon number $\bar{n} = |\alpha|^2$, and $\mathcal{N}_\pm$ are normalization constants.

The key insight is that these states have exponentially different parity: $|0_L\rangle$ lives in the even-photon Fock subspace and $|1_L\rangle$ in the odd-photon subspace. Single-photon loss (the dominant error) maps $|0_L\rangle \leftrightarrow |1_L\rangle$ — a detectable bit flip. But phase-flip errors (rotations in the coherent-state basis) are exponentially suppressed with increasing $|\alpha|^2$, because the overlap $\langle\alpha|{-\alpha}\rangle = e^{-2|\alpha|^2}$ vanishes exponentially.

Modern implementations use **two-photon driven-dissipative stabilization**: a nonlinear element (Josephson junction or SNAIL) drives two-photon exchange between the cavity and a lossy buffer, confining the cavity state to the manifold spanned by $|\alpha\rangle$ and $|{-\alpha}\rangle$. This makes the cat qubit autonomous — it continuously corrects itself against single-photon loss while maintaining exponential bit-flip protection.

Alice & Bob (Paris) is developing cat qubits as their primary architecture, demonstrating bit-flip times exceeding 10 seconds with $|\alpha|^2 \approx 16$.

## Hamiltonian

The driven-dissipative cat qubit is stabilized by the effective two-photon process:

$$H_\text{drive} = g_2(a^{\dagger 2} - \alpha^{*2})(a^2 - \alpha^2)$$

with engineered two-photon dissipation:

$$\mathcal{L}[\rho] = \kappa_2 \mathcal{D}[a^2 - \alpha^2]\rho$$

where $\kappa_2$ is the two-photon loss rate. The steady states of this dissipator are exactly $|\pm\alpha\rangle$.

The cat qubit error rates scale as:
- Bit-flip rate: $\Gamma_\text{bf} \propto \kappa_1 \bar{n}$ (linear in photon loss rate)
- Phase-flip rate: $\Gamma_\text{pf} \propto e^{-2\bar{n}}$ (exponentially suppressed)

## Motivation

Standard bosonic codes (like GKP) require complex active error correction. The cat qubit achieves exponential suppression of one error type (phase flips) autonomously through hardware design, reducing the problem to correcting only bit flips. Combined with a repetition code for the remaining bit-flip errors, this creates an asymmetric error correction scheme with favorable resource scaling.

## Experimental Status

**First demonstration of exponential bit-flip suppression — Lescanne et al. (2020):**
- Demonstrated exponential suppression of phase-flip errors with increasing $\bar{n}$
- Used two-photon driven-dissipative stabilization in a superconducting cavity
- Achieved bit-flip times scaling with $\kappa_2/\kappa_1$ ratio

**Bias-preserving CNOT gate — Guillaud and Mirrahimi (2019):**
- Proposed and analyzed CNOT gate between cat qubits that maintains the exponential error bias
- Gate fidelity ~99% while preserving the noise asymmetry
- Compatible with repetition code for full fault tolerance

**Alice & Bob scaling results (2024):**
- Bit-flip times exceeding 10 s achieved with $|\alpha|^2 \approx 16$
- Demonstrated the practical viability of the cat qubit architecture for error-biased quantum computing

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Bit-flip time | 0.1–10+ s | Scales with $\bar{n}$ and $\kappa_2/\kappa_1$ | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| Phase-flip time | 1–100 μs | Scales as $e^{-2\bar{n}} / \kappa_\phi$ | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| Mean photon number $\bar{n}$ | 4–16 | Typical operating regime | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| $\kappa_2/\kappa_1$ | 10–100 | Two-photon vs single-photon loss ratio | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| CNOT gate fidelity | ~99% | Bias-preserving gate | [Guillaud and Mirrahimi 2019](https://doi.org/10.1103/PhysRevX.9.041053) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal
- M. Mirrahimi et al., "Dynamically protected cat-qubits: a new paradigm for universal quantum computation," [New J. Phys. 16, 045014 (2014)](https://doi.org/10.1088/1367-2630/16/4/045014) — [arXiv:1312.2017](https://arxiv.org/abs/1312.2017)

### Experimental demonstrations
- R. Lescanne et al., "Exponential suppression of bit-flips in a qubit encoded in an oscillator," [Nat. Phys. 16, 509 (2020)](https://doi.org/10.1038/s41567-020-0824-x) — [arXiv:1907.11729](https://arxiv.org/abs/1907.11729)

### Related theory
- J. Guillaud and M. Mirrahimi, "Repetition Cat Qubits for Fault-Tolerant Quantum Computation," [Phys. Rev. X 9, 041053 (2019)](https://doi.org/10.1103/PhysRevX.9.041053) — [arXiv:1904.09474](https://arxiv.org/abs/1904.09474)

## Linked Papers

- [[mirrahimi-2014-cat-codes]]

## Related Entries

- [[gkp-codes]] — alternative bosonic code with grid-state encoding
- [[kerr-cat-qubit]] — related cat qubit variant using Kerr nonlinearity
- [[circuit-qed]] — underlying hardware platform
- [[transmon]] — ancilla qubit used in cat qubit control
- [[binomial-codes]] — another bosonic code family
- [[bosonic-qubit]] — parent category entry for bosonic encodings
