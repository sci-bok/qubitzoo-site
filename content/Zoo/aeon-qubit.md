---
title: Always-on Exchange Only (AEON)
entry_type: qubit
technology_family: Semiconducting
status: active
figure_reviewed: false
seed_id: '11'
seed_source: qubitzoo-airtable
first_proposed_year: 2016
first_demonstrated_year: 2025
influence_score: 0.5
keywords:
- spin
- silicon
- exchange-only
- sweet-spot
- triple-quantum-dot
last_updated: '2026-07-06'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok-audit-2026-07-06
---

## Figure

![[aeon-qubit-figure.png]]

## Description

The always-on exchange-only (AEON) qubit is a three-spin encoded qubit designed to keep the nearest-neighbor exchange couplings on continuously while operating at a **double sweet spot** against charge noise. In the original Shim and Tahan proposal, the device is a **linear triple quantum dot** in the $(1,1,1)$ charge sector with only nearest-neighbor tunneling, so the effective qubit lives in the three-electron $S=1/2$ manifold rather than in a single product-spin basis.

Its central advantage over earlier exchange-only encodings is that the qubit splitting is first-order insensitive to both independent detuning coordinates, usually written $(\varepsilon, \varepsilon_M)$, while still allowing gate control through **barrier-controlled exchange pulses**. In other words, the operating point is protected against leading detuning noise, but the qubit can still be rotated by changing $J_L$ and $J_R$ with DC gate voltages.

This makes AEON a useful midpoint between two neighboring three-spin encodings. Compared with the original 3-spin decoherence-free-subsystem / exchange-only qubit, AEON keeps exchange on and dramatically simplifies gate compilation. Compared with the resonant-exchange (RX) qubit, AEON aims for a fuller sweet spot but gives up the large transverse cavity dipole that RX uses for microwave and cavity control.

The first experimental AEON demonstration came later, in a **2025 preprint by Broz, Hoke, Acuna, and Petta**, using a **triangular Si/SiGe triple-dot device** with simultaneous exchange pulses. That experiment established high-fidelity single-qubit control in an always-on exchange-only regime, but it did **not** yet demonstrate AEON two-qubit entangling gates or direct cavity coupling.

## Hamiltonian

For the original linear AEON proposal, the low-energy effective model is the nearest-neighbor Heisenberg exchange Hamiltonian

$$H_\mathrm{eff} = J_L\,\mathbf S_1\!\cdot\!\mathbf S_2 + J_R\,\mathbf S_2\!\cdot\!\mathbf S_3,$$

with no direct outer-dot exchange term $J_{13}$ in the ideal linear geometry. Projecting into the encoded $S=1/2$ qubit subspace gives the standard two-level form

$$H_q = -\frac{J}{2}\sigma_z - \frac{\sqrt{3}\,j}{2}\sigma_x,$$

where

$$J = \frac{J_L + J_R}{2}, \qquad j = \frac{J_L - J_R}{2},$$

so that the qubit splitting is

$$\hbar\omega_q = E_{01} = \sqrt{J^2 + 3j^2} = \sqrt{J_L^2 + J_R^2 - J_LJ_R}.$$

The AEON operating point is the **double sweet spot**, defined by

$$\frac{\partial \omega_q}{\partial \varepsilon} = 0, \qquad \frac{\partial \omega_q}{\partial \varepsilon_M} = 0.$$

In the Shim and Tahan analysis, this sweet spot is set by the device Coulomb-energy landscape and is independent of the tunnel couplings themselves. That independence is what makes barrier-gate control possible without sacrificing first-order protection against detuning noise.

## Single-Qubit Gates

AEON single-qubit control is purely **baseband exchange control**. No resonant microwave drive is required in the original proposal.

- **Symmetric exchange** ($J_L = J_R$) gives $j=0$, producing a logical $Z$ rotation.
- **Asymmetric exchange** ($J_L \neq J_R$) tilts the rotation axis into the $xz$ plane.
- Combining those two cases gives universal single-qubit control while remaining at the charge-noise sweet operating point.

This is the key architectural claim of AEON: single-qubit gates can be driven by simultaneous DC exchange pulses instead of long compiled sequences of pairwise on/off pulses.

## Two-Qubit Gates

For neighboring AEON qubits, a weak inter-qubit exchange $J_c$ between boundary dots produces the same effective structure analyzed for always-on encoded three-spin qubits more broadly:

$$H_c = \frac{\delta J_z}{2}(\sigma_z^A + \sigma_z^B) + J_{zz}\,\sigma_z^A\sigma_z^B + J_\perp(\sigma_x^A\sigma_x^B + \sigma_y^A\sigma_y^B).$$

In the linear weak-coupling regime discussed by Shim and Tahan, one finds for comparable qubits

$$\delta J_z/J_c = J_{zz}/J_c = 1/36, \qquad J_\perp/J_c = -1/24,$$

and a **single-pulse CPHASE/CZ gate** is possible when the qubits are biased so the unwanted transverse term is suppressed and

$$\int J_{zz}(t)\,dt = \pi/4.$$

This is an important theoretical advantage of AEON, but it remains **proposed rather than experimentally demonstrated** as of July 2026.

## Resonator Coupling

At the ideal AEON double sweet spot, the qubit has **no transverse electric dipole** to first order, so a direct RX-style spin-photon coupling is absent:

$$g_\perp = 0.$$

That suppresses one important charge-noise channel, but it also means AEON does not naturally couple transversely to a superconducting resonator. Two workarounds have been proposed:

1. **Curvature / longitudinal coupling**: use the second derivative of the qubit energy with respect to detuning to couple encoded spin qubits to a cavity dispersively.
2. **Adiabatic conversion to the RX regime**: move the same three-spin device into a resonant-exchange-like operating regime for readout or cavity-mediated coupling, then return to AEON for idle/gate operation.

The second route is motivated by the experimental RX spin-photon strong-coupling result of Landig et al. (2018), but it is not itself an AEON demonstration.

## Experimental Status

**Original proposal (2016):**
- Shim and Tahan introduced the AEON concept for a linear triple quantum dot.
- Core claims were the double detuning sweet spot, barrier-controlled single-qubit gates, and a route to single-pulse two-qubit entangling gates.

**First experimental demonstration (2025 preprint):**
- Broz et al. demonstrated an always-on exchange-only qubit in a **triangular Si/SiGe triple-dot device**.
- Implemented the full **single-qubit Clifford gate set** using simultaneous exchange pulses.
- Measured average blind-RB Clifford fidelity **$F_{C1} = 99.86\%$**.
- The experiment established high-fidelity AEON-style single-qubit control, but **did not** yet demonstrate AEON two-qubit gates, cavity coupling, or an archival peer-reviewed 2Q benchmark.

## Comparison with Related Encodings

| Property | 3-spin exchange-only / 3-DFS | RX qubit | AEON |
|----------|------------------------------|----------|------|
| Exchange during idle | Typically compiled on/off pulses | Always on | Always on |
| Sweet spot protection | Limited | Partial | **Double sweet spot in detuning space** |
| 1Q control | Compiled exchange sequences | Microwave / driven exchange | **Simultaneous DC exchange pulses** |
| 2Q entangling gate | Long pulse compilations | Single-pulse proposals available | **Single-pulse proposal in AEON regime** |
| Cavity coupling | Weak / indirect | Strong transverse dipole available | **No transverse dipole at ideal sweet spot** |
| Best current experiment | Mature broader exchange-only literature | Spin-photon coupling demonstrated | **Single-qubit AEON preprint demo only** |

## References

### Original proposal
- Y.-P. Shim and C. Tahan, "Charge-noise-insensitive gate operations for always-on, exchange-only qubits," [PRB 93, 121410(R) (2016)](https://doi.org/10.1103/PhysRevB.93.121410) — [arXiv:1602.00320](https://arxiv.org/abs/1602.00320)

### Two-qubit gates and encoded-spin context
- A. C. Doherty and M. P. Wardrop, "Two-qubit gates for resonant exchange qubits," [PRL 111, 050503 (2013)](https://doi.org/10.1103/PhysRevLett.111.050503) — effective always-on encoded-qubit coupling structure used in the AEON discussion
- D. P. DiVincenzo, D. Bacon, J. Kempe, G. Burkard, and K. B. Whaley, "Universal quantum computation with the exchange interaction," [Nature 408, 339 (2000)](https://doi.org/10.1038/35042541)
- B. H. Fong and S. M. Wandzura, "Universal quantum computation and leakage reduction in the 3-Qubit decoherence free subsystem," [QIC 11, 1003 (2011)](https://doi.org/10.26421/QIC11.11-12-9)

### Resonator / cavity coupling
- R. Ruskov and C. Tahan, "Quantum-limited measurement of spin qubits via curvature couplings to a cavity," [PRB 99, 245306 (2019)](https://doi.org/10.1103/PhysRevB.99.245306) — [arXiv:1704.05876](https://arxiv.org/abs/1704.05876)
- R. Ruskov and C. Tahan, "Modulated longitudinal gates on encoded spin qubits via curvature couplings to a superconducting cavity," [PRB 103, 035301 (2021)](https://doi.org/10.1103/PhysRevB.103.035301) — [arXiv:2010.01233](https://arxiv.org/abs/2010.01233)
- R. Ruskov and C. Tahan, "Longitudinal (curvature) couplings of an $N$-level qudit to a superconducting resonator at the adiabatic limit and beyond," [PRB 109, 245303 (2024)](https://doi.org/10.1103/PhysRevB.109.245303) — [arXiv:2312.03118](https://arxiv.org/abs/2312.03118)
- A. J. Landig, J. V. Koski, P. Scarlino et al., "Coherent spin-photon coupling using a resonant exchange qubit," [Nature 560, 179 (2018)](https://doi.org/10.1038/s41586-018-0365-y) — RX, not AEON, but the relevant experimental spin-cavity bridge

### Experimental demonstration
- J. D. Broz, J. C. Hoke, E. Acuna, and J. R. Petta, "Demonstration of an always-on exchange-only spin qubit," [arXiv:2508.01033 (2025)](https://arxiv.org/abs/2508.01033) — triangular Si/SiGe implementation, full single-qubit Clifford set, $F_{C1}=99.86\%$

## Linked Papers
- [[shim-2016-aeon]]
- [[broz-2025-always-on-exchange-only-spin-qubit]]
- [[doherty-2013-qubit-gates-resonant]]
- [[ruskov-2021-modulated-longitudinal-gates]]
- [[landig-2018-coherent-spin-photon]]

## Evergreen context

- [[exchange-interaction-in-quantum-dots]] — the tunable resource AEON keeps on continuously
- [[heisenberg-exchange-in-quantum-dots]] — the pairwise-exchange model underlying the encoded qubit
- [[decoherence-free-subspace]] — the three-spin encoded-subspace origin of AEON
- [[charge-noise-sweet-spot]] — the protection principle behind the double sweet spot

## Related Entries
- [[exchange-only-qubit]]
- [[rx-qubit]]
- [[loss-divincenzo-qubit]]
- [[spin-qubit]]

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Single-qubit Clifford fidelity | **99.86%** | Blind RB in triangular Si/SiGe AEON demonstration | [Broz et al. 2025](https://arxiv.org/abs/2508.01033) |
| Single-qubit control modality | Simultaneous DC exchange pulses | No microwave drive required in the AEON control picture | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Charge-noise protection | $\partial\omega_q/\partial\varepsilon = \partial\omega_q/\partial\varepsilon_M = 0$ | First-order insensitivity in the two logical detuning coordinates | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| 2Q entangling gate | Single-pulse CPHASE/CZ proposed | Theory only, not yet demonstrated in AEON hardware | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| 2Q gate time | Few hundred ns (linear weak-coupling example) | Proposal with $J_c \sim 10$ MHz; geometry-dependent | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Resonator coupling at DSS | $g_\perp = 0$ | No direct transverse cavity dipole at the ideal AEON sweet spot | [Ruskov & Tahan 2019](https://doi.org/10.1103/PhysRevB.99.245306) |
| Operating charge sector | $(1,1,1)$ | Encoded three-electron manifold | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
