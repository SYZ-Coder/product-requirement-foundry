# Baseline Input Guide

This guide tells the team how to prepare historical materials before using `product-requirement-foundry`.

## Goal

The skill works best when the incoming request is not treated as an isolated idea.

Before generating a requirement, the team should provide:
- a one-line request
- the target product or project name
- the most relevant historical assets
- any known business or technical constraints

## What to Prepare

### 1. Required Minimum Input

For the smallest usable input set, prepare:

- `request.md`
  - one-line requirement
  - product name
  - target platform
  - expected output type
- at least one historical source
  - a historical PRD, or
  - an OpenSpec spec, or
  - a wiki analysis doc, or
  - a project knowledge asset

### 2. Recommended Product Context

If available, include:

- product summary
- module overview
- page map
- release notes
- API summary
- data model summary
- tracking event summary

### 3. Best-Case Historical Package

For high-confidence `1->n` generation, prepare:

- historical PRDs
- OpenSpec outputs
- wiki analysis docs
- design docs
- API docs
- tracking docs
- release or change logs
- glossary or terminology docs

## Supported Source Types

### OpenSpec

Recommended inputs:
- `specs/*.md`
- proposal docs
- task docs
- change records

Best used for:
- requirement lineage
- historical scope decisions
- explicit change intent

### Wiki Analysis

Recommended inputs:
- module overview docs
- flow docs
- page structure docs
- architecture notes

Best used for:
- current-state understanding
- module boundaries
- product structure

### Knowledge Assets

Recommended inputs:
- codebase knowledge wiki outputs
- project analysis summaries
- domain model docs
- capability inventories

Best used for:
- implementation-aware baseline
- mapping product concepts to real modules

### Enterprise Knowledge Base

Recommended inputs:
- internal docs exports
- requirement reviews
- SOPs
- decision records

Best used for:
- business constraints
- compliance or process rules
- organization-specific terminology

## How to Feed a Request

The cleanest way is to prepare a short intake file.

Example:

```yaml
project:
  name: social-app
  domain: social
  platforms: [ios, android, web]

request:
  one_liner: prioritize comments from close connections on the feed detail page
  expected_output: prd_for_dev
  preferred_mode: auto

baseline_sources:
  - type: openspec
    path: baseline/openspec/
  - type: wiki
    path: baseline/wiki/
  - type: knowledge_wiki
    path: baseline/knowledge/
  - type: prd
    path: baseline/prd/
  - type: api
    path: baseline/api/
  - type: tracking
    path: baseline/tracking/

constraints:
  must_reference_history: true
  preserve_terminology: true
  output_language: zh-CN
```

## How to Choose Baseline Depth

### For 0-to-1

Minimum:
- request
- product summary
- domain notes

Recommended:
- market notes
- related old modules
- team technical constraints

### For 1-to-n

Minimum:
- request
- one historical feature document
- one current-state document

Recommended:
- old PRD or spec
- current wiki or knowledge asset
- API or data doc
- tracking doc
- release note or online behavior note

## Source Priority

When multiple files disagree, use this priority:

1. approved and latest product or architecture doc
2. latest current-state wiki or project analysis doc
3. latest OpenSpec change or approved spec
4. historical PRD
5. inferred knowledge assets
6. AI inference

If the conflict still cannot be resolved:
- keep both views
- mark the issue in `open-questions.md`

## Team Checklist Before Running the Skill

- [ ] One-line request is written clearly
- [ ] Product or project is identified
- [ ] Historical source paths are provided
- [ ] Current-state source is included for `1->n`
- [ ] Terminology source is included if the product has domain language
- [ ] Missing information is acceptable or explicitly listed

## Baseline Scanner

After arranging documents under `baseline/`, generate normalized baseline artifacts:

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js <workspace-dir>
```

The scanner writes:

- `docs/output/baseline-summary.md`
- `docs/output/feature-inventory.json`
- `docs/output/historical-requirements.json`
- `docs/output/known-constraints.json`
- `docs/output/glossary.json`

Review these files before generating the final PRD. They are intentionally conservative signals, not a replacement for human-approved product truth.

## Common Feeding Mistakes

- Only giving the new request without any historical source
- Giving only old PRDs but no current-state docs
- Mixing drafts and approved docs without labels
- Omitting page, API, or tracking materials for incremental requests
- Expecting the skill to infer online reality with no evidence
