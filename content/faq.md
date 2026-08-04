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

The Zoo is selective rather than exhaustive. "Qubits" is broadly defined to include durable physical platforms, encodings, and hardware primitives with lasting explanatory value. A new transmon gate, for example, earns its own entry only when it defines a stable primitive rather than a one-paper result; otherwise the paper belongs in References.

### Why isn't qubit X in the Zoo?

Because you haven't submitted it yet. [Open an issue](https://github.com/sci-bok/qubitzoo-site/issues) or wait for the daily pipeline to find it on arXiv.

### I just put a paper on the arXiv about my new qubit idea. Can I submit it?

Absolutely. Our daily pipeline scans arXiv for new hardware-relevant papers. Passing relevance filtering makes a paper eligible for review, not automatic publication as a new Zoo object. If you want to flag it, [open an issue](https://github.com/sci-bok/qubitzoo-site/issues) with the arXiv ID.

### There's a mistake in qubit X. How do I get it fixed?

[Open an issue](https://github.com/sci-bok/qubitzoo-site/issues) with the entry name and what needs fixing. Or submit a corrected version that does a better job than what's in the zoo now. If it's better, we'll replace it. That's how science works.

### What's the difference between "seed" and "demonstrated" entries?

- **Seed** entries have basic metadata and links but haven't been fully curated yet
- **Demonstrated** describes experimental maturity: the relevant physical object or operation has been realized. It does not, by itself, mean the page has received independent specialist review.

### How is content checked?

New papers go through a multi-stage pipeline:
1. **Discovery** — arXiv API + Semantic Scholar enrichment
2. **Relevance filtering** — hardware-focused classifier rejects off-scope papers
3. **Structured extraction** — LLM-assisted extraction with deterministic fallback
4. **Model cross-checking** — a second model checks extracted claims and disagreements
5. **Targeted curation** — selected entries receive primary-source and manual review

Review depth varies across the corpus. Automated cross-checking can catch inconsistencies but is not independent domain-expert verification. Always follow the linked primary source before citing a Zoo claim.

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
