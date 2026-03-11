---
title: A shared resonator entangles distant qubits via virtual photon exchange
tags:
- quantum-bus
- entanglement
- circuit-qed
- two-qubit-gate
created: '2026-03-05'
---

Two qubits placed at different antinodes of the same transmission line resonator can be entangled even when both are detuned from the cavity. The mechanism is virtual photon exchange: qubit 1 emits a virtual photon into the resonator mode, and qubit 2 absorbs it, producing an effective coupling:

$$J = \frac{g_1 g_2}{\Delta}$$

No real photons populate the cavity during this process — the resonator mediates the interaction without being excited. This "quantum bus" architecture enables two-qubit gates between qubits separated by centimeter distances on a chip, far exceeding direct capacitive coupling range.

The bus coupling is always-on in the simplest version, which complicates idle operations. Later architectures introduced tunable couplers to switch $J$ on and off — see [[a-tunable-coupling-scheme-for-implementing-high-fidelity]].

Source: [[blais-2004-circuit-qed]]
Related: [[circuit-qed]], [[transmon]], [[a-tunable-coupling-scheme-for-implementing-high-fidelity]]
