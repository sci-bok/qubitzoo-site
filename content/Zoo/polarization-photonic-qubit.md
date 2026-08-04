---
title: Polarization Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/polarization-photonic-qubit-figure.provenance.json"
figure_reviewed_by: "Codex independent scientific visual audit 2026-08-03"
figure_reviewed_at: "2026-08-03T14:12:42.222473+00:00"
keywords: [photon polarization, horizontal vertical, waveplate, CNOT, quantum communication, integrated photonics]
influence_score: 0.80
last_updated: '2026-08-02'
generated_by: scibok-curation
verified_by: codex-literature-audit-2026-08-02
---

## Figure

![[polarization-photonic-qubit-figure.png]]

## Description

A polarization photonic qubit encodes a two-level state in orthogonal polarization modes of one photon,

$$|\psi\rangle=\alpha|H\rangle+\beta e^{i\phi}|V\rangle.$$

Waveplates or integrated birefringent elements implement arbitrary single-qubit rotations, while polarizing beam splitters provide state analysis. Polarization is the most direct free-space photonic encoding and is ubiquitous in entanglement distribution and quantum communication. Its principal weakness is uncontrolled birefringence in fibres and integrated waveguides; time-bin and frequency-bin encodings often travel more robustly.

## Hamiltonian and Control

Any lossless polarization transformation is an $SU(2)$ rotation,

$$U(\theta,\mathbf n)=\exp\!\left(-i\frac{\theta}{2}\mathbf n\cdot\boldsymbol\sigma\right),$$

implemented optically with retarders or polarization-preserving integrated circuits. Two-photon entangling gates are usually measurement-induced: Hong-Ou-Mandel interference plus polarization-dependent beam splitting realizes a nondeterministic CNOT.

## Motivation

- Encode a qubit in a degree of freedom that is simple to prepare, transform, and measure.
- Interface naturally with entangled-photon sources, quantum memories, and free-space links.
- Avoid path duplication for many single-qubit operations.

## Experimental Status

Polarization qubits are a mature quantum-communication encoding. Crespi et al. demonstrated the first integrated polarization-encoded CNOT in 2011 using laser-written partially polarizing directional couplers, with logical-basis fidelity $0.940\pm0.004$ and process fidelity $0.906\pm0.003$.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| CNOT truth-table fidelity | 0.940 ± 0.004 | Integrated polarization gate | [Crespi et al. 2011](https://doi.org/10.1038/ncomms1570) |
| CNOT process fidelity | 0.906 ± 0.003 | Quantum process tomography | [Crespi et al. 2011](https://doi.org/10.1038/ncomms1570) |
| Bell-state discrimination probability | 0.877 ± 0.007 | Same integrated device | [Crespi et al. 2011](https://doi.org/10.1038/ncomms1570) |

## Scaling Considerations

- Fibre birefringence and polarization-mode dispersion demand active compensation.
- Integrated circuits must preserve both polarization modes with matched loss and phase.
- Deterministic photon-photon interactions remain absent; scalable computing relies on ancillas, feed-forward, cluster states, or fusion.

## References

- A. Crespi et al., "Integrated photonic quantum gates for polarization qubits," [Nature Communications 2, 566 (2011)](https://doi.org/10.1038/ncomms1570).

## Linked Papers

- [[crespi-2011-polarization-photonic-gates]]

## Evergreen context

- [[erasure-error-vs-pauli-error]] — photon loss is often detectable and should not be modeled as an anonymous Pauli error.
- [[threshold-theorem]] — explains why probabilistic gates require architectural overhead rather than invalidating scalability outright.

## Related Entries

- [[time-bin-photonic-qubit]] — more robust for long fibre links.
- [[dual-rail-photonic-qubit]] — path-mode encoding favored in integrated LOQC.
- [[frequency-bin-photonic-qubit]] — spectral-mode encoding compatible with electro-optic processing.
