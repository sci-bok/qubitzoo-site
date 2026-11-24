---
title: Erasure Qubit
entry_type: encoding
technology_family: Cross-Platform
moc_facets: [Codes]
status: demonstrated
figure_reviewed: true
first_proposed_year: 2009
first_demonstrated_year: 2023
keywords:
- erasure qubit
- erasure conversion
- leakage detection
- quantum error correction
- neutral atoms
- dual-rail superconducting
- metastable qubits
- error budget
influence_score: 0.82
last_updated: '2026-11-24'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-11-24
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/erasure-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-11-24"
figure_reviewed_at: "2026-11-24T15:05:57.264289+00:00"
---

## Figure

![[erasure-qubit-figure.png]]

## Description

An erasure qubit is a qubit encoding or operating paradigm in which dominant physical faults are engineered to leave the computational subspace in a **detectable** way. Instead of suffering an unheralded Pauli error inside the code space, the hardware preferentially produces a flagged leakage or loss event whose location is known to the decoder. In the ideal known-loss limit, the surface-code threshold approaches $50\%$ (Stace et al. 2009), whereas realistic circuit-level erasure-conversion schemes reach lower, hardware-dependent thresholds—for example, Wu et al. (2022) estimated an increase from $0.937\%$ to $4.15\%$ for a specific alkaline-earth neutral-atom noise model. The ideal $50\%$ number is therefore not a generic hardware threshold; the benefit comes from turning hidden faults into known-location faults.

Erasure qubits now span several hardware families:

**Metastable neutral atoms:** In $^{171}\mathrm{Yb}$, nuclear-spin qubits encoded within the metastable $^3P_0$ manifold can be monitored for decay into disjoint bright states with little back-action on qubits that remain in the code space. This underlies the Wu et al. proposal and Zhang et al.'s 2026 demonstration of erasure-aware logical circuits. Rydberg-array experiments have also used fast imaging to identify erasures and improve entangling-gate or repeated-round performance (Scholl et al. 2023; Lin et al. 2026).

**Dual-rail superconducting qubits:** Two coupled transmons or cavities encode a single excitation as $|0_L\rangle=|01\rangle$ and $|1_L\rangle=|10\rangle$. Single-excitation loss maps either logical state to $|00\rangle$, outside the code space, so the event can be heralded. Recent work has progressed from coherent single-qubit demonstrations to integrated logical measurement and fast, symmetric readout checks (Kubica et al. 2023; Levine et al. 2024; Chou et al. 2024; Hung et al. 2026).

**Single-fluxonium erasure qubits:** Nonadjacent levels of one integer fluxonium can encode the logical states while the intermediate level acts as a detectable erasure state. Liu et al. (2026) used the $|0\rangle$-$|2\rangle$ subspace at zero flux, with $|1\rangle$ as the erasure channel; An et al. (2026) used $|g\rangle$ and $|f\rangle$ as logical states with $|e\rangle$ as the erasure state. Both experiments used the readout resonator for ancilla-free erasure checks, reducing hardware overhead relative to dual rail, but their reported gains are conditional on rejecting detected erasures rather than demonstrations of full erasure-aware logical correction.

**Metastable trapped ions:** Shelved qubits can turn spontaneous Raman-scattering and decay events into detectable leakage. Quinn et al. (2026) demonstrated integrated erasure conversion during a two-ion entangling gate, detecting about $94\%$ of spontaneous Raman-scattering errors and nearly all qubit-decay errors.

## Hamiltonian

The erasure qubit is an encoding paradigm, not a single microscopic Hamiltonian. The common structure is a code space $\mathcal{C}\subset\mathcal{H}$ and dominant jump operators $L_k$ that map it into an orthogonal, detectable subspace $\mathcal{L}$:

$$\Pi_{\mathcal{C}}L_k\Pi_{\mathcal{C}}=0,\qquad \Pi_{\mathcal{L}}=\mathbb{1}-\Pi_{\mathcal{C}}.$$

A convenient open-system description is

$$\dot{\rho}=-\frac{i}{\hbar}[H,\rho]+\sum_k\mathcal{D}[L_k]\rho,$$

with $\mathcal{D}[L]\rho=L\rho L^\dagger-\tfrac{1}{2}\{L^\dagger L,\rho\}$. The important hardware figure of merit is not only the total physical error rate but also the erasure bias or conversion efficiency: how often a fault produces a flaggable excursion into $\mathcal{L}$ rather than an unflagged logical error within $\mathcal{C}$.

For a dual-rail superconducting realization with two coupled modes, a representative number-conserving model is

$$\frac{H}{\hbar}=\omega_1 a_1^\dagger a_1+\omega_2 a_2^\dagger a_2+g\left(a_1^\dagger a_2+a_1a_2^\dagger\right),$$

with $\mathcal{C}=\mathrm{span}\{|01\rangle,|10\rangle\}$. A single loss jump $a_1$ or $a_2$ takes the system to $|00\rangle\in\mathcal{L}$. An erasure check must distinguish $|00\rangle$ from the single-excitation manifold without learning whether the logical state was $|01\rangle$ or $|10\rangle$.

## Motivation

Quantum-error-correction overhead depends not only on how often hardware fails but on what kind of failure occurs. A distance-$d$ code can correct up to $d-1$ located erasures but only $\lfloor(d-1)/2\rfloor$ arbitrary unknown-location errors. This advantage survives only when erasure checks are sufficiently fast and nondemolishing and when the residual unflagged-error rate remains much smaller than the erasure rate. Erasure-aware decoding can then reduce the physical overhead required for a target logical error rate, often by factors of a few in realistic architectures rather than by a universal fixed factor.

## Experimental Status

**Ideal known-loss threshold — Stace, Barrett, and Doherty (2009):**
- Established a roughly $50\%$ loss threshold for topological codes under ideal known-location loss, distinct from a circuit-level hardware threshold.

**Alkaline-earth neutral-atom proposal — Wu et al. (2022):**
- Proposed a metastable $^{171}\mathrm{Yb}$ encoding that converts about $98\%$ of dominant faults into detectable erasures.
- Estimated a circuit-level surface-code threshold increase from $0.937\%$ to $4.15\%$ under the modeled noise hierarchy.

**High-fidelity Rydberg erasure conversion — Scholl et al. (2023):**
- Demonstrated fast-imaging erasure conversion in an alkaline-earth Rydberg simulator.
- Reported Bell-state fidelity $\ge 99.71\%$ after erasure excision, improving to $\ge 99.85\%$ after correcting residual state-preparation error.

**Superconducting dual-rail platforms — Levine et al. and Chou et al. (2024):**
- Levine et al. demonstrated a resonantly coupled transmon pair with erasure probability $2.19(2)\times10^{-3}$ per single-qubit gate, residual errors about $40\times$ lower, and less than $0.1\%$ dephasing per erasure check.
- Chou et al. demonstrated a cavity dual-rail qubit with logical state-preparation-and-measurement error at the $0.01\%$ level and detection of more than $99\%$ of cavity-decay events as erasures.

**Repeated-round neutral-atom operation — Lin et al. (2026):**
- Reported raw controlled-gate fidelity $99.60(1)\%$, increasing to $99.81(1)\%$ with non-destructive erasure detection.
- Maintained roughly $99.8\%$ performance across repeated rounds using in-circuit cooling and re-initialization.

**Erasure-aware logical neutral-atom circuits — Zhang et al. (2026):**
- Demonstrated $[[4,2,2]]$ logical encoding with erasure correction during decoding, adaptive circuit execution using erasure information, and logical teleportation with conditionally selected ancillas.
- This was a qualitative frontier shift: erasure information was used actively in logical circuits rather than only for post-selection.

**Metastable trapped-ion entangling gate — Quinn et al. (2026):**
- Detected about $94\%$ of spontaneous Raman-scattering errors and nearly all qubit-decay errors.
- Achieved $98.61\%$ SPAM-corrected Bell-state fidelity, increasing to $99.16\%$ after removing detected erasures.

**Fast symmetric dual-rail readout — Hung et al. (2026):**
- Demonstrated a $384\,\mathrm{ns}$ single-shot erasure check with residual error $6.0(2)\times10^{-4}$ and induced dephasing $8(3)\times10^{-5}$ per check.
- Continuous erasure detection during one-qubit gates achieved median gate error $7.2\times10^{-5}$ with less than $10^{-5}$ added by detection.

**Single-fluxonium erasure conversion — Liu et al. and An et al. (2026):**
- Liu et al. encoded a logical qubit in the $|0\rangle$-$|2\rangle$ subspace of a zero-flux fluxonium and increased the post-selected logical lifetime from $193\,\mu\mathrm{s}$ to $869\,\mu\mathrm{s}$; the inferred error added by each erasure check was $7.2\times10^{-5}$.
- An et al. demonstrated ancilla-free mid-circuit erasure checks in an integer fluxonium, increasing the post-selected $|f\rangle$ lifetime by $8.4\times$ and reducing single-qubit gate error from $0.061(2)\%$ to $0.030(5)\%$.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Surface-code loss threshold (ideal) | $\sim50\%$ | Ideal known-location loss limit, not a generic circuit-level threshold | [Stace et al. 2009](https://doi.org/10.1103/PhysRevLett.102.200501) |
| Neutral-atom threshold with erasure conversion | $4.15\%$ | Versus $0.937\%$ without erasure conversion in the modeled circuit-level hierarchy | [Wu et al. 2022](https://doi.org/10.1038/s41467-022-32094-6) |
| Neutral-atom erasure-conversion efficiency (proposal) | $\sim98\%$ | Fraction of modeled dominant errors converted into detectable erasures | [Wu et al. 2022](https://doi.org/10.1038/s41467-022-32094-6) |
| Neutral-atom Bell-state fidelity with erasure excision | $\ge99.71\%$ | Improves to $\ge99.85\%$ after correcting residual state-preparation error | [Scholl et al. 2023](https://doi.org/10.1038/s41586-023-06516-4) |
| Superconducting erasure probability per 1Q gate | $2.19(2)\times10^{-3}$ | Residual non-erasure errors about $40\times$ lower | [Levine et al. 2024](https://doi.org/10.1103/PhysRevX.14.011051) |
| Neutral-atom controlled-gate fidelity with erasure detection | $99.81(1)\%$ | Repeated-round mid-circuit architecture | [Lin et al. 2026](https://arxiv.org/abs/2603.01612) |
| Trapped-ion Raman-scattering erasure conversion | $\sim94\%$ | Nearly all qubit-decay errors also detected | [Quinn et al. 2026](https://doi.org/10.1103/p3cy-8yjk) |
| Symmetric dual-rail erasure check | $384\,\mathrm{ns}$ | Residual error $6.0(2)\times10^{-4}$; induced dephasing $8(3)\times10^{-5}$ per check | [Hung et al. 2026](https://doi.org/10.1103/54jp-hwdd) |
| Single-fluxonium erasure conversion | Logical lifetime $193\to869\,\mu\mathrm{s}$ | $\lvert0\rangle$-$\lvert2\rangle$ encoding at zero flux; post-selected non-erasure outcomes | [Liu et al. 2026](https://arxiv.org/abs/2601.11086) |
| Integer-fluxonium erasure detection | $8.4\times$ $\lvert f\rangle$ lifetime; gate error $0.061(2)\%\to0.030(5)\%$ | Ancilla-free mid-circuit check; conditional on rejecting detected erasures | [An et al. 2026](https://arxiv.org/abs/2607.27123) |

## References

### Theory and architecture
- T. M. Stace, S. D. Barrett, and A. C. Doherty, "Thresholds for Topological Codes in the Presence of Loss," [Phys. Rev. Lett. 102, 200501 (2009)](https://doi.org/10.1103/PhysRevLett.102.200501)
- Y. Wu, S. Kolkowitz, S. Puri, and J. D. Thompson, "Erasure conversion for fault-tolerant quantum computing in alkaline earth Rydberg atom arrays," [Nat. Commun. 13, 4656 (2022)](https://doi.org/10.1038/s41467-022-32094-6) — [arXiv:2201.03540](https://arxiv.org/abs/2201.03540)
- A. Kubica, A. Haim, Y. Vaknin, H. Levine, F. Brandão, and A. Retzker, "Erasure Qubits: Overcoming the $T_1$ Limit in Superconducting Circuits," [Phys. Rev. X 13, 041022 (2023)](https://doi.org/10.1103/PhysRevX.13.041022) — [arXiv:2208.05461](https://arxiv.org/abs/2208.05461)

### Experimental demonstrations
- P. Scholl, A. L. Shaw, R. Bing-Shiun Tsai, R. Finkelstein, J. Choi, and M. Endres, "Erasure conversion in a high-fidelity Rydberg quantum simulator," [Nature 622, 273–278 (2023)](https://doi.org/10.1038/s41586-023-06516-4) — [arXiv:2305.03406](https://arxiv.org/abs/2305.03406)
- H. Levine et al., "Demonstrating a Long-Coherence Dual-Rail Erasure Qubit Using Tunable Transmons," [Phys. Rev. X 14, 011051 (2024)](https://doi.org/10.1103/PhysRevX.14.011051) — [arXiv:2307.08737](https://arxiv.org/abs/2307.08737)
- K. S. Chou et al., "A superconducting dual-rail cavity qubit with erasure-detected logical measurements," [Nat. Phys. 20, 1454–1460 (2024)](https://doi.org/10.1038/s41567-024-02539-4) — [arXiv:2307.03169](https://arxiv.org/abs/2307.03169)
- R. Lin et al., "Sustaining high-fidelity quantum logic in neutral-atom circuits via mid-circuit operations," [arXiv:2603.01612](https://arxiv.org/abs/2603.01612) (2026)
- B. Zhang, G. Liu, G. Bornet, S. P. Horvath, P. Peng, S. Ma, S. Huang, S. Puri, and J. D. Thompson, "Logical qubits with erasure conversion using metastable neutral atoms," [Nat. Phys. 22, 910–916 (2026)](https://doi.org/10.1038/s41567-026-03309-0) — [arXiv:2506.13724](https://arxiv.org/abs/2506.13724)
- A. Quinn et al., "High-fidelity entanglement of metastable trapped-ion qubits with integrated erasure conversion," [Phys. Rev. A 113, L040601 (2026)](https://doi.org/10.1103/p3cy-8yjk) — [arXiv:2411.12727](https://arxiv.org/abs/2411.12727)
- J. S.-C. Hung et al., "Fast, high-fidelity erasure detection of dual-rail qubits with symmetrically coupled readout," [Phys. Rev. X, accepted (2026)](https://doi.org/10.1103/54jp-hwdd) — [arXiv:2604.16292](https://arxiv.org/abs/2604.16292)
- C. Liu et al., "Converting qubit relaxation into erasures with a single fluxonium," [arXiv:2601.11086 (2026)](https://arxiv.org/abs/2601.11086)
- J. An et al., "Hardware-efficient erasure-error detection with an integer fluxonium," [arXiv:2607.27123 (2026)](https://arxiv.org/abs/2607.27123)

## Linked Papers

- [[stace-2009-thresholds-topological-codes]]
- [[wu-2022-erasure-neutral-atoms]]
- [[scholl-2023-erasure-conversion-high]]
- [[kubica-2023-erasure-overhead]]
- [[levine-2024-dual-rail-erasure]]
- [[chou-2024-superconducting-dual-rail]]
- [[lin-2026-sustaining-high-fidelity-neutral-atom-circuits]]
- [[zhang-2026-logical-erasure-neutral-atoms]]
- [[quinn-2026-metastable-ion-erasure-conversion]]
- [[hung-2026-fast-dual-rail-erasure-detection]]
- [[liu-2026-converting-qubit-relaxation-erasures]]
- [[an-2026-hardware-efficient-erasure-error-detection]]

## Evergreen context

- [[erasure-error-vs-pauli-error]] — the decoder-level reason known-location faults require less code distance than hidden Pauli errors
- [[threshold-theorem]] — distinguishes ideal erasure thresholds from circuit-level thresholds under realistic residual noise
- [[quantum-hardware]] — compares which hardware stacks can convert dominant faults into flagged leakage
- [[rydberg-blockade-mechanism]] — supplies the interaction behind the neutral-atom gate mechanisms discussed here

## Related Entries

- [[dual-rail-photonic-qubit]] — photonic dual-rail encoding, a natural erasure architecture
- [[dual-rail-superconducting-qubit]] — superconducting implementation of dual-rail erasure
- [[neutral-atom-qubit]] — broader context for atom-based erasure conversion and repeated-round operation
- [[alkaline-earth-neutral-atom-clock-qubit]] — metastable-state encoding used by the $^{171}\mathrm{Yb}$ erasure architecture
- [[trapped-ion-qubit]] — platform context for metastable-ion erasure conversion
- [[surface-code-logical-qubit]] — a primary code family benefiting from erasure-aware decoding
- [[qubit-readout]] — erasure conversion depends on reliable nondemolishing mid-circuit checks
- [[kerr-cat-qubit]] — complementary hardware approach based on noise bias
- [[transmon]] — baseline superconducting qubit family used in several erasure encodings
- [[fluxonium]] — single-device superconducting erasure conversion using nonadjacent levels
