---
title: Floquet Codes
entry_type: qubit
technology_family: Topological
status: proposed
first_proposed_year: 2021
keywords:
- Floquet
- dynamical code
- honeycomb code
- measurement-based
- quantum error correction
last_updated: '2026-03-15'
generated_by: scibok-curation
extracted_by: manual
verified_by: manual
---

Floquet codes are a family of dynamical quantum error-correcting codes where the code space is not defined by a fixed set of stabilizers but instead emerges from a periodic sequence of two-body measurements. The codespace changes at each time step but returns to itself after a complete measurement cycle, defining logical qubits that persist stroboscopically.

## Description

Introduced by Hastings and Haah (2021), the honeycomb Floquet code is the prototypical example. The physical qubits sit on vertices of a honeycomb lattice, and at each time step, two-body Pauli measurements (XX, YY, or ZZ) are performed on pairs of qubits sharing an edge. The three edge colors are measured in a repeating 3-step cycle.

Key advantages:
- **Two-body measurements only:** No multi-qubit stabilizer measurements needed (vs. weight-4 checks in surface code), simplifying hardware.
- **Inherent fault tolerance:** The dynamical structure naturally detects errors from measurement failures.
- **Competitive thresholds:** Comparable to surface code despite simpler measurements.
- **Potential for qLDPC integration:** Floquet techniques may help implement non-local codes on local hardware.

The main subtlety is that the instantaneous stabilizer group changes at each step — logical information is only well-defined when viewed over complete cycles.

## Measurement Cycle

On a honeycomb lattice with edge coloring (r, g, b), the 3-step cycle measures:

$$\text{Step 1: } XX \text{ on red edges}$$
$$\text{Step 2: } YY \text{ on green edges}$$
$$\text{Step 3: } ZZ \text{ on blue edges}$$

The effective code after one complete cycle is equivalent to a topological code with distance set by the lattice size. The check operators from consecutive rounds combine to form the stabilizers of a toric/surface code.

## Performance Metrics

| Metric | Value | Notes | Fidelity reference |
|---|---|---|---|
| Measurement weight | 2 | Only two-body measurements (vs. weight-4 for surface code) | [[hastings-2021-floquet]] |
| Threshold (circuit-level) | ~0.2–0.5% | Depends on noise model and decoder | [[hastings-2021-floquet]] |
| Code distance | $\Theta(L)$ | $L$ = linear lattice dimension | — |
| Encoding rate | $O(1/L^2)$ | Same scaling as surface code for 2D | — |

## Scaling Considerations

- **Hardware simplicity:** Two-body measurements are natively available on most platforms (especially superconducting and neutral atom).
- **Decoding:** Requires decoders that handle the time-varying stabilizer structure; matching-based decoders adapted from surface code work well.
- **Google interest:** Active exploration for next-generation error correction beyond the surface code.

## Related Entries
- [[surface-code-logical-qubit]]
- [[color-code-logical-qubit]]
- [[qldpc-codes]]
