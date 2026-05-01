---
title: Kerr-Cat Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2014
first_demonstrated_year: 2020
keywords:
- kerr-cat
- cat qubit
- two-photon drive
- noise bias
- bit-flip suppression
- bosonic code
- superconducting qubit
- Amazon AWS
- Yale
influence_score: 0.84
last_updated: '2026-05-01'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-05-01
---

## Figure

![[kerr-cat-qubit-figure.png]]

## Description

The Kerr-cat qubit is a superconducting bosonic qubit implemented in a Kerr-nonlinear oscillator driven near twice the mode frequency. Its protected manifold is spanned by two well-separated coherent states $|\pm\alpha\rangle$ in phase space. Equivalently, the even and odd cat states $|\mathcal{C}_\alpha^\pm\rangle \propto |\alpha\rangle \pm |-\alpha\rangle$ are parity eigenstates built from that same manifold. The central appeal is strong noise bias: transitions between the two phase-space wells are exponentially suppressed with cat size, while phase-flip processes from photon loss or dephasing grow only polynomially, enabling biased-noise error correction with much lower overhead than an unbiased superconducting-qubit architecture.

After the foundational cat-qubit proposal of Mirrahimi et al. (2014), Grimm et al. (2020) realized the first operational Kerr-cat qubit in a superconducting circuit. Réglade et al. (2024) then pushed the protected bit-flip time beyond ten seconds while preserving quantum control, and Hajr et al. (2024) showed that a scalable 2D circuit implementation can retain millisecond-scale protection together with high-fidelity readout.

## Hamiltonian

On resonance, a standard rotating-frame model is

$$H = -K \hat{a}^{\dagger 2}\hat{a}^2 + \varepsilon_2(\hat{a}^{\dagger 2} + \hat{a}^2),$$

where $K$ is the self-Kerr nonlinearity, $\hat{a}^{(\dagger)}$ are the oscillator ladder operators, and $\varepsilon_2$ is the two-photon drive amplitude. Away from exact resonance, one often includes an additional detuning term $-\Delta\hat{a}^\dagger\hat{a}$.

For real $\varepsilon_2$ and small detuning, the semiclassical fixed points occur near

$$\alpha \approx \pm\sqrt{\varepsilon_2/K},$$

creating an effective double-well structure in phase space. This is a phase-space picture, not a literal two-level energy diagram. The parity eigenstates are

$$|\mathcal{C}_\alpha^\pm\rangle = \frac{|\alpha\rangle \pm |-\alpha\rangle}{\sqrt{2(1 \pm e^{-2|\alpha|^2})}}.$$ 

In practical autonomous-stabilization experiments, this Hamiltonian is often supplemented by engineered two-photon dissipation or related nonlinear damping that pins the oscillator to the cat manifold. The resulting bit-flip rate between the two wells falls exponentially with $|\alpha|^2$, while phase-flip processes from single-photon loss scale roughly linearly with $|\alpha|^2$.

## Motivation

Standard bosonic codes such as GKP and binomial codes require active syndrome extraction and repeated correction cycles. The Kerr-cat qubit instead engineers a strongly biased error channel directly into the hardware: the protected manifold is stabilized continuously, and the dominant remaining errors are concentrated into phase flips rather than symmetric Pauli noise. This makes the platform especially attractive for concatenation with repetition-style or other biased-noise codes, potentially reducing fault-tolerance overhead by an order of magnitude relative to unbiased superconducting-qubit schemes.

## Experimental Status

**Foundational cat-qubit proposal — Mirrahimi et al. (2014):**
- Introduced the autonomously protected cat-qubit paradigm based on stabilized coherent-state manifolds and biased noise.

**First operational Kerr-cat qubit — Grimm et al. (2020):**
- Stabilized and controlled a Kerr-cat qubit in a superconducting circuit.
- Demonstrated quantum non-demolition readout through dispersive coupling to an ancilla transmon.
- Showed more than 10x longer transverse relaxation than comparable Fock-state encoding.

**Exponential suppression benchmark — Lescanne et al. (2020):**
- Experimentally verified the exponential suppression of bit flips with increasing cat size.
- Established large noise bias and extrapolated bit-flip times beyond 10 s in the protected regime.

**Bias-preserving gate theory — Puri et al. (2020):**
- Proposed a universal gate set, including CNOT and Toffoli constructions, that preserves the cat-qubit noise bias during computation.
- This is a theoretical control architecture, not an experimental fidelity benchmark.

**Concatenation with repetition code — Guillaud and Mirrahimi (2019):**
- Showed theoretically that repetition-cat concatenation can suppress both dominant phase flips and exponentially rare bit flips.

**Ten-second protected control — Réglade et al. (2024):**
- Demonstrated quantum control of a cat qubit with bit-flip times exceeding 10 s.
- Reported phase-flip times above 490 ns while preserving the bit-flip protection mechanism.

**Scalable 2D architecture — Hajr et al. (2024):**
- Realized a high-coherence Kerr-cat qubit in a 2D superconducting circuit using an on-chip band-block filter.
- Demonstrated 99.6% quantum non-demolition readout fidelity for a cat with eight photons.
- Measured bit-flip times above 1 ms for cat sizes up to ten photons in the scalable architecture.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Bit-flip time (record) | >10 s | Protected-control regime | [Réglade et al. 2024](https://doi.org/10.1038/s41586-024-07294-3) |
| Phase-flip time | >490 ns | Same protected-control regime; tradeoff remains cat-size dependent | [Réglade et al. 2024](https://doi.org/10.1038/s41586-024-07294-3) |
| Noise bias ratio | >10^4 | Large asymmetry between phase flips and exponentially rare bit flips | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| QND readout fidelity | 99.6% | Cat with 8 photons in scalable 2D circuit | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |
| Cat size $\bar{n}$ | up to 10 photons | Characterized in 2D architecture study | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |
| Bit-flip time (2D architecture) | >1 ms | Scalable planar implementation | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |

## References

### Foundational cat-qubit paradigm
- M. Mirrahimi et al., "Dynamically protected cat-qubits: a new paradigm for universal quantum computation," [New J. Phys. 16, 045014 (2014)](https://doi.org/10.1088/1367-2630/16/4/045014) — [arXiv:1312.2017](https://arxiv.org/abs/1312.2017)

### Original demonstration
- A. Grimm et al., "Stabilization and operation of a Kerr-cat qubit," [Nature 584, 205 (2020)](https://doi.org/10.1038/s41586-020-2587-z) — [arXiv:1907.12131](https://arxiv.org/abs/1907.12131)

### Exponential suppression
- R. Lescanne et al., "Exponential suppression of bit-flips in a qubit encoded in an oscillator," [Nat. Phys. 16, 509 (2020)](https://doi.org/10.1038/s41567-020-0824-x) — [arXiv:1907.11729](https://arxiv.org/abs/1907.11729)

### Bias-preserving gate theory
- S. Puri et al., "Bias-preserving gates with stabilized cat qubits," [Sci. Adv. 6, eaay5901 (2020)](https://doi.org/10.1126/sciadv.aay5901) — [arXiv:1905.00450](https://arxiv.org/abs/1905.00450)

### Repetition-code theory
- J. Guillaud and M. Mirrahimi, "Repetition Cat Qubits for Fault-Tolerant Quantum Computation," [Phys. Rev. X 9, 041053 (2019)](https://doi.org/10.1103/PhysRevX.9.041053) — [arXiv:1904.09474](https://arxiv.org/abs/1904.09474)

### Ten-second protected control
- U. Réglade et al., "Quantum control of a cat qubit with bit-flip times exceeding ten seconds," [Nature 629, 778 (2024)](https://doi.org/10.1038/s41586-024-07294-3) — [arXiv:2307.06617](https://arxiv.org/abs/2307.06617)

### 2D scalable architecture
- A. Hajr et al., "High-Coherence Kerr-Cat Qubit in 2D Architecture," [Phys. Rev. X 14, 041049 (2024)](https://doi.org/10.1103/PhysRevX.14.041049) — [arXiv:2404.16697](https://arxiv.org/abs/2404.16697)

## Linked Papers

- [[mirrahimi-2014-cat-codes]]
- [[grimm-2020-kerr-cat]]
- [[lescanne-2020-bit-flip-suppression]]
- [[puri-2020-bias-preserving-gates]]
- [[guillaud-2019-repetition-cat-qubits]]
- [[reglade-2024-kerr-cat-ten-seconds]]
- [[hajr-2024-high-coherence-kerr-cat]]

## Related Entries

- [[bosonic-qubit]] — parent category for oscillator-encoded qubits
- [[cat-codes]] — general cat-code framework underlying the Kerr-cat encoding
- [[transmon]] — closely related superconducting control and readout ecosystem
- [[gkp-codes]] — alternative bosonic code with different protection strategy
- [[erasure-qubit]] — complementary approach to reducing QEC overhead via error conversion
