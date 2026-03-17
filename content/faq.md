---
title: FAQ
---


You might want to check out the [[qubit-zoo-inclusion-editorial-policy|editorial policy]] first.

### Why do we need a qubit zoo?

Qubits improve based on the knowledge gained from previous qubit proposals and realizations. And qubits need to get better to make useful quantum computers. A qubit's performance is characterized by the task they are to perform — typically fault-tolerant quantum computation — and these parameters include the error rates of the relevant gates (IDLE, single qubit, two-qubit), along with the speed of these gates.

But their utility may also be determined by other considerations: how easy is it to control them? How many wires or laser beams does each qubit need? What is the classical control and architectural overhead? All these issues flow into the holistic problem of building a functioning quantum computer.

As we better understand what limits qubit performance — such as what environmental and material parameters cause decoherence — we can sometimes use that knowledge to radically advance the performance of qubits. Further, many ideas that were introduced in the early days and excitement of quantum computing — and have since been forgotten — may be applicable again now that we have working qubits and know what does and doesn't work.

Developments can also be applied across technologies to advance qubits; so it pays to understand qubits in all their forms when designing new ones. Hybrid qubits are possible too. At the physical level, advances in materials, control, and fabrication approaches can often be shared.

### What can be submitted to the qubit zoo?

The qubit zoo attempts to collect all the qubits we know about. "Qubits" is broadly defined in the sense that we include proposals for new qubit gate approaches as inherent to what a qubit is. So, for example, although there may already be an entry on the transmon qubit, there could be another entry that uses transmons in a new way — either by proposing a new two-qubit gate, or a new way to combine transmons to realize a new type of qubit.

### Why isn't qubit X in the Zoo?

Because you haven't submitted it yet. [Open an issue](https://github.com/sci-bok/qubitzoo-site/issues) or wait for the daily pipeline to find it on arXiv.

### I just put a paper on the arXiv about my new qubit idea. Can I submit it?

Absolutely. Our daily pipeline scans arXiv for new hardware-relevant papers. If it passes relevance filtering, it'll appear automatically. If you want to be sure, [open an issue](https://github.com/sci-bok/qubitzoo-site/issues) with the arXiv ID and we'll fast-track it.

### There's a mistake in qubit X. How do I get it fixed?

[Open an issue](https://github.com/sci-bok/qubitzoo-site/issues) with the entry name and what needs fixing. Or submit a corrected version that does a better job than what's in the zoo now. If it's better, we'll replace it. That's how science works.

### What's the difference between "seed" and "demonstrated" entries?

- **Seed** entries have basic metadata and links but haven't been fully curated yet
- **Demonstrated** entries have been hand-verified with correct physics, Hamiltonians, metrics tables with fidelity references, and comprehensive cross-links

### How is content verified?

New papers go through a multi-stage pipeline:
1. **Discovery** — arXiv API + Semantic Scholar enrichment
2. **Relevance filtering** — hardware-focused classifier rejects off-scope papers
3. **Structured extraction** — LLM-assisted extraction with deterministic fallback
4. **Verification** — second model cross-checks extracted claims
5. **Curation** — top entries are hand-curated with real physics by domain experts

### What's different from the original qubitzoo.org?

This is the next generation. The original Qubit Zoo was a manually curated Hugo site. This version is:
- **Automated** — daily paper discovery + extraction pipeline
- **Interlinked** — every entry connects to related qubits, papers, and concepts
- **Navigable** — graph view, full-text search, backlinks, popover previews
- **Physics-first** — Hamiltonians, LaTeX equations, and metrics tables rendered natively
- **Open** — everything is on GitHub, contributions welcome

### Technical details

- Built with [Quartz 4](https://quartz.jzhao.xyz) from an [Obsidian](https://obsidian.md) vault
- Source vault: [sci-bok/qubit-zettelkasten](https://github.com/sci-bok/qubit-zettelkasten)
- Pipeline: [sci-bok/qubit-zoo-zettelkasten](https://github.com/sci-bok/qubit-zoo-zettelkasten)
- Deployed nightly via GitHub Actions to GitHub Pages
