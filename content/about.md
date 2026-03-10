---
title: About
---

# About the Qubit Zoo

The Qubit Zoo is a comprehensive, interlinked knowledge base of quantum computing hardware. It aims to catalog every qubit modality, architecture primitive, and gate scheme — with real physics, performance metrics, and connections to the broader research landscape.

## Mission

Qubits improve based on knowledge gained from previous qubit proposals and realizations. Understanding what limits performance — decoherence mechanisms, material parameters, control overhead — lets us radically advance the state of the art. Ideas from the early days of quantum computing, once forgotten, may be applicable again now that we have working hardware.

The Qubit Zoo exists to make this cross-pollination easier: a single place where you can explore qubits in all their forms, compare metrics, follow the physics from one architecture to its relatives, and discover connections you might have missed.

## How It's Built

The Zoo is powered by an automated knowledge pipeline:

1. **Daily discovery** from arXiv, filtered for hardware relevance
2. **Structured extraction** using LLM-assisted agents with deterministic fallbacks
3. **Verification** via dual-model cross-checking
4. **Human curation** for top-tier entries (Hamiltonians, metrics, physics)
5. **Obsidian vault** as the canonical knowledge store
6. **Quartz** static site generator for web publication

The pipeline processes ~10 papers per day, maintaining a growing network of interlinked Zoo entries, reference notes, and physics concepts.

## Contact

- **Issues & suggestions:** [GitHub Issues](https://github.com/sci-bok/qubitzoo-site/issues)
- **Source:** [Pipeline](https://github.com/sci-bok/qubit-zoo-zettelkasten) · [Vault](https://github.com/sci-bok/qubit-zettelkasten) · [Site](https://github.com/sci-bok/qubitzoo-site)
