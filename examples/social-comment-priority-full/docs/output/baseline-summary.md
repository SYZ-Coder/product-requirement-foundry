# Baseline Summary

Workspace: `social-comment-priority-full`

## Source Coverage

| Source type | Files | Notes |
|---|---:|---|
| APIDoc | 1 | Current State |
| Glossary | 1 | Unlabeled |
| Request | 1 | Unlabeled |
| TrackingDoc | 1 | Current State |
| Wiki | 2 | Current State |

## Feature Inventory Overview

| Module | Feature count |
|---|---:|
| api/interfaces | 2 |
| tracking/events | 6 |
| wiki/modules | 10 |

## Historical Requirement Signals

- No explicit requirement headings found.

## Constraint Signals

### business
- Query: `limit` (baseline/api/interfaces/comment-api.md)
- Response must not reveal relationship scores. (baseline/api/interfaces/comment-api.md)
- Must preserve moderation filtering. (baseline/wiki/modules/comment-module.md)
- Must not show hidden or blocked-user comments. (baseline/wiki/modules/comment-module.md)
- Requirement: block relationships must override all positive relationship signals. (baseline/wiki/modules/social-graph.md)

### technical
- API latency p95 should stay under 200ms. (baseline/api/interfaces/comment-api.md)
- API latency p95 should stay under 200ms. (baseline/wiki/modules/comment-module.md)
- Must not expose private relationship details in API responses. (baseline/wiki/modules/social-graph.md)

### compliance
- None detected.

## Next Steps

- Review `feature-inventory.json` for noisy or missing features.
- Add explicit status labels to important source docs if they are missing.
- Confirm unresolved conflicts manually before generating OpenSpec artifacts.
