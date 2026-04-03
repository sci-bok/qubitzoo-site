---
title: FerBo Qubit
entry_type: qubit
technology_family: Super-Semi
status: proposed
figure_reviewed: false
first_proposed_year: 2026
keywords:
- ferbo
- superconducting
- andreev
- fluxonium
- noise protection
- fermion-boson hybridization
- weak link
- nanowire
- hardware-level protection
influence_score: 0.55
last_updated: '2026-04-03'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-04-03
---

## Figure

![[ferbo-qubit-figure.png]]

## Description

The **FerBo qubit** is a superconducting quantum circuit proposed by Cáceres, Matute-Cañadas et al. (2026) at CEA-Saclay (Quantronics group) and UAM Madrid. Its name derives from **fermion-boson hybridization** — the central mechanism by which it achieves simultaneous protection against both relaxation and dephasing. The circuit consists of a parallel arrangement of a large inductance $L$, a small capacitor $C$, and a highly transmissive Josephson **weak link** (such as a semiconducting nanowire). Structurally, it resembles a **light fluxonium** ($E_L \ll E_J, E_C$), but with the conventional tunnel junction replaced by a weak link hosting **Andreev bound states**, introducing a fermionic degree of freedom that hybridizes with the bosonic LC mode.

The key physical insight is that the qubit's computational states acquire **disjoint support** in the internal Andreev degree of freedom: the ground state $|0\rangle$ resides predominantly in the $|-\rangle$ Andreev manifold while the excited state $|1\rangle$ resides in the $|+\rangle$ manifold. This separation in Andreev space strongly suppresses matrix elements of bosonic operators — the charge relaxation susceptibility $|\langle 0|\hat{n}|1\rangle|^2$ drops by approximately four orders of magnitude at the operating point $\varphi_{\text{ext}} = 0$. Simultaneously, as in light fluxonium, the wavefunctions delocalize across multiple wells in phase space, exponentially suppressing flux dispersion with increasing impedance $Z$. These two protection mechanisms — one fermionic, one bosonic — operate simultaneously and independently.

The **protected regime** is reached when $Z/R_Q \gg 1$ (high impedance) and $\epsilon_r/E_C \ll 1$ (high transmission through the weak link), with a sharp boundary at $Z/R_Q \approx 2E_C/(\pi\epsilon_r)$. The qubit operates at a **zero external flux sweet spot** ($\varphi_{\text{ext}} = 0$), where both computational states share the same parity under phase inversion, providing additional selection-rule protection against relaxation. This is notably different from heavy fluxonium, which operates near $\varphi_{\text{ext}} = \pi$.

What distinguishes FerBo from other dual-protected qubits — the **0-$\pi$ qubit**, **cos(2$\varphi$) qubit**, **GKP qubit**, and **bifluxon** — is that those designs achieve simultaneous relaxation and dephasing protection through multiple bosonic degrees of freedom with stringent parameter requirements. FerBo achieves the same dual protection using only a **single bosonic mode** coupled to a **fermionic Andreev degree of freedom**, opening a wider and more experimentally accessible parameter window. The natural platform for implementation is a semiconducting **nanowire weak link** (e.g., InAs/Al), whose small intrinsic capacitance (~0.1 fF compared to several fF for tunnel junctions) makes the high-impedance regime significantly more accessible. The required superinductance can be realized with a Josephson junction array or a disordered superconductor.

## Hamiltonian

The full Hamiltonian of the FerBo qubit is:

$$\hat{H} = 4E_C\hat{n}^2 + \frac{1}{2}E_L\hat{\varphi}^2 + H_{\rm WL}(\hat{\varphi} - \varphi_{\text{ext}})$$

The first term is the charging energy with $E_C = e^2/(2C)$, where $\hat{n}$ is the number of Cooper pairs on the island. The second term is the inductive energy from the superinductance, with $E_L = (\Phi_0/2\pi)^2/L$. The third term encodes the Andreev physics of the weak link.

In the **atomic limit** (weak link treated as a quantum dot with Andreev bound states), the weak link Hamiltonian acting on the even-parity Andreev subspace is:

$$H_{\rm WL}(\hat{\varphi}) = \Gamma\cos(\hat{\varphi}/2)\,\hat{\sigma}_x - \delta\Gamma\sin(\hat{\varphi}/2)\,\hat{\sigma}_y + \epsilon_r\,\hat{\sigma}_z$$

where $\hat{\sigma}_i$ are Pauli matrices acting on the two-dimensional even-parity Andreev subspace, $\Gamma = \Gamma_L + \Gamma_R$ is the total coupling to the left and right leads, $\delta\Gamma = \Gamma_L - \Gamma_R$ is the coupling asymmetry, and $\epsilon_r$ is the resonant level position controlling the effective transmission. In the high-transmission limit ($\epsilon_r \to 0$), the Andreev bound states become nearly degenerate, and the hybridization with the bosonic mode produces the disjoint-support structure that protects against relaxation.

## Motivation

- **Dual noise protection from minimal hardware:** FerBo simultaneously suppresses both relaxation and dephasing using a single bosonic mode coupled to a fermionic Andreev degree of freedom — avoiding the multiple bosonic modes and stringent parameter matching required by the 0-$\pi$ qubit, cos(2$\varphi$) qubit, and bifluxon.
- **Wide, experimentally accessible parameter range:** The protected regime ($Z/R_Q \gg 1$, $\epsilon_r/E_C \ll 1$) has a clearly defined sharp boundary and does not require extreme fine-tuning, making experimental realization more practical than many competing protected-qubit proposals.
- **Natural platform compatibility:** Semiconducting nanowire weak links (InAs/Al), already developed for gatemon and Andreev qubit experiments, provide the high-transmission channels needed. Their small intrinsic capacitance (~0.1 fF) naturally favors the high-impedance regime.
- **Relaxation suppression by four orders of magnitude:** The disjoint Andreev support of the computational states suppresses charge-induced relaxation matrix elements $|\langle 0|\hat{n}|1\rangle|^2$ by ~$10^{-4}$ at the zero-flux operating point, a substantial improvement enabled by the fermion-boson hybridization.
- **Zero-flux sweet spot:** Operating at $\varphi_{\text{ext}} = 0$ simplifies experimental operation (no precision flux biasing required) and provides additional selection-rule protection due to shared parity of the computational states under phase inversion.

## Experimental Status

The FerBo qubit is a **theoretical proposal only** as of April 2026. No experimental realization has been reported. The authors (CEA-Saclay Quantronics group and UAM Madrid) suggest implementation using InAs/Al semiconducting nanowire weak links — a platform already established for gatemon and Andreev spin qubit experiments — combined with a granular aluminum or Josephson junction array superinductance. The required parameter regime ($Z/R_Q \gg 1$, high-transmission weak link) is experimentally accessible with current fabrication techniques, but no device has been built.

## Scaling Considerations

- **Single-mode advantage:** Unlike the 0-$\pi$ and cos(2$\varphi$) qubits, FerBo uses only one bosonic mode, potentially simplifying fabrication and control.
- **Nanowire variability:** Semiconducting weak link properties (transmission, resonant level position) are sensitive to nanowire disorder and gate tuning, which may limit device-to-device reproducibility.
- **Gate operations:** The disjoint Andreev support that protects against relaxation also suppresses the matrix elements needed for single-qubit gates. The authors discuss driving transitions via the coupling asymmetry $\delta\Gamma$ or multi-photon processes, but gate protocols remain to be developed and benchmarked.
- **Readout:** Dispersive readout in the protected regime requires careful engineering since the charge matrix elements are suppressed by design.
- **Quasiparticle poisoning:** Even-parity operation assumes suppressed quasiparticle tunneling; stray quasiparticles could cause parity switches that take the qubit out of the protected subspace.
- **Superinductance quality:** The high-impedance requirement ($Z \gg R_Q$) demands superinductances with low loss, which remains an active area of materials development.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Charge relaxation suppression | ~10⁻⁴ | $|\langle 0|\hat{n}|1\rangle|^2$ at $\varphi_{\text{ext}} = 0$, protected regime | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Flux dispersion | Exponentially suppressed | $\delta E_{01}$ vs $Z/R_Q$ | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Protection boundary | $Z/R_Q \approx 2E_C/(\pi\epsilon_r)$ | Sharp transition to protected regime | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Optimal $E_C$ | ~15 GHz | Representative parameter set | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Operating point | $\varphi_{\text{ext}} = 0$ | Zero external flux sweet spot | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |

## References

### Original proposal
- J. J. Cáceres†, F. J. Matute-Cañadas†, D. Sanz Marco, J. Ortuzar, E. Flurin, C. Urbina, H. Pothier, A. Levy Yeyati, and M. F. Goffman, "FerBo: a noise resilient qubit hybridizing Andreev and fluxonium states," [arXiv:2604.01145 (2026)](https://arxiv.org/abs/2604.01145) (†equal contribution)

## Linked Papers

- [[caceres-2026-ferbo-a-noise-resilient]]

## Related Entries

- [[fluxonium]] — shares dephasing protection via phase delocalization; FerBo replaces tunnel junction with Andreev weak link
- [[andreev-spin-qubit]] — shares Andreev bound state physics; FerBo uses even-parity Andreev sector rather than spin
- [[heavy-fluxonium-qubit]] — uses disjoint support in phase space; FerBo achieves disjoint support in Andreev space instead
- [[0-pi-qubit]] — dual-protected qubit using multiple bosonic modes; FerBo uses fermion-boson hybridization instead
- [[cos2phi-qubit]] — another dual-protected superconducting circuit; requires more stringent parameters
- [[gatemon]] — same nanowire weak link platform; different operating regime
