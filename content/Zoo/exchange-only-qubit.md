---
title: Exchange-only qubit
entry_type: qubit
technology_family: Semiconducting
status: active
figure_reviewed: true
seed_id: '12'
seed_source: qubitzoo-airtable
first_proposed_year: 2000
first_demonstrated_year: 2013
keywords:
- exchange-only
- quantum dot
- spin
- encoded qubit
- decoherence-free
last_updated: '2026-03-20'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok-manual-2026-03-20
---

## Description

The exchange-only (EO) qubit, also called the 3-spin decoherence-free subsystem (3-DFS) qubit, encodes a logical qubit in the two-dimensional $S_\text{tot} = 1/2$, $S_\text{tot}^z = 1/2$ subspace of three electron spins in a **linear triple quantum dot**. Both logical states share the same total spin quantum numbers, providing inherent protection against uniform magnetic field fluctuations (decoherence-free subspace).

The key advantage: **all gate operations use only pairwise exchange interactions** — fast, baseband (DC) electrical pulses on gate electrodes. No microwave drive, no magnetic field gradients, no spin-orbit coupling required. This makes the EO qubit the simplest fully electrically controlled spin qubit.

Single-qubit gates require **3–4 sequential exchange pulses** (or 3 simultaneous pulses in the always-on variant). Two-qubit gates between adjacent encoded qubits require ~**18–20 sequential exchange pulses** in the original serial protocol, though this is dramatically reduced to a **single exchange pulse** in the always-on (AEON) variant.


## Figure

![[exchange-only-qubit-figure.png]]

## Hamiltonian

The three-spin system is controlled by pairwise Heisenberg exchange:

$$H = J_{12}(t)\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + J_{23}(t)\,\mathbf{S}_2\!\cdot\!\mathbf{S}_3$$

where $J_{ij}(t) = 4t_{ij}^2/U_{ij}$ is the exchange coupling controlled by gate voltage tuning of the tunnel barrier between dots $i$ and $j$. In the original proposal, exchange couplings are pulsed on and off sequentially. In the always-on (AEON) variant, both $J_{12}$ and $J_{23}$ remain on and gates are performed by modulating their ratio.

### Logical encoding

$$|0_L\rangle = |S\rangle_{12}|\!\uparrow\rangle_3 = \tfrac{1}{\sqrt{2}}(|\!\uparrow\downarrow\uparrow\rangle - |\!\downarrow\uparrow\uparrow\rangle)$$

$$|1_L\rangle = \sqrt{\tfrac{2}{3}}\,|T_+\rangle_{12}|\!\downarrow\rangle_3 - \sqrt{\tfrac{1}{3}}\,|T_0\rangle_{12}|\!\uparrow\rangle_3 = -\tfrac{1}{\sqrt{6}}(|\!\uparrow\downarrow\uparrow\rangle + |\!\downarrow\uparrow\uparrow\rangle - 2|\!\uparrow\uparrow\downarrow\rangle)$$

Both states have $S = 1/2$, $S_z = +1/2$. The quadruplet state $|Q\rangle = |\!\uparrow\uparrow\uparrow\rangle$ with $S = 3/2$ is separated by the exchange gap and does not interact with the qubit subspace.

### Gate operations

- **$J_{12}$ alone** generates rotation about one axis (e.g., $\hat{z}$) in the logical Bloch sphere
- **$J_{23}$ alone** generates rotation about a non-collinear axis (at 120° to the first)
- Combining these in sequence gives universal single-qubit control
- An arbitrary single-qubit rotation requires **3 exchange pulses** (Fong & Wandzura 2011); specific Cliffords can take fewer
- Two-qubit gates via inter-triple exchange: **19 pulses** (Fong & Wandzura optimized sequence) for CNOT

## Motivation

- Inherent DFS protection against uniform magnetic field fluctuations
- **All-electrical control** — only fast DC voltage pulses on gate electrodes
- No microwave drive, no magnetic field gradients required
- Small qubit footprint (3 dots, ~150–300 nm pitch)
- Natural path to scaled architectures in Si/SiGe or GaAs
- Foundation for the RX qubit (always-on + microwave) and AEON qubit (always-on + baseband + double sweet spot)

## Experimental Status

First demonstrated by **Medford et al. (2013)** in a GaAs/AlGaAs triple quantum dot:
- Coherent exchange oscillations and single-qubit rotations
- $T_2^* \sim 2\,\mu\text{s}$ (limited by nuclear spin bath in GaAs)

Demonstrated in Si/SiGe by **Eng et al. (2015)**:
- Higher-fidelity operation with reduced nuclear noise
- Three-dot device with individually controllable exchange couplings

The always-on variant (AEON) demonstrated by **Broz et al. (2025)**:
- Average Clifford fidelity $F_{C1} = 99.86\%$ (blind randomized benchmarking)
- Simultaneous exchange pulses, Si/SiGe triangular QD array

## References

### Original proposal
- D. P. DiVincenzo, D. Bacon, J. Kempe, G. Burkard, and K. B. Whaley, "Universal quantum computation with the exchange interaction," [Nature 408, 339 (2000)](https://doi.org/10.1038/35042541)

### Optimized pulse sequences
- D. Bacon, J. Kempe, D. A. Lidar, and K. B. Whaley, "Universal fault-tolerant quantum computation on decoherence-free subspaces," [PRA 63, 042307 (2001)](https://doi.org/10.1103/PhysRevA.63.042307)
- B. H. Fong and S. M. Wandzura, "Universal quantum computation and leakage reduction in the 3-qubit decoherence free subsystem code," [QIC 11, 1003 (2011)](https://doi.org/10.26421/QIC11.11-12-8) — optimized to 19-pulse CNOT

### Two-qubit gates (always-on variant)
- A. C. Doherty and M. P. Wardrop, "Two-qubit gates for resonant exchange qubits," [PRL 111, 050503 (2013)](https://doi.org/10.1103/PhysRevLett.111.050503) — single exchange pulse CZ when intra-qubit couplings are always on

### Experimental demonstrations
- J. Medford et al., "Self-consistent measurement and state tomography of an exchange-only spin qubit," [Nature Nanotech. 8, 654 (2013)](https://doi.org/10.1038/nnano.2013.174) — first demonstration, GaAs
- K. Eng et al., "Isotopically enhanced triple-quantum-dot qubit," [Sci. Adv. 1, e1500214 (2015)](https://doi.org/10.1126/sciadv.1500214) — Si/SiGe demonstration
- J. D. Broz et al., "Demonstration of an always-on exchange-only spin qubit," [arXiv:2508.01033 (2025)](https://arxiv.org/abs/2508.01033) — AEON variant, $F_{C1} = 99.86\%$

## Linked Papers
- [[divincenzo-2000-exchange-only]]

## Related Entries
- [[singlet-triplet-qubit]]
- [[rx-qubit]]
- [[hybrid-qubit]]
- [[aeon-qubit]]

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1 s | Spin relaxation in Si/SiGe | — |
| Qubit coherence $T_2^*$ | 2–20 μs | GaAs (nuclear-limited) to Si/SiGe | [Medford et al. 2013](https://doi.org/10.1038/nnano.2013.174) |
| Qubit coherence $T_2^\text{echo}$ | 10–100 μs | Hahn echo, material-dependent | [Eng et al. 2015](https://doi.org/10.1126/sciadv.1500214) |
| Gate fidelity (1Q) | **99.86%** | AEON variant, blind RB (experimental) | [Broz et al. 2025](https://arxiv.org/abs/2508.01033) |
| Gate fidelity (1Q, sequential) | 96–99% | Standard sequential exchange | [Eng et al. 2015](https://doi.org/10.1126/sciadv.1500214) |
| Gate fidelity (2Q) | 95–99% | Theoretical estimate (sequential) | [Fong & Wandzura 2011](https://doi.org/10.26421/QIC11.11-12-8) |
| Gate time (1Q) | 1–50 ns | 3–4 exchange pulses | — |
| Gate time (2Q) | 50–500 ns | ~19 sequential pulses or 1 pulse (AEON) | — |
| Readout fidelity | 95–99% | Spin-to-charge + charge sensor | [Medford et al. 2013](https://doi.org/10.1038/nnano.2013.174) |
| Qubit footprint | ~150–300 nm pitch | 3 dots per logical qubit | — |
| Operating temperature | 20–100 mK | GaAs or Si/SiGe | — |
| Connectivity | Nearest-neighbor | Between adjacent triple dots | — |
