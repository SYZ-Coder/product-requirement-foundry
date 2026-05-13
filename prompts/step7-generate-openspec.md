# Step 7: Generate OpenSpec Package

Use this step after generating and reviewing the Product Requirement Foundry package.

## Inputs

- `prd.md`
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`

## Outputs

Generate:

- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

## Rules

- Preserve historical context from `baseline-references.md`.
- For online `1->n` changes, prefer `MODIFIED Requirements` in the spec.
- Use `ADDED Requirements` only for truly new capabilities.
- Include compatibility and rollback details for online products.
- Carry unresolved questions into proposal and tasks.
- Do not hide assumptions; mark them explicitly.
