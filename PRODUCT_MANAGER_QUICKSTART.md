# Product Manager Quickstart

This is the shortest path for product managers who do not want to learn the repository structure first.

Chinese version: [PRODUCT_MANAGER_QUICKSTART.zh-CN.md](./PRODUCT_MANAGER_QUICKSTART.zh-CN.md)

## 3 Steps

1. Fill [pm-input.md](./starter/pm-input.md) first, or use the Chinese version [pm-input.zh-CN.md](./starter/pm-input.zh-CN.md) if your team prefers Chinese input.
2. Run `prepare` to convert `pm-input.md` into `baseline/request/request.md` and `request.yaml`.
3. Put your existing materials into `baseline/`, then ask the AI to inspect the files in this workspace and generate outputs under `docs/output/`.

## How To Run `prepare`

`prepare` is not just a concept. It means running a command.

Its job is to turn:

- `pm-input.md`
- or `pm-input.zh-CN.md`

into:

- `baseline/request/request.md`
- `baseline/request/request.yaml`

### Windows

If you are in PowerShell and already inside the workspace directory:

```powershell
node D:\spring_AI\product-requirement-foundry\scripts\prepare-pm-input.js .
```

If you are already in the repository root:

```powershell
node scripts\prepare-pm-input.js .\tmp\demo-workspace
```

### macOS

If you are already inside the workspace directory:

```bash
node /path/to/product-requirement-foundry/scripts/prepare-pm-input.js .
```

If you are already in the repository root:

```bash
node scripts/prepare-pm-input.js ./tmp/demo-workspace
```

### Linux

Linux is the same pattern as macOS:

```bash
node /path/to/product-requirement-foundry/scripts/prepare-pm-input.js .
```

or:

```bash
node scripts/prepare-pm-input.js ./tmp/demo-workspace
```

### What You Will See When It Works

You will usually see output like:

```text
Prepared request files from pm-input.md in <workspace>
```

That means `request.md` and `request.yaml` were generated successfully.

## What It Means To Let The AI Inspect The Workspace

Think of it like this:

- do not send only a one-line request to the AI
- ask the AI to first look at the request and historical materials in this folder
- then ask it to generate the PRD and analysis outputs from those files

There are 3 common ways to do this:

### Option 1: Ask a teammate who already uses AI tools

If someone on your team already uses Codex, Claude Code, Cursor, or Copilot, ask them to open this repository and tell the AI:

```text
Please first review pm-input.md, baseline/request/, and the historical materials under baseline/, then generate the requirement outputs under docs/output/.
```

### Option 2: Open the project yourself in an AI tool

If you already have this folder open in Cursor, Claude Code, or another AI IDE, you can say:

```text
Please first review pm-input.md and the historical materials under baseline/, then generate the requirement outputs under docs/output/.
```

### Option 3: Think of it as "let the AI inspect the folder before writing"

The important part is that the AI should first look at:

- `pm-input.md`
- `baseline/request/`
- the historical files under `baseline/`

and only then start generating the result.

## What To Read First In The Output

As a product manager, start with:

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/open-questions.md`
- `docs/output/confidence-report.md`

## Simple Mental Model

```text
one-line request
+ historical materials
-> structured PRD
-> impact summary
-> confidence review
```

## If You Want A Ready-Made Demo

- [examples/quickstart/README.md](./examples/quickstart/README.md)

## If Your Team Wants The Full Guide

- [PRODUCT_MANAGER_GUIDE.md](./PRODUCT_MANAGER_GUIDE.md)
- [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)
