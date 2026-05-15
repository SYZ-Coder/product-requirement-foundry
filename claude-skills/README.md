# Claude Skills

This folder packages `product-requirement-foundry` as installable Claude Code-style skills.

## Install

Copy one or more subdirectories from this folder into `~/.claude/skills/`.

Recommended install set:

- `claude-skills/product-requirement-foundry`
- `claude-skills/prd-baseline-scan`
- `claude-skills/prd-generate`
- `claude-skills/openspec-handoff`
- `claude-skills/confidence-review`

## Which Skill To Install

Install `product-requirement-foundry` when you want one broad entry point for the full workflow.

Install narrower skills when you only want one stage:

- `prd-baseline-scan`
- `prd-generate`
- `openspec-handoff`
- `confidence-review`

## Notes

- [CLAUDE.md](../CLAUDE.md) remains the repo-local project memory entrypoint.
- These Claude skills are aligned with the Codex skills under [skills/](../skills/).
- Shared skill content is generated from `scripts/skill-pack-definitions.js`. Rebuild both packs with `npm run build:skills`.
- For general workflow details, see [README.md](../README.md) and [README.zh-CN.md](../README.zh-CN.md).
