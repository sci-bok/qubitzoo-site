---
title: Separating transient leakage exposure from endpoint cancellation in fast transmon
  single-qubit gates
authors:
- Haoran Yang
- Fudong Liu
- Weilong Wang
- Yangyang Fei
- Zheng Shan
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.05779'
language: en
date_ingested: '2026-07-08'
verification_status: verified
influence_score: 0.68
novelty_flag: breakthrough
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Transmon is a superconducting qubit approach for quantum computing hardware. Source: latex text.

## Abstract
Fast single-qubit gates on weakly anharmonic transmons are limited by leakage to noncomputational states, and standard mitigations such as DRAG (derivative removal by adiabatic gate) act on the leakage amplitude at the end of the gate. We show that this endpoint amplitude and the transient leakage exposure accumulated during the gate are two distinct control objectives that can be assigned to separate modules. The endpoint is a single sample of the drive spectrum, $|\tildeΛ(η)|^2$; the exposure is a band integral about $η$ and governs leakage under dephasing, and the spectral-null condition $\tildeΛ(η)=0$ constrains only the former. We realize this split in a path--endpoint separation pulse (PESP): a path-shaping pulse suppresses the exposure, and a two-tone endpoint-cancellation pulse cancels the residual amplitude. For a $10$ ns $R_{X}(π/2)$ gate at $η/2π=0.2$ GHz, in numerical simulations the path-shaping pulse reduces the dephasing exposure by ${\sim}21\%$ relative to cosine DRAG and the independently simulated Lindblad excess leakage by ${\sim}20\%$, consistent with $P_{\mathrm{excess}}^φ\simeqγ_φT\bar{P}_{A}^{\mathrm{deph}}$, whereas matched-budget endpoint-only and spectral-null controls leave it essentially unchanged. The residual endpoint floor splits exactly into a $|2\rangle$ back-action and a $|3\rangle$ cascade, which the two tones cancel one-to-one, driving the floor at the path-exposure knee from ${\sim}7\times10^{-7}$ to ${\sim}3\times10^{-8}$ without perturbing the path. By separating transient exposure from endpoint leakage, PESP turns leakage suppression in fast weakly anharmonic gates into a modular, interpretable control problem: dephasing-induced leakage and the coherent residual error are reduced by separate, individually verifiable modules.

## Key Findings


## Links
- **arXiv:** [2607.05779](https://arxiv.org/abs/2607.05779)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
