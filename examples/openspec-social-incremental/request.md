# Example: Social App Incremental Requirement to OpenSpec

## One-Line Request

Prioritize comments from close connections on the feed detail page.

## Product Context

- Product: consumer social app
- Requirement type: `incremental-feature`
- Domain pack: `social`
- Target output: Product Requirement Foundry package plus OpenSpec package

## Baseline Sources to Load

- `baseline/prd/history/comment-system-prd.md`
- `baseline/wiki/modules/feed-detail.md`
- `baseline/wiki/modules/social-graph.md`
- `baseline/knowledge/modules/comment-ranking.md`
- `baseline/api/interfaces/comment-api.md`
- `baseline/tracking/events/comment-events.md`

## Expected PRD Outputs

- `docs/output/prd.md`
- `docs/output/impact-analysis.md`
- `docs/output/baseline-references.md`
- `docs/output/change-checklist.md`
- `docs/output/open-questions.md`
- `docs/output/consistency-review.md`

## Expected OpenSpec Outputs

- `docs/output/openspec/proposal.md`
- `docs/output/openspec/design.md`
- `docs/output/openspec/spec.md`
- `docs/output/openspec/tasks.md`
- `docs/output/openspec/dev-context.md`

## Important Compatibility Checks

- Existing comment sorting behavior must remain valid for users without close-connection comments.
- Blocked users and hidden comments must not be surfaced by the new ranking rule.
- Existing comment exposure and click tracking must remain compatible.
- Rollout should support feature flag control.
