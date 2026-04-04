---
title: T-Center Qubit (Silicon Spin-Photon)
entry_type: qubit
technology_family: Spin-Photon
status: demonstrated
figure_reviewed: true
first_proposed_year: 2020
first_demonstrated_year: 2020
keywords:
- t-center
- silicon
- spin-photon
- telecom
- color center
- quantum network
- distributed quantum computing
influence_score: 0.75
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[t-center-qubit-figure.png]]

## Description

The T center is a carbon-hydrogen defect complex (C–C–H) in silicon that functions as a spin-photon interface with native emission at telecom wavelengths (~1326 nm, O-band). Each T center hosts up to four spin qubits (one electron spin, three nuclear spins from ¹³C and ¹H), combining long-lived quantum memory with a photonic interface — all within silicon, compatible with existing photonic integrated circuit fabrication.

The T center consists of two substitutional carbon atoms and one hydrogen atom in the silicon lattice. Its bound exciton transition produces photons directly in the **telecom O-band**, eliminating the need for frequency conversion that plagues diamond-based approaches. The inversion symmetry of the defect provides first-order protection against electric field noise, yielding spectrally stable optical lines.

The electron spin (S = 1/2) provides the primary qubit with optical initialization and readout via spin-dependent fluorescence. Nuclear spins (¹³C, ¹H) serve as long-lived quantum memory registers. Spin-selective optical transitions enable heralded entanglement between remote T centers via photon interference, teleported gates between silicon chips connected by telecom fiber, and any-to-any connectivity across modules without quantum frequency conversion.

Bergeron et al. (2020) achieved the first optical observation of individual T centers in silicon photonic structures with spin-dependent telecom transitions. Photonic Inc. subsequently demonstrated remote entanglement between T centers in separate cryostats connected by standard telecom fiber, and a teleported CNOT gate between silicon spin qubits (2024).

## Hamiltonian

Ground-state electron spin:

$$H = g_e \mu_B \mathbf{B} \cdot \mathbf{S} + \sum_i A_i \mathbf{S} \cdot \mathbf{I}_i$$

where $\mathbf{S}$ is the electron spin, $\mathbf{I}_i$ are nuclear spins (¹³C, ¹H), and $A_i$ are hyperfine coupling constants. The optical interface is governed by the bound exciton transition:

$$H_{\text{opt}} = \omega_0 |e\rangle\langle e| + \Omega(t)(|g\rangle\langle e| + \text{h.c.})$$

at $\omega_0 \approx 2\pi \times 226$ THz (1326 nm).

## Motivation

- **Telecom-native:** O-band emission (1326 nm) means direct fiber coupling and metropolitan-scale networking without frequency conversion.
- **Silicon-native:** Leverages mature CMOS and silicon photonics fabrication — foundry-compatible path to manufacturing.
- **Multi-qubit register:** Each T center contains up to 4 spin qubits (1 electron + 3 nuclear), providing local compute + memory in a single defect.
- **Any-to-any connectivity:** Photon-mediated entanglement enables non-local gate operations between arbitrary modules.
- **qLDPC-compatible:** Non-local connectivity naturally supports qLDPC codes with their non-planar check structure.

## Experimental Status

**First optical observation — Bergeron et al. (2020):**
- Individual T centers resolved in silicon photonic structures
- Spin-dependent telecom transitions at 1326 nm demonstrated
- Electron spin $T_2$ ~2 ms in isotopically enriched ²⁸Si

**Remote entanglement — Photonic Inc. (2024):**
- Entanglement between T centers in separate cryostats via telecom fiber
- Teleported CNOT gate between silicon spin qubits
- Demonstrated modular quantum computing architecture

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Emission wavelength | 1326 nm | Telecom O-band, no frequency conversion | [Bergeron et al. 2020](https://doi.org/10.1103/PRXQuantum.1.020301) |
| Electron spin T₂ | ~2 ms | In isotopically enriched ²⁸Si | [Bergeron et al. 2020](https://doi.org/10.1103/PRXQuantum.1.020301) |
| Nuclear spin T₂ | >1 s | ¹³C nuclear memory | [Bergeron et al. 2020](https://doi.org/10.1103/PRXQuantum.1.020301) |
| Operating temperature | ~1 K | Compatible with standard cryogenics | [Bergeron et al. 2020](https://doi.org/10.1103/PRXQuantum.1.020301) |
| Remote entanglement | Demonstrated | Between separate cryostats via telecom fiber | — |

## Scaling Considerations

- **Silicon-native:** Leverages mature CMOS and silicon photonics fabrication — foundry-compatible.
- **Telecom-native:** O-band emission means direct fiber coupling, metropolitan-scale networking without frequency conversion.
- **QLDPC-compatible:** Photonic Inc.'s architecture targets QLDPC codes exploiting the any-to-any connectivity of photon-mediated entanglement.
- **Multi-qubit register:** Each T center contains up to 4 spin qubits, providing local compute + memory in a single defect.

## References

### Original proposal and demonstration
- L. Bergeron et al., "Silicon-Integrated Telecommunications Photon-Spin Interface," [PRX Quantum 1, 020301 (2020)](https://doi.org/10.1103/PRXQuantum.1.020301) — [arXiv:1912.09178](https://arxiv.org/abs/1912.09178)

### Distributed quantum computing
- Photonic Inc., "Distributed quantum computing with silicon T centers" (2024) — demonstration of remote entanglement and teleported gates

## Linked Papers

- [[bergeron-2020-t-center]]
- [[photonic-2024-distributed-qc]]

## Related Entries

- [[nv-center-qubit]] — Diamond color center; more mature but requires frequency conversion
- [[siv-color-center-qubit]] — Diamond SiV/SnV; excellent optical properties but not telecom-native
- [[silicon-spin-qubit]] — Silicon spin qubit cousin (no photonic interface)
- [[dual-rail-photonic-qubit]] — Photonic encoding that interfaces with T centers
- [[rare-earth-ion-qubit]] — rare-earth ions (Er³⁺) as alternative telecom-wavelength solid-state qubit
