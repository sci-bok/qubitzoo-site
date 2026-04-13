---
title: Continuous-Variable Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: true
first_proposed_year: 2005
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
last_updated: '2026-04-13'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-13
---

## Figure

![[continuous-variable-photonic-qubit-figure.png]]

## Description

Continuous-variable (CV) photonic qubits, more precisely photonic **qumodes**, encode quantum information in the field quadratures of bosonic optical modes rather than in discrete single-photon occupations. The relevant observables are the conjugate quadratures $\hat{q}$ and $\hat{p}$, and the resource states are squeezed states, coherent states, cluster states, and non-Gaussian bosonic states such as GKP states. Control is implemented with Gaussian optical operations, including beam splitters, phase shifters, squeezers, and displacements, while readout is performed by homodyne or heterodyne detection.

The CV approach is fundamentally distinct from discrete-variable photonic encodings such as dual-rail or Fock-state qubits. In CV photonics, Gaussian transformations are deterministic and high-bandwidth, so large optical networks can be programmed without relying on heralded nonlinear gates at every step. That makes CV photonics especially attractive for measurement-based quantum computing built from large entangled cluster states.

Gaussian operations alone are not universal. Universal CV quantum computation requires at least one non-Gaussian resource, for example a cubic-phase gate, photon subtraction, photon-number-resolving detection, or a non-Gaussian ancilla such as a GKP state. In practice, this non-Gaussian ingredient, together with finite-squeezing noise and optical loss, is the main obstacle separating impressive Gaussian demonstrations from fully fault-tolerant quantum computing.

CV photonics has nevertheless achieved striking scale. Yokoyama et al. (2013) generated time-multiplexed one-dimensional CV cluster states with more than one million modes, and Asavanant et al. (2019) demonstrated a two-dimensional CV cluster state with 6,200 modes suitable for universal measurement-based computation. More recently, Jia et al. (2026) reported monolithic on-chip generation, manipulation, and homodyne measurement of four-qumode CV cluster states on a Si$_3$N$_4$ photonic integrated circuit, showing that CV cluster-state hardware is now moving from bulk optics toward integrated quantum photonics. Commercial efforts, especially Xanadu's, have pushed this platform toward programmable photonic processors built around squeezed-light generation, interferometric control, and bosonic error-correction primitives.

## Hamiltonian

An optical CV mode is a quantum harmonic oscillator with free Hamiltonian

$$\hat{H}_0 = \hbar \omega \left(\hat{a}^\dagger \hat{a} + \frac{1}{2}\right).$$

In the dimensionless convention standard in CV quantum information,

$$\hat{q} = \frac{\hat{a} + \hat{a}^\dagger}{\sqrt{2}}, \qquad \hat{p} = \frac{\hat{a} - \hat{a}^\dagger}{i\sqrt{2}}, \qquad [\hat{q},\hat{p}] = i.$$

The Gaussian operations that generate the CV Clifford toolbox are:
- **Displacement**: $\hat{D}(\alpha) = \exp(\alpha \hat{a}^\dagger - \alpha^* \hat{a})$
- **Squeezing**: $\hat{S}(r) = \exp\left[\frac{r}{2}(\hat{a}^2 - \hat{a}^{\dagger 2})\right]$
- **Phase rotation**: $\hat{R}(\theta) = \exp(i\theta \hat{a}^\dagger \hat{a})$
- **Beam splitter**: $\hat{B}(\theta) = \exp\left[\theta(\hat{a}_1^\dagger \hat{a}_2 - \hat{a}_1 \hat{a}_2^\dagger)\right]$

These operations are efficiently implementable in linear and nonlinear optics, but they are not computationally universal by themselves. A standard non-Gaussian universal primitive is the cubic-phase gate

$$\hat{V}(\gamma) = \exp\left(i\frac{\gamma}{3}\hat{q}^3\right),$$

which lifts Gaussian dynamics to universal CV quantum computation. In fault-tolerant proposals, finite-squeezing noise is typically converted into a correctable discrete error model by embedding the CV mode in a GKP code.

## Motivation

CV photonics offers several unique advantages: room-temperature operation, deterministic Gaussian gates, native compatibility with telecom photonics and fiber networking, and exceptional scalability through time-domain multiplexing. No other quantum-computing platform has demonstrated entangled resources at the million-mode scale in such compact hardware. The trade-off is that finite squeezing and optical loss inject analog Gaussian noise, so practical fault tolerance requires either substantially improved squeezing or a bosonic error-correction layer such as GKP encoding.

## Experimental Status

**CV cluster state theory — Menicucci et al. (2006):**
- Generalized measurement-based quantum computation to continuous variables.
- Showed that CV cluster states plus homodyne detection suffice for arbitrary Gaussian transformations.
- Universality requires any single non-Gaussian measurement.

**Ultra-large-scale 1D cluster state — Yokoyama et al. (2013):**
- Demonstrated time-domain-multiplexed CV cluster states with more than $10^6$ entangled modes.
- Established time-domain multiplexing as the key scalability primitive for CV photonics.

**Comprehensive review — Braunstein and van Loock (2005):**
- Established the theoretical framework for quantum information processing with continuous variables.
- Detailed quantum teleportation, entanglement, and cryptographic protocols in the CV regime.

**Large-scale 2D cluster state — Asavanant et al. (2019):**
- Generated a two-dimensional CV cluster state of $5 \times 1240 = 6{,}200$ modes using time-domain multiplexing.
- Square lattice structure compatible with topological error-correcting codes.
- Demonstrated the scalability of CV entanglement generation in a compact tabletop optical setup.

**Integrated CV cluster-state photonics — Jia et al. (2026):**
- Demonstrated monolithic on-chip generation, manipulation, and balanced-homodyne measurement of four-qumode CV cluster states.
- Integrated squeezed-light sources, interferometers, entangling operations, and homodyne components on a Si$_3$N$_4$ chip.
- Marked a shift from bulk-optics CV experiments toward scalable photonic integrated circuits.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Cluster state size (1D) | $>10^6$ modes | Time-domain multiplexing milestone | [Yokoyama et al. 2013](https://doi.org/10.1038/nphoton.2013.287) |
| Cluster state size (2D) | 6,200 modes | Universal MBQC-compatible square-lattice resource | [Asavanant et al. 2019](https://doi.org/10.1126/science.aay2645) |
| Integrated cluster-state scale | 4 qumodes on chip | Monolithic generation, control, and homodyne readout on Si$_3$N$_4$ PIC | [Jia et al. 2026](https://doi.org/10.1038/s41566-026-01868-5) |
| Gate type | Deterministic Gaussian operations | Beam splitters, squeezers, phase shifts, displacements | [Braunstein and van Loock 2005](https://doi.org/10.1103/RevModPhys.77.513) |
| Universality requirement | At least one non-Gaussian resource | Cubic phase, photon subtraction, GKP ancilla, or PNR detection | [Menicucci et al. 2006](https://doi.org/10.1103/PhysRevLett.97.110501) |
| Fault-tolerance target | High squeezing, typically in the mid-teens of dB | Finite squeezing sets the effective noise floor for CV cluster-state MBQC | [Menicucci 2014](https://doi.org/10.1103/PhysRevLett.112.120504) |
| Detection | Homodyne / heterodyne | Quadrature readout with high efficiency | [Braunstein and van Loock 2005](https://doi.org/10.1103/RevModPhys.77.513) |
| Operating temperature | Room temperature optics | No cryogenic qubit hardware required at the encoding layer | [Braunstein and van Loock 2005](https://doi.org/10.1103/RevModPhys.77.513) |

## Scaling Considerations

- **Squeezing threshold**: finite squeezing is the central quantitative bottleneck. Fault-tolerant CV cluster-state proposals require substantially better squeezing than routine large-scale demonstrations, so squeezing overhead remains one of the main roadblocks to scalable logical computation.
- **Non-Gaussian operations**: the Gaussian no-go theorem means that the most challenging experimental component — generating high-quality non-Gaussian states or implementing non-Gaussian gates — cannot be avoided.
- **Noise accumulation**: finite squeezing introduces additive Gaussian noise at each gate, which accumulates through deep circuits. GKP encoding provides a path to discretize the noise and apply standard error correction.
- **Loss sensitivity**: photon loss degrades squeezed states, and loss in homodyne detection reduces measurement efficiency. Ultra-low-loss integrated photonics are needed for scaling.
- **Hybrid approaches**: combining CV cluster states with GKP-encoded logical qubits is considered the most promising path to fault-tolerant CV quantum computing, bridging the CV and DV paradigms.

## References

### Foundational review
- S. L. Braunstein and P. van Loock, "Quantum information with continuous variables," [Rev. Mod. Phys. 77, 513 (2005)](https://doi.org/10.1103/RevModPhys.77.513) | [arXiv:quant-ph/0410100](https://arxiv.org/abs/quant-ph/0410100)

### CV cluster state computation
- N. C. Menicucci et al., "Universal Quantum Computation with Continuous-Variable Cluster States," [Phys. Rev. Lett. 97, 110501 (2006)](https://doi.org/10.1103/PhysRevLett.97.110501) | [arXiv:quant-ph/0605198](https://arxiv.org/abs/quant-ph/0605198)

### Fault tolerance
- N. C. Menicucci, "Fault-Tolerant Measurement-Based Quantum Computing with Continuous-Variable Cluster States," [Phys. Rev. Lett. 112, 120504 (2014)](https://doi.org/10.1103/PhysRevLett.112.120504) | [arXiv:1310.7596](https://arxiv.org/abs/1310.7596)

### Time-multiplexed scaling
- S. Yokoyama et al., "Ultra-large-scale continuous-variable cluster states multiplexed in the time domain," [Nature Photonics 7, 982 (2013)](https://doi.org/10.1038/nphoton.2013.287) | [arXiv:1306.3366](https://arxiv.org/abs/1306.3366)

### Large-scale demonstration
- W. Asavanant et al., "Generation of time-domain-multiplexed two-dimensional cluster state," [Science 366, 373 (2019)](https://doi.org/10.1126/science.aay2645) | [arXiv:1903.03918](https://arxiv.org/abs/1903.03918)

### Integrated photonics
- X. Jia et al., "Monolithic integration of continuous-variable cluster-state generation, manipulation and measurement," [Nature Photonics 20, 428-436 (2026)](https://doi.org/10.1038/s41566-026-01868-5)

## Linked Papers

- [[braunstein-2005-cv-quantum-information]]
- [[menicucci-2006-cv-cluster-state]]
- [[asavanant-2019-2d-cv-cluster-state]]

## Related Entries

- [[dual-rail-photonic-qubit]] — discrete-variable photonic alternative
- [[gkp-codes]] — non-Gaussian bosonic encoding enabling fault-tolerant CV computation
- [[fusion-based-photonic-qubit]] — alternative photonic architecture (PsiQuantum)
- [[linear-optical-photonic-qubit]] — foundational linear-optical quantum computing proposal
- [[photonic-cluster-state-mbqc-qubit]] — discrete-variable cluster-state MBQC counterpart
