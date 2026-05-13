# Baseline Layout Spec

This document defines a recommended directory layout for teams using `product-requirement-foundry`.

The aim is not to force every project into one structure, but to give the skill a stable place to look for historical assets.

## Recommended Workspace Layout

```text
project-root/
  baseline/
    request/
      request.md
      request.yaml
    openspec/
      specs/
      proposals/
      changes/
      tasks/
    wiki/
      modules/
      pages/
      flows/
      architecture/
    knowledge/
      summaries/
      modules/
      entities/
      interfaces/
    prd/
      current/
      history/
    design/
      ia/
      pages/
      interactions/
      system/
    api/
      summaries/
      interfaces/
    data/
      entities/
      schemas/
    tracking/
      events/
      metrics/
    operations/
      releases/
      runbooks/
      feature-flags/
    glossary/
      glossary.md
  docs/
    output/
      prd.md
      impact-analysis.md
      baseline-references.md
      change-checklist.md
      open-questions.md
      consistency-review.md
```

## Required Folders

Only two folders are truly required:

- `baseline/request/`
- at least one historical source folder under `baseline/`

## Strongly Recommended Folders for 1-to-n

- `baseline/prd/`
- `baseline/wiki/`
- `baseline/api/`
- `baseline/tracking/`
- `baseline/operations/`

## Folder Semantics

### `baseline/request/`

Stores the new incoming requirement.

Recommended files:
- `request.md`
- `request.yaml`

### `baseline/openspec/`

Stores OpenSpec artifacts.

Suggested subfolders:
- `specs/`
- `proposals/`
- `changes/`
- `tasks/`

### `baseline/wiki/`

Stores current-state product or codebase understanding docs.

Suggested subfolders:
- `modules/`
- `pages/`
- `flows/`
- `architecture/`

### `baseline/knowledge/`

Stores long-lived project understanding assets, including outputs from codebase knowledge wiki style tooling.

Suggested subfolders:
- `summaries/`
- `modules/`
- `entities/`
- `interfaces/`

### `baseline/prd/`

Stores historical and current requirement docs.

Suggested split:
- `current/`
- `history/`

### `baseline/design/`

Stores product structure and design notes that help requirement generation stay grounded.

Suggested subfolders:
- `ia/`
- `pages/`
- `interactions/`
- `system/`

### `baseline/api/`

Stores interface-level constraints.

Suggested subfolders:
- `summaries/`
- `interfaces/`

### `baseline/data/`

Stores data-model level constraints.

Suggested subfolders:
- `entities/`
- `schemas/`

### `baseline/tracking/`

Stores event and metric definitions used by product, growth, or analytics teams.

Suggested subfolders:
- `events/`
- `metrics/`

### `baseline/operations/`

Stores operational context for online behavior.

Suggested subfolders:
- `releases/`
- `runbooks/`
- `feature-flags/`

### `baseline/glossary/`

Stores product or domain language.

Recommended file:
- `glossary.md`

## Naming Rules

Use clear, stable names:

- prefer lowercase English folder names
- use hyphenated filenames
- avoid temporary names like `new-doc.md`, `latest.md`, `v2-final.md`

Examples:
- `comment-ranking-spec.md`
- `feed-module-overview.md`
- `social-graph-summary.md`
- `comment-events.md`

## Document Labeling Rules

Inside each document, label status when possible:

- `Draft`
- `Approved`
- `Historical`
- `Current State`
- `Deprecated`

This makes conflict handling much easier during baseline loading.

## Minimal Layout Examples

### Minimal 0-to-1

```text
baseline/
  request/
    request.md
  knowledge/
    summaries/
      product-summary.md
  glossary/
    glossary.md
```

### Minimal 1-to-n

```text
baseline/
  request/
    request.md
  prd/
    history/
      comment-system-prd.md
  wiki/
    modules/
      comment-module.md
  api/
    interfaces/
      comment-api.md
  tracking/
    events/
      comment-events.md
```

## Output Convention

Generated outputs should go to:

```text
docs/output/
```

Recommended files:
- `prd.md`
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`

## Adoption Advice

If your company already has a different document layout:
- do not migrate everything immediately
- create a thin `baseline/` layer with links, copies, or exports
- keep the baseline layer stable even if upstream systems differ

## Starter Template

This skill package includes a ready-to-fill starter workspace:

```text
product-requirement-foundry/starter/
```

Start from [starter/STARTER_USAGE.md](./starter/STARTER_USAGE.md), then fill:

- `starter/baseline/request/request.md`
- `starter/baseline/request/request.yaml`
- the matching historical source folders under `starter/baseline/`
