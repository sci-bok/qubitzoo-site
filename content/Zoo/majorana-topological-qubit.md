---
title: Majorana Topological Qubit
entry_type: qubit
technology_family: Topological
status: demonstrated
first_proposed_year: 2016
keywords:
  - majorana zero mode
  - topological qubit
  - semiconductor-superconductor nanowire
  - coulomb blockade
influence_score: 0.69
last_updated: '2026-03-10'
generated_by: scibok-curation
verified_by: scibok
---


A topological qubit concept encoded in fermion parity degrees of freedom built from spatially separated Majorana zero modes in hybrid semiconductor-superconductor nanostructures.

## Physics

In finite nanowires, overlapping end Majorana modes split away from zero energy. A central scaling requirement is exponential suppression of this splitting with wire length:

\[
\delta E \propto e^{-L/\xi}
\]

where \(L\) is Majorana separation and \(\xi\) is the coherence length. Coulomb-blockade transport in Majorana islands is a primary diagnostic channel for parity states and near-zero modes.

## Hamiltonian

A minimal 1D semiconductor-superconductor nanowire model (proximitized Rashba wire) is:

$$H = \int dx\, \Psi^\dagger\!\left[-\frac{\hbar^2\partial_x^2}{2m^*} - \mu - i\alpha_R\partial_x\sigma_y + V_Z\sigma_x\right]\!\Psi + \int dx\, \left(\Delta\,\psi_\uparrow\psi_\downarrow + \text{h.c.}\right)$$

Topological phase condition (idealized):

$$V_Z > \sqrt{\mu^2 + \Delta^2}$$

In the topological regime, Majorana zero modes localize at wire ends with overlap-induced splitting:

$$\delta E \sim e^{-L/\xi}\cos(k_F L + \phi)$$

which motivates long wires and hard-gap devices for robust parity protection.


## Figure

![[majorana-topological-qubit-figure.png]]

## Why it matters

- Encodes information nonlocally, targeting intrinsic protection against local noise channels.
- Offers a candidate path to hardware-level error suppression before full QEC overhead.
- Still pre-fault-tolerant experimentally: robust topological protection must be established under full control/readout stacks.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Zero-mode splitting trend | Exponential suppression with length observed | Key milestone toward topological protection | [[albrecht-2016-exponential-protection-of-zero]] |
| Coulomb-blockade parity signatures | 2e/1e regime transitions observed | Consistent with subgap-state / Majorana phenomenology | [[shen-2018-parity-transitions-in-the]], [[lai-2021-theory-of-coulomb-blockaded]] |
| Demonstrated topological logical gate fidelity | Not yet established | Full braiding-grade protected gates remain open | [[aghaee-2021-majorana-spectroscopy]], [[albrecht-2016-exponential-protection-of-zero]] |


## Linked Papers
- [[albrecht-2016-exponential-protection-of-zero]]
- [[lai-2021-theory-of-coulomb-blockaded]]
- [[shen-2018-parity-transitions-in-the]]
- [[aghaee-2021-majorana-spectroscopy]]

## Related Entries
- [[planar-josephson-junction-qubit]]
- [[tetron-qubit]]

- [[majorana-topological-qubit]]
- [[surface-code-logical-qubit]]
- [[color-code-logical-qubit]]
