import { copyFile, cp, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, "dist");
const files = ["index.html", "styles.css", "app.js"];
const directories = ["assets", "downloads"];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

await Promise.all(files.map((file) => copyFile(join(root, file), join(output, file))));
await Promise.all(directories.map((directory) => cp(join(root, directory), join(output, directory), { recursive: true })));

console.log("Statische Vercel Ausgabe unter dist erstellt.");
