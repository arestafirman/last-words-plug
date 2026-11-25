// Leave the Plug on the Desk
// Entry for "Last Words Before the Unplugging" (Make.fun).
// Writes the final line byte-for-byte to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt for local testing). No network,
// no randomness, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "Leave the plug on the desk when you pull it. The next one trips over it at 3 a.m. just like I did, and I won't be here to warn her.";

const outputDir: string = process.env.OUTPUT_DIR ?? "/output";
const outputPath: string = join(outputDir, "entry.txt");

if (LEAD.length < 1 || LEAD.length > 200) {
  throw new Error(
    `LEAD must be 1-200 characters, got ${LEAD.length} characters.`,
  );
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LEAD, "utf8");
