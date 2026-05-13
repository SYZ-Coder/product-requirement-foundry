# Spec: comment-ranking

## MODIFIED Requirements

### Requirement: Feed Detail Comment Ranking

The system SHALL prioritize visible comments from close connections on the feed detail page while preserving existing visibility filters and fallback ranking behavior.

#### Scenario: Close-connection comment is prioritized

- GIVEN a feed detail page has visible comments from close connections and non-close users
- WHEN the user opens the feed detail page
- THEN close-connection comments are ranked above comparable non-close comments

#### Scenario: Existing fallback ranking is preserved

- GIVEN a feed detail page has no visible close-connection comments
- WHEN the user opens the feed detail page
- THEN comments use the existing relevance and creation-time ranking

#### Scenario: Blocked comments remain hidden

- GIVEN a close-connection signal exists for a blocked user
- WHEN the comment list is generated
- THEN that user's comments are not returned

#### Scenario: Tracking remains compatible

- GIVEN a comment is exposed after close-connection ranking
- WHEN the exposure event is emitted
- THEN `comment_exposure` includes the existing fields and `ranking_reason`
