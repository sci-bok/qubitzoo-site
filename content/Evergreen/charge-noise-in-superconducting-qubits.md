---
title: "Charge Noise in Superconducting Qubits"
type: evergreen
status: evergreen
tags:
  - decoherence
  - charge-noise
  - superconducting-qubit
  - 1-over-f-noise
---

# Charge Noise in Superconducting Qubits

Charge noise is the low-frequency fluctuation of electrostatic offset charge seen by a superconducting island. In the Cooper-pair-box family it enters directly through the gate-charge term $n_g$, so even tiny background-charge motion from interface traps, oxide defects, quasiparticle rearrangements, or fluctuating two-level systems can modulate the qubit splitting and wash out phase coherence.

This note is about the **noise source and Hamiltonian coupling itself**. For the broader cross-platform design pattern of parking a device at a protected extremum, see [[charge-noise-sweet-spot]].

## Mechanism

For the Cooper pair box and its descendants,

$$H = 4E_C(\hat n - n_g)^2 - E_J\cos\hat{\varphi}$$

so fluctuations $n_g \rightarrow n_g + \delta n_g(t)$ perturb the level spacing through

$$\delta \omega_{01}(t) \approx \frac{\partial \omega_{01}}{\partial n_g}\,\delta n_g(t) + \frac{1}{2}\frac{\partial^2 \omega_{01}}{\partial n_g^2}\,\delta n_g^2(t)+\cdots.$$

Away from protection points, the leading term dominates and the pure-dephasing rate scales as

$$\Gamma_\varphi \propto \left|\frac{\partial E_{01}}{\partial n_g}\right|^2 S_{n_g}(\omega \to 0),$$

with $S_{n_g}(\omega)$ typically close to a $1/f$ spectrum. The practical signature is spectral wandering and Ramsey dephasing that improves dramatically once the circuit is moved to a flatter part of its charge-dispersion landscape.

## Why some superconducting qubits care more than others

1. **Charge-regime circuits are directly exposed**
   - [[cooper-pair-box-charge-qubit]] is the canonical failure mode: large charge dispersion makes background-charge drift immediately visible in the qubit frequency.

2. **Transmon-like circuits suppress the same noise source by flattening the bands**
   - [[transmon]] does not eliminate charge disorder in the environment. It makes $\partial \omega_{01}/\partial n_g$ exponentially small by pushing to large $E_J/E_C$.
   - [[gatemon]] and [[mergemon]] inherit this same logic when they stay in the transmon regime: keep the CPB Hamiltonian, but flatten its charge dispersion hard enough that offset-charge drift stops dominating the story.

3. **Superinductive / protected circuits redirect the sensitivity budget**
   - [[fluxonium]], [[heavy-fluxonium-qubit]], [[gatemonium]], [[0-pi-qubit]], and related protected-circuit designs reduce charge sensitivity by changing the effective energy landscape, so other noises, especially flux or materials loss, often become the dominant limit instead.

## Routing boundary

- Use this note when the live question is **what physical fluctuation is causing dephasing, and where does it enter the Hamiltonian?**
- Use [[charge-noise-sweet-spot]] when the live question is **what design or operating-point trick makes the first derivative vanish?**
- Read both when comparing CPB-style fragility against transmon-style or protected-circuit robustness.

## Historical arc

- [[cooper-pair-box-charge-qubit]] (1999): the original superconducting qubit, with strong charge dispersion and nanosecond-scale dephasing away from degeneracy.
- Quantronium (2002): showed that a symmetry point could turn the same noisy device into a usable qubit.
- [[transmon]] (2007): the decisive move, flattening the entire charge band so active offset-charge management stopped being the central problem.
- Modern superconducting circuits: charge noise is still present in the environment, but for well-designed devices it is often no longer the dominant coherence bottleneck.

## Key relationships

- [[cooper-pair-box-charge-qubit]] — the cleanest example of direct charge-noise vulnerability
- [[transmon]] — exponential suppression of charge dispersion at large $E_J/E_C$
- [[charge-noise-sweet-spot]] — the complementary note on protected operating points

## References

- [[nakamura-1999-cooper-pair-box]]
- [[koch-2007-transmon]]
