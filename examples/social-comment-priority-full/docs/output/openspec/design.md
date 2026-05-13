# Design: close-connection-comment-priority

## Context

The feed detail page already displays paginated comments sorted by relevance and creation time. Social graph signals provide mutual follow and recent interaction.

## Current Behavior

Comments are filtered for moderation, hidden state, and block relationships, then ranked by relevance and creation time.

## Target Behavior

After visibility filtering, comments from close connections receive a ranking boost. Existing fallback ranking remains valid when no close-connection comments exist.

## Affected Areas

| Area | Current | Target | Notes |
|---|---|---|---|
| Ranking | Relevance/time | Add close-connection boost | Server side |
| API | Paginated comments | Compatible response | Do not expose scores |
| Tracking | Position | Add ranking_reason | Analytics review |

## Technical Approach

### Product Flow

- User opens feed detail.
- Server filters invisible comments.
- Server applies close-connection boost.
- Client renders paginated comments.

### Interface Changes

- Keep public API compatible.
- Internal ranking context may include `ranking_reason`.

### Data Changes

- No required schema migration for v1.

### Tracking Changes

- Add `ranking_reason` to `comment_exposure` and `comment_click`.

### Feature Flags and Rollout

- Add feature flag by platform and percentage.

## Compatibility and Rollback

- Compatibility: preserve original ranking fallback.
- Rollback: disable feature flag.
- Monitoring: latency, CTR, hide rate, report rate.

## Validation Strategy

- Unit checks: ranking boost and fallback.
- Integration checks: comment API pagination.
- Regression checks: block, hidden, moderation.
- Tracking checks: event properties.
