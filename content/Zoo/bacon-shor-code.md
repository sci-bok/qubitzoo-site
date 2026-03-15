---
title: Bacon-Shor Code
entry_type: qubit
technology_family: Topological
status: demonstrated
first_proposed_year: 2006
keywords:
- Bacon-Shor
- subsystem code
- quantum error correction
- gauge qubits
- concatenation
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

The Bacon-Shor code is a family of subsystem quantum error-correcting codes defined on a 2D grid of physical qubits. It encodes one logical qubit in $m \times m$ physical qubits with distance $d = m$, using only two-body gauge measurements (weight-2 XX and ZZ checks on neighboring pairs). The stabilizers are products of gauge operators and have weight $2m$, but syndrome extraction requires only weight-2 measurements — a major hardware simplification.


## Figure

![[bacon-shor-code-figure.png]]

## Description

The Bacon-Shor code exploits the subsystem code framework: the physical Hilbert space decomposes into a logical subsystem, a gauge subsystem, and a stabilizer-fixed subsystem. Only the logical subsystem encodes information; the gauge subsystem is "don't care" degrees of freedom.

For the $`$m²,1,m$`$ code on an $m \times m$ grid:
- **X stabilizers:** Products of $XX$ along each pair of adjacent rows.
- **Z stabilizers:** Products of $ZZ$ along each pair of adjacent columns.
- **Gauge operators:** Individual $XX$ (horizontal pairs) and $ZZ$ (vertical pairs).

Syndrome extraction measures only the weight-2 gauge operators, then classically computes the stabilizer syndrome from their products. This avoids the need for ancilla-mediated multi-qubit parity measurements entirely.

## Stabilizer/Gauge Structure

For the $`$9,1,3$`$ Bacon-Shor code on a 3×3 grid:

Gauge generators (weight 2):
$$X_iX_j \text{ for horizontal neighbors } (i,j)$$
$$Z_iZ_j \text{ for vertical neighbors } (i,j)$$

Stabilizers (weight 6, but measured via weight-2 gauge operators):
$$S_X^{(k)} = \prod_{i \in \text{row } k} \prod_{j \in \text{row } k+1} X_i X_j$$
$$S_Z^{(k)} = \prod_{i \in \text{col } k} \prod_{j \in \text{col } k+1} Z_i Z_j$$

Logical operators:
$$\bar{X} = \prod_{i \in \text{any row}} X_i, \quad \bar{Z} = \prod_{i \in \text{any column}} Z_i$$

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Physical qubits | $m^2$ | For distance $d = m$ | [[bacon-2006-bacon-shor]] |
| Measurement weight | 2 | Only nearest-neighbor two-body measurements | [[bacon-2006-bacon-shor]] |
| Encoding rate | $1/m^2$ | Same as surface code | — |
| Threshold | ~0.1% (concatenated) | Lower than surface code, but simpler measurements | — |
| Distance | $m$ | Linear in grid dimension | — |

## Scaling Considerations

- **Simplicity:** Weight-2 measurements only, no ancilla overhead for syndrome extraction.
- **Asymmetric protection:** Naturally biased — can be rectangular ($m_1 \times m_2$) to correct more X than Z errors or vice versa, matching hardware noise bias.
- **Concatenation:** Effective when concatenated with other codes (e.g., repetition code for dominant error type).
- **Threshold limitation:** Lower threshold than surface code makes it less competitive for depolarizing noise, but advantageous for biased noise.

## Related Entries
- [[surface-code-logical-qubit]]
- [[color-code-logical-qubit]]
- [[kerr-cat-qubit]]
