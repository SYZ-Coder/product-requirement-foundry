# 快速上手

这是给产品经理准备的最短上手示例，用来快速理解 `product-requirement-foundry` 的实际使用方式。

目标链路：

```text
一句话需求
-> 基线扫描
-> 基于历史的 PRD 包
-> OpenSpec 交付包
-> 可信度报告
```

预计耗时：

- `5 分钟` 跑完基线扫描并准备好 AI 提示词
- `10 到 20 分钟` 审阅 AI 生成的 PRD 和 OpenSpec 产物

## 场景

产品：

- 社交 App

需求：

- 在动态详情页优先展示熟人评论

模式：

- `1->n` 增量需求

这个 quickstart 已经内置了：

- 一句话需求
- 一份历史 PRD
- 一份当前状态 wiki
- 一份埋点说明
- 一份术语表
- 一套示例 PRD 产物
- 一套示例 OpenSpec 产物
- 一份示例可信度报告

## 目录结构

```text
examples/quickstart/
  baseline/
    request/
      request.md
      request.yaml
    prd/
      history/
    wiki/
      modules/
    tracking/
      events/
    glossary/
  docs/
    output/
  AI_PROMPT.md
```

## 5 分钟流程

1. 进入 quickstart 目录。

```bash
cd <product-requirement-foundry-root>/examples/quickstart
```

2. 运行基线扫描。

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js .
```

3. 打开 [AI_PROMPT.md](./AI_PROMPT.md)，把里面的提示词发给你的 AI 工具。

4. 让 AI 在 `docs/output/` 下生成这些文件：

- `prd.md`
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`
- `openspec/proposal.md`
- `openspec/design.md`
- `openspec/spec.md`
- `openspec/tasks.md`
- `openspec/dev-context.md`

5. 生成完成后，再运行可信度评分。

```bash
node <product-requirement-foundry-root>/scripts/confidence-score.js .
```

6. 重点查看：

- `docs/output/prd.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/confidence-report.md`
- [RESULT_OVERVIEW.md](./RESULT_OVERVIEW.md)

## 你会看到什么

基线扫描后，应该先出现：

- `docs/output/baseline-summary.md`
- `docs/output/feature-inventory.json`
- `docs/output/historical-requirements.json`
- `docs/output/known-constraints.json`
- `docs/output/glossary.json`

AI 生成并评分后，还会出现：

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/consistency-review.md`
- `docs/output/confidence-report.md`
- `docs/output/confidence-score.json`
- `docs/output/openspec/`

这个示例已经预置了一套演示输出，所以你在真正让 AI 生成之前，就可以先看到标准结果大概长什么样。

## 这个示例会教会你什么

- 如何准备 `1->n` 的最小可用历史基线
- 如何让新需求不脱离旧功能和线上行为
- 如何把结果交给 OpenSpec / AI 开发
- 如何判断这份需求交付包是否可信

## 下一步

跑完这个 quickstart 后，可以继续看：

- [examples/social-incremental](../social-incremental)
- [examples/social-comment-priority-full](../social-comment-priority-full)
- [starter/STARTER_USAGE.md](../../starter/STARTER_USAGE.md)
