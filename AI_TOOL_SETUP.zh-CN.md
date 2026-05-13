# AI 工具安装与使用

本文档说明如何让 `product-requirement-foundry` 适配并运行在以下 AI 开发工具中：

- Codex
- Cursor
- GitHub Copilot
- Claude Code

同时覆盖：

- macOS
- Windows
- Linux

## 已加入的适配文件

当前仓库已经补好了这些工具入口文件：

- `AGENTS.md`
- `CLAUDE.md`
- `.cursor/rules/product-requirement-foundry.mdc`
- `.github/copilot-instructions.md`

## 通用最低要求

- Git
- Node.js 18+
- 已本地克隆本仓库
- 已准备一个工作区，例如 `examples/quickstart/`、`starter/` 或你自己的 `baseline/ + docs/output/`

## 1. Codex

OpenAI 官方文档说明 Codex CLI 支持 macOS、Windows、Linux：

```bash
npm i -g @openai/codex
codex
```

使用方式：在终端打开仓库或需求工作区，运行 `codex`，再让它先读取 `AGENTS.md`、`README.md` 和 `baseline/` 历史资料，然后在 `docs/output/` 下生成产物。

## 2. Cursor

桌面版：

- 从官方页面下载 macOS、Windows 或 Linux 版本

CLI / Agent：

```bash
curl https://cursor.com/install -fsS | bash
cursor-agent --version
```

使用方式：用 Cursor 打开仓库，让它加载 `.cursor/rules/product-requirement-foundry.mdc`，再基于 `baseline/` 生成结果。

## 3. GitHub Copilot

GitHub Copilot 适合在：

- VS Code
- JetBrains IDE

中使用。保留 `.github/copilot-instructions.md`，并让 Copilot Chat 或 Agent 先读 `baseline/`，再写 `docs/output/`。

## 4. Claude Code

Anthropic 官方文档说明 Claude Code 支持 macOS、Linux，以及 Windows + WSL / Git Bash。

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

使用方式：在仓库或需求工作区中运行 `claude`，Claude Code 会读取 `CLAUDE.md` 作为项目记忆。

## 推荐的跨平台工作流

1. 从 `examples/quickstart/` 开始体验，或从 `starter/` 创建空白工作区。
2. 把历史资料放入 `baseline/`。
3. 运行：

```bash
node scripts/baseline-scan.js <workspace-dir>
```

4. 让 AI 工具在 `docs/output/` 下生成 Product Requirement Foundry 包。
5. 再运行：

```bash
node scripts/confidence-score.js <workspace-dir>
```

## 官方参考链接

- OpenAI Codex CLI：<https://developers.openai.com/codex/cli>
- OpenAI Codex 计划说明：<https://help.openai.com/en/articles/11369540>
- Cursor Rules：<https://docs.cursor.com/context/rules>
- Cursor 下载：<https://cursor.com/download>
- Cursor CLI 安装：<https://docs.cursor.com/en/cli/installation>
- GitHub Copilot 自定义指令：<https://docs.github.com/en/copilot/how-tos/custom-instructions/adding-repository-custom-instructions-for-github-copilot?tool=vscode>
- GitHub Copilot 安装：<https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-extension?tool=vscode>
- Claude Code 安装：<https://docs.anthropic.com/en/docs/claude-code/getting-started>
- Claude Code 记忆文件：<https://docs.anthropic.com/en/docs/claude-code/memory>

## 提示词模板

已提供可直接复制的标准提示词：

- [prompts/tool-prompts/README.md](./prompts/tool-prompts/README.md)
- [Codex 提示词](./prompts/tool-prompts/codex-prompt.md)
- [Cursor 提示词](./prompts/tool-prompts/cursor-prompt.md)
- [GitHub Copilot 提示词](./prompts/tool-prompts/copilot-prompt.md)
- [Claude Code 提示词](./prompts/tool-prompts/claude-code-prompt.md)
