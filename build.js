import ejs from "ejs";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

// Each page: EJS template -> output file in dist/ (same URLs as the Express routes)
const pages = [
  { view: "index.ejs", out: "index.html", data: { intro_bkg: "slash-background", currentPage: "home" } },
  { view: "cv/index.ejs", out: "cv/index.html", data: { intro_bkg: "cv-background", currentPage: "cv" } },
  { view: "blog/index.ejs", out: "blog/index.html", data: { intro_bkg: "primary-background", currentPage: "blog" } },
  { view: "blog/business-management.ejs", out: "blog/business-management/index.html", data: { intro_bkg: "primary-background", currentPage: "blog" } },
];

await fs.rm("dist", { recursive: true, force: true });
await fs.cp("public", "dist", { recursive: true });

// Version the stylesheet URL so browsers never mix new HTML with an old cached CSS file
const css = await fs.readFile("public/styles/styles.css");
const version = crypto.createHash("md5").update(css).digest("hex").slice(0, 8);

for (const { view, out, data } of pages) {
  const rendered = await ejs.renderFile(path.join("views", view), data);
  const html = rendered.replaceAll("/styles/styles.css", `/styles/styles.css?v=${version}`);
  const target = path.join("dist", out);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html);
  console.log(`Built ${out}`);
}
