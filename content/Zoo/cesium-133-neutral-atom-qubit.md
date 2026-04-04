---
title: Cesium-133 Neutral Atom Qubit
entry_type: qubit
technology_family: Neutral Atom
status: demonstrated
figure_reviewed: true
first_proposed_year: 2000
first_demonstrated_year: 2019
keywords:
- cesium
- Cs-133
- neutral atom
- Rydberg blockade
- hyperfine qubit
- atomic clock transition
- optical tweezer
- Pasqal
- Infleqtion
- ColdQuanta
- magic wavelength
influence_score: 0.72
last_updated: '2026-04-04'
generated_by: scibok-curation
extracted_by: scibok
verified_by: scibok-deep-audit-2026-04-04
---

## Figure

![[cesium-133-neutral-atom-qubit-figure.png]]

## Description

The cesium-133 neutral atom qubit encodes quantum information in the hyperfine ground states of $^{133}\text{Cs}$ atoms trapped in optical tweezer arrays. The qubit is defined on the magnetically insensitive clock transition $|F=3, m_F=0\rangle \leftrightarrow |F=4, m_F=0\rangle$ within the $6S_{1/2}$ ground-state manifold, with a hyperfine splitting of 9.192631770 GHz — the exact frequency used to define the SI second. This makes $^{133}\text{Cs}$ qubits inherently referenced to the most precisely known frequency standard in physics.

As the second major alkali species for Rydberg-mediated quantum computing (alongside rubidium-87), cesium offers distinct physical advantages stemming from its heavier mass and larger atomic number. Cesium's higher polarizability means larger Rydberg blockade radii and stronger atom-atom interactions at a given principal quantum number $n$. The 1064 nm magic-wavelength optical traps (conveniently available from high-power Nd:YAG lasers) provide equal trapping potentials for both qubit states, eliminating differential light shifts that cause decoherence.

Cesium-133 is the species of choice for Pasqal's and Infleqtion's (formerly ColdQuanta) neutral atom quantum processors. The Infleqtion platform uses cesium atoms in 2D arrays of optical tweezers, leveraging the atomic clock heritage for precision qubit control.

## Hamiltonian

The ground-state hyperfine Hamiltonian for $^{133}\text{Cs}$ ($I = 7/2$, $J = 1/2$):

$$H_{\text{hfs}} = A_{\text{hfs}} \, \mathbf{I} \cdot \mathbf{J}$$

with the hyperfine splitting:

$$\Delta E_{\text{hfs}} = h \times 9.192631770\,\text{GHz}$$

The Rydberg interaction Hamiltonian for two atoms separated by distance $R$, both coupled to Rydberg state $|r\rangle$ with Rabi frequency $\Omega$ and detuning $\Delta$:

$$H_{\text{Ryd}} = \sum_{i=1,2}\left[\frac{\hbar\Omega}{2}(|r_i\rangle\langle 1_i| + \text{h.c.}) + \hbar\Delta |r_i\rangle\langle r_i|\right] + \frac{\hbar C_6}{R^6}|r_1 r_2\rangle\langle r_1 r_2|$$

where $C_6$ is the van der Waals coefficient for the chosen Rydberg state, scaling as $C_6 \propto n^{11}$ and typically much larger for Cs than Rb at the same $n$ due to greater polarizability. The blockade condition $C_6/R^6 \gg \Omega$ prevents double excitation within the blockade radius $R_b = (C_6/\hbar\Omega)^{1/6}$.

## Motivation

Cesium offers several practical advantages over rubidium for neutral atom quantum computing. The 9.192 GHz clock transition has been characterized to extraordinary precision over decades of atomic clock research, providing a well-understood qubit with known systematics. The 1064 nm magic wavelength coincides with high-power commercial fiber lasers, simplifying the optical system for large-scale tweezer arrays. Cesium's larger mass reduces the motional heating rate in optical traps (since recoil energy $E_r = \hbar^2 k^2 / 2m$ is inversely proportional to mass), improving trap lifetimes and gate fidelities. The larger Rydberg blockade radius relaxes the requirements on inter-atom spacing, potentially enabling denser or more flexible array geometries.

## Experimental Status

**Rydberg blockade gate — Graham et al. (2019):**
- First demonstration of high-fidelity Rydberg-mediated entangling gates (CZ gates) on cesium-133 atoms in a 2D optical tweezer array.
- Implemented on pairs of sites within a 121-site grid of blue-detuned optical traps.
- Bell state fidelity: 0.86(2), corrected to 0.89 after SPAM correction.
- CZ gate fidelity: 0.91 including single-qubit errors.
- Dominant errors: finite atom temperature and laser noise.
- Published in PRL 123, 230501 (2019).

**Infleqtion (formerly ColdQuanta) platform:**
- Commercial neutral atom quantum processor using $^{133}\text{Cs}$ in 2D optical tweezer arrays.
- Leverages atomic clock technology heritage for precision qubit control.

**Pasqal:**
- Develops neutral atom processors using cesium atoms in configurable 2D and 3D array geometries.
- Focuses on analog quantum simulation and digital-analog hybrid algorithms.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| $T_1$ | >1 s | Trap lifetime in optical tweezers | — |
| $T_2^*$ | ~1 ms | Limited by differential light shifts and magnetic noise | — |
| Hyperfine splitting | 9.192631770 GHz | SI second definition; clock transition | — |
| 2Q gate fidelity | 91% | CZ gate via Rydberg blockade (raw) | [Graham et al. 2019](https://doi.org/10.1103/PhysRevLett.123.230501) |
| Bell state fidelity | 89% | SPAM-corrected | [Graham et al. 2019](https://doi.org/10.1103/PhysRevLett.123.230501) |
| Magic wavelength | 1064 nm | Equal trapping for both clock states | — |
| Cooling transition | 852 nm | $6S_{1/2} \to 6P_{3/2}$ D2 line | — |
| Nuclear spin | $I = 7/2$ | 16 ground-state sublevels | — |
| Operating temperature | ~10 μK | Laser-cooled in magneto-optical trap | — |

## Scaling Considerations

- **Magic wavelength advantage**: 1064 nm traps can be generated by high-power Nd:YAG and ytterbium fiber lasers, enabling large arrays (>1000 sites) with uniform trapping potentials.
- **Atom loss**: neutral atom arrays suffer from finite trap lifetimes (~1–10 s) and atom loss during Rydberg excitation, requiring mid-circuit reloading or error mitigation.
- **Rydberg interaction uniformity**: the strong $C_6$ interaction of Cs can be a double-edged sword — while it provides strong blockade, it also increases sensitivity to position uncertainty and limits the dynamic range of accessible interaction strengths.
- **Comparison to Rb**: rubidium-87 currently leads in demonstrated gate fidelities (>99.5% with Bluvstein et al. 2024), but cesium may close this gap as Rydberg gate protocols are optimized for heavier atoms.
- **Isotope simplicity**: $^{133}\text{Cs}$ is the only stable cesium isotope (100% natural abundance), eliminating isotope selection or enrichment requirements.

## References

### Rydberg gate demonstration
- T. M. Graham et al., "Rydberg-Mediated Entanglement in a Two-Dimensional Neutral Atom Qubit Array," [Phys. Rev. Lett. 123, 230501 (2019)](https://doi.org/10.1103/PhysRevLett.123.230501) | [arXiv:1908.06103](https://arxiv.org/abs/1908.06103)

## Linked Papers

- [[graham-2019-rydberg-entanglement-cs]]

## Related Entries

- [[neutral-atom-qubit]] — parent platform
- [[rydberg-neutral-atom-qubit]] — Rydberg-mediated gates used for entanglement
- [[alkaline-earth-neutral-atom-clock-qubit]] — alternative atomic species (Sr, Yb) for clock-transition qubits
