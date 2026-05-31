const https = require('https');

function searchSvgRepo(query) {
    return new Promise((resolve, reject) => {
        https.get(`https://www.svgrepo.com/vectors/${query}/`, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                const match = data.match(/href="(\/show\/\d+\/[^\.]+\.svg)"/);
                if (match) {
                    resolve(`https://www.svgrepo.com${match[1]}`);
                } else {
                    resolve(null);
                }
            });
        }).on('error', reject);
    });
}

async function main() {
    const brands = ["ikea", "herman", "vitra", "knoll", "kartell", "boconcept", "gucci", "prada", "chanel", "hermes", "rolex", "cartier"];
    for (const b of brands) {
        const url = await searchSvgRepo(b);
        console.log(`${b}: ${url}`);
    }
}
main();
