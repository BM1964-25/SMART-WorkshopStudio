import { createServer } from "node:http";
import { access, copyFile, mkdir, readFile, stat } from "node:fs/promises";
import { homedir } from "node:os";
import { basename, extname, join, normalize } from "node:path";

const port = Number(process.env.PORT || 3000);
const root = process.cwd();
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf"
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    if (request.method === "POST" && url.pathname === "/api/save-pdf") {
      const requestOrigin = request.headers.origin;
      if (requestOrigin) {
        const originHost = new URL(requestOrigin).hostname;
        if (!["localhost", "127.0.0.1", "::1"].includes(originHost)) throw new Error("Unzulässiger Ursprung");
      }
      const filename = basename(url.searchParams.get("file") || "");
      if (!filename.endsWith(".pdf")) throw new Error("Ungültige PDF Datei");
      const source = join(root, "downloads", "pdf", filename);
      await access(source);
      const downloadsDirectory = join(homedir(), "Downloads");
      await mkdir(downloadsDirectory, { recursive: true });
      const extension = extname(filename);
      const stem = filename.slice(0, -extension.length);
      let savedName = filename;
      let destination = join(downloadsDirectory, savedName);
      let copyNumber = 1;
      while (await access(destination).then(() => true).catch(() => false)) {
        savedName = `${stem} (${copyNumber})${extension}`;
        destination = join(downloadsDirectory, savedName);
        copyNumber += 1;
      }
      await copyFile(source, destination);
      const result = JSON.stringify({ saved: true, filename: savedName });
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Content-Length": Buffer.byteLength(result)
      });
      response.end(result);
      return;
    }
    const requested = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
    let file = join(root, requested === "/" ? "index.html" : requested);
    const info = await stat(file).catch(() => null);
    if (!info || info.isDirectory()) file = join(root, "index.html");
    const body = await readFile(file);
    const extension = extname(file);
    const headers = {
      "Content-Type": types[extension] || "application/octet-stream",
      "Content-Length": body.length
    };
    if (extension === ".pdf") {
      headers["Content-Disposition"] = `attachment; filename="${basename(file)}"`;
      headers["Cache-Control"] = "no-store";
    }
    response.writeHead(200, headers);
    response.end(body);
  } catch {
    response.writeHead(404);
    response.end("Not found");
  }
}).listen(port, () => {
  console.log(`SMART WorkshopStudio läuft auf http://localhost:${port}`);
});
