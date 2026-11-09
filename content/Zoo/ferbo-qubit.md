---
title: FerBo Qubit
entry_type: qubit
technology_family: Super-Semi
status: proposed
figure_reviewed: true
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
last_updated: '2026-11-09'
generated_by: scibok-curation
verified_by: scibok-deep-audit-2026-11-09
figure_renderer: "nano-banana-2"
figure_model: "google/gemini-3.1-flash-image-preview"
figure_provenance: "Figures/ferbo-qubit-figure.provenance.json"
figure_reviewed_by: "Codex corpus visual/physics audit 2026-08-05"
figure_reviewed_at: "2026-08-05T12:35:46.220699+00:00"
---

## Figure

![[ferbo-qubit-figure.png]]

## Description

The **FerBo qubit** is a superconducting quantum circuit proposed by Cáceres, Matute-Cañadas et al. (2026) at CEA-Saclay (Quantronics group) and UAM Madrid. Its name derives from **fermion-boson hybridization** — the central mechanism by which it achieves simultaneous protection against both relaxation and dephasing. The circuit consists of a parallel arrangement of a large inductance $L$, a small capacitor $C$, and a highly transmissive Josephson **weak link** (such as a semiconducting nanowire). Structurally, it resembles a **light fluxonium** ($E_L \ll E_J, E_C$), but with the conventional tunnel junction replaced by a weak link hosting **Andreev bound states**, introducing a fermionic degree of freedom that hybridizes with the bosonic LC mode.

The key physical insight is that the qubit's computational states acquire **nearly disjoint support** in the internal Andreev degree of freedom in the protected regime: the ground state $|0\rangle$ resides predominantly in the $|-\rangle$ Andreev manifold while the excited state $|1\rangle$ resides predominantly in the $|+\rangle$ manifold. This separation in Andreev space strongly suppresses matrix elements of bosonic operators — the charge relaxation susceptibility $|\langle 0|\hat{n}|1\rangle|^2$ drops by approximately four orders of magnitude at the operating point $\varphi_{\text{ext}} = 0$ for the representative high-impedance parameters studied in the proposal. Simultaneously, as in light fluxonium, the wavefunctions delocalize across multiple wells in phase space, exponentially suppressing flux dispersion with increasing impedance $Z$. The Andreev-sector separation and phase delocalization therefore provide complementary suppression of relaxation and dephasing rather than immunity to every noise channel.

The strongest simultaneous protection occurs at high circuit impedance and high weak-link transmission. For the Josephson quasi-resonant-level model, the transmission is $\tau=(\Gamma^2-\delta\Gamma^2)/(\Gamma^2+\epsilon_r^2)$, so both a small level detuning $\epsilon_r$ and small left-right asymmetry $\delta\Gamma$ favor the ballistic limit. When $E_C$ is the largest relevant circuit energy, the crossover into the low-relaxation-susceptibility region is approximately $\epsilon_r=\sqrt{2E_CE_L}$, or $Z/R_Q\approx2E_C/(\pi\epsilon_r)$; the paper shows that the numerical boundary shifts somewhat outside that approximation. The qubit operates at a **zero external flux sweet spot** ($\varphi_{\text{ext}} = 0$), where the two computational states have the same phase-inversion parity in the protected regime, adding a selection rule that suppresses relaxation. This differs from heavy fluxonium, whose usual sweet spot is near $\varphi_{\text{ext}} = \pi$.

What distinguishes FerBo from other dual-protected qubits — the **0-$\pi$ qubit**, **cos(2$\varphi$) qubit**, **GKP qubit**, and **bifluxon** — is that those designs achieve simultaneous relaxation and dephasing protection through multiple bosonic degrees of freedom with stringent parameter requirements. FerBo achieves the same dual protection using only a **single bosonic mode** coupled to a **fermionic Andreev degree of freedom**, opening a wider and more experimentally accessible parameter window. The natural platform for implementation is a semiconducting **nanowire weak link** (e.g., InAs/Al), whose small intrinsic capacitance (~0.1 fF compared to several fF for tunnel junctions) makes the high-impedance regime significantly more accessible. The required superinductance can be realized with a Josephson junction array or a disordered superconductor.

## Hamiltonian

The full Hamiltonian of the FerBo qubit is:

$$\hat{H} = 4E_C\hat{n}^2 + \frac{1}{2}E_L\hat{\varphi}^2 + H_{\rm WL}(\hat{\varphi} - \varphi_{\text{ext}})$$

The first term is the charging energy with $E_C = e^2/(2C)$, where $\hat{n}$ is the number of Cooper pairs on the island. The second term is the inductive energy from the superinductance, with $E_L = (\Phi_0/2\pi)^2/L$. The third term encodes the Andreev physics of the weak link.

In the **atomic limit** (weak link treated as a quantum dot with Andreev bound states), the weak link Hamiltonian acting on the even-parity Andreev subspace is:

$$H_{\rm WL}(\hat{\varphi}) = \Gamma\cos(\hat{\varphi}/2)\,\hat{\sigma}_x - \delta\Gamma\sin(\hat{\varphi}/2)\,\hat{\sigma}_y + \epsilon_r\,\hat{\sigma}_z$$

where $[\hat\varphi,\hat n]=i$, $\hat{\sigma}_i$ are Pauli matrices acting on the two-dimensional even-parity Andreev subspace, $\Gamma = \Gamma_L + \Gamma_R$ is the total coupling to the left and right leads, $\delta\Gamma = \Gamma_L - \Gamma_R$ is the coupling asymmetry, and $\epsilon_r$ is the resonant level position. This atomic-limit model assumes $\Gamma_L,\Gamma_R\ll\Delta$, where $\Delta$ is the superconducting gap. In the ballistic limit $\epsilon_r,\delta\Gamma\to0$, the weak-link term reduces to $\Gamma\cos(\hat\varphi/2)\hat\sigma_x$; coupling this Andreev pseudospin to the high-impedance bosonic mode yields the nearly disjoint Andreev support and same-parity computational states that suppress relaxation.

## Motivation

- **Dual noise protection from minimal hardware:** FerBo simultaneously suppresses both relaxation and dephasing using a single bosonic mode coupled to a fermionic Andreev degree of freedom — avoiding the multiple bosonic modes and stringent parameter matching required by the 0-$\pi$ qubit, cos(2$\varphi$) qubit, and bifluxon.
- **Wide, experimentally accessible parameter range:** The proposal identifies a broad low-susceptibility region in impedance, level detuning, and junction asymmetry. Its simple boundary formula is an approximation valid when $E_C$ is the largest energy scale, not a universal phase boundary.
- **Natural platform compatibility:** Semiconducting nanowire weak links (InAs/Al), already developed for gatemon and Andreev qubit experiments, provide the high-transmission channels needed. Their small intrinsic capacitance (~0.1 fF) naturally favors the high-impedance regime.
- **Relaxation susceptibility reduced by four orders of magnitude:** For the proposal's representative high-impedance parameters, the nearly disjoint Andreev support and same-parity selection rule reduce $|\langle 0|\hat{n}|1\rangle|^2$ by roughly four orders of magnitude at the zero-flux operating point.
- **Zero-flux sweet spot:** Operating at $\varphi_{\text{ext}} = 0$ simplifies experimental operation (no precision flux biasing required) and provides additional selection-rule protection due to shared parity of the computational states under phase inversion.

## Experimental Status

**Proposal stage (as of November 2026):**
- FerBo remains a theoretical design presented in arXiv:2604.01145v1; no peer-reviewed journal version or experimental FerBo device was found in the 2024–2026 literature search.
- The proposed experimental signature is a vanishingly weak $0\!\to\!1$ two-tone-spectroscopy line near zero external flux in the protected regime, rather than the suppressed $0\!\to\!2$ line expected after crossing into the unprotected regime.
- The principal implementation risks identified by the proposal are gate-voltage noise in the semiconductor weak link, thermal or driven leakage into $|2\rangle$, junction asymmetry, and maintaining a high-impedance mode while preserving weak-link transparency.

## Key Metrics

| Metric | Value | Notes | Fidelity reference |
|--------|-------|-------|--------------------|
| Charge relaxation susceptibility | ~10⁻⁴ of its unprotected value | Four-order reduction in $\lvert\langle 0 \rvert \hat{n} \lvert 1 \rangle\rvert^2$ at $\varphi_{\text{ext}} = 0$ for representative protected-regime parameters | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Flux dispersion | Exponentially suppressed | $\delta E_{01}$ vs $Z/R_Q$ | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Protection crossover | $Z/R_Q \approx 2E_C/(\pi\epsilon_r)$ | Approximate boundary when $E_C$ is the largest energy scale | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Representative $E_C$ | ~15 GHz | Parameter used for the proposal's transition-energy example; not an experimental optimum | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |
| Operating point | $\varphi_{\text{ext}} = 0$ | Zero external flux sweet spot | [Cáceres, Matute-Cañadas et al. 2026](https://arxiv.org/abs/2604.01145) |

## References

### Original proposal
- J. J. Cáceres, D. Sanz Marco, J. Ortuzar, E. Flurin, C. Urbina, H. Pothier, M. F. Goffman, F. J. Matute-Cañadas, and A. Levy Yeyati, "FerBo: a noise resilient qubit hybridizing Andreev and fluxonium states," [arXiv:2604.01145 (2026)](https://arxiv.org/abs/2604.01145)

## Linked Papers

- [[caceres-2026-ferbo-a-noise-resilient]]

## Evergreen context

- [[josephson-junction-as-nonlinear-element]] — FerBo replaces the ordinary oxide junction with a high-transmission weak link whose nonlinear Andreev physics is itself part of the protection mechanism.
- [[charge-noise-sweet-spot]] — FerBo extends the protected-operating-point idea beyond simple bosonic sweet spots, combining zero-flux biasing with Andreev-mediated relaxation suppression
- [[cos2phi]] — useful comparison point for how superconducting circuits chase dual protection with higher-harmonic or interference-based design
- [[noise-bias-and-asymmetric-error-channels]] — the Andreev-space disjoint support is best read as a built-in relaxation bias, not just a generic coherence boost

## Related Entries

- [[fluxonium]] — shares dephasing protection via phase delocalization; FerBo replaces tunnel junction with Andreev weak link
- [[andreev-spin-qubit]] — shares Andreev bound state physics; FerBo uses even-parity Andreev sector rather than spin
- [[heavy-fluxonium-qubit]] — uses disjoint support in phase space; FerBo achieves disjoint support in Andreev space instead
- [[0-pi-qubit]] — dual-protected qubit using multiple bosonic modes; FerBo uses fermion-boson hybridization instead
- [[cos2phi-qubit]] — another dual-protected superconducting circuit; requires more stringent parameters
- [[gatemon]] — same nanowire weak link platform; different operating regime
