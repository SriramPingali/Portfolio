import http from "http";
import fs from "fs/promises";
import path from "path";

// Tiny static server for previewing dist/ (never caches, so edits always show up)
const types = { ".html": "text/html", ".css": "text/css", ".js": "text/javascript", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".svg": "image/svg+xml" };

http.createServer(async (req, res) => {
  let file = path.join("dist", decodeURIComponent(new URL(req.url, "http://x").pathname));
  try {
    if ((await fs.stat(file)).isDirectory()) file = path.join(file, "index.html");
    res.writeHead(200, { "Content-Type": types[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(await fs.readFile(file));
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(3000, () => console.log("Preview at http://localhost:3000"));
