// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt: a quiet mystery that opens a
// real question, withholds the answer, and lands a payoff that keeps working
// after the last line. No network, no randomness, no input: the same text
// every run, so the entry is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In the library basement sits a book nobody remembers shelving. " +
  "Its last page holds one line in my handwriting, dated tomorrow. " +
  "I haven't written it yet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
