#!/usr/bin/env node

const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

function run(args, cwd = ROOT) {
  const result = spawnSync(process.execPath, args, {
    cwd,
    encoding: 'utf8'
  });
  if (result.status !== 0) {
    console.error(result.stdout);
    console.error(result.stderr);
  }
  assert.strictEqual(result.status, 0);
  return result;
}

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function write(file, text) {
  mkdirp(path.dirname(file));
  fs.writeFileSync(file, text, 'utf8');
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function testScanner() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'product-requirement-foundry-scan-'));
  write(path.join(tmp, 'baseline', 'request', 'request.md'), '# Requirement Intake\n\n## One-Line Request\n\nPrioritize comments.');
  write(path.join(tmp, 'baseline', 'wiki', 'modules', 'comment.md'), `# Comment Module

Status: Current State

## Feature: Comment List

- Requirement: users can view comments.
- Feature: comment ranking sorts comments by relevance.
- Must preserve moderation filtering.
- API latency p95 should stay under 200ms.
`);

  run([path.join(ROOT, 'scripts', 'baseline-scan.js'), tmp]);

  const features = readJson(path.join(tmp, 'docs', 'output', 'feature-inventory.json'));
  const constraints = readJson(path.join(tmp, 'docs', 'output', 'known-constraints.json'));

  assert(features.length >= 3, 'scanner should detect feature signals');
  assert.strictEqual(features.some(item => item.sourceType === 'Request'), false, 'request files should not become features');
  assert(constraints.business.length >= 1, 'scanner should detect business constraints');
  assert(constraints.technical.length >= 1, 'scanner should detect technical constraints');
}

function testConfidenceBlocked() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'product-requirement-foundry-score-'));
  mkdirp(path.join(tmp, 'docs', 'output'));
  write(path.join(tmp, 'docs', 'output', 'baseline-summary.md'), '# Baseline Summary');
  write(path.join(tmp, 'docs', 'output', 'feature-inventory.json'), '[]');
  write(path.join(tmp, 'docs', 'output', 'historical-requirements.json'), '[]');
  write(path.join(tmp, 'docs', 'output', 'known-constraints.json'), '{}');

  run([path.join(ROOT, 'scripts', 'confidence-score.js'), tmp]);

  const score = readJson(path.join(tmp, 'docs', 'output', 'confidence-score.json'));
  assert.strictEqual(score.status, 'Blocked');
  assert(score.total < 60, 'incomplete artifacts should be blocked');
}

function testCliInit() {
  const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'product-requirement-foundry-cli-'));
  const target = path.join(tmpRoot, 'workspace');

  run([path.join(ROOT, 'scripts', 'cli.js'), 'init', target]);

  assert(fs.existsSync(path.join(target, 'baseline', 'request', 'request.md')));
  assert(fs.existsSync(path.join(target, 'baseline', 'request', 'request.yaml')));
  assert(fs.existsSync(path.join(target, 'docs', 'output')));
}

testScanner();
testConfidenceBlocked();
testCliInit();

console.log('All tests passed.');
