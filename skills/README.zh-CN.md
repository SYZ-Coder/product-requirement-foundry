# Skills 目录说明

这个目录用于暴露 `product-requirement-foundry` 中可安装的 skills。

## 应该安装哪个 Skill

如果你希望只有一个覆盖完整流程的总入口，安装 `product-requirement-foundry`：

- 历史基线加载
- PRD 生成
- OpenSpec 交付转换
- 可信度评审

如果你只希望覆盖某一个阶段，安装更窄的子 skill：

- `prd-baseline-scan`：读取并归一历史上下文
- `prd-generate`：生成或更新 PRD 交付包
- `openspec-handoff`：把评审后的结果转换为 OpenSpec 产物
- `confidence-review`：检查就绪度、可追溯性与证据覆盖

## 推荐安装组合

最简单：

- `skills/product-requirement-foundry`

推荐组合：

- `skills/product-requirement-foundry`
- `skills/prd-baseline-scan`
- `skills/prd-generate`
- `skills/openspec-handoff`
- `skills/confidence-review`

偏增量需求的轻量组合：

- `skills/prd-baseline-scan`
- `skills/prd-generate`
- `skills/confidence-review`

## 说明

- 仓库根目录也保留了一个顶层 [SKILL.md](../SKILL.md)，用于兼容只识别根级 skill 的工具。
- 如果你的安装器支持按路径安装，优先安装你真正需要的子目录。
- 更完整的工作流说明请看 [README.md](../README.md) 和 [README.zh-CN.md](../README.zh-CN.md)。
