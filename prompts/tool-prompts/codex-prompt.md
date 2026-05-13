# Codex Prompt Template

Use this repository as `product-requirement-foundry`.

Read these files first:

- `AGENTS.md`
- `README.md`
- `README.zh-CN.md` if Chinese output is preferred

The requirement workspace is:

`<workspace-dir>`

Please do the following:

1. Read all files under `baseline/`.
2. Read generated baseline files under `docs/output/` if they already exist.
3. Decide whether this request is `0->1` or `1->n`.
4. Generate or update the Product Requirement Foundry package under `docs/output/`.
5. Preserve historical behavior, terminology, fallback rules, rollout, rollback, and tracking implications.

Required files:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`
- `docs/output/confidence-report.md`

If AI development handoff is needed, also generate:

- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

Do not ignore historical baseline files.
