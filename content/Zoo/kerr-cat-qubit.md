---
title: Kerr-Cat Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2019
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
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[kerr-cat-qubit-figure.png]]

## Description

The Kerr-cat qubit is a superconducting bosonic qubit that encodes quantum information in two coherent-state superpositions $|\pm\alpha\rangle$ of a Kerr nonlinear oscillator stabilized by a resonant two-photon drive. The two computational states are the even and odd Schrödinger cat states $|\mathcal{C}_\alpha^\pm\rangle \propto |\alpha\rangle \pm |-\alpha\rangle$, which are confined to a two-dimensional manifold within the oscillator's infinite-dimensional Hilbert space by the interplay of the Kerr nonlinearity and the parametric drive.

The key feature of the Kerr-cat qubit is **exponential noise bias**: bit-flip errors (transitions between $|\alpha\rangle$ and $|-\alpha\rangle$) require tunneling through a phase-space barrier that grows with $|\alpha|^2$, and are therefore exponentially suppressed with increasing cat size. Phase-flip errors (relative phase between $|\alpha\rangle$ and $|-\alpha\rangle$) grow only linearly with $|\alpha|^2$. This extreme noise asymmetry can be exploited by tailored quantum error correction codes (e.g., repetition codes for phase flips only), dramatically reducing the overhead for fault-tolerant quantum computing.

Demonstrated by Grimm et al. (2020) at Yale using a SNAIL-based parametric oscillator, and further developed by the Amazon AWS Center for Quantum Computing in collaboration with Yale.

## Hamiltonian

The Kerr-cat Hamiltonian in the rotating frame of the oscillator is:

$$H = -K \hat{a}^{\dagger 2}\hat{a}^2 + \varepsilon_2(\hat{a}^{\dagger 2} + \hat{a}^2)$$

where $K$ is the Kerr nonlinearity (self-Kerr), $\hat{a}^{(\dagger)}$ are the ladder operators, and $\varepsilon_2$ is the two-photon drive amplitude.

The two classical stable states are coherent states $|\pm\alpha\rangle$ with amplitude $\alpha = \sqrt{\varepsilon_2/K}$. The quantum ground states are the even/odd cat states:

$$|\mathcal{C}_\alpha^\pm\rangle = \frac{1}{\sqrt{2(1 \pm e^{-2|\alpha|^2})}}(|\alpha\rangle \pm |-\alpha\rangle)$$

The energy gap protecting against bit-flips scales as:

$$\Delta E_{\text{gap}} \propto |\alpha|^2 K$$

and the bit-flip rate is suppressed as $\Gamma_{\text{bf}} \propto e^{-2|\alpha|^2}$.

## Motivation

Standard bosonic codes (GKP, binomial) require complex syndrome extraction. The Kerr-cat qubit achieves autonomous error bias through its Hamiltonian structure alone: the two-photon drive continuously stabilizes the cat-state manifold without active feedback. By concentrating errors into a single channel (phase flips), the Kerr-cat enables a path to fault-tolerant quantum computing using simpler, lower-overhead error correction — potentially a repetition code rather than a full surface code. This could reduce the number of physical qubits needed for a logical qubit by an order of magnitude.

## Experimental Status

**First demonstration — Grimm et al. (2020):**
- Generated and stabilized Schrödinger cat states using a SNAIL-based Kerr nonlinear resonator with single-mode squeezing.
- Demonstrated quantum non-demolition readout of the cat qubit state via dispersive coupling to an ancilla transmon.
- Showed >10× improvement in transverse relaxation time over Fock-state encoding.

**Exponential bit-flip suppression — Lescanne et al. (2020):**
- Bit-flip times exceeding $1\,\text{ms}$ demonstrated with noise bias ratios $>10^4$.

**Bias-preserving gates — Puri et al. (2020):**
- Demonstrated bias-preserving CNOT and Toffoli gates that maintain the noise asymmetry during gate operations.

**Repetition code combination — Guillaud and Mirrahimi (2019):**
- Showed theoretically that combining cat qubits with a repetition code achieves exponential suppression of both error types simultaneously.

**Autoparametric stabilization — Réglade et al. (2024):**
- Eliminated the need for an external two-photon pump via autoparametric design.
- Achieved bit-flip times exceeding **10 seconds** — a 10,000× improvement over the 2020 result.
- Demonstrated quantum control of the cat qubit with maintained noise bias.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Bit-flip time | >10 s | Autoparametric stabilization | [Réglade et al. 2024](https://doi.org/10.1038/s41586-024-07294-7) |
| Bit-flip time (early) | >1 ms | First demonstration with SNAIL | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| Phase-flip time | 1–10 μs | Grows linearly with $\bar{n}$; dominant error | [Grimm et al. 2020](https://doi.org/10.1038/s41586-020-2587-z) |
| Noise bias ratio | $10^3$–$10^4$ | $\Gamma_{\text{phase}}/\Gamma_{\text{bit-flip}}$ | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| Cat size $\bar{n}$ | 2–8 photons | Larger $\bar{n}$ increases bias but also phase-flip rate | [Grimm et al. 2020](https://doi.org/10.1038/s41586-020-2587-z) |
| Kerr nonlinearity $K/2\pi$ | 1–10 MHz | Set by SNAIL or transmon nonlinearity | [Grimm et al. 2020](https://doi.org/10.1038/s41586-020-2587-z) |
| 1Q gate fidelity (Z-rotation) | 99%+ | Bias-preserving via detuning of drive | [Puri et al. 2020](https://doi.org/10.1126/sciadv.aay5901) |
| 2Q gate fidelity (ZZ-CNOT) | 98–99% | Bias-preserving CNOT | [Puri et al. 2020](https://doi.org/10.1126/sciadv.aay5901) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original demonstration
- A. Grimm et al., "Stabilization and operation of a Kerr-cat qubit," [Nature 584, 205 (2020)](https://doi.org/10.1038/s41586-020-2587-z) — [arXiv:1907.12131](https://arxiv.org/abs/1907.12131)

### Bit-flip suppression
- R. Lescanne et al., "Exponential suppression of bit-flips in a qubit encoded in an oscillator," [Nat. Phys. 16, 509 (2020)](https://doi.org/10.1038/s41567-020-0824-x) — [arXiv:1907.11729](https://arxiv.org/abs/1907.11729)

### Bias-preserving gates
- S. Puri et al., "Bias-preserving gates with stabilized cat qubits," [Sci. Adv. 6, eaay5901 (2020)](https://doi.org/10.1126/sciadv.aay5901) · [arXiv:1905.00450](https://arxiv.org/abs/1905.00450)

### Autoparametric stabilization
- U. Réglade et al., "Quantum control of a cat qubit with bit-flip times exceeding ten seconds," [Nature 629, 778 (2024)](https://doi.org/10.1038/s41586-024-07294-7) · [arXiv:2307.06617](https://arxiv.org/abs/2307.06617)

### Related theory
- J. Guillaud and M. Mirrahimi, "Repetition Cat Qubits for Fault-Tolerant Quantum Computation," [Phys. Rev. X 9, 041053 (2019)](https://doi.org/10.1103/PhysRevX.9.041053) · [arXiv:1904.09474](https://arxiv.org/abs/1904.09474)

## Linked Papers

- [[grimm-2020-kerr-cat]]
- [[puri-2020-bias-preserving-gates]]
- [[lescanne-2020-bit-flip-suppression]]
- [[reglade-2024-autoparametric-cat]]
- [[guillaud-2019-repetition-cat-qubits]]

## Related Entries

- [[cat-codes]] — general cat code framework underlying the Kerr-cat encoding
- [[transmon]] — provides the Kerr nonlinearity in some implementations
- [[gkp-codes]] — alternative bosonic code with different error correction strategy
- [[erasure-qubit]] — complementary approach to reducing QEC overhead via error conversion
