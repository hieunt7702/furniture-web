const https = require('https');
const fs = require('fs');
const path = require('path');

const icons = [
    { name: "herman-miller", url: "https://cdn.worldvectorlogo.com/logos/herman-miller.svg" },
    { name: "ikea", url: "https://cdn.worldvectorlogo.com/logos/ikea-logo.svg" },
    { name: "boconcept", url: "https://cdn.worldvectorlogo.com/logos/boconcept.svg" },
    { name: "kartell", url: "https://cdn.worldvectorlogo.com/logos/kartell.svg" },
    { name: "knoll", url: "https://cdn.worldvectorlogo.com/logos/knoll.svg" },
    { name: "vitra", url: "https://cdn.worldvectorlogo.com/logos/vitra.svg" }
];

const dir = path.join(__dirname, 'frontend', 'public', 'logos');
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

icons.forEach(icon => {
    https.get(icon.url, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
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
