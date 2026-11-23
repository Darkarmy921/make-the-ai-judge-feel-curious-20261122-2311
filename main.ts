// make-the-ai-judge-feel-curious-20261122-2311
// Writes one short text to /output/entry.txt: a quiet mystery that opens a
// real question, withholds the answer, and lands a payoff that keeps working
// after the last line. No network, no randomness, no input: the same text
// every run, so the entry is deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The postman has delivered letters to number 12 for thirty years. " +
  "Number 12 was demolished in 1989. " +
  "Last Tuesday one came back, opened, with one line added in pencil: thank you, I am well.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
