# Comment API

Status: Current State

## API: GET /api/v1/feed/{feedId}/comments

- Query: `cursor`
- Query: `limit`
- Response: paginated comment list
- Current behavior: comments are sorted by relevance and creation time.

## Constraints

- API latency p95 should stay under 200ms.
- Response must not reveal relationship scores.
