---
title: A shared resonator entangles distant qubits via virtual photon exchange
tags:
- quantum-bus
- entanglement
- circuit-qed
- two-qubit-gate
created: '2026-03-05'
status: evergreen
---

# Two-qubit interaction layer of circuit QED

A shared resonator becomes a **quantum bus** when two qubits couple to the same cavity mode but both stay detuned from it. Each qubit has its own [[jaynes-cummings-in-circuits]] coupling to the mode, and after adiabatically eliminating the cavity the two interactions combine into an effective qubit-qubit exchange:

$$H_{\mathrm{eff}} \supset J(\sigma_+^{(1)}\sigma_-^{(2)} + \sigma_-^{(1)}\sigma_+^{(2)}), \qquad J \approx \frac{g_1 g_2}{2}\left(\frac{1}{\Delta_1} + \frac{1}{\Delta_2}\right).$$

In the symmetric case $\Delta_1 \approx \Delta_2 = \Delta$, this reduces to the familiar estimate $J \sim g_1 g_2/\Delta$. The cavity stays only **virtually** occupied, so the resonator mediates the interaction without storing a real photon during the gate.

## What this note is for

Use this note when the live question is:
- how two qubits talk to each other through one cavity mode,
- why early circuit-QED architectures could entangle qubits separated by centimeter distances, or
- why shared-mode coupling naturally creates an always-on interaction budget.

Do **not** use this note as the primary entry point for:
- one-qubit cavity hybridization, which belongs in [[jaynes-cummings-in-circuits]], or
- qubit-state-dependent cavity shifts for measurement, which belong in [[dispersive-readout-mechanism]].

The semiconductor branch makes this boundary especially important. [[semiconductor-charge-qubit]] and [[singlet-triplet-qubit]] demonstrate strong one-qubit–mode coupling, while [[rx-qubit]] demonstrates a coherent spin–photon interface; none of those results alone establishes a shared-mode two-qubit entangler. [[aeon-qubit]] is one step more conditional because its protected operating point has no transverse dipole: a bus proposal must first convert it toward the RX regime or use a longitudinal modulation scheme. Read these four notes as an evidence ladder from cavity access to bus architecture, not as four demonstrations of the same mediated gate.

## Why the bus mattered historically

1. **It broke the nearest-neighbor wiring constraint**
   - The resonator let superconducting qubits interact over distances far beyond direct capacitive-coupling range.
   - That made circuit QED feel like a real architecture, not just an isolated qubit plus a readout cavity.

2. **It turned one cavity resource into two jobs**
   - The same resonator family that supports dispersive readout can also support entangling interactions.
   - This is why [[circuit-qed]] became the shared infrastructure layer for measurement, coupling, and later bosonic encoding.

3. **It exposed the cost of fixed interactions**
   - In the simplest bus picture, the effective exchange and associated residual $ZZ$ terms are always there once the qubits share a mode.
   - That pushed the field toward architectures that preserve the long-range-coupling intuition but localize the aggressive tunability in a separate interaction element.

## Boundary with newer coupling architectures

- The bus picture here is the clean conceptual ancestor of modern superconducting multi-qubit wiring.
- [[tunable-coupler]] is the later answer to its biggest systems problem: keep the data qubits coherence-friendly while switching the interaction nearly off at idle.
- [[gmon]] is the historically specific Google branch where Xmon-like qubits and a tunable coupler became one scalable processor architecture.

## Circuit-QED abstraction ladder

Read this cluster in order:
1. [[vacuum-rms-field-scaling]] for why the cavity fields are large enough to make $g$ useful.
2. [[jaynes-cummings-in-circuits]] for the one-qubit one-mode interaction.
3. the bus layer in this note for the two-qubit effective interaction that follows from sharing that mode.

Source: [[blais-2004-circuit-qed]]
Related: [[circuit-qed]], [[transmon]], [[jaynes-cummings-in-circuits]], [[dispersive-readout-mechanism]], [[tunable-coupler]], [[gmon]]
