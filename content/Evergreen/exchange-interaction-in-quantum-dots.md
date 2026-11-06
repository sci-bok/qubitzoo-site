---
title: "Exchange Interaction in Quantum Dots"
type: evergreen
status: evergreen
created: 2026-03-25
tags:
  - exchange-interaction
  - quantum-dot
  - spin-qubit
  - two-qubit-gate
  - gate-voltage-control
---

# Exchange Interaction in Quantum Dots

The Heisenberg exchange interaction $J$ between electron spins in adjacent quantum dots is the workhorse two-qubit coupling for semiconductor spin qubits. It arises microscopically from the interplay of quantum tunneling and Coulomb repulsion: when two electrons occupy neighboring dots separated by a tunable tunnel barrier, virtual hopping events — where one electron briefly visits the other's dot — lower the energy of the spin-singlet state relative to the spin-triplet. In the simplest Hubbard model, the exchange splitting is $J = 4t^2/U$, where $t$ is the interdot tunnel coupling and $U$ is the on-site Coulomb energy. This perturbative result holds when $t \ll U$, the regime where the dots are singly occupied and the Heisenberg Hamiltonian $H = J\,\vec{S}_1 \cdot \vec{S}_2$ faithfully describes the low-energy physics.

This note is the **device-and-materials view** of exchange. Use it when the question is how gate voltages create $J$, why barrier control and detuning control behave differently, or where charge sensitivity enters. Once the charge sector has been integrated out and the question becomes what unitary an exchange pulse implements inside a logical spin subspace, switch to [[heisenberg-exchange-in-quantum-dots]].

## Handoff contract

The exchange story has three layers. This note owns the first and hands a calibrated $J(t)$ to the second:

| Layer | Live variables | Owning note |
|---|---|---|
| Device and charge sector | tunnel coupling $t$, charging energy $U$, detuning, barrier voltage, charge admixture, and residual off-state coupling | this note |
| Effective spin dynamics | $J(t)\,\vec S_1\!\cdot\!\vec S_2$ and pulse area $\Phi=\int J(t)dt/\hbar$ | [[heisenberg-exchange-in-quantum-dots]] |
| Gate or encoded action | partial-SWAP angle, singlet-triplet phase, or projected logical axis | [[heisenberg-exchange-in-quantum-dots]], then [[sqrt-swap-as-universal-gate]] or the relevant encoded-qubit entry |

Stay here when the question is how a voltage waveform manufactures and perturbs $J$. Switch at the moment $J(t)$ is treated as an already calibrated control resource rather than a device-dependent response surface.

The power of the exchange interaction lies in its purely electrical tunability. Two complementary knobs exist: **barrier control** adjusts the height of the potential barrier between dots, modulating $t$ directly while keeping the charge distribution symmetric; **detuning control** tilts the double-well potential, shifting one dot's energy relative to the other, which changes $J$ through the effective $U$ in the denominator. Barrier control is generally preferred in modern devices because it preserves the charge symmetry point, reducing sensitivity to charge noise. In practice, $J$ can be tuned over many orders of magnitude — from effectively zero (dots fully isolated, $J/h < 1\,\text{kHz}$) to tens of GHz (strong tunnel coupling) — by adjusting a single gate voltage on a timescale of nanoseconds.

At the device level, the important comparison is **how cleanly a platform can manufacture and modulate $J$**. Singlet-triplet, exchange-only, RX, and AEON all inherit the same underlying exchange primitive, but the family-level engineering question here is upstream of the logical encoding: how steeply does $J$ respond to detuning versus barrier gates, how much residual off-state exchange survives, and how much charge admixture is reintroduced when fast control is demanded? In every case, the main fidelity risks enter through $\partial J/\partial \epsilon$ (detuning sensitivity), $\partial J/\partial V_B$ (barrier sensitivity), electrical noise on the control lines, and incomplete suppression of the interaction when it is supposed to be idle.

The exchange interaction also appears in extended forms: superexchange couples next-nearest-neighbor dots through a virtual intermediate occupation, mediator-dot variants turn the same logic into longer-range effective coupling, and the Hubbard parameters can be engineered in Si/SiGe, GaAs/AlGaAs, donors, and Si-MOS stacks with quantitatively different $t$ and $U$ scales. Understanding and controlling $J$ at the few-percent level is the central materials and device challenge for scaling spin-qubit processors.

## Key relationships

- [[loss-divincenzo-qubit]] — original proposal using $J$-based $\sqrt{\text{SWAP}}$ as the native entangling gate
- [[singlet-triplet-qubit]] — uses $J$ to rotate between $|S\rangle$ and $|T_0\rangle$ within the two-electron subspace
- [[exchange-only-qubit]] — all control via exchange; no magnetic field gradients needed
- [[aeon-qubit]] — always-on exchange variant operating at a sweet spot for noise protection
- [[rx-qubit]] — always-on three-spin exchange encoding where resonant drive addresses the exchange-defined qubit splitting
- [[hybrid-qubit]] — combines charge-like and spin-like states; exchange sets the energy scales
- [[silicon-spin-qubit]] — Si/SiGe and Si-MOS platforms where exchange is the primary 2-qubit mechanism
- [[sqrt-swap-as-universal-gate]] — the gate-level consequence once exchange pulses are treated abstractly
- [[heisenberg-exchange-in-quantum-dots]] — companion note for the post-Hubbard, Hamiltonian-first view

## References

- [[loss-divincenzo-1998-quantum-dots]] — original proposal for exchange-based quantum computation in quantum dots
- [[petta-2005-singlet-triplet]] — first coherent manipulation of singlet-triplet states via exchange in GaAs double dots
- [[reed-2016-reduced-sensitivity-charge-noise]] — reduced sensitivity to charge noise using symmetric barrier control
- [[martins-2016-symmetric-exchange-gates]] — noise-insensitive exchange operation via symmetric operating point
