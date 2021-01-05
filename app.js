const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));
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

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname, 'favicon.ico'));
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
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