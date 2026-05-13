# Tasks: Close-Connection Comment Priority

1. Identify where normal comment ranking is applied for feed detail comments.
2. Add close-connection boost logic without changing moderation or block filtering.
3. Preserve fallback ranking when relationship signals are absent.
4. Keep pinned comment priority unchanged.
5. Validate tracking compatibility and add internal ranking reason only if safe.
6. Add regression checks for visibility, fallback ranking, and tracking behavior.
7. Roll out behind a feature flag.
