# Incremental PRD: Close-Connection Comment Priority

## 1. Requirement Summary

- Request: prioritize comments from close connections on the feed detail page.
- Requirement type: incremental-feature.
- Product: social-app.
- Platforms: iOS, Android.
- Related historical assets: comment module wiki, social graph wiki, comment API, comment tracking events.

## 2. Background

Users currently see comments ranked by relevance and creation time. Product wants familiar voices to be easier to notice on the feed detail page.

## 3. Current Online Solution

- Current behavior: the feed detail comment list is sorted by relevance and creation time.
- Current API: `GET /api/v1/feed/{feedId}/comments` returns paginated comments.
- Current tracking: `comment_exposure` and `comment_click` include comment position.
- Current constraints: moderation, hidden comments, and blocked-user filtering must run before ranking output.

## 4. Goals and Non-Goals

### Goals

- Give comments from close connections higher display priority when they exist.
- Preserve existing ranking fallback for users without close-connection comments.
- Preserve moderation, hidden-comment, and block filtering behavior.
- Keep tracking compatible and add ranking context where needed.

### Non-Goals

- Do not expose relationship scores to clients.
- Do not change comment pagination semantics.
- Do not change moderation or reporting rules.

## 5. User Scenarios

- Scenario: a user opens feed detail and sees mutual-follow comments ahead of lower relevance unfamiliar comments.
- Scenario: a user has no close-connection comments and sees the existing ranking order.
- Scenario: a blocked user's comment is never shown even if relationship signals are stale.

## 6. Delta Overview

| Area | Current | Target | Change type | Source |
|---|---|---|---|---|
| Comment ranking | Relevance and creation time | Add close-connection boost before final ordering | Modified | Wiki |
| Comment API | Paginated comments | Same API, optional internal ranking context | Modified | APIDoc |
| Tracking | position only | Add ranking_reason when available | Modified | TrackingDoc |
| Moderation | Filter before display | Unchanged | Unchanged | Wiki |

## 7. Impact Scope

- Affected modules: comment module, social graph module, feed detail page.
- Affected pages: feed detail comment list.
- Affected APIs: `GET /api/v1/feed/{feedId}/comments`.
- Affected entities: comment, user relationship signal.
- Affected tracking events: `comment_exposure`, `comment_click`.

## 8. Detailed Change Specification

### C01: Close-Connection Ranking Boost

- Current behavior: comments are sorted by relevance and creation time.
- New behavior: visible comments authored by close connections receive a ranking boost.
- Rules: moderation and block filtering must run before ranking. Existing fallback order applies when no close-connection comments are present.
- Exceptions: hidden comments, blocked users, and removed comments are excluded before ranking.
- Compatibility notes: pagination cursor semantics must remain stable.
- Source: Wiki, APIDoc, TrackingDoc.

## 9. Interface, Data, and Tracking Changes

- API changes: no public relationship score should be exposed. Internal ranking service may add `ranking_reason`.
- Data changes: no schema migration required for v1 if social graph signals already exist.
- Tracking changes: add `ranking_reason=close_connection|default` to exposure and click events.

## 10. Rollout and Compatibility Strategy

- Backward compatibility: users without close-connection comments keep existing ranking.
- Feature flags: enable by percentage and platform.
- Gray release: start at 5%, then 25%, then 100% after metrics review.
- Monitoring: API p95 latency, comment exposure CTR, report rate, hide rate.
- Rollback: disable feature flag to restore original ranking.

## 11. Regression and Acceptance

- Regression scope: comment visibility, block rules, hidden comments, pagination, tracking.
- Acceptance criteria: GIVEN a visible mutual-follow comment exists, WHEN opening feed detail, THEN it ranks above comparable non-close comments.
- Acceptance criteria: GIVEN no close-connection comments exist, WHEN opening feed detail, THEN existing ranking behavior is preserved.

## 12. Open Questions

- Should high recent interaction and mutual follow have different weights?
- Should `ranking_reason` be exposed only in tracking or also internal debug logs?

## 13. Source Traceability

| Item | Source type | Source reference | Notes |
|---|---|---|---|
| Current comment ranking | Wiki | baseline/wiki/modules/comment-module.md | Current State |
| Close connection signal | Wiki | baseline/wiki/modules/social-graph.md | Current State |
| Comment API | APIDoc | baseline/api/interfaces/comment-api.md | Current State |
| Comment tracking | TrackingDoc | baseline/tracking/events/comment-events.md | Current State |
