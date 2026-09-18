---
title: Error-Bounded Fixed-Point Design of Super-Sample-Rate IIR Filters for Real-Time
  Superconducting Qubit Flux Predistortion
authors:
- Matt Huszabianlou
- Angelos Ioannou
- Nirmalendu Bikash Patra
- Anastasiia Butko
- Gang Huang
- Irfan Siddiqi
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2609.16488'
language: en
date_ingested: '2026-09-16'
verification_status: verified
influence_score: 0.68
novelty_flag: incremental
extracted_by: claude-code
verified_by: codex
disputes: 0
generated_by: pipeline-v1
---

Classical Control is a classical hardware infrastructure approach for quantum computing hardware. Source: latex text.

## Abstract
Flux-activated two-qubit gates in superconducting processors require correction of line distortion, which otherwise produces residual detuning, conditional-phase error, and leakage. Prior demonstrations of cryoscope-based distortion calibration have generally used commercial solutions that specify the filter models but not their FPGA implementation. These details matter for custom and open-source systems, where the fixed-point coefficient and datapath formats set how accurately the correction is realized, and the IIR feedback loop in its standard form does not meet timing at the required clock rate. We derive the coefficient formats of the correction filters from a step response error tolerance, using bounds on the quantization-induced displacement of the poles and zeros over the physical parameter range of each distortion, and the accumulator format from the smallest input change that must remain resolvable at the output. The same analysis gives the conditions under which quantization preserves filter stability. We implement the resulting FIR/IIR cascade on the QubiC platform at a fabric clock rate of \SI{500}{MHz}, using a super-sample-rate structure with scattered look-ahead pipelining, which removes the feedback recursion from the critical path without changing the target transfer function. A representative cascade for our \SI{1}{GS/s} flux lines, comprising an integrator, a second-order section, and a 20-tap FIR, consumes 88 DSP slices and adds \SI{162}{ns} of latency. We confirm the hardware implementation by correcting characteristic bias-tee distortion, an intermediate step toward full cryoscope-based calibration.

## Key Findings


## Links
- **arXiv:** [2609.16488](https://arxiv.org/abs/2609.16488)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
