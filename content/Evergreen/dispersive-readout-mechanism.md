---
title: Dispersive readout works because the qubit state shifts the cavity frequency
tags:
- readout
- dispersive
- circuit-qed
- qnd
created: '2026-03-05'
---

When a qubit is detuned from its cavity by $\Delta = \omega_r - \Omega \gg g$, the Jaynes-Cummings interaction produces a qubit-state-dependent cavity frequency shift:

$$\omega_r \rightarrow \omega_r \pm \frac{g^2}{\Delta}$$

Ground state pulls the cavity one way; excited state pulls it the other. Measuring the transmitted phase of a probe tone at $\omega_r$ reveals the qubit state without exchanging energy — a quantum non-demolition (QND) measurement.

The measurement backaction is controlled by the photon number $\bar{n}$ in the readout pulse. Too many photons ($\bar{n} \gtrsim n_\text{crit} = \Delta^2/4g^2$) break the dispersive approximation and cause measurement-induced transitions. The signal-to-noise ratio improves with integration time and is ultimately limited by the amplifier noise temperature, not quantum backaction.

This mechanism underpins essentially all modern superconducting qubit readout and was first proposed in [[blais-2004-circuit-qed]].

Related: [[circuit-qed]], [[transmon]], [[high-quality-superconducting-cavities-coupled-to-nonlinear]]
