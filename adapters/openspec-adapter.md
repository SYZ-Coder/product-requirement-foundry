# OpenSpec Adapter

Use this adapter when OpenSpec artifacts are the primary historical baseline.

## Typical Inputs

- `specs/*.md`
- proposals
- tasks
- change records
- design notes generated from OpenSpec workflows

## Extraction Goals

- requirement lineage
- approved scope boundaries
- historical change intent
- structured functional terminology
- explicit constraints and open questions

## Normalization Hints

Map OpenSpec content into:
- `history.specs`
- `history.decisions`
- `baseline.features`
- `constraints.business`

## Output Notes

When a new requirement extends an existing OpenSpec item:
- reference the originating spec id or filename
- describe what remains unchanged
- describe what is added, modified, or deprecated

## Cautions

- Do not treat proposal text as approved behavior unless the source indicates approval
- Separate old assumptions from current online truth when both exist
