#!/usr/bin/env node
const { execSync } = require("node:child_process");

const message = process.argv.slice(2).join(" ").trim();

if (!message) {
  console.error('Usage: npm run save -- "your commit message"');
  console.error("Example: npm run save -- feat: add hero section");
  process.exit(1);
}

try {
  console.log("› git add .");
  execSync("git add .", { stdio: "inherit" });

  const status = execSync("git status --porcelain").toString().trim();
  if (!status) {
    console.log("Nothing to commit, working tree clean.");
    process.exit(0);
  }

  const safeMessage = message.replace(/"/g, '\\"');
  console.log(`› git commit -m "${safeMessage}"`);
  execSync(`git commit -m "${safeMessage}"`, { stdio: "inherit" });

  console.log("› git push");
  execSync("git push", { stdio: "inherit" });

  console.log("✓ Saved and pushed.");
} catch (err) {
  console.error("\n✗ Failed. Stop before retrying.");
  process.exit(1);
}