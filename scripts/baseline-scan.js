#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const SUPPORTED_EXTENSIONS = new Set(['.md', '.txt', '.json', '.yaml', '.yml']);
const SOURCE_TYPE_BY_SEGMENT = {
  openspec: 'OpenSpec',
  wiki: 'Wiki',
  knowledge: 'KnowledgeAsset',
  prd: 'HistoricalPRD',
  design: 'DesignDoc',
  api: 'APIDoc',
  data: 'DataDoc',
  tracking: 'TrackingDoc',
  operations: 'OperationsDoc',
  glossary: 'Glossary',
  request: 'Request'
};

const FEATURE_KEYWORDS = [
  'feature',
  'requirement',
  'capability',
  'function',
  'flow',
  'page',
  'api',
  'event',
  'entity',
  'module',
  'scenario'
];

function usage() {
  console.log('Usage: node scripts/baseline-scan.js <workspace-dir>');
  console.log('The workspace should contain baseline/ and docs/output/ directories.');
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function readText(file) {
  return fs.readFileSync(file, 'utf8');
}

function writeJson(file, value) {
  fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, 'utf8');
}

function walkFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      found.push(...walkFiles(full));
    } else if (SUPPORTED_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      found.push(full);
    }
  }
  return found;
}

function rel(workspace, file) {
  return path.relative(workspace, file).replace(/\\/g, '/');
}

function sourceType(relativePath) {
  const parts = relativePath.split('/');
  const idx = parts.indexOf('baseline');
  const segment = idx >= 0 ? parts[idx + 1] : parts[0];
  return SOURCE_TYPE_BY_SEGMENT[segment] || 'Unknown';
}

function sectionFromPath(relativePath) {
  const parts = relativePath.split('/');
  const idx = parts.indexOf('baseline');
  return idx >= 0 ? parts.slice(idx + 1, -1).join('/') : parts.slice(0, -1).join('/');
}

function extractHeadings(content) {
  const headings = [];
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+?)\s*$/);
    if (match) {
      headings.push({ level: match[1].length, text: match[2].trim() });
    }
  }
  return headings;
}

function extractBullets(content) {
  return content
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => /^[-*]\s+/.test(line))
    .map(line => line.replace(/^[-*]\s+/, '').trim())
    .filter(Boolean);
}

function inferStatus(content, relativePath) {
  const haystack = `${relativePath}\n${content}`.toLowerCase();
  if (haystack.includes('deprecated')) return 'Deprecated';
  if (haystack.includes('current state')) return 'Current State';
  if (haystack.includes('approved')) return 'Approved';
  if (haystack.includes('historical')) return 'Historical';
  if (haystack.includes('draft')) return 'Draft';
  return 'Unlabeled';
}

function looksLikeFeature(text) {
  const lower = text.toLowerCase();
  return FEATURE_KEYWORDS.some(keyword => lower.includes(keyword)) || /^f\d{2,4}\b/i.test(text);
}

function looksLikeConstraint(text) {
  return /constraint|limit|must|shall|compatib|rollback|security|privacy|latency|performance|p95|p99|sla|timeout/i.test(text);
}

function normalizedId(prefix, index) {
  return `${prefix}-${String(index).padStart(3, '0')}`;
}

function collectFacts(workspace, files) {
  const docs = [];
  const features = [];
  const requirements = [];
  const constraints = {
    business: [],
    technical: [],
    compliance: []
  };
  const glossary = [];

  let featureIndex = 1;
  let requirementIndex = 1;

  for (const file of files) {
    const relativePath = rel(workspace, file);
    const content = readText(file);
    const type = sourceType(relativePath);
    const section = sectionFromPath(relativePath);
    const headings = extractHeadings(content);
    const bullets = extractBullets(content);
    const status = inferStatus(content, relativePath);

    docs.push({
      path: relativePath,
      sourceType: type,
      section,
      status,
      headingCount: headings.length,
      bulletCount: bullets.length
    });

    if (type === 'Request') {
      continue;
    }

    for (const heading of headings) {
      const item = heading.text;
      if (type !== 'Glossary' && looksLikeFeature(item) && !looksLikeConstraint(item)) {
        features.push({
          id: normalizedId('feature', featureIndex++),
          name: item,
          module: section || 'unknown',
          status,
          sourceType: type,
          sources: [relativePath]
        });
      }
      if (/requirement|shall|must|prd|spec/i.test(item)) {
        requirements.push({
          id: normalizedId('requirement', requirementIndex++),
          title: item,
          sourceType: type,
          source: relativePath,
          status
        });
      }
    }

    for (const bullet of bullets) {
      if (type !== 'Glossary' && looksLikeFeature(bullet) && !looksLikeConstraint(bullet)) {
        features.push({
          id: normalizedId('feature', featureIndex++),
          name: bullet,
          module: section || 'unknown',
          status,
          sourceType: type,
          sources: [relativePath]
        });
      }
      if (looksLikeConstraint(bullet)) {
        const bucket = /security|privacy|compliance|audit/i.test(bullet)
          ? 'compliance'
          : /api|database|latency|performance|architecture|deploy/i.test(bullet)
            ? 'technical'
            : 'business';
        constraints[bucket].push({ text: bullet, source: relativePath, sourceType: type });
      }
      if (type === 'Glossary' && bullet.includes(':')) {
        const [term, ...rest] = bullet.split(':');
        glossary.push({
          term: term.trim(),
          definition: rest.join(':').trim(),
          source: relativePath
        });
      }
    }
  }

  return { docs, features, requirements, constraints, glossary };
}

function groupBy(items, key) {
  return items.reduce((acc, item) => {
    const value = item[key] || 'unknown';
    acc[value] = acc[value] || [];
    acc[value].push(item);
    return acc;
  }, {});
}

function renderSummary(workspace, facts) {
  const docsByType = groupBy(facts.docs, 'sourceType');
  const featuresByModule = groupBy(facts.features, 'module');
  const lines = [];
  const workspaceLabel = path.basename(workspace);

  lines.push('# Baseline Summary');
  lines.push('');
  lines.push(`Workspace: \`${workspaceLabel}\``);
  lines.push('');
  lines.push('## Source Coverage');
  lines.push('');
  lines.push('| Source type | Files | Notes |');
  lines.push('|---|---:|---|');
  for (const [type, docs] of Object.entries(docsByType).sort()) {
    lines.push(`| ${type} | ${docs.length} | ${docs.map(doc => doc.status).filter((v, i, arr) => arr.indexOf(v) === i).join(', ')} |`);
  }
  lines.push('');

  lines.push('## Feature Inventory Overview');
  lines.push('');
  lines.push('| Module | Feature count |');
  lines.push('|---|---:|');
  for (const [module, features] of Object.entries(featuresByModule).sort()) {
    lines.push(`| ${module} | ${features.length} |`);
  }
  lines.push('');

  lines.push('## Historical Requirement Signals');
  lines.push('');
  if (facts.requirements.length === 0) {
    lines.push('- No explicit requirement headings found.');
  } else {
    for (const req of facts.requirements.slice(0, 30)) {
      lines.push(`- ${req.title} (${req.source})`);
    }
  }
  lines.push('');

  lines.push('## Constraint Signals');
  lines.push('');
  for (const bucket of ['business', 'technical', 'compliance']) {
    lines.push(`### ${bucket}`);
    if (facts.constraints[bucket].length === 0) {
      lines.push('- None detected.');
    } else {
      for (const item of facts.constraints[bucket].slice(0, 20)) {
        lines.push(`- ${item.text} (${item.source})`);
      }
    }
    lines.push('');
  }

  lines.push('## Next Steps');
  lines.push('');
  lines.push('- Review `feature-inventory.json` for noisy or missing features.');
  lines.push('- Add explicit status labels to important source docs if they are missing.');
  lines.push('- Confirm unresolved conflicts manually before generating OpenSpec artifacts.');
  lines.push('');

  return lines.join('\n');
}

function main() {
  const workspace = path.resolve(process.argv[2] || '.');
  if (process.argv.includes('--help')) {
    usage();
    return 0;
  }

  const baselineDir = path.join(workspace, 'baseline');
  if (!fs.existsSync(baselineDir)) {
    console.error(`Missing baseline directory: ${baselineDir}`);
    usage();
    return 1;
  }

  const outputDir = path.join(workspace, 'docs', 'output');
  ensureDir(outputDir);

  const files = walkFiles(baselineDir);
  const facts = collectFacts(workspace, files);

  fs.writeFileSync(path.join(outputDir, 'baseline-summary.md'), renderSummary(workspace, facts), 'utf8');
  writeJson(path.join(outputDir, 'feature-inventory.json'), facts.features);
  writeJson(path.join(outputDir, 'historical-requirements.json'), facts.requirements);
  writeJson(path.join(outputDir, 'known-constraints.json'), facts.constraints);
  writeJson(path.join(outputDir, 'glossary.json'), facts.glossary);

  console.log(`Scanned ${files.length} baseline files.`);
  console.log(`Detected ${facts.features.length} feature signals.`);
  console.log(`Wrote outputs to ${outputDir}`);
  return 0;
}

process.exitCode = main();
