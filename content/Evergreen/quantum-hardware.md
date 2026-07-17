---
title: Quantum Hardware
type: evergreen
status: evergreen
tags:
  - quantum-computing
  - hardware
  - architecture
  - routing-note
last_updated: '2026-07-14'
---

# Quantum Hardware

Quantum hardware is the **full machine stack** that turns an abstract qubit model into a usable processor or network node. That means not just the qubit modality itself, but also the control, readout, coupling, and systems glue that let the qubits do work.

This note is intentionally a **routing note**. Use it when the live question is, “what layer of the machine am I actually talking about?” For the platform-evaluation scorecard, switch to [[divincenzo-criteria]]. For exhaustive family browsing, use [[qubit-zoo-index-moc]].

## Three layers of the hardware stack

1. **Physical qubit modality**
   - Where the quantum information primarily lives.
   - Main branches in the Zoo:
     - [[superconducting-moc|Superconducting]]
     - [[trapped-ion-moc|Trapped Ion]]
     - [[semiconducting-moc|Semiconducting]]
     - [[neutral-atom-moc|Neutral Atom]]
     - [[photonic-moc|Photonic]]
     - [[topological-moc|Topological]]
     - [[color-center-moc|Color Center]]
     - [[spin-photon-moc|Spin-Photon]]
     - [[super-semi-moc|Super-Semi]]
     - [[molecular-moc|Molecular]]
     - [[classical-hardware-moc|Classical Hardware]] when the hardware itself is the comparison target rather than only the qubit modality

2. **Local infrastructure layer**
   - The systems that make a qubit usable inside one processor.
   - Canonical Zoo notes here are [[classical-control]] and platform-specific infrastructure such as [[circuit-qed]].
   - This layer is where timing, readout chains, couplers, resonators, and calibration logistics become first-class architectural constraints.

3. **Cross-chip / cross-platform glue**
   - The interfaces that let otherwise local processors become modular machines.
   - [[quantum-transduction]] belongs here because it is about moving quantum information between incompatible frequency or modality domains.
   - Architecture-level code overlays such as [[surface-code-logical-qubit]], [[color-code-logical-qubit]], and [[erasure-qubit]] sit adjacent to this layer: they are not qubit modalities, but they reshape what the hardware stack must deliver.

## Boundary with [[divincenzo-criteria]]

A useful split is:

| If the question is... | Start here? | Why |
|---|---|---|
| What kind of machine or stack layer is this? | Yes | This note is for taxonomy and routing. |
| Is this a qubit modality, an infrastructure dependency, or an architectural overlay? | Yes | That distinction is the whole point here. |
| Does this platform initialize, gate, measure, and communicate well enough to count as a serious computer? | No, go to [[divincenzo-criteria]] | That is the evaluation scorecard. |
| Which family page should I read next? | Yes | This note routes outward to the right MOC or infrastructure note. |

## Practical reading map

- Start at a family MOC when the comparison is mainly **device physics**.
- Start at [[classical-control]] when the bottleneck is **waveform delivery, synchronization, or feedback latency**.
- Start at [[quantum-transduction]] when the bottleneck is **modularity or networking across frequency domains**.
- Start at [[surface-code-logical-qubit]], [[color-code-logical-qubit]], or [[erasure-qubit]] when the real question has already shifted from device physics to **decoder assumptions and logical overhead**.

## Editorial rule

Do not use “quantum hardware” as a vague synonym for “any quantum thing.” In the Zoo it should mean the **stack-level view**: modality plus the infrastructure and architectural layers needed to make that modality computationally meaningful.
