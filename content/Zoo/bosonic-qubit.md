---
title: Bosonic Qubit
entry_type: qubit
technology_family: Cross-Platform
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
last_updated: '2026-10-19'
generated_by: scibok-curation
extracted_by: claude-code
verified_by: scibok-deep-audit-2026-10-19
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/bosonic-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-10-19 — failed; five additional replacement candidates rejected"
figure_reviewed_at: "2026-10-19T14:13:00+00:00"
---

> **Note:** This is a **category entry** covering the bosonic-qubit paradigm. Individual encodings have their own detailed entries, including [[cat-codes]], [[binomial-codes]], [[gkp-codes]], and [[dual-rail-superconducting-qubit]].

## Figure

![[bosonic-qubit-figure.png]]

## Description

A **bosonic qubit** encodes quantum information in the Hilbert space of one or more harmonic-oscillator modes, typically superconducting microwave cavities or optical modes. Rather than identifying the qubit with two energy levels of one nonlinear element, bosonic encodings choose a two-dimensional logical subspace inside a much larger oscillator space. That redundancy can make dominant errors—especially photon loss—correctable, detectable as erasures, or strongly biased toward one logical Pauli channel.

In circuit QED, a long-lived cavity is commonly coupled to a nonlinear ancilla such as a transmon or fluxonium. The ancilla supplies number-selective control, syndrome extraction, and readout, but it can also import dephasing, loss, and unwanted Kerr nonlinearities into the storage mode. Bosonic-QEC design therefore concerns both the logical code words and the control architecture that manipulates them without destroying their error structure.

Important encoding families include:

- **Cat codes** ([[cat-codes]]): coherent-state superpositions whose engineered stabilization produces a strongly biased logical noise channel. Depending on the code convention, photon loss either changes a tracked parity sector or acts primarily as a logical phase error. The Kerr-cat variant ([[kerr-cat-qubit]]) uses driven nonlinearity for stabilization.
- **Binomial codes** ([[binomial-codes]]): finite superpositions of Fock states chosen so that specified orders of loss, gain, and dephasing satisfy the quantum error-correction conditions.
- **GKP codes** ([[gkp-codes]]): grid states in oscillator phase space that convert small displacement errors in both quadratures into correctable shifts.
- **Dual-rail cavity codes** ([[dual-rail-superconducting-qubit]]): a single excitation shared by two modes, with photon loss leaving the code space and therefore becoming a detectable erasure.

Bosonic qubits have achieved **beyond-break-even quantum error correction**, meaning that an encoded memory outlives the best relevant unencoded component under the same comparison. The frontier has since moved from protected idling toward scalable concatenation, error-transparent control, and bias-preserving entangling gates.

## Hamiltonian

The bare storage mode is a quantum harmonic oscillator (with its constant zero-point energy omitted):

$$H_{\text{osc}} = \hbar\omega_c\,a^\dagger a$$

where $a$ and $a^\dagger$ are annihilation and creation operators. For a cavity whose dominant error is single-photon loss, the open-system dynamics contains the collapse operator $L_1=\sqrt{\kappa_1}\,a$. A more complete umbrella model also includes dephasing, $L_\phi=\sqrt{\kappa_\phi}\,a^\dagger a$, plus ancilla-induced channels.

In the two-level approximation for a dispersively coupled ancilla, a representative Hamiltonian is

$$H_{\text{disp}} = \hbar\omega_c\,a^\dagger a + \hbar\omega_q\,|e\rangle\langle e| - \hbar\chi\,a^\dagger a\,|e\rangle\langle e|,$$

where the sign of $\chi$ follows the displayed convention. The number-dependent ancilla transition enables parity or modular-quadrature measurements and conditional control. There is no single universal “bosonic-code Hamiltonian”: cat stabilization adds driven nonlinear or dissipative terms, GKP protocols use conditional displacements and feedback, and dual-rail gates use beam-splitter and dispersive interactions between modes.

## Motivation

- **Hardware efficiency**: A single high-quality cavity mode replaces many physical qubits for error correction.
- **Engineered error structure**: Photon loss, small displacements, or biased phase errors can be targeted by the encoding; which channel dominates is device- and code-dependent.
- **Beyond break-even QEC**: Multiple bosonic codes have demonstrated logical qubit lifetimes exceeding the best uncorrected encodings.
- **Compatibility with circuit QED**: The mature superconducting circuit platform provides universal control of cavity modes via ancilla transmons.
- **Modularity**: Bosonic qubits can serve as logical building blocks for concatenated architectures (bosonic code + surface code).

## Experimental Status

**Cat codes — Ofek et al. (2016):**
- First bosonic break-even demonstration, using repeated photon-parity tracking in a 3D superconducting cavity.

**Binomial codes — Hu et al. (2019):**
- Repetitive correction of single-photon loss together with a universal single-logical-qubit gate set; the reported average process fidelity was 97%.

**GKP codes — Campagne-Ibarcq et al. (2020) and Sivak et al. (2023):**
- Established repeated stabilization of a cavity GKP qubit and then real-time QEC beyond break-even, with coherence gain $G=2.27\pm0.07$ over the best constituent.

**Dual-rail erasure qubits — Chou et al. (2024):**
- Demonstrated logical SPAM error at the 0.01% level and detected more than 99% of cavity-decay events as erasures.

**Concatenated cat-code memory — Putterman et al. (2025):**
- Combined five stabilized bosonic cat qubits with a distance-5 repetition code. The phase-flip correction operated below threshold, with a minimum measured logical error of $1.65(3)\%$ per cycle at distance 5.

**Trapped-ion GKP logic — Matsos et al. (2025):**
- Deterministically implemented an energy-preserving universal logical gate set on finite-energy GKP states encoded in two motional modes of a trapped ion, including the first two-logical-qubit GKP entangling gate and direct GKP Bell-state preparation from vacuum.

**Error-structured logical operations — 2026:**
- Roy et al. demonstrated an error-semitransparent $\{X,H,T\}$ gate set and a fivefold reduction of infidelity conditioned on photon loss.
- D-Wave Quantum Inc. demonstrated a roughly 500 ns dual-rail cavity CZ with about 0.5% erasure probability, residual Pauli errors below 0.1%, and bit flips at the $10^{-6}$ level.
- Copetudo et al. reported a direct Raman-assisted controlled-phase interaction between microwave photons without populating the nonlinear coupler (preprint).

**Fully planar bosonic QEC — Jha et al. (2026 preprint):**
- Demonstrated finite-energy GKP state preparation and measurement-free stabilization in an on-chip Archimedean spiral resonator controlled by a heavy-fluxonium ancilla. The corrected logical lifetime improved by $1.59\pm0.05$ on average across the three Pauli axes, establishing the first standalone bosonic QEC demonstration in a fully planar superconducting circuit.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Cavity single-photon lifetime | $1.22$ ms | Coaxial 3D memory cavity coupled to a transmon | [Reagor et al. 2016](https://doi.org/10.1103/PhysRevB.94.014506) |
| GKP QEC coherence gain | $2.27\pm0.07$ | Relative to the best constituent in the same device | [Sivak et al. 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| Binomial logical-gate process fidelity | 97% average | Universal single-logical-qubit gate set under the reported protocol | [Hu et al. 2019](https://doi.org/10.1038/s41567-018-0414-3) |
| Dual-rail logical SPAM error | 0.01% level | With integrated erasure detection | [Chou et al. 2024](https://doi.org/10.1038/s41567-024-02539-4) |
| Detected cavity-decay events | $>99\%$ | Dual-rail decay flagged as erasure | [Chou et al. 2024](https://doi.org/10.1038/s41567-024-02539-4) |
| Distance-5 logical error per cycle | $1.65(3)\%$ | Concatenated cat + repetition-code memory | [Putterman et al. 2025](https://doi.org/10.1038/s41586-025-08642-7) |
| Trapped-ion GKP logical gates | 0.960 single-qubit process fidelity; 0.680 two-qubit CZ process fidelity; 0.842 Bell-state fidelity | Deterministic, energy-preserving control of finite-energy GKP states in two motional modes | [Matsos et al. 2025](https://doi.org/10.1038/s41567-025-03002-8) |
| Dual-rail CZ | $\sim500$ ns; $\sim0.5\%$ erasure; $<0.1\%$ residual Pauli error | Bias-preserving cavity-qubit entangling gate | [D-Wave Quantum Inc. 2026](https://doi.org/10.1038/s41586-026-10822-y) |
| Photon-loss-conditioned gate infidelity | 5× reduction | Error-semitransparent logical $\{X,H,T\}$ control | [Roy et al. 2026](https://doi.org/10.1038/s41467-026-78317-y) |
| Fully planar GKP QEC lifetime gain | $1.59\pm0.05$ | Measurement-free QEC with a heavy-fluxonium ancilla and on-chip spiral resonator | [Jha et al. 2026](https://arxiv.org/abs/2609.26880) |

## References

### Reviews
- A. Joshi, K. Noh, and Y. Y. Gao, "Quantum information processing with bosonic qubits in circuit QED," [Quantum Sci. Technol. **6**, 033001 (2021)](https://doi.org/10.1088/2058-9565/abe989)

### Key experimental milestones
- N. Ofek et al., "Extending the lifetime of a quantum bit with error correction in superconducting circuits," [Nature **536**, 441 (2016)](https://doi.org/10.1038/nature18949)
- P. Campagne-Ibarcq et al., "Quantum error correction of a qubit encoded in grid states of an oscillator," [Nature **584**, 368 (2020)](https://doi.org/10.1038/s41586-020-2603-3)
- L. Hu et al., "Quantum error correction and universal gate set operation on a binomial bosonic logical qubit," [Nature Physics **15**, 503 (2019)](https://doi.org/10.1038/s41567-018-0414-3)
- V. V. Sivak et al., "Real-time quantum error correction beyond break-even," [Nature **616**, 50 (2023)](https://doi.org/10.1038/s41586-023-05782-6)
- K. S. Chou et al., "A superconducting dual-rail cavity qubit with erasure-detected logical measurements," [Nature Physics **20**, 1454 (2024)](https://doi.org/10.1038/s41567-024-02539-4)
- H. Putterman et al., "Hardware-efficient quantum error correction via concatenated bosonic qubits," [Nature **638**, 927 (2025)](https://doi.org/10.1038/s41586-025-08642-7)
- V. G. Matsos et al., "Universal quantum gate set for Gottesman–Kitaev–Preskill logical qubits," [Nature Physics **21**, 1664 (2025)](https://doi.org/10.1038/s41567-025-03002-8)
- S. Roy, O. C. Wetherbee, and V. Fatemi, "Error semitransparent universal control of a bosonic logical qubit," [Nature Communications (2026)](https://doi.org/10.1038/s41467-026-78317-y)
- D-Wave Quantum Inc., "An entangling gate for dual-rail erasure qubits," [Nature **656**, 47 (2026)](https://doi.org/10.1038/s41586-026-10822-y)
- S. R. Jha et al., "Bosonic Error Correction with Fluxonium," [arXiv:2609.26880 (2026)](https://arxiv.org/abs/2609.26880)

## Linked Papers

- [[copetudo-2026-a-direct-controlled-phase-gate]]
- [[campagneibarcq-2020-error-correction-qubit]]
- [[chou-2024-superconducting-dual-rail]]
- [[d-wave-quantum-2026-entangling-dual-rail-gate]]
- [[hu-2019-binomial-bosonic-logical-qubit]]
- [[joshi-2021-information-processing-bosonic]]
- [[jha-2026-bosonic-error-correction-fluxonium]]
- [[matsos-2025-universal-gkp-logical-gates]]
- [[ofek-2016-extending-lifetime-bit]]
- [[putterman-2025-hardware-efficient-bosonic-qec]]
- [[reagor-2016-quantum-memory-millisecond]]
- [[roy-2026-error-semitransparent-bosonic-control]]
- [[sivak-2023-real-time-error]]

## Evergreen context

- [[bosonic-code-hierarchy]] — the most direct evergreen map of the main bosonic code families
- [[dispersive-readout-mechanism]] — the operational primitive behind cavity-transmon parity checks, photon-number-resolved ancilla measurements, and real-time bosonic syndrome extraction
- [[noise-bias-and-asymmetric-error-channels]] — important for cat-style bosonic protection
- [[erasure-error-vs-pauli-error]] — important when comparing bosonic loss channels to standard qubit noise models

## Related Entries

- [[cat-codes]] — coherent state superposition encoding
- [[binomial-codes]] — Fock state superposition encoding with binomial coefficients
- [[gkp-codes]] — grid state encoding in phase space
- [[kerr-cat-qubit]] — driven-dissipative cat code variant
- [[circuit-qed]] — hardware platform
- [[transmon]] — ancilla qubit used for bosonic state preparation, control, and readout
- [[fluxonium]] — long-lived nonlinear ancilla used in the first fully planar standalone bosonic-QEC demonstration
- [[dual-rail-superconducting-qubit]] — two-mode bosonic encoding that converts photon loss into a detected erasure
- [[erasure-qubit]] — system-level context for exploiting detected leakage or loss
- [[trapped-ion-qubit]] — platform context for mechanical-mode GKP state preparation and logical gates
