# Starter Usage

Use this starter when creating a new requirement workspace for `product-requirement-foundry`.

## How to Use

1. Copy this `starter/` folder into the target project or requirement workspace.
2. Fill `baseline/request/request.md`.
3. Fill `baseline/request/request.yaml`.
4. Add historical materials into the matching `baseline/` folders.
5. Run the baseline scanner.
6. Run the skill against the prepared workspace.
7. Generate the confidence report.
8. Put generated outputs under `docs/output/`.

Scanner command:

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js .
```

Confidence command:

```bash
node <product-requirement-foundry-root>/scripts/confidence-score.js .
```

## Minimum Viable Setup

For a quick `0->1` request:
- fill `baseline/request/request.md`
- add one product or domain summary under `baseline/knowledge/summaries/`

For a reliable `1->n` request:
- fill `baseline/request/request.md`
- add at least one historical requirement under `baseline/prd/history/` or `baseline/openspec/specs/`
- add at least one current-state source under `baseline/wiki/` or `baseline/knowledge/`

## Recommended Output Files

- `docs/output/baseline-summary.md`
- `docs/output/feature-inventory.json`
- `docs/output/historical-requirements.json`
- `docs/output/known-constraints.json`
- `docs/output/glossary.json`
- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`
- `docs/output/confidence-report.md`
- `docs/output/confidence-score.json`
- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

## Before Generation

- confirm whether the request is likely `0->1` or `1->n`
- mark source document status when possible: `Draft`, `Approved`, `Current State`, `Historical`, or `Deprecated`
- keep assumptions in the request explicit
- expect an empty feature inventory until real historical documents are added outside `baseline/request/`
