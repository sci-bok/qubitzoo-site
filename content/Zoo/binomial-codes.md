---
title: Binomial Codes
entry_type: encoding
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2016
first_demonstrated_year: 2019
keywords:
  - binomial
  - bosonic code
  - superconducting
  - fault-tolerant
  - quantum error correction
  - cavity QED
influence_score: 0.78
last_updated: '2026-05-21'
generated_by: scibok-curation
extracted_by: airtable-seed
verified_by: scibok-manual-2026-05-21
---

## Figure

![[binomial-codes-figure.png]]

## Description

**Binomial codes** are a family of bosonic quantum error-correcting codes that encode a logical qubit in weighted superpositions of Fock states of a single harmonic-oscillator mode, typically a superconducting microwave cavity. The code words use Fock states spaced by $S+1$ with coefficients set by square roots of binomial coefficients, enabling exact correction of bounded combinations of photon loss, gain, and dephasing errors.

The simplest single-loss-correcting binomial code encodes the logical qubit as

$$|0_L\rangle = \frac{|0\rangle + |4\rangle}{\sqrt{2}}, \qquad |1_L\rangle = |2\rangle,$$

so both logical basis states lie in the even-parity subspace while a single photon loss maps them into an orthogonal odd-parity error subspace.

More generally, the logical states are finite Fock-state superpositions of the form $|W_{\uparrow/\downarrow}\rangle \propto \sum_p \sqrt{\binom{N+1}{p}}\, |(S+1)p + \delta_{\uparrow/\downarrow}\rangle$, with parameters chosen so that the Knill-Laflamme conditions hold for the targeted set of bosonic errors. Compared with **cat codes**, binomial codes trade the phase-space intuition of coherent states for exact orthogonality, finite Fock support, and explicit unitary recovery constructions.

In hardware, binomial codes are usually realized in a long-lived cavity dispersively coupled to a transmon ancilla. The ancilla supplies the nonlinearity needed for state preparation, selective-number-dependent phases, parity readout, and conditional recovery pulses.

## Hamiltonian

At the umbrella-entry level, binomial codes are defined by their code words and correctable error algebra rather than by a unique microscopic Hamiltonian. For the dominant superconducting cavity-transmon realization, a representative driven dispersive model is

$$
H/\hbar = \omega_c a^\dagger a + \omega_q |e\rangle\langle e| - \frac{K}{2} a^{\dagger 2} a^2 + \chi a^\dagger a\, |e\rangle\langle e| + H_{\mathrm{drive}}(t),
$$

where $a$ annihilates a cavity photon, $\omega_c$ is the cavity frequency, $\omega_q$ the ancilla transition frequency, $K$ the cavity self-Kerr, and $\chi$ the dispersive shift used for number-resolved control and parity mapping.

The dominant noise channel is amplitude damping with Lindblad jump operator $\sqrt{\kappa}\,a$. Binomial-code design enforces

$$\langle W_\mu | E_i^\dagger E_j | W_\nu \rangle = C_{ij}\,\delta_{\mu\nu}$$

for the chosen correctable error set $\{E_i\}$, so the syndrome can be extracted without revealing logical information. For the canonical $L=1$ code, ordinary photon-number parity $(-1)^{\hat n}$ is sufficient: both logical states have even parity, and a single photon loss flips the state into the odd-parity sector.

## Motivation

- Provides a hardware-efficient bosonic QEC scheme using a **single cavity mode** plus an ancilla transmon instead of many physical qubits.
- Targets the physically dominant cavity error channel, photon loss, with simple syndrome extraction via generalized parity measurements.
- Uses exact, finite-dimensional Fock-state code words rather than approximate coherent-state manifolds.
- Requires smaller mean photon number than many cat-code realizations at similar protection order.
- Fits naturally into the mature circuit-QED toolchain of long-lived 3D cavities, dispersive control, and high-fidelity ancilla readout.

## Experimental Status

**Original proposal — Michael et al. (2016):**
- Introduced the binomial-code family and showed how finite Fock-state superpositions can exactly correct bounded combinations of loss, gain, and dephasing errors.
- Gave explicit recovery constructions tailored to cavity-based bosonic hardware.

**First binomial-code logical qubit with QEC and universal control — Hu et al. (2019):**
- Demonstrated repetitive quantum error correction on a binomial bosonic logical qubit in a superconducting cavity-transmon device.
- Reported a universal single-logical-qubit gate set with 97% average process fidelity.
- Showed the corrected logical qubit lifetime improved by a factor of 2.8 over the uncorrected logical qubit, with Ramsey coherence improved by roughly a factor of 2.

**Recent direction check (2024-2026):**
- A targeted audit search did not uncover a newer peer-reviewed binomial-code experiment that clearly supersedes Hu et al. (2019) on the core lifetime-and-control benchmarks.
- Recent activity is mainly on control and characterization proposals, for example Li et al. (2026) on nonadiabatic geometric control for bosonic binomial codes.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Average logical-gate process fidelity | 97% | Universal single-logical-qubit gate set on a binomial bosonic logical qubit | [Hu et al. 2019](https://doi.org/10.1038/s41567-018-0414-3) |
| Corrected logical-qubit lifetime enhancement | 2.8× | Repetitive QEC versus the uncorrected logical qubit | [Hu et al. 2019](https://doi.org/10.1038/s41567-018-0414-3) |
| Corrected Ramsey coherence enhancement | ~2× | Corrected versus uncorrected logical qubit | [Hu et al. 2019](https://doi.org/10.1038/s41567-018-0414-3) |
| Canonical $L=1$ code words | $|0_L\rangle = (|0\rangle+|4\rangle)/\sqrt{2}$, $|1_L\rangle = |2\rangle$ | Minimal single-loss-correcting binomial encoding | [Michael et al. 2016](https://doi.org/10.1103/PhysRevX.6.031006) |

## References

### Original proposal
- M. H. Michael, M. Silveri, R. T. Brierley, V. V. Albert, J. Salmilehto, L. Jiang, and S. M. Girvin, "New class of quantum error-correcting codes for a bosonic mode," [Phys. Rev. X **6**, 031006 (2016)](https://doi.org/10.1103/PhysRevX.6.031006) — [arXiv:1602.00008](https://arxiv.org/abs/1602.00008)

### Experimental demonstration
- L. Hu, Y. Ma, W. Cai, X. Mu, Y. Xu, W. Wang, Y. Wu, H. Wang, Y. P. Song, C.-L. Zou, and L. Sun, "Quantum error correction and universal gate set operation on a binomial bosonic logical qubit," [Nat. Phys. **15**, 503-508 (2019)](https://doi.org/10.1038/s41567-018-0414-3)

### Related theory and recent direction
- P. T. Cochrane, G. J. Milburn, and W. J. Munro, "Macroscopically distinct quantum-superposition states as a bosonic code for amplitude damping," [Phys. Rev. A **59**, 2631-2634 (1999)](https://doi.org/10.1103/PhysRevA.59.2631)
- D.-S. Li, Y. Xiao, Y. Wang, Y. Liu, Z.-C. Shi, Y.-H. Chen, Y.-H. Kang, and Y. Xia, "Noise-resilient nonadiabatic geometric quantum computation for bosonic binomial codes," [arXiv:2603.17250](https://arxiv.org/abs/2603.17250)

## Linked Papers

- [[michael-2016-binomial-codes]]
- [[hu-2019-binomial-bosonic-logical-qubit]]
- [[li-2026-noise-resilient-nonadiabatic-geometric-quantum]]

## Evergreen context

- [[bosonic-code-hierarchy]] — the comparison class for cat and GKP encodings
- [[erasure-error-vs-pauli-error]] — useful when distinguishing loss-dominated oscillator channels from Pauli abstractions

## Related Entries

- [[cat-codes]] — related bosonic code using coherent-state superpositions
- [[gkp-codes]] — related bosonic code using grid states in phase space
- [[circuit-qed]] — hardware platform for cavity-transmon implementation
- [[bosonic-qubit]] — parent category for bosonic encodings
- [[transmon]] — ancilla qubit used for binomial-code control and syndrome extraction
