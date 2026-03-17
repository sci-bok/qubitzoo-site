---
title: "√SWAP as a Universal Two-Qubit Gate"
type: evergreen
status: evergreen
tags:
  - quantum-gate
  - spin-qubit
  - universality
---


The square root of SWAP operation, $U_{\text{sw}}^{1/2}$, combined with single-qubit rotations, forms a universal gate set for quantum computation. This is the native entangling gate for exchange-coupled spin qubits.

## Construction

The SWAP operator exchanges two qubit states: $U_{\text{sw}}|ij\rangle = |ji\rangle$. It arises naturally from the Heisenberg exchange $H = J\,\vec{S}_1 \cdot \vec{S}_2$ when pulsed for $\int J\,dt = \pi$.

The $\sqrt{\text{SWAP}}$ is obtained by pulsing for half that duration. It creates maximal entanglement from a product state and, together with single-qubit $Z$-rotations, constructs CNOT:

$$U_{\text{XOR}} = e^{i\frac{\pi}{2}S_1^z}\,e^{-i\frac{\pi}{2}S_2^z}\,U_{\text{sw}}^{1/2}\,e^{i\pi S_1^z}\,U_{\text{sw}}^{1/2}$$

## Significance

- SWAP alone conserves total spin angular momentum → not universal by itself
- $\sqrt{\text{SWAP}}$ breaks this conservation → universal when combined with local operations
- Native to any architecture with [[heisenberg-exchange-in-quantum-dots]]

## References

- [[loss-divincenzo-1998-quantum-dots]]
- [[exchange-only-qubit]] — uses only exchange interactions (no single-qubit rotations needed)
