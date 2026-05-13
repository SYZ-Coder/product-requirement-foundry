# 开发者指南

这份文档面向技术人员，重点说明如何安装、配置并在日常研发中使用 `product-requirement-foundry`。

## 这是什么

`product-requirement-foundry` 不是单纯的提示词集合，而是一套把一句话需求转换为以下交付物的工作流：

- 兼容历史功能的 PRD
- OpenSpec 交付包
- 可信度报告

当团队已经有历史 PRD、wiki、OpenSpec、API 文档、埋点文档或项目知识库时，它的价值会更明显。

## 最低要求

- Git
- Node.js 18+
- 本地克隆本仓库
- 一种 AI 开发工具：Codex、Cursor、GitHub Copilot、Claude Code

## 安装

克隆仓库：

```bash
git clone <your-repo-url>
cd product-requirement-foundry
```

先验证仓库：

```bash
npm test
```

当前版本不需要额外安装依赖。

## 仓库主要入口

- 总览说明：[README.zh-CN.md](./README.zh-CN.md)
- 工具安装与适配：[AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)
- 产品经理使用说明：[PRODUCT_MANAGER_GUIDE.zh-CN.md](./PRODUCT_MANAGER_GUIDE.zh-CN.md)
- 提示词模板：[prompts/tool-prompts/README.zh-CN.md](./prompts/tool-prompts/README.zh-CN.md)
- 工作区骨架说明：[starter/STARTER_USAGE.md](./starter/STARTER_USAGE.md)

## 核心命令

初始化工作区：

```bash
node scripts/cli.js init <workspace-dir>
```

执行基线扫描：

```bash
node scripts/baseline-scan.js <workspace-dir>
```

执行可信度评分：

```bash
node scripts/confidence-score.js <workspace-dir>
```

执行测试：

```bash
npm test
```

## 推荐目录流转

建议每个需求单独使用一个工作区。

输入目录：

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

输出目录：

```text
docs/output/
```

## 标准研发使用流程

1. 用 `node scripts/cli.js init <workspace-dir>` 初始化工作区。
2. 把历史资料放进 `baseline/`。
3. 运行 `node scripts/baseline-scan.js <workspace-dir>`。
4. 让 AI 工具读取工作区，并在 `docs/output/` 下生成结果。
5. 运行 `node scripts/confidence-score.js <workspace-dir>`。
6. 评审 `prd.md`、`openspec/` 和 `confidence-report.md`。

## 技术人员重点关注什么

- 当前状态描述是否符合线上行为
- 影响范围是否完整
- 兼容策略和回滚策略是否明确
- OpenSpec tasks 是否可执行
- 可信度报告是否还有证据缺口

## AI 工具如何接入

各工具入口文件：

- Codex：[AGENTS.md](./AGENTS.md)
- Claude Code：[CLAUDE.md](./CLAUDE.md)
- Cursor：[.cursor/rules/product-requirement-foundry.mdc](./.cursor/rules/product-requirement-foundry.mdc)
- GitHub Copilot：[.github/copilot-instructions.md](./.github/copilot-instructions.md)

跨平台完整安装说明：

- [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)

可直接复制的提示词：

- [prompts/tool-prompts/README.zh-CN.md](./prompts/tool-prompts/README.zh-CN.md)

## 跨平台说明

macOS：

- 安装 Node.js 18+
- 使用 Terminal 或 iTerm

Windows：

- 安装 Node.js 18+
- 使用 PowerShell、Git Bash 或 WSL

Linux：

- 安装 Node.js 18+
- 使用常规 shell 环境

因为仓库命令本质上都是 Node 脚本，所以三端流程基本一致。

## 建议第一次怎么跑

如果你想先快速体验：

1. 先看 [DEVELOPER_QUICKSTART.zh-CN.md](./DEVELOPER_QUICKSTART.zh-CN.md)
2. 再跑 [examples/quickstart](./examples/quickstart)
3. 最后换成你们自己的 baseline 工作区

## 常见错误

- 没有先喂历史资料就直接生成 PRD
- request 文件和历史资料混放，结构不清晰
- 把可信度评分当成完全替代人工评审
- 不核对线上现状就直接采用 AI 生成结果

## 团队落地建议

- 先从一个真实的增量需求开始试点
- 固定一套共享 baseline 目录规范
- 在 PRD 评审会中一起看 `confidence-report.md`
- 把 OpenSpec 产物真正作为 AI 开发上下文，而不只是归档文件
