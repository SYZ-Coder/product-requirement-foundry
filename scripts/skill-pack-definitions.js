module.exports = [
  {
    name: "product-requirement-foundry",
    title: "Product Requirement Foundry",
    description:
      "Use when generating product requirements from a short request that must stay aligned with historical requirements, online behavior, project knowledge assets, or OpenSpec artifacts, especially when the work spans baseline loading, PRD generation, OpenSpec handoff, and confidence review together.",
    body: `# Product Requirement Foundry

Use this as the all-in-one entry skill for requirement generation.

## Use This Skill When

- the user wants the whole requirement package, not just one stage
- historical product context must constrain the output
- the result may need to feed AI development through OpenSpec
- the team wants a confidence review before handoff

If the user only needs one stage, prefer a narrower sibling skill:
- \`prd-baseline-scan\`
- \`prd-generate\`
- \`openspec-handoff\`
- \`confidence-review\`

## Workflow

1. Read \`baseline/request/\`.
2. Read the relevant history under \`baseline/\`.
3. Check existing \`docs/output/\` artifacts first.
4. Classify the request as \`0->1\` or \`1->n\`.
5. Generate or update \`docs/output/\`.
6. Generate \`docs/output/openspec/\` when AI development handoff is needed.
7. Run or prepare the confidence review.

## Rules

- Baseline first.
- Incremental by default when an existing product surface is involved.
- Keep facts and assumptions separate.
- Preserve terminology and compatibility constraints.
- Do not rewrite incremental work as greenfield work.

## Commands

\`\`\`bash
node scripts/cli.js init <workspace-dir>
node scripts/baseline-scan.js <workspace-dir>
node scripts/confidence-score.js <workspace-dir>
\`\`\`

## References

- \`README.md\`
- \`starter/STARTER_USAGE.md\`
- \`scripts/README.md\``,
  },
  {
    name: "prd-baseline-scan",
    title: "PRD Baseline Scan",
    description:
      "Use when a requirement task needs historical product context loaded and normalized before writing anything, especially when the workspace already contains baseline materials such as PRDs, wiki docs, OpenSpec artifacts, API docs, tracking docs, or glossary files.",
    body: `# PRD Baseline Scan

Use this skill for the baseline-loading stage only.

## Goal

Turn raw historical inputs into a normalized baseline before PRD generation starts.

## Workflow

1. Read the request under \`baseline/request/\`.
2. Inspect the available source folders under \`baseline/\`.
3. Run the baseline scanner when a workspace is ready:

\`\`\`bash
node scripts/baseline-scan.js <workspace-dir>
\`\`\`

4. Review the generated artifacts under \`docs/output/\`:
- \`baseline-summary.md\`
- \`feature-inventory.json\`
- \`historical-requirements.json\`
- \`known-constraints.json\`
- \`glossary.json\`

## Rules

- Do not write the final PRD before this stage is complete.
- Prefer approved and newer artifacts when sources conflict.
- Mark unresolved conflicts in \`open-questions.md\`.
- Separate evidence from inference.

## Read As Needed

- \`prompts/step1-load-baseline.md\`
- \`prompts/step2-normalize-context.md\`
- \`schemas/\`
- \`starter/STARTER_USAGE.md\``,
  },
  {
    name: "prd-generate",
    title: "PRD Generate",
    description:
      "Use when baseline materials have already been reviewed and the next task is to generate or update a requirement package, especially when you need to distinguish 0-to-1 greenfield work from 1-to-n incremental change without breaking existing terminology or online behavior.",
    body: `# PRD Generate

Use this skill for the requirement-writing stage after baseline review.

## Workflow

1. Confirm baseline artifacts or source materials have been reviewed.
2. Classify the request:
- \`greenfield-product\`
- \`greenfield-module\`
- \`incremental-feature\`
- \`cross-module-change\`
- \`compatibility-change\`
- \`ops-config-change\`
- \`bugfix-spec\`
3. Default to incremental mode when the request targets an existing product surface.
4. Generate or update:
- \`docs/output/prd.md\`
- \`docs/output/impact-analysis.md\`
- \`docs/output/baseline-references.md\`
- \`docs/output/change-checklist.md\`
- \`docs/output/open-questions.md\`
- \`docs/output/consistency-review.md\`

## Template Selection

- Use \`templates/greenfield-prd-template.md\` for \`0->1\`.
- Use \`templates/incremental-prd-template.md\` for \`1->n\`.

## Rules

- Preserve stable terminology unless there is a clear reason to change it.
- Explicitly cover compatibility, rollout, rollback, and tracking implications.
- Mark inferred content as assumptions.
- Do not present incremental work as a brand-new product.

## Read As Needed

- \`prompts/step3-classify-requirement.md\`
- \`prompts/step4-generate-greenfield.md\`
- \`prompts/step5-generate-incremental.md\`
- \`prompts/step6-review-consistency.md\``,
  },
  {
    name: "openspec-handoff",
    title: "OpenSpec Handoff",
    description:
      "Use when a reviewed requirement package needs to be converted into OpenSpec artifacts for AI-assisted development, especially when engineering needs proposal, design, spec, tasks, and dev-context outputs derived from the PRD package.",
    body: `# OpenSpec Handoff

Use this skill when PRD outputs are ready and the next step is AI development handoff.

## Workflow

1. Read the reviewed PRD package under \`docs/output/\`.
2. Convert it into:
- \`docs/output/openspec/proposal.md\`
- \`docs/output/openspec/design.md\`
- \`docs/output/openspec/spec.md\`
- \`docs/output/openspec/tasks.md\`
- \`docs/output/openspec/dev-context.md\`
3. Keep the OpenSpec package consistent with the PRD, baseline references, and compatibility constraints.

## Rules

- Do not invent behavior that conflicts with the reviewed PRD.
- Carry forward current-state behavior, constraints, and rollout expectations.
- Keep tasks executable and scoped for implementation.
- Preserve terminology from the baseline and PRD package.

## Read As Needed

- \`openspec-output/README.md\`
- \`prompts/step7-generate-openspec.md\`
- \`adapters/openspec-adapter.md\``,
  },
  {
    name: "confidence-review",
    title: "Confidence Review",
    description:
      "Use when a requirement package needs a readiness check before review or implementation, especially when the team wants evidence-backed scoring for baseline coverage, compatibility, traceability, and unresolved gaps.",
    body: `# Confidence Review

Use this skill for the final review and scoring stage.

## Workflow

1. Read the completed package under \`docs/output/\`.
2. Review traceability, compatibility coverage, and unresolved gaps.
3. Generate or update:
- \`docs/output/confidence-report.md\`
- \`docs/output/confidence-score.json\`
4. Run the scorer when artifacts already exist:

\`\`\`bash
node scripts/confidence-score.js <workspace-dir>
\`\`\`

## Rules

- Treat score as review support, not as a replacement for human judgment.
- Call out evidence gaps explicitly.
- Check whether impacted modules, pages, APIs, entities, events, and rollout concerns were missed.
- Confirm assumptions are labeled and source-backed facts stay traceable.

## Read As Needed

- \`REVIEW_GATES.md\`
- \`templates/confidence-report-template.md\`
- \`prompts/step8-confidence-review.md\``,
  },
];
