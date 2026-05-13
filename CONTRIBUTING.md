# Contributing

Thanks for helping improve `product-requirement-foundry`.

This project is a requirement-generation skill package for turning one-line product requests into history-compatible PRD and AI-ready OpenSpec handoff artifacts. Good contributions usually improve one of four areas:

- requirement quality
- baseline loading coverage
- confidence and review rigor
- team usability and documentation

## Good Contribution Areas

- Add or refine domain packs such as ecommerce, SaaS, content, education, or fintech.
- Improve adapters for OpenSpec, wiki, enterprise KB, or knowledge-wiki style inputs.
- Strengthen prompt steps, templates, and review gates.
- Improve scanner extraction quality for features, constraints, and glossary terms.
- Add examples for real `0->1` and `1->n` product scenarios.
- Improve docs that help product managers and engineers use the package correctly.

## Before You Start

- Read [README.md](./README.md)
- Read [SKILL.md](./SKILL.md)
- Review the baseline input and layout guides.
- Check whether the change should update examples, templates, prompts, or tests.

## Working Principles

- Preserve historical compatibility as a first-class goal.
- Prefer explicit evidence over AI inference.
- Keep `0->1` and `1->n` paths clearly separated when behavior differs.
- Favor simple, reviewable changes over broad rewrites.
- Keep terminology stable unless there is a strong reason to change it.

## Contribution Workflow

1. Identify the problem clearly.
2. Make the smallest useful change that solves it.
3. Update related documentation when behavior changes.
4. Add or adjust tests when scripts or CLI behavior changes.
5. Run the project test command before submitting.

```bash
npm test
```

## Pull Request Expectations

Please include:

- what problem you are solving
- whether the change affects `0->1`, `1->n`, or both
- whether any docs, templates, prompts, or examples were updated
- how you verified the change

Helpful PR notes:

- sample input request
- sample baseline source set
- expected output impact
- any known limitations or follow-up ideas

## Documentation Changes

When updating user-facing behavior, check whether you should also update:

- [README.md](./README.md)
- [README.zh-CN.md](./README.zh-CN.md)
- [BASELINE_INPUT_GUIDE.md](./BASELINE_INPUT_GUIDE.md)
- [BASELINE_LAYOUT_SPEC.md](./BASELINE_LAYOUT_SPEC.md)
- [REVIEW_GATES.md](./REVIEW_GATES.md)
- examples under [examples/](./examples)

## Testing Notes

Current automated verification uses:

```bash
npm test
```

This covers the scanner, confidence scorer, and CLI initialization flow. If you change extraction logic, scoring logic, or starter behavior, update tests in [tests/run-tests.js](./tests/run-tests.js).

## Scope Boundaries

This repository focuses on requirement generation and handoff quality. Please avoid expanding it into:

- a generic project management tool
- a full workflow engine
- a visual design system
- a code implementation framework

Those integrations can exist around the package, but should not blur its core purpose.
