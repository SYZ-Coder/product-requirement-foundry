# Spec: Close-Connection Comment Priority

## Requirement 1: Preserve Current Visibility Rules

The system MUST keep existing moderation, block, and removal visibility rules unchanged when applying comment ordering.

### Scenario: Removed comment stays hidden

- GIVEN a comment is removed or blocked
- WHEN feed detail comments are ranked
- THEN the comment is not shown regardless of relationship signals

## Requirement 2: Apply Close-Connection Boost

The system MUST boost visible comments from close connections before final ranking output on the feed detail page.

### Scenario: Close-connection comment ranks higher

- GIVEN a visible close-connection comment and a comparable unfamiliar comment
- WHEN the user opens the feed detail page
- THEN the close-connection comment appears earlier in the normal ranked list

## Requirement 3: Preserve Fallback Behavior

The system MUST preserve the existing ranking path when relationship signals are unavailable.

### Scenario: No relationship signal

- GIVEN no close-connection signal exists for visible comments
- WHEN the user opens the feed detail page
- THEN the existing ranking behavior remains unchanged

## Requirement 4: Preserve Tracking Compatibility

The system MUST keep historical position-based tracking analysis compatible.

### Scenario: Existing dashboards continue to work

- GIVEN comment impression and interaction tracking are emitted
- WHEN the new ranking logic is enabled
- THEN historical position fields remain available and interpretable
