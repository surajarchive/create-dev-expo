#!/usr/bin/env node

// index.ts
import { execSync } from "child_process";
import { createInterface } from "readline";
import fs from "fs";
import path from "path";
var rl = createInterface({
  input: process.stdin,
  output: process.stdout
});
function ask(q) {
  return new Promise((res) => rl.question(q, (a) => res(a.trim())));
}
async function main() {
  const name = await ask("Project name (first-mbile-app): ") || "first-mbile-app";
  rl.close();
  console.log(`
\uD83D\uDE80 Creating project: ${name}
`);
  execSync(`git clone https://github.com/surajarchive/expo-tailwind-template.git ${name}`, { stdio: "inherit" });
  const projectPath = path.join(process.cwd(), name);
  process.chdir(projectPath);
  fs.rmSync(".git", { recursive: true, force: true });
  execSync("git init", { stdio: "ignore" });
  const pkgPath = path.join(projectPath, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  pkg.name = name;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  console.log(`
\uD83D\uDCE6 Installing dependencies...
`);
  execSync("bun install", { stdio: "inherit" });
  console.log(`
✅ Project ready
`);
  console.log(`cd ${name}`);
  console.log("bun dev");
}
main();
