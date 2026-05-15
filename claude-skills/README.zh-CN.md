# Claude Skills 目录

这个目录把 `product-requirement-foundry` 整理成更接近 Claude Code 可安装 skill 的形态。

## 安装方式

把本目录下一个或多个子目录复制到 `~/.claude/skills/` 中即可。

推荐安装集合：

- `claude-skills/product-requirement-foundry`
- `claude-skills/prd-baseline-scan`
- `claude-skills/prd-generate`
- `claude-skills/openspec-handoff`
- `claude-skills/confidence-review`

## 应该装哪个 Skill

如果你希望只有一个覆盖完整流程的总入口，安装 `product-requirement-foundry`。

如果你只想覆盖某一个阶段，安装更窄的子 skill：

- `prd-baseline-scan`
- `prd-generate`
- `openspec-handoff`
- `confidence-review`

## 说明

- [CLAUDE.md](../CLAUDE.md) 仍然是仓库内直接运行 Claude Code 时的项目记忆入口。
- 这套 Claude skills 与 [skills/](../skills/) 下的 Codex skills 尽量保持同名、同职责。
- 共享 skill 内容来自 `scripts/skill-pack-definitions.js`。修改后可通过 `npm run build:skills` 同步刷新两边。
- 更完整的工作流说明请看 [README.md](../README.md) 和 [README.zh-CN.md](../README.zh-CN.md)。
