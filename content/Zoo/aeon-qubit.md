---
title: Always-on Exchange Only (AEON)
entry_type: qubit
technology_family: Semiconducting
status: seed
figure_reviewed: true
seed_id: '11'
seed_source: qubitzoo-airtable
first_proposed_year: 2016
keywords:
- spin
- silicon
last_updated: '2026-03-05'
generated_by: seed-ingest-v1
extracted_by: airtable-seed
verified_by: pending
---



Always-on Exchange Only (AEON) is a seed entry imported from the legacy Qubit Zoo Airtable dataset.


## Figure

![[aeon-qubit-figure.png]]

## Description
An always-on, exchange-only qubit made up of three localized semiconductor spins with always-on exchange coupling between each dot that offers a true "sweet spot" to fluctuations of the quantum dot energy levels to both detuning parameters. Both single- and two-qubit gate operations can be performed using only exchange pulses while maintaining this sweet spot. This qubit can be smootly converted to other three-spin encoded qubits for readout, coupling to a resonator, or memory.


## Hamiltonian

Three-spin always-on exchange model:

$$H = J_{12}\,\mathbf{S}_1\!\cdot\!\mathbf{S}_2 + J_{23}\,\mathbf{S}_2\!\cdot\!\mathbf{S}_3 + J_{13}\,\mathbf{S}_1\!\cdot\!\mathbf{S}_3 + \sum_{i=1}^3 g\mu_B B_i S_i^z$$

AEON operation targets symmetric sweet spots where control trajectories satisfy first-order insensitivity:

$$\frac{\partial \omega_q}{\partial \varepsilon_k} \approx 0$$

for both detuning axes $\varepsilon_k$, while still enabling universal exchange-only control pulses.

## Motivation
A spin-based qubit offering a double sweet spot to charge noise which allows for all one and two-qubit operations at full sweet spots and 2 qubit gates in a single exchange pulse (versus 20+ for the original 3 spin decoherence free subspace encoding). The AEON regime also has no transition dipole moment.

## References
- https://journals.aps.org/prb/abstract/10.1103/PhysRevB.93.121410
- https://arxiv.org/abs/1602.00320

## Linked Papers
- [[shim-2016-aeon]]

## Related Entries
- [[rx-qubit]]
- [[loss-divincenzo-qubit]]
- [[exchange-only-qubit]]

## Seed Metadata
- date_published: 2016-01-31

## Physics

Variant of the [[exchange-only-qubit]] designed for the realistic case where exchange couplings $J_{ij}$ cannot be fully turned off. Operates at symmetric operating points ("sweet spots") where $\partial J/\partial V_g = 0$, achieving first-order insensitivity to charge noise while maintaining universal control through exchange-only pulse sequences compatible with residual always-on coupling.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Qubit coherence $T_1$ | >1 s | Spin relaxation | [Shulman et al. 2012](https://doi.org/10.1126/science.1217692) |
| Qubit coherence $T_2$ | 10–100 μs | Enhanced by sweet-spot operation | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate fidelity (1Q) | 99–99.5% | Charge-noise-insensitive sequences | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate fidelity (2Q) | 95–99% | Theoretical estimate | [Shim & Tahan 2016](https://doi.org/10.1103/PhysRevB.93.121410) |
| Gate time (1Q) | 1–50 ns | Exchange pulses | — |
| Operating temperature | 20–100 mK | Si/SiGe or GaAs | — |
| Qubit footprint | ~150–300 nm pitch | 3 dots per logical qubit | — |

## Related Qubits

- [[exchange-only-qubit]] — parent architecture
- [[singlet-triplet-qubit]] — two-spin cousin
- [[loss-divincenzo-qubit]] — single-spin ancestor
