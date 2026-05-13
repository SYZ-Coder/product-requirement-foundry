# GitHub Copilot Prompt Template

Use this repository as `product-requirement-foundry`.

Follow:

- `.github/copilot-instructions.md`
- `AGENTS.md`

The requirement workspace is:

`<workspace-dir>`

Please:

1. Read the request under `baseline/request/`.
2. Read historical PRD, wiki, OpenSpec, API, tracking, and glossary files under `baseline/`.
3. Decide whether the request is `0->1` or `1->n`.
4. Generate or update the Product Requirement Foundry package under `docs/output/`.
5. Preserve historical compatibility and current online behavior.

Required outputs:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`
- `docs/output/confidence-report.md`

If AI development handoff is needed, also generate `docs/output/openspec/`.
