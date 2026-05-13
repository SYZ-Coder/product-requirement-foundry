# 基线输入指南

本文档用于告诉团队：在使用 `product-requirement-foundry` 之前，应该如何准备历史资料和一句话需求。

## 目标

这个技能包最适合的使用方式，是不要把新需求当成孤立想法处理。

在生成需求之前，团队应该提供：

- 一句话需求
- 目标产品或项目名称
- 最相关的历史资料
- 已知的业务约束或技术约束

## 需要准备什么

### 1. 最小可用输入

最小可用输入至少包括：

- `request.md`
  - 一句话需求
  - 产品名称
  - 目标平台
  - 期望输出类型
- 至少一个历史来源
  - 历史 PRD，或
  - OpenSpec spec，或
  - wiki 分析文档，或
  - 项目知识资产

### 2. 推荐产品上下文

如果有条件，建议补充：

- 产品概览
- 模块概览
- 页面地图
- 版本发布记录
- API 概览
- 数据模型概览
- 埋点事件概览

### 3. 高可信 1->n 历史资料包

如果希望生成高可信的 `1->n` 增量需求，建议准备：

- 历史 PRD
- OpenSpec 产物
- wiki 分析文档
- 设计文档
- API 文档
- 埋点文档
- 发布记录或变更日志
- 术语表或领域语言文档

## 支持的来源类型

### OpenSpec

推荐输入：

- `specs/*.md`
- proposal 文档
- task 文档
- change 记录

最适合用于：

- 需求来源追踪
- 历史范围决策
- 显式变更意图

### Wiki 分析

推荐输入：

- 模块概览文档
- 流程文档
- 页面结构文档
- 架构说明

最适合用于：

- 理解当前状态
- 识别模块边界
- 理解产品结构

### 知识资产

推荐输入：

- codebase knowledge wiki 类工具产物
- 项目分析摘要
- 领域模型文档
- 能力清单

最适合用于：

- 建立贴近实现的需求基线
- 将产品概念映射到真实模块

### 企业知识库

推荐输入：

- 内部文档导出
- 需求评审记录
- SOP
- 决策记录

最适合用于：

- 业务约束
- 合规或流程规则
- 组织内部专用术语

## 如何投喂一句话需求

最清晰的方式是准备一个简短的需求入口文件。

示例：

```yaml
project:
  name: social-app
  domain: social
  platforms: [ios, android, web]

request:
  one_liner: prioritize comments from close connections on the feed detail page
  expected_output: prd_for_dev
  preferred_mode: auto

baseline_sources:
  - type: openspec
    path: baseline/openspec/
  - type: wiki
    path: baseline/wiki/
  - type: knowledge_wiki
    path: baseline/knowledge/
  - type: prd
    path: baseline/prd/
  - type: api
    path: baseline/api/
  - type: tracking
    path: baseline/tracking/

constraints:
  must_reference_history: true
  preserve_terminology: true
  output_language: zh-CN
```

## 如何选择基线深度

### 0->1

最低要求：

- 需求入口
- 产品概览
- 领域说明

推荐补充：

- 市场说明
- 相关旧模块
- 团队技术约束

### 1->n

最低要求：

- 需求入口
- 一个历史功能文档
- 一个当前状态文档

推荐补充：

- 历史 PRD 或 spec
- 当前 wiki 或知识资产
- API 或数据文档
- 埋点文档
- 发布记录或线上行为说明

## 来源优先级

当多个文件互相冲突时，按以下优先级处理：

1. 已审批且最新的产品或架构文档
2. 最新的当前状态 wiki 或项目分析文档
3. 最新的 OpenSpec change 或已审批 spec
4. 历史 PRD
5. 推断型知识资产
6. AI 推断

如果冲突仍无法解决：

- 保留两种观点
- 在 `open-questions.md` 中标记问题

## 运行技能包前的团队检查清单

- [ ] 一句话需求已经写清楚
- [ ] 已标明产品或项目
- [ ] 已提供历史来源路径
- [ ] `1->n` 需求包含当前状态来源
- [ ] 如果产品有领域语言，已提供术语来源
- [ ] 缺失信息是可接受的，或已明确列出

## 基线扫描器

将文档放到 `baseline/` 后，可以生成归一化基线产物：

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js <workspace-dir>
```

扫描器会写入：

- `docs/output/baseline-summary.md`
- `docs/output/feature-inventory.json`
- `docs/output/historical-requirements.json`
- `docs/output/known-constraints.json`
- `docs/output/glossary.json`

在生成最终 PRD 前，建议先检查这些文件。它们是保守的历史信号，不替代人工确认过的产品事实。

## 常见投喂错误

- 只给新需求，不给任何历史来源
- 只给旧 PRD，不给当前状态文档
- 草稿和已审批文档混在一起但没有标注
- 增量需求缺少页面、API 或埋点资料
- 期待技能包在没有证据的情况下推断线上真实行为
