# Tasks: close-connection-comment-priority

## 1. Baseline Confirmation

- [ ] Confirm historical comment ranking behavior
- [ ] Confirm close-connection signal definitions
- [ ] Confirm affected API and tracking events

## 2. Product and Design Updates

- [ ] Confirm ranking weight for mutual follow
- [ ] Confirm ranking weight for recent interaction
- [ ] Confirm fallback behavior copy or debug notes if needed

## 3. Engineering Implementation

- [ ] Add close-connection boost in comment ranking service
- [ ] Preserve moderation and block filtering before ranking
- [ ] Preserve pagination cursor semantics
- [ ] Add feature flag for rollout

## 4. Data and Tracking

- [ ] Add `ranking_reason` to comment exposure
- [ ] Add `ranking_reason` to comment click
- [ ] Confirm analytics compatibility

## 5. Testing

- [ ] Test close-connection boost
- [ ] Test fallback ranking
- [ ] Test blocked and hidden comments
- [ ] Test API latency p95
- [ ] Test tracking event properties

## 6. Release

- [ ] Roll out to 5%
- [ ] Monitor latency, CTR, hide rate, report rate
- [ ] Roll back with feature flag if metrics regress
