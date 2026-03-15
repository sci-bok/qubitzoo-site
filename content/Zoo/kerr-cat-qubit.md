---
title: Kerr-Cat Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2019
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
last_updated: '2026-03-14'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
---

## Description

The Kerr-cat qubit is a superconducting bosonic qubit that encodes quantum information in two coherent-state superpositions $|\pm\alpha\rangle$ of a Kerr nonlinear oscillator stabilized by a resonant two-photon drive. The two computational states are the even and odd Schrödinger cat states $|\mathcal{C}_\alpha^\pm\rangle \propto |\alpha\rangle \pm |-\alpha\rangle$, which are confined to a two-dimensional manifold within the oscillator's infinite-dimensional Hilbert space by the interplay of the Kerr nonlinearity and the parametric drive.

The key feature of the Kerr-cat qubit is exponential noise bias: bit-flip errors (transitions between $|\alpha\rangle$ and $|-\alpha\rangle$) require tunneling through a phase-space barrier that grows with $|\alpha|^2$, and are therefore exponentially suppressed with increasing cat size. Phase-flip errors (relative phase between $|\alpha\rangle$ and $|-\alpha\rangle$) grow only linearly with $|\alpha|^2$. This extreme noise asymmetry can be exploited by tailored quantum error correction codes (e.g., repetition codes for phase flips only), dramatically reducing the overhead for fault-tolerant quantum computing.

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

## Key Findings

- Bit-flip times exceeding $1\,\text{ms}$ demonstrated with noise bias ratios $>10^4$ (bit-flip rate / phase-flip rate) (Lescanne et al. 2020).
- Quantum non-demolition readout of the cat qubit state using dispersive coupling to an ancilla transmon (Grimm et al. 2020).
- Gate set for biased-noise qubits: bias-preserving CNOT and Toffoli gates demonstrated (Puri et al. 2020).
- Combination with repetition code shown to achieve exponential suppression of both error types simultaneously (Guillaud & Mirrahimi 2019).
- Autoparametric stabilization scheme eliminates the need for an external two-photon pump (Réglade et al. 2024).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Bit-flip time | >1 ms | Exponentially suppressed with $ | \alpha ^2$ Lescanne et al. 2020 |
| Phase-flip time | 1–10 μs | Grows linearly with $ | \alpha ^2$; dominant error Grimm et al. 2020 |
| Noise bias ratio | $10^3$–$10^4$ | $\Gamma_{\text{phase}}/\Gamma_{\text{bit-flip}}$ | [Lescanne et al. 2020](https://doi.org/10.1038/s41567-020-0824-x) |
| Cat size $ | \alpha | ^2$ | 2–8 photons Larger $\alpha$ increases bias but also phase-flip rate Grimm et al. 2020 |
| Kerr nonlinearity $K/2\pi$ | 1–10 MHz | Set by SNAIL or transmon nonlinearity | [Grimm et al. 2020](https://doi.org/10.1038/s41586-020-2587-z) |
| 1Q gate fidelity (Z-rotation) | 99%+ | Bias-preserving via detuning of drive | [Puri et al. 2020](https://doi.org/10.1103/PhysRevX.10.011058) |
| 2Q gate fidelity (ZZ-CNOT) | 98–99% | Bias-preserving CNOT | [Puri et al. 2020](https://doi.org/10.1103/PhysRevX.10.011058) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Linked Papers
- [[grimm-2020-kerr-cat]]
- [[puri-2020-bias-preserving-gates]]
- [[lescanne-2020-bit-flip-suppression]]

## Related Entries

- [[cat-codes]]
- [[noise-bias-and-asymmetric-error-channels]]
- [[transmon]]
- [[gkp-codes]]
- [[erasure-qubit]]
