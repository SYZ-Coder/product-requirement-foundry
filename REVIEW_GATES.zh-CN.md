# 评审门禁

本文档定义生成的 PRD 或 OpenSpec 包在什么时候可以进入产品评审、研发评审和 AI 辅助开发。

## Gate 1：产品意图门禁

目的：确认生成的需求是否符合产品真正想要的方向。

必需证据：

- `prd.md` 包含需求摘要
- 目标和非目标明确
- 用户场景完整
- 已列出开放问题

阻塞条件：

- 需求目标不清晰
- `1->n` 变更缺少非目标
- 仍存在 P0 产品问题未解决

## Gate 2：历史基线门禁

目的：确认需求是否基于历史功能和线上上下文。

必需证据：

- `baseline-summary.md` 存在
- `feature-inventory.json` 存在
- `baseline-references.md` 存在
- 已描述当前线上行为
- 关键结论具备来源追踪
- 可信度报告包含证据链，能把关键结论关联到来源文档或历史功能

阻塞条件：

- 增量需求没有引用任何历史来源
- 缺少当前线上行为
- 重要需求点大多是 `AIInference`
- 关键兼容性结论没有来源引用或证明行

## Gate 3：影响面完整性门禁

目的：确认没有遗漏受影响的产品面和工程面。

必需证据：

- `impact-analysis.md` 存在
- 已列出受影响模块
- 已列出受影响页面、API、数据实体、埋点事件，或明确标注 `not applicable`
- 线上产品已说明兼容和回滚
- 兼容性证明说明哪些旧行为保持不变，哪些新行为被新增或修改

阻塞条件：

- 受影响模块列表为空
- API、数据、埋点影响未知，且没有作为开放问题列出
- 高风险线上行为变更缺少回滚方案
- 没有明确证明旧行为被保留

## Gate 4：OpenSpec 就绪门禁

目的：确认产物可以安全地交给 AI 开发使用。

必需证据：

- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

阻塞条件：

- spec 没有场景化需求
- tasks 无法被研发执行
- dev context 缺少当前行为、目标行为或兼容规则

## 推荐状态值

- `Pass`：可以进入下一阶段
- `Review Required`：可用，但产品或研发必须确认列出的事项
- `Blocked`：不要继续推进，直到阻塞问题被解决

## 必需人工评审

产品应评审：

- 意图摘要
- 当前线上行为
- 变更概览
- 开放问题

研发应评审：

- 受影响模块和 API
- 数据和埋点影响
- 灰度和回滚
- 测试与回归范围
