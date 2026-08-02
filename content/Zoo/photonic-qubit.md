---
title: Photonic Qubit
entry_type: qubit
technology_family: Photonic
status: demonstrated
first_proposed_year: 2026
keywords: []
influence_score: 0.68
last_updated: '2026-06-11'
generated_by: pipeline-v1
extracted_by: claude-code
verified_by: codex
figure_reviewed: true
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/photonic-qubit-figure.provenance.json"
figure_reviewed_by: "codex-visual-physics-review-2026-08-01"
figure_reviewed_at: "2026-08-02T03:05:12.367092+00:00"
---

> **Note:** This is a **category entry** covering the photonic-qubit paradigm. Specific encodings and architectures have their own detailed entries: [[dual-rail-photonic-qubit]], [[time-bin-photonic-qubit]], [[linear-optical-photonic-qubit]], [[photonic-cluster-state-mbqc-qubit]], and [[fusion-based-photonic-qubit]].

## Figure

![[photonic-qubit-figure.png]]

## Description

A **photonic qubit** stores quantum information in optical modes rather than stationary matter degrees of freedom. The central advantage is that photons already behave like the communication layer quantum hardware wants: they propagate with very low decoherence, interface naturally with fiber and integrated photonics, and can connect distant modules without an explicit transducer.

That same advantage creates the platform's core constraint. Photons are excellent carriers but weakly interacting processors. In practice, photonic quantum computing therefore splits into two separate design questions that should not be conflated:

- **Encoding question:** which optical degree of freedom holds the qubit, for example spatial modes in [[dual-rail-photonic-qubit]] or temporal modes in [[time-bin-photonic-qubit]]?
- **Architecture question:** how do we manufacture entangling power and fault tolerance despite weak native interactions, for example with [[linear-optical-photonic-qubit]], [[photonic-cluster-state-mbqc-qubit]], or [[fusion-based-photonic-qubit]]?

This umbrella note is the entry point when the question is simply why photons are attractive at all, before choosing a specific encoding or computation model.

## Motivation

- **Best native flying qubit:** photons are the cleanest hardware for long-distance transport and chip-to-chip interconnects.
- **Low transport decoherence:** room-temperature optics and fiber compatibility make distributed architectures natural.
- **Manufacturing leverage:** integrated photonics, detectors, and multiplexing infrastructure can be borrowed from mature optical engineering stacks.
- **Architectural flexibility:** the same family supports communication-first nodes, gate-based LOQC, cluster-state MBQC, and fusion-based scaling strategies.

## Experimental status

Photonic hardware is already the default platform for quantum communication experiments, quantum networking demonstrations, and small-scale optical quantum information processing. The open systems question is not whether single-photon qubits exist, but which scaling stack wins once source efficiency, detector efficiency, multiplexing, and loss-tolerant fault tolerance are all counted honestly.

## Key questions

- Which encoding best matches the hardware path: [[dual-rail-photonic-qubit]] or [[time-bin-photonic-qubit]]?
- Is the architecture fundamentally gate-based ([[linear-optical-photonic-qubit]]) or resource-state-based ([[photonic-cluster-state-mbqc-qubit]], [[fusion-based-photonic-qubit]])?
- Does the dominant noise stay structured enough to be treated as erasure-like loss rather than generic hidden Pauli error?

## Linked Papers
- [[li-2026-experimental-tabletop-petz-recovery]]

## Evergreen context

- [[quantum-hardware]] — the systems-level reason photonics keeps reappearing is that it solves transport and networking problems more naturally than most stationary qubit platforms.
- [[erasure-error-vs-pauli-error]] — photonic platforms are most legible when photon loss is treated as a flagged absence event rather than forced into a generic qubit-noise picture.
- [[noise-bias-and-asymmetric-error-channels]] — practical photonic architectures live or die on whether loss, fusion failure, and detector inefficiency remain structured enough for specialized decoding.
- [[threshold-theorem]] — every serious photonic architecture is ultimately an argument that weak interactions plus enough optical redundancy can still cross a scalable fault-tolerance threshold.

## Related Entries
- [[dual-rail-photonic-qubit]]
- [[time-bin-photonic-qubit]]
- [[linear-optical-photonic-qubit]]
- [[photonic-cluster-state-mbqc-qubit]]
- [[fusion-based-photonic-qubit]]
- [[quantum-hardware]]
