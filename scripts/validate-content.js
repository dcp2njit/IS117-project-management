import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const projectsDir = path.join(rootDir, "src", "content", "projects");

const requiredFields = [
  "title",
  "published",
  "featured",
  "role",
  "timeframe",
  "team",
  "stack",
  "summary",
  "outcomes",
  "claims",
  "heroImage",
];

function parseFrontmatter(content, filePath) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
  if (!match) {
    throw new Error(`Missing frontmatter: ${filePath}`);
  }
  return YAML.parse(match[1]);
}

function validateProject(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const data = parseFrontmatter(raw, filePath);

  const missing = requiredFields.filter((field) => !(field in data));
  if (missing.length > 0) {
    throw new Error(`Missing required fields in ${filePath}: ${missing.join(", ")}`);
  }

  if (!Array.isArray(data.stack) || data.stack.length === 0) {
    throw new Error(`stack must be a non-empty array in ${filePath}`);
  }

  if (!Array.isArray(data.outcomes) || data.outcomes.length === 0) {
    throw new Error(`outcomes must be a non-empty array in ${filePath}`);
  }

  if (!Array.isArray(data.claims) || data.claims.length === 0) {
    throw new Error(`claims must be a non-empty array in ${filePath}`);
  }

  data.claims.forEach((claim, index) => {
    if (!claim.receiptUrl || typeof claim.receiptUrl !== "string") {
      throw new Error(
        `claims[${index}].receiptUrl is required in ${filePath}`
      );
    }
  });
}

function main() {
  if (!fs.existsSync(projectsDir)) {
    console.error(`Projects directory not found: ${projectsDir}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(projectsDir)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(projectsDir, name));

  if (files.length === 0) {
    console.error("No project markdown files found.");
    process.exit(1);
  }

  files.forEach(validateProject);
  console.log("Content validation passed.");
}

main();
