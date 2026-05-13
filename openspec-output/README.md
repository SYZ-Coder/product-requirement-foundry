# OpenSpec Output Adapter

This adapter turns a Product Requirement Foundry package into OpenSpec-ready artifacts.

Use it after the skill has generated:
- `prd.md`
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`

## Goal

The goal is to bridge product requirement generation and AI-assisted development.

Recommended flow:

```text
one-line request
-> Product Requirement Foundry package
-> OpenSpec proposal/spec/tasks
-> AI implementation
```

## Output Files

Recommended OpenSpec output package:

```text
docs/output/openspec/
  proposal.md
  design.md
  tasks.md
  spec.md
  dev-context.md
```

## Conversion Rules

1. Use `prd.md` as the requirement source of truth.
2. Use `baseline-references.md` to preserve historical context.
3. Use `impact-analysis.md` to define affected modules and risk.
4. Use `change-checklist.md` to produce implementation tasks.
5. Use `consistency-review.md` to block or flag risky assumptions.

## Recommended Mapping

| PRD package file | OpenSpec output |
|---|---|
| `prd.md` | `proposal.md`, `spec.md` |
| `impact-analysis.md` | `design.md`, `tasks.md` |
| `baseline-references.md` | `dev-context.md`, `proposal.md` |
| `change-checklist.md` | `tasks.md` |
| `open-questions.md` | `proposal.md`, `tasks.md` |
| `consistency-review.md` | `design.md`, `tasks.md` |

## Quality Gate

Before giving the OpenSpec package to AI development:

- no unresolved P0 open questions
- affected modules are listed
- affected APIs or data entities are listed, or explicitly marked as not applicable
- compatibility and rollback strategy are present for online products
- assumptions are marked
- historical references are included
