# Product Requirement Foundry Agent Instructions

Use this repository as a requirement-generation workflow, not as a generic writing prompt.

## Core Mission

Turn a one-line product request into a development-ready requirement package that stays aligned with:

- historical requirements
- online behavior
- project knowledge assets
- stable terminology
- engineering and rollout constraints

## Default Workflow

1. Read the request under `baseline/request/`.
2. Read historical sources under `baseline/`.
3. Inspect baseline outputs under `docs/output/` if they already exist.
4. Decide whether the request is `0->1` or `1->n`.
5. Generate or update the Product Requirement Foundry package under `docs/output/`.
6. If AI development handoff is needed, generate the OpenSpec package under `docs/output/openspec/`.
7. Run or prepare the confidence review.

## Non-Negotiable Rules

- Baseline first. Do not write the final requirement before reading historical context.
- Treat `1->n` as incremental by default when an existing product, module, page, API, or workflow is involved.
- Separate source-backed facts from assumptions.
- Preserve existing terminology unless there is an explicit reason to change it.
- Preserve online compatibility, fallback behavior, rollout, rollback, and tracking implications.
- Do not rewrite an incremental feature as if it were a brand-new greenfield product.
