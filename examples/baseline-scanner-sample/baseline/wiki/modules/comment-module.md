# Comment Module

Status: Current State

## Feature: Comment List

- Requirement: users can view comments on the feed detail page.
- Feature: comment ranking sorts comments by relevance and creation time.
- API: comment list API returns paginated comments.
- Event: comment exposure is tracked when a comment enters the viewport.

## Constraints

- Must preserve moderation filtering.
- Must not show hidden or blocked-user comments.
- API latency p95 should stay under 200ms.
