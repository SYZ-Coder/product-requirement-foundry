---
name: product-requirement-foundry
description: Use when generating product requirements from a one-line request that must stay aligned with historical requirements, online features, project knowledge assets, OpenSpec specs, wiki analyses, or enterprise documentation, especially when you need to distinguish 0-to-1 greenfield work from 1-to-n incremental change.
---

# Product Requirement Foundry

One-line intent in, history-compatible PRD and AI-ready specs out.

## Overview

This skill acts as a requirement foundry: it turns a short product request into a development-ready package without losing alignment with historical product context.

It supports two primary modes:
- `0->1`: new product, new business line, or new module with limited history
- `1->n`: incremental demand that must inherit existing features, specs, interfaces, data models, and online behavior

Core rule:
- Read the baseline first, then write the requirement

## When to Use

Use this skill when:
- A new requirement must stay consistent with existing product behavior
- Historical PRDs, specs, wiki docs, design docs, or project analyses already exist
- OpenSpec outputs should serve as requirement baselines
- A codebase knowledge asset should constrain new requirement generation
- The team wants output that can feed AI-assisted development directly

Do not use this skill when:
- The user only wants a loose brainstorming draft with no need for traceability
- There is no product context and the user explicitly wants a lightweight idea sketch

## Supported Baseline Sources

- OpenSpec specs, proposals, tasks, and change records
- Wiki analysis documents
- Project analysis and knowledge assets such as codebase knowledge wiki outputs
- Historical PRDs and requirement docs
- Design docs, interaction docs, design-system notes
- API docs, data-model docs, tracking docs
- Online feature inventories, release notes, and operational runbooks
- Enterprise knowledge base exports

## Workflow

### Step 1: Load the Baseline

Read the most relevant sources first and produce a normalized baseline.

Required outputs:
- `baseline-summary.md`
- `feature-inventory.json`
- `historical-requirements.json`
- `known-constraints.json`
- `glossary.json`

If a prepared workspace is available, run the baseline scanner first:

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js <workspace-dir>
```

Then review the generated files before producing PRD or OpenSpec artifacts.

If multiple sources conflict:
- prefer newer approved product artifacts over older drafts
- prefer official product and architecture docs over inferred notes
- record unresolved conflicts in `open-questions.md`

### Step 2: Normalize Context

Convert the raw source material into a stable model:

```json
{
  "product": {},
  "baseline": {
    "modules": [],
    "features": [],
    "pages": [],
    "apis": [],
    "entities": [],
    "events": []
  },
  "history": {
    "specs": [],
    "prds": [],
    "releases": [],
    "decisions": []
  },
  "constraints": {
    "business": [],
    "technical": [],
    "compliance": []
  },
  "terminology": []
}
```

### Step 3: Classify the Request

Assign exactly one primary type:
- `greenfield-product`
- `greenfield-module`
- `incremental-feature`
- `cross-module-change`
- `compatibility-change`
- `ops-config-change`
- `bugfix-spec`

Decision rule:
- if the request clearly targets an existing module, feature, page, API, or rule, default to incremental mode

### Step 4: Select the Output Template

Use:
- [templates/greenfield-prd-template.md](./templates/greenfield-prd-template.md) for `0->1`
- [templates/incremental-prd-template.md](./templates/incremental-prd-template.md) for `1->n`

Also generate:
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`

### Step 5: Enforce Traceability

Every important conclusion must be tagged with a source class:
- `UserInput`
- `HistoricalPRD`
- `OpenSpec`
- `Wiki`
- `KnowledgeAsset`
- `DesignDoc`
- `APIDoc`
- `TrackingDoc`
- `AIInference`

If content is inferred rather than evidenced, mark it explicitly as:
- `[Assumption]`

### Step 6: Review Consistency

Before finalizing, check:
- Does the requirement conflict with historical behavior?
- Does it rename existing concepts unnecessarily?
- Does it miss impacted modules, pages, APIs, entities, or events?
- Does it omit compatibility, rollout, or regression scope?
- Does it accidentally rewrite an incremental change as a greenfield spec?

### Step 7: Generate OpenSpec Package When Needed

If the output will be used for AI development through OpenSpec, convert the reviewed PRD package into:
- `proposal.md`
- `design.md`
- `spec.md`
- `tasks.md`
- `dev-context.md`

Use [openspec-output/README.md](./openspec-output/README.md) and [prompts/step7-generate-openspec.md](./prompts/step7-generate-openspec.md).

### Step 8: Score Confidence

Before handing the package to product review, engineering review, or AI development, produce a confidence report.

Use [REVIEW_GATES.md](./REVIEW_GATES.md), [templates/confidence-report-template.md](./templates/confidence-report-template.md), and [prompts/step8-confidence-review.md](./prompts/step8-confidence-review.md).

If artifacts already exist in `docs/output/`, run:

```bash
node <product-requirement-foundry-root>/scripts/confidence-score.js <workspace-dir>
```

## Output Contract

The final output package should usually include:

```text
docs/output/
  prd.md
  impact-analysis.md
  baseline-references.md
  change-checklist.md
  open-questions.md
  consistency-review.md
  confidence-report.md
  confidence-score.json
  openspec/
    proposal.md
    design.md
    spec.md
    tasks.md
    dev-context.md
```

## Key Rules

1. Baseline first. Never write the final PRD before reviewing historical context.
2. Incremental by default when history is clearly relevant.
3. Facts and assumptions must be separated.
4. Existing terminology wins unless there is explicit reason to change it.
5. Output must serve product, design, development, testing, and AI-assisted implementation.

## Domain Packs

If the request is domain-specific, load the matching domain pack before generation.

Current domain pack:
- [domain-packs/social/README.md](./domain-packs/social/README.md)

## Adapter References

- [adapters/openspec-adapter.md](./adapters/openspec-adapter.md)
- [adapters/wiki-adapter.md](./adapters/wiki-adapter.md)
- [adapters/knowledge-wiki-adapter.md](./adapters/knowledge-wiki-adapter.md)
- [adapters/enterprise-kb-adapter.md](./adapters/enterprise-kb-adapter.md)
- [openspec-output/README.md](./openspec-output/README.md)
- [scripts/README.md](./scripts/README.md)
- [REVIEW_GATES.md](./REVIEW_GATES.md)

## Common Mistakes

- Treating an existing feature enhancement as a brand-new PRD
- Ignoring online behavior or release constraints
- Mixing historical facts with AI assumptions
- Omitting affected interfaces or tracking changes
- Rewriting terminology that downstream teams already use
