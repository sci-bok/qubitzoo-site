---
title: Continuous-Variable Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
figure_reviewed: false
first_proposed_year: 2005
first_demonstrated_year: 2019
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
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-manual-2026-04-04
---

## Figure

![[continuous-variable-photonic-qubit-figure.png]]

## Description

Continuous-variable (CV) photonic qubits encode quantum information in the quadrature amplitudes — position $\hat{x}$ and momentum $\hat{p}$ — of the electromagnetic field, rather than in discrete photon-number states. The quantum information is carried by squeezed vacuum states, coherent states, or more exotic non-Gaussian states (such as GKP states), and is manipulated using beam splitters, phase shifters, squeezers, and displacement operations. Measurement is performed via homodyne detection (measuring one quadrature) or heterodyne detection (measuring both quadratures simultaneously with added noise).

The CV approach is fundamentally distinct from discrete-variable (DV) photonic schemes like dual-rail or Fock-state encoding. While DV photonic gates are inherently probabilistic (relying on photon detection events), CV Gaussian operations — beam splitting, squeezing, displacement, and phase rotation — are deterministic. This eliminates the need for heralding and feed-forward that makes DV linear-optical quantum computing resource-intensive.

However, Gaussian operations alone are insufficient for universal quantum computation — this is the Gaussian no-go theorem. Universality requires at least one non-Gaussian element: a cubic phase gate, photon subtraction, photon-number-resolving (PNR) detection, or a non-Gaussian ancilla state such as a GKP state. This non-Gaussian resource is the key experimental challenge.

The scalability argument for CV photonics is compelling: Asavanant et al. (2019) demonstrated generation of a two-dimensional CV cluster state with over 6,200 entangled modes using time-domain multiplexing, and earlier work by Yokoyama et al. (2013) achieved over one million modes in one dimension. These large-scale entangled resource states enable measurement-based quantum computation via sequential homodyne measurements on the cluster, with the measurement basis determining the computation.

Xanadu has pursued CV photonics as their primary quantum computing approach, combining squeezed-light sources with programmable interferometers and PNR detectors.

## Hamiltonian

A single-mode CV system is described by the bosonic field operators with canonical commutation relation $[\hat{x}, \hat{p}] = i\hbar$. The quadrature operators relate to the creation/annihilation operators as:

$$\hat{x} = \sqrt{\frac{\hbar}{2\omega}}(\hat{a} + \hat{a}^\dagger), \quad \hat{p} = -i\sqrt{\frac{\hbar\omega}{2}}(\hat{a} - \hat{a}^\dagger)$$

Key Gaussian transformations generating the Clifford group for CV:
- **Displacement**: $\hat{D}(\alpha) = \exp(\alpha \hat{a}^\dagger - \alpha^* \hat{a})$
- **Squeezing**: $\hat{S}(r) = \exp\left[\frac{r}{2}(\hat{a}^2 - \hat{a}^{\dagger 2})\right]$, reducing noise in one quadrature by $e^{-r}$
- **Phase rotation**: $\hat{R}(\theta) = \exp(i\theta \hat{a}^\dagger \hat{a})$
- **Beam splitter**: $\hat{B}(\theta) = \exp\left[\theta(\hat{a}_1^\dagger \hat{a}_2 - \hat{a}_1 \hat{a}_2^\dagger)\right]$

For universality, one also requires the cubic phase gate:

$$\hat{V}(\gamma) = \exp\left(i\frac{\gamma}{3\hbar}\hat{x}^3\right)$$

which is a non-Gaussian operation.

## Motivation

CV photonics offers several unique advantages: room-temperature operation (no cryogenics), deterministic Gaussian gates with near-unity efficiency, natural compatibility with optical fiber for communication and networking, and massive scalability of entangled resource states via time-domain multiplexing. The ability to generate millions of entangled modes in a compact optical setup is unmatched by any other platform. The key trade-off is that finite squeezing introduces Gaussian noise that accumulates through computation, requiring either very high squeezing levels (>15 dB for fault tolerance with surface codes) or non-Gaussian error correction (GKP encoding) to reach practical fault tolerance thresholds.

## Experimental Status

**CV cluster state theory — Menicucci et al. (2006):**
- Generalized measurement-based quantum computation to continuous variables.
- Showed that CV cluster states plus homodyne detection suffice for arbitrary Gaussian transformations.
- Universality requires any single non-Gaussian measurement.

**Comprehensive review — Braunstein and van Loock (2005):**
- Established the theoretical framework for quantum information processing with continuous variables.
- Detailed quantum teleportation, entanglement, and cryptographic protocols in the CV regime.

**Large-scale 2D cluster state — Asavanant et al. (2019):**
- Generated a two-dimensional CV cluster state of $5 \times 1240 = 6{,}200$ modes using time-domain multiplexing.
- Square lattice structure compatible with topological error-correcting codes.
- Demonstrated the scalability of CV entanglement generation in a compact tabletop optical setup.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Squeezing level | 10–15 dB | State of the art; >15 dB needed for fault tolerance | — |
| Cluster state size | >6,200 modes (2D) | Asavanant et al. 2019; >10⁶ modes in 1D | [Asavanant et al. 2019](https://doi.org/10.1126/science.aay2645) |
| Gate type | Deterministic (Gaussian) | Beam splitters, squeezers, displacements | — |
| Non-Gaussian resource | Required for universality | Cubic phase, photon subtraction, GKP, or PNR | — |
| Operating temperature | Room temperature | No cryogenics required | — |
| Detection | Homodyne/heterodyne | Deterministic, high-efficiency | — |
| Fiber compatibility | Excellent | Telecom-wavelength operation possible | — |

## Scaling Considerations

- **Squeezing threshold**: fault-tolerant quantum computing with CV cluster states and the surface code requires squeezing levels exceeding ~15 dB, while current state-of-the-art sources produce ~10–15 dB. This gap is a primary bottleneck.
- **Non-Gaussian operations**: the Gaussian no-go theorem means that the most challenging experimental component — generating high-quality non-Gaussian states or implementing non-Gaussian gates — cannot be avoided.
- **Noise accumulation**: finite squeezing introduces additive Gaussian noise at each gate, which accumulates through deep circuits. GKP encoding provides a path to discretize the noise and apply standard error correction.
- **Loss sensitivity**: photon loss degrades squeezed states, and loss in homodyne detection reduces measurement efficiency. Ultra-low-loss integrated photonics are needed for scaling.
- **Hybrid approaches**: combining CV cluster states with GKP-encoded logical qubits is considered the most promising path to fault-tolerant CV quantum computing, bridging the CV and DV paradigms.

## References

### Foundational review
- S. L. Braunstein and P. van Loock, "Quantum information with continuous variables," [Rev. Mod. Phys. 77, 513 (2005)](https://doi.org/10.1103/RevModPhys.77.513) | [arXiv:quant-ph/0410100](https://arxiv.org/abs/quant-ph/0410100)

### CV cluster state computation
- N. C. Menicucci et al., "Universal Quantum Computation with Continuous-Variable Cluster States," [Phys. Rev. Lett. 97, 110501 (2006)](https://doi.org/10.1103/PhysRevLett.97.110501) | [arXiv:quant-ph/0605198](https://arxiv.org/abs/quant-ph/0605198)

### Large-scale demonstration
- W. Asavanant et al., "Generation of time-domain-multiplexed two-dimensional cluster state," [Science 366, 373 (2019)](https://doi.org/10.1126/science.aay2645)

## Linked Papers

- [[braunstein-2005-cv-quantum-information]]
- [[menicucci-2006-cv-cluster-state]]
- [[asavanant-2019-2d-cv-cluster-state]]

## Related Entries

- [[dual-rail-photonic-qubit]] — discrete-variable photonic alternative
- [[gkp-codes]] — non-Gaussian bosonic encoding enabling fault-tolerant CV computation
- [[fusion-based-photonic-qubit]] — alternative photonic architecture (PsiQuantum)
- [[linear-optical-photonic-qubit]] — foundational linear-optical quantum computing proposal
