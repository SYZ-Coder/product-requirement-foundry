# Knowledge Wiki Adapter

Use this adapter when the team has durable codebase understanding assets, including outputs similar to a codebase knowledge wiki.

## Typical Inputs

- project knowledge summaries
- module responsibility maps
- code-to-business mapping documents
- domain model summaries
- interface inventories

## Extraction Goals

- stable project understanding
- reusable code knowledge that constrains future requirements
- module ownership and responsibilities
- technical and business boundaries

## Normalization Hints

Map knowledge assets into:
- `baseline.modules`
- `baseline.apis`
- `baseline.entities`
- `history.decisions`

## Output Notes

This source is especially useful for `1->n` work because it reduces the risk of writing a requirement that contradicts the real implementation.

## Cautions

- Knowledge assets describe reality well, but may not capture product intent fully
- Pair them with PRDs or specs when possible
