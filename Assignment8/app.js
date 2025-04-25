'use strict';

const express = require('express');
const app = express();

app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World!');
})

// define endpoint for exercise 1 here

app.get('/math/circle/:r', function (req, res) {
    let radius = req.params['r'];
    const PI = Math.PI;
    const area = PI * radius * radius;
    const circumference = PI * 2 * radius;
    res.json({ area, circumference });
});
// define endpoint for exercise 2 here

app.get('/hello/name', function (req, res) {
    const first = req.query['first'];
    const last = req.query['last'];
    const missing = [];

    if (!first) missing.push('first');
    if (!last) missing.push('last');

    if (missing.length > 0) {
        return res.status(400).send(`Missing Required GET parameters: ${missing.join(', ')}`);
    }

    res.send(`Hello ${first} ${last}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT);