# Baseline References

## Referenced Historical Assets

| Source type | Source reference | Why it matters | Confidence |
|---|---|---|---|
| Wiki | baseline/wiki/modules/comment-module.md | Current comment list and ranking behavior | High |
| Wiki | baseline/wiki/modules/social-graph.md | Close connection signal availability | High |
| APIDoc | baseline/api/interfaces/comment-api.md | Current API contract and latency constraint | High |
| TrackingDoc | baseline/tracking/events/comment-events.md | Current tracking event definitions | High |

## Reused Existing Concepts

| Concept | Historical source | How reused |
|---|---|---|
| Comment ranking | comment-module.md | Modified with close-connection boost |
| Close connection | social-graph.md, glossary.md | Used as ranking signal |
| Comment exposure | comment-events.md | Extended with ranking reason |

## Assumptions Introduced

| Assumption | Reason | Needs confirmation |
|---|---|---|
| Mutual follow and high interaction can share one ranking boost | Product asked for close connections | Yes |
