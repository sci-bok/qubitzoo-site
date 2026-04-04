---
title: Flip-Flop Qubit
entry_type: qubit
technology_family: Silicon Spin
status: proposed
figure_reviewed: false
first_proposed_year: 2017
first_demonstrated_year: null
keywords:
- flip-flop qubit
- silicon
- phosphorus donor
- electric dipole
- long-range coupling
- spin qubit
- electron-nuclear spin
- Tosi
influence_score: 0.72
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[flip-flop-qubit-figure.png]]

## Description

The flip-flop qubit encodes quantum information in the combined electron-nuclear spin states of a phosphorus ($^{31}\text{P}$) donor atom in silicon. The two computational basis states are:

$$|0\rangle = |\!\uparrow_e\, \Downarrow_n\rangle, \quad |1\rangle = |\!\downarrow_e\, \Uparrow_n\rangle$$

where arrows denote electron spin ($\uparrow/\downarrow$) and nuclear spin ($\Uparrow/\Downarrow$) orientations. In each state, the electron and nuclear spins point in opposite directions — hence "flip-flop." These states are connected by a simultaneous electron-nuclear spin flip driven by transverse hyperfine interaction, which can be electrically tuned by displacing the electron wavefunction relative to the nucleus using gate electrodes.

The critical innovation of the flip-flop qubit is that this electron displacement creates a large electric dipole moment (~0.3 $e \cdot$nm). Two nearby flip-flop qubits can then interact via electric dipole-dipole coupling over distances of ~200 nm, roughly 10× farther than the ~15 nm exchange coupling range of conventional silicon spin qubits (Loss-DiVincenzo or Kane architectures). This dramatically relaxes the fabrication precision requirements — individual donors no longer need to be placed with atomic accuracy.

The qubit is controlled entirely via microwave electric fields applied to gate electrodes, without requiring oscillating magnetic fields or ESR/NMR pulses. The qubit frequency is tunable via dc gate voltages that shift the electron position, and two-qubit gates are activated by tuning two qubits into resonance.

## Hamiltonian

The single-qubit Hamiltonian in the flip-flop subspace near the charge-spin hybridization point:

$$H = \frac{\hbar\omega_0}{2}\sigma_z + \hbar\Omega_E(t)\sigma_x$$

where $\omega_0$ is the qubit splitting (tunable via dc electric field) and $\Omega_E$ is the Rabi frequency from the ac electric drive. The qubit splitting depends on the electron position:

$$\hbar\omega_0 = \gamma_e B_0 - \gamma_n B_0 + A(\mathbf{E}_{\text{dc}})$$

where $A(\mathbf{E}_{\text{dc}})$ is the position-dependent hyperfine coupling and $B_0$ is the static magnetic field.

The two-qubit dipole-dipole interaction at distance $r$:

$$H_{\text{dip}} = \frac{e^2 d_1 d_2}{4\pi\epsilon r^3}\sigma_x^{(1)}\sigma_x^{(2)}$$

where $d_i$ is the electric dipole moment of qubit $i$, yielding coupling strengths of ~1 MHz at 200 nm separation — fast enough for high-fidelity two-qubit gates within decoherence times.

## Motivation

The flip-flop qubit addresses the central scaling bottleneck of silicon spin qubits: the requirement for nanometer-precision donor or quantum dot placement to achieve exchange coupling. By replacing short-range exchange interaction with long-range electric dipole coupling (~200 nm range), the flip-flop approach relaxes fabrication tolerances by an order of magnitude. This could enable silicon quantum processors with millions of qubits using conventional semiconductor manufacturing, rather than requiring atom-by-atom placement. The all-electric control via gate electrodes (no magnetic field gradients or microwave magnetic fields for qubit operations) further simplifies the control architecture.

## Experimental Status

**Theoretical proposal — Tosi et al. (2017):**
- Proposed the flip-flop qubit encoding and electric dipole coupling mechanism.
- Calculated two-qubit gate fidelities exceeding fault-tolerance thresholds under realistic noise models.
- Showed that coupling to a superconducting microwave resonator could extend entanglement to macroscopic distances.
- Predicted coupling strengths of ~1 MHz at 200 nm donor separation.

**Status as of 2026:**
- The flip-flop qubit remains a theoretical proposal; no experimental demonstration of the flip-flop encoding or the predicted long-range dipole coupling has been reported.
- Related experimental progress includes single-shot readout of individual phosphorus donors (Morello et al.), coherent control of P donor electron and nuclear spins in silicon, and sub-nanometer donor placement via STM lithography (Simmons group).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Coupling range | ~200 nm | Electric dipole-dipole; 10× farther than exchange | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| Coupling strength | ~1 MHz | At 200 nm separation; predicted | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| Control mechanism | All-electric | Microwave electric fields via gate electrodes | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| 2Q gate fidelity | >99% (predicted) | Under realistic noise; not yet demonstrated | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| Operating temperature | ~100 mK | Standard dilution refrigerator | — |
| Host material | Isotopically purified $^{28}\text{Si}$ | Eliminates nuclear spin bath decoherence | — |

## Scaling Considerations

- **Fabrication tolerance**: the ~200 nm coupling range means donors need only be placed with ~50 nm precision (vs. ~1 nm for exchange-coupled qubits), potentially compatible with advanced CMOS lithography.
- **Charge noise sensitivity**: operating near the charge-spin hybridization point exposes the qubit to charge noise from the Si/SiO₂ interface, which could limit coherence. Optimal operating points that balance dipole strength against charge noise sensitivity need experimental validation.
- **Magnetic field requirements**: a static magnetic field of ~0.4 T is needed to define the qubit, plus precise tuning to the anticrossing regime — adding complexity.
- **Experimental validation**: as of 2026, no experimental demonstration of the flip-flop encoding or long-range coupling has been reported, making all performance metrics theoretical predictions.
- **Resonator coupling**: the proposal includes coupling to superconducting resonators for long-range (mm-scale) interactions, but this adds the complexity of integrating superconducting and semiconductor technologies.

## References

### Original proposal
- G. Tosi et al., "Silicon quantum processor with robust long-distance qubit couplings," [Nat. Commun. 8, 450 (2017)](https://doi.org/10.1038/s41467-017-00378-x)

## Linked Papers

- [[tosi-2017-flip-flop-qubit]]

## Related Entries

- [[kane-qubit]] — original phosphorus-in-silicon qubit proposal; requires atomic-precision placement
- [[silicon-spin-qubit]] — broader silicon spin qubit family
- [[loss-divincenzo-qubit]] — quantum dot spin qubit with short-range exchange coupling
- [[spin-qubit]] — general spin qubit concept
