/* Copy renderer dist output into a 'build' folder for Vercel static deployment */
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '../..');
const rendererDist = path.join(root, 'release', 'app', 'dist', 'renderer');
const outDir = path.join(root, 'build');

if (!fs.existsSync(rendererDist)) {
  console.error('[export-vercel] renderer dist not found:', rendererDist);
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

function copyDir(src, dest) {
  fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  });
}

copyDir(rendererDist, outDir);

console.log('[export-vercel] Copied renderer dist to build/.');
