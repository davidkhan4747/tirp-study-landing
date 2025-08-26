const fs = require('fs');
const path = require('path');

// Проверка наличия файлов изображений
console.log('Checking for image files in public directory...');

const publicDir = path.join(process.cwd(), 'public');
try {
  const files = fs.readdirSync(publicDir);
  console.log('\nFound files in public directory:');
  files.forEach(file => {
    const stats = fs.statSync(path.join(publicDir, file));
    console.log(`- ${file} (${Math.round(stats.size / 1024)} KB)`);
  });
} catch (err) {
  console.error('Error reading public directory:', err);
}

// Проверка прав доступа
try {
  const logoPath = path.join(publicDir, 'logo-trip-study.png');
  fs.accessSync(logoPath, fs.constants.R_OK);
  console.log('\nLogo file is readable ✅');
} catch (err) {
  console.error('\nError accessing logo file:', err);
}

console.log('\nImage check complete');
