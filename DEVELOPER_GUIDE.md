# Developer Guide

This guide is for engineers who want to install, configure, and use `product-requirement-foundry` in daily work.

Chinese version: [DEVELOPER_GUIDE.zh-CN.md](./DEVELOPER_GUIDE.zh-CN.md)

## What This Repository Is

`product-requirement-foundry` is not just a prompt pack. It is a requirement delivery workflow for turning a short request into:

- a history-compatible PRD
- OpenSpec handoff artifacts
- a confidence report

It is most useful when your team already has historical assets such as PRDs, wiki pages, OpenSpec docs, API docs, tracking docs, or project knowledge outputs.

## Minimum Requirements

- Git
- Node.js 18+
- a local clone of this repository
- an AI tool: Codex, Cursor, GitHub Copilot, or Claude Code

## Install

Clone the repository:

```bash
git clone <your-repo-url>
cd product-requirement-foundry
```

Validate the repository:

```bash
npm test
```

There is no extra dependency installation step in the current version.

## Install As Skills

This repository can also be consumed as a skill library.

Recommended install options:

- install the root skill when you want one broad entry point
- install one or more paths under `skills/` when you want narrower triggers

Recommended skill paths:

- `skills/product-requirement-foundry`
- `skills/prd-baseline-scan`
- `skills/prd-generate`
- `skills/openspec-handoff`
- `skills/confidence-review`

Practical rule:

- choose the root skill for end-to-end requirement generation
- choose sub-skills when you want more precise installation and triggering

## Claude Code Skill Pack

To keep Claude Code closer to the Codex skill layout, this repository also includes a parallel `claude-skills/` directory.

Recommended Claude skill paths:

- `claude-skills/product-requirement-foundry`
- `claude-skills/prd-baseline-scan`
- `claude-skills/prd-generate`
- `claude-skills/openspec-handoff`
- `claude-skills/confidence-review`

Install them by copying the desired subdirectories into `~/.claude/skills/`.

To keep the Codex and Claude skill packs aligned, edit `scripts/skill-pack-definitions.js` and run:

```bash
npm run build:skills
```

## Repository Entry Points

- Main overview: [README.md](./README.md)
- Skill library entrypoints: [SKILL.md](./SKILL.md) and [skills/](./skills)
- Claude skill-pack entrypoints: [CLAUDE.md](./CLAUDE.md) and [claude-skills/](./claude-skills)
- Marketplace metadata: [.agents/plugins/marketplace.json](./.agents/plugins/marketplace.json)
- Tool setup: [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)
- Product-manager workflow: [PRODUCT_MANAGER_GUIDE.md](./PRODUCT_MANAGER_GUIDE.md)
- Prompt templates: [prompts/tool-prompts/README.md](./prompts/tool-prompts/README.md)
- Starter workspace: [starter/STARTER_USAGE.md](./starter/STARTER_USAGE.md)

## Core Commands

Initialize a workspace:

```bash
node scripts/cli.js init <workspace-dir>
```

Run baseline scan:

```bash
node scripts/baseline-scan.js <workspace-dir>
```

Run confidence scoring:

```bash
node scripts/confidence-score.js <workspace-dir>
```

Run tests:

```bash
npm test
```

## Recommended Directory Flow

Use one requirement workspace per request.

Input folders:

```text
baseline/request/
baseline/prd/history/
baseline/wiki/modules/
baseline/openspec/specs/
baseline/knowledge/
baseline/api/interfaces/
baseline/tracking/events/
baseline/glossary/
```

Output folder:

```text
docs/output/
```

## Standard Engineer Workflow

1. Create a workspace with `node scripts/cli.js init <workspace-dir>`.
2. Put historical materials into `baseline/`.
3. Run `node scripts/baseline-scan.js <workspace-dir>`.
4. Ask the AI tool to read the workspace and generate outputs under `docs/output/`.
5. Run `node scripts/confidence-score.js <workspace-dir>`.
6. Review `prd.md`, `openspec/`, and `confidence-report.md`.

## What Engineers Usually Review

- whether the current-state description matches online behavior
- whether the impact scope is complete
- whether compatibility and rollback rules are explicit
- whether OpenSpec tasks are executable
- whether the confidence report has evidence gaps

## AI Tool Configuration

Tool-specific repository entrypoints:

- Codex: [AGENTS.md](./AGENTS.md)
- Claude Code: [CLAUDE.md](./CLAUDE.md)
- Cursor: [.cursor/rules/product-requirement-foundry.mdc](./.cursor/rules/product-requirement-foundry.mdc)
- GitHub Copilot: [.github/copilot-instructions.md](./.github/copilot-instructions.md)

For full cross-platform setup:

- [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)

For ready-to-copy prompts:

- [prompts/tool-prompts/README.md](./prompts/tool-prompts/README.md)

## Cross-Platform Notes

macOS:

- install Node.js 18+
- use Terminal or iTerm

Windows:

- install Node.js 18+
- use PowerShell, Git Bash, or WSL

Linux:

- install Node.js 18+
- use your standard shell environment

The repository commands are plain Node scripts, so the workflow is the same across platforms.

## Suggested First Run

If you want the easiest first experience:

1. read [DEVELOPER_QUICKSTART.md](./DEVELOPER_QUICKSTART.md)
2. try [examples/quickstart](./examples/quickstart)
3. then move to your own baseline workspace

## Common Mistakes

- generating PRD before loading historical materials
- putting request files together with historical sources without clear structure
- treating confidence score as a replacement for human review
- using AI outputs directly without checking current online behavior

## Team Adoption Advice

- start with one live incremental request
- keep one shared baseline layout convention
- review `confidence-report.md` in PRD review meetings
- use OpenSpec outputs as AI development context, not just as archive files
