Use `product-requirement-foundry` at `<product-requirement-foundry-root>`.

The prepared requirement workspace is:

`<product-requirement-foundry-root>/examples/quickstart`

Please do the following:

1. Read all files under `baseline/`.
2. Read generated baseline files under `docs/output/` if they already exist.
3. Treat this as a `1->n` incremental requirement for a live social app.
4. Do not ignore historical behavior, existing terminology, or tracking implications.
5. Generate a Product Requirement Foundry package under `docs/output/`.

Required files:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`
- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

Generation rules:

- separate source-backed facts from assumptions
- describe current behavior before target behavior
- explain compatibility with existing comment ordering behavior
- include affected modules, APIs, tracking, rollout, and rollback considerations
- keep terminology consistent with the baseline

After generating the files, make sure the package is ready for confidence scoring.
