# Development Context: close-connection-comment-priority

## Request

- One-line request: prioritize comments from close connections on the feed detail page.
- Requirement type: incremental-feature.
- Product: social-app.
- Platforms: iOS, Android.

## Historical Baseline

| Source type | Source reference | Key fact |
|---|---|---|
| Wiki | baseline/wiki/modules/comment-module.md | Current ranking is relevance and creation time |
| Wiki | baseline/wiki/modules/social-graph.md | Close connection signals exist |
| APIDoc | baseline/api/interfaces/comment-api.md | Comment API is paginated |
| TrackingDoc | baseline/tracking/events/comment-events.md | Exposure and click events exist |

## Current Online Behavior

Comments are filtered for moderation and block rules, then ranked by relevance and creation time.

## Target Behavior

Visible comments from close connections receive ranking priority. Fallback ranking remains unchanged.

## Implementation Boundaries

### In Scope

- Comment ranking boost.
- Tracking property extension.
- Feature flag rollout.

### Out of Scope

- Public exposure of relationship scores.
- Pagination redesign.
- Moderation rule changes.

## Affected Assets

- Modules: comment module, social graph module.
- Pages: feed detail.
- APIs: `GET /api/v1/feed/{feedId}/comments`.
- Entities: comment, relationship signal.
- Events: `comment_exposure`, `comment_click`.

## Compatibility Rules

- Preserve moderation and block filtering.
- Preserve fallback ranking when close-connection comments do not exist.
- Preserve pagination cursor semantics.

## Assumptions

- Close connection means mutual follow or high recent interaction.

## Open Questions

- Confirm ranking weights.
