# Baseline Summary

Workspace: `baseline-scanner-sample`

## Source Coverage

| Source type | Files | Notes |
|---|---:|---|
| Glossary | 1 | Unlabeled |
| Request | 1 | Unlabeled |
| Wiki | 1 | Current State |

## Feature Inventory Overview

| Module | Feature count |
|---|---:|
| wiki/modules | 6 |

## Historical Requirement Signals

- No explicit requirement headings found.

## Constraint Signals

### business
- Must preserve moderation filtering. (baseline/wiki/modules/comment-module.md)
- Must not show hidden or blocked-user comments. (baseline/wiki/modules/comment-module.md)

### technical
- API latency p95 should stay under 200ms. (baseline/wiki/modules/comment-module.md)

### compliance
- None detected.

## Next Steps

- Review `feature-inventory.json` for noisy or missing features.
- Add explicit status labels to important source docs if they are missing.
- Confirm unresolved conflicts manually before generating OpenSpec artifacts.
