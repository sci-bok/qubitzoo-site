---
title: 'Vectorizing Quantum Control: A RISC-V Vector Extension Architecture for Scalable
  Qubit Systems'
authors:
- Xiaorang Guo
- Kun Qin
- Yanbin Chen
- Carsten Trinitis
- Martin Schulz
year: 2026
journal: arXiv preprint
doi: null
arxiv_id: '2607.07372'
language: en
date_ingested: '2026-07-09'
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
The Quantum Control Processor (QCP) bridges the gap between compiler toolchains and control electronics, and is responsible for translating compiled quantum circuits into executable instructions that directly manipulate qubits and handle measurement feedback. However, existing designs rely primarily on customized instruction sets, limiting design reuse and requiring significant effort to build supporting toolchains. Furthermore, efficiently addressing qubits and scheduling operations in highly scalable scenarios remains a critical challenge. In this work, we present a vectorized quantum control approach built upon the RISC-V Vector (RVV) engine with a quantum-oriented extension. Leveraging the high parallelism of RVV, our approach can address up to 128 qubits in a single instruction. We also embed parameterized rotation information into the instruction set, enabling dynamic tuning of gate rotations in hybrid quantum-classical programs. To support mid-circuit measurements, we design a hardware-based halt-resume protocol that resumes pipeline execution within 80 $ns$ of receiving the measurement result. Comprehensive evaluation using both RISC-V toolchains and FPGA prototypes demonstrates that our design achieves up to 2.52$\times$ speedup over the baseline in program execution time, with excellent scalability.

## Key Findings


## Links
- **arXiv:** [2607.07372](https://arxiv.org/abs/2607.07372)

## Verification Report
Verification status: **verified**.
Disputes resolved: **0**.
Citation count snapshot (Semantic Scholar): **0**.
Ingestion source: **latex**.
Text truncated: **no**.
