# Quickstart

This example is the fastest way for a product manager to understand how `product-requirement-foundry` works in practice.

Goal:

```text
one-line request
-> baseline scan
-> baseline-aware PRD package
-> OpenSpec handoff
-> confidence report
```

Estimated time:

- `5 minutes` to run the baseline scan and prepare the AI prompt
- `10 to 20 minutes` to review generated PRD and OpenSpec artifacts

## Scenario

Product:
- social app

Request:
- prioritize comments from close connections on the feed detail page

Mode:
- `1->n` incremental requirement

This quickstart already includes:

- a one-line request
- one historical PRD
- one current-state wiki note
- one tracking note
- one glossary
- a sample PRD package
- a sample OpenSpec package
- a sample confidence report

## Folder Layout

```text
examples/quickstart/
  baseline/
    request/
      request.md
      request.yaml
    prd/
      history/
    wiki/
      modules/
    tracking/
      events/
    glossary/
  docs/
    output/
  AI_PROMPT.md
```

## 5-Minute Flow

1. Change into the quickstart example.

```bash
cd <product-requirement-foundry-root>/examples/quickstart
```

2. Run the baseline scanner.

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js .
```

3. Open [AI_PROMPT.md](./AI_PROMPT.md) and use that prompt in your AI tool.

4. Ask the AI tool to generate these files under `docs/output/`:

- `prd.md`
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`
- `openspec/proposal.md`
- `openspec/design.md`
- `openspec/spec.md`
- `openspec/tasks.md`
- `openspec/dev-context.md`

5. After generation, run confidence scoring.

```bash
node <product-requirement-foundry-root>/scripts/confidence-score.js .
```

6. Review:

- `docs/output/prd.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/confidence-report.md`
- [RESULT_OVERVIEW.md](./RESULT_OVERVIEW.md)

## What To Expect

After the scan, you should see:

- `docs/output/baseline-summary.md`
- `docs/output/feature-inventory.json`
- `docs/output/historical-requirements.json`
- `docs/output/known-constraints.json`
- `docs/output/glossary.json`

After AI generation and scoring, you should also see:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/consistency-review.md`
- `docs/output/confidence-report.md`
- `docs/output/confidence-score.json`
- `docs/output/openspec/`

This example already ships with sample output files so you can inspect the expected result shape before generating your own version.

## What This Example Teaches

- how to prepare the minimum useful baseline for `1->n`
- how to keep a new requirement compatible with historical behavior
- how to hand the result to AI development through OpenSpec
- how to review whether the generated package is trustworthy

## Next Step

After finishing this quickstart, move to:

- [examples/social-incremental](../social-incremental)
- [examples/social-comment-priority-full](../social-comment-priority-full)
- [starter/STARTER_USAGE.md](../../starter/STARTER_USAGE.md)
