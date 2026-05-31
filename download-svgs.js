const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = [
    { name: "ikea", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ikea.svg" },
    { name: "boconcept", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/boconcept.svg" },
    { name: "hermanmiller", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hermanmiller.svg" }
];

const dir = path.join(__dirname, 'frontend', 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

icons.forEach(icon => {
    https.get(icon.url, (res) => {
        if (res.statusCode === 200) {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                fs.writeFileSync(path.join(dir, `${icon.name}.svg`), data);
                console.log(`Saved ${icon.name}.svg`);
            });
        } else {
            console.log(`Failed to download ${icon.name}: ${res.statusCode}`);
        }
    }).on('error', (err) => {
        console.log(`Error on ${icon.name}: ${err.message}`);
    });
});
