// Famous Last Words at 1 Percent entry.
// Writes one original line — the last words a phone says as its battery
// hits 1 percent — to /output/entry.txt, where the sealed scorer gates it
// (1-199 characters) and the judge reads it head to head.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Battery at 1%. My last words: I know about the other phone. And the tablet.";

// Refuse to write anything outside the gate instead of submitting
// an invalid entry. The gate also rejects a file that is only
// white space, so check the trimmed line too.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`Line is ${LINE.length} characters, outside the 1-199 gate.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
