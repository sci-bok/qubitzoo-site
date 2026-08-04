---
title: Qubit Zoo Inclusion & Editorial Policy
type: policy
last_updated: '2026-03-10'
status: active
generated_by: scibok-curation
---

# Qubit Zoo Inclusion & Editorial Policy

This document defines what belongs in the Zoo, what belongs in References only, and the minimum quality bar for public-facing entries.

## 1) Inclusion criteria (Zoo)

A note belongs in `Zoo/` only if it is a **hardware modality, architecture primitive, or fault-tolerant logical qubit construct** that has enduring value beyond a single paper.

Include if the item is one of:
- Physical qubit modality (e.g., transmon, trapped-ion, spin qubit, neutral-atom, photonic)
- Architecture primitive with stable identity (e.g., tunable coupler, circuit-QED as coupling stack)
- Logical/topological code family used as a qubit abstraction (e.g., surface-code logical qubit)

Exclude from Zoo (References-only):
- Generic algorithm papers
- Software-stack/tooling reviews
- Application-domain surveys (finance, CFD, digital health, etc.)
- Single-paper findings that do not define a durable modality/primitive

## 2) Reference handling

- Every Zoo entry should link at least one **seminal reference**.
- New papers about an existing Zoo entry should generally update `References/` and cross-links, not overwrite the Zoo page.

## 3) Minimum quality bar for `status: demonstrated`

A demonstrated Zoo page must contain:
1. Clear modality-level description (not title/abstract boilerplate)
2. At least one governing Hamiltonian or stabilizer formalism
3. Metrics table including a **Fidelity reference** column
4. At least one seminal linked paper
5. Related-entry links to neighboring modalities/primitives

Optional but encouraged:
- Figure/schematic
- Explicit scaling bottlenecks
- Typical operating regime values

`status: demonstrated` is an experimental-maturity claim: the relevant physical object or operation has been realized. It does **not** imply independent specialist review of the page. The requirements above are publication-quality checks, separate from experimental maturity.

## 4) Metadata policy

- `first_proposed_year` = year of first proposal of the modality, not year of latest processed paper.
- `technology_family` should never be `Unknown` for stable Zoo entries.
- `verified_by` records workflow provenance, not independent expert verification.
- Automated model cross-checking, primary-source checking, specialist review, and external review must not be described as equivalent levels of scrutiny.
- `generated_by` values:
  - `scibok-curation` for manually curated/public-facing entries
  - `seed-ingest-v1` only for legacy seed notes pending promotion

## 5) Protection policy

Pipeline safety rule:
- Curated/demonstrated Zoo entries are protected from automated overwrite.
- Automated processing may append References and side artifacts, but cannot downgrade entry quality.

## 6) Publication workflow for demonstrated entries

Before publishing an entry with `status: demonstrated`:
1. Confirm that primary evidence supports the experimental-maturity claim
2. Check historical metadata (year, seminal references)
3. Add physics section + Hamiltonian or governing formalism
4. Add metrics table with fidelity-source references
5. Validate links and taxonomy conventions
6. Record the actual review provenance without implying specialist review
