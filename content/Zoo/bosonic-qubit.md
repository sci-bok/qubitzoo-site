---
title: Bosonic Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
first_proposed_year: 2001
first_demonstrated_year: 2013
keywords:
  - bosonic qubit
  - bosonic code
  - cavity QED
  - harmonic oscillator
  - quantum error correction
influence_score: 0.80
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: claude-code
verified_by: scibok-manual-2026-03-21
---

> **Note:** This is a **category entry** covering the bosonic qubit paradigm. Individual bosonic encodings have their own detailed entries: [[cat-codes]], [[binomial-codes]], [[gkp-codes]].

## Figure

*(No dedicated figure — see individual encoding entries for specific schematics.)*

## Description

A **bosonic qubit** encodes quantum information in the infinite-dimensional Hilbert space of a quantum harmonic oscillator mode, typically a superconducting microwave cavity or an optical mode. Rather than using a two-level system directly, bosonic encodings exploit the redundancy of the large Hilbert space to embed a logical qubit in a way that allows detection and correction of the dominant physical errors — most importantly photon loss.

The key insight is that a single bosonic mode, when coupled to a nonlinear ancilla (e.g., a transmon), can be universally controlled to prepare, manipulate, and measure arbitrary quantum states in the Fock basis. By choosing code words that span specific subspaces of the oscillator Hilbert space, one can engineer logical qubits with built-in error correction capabilities, often requiring fewer physical resources than multi-qubit stabilizer codes.

The three major families of bosonic codes are:

- **Cat codes** ([[cat-codes]]): Logical states are superpositions of coherent states $|\alpha\rangle$ and $|-\alpha\rangle$. Protect against photon loss via parity structure. The Kerr-cat variant ([[kerr-cat-qubit]]) uses a driven Kerr nonlinearity for autonomous stabilization.
- **Binomial codes** ([[binomial-codes]]): Logical states are finite superpositions of Fock states weighted by binomial coefficients. Exactly correct polynomial errors in creation/annihilation operators.
- **GKP codes** ([[gkp-codes]]): Logical states are grid states periodic in phase space, defined by displacement operators. Protect against small displacement errors in both position and momentum quadratures.

Bosonic qubits have achieved the milestone of **beyond break-even quantum error correction**, where the logical qubit lifetime exceeds that of any unencoded qubit in the same hardware.

## Hamiltonian

The bare bosonic mode is a quantum harmonic oscillator:

$$H_{\text{osc}} = \hbar\omega_c\,a^\dagger a$$

where $a$ and $a^\dagger$ are the annihilation and creation operators. The dominant error is photon loss, described by the Lindblad operator $\sqrt{\kappa}\,a$ with single-photon loss rate $\kappa$.

In circuit QED, the oscillator is coupled to a transmon ancilla with the dispersive Hamiltonian:

$$H_{\text{disp}} = \hbar\omega_c\,a^\dagger a + \hbar\omega_q\,|e\rangle\langle e| - \hbar\chi\,a^\dagger a\,|e\rangle\langle e|$$

where $\chi$ is the dispersive shift. This coupling enables photon-number-resolved measurements and conditional operations essential for bosonic code protocols.

## Motivation

- **Hardware efficiency**: A single high-quality cavity mode replaces many physical qubits for error correction.
- **Well-characterized errors**: Photon loss dominates over other error channels, enabling targeted code design.
- **Beyond break-even QEC**: Multiple bosonic codes have demonstrated logical qubit lifetimes exceeding the best uncorrected encodings.
- **Compatibility with circuit QED**: The mature superconducting circuit platform provides universal control of cavity modes via ancilla transmons.
- **Modularity**: Bosonic qubits can serve as logical building blocks for concatenated architectures (bosonic code + surface code).

## Experimental Status

**Cat codes — Ofek et al. (2016):**
- First demonstration of beyond-break-even QEC using a cat-code-like encoding in a 3D superconducting cavity.

**Binomial codes — Heeres et al. (2017):**
- Universal gate set implemented on a binomial-code logical qubit in an oscillator.

**GKP codes — Campagne-Ibarcq et al. (2020):**
- First experimental realization of GKP states in a superconducting cavity with real-time error correction.

**Kerr-cat — Grimm et al. (2020):**
- Stabilization of a Kerr-cat qubit with exponential bias toward phase-flip errors.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Cavity $T_1$ | 1–10 ms | 3D aluminum or tantalum cavities | — |
| QEC gain | >1 (break-even) | Cat and binomial codes | [Ofek et al. 2016](https://doi.org/10.1038/nature18949) |
| Logical gate fidelity | >99% | For encoded single-qubit operations | — |
| Ancilla $T_1$ | 50–300 μs | Transmon ancilla | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Reviews
- A. Joshi, K. Noh, and Y. Y. Gao, "Quantum information processing with bosonic qubits in circuit QED," [Quantum Sci. Technol. **6**, 033001 (2021)](https://doi.org/10.1088/2058-9565/abe989)

### Key experimental milestones
- N. Ofek et al., "Extending the lifetime of a quantum bit with error correction in superconducting circuits," [Nature **536**, 441 (2016)](https://doi.org/10.1038/nature18949)
- P. Campagne-Ibarcq et al., "Quantum error correction of a qubit encoded in grid states of an oscillator," [Nature **584**, 368 (2020)](https://doi.org/10.1038/s41586-020-2603-3)

## Linked Papers

- [[copetudo-2026-a-direct-controlled-phase-gate]]

## Related Entries

- [[cat-codes]] — coherent state superposition encoding
- [[binomial-codes]] — Fock state superposition encoding with binomial coefficients
- [[gkp-codes]] — grid state encoding in phase space
- [[kerr-cat-qubit]] — driven-dissipative cat code variant
- [[circuit-qed]] — hardware platform
