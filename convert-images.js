const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'projects');
if (!fs.existsSync(dir)) {
  console.error("Directory public/projects does not exist");
  process.exit(1);
}

const files = fs.readdirSync(dir);
console.log("Found files:", files);

const promises = files.map(file => {
  if (file.endsWith('.png')) {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace('.png', '.webp'));
    console.log(`Converting ${file} to WebP...`);
    return sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Successfully converted ${file} to WebP`);
        fs.unlinkSync(inputPath);
        console.log(`Deleted original PNG: ${file}`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  }
  return Promise.resolve();
});

Promise.all(promises).then(() => {
  console.log("All image conversions completed successfully.");
});
