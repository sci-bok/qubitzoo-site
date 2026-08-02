---
title: Spin-Photon MOC
type: moc
technology_family: Spin-Photon
note_count: 5
last_updated: '2026-08-02'
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
- [[quantum-transduction]] is a useful boundary note: platforms here are most interesting when they reduce or avoid transduction pain by emitting photons that are already spectrally useful for networking.

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

## Networking-burden comparison

| If the architecture pain point is... | Best first stop | Why |
|---|---|---|
| Photon indistinguishability and cavity-integrated nanophotonics | `siv-color-center-qubit` | Inversion symmetry and high ZPL fraction are the whole point. |
| Native telecom compatibility and silicon photonics | `t-center-qubit` | It starts much closer to the fibre stack the network already wants. |
| Mature room-temperature defect-spin control with a real local register | [[color-center-moc]] | That is still the NV-centered branch, not this one. |
| Avoiding a large microwave-to-optical conversion stack | `t-center-qubit`, then [[quantum-transduction]] | Native O-band emission can remove part of the transduction burden rather than merely optimizing around it. |
| Choosing between clean photons and a gentler cryogenic envelope | Read both entries | SiV buys the best optics; SnV and T centers relax the systems burden in different ways. |

## Network-emitter routing table

| If the real question is... | Start here? | Why |
|---|---|---|
| Which defect-spin platform gives the cleanest photons for remote entanglement? | Yes | That is the defining purpose of this family. |
| Which branch wins on nanophotonic optical quality even if the fridge burden is harsher? | Yes | `siv-color-center-qubit` is the clean-photon-first reference case. |
| Which branch best reduces downstream telecom integration pain? | Yes | `t-center-qubit` is the silicon-and-telecom-first route. |
| Which defect-spin qubit is the most mature room-temperature local memory platform? | No | Hand back to [[color-center-moc]] and `nv-center-qubit`. |
| Is native emission already close enough to the network target to avoid a major transduction stack? | Yes | Read this MOC, then cross-check with [[quantum-transduction]]. |

## Routing rule

- Read this MOC when the primary question is how to build a better **spin-to-photon interface**, not how to get the most mature defect-spin qubit overall.
- Hand back to [[color-center-moc]] when room-temperature operation, ODMR-style control, or local defect-spin memory maturity becomes the main criterion.
- Use [[quantum-transduction]] as the downstream systems check: if a platform already emits where the network wants to live, that is a real architectural advantage, not just a spectroscopy detail.
- Treat `siv-color-center-qubit` and `t-center-qubit` as complementary answers to different network bottlenecks, not as a simple maturity ladder.
