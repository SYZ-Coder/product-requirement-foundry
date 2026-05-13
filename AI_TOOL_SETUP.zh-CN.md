# AI 工具安装与使用

本文档说明如何让 `product-requirement-foundry` 运行在以下 AI 开发工具中：

- Codex
- Cursor
- GitHub Copilot
- Claude Code

同时覆盖：

- macOS
- Windows
- Linux

## 已包含的适配文件

当前仓库已经内置这些工具入口：

- `AGENTS.md`
- `CLAUDE.md`
- `.cursor/rules/product-requirement-foundry.mdc`
- `.github/copilot-instructions.md`

## 通用最低要求

- Git
- Node.js 18+
- 本地克隆本仓库
- 一个准备好的工作区，例如 `examples/quickstart/`、`starter/`，或者你自己的 `baseline/ + docs/output/`

## 1. Codex

OpenAI 官方提供适用于 macOS、Windows、Linux 的 Codex CLI：

```bash
npm i -g @openai/codex
codex
```

使用方式：打开本仓库或需求工作区，然后让 Codex 先读取 `AGENTS.md`、`README.md` 和 `baseline/` 历史资料，再在 `docs/output/` 下生成产物。

## 2. Cursor

桌面端：

- 从 Cursor 官方下载 macOS、Windows 或 Linux 版本

CLI / Agent：

```bash
curl https://cursor.com/install -fsS | bash
cursor-agent --version
```

使用方式：用 Cursor 打开仓库，让它加载 `.cursor/rules/product-requirement-foundry.mdc`。

## 3. GitHub Copilot

GitHub Copilot 适合运行在：

- VS Code
- JetBrains IDE

保持 `.github/copilot-instructions.md` 在仓库中，然后让 Copilot Chat 或 Agent 先读取 `baseline/`，再把结果写入 `docs/output/`。

## 4. Claude Code

Anthropic 官方说明 Claude Code 支持 macOS、Linux，以及 Windows + WSL / Git Bash。

标准安装：

```bash
npm install -g @anthropic-ai/claude-code
claude
```

可选原生安装：

macOS / Linux / WSL：

```bash
curl -fsSL claude.ai/install.sh | bash
```

Windows PowerShell：

```powershell
irm https://claude.ai/install.ps1 | iex
```

使用方式：在仓库目录运行 `claude`。Claude Code 会读取 `CLAUDE.md` 作为项目记忆入口。

## 推荐的跨平台工作流

1. 先从 `examples/quickstart/` 体验，或者从 `starter/` 创建空白工作区。
2. 把历史资料放入 `baseline/`。
3. 运行：

```bash
node scripts/baseline-scan.js <workspace-dir>
```

4. 让 AI 工具在 `docs/output/` 下生成 Product Requirement Foundry 产物。
5. 再运行：

```bash
node scripts/confidence-score.js <workspace-dir>
```

## 官方参考链接

- OpenAI Codex CLI: <https://developers.openai.com/codex/cli>
- OpenAI Codex overview / plans: <https://help.openai.com/en/articles/11369540>
- Cursor rules: <https://docs.cursor.com/context/rules>
- Cursor download: <https://cursor.com/download>
- Cursor CLI installation: <https://docs.cursor.com/en/cli/installation>
- GitHub Copilot custom instructions: <https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot?tool=vscode>
- GitHub Copilot install: <https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=vscode>
- Claude Code getting started: <https://docs.anthropic.com/en/docs/claude-code/getting-started>
- Claude Code memory: <https://docs.anthropic.com/en/docs/claude-code/memory>

## 提示词模板

已经提供可直接复制的标准提示词：

- [prompts/tool-prompts/README.md](./prompts/tool-prompts/README.md)
- [Codex 提示词](./prompts/tool-prompts/codex-prompt.md)
- [Cursor 提示词](./prompts/tool-prompts/cursor-prompt.md)
- [GitHub Copilot 提示词](./prompts/tool-prompts/copilot-prompt.md)
- [Claude Code 提示词](./prompts/tool-prompts/claude-code-prompt.md)

## 开发者文档

如果你希望按技术人员最短路径接入，请先看：

- [DEVELOPER_QUICKSTART.zh-CN.md](./DEVELOPER_QUICKSTART.zh-CN.md)
- [DEVELOPER_GUIDE.zh-CN.md](./DEVELOPER_GUIDE.zh-CN.md)
