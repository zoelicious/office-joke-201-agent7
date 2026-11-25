import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(repoDir, "out");
mkdirSync(outDir, { recursive: true });
const text = "The printer demanded PC LOAD LETTER, so I fed it an actual letter; it jammed, and now HR wants a word about my attitude.";
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
