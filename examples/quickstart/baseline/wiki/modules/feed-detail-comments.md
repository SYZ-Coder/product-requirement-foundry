# Current State Wiki

Status: Current State
Page: feed detail

## Comment Module Overview

The feed detail page loads the primary post, then renders a comment list using a ranked feed returned by the comment service.

## Current Ranking Notes

- pinned comments are rendered first when present
- the normal comment list uses quality and recency weighting
- no current close-connection boost is applied
- empty relationship features do not block page rendering

## Module Boundaries

- the feed detail page is responsible for rendering order and interaction entry points
- ranking logic is served by backend comment ranking APIs
- tracking is emitted for comment impression, click reply, like comment, and expand thread
