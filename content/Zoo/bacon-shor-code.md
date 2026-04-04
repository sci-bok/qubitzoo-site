---
title: Bacon-Shor Code
entry_type: encoding
technology_family: Codes
status: demonstrated
figure_reviewed: true
first_proposed_year: 2006
first_demonstrated_year: 2021
keywords:
- Bacon-Shor
- subsystem code
- quantum error correction
- gauge qubits
- concatenation
- weight-2 measurements
influence_score: 0.72
last_updated: '2026-03-21'
generated_by: scibok-curation
extracted_by: manual
verified_by: scibok-manual-2026-03-21
---

## Figure

![[bacon-shor-code-figure.png]]

## Description

The Bacon-Shor code is a family of subsystem quantum error-correcting codes defined on a 2D grid of physical qubits. It encodes one logical qubit in $m \times m$ physical qubits with distance $d = m$, using only two-body gauge measurements (weight-2 XX and ZZ checks on neighboring pairs). The stabilizers are products of gauge operators and have weight $2m$, but syndrome extraction requires only weight-2 measurements — a major hardware simplification.

The Bacon-Shor code exploits the **subsystem code** framework: the physical Hilbert space decomposes into a logical subsystem, a gauge subsystem, and a stabilizer-fixed subsystem. Only the logical subsystem encodes information; the gauge subsystem is "don't care" degrees of freedom.

For the $\lbrack\lbrack m^2, 1, m \rbrack\rbrack$ code on an $m \times m$ grid:
- **X stabilizers:** Products of $XX$ along each pair of adjacent rows.
- **Z stabilizers:** Products of $ZZ$ along each pair of adjacent columns.
- **Gauge operators:** Individual $XX$ (horizontal pairs) and $ZZ$ (vertical pairs).

Syndrome extraction measures only the weight-2 gauge operators, then classically computes the stabilizer syndrome from their products. This avoids the need for ancilla-mediated multi-qubit parity measurements entirely.

## Stabilizer Structure

For the $\lbrack\lbrack 9,1,3 \rbrack\rbrack$ Bacon-Shor code on a 3×3 grid:

Gauge generators (weight 2):
$$X_iX_j \text{ for horizontal neighbors } (i,j)$$
$$Z_iZ_j \text{ for vertical neighbors } (i,j)$$

Stabilizers (weight 6, but measured via weight-2 gauge operators):
$$S_X^{(k)} = \prod_{i \in \text{row } k} \prod_{j \in \text{row } k+1} X_i X_j$$
$$S_Z^{(k)} = \prod_{i \in \text{col } k} \prod_{j \in \text{col } k+1} Z_i Z_j$$

Logical operators:
$$\bar{X} = \prod_{i \in \text{any row}} X_i, \quad \bar{Z} = \prod_{i \in \text{any column}} Z_i$$

## Motivation

- **Hardware simplicity:** Only weight-2 nearest-neighbor measurements required — no ancilla qubits, no multi-qubit parity checks.
- **Noise-bias exploitation:** Rectangular $m_1 \times m_2$ variants can correct more X than Z errors (or vice versa), naturally matching biased-noise hardware like cat qubits or fluxonium.
- **Concatenation-friendly:** Effective when concatenated with other codes, especially for noise with strong bias.
- **Pedagogical importance:** Simplest subsystem code, used as a building block for understanding gauge codes and operator QEC.

## Experimental Status

**First demonstration on trapped ions — Egan et al. (2021):**
- Implemented the $\lbrack\lbrack 9,1,3 \rbrack\rbrack$ Bacon-Shor code on a 13-ion trapped-ion processor (Honeywell/Quantinuum H1)
- Demonstrated fault-tolerant syndrome extraction using only weight-2 measurements
- Achieved logical error rate suppression below physical error rate

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Physical qubits | $m^2$ | For distance $d = m$ | [Bacon 2006](https://doi.org/10.1103/PhysRevA.73.012340) |
| Measurement weight | 2 | Only nearest-neighbor two-body measurements | [Bacon 2006](https://doi.org/10.1103/PhysRevA.73.012340) |
| Encoding rate | $1/m^2$ | Same as surface code | — |
| Threshold | ~0.1% (concatenated) | Lower than surface code, but simpler measurements | — |
| Distance | $m$ | Linear in grid dimension | — |

## Scaling Considerations

- **Simplicity:** Weight-2 measurements only, no ancilla overhead for syndrome extraction.
- **Asymmetric protection:** Naturally biased — can be rectangular ($m_1 \times m_2$) to correct more X than Z errors or vice versa, matching hardware noise bias.
- **Concatenation:** Effective when concatenated with other codes (e.g., repetition code for dominant error type).
- **Threshold limitation:** Lower threshold than surface code makes it less competitive for depolarizing noise, but advantageous for biased noise.

## References

### Original proposal
- D. Bacon, "Operator quantum error-correcting subsystems for self-correcting quantum memories," [Phys. Rev. A 73, 012340 (2006)](https://doi.org/10.1103/PhysRevA.73.012340) — [arXiv:quant-ph/0506023](https://arxiv.org/abs/quant-ph/0506023)

### Experimental demonstrations
- L. Egan et al., "Fault-tolerant control of an error-corrected qubit," [Nature 598, 281 (2021)](https://doi.org/10.1038/s41586-021-03928-y) — [arXiv:2009.11482](https://arxiv.org/abs/2009.11482)

### Related theory
- P. Aliferis and A. W. Cross, "Subsystem fault tolerance with the Bacon-Shor code," [Phys. Rev. Lett. 98, 220502 (2007)](https://doi.org/10.1103/PhysRevLett.98.220502) — [arXiv:quant-ph/0610063](https://arxiv.org/abs/quant-ph/0610063)

## Linked Papers

- [[bacon-2006-bacon-shor]]

## Related Entries

- [[surface-code-logical-qubit]] — Higher threshold but requires weight-4 measurements
- [[color-code-logical-qubit]] — Alternative topological code with transversal gates
- [[kerr-cat-qubit]] — Biased-noise qubit that pairs well with Bacon-Shor
