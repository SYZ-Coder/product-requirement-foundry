# Development Context

## Current Behavior

- Feed detail comments use ranked ordering for visible normal comments.
- Pinned comments remain above normal ranked comments.
- Moderation and block filtering happen before display.
- No current close-connection boost exists.

## Target Behavior

- Add a close-connection ordering boost for visible normal comments.
- Preserve the current ranking path when relationship signals are unavailable.

## Compatibility Rules

- Do not alter moderation visibility rules.
- Do not alter block filtering behavior.
- Do not expose relationship scores in the user-facing experience.
- Preserve position-based tracking compatibility.

## Historical Sources

| Topic | Source type | Source reference |
|---|---|---|
| Current ranking and constraints | HistoricalPRD | baseline/prd/history/comment-ranking-prd.md |
| Feed detail current state | Wiki | baseline/wiki/modules/feed-detail-comments.md |
| Tracking compatibility | TrackingDoc | baseline/tracking/events/comment-events.md |
| Term consistency | Glossary | baseline/glossary/glossary.md |
