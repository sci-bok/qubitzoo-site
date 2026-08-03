---
title: Polarization Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
first_demonstrated_year: 1989
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/polarization-photonic-qubit-figure.provenance.json"
figure_reviewed_by: "Codex independent scientific visual audit 2026-08-03"
figure_reviewed_at: "2026-08-03T14:12:42.222473+00:00"
keywords: [photon polarization, horizontal vertical, waveplate, CNOT, quantum communication, integrated photonics]
influence_score: 0.80
last_updated: '2026-08-03'
generated_by: scibok-curation
verified_by: codex-daily-deep-audit-2026-08-03
---

## Figure

![[polarization-photonic-qubit-figure.png]]

The CNOT panel is a conceptual block diagram of a coincidence-basis linear-optical gate: the three partially polarizing couplers do not create a deterministic photon-photon interaction, and the demonstrated gate succeeds only after postselection with probability $1/9$.

## Description

A polarization photonic qubit encodes a two-level state in orthogonal polarization modes of one photon,

$$|\psi\rangle=\alpha|H\rangle+\beta e^{i\phi}|V\rangle.$$

Here $|\alpha|^2+|\beta|^2=1$, the global phase has been removed, and the relative phase $\phi$ fixes the longitude on the polarization Bloch (Poincaré) sphere. The diagonal/antidiagonal and right/left-circular bases are mutually unbiased alternatives to the horizontal/vertical computational basis; the handedness assigned to $|R\rangle$ and $|L\rangle$ depends on the propagation and Jones-vector convention.

Waveplates or integrated birefringent elements implement arbitrary single-qubit rotations, while a waveplate followed by a polarizing beam splitter provides projective state analysis. Polarization is the most direct free-space photonic encoding and is ubiquitous in entanglement distribution and quantum communication.

Its principal weakness is uncontrolled birefringence and polarization-mode dispersion in fibres and integrated waveguides. Those effects rotate or dephase the qubit unless actively tracked, so time-bin and frequency-bin encodings often travel more robustly. Photon loss remains an erasure from the single-photon code space rather than an ordinary Pauli error.

## Hamiltonian and Control

Within the $\{|H\rangle,|V\rangle\}$ subspace, a lossless polarization controller has the effective generator

$$H_{\mathrm{ctrl}}=\frac{\hbar\Omega}{2}\,\mathbf n\cdot\boldsymbol\sigma,$$

and therefore implements, up to a global optical phase,

$$U(\theta,\mathbf n)=\exp\!\left(-i\frac{\theta}{2}\mathbf n\cdot\boldsymbol\sigma\right),\qquad \theta=\Omega t.$$

Retarders or polarization-preserving integrated circuits realize these rotations. Two-photon entangling gates are usually measurement-induced: Hong-Ou-Mandel interference plus polarization-dependent beam splitting can realize a nondeterministic CNOT in the coincidence basis. In the three-coupler scheme used by Crespi et al., one coupler supplies the two-photon interference, the other two balance amplitudes, and the gate succeeds with probability $1/9$ after postselection.

## Motivation

- Encode a qubit in a degree of freedom that is simple to prepare, transform, and measure.
- Interface naturally with entangled-photon sources, quantum memories, and free-space links.
- Avoid path duplication for many single-qubit operations.

## Experimental Status

Polarization qubits are a mature quantum-communication encoding. Bennett and Brassard's 1984 BB84 protocol explicitly encoded information in nonorthogonal single-photon polarization states. Bennett et al.'s 1992 experimental report states that the first successful exchange occurred in October 1989, using faint polarized-light pulses; `first_demonstrated_year` records that event rather than the later journal date.

Crespi et al. demonstrated the first integrated polarization-encoded CNOT in 2011 using laser-written partially polarizing directional couplers, with logical-basis fidelity $0.940\pm0.004$ and process fidelity $0.906\pm0.003$. This was a coincidence-basis gate with intrinsic success probability $1/9$, not a deterministic photon-photon interaction.

Lu et al. demonstrated a polarization-controlled frequency-bin CNOT in 2024 using direction-dependent electro-optic modulation in a fibre Sagnac loop. The correct-output probability was $98.53(4)\%$, and the four polarization-frequency Bell states had fidelities from $98.2(9)\%$ to $98.8(3)\%$. This is a deterministic two-degree-of-freedom operation within one photon, so it is not directly comparable to a two-photon entangling gate.

Huang et al. reported a two-photon polarization CNOT in 2026 driven by on-demand photons from one mesa-top quantum dot. The postselected gate reached $F_{ZZ}=0.902\pm0.043$, with process fidelity bounded by $0.776\leq F_{\mathrm{proc}}\leq0.874$ and Bell-state fidelity $0.825\pm0.010$. Its advance is source integration and photon indistinguishability, not a new fidelity record.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| CNOT truth-table fidelity | 0.940 ± 0.004 | Integrated polarization gate | [Crespi et al. 2011](https://doi.org/10.1038/ncomms1570) |
| CNOT process fidelity | 0.906 ± 0.003 | Quantum process tomography | [Crespi et al. 2011](https://doi.org/10.1038/ncomms1570) |
| CNOT success probability | $1/9$ | Coincidence-basis, two-photon gate | [Crespi et al. 2011](https://doi.org/10.1038/ncomms1570) |
| Bell-state discrimination probability | 0.877 ± 0.007 | Same integrated device | [Crespi et al. 2011](https://doi.org/10.1038/ncomms1570) |
| Polarization-frequency CNOT correct-output probability | 98.53(4)% | Two degrees of freedom of one photon; not a two-photon entangler | [Lu et al. 2024](https://doi.org/10.1364/OPTICAQ.525837) |
| Polarization-frequency Bell-state fidelity | 98.2(9)%–98.8(3)% | Four intra-photon Bell states | [Lu et al. 2024](https://doi.org/10.1364/OPTICAQ.525837) |
| On-demand-source CNOT $F_{ZZ}$ | 0.902 ± 0.043 | Two time-separated photons from one mesa-top quantum dot; postselected | [Huang et al. 2026](https://doi.org/10.1038/s41534-026-01221-2) |

## Scaling Considerations

- Fibre birefringence and polarization-mode dispersion demand active compensation.
- Integrated circuits must preserve both polarization modes with matched loss and phase.
- Deterministic photon-photon interactions remain absent; scalable computing relies on ancillas, feed-forward, cluster states, or fusion.

## References

### Foundational encoding and experiment

- C. H. Bennett and G. Brassard, "Quantum cryptography: Public key distribution and coin tossing," Proceedings of the International Conference on Computers, Systems & Signal Processing, 175–179 (1984); archival reprint in [Theoretical Computer Science 560, 7–11 (2014)](https://doi.org/10.1016/j.tcs.2014.05.025), [arXiv:2003.06557](https://arxiv.org/abs/2003.06557).
- C. H. Bennett, F. Bessette, G. Brassard, L. Salvail, and J. Smolin, "Experimental quantum cryptography," [Journal of Cryptology 5, 3–28 (1992)](https://doi.org/10.1007/BF00191318).

### Integrated and recent gates

- A. Crespi et al., "Integrated photonic quantum gates for polarization qubits," [Nature Communications 2, 566 (2011)](https://doi.org/10.1038/ncomms1570).
- H.-H. Lu, J. M. Lukens, M. Alshowkan, B. T. Kirby, and N. A. Peters, "Building a controlled-NOT gate between polarization and frequency," [Optica Quantum 2, 282–287 (2024)](https://doi.org/10.1364/OPTICAQ.525837), [arXiv:2404.07317](https://arxiv.org/abs/2404.07317).
- Q. Huang, S. Chattaraj, L. Jordao, J. Zhang, S. Lu, and A. Madhukar, "Two-qubit gates using on-demand single-photons from ordered shape and size controlled large-volume superradiant quantum dots," [npj Quantum Information 12, 95 (2026)](https://doi.org/10.1038/s41534-026-01221-2), [arXiv:2411.04412](https://arxiv.org/abs/2411.04412).

## Linked Papers

- [[crespi-2011-polarization-photonic-gates]]
- [[bennett-brassard-1984-bb84-polarization]]
- [[bennett-1992-experimental-quantum-cryptography]]
- [[lu-2024-polarization-frequency-cnot]]
- [[huang-2026-on-demand-polarization-cnot]]

## Evergreen context

- [[erasure-error-vs-pauli-error]] — photon loss is often detectable and should not be modeled as an anonymous Pauli error.
- [[threshold-theorem]] — explains why probabilistic gates require architectural overhead rather than invalidating scalability outright.

## Related Entries

- [[time-bin-photonic-qubit]] — more robust for long fibre links.
- [[dual-rail-photonic-qubit]] — path-mode encoding favored in integrated LOQC.
- [[frequency-bin-photonic-qubit]] — spectral-mode encoding compatible with electro-optic processing.
- [[photonic-qubit]] — umbrella entry for photonic encodings and hardware tradeoffs.
- [[linear-optical-photonic-qubit]] — architecture-level context for probabilistic entangling gates.
