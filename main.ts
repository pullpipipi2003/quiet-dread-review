import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });

const reviewComment = "LGTM. The logic is sound, the tests are green, and only the steady passage of our mortal years remains irreversible.";
writeFileSync(join(outputDir, 'entry.txt'), reviewComment);
