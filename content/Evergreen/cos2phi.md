---
title: "$\\cos(2\\varphi)$ Element in Superconducting Circuits"
type: evergreen
status: seed
tags:
  - superconducting
  - nonlinear-elements
  - cos2phi
  - protected-qubits
source_paper: '[[strickland-2024-gatemonium-a-voltage-tunable-fluxonium]]'
qubit_types:
  - '[[gatemonium]]'
  - '[[0-pi-qubit]]'
date_created: '2026-03-10'
influence_score: 0.42
verification_confidence: confirmed
generated_by: scibok-curation
---

# $\cos(2\varphi)$ Element in Superconducting Circuits

A $\cos(2\varphi)$ potential energy term can emerge in superconducting circuits through higher-order Cooper pair tunneling processes (coherent transport of pairs of Cooper pairs). This produces a potential with doubled periodicity compared to the standard Josephson $\cos(\varphi)$.

## Physical Origin

In circuits with two parallel Josephson junctions sharing a common island (e.g., the 0-π qubit or gatemonium), destructive interference can suppress the first-harmonic $\cos(\varphi)$ term while preserving the second-harmonic $\cos(2\varphi)$. This occurs when the two junctions have matched energies and the external flux is tuned to half a flux quantum.

## Significance for Protected Qubits

A pure $\cos(2\varphi)$ potential has degenerate minima at $\varphi = 0$ and $\varphi = \pi$, which can encode qubit states with intrinsic protection against both charge and flux noise — a route toward hardware-protected quantum memory. This is the operating principle of the [[0-pi-qubit]] family.

## In Gatemonium

In [[gatemonium]], voltage-tunable semiconductor weak links (replacing tunnel junctions) allow in-situ control of the $E_J$ ratio, enabling continuous tuning between the standard Josephson regime and the $\cos(2\varphi)$-dominated regime.

## References

- [[strickland-2024-gatemonium-a-voltage-tunable-fluxonium]]
- [[0-pi-qubit]]
