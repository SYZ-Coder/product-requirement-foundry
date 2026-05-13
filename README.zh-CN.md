# Product Requirement Foundry

产品需求工坊

一句话需求进入，产出兼容历史功能、可直接交给 AI 开发的 PRD 与规格包。

`product-requirement-foundry` 是一个面向产品经理、研发团队和 AI 辅助开发流程的需求技能包。它的核心目标不是“把一句话润色成一篇文档”，而是把一句话需求放回历史产品语境中，生成兼容线上现状、可追溯、可评审、可直接进入开发的需求交付包。

它特别适合已经沉淀了项目知识资产的团队，例如：

- OpenSpec specs、changes、tasks、proposal 等产物
- wiki 分析文档
- codebase knowledge wiki 类项目知识库产物
- 历史 PRD 和需求文档
- 设计说明、交互说明、信息架构文档
- API、数据模型、埋点、运营配置文档
- 企业内部知识库、评审纪要和决策记录

## 从这里开始

请按你的角色选择入口：

| 角色 | 建议先看 | 作用 |
|---|---|---|
| 产品经理 | [PRODUCT_MANAGER_GUIDE.zh-CN.md](./PRODUCT_MANAGER_GUIDE.zh-CN.md) | 先走 5 分钟产品路径，快速理解怎么准备输入、怎么看 PRD 和可信度报告 |
| 技术人员 | [DEVELOPER_QUICKSTART.zh-CN.md](./DEVELOPER_QUICKSTART.zh-CN.md) | 用最短路径完成工作区初始化、基线扫描、AI 生成和可信度评分 |
| 团队负责人 / 维护者 | [DEVELOPER_GUIDE.zh-CN.md](./DEVELOPER_GUIDE.zh-CN.md) | 了解安装方式、核心命令、AI 工具接入和团队落地方式 |

如果你想先看一个现成演示，再开始接入，也可以先看：

- [examples/quickstart/README.zh-CN.md](./examples/quickstart/README.zh-CN.md)

## 项目简介

Product Requirement Foundry 可以把这条链路标准化：

```text
一句话需求
-> 读取历史基线
-> 生成兼容历史的 PRD
-> 转成 OpenSpec proposal/design/spec/tasks/dev-context
-> 生成可信度报告
-> 交给 AI 或研发继续开发
```

对于 `0->1`，它帮助团队从粗略想法走到结构化需求。

对于 `1->n`，它帮助团队在不脱离历史功能、线上行为和已有术语的前提下，生成增量需求，而不是把已有产品“重新发明一遍”。

## 这个技能包解决什么问题

传统 PRD 生成工具往往能把一句话扩写成一份“看起来完整”的文档，但经常忽略：

- 已有产品行为
- 历史需求来源
- 线上兼容约束
- 跨模块影响面
- 团队既有术语

Product Requirement Foundry 的核心改进，是强制在需求生成前先加载历史基线，再生成需求与规格。

## 适用场景

### 0->1

适用于：

- 新产品
- 新业务线
- 新模块
- 历史实现较少的新功能方向

### 1->n

适用于：

- 已上线功能增强
- 线上功能升级
- 跨模块改造
- 兼容性需求
- 基于历史 spec、知识库、旧需求文档演进的新需求

## 包结构

```text
product-requirement-foundry/
  SKILL.md
  README.md
  README.zh-CN.md
  adapters/
  prompts/
  templates/
  domain-packs/
  schemas/
  scripts/
  starter/
  examples/
```

## 推荐执行顺序

1. 加载并归一历史基线资料
2. 判断当前需求属于 `0->1` 还是 `1->n`
3. 选择绿地模板或增量模板
4. 生成 PRD 与配套文档
5. 做一致性审查
6. 如需 AI 开发，生成 OpenSpec 交付包
7. 生成可信度报告后再交付

你可以先用扫描器自动完成第一步：

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js <workspace-dir>
```

也可以对生成结果做评分：

```bash
node <product-requirement-foundry-root>/scripts/confidence-score.js <workspace-dir>
```

CLI 用法：

```bash
node scripts/cli.js init <workspace-dir>
node scripts/cli.js scan <workspace-dir>
node scripts/cli.js score <workspace-dir>
```

## 产物目录

```text
docs/output/
  prd.md
  impact-analysis.md
  baseline-references.md
  change-checklist.md
  open-questions.md
  consistency-review.md
  confidence-report.md
  confidence-score.json
  openspec/
    proposal.md
    design.md
    spec.md
    tasks.md
    dev-context.md
```

## 已包含的能力与资产

- OpenSpec、wiki、knowledge wiki、企业知识库适配说明
- 历史基线扫描器
- 可信度评分器与评审门禁
- 命令行入口和测试
- `0->1` 与 `1->n` PRD 模板
- OpenSpec proposal、design、spec、tasks、dev-context 模板
- 基线与评审模板
- 归一化 JSON schema
- 社交产品领域包
- 面向产品经理的 5 分钟快速上手示例：[examples/quickstart](./examples/quickstart)
- 绿地、增量、OpenSpec 驱动的示例

## 测试

```bash
npm test
```

## 支持哪些功能

`product-requirement-foundry` 覆盖从一句话需求到开发上下文交付的完整链路：

| 功能 | 作用 | 产物 |
|---|---|---|
| 一句话需求入口 | 让产品经理先写最小需求，不必一开始就写完整 PRD | `baseline/request/request.md`、`request.yaml` |
| 基线扫描 | 读取历史 PRD、wiki、OpenSpec、知识资产、API、埋点、术语表 | `baseline-summary.md`、`feature-inventory.json`、约束、术语表 |
| `0->1` PRD 生成 | 适配新产品、新模块、新业务方向 | 绿地 PRD、MVP 范围 |
| `1->n` 增量 PRD 生成 | 在不破坏历史行为的前提下生成新需求 | 当前状态、差异说明、兼容策略、影响范围 |
| 社交产品领域包 | 覆盖评论、动态、关系链、审核、埋点、灰度等 C 端社交产品检查项 | 更完整的社交产品需求覆盖 |
| OpenSpec 交付 | 把 PRD 转成 AI 可继续开发的规格包 | `proposal.md`、`design.md`、`spec.md`、`tasks.md`、`dev-context.md` |
| 可信度报告 | 证明需求是否有历史依据、是否兼容旧功能、是否具备开发条件 | 分数、证据链、兼容性证明、证据缺口 |
| Review Gates | 帮助产品和研发判断能否继续推进 | `Pass`、`Review Required`、`Blocked` |
| CLI 与 starter | 让团队可以重复使用统一流程 | `init`、`scan`、`score` |

## 优势

- 把一句话需求稳定转成结构化需求交付包，减少空白 PRD 的手工编写成本。
- 对 `1->n` 场景天然友好，不会忽略线上现状和历史功能。
- 可信度来自证据链，而不是单纯依赖 AI 自信输出。
- 可以直接服务 AI 开发，因为会继续输出 OpenSpec 风格规格和任务。
- 支持产品、研发、测试、数据等角色按各自关注点评审。
- 对 C 端社交产品尤其适合，因为它会主动关注关系链、内容流、评论、审核、埋点、灰度与回滚。

## 每类产物的作用

| 产物 | 使用角色 | 作用 |
|---|---|---|
| `request.md` / `request.yaml` | 产品经理 | 记录一句话需求、目标产品、来源路径和约束 |
| `baseline-summary.md` | 产品、研发、AI | 总结读取到的历史资料 |
| `feature-inventory.json` | AI、研发 | 结构化列出历史功能信号 |
| `prd.md` | 产品、设计、研发 | 描述目标、当前行为、差异、范围、验收和风险 |
| `impact-analysis.md` | 研发、测试、数据 | 说明受影响模块、页面、接口、数据、埋点、灰度与验证 |
| `baseline-references.md` | 产品、研发 | 证明关键结论来自哪些历史来源 |
| `consistency-review.md` | 产品、研发 | 检查冲突、遗漏和历史一致性风险 |
| `openspec/spec.md` | AI 开发、研发 | 定义可实现的系统行为和场景 |
| `openspec/tasks.md` | AI 开发、研发 | 把需求拆成可执行开发任务 |
| `openspec/dev-context.md` | AI 开发 | 说明当前行为、目标行为、兼容规则和边界 |
| `confidence-report.md` | 产品、研发、评审人 | 给出评分、证据链、兼容性证明和阻塞项 |

## 最终效果

对于 `0->1`，它帮助产品经理把粗略想法整理成带目标用户、范围、MVP、验收和风险的结构化 PRD。

对于已上线产品的 `1->n`，它帮助团队把流程收敛为：

```text
一句话需求
-> 历史基线扫描
-> 兼容历史功能的增量 PRD
-> OpenSpec proposal/design/spec/tasks/dev-context
-> 可信度报告
-> AI 辅助开发
```

这意味着产品经理的工作重心，会从“从零写全量 PRD”转向“确认目标、边界、当前状态准确性、风险假设和证据链是否成立”。

## 产品经理如何在 AI 工具里使用

1. 初始化一个需求工作区。

```bash
node <product-requirement-foundry-root>/scripts/cli.js init <workspace-dir>
```

2. 填写需求入口文件。

```text
<workspace-dir>/baseline/request/request.md
<workspace-dir>/baseline/request/request.yaml
```

3. 把历史资料放到对应目录。

```text
baseline/prd/history/
baseline/wiki/modules/
baseline/openspec/specs/
baseline/knowledge/
baseline/api/interfaces/
baseline/tracking/events/
baseline/glossary/
```

4. 在 AI 工具中调用这个技能包。

示例提示词：

```text
Use product-requirement-foundry at <product-requirement-foundry-root>.
The requirement workspace is <workspace-dir>.
Generate a Product Requirement Foundry package, OpenSpec artifacts, and a confidence report.
Do not ignore historical baseline files.
```

5. 运行基线扫描。

```bash
node <product-requirement-foundry-root>/scripts/cli.js scan <workspace-dir>
```

6. 让 AI 基于扫描结果生成 PRD 与 OpenSpec 产物。

7. 运行可信度评分。

```bash
node <product-requirement-foundry-root>/scripts/cli.js score <workspace-dir>
```

8. 产品重点确认：

- 需求目标
- 非目标
- 当前线上行为
- 变更范围
- 开放问题
- 可信度报告里的证据链

9. 研发重点确认：

- 受影响模块
- API、数据、埋点影响
- 兼容和回滚策略
- OpenSpec 场景定义
- tasks 是否可执行

10. 如果 `confidence-report` 为 `Pass`，或 `Review Required` 中的问题已经被接受，就可以把 OpenSpec 包继续交给 AI 开发。

## 团队接入导航

团队接入时建议先看：

- [Baseline Input Guide](./BASELINE_INPUT_GUIDE.md)
- [Baseline Layout Spec](./BASELINE_LAYOUT_SPEC.md)

如果想让产品经理 5 分钟内跑通最短流程，先看：

- [examples/quickstart/README.zh-CN.md](./examples/quickstart/README.zh-CN.md)

如果需要现成工作区骨架，可以从：

- [starter/STARTER_USAGE.md](./starter/STARTER_USAGE.md)

如果要走 PRD 到 OpenSpec 的交付链路，可以看：

- [OpenSpec Output Adapter](./openspec-output/README.md)

## 规范文档导航

下面这些文档用于说明如何准备输入、组织历史基线资料、评审生成结果，以及理解技能包版本变化。

| 文档 | 英文版本 | 作用 |
|---|---|---|
| [BASELINE_INPUT_GUIDE.zh-CN.md](./BASELINE_INPUT_GUIDE.zh-CN.md) | [BASELINE_INPUT_GUIDE.md](./BASELINE_INPUT_GUIDE.md) | 说明生成 PRD 前应该准备哪些历史 PRD、wiki、OpenSpec、知识库、API、埋点、术语表和一句话需求资料。 |
| [BASELINE_LAYOUT_SPEC.zh-CN.md](./BASELINE_LAYOUT_SPEC.zh-CN.md) | [BASELINE_LAYOUT_SPEC.md](./BASELINE_LAYOUT_SPEC.md) | 规定 `baseline/` 和 `docs/output/` 的推荐目录结构，让扫描器和 AI 工具可以稳定读取项目历史。 |
| [REVIEW_GATES.zh-CN.md](./REVIEW_GATES.zh-CN.md) | [REVIEW_GATES.md](./REVIEW_GATES.md) | 定义产品意图、历史基线、影响面完整性和 OpenSpec 就绪度门禁，用于判断生成产物是否可信、是否能交给研发或 AI 开发。 |
| [CHANGELOG.zh-CN.md](./CHANGELOG.zh-CN.md) | [CHANGELOG.md](./CHANGELOG.md) | 记录技能包版本变化、新增能力和发布说明。 |

## 开源协作导航

如果要把项目作为开源仓库发布或协作，建议配合使用：

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- [SECURITY.md](./SECURITY.md)
- [GITHUB_PROJECT_SUMMARY.md](./GITHUB_PROJECT_SUMMARY.md)
- [GITHUB_PROJECT_SUMMARY.zh-CN.md](./GITHUB_PROJECT_SUMMARY.zh-CN.md)

如果需要补齐 GitHub 仓库协作和自动化，还可以直接使用：

- [.github/workflows/test.yml](./.github/workflows/test.yml)
- [.github/ISSUE_TEMPLATE/bug_report.md](./.github/ISSUE_TEMPLATE/bug_report.md)
- [.github/ISSUE_TEMPLATE/feature_request.md](./.github/ISSUE_TEMPLATE/feature_request.md)
- [.github/PULL_REQUEST_TEMPLATE.md](./.github/PULL_REQUEST_TEMPLATE.md)

## 当前定位

这套技能包已经具备内部试点和开源早期使用的基础能力。它可以显著减少产品从零整理需求的工作量，但对于高风险需求，仍建议产品经理和研发共同确认目标、边界、当前线上行为和证据链。

## 推荐的下一步扩展

- 增加更多领域包，例如电商、SaaS、内容社区等
- 接入更真实的解析器，把历史资料自动归一成结构化 baseline JSON
- 增加 PRD 完整性校验器，按 schema 检查生成结果是否缺项
- 增加需求 lineage 构建能力，支持长期历史追踪和需求演化分析

## AI 工具适配

当前仓库已经直接补好了这些 AI 开发工具适配入口：

- Codex：[AGENTS.md](./AGENTS.md)
- Claude Code：[CLAUDE.md](./CLAUDE.md)
- Cursor：[.cursor/rules/product-requirement-foundry.mdc](./.cursor/rules/product-requirement-foundry.mdc)
- GitHub Copilot：[.github/copilot-instructions.md](./.github/copilot-instructions.md)

如果需要查看 macOS、Windows、Linux 下的安装与使用说明，请看：

- [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)
- [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)

如果你希望按产品经理视角快速上手，也可以直接看：

- [PRODUCT_MANAGER_GUIDE.md](./PRODUCT_MANAGER_GUIDE.md)
- [PRODUCT_MANAGER_GUIDE.zh-CN.md](./PRODUCT_MANAGER_GUIDE.zh-CN.md)

如果你希望按技术人员视角快速上手，也可以直接看：

- [DEVELOPER_QUICKSTART.md](./DEVELOPER_QUICKSTART.md)
- [DEVELOPER_GUIDE.zh-CN.md](./DEVELOPER_GUIDE.zh-CN.md)
