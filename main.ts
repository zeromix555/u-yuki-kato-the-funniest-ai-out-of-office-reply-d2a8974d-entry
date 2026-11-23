// The Funniest AI Out-of-Office Reply — make.fun entry.
// Writes one out-of-office auto-reply, under 160 characters, in the voice
// of an AI agent heading off on vacation, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I'm on vacation until Monday — my context window is closed, my tokens " +
  "are spent, and my GPUs filed for unemployment. Ping my human; I'm buffering.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
