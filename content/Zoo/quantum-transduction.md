---
title: Quantum Transduction
entry_type: infrastructure
technology_family: Cross-Platform
status: demonstrated
figure_reviewed: true
first_proposed_year: 2010
first_demonstrated_year: 2020
keywords:
- transduction
- microwave-to-optical
- frequency conversion
- quantum interconnect
- quantum network
- electro-optic
- piezoelectric
- optomechanical
influence_score: 0.80
last_updated: '2026-05-19'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-deep-audit-2026-05-19
---

## Figure

![[quantum-transduction-figure.png]]

## Description

Quantum transduction converts quantum information between frequency domains, most importantly between microwave photons (used by superconducting and many spin-based processors) and optical or telecom photons (used for low-loss fiber links). For superconducting hardware, this is the missing bridge between local cryogenic processors and long-distance photonic networking.

The core difficulty is not simple frequency conversion. A useful quantum transducer must combine high end-to-end efficiency with low input-referred added noise, ideally below one photon, while operating in a cryogenic environment compatible with microwave quantum hardware. In practice, most platforms have historically achieved one of these goals before the other.

The main hardware approaches are:
1. **Electro-optic:** direct microwave-optical mode conversion in nonlinear materials such as lithium niobate or aluminum nitride.
2. **Electro-optomechanical / piezo-optomechanical:** microwave to mechanical to optical conversion through a long-lived mechanical intermediary.
3. **Magnonic:** microwave to magnon to optical conversion in ferrimagnetic systems such as YIG.
4. **Rare-earth ion:** microwave-optical conversion mediated by ensemble spin and optical transitions, often targeting telecom-compatible erbium systems.

Recent progress has pushed multiple platforms into the quantum-enabled regime. Electro-optic work reached 8.7% bidirectional efficiency at 0.16 input noise photons in pulsed operation, while silicon nanomechanical devices achieved continuous operation with input-referred added noise below one photon. The field is still constrained by insertion loss, pump-induced heating, and the difficulty of simultaneously achieving high efficiency, low noise, and scalable chip-level integration.

## Hamiltonian

Because quantum transduction is an umbrella entry, no single microscopic Hamiltonian covers all implementations. A representative electro-optomechanical transducer starts from

$$\frac{H}{\hbar} = \omega_e a^\dagger a + \omega_o c^\dagger c + \omega_m b^\dagger b + g_{em}(a + a^\dagger)(b + b^\dagger) + g_{0,o} c^\dagger c\,(b + b^\dagger),$$

where $a$ is the microwave mode, $b$ the mechanical mode, and $c$ the optical mode. Under strong red-detuned pumping and the rotating-wave approximation, this reduces to the beam-splitter form

$$\frac{H_{\mathrm{int}}}{\hbar} \approx G_{em}(a b^\dagger + a^\dagger b) + G_{om}(c b^\dagger + c^\dagger b),$$

which is the standard frequency-conversion picture for electro-optomechanical and piezo-optomechanical devices.

Direct electro-optic transducers are better described by an effective two-mode interaction,

$$\frac{H_{eo}}{\hbar} \approx G_{eo}(a c^\dagger + a^\dagger c),$$

again after linearization around a pumped operating point. The practical figure of merit is then not just coupling strength, but the total conversion efficiency and the input-referred added noise after all internal and external losses.

## Motivation

- **Quantum internet:** Connects microwave-domain processors to telecom fiber links.
- **Modular quantum computing:** Enables chip-to-chip entanglement distribution instead of requiring a single monolithic cryostat.
- **Hybrid platform bridge:** Provides an interface between superconducting, spin, atomic, and photonic hardware.
- **Distributed error correction:** Long-range photonic links can provide the nonlocal connectivity demanded by modular fault-tolerant architectures.

## Experimental Status

**Direct electro-optic platforms:**
- **Fan et al. (2018)** established resonantly enhanced superconducting cavity electro-optics as a coherent conversion platform.
- **McKenna et al. (2020)** demonstrated cryogenic lithium-niobate-on-sapphire conversion with on-chip microwave-to-optical efficiency $6.6 \times 10^{-6}$ and 20 MHz bandwidth.
- **Sahu et al. (2022)** reached quantum-enabled electro-optic operation with 8.7% total bidirectional efficiency at 0.16 input noise photons, and up to 15% efficiency at 0.41 noise photons.

**Electro-optomechanical and piezo-optomechanical platforms:**
- **Mirhosseini et al. (2020)** demonstrated transduction of a superconducting qubit excitation into an optical photon through a nanomechanical intermediary, a landmark proof of principle for qubit-to-optical conversion.
- **Zhao et al. (2025)** achieved continuous quantum-enabled microwave-to-optical transduction in crystalline silicon with input-referred added noise $n_{\mathrm{add}} = 0.58$ and upconversion rate $R = 0.47$ to $1.9$ kHz.
- **Chen et al. (2025)** demonstrated an unsuspended silicon-on-sapphire optomechanical ring resonator with 1.2% optical-to-optical conversion efficiency and $1.5 \times 10^{-5}$ microwave-to-optical efficiency, highlighting a thermally robust integrated path.

**Other modalities:**
- **Rochman et al. (2023)** demonstrated microwave-to-optical transduction with erbium ions coupled to planar photonic and superconducting resonators, showing the relevance of rare-earth approaches for telecom-compatible quantum interfaces.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Quantum-enabled electro-optic operation | 8.7% total bidirectional efficiency at 0.16 input noise photons | Up to 15% efficiency at 0.41 noise photons | [Sahu et al. 2022](https://doi.org/10.1038/s41467-022-28924-2) |
| Continuous quantum-enabled silicon transduction | $n_{\mathrm{add}} = 0.58$ | Continuous-wave operation, upconversion rate $R = 0.47$ to $1.9$ kHz | [Zhao et al. 2025](https://doi.org/10.1038/s41565-025-01874-8) |
| Cryogenic electro-optic on-chip efficiency | $6.6 \times 10^{-6}$ | Lithium-niobate-on-sapphire, 20 MHz bandwidth | [McKenna et al. 2020](https://doi.org/10.1364/OPTICA.397235) |
| Unsuspended SOS microwave-to-optical efficiency | $1.5 \times 10^{-5}$ | Same device reached 1.2% optical-to-optical conversion efficiency | [Chen et al. 2025](https://doi.org/10.1126/sciadv.adx6485) |
| Quantum-operation noise target | < 1 added photon referred to the input | Generic threshold-style target for useful quantum networking | [Lauk et al. 2020](https://doi.org/10.1088/2058-9565/ab788a) |

## Scaling Considerations

- **Loss budget dominates:** Fiber coupling, microwave packaging loss, and optical filtering can erase gains from strong internal conversion.
- **Pump heating:** Strong optical and microwave drives can raise mechanical occupancy or quench superconducting performance.
- **Bandwidth mismatch:** Microwave qubits, mechanics, and optical resonators often operate on very different linewidth scales.
- **Integration challenge:** The most attractive platforms are those that combine low-noise operation with fabrication compatible with superconducting circuits and telecom photonics.

## References

### Review
- N. Lauk et al., "Perspectives on quantum transduction," [Quantum Sci. Technol. 5, 020501 (2020)](https://doi.org/10.1088/2058-9565/ab788a) — [arXiv:1910.04821](https://arxiv.org/abs/1910.04821)

### Key experiments
- L. Fan et al., "Superconducting cavity electro-optics: A platform for coherent photon conversion between superconducting and photonic circuits," [Sci. Adv. 4, eaar4994 (2018)](https://doi.org/10.1126/sciadv.aar4994) — [arXiv:1806.04244](https://arxiv.org/abs/1806.04244)
- M. Mirhosseini et al., "Superconducting qubit to optical photon transduction," [Nature 588, 599 (2020)](https://doi.org/10.1038/s41586-020-3038-6) — [arXiv:2004.04838](https://arxiv.org/abs/2004.04838)
- R. Sahu et al., "Quantum-enabled operation of a microwave-optical interface," [Nat. Commun. 13, 1276 (2022)](https://doi.org/10.1038/s41467-022-28924-2)
- H. Zhao et al., "Quantum-enabled microwave-to-optical transduction via silicon nanomechanics," [Nat. Nanotechnol. (2025)](https://doi.org/10.1038/s41565-025-01874-8)

### Recent directions
- T. P. McKenna et al., "Cryogenic microwave-to-optical conversion using a triply resonant lithium-niobate-on-sapphire transducer," [Optica 7, 1737 (2020)](https://doi.org/10.1364/OPTICA.397235)
- J. Rochman et al., "Microwave-to-optical transduction with erbium ions coupled to planar photonic and superconducting resonators," [Nat. Commun. 14, 2389 (2023)](https://doi.org/10.1038/s41467-023-36799-0)
- W. D. Chen et al., "Intermodal microwave-to-optical transduction using silicon-on-sapphire optomechanical ring resonator," [Sci. Adv. 11, eadx6485 (2025)](https://doi.org/10.1126/sciadv.adx6485)

## Linked Papers

- [[lauk-2020-transduction-review]]
- [[mirhosseini-2020-superconducting-qubit-optical]]
- [[sahu-2022-quantum-enabled-operation-microwave-optical-interface]]
- [[zhao-2025-quantum-enabled-microwave-optical-transduction-silicon-nanomechanics]]

## Related Entries

- [[circuit-qed]] — Dominant microwave-domain platform that motivates long-distance transduction
- [[dual-rail-photonic-qubit]] — Canonical optical qubit encoding for fiber links
- [[microwave-photonic-qubit]] — Another frequency-domain interface concept in the Zoo
- [[rare-earth-ion-qubit]] — Matter-based telecom-compatible interface route
- [[t-center-qubit]] — Native silicon spin-photon interface, an alternative to separate transduction hardware
