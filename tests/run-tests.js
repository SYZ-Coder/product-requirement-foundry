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

  assert(fs.existsSync(path.join(target, 'pm-input.md')));
  assert(fs.existsSync(path.join(target, 'baseline', 'request', 'request.md')));
  assert(fs.existsSync(path.join(target, 'baseline', 'request', 'request.yaml')));
  assert(fs.existsSync(path.join(target, 'docs', 'output')));
}

function testPreparePmInput() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'product-requirement-foundry-prepare-'));
  run([path.join(ROOT, 'scripts', 'cli.js'), 'init', tmp]);

  write(path.join(tmp, 'pm-input.md'), `# PM Input

## 1. One-Line Request

Prioritize comments from followed users.

## 2. Product Or Module

Social app / post detail page / comment list

## 3. Business Goal

Improve familiar-interaction perception.

## 4. Current Situation

Comments are currently ordered by relevance.

## 5. Historical Materials You Already Have

- old comment PRD
- comment API note

## 6. Non-Goals Or Boundaries

- do not rebuild the whole comment system

## 7. Open Questions

- Should followed-user comments have a badge?

## 8. Delivery Expectation

Generate a PRD and confidence report.`);

  run([path.join(ROOT, 'scripts', 'cli.js'), 'prepare', tmp]);

  const requestMd = fs.readFileSync(path.join(tmp, 'baseline', 'request', 'request.md'), 'utf8');
  const requestYaml = fs.readFileSync(path.join(tmp, 'baseline', 'request', 'request.yaml'), 'utf8');

  assert(requestMd.includes('Prioritize comments from followed users.'));
  assert(requestMd.includes('Social app / post detail page / comment list'));
  assert(requestYaml.includes('one_liner: "Prioritize comments from followed users."'));
  assert(requestYaml.includes('name: "Social app / post detail page / comment list"'));
}

function testPreparePmInputChinese() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'product-requirement-foundry-prepare-zh-'));
  run([path.join(ROOT, 'scripts', 'cli.js'), 'init', tmp]);

  write(path.join(tmp, 'pm-input.zh-CN.md'), `# 产品经理输入

## 1. 一句话需求

让关注的人评论优先展示。

## 2. 所属产品或模块

社交 App / 帖子详情页 / 评论列表

## 3. 业务目标

提升熟人互动感知。

## 4. 当前情况

当前评论按相关性排序。

## 5. 你手上已有的历史资料

- 旧评论 PRD
- 评论接口说明

## 6. 非目标或边界

- 不重做评论系统

## 7. 开放问题

- 是否需要徽标？

## 8. 期望产出

生成 PRD 和可信度报告。`);

  run([path.join(ROOT, 'scripts', 'cli.js'), 'prepare', tmp]);

  const requestMd = fs.readFileSync(path.join(tmp, 'baseline', 'request', 'request.md'), 'utf8');
  const requestYaml = fs.readFileSync(path.join(tmp, 'baseline', 'request', 'request.yaml'), 'utf8');

  assert(requestMd.includes('让关注的人评论优先展示。'));
  assert(requestYaml.includes('one_liner: "让关注的人评论优先展示。"'));
  assert(requestYaml.includes('name: "社交 App / 帖子详情页 / 评论列表"'));
}

testScanner();
testConfidenceBlocked();
testCliInit();
testPreparePmInput();
testPreparePmInputChinese();

console.log('All tests passed.');
