# Impact Analysis

## Affected Product Surfaces

- Feed detail page comment list
- Comment ranking behavior for visible normal comments

## Affected Engineering Surfaces

- Comment ranking service or ranking layer
- Relationship-signal lookup used during ranking
- Comment exposure and interaction tracking

## API Impact

- Public API contract should remain stable
- Internal ranking context may include a non-user-facing ranking reason

## Data Impact

- No required schema migration in quickstart scope
- Existing relationship signals are reused

## Tracking Impact

- Preserve position-based analysis compatibility
- Optionally add `ranking_reason=close_connection|default`

## Rollout and Rollback

- Use feature flag
- Roll out gradually
- Roll back by disabling the feature flag

## Validation Scope

- Pinned comment priority remains unchanged
- Moderation visibility remains unchanged
- Blocked or removed comments remain hidden
- Fallback ranking remains stable when no relationship signal is available
