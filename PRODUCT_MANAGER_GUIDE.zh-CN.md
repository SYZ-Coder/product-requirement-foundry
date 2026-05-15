# 产品经理使用指南

这份指南是专门写给产品经理的。目标不是先让你理解整个仓库，而是让你尽快把一句话需求转成一份可交付研发和 AI 开发的需求包。

如果你只想先快速开始，建议先看 [PRODUCT_MANAGER_QUICKSTART.zh-CN.md](./PRODUCT_MANAGER_QUICKSTART.zh-CN.md)。

目标链路：

```text
一句话需求
-> 基线扫描
-> PRD 需求包
-> OpenSpec 交付包
-> 可信度审查
```

## 这个工具能帮你做什么

`product-requirement-foundry` 的作用，是在不脱离历史产品事实的前提下，把简短需求变成结构化交付物。

它会尽量保持这些内容不丢失：

- 历史产品行为
- 当前线上功能
- 既有术语
- 研发约束
- 灰度、回滚、埋点等交付要求

它特别适合：

- `0->1` 新产品、新模块
- `1->n` 已上线产品增量需求

## 你至少要准备什么

最低输入：

- 一句话需求
- 目标产品名
- 至少一份历史资料

推荐补充的历史资料：

- 历史 PRD
- 当前状态 wiki
- OpenSpec specs
- API 文档
- 埋点文档
- 术语表

## 5 分钟体验版

如果你想先看一份只面向产品经理的最短入口，可以先看 [PRODUCT_MANAGER_QUICKSTART.zh-CN.md](./PRODUCT_MANAGER_QUICKSTART.zh-CN.md)。

如果你只是想先感受一次流程：

1. 打开 [examples/quickstart/README.zh-CN.md](./examples/quickstart/README.zh-CN.md)
2. 看一下需求入口 [examples/quickstart/baseline/request/request.md](./examples/quickstart/baseline/request/request.md)
3. 运行基线扫描：

```bash
node scripts/baseline-scan.js examples/quickstart
```

4. 直接查看示例结果：

- [examples/quickstart/docs/output/prd.md](./examples/quickstart/docs/output/prd.md)
- [examples/quickstart/docs/output/openspec/spec.md](./examples/quickstart/docs/output/openspec/spec.md)
- [examples/quickstart/docs/output/confidence-report.md](./examples/quickstart/docs/output/confidence-report.md)

这是最快理解“最终成品大概长什么样”的方式。

## 30 分钟出第一版需求

如果你要做自己的第一版需求，按这条流程走：

1. 创建一个需求工作区：

```bash
node scripts/cli.js init <workspace-dir>
```

2. 填写：

- `baseline/request/request.md`
- `baseline/request/request.yaml`

3. 把历史文档放进对应的 `baseline/` 目录。

4. 运行：

```bash
node scripts/baseline-scan.js <workspace-dir>
```

5. 选择一个 AI 工具，并参考：

- [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)
- [prompts/tool-prompts/README.zh-CN.md](./prompts/tool-prompts/README.zh-CN.md)

6. 让 AI 生成：

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`

如果要继续交给 AI 或研发开发，再生成：

- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

7. 再运行：

```bash
node scripts/confidence-score.js <workspace-dir>
```

## 产品经理应该重点看什么

从产品视角，优先看这几个文件：

- `prd.md`
- `baseline-references.md`
- `open-questions.md`
- `confidence-report.md`

重点确认这几个问题：

1. 需求目标是不是我真正想要的？
2. 当前行为是不是准确描述了线上产品？
3. 非目标是不是写清楚了？
4. 差异描述是不是说明白了“改什么、不改什么”？
5. 关键结论是不是有历史依据，而不是 AI 猜的？
6. 还有没有阻塞研发的开放问题？

## 怎么看可信度

可信度报告不是“保证 100% 正确”，而是告诉你这份需求到底有多少历史依据和兼容性证明。

优先关注：

- `Overall Score`
- `Status`
- `Evidence Chain`
- `Compatibility Proof`
- `Evidence Gaps`

可以这样理解：

- `Pass`
  结构上已经可以进入下一步。
- `Review Required`
  可以用，但产品或研发需要确认里面列出的缺口。
- `Blocked`
  先不要继续推进，说明上下文或关键内容还不够。

## 常见错误

- 只给新需求，不给历史资料
- 把线上功能增强当成全新模块来写
- 忘了埋点、灰度、回滚
- 让 AI 随意改已有术语
- 看 PRD 只看文风，不看来源引用

## 新人推荐阅读顺序

如果你第一次接触这个仓库，建议按这个顺序看：

1. [README.zh-CN.md](./README.zh-CN.md)
2. [examples/quickstart/README.zh-CN.md](./examples/quickstart/README.zh-CN.md)
3. [BASELINE_INPUT_GUIDE.zh-CN.md](./BASELINE_INPUT_GUIDE.zh-CN.md)
4. [REVIEW_GATES.zh-CN.md](./REVIEW_GATES.zh-CN.md)
5. [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)

## 如果团队使用 AI 开发工具

可以直接配合这些适配入口使用：

- Codex: [AGENTS.md](./AGENTS.md)
- Claude Code: [CLAUDE.md](./CLAUDE.md)
- Cursor: [.cursor/rules/product-requirement-foundry.mdc](./.cursor/rules/product-requirement-foundry.mdc)
- GitHub Copilot: [.github/copilot-instructions.md](./.github/copilot-instructions.md)
- 提示词模板: [prompts/tool-prompts/README.zh-CN.md](./prompts/tool-prompts/README.zh-CN.md)
