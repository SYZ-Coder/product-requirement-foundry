# Product Requirement Foundry for Claude Code

This repository provides project memory for Claude Code.

Use it to generate requirement packages that are:

- history-compatible
- baseline-aware
- OpenSpec-ready
- reviewable by product and engineering

## Read First

- `AGENTS.md`
- `SKILL.md`
- `README.md`
- `README.zh-CN.md`

## Claude Code Workflow

1. Read `baseline/request/` for the one-line request and request metadata.
2. Read `baseline/` historical sources before drafting output.
3. Treat existing product requests as `1->n` unless there is strong evidence they are greenfield.
4. Write outputs under `docs/output/`.
5. Preserve compatibility, fallback, rollout, rollback, and tracking considerations.
