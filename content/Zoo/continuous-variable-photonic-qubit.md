---
title: Continuous-Variable Photonic Qumode
entry_type: qumode
technology_family: Photonic
status: demonstrated
figure_reviewed: false
figure_reviewed_by: "Codex deep audit 2026-09-21 — current primary failed physics review; replacement pending"
figure_reviewed_at: "2026-09-21T14:00:00Z"
first_proposed_year: 1999
first_demonstrated_year: 2013
keywords:
- continuous variable
- CV
- squeezed state
- homodyne detection
- photonic qubit
- Xanadu
- cluster state
- measurement-based quantum computing
- Gaussian operations
- quadrature
influence_score: 0.76
last_updated: '2026-09-21'
generated_by: scibok-curation
extracted_by: scibok
verified_by: codex-deep-audit-2026-09-21
---

## Figure

![[continuous-variable-photonic-qubit-figure.png]]

## Description

Continuous-variable (CV) photonic processors use photonic **qumodes**: bosonic optical modes whose field quadratures carry quantum information, rather than discrete single-photon occupations. The relevant observables are the conjugate quadratures $\hat{q}$ and $\hat{p}$, and the resource states include squeezed states, coherent states, cluster states, and non-Gaussian bosonic states such as GKP states. Control is implemented with Gaussian optical operations, including beam splitters, phase shifters, squeezers, and displacements, while readout is performed by homodyne or heterodyne detection.

The CV approach is fundamentally distinct from discrete-variable photonic encodings such as dual-rail or Fock-state qubits: the fundamental carrier is a bosonic mode, not a two-level qubit. Gaussian transformations are deterministic and high-bandwidth, so large optical networks can be programmed without relying on heralded nonlinear gates at every step. That makes CV photonics especially attractive for measurement-based quantum computing built from large entangled cluster states.

Gaussian operations alone are not universal. Universal CV quantum computation requires a suitable non-Gaussian gate, measurement, or ancilla, such as a cubic-phase resource, photon-number-resolving detection used for conditional state preparation, or a GKP state. Photon subtraction is a useful non-Gaussian state-engineering primitive, but is not by itself interchangeable with a deterministic cubic-phase gate. In practice, scalable non-Gaussian resource preparation, finite-squeezing noise, and optical loss are the main obstacles separating impressive Gaussian demonstrations from fully fault-tolerant quantum computing.

CV photonics has nevertheless achieved striking scale. Yokoyama et al. (2013) generated time-multiplexed one-dimensional CV cluster states with more than 10,000 modes; Yoshikawa et al. (2016) then extended the same architecture beyond one million sequential modes using continuous phase-feedback control. Asavanant et al. (2019) demonstrated a two-dimensional CV cluster state with 6,200 modes for universal measurement-based computation once the required non-Gaussian resource and adaptive control are supplied. In 2025, Roh et al. demonstrated deterministic one-, two-, and three-dimensional cluster-state connectivities in time-frequency modes, while Wang et al. generated programmable one- and two-dimensional cluster quantum microcombs containing as many as 60 qumodes on a microresonator. Larsen et al. also demonstrated an integrated optical source of GKP states, although further loss reduction is still required for fault-tolerant operation. Jia et al. (2026) subsequently reported monolithic on-chip generation, manipulation, and balanced-homodyne measurement of four-qumode CV cluster states on a Si$_3$N$_4$ photonic integrated circuit. Together these results show complementary progress in graph connectivity, on-chip mode count, non-Gaussian resources, and full-system integration.

## Hamiltonian

An optical CV mode is a quantum harmonic oscillator with free Hamiltonian

$$\hat{H}_0 = \hbar \omega \left(\hat{a}^\dagger \hat{a} + \frac{1}{2}\right).$$

In the dimensionless convention standard in CV quantum information,

$$\hat{q} = \frac{\hat{a} + \hat{a}^\dagger}{\sqrt{2}}, \qquad \hat{p} = \frac{\hat{a} - \hat{a}^\dagger}{i\sqrt{2}}, \qquad [\hat{q},\hat{p}] = i.$$

The Gaussian operations that generate the CV Clifford toolbox are:
- **Displacement**: $\hat{D}(\alpha) = \exp(\alpha \hat{a}^\dagger - \alpha^* \hat{a})$
- **Squeezing**: $\hat{S}(r) = \exp\left[\frac{r}{2}(\hat{a}^2 - \hat{a}^{\dagger 2})\right]$
- **Phase rotation**: $\hat{R}(\theta) = \exp(-i\theta \hat{a}^\dagger \hat{a})$
- **Beam splitter**: $\hat{B}(\theta) = \exp\left[\theta(\hat{a}_1^\dagger \hat{a}_2 - \hat{a}_1 \hat{a}_2^\dagger)\right]$

For the real squeezing convention above, $r>0$ squeezes the $q$ quadrature and anti-squeezes $p$. A CV cluster state on graph adjacency matrix $A$ is generated ideally with controlled-phase entanglers $\hat{C}_Z^{(jk)}(g)=\exp(i g\hat{q}_j\hat{q}_k)$; its infinite-squeezing nullifiers are $\hat{\delta}_j=\hat{p}_j-\sum_k A_{jk}\hat{q}_k$. Finite squeezing makes the nullifier variances nonzero and therefore injects additive noise into measurement-based gates.

Gaussian operations are efficiently implementable in linear and nonlinear optics, but they are not computationally universal by themselves. A standard non-Gaussian universal primitive is the cubic-phase gate

$$\hat{V}(\gamma) = \exp\left(i\frac{\gamma}{3}\hat{q}^3\right),$$

which lifts Gaussian dynamics to universal CV quantum computation. In fault-tolerant proposals, finite-squeezing noise is typically converted into a correctable discrete error model by embedding the CV mode in a GKP code.

## Motivation

CV photonics offers several unique advantages: room-temperature optical processing, deterministic Gaussian gates, native compatibility with telecom photonics and fiber networking, and exceptional scalability through temporal and frequency multiplexing. Time-multiplexed experiments have certified entanglement across more than one million sequential modes, although this mode count is not equivalent to a processor with one million simultaneously addressable logical qubits. The trade-off is that finite squeezing and optical loss inject analog Gaussian noise, so practical fault tolerance requires improved squeezing together with a bosonic error-correction layer such as GKP encoding.

## Experimental Status

**CV cluster state theory — Menicucci et al. (2006):**
- Generalized measurement-based quantum computation to continuous variables.
- Showed that CV cluster states plus homodyne detection suffice for arbitrary Gaussian transformations.
- Universality requires any single non-Gaussian measurement.

**Ultra-large-scale 1D cluster state — Yokoyama et al. (2013):**
- Demonstrated time-domain-multiplexed CV cluster states with more than 10,000 entangled modes.
- Established time-domain multiplexing as the key scalability primitive for CV photonics.

**One-million-mode 1D cluster state — Yoshikawa et al. (2016):**
- Extended the dual-rail time-domain architecture beyond one million fully inseparable modes.
- Used continuous phase-feedback control to remove the long-duration drift limit of the 2013 experiment.

**Comprehensive review — Braunstein and van Loock (2005):**
- Established the theoretical framework for quantum information processing with continuous variables.
- Detailed quantum teleportation, entanglement, and cryptographic protocols in the CV regime.

**Large-scale 2D cluster state — Asavanant et al. (2019):**
- Generated a two-dimensional CV cluster state of $5 \times 1240 = 6{,}200$ modes using time-domain multiplexing.
- Square-lattice structure compatible with measurement-based and topological constructions when supplemented by the required non-Gaussian resources and fault-tolerant encoding.
- Demonstrated the scalability of CV entanglement generation in a compact tabletop optical setup.

**Three-dimensional cluster connectivity — Roh et al. (2025):**
- Deterministically generated one-, two-, and three-dimensional CV cluster-state connectivities in time-frequency modes of ultrafast quantum light.
- Verified the generated graphs with multimode Gaussian-state tomography, nullifier measurements, and full-inseparability tests.

**On-chip cluster quantum microcomb — Wang et al. (2025):**
- Generated CV cluster states with as many as 60 frequency-domain qumodes in an optical microresonator.
- Programmed one- and two-dimensional lattice graphs through the pump-line configuration and verified inseparability from measured covariance matrices.

**Integrated optical GKP source — Larsen et al. (2025):**
- Generated 1550-nm GKP states using an ultra-low-loss silicon-nitride photonic chip and high-efficiency photon-number-resolving detectors.
- Resolved at least four peaks in each quadrature and a $3 \times 3$ lattice of negative-Wigner-function regions; the demonstrated states were not yet fault-tolerant because further loss reduction is required.

**Integrated CV cluster-state photonics — Jia et al. (2026):**
- Demonstrated monolithic on-chip generation, manipulation, and balanced-homodyne measurement of four-qumode CV cluster states.
- Integrated squeezed-light sources, interferometers, entangling operations, and homodyne components on a Si$_3$N$_4$ chip.
- Marked a shift from bulk-optics CV experiments toward scalable photonic integrated circuits.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Cluster state size (1D) | $>10^4$ modes | Original time-domain multiplexing milestone | [Yokoyama et al. 2013](https://doi.org/10.1038/nphoton.2013.287) |
| Extended 1D cluster scale | $>10^6$ modes | Continuous phase-feedback enabled million-mode operation | [Yoshikawa et al. 2016](https://doi.org/10.1063/1.4962732) |
| Cluster state size (2D) | 6,200 modes | Universal MBQC-compatible square-lattice resource | [Asavanant et al. 2019](https://doi.org/10.1126/science.aay2645) |
| Demonstrated graph connectivity | 1D, 2D, and 3D | Deterministic CV cluster-state generation in time-frequency modes | [Roh et al. 2025](https://doi.org/10.1038/s41566-025-01631-2) |
| On-chip cluster-state scale | 60 qumodes | Programmable 1D/2D microcomb graphs; not a full processor | [Wang et al. 2025](https://doi.org/10.1038/s41377-025-01812-2) |
| Integrated cluster-state scale | 4 qumodes on chip | Monolithic generation, control, and homodyne readout on Si$_3$N$_4$ PIC | [Jia et al. 2026](https://doi.org/10.1038/s41566-026-01868-5) |
| Integrated non-Gaussian resource | Optical GKP state with $\geq4$ resolved peaks in both $q$ and $p$ | $3 \times 3$ negative-Wigner lattice; further loss reduction needed for fault tolerance | [Larsen et al. 2025](https://doi.org/10.1038/s41586-025-09044-5) |
| Gate type | Deterministic Gaussian operations | Beam splitters, squeezers, phase shifts, displacements | [Braunstein and van Loock 2005](https://doi.org/10.1103/RevModPhys.77.513) |
| Universality requirement | At least one suitable non-Gaussian resource | Cubic-phase or GKP ancilla; conditional PNR-enabled state preparation is another route | [Menicucci et al. 2006](https://doi.org/10.1103/PhysRevLett.97.110501) |
| Fault-tolerance target | 20.5 dB in the original 2014 architecture | Threshold is architecture- and code-dependent; this value should not be treated as universal | [Menicucci 2014](https://doi.org/10.1103/PhysRevLett.112.120504) |
| Detection | Homodyne / heterodyne | Quadrature readout with high efficiency | [Braunstein and van Loock 2005](https://doi.org/10.1103/RevModPhys.77.513) |
| Operating temperature | Room-temperature optical modes and Gaussian circuitry | High-performance photon-number-resolving detectors can still require cryogenic operation | [Larsen et al. 2025](https://doi.org/10.1038/s41586-025-09044-5) |

## Scaling Considerations

- **Squeezing threshold**: finite squeezing is the central quantitative bottleneck. The cited 2014 fault-tolerance construction required 20.5 dB of initial squeezing; later architectures can shift the threshold, so no single dB value applies universally. The gap between source squeezing, delivered squeezing after loss, and code-level requirements remains a major roadblock.
- **Non-Gaussian operations**: the Gaussian no-go theorem means that the most challenging experimental component — generating high-quality non-Gaussian states or implementing non-Gaussian gates — cannot be avoided.
- **Noise accumulation**: finite squeezing introduces additive Gaussian noise at each gate, which accumulates through deep circuits. GKP encoding provides a path to discretize the noise and apply standard error correction.
- **Loss sensitivity**: photon loss degrades squeezed states, and loss in homodyne detection reduces measurement efficiency. Ultra-low-loss integrated photonics are needed for scaling.
- **Hybrid approaches**: combining CV cluster states with GKP-encoded logical qubits is considered the most promising path to fault-tolerant CV quantum computing, bridging the CV and DV paradigms.

## References

### Universal CV quantum computation
- S. Lloyd and S. L. Braunstein, "Quantum Computation over Continuous Variables," [Phys. Rev. Lett. 82, 1784 (1999)](https://doi.org/10.1103/PhysRevLett.82.1784) | [arXiv:quant-ph/9810082](https://arxiv.org/abs/quant-ph/9810082)

### Foundational review
- S. L. Braunstein and P. van Loock, "Quantum information with continuous variables," [Rev. Mod. Phys. 77, 513 (2005)](https://doi.org/10.1103/RevModPhys.77.513) | [arXiv:quant-ph/0410100](https://arxiv.org/abs/quant-ph/0410100)

### CV cluster state computation
- N. C. Menicucci et al., "Universal Quantum Computation with Continuous-Variable Cluster States," [Phys. Rev. Lett. 97, 110501 (2006)](https://doi.org/10.1103/PhysRevLett.97.110501) | [arXiv:quant-ph/0605198](https://arxiv.org/abs/quant-ph/0605198)

### Fault tolerance
- N. C. Menicucci, "Fault-Tolerant Measurement-Based Quantum Computing with Continuous-Variable Cluster States," [Phys. Rev. Lett. 112, 120504 (2014)](https://doi.org/10.1103/PhysRevLett.112.120504) | [arXiv:1310.7596](https://arxiv.org/abs/1310.7596)

### Time-multiplexed scaling
- S. Yokoyama et al., "Ultra-large-scale continuous-variable cluster states multiplexed in the time domain," [Nature Photonics 7, 982 (2013)](https://doi.org/10.1038/nphoton.2013.287) | [arXiv:1306.3366](https://arxiv.org/abs/1306.3366)

### Million-mode extension
- J. Yoshikawa et al., "Generation of one-million-mode continuous-variable cluster state by unlimited time-domain multiplexing," [APL Photonics 1, 060801 (2016)](https://doi.org/10.1063/1.4962732) | [arXiv:1606.06688](https://arxiv.org/abs/1606.06688)

### Large-scale demonstration
- W. Asavanant et al., "Generation of time-domain-multiplexed two-dimensional cluster state," [Science 366, 373 (2019)](https://doi.org/10.1126/science.aay2645) | [arXiv:1903.03918](https://arxiv.org/abs/1903.03918)

### Three-dimensional connectivity
- C. Roh et al., "Generation of three-dimensional cluster entangled state," [Nature Photonics 19, 526 (2025)](https://doi.org/10.1038/s41566-025-01631-2) | [arXiv:2309.05437](https://arxiv.org/abs/2309.05437)

### Integrated cluster quantum microcombs
- Z. Wang et al., "Large-scale cluster quantum microcombs," [Light: Science & Applications 14, 164 (2025)](https://doi.org/10.1038/s41377-025-01812-2) | [arXiv:2406.10715](https://arxiv.org/abs/2406.10715)

### Integrated non-Gaussian resource
- M. V. Larsen et al., "Integrated photonic source of Gottesman–Kitaev–Preskill qubits," [Nature 642, 587 (2025)](https://doi.org/10.1038/s41586-025-09044-5)

### Integrated photonics
- X. Jia et al., "Monolithic integration of continuous-variable cluster-state generation, manipulation and measurement," [Nature Photonics 20, 428-436 (2026)](https://doi.org/10.1038/s41566-026-01868-5)

## Linked Papers

- [[lloyd-1999-quantum-computation-continuous-variables]]
- [[braunstein-2005-cv-quantum-information]]
- [[menicucci-2006-cv-cluster-state]]
- [[menicucci-2014-fault-tolerant-cv-cluster-states]]
- [[yokoyama-2013-ultra-large-scale-cv-cluster-state]]
- [[yoshikawa-2016-one-million-mode-cv-cluster-state]]
- [[asavanant-2019-2d-cv-cluster-state]]
- [[roh-2025-three-dimensional-cv-cluster-state]]
- [[wang-2025-cluster-quantum-microcombs]]
- [[larsen-2025-integrated-photonic-gkp-source]]
- [[jia-2026-monolithic-cv-cluster-state-integration]]

## Evergreen context

- [[bosonic-code-hierarchy]] — locates CV qumodes relative to GKP and other oscillator encodings that convert analog displacement noise into correctable logical errors.
- [[threshold-theorem]] — provides the right standard for judging whether finite squeezing and loss can support scalable fault tolerance.
- [[erasure-error-vs-pauli-error]] — separates heralded photon loss from the additive Gaussian noise introduced by finite squeezing.

## Related Entries

- [[dual-rail-photonic-qubit]] — discrete-variable photonic alternative
- [[bosonic-qubit]] — umbrella context for oscillator encodings and qumodes
- [[gkp-codes]] — non-Gaussian bosonic encoding enabling fault-tolerant CV computation
- [[fusion-based-photonic-qubit]] — alternative photonic architecture (PsiQuantum)
- [[linear-optical-photonic-qubit]] — foundational linear-optical quantum computing proposal
- [[photonic-cluster-state-mbqc-qubit]] — discrete-variable cluster-state MBQC counterpart
