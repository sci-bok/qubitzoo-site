---
title: "Coherence Time Hierarchy"
type: evergreen
status: evergreen
tags:
  - coherence
  - T1
  - T2
  - decoherence
  - dephasing
  - relaxation
  - echo
  - dynamical-decoupling
---


Every qubit is characterized by a hierarchy of timescales that quantify how long quantum information survives. Understanding the relationships between $T_1$, $T_2$, $T_2^*$, and $T_\varphi$ is essential for diagnosing noise sources, comparing qubit technologies, and predicting gate fidelities.

## The Timescales

### $T_1$ — Energy relaxation time

$T_1$ characterizes the rate at which an excited qubit decays to the ground state, releasing energy to the environment. It is measured by preparing $|1\rangle$ and monitoring the probability of finding $|0\rangle$ as a function of delay time:

$$P_1(t) = e^{-t/T_1}$$

$T_1$ is set by the coupling between the qubit and dissipative channels (dielectric loss, quasiparticle tunneling, radiative decay, phonon emission, etc.). It represents an irreversible loss of both energy and information.

### $T_\varphi$ — Pure dephasing time

$T_\varphi$ characterizes the rate at which the relative phase between $|0\rangle$ and $|1\rangle$ randomizes due to fluctuations in the qubit transition frequency, without energy exchange. If the qubit frequency fluctuates as $\omega(t) = \omega_0 + \delta\omega(t)$, then the accumulated phase noise is:

$$\langle e^{i\int_0^t \delta\omega(t')dt'}\rangle = e^{-t/T_\varphi}$$

(for Markovian noise; the decay envelope can be Gaussian for $1/f$ noise).

### $T_2^*$ — Free induction decay time (Ramsey)

$T_2^*$ is measured in a Ramsey experiment: $\pi/2$ pulse — free evolution for time $t$ — $\pi/2$ pulse. The fringe visibility decays as:

$$\mathcal{V}(t) = e^{-t/T_2^*}$$

$T_2^*$ includes contributions from both relaxation and dephasing, and is also degraded by slow, quasi-static frequency fluctuations (e.g., $1/f$ flux noise, magnetic field drift).

### $T_2$ — Echo (Hahn or CPMG) coherence time

$T_2$ is measured by inserting a refocusing $\pi$ pulse (Hahn echo) or a train of $\pi$ pulses (CPMG, XY-$n$ dynamical decoupling) between the Ramsey pulses. The echo refocuses quasi-static phase accumulation, making $T_2$ sensitive only to noise at frequencies $\gtrsim 1/t$.

## Fundamental Relations

The total dephasing rate is the sum of the relaxation-induced dephasing rate and the pure dephasing rate:

$$\frac{1}{T_2} = \frac{1}{2T_1} + \frac{1}{T_\varphi}$$

This gives the fundamental bound:

$$\boxed{T_2 \leq 2T_1}$$

The factor of 2 arises because relaxation destroys coherence (the off-diagonal density matrix element $\rho_{01}$) at half the rate it destroys population ($\rho_{11}$).

The hierarchy in practice is:

$$T_2^* \leq T_2^{\text{Hahn}} \leq T_2^{\text{CPMG}} \leq 2T_1$$

with each successive measurement filtering out more low-frequency noise.

## Noise Spectroscopy Connection

The relationship between coherence times and the noise power spectral density $S(\omega)$ is:

- **$T_1$**: Set by $S(\omega_0)$, the noise spectral density at the qubit frequency:

$$\frac{1}{T_1} = \frac{1}{\hbar^2}\left|\frac{\partial H}{\partial \lambda}\right|^2 S_\lambda(\omega_0)$$

- **$T_\varphi$**: Set by $S(\omega \to 0)$, the low-frequency noise:

$$\frac{1}{T_\varphi} = \frac{1}{2}\left|\frac{\partial \omega_{01}}{\partial \lambda}\right|^2 S_\lambda(\omega \to 0)$$

- **$T_2^*$ vs. $T_2$**: $T_2^*$ is sensitive to noise at all frequencies below $\sim 1/t$; echo sequences act as bandpass filters centered at $f_\pi = 1/(2\tau)$ where $\tau$ is the inter-pulse spacing.

For $1/f$ noise ($S(\omega) = A/\omega$), the Ramsey decay is Gaussian ($e^{-t^2/T_2^{*2}}$) while the Hahn echo decay is typically $e^{-(t/T_2)^3}$ or exponential, depending on the noise spectrum details.

## Dynamical Decoupling

Echo and dynamical decoupling sequences extend coherence by filtering out low-frequency noise. A CPMG sequence with $N$ equally spaced $\pi$ pulses over total time $t$ creates a filter function peaked at $f = N/(2t)$:

$$W_N(f) = \frac{8\sin^4(\pi f t / 2N)}{\cos^2(\pi f t / N)}$$

This suppresses noise at frequencies $f \ll N/(2t)$, effectively moving the sensitivity window to higher frequencies where $S(\omega)$ is typically smaller. More pulses → higher effective $T_2$, up to the $2T_1$ limit.

## Platform Comparison

| Platform | $T_1$ | $T_2^*$ | $T_2$ (echo) | $T_2/2T_1$ | Dominant noise |
|---|---|---|---|---|---|
| Transmon | 100–300 μs | 50–150 μs | 100–500 μs | 0.5–0.9 | Dielectric TLS, QP |
| Fluxonium | 100 μs–1 ms | 10–100 μs | 100 μs–1 ms | 0.3–0.9 | Flux noise (away from sweet spot) |
| $^{171}\text{Yb}^+$ ion | >10 s | 1–10 s | >10 min | ~1.0 | Magnetic field fluctuations |
| NV center | 1–10 ms | 1–100 μs | 0.1–1 ms | 0.05–0.1 | $^{13}$C spin bath |
| Si spin qubit | 1–10 s | 1–100 μs | 1–10 ms | <0.01 | Charge noise, nuclear spins |

## Historical Context

- Hahn (1950) introduced the spin echo in NMR, the precursor to $T_2$ measurement.
- Carr & Purcell (1954) and Meiboom & Gill (1958) developed multi-pulse decoupling (CPMG).
- Ithier et al. (2005) performed the first comprehensive noise spectroscopy of a superconducting qubit using $T_1$, $T_2^*$, and $T_2^{\text{echo}}$.
- Bylander et al. (2011) demonstrated CPMG noise spectroscopy in transmons.

## References

- [[transmon]]
- [[fluxonium]]
- [[trapped-ion-qubit]]
- [[ytterbium-hyperfine-qubit]]
- [[charge-noise-in-superconducting-qubits]]
