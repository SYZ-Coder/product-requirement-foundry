# 产品经理快速上手

这是给不懂技术、也不想先理解仓库结构的产品经理准备的最短入口。

## 3 步开始

1. 先填写 [pm-input.zh-CN.md](./starter/pm-input.zh-CN.md)，或者使用英文版 [pm-input.md](./starter/pm-input.md)。
2. 运行 `prepare`，把 `pm-input.md` 自动转换成 `baseline/request/request.md` 和 `request.yaml`。
3. 把你手上的历史资料放进 `baseline/`，再让 AI 在这个工作区里查看你准备好的文件，并把结果生成到 `docs/output/`。

## `prepare` 怎么运行

`prepare` 的意思不是一个抽象动作，而是运行一条命令。

它的作用是把你填写的：

- `pm-input.zh-CN.md`
- 或 `pm-input.md`

自动整理成：

- `baseline/request/request.md`
- `baseline/request/request.yaml`

### Windows

如果你在 PowerShell 里，并且当前就在工作区目录：

```powershell
node D:\spring_AI\product-requirement-foundry\scripts\prepare-pm-input.js .
```

如果你已经在仓库根目录：

```powershell
node scripts\prepare-pm-input.js .\tmp\demo-workspace
```

### macOS

如果你已经在工作区目录：

```bash
node /path/to/product-requirement-foundry/scripts/prepare-pm-input.js .
```

如果你已经在仓库根目录：

```bash
node scripts/prepare-pm-input.js ./tmp/demo-workspace
```

### Linux

Linux 和 macOS 基本一样：

```bash
node /path/to/product-requirement-foundry/scripts/prepare-pm-input.js .
```

或者：

```bash
node scripts/prepare-pm-input.js ./tmp/demo-workspace
```

### 运行成功后会看到什么

你通常会看到类似输出：

```text
Prepared request files from pm-input.zh-CN.md in <workspace>
```

看到这句，就说明 `request.md` 和 `request.yaml` 已经自动生成好了。

## 怎么理解“让 AI 在工作区里查看文件”

你可以把这句话理解成：

- 不是只把一句话需求发给 AI
- 而是让 AI 先看这个文件夹里你准备好的需求和历史资料
- 再基于这些文件生成 PRD 和分析结果

常见有 3 种方式：

### 方式 1：让会用 AI 工具的同事来操作

如果团队里有人会用 Codex、Claude Code、Cursor 或 Copilot，可以让对方打开这个仓库，然后对 AI 说：

```text
请先查看当前工作区里的 pm-input.zh-CN.md、baseline/request/ 和 baseline/ 下的历史资料，再生成 docs/output/ 下的 PRD、impact-analysis、open-questions 和 confidence-report。
```

### 方式 2：你自己在 AI 工具里打开这个项目

如果你自己就在 Cursor、Claude Code 或其他 AI IDE 里打开了这个项目文件夹，也可以直接在聊天框里说：

```text
请先查看当前工作区里的 pm-input.zh-CN.md 和 baseline/ 下的历史资料，再生成 docs/output/ 下的需求交付物。
```

### 方式 3：把它理解成“让 AI 以这个文件夹为上下文工作”

重点不是“读取”这个词，而是：

- 让 AI 不要脱离历史资料空写
- 让 AI 基于这个文件夹里的文件工作
- 让生成结果和现有产品情况保持一致

## 先看哪些输出

作为产品经理，先看这几个文件就够了：

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/open-questions.md`
- `docs/output/confidence-report.md`

## 最简单理解方式

```text
一句话需求
+ 历史资料
-> 结构化 PRD
-> 影响分析
-> 可信度评审
```

## 如果你想先看现成示例

- [examples/quickstart/README.zh-CN.md](./examples/quickstart/README.zh-CN.md)
- [examples/product-manager-real-usage.zh-CN.md](./examples/product-manager-real-usage.zh-CN.md)

## 如果团队要看完整说明

- [PRODUCT_MANAGER_GUIDE.zh-CN.md](./PRODUCT_MANAGER_GUIDE.zh-CN.md)
- [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)
