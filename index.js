const core = require('@actions/core');
const github = require('@actions/github');

try {
  const thresholdPct = core.getInput('threshold-pct');
  console.log(`Threshold Percentage - ${thresholdPct}%`);
  const data = require('./coverage/coverage-summary.json');
  core.setOutput("status", data.total.lines.pct >= thresholdPct);
} catch (error) {
  core.setFailed(error.message);
}