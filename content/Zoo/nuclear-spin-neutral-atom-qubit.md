---
title: Nuclear-Spin Neutral-Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
figure_reviewed: true
first_proposed_year: 2008
first_demonstrated_year: 2011
keywords:
- neutral atom
- nuclear spin
- ytterbium
- strontium
- alkaline earth
- long coherence
- rydberg gate
influence_score: 0.71
last_updated: '2026-06-17'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-audit-2026-06-17
---

## Figure

![[nuclear-spin-neutral-atom-qubit-figure.png]]

## Description

Nuclear-spin neutral-atom qubits encode logical states in long-lived nuclear-spin sublevels of neutral alkaline-earth(-like) atoms, most prominently $^{171}\mathrm{Yb}$ and, more broadly, selected $^{87}\mathrm{Sr}$ manifolds. A representative $^{171}\mathrm{Yb}$ encoding uses

$$|0\rangle = |^1S_0, m_I=-1/2\rangle, \qquad |1\rangle = |^1S_0, m_I=+1/2\rangle,$$

so the qubit lives inside a $J=0$ electronic ground state and inherits only the much smaller **nuclear** magnetic moment rather than a large electronic-spin Zeeman sensitivity.

That distinction matters. This entry is **not** the same thing as the optical-clock qubit entry. Nuclear-spin neutral-atom qubits usually store information in two spin states within the same electronic manifold, whereas alkaline-earth clock qubits encode across the $^1S_0 \leftrightarrow {}^3P_0$ transition. Nuclear-spin storage is therefore highly coherent, but it is **not generically first-order field-insensitive** in the way a true clock transition can be. Instead, the advantage is that the differential Zeeman scale is small because the electronic angular momentum is zero.

Control and entanglement are obtained by temporarily leaving the memory manifold, for example with Raman or microwave single-qubit control and Rydberg-mediated two-qubit gates. This separation of storage and interaction roles is the central architectural appeal of the platform.

## Hamiltonian

A representative rotating-frame model keeps the logical qubit in two nuclear-spin states of a $J=0$ manifold while coupling one logical state to a transient Rydberg level during entangling operations:

$$H = \sum_i \left[\frac{\omega_{Z,i}}{2}\sigma_z^{(i)} + \frac{\Omega_i(t)}{2}\sigma_x^{(i)}\right] + \sum_i \left[\frac{\Omega_{r,i}(t)}{2}\left(|r_i\rangle\langle 1_i| + |1_i\rangle\langle r_i|\right) - \Delta_i(t) n_i^{(r)}\right] + \sum_{i<j} V_{ij} n_i^{(r)} n_j^{(r)}.$$

Here $\omega_{Z,i}$ is the small but generally nonzero nuclear-Zeeman splitting between the two logical states, $\Omega_i$ is the single-qubit drive, $|r\rangle$ is a Rydberg bus state used only during gates, $\Omega_{r,i}$ and $\Delta_i$ are the Rydberg drive and detuning, and $V_{ij}$ is the blockade interaction.

This is the right umbrella Hamiltonian for the nuclear-spin branch: a long-lived storage qubit plus an interaction manifold. A clock-state qubit Hamiltonian with logical states spanning $^1S_0$ and $^3P_0$ belongs in [[alkaline-earth-neutral-atom-clock-qubit]], not here.

## Motivation

Nuclear-spin neutral-atom qubits are compelling because they try to combine the best parts of two worlds:

- **Long memory lifetimes:** storage in $J=0$ manifolds suppresses electronic magnetic-noise sensitivity.
- **Clean hardware:** neutral atoms remain identical qubits without fabrication disorder.
- **Switchable entanglement:** strong interactions are turned on only when atoms are promoted to an excited manifold such as a Rydberg state.
- **QEC-friendly architecture ideas:** the long-lived nuclear-spin data qubit can be paired with faster ancilla or readout states instead of forcing one manifold to do everything.

The cost is added control complexity: the qubit is wonderfully quiet while idle, but high-fidelity readout, fast single-qubit control, and strong two-qubit interactions all require carefully engineered auxiliary transitions.

## Experimental Status

**Original architecture proposal — Daley et al. (2008):**
- Proposed neutral-atom quantum computing with information stored in nuclear-spin manifolds of alkaline-earth atoms.
- Introduced the key idea of separating storage from transport / interaction operations.

**First single-atom proof of principle — Noguchi et al. (2011):**
- Demonstrated tomography and projective readout of a single optically manipulated ytterbium nuclear-spin qubit.
- Reported tomography fidelity above 0.98, 500 $\mu$s-scale projective measurement, $T_1 = 0.49$ s, and $T_2 = 0.10$ s.

**Array-scale $^{171}\mathrm{Yb}$ nuclear-spin platform — Jenkins et al. (2022):**
- Established $^{171}\mathrm{Yb}$ nuclear-spin qubits in optical tweezers with 10$\times$10-array loading, sub-microsecond control, and multi-second coherence.
- Reported 5.2(5)$\times 10^{-3}$ error per Clifford, $T_2^* = 3.7(4)$ s, and $T_2 = 7.9(4)$ s.

**Universal gate set in tweezers — Ma et al. (2022):**
- Demonstrated initialization, readout, high-fidelity single-qubit control, and Rydberg-blockade entangling gates on $^{171}\mathrm{Yb}$ nuclear-spin qubits.
- Reported $T_1 \approx 20$ s, $T_2^* = 1.24(5)$ s, and single-qubit gate fidelity $0.99959(6)$.

**Repetitive readout and feedforward — Huie et al. (2023):**
- Demonstrated repetitive projective measurement and real-time control on nuclear-spin qubits in a $^{171}\mathrm{Yb}$ array.
- Reported state-discrimination fidelity 0.993(4), readout survival 0.994(3), and deterministic measurement-conditioned state preparation.

**Hybrid data-qubit / ancilla direction — Nakamura et al. (2024):**
- Realized a dual-isotope Yb tweezer array with $^{171}\mathrm{Yb}$ nuclear-spin data qubits and $^{174}\mathrm{Yb}$ optical-clock ancilla qubits.
- Reported 99.1(1.8)% retained nuclear-spin coherence during 20 ms ancilla imaging, with ancilla imaging fidelity 0.9992 and survival 0.988.

**2024-2026 audit verdict on SOTA:**
- The most meaningful direct 2024 update is the hybrid-Yb ancilla architecture above.
- A targeted 2025-2026 search did not surface a newer peer-reviewed nuclear-spin-neutral-atom hardware benchmark that clearly supersedes the current 2022-2024 record set for this entry.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| First single-atom tomography fidelity | >98% | Early proof-of-principle Yb nuclear-spin qubit | [Noguchi et al. 2011](https://doi.org/10.1103/PhysRevA.84.030301) |
| Single-qubit gate fidelity | 99.959(6)% | $^{171}\mathrm{Yb}$ nuclear-spin qubit in tweezers | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028) |
| Single-qubit control error per Clifford | 5.2(5)$\times 10^{-3}$ | Sub-microsecond RB on $^{171}\mathrm{Yb}$ array | [Jenkins et al. 2022](https://doi.org/10.1103/PhysRevX.12.021027) |
| Spin-echo coherence $T_2$ | 7.9(4) s | Multi-second memory in optical tweezers | [Jenkins et al. 2022](https://doi.org/10.1103/PhysRevX.12.021027) |
| Population lifetime $T_1$ | $\approx 20$ s | Long idle lifetime in the Princeton $^{171}\mathrm{Yb}$ platform | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028) |
| Readout fidelity | 0.993(4) | Repetitive projective readout in $^{171}\mathrm{Yb}$ array | [Huie et al. 2023](https://doi.org/10.1103/PRXQuantum.4.030337) |
| Readout survival | 0.994(3) | State-averaged post-measurement survival | [Huie et al. 2023](https://doi.org/10.1103/PRXQuantum.4.030337) |
| Ancilla-imaging coherence retained | 99.1(1.8)% over 20 ms | Crosstalk check for hybrid QEC-oriented architecture | [Nakamura et al. 2024](https://doi.org/10.1103/PhysRevX.14.041062) |
| Entangling-gate mechanism | Rydberg blockade demonstrated | Two-qubit entangling control exists, but the entry does not overclaim a current 2Q record number | [Ma et al. 2022](https://doi.org/10.1103/PhysRevX.12.021028) |

## Scaling Considerations

- **Readout is nontrivial:** robust fluorescence cycling on a nuclear-spin qubit generally needs magnetic-field engineering, auxiliary levels, or ancilla-assisted schemes.
- **Control is multi-manifold:** the qubit is stored in a quiet manifold, but fast logic usually relies on Raman, microwave, clock-state, or Rydberg pathways that must be phase-stable and low-crosstalk.
- **A natural hybrid story exists:** one of the cleanest 2024 directions is to keep nuclear-spin qubits as long-lived data qubits while delegating syndrome extraction or ancilla work to a different isotope or optical-clock manifold.

### Limitations & Challenges

- **No direct 2026 breakthrough yet:** compared with alkali Rydberg entries, this branch still has fewer headline two-qubit benchmark updates.
- **Small splittings cut both ways:** nuclear-Zeeman qubits are quiet, but that also makes state selectivity and readout engineering harder.
- **Architecture overlap risk:** this entry must stay distinct from the optical-clock-qubit branch, which solves coherence differently and uses a different logical basis.

## References

### Original proposal
- A. J. Daley, M. M. Boyd, J. Ye, and P. Zoller, "Quantum Computing with Alkaline-Earth-Metal Atoms," [Phys. Rev. Lett. 101, 170504 (2008)](https://doi.org/10.1103/PhysRevLett.101.170504) — [arXiv:0808.1940](https://arxiv.org/abs/0808.1940)
- A. J. Daley, J. Ye, and P. Zoller, "State-dependent lattices for quantum computing with alkaline-earth-metal atoms," [Eur. Phys. J. D 65, 207 (2011)](https://doi.org/10.1140/epjd/e2011-20095-2)

### Experimental milestones
- A. Noguchi, Y. Eto, M. Ueda, and M. Kozuma, "Quantum-state tomography of a single nuclear spin qubit of an optically manipulated ytterbium atom," [Phys. Rev. A 84, 030301 (2011)](https://doi.org/10.1103/PhysRevA.84.030301)
- A. Jenkins, J. W. Lis, A. Senoo, W. F. McGrew, and A. M. Kaufman, "Ytterbium Nuclear-Spin Qubits in an Optical Tweezer Array," [Phys. Rev. X 12, 021027 (2022)](https://doi.org/10.1103/PhysRevX.12.021027) — [arXiv:2112.06732](https://arxiv.org/abs/2112.06732)
- S. Ma, A. P. Burgers, G. Liu, J. Wilson, B. Zhang, and J. D. Thompson, "Universal Gate Operations on Nuclear Spin Qubits in an Optical Tweezer Array of $^{171}$Yb Atoms," [Phys. Rev. X 12, 021028 (2022)](https://doi.org/10.1103/PhysRevX.12.021028) — [arXiv:2112.06799](https://arxiv.org/abs/2112.06799)
- W. Huie, L. Li, N. Chen, X. Hu, Z. Jia, W. K. C. Sun, and J. P. Covey, "Repetitive Readout and Real-Time Control of Nuclear Spin Qubits in $^{171}$Yb Atoms," [PRX Quantum 4, 030337 (2023)](https://doi.org/10.1103/PRXQuantum.4.030337) — [arXiv:2305.02926](https://arxiv.org/abs/2305.02926)
- Y. Nakamura, T. Kusano, R. Yokoyama, K. Saito, K. Higashi, N. Ozawa, T. Takano, Y. Takasu, and Y. Takahashi, "Hybrid Atom Tweezer Array of Nuclear Spin and Optical Clock Qubits," [Phys. Rev. X 14, 041062 (2024)](https://doi.org/10.1103/PhysRevX.14.041062) — [arXiv:2406.12247](https://arxiv.org/abs/2406.12247)

## Linked Papers

- [[daley-2008-quantum-computing-with-alkaline-earth-atoms]]
- [[noguchi-2011-nuclear-spin-qubit-optically-manipulated-ytterbium]]
- [[jenkins-2022-ytterbium-nuclear-spin-qubits-optical-tweezer-array]]
- [[ma-2022-nuclear-spin-atom]]
- [[huie-2023-repetitive-readout-nuclear-spin-yb]]
- [[nakamura-2024-hybrid-atom-tweezer-array-nuclear-spin-optical-clock-qubits]]

## Evergreen context

- [[coherence-time-hierarchy]] — the platform only pays off if the storage-coherence advantage stays comfortably ahead of the extra control overhead
- [[rydberg-blockade-mechanism]] — the entangling story still cashes out through temporary access to interacting excited states
- [[divincenzo-criteria]] — useful for judging whether long memory, fast control, and readout are all being satisfied by the same architecture rather than by separate demos

## Related Entries

- [[neutral-atom-qubit]] — umbrella neutral-atom hardware entry
- [[alkaline-earth-neutral-atom-clock-qubit]] — related but logically distinct clock-transition encoding branch
- [[rydberg-neutral-atom-qubit]] — nearest neutral-atom gate-physics cousin
- [[qubit-readout]] — directly relevant because high-fidelity repetitive readout is one of this branch's differentiators
- [[erasure-qubit]] — hybrid data/ancilla and measurement-friendly architectures connect naturally to erasure-aware QEC ideas
