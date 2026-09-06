---
title: Flip-Flop Qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/flip-flop-qubit-figure.provenance.json"
figure_reviewed_by: "Scibok daily deep audit 2026-09-06"
figure_reviewed_at: "2026-09-06T14:17:50.790778+00:00"
first_proposed_year: 2017
first_demonstrated_year: 2023
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
last_updated: '2026-09-06'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-09-06
---

## Figure

![[flip-flop-qubit-figure.png]]

## Description

The flip-flop qubit encodes quantum information in the combined electron-nuclear spin states of a phosphorus ($^{31}\text{P}$) donor atom in silicon. Using the convention adopted in the proposal and experimental demonstration, the computational basis states are:

$$|0\rangle = |\!\downarrow_e\, \Uparrow_n\rangle, \quad |1\rangle = |\!\uparrow_e\, \Downarrow_n\rangle$$

where arrows denote electron spin ($\uparrow/\downarrow$) and nuclear spin ($\Uparrow/\Downarrow$) orientations. In each state, the electron and nuclear spins point in opposite directions — hence "flip-flop." These states are connected by a simultaneous electron-nuclear spin flip driven by transverse hyperfine interaction, which can be electrically tuned by displacing the electron wavefunction relative to the nucleus using gate electrodes.

The 2017 processor proposal adds a deliberately hybridized orbital degree of freedom: a donor-bound orbital $|d\rangle$ and an interface orbital $|i\rangle$. Their vertical separation $d$ creates a tunable electric dipole $ed$, and hyperfine coupling transfers that electric interaction to the flip-flop spin subspace. In the proposal, a $1\,\text{MHz}$ effective coupling can be maintained for donor separations from 180 to 500 nm by retuning the donor-interface tunnel coupling. That is far less placement-sensitive than the exchange interaction used by conventional donor-spin architectures.

The first experiment, reported in 2023, demonstrated coherent electric control of the same flip-flop spin encoding in a single implanted phosphorus donor. It modulated the hyperfine coupling by electrically distorting the donor electron wavefunction, but did **not** reach the donor-interface large-dipole regime or demonstrate the proposed long-range two-qubit coupling. The logical flip-flop rotation itself uses a microwave electric field; the experiment still used auxiliary ESR/NMR operations for preparation and readout.

## Hamiltonian

The proposal requires the orbital degree of freedom explicitly. In frequency units, its two-level Hamiltonian is

$$
\mathcal H_{\mathrm{orb}}=\frac{1}{2}\left[V_t\sigma_x-\frac{ed(E_z-E_z^0)}{h}\sigma_z\right],
$$

where $V_t$ is the donor-interface tunnel coupling and $E_z^0$ is the ionization field. Let $P_i=|i\rangle\!\langle i|=(1+\sigma_z)/2$ and $P_d=|d\rangle\!\langle d|=(1-\sigma_z)/2$. A representative spin-orbital Hamiltonian is

$$
\frac{H}{h}=\mathcal H_{\mathrm{orb}}+\gamma_eB_0(1+\Delta\gamma P_i)S_z-\gamma_nB_0I_z+A P_d\,\mathbf S\!\cdot\!\mathbf I,
$$

where $\Delta\gamma$ allows for the interface-dependent electron gyromagnetic ratio. The bare flip-flop splitting is

$$
\epsilon_{\mathrm{ff}}=\sqrt{[(\gamma_e+\gamma_n)B_0]^2+A(E_z)^2}.
$$

with $\gamma_+=\gamma_e+\gamma_n$. The orbital splitting is

$$\epsilon_o=\sqrt{V_t^2+[ed(E_z-E_z^0)/h]^2}.$$

The transverse hyperfine term couples the flip-flop and charge sectors with $g_{\mathrm{so}}=(A/4)(V_t/\epsilon_o)$. In the donor-interface regime, an ac electric field drives the spin transition through the second-order charge-mediated rate

$$
g_E^{\mathrm{ff}}=\frac{g_{\mathrm{so}}g_E}{2}\left(\frac{1}{\delta_{\mathrm{so}}}+\frac{1}{\delta_E}\right),\qquad
g_E=\frac{eE_{\mathrm{ac}}d}{4h}\frac{V_t}{\epsilon_o}.
$$

The 2023 single-donor experiment is described directly in the flip-flop subspace, after dropping a common energy shift, by

$$
\frac{H_{\mathrm{ff}}}{h}=\frac{1}{2}\left[\gamma_+B_0\sigma_z+A(E)\sigma_x\right],
$$

so a small hyperfine modulation gives $f_{\mathrm{Rabi}}^{\mathrm{ff}}\simeq [\partial A(E)/(2\partial E)]E_{\mathrm{ac}}$ in the rotating-wave limit.

For two vertical donor-interface dipoles, the direct charge-sector interaction is

$$
\frac{H_{\mathrm{dip}}}{h}=V_{dd}(\sigma_{z,1}\sigma_{z,2}+\sigma_{z,1}+\sigma_{z,2}),\qquad
V_{dd}=\frac{e^2d_1d_2}{16\pi\epsilon_0\epsilon_r h r^3}.
$$

The logical flip-flop coupling is not this bare interaction: it appears at second order through the two charge orbitals and can be tuned with $V_t$ and $E_z$.

## Motivation

The flip-flop qubit addresses the central scaling bottleneck of silicon donor qubits: exchange coupling demands extremely precise placement. Replacing it with tunable donor-interface dipole coupling over hundreds of nanometres relaxes placement tolerances and leaves room for interconnects. The all-electric control via gate electrodes (no oscillating magnetic field for logical operations) further simplifies the proposed control architecture.

## Experimental Status

**Donor-interface processor proposal — Tosi et al. (2017):**
- Proposed the flip-flop qubit encoding and electric dipole coupling mechanism.
- Calculated one- and two-qubit gate errors near $10^{-3}$ under the paper's realistic-noise assumptions.
- Showed that coupling to a superconducting microwave resonator could extend entanglement to macroscopic distances.
- Predicted a tunable $1\,\text{MHz}$ effective coupling across 180–500 nm donor separations; the illustrated $\sqrt{i\mathrm{SWAP}}$ gate used $r=180\,\text{nm}$.

**Single-donor demonstration — Savytskyy et al. (2023):**
- Demonstrated coherent microwave-electric control of the $|\!\downarrow_e\Uparrow_n\rangle\leftrightarrow|\!\uparrow_e\Downarrow_n\rangle$ transition in one implanted $^{31}\text{P}$ donor.
- Reached a Rabi frequency of $118.5(2.5)\,\text{kHz}$ and an average native one-qubit gate fidelity of $98.4(2)\%$.
- Measured $T_1^{\mathrm{ff}}=173(12)\,\text{s}$, Ramsey $T_2^*=4.09(88)\,\mu\text{s}$, and Hahn-echo $T_2^{\mathrm H}=184(24)\,\mu\text{s}$.
- The device used hyperfine Stark modulation of a distorted donor orbital; it did not transfer the electron to an interface dot or test dipole-mediated two-qubit gates.

**2024–2026 updates:**
- De Michielis and Ferraro (2024/2025) simulated parallel gates in four-qubit arrays and found spectator/parallel-operation effects to be especially severe for simultaneous two-qubit gates; this is a theoretical scaling result, not a hardware benchmark.
- D'Onofrio, Ferraro, and De Michielis (2026) developed a spin-orbital simulator and predicted composite $\sqrt{i\mathrm{SWAP}}$ and $i\mathrm{SWAP}$ infidelities of $4.72\times10^{-4}$ and $6.14\times10^{-4}$ after local phase compensation in an isolated pair. They also found that spectator qubits require geometry-aware recalibration; the work is an arXiv preprint.
- A 2026 APS conference abstract reported MHz-rate electric driving of flip-flop states in an antimony-donor/MOS-dot device. This is a conference-level extension to a high-spin donor, not yet a peer-reviewed phosphorus flip-flop processor result.

**Status as of September 2026:** the single-$^{31}\text{P}$ flip-flop encoding and electric control are experimentally demonstrated. The donor-interface large-dipole operating point, the predicted 180–500 nm logical coupling, and any flip-flop two-qubit gate remain undemonstrated.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| 1Q native gate fidelity | $98.4(2)\%$ | Randomized benchmarking; demonstrated single donor | [Savytskyy et al. 2023](https://doi.org/10.1126/sciadv.add9408) |
| Electric-drive Rabi frequency | $118.5(2.5)\,\text{kHz}$ | Highest applied microwave power in the demonstrated device | [Savytskyy et al. 2023](https://doi.org/10.1126/sciadv.add9408) |
| $T_1^{\mathrm{ff}}$ | $173(12)\,\text{s}$ | Demonstrated single donor | [Savytskyy et al. 2023](https://doi.org/10.1126/sciadv.add9408) |
| Ramsey $T_2^*$ | $4.09(88)\,\mu\text{s}$ | Demonstrated single donor | [Savytskyy et al. 2023](https://doi.org/10.1126/sciadv.add9408) |
| Hahn-echo $T_2^{\mathrm H}$ | $184(24)\,\mu\text{s}$ | Demonstrated single donor | [Savytskyy et al. 2023](https://doi.org/10.1126/sciadv.add9408) |
| Coupling range | 180–500 nm | Range over which $g_{2q}^{\mathrm{ff}}=1\,\text{MHz}$ was maintained by retuning $V_t$; predicted | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| Coupling strength | 1 MHz | Tunable second-order logical coupling; predicted | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |
| $\sqrt{i\mathrm{SWAP}}$ error | $\sim3\times10^{-3}$ | Optimized model near $r=180\,\text{nm}$; not demonstrated | [Tosi et al. 2017](https://doi.org/10.1038/s41467-017-00378-x) |

## Scaling Considerations

- **Fabrication tolerance**: tunability maintains the proposed $1\,\text{MHz}$ coupling across 180–500 nm spacing, but donor depth and interface quality still control $d$, $V_t$, and charge noise.
- **Charge noise sensitivity**: operating near the charge-spin hybridization point exposes the qubit to charge noise from the Si/SiO₂ interface, which could limit coherence. Optimal operating points that balance dipole strength against charge noise sensitivity need experimental validation.
- **Magnetic field requirements**: a static magnetic field of ~0.4 T is needed to define the qubit, plus precise tuning to the anticrossing regime — adding complexity.
- **Experimental gap**: single-qubit electric control is demonstrated, but the intended donor-interface ionization point, long-range dipole coupling, and two-qubit gate have not been demonstrated.
- **Resonator coupling**: the proposal includes coupling to superconducting resonators for long-range (mm-scale) interactions, but this adds the complexity of integrating superconducting and semiconductor technologies.

## References

### Original proposal
- G. Tosi et al., "Silicon quantum processor with robust long-distance qubit couplings," [Nat. Commun. 8, 450 (2017)](https://doi.org/10.1038/s41467-017-00378-x) | [arXiv:1509.08538](https://arxiv.org/abs/1509.08538)

### Experimental demonstration
- R. Savytskyy et al., "An electrically driven single-atom 'flip-flop' qubit," [Sci. Adv. 9, eadd9408 (2023)](https://doi.org/10.1126/sciadv.add9408) | [arXiv:2202.04438](https://arxiv.org/abs/2202.04438)

### Scaling and control studies
- M. De Michielis and E. Ferraro, "Impact of Parallel Gating on Gate Fidelities in Linear, Square, and Star Arrays of Noisy Flip-Flop Qubits," [Adv. Quantum Technol. 8, 2400341 (2025)](https://doi.org/10.1002/qute.202400341) | [arXiv:2407.20166](https://arxiv.org/abs/2407.20166)
- L. D'Onofrio, E. Ferraro, and M. De Michielis, "Numerical Optimization of Two-Qubit Gates in Silicon Flip-Flop Qubit Arrays under Electrical Control," [arXiv:2607.29123](https://arxiv.org/abs/2607.29123) (2026 preprint)

### Recent conference report
- S. Kruskic et al., "Integrating high-spin antimony donors with MOS quantum dots in silicon, Part 2: Flip-Flop qubit operation," [APS Global Physics Summit 2026 abstract](https://meetings-archive.aps.org/smt/2026/mar-y10/4/)

## Linked Papers

- [[tosi-2017-flip-flop-qubit]]
- [[savytskyy-2023-electrically-driven-flip-flop-qubit]]
- [[de-michielis-2025-parallel-gating-flip-flop-arrays]]
- [[donofrio-2026-flip-flop-two-qubit-optimization]]

## Evergreen context

- [[charge-noise-sweet-spot]] — the donor-interface orbital creates both the useful electric dipole and the main electric-noise exposure.
- [[resonator-as-quantum-bus]] — covers the proposal's route from hundreds-of-nanometres dipole coupling to longer-range microwave links.
- [[sqrt-swap-as-universal-gate]] — supplies the gate-level context for the predicted $\sqrt{i\mathrm{SWAP}}$ operation.

## Related Entries

- [[kane-qubit]] — original phosphorus-in-silicon qubit proposal; requires atomic-precision placement
- [[silicon-spin-qubit]] — broader silicon spin qubit family
- [[loss-divincenzo-qubit]] — quantum dot spin qubit with short-range exchange coupling
- [[spin-qubit]] — general spin qubit concept
- [[circuit-qed]] — proposed resonator bus for millimeter-scale coupling
