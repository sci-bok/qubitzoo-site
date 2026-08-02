---
title: Confining a resonator to quasi-1D amplifies vacuum fields by 100× over 3D cavities
tags:
- vacuum-fluctuations
- resonator
- circuit-qed
- strong-coupling
created: '2026-03-05'
status: evergreen
---

# Geometry layer of circuit QED

The rms vacuum voltage in a transmission line resonator scales as:

$$V_\text{rms}^0 \sim \sqrt{\frac{\hbar\omega_r}{cL}}$$

where $c$ is capacitance per unit length and $L$ is resonator length. For a coplanar waveguide at $\omega_r/2\pi = 10\,\text{GHz}$ with a $10\,\mu\text{m}$ gap, this gives $V_\text{rms} \sim 2\,\mu\text{V}$ and $\mathcal{E}_\text{rms} \sim 0.2\,\text{V/m}$.

The effective mode volume is $\sim 10^{-5}$ cubic wavelengths — five orders of magnitude smaller than free space. This is what makes circuit QED strong coupling "easy" compared to atomic cavity QED: you don't need a heroic cavity Q or a Rydberg atom, because field confinement does much of the work.

This same principle explains why superconducting quantum circuits achieve coupling-to-loss ratios ($g/\kappa$, $g/\gamma$) that atomic systems struggle to match.

## Routing boundary

This note is the **geometry and zero-point-field layer** of circuit QED. It explains why the resonator presents a large vacuum voltage before a particular qubit is attached.

- Stay here when the live question is how mode volume, capacitance per unit length, resonator length, or impedance set the zero-point voltage available for coupling.
- Switch to [[jaynes-cummings-in-circuits]] when the live question is how that voltage couples through a qubit dipole matrix element to produce $g$, dressed states, or vacuum-Rabi splitting.
- Continue to [[dispersive-readout-mechanism]] or [[resonator-as-quantum-bus]] once the single-qubit coupling has been reduced to a useful off-resonant measurement or two-qubit interaction.

The abstraction boundary is therefore

$$\text{resonator geometry} \longrightarrow V_\mathrm{rms}^0 \longrightarrow g \longrightarrow \text{effective readout or bus interaction}.$$

This note owns the first arrow; [[jaynes-cummings-in-circuits]] owns the second.

## Circuit-QED abstraction ladder

1. Start here for the vacuum field supplied by the resonator geometry.
2. Read [[jaynes-cummings-in-circuits]] for the one-qubit one-mode interaction built from that field.
3. Branch to [[dispersive-readout-mechanism]] for measurement or [[resonator-as-quantum-bus]] for cavity-mediated qubit-qubit exchange.

Source: [[blais-2004-circuit-qed]]
Related: [[circuit-qed]], [[jaynes-cummings-in-circuits]], [[dispersive-readout-mechanism]], [[resonator-as-quantum-bus]], [[high-quality-superconducting-cavities-coupled-to-nonlinear]]
