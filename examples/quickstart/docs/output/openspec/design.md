# Design: Close-Connection Comment Priority

## Current Behavior

- Pinned comments are rendered first when present.
- Normal comments follow ranked ordering based on current quality and recency signals.
- Moderation and block filtering happen before comments are rendered.

## Target Behavior

- Visible comments authored by close connections receive a ranking boost before final ordering.
- If relationship signals are missing, existing ranking behavior remains unchanged.

## Key Constraints

- No user-facing relationship label exposure
- No change to moderation visibility rules
- Tracking compatibility must be preserved

## Rollout

- Feature flag gated
- Gradual rollout with monitoring
- Immediate rollback by disabling the feature flag
