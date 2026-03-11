---
title: Cat Qubit (Cat Codes)
entry_type: qubit
technology_family: Superconducting
status: seed
seed_id: '14'
seed_source: qubitzoo-airtable
first_proposed_year: 2001
keywords:
- cat qubit
- cat code
- bosonic code
- kerr nonlinearity
- dissipative stabilization
- two-photon driven
- bit-flip suppression
influence_score: 0.82
last_updated: '2026-03-10'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok
figure_reviewed: true
published: 2001-01-01
---


## Description

Cat qubits encode quantum information in superpositions of coherent states of a harmonic oscillator (typically a superconducting microwave cavity). The logical states are:

$$|0_L\rangle = \mathcal{N}_+(|\alpha\rangle + |{-\alpha}\rangle), \quad |1_L\rangle = \mathcal{N}_-(|\alpha\rangle - |{-\alpha}\rangle)$$

where $|\alpha\rangle$ is a coherent state with mean photon number $\bar{n} = |\alpha|^2$, and $\mathcal{N}_\pm$ are normalization constants.

The key insight is that these states have exponentially different parity: $|0_L\rangle$ lives in the even-photon Fock subspace and $|1_L\rangle$ in the odd-photon subspace. Single-photon loss (the dominant error) maps $|0_L\rangle \leftrightarrow |1_L\rangle$ — a detectable bit flip. But phase-flip errors (rotations in the coherent-state basis) are exponentially suppressed with increasing $|\alpha|^2$, because the overlap $\langle\alpha|{-\alpha}\rangle = e^{-2|\alpha|^2}$ vanishes exponentially.

Modern implementations use **two-photon driven-dissipative stabilization**: a nonlinear element (Josephson junction or SNAIL) drives two-photon exchange between the cavity and a lossy buffer, confining the cavity state to the manifold spanned by $|\alpha\rangle$ and $|{-\alpha}\rangle$. This makes the cat qubit autonomous — it continuously corrects itself against single-photon loss while maintaining exponential bit-flip protection.

Alice & Bob (Paris) is developing cat qubits as their primary architecture, demonstrating bit-flip times exceeding 10 seconds with $|\alpha|^2 \approx 16$.


## Figure

![[cat-codes-figure.png]]

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

## Key Findings

- Exponential suppression of phase-flip errors with $\bar{n}$ demonstrated experimentally.
- Bit-flip times $> 10\,\text{s}$ achieved (Alice & Bob, 2024).
- Two-photon dissipation stabilization provides autonomous error correction.
- CNOT gate between cat qubits demonstrated maintaining error bias.
- Compatible with repetition code for full fault tolerance.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Bit-flip time | 0.1–10+ s | Scales with $\bar{n}$ and $\kappa_2/\kappa_1$ | — |
| Phase-flip time | 1–100 μs | Scales as $e^{-2\bar{n}} / \kappa_\phi$ | — |
| Mean photon number $\bar{n}$ | 4–16 | Typical operating regime | — |
| $\kappa_2/\kappa_1$ | 10–100 | Two-photon vs single-photon loss ratio | — |
| CNOT gate fidelity | ~99% | Bias-preserving gate | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Related Entries

- [[gkp-codes]]
- [[circuit-qed]]
- [[transmon]]
- [[binomial-code-fault-tolerant-logical-qubits-encoded-in]]
