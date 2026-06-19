---
title: 'Vine Codes: Low-Overhead Quantum LDPC Codes on a Planar Square Grid'
authors:
- Georgia M. Nixon
- Campbell K. McLauchlan
- Charles C. L. van Rest
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2606.20263'
language: en
date_ingested: '2026-06-19'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Surface Code is a codes encoding approach for quantum computing hardware. Source: latex text.

## Abstract
The surface code is a promising route towards large-scale quantum computing, requiring only nearest-neighbour gates amenable to superconducting hardware. However, surface codes incur large qubit overheads. Novel quantum low-density parity check (qLDPC) codes promise to reduce overheads but require long-range connections that are difficult to achieve on superconducting platforms. Here, we introduce "Vine Codes" - qLDPC codes that are implementable on a planar square grid through nearest-neighbour, two-qubit gates native to superconducting platforms (iSWAP and CZ). Our approach generalises "Directional Codes" recently introduced by Gehér et. al. (2025) which are constrained to a torus. In contrast, vine codes have open boundary conditions constructed with the aid of routing qubits. We perform extensive numeric searches and find promising candidate vine codes, e.g. [[121,4,6]], [[221,6,7]], and [[234,9,6]] codes. We verify the circuit distances and show that data and measure qubits required can be reduced by up to ~28% relative to the surface code at a circuit distance of 7. Even including routing qubits, vine codes require fewer total qubits than the surface code (e.g. ~18% reduction at circuit distance 10) and benefits are expected to increase at higher distances. We perform circuit-level noise simulations to demonstrate that under a realistic noise model and at a near-term noise rate of $10^{-3}$, vine codes can perform better than the surface code while using fewer qubits. We give an exhaustive list of all unique vine codes up to stabiliser-weight 9. We additionally introduce "Flip-Vine Codes" which possess single-qubit transversal Clifford gates useful for fault-tolerant logic and magic state cultivation. We furthermore construct examples of generalised open boundaries for vine codes that go beyond the familiar X/Z boundaries of the surface and tile codes.

## Key Findings


## Links
- **arXiv:** [2606.20263](https://arxiv.org/abs/2606.20263)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
