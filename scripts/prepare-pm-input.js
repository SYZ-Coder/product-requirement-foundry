#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function usage() {
  console.log('Usage: node scripts/prepare-pm-input.js <workspace-dir>');
  console.log('Reads pm-input.md or pm-input.zh-CN.md and updates baseline/request/request.md and request.yaml.');
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function read(file) {
  return fs.readFileSync(file, 'utf8');
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.replace(/\r?\n/g, '\n') + '\n', 'utf8');
}

function escapeYaml(value) {
  return String(value || '').replace(/"/g, '\\"');
}

function extractSections(content) {
  const sections = {};
  const regex = /^##\s+(.+?)\s*$/gm;
  const matches = [...content.matchAll(regex)];

  for (let i = 0; i < matches.length; i += 1) {
    const title = matches[i][1].trim();
    const start = matches[i].index + matches[i][0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : content.length;
    sections[title] = content.slice(start, end).trim();
  }

  return sections;
}

function cleanBlock(text) {
  return (text || '')
    .replace(/```(?:text)?/g, '')
    .replace(/^Example:\s*$/gim, '')
    .trim();
}

function firstMeaningfulLine(text) {
  const lines = cleanBlock(text)
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .filter(line => !/^[-*]\s*$/.test(line));
  return lines[0] || '';
}

function listLines(text) {
  return cleanBlock(text)
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .filter(line => !/^Example:$/i.test(line));
}

function extractFieldsFromSections(sections, isChineseTemplate) {
  return {
    oneLineRequest: firstMeaningfulLine(sections[isChineseTemplate ? '1. 一句话需求' : '1. One-Line Request']),
    productOrModule: firstMeaningfulLine(sections[isChineseTemplate ? '2. 所属产品或模块' : '2. Product Or Module']),
    businessGoal: firstMeaningfulLine(sections[isChineseTemplate ? '3. 业务目标' : '3. Business Goal']),
    currentSituation: firstMeaningfulLine(sections[isChineseTemplate ? '4. 当前情况' : '4. Current Situation']),
    historicalMaterials: listLines(sections[isChineseTemplate ? '5. 你手上已有的历史资料' : '5. Historical Materials You Already Have']),
    nonGoals: listLines(sections[isChineseTemplate ? '6. 非目标或边界' : '6. Non-Goals Or Boundaries']),
    openQuestions: listLines(sections[isChineseTemplate ? '7. 开放问题' : '7. Open Questions']),
    deliveryExpectation: firstMeaningfulLine(sections[isChineseTemplate ? '8. 期望产出' : '8. Delivery Expectation']),
  };
}

function fieldScore(fields) {
  return [
    fields.oneLineRequest,
    fields.productOrModule,
    fields.businessGoal,
    fields.currentSituation,
    fields.deliveryExpectation,
    fields.historicalMaterials.length ? '1' : '',
    fields.nonGoals.length ? '1' : '',
    fields.openQuestions.length ? '1' : '',
  ].filter(Boolean).length;
}

function yamlList(items) {
  if (!items.length) return '[]';
  return `\n${items.map(item => `  - "${escapeYaml(item)}"`).join('\n')}`;
}

function buildRequestMd(fields) {
  const historicalRows = fields.historicalMaterials.length
    ? fields.historicalMaterials.map(item => `| PM Input | ${item} | Provided by product manager |`).join('\n')
    : '| PM Input |  |  |';

  const openQuestions = fields.openQuestions.length
    ? fields.openQuestions.map(item => `- ${item}`).join('\n')
    : '- ';

  return `# Requirement Intake

## One-Line Request

${fields.oneLineRequest || 'Describe the request in one sentence.'}

## Product Context

- Product: ${fields.productOrModule || ''}
- Domain:
- Platforms:
- Target users:

## Expected Output

- Output type: ${fields.deliveryExpectation || 'PRD for development'}
- Preferred mode: auto
- Must reference history: yes

## Known Background

- Why this request exists: ${fields.businessGoal || ''}
- Current problem: ${fields.currentSituation || ''}
- Expected business or user value: ${fields.businessGoal || ''}

## Known Constraints

- Business constraints: ${fields.nonGoals.join('; ')}
- Technical constraints:
- Compliance constraints:

## Relevant Historical Assets

List the most relevant files or folders.

| Source type | Path | Notes |
|---|---|---|
${historicalRows}

## Open Questions

${openQuestions}`;
}

function buildRequestYaml(fields) {
  const platforms = [];
  return `project:
  name: "${escapeYaml(fields.productOrModule)}"
  domain: ""
  platforms:${yamlList(platforms)}

request:
  one_liner: "${escapeYaml(fields.oneLineRequest)}"
  expected_output: prd_for_dev
  preferred_mode: auto
  must_reference_history: true

baseline_sources:
  - type: openspec
    path: baseline/openspec/
    enabled: true
  - type: wiki
    path: baseline/wiki/
    enabled: true
  - type: knowledge_wiki
    path: baseline/knowledge/
    enabled: true
  - type: prd
    path: baseline/prd/
    enabled: true
  - type: design
    path: baseline/design/
    enabled: true
  - type: api
    path: baseline/api/
    enabled: true
  - type: data
    path: baseline/data/
    enabled: true
  - type: tracking
    path: baseline/tracking/
    enabled: true
  - type: operations
    path: baseline/operations/
    enabled: true
  - type: glossary
    path: baseline/glossary/
    enabled: true

constraints:
  preserve_terminology: true
  mark_assumptions: true
  output_language: zh-CN

output:
  directory: docs/output/
  files:
    - prd.md
    - impact-analysis.md
    - baseline-references.md
    - change-checklist.md
    - open-questions.md
    - consistency-review.md`;
}

const workspace = process.argv[2] ? path.resolve(process.argv[2]) : null;
if (!workspace) {
  usage();
  process.exit(1);
}

const pmInputCandidates = [
  path.join(workspace, 'pm-input.zh-CN.md'),
  path.join(workspace, 'pm-input.md')
];
const availablePmInputs = pmInputCandidates.filter(file => fs.existsSync(file));
if (!availablePmInputs.length) {
  fail(`pm-input.md or pm-input.zh-CN.md not found in ${workspace}`);
}
const parsedCandidates = availablePmInputs.map(file => {
  const sections = extractSections(read(file));
  const isChineseTemplate = file.endsWith('pm-input.zh-CN.md');
  const fields = extractFieldsFromSections(sections, isChineseTemplate);
  const stat = fs.statSync(file);
  return { file, fields, score: fieldScore(fields), mtimeMs: stat.mtimeMs };
});
parsedCandidates.sort((a, b) => {
  if (b.mtimeMs !== a.mtimeMs) return b.mtimeMs - a.mtimeMs;
  return b.score - a.score;
});
const pmInputPath = parsedCandidates[0].file;
const fields = parsedCandidates[0].fields;

const requestMdPath = path.join(workspace, 'baseline', 'request', 'request.md');
const requestYamlPath = path.join(workspace, 'baseline', 'request', 'request.yaml');

write(requestMdPath, buildRequestMd(fields));
write(requestYamlPath, buildRequestYaml(fields));

console.log(`Prepared request files from ${path.basename(pmInputPath)} in ${workspace}`);
