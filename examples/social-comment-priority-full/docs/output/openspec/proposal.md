# Proposal: close-connection-comment-priority

## Summary

Prioritize comments from close connections on the feed detail page while preserving current moderation, block, pagination, and fallback behavior.

## Problem

Users currently see comments ranked by relevance and creation time. This can bury familiar voices even when mutual-follow or high-interaction comments are present.

## Goals

- Boost visible comments from close connections.
- Preserve fallback ranking when close-connection comments do not exist.
- Keep moderation and block filtering unchanged.

## Non-Goals

- Do not expose relationship scores to clients.
- Do not change comment pagination semantics.

## Historical Context

| Source | What it proves | Impact on this change |
|---|---|---|
| comment-module.md | Existing ranking and filtering | Modify ranking only after visibility filters |
| social-graph.md | Close connection signals exist | Use as ranking signal |
| comment-api.md | Current API and latency | Preserve API compatibility |
| comment-events.md | Current tracking | Extend event properties |

## Impact Scope

- Product modules: comment module, social graph module.
- Pages: feed detail page.
- APIs: `GET /api/v1/feed/{feedId}/comments`.
- Data entities: comment, user relationship signal.
- Tracking events: `comment_exposure`, `comment_click`.

## Compatibility

- Backward compatibility: fallback ranking remains unchanged.
- Existing user impact: only comment order changes when close-connection comments exist.
- Rollback: disable feature flag.

## Risks

- Ranking latency.
- Ambiguous close-connection weight.

## Open Questions

- Confirm weights for mutual follow vs recent interaction.
