---
title: Flip-Flop Qubit
entry_type: qubit
technology_family: Semiconducting
status: proposed
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/flip-flop-qubit-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:45.883950+00:00"
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
last_updated: '2026-08-02'
generated_by: scibok-curation
extracted_by: scibok
verified_by: codex-recovery-audit-2026-08-02
---

## Figure

![[flip-flop-qubit-figure.png]]

## Description

The flip-flop qubit encodes quantum information in the combined electron-nuclear spin states of a phosphorus ($^{31}\text{P}$) donor atom in silicon. The two computational basis states are:

$$|0\rangle = |\!\uparrow_e\, \Downarrow_n\rangle, \quad |1\rangle = |\!\downarrow_e\, \Uparrow_n\rangle$$

where arrows denote electron spin ($\uparrow/\downarrow$) and nuclear spin ($\Uparrow/\Downarrow$) orientations. In each state, the electron and nuclear spins point in opposite directions — hence "flip-flop." These states are connected by a simultaneous electron-nuclear spin flip driven by transverse hyperfine interaction, which can be electrically tuned by displacing the electron wavefunction relative to the nucleus using gate electrodes.

The critical innovation is to hybridize the donor-bound orbital $|d\rangle$ with an interface orbital $|i\rangle$. Their vertical separation $d$ creates a tunable electric dipole $ed$, and hyperfine coupling transfers that electric interaction to the flip-flop spin subspace. In the proposal, a $1\,\text{MHz}$ effective coupling can be maintained for donor separations from 180 to 500 nm by retuning the donor-interface tunnel coupling. That is far less placement-sensitive than the exchange interaction used by conventional donor-spin architectures.

The qubit is controlled entirely via microwave electric fields applied to gate electrodes, without requiring oscillating magnetic fields or ESR/NMR pulses. The qubit frequency is tunable via dc gate voltages that shift the electron position, and two-qubit gates are activated by tuning two qubits into resonance.

## Hamiltonian

The proposal requires the orbital degree of freedom explicitly. In frequency units, its two-level Hamiltonian is

$$
\mathcal H_{\mathrm{orb}}=\frac{1}{2}\left[V_t\sigma_x-\frac{ed(E_z-E_z^0)}{h}\sigma_z\right],
$$

where $V_t$ is the donor-interface tunnel coupling and $E_z^0$ is the ionization field. The spin sector contains the electron and nuclear Zeeman terms plus the electrically tunable hyperfine interaction $A(E_z)\mathbf S\!\cdot\!\mathbf I$. Its bare flip-flop splitting is

$$
\epsilon_{\mathrm{ff}}=\sqrt{[(\gamma_e+\gamma_n)B_0]^2+A(E_z)^2}.
$$

The transverse part of $A\mathbf S\!\cdot\!\mathbf I$ couples the flip-flop and charge sectors with $g_{\mathrm{so}}=(A/4)(V_t/\epsilon_o)$. An ac electric field therefore drives the spin transition through a second-order electric-dipole process.

For two vertical donor-interface dipoles, the direct charge-sector interaction is

$$
\frac{H_{\mathrm{dip}}}{h}=V_{dd}(\sigma_{z,1}\sigma_{z,2}+\sigma_{z,1}+\sigma_{z,2}),\qquad
V_{dd}=\frac{e^2d_1d_2}{16\pi\epsilon_0\epsilon_r h r^3}.
$$

The logical flip-flop coupling is not this bare interaction: it appears at second order through the two charge orbitals and can be tuned with $V_t$ and $E_z$.

## Motivation

The flip-flop qubit addresses the central scaling bottleneck of silicon donor qubits: exchange coupling demands extremely precise placement. Replacing it with tunable donor-interface dipole coupling over hundreds of nanometres relaxes placement tolerances and leaves room for interconnects. The all-electric control via gate electrodes (no oscillating magnetic field for logical operations) further simplifies the proposed control architecture.

## Experimental Status

**Theoretical proposal — Tosi et al. (2017):**
- Proposed the flip-flop qubit encoding and electric dipole coupling mechanism.
- Calculated one- and two-qubit gate errors near $10^{-3}$ under the paper's realistic-noise assumptions.
- Showed that coupling to a superconducting microwave resonator could extend entanglement to macroscopic distances.
- Predicted a tunable $1\,\text{MHz}$ effective coupling across 180–500 nm donor separations; the illustrated $\sqrt{i\mathrm{SWAP}}$ gate used $r=180\,\text{nm}$.

**Status as of 2026:**
- The flip-flop qubit remains a theoretical proposal; no experimental demonstration of the flip-flop encoding or the predicted long-range dipole coupling has been reported.
- Related experimental progress includes single-shot readout of individual phosphorus donors (Morello et al.), coherent control of P donor electron and nuclear spins in silicon, and sub-nanometer donor placement via STM lithography (Simmons group).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Coupling range | 180–500 nm | Range over which $g_{2q}^{\mathrm{ff}}=1\,\text{MHz}$ was maintained by retuning $V_t$; predicted | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| Coupling strength | 1 MHz | Tunable second-order logical coupling; predicted | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| Control mechanism | All-electric | Microwave electric fields via gate electrodes | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| $\sqrt{i\mathrm{SWAP}}$ error | $\sim3\times10^{-3}$ | Optimized model near $r=180\,\text{nm}$; not demonstrated | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| 1Q $x/y$-gate error | $\sim10^{-3}$ | Modelled at the ionization point; not demonstrated | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |

## Scaling Considerations

- **Fabrication tolerance**: tunability maintains the proposed $1\,\text{MHz}$ coupling across 180–500 nm spacing, but donor depth and interface quality still control $d$, $V_t$, and charge noise.
- **Charge noise sensitivity**: operating near the charge-spin hybridization point exposes the qubit to charge noise from the Si/SiO₂ interface, which could limit coherence. Optimal operating points that balance dipole strength against charge noise sensitivity need experimental validation.
- **Magnetic field requirements**: a static magnetic field of ~0.4 T is needed to define the qubit, plus precise tuning to the anticrossing regime — adding complexity.
- **Experimental validation**: as of 2026, no experimental demonstration of the flip-flop encoding or long-range coupling has been reported, making all performance metrics theoretical predictions.
- **Resonator coupling**: the proposal includes coupling to superconducting resonators for long-range (mm-scale) interactions, but this adds the complexity of integrating superconducting and semiconductor technologies.

## References

### Original proposal
- G. Tosi et al., "Silicon quantum processor with robust long-distance qubit couplings," [Nat. Commun. 8, 450 (2017)](https://doi.org/10.1038/s41467-017-00378-x)

## Linked Papers

- [[tosi-2017-flip-flop-qubit]]

## Evergreen context

- [[charge-noise-sweet-spot]] — the donor-interface orbital creates both the useful electric dipole and the main electric-noise exposure.
- [[resonator-as-quantum-bus]] — covers the proposal's route from hundreds-of-nanometres dipole coupling to longer-range microwave links.
- [[sqrt-swap-as-universal-gate]] — supplies the gate-level context for the predicted $\sqrt{i\mathrm{SWAP}}$ operation.

## Related Entries

- [[kane-qubit]] — original phosphorus-in-silicon qubit proposal; requires atomic-precision placement
- [[silicon-spin-qubit]] — broader silicon spin qubit family
- [[loss-divincenzo-qubit]] — quantum dot spin qubit with short-range exchange coupling
- [[spin-qubit]] — general spin qubit concept
