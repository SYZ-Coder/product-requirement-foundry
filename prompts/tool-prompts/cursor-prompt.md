# Cursor Prompt Template

Use the current repository rules from:

- `.cursor/rules/product-requirement-foundry.mdc`
- `AGENTS.md`

The requirement workspace is:

`<workspace-dir>`

Please do the following:

1. Read `baseline/request/` first.
2. Read relevant historical files under `baseline/`.
3. Treat existing product requests as incremental unless clearly greenfield.
4. Generate the Product Requirement Foundry package under `docs/output/`.
5. Keep facts and assumptions separate.
6. Keep compatibility, fallback, rollout, rollback, and tracking implications explicit.

Expected output:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`
- `docs/output/confidence-report.md`

If implementation handoff is requested, also produce `docs/output/openspec/`.
