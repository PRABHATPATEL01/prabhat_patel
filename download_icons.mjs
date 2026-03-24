import fs from 'fs';
import https from 'https';
import path from 'path';

const icons = [
  { name: 'swift', url: 'https://cdn.simpleicons.org/swift' },
  { name: 'firebase', url: 'https://cdn.simpleicons.org/firebase' },
  { name: 'apple', url: 'https://cdn.simpleicons.org/apple/000000' }, // Apple in black
  { name: 'stripe', url: 'https://cdn.simpleicons.org/stripe' },
  { name: 'git', url: 'https://cdn.simpleicons.org/git' },
  { name: 'googleadmob', url: 'https://cdn.simpleicons.org/googleadmob' }
];

const dest = path.join(process.cwd(), 'public', 'images');

icons.forEach(icon => {
  https.get(icon.url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // Inject width and height to fix Three.js SVG TextureLoader black texture issue
      data = data.replace('<svg ', '<svg width="256px" height="256px" ');
      fs.writeFileSync(path.join(dest, `${icon.name}.svg`), data);
      console.log(`Saved ${icon.name}.svg`);
    });
  });
});
