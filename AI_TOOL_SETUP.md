# AI Tool Setup

This document explains how to use `product-requirement-foundry` with:

Chinese version: [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)

- Codex
- Cursor
- GitHub Copilot
- Claude Code

It also includes setup notes for macOS, Windows, and Linux.

## Adapter Files Included

This repository includes tool-specific instruction entrypoints:

- `AGENTS.md`
- `CLAUDE.md`
- `.cursor/rules/product-requirement-foundry.mdc`
- `.github/copilot-instructions.md`

## Shared Minimum Requirements

- Git
- Node.js 18+
- a local clone of this repository
- a prepared workspace such as `examples/quickstart/`, `starter/`, or your own `baseline/` + `docs/output/`

## 1. Codex

OpenAI documents the Codex CLI for macOS, Windows, and Linux:

```bash
npm i -g @openai/codex
codex
```

Use it by opening the repository or a requirement workspace, then asking Codex to read `AGENTS.md`, `README.md`, and your `baseline/` sources before generating output under `docs/output/`.

## 2. Cursor

Desktop app:

- download Cursor for macOS, Windows, or Linux from the official download page

CLI / Agent:

```bash
curl https://cursor.com/install -fsS | bash
cursor-agent --version
```

Use it by opening the repository in Cursor and letting it load `.cursor/rules/product-requirement-foundry.mdc`.

## 3. GitHub Copilot

Use GitHub Copilot inside:

- VS Code
- JetBrains IDEs

GitHub documents repository custom instructions and extension setup for supported IDEs. Keep `.github/copilot-instructions.md` in the repo and ask Copilot Chat or Agent to read `baseline/` first and write outputs under `docs/output/`.

## 4. Claude Code

Anthropic documents Claude Code for macOS, Linux, and Windows with WSL or Git Bash support.

Standard install:

```bash
npm install -g @anthropic-ai/claude-code
claude
```

Optional native install:

macOS / Linux / WSL:

```bash
curl -fsSL claude.ai/install.sh | bash
```

Windows PowerShell:

```powershell
irm https://claude.ai/install.ps1 | iex
```

Use it by opening a terminal in the repository and running `claude`. Claude Code reads `CLAUDE.md` as project memory.

If you prefer a more installable skill-pack shape, copy one or more directories from `claude-skills/` into `~/.claude/skills/`.

## Recommended Cross-Platform Workflow

1. Start from `examples/quickstart/` for a demo or `starter/` for a blank workspace.
2. Put historical sources into `baseline/`.
3. Run:

```bash
node scripts/baseline-scan.js <workspace-dir>
```

4. Ask the AI tool to generate the Product Requirement Foundry package under `docs/output/`.
5. Run:

```bash
node scripts/confidence-score.js <workspace-dir>
```

## Official References

- OpenAI Codex CLI: <https://developers.openai.com/codex/cli>
- OpenAI Codex overview / plans: <https://help.openai.com/en/articles/11369540>
- Cursor rules: <https://docs.cursor.com/context/rules>
- Cursor download: <https://cursor.com/download>
- Cursor CLI installation: <https://docs.cursor.com/en/cli/installation>
- GitHub Copilot custom instructions: <https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot?tool=vscode>
- GitHub Copilot install: <https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=vscode>
- Claude Code getting started: <https://docs.anthropic.com/en/docs/claude-code/getting-started>
- Claude Code memory: <https://docs.anthropic.com/en/docs/claude-code/memory>

## Prompt Templates

Ready-to-copy prompt templates are available under:

- [prompts/tool-prompts/README.md](./prompts/tool-prompts/README.md)
- [Codex prompt](./prompts/tool-prompts/codex-prompt.md)
- [Cursor prompt](./prompts/tool-prompts/cursor-prompt.md)
- [GitHub Copilot prompt](./prompts/tool-prompts/copilot-prompt.md)
- [Claude Code prompt](./prompts/tool-prompts/claude-code-prompt.md)

## Developer Docs

If you want the shortest engineer onboarding path:

- [DEVELOPER_QUICKSTART.md](./DEVELOPER_QUICKSTART.md)
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
