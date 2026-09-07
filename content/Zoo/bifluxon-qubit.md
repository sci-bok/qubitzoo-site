---
title: Bifluxon Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: false
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/bifluxon-qubit-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:45.846572+00:00"
first_proposed_year: 2019
first_demonstrated_year: 2020
keywords:
- bifluxon
- fluxon parity
- protected qubit
- superconducting
- superinductor
- Aharonov-Casher
- Cooper-pair box
- charge noise protection
- flux noise protection
influence_score: 0.66
last_updated: '2026-09-07'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-09-07
---

## Figure

![[bifluxon-qubit-figure.png]]

## Description

The bifluxon qubit is a fluxon-parity-protected superconducting qubit based on Aharonov-Casher interference. Its loop contains a **split Cooper-pair box**—two Josephson junctions separated by a small island—in series with a superinductor. The logical states occupy the even- and odd-fluxon sectors of that loop.

When the island offset charge is one electron modulo $2e$ ($n_g=1/2$ in Cooper-pair units), the two paths for a single fluxon to cross the split junction interfere destructively. Single-fluxon tunnelling is then forbidden in the symmetric-junction limit, while double-fluxon tunnelling remains allowed. The resulting low-energy dynamics are equivalent to a $4\pi$-periodic, $\cos(\phi/2)$ Josephson element. Even- and odd-parity logical wavefunctions occupy disjoint sets of wells near $\phi=2\pi m$, suppressing relaxation matrix elements. Delocalization *within* each parity sector can additionally reduce flux-noise dephasing.

This is symmetry protection in a two-dimensional circuit Hilbert space, not a literal single-junction $\cos(\phi/2)$ device. Junction asymmetry restores a residual single-fluxon amplitude, charge offsets must remain near the interference point, and the demonstrated first-generation device did not yet realize full dephasing protection.

## Hamiltonian

With the high-frequency common mode eliminated, Kalashnikov et al. write the two-dimensional circuit Hamiltonian in the island-charge basis as

$$
H=\sum_n\!\left[4E_C(n-n_g)^2|n\rangle\langle n|-E_J\cos\!\left(\frac{\phi}{2}\right)(\sigma_n^++\sigma_n^-)\right]
-4E_{CL}\,\partial_\phi^2+\frac{E_L}{2}(\phi-\phi_{\mathrm{ext}})^2,
$$

where $n$ counts Cooper pairs on the island, $\sigma_n^+=|n+1\rangle\langle n|$, $E_C$ is the island charging energy, $E_{CL}$ is the charging energy of the superinductor mode, and $E_L=(\Phi_0/2\pi)^2/L$. The loop phase is $\phi$ and $\phi_{\mathrm{ext}}=2\pi\Phi_{\mathrm{ext}}/\Phi_0$.

At $n_g=1/2$, the charge-sector symmetry makes the single-phase-slip matrix element vanish between adjacent fluxon wells. That selection rule is the origin of the effective $4\pi$ periodicity; replacing the full Hamiltonian by an ordinary one-dimensional fluxonium potential would miss the interference mechanism. Junction imbalance adds the leading symmetry-breaking term $\delta H=\Delta E_J\sin(\phi/2)\sin\varphi$ (after the common mode is frozen).

## Motivation

The central challenge in superconducting quantum computing is decoherence from environmental noise, primarily $1/f$ charge noise and $1/f$ flux noise. Conventional qubits (transmon, fluxonium) are protected against one noise type by operating at sweet spots, but remain vulnerable to the other. The bifluxon offers a path to **simultaneous protection** against both noise channels through a topological mechanism (fluxon-parity encoding) rather than materials engineering. If the protection can be scaled up — for instance, by replacing the single junction with arrays of $\cos(\varphi/2)$ elements — the bifluxon could achieve coherence times orders of magnitude beyond current transmon levels, potentially exceeding the threshold for quantum error correction with much lower overhead.

## Experimental Status

**First demonstration — Kalashnikov et al. (2020):**
- Fabricated a bifluxon circuit with a CPB shunted by a granular aluminum superinductor.
- Demonstrated tenfold increase in energy relaxation time ($T_1$ up to 100 μs) when the offset charge was tuned from the unprotected point to the charge-parity sweet spot.
- Inferred a lower bound $T_\phi \gtrsim 1\,\mu\text{s}$ for charge-noise-induced pure dephasing; the protected-state Ramsey measurement was limited by gate-pulse jitter, so this was not a $T_2^*$ record.
- Confirmed the Aharonov-Casher protection mechanism by observing the charge-dependent oscillation of $T_1$.
- Published in PRX Quantum 1, 010307 (2020).

**Related bifluxon-tunnelling fluxonium — Ardati et al. (2024):**
- Demonstrated a simpler fluxonium realization in which resonant $4\pi$ phase slips couple equal-parity fluxon wells at zero applied flux.
- Measured $T_1=177\pm3\,\mu\text{s}$ and Hahn-echo $T_2^E=75\pm5\,\mu\text{s}$ at an approximately 3 GHz qubit transition.
- This is a partially protected fluxonium implementation, not the split-CPB Aharonov-Casher circuit of the 2020 bifluxon experiment.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ (protected) | ~100 μs | At charge-parity sweet spot | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $T_1$ (unprotected) | ~10 μs | Away from sweet spot | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $T_\phi$ lower bound (split-CPB bifluxon) | $\gtrsim$1 μs | Protected-state Ramsey bound; limited by gate-pulse jitter | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $T_1$ (bifluxon-tunnelling fluxonium) | 177 ± 3 μs | Zero-flux, partially protected fluxonium realization | [Ardati et al. 2024](https://doi.org/10.1103/PhysRevX.14.041014) |
| $T_2^E$ (bifluxon-tunnelling fluxonium) | 75 ± 5 μs | Hahn echo in the same 2024 device | [Ardati et al. 2024](https://doi.org/10.1103/PhysRevX.14.041014) |
| $E_J/E_C$ | ~1 | CPB regime (charge-sensitive) | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $E_L/E_J$ | ≪1 | Large superinductance required | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |

## Scaling Considerations

- **Superinductor quality**: the 2020 split-CPB prototype had fitted $E_L/h=0.94\,\text{GHz}$, corresponding to $L\approx0.174\,\mu\text{H}$. Its modelling estimated that the strong-delocalization regime needed for full flux-dephasing protection would require an ultrahigh-impedance superinductor with $L>30\,\mu\text{H}$ and a self-resonance above 1 GHz. A distinct 2024 bifluxon-tunnelling fluxonium device used $L\sim1\,\mu\text{H}$.
- **Charge stability**: the protection mechanism requires stable tuning to the odd-charge parity point. Charge jumps (quasiparticle poisoning) can move the system away from the sweet spot, temporarily disabling protection.
- **Gate implementation**: universal gates on a protected qubit are inherently difficult because the same protection that suppresses noise also suppresses intentional control signals. Proposals include using the charge degree of freedom for $X$ gates and flux for $Z$ gates, but experimental gate demonstrations are still pending.
- **$\cos(\varphi/2)$ arrays**: the demonstration proposes combining several split-CPB $\cos(\varphi/2)$ elements to enhance dephasing protection, but this adds fabrication and control complexity.
- **Comparison to alternatives**: the 0-π qubit and $\cos(2\varphi)$ qubit pursue related protection goals with different circuit symmetries. The bifluxon uses a split CPB plus one superinductive branch, but remains sensitive to junction asymmetry and quasiparticle-induced charge-parity changes.

## References

### Proposal and demonstration
- K. Kalashnikov et al., "Bifluxon: Fluxon-Parity-Protected Superconducting Qubit," [PRX Quantum 1, 010307 (2020)](https://doi.org/10.1103/PRXQuantum.1.010307) | [arXiv:1910.03769](https://arxiv.org/abs/1910.03769)

### Related modern realization
- W. Ardati et al., "Using Bifluxon Tunneling to Protect the Fluxonium Qubit," [Physical Review X 14, 041014 (2024)](https://doi.org/10.1103/PhysRevX.14.041014) | [arXiv:2402.04495](https://arxiv.org/abs/2402.04495)

## Linked Papers

- [[kalashnikov-2020-bifluxon]]
- [[ardati-2024-bifluxon-tunneling]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — the split CPB supplies the two phase-slip paths whose interference protects fluxon parity.
- [[charge-noise-sweet-spot]] — explains why the odd-charge operating point is useful and why charge-parity jumps remain dangerous.
- [[noise-bias-and-asymmetric-error-channels]] — frames the distinction between suppressing relaxation and achieving full dephasing protection.

## Related Entries

- [[fluxonium]] — related circuit topology with superinductive shunt
- [[0-pi-qubit]] — alternative protected qubit using circuit symmetry
- [[cos2phi-qubit]] — alternative protected qubit with doubled Josephson potential
- [[ferbo-qubit]] — another protected superconducting qubit design
- [[heavy-fluxonium-qubit]] — fluxonium variant with enhanced protection
