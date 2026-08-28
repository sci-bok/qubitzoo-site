---
title: Spin-Photon MOC
type: moc
technology_family: Spin-Photon
note_count: 5
last_updated: '2026-08-25'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Spin-Photon** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[nv-center-qubit]] | qubit | demonstrated |
| [[rare-earth-ion-qubit]] | qubit | demonstrated |
| [[silicon-carbide-defect-qubit]] | qubit | demonstrated |
| [[siv-color-center-qubit]] | qubit | demonstrated |
| [[t-center-qubit]] | qubit | demonstrated |

## Composition

- qubit: 5

<!-- CURATED -->

## Conceptual anchors

- [[divincenzo-criteria]] criteria 6 and 7 organize this family more cleanly than gate-centric comparisons, because every note here is really about turning a local spin memory into a networkable module.
- [[coherence-time-hierarchy]] captures the main engineering cost of those cleaner optical interfaces: spectral quality, cryogenic burden, and memory lifetime move together rather than independently.
- [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] is the family-level interface router: it separates intrinsic emission quality, collection into a controlled mode, and wavelength compatibility with the deployed link instead of collapsing them into one generic “optical interface” score.
- [[quantum-transduction]] is a useful boundary note: platforms here are most interesting when they reduce or avoid transduction pain by emitting photons that are already spectrally useful for networking.
- Keep resonant optical-cavity enhancement on the optical branch mapped by [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]], rather than routing it through microwave circuit-QED notes: [[rare-earth-ion-qubit]] and [[siv-color-center-qubit]] use nanophotonic cavities to enhance emission and collection, not the off-resonant lifetime-protection mechanism described by [[purcell-protection-via-detuning]].

## Curated synthesis

This family is best read as the **network-emitter-optimized descendant branch** of the broader defect-spin story.

1. **`siv-color-center-qubit` is the optical-quality-first branch**
   - Group-IV vacancy centers buy much cleaner photons than NV by using inversion symmetry to suppress electric-field sensitivity.
   - The price is cryogenic severity: SiV offers excellent optical coherence but drags in a harsher phonon-temperature constraint, while SnV eases that constraint at the cost of a less mature platform.

2. **`t-center-qubit` is the telecom-and-integration-first branch**
   - The central claim is not just “another defect spin,” but “a spin-photon node already living in silicon and already emitting in the telecom O-band.”
   - Route here when silicon-photonics compatibility, fibre-network realism, or modular distributed-computing fit matters more than diamond-emitter maturity.

3. **The family-level comparison is about which systems burden you want to pay**
   - SiV/SnV pay heavily in temperature to buy cleaner optical lines and nanophotonic performance.
   - T centers pay in platform maturity and benchmark depth, but may save substantial systems complexity by starting inside silicon and near telecom wavelengths.
   - [[silicon-carbide-defect-qubit]] trades some emitter uniformity for wafer-scale wide-bandgap processing and a broad defect palette.
   - [[rare-earth-ion-qubit]] is the long-memory and spectral-multiplexing branch: Er supplies native C-band photons, while Yb nanophotonic nodes have demonstrated multiplexed remote entanglement.

4. **This MOC should usually be read against [[color-center-moc]], not in isolation**
   - The useful contrast is not “which color center is best?” but “when does a defect stop being primarily a local-spin story and become primarily a network-emitter story?”
   - `nv-center-qubit` remains the better anchor for room-temperature local-memory maturity, while this page owns the branch where optical interface quality is the main selection criterion.

## Node-stack comparison

A spin-photon platform is not selected by one record number. A useful node must preserve a local state, emit a usable photon, survive the fibre stack, and expose enough parallelism to overcome heralding loss. The five entries place their strongest asset—and their remaining systems debt—at different layers of that chain.

| Branch | Strongest node asset | Photon / network route | Bottleneck that still dominates |
|---|---|---|---|
| [[nv-center-qubit]] | Most mature electron-plus-nuclear register, including room-temperature local control | 637-nm emission with a weak zero-phonon fraction; long links usually need aggressive collection engineering and wavelength conversion | Optical collection, spectral stability, and the gap between excellent local memory and efficient remote entanglement |
| [[siv-color-center-qubit]] | Inversion-symmetric, high-ZPL optical interface with strong nanophotonic performance | Clean visible / near-visible photons are cavity friendly, but deployed telecom links still add a conversion layer | Phonon-limited spin coherence, especially for SiV, plus the temperature and diamond-fabrication burden |
| [[t-center-qubit]] | Electron-plus-nuclear register inside a silicon-photonics-compatible host | Native 1326-nm O-band emission removes much of the wavelength-conversion burden | Device yield, spectral uniformity, and benchmark maturity compared with diamond emitters |
| [[silicon-carbide-defect-qubit]] | Room-temperature defect-spin control and nuclear registers in a wafer-scale wide-bandgap platform | Near-infrared spin-photon interfaces can be integrated in SiC waveguides, but are not automatically telecom-native | Transform-limited optical stability and reproducible cavity-coupled single-defect yield across a fragmented defect landscape |
| [[rare-earth-ion-qubit]] | Exceptionally long spin memories plus intrinsic spectral multiplexing | Er supplies native C-band photons; other useful species trade that advantage for different memory and optical properties | Weak 4f oscillator strength makes cavity enhancement essential, while deterministic local multi-ion gates remain immature |

Read the columns in order. [[coherence-time-hierarchy]] tests whether the local memory survives the heralding cycle. [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] then separates the optical-interface budget into emission, collection, and link matching: [[siv-color-center-qubit]] anchors high-ZPL cavity coupling, [[rare-earth-ion-qubit]] anchors cavity enhancement of weak 4f transitions, and [[silicon-carbide-defect-qubit]] or [[t-center-qubit]] expose integrated waveguide/cavity yield. Finally, [[quantum-transduction]] prices any wavelength mismatch that remains between the emitted photon and the deployed link.

Do not substitute [[purcell-protection-via-detuning]] or [[resonator-as-quantum-bus]] for that middle layer. Those Evergreens describe off-resonant microwave cavity coupling in circuit QED—respectively suppressing cavity-mediated decay and mediating virtual qubit exchange—whereas these spin-photon nodes generally seek resonant optical Purcell enhancement and efficient photon extraction. Keeping that boundary explicit prevents a shared word, “cavity,” from collapsing two different physical jobs.

This reading order keeps a native-telecom advantage distinct from a clean-emitter advantage: SiV can win the local optical interface while T centers or Er reduce the downstream fibre burden.

## Routing rule

- Read this MOC when the primary question is how to build a better **spin-to-photon interface**, not how to get the most mature defect-spin qubit overall; use [[spin-photon-interfaces-separate-emission-collection-and-wavelength-matching]] when that comparison needs to be decomposed into emission, collection, and link matching.
- Hand back to [[color-center-moc]] when room-temperature operation, ODMR-style control, or local defect-spin memory maturity becomes the main criterion.
- Use [[quantum-transduction]] as the downstream systems check: if a platform already emits where the network wants to live, that is a real architectural advantage, not just a spectroscopy detail.
- Treat `siv-color-center-qubit` and `t-center-qubit` as complementary answers to different network bottlenecks, not as a simple maturity ladder.
