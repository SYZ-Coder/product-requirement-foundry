# 基线目录规范

本文档定义了团队使用 `product-requirement-foundry` 时推荐的目录结构。

它的目标不是强迫所有项目迁移到同一种结构，而是给技能包一个稳定的位置来查找历史资料。

## 推荐工作区结构

```text
project-root/
  baseline/
    request/
      request.md
      request.yaml
    openspec/
      specs/
      proposals/
      changes/
      tasks/
    wiki/
      modules/
      pages/
      flows/
      architecture/
    knowledge/
      summaries/
      modules/
      entities/
      interfaces/
    prd/
      current/
      history/
    design/
      ia/
      pages/
      interactions/
      system/
    api/
      summaries/
      interfaces/
    data/
      entities/
      schemas/
    tracking/
      events/
      metrics/
    operations/
      releases/
      runbooks/
      feature-flags/
    glossary/
      glossary.md
  docs/
    output/
      prd.md
      impact-analysis.md
      baseline-references.md
      change-checklist.md
      open-questions.md
      consistency-review.md
```

## 必需目录

真正必需的目录只有两个：

- `baseline/request/`
- `baseline/` 下至少一个历史来源目录

## 1->n 强烈推荐目录

- `baseline/prd/`
- `baseline/wiki/`
- `baseline/api/`
- `baseline/tracking/`
- `baseline/operations/`

## 目录语义

### `baseline/request/`

存放新输入的需求。

推荐文件：

- `request.md`
- `request.yaml`

### `baseline/openspec/`

存放 OpenSpec 产物。

建议子目录：

- `specs/`
- `proposals/`
- `changes/`
- `tasks/`

### `baseline/wiki/`

存放当前产品或代码库理解文档。

建议子目录：

- `modules/`
- `pages/`
- `flows/`
- `architecture/`

### `baseline/knowledge/`

存放长期沉淀的项目理解资产，包括 codebase knowledge wiki 类工具产物。

建议子目录：

- `summaries/`
- `modules/`
- `entities/`
- `interfaces/`

### `baseline/prd/`

存放历史和当前需求文档。

建议拆分：

- `current/`
- `history/`

### `baseline/design/`

存放产品结构和设计说明，帮助需求生成保持有依据。

建议子目录：

- `ia/`
- `pages/`
- `interactions/`
- `system/`

### `baseline/api/`

存放接口层约束。

建议子目录：

- `summaries/`
- `interfaces/`

### `baseline/data/`

存放数据模型层约束。

建议子目录：

- `entities/`
- `schemas/`

### `baseline/tracking/`

存放产品、增长或数据分析团队使用的事件和指标定义。

建议子目录：

- `events/`
- `metrics/`

### `baseline/operations/`

存放线上行为相关的运营和运行上下文。

建议子目录：

- `releases/`
- `runbooks/`
- `feature-flags/`

### `baseline/glossary/`

存放产品或领域语言。

推荐文件：

- `glossary.md`

## 命名规则

使用清晰、稳定的名称：

- 优先使用小写英文目录名
- 文件名使用连字符
- 避免 `new-doc.md`、`latest.md`、`v2-final.md` 这类临时名称

示例：

- `comment-ranking-spec.md`
- `feed-module-overview.md`
- `social-graph-summary.md`
- `comment-events.md`

## 文档标注规则

如果可能，在每份文档中标注状态：

- `Draft`
- `Approved`
- `Historical`
- `Current State`
- `Deprecated`

这会让基线加载阶段更容易处理冲突。

## 最小目录示例

### 最小 0->1

```text
baseline/
  request/
    request.md
  knowledge/
    summaries/
      product-summary.md
  glossary/
    glossary.md
```

### 最小 1->n

```text
baseline/
  request/
    request.md
  prd/
    history/
      comment-system-prd.md
  wiki/
    modules/
      comment-module.md
  api/
    interfaces/
      comment-api.md
  tracking/
    events/
      comment-events.md
```

## 输出约定

生成产物应放到：

```text
docs/output/
```

推荐文件：

- `prd.md`
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`

## 接入建议

如果公司已有自己的文档布局：

- 不要马上迁移所有历史文档
- 创建一个轻量的 `baseline/` 层，通过链接、复制或导出的方式接入
- 即使上游系统不同，也尽量保持 `baseline/` 层稳定

## Starter 模板

本技能包包含一个可直接填写的 starter 工作区：

```text
product-requirement-foundry/starter/
```

从 [starter/STARTER_USAGE.md](./starter/STARTER_USAGE.md) 开始，然后填写：

- `starter/baseline/request/request.md`
- `starter/baseline/request/request.yaml`
- `starter/baseline/` 下对应的历史来源目录
