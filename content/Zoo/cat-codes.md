---
title: Cat Qubit (Cat Codes)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2001
first_demonstrated_year: 2020
keywords:
- cat qubit
- cat code
- bosonic code
- kerr nonlinearity
- dissipative stabilization
- two-photon drive
- error bias
- coherent-state encoding
influence_score: 0.82
last_updated: '2026-05-11'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-05-11
figure_reviewed: true
---

## Figure

![[cat-codes-figure.png]]

## Description

Cat codes encode a logical qubit in superpositions of coherent states of a bosonic mode, most often a superconducting microwave oscillator. The two quasi-classical states $|\pm\alpha\rangle$ define a protected two-dimensional manifold, while the parity eigenstates

$$|\mathcal{C}_\alpha^\pm\rangle = \mathcal{N}_\pm (|\alpha\rangle \pm |-\alpha\rangle)$$

are the even and odd Schrödinger-cat states built from that manifold.

A source of confusion in this literature is **basis convention**. In the coherent-state basis one often writes the logical states as $|0_L\rangle \approx |\alpha\rangle$ and $|1_L\rangle \approx |-\alpha\rangle$, up to the exponentially small overlap $\langle \alpha | -\alpha \rangle = e^{-2|\alpha|^2}$. In that basis, transitions between the two lobes are **bit flips** and are exponentially suppressed with cat size. In the parity basis $|\mathcal{C}_\alpha^\pm\rangle$, the same physical processes appear as logical phase flips or parity changes. Good cat-code entries must state this convention explicitly.

Modern superconducting cat qubits use either engineered two-photon dissipation or a Kerr-nonlinear oscillator driven by a two-photon pump to stabilize the $|\pm\alpha\rangle$ manifold. This produces strongly biased noise: the rare process of hopping between the two phase-space lobes is exponentially suppressed, while the dominant remaining error channel scales roughly linearly with photon number. That bias is the core reason cat qubits are attractive for low-overhead fault tolerance.

## Hamiltonian

The umbrella cat-code picture is most cleanly expressed in terms of a stabilized manifold rather than a single unique hardware Hamiltonian.

A driven-dissipative cat code is stabilized by the jump operator

$$L = a^2 - \alpha^2,$$

with Lindblad dynamics

$$\dot\rho = \kappa_2\,\mathcal{D}[a^2-\alpha^2]\rho,$$

whose steady-state manifold is spanned by the coherent states $|\pm\alpha\rangle$.

A closely related Hamiltonian realization is the Kerr-cat qubit,

$$H = -K a^{\dagger 2} a^2 + \varepsilon_2 (a^{\dagger 2} + a^2),$$

where the Kerr nonlinearity $K$ and two-photon drive $\varepsilon_2$ create a double-well structure in phase space with semiclassical fixed points near $\pm\alpha$, where $|\alpha|^2 \approx \varepsilon_2/K$.

In the coherent-state basis the physically important scaling is:
- **bit-flip rate** $\Gamma_X \propto e^{-2|\alpha|^2}$ (or more generally exponentially suppressed with cat size),
- **dominant dephasing / phase-flip channel** $\Gamma_Z \sim \kappa_1 |\alpha|^2$ from single-photon loss and related processes.

This basis dependence is why some papers describe cat qubits as suppressing bit flips while others emphasize parity flips in the even/odd-cat basis. The underlying physics is the same.

## Motivation

Most bosonic encodings require substantial active syndrome extraction. Cat qubits instead engineer the hardware so that one logical error channel is strongly suppressed at the physical level. The resulting **biased-noise** model is especially attractive because a simple repetition code can target the dominant channel, potentially lowering fault-tolerance overhead far below unbiased architectures.

Cat codes also sit at a productive middle ground between abstract bosonic-code theory and concrete superconducting hardware. They inherit the large Hilbert space and phase-space intuition of oscillator encodings while remaining compatible with transmon ancillas, resonator readout, and circuit-QED control methods.

## Experimental Status

**Foundational cat-code theory — Mirrahimi et al. (2014):**
- Established the dynamically protected cat-qubit paradigm using two-photon processes.
- Clarified how biased noise emerges from the stabilized two-lobe manifold.

**First experimental exponential bit-flip suppression — Lescanne et al. (2020):**
- Demonstrated dissipatively stabilized cat-qubit dynamics in superconducting hardware.
- Verified the hallmark exponential suppression of bit flips with increasing cat size.

**Controlled Kerr-cat operation — Grimm et al. (2020):**
- Demonstrated stabilization, readout, and gate control of a Kerr-cat qubit.
- Established Kerr-cat hardware as a practical superconducting realization of the broader cat-code idea.

**Protected control beyond 10 s bit-flip time — Réglade et al. (2024):**
- Demonstrated quantum control of a cat qubit while preserving protection.
- Pushed protected bit-flip times beyond 10 seconds.

**Scalable 2D Kerr-cat architecture — Hajr et al. (2024):**
- Demonstrated a high-coherence planar architecture with on-chip filtering.
- Reported 99.6% QND readout for an eight-photon cat and bit-flip times above 1 ms in a 2D-compatible device.

**2025-2026 update:**
- Recent 2025-2026 cat-qubit papers found in this audit were mainly theory or preprint-level control/noise studies.
- No peer-reviewed 2025-2026 hardware benchmark was found that clearly supersedes the 2024 Réglade and Hajr milestones for this umbrella entry.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Protected bit-flip time | >10 s | Controllable superconducting cat qubit in the protected regime | [Réglade et al. 2024](https://doi.org/10.1038/s41586-024-07294-3) |
| Bit-flip time in scalable 2D device | >1 ms | Kerr-cat with cat sizes up to 10 photons | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |
| Phase-flip time | >490 ns | Measured in the protected-control regime; dominant remaining channel | [Réglade et al. 2024](https://doi.org/10.1038/s41586-024-07294-3) |
| QND readout fidelity | 99.6% | Eight-photon cat in a 2D architecture | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049) |
| Cat size $\bar{n}$ | 8-16 photons | Large cats used to access strong bias and long bit-flip lifetimes | [Hajr et al. 2024](https://doi.org/10.1103/PhysRevX.14.041049); [Réglade et al. 2024](https://doi.org/10.1038/s41586-024-07294-3) |
| Operating temperature | 10-20 mK | Superconducting circuit implementations in dilution refrigerators | [Grimm et al. 2020](https://doi.org/10.1038/s41586-020-2587-z) |

## References

### Original proposal
- M. Mirrahimi et al., "Dynamically protected cat-qubits: a new paradigm for universal quantum computation," [New J. Phys. 16, 045014 (2014)](https://doi.org/10.1088/1367-2630/16/4/045014) — [arXiv:1312.2017](https://arxiv.org/abs/1312.2017)

### Experimental demonstrations
- R. Lescanne et al., "Exponential suppression of bit-flips in a qubit encoded in an oscillator," [Nat. Phys. 16, 509 (2020)](https://doi.org/10.1038/s41567-020-0824-x) — [arXiv:1907.11729](https://arxiv.org/abs/1907.11729)
- A. Grimm et al., "Stabilization and operation of a Kerr-cat qubit," [Nature 584, 205 (2020)](https://doi.org/10.1038/s41586-020-2587-z) — [arXiv:1907.12131](https://arxiv.org/abs/1907.12131)
- U. Réglade et al., "Quantum control of a cat qubit with bit-flip times exceeding ten seconds," [Nature 629, 778-783 (2024)](https://doi.org/10.1038/s41586-024-07294-3) — [arXiv:2307.06617](https://arxiv.org/abs/2307.06617)
- A. Hajr et al., "High-Coherence Kerr-Cat Qubit in 2D Architecture," [Phys. Rev. X 14, 041049 (2024)](https://doi.org/10.1103/PhysRevX.14.041049) — [arXiv:2404.16697](https://arxiv.org/abs/2404.16697)

### Related theory
- J. Guillaud and M. Mirrahimi, "Repetition Cat Qubits for Fault-Tolerant Quantum Computation," [Phys. Rev. X 9, 041053 (2019)](https://doi.org/10.1103/PhysRevX.9.041053) — [arXiv:1904.09474](https://arxiv.org/abs/1904.09474)
- S. Puri et al., "Bias-preserving gates with stabilized cat qubits," [Sci. Adv. 6, eaay5901 (2020)](https://doi.org/10.1126/sciadv.aay5901) — [arXiv:1905.00450](https://arxiv.org/abs/1905.00450)

## Linked Papers

- [[mirrahimi-2014-cat-codes]]
- [[lescanne-2020-bit-flip-suppression]]
- [[grimm-2020-kerr-cat]]
- [[reglade-2024-kerr-cat-ten-seconds]]
- [[hajr-2024-high-coherence-kerr-cat]]
- [[guillaud-2019-repetition-cat-qubits]]
- [[puri-2020-bias-preserving-gates]]

## Evergreen context

- [[bosonic-code-hierarchy]] — where cat codes sit relative to GKP and binomial encodings
- [[noise-bias-and-asymmetric-error-channels]] — the central idea behind exponentially biased cat noise
- [[erasure-error-vs-pauli-error]] — useful contrast when comparing bosonic and heralded architectures

## Related Entries

- [[bosonic-qubit]] — umbrella bosonic-encoding context
- [[kerr-cat-qubit]] — the best-developed hardware realization of a cat qubit
- [[gkp-codes]] — alternative bosonic code with grid-state encoding
- [[binomial-codes]] — another bosonic code family
- [[circuit-qed]] — underlying superconducting hardware and control stack
- [[qubit-readout]] — relevant for high-fidelity ancilla and resonator measurement
