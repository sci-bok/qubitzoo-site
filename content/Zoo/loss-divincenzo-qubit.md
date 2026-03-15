---
title: Single spin quantum dot (Loss-DiVincenzo) qubit
entry_type: qubit
technology_family: Semiconducting
status: seed
seed_id: '13'
seed_source: qubitzoo-airtable
first_proposed_year: 1998
keywords:
- spin
- quantum dot
- silicon
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
figure_reviewed: true
---



Single spin quantum dot (Loss-DiVincenzo) qubit is a seed entry imported from the legacy Qubit Zoo Airtable dataset.

## Description
This qubit consists of single electron spin trapped in a quantum dot (QD) in semiconductor system such as Si/SiGe or Si MOS heterostructures. The spin states of the electron defines the qubit |0> and |1> states. Since spin is a magnetic property, spin qubit does not directly interact with the electrical environment, which leads to long coherence times. Entangling gate between neighboring spins can be achieved by electrical control of the exchange coupling via tuning the tunneling between coupled QDs, and single qubit gates can be efficiently implemented using electric-dipole spin resonance (EDSR).


## Figure

![[single-spin-quantum-dot-loss-divincenzo-qubit-figure.png]]

## Motivation
Individual spin with S=1/2 is probably the simplest realization of a qubit. The electron spin qubit in semiconductor QD provides easy electrical control, potentially good scalability, and compatibility with current semiconductor technology.

## References
- https://journals.aps.org/pra/abstract/10.1103/PhysRevA.57.120
- http://science.sciencemag.org/content/359/6374/439
- https://www.nature.com/articles/nature25766

## Linked Papers
- [[loss-divincenzo-1998-quantum-dots]]

## Related Entries
- [[kane-qubit]]
- [[singlet-triplet-qubit]]
- [[exchange-only-qubit]]

## Seed Metadata
- date_published: 1998-01-01

## Physics

Qubit = spin-1/2 of a single excess electron in a quantum dot ($|\!\uparrow\rangle$, $|\!\downarrow\rangle$). Two-qubit gate via Heisenberg exchange when the tunnel barrier is pulsed low:

$$H_s(t) = J(t)\,\vec{S}_1 \cdot \vec{S}_2, \quad J(t) = \frac{4t_0^2(t)}{u}$$

where $t_0$ is the tunneling matrix element and $u$ is the charging energy. Pulsing $\int J\,dt = \pi/2$ gives $\sqrt{\text{SWAP}}$, which combined with single-qubit Z-rotations (via local magnetic fields) forms a universal gate set. Spin coherence times are inherently longer than charge coherence times since spin is insensitive to electric field fluctuations.

## Related Qubits

- [[singlet-triplet-qubit]] — two-spin encoding, no local fields needed
- [[exchange-only-qubit]] — three-spin encoding, exchange-only control
- [[aeon-qubit]] — always-on exchange variant
- [[semiconductor-charge-qubit]] — charge-based encoding (shorter coherence)
- [[kane-qubit]] — donor spin in silicon

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | 1–45 s | Electron spin in Si/SiGe (2024) | [Elzerman et al. 2004](https://doi.org/10.1038/nature02693) |
| Qubit coherence $T_2$ | 0.5–28 ms | Hahn echo in $^{28}$Si | — |
| Gate fidelity (1Q) | 99.6–99.95% | ESR or EDSR driven | https://journals.aps.org/pra/abstract/10.1103/PhysRevA.57.12 |
| Gate fidelity (2Q) | 99–99.8% | Exchange-based $\sqrt{\text{SWAP}}$ | https://journals.aps.org/pra/abstract/10.1103/PhysRevA.57.12 |
| Gate time (1Q) | 1–100 μs | Depends on drive mechanism | — |
| Gate time (2Q) | 1–100 ns | Exchange pulse | — |
| Readout fidelity | 98–99.5% | Spin-to-charge conversion + SET | https://journals.aps.org/pra/abstract/10.1103/PhysRevA.57.12 |
| Qubit footprint | ~50–100 nm pitch | Very small; CMOS-compatible | — |
| Operating temperature | 20 mK–1 K | Silicon: some operation at >1 K | — |
| Connectivity | Nearest-neighbor (1D/2D) | Exchange range ~100 nm | — |
