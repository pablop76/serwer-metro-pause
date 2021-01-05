const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use('/favicon.ico', express.static('favicon.ico'));
app.use(express.json());
app.use(bodyParser.json());
let DATA = {
    "time": "22.01.2021",
    "helper": "",
    "pause": [
        {
            "id": 1,
            "station": "Kabaty",
            "data": [["11", "22", "13"], ["21", "23", "56"], ["41", 11, 10]]
        },
        {
            "id": 2,
            "station": "Wilanowska",
            "data": [[11, 32, 30], [21, 20, 54]]
        },
        {
            "id": 3,
            "station": "Politechnika",
            "data": [["11p", "22", "13"], ["21", "23", "56"], ["41", 11, 10]]
        },
        {
            "id": 4,
            "station": "Centrum",
            "data": [[15, 22, 33]]
        },
        {
            "id": 5,
            "station": "Plac Wilsona",
            "data": [[1, 2, 3], [21, 23, 56, 17]]
        },
        {
            "id": 6,
            "station": "Młociny",
            "data": [[53, 27, 43]]
        }
    ]
}

app.get('/', function (req, res) {
    res.send(`
    <!DOCTYPE html>
    <html lang="pl">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Przerwy w metrze</title>
        <link rel="icon" href="favicon.ico">
    </head>
    
    <body>
        <h1>Przerwy</h1>
    </body>
    
    </html>`
    );
});
app.get('/podmiany', function (req, res) {
    res.json(DATA)
});

app.post('/update', function (req, res) {
    DATA = req.body;
    res.send(DATA = req.body)
});

app.listen(port, () => {
    console.log(`Serwer działa na porcie http://localhost:${port}`);
});