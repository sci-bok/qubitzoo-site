---
title: Photonic MOC
type: moc
technology_family: Photonic
note_count: 5
last_updated: '2026-05-29'
generated_by: pipeline-moc-v1
---

Curated map of Zoo entries in the **Photonic** family.

## Entries

| Entry | Type | Status |
|---|---|---|
| [[dual-rail-photonic-qubit]] | qubit | demonstrated |
| [[fusion-based-photonic-qubit]] | qubit | proposed |
| [[linear-optical-photonic-qubit]] | qubit | demonstrated |
| [[photonic-cluster-state-mbqc-qubit]] | qubit | demonstrated |
| [[time-bin-photonic-qubit]] | qubit | demonstrated |

## Composition

- qubit: 5

<!-- CURATED -->













## Curated synthesis

This family currently splits into **three distinct photonic computation stories**, and keeping them separate prevents the photonics layer from collapsing into a flat “all photons are the same” bucket.

1. **Encodings optimized for transport and networking**
   - [[dual-rail-photonic-qubit]] is the canonical chip-scale / LOQC encoding.
   - [[time-bin-photonic-qubit]] is the fiber-native encoding when long-distance stability matters more than on-chip convenience.
   - Both are best read through [[erasure-error-vs-pauli-error]], because photon loss is often a flagged absence event rather than an unknown Pauli rotation.

2. **Gate-based linear optics**
   - [[linear-optical-photonic-qubit]] is the KLM lineage: minimal interactions, heavy ancilla and feed-forward overhead.
   - Its importance is conceptual as much as practical: it established that photonic quantum computing clears the [[threshold-theorem]] barrier in principle, even with probabilistic entangling operations.

3. **Resource-state / measurement-first architectures**
   - [[photonic-cluster-state-mbqc-qubit]] shifts the burden from online gates to offline cluster-state preparation plus adaptive measurement.
   - [[fusion-based-photonic-qubit]] goes one step further and treats failed entangling attempts as an architectural primitive rather than an exception.
   - These entries are the right place to compare photonic fault-tolerance strategies built around loss tolerance, percolation, and asymmetric error structure.

## Editorial note

The highest-value follow-up in this family is to tighten the MBQC / fusion / KLM relationship further, especially where cluster-state and fusion entries meet the evergreen layer on thresholds, erasures, and resource-state logic.












