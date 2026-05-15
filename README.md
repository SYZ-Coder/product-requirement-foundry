# Product Requirement Foundry

One-line intent in, history-compatible PRD and AI-ready specs out.

`product-requirement-foundry` is a requirement foundry for turning a short product request into a development-ready package that stays aligned with historical product assets, online behavior, and team knowledge.

It is designed for teams that already have reusable project understanding assets such as:
- OpenSpec specs and change artifacts
- wiki analysis documents
- codebase knowledge wiki outputs
- historical PRDs and requirement docs
- design docs and interaction notes
- API, data, and tracking documents
- internal enterprise knowledge bases

## Start Here

Choose only one starting path:

| Role | Start with | Purpose |
|---|---|---|
| I am a product manager | [PRODUCT_MANAGER_QUICKSTART.md](./PRODUCT_MANAGER_QUICKSTART.md) | 3-step PM-only path with minimal repository knowledge |
| I want a 5-minute demo | [examples/quickstart/README.md](./examples/quickstart/README.md) | See one complete example before using your own materials |
| I am an engineer or AI tool user | [DEVELOPER_QUICKSTART.md](./DEVELOPER_QUICKSTART.md) | Fastest path from workspace setup to PRD, OpenSpec, and confidence output |

If you are evaluating the repository for rollout or maintenance later, use [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md).

## For First-Time Users

Ignore most files on your first pass.

Use this simple rule:

1. Product managers start with `PRODUCT_MANAGER_QUICKSTART.md`
2. Engineers start with `DEVELOPER_QUICKSTART.md`
3. People who just want a demo start with `examples/quickstart/README.md`

## Project Summary

Product Requirement Foundry standardizes this delivery path:

```text
one-line request
-> baseline loading
-> history-compatible PRD
-> OpenSpec proposal/design/spec/tasks/dev-context
-> confidence report
-> AI-assisted delivery
```

For `0->1`, it helps teams turn rough ideas into structured requirement packages.

For `1->n`, it helps teams evolve live products without drifting away from historical features, online behavior, and existing terminology.

## What This Skill Solves

Traditional PRD-writing skills tend to expand a one-line request into a clean document, but they often ignore:
- existing product behavior
- requirement lineage
- online compatibility constraints
- cross-module impacts
- terminology consistency

Product Requirement Foundry fixes that by forcing a baseline-loading stage before requirement generation.

## Primary Scenarios

### 0-to-1

Use when creating:
- a new product
- a new business line
- a new module with little or no existing implementation

### 1-to-n

Use when creating:
- enhancement requests for existing features
- online feature upgrades
- cross-module changes
- compatibility or migration demands
- change requests derived from historical specs or knowledge assets

## Advanced And Integration

Everything below this point is for installation, skill-pack usage, repository integration, or deeper customization.

If you are just trying the repository for the first time, you can stop reading here and use one of the three starting paths above.

## Skill Library Layout

This repository supports both installation styles:

- all-in-one: install the repo root skill `product-requirement-foundry`
- composable: install one or more skills from `skills/`

If you only need the install index and recommended skill paths, go directly to:

- [skills/README.md](./skills/README.md)
- [skills/README.zh-CN.md](./skills/README.zh-CN.md)
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)

## Install Path Examples

If your skill installer accepts GitHub repo paths, the primary install targets are:

```text
<repo>/SKILL.md
<repo>/skills/product-requirement-foundry
```

For the full repository layout, install variants, and Claude/Codex differences, use [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md).

## Recommended Execution Order

1. Load and normalize baseline assets
2. Classify the request
3. Choose greenfield or incremental template
4. Generate PRD and side documents
5. Run consistency review
6. Generate OpenSpec package when AI development will start from OpenSpec
7. Generate confidence report before handoff

You can automate the first step with:

```bash
node <product-requirement-foundry-root>/scripts/baseline-scan.js <workspace-dir>
```

You can score generated artifacts with:

```bash
node <product-requirement-foundry-root>/scripts/confidence-score.js <workspace-dir>
```

For CLI-style usage:

```bash
node scripts/cli.js init <workspace-dir>
node scripts/cli.js scan <workspace-dir>
node scripts/cli.js score <workspace-dir>
```

## Choosing a Skill

Use the root `product-requirement-foundry` skill for the full workflow.

Use sub-skills only when you want a narrower trigger or a single stage.

For the detailed breakdown, see [skills/README.md](./skills/README.md).

## Suggested Output Files

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

## Included Assets

- adapter guides for OpenSpec, wiki, knowledge-wiki, and enterprise KB sources
- baseline scanner for generating normalized baseline artifacts
- confidence scorer and review gates for product/engineering handoff
- CLI wrapper and smoke tests for open-source usage
- greenfield and incremental PRD templates
- OpenSpec output templates for proposal, design, spec, tasks, and development context
- baseline and review templates
- JSON schemas for normalized artifacts
- a social-product domain pack
- a 5-minute PM quickstart under [examples/quickstart](./examples/quickstart)
- examples for greenfield, incremental, and OpenSpec-driven use, including social `1->n` OpenSpec handoff
- a baseline scanner sample workspace under [examples/baseline-scanner-sample](./examples/baseline-scanner-sample)
- a complete social incremental example under [examples/social-comment-priority-full](./examples/social-comment-priority-full)
- starter workspace guidance under [starter/STARTER_USAGE.md](./starter/STARTER_USAGE.md)

## Testing

```bash
npm test
```

## Supported Capabilities

`product-requirement-foundry` supports the full requirement handoff path from a short product idea to development-ready context:

| Capability | Purpose | Result |
|---|---|---|
| One-line request intake | Capture product intent without forcing the PM to write a full PRD first | `baseline/request/request.md` and `request.yaml` |
| Baseline scanning | Read historical PRD, wiki, OpenSpec, knowledge, API, tracking, and glossary docs | `baseline-summary.md`, `feature-inventory.json`, constraints, glossary |
| 0-to-1 PRD generation | Shape new products, modules, or business lines | Greenfield PRD structure and MVP scope |
| 1-to-n incremental PRD generation | Extend online products without breaking historical behavior | Incremental PRD with current state, delta, compatibility, impact scope |
| Social product domain pack | Add C-side social app checks for comments, feed, relationships, moderation, tracking, and rollout | More complete social-app requirement coverage |
| OpenSpec handoff | Convert PRD outputs into AI-development context | `proposal.md`, `design.md`, `spec.md`, `tasks.md`, `dev-context.md` |
| Confidence report | Prove whether a requirement is grounded in history and ready for review | Score, evidence chain, compatibility proof, evidence gaps |
| Review gates | Help PMs and engineers decide whether to proceed | `Pass`, `Review Required`, or `Blocked` |
| CLI and starter workspace | Make the workflow repeatable for teams | `init`, `scan`, `score` commands |

## Advantages

- It reduces blank-page PRD writing by turning one-line intent into structured requirement artifacts.
- It is history-aware, so `1-to-n` requirements are grounded in existing product behavior instead of being rewritten from scratch.
- It is evidence-driven: confidence comes from source references, historical feature mappings, compatibility proof, and review gates.
- It is friendly to AI development because it produces OpenSpec-style context and task files.
- It separates product review from engineering review, so each role validates the parts they actually own.
- It works especially well for C-side social products where relationship graph, content flow, moderation, tracking, and rollout all interact.

## Role of Each Artifact

| Artifact | Used by | Role |
|---|---|---|
| `request.md` / `request.yaml` | Product manager | Captures the short requirement, target product, source folders, and constraints |
| `baseline-summary.md` | Product, engineering, AI | Summarizes what historical materials were found |
| `feature-inventory.json` | AI, engineering | Lists historical feature signals extracted from source docs |
| `prd.md` | Product, design, engineering | Describes the requirement, current behavior, delta, scope, acceptance, and risks |
| `impact-analysis.md` | Engineering, QA, analytics | Lists affected modules, pages, APIs, data, tracking, rollout, and validation |
| `baseline-references.md` | Product, engineering | Proves which historical sources support each key requirement point |
| `consistency-review.md` | Product, engineering | Finds conflicts, missing context, and historical consistency risks |
| `openspec/spec.md` | AI development, engineering | Defines implementable system behavior and scenarios |
| `openspec/tasks.md` | AI development, engineering | Breaks the change into executable work items |
| `openspec/dev-context.md` | AI development | Provides historical behavior, target behavior, compatibility rules, and boundaries |
| `confidence-report.md` | Product, engineering, reviewers | Explains score, evidence chain, compatibility proof, and review blockers |

## Expected Effect

For a new product or module, the skill helps the PM move from a rough idea to a structured PRD and MVP scope.

For an online product enhancement, the skill helps the team move from:

```text
one-line request
```

to:

```text
historically grounded PRD
-> OpenSpec proposal/design/spec/tasks/dev-context
-> confidence report
-> AI-assisted implementation
```

The practical effect is that PM work shifts from writing every detail manually to reviewing intent, boundaries, current-state accuracy, and risk assumptions.

## Product Manager Workflow in AI Tools

1. Create a requirement workspace.

```bash
node <product-requirement-foundry-root>/scripts/cli.js init <workspace-dir>
```

2. Fill the request files.

```text
<workspace-dir>/baseline/request/request.md
<workspace-dir>/baseline/request/request.yaml
```

3. Add historical materials to the matching folders.

```text
baseline/prd/history/
baseline/wiki/modules/
baseline/openspec/specs/
baseline/knowledge/
baseline/api/interfaces/
baseline/tracking/events/
baseline/glossary/
```

4. Ask the AI tool to use `product-requirement-foundry` and read the workspace.

Example prompt:

```text
Use product-requirement-foundry at <product-requirement-foundry-root>.
The requirement workspace is <workspace-dir>.
Generate a Product Requirement Foundry package, OpenSpec artifacts, and a confidence report.
Do not ignore historical baseline files.
```

5. Run baseline scan.

```bash
node <product-requirement-foundry-root>/scripts/cli.js scan <workspace-dir>
```

6. Let the AI generate PRD and OpenSpec artifacts under `docs/output/`.

7. Run confidence scoring.

```bash
node <product-requirement-foundry-root>/scripts/cli.js score <workspace-dir>
```

8. Product reviews:

- requirement goal
- non-goals
- current online behavior
- delta scope
- open questions
- confidence report evidence chain

9. Engineering reviews:

- affected modules
- API/data/tracking impact
- compatibility and rollback
- OpenSpec scenarios
- task executability

10. If the confidence report is `Pass` or accepted as `Review Required`, use the OpenSpec package as AI development context.

## Team Onboarding

For team usage standards, start with:
- [Baseline Input Guide](./BASELINE_INPUT_GUIDE.md)
- [Baseline Layout Spec](./BASELINE_LAYOUT_SPEC.md)

For a 5-minute PM onboarding path, start with:
- [examples/quickstart/README.md](./examples/quickstart/README.md)

For a ready-to-fill workspace skeleton, use:
- [starter/STARTER_USAGE.md](./starter/STARTER_USAGE.md)

For PRD-to-OpenSpec handoff, use:
- [OpenSpec Output Adapter](./openspec-output/README.md)

## Reference Documents

These documents explain how teams should prepare inputs, arrange baseline materials, review generated requirements, and understand package changes.

| Document | Chinese Version | Purpose |
|---|---|---|
| [BASELINE_INPUT_GUIDE.md](./BASELINE_INPUT_GUIDE.md) | [BASELINE_INPUT_GUIDE.zh-CN.md](./BASELINE_INPUT_GUIDE.zh-CN.md) | Explains what historical PRD, wiki, OpenSpec, knowledge-base, API, tracking, glossary, and request materials should be prepared before generation. |
| [BASELINE_LAYOUT_SPEC.md](./BASELINE_LAYOUT_SPEC.md) | [BASELINE_LAYOUT_SPEC.zh-CN.md](./BASELINE_LAYOUT_SPEC.zh-CN.md) | Defines the recommended `baseline/` and `docs/output/` directory layout so scanners and AI tools can consume project history consistently. |
| [REVIEW_GATES.md](./REVIEW_GATES.md) | [REVIEW_GATES.zh-CN.md](./REVIEW_GATES.zh-CN.md) | Defines product, historical baseline, impact-completeness, and OpenSpec-readiness gates for deciding whether generated PRD/OpenSpec artifacts are trustworthy. |
| [CHANGELOG.md](./CHANGELOG.md) | [CHANGELOG.zh-CN.md](./CHANGELOG.zh-CN.md) | Records package version changes, newly added capabilities, and release notes. |

## Open Source Docs

For open-source collaboration and repository setup, use:

- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
- [SECURITY.md](./SECURITY.md)
- [GITHUB_PROJECT_SUMMARY.md](./GITHUB_PROJECT_SUMMARY.md)
- [GITHUB_PROJECT_SUMMARY.zh-CN.md](./GITHUB_PROJECT_SUMMARY.zh-CN.md)

For repository automation and contribution flow, also use:

- [.github/workflows/test.yml](.github/workflows/test.yml)
- [.github/ISSUE_TEMPLATE/bug_report.md](.github/ISSUE_TEMPLATE/bug_report.md)
- [.github/ISSUE_TEMPLATE/feature_request.md](.github/ISSUE_TEMPLATE/feature_request.md)
- [.github/PULL_REQUEST_TEMPLATE.md](.github/PULL_REQUEST_TEMPLATE.md)

## Current Positioning

This package is already usable for internal pilot projects and early open-source adoption. It can significantly reduce the amount of manual PRD writing, but for high-risk or high-impact changes, product and engineering should still jointly confirm the goal, boundaries, current online behavior, and evidence chain before implementation starts.

## Recommended Next Extensions

- add more domain packs such as ecommerce, saas, and content
- connect a real parser that builds the normalized baseline JSON automatically
- add a validator that checks PRD completeness against the schemas
- add a requirement lineage builder for long-term historical traceability

## AI Tool Adapters

This repository now includes direct adapters for:

- Codex via [AGENTS.md](./AGENTS.md)
- Claude Code via [CLAUDE.md](./CLAUDE.md)
- Cursor via [.cursor/rules/product-requirement-foundry.mdc](./.cursor/rules/product-requirement-foundry.mdc)
- GitHub Copilot via [.github/copilot-instructions.md](./.github/copilot-instructions.md)

For installation and usage across macOS, Windows, and Linux, see:

- [AI_TOOL_SETUP.md](./AI_TOOL_SETUP.md)
- [AI_TOOL_SETUP.zh-CN.md](./AI_TOOL_SETUP.zh-CN.md)

For a PM-first usage path, see:

- [PRODUCT_MANAGER_GUIDE.md](./PRODUCT_MANAGER_GUIDE.md)
- [PRODUCT_MANAGER_GUIDE.zh-CN.md](./PRODUCT_MANAGER_GUIDE.zh-CN.md)

For an engineer-first usage path, see:

- [DEVELOPER_QUICKSTART.md](./DEVELOPER_QUICKSTART.md)
- [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
