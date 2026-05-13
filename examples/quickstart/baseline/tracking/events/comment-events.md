# Tracking Events

Status: Current State

## Existing Events

- `comment_impression`
- `comment_like_click`
- `comment_reply_click`
- `comment_thread_expand`

## Existing Notes

- comment impression events include comment id, position, feed id, and session id
- ranking experiments should preserve position-based analysis compatibility
- new ranking logic should not silently break historical dashboard interpretation
