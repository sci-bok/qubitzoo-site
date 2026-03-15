---
title: T-Center Qubit (Silicon Spin-Photon)
entry_type: qubit
technology_family: Spin-Photon
status: demonstrated
first_proposed_year: 2020
keywords:
- t-center
- silicon
- spin-photon
- telecom
- color center
- quantum network
- distributed quantum computing
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The T center is a carbon-hydrogen defect complex (C–C–H) in silicon that functions as a spin-photon interface with native emission at telecom wavelengths (~1326 nm, O-band). Each T center hosts up to four spin qubits (one electron spin, three nuclear spins from ¹³C and ¹H), combining long-lived quantum memory with a photonic interface — all within silicon, compatible with existing photonic integrated circuit fabrication.


## Figure

![[t-center-qubit-figure.png]]

## Description

### Structure and physics

The T center consists of two substitutional carbon atoms and one hydrogen atom in the silicon lattice. Its bound exciton transition produces photons directly in the telecom O-band, eliminating the need for frequency conversion that plagues diamond-based approaches. The inversion symmetry of the defect provides first-order protection against electric field noise, yielding spectrally stable optical lines.

### Spin-photon interface

The electron spin (S = 1/2) provides the primary qubit with optical initialization and readout via spin-dependent fluorescence. Nuclear spins (¹³C, ¹H) serve as long-lived quantum memory registers. Spin-selective optical transitions enable:
- **Heralded entanglement** between remote T centers via photon interference
- **Teleported gates** between silicon chips connected by telecom fiber
- **Any-to-any connectivity** across modules without quantum frequency conversion

### Key demonstrations

Bergeron et al. (2020, Nature) achieved the first optical observation of individual T centers in silicon photonic structures with spin-dependent telecom transitions. Photonic Inc. subsequently demonstrated remote entanglement between T centers in separate cryostats connected by standard telecom fiber, and a teleported CNOT gate between silicon spin qubits (2024).

## Hamiltonian

Ground-state electron spin:

$$H = g_e \mu_B \mathbf{B} \cdot \mathbf{S} + \sum_i A_i \mathbf{S} \cdot \mathbf{I}_i$$

where $\mathbf{S}$ is the electron spin, $\mathbf{I}_i$ are nuclear spins (¹³C, ¹H), and $A_i$ are hyperfine coupling constants. The optical interface is governed by the bound exciton transition:

$$H_{\text{opt}} = \omega_0 |e\rangle\langle e| + \Omega(t)(|g\rangle\langle e| + \text{h.c.})$$

at $\omega_0 \approx 2\pi \times 226$ THz (1326 nm).

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Emission wavelength | 1326 nm | Telecom O-band, no frequency conversion | [[bergeron-2020-t-center]] |
| Electron spin T₂ | ~2 ms | In isotopically enriched ²⁸Si | [[bergeron-2020-t-center]] |
| Nuclear spin T₂ | >1 s | ¹³C nuclear memory | [[bergeron-2020-t-center]] |
| Operating temperature | ~1 K | Compatible with standard cryogenics | [[bergeron-2020-t-center]] |
| Remote entanglement | Demonstrated | Between separate cryostats via telecom fiber | [[photonic-2024-distributed-qc]] |

## Scaling Considerations

- **Silicon-native:** Leverages mature CMOS and silicon photonics fabrication — foundry-compatible.
- **Telecom-native:** O-band emission means direct fiber coupling, metropolitan-scale networking without frequency conversion.
- **QLDPC-compatible:** Photonic Inc.'s architecture targets QLDPC codes exploiting the any-to-any connectivity of photon-mediated entanglement.
- **Multi-qubit register:** Each T center contains up to 4 spin qubits, providing local compute + memory in a single defect.

## Linked Papers
- [[bergeron-2020-t-center]]
- [[photonic-2024-distributed-qc]]

## Related Entries
- [[nv-center-qubit]]
- [[siv-color-center-qubit]]
- [[silicon-spin-qubit]]
- [[dual-rail-photonic-qubit]]
