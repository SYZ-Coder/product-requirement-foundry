# PM Input

Use this file if you are a product manager and want the simplest possible starting point.

You do not need to understand the whole repository first. Just fill the sections below.

## 1. One-Line Request

Write the change in one sentence.

Example:

```text
Show comments from people the user follows earlier in the comment list on the post detail page.
```

## 2. Product Or Module

Which product, page, flow, or module does this belong to?

Example:

```text
Social app / post detail page / comment list
```

## 3. Business Goal

Why do you want this change?

Example:

```text
Increase familiar-interaction perception and improve comment engagement.
```

## 4. Current Situation

What do you already know about the current behavior?

Example:

```text
Comments are currently ranked mainly by relevance and engagement. There is no explicit follow-relationship priority.
```

## 5. Historical Materials You Already Have

List the files, links, or materials you can provide.

Example:

```text
- old PRD for comment ranking
- current comment page note
- comment API note
- tracking event note
- review meeting notes
```

## 6. Non-Goals Or Boundaries

What should not change in this round?

Example:

```text
- do not rebuild the whole comment system
- do not change moderation rules
- do not change author pinning behavior in this round
```

## 7. Open Questions

List anything you are not sure about yet.

Example:

```text
- Should followed-user comments have a visual badge?
- When several followed users comment, how should they be ordered?
- Should this be released behind a feature flag?
```

## 8. Delivery Expectation

What do you want the AI or team to produce?

Example:

```text
Generate a PRD, impact analysis, open questions list, and confidence report.
```

## Next Step

After this file is filled:

1. Put any real historical files into `baseline/`.
2. Run `node <product-requirement-foundry-root>/scripts/prepare-pm-input.js .`.
3. Ask the AI to look through the files you prepared in this workspace and generate outputs under `docs/output/`.

Here is what that means in plain language:

- do not send only a one-line request to the AI
- ask the AI to first look at the request and historical files in this folder
- then ask it to generate the PRD, impact analysis, and confidence review from those files

There are 3 common ways to do this:

### Option 1: Ask a teammate who already uses AI tools

Have them open this repository and tell the AI:

```text
Please first review pm-input.md, baseline/request/, and the historical materials under baseline/, then generate the requirement outputs under docs/output/.
```

### Option 2: Open the project yourself in an AI tool

If you already have this folder open in Cursor, Claude Code, or another AI IDE, you can say:

```text
Please first review pm-input.md and the historical materials under baseline/, then generate the requirement outputs under docs/output/.
```

### Option 3: Think of it as "let the AI inspect the folder before writing"

The important part is that the AI should first look at:

- `pm-input.md`
- `baseline/request/`
- the historical files under `baseline/`

and only then start generating the result.
