---
title: Bosonic Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2001
first_demonstrated_year: 2013
keywords:
  - bosonic qubit
  - bosonic code
  - cavity QED
  - harmonic oscillator
  - quantum error correction
influence_score: 0.80
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: claude-code
verified_by: scibok-deep-audit-2026-04-04
---

> **Note:** This is a **category entry** covering the bosonic qubit paradigm. Individual bosonic encodings have their own detailed entries: [[cat-codes]], [[binomial-codes]], [[gkp-codes]].

## Figure

![[bosonic-qubit-figure.png]]

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

**GKP beyond break-even — Sivak et al. (2023):**
- First demonstration of real-time quantum error correction surpassing the break-even point with a GKP qubit in a superconducting cavity. Coherence gain $G = 2.27 \pm 0.07$ over the best passive physical qubit. Used model-free reinforcement learning for parameter optimization.

**GKP qudit beyond break-even — Google Quantum AI & Yale (2025):**
- Extended bosonic QEC to higher-dimensional qudits: GKP-encoded qutrits ($d=3$) and ququarts ($d=4$) achieved beyond-break-even error correction with gains of $1.82 \pm 0.03$ and $1.87 \pm 0.03$ respectively, demonstrating hardware-efficient scaling in the bosonic Hilbert space.

**Concatenated cat-code repetition code (2025):**
- Cat qubits encoded in five microwave resonators with transmon ancillas, topped with a distance-5 repetition code, achieved a logical error rate of ~1.65% per cycle — showing scalable error suppression in concatenated bosonic architectures.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Cavity $T_1$ | 1–10 ms | 3D aluminum or tantalum cavities | [Reagor et al. 2016](https://doi.org/10.1103/PhysRevB.94.014506) |
| QEC gain | $G = 2.27 \pm 0.07$ | GKP code, real-time QEC | [Sivak et al. 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| QEC gain (qudit) | $1.87 \pm 0.03$ (ququart) | GKP qudit, beyond break-even | [Google/Yale 2025](https://doi.org/10.1038/s41586-025-08899-y) |
| Logical gate fidelity | >99% | For encoded single-qubit operations | [Campagne-Ibarcq et al. 2020](https://doi.org/10.1038/s41586-020-2603-3) |
| Ancilla $T_1$ | 50–300 μs | Transmon ancilla | [Place et al. 2021](https://doi.org/10.1038/s41467-021-22030-5) |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## Scaling Considerations

- **Ancilla-induced errors**: Transmon ancillas used for state preparation and readout can introduce back-action errors (dephasing, leakage) that limit logical qubit performance. Ancilla $T_1$ sets an effective ceiling.
- **Two-qubit logical gates**: Entangling operations between two bosonic logical qubits remain challenging, often requiring conversion through ancilla transmons, which introduces additional error channels.
- **Cavity fabrication**: High-$Q$ 3D cavities ($T_1 > 1$ ms) are bulky and difficult to integrate at scale. Planar cavity alternatives trade coherence for density.
- **Analog decoding complexity**: GKP syndrome information is continuous-valued, requiring computationally intensive decoding compared to discrete stabilizer codes.
- **Concatenation overhead**: While bosonic codes reduce overhead vs. bare surface codes, concatenated architectures (bosonic + repetition/surface) still require multiple cavities and ancillas per logical qubit.
- **Real-time feedback latency**: Active QEC protocols (as in Sivak 2023) require fast classical processing for syndrome extraction and feedback, currently at the edge of hardware capability.

## References

### Reviews
- A. Joshi, K. Noh, and Y. Y. Gao, "Quantum information processing with bosonic qubits in circuit QED," [Quantum Sci. Technol. **6**, 033001 (2021)](https://doi.org/10.1088/2058-9565/abe989), [arXiv:2008.13471](https://arxiv.org/abs/2008.13471)

### Key experimental milestones
- N. Ofek et al., "Extending the lifetime of a quantum bit with error correction in superconducting circuits," [Nature **536**, 441 (2016)](https://doi.org/10.1038/nature18949), [arXiv:1602.04768](https://arxiv.org/abs/1602.04768)
- P. Campagne-Ibarcq et al., "Quantum error correction of a qubit encoded in grid states of an oscillator," [Nature **584**, 368 (2020)](https://doi.org/10.1038/s41586-020-2603-3), [arXiv:1907.12487](https://arxiv.org/abs/1907.12487)
- V. V. Sivak et al., "Real-time quantum error correction beyond break-even," [Nature **616**, 50 (2023)](https://doi.org/10.1038/s41586-023-05782-6), [arXiv:2211.09116](https://arxiv.org/abs/2211.09116)
- Google Quantum AI & Yale, "Quantum error correction of qudits beyond break-even," [Nature **641**, 612 (2025)](https://doi.org/10.1038/s41586-025-08899-y)

## Linked Papers

- [[ofek-2016-extending-lifetime-bit]]
- [[campagneibarcq-2020-error-correction-qubit]]
- [[joshi-2021-information-processing-bosonic]]
- [[sivak-2023-real-time-error]]
- [[copetudo-2026-a-direct-controlled-phase-gate]]

## Related Entries

- [[cat-codes]] — coherent state superposition encoding
- [[binomial-codes]] — Fock state superposition encoding with binomial coefficients
- [[gkp-codes]] — grid state encoding in phase space
- [[kerr-cat-qubit]] — driven-dissipative cat code variant
- [[dual-rail-superconducting-qubit]] — bosonic encoding using two coupled cavities
- [[circuit-qed]] — hardware platform
- [[transmon]] — ancilla qubit used for bosonic state preparation, control, and readout
- [[qubit-readout]] — dispersive readout of bosonic-encoded qubits
- [[cryogenic-amplification]] — amplification chain for bosonic qubit readout
