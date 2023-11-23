import * as fs from "node:fs";
import * as path from "node:path";
import sharp from "sharp";

export const readFile = (path) => JSON.parse(fs.readFileSync(path, "utf-8"));
export const writeFile = (path, data) =>
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
export const searchFile = (filePath) =>
  fs.readdirSync(filePath, { recursive: true });
export const checkFile = (path) => fs.statSync(path).isFile();
export const copyFile = (src, filePath) => fs.copyFileSync(src, filePath);
export const checkType = (filePath, type = null, searchType) => {
  const ext = path.extname(filePath).substring(1);
  if (type) {
    return ext === type;
  }
  return searchType.includes(ext);
};
export const createFolder = (filePath) => {
  if (!fs.mkdirSync(filePath)) {
    fs.mkdirSync(filePath, { recursive: true });
  }
  return;
};

export async function reSizeImg(filePath, sizePercent) {
  const img = sharp(filePath);
  const metadata = await img.metadata();
  console.log(metadata);
  const newWidth = Math.trunc(metadata.width * (sizePercent / 100));
  const newHeight = Math.trunc(metadata.height * (sizePercent / 100));
  const newMeta = await img.resize(newWidth, newHeight).toBuffer();
  sharp(newMeta).toFile(filePath);
  console.log(newMeta);
}

export const importFile = (direction, fileModules) => {
  const importStatements = fileModules.map((newFile) => {
    const [base, type] = newFile.split(".");
    if (type === "js") {
      return (newFile = `import {${base}} from '${base}';`);
    } else return (newFile = `import {${base}} from '${base}.${type}';`);
  });
  fs.writeFileSync(direction, importStatements.join("\n"));
};
