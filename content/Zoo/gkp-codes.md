---
title: GKP Qubit (Gottesman-Kitaev-Preskill Code)
entry_type: qubit
technology_family: Cross-Platform
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
last_updated: '2026-10-30'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-10-30
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/gkp-codes-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-10-30"
figure_reviewed_at: "2026-10-30T14:07:26.862837+00:00"
---

## Figure

![[gkp-codes-figure.png]]

## Description

The GKP (Gottesman-Kitaev-Preskill) code, proposed in 2001, encodes a qubit in the position/momentum space of a harmonic oscillator using grid states — superpositions of periodically spaced position (or momentum) eigenstates. The ideal logical states are:

$$|0_L\rangle \propto \sum_{s=-\infty}^{\infty} |q = 2s\sqrt{\pi}\rangle, \quad |1_L\rangle \propto \sum_{s=-\infty}^{\infty} |q = (2s+1)\sqrt{\pi}\rangle$$

These states have a comb-like structure in position space with spacing $2\sqrt{\pi}$ and are displaced by $\sqrt{\pi}$ between $|0_L\rangle$ and $|1_L\rangle$. The key property is that small displacement errors $e^{i\xi\hat{p}}$ or $e^{-i\eta\hat{q}}$ (with $|\xi|, |\eta| < \sqrt{\pi}/2$) can be detected and corrected by measuring the stabilizers $e^{2i\sqrt{\pi}\hat{p}}$ and $e^{-2i\sqrt{\pi}\hat{q}}$.

In practice, ideal GKP states have infinite energy. Physical GKP states replace the delta-function comb with finite-width peaks under a finite envelope. A parameter $\Delta$ is often used for the peak width, but its precise definition varies across papers. With the symmetric convention used below, 10 dB of peak squeezing corresponds to $\Delta \approx 0.224$, not $\Delta \approx 0.5$; fault-tolerance thresholds depend on the surrounding architecture and noise model rather than on one universal value of $\Delta$.

GKP states have been realized in trapped-ion motional modes, superconducting microwave cavities, and integrated photonics. Superconducting-cavity experiments have demonstrated beyond-break-even GKP memories, while trapped-ion experiments have demonstrated a universal logical gate set including a two-GKP-qubit entangling gate.

## Hamiltonian

GKP states are eigenstates of the stabilizer operators:

$$S_q = e^{2i\sqrt{\pi}\hat{p}}, \quad S_p = e^{-2i\sqrt{\pi}\hat{q}}$$

with eigenvalue +1. The logical Pauli operators are:

$$\bar{X} = e^{i\sqrt{\pi}\hat{p}}, \quad \bar{Z} = e^{-i\sqrt{\pi}\hat{q}}$$

For a common symmetric finite-energy convention with peak variance $\Delta^2$, the logical-zero position wavefunction is

$$\psi_{0,\Delta}(q) \propto \sum_{s\in\mathbb{Z}} e^{-2\pi\Delta^2 s^2}\exp\!\left[-\frac{(q-2s\sqrt{\pi})^2}{2\Delta^2}\right],$$

with $\psi_{1,\Delta}(q)=\psi_{0,\Delta}(q-\sqrt{\pi})$ up to the corresponding shifted envelope. This keeps the $2\sqrt{\pi}$ logical-comb spacing explicit and avoids mixing the $|0_L\rangle$ and $|1_L\rangle$ peak sets.

Relative to vacuum quadrature variance $1/2$, this convention gives $\text{sq}_\text{dB}=-10\log_{10}(2\Delta^2)$.

## Motivation

GKP codes convert sufficiently small shifts in either phase-space quadrature into discrete syndrome information. Photon loss, thermal noise, and dephasing do not become literal bounded shifts in every regime, but GKP recovery can digitize their leading effects into correctable displacement and Pauli errors. The code is especially attractive because Gaussian operations implement its Clifford gates and because beyond-break-even GKP memories have been demonstrated in superconducting circuits.

## Experimental Status

**First realization in trapped-ion motional mode — Flühmann et al. (2019):**
- Prepared approximate GKP states in the motional mode of a trapped $^{40}\text{Ca}^+$ ion
- Demonstrated stabilizer measurements and small displacement error correction
- Verified grid structure via Wigner function tomography

**Superconducting cavity realization — Campagne-Ibarcq et al. (2020):**
- GKP states prepared in a 3D superconducting microwave cavity using a transmon ancilla
- Demonstrated SBS (small-Big-small) displacement gates with 99.7% single-qubit gate fidelity
- First real-time GKP error correction in a circuit QED platform

**Beyond-break-even QEC — Sivak et al. (2023):**
- Pauli-averaged logical coherence gain $G=2.27\pm0.07$ over the best physical component
- First demonstration of beyond-break-even quantum error correction
- Used real-time feedback with optimized control via reinforcement learning

**Universal trapped-ion logical gates — Matsos et al. (2025):**
- Deterministic finite-energy GKP control in two motional modes of one trapped ion
- Logical single-qubit process fidelity up to 0.960
- First two-GKP-qubit entangling gate, with CZ process fidelity 0.680, and direct Bell-state fidelity 0.842

**Higher-dimensional and photonic GKP states — Brock et al. and Larsen et al. (2025):**
- Beyond-break-even GKP qutrit and ququart memories with gains $1.82\pm0.03$ and $1.87\pm0.03$
- Integrated 1550-nm photonic GKP source with at least four resolved peaks in each quadrature and a $3\times3$ lattice of negative Wigner regions; the reported symmetric effective squeezing was only $0.62\pm0.02$ dB, so the state was not yet fault tolerant

**Planar superconducting GKP QEC — Jha et al. (2026, preprint):**
- Replaced the centimeter-scale 3D cavity/transmon stack with an on-chip spiral resonator controlled by a heavy-fluxonium ancilla
- Demonstrated measurement-free stabilization with logical-lifetime gain $1.59\pm0.05$

**Quasi-deterministic optical GKP generation — Yu et al. (2026):**
- Combined near-deterministic photon-number-state injection, cat-state breeding, homodyne feedforward, and real-time displacement in a time-bin photonic processor
- Generated approximately 2,000 optical GKP states per second while operating at 250 kHz
- Demonstrated a one-dimensional approximate GKP state rather than a full two-dimensional fault-tolerant grid state; further squeezing and lower loss remain necessary for error correction

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Pauli-averaged logical coherence gain | $2.27\pm0.07$ | Beyond-break-even superconducting GKP memory | [Sivak et al. 2023](https://doi.org/10.1038/s41586-023-05782-6) |
| 1Q logical process fidelity | 0.960 | Best reported trapped-ion GKP gate in the cited universal gate set | [Matsos et al. 2025](https://doi.org/10.1038/s41567-025-03002-8) |
| 2Q logical process fidelity | 0.680 | First demonstrated two-GKP-qubit CZ gate | [Matsos et al. 2025](https://doi.org/10.1038/s41567-025-03002-8) |
| GKP Bell-state fidelity | 0.842 | Direct preparation from the two motional-mode ground states | [Matsos et al. 2025](https://doi.org/10.1038/s41567-025-03002-8) |
| GKP qutrit / ququart coherence gain | $1.82\pm0.03$ / $1.87\pm0.03$ | Beyond-break-even higher-dimensional GKP memories | [Brock et al. 2025](https://doi.org/10.1038/s41586-025-08899-y) |
| Planar GKP logical-lifetime gain | $1.59\pm0.05$ | Heavy-fluxonium ancilla and on-chip spiral resonator; preprint | [Jha et al. 2026](https://arxiv.org/abs/2609.26880) |
| Quasi-deterministic optical GKP generation rate | $\sim2{,}000$ states/s | 250-kHz photonic experiment; demonstrated state was one-dimensional and not yet fault tolerant | [Yu et al. 2026](https://doi.org/10.1038/s41566-026-01962-8) |
| Integrated-photonic symmetric effective squeezing | $0.62\pm0.02$ dB | Generated GKP state remained below fault-tolerant quality | [Larsen et al. 2025](https://doi.org/10.1038/s41586-025-09044-5) |
| Ideal logical-comb spacing | $2\sqrt{\pi}$ | $q$-quadrature spacing within either logical basis state | [Gottesman et al. 2001](https://doi.org/10.1103/PhysRevA.64.012310) |
| Ideal correctable shift radius | $<\sqrt{\pi}/2$ | For isolated square-lattice shift errors before modular ambiguity | [Gottesman et al. 2001](https://doi.org/10.1103/PhysRevA.64.012310) |

> **Note:** Gate fidelities here are logical-level process fidelities. Coherence gains compare an encoded memory with the best relevant physical component in the same experiment; they are not bare-device $T_1$ values.

## References

### Original proposal
- D. Gottesman, A. Kitaev, and J. Preskill, "Encoding a qubit in an oscillator," [Phys. Rev. A 64, 012310 (2001)](https://doi.org/10.1103/PhysRevA.64.012310) — [arXiv:quant-ph/0008040](https://arxiv.org/abs/quant-ph/0008040)

### Experimental demonstrations
- C. Flühmann et al., "Encoding a qubit in a trapped-ion mechanical oscillator," [Nature 566, 513 (2019)](https://doi.org/10.1038/s41586-019-0960-6) — [arXiv:1807.01033](https://arxiv.org/abs/1807.01033)
- P. Campagne-Ibarcq et al., "Quantum error correction of a qubit encoded in grid states of an oscillator," [Nature 584, 368 (2020)](https://doi.org/10.1038/s41586-020-2603-3) — [arXiv:1907.12487](https://arxiv.org/abs/1907.12487)
- V. V. Sivak et al., "Real-time quantum error correction beyond break-even," [Nature 616, 50 (2023)](https://doi.org/10.1038/s41586-023-05782-6) — [arXiv:2211.09116](https://arxiv.org/abs/2211.09116)
- V. G. Matsos et al., "Universal quantum gate set for Gottesman–Kitaev–Preskill logical qubits," [Nature Physics 21, 1664 (2025)](https://doi.org/10.1038/s41567-025-03002-8) — [arXiv:2409.05455](https://arxiv.org/abs/2409.05455)
- B. L. Brock et al., "Quantum error correction of qudits beyond break-even," [Nature 641, 612 (2025)](https://doi.org/10.1038/s41586-025-08899-y) — [arXiv:2409.15065](https://arxiv.org/abs/2409.15065)
- M. V. Larsen et al., "Integrated photonic source of Gottesman–Kitaev–Preskill qubits," [Nature 642, 587 (2025)](https://doi.org/10.1038/s41586-025-09044-5)
- S. Yu et al., "Extensible universal photonic quantum computing with nonlinearity," [Nature Photonics 20, 1166 (2026)](https://doi.org/10.1038/s41566-026-01962-8) — [arXiv:2602.06544](https://arxiv.org/abs/2602.06544)
- S. R. Jha et al., "Bosonic Error Correction with Fluxonium," [arXiv:2609.26880 (2026)](https://arxiv.org/abs/2609.26880)

## Linked Papers

- [[gottesman-2001-gkp]]
- [[campagneibarcq-2020-error-correction-qubit]]
- [[flhmann-2019-encoding-qubit-trapped]]
- [[michael-2016-binomial-codes]]
- [[sivak-2023-real-time-error]]
- [[matsos-2025-universal-gkp-logical-gates]]
- [[brock-2025-quantum-error-correction-qudits-beyond-break-even]]
- [[larsen-2025-integrated-photonic-gkp-source]]
- [[jha-2026-bosonic-error-correction-fluxonium]]
- [[yu-2026-extensible-universal-photonic-computing]]
- [[shiina-2026-high-rate-and-resource-efficient-all-photonic]]
- [[vyas-2026-homomorphic-aggregation-of-continuous-variable]]
- [[kumar-2026-deterministic-universal-logical-gates]]
- [[roberts-2026-bosonic-codes-from-compact]]
- [[wadewitz-2026-probabilistic-error-cancellation-for]]
- [[burgath-2026-spin-grid-states-for]]
- [[koudia-2026-joint-gkp-encoding-for]]
- [[aoki-2026-remote-gottesman-kitaev-preskill-entanglement]]

## Evergreen context

- [[bosonic-code-hierarchy]] — the broader map of bosonic encodings
- [[dispersive-readout-mechanism]] — superconducting GKP experiments still cash out as repeated ancilla-assisted stabilizer readout inside a cavity-transmon stack
- [[motional-mode-coupling-in-ion-traps]] — the shared phonon-bus coupling underlying trapped-ion GKP implementations (Flühmann et al. 2019)
- [[threshold-theorem]] — why finite-energy GKP states matter for fault-tolerant thresholds
- [[erasure-error-vs-pauli-error]] — clarifies what kinds of oscillator errors GKP is designed to convert and correct

## Related Entries

- [[cat-codes]] — alternative bosonic code using coherent state superpositions
- [[bosonic-qubit]] — umbrella entry for oscillator-encoded logical qubits
- [[circuit-qed]] — underlying hardware platform for superconducting GKP
- [[binomial-codes]] — another bosonic code family
- [[trapped-ion-qubit]] — motional-mode platform for GKP state preparation and logical gates
- [[continuous-variable-photonic-qubit]] — optical platform for integrated GKP resource states
- [[fluxonium]] — ancilla used in the 2026 planar superconducting GKP demonstration
