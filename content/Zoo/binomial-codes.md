---
title: Binomial Codes
entry_type: encoding
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2016
first_demonstrated_year: 2016
keywords:
  - binomial
  - bosonic code
  - superconducting
  - fault-tolerant
  - quantum error correction
  - cavity QED
influence_score: 0.78
last_updated: '2026-04-02'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: scibok-deep-audit-2026-04-02
---

## Figure

![[binomial-codes-figure.png]]

## Description

**Binomial codes** are a family of bosonic quantum error-correcting codes that encode a logical qubit in weighted superpositions of Fock states of a single harmonic oscillator mode, typically a superconducting microwave cavity. The code words use Fock states spaced by $S+1$ with coefficients given by square roots of binomial coefficients, enabling exact correction of errors that are polynomial up to a specific degree in bosonic creation and annihilation operators.

The simplest binomial code protecting against single photon loss ($L=1$) encodes the logical qubit as:

$$|0_L\rangle = \frac{1}{\sqrt{2}}(|0\rangle + |4\rangle), \quad |1_L\rangle = |2\rangle$$

The general code words take the form $|W_{\uparrow/\downarrow}\rangle \propto \sum_p \binom{N+1}{p}^{1/2} |(S+1)p + \delta_{\uparrow/\downarrow}\rangle$, where the spacing parameter $S$ and order $N$ determine how many photon loss ($L$), gain ($G$), and dephasing ($D$) events can be exactly corrected, subject to $N+1 \geq 2(L+G) + D$.

The physical platform consists of a long-lifetime 3D aluminum cavity coupled to a transmon ancilla via circuit QED. The transmon provides the nonlinearity needed for universal control of the bosonic mode, including state preparation, error syndrome extraction via photon number parity measurement ($e^{i\pi a^\dagger a}$), and conditional recovery operations. The logical states are constructed from Fock states of the **same generalized photon number parity**, so that photon loss events map the code space to an orthogonal error subspace detectable by parity measurement.

Binomial codes are closely related to **cat codes** (which use coherent state superpositions) but offer several advantages: smaller mean photon number, exact orthonormality of code words, and an explicit unitary repumping operation to restore lost energy.

## Hamiltonian

The cavity mode is a quantum harmonic oscillator with annihilation operator $a$. The dominant error channel is amplitude damping (photon loss), described by the Lindblad operator $\sqrt{\kappa}\,a$ where $\kappa$ is the single-photon loss rate.

The error correction condition for the binomial code is:

$$\langle W_\mu | a^{\dagger j} a^k | W_\nu \rangle = C_{jk}\,\delta_{\mu\nu}$$

for all correctable error operators $a^{\dagger j} a^k$ with $j+k \leq N$. The code is stabilized by the generalized parity operator $e^{i 2\pi \hat{n}/(S+1)}$, where $\hat{n} = a^\dagger a$ is the photon number operator.

For the simplest single-loss-correcting code, the parity operator $(-1)^{\hat{n}}$ has eigenvalue $+1$ on both logical states (even Fock states) and $-1$ after a single photon loss (odd Fock states), enabling non-destructive error detection.

## Motivation

- Provides a hardware-efficient bosonic quantum error correction scheme requiring only a **single cavity mode** plus an ancilla transmon, avoiding the overhead of multi-qubit surface codes.
- The dominant error channel (photon loss) is well-characterized and detectable via simple parity measurements, enabling a streamlined QEC cycle.
- Demonstrated **beyond break-even** error correction: the logical qubit lifetime exceeds that of any individual component in the system.
- Smaller mean photon number than cat codes for equivalent error protection, reducing sensitivity to higher-order nonlinearities.
- Compatible with the well-developed circuit QED platform and 3D cavity technology at Yale and elsewhere.

## Experimental Status

**Original proposal — Michael et al. (2016):**
- Introduced the binomial code family with explicit constructions for correcting photon loss, gain, and dephasing errors.
- Showed codes are realizable with existing superconducting circuit technology.

**Break-even QEC — Ofek et al. (2016):**
- Demonstrated that a binomial-code-encoded logical qubit in a 3D aluminum cavity can have a lifetime exceeding the best uncorrected encoding in the same system.
- Achieved logical error rate below break-even using real-time parity feedback.

**Universal gate set — Heeres et al. (2017):**
- Implemented a universal gate set on a logical qubit encoded in an oscillator using the binomial code framework.
- Demonstrated high-fidelity logical operations with active error detection.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Logical error rate | Below break-even | Ofek et al. 2016 | [Ofek et al. 2016](https://doi.org/10.1038/nature18949) |
| Cavity $T_1$ | >1 ms | 3D machined aluminum cavity | [Ofek et al. 2016](https://doi.org/10.1038/nature18949) |
| QEC cycle time | ~1–5 μs | Parity measurement + feedback | — |
| Fock space size | $N \leq 10$ | For single-loss-correcting code | — |
| Ancilla (transmon) $T_1$ | 50–200 μs | Limits QEC performance | — |
| Operating temperature | 10–20 mK | Dilution refrigerator | — |

## References

### Original proposal
- M. H. Michael, M. Silveri, R. T. Brierley, V. V. Albert, J. Salmilehto, L. Jiang, and S. M. Girvin, "New class of quantum error-correcting codes for a bosonic mode," [Phys. Rev. X **6**, 031006 (2016)](https://doi.org/10.1103/PhysRevX.6.031006) — [arXiv:1602.00008](https://arxiv.org/abs/1602.00008)

### Experimental demonstrations
- N. Ofek, A. Petrenko, R. Heeres, P. Reinhold, Z. Leghtas, B. Vlastakis, Y. Liu, L. Frunzio, S. M. Girvin, L. Jiang, M. Mirrahimi, M. H. Devoret, and R. J. Schoelkopf, "Extending the lifetime of a quantum bit with error correction in superconducting circuits," [Nature **536**, 441 (2016)](https://doi.org/10.1038/nature18949)
- R. W. Heeres, P. Reinhold, N. Ofek, L. Frunzio, L. Jiang, M. H. Devoret, and R. J. Schoelkopf, "Implementing a universal gate set on a logical qubit encoded in an oscillator," [Nat. Commun. **8**, 94 (2017)](https://doi.org/10.1038/s41467-017-00045-1)

### Related theory
- P. T. Cochrane, G. J. Milburn, and W. J. Munro, "Macroscopically distinct quantum-superposition states as a bosonic code for amplitude damping," [Phys. Rev. A **59**, 2631 (1999)](https://doi.org/10.1103/PhysRevA.59.2631)

## Linked Papers

- [[michael-2016-binomial-codes]]

## Related Entries

- [[cat-codes]] — related bosonic code using coherent state superpositions
- [[gkp-codes]] — related bosonic code using grid states in phase space
- [[circuit-qed]] — hardware platform for cavity-transmon implementation
- [[bosonic-qubit]] — parent category for bosonic encodings
- [[transmon]] — ancilla qubit used for binomial code state preparation and error syndrome extraction
