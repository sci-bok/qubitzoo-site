---
title: Tetron Qubit (Topological Superconductor)
entry_type: qubit
technology_family: Topological
status: proposed
figure_reviewed: true
first_proposed_year: 2016
keywords:
- tetron
- Majorana
- topological
- Microsoft
- topoconductor
- measurement-based
- parity
- InAs-Al
influence_score: 0.72
last_updated: '2026-06-11'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-06-11
---

## Figure

![[tetron-qubit-figure.png]]

## Description

The tetron is a **proposed Majorana-based topological qubit architecture** that stores a logical qubit in the joint fermion parity of **four Majorana zero modes (MZMs)** on a floating superconducting island. In the canonical Karzig et al. design, the four MZMs sit at the ends of two topological superconducting segments connected by a bridge or island geometry that enforces a fixed total parity sector.

A convenient logical encoding uses an even total-parity manifold,

$$P = \gamma_1\gamma_2\gamma_3\gamma_4 = +1,$$

with logical operators represented by Majorana bilinears such as

$$Z_L = i\gamma_1\gamma_2 = i\gamma_3\gamma_4, \qquad X_L = i\gamma_2\gamma_3.$$

The key architectural point is that **the tetron is not just "four Majoranas in one device"**. It is a control-and-readout design intended for **measurement-only topological quantum computation**: parity measurements of operators like $i\gamma_i\gamma_j$ are sequenced to emulate braids and enact Clifford operations without literally moving quasiparticles around a fixed H-shaped chip.

Experimentally, the relevant 2023-2025 InAs-Al program established two important ingredients for a future tetron-style qubit stack: devices that pass the **topological gap protocol** and **single-shot interferometric parity readout**. But no peer-reviewed paper yet demonstrates a full 8-tetron processor, a protected tetron-tetron entangling gate, or a braiding-grade logical Clifford benchmark.

## Hamiltonian

A representative low-energy tetron-island Hamiltonian is

$$H = E_C (N - n_g)^2 + i\sum_{i<j} \epsilon_{ij}\gamma_i\gamma_j + H_{\mathrm{meas}},$$

where $E_C$ is the charging energy of the floating superconducting island, $N$ is island charge, $n_g$ is the offset charge, and the residual Majorana hybridizations

$$\epsilon_{ij} \propto e^{-L_{ij}/\xi}\cos(k_F L_{ij} + \phi_{ij})$$

fall exponentially with Majorana separation $L_{ij}$. The term $H_{\mathrm{meas}}$ denotes tunable couplings to quantum dots, interferometers, or other parity sensors used to measure bilinears $i\gamma_i\gamma_j$.

This is the right umbrella Hamiltonian for a tetron entry because the logical qubit depends on **both** the Majorana bilinears and the island parity constraint. A static overlap Hamiltonian alone does not capture the measurement-only control layer, and it should not be confused with literal braiding dynamics.

## Motivation

- **Nonlocal encoding:** Local perturbations couple poorly to the logical degree of freedom when the relevant Majorana overlaps are exponentially suppressed.
- **Measurement-only control:** Joint parity measurements can replace literal particle exchange, which is architecturally cleaner than moving quasiparticles through a fixed chip.
- **Hardware-level error suppression:** If poisoning and overlap errors are both made small, the physical qubit could enter error correction with a friendlier native error model than conventional superconducting qubits.
- **Array compatibility:** Tetron and hexon layouts were proposed specifically with scalable Majorana-code / surface-code-style architectures in mind.

## Evergreen context

- [[quantum-hardware]] situates the tetron as an architecture-layer proposal, not a distinct materials platform by itself.
- [[divincenzo-criteria]] highlights the real bottlenecks here: initialization, repeated high-fidelity parity measurement, poisoning suppression, and demonstrated two-qubit control.
- [[threshold-theorem]] is the right lens for any claimed qubit-count savings, because architectural advantage matters only if the protected physical error model is actually realized.
- [[spin-orbit-coupling-for-qubit-control]] remains upstream of the whole stack because the InAs-Al heterostructures rely on spin-orbit-coupled semiconductor physics to enter the topological regime.

## Experimental Status

**Karzig et al. (2017) architecture proposal:**
- Introduced tetron and hexon layouts for measurement-only topological quantum computation.
- Established the fixed-parity, parity-measurement-based control picture used by later Microsoft-facing designs.

**Topological gap protocol milestone, Aghaee et al. (2023):**
- InAs-Al hybrid devices were reported to pass the topological gap protocol.
- Extracted maximum topological gaps were reported in the **20-60 $\mu$eV** range.
- This is a prerequisite materials/device milestone, not yet a demonstrated logical tetron qubit.

**Parity-readout milestone, Microsoft Azure Quantum et al. (2025):**
- Demonstrated **single-shot interferometric parity measurement** in an InAs-Al hybrid device compatible with future fusion-style Majorana protocols.
- Reported signal-to-noise ratio 1 in **3.6 $\mu$s**, parity-state dwell times **>1 ms**, and **1% assignment error** at optimal integration time.
- This is a major enabling ingredient for tetron-style measurement-only control, but it is not a peer-reviewed demonstration of an 8-qubit tetron processor.

**Current status (2026 audit):**
- No peer-reviewed tetron-specific entangling-gate benchmark, protected logical Clifford demonstration, or full tetron-array processor result was found in a targeted 2024-2026 search.
- Nearby 2026 Majorana-fusion theory papers exist, but they do not supersede the 2025 parity-readout experiment as the key hardware milestone for this entry.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Topological gap | 20-60 $\mu$eV | Extracted in devices passing the topological gap protocol | [Aghaee et al. 2023](https://doi.org/10.1103/PhysRevB.107.245423) |
| Parity-readout assignment error | 1% | Optimal interferometric single-shot parity readout | [Microsoft Azure Quantum et al. 2025](https://doi.org/10.1038/s41586-024-08445-2) |
| Parity-state dwell time | >1 ms | Reported at in-plane fields of about 2 T | [Microsoft Azure Quantum et al. 2025](https://doi.org/10.1038/s41586-024-08445-2) |
| MZM count | 4 per tetron | Minimal fixed-parity logical architecture | [Karzig et al. 2017](https://doi.org/10.1103/PhysRevB.95.235305) |

## Scaling Considerations

- **Measurement stack:** Repeated, high-fidelity projective parity measurement is the central systems requirement, not just spectroscopy.
- **Poisoning sensitivity:** Nonequilibrium quasiparticle poisoning remains a gating issue because it directly scrambles the parity degree of freedom.
- **Arraying:** Tetrons and hexons can be tiled into larger Majorana-code or surface-code-like layouts in principle, but that claim still awaits full hardware validation.
- **Universality:** Measurement-only Clifford control is not by itself a full universal stack; non-Clifford resources such as magic-state injection/distillation still remain part of the broader fault-tolerant story.

## References

### Original proposal
- T. Karzig et al., "Scalable designs for quasiparticle-poisoning-protected topological quantum computation with Majorana zero modes," [Phys. Rev. B 95, 235305 (2017)](https://doi.org/10.1103/PhysRevB.95.235305) — [arXiv:1610.05289](https://arxiv.org/abs/1610.05289)

### Experimental progress
- M. Aghaee et al., "InAs-Al hybrid devices passing the topological gap protocol," [Phys. Rev. B 107, 245423 (2023)](https://doi.org/10.1103/PhysRevB.107.245423) — [arXiv:2207.02472](https://arxiv.org/abs/2207.02472)
- Microsoft Azure Quantum, M. Aghaee et al., "Interferometric single-shot parity measurement in InAs-Al hybrid devices," [Nature 638, 651-655 (2025)](https://doi.org/10.1038/s41586-024-08445-2) — [arXiv:2401.09549](https://arxiv.org/abs/2401.09549)

## Linked Papers

- [[karzig-2017-tetron]]
- [[aghaee-2023-topological-gap-protocol]]
- [[aghaee-2025-majorana-1]]

## Related Entries

- [[majorana-topological-qubit]] — General Majorana parity-encoding concept
- [[planar-josephson-junction-qubit]] — Related InAs/Al topological-superconductivity platform
- [[qubit-readout]] — Parity-to-charge / interferometric readout is central to the tetron story
- [[surface-code-logical-qubit]] — Conventional fault-tolerant architecture that tetrons aim to complement or reduce overhead against
