---
title: The Jaynes-Cummings model maps exactly onto superconducting circuits at charge degeneracy
tags:
- circuit-qed
- jaynes-cummings
- superconducting
created: '2026-03-05'
---

At the charge degeneracy point ($N_g = 1/2$) of a Cooper pair box inside a transmission line resonator, the full circuit Hamiltonian reduces exactly to the Jaynes-Cummings Hamiltonian of atomic cavity QED. The qubit splitting $\Omega = E_J$ is set by the Josephson energy, and the coupling $g = (\beta e/\hbar)\sqrt{\hbar\omega_r/cL}$ is determined entirely by geometry and circuit parameters.

This is not an approximation or analogy — it is a mathematical identity. The artificial atom is permanently fixed at the field antinode (unlike real atoms transiting a cavity), so $g$ is constant and the system stays in strong coupling indefinitely.

The mapping breaks down away from degeneracy: a longitudinal coupling term $\propto (a^\dagger + a)\sigma_z$ appears, and $g$ is reduced by $\sin\theta$.

Source: [[blais-2004-circuit-qed]]
Related: [[circuit-qed]], [[cooper-pair-box-charge-qubit]], [[transmon]]
