# 开发者快速上手

这是技术人员体验 `product-requirement-foundry` 的最短路径。

## 1. 准备环境

需要：

- Git
- Node.js 18+
- 任意一种 AI 开发工具：Codex、Cursor、GitHub Copilot、Claude Code

克隆仓库：

```bash
git clone <your-repo-url>
cd product-requirement-foundry
```

先确认仓库能正常运行：

```bash
npm test
```

## 2. 创建工作区

初始化一个空白需求工作区：

```bash
node scripts/cli.js init ./tmp/demo-workspace
```

会生成：

```text
./tmp/demo-workspace/
  baseline/
  docs/output/
```

## 3. 放入最小输入

至少准备这些内容：

- `baseline/request/request.md`
- `baseline/request/request.yaml`
- `baseline/wiki/modules/`
- `baseline/prd/history/`

如果只是先体验，也可以直接从这些目录开始：

- `examples/quickstart/`
- `starter/`

## 4. 扫描历史基线

```bash
node scripts/baseline-scan.js ./tmp/demo-workspace
```

这一步会生成：

- `baseline-summary.md`
- `feature-inventory.json`

## 5. 让 AI 工具生成产物

可以直接把下面这段话发给 AI 工具：

```text
Use product-requirement-foundry in this repository.
Read the workspace at ./tmp/demo-workspace.
Read baseline/ first.
Generate PRD, OpenSpec artifacts, and a confidence report under docs/output/.
Do not ignore historical files.
```

## 6. 运行可信度评分

```bash
node scripts/confidence-score.js ./tmp/demo-workspace
```

重点看这些结果：

- `docs/output/prd.md`
- `docs/output/openspec/spec.md`
- `docs/output/confidence-report.md`

## 7. 各工具入口

- Codex：`AGENTS.md`
- Claude Code：`CLAUDE.md`
- Cursor：`.cursor/rules/product-requirement-foundry.mdc`
- GitHub Copilot：`.github/copilot-instructions.md`

## 下一步

如果你要完整接入团队流程，请继续看：

- [DEVELOPER_GUIDE.zh-CN.md](./DEVELOPER_GUIDE.zh-CN.md)
- [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)
