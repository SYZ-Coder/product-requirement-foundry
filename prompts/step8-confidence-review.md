# Step 8: Confidence Review

Use this step after generating the PRD package and, when applicable, the OpenSpec package.

## Inputs

- `baseline-summary.md`
- `feature-inventory.json`
- `prd.md`
- `impact-analysis.md`
- `baseline-references.md`
- `change-checklist.md`
- `open-questions.md`
- `consistency-review.md`
- `docs/output/openspec/*`

## Outputs

Generate:

- `docs/output/confidence-report.md`
- `docs/output/confidence-score.json`

## Review Dimensions

Score each dimension from 0 to 100:

- Baseline Reliability
- Intent Alignment
- Historical Consistency
- Impact Completeness
- OpenSpec Readiness

## Rules

- A high score requires evidence, not confident wording.
- Every key requirement should map to a source or a clearly marked assumption.
- For `1->n` requirements, the report must prove how the new behavior preserves or intentionally modifies old behavior.
- Any unresolved P0 open question should block AI development.
- Any `1->n` requirement without current online behavior should be blocked.
- Any OpenSpec package without spec scenarios should be blocked.
- Mark assumptions clearly and carry them into product or engineering review.

## Required Proof Sections

Include:

- evidence chain: claim, source type, source reference, proof, compatibility proof, confidence
- compatibility proof: current behavior, target behavior, preserved behavior, modified behavior, rollback
- evidence gaps: missing source references, low-confidence assumptions, unverified compatibility claims
