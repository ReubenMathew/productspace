const fetch = require('node-fetch')

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    // fetch()
    const fetch = require('node-fetch');

    (async () => {
        const response = await fetch('https://github.com/');
        const body = await response.text();

        console.log(body);
    })();
    res.end(JSON.stringify({h: 'h'}))
}