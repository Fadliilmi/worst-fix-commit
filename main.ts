// Worst Fix Ever: Funniest Commit Message — one line, at most 100
// characters: a commit message for the bug fix that made everything worse.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "fix: silence the error logs \u2014 the errors are quiet now, and so is the entire service";
const MAX_CHARS = 100; // the gate's cap for this bounty

mkdirSync("/output", { recursive: true });

// Self-check the gate before writing: 1-MAX_CHARS characters, not only whitespace.
if (LINE.length === 0 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} chars, gate allows 1-${MAX_CHARS}`);
}
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
