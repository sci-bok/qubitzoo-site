---
title: GKP Qubit (Gottesman-Kitaev-Preskill Code)
entry_type: qubit
technology_family: Superconducting
status: demonstrated
first_proposed_year: 2001
first_demonstrated_year: 2019
keywords:
- gkp
- gottesman kitaev preskill
- bosonic code
- grid state
- displacement error
- squeezed state
influence_score: 0.84
last_updated: '2026-04-30'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-30
figure_reviewed: true
---

## Figure

![[gkp-codes-figure.png]]

## Description

The GKP (Gottesman-Kitaev-Preskill) code, proposed in 2001, encodes a qubit in a single bosonic mode using a square lattice in dimensionless phase space. In the common convention with $[\hat{q},\hat{p}] = i$, the ideal logical codewords are comb states in $q$:

$$|0_L\rangle \propto \sum_{s\in\mathbb{Z}} |q = 2s\sqrt{\pi}\rangle, \qquad |1_L\rangle \propto \sum_{s\in\mathbb{Z}} |q = (2s+1)\sqrt{\pi}\rangle$$

The peaks are separated by $2\sqrt{\pi}$, and $|1_L\rangle$ is shifted by $\sqrt{\pi}$ relative to $|0_L\rangle$. Small shifts in either quadrature with magnitude below about $\sqrt{\pi}/2$ can therefore be diagnosed by modular-position and modular-momentum syndrome measurements.

Ideal GKP states would require infinite energy, so experiments realize approximate finite-energy versions with narrow peaks inside a broad envelope. This makes the code especially attractive for bosonic hardware, because photon loss, dephasing, and thermal noise map naturally onto small displacement errors. The code has now been realized in trapped-ion motion and in superconducting cavities, with the latter delivering beyond-break-even quantum error correction first for qubits and then for higher-dimensional qudits.

## Hamiltonian

GKP is a code defined on a harmonic oscillator, not a unique hardware Hamiltonian. The underlying mode is typically described by

$$H_0 = \frac{\omega}{2}(\hat{q}^2 + \hat{p}^2)$$

in dimensionless quadratures with $[\hat{q},\hat{p}] = i$. The square-lattice GKP code itself is specified by the commuting stabilizer displacements

$$S_q = e^{2i\sqrt{\pi}\hat{q}}, \qquad S_p = e^{-2i\sqrt{\pi}\hat{p}}$$

with ideal code states satisfying $S_q|\psi\rangle = S_p|\psi\rangle = |\psi\rangle$. A convenient logical Pauli choice is

$$\bar{Z} = e^{i\sqrt{\pi}\hat{q}}, \qquad \bar{X} = e^{-i\sqrt{\pi}\hat{p}}$$

so that $\bar{Z}$ distinguishes the even and odd $q$ combs while $\bar{X}$ shifts the lattice by $\sqrt{\pi}$. Finite squeezing broadens each peak and introduces nonzero overlap tails, which set the practical logical error rate and make repeated syndrome extraction essential.

## Motivation

GKP codes are compelling because they protect against small displacement noise in both quadratures at once. That is the native error language of many bosonic systems, especially long-lived cavity modes. Relative to cat and binomial encodings, GKP offers especially clean Gaussian-noise correction and is the bosonic code family with the clearest experimental path to fault-tolerant continuous-variable architectures, including surface-GKP concatenations and higher-dimensional qudit encodings.

## Experimental Status

**First realization in trapped-ion motional mode — Flühmann et al. (2019):**
- Prepared approximate GKP states in the motional mode of a trapped $^{40}\text{Ca}^+$ ion
- Demonstrated stabilizer measurements and small displacement error correction
- Verified the grid structure via Wigner-function tomography

**Superconducting cavity realization — Campagne-Ibarcq et al. (2020):**
- Prepared GKP states in a 3D superconducting microwave cavity using a transmon ancilla
- Demonstrated logical single-qubit SBS displacement gates with 99.7% fidelity
- Established real-time GKP error correction in circuit QED

**Beyond-break-even logical qubit — Sivak et al. (2023):**
- Achieved a logical lifetime about 2.3 times longer than the best physical component
- Demonstrated repeated real-time GKP error correction beyond break-even
- Used optimized control and feedback in a cavity-transmon platform

**Finite-energy two-qubit gate theory — Rojkov et al. (2024):**
- Analyzed entangling operations that remain well behaved for realistic finite-energy GKP states
- Clarified why ideal-code gate recipes must be modified for physical GKP wavefunctions

**Beyond-break-even qudits — Brock et al. (2025):**
- Extended bosonic GKP error correction beyond qubits to qutrit and ququart encodings
- Reported logical gains of $1.82 \pm 0.03$ for qutrits and $1.87 \pm 0.03$ for ququarts
- No later 2026 experimental benchmark exceeding this result was found during this audit; 2026 updates are theory and state-preparation advances rather than a new record demonstration

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| First experimental realization | 2019 | Approximate GKP states in trapped-ion motion | [Flühmann et al. 2019](https://doi.org/10.1038/s41586-019-0960-6) |
| 1Q logical gate fidelity | 99.7% | SBS displacement gates in a superconducting cavity | [Campagne-Ibarcq et al. 2020](https://doi.org/10.1038/s41586-020-2603-3) |
| Logical lifetime | ~1.8 ms | Cavity-limited logical qubit lifetime in the beyond-break-even experiment | [Sivak et al. 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| Logical lifetime gain (qubit) | 2.3× | Beyond-break-even qubit QEC | [Sivak et al. 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| Logical gain (qutrit) | $1.82 \pm 0.03$ | Beyond-break-even qudit QEC | [Brock et al. 2025](https://doi.org/10.1038/s41586-025-08899-y) |
| Logical gain (ququart) | $1.87 \pm 0.03$ | Beyond-break-even qudit QEC | [Brock et al. 2025](https://doi.org/10.1038/s41586-025-08899-y) |

> **Note:** For bosonic-code entries, "$T_1$" here refers to the logical lifetime of the encoded oscillator qubit, not a bare two-level relaxation time.

## References

### Original proposal
- D. Gottesman, A. Kitaev, and J. Preskill, "Encoding a qubit in an oscillator," [Phys. Rev. A 64, 012310 (2001)](https://doi.org/10.1103/PhysRevA.64.012310) — [arXiv:quant-ph/0008040](https://arxiv.org/abs/quant-ph/0008040)

### Experimental demonstrations
- C. Flühmann et al., "Encoding a qubit in a trapped-ion mechanical oscillator," [Nature 566, 513 (2019)](https://doi.org/10.1038/s41586-019-0960-6) — [arXiv:1807.01033](https://arxiv.org/abs/1807.01033)
- P. Campagne-Ibarcq et al., "Quantum error correction of a qubit encoded in grid states of an oscillator," [Nature 584, 368 (2020)](https://doi.org/10.1038/s41586-020-2603-3) — [arXiv:1907.12487](https://arxiv.org/abs/1907.12487)
- V. V. Sivak et al., "Real-time quantum error correction beyond break-even," [Nature 616, 50 (2023)](https://doi.org/10.1038/s41586-023-05782-6) — [arXiv:2211.09116](https://arxiv.org/abs/2211.09116)
- B. L. Brock et al., "Quantum error correction of qudits beyond break-even," [Nature 641, 612 (2025)](https://doi.org/10.1038/s41586-025-08899-y) — [arXiv:2409.15065](https://arxiv.org/abs/2409.15065)

### Recent theory and control directions
- I. Rojkov et al., "Two-qubit operations for finite-energy Gottesman-Kitaev-Preskill encodings," [Phys. Rev. Lett. 133, 100601 (2024)](https://doi.org/10.1103/PhysRevLett.133.100601) — [arXiv:2305.05262](https://arxiv.org/abs/2305.05262)

## Linked Papers

- [[gottesman-2001-gkp]]
- [[flhmann-2019-encoding-qubit-trapped]]
- [[campagneibarcq-2020-error-correction-qubit]]
- [[sivak-2023-real-time-error]]
- [[brock-2025-quantum-error-correction-qudits-beyond-break-even]]

## Related Entries

- [[bosonic-qubit]] — umbrella entry for oscillator-based logical encodings
- [[cat-codes]] — alternative bosonic code using coherent-state superpositions
- [[binomial-codes]] — another bosonic code family with finite-Fock support
- [[circuit-qed]] — leading superconducting hardware platform for GKP experiments
- [[qubit-readout]] — syndrome extraction and ancilla-assisted measurement context
