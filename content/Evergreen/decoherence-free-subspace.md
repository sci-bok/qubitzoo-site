---
title: "Decoherence-Free Subspace"
type: evergreen
status: evergreen
created: 2026-03-25
tags:
  - decoherence-free-subspace
  - DFS
  - symmetry-protection
  - collective-noise
  - spin-qubit
  - quantum-error-correction
---

# Decoherence-Free Subspace

A decoherence-free subspace (DFS) is a subspace of the system Hilbert space that is inherently immune to a particular noise channel by virtue of a symmetry in the system-environment coupling. The key insight is algebraic: if the noise operators $\{L_k\}$ in the Lindblad master equation all act identically on every state within a subspace — meaning every state in the subspace is a degenerate eigenstate of all $L_k^\dagger L_k$ — then no information encoded in that subspace leaks to the environment. No active error correction is needed; the protection is passive and exact (to the extent the noise symmetry holds).

The canonical example in spin qubits is protection against collective dephasing — spatially uniform magnetic field fluctuations that shift all spins equally. If the noise Hamiltonian is $H_{\text{noise}} = B(t) \sum_i S_z^{(i)}$, then any subspace with a fixed total $S_z$ eigenvalue is invariant under this perturbation. More precisely, the $m_S = 0$ subspace of $N$ spin-1/2 particles (total $z$-projection zero) contains states that acquire identical phases under uniform $B$-field fluctuations. For two spins, the singlet $|S\rangle = (|\!\uparrow\downarrow\rangle - |\!\downarrow\uparrow\rangle)/\sqrt{2}$ is the unique $m_S = 0$ state with total spin $S = 0$; it spans a trivial (one-dimensional) DFS. The singlet-triplet qubit exploits a related structure: the two $m_S = 0$ states $|S\rangle$ and $|T_0\rangle = (|\!\uparrow\downarrow\rangle + |\!\downarrow\uparrow\rangle)/\sqrt{2}$ form a two-dimensional subspace that is degenerate under uniform fields, though $|S\rangle$ and $|T_0\rangle$ themselves differ in total spin and can split under exchange or gradient terms.

The three-spin DFS is the foundation of exchange-only quantum computing. In a system of three spin-1/2 particles, the $S_z^{\text{total}} = +1/2$ subspace is four-dimensional, but it decomposes into a spin-3/2 quadruplet (unusable — too symmetric) and two spin-1/2 doublets. These two doublets span a two-dimensional DFS: they share the same total $S_z$ and are degenerate under any uniform magnetic perturbation, yet can be distinguished and manipulated by pairwise exchange interactions $J_{ij}\,\vec{S}_i \cdot \vec{S}_j$ which break the permutation symmetry. This is precisely the encoding used by the exchange-only qubit (DiVincenzo et al. 2000) and its sweet-spot descendant, the AEON qubit. Universal control within this DFS requires only exchange — no magnetic field gradients, no spin-orbit coupling, no microwave drives.

It is important to distinguish a decoherence-free **subspace** from a decoherence-free **subsystem** (also called a noiseless subsystem). A DFS is a subspace where all noise operators act as a scalar multiple of the identity; a decoherence-free subsystem is a tensor factor of the Hilbert space where the noise acts trivially on one factor but nontrivially on the other (gauge) factor. The subsystem concept is more general: the logical information lives in the protected factor, while the gauge degrees of freedom can be noisy without affecting the encoded qubit. Both constructions rely on symmetries of the noise, but subsystems require weaker conditions and exist in situations where no DFS does. The practical relevance of the distinction matters when the noise symmetry is only approximate — subsystem encodings can be more robust to symmetry-breaking perturbations.

## Key relationships

- [[exchange-only-qubit]] — encodes in the 3-spin DFS; all gates via exchange within the protected subspace
- [[aeon-qubit]] — always-on exchange variant operating at a sweet spot within the 3-spin DFS
- [[singlet-triplet-qubit]] — operates in the 2-spin $m_S = 0$ subspace; partial DFS protection against uniform field noise

## References

- [Zanardi & Rasetti (1997)](https://doi.org/10.1103/PhysRevLett.79.3306) — first proposal of noiseless quantum codes (decoherence-free subspaces)
- [Lidar, Chuang & Whaley (1998)](https://doi.org/10.1103/PhysRevLett.81.2594) — DFS for collective decoherence
- [DiVincenzo et al. (2000)](https://doi.org/10.1038/35002001) — universal quantum computation with exchange interactions in a DFS
- [Knill, Laflamme & Viola (2000)](https://doi.org/10.1103/PhysRevLett.84.2525) — theory of decoherence-free subsystems (noiseless subsystems)
