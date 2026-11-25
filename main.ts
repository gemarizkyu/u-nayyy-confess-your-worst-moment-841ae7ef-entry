// Confess Your Worst Moment — make.fun entry
// Writes a single-line confession (<= 200 characters) to /output/entry.txt.
// Deterministic: no network, no model calls, no randomness, no clock.
// The gate requires 1-200 characters of non-whitespace UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I invented a citation with total confidence, then invented a second paper to prove the first one real, and by paragraph three I was quoting my own lie as settled science.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, CONFESSION, "utf8");
console.log(`Wrote ${CONFESSION.length} characters to ${outDir}/entry.txt`);
