---
title: Bacon-Shor Code
entry_type: encoding
technology_family: Codes
status: demonstrated
figure_reviewed: true
first_proposed_year: 2006
first_demonstrated_year: 2021
keywords:
- Bacon-Shor
- subsystem code
- quantum error correction
- gauge qubits
- concatenation
- weight-2 measurements
influence_score: 0.72
last_updated: '2026-06-05'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-audit-2026-06-05
---

## Figure

![[bacon-shor-code-figure.png]]

## Description

The Bacon-Shor code is a family of subsystem CSS quantum error-correcting codes defined on an $m_1 \times m_2$ grid of physical qubits, with parameters $[[m_1m_2,1,\min(m_1,m_2)]]$. In the symmetric square case this reduces to $[[m^2,1,m]]$. Its defining practical feature is that syndrome extraction is built from weight-2 gauge measurements rather than direct high-weight stabilizer measurements.

A convenient convention is to use X-type gauge operators on **vertical** nearest-neighbor pairs and Z-type gauge operators on **horizontal** nearest-neighbor pairs. The high-weight stabilizers are products of those weight-2 gauge operators across adjacent rows or adjacent columns. Because the gauge subsystem does not store logical information, multiple gauge configurations correspond to the same encoded logical state.

Operationally, Bacon-Shor is attractive when high-weight parity checks are difficult but repeated low-weight checks are natural, or when the physical noise is strongly biased so rectangular Bacon-Shor blocks can preferentially protect the dominant error channel.

## Hamiltonian and Gauge Structure

Let qubits be indexed by row $r \in \{1,\dots,m_1\}$ and column $c \in \{1,\dots,m_2\}$. A standard gauge-generator choice is

$$g^X_{r,c} = X_{r,c}X_{r+1,c}, \qquad g^Z_{r,c} = Z_{r,c}Z_{r,c+1},$$

for $r=1,\dots,m_1-1$ and $c=1,\dots,m_2-1$ where defined. The commuting stabilizers are products of these gauge generators:

$$S^X_r = \prod_{c=1}^{m_2} X_{r,c}X_{r+1,c}, \qquad S^Z_c = \prod_{r=1}^{m_1} Z_{r,c}Z_{r,c+1}.$$

A representative commuting code Hamiltonian is therefore

$$H_{\mathrm{code}} = -\sum_{r=1}^{m_1-1} S^X_r - \sum_{c=1}^{m_2-1} S^Z_c,$$

whose code space is the simultaneous $+1$ eigenspace of all stabilizers. Logical operators can be chosen as a full X string along any row and a full Z string along any column,

$$\bar{X} = \prod_{c=1}^{m_2} X_{r,c}, \qquad \bar{Z} = \prod_{r=1}^{m_1} Z_{r,c},$$

with the choice of row or column equivalent up to multiplication by gauge operators. At the operator level one can also write a compass-model-like gauge Hamiltonian $H_{\mathrm{gauge}} = -J_X\sum g^X - J_Z\sum g^Z$, but that noncommuting weight-2 model is distinct from the commuting stabilizer Hamiltonian defining the code space.

## Motivation

- **Low-weight check extraction:** Only weight-2 nearest-neighbor gauge measurements are required, avoiding direct measurement of high-weight stabilizers.
- **Bias-friendly geometry:** Rectangular $m_1 \times m_2$ variants can protect X and Z errors asymmetrically, matching hardware with strongly biased noise.
- **Subsystem flexibility:** Gauge degrees of freedom simplify measurement design and make the code a useful bridge between Shor-style constructions and modern subsystem/floquet ideas.
- **Historical importance:** Bacon-Shor remains one of the cleanest pedagogical examples of subsystem fault tolerance and gauge-based QEC.

## Experimental Status

**Fault-tolerant trapped-ion demonstration, Egan et al. (2021):**
- Implemented a $[[9,1,3]]$ Bacon-Shor logical qubit on a 13-ion trapped-ion processor.
- Demonstrated fault-tolerant preparation, measurement, rotation, and stabilizer measurement using weight-2 gauge checks.
- Reported an average state-preparation-and-measurement error of $0.6\%$ and an average logical Clifford-gate error of $0.3\%$ after error correction.
- Demonstrated magic-state preparation above the distillation threshold, but did **not** yet realize a long-lived repeatedly stabilized logical memory.

**Recent Bacon-Shor-family developments (2024-2025):**
- Alam and Rieffel showed that a period-4 measurement schedule can turn Bacon-Shor into a Floquet code hosting additional **dynamical logical qubits** while keeping low-weight checks.
- Sun et al. experimentally realized a 3×3 **Floquet-Bacon-Shor** code on a superconducting processor, including repeated error detection, logical gates on the dynamical qubit, and an error-detected logical Bell state with $75.9\%$ fidelity.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Code parameters | $[[m_1m_2,1,\min(m_1,m_2)]]$ | Square case is $[[m^2,1,m]]$ | [Bacon 2006](https://doi.org/10.1103/PhysRevA.73.012340) |
| Gauge measurement weight | 2 | Vertical XX and horizontal ZZ nearest-neighbor checks | [Bacon 2006](https://doi.org/10.1103/PhysRevA.73.012340) |
| Stabilizer weight | $2m_2$ for X, $2m_1$ for Z | Inferred from products of gauge outcomes rather than measured directly | [Bacon 2006](https://doi.org/10.1103/PhysRevA.73.012340) |
| Demonstrated FT SPAM error | $0.6\%$ | Average state-preparation and measurement error after error correction in the 13-ion $[[9,1,3]]$ demo | [Egan et al. 2021](https://doi.org/10.1038/s41586-021-03928-y) |
| Demonstrated FT logical Clifford error | $0.3\%$ | Average logical Clifford-gate error after error correction in the same demo | [Egan et al. 2021](https://doi.org/10.1038/s41586-021-03928-y) |
| Floquet-Bacon-Shor Bell-state fidelity | $75.9\%$ | Error-detected Bell state between static and dynamical logical qubits on a 3×3 superconducting lattice | [Sun et al. 2025](https://doi.org/10.1103/425n-6k9s) |

> **Note:** For QEC code entries, metric rows should stay source-backed and should distinguish static Bacon-Shor results from Floquet-Bacon-Shor extensions.

## Scaling Considerations

- **Hardware simplicity:** The main win is the low-weight gauge-check schedule, not a best-in-class unbiased-noise threshold.
- **Asymmetric protection:** Rectangular blocks naturally trade X-versus-Z protection, making Bacon-Shor especially relevant when one error channel dominates.
- **Fault-tolerance caveat:** Because stabilizer values are reconstructed from products of noisy gauge measurements, measurement faults need careful circuit design and decoding.
- **Threshold landscape:** The basic 2D Bacon-Shor family is not the leading choice under generic depolarizing noise, but concatenated, biased-noise, and Floquet variants recover useful operating regimes.

## References

### Original proposal
- D. Bacon, "Operator quantum error-correcting subsystems for self-correcting quantum memories," [Phys. Rev. A 73, 012340 (2006)](https://doi.org/10.1103/PhysRevA.73.012340) — [arXiv:quant-ph/0506023](https://arxiv.org/abs/quant-ph/0506023)

### Fault-tolerance theory
- P. Aliferis and A. W. Cross, "Subsystem fault tolerance with the Bacon-Shor code," [Phys. Rev. Lett. 98, 220502 (2007)](https://doi.org/10.1103/PhysRevLett.98.220502) — [arXiv:quant-ph/0610063](https://arxiv.org/abs/quant-ph/0610063)

### Experimental demonstrations
- L. Egan et al., "Fault-tolerant control of an error-corrected qubit," [Nature 598, 281 (2021)](https://doi.org/10.1038/s41586-021-03928-y) — [arXiv:2009.11482](https://arxiv.org/abs/2009.11482)
- M. S. Alam and E. Rieffel, "Dynamical logical qubits in the Bacon-Shor code," [Phys. Rev. A 112, 022436 (2025)](https://doi.org/10.1103/nfxv-3dp7) — [arXiv:2403.03291](https://arxiv.org/abs/2403.03291)
- X. Sun et al., "Logical Operations with a Dynamical Qubit in Floquet-Bacon-Shor Code," [Phys. Rev. Lett. 135, 220601 (2025)](https://doi.org/10.1103/425n-6k9s) — [arXiv:2503.03867](https://arxiv.org/abs/2503.03867)

## Linked Papers

- [[bacon-2006-bacon-shor]]
- [[aliferis-2007-subsystem-fault-tolerance]]
- [[egan-2021-fault-tolerant-control]]
- [[alam-2025-dynamical-logical-qubits]]
- [[sun-2025-logical-operations-floquet-bacon-shor]]

## Evergreen context

- [[threshold-theorem]] — the big-picture reason Bacon-Shor matters is not that it beats the surface code everywhere, but that it reshuffles the hardware tradeoff around what kinds of checks you can execute reliably.
- [[noise-bias-and-asymmetric-error-channels]] — Bacon-Shor becomes much more compelling when the physical noise is strongly asymmetric and rectangular layouts can lean into that bias.
- [[decoherence-free-subspace]] — useful contrast for the word “subsystem”: Bacon-Shor is an active subsystem code, not passive symmetry protection.

## Related Entries

- [[surface-code-logical-qubit]] — higher threshold under generic depolarizing noise, but a more demanding stabilizer-measurement stack
- [[color-code-logical-qubit]] — alternative logical-code family with different transversal-gate tradeoffs
- [[floquet-codes]] — dynamical-code viewpoint that extends Bacon-Shor with additional logical qubits
- [[trapped-ion-qubit]] — platform of the first fault-tolerant Bacon-Shor demonstration
- [[kerr-cat-qubit]] — a biased-noise hardware modality where asymmetric Bacon-Shor ideas are especially natural
