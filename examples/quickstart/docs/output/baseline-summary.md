# Baseline Summary

Workspace: `quickstart`

## Source Coverage

| Source type | Files | Notes |
|---|---:|---|
| Glossary | 1 | Unlabeled |
| HistoricalPRD | 1 | Approved |
| Request | 2 | Unlabeled |
| TrackingDoc | 1 | Current State |
| Wiki | 1 | Current State |

## Feature Inventory Overview

| Module | Feature count |
|---|---:|
| prd/history | 1 |
| tracking/events | 3 |
| wiki/modules | 5 |

## Historical Requirement Signals

- Approved Historical PRD (baseline/prd/history/comment-ranking-prd.md)

## Constraint Signals

### business
- ranking changes must not alter moderation visibility rules (baseline/prd/history/comment-ranking-prd.md)
- ranking changes must preserve stable fallback behavior (baseline/prd/history/comment-ranking-prd.md)
- ranking experiments should preserve position-based analysis compatibility (baseline/tracking/events/comment-events.md)

### technical
- None detected.

### compliance
- None detected.

## Next Steps

- Review `feature-inventory.json` for noisy or missing features.
- Add explicit status labels to important source docs if they are missing.
- Confirm unresolved conflicts manually before generating OpenSpec artifacts.
