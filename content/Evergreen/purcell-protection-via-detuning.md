---
title: Detuning a qubit from its cavity exponentially suppresses spontaneous emission (Purcell effect)
tags:
- purcell
- decoherence
- circuit-qed
- lifetime
created: '2026-03-05'
---

A qubit resonant with a lossy cavity inherits the cavity's decay rate — the Purcell effect enhances spontaneous emission. But when the qubit is detuned by $\Delta \gg g$, the effective decay rate through the cavity drops to:

$$\gamma_\kappa = \kappa \left(\frac{g}{\Delta}\right)^2$$

For typical circuit QED parameters ($g/2\pi \sim 50\,\text{MHz}$, $\Delta/2\pi \sim 1\,\text{GHz}$, $\kappa/2\pi \sim 1\,\text{MHz}$), this gives $\gamma_\kappa \sim 2.5\,\text{kHz}$ — a lifetime contribution of $\sim 400\,\mu\text{s}$.

This is the central tension in circuit QED design: you want large $g/\Delta$ for strong readout signal, but small $g/\Delta$ for long qubit lifetime. The transmon solved this by operating at $E_J/E_C \gg 1$, which reduces charge dispersion (noise sensitivity) while keeping $g$ large.

Source: [[blais-2004-circuit-qed]]
Related: [[circuit-qed]], [[transmon]], [[fluxonium]]
