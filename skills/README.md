# Skills Directory

This folder exposes the installable skills in `product-requirement-foundry`.

## Which Skill To Install

Install `product-requirement-foundry` when you want one broad entry point for the full workflow:

- baseline loading
- PRD generation
- OpenSpec handoff
- confidence review

Install narrower skills when you only want one stage:

- `prd-baseline-scan`: load and normalize historical context
- `prd-generate`: generate or update the PRD package
- `openspec-handoff`: convert reviewed outputs into OpenSpec artifacts
- `confidence-review`: review readiness, traceability, and evidence coverage

## Recommended Install Sets

Simplest:

- `skills/product-requirement-foundry`

Composable:

- `skills/product-requirement-foundry`
- `skills/prd-baseline-scan`
- `skills/prd-generate`
- `skills/openspec-handoff`
- `skills/confidence-review`

Lean incremental-only setup:

- `skills/prd-baseline-scan`
- `skills/prd-generate`
- `skills/confidence-review`

## Notes

- The repo root also contains a top-level [SKILL.md](../SKILL.md) for tools that expect a single root skill.
- If your installer supports path-based installation, prefer installing the specific subdirectory you want.
- For the Chinese version of this page, see [README.zh-CN.md](./README.zh-CN.md).
- For overall workflow details, see [README.md](../README.md) and [README.zh-CN.md](../README.zh-CN.md).
