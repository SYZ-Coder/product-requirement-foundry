# 产品经理输入

如果你是产品经理，想用最简单的方式开始，请优先填写这个文件。

你不需要先理解整个仓库结构，只要把下面几项填出来就可以。

## 1. 一句话需求

请用一句话写清楚这次想改什么。

示例：

```text
在帖子详情页评论区，让用户关注的人发表的评论更靠前展示。
```

## 2. 所属产品或模块

这次需求属于哪个产品、页面、流程或模块？

示例：

```text
社交 App / 帖子详情页 / 评论列表
```

## 3. 业务目标

为什么要做这次改动？

示例：

```text
提升熟人互动感知，增加评论互动率。
```

## 4. 当前情况

你目前知道的现状是什么？

示例：

```text
评论当前主要按相关性和互动热度排序，还没有明确的关注关系优先规则。
```

## 5. 你手上已有的历史资料

列出你目前能提供的文件、链接或资料。

示例：

```text
- 旧版评论排序 PRD
- 当前评论页说明
- 评论接口说明
- 评论埋点说明
- 评审会议纪要
```

## 6. 非目标或边界

这次明确不改什么？

示例：

```text
- 不重做整个评论系统
- 不修改审核规则
- 这次不调整作者置顶逻辑
```

## 7. 开放问题

把你目前还不确定的点列出来。

示例：

```text
- 熟人评论是否需要特殊标识？
- 多条熟人评论之间按什么排序？
- 是否要灰度发布？
```

## 8. 期望产出

你希望 AI 或团队最后产出什么？

示例：

```text
生成 PRD、影响分析、开放问题清单和可信度报告。
```

## 下一步

填完之后：

1. 把真实历史文件放进 `baseline/`。
2. 运行 `node <product-requirement-foundry-root>/scripts/prepare-pm-input.js .`。
3. 让 AI 在这个工作区里查看你准备好的文件，并在 `docs/output/` 下生成结果。

如果你不知道第 2 步怎么运行，可以这样理解：

- `prepare` 就是运行一条命令
- 它会把你填写的 `pm-input.zh-CN.md` 自动整理成 `baseline/request/request.md` 和 `request.yaml`

常见运行方式：

### Windows

```powershell
node D:\spring_AI\product-requirement-foundry\scripts\prepare-pm-input.js .
```

### macOS

```bash
node /path/to/product-requirement-foundry/scripts/prepare-pm-input.js .
```

### Linux

```bash
node /path/to/product-requirement-foundry/scripts/prepare-pm-input.js .
```

如果你是在仓库根目录运行，也可以写成：

```bash
node scripts/prepare-pm-input.js ./tmp/demo-workspace
```

运行成功后，通常会看到：

```text
Prepared request files from pm-input.zh-CN.md in <workspace>
```

这里的意思可以理解成：

- 不只是把一句话需求发给 AI
- 而是让 AI 先看这个文件夹里你准备好的需求和历史资料
- 再基于这些文件生成 PRD、影响分析和可信度报告

常见有 3 种方式：

### 方式 1：让会用 AI 工具的同事来操作

让同事打开这个仓库，然后对 AI 说：

```text
请先查看当前工作区里的 pm-input.zh-CN.md、baseline/request/ 和 baseline/ 下的历史资料，再生成 docs/output/ 下的需求交付物。
```

### 方式 2：你自己在 AI 工具里打开项目

如果你自己就在 Cursor、Claude Code 或其他 AI IDE 里打开了这个项目文件夹，也可以直接在聊天框里说：

```text
请先查看当前工作区里的 pm-input.zh-CN.md 和 baseline/ 下的历史资料，再生成 docs/output/ 下的需求交付物。
```

### 方式 3：把它理解成“让 AI 先看文件，再开始写”

重点是让 AI 先看：

- `pm-input.zh-CN.md`
- `baseline/request/`
- `baseline/` 下的历史资料

再开始生成结果。
