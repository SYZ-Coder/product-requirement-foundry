# Scripts

## `baseline-scan.js`

Scans a requirement workspace and generates normalized baseline artifacts.

Usage:

```bash
node scripts/baseline-scan.js <workspace-dir>
```

Expected workspace shape:

```text
workspace/
  baseline/
  docs/
    output/
```

Generated files:

- `docs/output/baseline-summary.md`
- `docs/output/feature-inventory.json`
- `docs/output/historical-requirements.json`
- `docs/output/known-constraints.json`
- `docs/output/glossary.json`

The scanner is intentionally conservative. It extracts headings, bullets, source type, status labels, and lightweight feature/constraint signals. Review generated JSON before using it as strict source of truth.

Notes:

- Files under `baseline/request/` are indexed as request intake files, but they are excluded from feature and constraint extraction.
- Empty starter workspaces are expected to produce an empty `feature-inventory.json`.
- Add real historical documents under `baseline/prd/`, `baseline/wiki/`, `baseline/openspec/`, or `baseline/knowledge/` before expecting useful feature signals.

## `confidence-score.js`

Scores whether generated PRD/OpenSpec artifacts are ready for review or AI-assisted development.

Usage:

```bash
node scripts/confidence-score.js <workspace-dir>
```

Generated files:

- `docs/output/confidence-report.md`
- `docs/output/confidence-score.json`

The score is a heuristic gate, not an approval stamp. Product and engineering should still review blocked or review-required items.

The generated confidence report includes:

- score breakdown
- evidence chain
- compatibility proof
- evidence gaps
- product and engineering review checklists
