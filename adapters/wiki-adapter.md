# Wiki Adapter

Use this adapter when the product or codebase already has wiki-style analysis documents.

## Typical Inputs

- module overview docs
- page maps
- architecture overviews
- workflow analyses
- FAQ or operational notes

## Extraction Goals

- current module boundaries
- page inventory
- functional relationships
- architectural constraints
- shared team terminology

## Normalization Hints

Map wiki content into:
- `baseline.modules`
- `baseline.pages`
- `constraints.technical`
- `terminology`

## Output Notes

If the wiki is more up to date than old PRDs, prefer the wiki for current-state descriptions and reference the PRD only for lineage.
