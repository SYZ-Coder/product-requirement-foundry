# Expected Dev Context Outline

## Request

Prioritize comments from close connections on the feed detail page.

## Current Online Behavior

- Feed detail comments currently use the historical comment ranking baseline.
- Comment visibility is constrained by moderation, privacy, and block rules.

## Target Behavior

- Comments from close connections receive ranking priority.
- Existing visibility and moderation rules continue to apply.
- Users without close-connection comments fall back to the existing ranking behavior.

## Affected Assets

- Modules: feed detail, comment ranking, social graph
- APIs: comment list API
- Entities: comment, user relation
- Events: comment exposure, comment click, reply click

## Compatibility Rules

- Do not bypass moderation.
- Do not surface blocked or hidden comments.
- Preserve existing pagination behavior unless explicitly changed by the spec.

## OpenSpec Direction

- Use `MODIFIED Requirements` for the existing comment ranking capability.
- Add scenarios for close-connection priority, fallback behavior, block handling, and tracking compatibility.
