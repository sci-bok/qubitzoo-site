---
title: The Jaynes-Cummings model maps exactly onto superconducting circuits at charge degeneracy
tags:
- circuit-qed
- jaynes-cummings
- superconducting
created: '2026-03-05'
status: evergreen
---

# Single-qubit interaction layer of circuit QED

This note is the **single-qubit, single-mode layer** of circuit QED. At the charge degeneracy point ($N_g = 1/2$) of a [[cooper-pair-box-charge-qubit]] inside a transmission-line resonator, the full circuit Hamiltonian reduces exactly to the Jaynes-Cummings Hamiltonian:

$$H = \hbar\omega_r a^\dagger a + \frac{\hbar\Omega}{2}\sigma_z + \hbar g(a^\dagger\sigma_- + a\sigma_+)$$

with qubit splitting $\Omega = E_J$ and coupling

$$g = \frac{\beta e}{\hbar}\sqrt{\frac{\hbar\omega_r}{cL}}.$$

For the original Cooper-pair-box realization, this is not just an analogy to atomic cavity QED. It is an exact circuit Hamiltonian statement. The artificial atom is lithographically pinned to the field antinode, so the coupling is stable rather than transit-limited.

## What this note is for

Use this note when the live question is:
- how a **single superconducting qubit hybridizes with one resonator mode**,
- where vacuum-Rabi splitting and dressed states come from, or
- what microscopic coupling $g$ later feeds the dispersive and bus pictures.

Do **not** use this note as the main entry point for:
- resonator geometry and zero-point-field scaling before a qubit is attached, which belong in [[vacuum-rms-field-scaling]],
- qubit-state-dependent cavity shifts, which belong in [[dispersive-readout-mechanism]], or
- effective qubit-qubit exchange through a shared cavity, which belongs in [[resonator-as-quantum-bus]].

## Why the model matters

1. **It defines strong coupling in circuit QED**
   - Once $g$ exceeds the cavity linewidth and qubit decay rate, coherent excitation exchange outruns loss.
   - That is the regime where vacuum-Rabi splitting, swap oscillations, and cavity-mediated control become meaningful hardware resources.

2. **It is the parent Hamiltonian for the rest of the circuit-QED stack**
   - Near resonance, it gives polaritonic dressed states.
   - At large detuning, a Schrieffer-Wolff reduction turns the same interaction into dispersive shifts and effective two-qubit couplings.

3. **It explains why geometry matters so much**
   - The coupling is large because [[vacuum-rms-field-scaling]] makes the zero-point voltage of a quasi-1D resonator unusually large.
   - Circuit QED wins by combining that field concentration with the huge dipole moment of a superconducting qubit.

## Boundary of validity

- For the original [[cooper-pair-box-charge-qubit]] at charge degeneracy, the mapping is exact.
- Away from degeneracy, a longitudinal term $\propto (a^\dagger + a)\sigma_z$ appears and the transverse coupling is reduced by $\sin\theta$.
- For [[transmon]] and other weakly anharmonic descendants, the strict two-level derivation becomes approximate, but the same Jaynes-Cummings intuition still organizes the low-excitation physics.

## Circuit-QED abstraction ladder

Read this cluster in order:
1. [[vacuum-rms-field-scaling]] for why the cavity fields are so large.
2. [[jaynes-cummings-in-circuits]] for the one-qubit one-mode interaction.
3. [[dispersive-readout-mechanism]] or [[resonator-as-quantum-bus]] for the two main useful effective limits of that interaction.

Source: [[blais-2004-circuit-qed]]
Related: [[circuit-qed]], [[cooper-pair-box-charge-qubit]], [[transmon]], [[dispersive-readout-mechanism]], [[resonator-as-quantum-bus]]
