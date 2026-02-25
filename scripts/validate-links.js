import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

const contentDir = path.join(rootDir, "src");
const publicDir = path.join(rootDir, "public");
const projectsDir = path.join(rootDir, "src", "content", "projects");

function getProjectSlugs() {
  if (!fs.existsSync(projectsDir)) return [];
  return fs
    .readdirSync(projectsDir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

function getValidRoutes() {
  const routes = new Set([
    "/",
    "/work",
    "/about",
    "/resume",
    "/contact",
    "/404",
  ]);

  const slugs = getProjectSlugs();
  slugs.forEach((slug) => routes.add(`/work/${slug}`));

  if (fs.existsSync(path.join(publicDir, "resume.pdf"))) {
    routes.add("/resume.pdf");
  }

  if (fs.existsSync(path.join(publicDir, "favicon.svg"))) {
    routes.add("/favicon.svg");
  }

  if (fs.existsSync(path.join(publicDir, "favicon.ico"))) {
    routes.add("/favicon.ico");
  }

  return routes;
}

function walkFiles(dir, collected = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  entries.forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkFiles(fullPath, collected);
    } else if (entry.isFile()) {
      if (fullPath.endsWith(".astro") || fullPath.endsWith(".md")) {
        collected.push(fullPath);
      }
    }
  });
  return collected;
}

function normalizeHref(href) {
  if (href.length > 1 && href.endsWith("/")) {
    return href.slice(0, -1);
  }
  return href;
}

function main() {
  const validRoutes = getValidRoutes();
  const files = walkFiles(contentDir);
  const errors = [];
  const hrefRegex = /href\s*=\s*"([^"]+)"/g;

  files.forEach((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");
    let match = hrefRegex.exec(raw);

    while (match) {
      const href = match[1];
      if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("#")) {
        match = hrefRegex.exec(raw);
        continue;
      }

      if (href.startsWith("//")) {
        match = hrefRegex.exec(raw);
        continue;
      }

      if (href.startsWith("/")) {
        const normalized = normalizeHref(href);
        if (!validRoutes.has(normalized)) {
          errors.push(`${filePath}: invalid internal link ${href}`);
        }
      }

      match = hrefRegex.exec(raw);
    }
  });

  if (errors.length > 0) {
    console.error(errors.join("\n"));
    process.exit(1);
  }

  console.log("Link validation passed.");
}

main();
