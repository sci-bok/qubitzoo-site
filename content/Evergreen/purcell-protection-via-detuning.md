---
title: Detuning suppresses cavity-mediated spontaneous emission (Purcell effect)
tags:
- purcell
- decoherence
- circuit-qed
- lifetime
created: '2026-03-05'
status: evergreen
---

# Purcell protection is the lifetime branch of dispersive cavity coupling

A qubit resonant with a lossy cavity inherits the cavity's decay rate — the Purcell effect enhances spontaneous emission. But when the qubit is detuned by $\Delta \gg g$, the effective decay rate through the cavity drops to:

$$\gamma_\kappa = \kappa \left(\frac{g}{\Delta}\right)^2$$

For typical circuit QED parameters ($g/2\pi \sim 50\,\text{MHz}$, $\Delta/2\pi \sim 1\,\text{GHz}$, $\kappa/2\pi \sim 1\,\text{MHz}$), this gives $\gamma_\kappa \sim 2.5\,\text{kHz}$ — a lifetime contribution of $\sim 400\,\mu\text{s}$.

The suppression is **quadratic**, not exponential, in the dispersive ratio $g/\Delta$. Detuning protects the qubit because only the small cavity-like component of the dressed qubit state can leak through the resonator linewidth $\kappa$.

## Routing boundary

This note is the **lifetime branch** of the dispersive regime. Use it when the live question is how a lossy readout or bus cavity contributes to qubit relaxation. Use [[dispersive-readout-mechanism]] when the live question is how the same off-resonant interaction produces a qubit-state-dependent cavity shift for measurement. Both descend from [[jaynes-cummings-in-circuits]] after the cavity and qubit are detuned.

This is the central tension in circuit QED design: you want large $g/\Delta$ for strong readout signal, but small $g/\Delta$ for long qubit lifetime. The transmon solved this by operating at $E_J/E_C \gg 1$, which reduces charge dispersion (noise sensitivity) while keeping $g$ large.

Source: [[blais-2004-circuit-qed]]
Related: [[jaynes-cummings-in-circuits]], [[dispersive-readout-mechanism]], [[circuit-qed]], [[transmon]], [[fluxonium]]
