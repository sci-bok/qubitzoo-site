---
title: "Michael et al. 2016 — New Class of Quantum Error-Correcting Codes for a Bosonic Mode"
type: reference
arxiv_id: "1602.00008"
doi: "10.1103/PhysRevX.6.031006"
authors:
  - Marios H. Michael
  - Matti Silveri
  - R. T. Brierley
  - Victor V. Albert
  - Juha Salmilehto
  - Liang Jiang
  - S. M. Girvin
year: 2016
journal: "Physical Review X"
volume: 6
pages: "031006"
status: seed
tags:
  - bosonic-code
  - quantum-error-correction
  - binomial-code
  - cavity-qubit
---

# New Class of Quantum Error-Correcting Codes for a Bosonic Mode

**Michael et al., PRX 6, 031006 (2016)** — [arXiv:1602.00008](https://arxiv.org/abs/1602.00008)

## Summary

Introduces "binomial codes" — a family of bosonic quantum error-correcting codes that encode a logical qubit in the Fock states of a single harmonic oscillator (e.g., a superconducting microwave cavity). The binomial code words are superpositions of Fock states with binomial coefficients, designed to exactly correct errors up to a specified order in photon loss, gain, and dephasing.

## Key Results

1. **Code words**: For protection against up to $L$ photon losses:
$$|0_L\rangle = \sum_{m\text{ even}} \sqrt{\binom{L+1}{m}} |m(S+1)\rangle, \quad |1_L\rangle = \sum_{m\text{ odd}} \sqrt{\binom{L+1}{m}} |m(S+1)\rangle$$
   (normalized, with spacing parameter $S$)

2. **Error correction**: Exactly corrects up to $L$ photon losses, $G$ photon gains, and $D$ dephasing events, requiring $N + 1 = (L + G)(S + 1) + D(S + 1)$ Fock levels.

3. **Simplest example** (kitten code, $L=1$): $|0_L\rangle \propto |0\rangle + |4\rangle$, $|1_L\rangle = |2\rangle$. Corrects single photon loss.

## Significance

Part of the growing family of bosonic codes (alongside cat codes, GKP codes) that exploit the infinite-dimensional Hilbert space of a harmonic oscillator for hardware-efficient quantum error correction. Demonstrated experimentally in 3D superconducting cavities.

## Zoo Links

- [[binomial-code-fault-tolerant-logical-qubits-encoded-in]]
- [[high-quality-superconducting-cavities-coupled-to-nonlinear]] — the hardware platform

## Evergreen Links

- [[dispersive-readout-mechanism]]
- [[jaynes-cummings-in-circuits]]
