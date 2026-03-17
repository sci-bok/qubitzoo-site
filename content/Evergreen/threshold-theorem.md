---
title: "Threshold Theorem"
type: evergreen
status: evergreen
tags:
  - threshold-theorem
  - fault-tolerance
  - quantum-error-correction
  - logical-qubit
  - overhead
---


The threshold theorem is the foundational result of fault-tolerant quantum computation: if the error rate per physical gate is below a constant threshold $p_{\text{th}}$, then arbitrarily long quantum computations can be performed with arbitrarily small logical error rate, using only a polylogarithmic overhead in physical qubits and gates.

## Statement

**Theorem** (Aharonov & Ben-Or 1997, Kitaev 1997, Knill, Laflamme & Zurek 1998): There exists a threshold error rate $p_{\text{th}} > 0$ such that for any quantum circuit of size $L$ (number of gates) and any target failure probability $\epsilon > 0$, if the physical error rate satisfies $p < p_{\text{th}}$, then the circuit can be simulated fault-tolerantly using:

$$O\left(L \cdot \text{polylog}\left(\frac{L}{\epsilon}\right)\right)$$

physical operations, achieving overall failure probability $\leq \epsilon$.

## The Mechanism: Concatenated Codes

The original proofs used concatenated quantum error-correcting codes. At the first level, each logical qubit is encoded in a $[[n,1,d]]$ code. At the $k$-th level of concatenation, the effective error rate is:

$$p_{\text{eff}}^{(k)} = \frac{1}{c}\left(c \cdot p\right)^{2^k}$$

where $c$ is a constant depending on the code and fault-tolerant gadgets. If $p < p_{\text{th}} = 1/c$, then $p_{\text{eff}}^{(k)}$ decreases doubly exponentially with $k$.

To achieve logical error rate $\epsilon$ for a circuit of depth $L$:

$$p_{\text{eff}}^{(k)} < \frac{\epsilon}{L} \quad \Rightarrow \quad k = O\left(\log\log\left(\frac{L}{\epsilon}\right)\right)$$

The total qubit overhead is $n^k = O\left(\text{polylog}(L/\epsilon)\right)$.

## Threshold Values

The numerical value of $p_{\text{th}}$ depends on the noise model, error-correcting code, and fault-tolerant gadget design:

| Approach | Noise Model | $p_{\text{th}}$ |
|---|---|---|
| Concatenated Steane code | Adversarial | $\sim 2 \times 10^{-5}$ |
| Concatenated Steane code | Stochastic | $\sim 3 \times 10^{-4}$ |
| Knill (teleportation-based) | Stochastic | $\sim 3 \times 10^{-2}$ |
| Surface code (2D topological) | Depolarizing | $\sim 1.1 \times 10^{-2}$ |
| Surface code | Erasure | $\sim 50\%$ |
| XZZX surface code | Biased $Z$ noise | $\sim 50\%$ (for pure $Z$) |

## Connecting Physical Metrics to Logical Viability

The threshold theorem transforms the question "can we build a quantum computer?" into a quantitative engineering challenge: achieving $p < p_{\text{th}}$. The relevant physical metrics are:

1. **Gate error rate** $p_g$: Must satisfy $p_g < p_{\text{th}}$ for the chosen QEC code. For surface codes, this requires $p_g \lesssim 10^{-2}$.

2. **Measurement error rate** $p_m$: Must be comparable to $p_g$; high-fidelity mid-circuit measurement is essential.

3. **Coherence-to-gate-time ratio**: The number of gates executable within coherence time, $T_2/t_{\text{gate}}$, sets an upper bound on circuit depth and determines how far below threshold the effective error rate falls.

4. **Correlated errors**: The theorem assumes errors are weakly correlated. Spatially or temporally correlated noise (e.g., cosmic rays, TLS fluctuations) can reduce the effective threshold.

The **logical error rate** for a distance-$d$ surface code below threshold scales as:

$$p_L \sim \left(\frac{p}{p_{\text{th}}}\right)^{\lfloor d/2 \rfloor + 1}$$

Google's Willow experiment (2024) was the first to demonstrate $p_L$ decreasing with increasing $d$ (from $d=3$ to $d=7$), confirming operation below the surface code threshold with superconducting qubits.

## Assumptions and Limitations

The threshold theorem assumes:
- **Independent errors** (or short-range correlations): Leakage, cosmic-ray events, and crosstalk can violate this.
- **Fast classical processing**: The decoder must keep up with the syndrome extraction rate.
- **Fresh ancillas**: Ancilla qubits must be reliably re-prepared each round.
- **Parallelism**: Gates on disjoint qubits can be performed simultaneously.

Relaxing these assumptions typically lowers the threshold but does not eliminate it.

## Historical Context

- Shor (1996) introduced the first quantum error-correcting codes and fault-tolerant constructions.
- Aharonov & Ben-Or (1997) proved the threshold theorem for concatenated codes under adversarial noise.
- Knill, Laflamme & Zurek (1998) independently proved threshold results and estimated $p_{\text{th}} \sim 10^{-4}$.
- Kitaev (2003) introduced topological codes (toric/surface code) with higher thresholds.
- Dennis et al. (2002) mapped surface code decoding to a statistical mechanics problem, establishing $p_{\text{th}} \approx 10.9\%$ for depolarizing noise.
- Google Willow (2024) first experimental demonstration of below-threshold operation in a surface code.

## References

- [[surface-code-logical-qubit]]
- [[color-code-logical-qubit]]
- [[noise-bias-and-asymmetric-error-channels]]
