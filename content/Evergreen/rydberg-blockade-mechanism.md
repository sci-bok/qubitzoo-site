---
title: "Rydberg Blockade Mechanism"
type: evergreen
status: evergreen
tags:
  - rydberg
  - neutral-atom
  - blockade
  - van-der-waals
  - entangling-gate
  - CZ-gate
---


The Rydberg blockade is the fundamental mechanism enabling entangling gates between neutral atoms in optical tweezer arrays and optical lattices. It exploits the enormous electric dipole moments of Rydberg states ($n \gtrsim 50$) to create strong, long-range interactions that conditionally prevent double excitation of nearby atom pairs.

## Physics of the Interaction

When a neutral atom is excited to a Rydberg state $|r\rangle$ with principal quantum number $n$, its orbital radius scales as $n^2 a_0$ and its polarizability scales as $n^7$. Two atoms both in Rydberg states experience a van der Waals interaction:

$$V_{\text{vdW}}(R) = \frac{C_6}{R^6}$$

where $R$ is the interatomic distance and the $C_6$ coefficient scales as $n^{11}$. For typical experimental parameters ($n \sim 70$, $R \sim 3{-}10\,\mu\text{m}$), this interaction strength reaches $V/\hbar \sim 2\pi \times 10{-}1000\,\text{MHz}$, vastly exceeding qubit transition linewidths and Rabi frequencies.

## The Blockade Condition

Consider two atoms separated by distance $R$, each driven by a laser with Rabi frequency $\Omega$ on the transition $|g\rangle \to |r\rangle$. The doubly-excited state $|rr\rangle$ is shifted in energy by $V(R) = C_6/R^6$. If:

$$V(R) \gg \hbar\Omega$$

then the laser is far off-resonance for exciting the second atom when the first is already in $|r\rangle$. This defines the **blockade regime**: at most one atom in the pair can be in the Rydberg state.

The **blockade radius** is defined as the distance where the interaction equals the excitation linewidth:

$$R_b = \left(\frac{C_6}{\hbar\Omega}\right)^{1/6}$$

For $C_6/\hbar \sim 2\pi \times 800\,\text{GHz}\,\mu\text{m}^6$ (rubidium $|70S\rangle$) and $\Omega/2\pi \sim 1\,\text{MHz}$, $R_b \approx 10\,\mu\text{m}$, encompassing several lattice sites.

## Entangling Gate Protocol

The Rydberg blockade enables a controlled-Z (CZ) gate via the following protocol:

1. Apply a $\pi$ pulse to atom 1: $|g\rangle_1 \to |r\rangle_1$
2. Apply a $2\pi$ pulse to atom 2: $|g\rangle_2 \to |r\rangle_2 \to |g\rangle_2$ (acquires a $\pi$ phase)
3. Apply a $\pi$ pulse to atom 1: $|r\rangle_1 \to |g\rangle_1$

If atom 1 is in $|g\rangle_1$ (the non-Rydberg qubit state), step 1 excites it, step 2 is blockaded (no phase acquired), and step 3 de-excites it. If atom 1 starts in the other qubit state (not coupled to Rydberg), step 2 proceeds normally and acquires phase $\pi$. The net truth table is:

$$|00\rangle \to |00\rangle, \quad |01\rangle \to |01\rangle, \quad |10\rangle \to |10\rangle, \quad |11\rangle \to -|11\rangle$$

which is a CZ gate.

## Blockade Fidelity

The CZ gate fidelity is limited by:

- **Finite blockade strength**: Residual population in $|rr\rangle$ scales as $(\Omega/V)^2$, giving a blockade error:

$$\epsilon_{\text{blockade}} \sim \left(\frac{\Omega R^3}{C_6^{1/2}}\right)^2$$

- **Rydberg state decay**: Lifetime $\tau_r \propto n^3$ at zero temperature, reduced by blackbody radiation at finite $T$.

- **Doppler and motional effects**: Atomic motion during the gate changes $R$ and introduces phase noise. Resolved by using tightly trapped atoms at $\mu\text{K}$ temperatures.

State-of-the-art implementations achieve CZ fidelities of 99.5% (Evered et al. 2023) with ongoing improvements from pulse optimization and higher Rydberg states.

## Historical Context

- Jaksch et al. (2000) proposed the Rydberg blockade gate mechanism.
- Lukin et al. (2001) independently proposed "dipole blockade" for quantum information.
- Urban et al. (2009) and Gaëtan et al. (2009) first observed blockade between individual atoms.
- Saffman et al. (2010) provided a comprehensive review establishing the field.
- Evered et al. (2023) demonstrated 99.5% CZ fidelity in $^{87}\text{Rb}$ tweezer arrays.

## References

- [[rydberg-neutral-atom-qubit]]
- [[neutral-atom-qubit]]
- [[coherence-time-hierarchy]]
