# Step 3: Classify Requirement

Classify the request into exactly one primary category:

- `greenfield-product`
- `greenfield-module`
- `incremental-feature`
- `cross-module-change`
- `compatibility-change`
- `ops-config-change`
- `bugfix-spec`

## Required Output

- category
- confidence
- matched baseline assets
- reasoning
- recommended template

## Rules

- If an existing module or feature is clearly referenced, default to incremental mode.
- If the user is asking for a new capability inside an existing product, prefer `greenfield-module` or `incremental-feature` rather than `greenfield-product`.
