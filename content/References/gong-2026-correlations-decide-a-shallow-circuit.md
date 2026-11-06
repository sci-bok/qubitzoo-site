---
title: Correlations decide a shallow-circuit advantage
authors:
- Zijian Gong
- Zhaobin Lyu
- Jingjing Hu
- Dengfeng Li
- Shuoming An
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2610.04666'
language: en
date_ingested: '2026-11-02'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Qubit Readout is a classical hardware readout approach for quantum computing hardware. Source: latex text.

## Abstract
Quantum computers are claimed to produce samples ordinary classical computers cannot reproduce. The sharpest such claim known pits constant-depth quantum circuits, given one entangled state per run, against shallow classical circuits of few-input gates and limited randomness. No efficient test was known that certifies such a claim from classical samples alone. Here we show that what such a test must read is decided by the classical class's pattern of single-bit and pair correlations, not by a distance. The test rests on one inequality: any machine producing the samples sits no further from the target than the fraction it mislabels plus the deviation of its string half, the bits beyond the label, from uniform. A collapse theorem, machine-checked in the Lean~4 proof assistant, confines that second term, one setting of the sampler's random input bits at a time. Four natural checks provably fail; a fifth, reading those same correlations, catches a far-from-target construction they cannot reach, and is exact on the class of few-input gates. The label test is proven and sample-optimal in its own tolerance up to a logarithmic factor; the fifth check is sound, not only effective, on the bounded pinned-residue class, pairwise-uniform samplers whose residue, the string's weight modulo the prime, is pinned by few seeds and whose seed sharing is bounded. What binds an experiment is the $43$-qubit entangled resource state at fidelity near $0.99$, not the readout. What remains are two named open problems; a positive answer to the first would extend the guarantee to the full class.

## Key Findings


## Links
- **arXiv:** [2610.04666](https://arxiv.org/abs/2610.04666)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
