# Product Manager Guide

This guide is written for product managers who want to use `product-requirement-foundry` without first learning the full repository structure.

If you only want the fastest starting point, read [PRODUCT_MANAGER_QUICKSTART.md](./PRODUCT_MANAGER_QUICKSTART.md) first.

Goal:

```text
one-line request
-> baseline scan
-> PRD package
-> OpenSpec handoff
-> confidence review
```

## What This Tool Does

`product-requirement-foundry` helps you turn a short product idea into a development-ready requirement package while staying aligned with:

- historical product behavior
- existing online functionality
- approved terminology
- engineering constraints
- rollout and rollback expectations

It is especially useful for:

- `0->1` new products or modules
- `1->n` enhancements for products that are already online

## What You Need To Prepare

Minimum inputs:

- one-line request
- target product name
- at least one historical source

Recommended historical sources:

- historical PRD
- current-state wiki
- OpenSpec specs
- API docs
- tracking docs
- glossary

## 5-Minute Start

If you want the shortest PM-only entry first, read [PRODUCT_MANAGER_QUICKSTART.md](./PRODUCT_MANAGER_QUICKSTART.md).

If you just want to see the workflow once:

1. Open [examples/quickstart/README.md](./examples/quickstart/README.md)
2. Review the request in [examples/quickstart/baseline/request/request.md](./examples/quickstart/baseline/request/request.md)
3. Run baseline scan:

```bash
node scripts/baseline-scan.js examples/quickstart
```

4. Open the sample result files under:

- [examples/quickstart/docs/output/prd.md](./examples/quickstart/docs/output/prd.md)
- [examples/quickstart/docs/output/openspec/spec.md](./examples/quickstart/docs/output/openspec/spec.md)
- [examples/quickstart/docs/output/confidence-report.md](./examples/quickstart/docs/output/confidence-report.md)

That is the fastest way to understand what “good output” looks like.

## 30-Minute First Draft Workflow

Use this when you want your own first requirement package.

1. Create a workspace:

```bash
node scripts/cli.js init <workspace-dir>
```

2. Fill:

- `baseline/request/request.md`
- `baseline/request/request.yaml`

3. Add historical documents under matching `baseline/` folders.

4. Run:

```bash
node scripts/baseline-scan.js <workspace-dir>
```

5. Use one of these:

- [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)
- [prompts/tool-prompts/README.md](./prompts/tool-prompts/README.md)

6. Ask your AI tool to generate:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`

If development handoff is needed, also generate:

- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

7. Run:

```bash
node scripts/confidence-score.js <workspace-dir>
```

## How To Review The Result

As a product manager, focus on these files:

- `prd.md`
- `baseline-references.md`
- `open-questions.md`
- `confidence-report.md`

Ask these questions:

1. Does the requirement goal match what I actually want?
2. Does the current behavior section describe the online product correctly?
3. Are the non-goals explicit enough?
4. Does the delta section clearly describe what changes and what stays unchanged?
5. Are the references based on real historical sources rather than guesses?
6. Are there any open questions that block engineering?

## How To Read Confidence

The confidence report is not a promise that the requirement is perfect. It is a structured proof of how grounded the output is.

Focus on:

- `Overall Score`
- `Status`
- `Evidence Chain`
- `Compatibility Proof`
- `Evidence Gaps`

Interpretation:

- `Pass`
  The package is structurally ready for the next step.
- `Review Required`
  The package is usable, but product or engineering should confirm listed gaps.
- `Blocked`
  Do not proceed until missing context or major issues are resolved.

## Common Mistakes

- Giving only the new request and no historical documents
- Treating an online feature enhancement like a brand-new module
- Forgetting tracking and rollout implications
- Letting the AI rename existing concepts casually
- Accepting a high-level PRD without checking source traceability

## Recommended Reading Order

If you are new to the repository, read in this order:

1. [README.md](./README.md)
2. [examples/quickstart/README.md](./examples/quickstart/README.md)
3. [BASELINE_INPUT_GUIDE.md](./BASELINE_INPUT_GUIDE.md)
4. [REVIEW_GATES.md](./REVIEW_GATES.md)
5. [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)

## If Your Team Uses AI Coding Tools

Use the matching adapter and prompt templates:

- Codex: [AGENTS.md](./AGENTS.md)
- Claude Code: [CLAUDE.md](./CLAUDE.md)
- Cursor: [.cursor/rules/product-requirement-foundry.mdc](./.cursor/rules/product-requirement-foundry.mdc)
- GitHub Copilot: [.github/copilot-instructions.md](./.github/copilot-instructions.md)
- Prompt templates: [prompts/tool-prompts/README.md](./prompts/tool-prompts/README.md)
