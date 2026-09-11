---
title: The resource cost of magic in a code block
authors:
- Jiachen Shen
- Hui Zhong
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2608.29438'
language: en
date_ingested: '2026-09-05'
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
We bound the magic of a post-selected logical measurement by the resource that produced it. The setting is one code block with one logical qubit and an adaptive protocol that measures, feeds forward and accepts. The witness reads the accepted effect against the free set of the resource theory of magic, outcome by outcome and not on the averaged channel, since a channel can be free while one of its outcomes measures the magic axis. Our first bound is unconditional. The accepted magic is at most a constant times the summed distance of the cells from the free set. The second is the main result. When the resource cells sit inside a bounded-spread exact-recovery skeleton, the recovery puts every insertion history below a threshold onto a single free branch, transcript by transcript, so only connected clusters reaching the threshold contribute and an exact-component expansion controls their weight. With a threshold linear in the code distance, polynomially many cells of bounded insertion degree and per-cell dilation amplitude $O(1/d)$, the accepted magic times the acceptance probability is at most $\exp[-Ω(d\log d)]$. Post-selection is disposed of before accepted transcripts are summed, so a branch of vanishing probability cannot be amplified into a magic effect. The threshold is certified from a circuit, and we run it on one exact round of stabilizer measurement followed by a split readout, which measures logical $X$ on the accepted fibre and logical $Z$ on the rejected ones. That certifies a threshold equal to the code distance for every single-layer pattern of weak $Z$-rotations, one per data qubit, so the hypotheses are met by a family and not one design. A member carries magic only if its support contains a logical $Z$ string. One member attains the exponent, again at the level of the accepted effect. Suppression is set by the threshold and not by the topology of the block.

## Key Findings


## Links
- **arXiv:** [2608.29438](https://arxiv.org/abs/2608.29438)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
