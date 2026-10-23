---
title: Circuit Quantum Electrodynamics (Circuit QED)
entry_type: infrastructure
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
first_proposed_year: 2004
first_demonstrated_year: 2004
keywords:
- circuit qed
- cavity
- jaynes-cummings
- strong coupling
- transmission line resonator
- vacuum rabi
- dispersive readout
- qnd measurement
- quantum bus
influence_score: 0.85
last_updated: '2026-10-12'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-10-12
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/circuit-qed-figure.provenance.json"
figure_reviewed_by: "codex-visual-physics-review-2026-10-12"
figure_reviewed_at: "2026-10-12T14:43:04.023446+00:00"
---

## Figure

![[circuit-qed-figure.png]]

## Description

Circuit quantum electrodynamics (circuit QED) is the on-chip analogue of cavity QED: a superconducting artificial atom couples coherently to a quantized mode of a microwave resonator. In the original Blais et al. proposal, a quasi-one-dimensional coplanar-waveguide (CPW) resonator confined its zero-point energy to an effective volume of about $10^{-5}$ cubic wavelengths, producing $\mathcal{E}_\mathrm{rms}\sim0.2\,\mathrm{V/m}$. Together with the Cooper-pair-box dipole moment ($d\sim2\times10^4\,ea_0$), this led to the proposal-scale estimate $g/\pi\sim100\,\mathrm{MHz}$—not $g/2\pi\sim100\,\mathrm{MHz}$.

The defining regime is **strong coupling**, $g\gg\kappa,\gamma$, where coherent qubit–photon exchange outpaces cavity loss $\kappa$ and qubit decoherence $\gamma$. Wallraff et al. first demonstrated it in 2004 with $g/2\pi\approx5.8\,\mathrm{MHz}$, $\kappa/2\pi=0.8\,\mathrm{MHz}$, and $\gamma/2\pi=0.7\,\mathrm{MHz}$, observing a vacuum-Rabi splitting of $2g/2\pi\approx11.6\,\mathrm{MHz}$.

Most processor applications operate instead in the **dispersive regime**, $|\Delta|=|\omega_q-\omega_r|\gg g$. The qubit shifts the resonator frequency by a state-dependent amount, enabling QND readout, while virtual photons mediate interactions between separated qubits. Detuning suppresses cavity-mediated relaxation to the Purcell rate $\Gamma_P\simeq\kappa(g/\Delta)^2$; engineered Purcell filters can suppress that channel further. Circuit QED now underlies superconducting-qubit readout, resonator buses, bosonic encodings, microwave quantum optics, and hybrid quantum interfaces.

## Hamiltonian

The two-level quantum-Rabi model is

$$H_\mathrm{Rabi}=\hbar\omega_r a^\dagger a+\frac{\hbar\omega_q}{2}\sigma_z+\hbar g(a+a^\dagger)\sigma_x.$$

Near resonance and for $g\ll\omega_r,\omega_q$, the rotating-wave approximation gives the Jaynes–Cummings Hamiltonian

$$H_\mathrm{JC}=\hbar\omega_r a^\dagger a+\frac{\hbar\omega_q}{2}\sigma_z+\hbar g(a^\dagger\sigma_-+a\sigma_+).$$

Here $\omega_r$ is the resonator frequency, $\omega_q$ is the qubit transition frequency, $g$ is the single-photon coupling rate, and $a^{(\dagger)}$ are photon annihilation (creation) operators. At exact resonance, the $n\ge1$ excitation manifold contains

$$|n,\pm\rangle=\frac{|e,n-1\rangle\pm|g,n\rangle}{\sqrt2},$$

split by $2g\sqrt n$. This ordering is the central vacuum-Rabi signature.

For the original Cooper-pair-box geometry at its charge sweet spot,

$$g = \frac{\beta e}{\hbar}\sqrt{\frac{\hbar\omega_r}{cL}}$$

where $\beta=C_g/C_\Sigma$, $c$ is capacitance per unit length, and $L$ is resonator length.

With $\Delta\equiv\omega_q-\omega_r$ and $|\Delta|\gg g$, a two-level dispersive approximation is

$$H_\mathrm{disp}\approx\hbar(\omega_r+\chi\sigma_z)a^\dagger a+\frac{\hbar(\omega_q+\chi)}{2}\sigma_z,\qquad \chi=\frac{g^2}{\Delta}.$$

For a weakly anharmonic transmon, higher levels modify the shift to approximately $\chi\simeq g^2\alpha/[\Delta(\Delta+\alpha)]$, where $\alpha=\omega_{12}-\omega_{01}<0$. The measured resonator separation is $2|\chi|$ in the ideal two-state readout picture.

## Motivation

Compared with earlier lumped-element proposals, lithographic transmission-line resonators offered reproducible modes, large zero-point voltages, spatially separated antinodes, and controlled input/output coupling. Those ingredients made strong coupling, dispersive measurement, and cavity-mediated state transfer practical. Modern implementations add dedicated Purcell filters because a readout resonator is both a measurement channel and, without filtering, a radiative decay channel.

## Experimental Status

**First strong coupling — Wallraff et al. (2004):**
- Coupled a Cooper pair box to a 6.04-GHz CPW resonator with $g/2\pi\approx5.8\,\mathrm{MHz}$.
- Observed a vacuum-Rabi splitting of about 11.6 MHz, larger than both $\kappa/2\pi=0.8\,\mathrm{MHz}$ and $\gamma/2\pi=0.7\,\mathrm{MHz}$.

**Cavity quantum bus — Majer et al. (2007):**
- Demonstrated coherent state transfer between two spatially separated superconducting qubits through virtual photons in a shared transmission-line cavity.

**Long-lived cavity modes and bosonic encodings — Teoh et al. (2023):**
- Used two superconducting cavities with photon lifetimes above 1 ms as the modes of a dual-rail qubit, with transmon-assisted control and erasure detection.

**Fast multiplexed dispersive readout — Spring et al. (2025):**
- Combined readout and filter resonators with intrinsic notch filtering, obtaining 99.77% average assignment fidelity across four qubits in a 56-ns integration window; the best channel exceeded 99.9%.

**Millimeter-wave circuit QED — Dixit et al. (2026):**
- Coupled a 3.1-GHz transmon to a 34.7-GHz cavity at $g/2\pi=1.3\,\mathrm{GHz}$ and achieved greater than 99% readout fidelity without a quantum-limited first-stage amplifier, demonstrating a highly detuned extension of the architecture.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| First strong-coupling demonstration | $g/2\pi\approx5.8$ MHz; $2g/2\pi\approx11.6$ MHz | 6.04-GHz CPW resonator; $\kappa/2\pi=0.8$ MHz, $\gamma/2\pi=0.7$ MHz | [Wallraff et al. 2004](https://doi.org/10.1038/nature02851) |
| Long-lived cavity photon | $T_1>1$ ms | Two 3D stub cavities used for dual-rail encoding | [Teoh et al. 2023](https://doi.org/10.1073/pnas.2221736120) |
| Multiplexed assignment fidelity | 99.77% average; best $>99.9\%$ | Four qubits, 56-ns integration, resonator linewidths up to 42 MHz | [Spring et al. 2025](https://doi.org/10.1103/PRXQuantum.6.020345) |
| Millimeter-wave readout | $>99\%$ fidelity | 34.7-GHz cavity, 3.1-GHz transmon, $g/2\pi=1.3$ GHz | [Dixit et al. 2026](https://doi.org/10.1103/c84y-ggqs) |

## References

### Original proposal
- A. Blais et al., "Cavity quantum electrodynamics for superconducting electrical circuits: An architecture for quantum computation," [Phys. Rev. A 69, 062320 (2004)](https://doi.org/10.1103/PhysRevA.69.062320) — [arXiv:cond-mat/0402216](https://arxiv.org/abs/cond-mat/0402216)

### First experimental demonstration
- A. Wallraff et al., "Strong coupling of a single photon to a superconducting qubit using circuit quantum electrodynamics," [Nature 431, 162–167 (2004)](https://doi.org/10.1038/nature02851) — [arXiv:cond-mat/0407325](https://arxiv.org/abs/cond-mat/0407325)

### Review and milestones
- A. Blais et al., "Circuit quantum electrodynamics," [Rev. Mod. Phys. 93, 025005 (2021)](https://doi.org/10.1103/RevModPhys.93.025005) — [arXiv:2005.12667](https://arxiv.org/abs/2005.12667)
- J. Majer et al., "Coupling superconducting qubits via a cavity bus," [Nature 449, 443–447 (2007)](https://doi.org/10.1038/nature06184) — [arXiv:0709.2135](https://arxiv.org/abs/0709.2135)
- J. D. Teoh et al., "Dual-rail encoding with superconducting cavities," [PNAS 120, e2221736120 (2023)](https://doi.org/10.1073/pnas.2221736120) — [arXiv:2212.12077](https://arxiv.org/abs/2212.12077)
- P. A. Spring et al., "Fast Multiplexed Superconducting-Qubit Readout with Intrinsic Purcell Filtering Using a Multiconductor Transmission Line," [PRX Quantum 6, 020345 (2025)](https://doi.org/10.1103/PRXQuantum.6.020345) — [arXiv:2409.04967](https://arxiv.org/abs/2409.04967)
- A. V. Dixit et al., "Millimeter wave readout of a superconducting qubit," [Phys. Rev. Lett., accepted 3 September 2026](https://doi.org/10.1103/c84y-ggqs) — [arXiv:2603.13837](https://arxiv.org/abs/2603.13837)

## Linked Papers

- [[blais-2004-circuit-qed]]
- [[blais-2021-circuit-electrodynamics]]
- [[dixit-2026-millimeter-wave-readout]]
- [[majer-2007-cavity-bus]]
- [[spring-2025-fast-multiplexed-readout]]
- [[strickland-2024-gatemon-losses]]
- [[teoh-2023-dual-rail-cavity]]
- [[wallraff-2004-strong-coupling-single]]
- [[walter-2017-rapid-readout]]
- [[rathnakaran-2026-squeezing-fueled-quantum-otto-engine]]
- [[wang-2026-quantum-simulation-of-the]]

## Evergreen context

- [[jaynes-cummings-in-circuits]] — the atom-cavity Hamiltonian in its superconducting form
- [[dispersive-readout-mechanism]] — why off-resonant coupling yields QND measurement
- [[resonator-as-quantum-bus]] — how the cavity mediates long-range qubit-qubit coupling
- [[vacuum-rms-field-scaling]] — why CPW resonators achieve unusually large zero-point fields
- [[purcell-protection-via-detuning]] — how detuning and filters suppress spontaneous emission

## Related Entries

- [[transmon]] — most common qubit used in circuit QED architectures
- [[cooper-pair-box-charge-qubit]] — original qubit in the Blais et al. proposal
- [[fluxonium]] — also operates within circuit QED, requires auxiliary readout
- [[qubit-readout]] — dispersive readout is the primary application of circuit QED
- [[bosonic-qubit]] — long-lived cavity modes host oscillator encodings
- [[dual-rail-superconducting-qubit]] — two circuit-QED cavity modes encode an erasure-biased qubit
