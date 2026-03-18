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



Always-on Exchange Only (AEON) is a seed entry imported from the legacy Qubit Zoo Airtable dataset.


## Figure

![[aeon-qubit-figure.png]]

## Description

An always-on, exchange-only qubit encoded in three localized semiconductor spins arranged in a **linear triple quantum dot** (TQD) array. The two exchange couplings $J_L$ (dots 1–2) and $J_R$ (dots 2–3) are kept always on; there is **no direct coupling** between dots 1 and 3 ($t_{13} = 0$). The AEON qubit offers a true **double sweet spot** — first-order insensitivity to charge noise in *both* detuning parameters $\varepsilon$ and $\varepsilon_M$ simultaneously. Both single- and two-qubit gate operations can be performed using only baseband (DC) exchange pulses while maintaining this sweet spot. The qubit can be smoothly converted to other three-spin encoded qubits (RX, 3-DFS) for readout, coupling to a resonator, or memory.


## Hamiltonian

The AEON qubit is described by a Hubbard model for a linear TQD. In the qubit subspace ($S_\text{tot} = 1/2$, $S_\text{tot}^z = 1/2$), the effective Hamiltonian reduces to an exchange-coupled Heisenberg model with **only nearest-neighbor couplings**:

$$H_\text{eff} = J_L\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + J_R\,\mathbf{S}_2\!\cdot\!\mathbf{S}_3$$

where $J_L = 2t_l^2(\tilde{U}_1 + \tilde{U}_2')/f_l(\varepsilon, \varepsilon_M)$ and $J_R = 2t_r^2(\tilde{U}_2 + \tilde{U}_3)/f_r(\varepsilon, \varepsilon_M)$. Note: **$J_{13} = 0$** (no direct exchange between dots 1 and 3).

In the two-state qubit basis $\{|0_Q\rangle, |1_Q\rangle\}$:

$$H_\text{eff} = -\frac{J}{2}\sigma_z - \frac{\sqrt{3}\,j}{2}\sigma_x$$

where $J = (J_L + J_R)/2$ and $j = (J_L - J_R)/2$.

**Double sweet spot** — the qubit energy gap $E_{01} = \sqrt{J^2 + 3j^2}$ satisfies:

$$\frac{\partial E_{01}}{\partial \varepsilon} = 0 \quad \text{and} \quad \frac{\partial E_{01}}{\partial \varepsilon_M} = 0$$

simultaneously, making the qubit first-order insensitive to charge noise in both detuning parameters. Crucially, the sweet spot position is **independent of the tunnel couplings** $t_l$ and $t_r$, enabling gate operations while remaining at the sweet spot.

## Motivation

A spin-based qubit offering a **double sweet spot** to charge noise that enables:

- **All single-qubit gates** via baseband exchange pulses at the full sweet spot (tuning barrier gates $t_l$, $t_r$; no microwave pulses needed)
- **Two-qubit gates in a single exchange pulse** (Doherty & Wardrop 2013), versus 18+ serial pulses for the original 3-DFS exchange-only encoding
- **No transition dipole moment** — the AEON qubit at its sweet spot has zero transverse coupling to a resonator ($g_\perp = 0$), requiring longitudinal (curvature) coupling instead (Ruskov & Tahan 2019, 2021)
- Smooth conversion to RX or 3-DFS qubit encodings for readout, resonator coupling, or memory

## References

### Original proposal
- Y.-P. Shim and C. Tahan, "Charge-noise-insensitive gate operations for always-on, exchange-only qubits," [PRB 93, 121410(R) (2016)](https://doi.org/10.1103/PhysRevB.93.121410) — [arXiv:1602.00320](https://arxiv.org/abs/1602.00320)

### Two-qubit gates
- A. C. Doherty and M. P. Wardrop, "Two-qubit gates for resonant exchange qubits," [PRL 111, 050503 (2013)](https://doi.org/10.1103/PhysRevLett.111.050503) — single exchange pulse CZ gate

### Longitudinal resonator coupling
- R. Ruskov and C. Tahan, "Quantum-limited measurement of spin qubits via curvature couplings to a cavity," [PRB 99, 245306 (2019)](https://doi.org/10.1103/PhysRevB.99.245306) — [arXiv:1704.05876](https://arxiv.org/abs/1704.05876)
- R. Ruskov and C. Tahan, "Modulated longitudinal gates on encoded spin qubits via curvature couplings to a superconducting cavity," [PRB 103, 035301 (2021)](https://doi.org/10.1103/PhysRevB.103.035301) — [arXiv:2010.01233](https://arxiv.org/abs/2010.01233)

### Experimental demonstration
- J. D. Broz, J. C. Hoke, E. Acuna, and J. R. Petta, "Demonstration of an always-on exchange-only spin qubit," [arXiv:2508.01033 (2025)](https://arxiv.org/abs/2508.01033)

## Linked Papers
- [[shim-2016-aeon]]

## Related Entries
- [[rx-qubit]]
- [[loss-divincenzo-qubit]]
- [[exchange-only-qubit]]

## Seed Metadata
- date_published: 2016-01-31

## Physics

The AEON qubit is a variant of the [[exchange-only-qubit]] designed for the realistic case where exchange couplings between adjacent dots cannot be fully turned off. Unlike the parent architecture, the AEON qubit operates in a **linear triple quantum dot** with only nearest-neighbor exchange ($J_L$ between dots 1–2 and $J_R$ between dots 2–3; **no $J_{13}$**).

The qubit operates at a symmetric operating point (SOP) where the qubit energy is first-order insensitive to charge noise in **both** detuning parameters $\varepsilon$ and $\varepsilon_M$ — a true double sweet spot. This sweet spot is independent of the tunneling elements $t_l$ and $t_r$, enabling:
- **Single-qubit gates** via baseband (DC) exchange pulses tuning the barrier gates ($Z$ rotation: $J_L = J_R$; general rotations: $J_L \neq J_R$)
- **Two-qubit gates** via a single exchange pulse between adjacent encoded qubits (Doherty & Wardrop 2013), reducing the 18+ sequential pulses of standard 3-DFS to one
- **No transverse dipole coupling** to resonators ($g_\perp = 0$), necessitating longitudinal (curvature) coupling (Ruskov & Tahan 2019, 2021)
- Smooth conversion to RX qubit (for resonator coupling/readout) or 3-DFS qubit (for memory)

The AEON qubit was experimentally demonstrated by the Petta group (Broz et al. 2025) in a Si/SiGe triple quantum dot device.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1 s | Spin relaxation | [Shulman et al. 2012](https://doi.org/10.1126/science.1217692) |
| Qubit coherence $T_2$ | 10–100 μs | Enhanced by sweet-spot operation | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate fidelity (1Q) | 99–99.5% | Baseband exchange pulses at sweet spot | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate fidelity (2Q) | 95–99% | Single exchange pulse CZ | [Doherty & Wardrop 2013](https://doi.org/10.1103/PhysRevLett.111.050503) |
| Gate time (1Q) | 1–50 ns | DC barrier gate pulses | — |
| Gate time (2Q) | ~20–200 ns | Single exchange pulse | [Doherty & Wardrop 2013](https://doi.org/10.1103/PhysRevLett.111.050503) |
| Operating temperature | 20–100 mK | Si/SiGe or GaAs | — |
| Qubit footprint | ~150–300 nm pitch | 3 dots per logical qubit | — |

## Related Qubits

- [[exchange-only-qubit]] — parent architecture
- [[singlet-triplet-qubit]] — two-spin cousin
- [[loss-divincenzo-qubit]] — single-spin ancestor
- [[rx-qubit]] — related always-on 3-spin qubit (partial sweet spot, microwave control)
