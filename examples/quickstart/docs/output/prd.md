# Incremental PRD: Close-Connection Comment Priority

## 1. Requirement Summary

- Request: prioritize comments from close connections on the feed detail page.
- Requirement type: incremental-feature.
- Product: social-app.
- Platforms: iOS, Android, Web.
- Historical baseline: historical PRD, current-state wiki, tracking note, glossary.

## 2. Background

Users currently see comments ranked by quality and recency. Product wants familiar voices to become easier to notice without breaking moderation rules or fallback ranking.

## 3. Current Online Solution

- Current behavior: pinned comments render first, then normal comments follow quality and recency ranking.
- Current fallback: when strong ranking signals are unavailable, the list falls back to stable recency-aware ranking.
- Current constraints: moderation visibility, block filtering, and hidden-comment behavior run before ranking output.
- Current tracking: comment impression and interaction events depend on stable comment positions.

## 4. Goals and Non-Goals

### Goals

- Rank visible close-connection comments higher on the feed detail page.
- Preserve the current fallback behavior when relationship signals are absent.
- Preserve moderation and block filtering behavior.
- Keep tracking compatible with historical position-based analysis.

### Non-Goals

- Do not expose relationship labels or scores to end users.
- Do not change comment interaction behavior such as like, reply, report, or delete.
- Do not change pagination semantics.

## 5. User Scenarios

- A user opens a feed detail page and sees a close-connection comment above comparable unfamiliar comments.
- A user with no close-connection comments still sees the existing ranking behavior.
- A blocked or removed comment remains hidden even if relationship signals are strong.

## 6. Delta Overview

| Area | Current | Target | Change type | Source type | Source reference |
|---|---|---|---|---|---|
| Comment ranking | Quality + recency | Add close-connection boost before final ordering | Modified | HistoricalPRD | baseline/prd/history/comment-ranking-prd.md |
| Feed detail comments | Renders ranked list from comment service | Same page flow, with new close-connection-aware order | Modified | Wiki | baseline/wiki/modules/feed-detail-comments.md |
| Tracking | Position-based comment events | Keep historical fields, optionally add ranking reason | Modified | TrackingDoc | baseline/tracking/events/comment-events.md |
| Moderation visibility | Filter before display | Unchanged | Unchanged | HistoricalPRD | baseline/prd/history/comment-ranking-prd.md |

## 7. Impact Scope

- Affected modules: feed detail comments, comment ranking service, relationship-signal usage.
- Affected pages: feed detail page.
- Affected APIs: ranked comment retrieval path.
- Affected entities: comment, close connection signal.
- Affected tracking events: `comment_impression`, `comment_like_click`, `comment_reply_click`, `comment_thread_expand`.

## 8. Detailed Change Specification

### C01: Close-Connection Boost

- Current behavior: visible comments are sorted using quality and recency ranking.
- New behavior: visible comments from close connections receive an ordering boost before final ranking output.
- Preconditions: moderation filtering, block filtering, and removal rules remain unchanged.
- Fallback: if relationship signals are unavailable or empty, keep the existing ranking path.
- Compatibility note: pinned comments remain above normal ranked comments.
- Source type: HistoricalPRD, Wiki, Glossary.
- Source reference: `baseline/prd/history/comment-ranking-prd.md`, `baseline/wiki/modules/feed-detail-comments.md`, `baseline/glossary/glossary.md`.

### C02: Tracking Compatibility

- Current behavior: position-based tracking supports existing dashboards.
- New behavior: preserve position semantics and optionally add a non-user-facing `ranking_reason`.
- Compatibility note: historical dashboard interpretation must continue to work.
- Source type: TrackingDoc.
- Source reference: `baseline/tracking/events/comment-events.md`.

## 9. Interface, Data, and Tracking Changes

- API: no external relationship score exposure.
- Data: no schema migration required in the quickstart scope.
- Tracking: keep historical event fields and allow optional internal ranking reason tagging.

## 10. Rollout and Compatibility Strategy

- Feature flag: yes.
- Rollout: start with low-traffic percentage and expand after metric review.
- Monitoring: latency, comment CTR, report rate, hide rate, reply rate.
- Rollback: disable feature flag to restore original ranking.

## 11. Regression and Acceptance

- Regression scope: moderation visibility, block filtering, pinned comments, ranking fallback, tracking compatibility.
- Acceptance: GIVEN a visible close-connection comment exists, WHEN a user opens feed detail, THEN that comment ranks above comparable unfamiliar comments.
- Acceptance: GIVEN no close-connection signals exist, WHEN a user opens feed detail, THEN the current ranking behavior remains unchanged.

## 12. Open Questions

- Should mutual follow and recent interaction have different boost weights?
- Should ranking reason appear only in internal logs and tracking, or also in debug tooling?

## 13. Source Traceability

| Claim | Source type | Source reference | Notes |
|---|---|---|---|
| Current ranking uses stable ranked ordering with fallback | HistoricalPRD | baseline/prd/history/comment-ranking-prd.md | Approved historical behavior |
| Feed detail page renders ranked comment list | Wiki | baseline/wiki/modules/feed-detail-comments.md | Current State |
| Position-based comment tracking must remain compatible | TrackingDoc | baseline/tracking/events/comment-events.md | Current State |
| Close connection terminology should remain stable | Glossary | baseline/glossary/glossary.md | Domain language |
