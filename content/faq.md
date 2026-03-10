---
title: FAQ
---

# Frequently Asked Questions

### What is the Qubit Zoo?

The Qubit Zoo collects all the qubits we know about — from foundational proposals to cutting-edge hardware demonstrations. Each entry is a structured knowledge note with real physics: Hamiltonians, performance metrics, operating parameters, and links to seminal papers.

### Why a Zettelkasten?

Traditional databases are flat. Qubits don't exist in isolation — they share physics, inherit design principles from ancestors, and inspire new architectures. The Zettelkasten format captures these connections through wikilinks, backlinks, and an interactive graph view. You can *follow the physics* from one qubit to its relatives.

### What can I find here?

- **Zoo entries** — Physical qubit modalities, architecture primitives, and logical qubit constructs
- **References** — Seminal and recent papers, properly linked to the entries they support
- **Evergreen concepts** — Foundational physics concepts (dispersive readout, Jaynes-Cummings, etc.)
- **Family MOCs** (Maps of Content) — Overview pages grouping entries by technology family

### Why isn't qubit X in the Zoo?

Probably because we haven't processed it yet. The Zoo grows daily via an automated arXiv discovery pipeline. If you think something important is missing, [open an issue](https://github.com/sci-bok/qubitzoo-site/issues).

### What's the difference between "seed" and "demonstrated" entries?

- **Seed** entries have basic metadata and links but haven't been fully curated yet
- **Demonstrated** entries have been hand-verified with correct physics, Hamiltonians, metrics tables with fidelity references, and comprehensive cross-links

### How is this different from the original qubitzoo.org?

This is the next generation. The original Qubit Zoo was a manually curated Hugo site. This version is:
- **Automated** — daily paper discovery + extraction pipeline
- **Interlinked** — every entry connects to related qubits, papers, and concepts
- **Navigable** — graph view, full-text search, backlinks, popover previews
- **Physics-first** — Hamiltonians, LaTeX equations, and metrics tables rendered natively

### How is content verified?

New papers go through a multi-stage pipeline:
1. **Discovery** — arXiv API + Semantic Scholar enrichment
2. **Relevance filtering** — hardware-focused classifier rejects off-scope papers
3. **Structured extraction** — LLM-assisted extraction with deterministic fallback
4. **Verification** — second model cross-checks extracted claims
5. **Curation** — top entries are hand-curated with real physics by domain experts

### Can I contribute?

Yes! [Open an issue](https://github.com/sci-bok/qubitzoo-site/issues) with suggestions, corrections, or qubit submissions. We especially welcome:
- Missing qubit modalities
- Corrections to metrics or historical dates
- Important seminal papers we're missing

### Technical details

- Built with [Quartz 4](https://quartz.jzhao.xyz) from an [Obsidian](https://obsidian.md) vault
- Source vault: [sci-bok/qubit-zettelkasten](https://github.com/sci-bok/qubit-zettelkasten)
- Pipeline: [sci-bok/qubit-zoo-zettelkasten](https://github.com/sci-bok/qubit-zoo-zettelkasten)
- Deployed nightly via GitHub Actions to GitHub Pages
