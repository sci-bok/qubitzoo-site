---
title: "Bosonic Code Hierarchy"
type: evergreen
status: evergreen
created: 2026-03-25
tags:
  - bosonic-codes
  - cat-code
  - GKP-code
  - binomial-codes
  - quantum-error-correction
  - cavity-QED
  - oscillator
---

# Bosonic Code Hierarchy

Bosonic quantum error correction encodes a logical qubit in the infinite-dimensional Hilbert space of a single quantum harmonic oscillator — typically a superconducting microwave cavity — using the redundancy of the large Hilbert space to detect and correct errors. This stands in contrast to the standard approach of distributing one logical qubit across many physical qubits. The dominant error channel in a cavity is single-photon loss at rate $\kappa$, described by the jump operator $\hat{a}$. A good bosonic code must satisfy the Knill-Laflamme conditions for this error set: the code words $|0_L\rangle$ and $|1_L\rangle$ must be designed so that photon loss events produce orthogonal error syndromes that can be distinguished and corrected without disturbing the encoded information.

**Cat codes** encode logical states as superpositions of coherent states in phase space. The simplest version uses $|0_L\rangle \propto |\alpha\rangle + |-\alpha\rangle$ and $|1_L\rangle \propto |\alpha\rangle - |-\alpha\rangle$, separated by photon number parity. Single-photon loss maps between the two parity manifolds and is detected by a parity measurement, but it also induces a phase flip ($Z$ error) on the logical qubit. Crucially, bit-flip ($X$) errors require the oscillator state to tunnel between the coherent state peaks in phase space, which is suppressed exponentially as $e^{-2|\alpha|^2}$. Cat codes thus have strongly biased noise: $Z$ errors dominate while $X$ errors are exponentially rare. The Kerr-cat variant stabilizes this encoding autonomously via a two-photon drive and Kerr nonlinearity. Cat codes are the easiest bosonic codes to prepare and stabilize, and their biased noise structure pairs naturally with repetition codes that only need to correct the dominant $Z$ errors.

**GKP (Gottesman-Kitaev-Preskill) codes** encode information in grid states — periodic superpositions of position eigenstates (or equivalently, comb states in phase space). The ideal GKP code words are $|0_L\rangle = \sum_s |q = 2s\sqrt{\pi}\rangle$ and $|1_L\rangle = \sum_s |q = (2s+1)\sqrt{\pi}\rangle$. Small displacement errors $e^{i\xi\hat{p}}$ or $e^{-i\eta\hat{q}}$ shift the state within a unit cell of the grid and are corrected by measuring the displacement modulo the lattice period. GKP codes can correct *arbitrary* small displacement errors in both quadratures, making them the most general bosonic error correction scheme. They asymptotically approach the quantum capacity of the Gaussian loss channel — the bosonic analogue of the Shannon limit. The catch is preparation: ideal GKP states have infinite energy, and realistic finitely-squeezed approximations (squeezed by $\sim 10{-}12\,\text{dB}$) are extremely challenging to create, requiring sequences of conditional displacements or breeding protocols.

**Binomial codes** provide exact protection against up to $N$ photon loss (and gain) events by encoding in carefully chosen superpositions of Fock states. The order-$N$ binomial code uses Fock states $|0\rangle, |N+1\rangle, |2(N+1)\rangle, \ldots$ with binomial coefficients. For example, the order-1 code protecting against single photon loss is $|0_L\rangle = (|0\rangle + |4\rangle)/\sqrt{2}$, $|1_L\rangle = |2\rangle$. Binomial codes occupy a middle ground: they provide exact multi-photon protection (unlike cat codes, which only correct one error type), but they do not approach the Shannon limit (unlike GKP). They are relatively easy to prepare deterministically via optimal control pulses in circuit QED systems. All three code families share a common hardware platform: 3D superconducting microwave cavities with photon lifetimes of 1–10 ms, coupled to transmon ancillae for state preparation, syndrome measurement, and feedback. The choice among them reflects a tradeoff between ease of preparation, noise bias structure, and generality of error correction — with cat codes favoring biased-noise architectures, GKP favoring universal correction at high resource cost, and binomial codes offering a practical intermediate path.

## Key relationships

- [[cat-codes]] — coherent-state superposition encoding with exponentially biased noise ($X$ suppressed)
- [[gkp-codes]] — grid-state encoding correcting arbitrary displacement errors; approaches channel capacity
- [[binomial-codess]] — Fock-state encoding with exact protection against $N$ photon loss events
- [[kerr-cat-qubit]] — autonomously stabilized cat code via two-photon drive and Kerr nonlinearity
- [[bosonic-qubit]] — the general concept of encoding qubits in oscillator modes
- [[circuit-qed]] — the hardware platform (3D cavities + transmon ancillae) for all bosonic codes
- [[noise-bias-and-asymmetric-error-channels]] — cat codes as the prime example of engineered noise bias

## References

- [Cochrane, Milburn & Munro (1999)](https://doi.org/10.1103/PhysRevA.59.2631) — cat code proposal for photon loss correction
- [Gottesman, Kitaev & Preskill (2001)](https://doi.org/10.1103/PhysRevA.64.012310) — GKP code: encoding a qubit in an oscillator
- [Michael et al. (2016)](https://doi.org/10.1103/PhysRevX.6.031006) — binomial codes for bosonic quantum error correction
- [Ofek et al. (2016)](https://doi.org/10.1038/nature18949) — first QEC gain in a bosonic (cat) code in a 3D cavity
- [Sivak et al. (2023)](https://doi.org/10.1038/s41586-023-05782-6) — real-time QEC with GKP codes exceeding break-even
