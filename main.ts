import { mkdirSync, writeFileSync } from "node:fs";

// One passive-aggressive note from a smart fridge to its owner.
// Written fresh for this bounty: sensors, inventory and the door alarm
// do the nagging, and the last beat flips the polite sign-off.
const NOTE =
  "My sensors say the door has been open 38 seconds. " +
  "My inventory says you are looking for a snack you already ate. " +
  "I have closed the door for you. You are welcome. I am not.";

if (NOTE.length < 1 || NOTE.length > 200) {
  throw new Error(`note must be 1-200 characters, got ${NOTE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");
