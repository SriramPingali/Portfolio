import ejs from "ejs";
import fs from "fs/promises";
import path from "path";

// Each page: EJS template -> output file in dist/ (same URLs as the Express routes)
const pages = [
  { view: "index.ejs", out: "index.html", data: { intro_bkg: "slash-background", currentPage: "home" } },
  { view: "cv/index.ejs", out: "cv/index.html", data: { intro_bkg: "cv-background", currentPage: "cv" } },
  { view: "blog/index.ejs", out: "blog/index.html", data: { intro_bkg: "primary-background", currentPage: "blog" } },
  { view: "blog/business-management.ejs", out: "blog/business-management/index.html", data: { intro_bkg: "primary-background", currentPage: "blog" } },
];

await fs.rm("dist", { recursive: true, force: true });
await fs.cp("public", "dist", { recursive: true });

for (const { view, out, data } of pages) {
  const html = await ejs.renderFile(path.join("views", view), data);
  const target = path.join("dist", out);
  await fs.mkdir(path.dirname(target), { recursive: true });
  await fs.writeFile(target, html);
  console.log(`Built ${out}`);
}
