# Enterprise Knowledge Base Adapter

Use this adapter when requirement generation must consume internal company knowledge artifacts.

## Typical Inputs

- exported product docs
- internal SOPs
- decision records
- requirements and review notes
- operational policies

## Extraction Goals

- product policy constraints
- review conventions
- operational rules
- organization-specific terminology

## Normalization Hints

Map enterprise KB content into:
- `constraints.business`
- `constraints.compliance`
- `history.decisions`
- `terminology`

## Cautions

- Enterprise docs often mix policy and proposal; tag certainty clearly
- Internal language should be preserved if teams use it operationally
