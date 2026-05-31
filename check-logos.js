const https = require('https');

const domains = ["hermanmiller.com", "ikea.com", "boconcept.com", "kartell.com", "knoll.com", "vitra.com"];

domains.forEach(domain => {
    https.get(`https://logo.clearbit.com/${domain}`, (res) => {
        console.log(`${domain}: ${res.statusCode}`);
    });
});
