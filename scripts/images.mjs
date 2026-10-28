import { mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const photosDir = path.join(root, "public", "photos");
const catalogPath = path.join(root, "src", "data", "galleries.ts");
const categories = [
  "indian-weddings",
  "american-weddings",
  "maternity",
  "children-family",
  "couple-photography",
  "events",
];

const catalogSrc = await readText(catalogPath);
const declared = [
  ...catalogSrc.matchAll(
    /file:\s*"([^"]+)",\s*width:\s*(\d+),\s*height:\s*(\d+),\s*alt:\s*"([^"]+)"/g,
  ),
].map((match) => ({
  file: match[1],
  width: Number(match[2]),
  height: Number(match[3]),
  alt: match[4],
}));

if (declared.length === 0) {
  throw new Error("No photographs parsed from src/data/galleries.ts");
}

const onDisk = [];
for (const category of categories) {
  const dir = path.join(photosDir, category);
  const entries = await readdir(dir);
  for (const name of entries) {
    if (!name.toLowerCase().endsWith(".jpg")) continue;
    onDisk.push(`${category}/${name}`);
  }
}

const declaredFiles = declared.map((photo) => photo.file);
const missing = declaredFiles.filter((file) => !onDisk.includes(file));
const extra = onDisk.filter((file) => !declaredFiles.includes(file));
const problems = [];
if (missing.length) problems.push(`Missing files:\n  ${missing.join("\n  ")}`);
if (extra.length) problems.push(`Not listed in galleries.ts:\n  ${extra.join("\n  ")}`);
if (new Set(declaredFiles).size !== declaredFiles.length) {
  problems.push("Duplicate file entries in galleries.ts");
}
if (declared.some((photo) => photo.alt.trim().length < 12)) {
  problems.push("Every photograph needs a descriptive alt string.");
}
if (problems.length) {
  throw new Error(problems.join("\n\n"));
}

let written = 0;
let skipped = 0;
for (const photo of declared) {
  const source = path.join(photosDir, photo.file);
  const meta = await sharp(source).metadata();
  if (meta.width !== photo.width || meta.height !== photo.height) {
    throw new Error(
      `${photo.file} is ${meta.width}x${meta.height}, catalog says ${photo.width}x${photo.height}`,
    );
  }
  for (const width of [800, 1400]) {
    if (photo.width <= width) continue;
    const dest = path.join(photosDir, `w${width}`, photo.file);
    const sourceStat = await stat(source);
    const destStat = await stat(dest).catch(() => null);
    if (destStat && destStat.mtimeMs >= sourceStat.mtimeMs) {
      skipped += 1;
      continue;
    }
    await mkdir(path.dirname(dest), { recursive: true });
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: width === 800 ? 76 : 80, mozjpeg: true })
      .toFile(dest);
    written += 1;
  }
}

console.log(
  `Catalog OK (${declared.length} photographs). Thumbnails written: ${written}, reused: ${skipped}.`,
);

async function readText(file) {
  const { readFile } = await import("node:fs/promises");
  return readFile(file, "utf8");
}
