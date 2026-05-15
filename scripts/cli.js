#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');

function usage() {
  console.log(`product-requirement-foundry

Usage:
  product-requirement-foundry init <workspace-dir>
  product-requirement-foundry prepare <workspace-dir>
  product-requirement-foundry scan <workspace-dir>
  product-requirement-foundry score <workspace-dir>

Commands:
  init   Create a ready-to-fill requirement workspace from starter/
  prepare Convert pm-input.md into baseline/request/request.md and request.yaml
  scan   Generate baseline-summary and feature-inventory from baseline/
  score  Generate confidence-report and confidence-score from docs/output/
`);
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

function ensureTarget(target) {
  if (!target) fail('Missing <workspace-dir>.');
  return path.resolve(target);
}

function copyStarter(target) {
  const source = path.join(ROOT, 'starter');
  if (!fs.existsSync(source)) fail(`Starter folder not found: ${source}`);
  if (fs.existsSync(target) && fs.readdirSync(target).length > 0) {
    fail(`Target exists and is not empty: ${target}`);
  }
  fs.mkdirSync(target, { recursive: true });
  fs.cpSync(source, target, { recursive: true });
  console.log(`Created product-requirement-foundry workspace: ${target}`);
  console.log('Next: fill pm-input.md first, then place any historical files into baseline/.');
}

function runScript(script, target) {
  const result = spawnSync(process.execPath, [path.join(ROOT, 'scripts', script), target], {
    stdio: 'inherit'
  });
  process.exit(result.status || 0);
}

const [, , command, targetArg] = process.argv;
const target = command === 'help' || command === '--help' || !command ? null : ensureTarget(targetArg);

switch (command) {
  case 'init':
    copyStarter(target);
    break;
  case 'scan':
    runScript('baseline-scan.js', target);
    break;
  case 'prepare':
    runScript('prepare-pm-input.js', target);
    break;
  case 'score':
    runScript('confidence-score.js', target);
    break;
  case 'help':
  case '--help':
  case undefined:
    usage();
    break;
  default:
    usage();
    fail(`Unknown command: ${command}`);
}
