---
title: Exchange-only qubit
entry_type: qubit
technology_family: Semiconducting
status: demonstrated
figure_reviewed: true
seed_id: '12'
seed_source: qubitzoo-airtable
first_proposed_year: 2000
first_demonstrated_year: 2013
keywords:
- exchange-only
- quantum dot
- spin
- encoded qubit
- decoherence-free subsystem
last_updated: '2026-08-14'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok-manual-2026-08-14
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/exchange-only-qubit-figure.provenance.json"
figure_reviewed_by: "Codex scientific visual audit 2026-08-14"
figure_reviewed_at: "2026-08-14T14:32:00+00:00"
---

## Figure

![[exchange-only-qubit-figure.png]]

## Description

The **exchange-only (EO) qubit**, also called the three-spin decoherence-free subsystem qubit, encodes one logical qubit in the two inequivalent $S=1/2$ representations of three electron spins. A conventional device uses one electron in each site of a linear triple quantum dot. Choosing the gauge sector $m_S=+1/2$ gives the two logical basis states written below; the $m_S=-1/2$ sector carries the same logical information.

Uniform magnetic-field fluctuations act on the gauge degree of freedom without distinguishing the logical states, so the encoding is a **decoherence-free subsystem** for collective magnetic noise. This does not protect against local field gradients, charge noise in the exchange couplings, or leakage into the $S=3/2$ manifold.

Universal control uses only voltage-tuned pairwise exchange. Conventional EO gates activate one exchange coupling at a time, eliminating microwave drive and engineered magnetic-field gradients but requiring sequences of rotations about non-orthogonal axes. Simultaneous-exchange variants shorten those sequences: AEON uses two nonzero couplings for gates, while equal three-way exchange in a triangular device can create a leakage-protected idle point.

Encoded two-qubit gates remain substantially more complex than single-qubit gates. Serial exchange sequences have been demonstrated experimentally; commuting pulses can be scheduled in parallel to reduce duration. The one-step entangling gates proposed for always-on variants remain theoretical rather than an experimentally demonstrated AEON two-qubit benchmark.

## Hamiltonian

For a linear triple dot with one electron per site, the spin Hamiltonian is

$$H(t)=J_{12}(t)\,\mathbf S_1\!\cdot\!\mathbf S_2+J_{23}(t)\,\mathbf S_2\!\cdot\!\mathbf S_3.$$

In a triangular device an additional term $J_{13}(t)\,\mathbf S_1\!\cdot\!\mathbf S_3$ is available. In the symmetric two-site Hubbard limit, $J_{ij}\simeq 4t_{ij}^2/U_{ij}$; away from zero detuning this expression must be replaced by the detuning-dependent superexchange obtained from the relevant charge-state energy denominators. Gate voltages primarily control $J_{ij}$ by changing the interdot tunnel coupling.

### Logical encoding

In the $m_S=+1/2$ gauge sector, one standard convention is

$$|0_L\rangle=|S\rangle_{12}|\!\uparrow\rangle_3
=\frac{|\!\uparrow\downarrow\uparrow\rangle-|\!\downarrow\uparrow\uparrow\rangle}{\sqrt2},$$

$$|1_L\rangle=\sqrt{\frac23}|T_+\rangle_{12}|\!\downarrow\rangle_3
-\sqrt{\frac13}|T_0\rangle_{12}|\!\uparrow\rangle_3
=-\frac{|\!\uparrow\downarrow\uparrow\rangle+|\!\downarrow\uparrow\uparrow\rangle-2|\!\uparrow\uparrow\downarrow\rangle}{\sqrt6}.$$

Both logical states have $S=1/2$ and $m_S=+1/2$. The leakage state in this same gauge sector is the $S=3/2$ state

$$|Q_{1/2}\rangle=\frac{|\!\uparrow\uparrow\downarrow\rangle+|\!\uparrow\downarrow\uparrow\rangle+|\!\downarrow\uparrow\uparrow\rangle}{\sqrt3},$$

not $|\!\uparrow\uparrow\uparrow\rangle$, which belongs to $m_S=+3/2$. Ideal Heisenberg exchange conserves $S$ and therefore does not itself mix the logical and leakage manifolds; local magnetic gradients can. At zero exchange the manifolds are not generically protected by an exchange gap. For equal three-way exchange $J_{12}=J_{23}=J_{13}=J$, the logical operation is an identity up to phase and the $S=1/2$ and $S=3/2$ manifolds are separated by $E_g=3J/2$.

### Effective logical Hamiltonian and gates

Up to a scalar identity term, projection into the logical basis above gives

$$H_L(t)=-\frac12\left[J_{12}(t)\sigma_z-\frac{J_{23}(t)}2\left(\sigma_z+\sqrt3\,\sigma_x\right)\right].$$

Thus $J_{12}$ and $J_{23}$ generate rotations about axes separated by $120^\circ$ in the logical Bloch sphere. Consequences include:

- arbitrary one-qubit control with at most four serial exchange pulses, with many rotations requiring only three;
- experimentally demonstrated simultaneous-exchange $X$ rotations and AEON Clifford gates with at most two pulses per one-qubit gate;
- serial encoded two-qubit sequences whose length depends on connectivity and leakage constraints (for example, the 19-pulse Fong-Wandzura CNOT construction and later 23-pulse experimental CNOT implementation);
- parallel scheduling of commuting exchange pulses, reducing the demonstrated 23-pulse CNOT to 15 time steps without changing its logical operation.

## Motivation

- **Baseband-only control:** no microwave drive or engineered field gradient is required for universal gates.
- **Collective-noise protection:** the logical state is insensitive to a spatially uniform magnetic fluctuation, which acts on the gauge subsystem instead.
- **Small, foundry-compatible footprint:** three gate-defined dots form one encoded qubit.
- **Explicit leakage diagnostics:** blind randomized benchmarking separates computational error from leakage.
- **Trade-offs:** local hyperfine gradients and charge noise remain important, while encoded entangling gates demand long, calibration-intensive exchange sequences.

## Experimental Status

**First full demonstration — Medford et al. (2013):**
- Initialization, two-axis electrical control, single-shot readout, and self-consistent state tomography in a GaAs triple dot.
- Demonstrated 75 exchange-driven qubit rotations in less than 2 ns.

**Isotopically enriched silicon — Eng et al. (2015):**
- Universal control and spin-echo sequences in an $^{28}$Si/SiGe triple dot with 800-ppm residual $^{29}$Si.
- Established the low-magnetic-noise silicon platform used by later high-fidelity EO devices.

**Leakage-resolved benchmarking — Andrews et al. (2019):**
- Blind randomized benchmarking measured 0.35% average total error per one-qubit operation, including 0.17% leakage.

**Universal encoded two-qubit logic — Weinstein et al. (2023):**
- Demonstrated a universal exchange-only gate set across two encoded silicon qubits.
- Measured $97.1\pm0.2\%$ average two-qubit Clifford fidelity, $96.3\pm0.7\%$ CNOT fidelity, and $99.3\pm0.5\%$ SWAP fidelity.

**Simultaneous and parallel exchange — Heinz et al. and Mądzik et al. (2025):**
- Heinz et al. experimentally demonstrated a single-pulse $X$ rotation using simultaneous exchange.
- Mądzik et al. operated two neighboring EO qubits in a six-dot line, demonstrated the first EO iSWAP and charge-locking Pauli-spin-blockade readout, and reduced two-qubit gate duration by about 40% through parallel scheduling.
- Sequential two-qubit Clifford fidelity was $96.25\pm0.07\%$; parallelized operation gave $95.80\pm0.08\%$. Individual sequential CNOT, iSWAP, and SWAP fidelities were $97.55\pm0.47\%$, $97.43\pm0.43\%$, and $99.03\pm0.33\%$.

**AEON and leakage-protected idle — Broz et al. (2026):**
- A triangular Si/SiGe AEON qubit reached 99.86% average one-qubit Clifford fidelity with 0.015% leakage per Clifford using simultaneous two-exchange control.
- Equal three-way exchange realized a leakage-protected idle with gap $E_g=3J/2$; the measured dephasing time exceeded conventional exchange-off idling for $E_g/h<60$ MHz.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Gate fidelity (1Q Clifford) | **99.86%** | AEON, simultaneous two-exchange control; 0.015% leakage per Clifford | [Broz et al. 2026](https://doi.org/10.1038/s41467-026-70943-w) |
| Gate fidelity (1Q Clifford, serial) | $99.84\pm0.02\%$ | Best of two neighboring EO qubits; blind RB | [Mądzik et al. 2025](https://doi.org/10.1038/s41586-025-09767-5) |
| Gate fidelity (2Q Clifford) | $97.1\pm0.2\%$ | Serial universal encoded logic | [Weinstein et al. 2023](https://doi.org/10.1038/s41586-023-05777-3) |
| CNOT fidelity | $97.55\pm0.47\%$ | Serial interleaved RB; parallelized CNOT was $96.70\pm0.57\%$ | [Mądzik et al. 2025](https://doi.org/10.1038/s41586-025-09767-5) |
| Two-qubit Clifford fidelity (parallel) | $95.80\pm0.08\%$ | 20.3 exchange-pulse time steps on average, about 37% fewer than serial | [Mądzik et al. 2025](https://doi.org/10.1038/s41586-025-09767-5) |
| Conventional idle $T_2^*$ | typically 2–3 $\mu$s | 800-ppm $^{28}$Si device; motivates charge-locking readout | [Mądzik et al. 2025](https://doi.org/10.1038/s41586-025-09767-5) |
| Leakage-protected idle gap | $E_g=3J/2$ | Equal $J_{12}=J_{23}=J_{13}$; coherence advantage observed for $E_g/h<60$ MHz | [Broz et al. 2026](https://doi.org/10.1103/sljc-cmdw) |

## Scaling Considerations

- The demonstrated two-qubit Clifford contains an average of 32.3 exchange pulses; parallel scheduling reduces this to 20.3 time steps but demands nonlinear crosstalk calibration.
- Pauli-spin-blockade readout requires preserving both encoded outcomes long enough to measure multiple qubits; charge-locking readout addresses this without claiming fully parallel neighboring-sensor readout.
- The encoding uses three physical spins per logical qubit and adds leakage states that must be measured, suppressed, or contained by gate design.
- Uniform-field immunity does not remove device-to-device exchange calibration, local nuclear gradients, or charge-noise sensitivity.

## References

### Foundations and pulse sequences
- D. P. DiVincenzo, D. Bacon, J. Kempe, G. Burkard, and K. B. Whaley, “Universal quantum computation with the exchange interaction,” [Nature 408, 339–342 (2000)](https://doi.org/10.1038/35042541) — [arXiv:quant-ph/0005116](https://arxiv.org/abs/quant-ph/0005116)
- J. Kempe, D. Bacon, D. A. Lidar, and K. B. Whaley, “Theory of decoherence-free fault-tolerant universal quantum computation,” [Physical Review A 63, 042307 (2001)](https://doi.org/10.1103/PhysRevA.63.042307) — [arXiv:quant-ph/0004064](https://arxiv.org/abs/quant-ph/0004064)
- B. H. Fong and S. M. Wandzura, “Universal quantum computation and leakage reduction in the 3-qubit decoherence free subsystem,” [Quantum Information & Computation 11, 1003–1018 (2011)](https://doi.org/10.26421/QIC11.11-12-8) — [arXiv:1102.2909](https://arxiv.org/abs/1102.2909)

### Experimental demonstrations
- J. Medford et al., “Self-consistent measurement and state tomography of an exchange-only spin qubit,” [Nature Nanotechnology 8, 654–659 (2013)](https://doi.org/10.1038/nnano.2013.168) — [arXiv:1302.1933](https://arxiv.org/abs/1302.1933)
- K. Eng et al., “Isotopically enhanced triple-quantum-dot qubit,” [Science Advances 1, e1500214 (2015)](https://doi.org/10.1126/sciadv.1500214) — [arXiv:1408.0600](https://arxiv.org/abs/1408.0600)
- R. W. Andrews et al., “Quantifying error and leakage in an encoded Si/SiGe triple-dot qubit,” [Nature Nanotechnology 14, 747–750 (2019)](https://doi.org/10.1038/s41565-019-0500-4) — [arXiv:1812.02693](https://arxiv.org/abs/1812.02693)
- A. J. Weinstein et al., “Universal logic with encoded spin qubits in silicon,” [Nature 615, 817–822 (2023)](https://doi.org/10.1038/s41586-023-05777-3) — [arXiv:2202.03605](https://arxiv.org/abs/2202.03605)
- I. Heinz et al., “Fast quantum gates for exchange-only qubits using simultaneous exchange pulses,” [PRX Quantum 6, 030353 (2025)](https://doi.org/10.1103/njq3-fcdd) — [arXiv:2409.05843](https://arxiv.org/abs/2409.05843)
- M. T. Mądzik et al., “Operating two exchange-only qubits in parallel,” [Nature 647, 870–875 (2025)](https://doi.org/10.1038/s41586-025-09767-5) — [arXiv:2504.01191](https://arxiv.org/abs/2504.01191)
- J. D. Broz, J. C. Hoke, E. Acuna, and J. R. Petta, “Demonstration of an always-on exchange-only spin qubit,” [Nature Communications 17, 4794 (2026)](https://doi.org/10.1038/s41467-026-70943-w) — [arXiv:2508.01033](https://arxiv.org/abs/2508.01033)
- J. D. Broz, J. C. Hoke, E. Acuna, and J. R. Petta, “Leakage-protected idle operation of a triangular exchange-only spin qubit,” [PRX Quantum 7, 020324 (2026)](https://doi.org/10.1103/sljc-cmdw) — [arXiv:2603.06320](https://arxiv.org/abs/2603.06320)

## Linked Papers
- [[divincenzo-2000-universal-computation-exchange]]
- [[kempe-2001-theory-decoherence-free]]
- [[fong-2011-universal-exchange-only]]
- [[medford-2013-self-consistent-measurement]]
- [[eng-2015-isotopically-enhanced-triple]]
- [[andrews-2019-quantifying-error-leakage]]
- [[weinstein-2023-universal-logic-encoded-spin]]
- [[heinz-2025-fast-quantum-gates-exchange-only]]
- [[madzik-2025-operating-two-exchange-only]]
- [[broz-2026-always-on-exchange-only]]
- [[broz-2026-leakage-protected-idle]]

## Evergreen context

- [[exchange-interaction-in-quantum-dots]] — device-level mechanism used for every EO gate
- [[heisenberg-exchange-in-quantum-dots]] — Hamiltonian-level control primitive
- [[decoherence-free-subspace]] — collective-noise protection and gauge-subsystem interpretation
- [[sqrt-swap-as-universal-gate]] — partial-swap primitive generated by exchange

## Related Entries
- [[singlet-triplet-qubit]] — two-spin encoded qubit with gradient-assisted control
- [[rx-qubit]] — resonantly driven, always-on descendant of the same three-spin encoding
- [[hybrid-qubit]] — three-electron charge-spin hybrid with a different encoding and control trade-off
- [[aeon-qubit]] — simultaneous-exchange, double-sweet-spot operating mode of the three-spin encoding
- [[silicon-spin-qubit]] — broader silicon quantum-dot spin platform
- [[loss-divincenzo-qubit]] — single-spin baseline whose microwave control EO avoids
