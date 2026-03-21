---
title: Always-on Exchange Only (AEON)
entry_type: qubit
technology_family: Semiconducting
status: active
figure_reviewed: true
seed_id: '11'
seed_source: qubitzoo-airtable
first_proposed_year: 2016
first_demonstrated_year: 2025
keywords:
- spin
- silicon
- exchange-only
- sweet-spot
- triple-quantum-dot
last_updated: '2026-03-18'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: scibok-manual-2026-03-18
---

## Figure

![[aeon-qubit-figure.png]]

## Description

The Always-on Exchange-Only (AEON) qubit is a three-spin encoded qubit in a **linear triple quantum dot** (TQD) array where the nearest-neighbor exchange couplings $J_L$ (dots 1–2) and $J_R$ (dots 2–3) are kept permanently on. There is **no direct tunnel coupling** between the outer dots ($t_{13} = 0$). The qubit is encoded in the $S_\text{tot} = 1/2$ subspace of three singly-occupied quantum dots in the (1,1,1) charge configuration.

The defining feature of the AEON qubit is its **double sweet spot**: the qubit frequency $E_{01}$ is first-order insensitive to charge noise in *both* independent detuning parameters $\varepsilon$ (dot 1 vs. dot 3) and $\varepsilon_M$ (dot 2 vs. average of dots 1 and 3) simultaneously. Crucially, the sweet spot position depends only on the Coulomb energies — not on the tunnel couplings $t_l$ and $t_r$ — so gates can be performed by tuning barrier gates while remaining at the sweet spot throughout.

All single-qubit operations use **baseband (DC) exchange pulses** — no microwave drive is required. Two-qubit entangling gates between adjacent AEON qubits can be implemented with a **single exchange pulse**, a dramatic simplification over the 18+ sequential pairwise pulses needed for the original 3-DFS exchange-only encoding.

At the sweet spot, the AEON qubit has **no transition dipole moment** ($g_\perp = 0$), meaning it does not couple transversely to a superconducting resonator. Long-range coupling requires **longitudinal (curvature) coupling** to a cavity, or adiabatic conversion to the RX qubit regime where transverse coupling is available.

The qubit can be smoothly interconverted with other three-spin encodings: the **RX qubit** (for initialization, readout, and resonator coupling) and the **3-DFS exchange-only qubit** (for a true off-state/memory with all exchange couplings turned off).


## Hamiltonian

The AEON qubit is described by a Hubbard model for a linear TQD with only nearest-neighbor tunneling ($t_{13} = 0$). In the qubit subspace ($S_\text{tot} = 1/2$, $S_\text{tot}^z = 1/2$), the effective Hamiltonian reduces to:

$$H_\text{eff} = J_L\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + J_R\,\mathbf{S}_2\!\cdot\!\mathbf{S}_3$$

where $J_L = 2t_l^2(\tilde{U}_1 + \tilde{U}_2')/f_l(\varepsilon, \varepsilon_M)$ and $J_R = 2t_r^2(\tilde{U}_2 + \tilde{U}_3)/f_r(\varepsilon, \varepsilon_M)$, with $\tilde{U}_i$ the Coulomb energy changes for double occupancy of dot $i$. **No $J_{13}$ term** appears.

In the two-state qubit basis $\{|0_Q\rangle, |1_Q\rangle\}$:

$$H_\text{eff} = -\frac{J}{2}\sigma_z - \frac{\sqrt{3}\,j}{2}\sigma_x$$

where $J = (J_L + J_R)/2$ and $j = (J_L - J_R)/2$. The qubit energy gap is $E_{01} = \sqrt{J^2 + 3j^2} = \sqrt{J_L^2 + J_R^2 - J_L J_R}$.

### Double sweet spot

The sweet spot conditions $\partial E_{01}/\partial\varepsilon = 0$ and $\partial E_{01}/\partial\varepsilon_M = 0$ yield:

$$\varepsilon_\text{ss} = \tfrac{1}{4}(-\tilde{U}_1 + \tilde{U}_2' - \tilde{U}_2 + \tilde{U}_3), \qquad \varepsilon_{M,\text{ss}} = \tfrac{1}{4}(\tilde{U}_1 - \tilde{U}_2' - \tilde{U}_2 + \tilde{U}_3)$$

These depend only on Coulomb energies, **not** on $t_l$ or $t_r$ — enabling full gate control while remaining at the sweet spot.


## Single-Qubit Gates

All single-qubit rotations are performed via **baseband (DC) voltage pulses** on the tunnel barrier gates, modulating $J_L$ and $J_R$ simultaneously while remaining at the double sweet spot:

- **$Z$ rotation**: Symmetric exchange ($J_L = J_R$, i.e., $j = 0$) → precession around $\hat{z}$
- **General rotations**: Asymmetric exchange ($J_L \neq J_R$) → rotation around an axis in the $xz$-plane. Combined with $Z$, this gives universal single-qubit control
- **Pauli $X$**: Can be decomposed as $X = R_{\hat{n}}(\pi) \cdot Z \cdot R_{\hat{n}}(\pi)$ with $\hat{n} = -(\hat{x} + \hat{z})/\sqrt{2}$, achieved with $t_l = (\sqrt{6} + \sqrt{2})t_r/2$

No microwave pulses are needed — this is purely baseband, all-electrical control.


## Two-Qubit Gates

Two AEON qubits in a linear array (dots 1–2–3–4–5–6) are coupled via the inter-qubit exchange $J_c$ between neighboring dots (e.g., dots 3 and 4). With intra-qubit couplings always on, the effective inter-qubit Hamiltonian in the weak coupling regime ($J_c \ll J^{(A)}, J^{(B)}$) is:

$$H_c = \delta J_z (\sigma_z^A + \sigma_z^B)/2 + J_{zz}\,\sigma_z^A\sigma_z^B + J_\perp(\sigma_x^A\sigma_x^B + \sigma_y^A\sigma_y^B)$$

with all coefficients proportional to $J_c$. For the linear geometry, $\delta J_z / J_c = J_{zz}/J_c = 1/36$ and $J_\perp / J_c = -1/24$ when $J^{(A)} \approx J^{(B)}$.

A **CPHASE/CZ gate** can be implemented with a single exchange pulse — requiring $\int J_{zz}(t)\,dt = \pi/4$. Estimated gate times range from ~20 ns (butterfly geometry with spin swaps) to a few hundred ns (linear geometry with conservative $J_c \sim 10$ MHz). This is a dramatic improvement over the 18+ sequential pairwise pulses required for the original 3-DFS encoding.

The inter-qubit sweet spot condition ($\partial J_c / \partial \varepsilon_3 = \partial J_c / \partial \varepsilon_4 = 0$) can also be satisfied by tuning average dot energies, keeping both qubits and the coupler charge-noise-insensitive.


## Resonator Coupling

At the double sweet spot, the AEON qubit has **zero transition dipole moment** ($g_\perp = 0$) — it does not couple transversely to a superconducting resonator. This is both a feature (suppressed decoherence from charge noise) and a constraint (no direct cavity QED).

Two strategies for long-range coupling:

1. **Longitudinal (curvature) coupling** — The second derivative of the qubit frequency with respect to detuning gives a non-zero longitudinal coupling $g_\parallel$ to the cavity photon number. This enables dispersive readout and modulated longitudinal gates without leaving the sweet spot. *(Theoretical — Ruskov & Tahan 2019, 2021)*

2. **Conversion to RX regime** — Adiabatically sweeping $\varepsilon_M$ converts the AEON qubit to an RX qubit, which has a large transverse dipole for cavity coupling. Readout and long-range entanglement proceed in the RX regime, then the qubit is swept back to the AEON sweet spot for computation. *(The RX-cavity strong coupling regime has been demonstrated — Landig et al., Nature 2018)*


## Experimental Status

The AEON qubit was first experimentally demonstrated by **Broz, Hoke, Acuna, and Petta (2025)** in a Si/SiGe quantum dot device:

- **Platform**: Triangular QD array (note: the original proposal uses a linear TQD; the triangular geometry also supports AEON-like operation with simultaneous always-on exchange)
- **Gate set**: Full single-qubit Clifford set with simultaneous exchange pulses
- **Fidelity**: Average Clifford gate fidelity $F_{C1} = 99.86\%$ via blind randomized benchmarking
- **Key advance**: First demonstration of simultaneous (non-commuting) exchange pulses for an exchange-only qubit, versus conventional sequential pairwise pulsing

Two-qubit entangling gates and resonator coupling have **not yet been experimentally demonstrated** in the AEON regime.


## Comparison with Related Encodings

| Property | 3-DFS Exchange-Only | RX Qubit | AEON |
|----------|-------------------|----------|------|
| QD energy levels | General | $\varepsilon_2 \gg \varepsilon_1 \approx \varepsilon_3$ | $\varepsilon_1 \approx \varepsilon_2 \approx \varepsilon_3$ |
| Sweet spot | None (DFS only) | Partial (1 of 2 detunings) | **Full** (both detunings) |
| Single-qubit gates | 4 sequential exchange pulses | Microwave drive | 3 simultaneous baseband pulses |
| Two-qubit gates | 18+ sequential pulses | Dipole-dipole or single exchange pulse | **Single exchange pulse** |
| Resonator coupling | N/A | Transverse ($g_\perp$ large) | Longitudinal only ($g_\perp = 0$) |
| Idle/memory | All exchange off | Always-on, $f_Q \sim$ 0.5–2 GHz | Exchange off (converts to 3-DFS) or always-on |

*(Table adapted from Shim & Tahan 2016, Table I)*


## References

### Original proposal
- Y.-P. Shim and C. Tahan, "Charge-noise-insensitive gate operations for always-on, exchange-only qubits," [PRB 93, 121410(R) (2016)](https://doi.org/10.1103/PhysRevB.93.121410) — [arXiv:1602.00320](https://arxiv.org/abs/1602.00320)

### Two-qubit gates
- A. C. Doherty and M. P. Wardrop, "Two-qubit gates for resonant exchange qubits," [PRL 111, 050503 (2013)](https://doi.org/10.1103/PhysRevLett.111.050503) — showed that always-on exchange enables CZ gate in a single inter-qubit exchange pulse

### Longitudinal resonator coupling (theoretical)
- R. Ruskov and C. Tahan, "Quantum-limited measurement of spin qubits via curvature couplings to a cavity," [PRB 99, 245306 (2019)](https://doi.org/10.1103/PhysRevB.99.245306) — [arXiv:1704.05876](https://arxiv.org/abs/1704.05876)
- R. Ruskov and C. Tahan, "Modulated longitudinal gates on encoded spin qubits via curvature couplings to a superconducting cavity," [PRB 103, 035301 (2021)](https://doi.org/10.1103/PhysRevB.103.035301) — [arXiv:2010.01233](https://arxiv.org/abs/2010.01233)
- R. Ruskov and C. Tahan, "Longitudinal (curvature) couplings of an N-level qudit to a superconducting resonator at the adiabatic limit and beyond," [PRB 109, 245303 (2024)](https://doi.org/10.1103/PhysRevB.109.245303) — [arXiv:2312.03118](https://arxiv.org/abs/2312.03118)

### RX qubit–resonator strong coupling (related experimental)
- A. J. Landig, J. V. Koski, P. Scarlino et al., "Coherent spin–photon coupling using a resonant exchange qubit," [Nature 560, 179 (2018)](https://doi.org/10.1038/s41586-018-0365-y) — demonstrated strong coupling of RX qubit to SC cavity (~31 MHz); AEON could convert to this regime

### Experimental demonstration
- J. D. Broz, J. C. Hoke, E. Acuna, and J. R. Petta, "Demonstration of an always-on exchange-only spin qubit," [arXiv:2508.01033 (2025)](https://arxiv.org/abs/2508.01033) — $F_{C1} = 99.86\%$ average Clifford fidelity, Si/SiGe triangular QD array, single-qubit gates only

### Background: exchange-only qubits
- D. P. DiVincenzo, D. Bacon, J. Kempe, G. Burkard, and K. B. Whaley, "Universal quantum computation with the exchange interaction," [Nature 408, 339 (2000)](https://doi.org/10.1038/35042541) — original exchange-only qubit proposal
- B. H. Fong and S. M. Wandzura, "Universal quantum computation and leakage reduction in the 3-qubit decoherence free subsystem code," [QIC 11, 1003 (2011)](https://doi.org/10.26421/QIC11.11-12-8) — optimized pulse sequences


## Linked Papers
- [[shim-2016-aeon]]

## Related Entries
- [[rx-qubit]]
- [[loss-divincenzo-qubit]]
- [[exchange-only-qubit]]

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1 s | Spin relaxation in Si | [Shulman et al. 2012](https://doi.org/10.1126/science.1217692) |
| Qubit coherence $T_2$ | 10–100 μs | Enhanced by double sweet-spot operation | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate fidelity (1Q) | **99.86%** | Average Clifford fidelity, blind RB (experimental) | [Broz et al. 2025](https://arxiv.org/abs/2508.01033) |
| Gate fidelity (1Q, theory) | 99–99.5% | Baseband exchange at sweet spot (theoretical) | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate fidelity (2Q) | 95–99% | Single exchange pulse CZ (theoretical estimate) | [Doherty & Wardrop 2013](https://doi.org/10.1103/PhysRevLett.111.050503) |
| Gate time (1Q) | 1–50 ns | DC barrier gate pulses | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate time (2Q) | ~20–200 ns | Single exchange pulse (geometry-dependent) | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Operating temperature | 20–100 mK | Si/SiGe or GaAs | — |
| Qubit footprint | ~150–300 nm pitch | 3 dots per logical qubit | — |
