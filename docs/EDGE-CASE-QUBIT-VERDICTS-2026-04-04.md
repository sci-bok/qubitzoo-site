# Qubit Zoo — Edge-Case Candidate Verdicts (2026-04-04)

Investigator: Scibok (subagent, deep-audit mode)
Method: Primary literature search via Crossref, arXiv, web; cross-checked against existing Zoo entries.

## Verdict Matrix

| Candidate | Verdict | Rationale |
|-----------|---------|-----------|
| **quarton-qubit** | **SKIP** (not a qubit) | The quarton is a **coupler/circuit element**, not a qubit. It mediates cross-Kerr coupling between transmon qubits. The existing `quarton-coupler.md` entry (entry_type: technique) is correctly typed. No "quarton qubit" exists in the literature. Ye et al. PRL 127, 050502 (2021) and Sci. Adv. (2024) describe it exclusively as a coupler. No action needed. |
| **donor-bound-exciton-qubit** | **REJECT FOR NOW** | Donor-bound excitons (D⁰X) in silicon are an **optical readout mechanism** for donor spin qubits, not a standalone qubit encoding. The exciton state mediates spin-to-charge conversion via Auger recombination. No primary literature proposes D⁰X as an independent qubit type with gates and coherence independent of the underlying donor spin. Already covered implicitly by `silicon-spin-qubit.md` and `kane-qubit.md`. |
| **parafermion-qubit** | **REJECT FOR NOW** | Entirely theoretical. Parafermions are Z_k generalizations of Majorana fermions proposed to emerge at FQH–superconductor interfaces. **No experimental realization of parafermion zero modes exists.** Recent trapped-ion simulations (Z₃ toric code on Quantinuum H2, 2025) are quantum simulations of parafermion models, not physical parafermion qubits. The `majorana-topological-qubit.md` entry already covers the broader topological qubit family. A parafermion entry would be speculative theory without hardware. |
| **fibonacci-anyon-qubit** | **REJECT FOR NOW** | Fibonacci anyons are a theoretical model for universal topological quantum computation. Recent experiments (Tsinghua/Zhejiang 2024, IBM/Cornell 2025) demonstrate **string-net condensation simulations** of Fibonacci anyons on superconducting processors — these are quantum simulations, not physical Fibonacci anyon qubits. No known material system naturally hosts Fibonacci anyons. Same category as parafermion: compelling theory, no physical qubit yet. |
| **microwave-photonic-qubit** | **KEEP** ✅ | Clearly distinct from all other Zoo entries. Encodes quantum information in itinerant (propagating) microwave photons — a "flying qubit" for modular superconducting architectures. Distinct from: dual-rail-superconducting (stationary bosonic), bosonic-qubit (cavity mode), linear-optical-photonic (optical frequencies), continuous-variable-photonic (CV encoding). Solid primary literature: Kurpiers et al. Nature 558, 264 (2018), Axline et al. Nature Phys. 14, 705 (2018). Entry is well-written and accurate. |
| **bifluxon-qubit** | **KEEP** ✅ | Clearly distinct from all other protected superconducting qubits. Uses fluxon-parity encoding with Aharonov-Casher interference at the charge-parity sweet spot — a genuinely unique protection mechanism. Distinct from: 0-π qubit (circuit symmetry), cos(2φ) (doubled potential), fluxonium (no parity protection), heavy-fluxonium (variant). Published in PRX Quantum 1, 010307 (2020) with experimental demonstration. 2024 follow-up in PRX (PhysRevX.14.041014) confirms continued active research. Entry is accurate. |
| **strontium-88-ion-qubit** | **KEEP** ✅ | Fundamentally distinct physics from all other ion species entries. Key differentiators: (1) **Optical qubit** encoding ($5S_{1/2} \to 4D_{5/2}$ at 674 nm) — all other entries are hyperfine/microwave qubits. (2) $I=0$, no hyperfine structure — completely different level structure. (3) Visible-wavelength transitions ideal for integrated photonics (UCSB chip-scale demo, Mehta 2024). (4) 82.6% natural abundance (vs. Ca-43 at 0.14%). (5) Leading candidate for photonic network interface qubits. The optical vs. hyperfine distinction alone is sufficient for a separate entry. |
| **beryllium-9-ion-qubit** | **KEEP** ✅ | Distinct species with unique physics despite being another hyperfine qubit. Differentiators: (1) **Lightest ion** (9 u) — highest trap frequencies, fastest sideband operations. (2) **Historic**: site of the **first-ever quantum logic gate** (Monroe et al. PRL 1995). (3) 313 nm UV laser requirement — unique engineering challenge shared by no other species in the Zoo. (4) 1.25 GHz hyperfine splitting (vs. Ca-43: 3.226 GHz, Ba-137: 8.037 GHz, Yb-171: 12.64 GHz). (5) Record gate fidelities: 1Q 99.9962%, 2Q 99.92% (Gaebler et al. 2016). (6) 30+ years of NIST heritage with unmatched characterization depth. The historical significance and distinct mass/UV regime justify the entry. |

## Summary

### Already in the Zoo and correctly distinct (4 entries — no changes needed):
1. `microwave-photonic-qubit.md` — flying microwave qubit, clearly distinct
2. `bifluxon-qubit.md` — fluxon-parity protected qubit, clearly distinct
3. `strontium-88-ion-qubit.md` — optical ion qubit (I=0), clearly distinct
4. `beryllium-9-ion-qubit.md` — lightest hyperfine ion, clearly distinct

### Already in the Zoo as technique entry (correct, no qubit entry needed):
5. `quarton-coupler.md` — coupler, not a qubit; correctly typed as `entry_type: technique`

### Rejected — should NOT be added to the Zoo now (3 candidates):
6. **donor-bound-exciton-qubit** — readout mechanism, not a qubit; covered by existing Si spin entries
7. **parafermion-qubit** — purely theoretical; no physical realization; covered by topological qubit umbrella
8. **fibonacci-anyon-qubit** — purely theoretical; simulations ≠ physical qubits; no material system hosts them

### What is definitively NOT missing from the Zoo:
All 8 candidates are either already correctly represented or correctly excluded. The quarton-coupler is properly a technique entry. The three topological/exotic candidates (donor-bound exciton, parafermion, Fibonacci anyon) are not real qubits yet.

### Recommendations for future monitoring:
- **Parafermion qubit**: Watch for experimental FQH-superconductor heterostructure results. If Z_k zero modes are demonstrated in a physical system (not a simulation), create an entry.
- **Fibonacci anyon qubit**: Same — if a physical material system is shown to host Fibonacci anyons with braiding, create an entry. Current superconducting-processor simulations do NOT qualify.
- **Donor-bound exciton**: If a paper demonstrates qubit gates using the exciton degree of freedom (not the underlying donor spin), reconsider.
- **Quarton**: If anyone proposes using the quarton element itself as a qubit (not just a coupler), create a new entry. Currently no such proposal exists.
