# Claude Code Prompt Template

Use this repository as `product-requirement-foundry`.

Read project memory from:

- `CLAUDE.md`
- `AGENTS.md`

The requirement workspace is:

`<workspace-dir>`

Please do the following:

1. Read all files under `baseline/`.
2. Read generated baseline files under `docs/output/` if they already exist.
3. Determine whether the request is `0->1` or `1->n`.
4. Generate the Product Requirement Foundry package under `docs/output/`.
5. Preserve compatibility, fallback, rollout, rollback, and tracking implications.

Required outputs:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`
- `docs/output/confidence-report.md`

If OpenSpec handoff is required, also generate `docs/output/openspec/`.
