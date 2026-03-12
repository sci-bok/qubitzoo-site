---
title: "Shim et al. 2016 — Charge-Noise-Insensitive Gate Operations for Always-On, Always-Coupled Qubits"
type: reference
arxiv_id: "1602.00320"
doi: "10.1103/PhysRevB.93.121410"
authors:
  - Yun-Pil Shim
  - Jianjia Fei
  - Sangchul Oh
  - Xuedong Hu
  - Mark Friesen
year: 2016
journal: "Physical Review B"
volume: 93
pages: "121410(R)"
status: seed
tags:
  - aeon
  - exchange-only
  - always-on
  - charge-noise
  - spin-qubit
---

# Charge-Noise-Insensitive Gate Operations for Always-On, Always-Coupled Qubits

**Shim et al., PRB 93, 121410(R) (2016)** — [arXiv:1602.00320](https://arxiv.org/abs/1602.00320)

## Summary

Addresses the "always-on" problem in exchange-coupled spin qubits: in real devices, exchange couplings $J_{ij}$ cannot be turned off perfectly, causing unwanted evolution. The AEON (Always-on Exchange-Only) qubit proposal turns this bug into a feature — designing gate operations that work correctly even when exchange is always on, while simultaneously achieving first-order insensitivity to charge noise.

## Key Physics

- Exchange coupling in quantum dots depends exponentially on gate voltages → sensitive to charge noise
- AEON operates at symmetric operating points where $\partial J/\partial V = 0$ (sweet spots)
- Gate sequences designed to be compatible with residual always-on exchange
- Achieves charge-noise-insensitive operations without requiring exchange to be turned off

## Zoo Links

- [[always-on-exchange-only-aeon]]
- [[exchange-only-qubit]] — parent architecture
- [[singlet-triplet-qubit]] — related encoded qubit

## Evergreen Links

- [[heisenberg-exchange-in-quantum-dots]]
