# Developer Quickstart

This is the fastest way for an engineer to try `product-requirement-foundry`.

Chinese version: [DEVELOPER_QUICKSTART.zh-CN.md](./DEVELOPER_QUICKSTART.zh-CN.md)

## 1. Prepare

Requirements:

- Git
- Node.js 18+
- an AI tool such as Codex, Cursor, GitHub Copilot, or Claude Code

Clone the repository:

```bash
git clone <your-repo-url>
cd product-requirement-foundry
```

Check that the repository works:

```bash
npm test
```

## 2. Create a workspace

Create a blank requirement workspace:

```bash
node scripts/cli.js init ./tmp/demo-workspace
```

This creates:

```text
./tmp/demo-workspace/
  baseline/
  docs/output/
```

## 3. Add minimum inputs

Put files into:

- `baseline/request/request.md`
- `baseline/request/request.yaml`
- `baseline/wiki/modules/`
- `baseline/prd/history/`

If you are just trying the project, you can also start from:

- `examples/quickstart/`
- `starter/`

## 4. Run baseline scan

```bash
node scripts/baseline-scan.js ./tmp/demo-workspace
```

This generates normalized baseline artifacts such as:

- `baseline-summary.md`
- `feature-inventory.json`

## 5. Ask your AI tool to generate outputs

Tell the AI tool:

```text
Use product-requirement-foundry in this repository.
Read the workspace at ./tmp/demo-workspace.
Read baseline/ first.
Generate PRD, OpenSpec artifacts, and a confidence report under docs/output/.
Do not ignore historical files.
```

## 6. Run confidence scoring

```bash
node scripts/confidence-score.js ./tmp/demo-workspace
```

Check:

- `docs/output/prd.md`
- `docs/output/openspec/spec.md`
- `docs/output/confidence-report.md`

## 7. Tool-specific entrypoints

- Codex: `AGENTS.md`
- Claude Code: `CLAUDE.md`
- Cursor: `.cursor/rules/product-requirement-foundry.mdc`
- GitHub Copilot: `.github/copilot-instructions.md`

## Next

For full setup and team usage:

- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
- [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)
