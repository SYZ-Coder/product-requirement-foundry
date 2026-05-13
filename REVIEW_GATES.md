# Review Gates

This document defines when a generated PRD or OpenSpec package is ready for product review, engineering review, and AI-assisted development.

## Gate 1: Product Intent Gate

Purpose: confirm that the generated requirement matches what product actually wants.

Required evidence:
- `prd.md` contains requirement summary
- goals and non-goals are explicit
- user scenarios are present
- open questions are listed

Blocking conditions:
- requirement goal is unclear
- non-goals are missing for a `1->n` change
- P0 product question remains unresolved

## Gate 2: Historical Baseline Gate

Purpose: confirm that the requirement is grounded in historical and online context.

Required evidence:
- `baseline-summary.md` exists
- `feature-inventory.json` exists
- `baseline-references.md` exists
- current online behavior is described
- source traceability exists for key claims
- confidence report contains an evidence chain that links key claims to source documents or historical features

Blocking conditions:
- no historical source is referenced for an incremental requirement
- current online behavior is missing
- important requirement points are mostly `AIInference`
- key compatibility claims have no source reference or proof row

## Gate 3: Impact Completeness Gate

Purpose: confirm that affected product and engineering surfaces are not missed.

Required evidence:
- `impact-analysis.md` exists
- affected modules are listed
- affected pages, APIs, data entities, tracking events, or explicit `not applicable` notes are present
- compatibility and rollback are addressed for online products
- compatibility proof explains what old behavior remains unchanged and what new behavior is added or modified

Blocking conditions:
- affected module list is empty
- API/data/tracking impact is unknown and not listed as an open question
- rollback is missing for a risky online behavior change
- no explicit proof that legacy behavior is preserved

## Gate 4: OpenSpec Readiness Gate

Purpose: confirm that the package can be used by AI development safely.

Required evidence:
- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

Blocking conditions:
- spec has no scenario-style requirements
- tasks cannot be executed by engineering
- dev context omits current behavior, target behavior, or compatibility rules

## Recommended Status Values

- `Pass`: ready for the next stage
- `Review Required`: usable, but product or engineering must confirm listed items
- `Blocked`: do not proceed until blocking issues are resolved

## Required Human Review

Product should review:
- intent summary
- current online behavior
- delta overview
- open questions

Engineering should review:
- affected modules and APIs
- data and tracking impact
- rollout and rollback
- test and regression scope
