---
title: Bifluxon Qubit
entry_type: qubit
technology_family: Superconducting
status: demonstrated
figure_reviewed: true
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
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-04
---

## Figure

![[bifluxon-qubit-figure.png]]

## Description

The bifluxon qubit is a fluxon-parity-protected superconducting qubit that achieves simultaneous protection against both charge noise (energy relaxation) and flux noise (dephasing) through a topological mechanism based on Aharonov-Casher interference. The circuit consists of a Cooper-pair box (CPB) shunted by a superinductor, forming a superconducting loop where the logical qubit states are encoded in the **odd and even parity of fluxons** (magnetic flux quanta) threading the loop.

Protection arises when the offset charge on the CPB island is tuned to an odd number of electrons, $(2n+1)e$. At this operating point, Aharonov-Casher interference causes the effective Josephson potential to become $\cos(\varphi/2)$ rather than $\cos(\varphi)$, where $\varphi$ is the superconducting phase difference across the junction. This $\cos(\varphi/2)$ potential has a double-well structure with degenerate minima at $\varphi = 0$ and $\varphi = 2\pi$ (corresponding to zero and one fluxon). The qubit states $|0\rangle$ and $|1\rangle$, localized in these separate wells, occupy **disjoint regions of phase space**, providing exponential suppression of matrix elements connecting them. This means that both charge fluctuations (which couple via $\hat{n}$) and flux fluctuations (which couple via $\hat{\varphi}$) have exponentially small matrix elements between the logical states.

The bifluxon is distinct from other protected qubit designs: unlike the 0-π qubit (which requires precise symmetry between two circuit branches) or the $\cos(2\varphi)$ qubit (which engineers a doubled Josephson potential), the bifluxon uses a single Josephson junction with a superinductive shunt, biased to the charge-parity sweet spot. This simpler circuit makes it more experimentally accessible.

## Hamiltonian

The bifluxon Hamiltonian is:

$$H = 4E_C(\hat{n} - n_g)^2 + \frac{1}{2}E_L\hat{\varphi}^2 - E_J\cos(\hat{\varphi} - \varphi_{\text{ext}})$$

where $E_C$ is the charging energy of the CPB island, $E_L$ is the inductive energy of the superinductor, $E_J$ is the Josephson energy, $n_g$ is the offset charge, and $\varphi_{\text{ext}} = 2\pi\Phi_{\text{ext}}/\Phi_0$ is the external flux bias. At $n_g = (2n+1)/2$ (odd charge parity), Aharonov-Casher interference transforms the effective potential:

$$V_{\text{eff}}(\varphi) \approx \frac{1}{2}E_L\varphi^2 - E_J^{\text{eff}}\cos(\varphi/2)$$

The $\cos(\varphi/2)$ term creates a double-well potential with minima at $\varphi = 0$ and $\varphi = 2\pi$, separated by a barrier of height $\sim E_J^{\text{eff}}$.

## Motivation

The central challenge in superconducting quantum computing is decoherence from environmental noise, primarily $1/f$ charge noise and $1/f$ flux noise. Conventional qubits (transmon, fluxonium) are protected against one noise type by operating at sweet spots, but remain vulnerable to the other. The bifluxon offers a path to **simultaneous protection** against both noise channels through a topological mechanism (fluxon-parity encoding) rather than materials engineering. If the protection can be scaled up — for instance, by replacing the single junction with arrays of $\cos(\varphi/2)$ elements — the bifluxon could achieve coherence times orders of magnitude beyond current transmon levels, potentially exceeding the threshold for quantum error correction with much lower overhead.

## Experimental Status

**First demonstration — Kalashnikov et al. (2020):**
- Fabricated a bifluxon circuit with a CPB shunted by a granular aluminum superinductor.
- Demonstrated tenfold increase in energy relaxation time ($T_1$ up to 100 μs) when the offset charge was tuned from the unprotected point to the charge-parity sweet spot.
- Measured charge-noise dephasing time $T_2^* > 1\,\mu\text{s}$.
- Confirmed the Aharonov-Casher protection mechanism by observing the charge-dependent oscillation of $T_1$.
- Published in PRX Quantum 1, 010307 (2020).

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ (protected) | ~100 μs | At charge-parity sweet spot | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $T_1$ (unprotected) | ~10 μs | Away from sweet spot | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $T_2^*$ | >1 μs | Charge-noise limited | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $E_J/E_C$ | ~1 | CPB regime (charge-sensitive) | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| $E_L/E_J$ | ≪1 | Large superinductance required | [Kalashnikov et al. 2020](https://doi.org/10.1103/PRXQuantum.1.010307) |
| Qubit frequency | ~5 GHz | Typical operating frequency | — |
| Operating temperature | ~20 mK | Dilution refrigerator | — |

## Scaling Considerations

- **Superinductor quality**: the protection level scales with the inductance of the superinductive shunt. Current granular aluminum superinductors achieve $L \sim 1\,\mu\text{H}$, but higher values with lower loss are needed for stronger protection.
- **Charge stability**: the protection mechanism requires stable tuning to the odd-charge parity point. Charge jumps (quasiparticle poisoning) can move the system away from the sweet spot, temporarily disabling protection.
- **Gate implementation**: universal gates on a protected qubit are inherently difficult because the same protection that suppresses noise also suppresses intentional control signals. Proposals include using the charge degree of freedom for $X$ gates and flux for $Z$ gates, but experimental gate demonstrations are still pending.
- **$\cos(\varphi/2)$ arrays**: theoretical proposals suggest replacing the single junction with arrays of $\cos(\varphi/2)$ elements to exponentially enhance protection, but this adds significant fabrication complexity.
- **Comparison to alternatives**: the 0-π qubit and $\cos(2\varphi)$ qubit offer similar protection goals with different circuit topologies and trade-offs. The bifluxon's advantage is its simpler single-junction design; its disadvantage is sensitivity to quasiparticle poisoning at the charge sweet spot.

## References

### Proposal and demonstration
- K. Kalashnikov et al., "Bifluxon: Fluxon-Parity-Protected Superconducting Qubit," [PRX Quantum 1, 010307 (2020)](https://doi.org/10.1103/PRXQuantum.1.010307) | [arXiv:1910.03769](https://arxiv.org/abs/1910.03769)

## Linked Papers

- [[kalashnikov-2020-bifluxon]]

## Related Entries

- [[fluxonium]] — related circuit topology with superinductive shunt
- [[0-pi-qubit]] — alternative protected qubit using circuit symmetry
- [[cos2phi-qubit]] — alternative protected qubit with doubled Josephson potential
- [[ferbo-qubit]] — another protected superconducting qubit design
- [[heavy-fluxonium-qubit]] — fluxonium variant with enhanced protection
