# Impact Analysis

## Change Overview

- Requirement: prioritize comments from close connections on the feed detail page.
- Type: incremental-feature.

## Affected Product Areas

- Modules: comment module, social graph module, feed detail.
- Pages: feed detail page comment list.
- APIs: `GET /api/v1/feed/{feedId}/comments`.
- Data: comment entity, user relationship signal.
- Tracking: `comment_exposure`, `comment_click`.

## Dependencies

- Upstream: social graph relation signal.
- Downstream: comment list rendering, tracking pipeline.
- External: none.

## Delivery Risks

- Ranking boost could increase API latency.
- Stale relationship signals could rank comments unexpectedly.
- Tracking interpretation changes because position distribution shifts.

## Suggested Validation

- Functional: ranking, fallback, block and hidden comment handling.
- Compatibility: cursor pagination and original ranking fallback.
- Performance: API p95 under 200ms.
- Monitoring: report rate, hide rate, exposure CTR.
