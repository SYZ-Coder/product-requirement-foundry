# Approved Historical PRD

Status: Approved
Module: feed detail comments

## Summary

The feed detail page shows comments in a stable ranked order based on quality, recency, and moderation eligibility.

## Existing Behavior

- blocked or removed comments are not shown
- pinned comments stay above normal ranked comments when configured
- ranking falls back to recency when quality signals are weak
- author self-comments are visible but do not automatically rank first

## Product Rules

- ranking changes must not alter moderation visibility rules
- ranking changes must preserve stable fallback behavior
- comment interactions such as like, reply, report, and delete remain unchanged

## Known Constraints

- if relationship features are unavailable, use the current ranking fallback
- do not expose private relationship labels in the UI
