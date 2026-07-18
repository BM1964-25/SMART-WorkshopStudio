import { mkdir, stat } from "node:fs/promises";
import { spawn } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const outputDir = join(root, "downloads", "pdf");
const chrome = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 4173;

const presentations = [
  ["module", "mod-ki-tools-praxiseinsatz", "leistungsstarke-ki-tools-im-praxiseinsatz.pdf"],
  ["module", "mod-notebooklm", "notebooklm-praxisnah-einsetzen.pdf"],
  ["module", "mod-ki-grundlagen", "grundlagen-der-kunstlichen-intelligenz.pdf"],
  ["module", "mod-ki-entwicklung-zukunft", "die-entwicklung-der-kunstlichen-intelligenz.pdf"],
  ["module", "mod-ki-werkzeuge", "ki-werkzeuge-gezielt-einsetzen.pdf"],
  ["module", "mod-prompting", "professionelles-prompt-engineering.pdf"],
  ["module", "mod-transfer", "transfer-in-den-arbeitsalltag.pdf"],
  ["module", "mod-chatgpt-claude-web-api", "chatgpt-vs-claude-web-app-und-api-im-vergleich.pdf"],
  ["module", "mod-ki-modelle-vergleich", "ki-modelle-im-vergleich-welches-modell-fur-welche-aufgabe.pdf"],
  ["workshop", "ws-ki-kompakt", "ki-kompaktworkshop.pdf"]
];

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit", ...options });
    child.once("error", reject);
    child.once("exit", (code) => code === 0 ? resolve() : reject(new Error(`${command} wurde mit Status ${code} beendet`)));
  });
}

await stat(chrome);
await mkdir(outputDir, { recursive: true });

const server = spawn(process.execPath, ["server.mjs"], {
  cwd: root,
  env: { ...process.env, PORT: String(port) },
  stdio: ["ignore", "pipe", "inherit"]
});

try {
  await wait(900);
  for (const [type, id, filename] of presentations) {
    const url = `http://127.0.0.1:${port}/?pdfType=${encodeURIComponent(type)}&pdfId=${encodeURIComponent(id)}`;
    const target = join(outputDir, filename);
    await run(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      "--run-all-compositor-stages-before-draw",
      "--virtual-time-budget=5000",
      `--print-to-pdf=${target}`,
      url
    ]);
  }
} finally {
  server.kill("SIGTERM");
}

console.log(`${presentations.length} PDF Präsentationen wurden unter downloads/pdf erstellt.`);
