const fs = require('fs');
const path = require('path');

function copyAssets() {
  const srcDir = 'src';
  const distDir = 'dist';

  // Configuration for assets to copy
  const assetConfig = {
    // Directory-based copying with file extensions
    directories: [
      {
        name: 'CSS and SVG assets',
        sourceDir: srcDir,
        extensions: ['.css', '.svg'],
        description: 'Copies all CSS and SVG files from src directory'
      }
    ],
    
    // Individual file copying
    files: [
      {
        name: 'Tailwind config',
        source: '../../tailwind.config.cjs',
        destination: path.join(distDir, 'utils', 'tailwind.config.js'),
        description: 'Tailwind config for export via "./tailwind/preset"'
      },
      {
        name: 'Tailwind extend config',
        source: '../../tailwindExtend.json',
        destination: path.join(distDir, 'utils', 'tailwindExtend.json'),
        description: 'Tailwind extend configuration dependency'
      }
    ]
  };

  function copyFile(src, dest) {
    const destDir = path.dirname(dest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(src, dest);
    console.log(`Copied: ${src} -> ${dest}`);
  }

  function updateThemeConfigPath() {
    const themeFilePath = path.join(distDir, 'theme.css');
    
    if (!fs.existsSync(themeFilePath)) {
      console.log('Warning: theme.css not found in dist directory');
      return;
    }

    console.log('Updating Tailwind config path in theme.css...');
    console.log('  Fixing path reference for published package');
    
    // Read the theme.css file
    let themeContent = fs.readFileSync(themeFilePath, 'utf8');
    
    // Replace the config path to point to the copied config in utils
    const oldConfigPath = '@config \'../../../tailwind.config.cjs\';';
    const newConfigPath = '@config \'./utils/tailwind.config.js\';';
    
    if (themeContent.includes(oldConfigPath)) {
      themeContent = themeContent.replace(oldConfigPath, newConfigPath);
      fs.writeFileSync(themeFilePath, themeContent, 'utf8');
      console.log(`Updated config path: ${oldConfigPath} -> ${newConfigPath}`);
    } else {
      console.log('Warning: Expected config path not found in theme.css');
    }
  }

  function walkDir(dir, extensions) {
    if (!fs.existsSync(dir)) {
      console.log(`Source directory ${dir} does not exist`);
      return;
    }
    
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath, extensions);
      } else if (extensions.some(ext => file.endsWith(ext))) {
        const relativePath = path.relative(srcDir, filePath);
        const destPath = path.join(distDir, relativePath);
        copyFile(filePath, destPath);
      }
    });
  }

  // Process directory-based copying
  assetConfig.directories.forEach(dirConfig => {
    console.log(`Copying ${dirConfig.name}...`);
    console.log(`  ${dirConfig.description}`);
    walkDir(dirConfig.sourceDir, dirConfig.extensions);
  });

  // Process individual file copying
  assetConfig.files.forEach(fileConfig => {
    console.log(`Copying ${fileConfig.name}...`);
    console.log(`  ${fileConfig.description}`);
    
    if (fs.existsSync(fileConfig.source)) {
      copyFile(fileConfig.source, fileConfig.destination);
    } else {
      console.log(`Warning: ${fileConfig.source} not found`);
    }
  });

  // Post-processing: Update theme.css config path for published package
  updateThemeConfigPath();
  
  console.log('Asset copying complete!');
}

copyAssets();