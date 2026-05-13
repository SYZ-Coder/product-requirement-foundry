# Step 2: Normalize Context

Convert the loaded baseline into a unified model so downstream generation is consistent across source types.

## Required Model

```json
{
  "product": {},
  "baseline": {
    "modules": [],
    "features": [],
    "pages": [],
    "apis": [],
    "entities": [],
    "events": []
  },
  "history": {
    "specs": [],
    "prds": [],
    "releases": [],
    "decisions": []
  },
  "constraints": {
    "business": [],
    "technical": [],
    "compliance": []
  },
  "terminology": []
}
```

## Rules

- Keep names stable if historical terminology already exists.
- Store uncertain mappings as notes instead of facts.
