import fs from 'fs';
import path from 'path';

const SRC_DIR = path.join(process.cwd(), 'src');

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let resolvedFiles = [];
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      resolvedFiles = resolvedFiles.concat(walkDir(fullPath));
    } else if (fullPath.endsWith('.jsx')) {
      resolvedFiles.push(fullPath);
    }
  }
  return resolvedFiles;
}

const allFiles = walkDir(SRC_DIR);

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let hasChanges = false;
  
  // Replace fetch('http://localhost:3000/...') with apiFetch('/...')
  if (content.includes("fetch('http://localhost:3000/")) {
    content = content.replace(/fetch\('http:\/\/localhost:3000\//g, "apiFetch('/");
    hasChanges = true;
  }
  
  // Replace fetch(`http://localhost:3000/...`) with apiFetch(`/...`)
  if (content.includes("fetch(`http://localhost:3000/")) {
    content = content.replace(/fetch\(`http:\/\/localhost:3000\//g, "apiFetch(`/");
    hasChanges = true;
  }
  
  if (hasChanges) {
    // Inject import at the top if it doesn't exist
    if (!content.includes("apiFetch")) continue; // Fallback
    if (!content.includes("import { apiFetch }")) {
      // Calculate relative path to src/services/api
      const fileDir = path.dirname(file);
      const relativePath = path.relative(fileDir, path.join(SRC_DIR, 'services', 'api'));
      const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
      const importStatement = `import { apiFetch } from '${importPath.replace(/\\/g, '/')}';\n`;
      
      // Inject after the first import React... or right at the top
      content = importStatement + content;
    }
    
    fs.writeFileSync(file, content);
    console.log(`Updated fetch calls in ${file}`);
  }
}
console.log("Codemod Complete.");
