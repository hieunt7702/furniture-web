const fs = require('fs');
const path = require('path');

const dir = 'd:/Hieudeptraivl/furniture-web/frontend/src/components/home';

fs.readdirSync(dir).forEach(file => {
  if(file.endsWith('.tsx')) {
    let content = fs.readFileSync(path.join(dir, file), 'utf8');
    content = content.replace(/const (\w+Variants) = \{/g, 'const $1: import("framer-motion").Variants = {');
    fs.writeFileSync(path.join(dir, file), content);
  }
});
